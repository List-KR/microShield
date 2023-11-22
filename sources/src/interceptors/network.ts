import {isAsSource, makeProxy} from '../utils';

export const interceptNetwork = () => {
	window.fetch = makeProxy(window.fetch, isAsSource);

	window.XMLHttpRequest = new Proxy(window.XMLHttpRequest, {
		construct(target, argArray, newTarget) {
			const alt = isAsSource();

			if (typeof alt === 'undefined') {
				return Reflect.construct(target, argArray, newTarget) as XMLHttpRequest;
			}

			return {};
		},
	});
};
