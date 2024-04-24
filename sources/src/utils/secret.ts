import cryptoRandomString from 'crypto-random-string'
import {AdshieldKeywords, IsAdShieldCall} from '../adshield/validators.js'
import {Config} from '../config.js'
import {GenerateCallStack} from './call-stack.js'
import {CreateDebug} from './logger.js'
import {HasSubstringSetsInString} from './string.js'

type unsafeWindow = typeof window
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const unsafeWindow: unsafeWindow

const Win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window

// eslint-disable-next-line @typescript-eslint/ban-types
type ArbitaryObject = object

// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
type Fomulate = ((...args: any[]) => any) & Function

const Debug = CreateDebug('secret')

export const Secret = cryptoRandomString({length: 20})

export type ProtectedFunctionCreationOptions = Partial<{
	Name: string;
	CheckArguments: boolean;
	CheckErrorStack: string[]
	CheckOutputs: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	CheckArgumentFunctions: Array<(argArray: any[]) => boolean>;
}>

const PprintCall = (Name?: string, WasBlocked?: boolean, V?: unknown) => {
	Debug(WasBlocked ? '-' : '+', 'name=' + Name, 'v=', V, 'stack=', GenerateCallStack())
}

export const ProtectFunction = <F extends Fomulate>(F: F, Options: ProtectedFunctionCreationOptions) => new Proxy(F, {
	apply(Target, ThisArg, ArgArray) {
		const E = () => {
			PprintCall(Options.Name, true, ArgArray)

			throw new Error()
		}

		if (IsAdShieldCall()) {
			E()
		}

		if (Options.CheckArguments) {
			for (const Arg of ArgArray.filter(Arg => typeof Arg === 'string') as string[]) {
				if (HasSubstringSetsInString(Arg, AdshieldKeywords, true)) {
					E()
				}
			}

			for (const Arg of ArgArray.filter(Arg => typeof Arg === 'function') as Fomulate[]) {
				if (HasSubstringSetsInString(Arg.toString(), AdshieldKeywords)) {
					E()
				}
			}
		}

		if (Options.CheckErrorStack && HasSubstringSetsInString(location.hostname, Options.CheckErrorStack)) {
			for (const Arg of ArgArray.filter(Arg => Arg instanceof Error) as Error[]) {
				if (HasSubstringSetsInString(Arg.stack ?? '', [...AdshieldKeywords, 'microShield', `@[native code]\nE@${location.href}:`])) {
					E()
				}
			}
		}

		if (Options.CheckArgumentFunctions) {
			for (const CheckFunction of Options.CheckArgumentFunctions) {
				if (!CheckFunction(ArgArray)) {
					E()
				}
			}
		}

		if (Options.CheckOutputs) {
			const Output = Reflect.apply(Target, ThisArg, ArgArray) as string

			if (HasSubstringSetsInString(Output.toLowerCase(), AdshieldKeywords)) {
				E()
			}
		}

		if (Config.Debug) {
			PprintCall(Options.Name, false, ArgArray)
		}

		return Reflect.apply(Target, ThisArg, ArgArray) as unknown
	},
	setPrototypeOf(Target, V) {
		PprintCall(Options.Name, true, V)

		throw new Error()
	}
})

export const UnprotectedFetch = fetch

export const ProtectedDescriptors = new Set<unknown>()

export const ProtectDescriptors = <T extends ArbitaryObject, K extends keyof T>(O: T, Key: K, NewProperty: T[K]) => {
	if (ProtectedDescriptors.size === 0) {
		const DefineProperty = ProtectFunction(Object.defineProperty, {
			CheckArgumentFunctions: [
				// ArgArray => !ProtectedDescriptors.has(ArgArray[0][ArgArray[1]])
			]
		})
		const DefineProperties = ProtectFunction(Object.defineProperties, {
			CheckArgumentFunctions: [
				ArgArray => {
					for (const TargetProperty of Object.keys(ArgArray[1] as ArbitaryObject) as K[]) {
						if (ProtectedDescriptors.has(ArgArray[0][TargetProperty])) {
							return false
						}
					}

					return true
				}
			]
		})

		ProtectedDescriptors.add(DefineProperty)
		ProtectedDescriptors.add(DefineProperties)

		Object.defineProperty(Win.Object, 'defineProperty', {
			value: DefineProperty
		})
		Object.defineProperties(Win.Object, {
			defineProperty: {
				value: DefineProperty
			},
			defineProperties: {
				value: DefineProperties
			}
		})
	}

	Object.defineProperty(O, Key, {
		value: NewProperty
	})

	ProtectedDescriptors.add(NewProperty)
}

type ExtractFunctionPropertyNames<T extends ArbitaryObject> = {
	[P in keyof T]: T[P] extends Fomulate ? P : never
}[keyof T]

export const ProtectFunctionDescriptors = <T extends ArbitaryObject, K extends ExtractFunctionPropertyNames<T>>(O: T, Key: K, Options?: ProtectedFunctionCreationOptions) => {
	const Property = O[Key] as T[K] & Fomulate

	if (Options === undefined) {
		Options = {}
	}

	if (Options.Name === undefined) {
		Options.Name = Property.name
	}

	ProtectDescriptors(O, Key, ProtectFunction(Property, Options) as T[K])
}