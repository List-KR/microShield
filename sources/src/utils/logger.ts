export const CreateDebug = (Namespace: string) => {
	const Header = `[asdefuser:${Namespace}]`

	return new Proxy(console.debug, {
		apply(Target, ThisArg, ArgArray) {
			Reflect.apply(Target, ThisArg, [Header, ...ArgArray as unknown[]])
		}
	})
}