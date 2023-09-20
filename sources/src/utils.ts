export const useDebug = (namespace: string) => new Proxy(console.debug, {
	apply(target, thisArg, argArray) {
		Reflect.apply(target, thisArg, [`${namespace} (${location.href})`, ...argArray as unknown[]]);
	},
});

const debug = useDebug('[microShield:utils]');

export const secret = Math.random().toString(36).slice(2);

export const useIsSubframe = () => {
	try {
		return window.self !== window.top;
	} catch (_error) {
		return true;
	}
};

export const useCaller = () => {
	try {
		throw new Error('feedback');
	} catch (error: unknown) {
		if (!(error instanceof Error) || !error.stack) {
			throw new Error('Failed to validate feedback function or stack trace is not available!');
		}

		let self = '';

		for (const line of error.stack.split('\n').slice(1)) {
			const protocolEndAt = line.indexOf('//');

			if (protocolEndAt < 0) {
				continue;
			}

			const endAt = line.indexOf(':', protocolEndAt);

			if (endAt < 0) {
				continue;
			}

			const source = line.slice(protocolEndAt + 2, endAt);

			if (!self) {
				self = source;

				continue;
			}

			if (source === self) {
				continue;
			}

			return source;
		}

		return error.stack;
	}
};

export const useAsSourceFeedback = (name: string, caller: string) => {
	if (caller.includes(location.host)) {
		return false;
	}

	if (caller.includes('script.min.js') || caller.includes('loader.min.js')) {
		debug(`useAsSourceFeedback name=${name} caller=${caller}`);

		return true;
	}

	return false;
};

type ThisWindow = Window & typeof globalThis;
type PermitableAsRoot = Record<PropertyKey, unknown> | ThisWindow | Document | Element | Node | ObjectConstructor;

const createMethodHookEntries = (): Array<{root: PermitableAsRoot; name: PropertyKey; descriptor?: PropertyDescriptor}> => [];

const __useSwapMethodEntries = createMethodHookEntries();

export const usePropertyDescriptor = () => {
	const alt = (root: PermitableAsRoot, name: PropertyKey) => {
		debug(`usePropertyDescriptor name=${name.toString()}`);

		// @ts-expect-error Use secret to filter out
		return Object.getOwnPropertyDescriptor(root, name, secret);
	};

	if (__useSwapMethodEntries.length) {
		return alt;
	}

	const original = Object.getOwnPropertyDescriptor;

	__useSwapMethodEntries.push({
		root: Object,
		name: 'getOwnPropertyDescriptor',
		descriptor: original(Object, 'getOwnPropertyDescriptor'),
	});

	Object.defineProperties(Object, {
		getOwnPropertyDescriptor: {
			get() {
				return new Proxy(original, {
					apply(target, thisArg, argArray) {
						const [o, p, access] = argArray as [PermitableAsRoot, PropertyKey, string];

						if (access === secret) {
							return Reflect.apply(target, thisArg, [o, p]);
						}

						for (const entry of __useSwapMethodEntries) {
							if (entry.descriptor && entry.root === o && entry.name === p) {
								debug(`usePropertyDescriptor name=${entry.name.toString()} mocked=true`);

								return entry.descriptor ?? Reflect.apply(target, thisArg, [o, p]);
							}
						}

						return Reflect.apply(target, thisArg, [o, p]);
					},
				});
			},
		},
	});

	return alt;
};

export const useSwapMethod = <Root extends PermitableAsRoot>(
	root: Root,
	name: keyof Root,
	feedback: (original: Root[keyof Root], root: Root, name: string, caller: string) => false | Root[keyof Root],
) => {
	const getOwnPropertyDescriptor = usePropertyDescriptor();

	for (const entry of __useSwapMethodEntries) {
		if (entry.root === root && entry.name === name) {
			debug(`useSwapMethod name=${name.toString()} duplicated=true`);

			return;
		}
	}

	let target = root[name];

	Object.defineProperty(root, name, {
		get() {
			if (typeof feedback !== 'function') {
				return target;
			}

			const useSwap = feedback(target, root, name.toString(), useCaller());

			if (!useSwap) {
				return target;
			}

			return useSwap;
		},
		set(v: Root[keyof Root]) {
			if (typeof feedback === 'function' && feedback(target, root, name.toString(), useCaller())) {
				target = v;
			}
		},
	});

	__useSwapMethodEntries.push({
		root,
		name,
		descriptor: getOwnPropertyDescriptor(root, name),
	});

	debug(`useSwapMethod name=${name.toString()}`);
};

export const useDisableMethod = <Root extends PermitableAsRoot>(
	root: Root,
	name: keyof Root,
	feedback: (name: string, caller: string) => boolean = useAsSourceFeedback,
) => {
	useSwapMethod(root, name, (_original, _root, name, caller) => {
		let shouldDisable = true;

		if (typeof feedback === 'function') {
			shouldDisable = feedback(name, caller);
		}

		const errorSrack = new Error().stack ?? '';
		if (name === 'remove' && (/(@|Error:|injectedScript)/.test(caller) || (/(@|^Error|injectedScript)/.test(errorSrack) && location.href.includes(caller)))) { // Safari Chromium Firefox
			[caller, errorSrack].forEach(logger => {
				shouldDisable ||= ((logger.match(/eval/g)?.length ?? -1) >= 4) && (logger.includes('NodeList.forEach') ?? false); // Chromium Browser
				shouldDisable ||= /injectedScript line [0-9]+ > eval$/.exec(logger) !== null; // Firefox Browser
				shouldDisable ||= ((logger.match(/\n@/g)?.length ?? -1) >= 2) && (logger.includes('forEach@[native code]') ?? false); // Safari Browser
			});
		}

		if (shouldDisable) {
			throw new TypeError(`${name} is not accessible`);
		}

		return false;
	});
};

export const useDocumentReady = async (document: Document) => {
	if (document.readyState !== 'loading') {
		return true;
	}

	return new Promise(resolve => {
		document.addEventListener('readystatechange', () => {
			resolve(true);
		});
	});
};

export const useBannedKeywords = (data: string) => data.includes('loader.min.js') && data.includes('as-async') && /try(.|\n)*{(.|\n)*}(.|\n)*catch(.|\n)*{(.|\n)*}/.test(data);
