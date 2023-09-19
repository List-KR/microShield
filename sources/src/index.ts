import {useNetworkInterceptor} from './interceptors/network.js';
import {useEvalInterceptor} from './interceptors/eval.js';
import {baseshower} from './loaders/baseshower.js';
import {shortwave} from './loaders/shortwave.js';
import {tinywave} from './loaders/ztinywave.js';
import {useDisableMethod, useIsSubframe} from './utils.js';

const bootstrap = () => {
	useEvalInterceptor();
	useNetworkInterceptor();
	useDisableMethod(Element.prototype, 'remove');
	useDisableMethod(Element.prototype, 'removeChild');
	useDisableMethod(Element.prototype, 'append');
	useDisableMethod(Element.prototype, 'appendChild');
	useDisableMethod(Element.prototype, 'insertBefore');
	useDisableMethod(Element.prototype, 'attachShadow');
	useDisableMethod(document, 'createElement');
	useDisableMethod(Object, 'defineProperty');
	useDisableMethod(Object, 'defineProperties');

	if (useIsSubframe()) {
		return;
	}

	void baseshower();
	void shortwave();
	void tinywave();
};

bootstrap();
