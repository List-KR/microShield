import {useNetworkInterceptor} from './interceptors/network.js';
import {interceptEval} from './interceptors/eval.js';
import {tinywave} from './loaders/ztinywave.js';
import {useDisableMethod, useIsSubframe} from './utils.js';
import {basedrop} from './loaders/basedrop.js';

const bootstrap = () => {
	interceptEval();
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
	useDisableMethod(window, 'Promise');

	if (useIsSubframe()) {
		return;
	}

	void basedrop();
	void tinywave();
};

bootstrap();
