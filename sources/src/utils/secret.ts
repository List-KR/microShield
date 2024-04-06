import {adshieldKeywords, isAdShieldCall} from '../adshield/validators.js';
import {config} from '../config.js';
import {generateCallStack} from './call-stack.js';
import {createDebug} from './logger.js';
import {hasSubstringSetsInString} from './string.js';

// eslint-disable-next-line @typescript-eslint/ban-types
type ArbitaryObject = object;

// eslint-disable-next-line @typescript-eslint/ban-types
type Fomulate = ((...args: any[]) => any) & Function;

const debug = createDebug('secret');

export const secret = (Date.now() * Math.random()).toString(36);

export type ProtectedFunctionCreationOptions = Partial<{
	name: string;
	checkArguments: boolean;
	checkOutputs: boolean;
	checkArgumentFunctions: Array<(argArray: any[]) => boolean>;
}>;

const pprintCall = (name?: string, wasBlocked?: boolean, v?: unknown) => {
	debug(wasBlocked ? '-' : '+', 'name=' + name, 'v=', v, 'stack=', generateCallStack());
};

export const protectFunction = <F extends Fomulate>(f: F, options: ProtectedFunctionCreationOptions) => new Proxy(f, {
	apply(target, thisArg, argArray) {
		const e = () => {
			pprintCall(options.name, true, argArray);

			throw new Error();
		};

		if (isAdShieldCall()) {
			e();
		}

		if (options.checkArguments) {
			for (const arg of argArray.filter(arg => typeof arg === 'string') as string[]) {
				if (hasSubstringSetsInString(arg, adshieldKeywords)) {
					e();
				}
			}
		}

		if (options.checkArgumentFunctions) {
			for (const checkFunction of options.checkArgumentFunctions) {
				if (!checkFunction(argArray)) {
					e();
				}
			}
		}

		if (options.checkOutputs) {
			const output = Reflect.apply(target, thisArg, argArray) as string;

			if (hasSubstringSetsInString(output.toLowerCase(), adshieldKeywords)) {
				e();
			}
		}

		if (config.debug) {
			pprintCall(options.name, false, argArray);
		}

		return Reflect.apply(target, thisArg, argArray) as unknown;
	},
	setPrototypeOf(target, v) {
		pprintCall(options.name, true, v);

		throw new Error();
	},
});

export const protectedDescriptors = new Set<unknown>();

export const protectDescriptors = <T extends ArbitaryObject, K extends keyof T>(o: T, key: K, newProperty: T[K]) => {
	if (protectedDescriptors.size === 0) {
		const defineProperty = protectFunction(Object.defineProperty, {
			checkArgumentFunctions: [
				argArray => !protectedDescriptors.has(argArray[0][argArray[1]]),
			],
		});
		const defineProperties = protectFunction(Object.defineProperties, {
			checkArgumentFunctions: [
				argArray => {
					for (const targetProperty of Object.keys(argArray[1] as ArbitaryObject) as K[]) {
						if (protectedDescriptors.has(argArray[0][targetProperty])) {
							return false;
						}
					}

					return true;
				},
			],
		});

		protectedDescriptors.add(defineProperties);
		protectedDescriptors.add(defineProperty);

		Object.defineProperty(window.Object, 'defineProperty', {
			get() {
				return defineProperty;
			},
		});
		Object.defineProperties(window.Object, {
			defineProperty: {
				get() {
					return defineProperty;
				},
			},
			defineProperties: {
				get() {
					return defineProperties;
				},
			},
		});
	}

	Object.defineProperty(o, key, {
		value: newProperty,
	});

	protectedDescriptors.add(newProperty);
};

type ExtractFunctionPropertyNames<T extends ArbitaryObject> = {
	[P in keyof T]: T[P] extends Fomulate ? P : never
}[keyof T];

export const protectFunctionDescriptors = <T extends ArbitaryObject, K extends ExtractFunctionPropertyNames<T>>(o: T, key: K, options?: ProtectedFunctionCreationOptions) => {
	const property = o[key] as T[K] & Fomulate;

	if (options === undefined) {
		options = {};
	}

	if (options.name === undefined) {
		options.name = property.name;
	}

	protectDescriptors(o, key, protectFunction(property, options) as T[K]);
};