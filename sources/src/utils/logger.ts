export const createDebug = (namespace: string) => {
	const header = `[asdefuser:${namespace}]`;

	return new Proxy(console.debug, {
		apply(target, thisArg, argArray) {
			Reflect.apply(target, thisArg, [header, ...argArray as unknown[]]);
		},
	});
};