import {protectFunctionDescriptors, secret} from './secret.js';

const protectedPrefix = 'asdf-';

export const protectStorageApis = () => {
	protectFunctionDescriptors(window.Storage.prototype, 'setItem', {
		checkArgumentFunctions: [
			argArray => !(argArray[0] as string).startsWith(protectedPrefix) || argArray[2] === secret,
		],
	});
	protectFunctionDescriptors(window.Storage.prototype, 'removeItem', {
		checkArgumentFunctions: [
			argArray => !(argArray[0] as string).startsWith(protectedPrefix) || argArray[1] === secret,
		],
	});
	protectFunctionDescriptors(window.Storage.prototype, 'clear');
};

export const pull = (key: string): string | undefined =>
// @ts-expect-error secret is used to validate internal calls
	localStorage.getItem(protectedPrefix + key, secret);

export const push = (key: string, value: string): void => {
	// @ts-expect-error secret is used to validate internal calls
	localStorage.setItem(protectedPrefix + key, value, secret);
};