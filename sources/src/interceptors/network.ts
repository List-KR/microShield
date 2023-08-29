import {useAsSourceFeedback, useDebug, useDisableMethod, useSwapMethod} from '../utils';

const debug = useDebug('[microShield:networkInterceptor]');

export const useNetworkInterceptor = () => {
	useDisableMethod(window, 'fetch');
	useSwapMethod(window, 'XMLHttpRequest', (Original: new () => XMLHttpRequest, _root, name, caller) => {
		if (!useAsSourceFeedback(name, caller)) {
			return false;
		}

		return new Proxy(Original, {
			construct(target, argArray, newTarget) {
				const xhr = Reflect.construct(target, argArray, newTarget) as XMLHttpRequest;

				xhr.open = (method: string, url: string) => {
					debug(`XMLHttpRequest:open:null ${method} ${url}`);
				};

				xhr.send = () => {
					debug('XMLHttpRequest:send:null');
				};

				return xhr;
			},
		});
	});
};
