import {ProtectFunctionDescriptors, Secret} from './secret.js'

const ProtectedPrefix = 'asdf-'

export const ProtectStorageApis = () => {
	ProtectFunctionDescriptors(window.Storage.prototype, 'setItem', {
		CheckArgumentFunctions: [
			ArgArray => !(ArgArray[0] as string).startsWith(ProtectedPrefix) || ArgArray[2] === Secret
		]
	})
	ProtectFunctionDescriptors(window.Storage.prototype, 'removeItem', {
		CheckArgumentFunctions: [
			ArgArray => !(ArgArray[0] as string).startsWith(ProtectedPrefix) || ArgArray[1] === Secret
		]
	})
	ProtectFunctionDescriptors(window.Storage.prototype, 'clear')
}

export const Pull = (Key: string): string | undefined =>
// @ts-expect-error secret is used to validate internal calls
	localStorage.getItem(ProtectedPrefix + Key, Secret)

export const Push = (Key: string, Value: string): void => {
	// @ts-expect-error secret is used to validate internal calls
	localStorage.setItem(ProtectedPrefix + Key, Value, Secret)
}