import {adShieldOriginCheck, adShieldStrictCheck} from './call-validators/suites';

// eslint-disable-next-line @typescript-eslint/naming-convention
type unsafeWindow = typeof window;
// eslint-disable-next-line @typescript-eslint/no-redeclare
declare const unsafeWindow: unsafeWindow;

// eslint-disable-next-line no-negated-condition
const win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;

export const createDebug = (namespace: string) => new Proxy(console.debug, {
	apply(target, thisArg, argArray) {
		Reflect.apply(target, thisArg, [`${namespace}`, ...argArray as unknown[]]);
	},
});

const debug = createDebug('[microShield:__utils__]');

export const isSubFrame = () => {
	try {
		return win.self !== win.top;
	} catch (_error) {
		return true;
	}
};

export const getCallStack = () => {
	const e = new Error();

	if (!e.stack) {
		throw new Error('Stack trace is not available!');
	}

	if (e.stack.includes('@')) {
		const raw = e.stack.split('\n').slice(2);
		const trace: string[] = [];

		if (navigator.userAgent.includes('Firefox/')) {
			raw.splice(-1, 1);
		}

		for (const line of raw) {
			const start = line.indexOf('@') + 1;
			const lastColon = line.lastIndexOf(':');
			const dump = lastColon < 0 ? line.slice(start) : line.slice(start, line.lastIndexOf(':', lastColon - 1));

			trace.push(dump);
		}

		return {
			trace,
			raw,
		};
	}

	const raw = e.stack.slice(6).split('\n').slice(2);
	const trace: string[] = [];

	for (const line of raw) {
		const dump = line.slice(
			(line.indexOf('(') + 1) || line.indexOf('at') + 3,
			line.lastIndexOf(':', line.lastIndexOf(':') - 1),
		);

		trace.push(dump);
	}

	return {
		trace,
		raw,
	};
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const makeProxy = <F extends Function>(f: F, name = f.name) => {
	const proxy = new Proxy(f, {
		apply(target, thisArg, argArray) {
			const callStack = getCallStack();

			if (adShieldOriginCheck(callStack)) {
				debug(`apply name=${name} argArray=`, argArray, 'stack=', callStack.raw);

				throw new Error('microShield');
			}

			return Reflect.apply(target, thisArg, argArray) as F;
		},
		// Prevent ruining the call stack with "explicit" checks
		setPrototypeOf(target, v) {
			const callStack = getCallStack();

			if (adShieldStrictCheck(callStack)) {
				debug(`setPrototypeOf name=${name} stack=`, callStack.raw);

				throw new Error('microShield');
			}

			return Reflect.setPrototypeOf(target, v);
		},
	});

	return proxy;
};

export const documentReady = async (document: Document) => {
	if (document.readyState !== 'loading') {
		return true;
	}

	return new Promise(resolve => {
		document.addEventListener('readystatechange', () => {
			resolve(true);
		});
	});
};
