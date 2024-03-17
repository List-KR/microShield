import {KnownAdShieldOrigins} from './call-validators/analyzers.js'
import {AdShieldOriginCheck, AdShieldStrictCheck} from './call-validators/suites.js'

type unsafeWindow = typeof window;
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const unsafeWindow: unsafeWindow

// eslint-disable-next-line no-negated-condition
const Win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window

export const CreateDebug = (Namespace: string) => new Proxy(console.debug, {
	apply(Target, ThisArg, Args) {
		Reflect.apply(Target, ThisArg, [`${Namespace}`, ...Args as unknown[]])
	},
})

const Debug = CreateDebug('[microShield:__utils__]')

export const IsSubFrame = () => {
	try {
		return Win.self !== Win.top
	} catch (_error) {
		return true
	}
}

export const GetCallStack = () => {
	const ErrorInstance = new Error()

	if (!ErrorInstance.stack) {
		throw new Error('Stack trace is not available!')
	}

	if (ErrorInstance.stack.includes('@')) {
		const Raw = ErrorInstance.stack.split('\n').slice(2)
		const Trace: string[] = []

		if (navigator.userAgent.includes('Firefox/')) {
			Raw.splice(-1, 1)
		}

		for (const Line of Raw) {
			const Start = Line.indexOf('@') + 1
			const LastColon = Line.lastIndexOf(':')
			const Dump = LastColon < 0 ? Line.slice(Start) : Line.slice(Start, Line.lastIndexOf(':', LastColon - 1))

			Trace.push(Dump)
		}

		return {
			Trace,
			Raw,
		}
	}

	const Raw = ErrorInstance.stack.slice(6).split('\n').slice(2)
	const Trace: string[] = []

	for (const Line of Raw) {
		const Dump = Line.slice(
			(Line.indexOf('(') + 1) || Line.indexOf('at') + 3,
			Line.lastIndexOf(':', Line.lastIndexOf(':') - 1),
		)

		Trace.push(Dump)
	}

	return {
		Trace,
		Raw,
	}
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const MakeProxy = <F extends Function>(F: F, Name = F.name) => {
	const ProxyInstance = new Proxy(F, {
		apply(Target, ThisArg, Args) {
			const CallStack = GetCallStack()

			if (AdShieldOriginCheck(CallStack)) {
				Debug(`apply name=${Name} Args=`, Args, 'stack=', CallStack.Raw)

				throw new Error('microShield')
			}

			return Reflect.apply(Target, ThisArg, Args) as F
		},
		// Prevent ruining the call stack with "explicit" checks
		setPrototypeOf(Target, Value) {
			const CallStack = GetCallStack()

			if (AdShieldStrictCheck(CallStack)) {
				Debug(`setPrototypeOf name=${Name} stack=`, CallStack.Raw)

				throw new Error('microShield')
			}

			return Reflect.setPrototypeOf(Target, Value)
		},
	})

	return ProxyInstance
}

export const DocumentReady = async (DocumentParameter: Document) => {
	if (DocumentParameter.readyState !== 'loading') {
		return true
	}

	return new Promise(Resolve => {
		DocumentParameter.addEventListener('readystatechange', () => {
			Resolve(true)
		})
	})
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const MakeProxyError = <F extends Function>(F: F, Name = F.name) => {
	const ProxyInstance = new Proxy(F, {
		set(Target, Property, NewValue, Receiver) {
			const CallStack = GetCallStack()

			if (AdShieldOriginCheck(CallStack)) {
				Debug(`set name=${Name} Args=`, NewValue, 'stack=', CallStack.Raw)

				throw new Error('Overriding Error is not allowed!')
			}

			return Reflect.set(Target, Property, NewValue, Receiver)
		},
		// Prevent ruining the call stack with "explicit" checks
		setPrototypeOf(Target, Value) {
			const CallStack = GetCallStack()

			if (AdShieldStrictCheck(CallStack)) {
				Debug(`setPrototypeOf name=${Name} stack=`, CallStack.Raw)

				throw new Error('Overriding prototype of Error is not allowed!')
			}

			return Reflect.setPrototypeOf(Target, Value)
		},
	})

	return ProxyInstance
}

const IsEvalFunction = (CallStacks: string[]) => {
	const CallStack = CallStacks.join('\n')
	let ShouldDisable = false
	ShouldDisable ||= ((CallStack.match(/eval/g)?.length ?? -1) >= 4) && (CallStack.includes('NodeList.forEach') ?? false) // Chromium Browser
	ShouldDisable ||= (((/^[A-Za-z0-9/<>]+@https:\/\/.+ line [0-9]+ > eval/.exec(CallStack))?.length ?? -1) >= 1 && (CallStack.match(/\n([a-zA-Z0-9]+)?@https:\/\/.+ line [0-9]+ > eval/g)?.length ?? -1) >= 2) // Firefox Browser
	ShouldDisable ||= ((CallStack.match(/\n([a-zA-Z0-9]+)?@\n/g)?.length ?? -1) >= 2) && (CallStack.includes('forEach@[native code]') ?? false) // Safari Browser
	return ShouldDisable
}

// Function makeProxy + eval
// eslint-disable-next-line @typescript-eslint/ban-types
export const MakeUnsafeProxy = <F extends Function>(F: F, Name = F.name) => {
	const ProxyInstance = new Proxy(F, {
		apply(Target, ThisArg, Args) {
			const CallStack = GetCallStack()

			if (IsEvalFunction(CallStack.Raw) || AdShieldOriginCheck(CallStack)) {
				Debug(`apply name=${Name} Args=`, Args, 'stack=', CallStack.Raw)

				throw new Error('microShield')
			}

			return Reflect.apply(Target, ThisArg, Args) as F
		},
		// Prevent ruining the call stack with "explicit" checks
		setPrototypeOf(Target, Value) {
			const CallStack = GetCallStack()

			if (AdShieldStrictCheck(CallStack)) {
				Debug(`setPrototypeOf name=${Name} stack=`, CallStack.Raw)

				throw new Error('microShield')
			}

			return Reflect.setPrototypeOf(Target, Value)
		},
	})

	return ProxyInstance
}

// Function Args
// eslint-disable-next-line @typescript-eslint/ban-types
export const MakeInlineProxy = <F extends Function>(F: F, Name = F.name) => {
	const ProxyInstance = new Proxy(F, {
		apply(Target, ThisArg, Args) {
			if (Args.length > 0 && KnownAdShieldOrigins.some(Origin => Args.join('\n').includes(Origin))) {
				throw new Error('microShield')
			}

			return Reflect.apply(Target, ThisArg, Args) as F
		},
		// Prevent ruining the call stack with "explicit" checks
		setPrototypeOf(Target, Value) {
			const CallStack = GetCallStack()

			if (AdShieldStrictCheck(CallStack)) {
				Debug(`setPrototypeOf name=${Name} stack=`, CallStack.Raw)

				throw new Error('microShield')
			}

			return Reflect.setPrototypeOf(Target, Value)
		},
	})

	return ProxyInstance
}
