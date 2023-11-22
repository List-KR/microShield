import {createDebug} from '../utils';

const debug = createDebug('[microShield:storageInterceptor]');

export const interceptStorage = () => {
	localStorage.removeItem('as_profile_cache');
	localStorage.removeItem('adshield-analytics-uuid');

	Storage.prototype.setItem = new Proxy(Storage.prototype.setItem, {
		apply(target, thisArg, argArray) {
			const [key] = argArray as [string, string];

			if (key === 'as_profile_cache' || key === 'adshield-analytics-uuid') {
				debug('prevented storage set request of key=' + key);

				return true;
			}

			return Reflect.apply(target, thisArg, argArray) as unknown;
		},
	});
};
