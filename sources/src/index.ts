import {interceptNetwork} from './interceptors/network.js';
import {interceptStorage} from './interceptors/storage.js';
import {basedrop} from './loaders/basedrop.js';
import {tinywave} from './loaders/ztinywave.js';
import {isAsSource, isSubFrame, makeProxy} from './utils.js';

const bootstrap = () => {
	if (isSubFrame()) {
		return;
	}

	interceptNetwork();
	interceptStorage();
	Element.prototype.remove = makeProxy(Element.prototype.remove, isAsSource);
	Element.prototype.removeChild = makeProxy(Element.prototype.removeChild, isAsSource);
	Element.prototype.append = makeProxy(Element.prototype.append, isAsSource);
	Element.prototype.appendChild = makeProxy(Element.prototype.appendChild, isAsSource);
	Element.prototype.insertBefore = makeProxy(Element.prototype.insertBefore, isAsSource);
	Element.prototype.insertAdjacentHTML = makeProxy(Element.prototype.insertAdjacentHTML, isAsSource);
	Element.prototype.insertAdjacentText = makeProxy(Element.prototype.insertAdjacentText, isAsSource);
	EventTarget.prototype.addEventListener = makeProxy(EventTarget.prototype.addEventListener, isAsSource);
	MessagePort.prototype.postMessage = makeProxy(MessagePort.prototype.postMessage, isAsSource);
	Object.defineProperty = makeProxy(Object.defineProperty, isAsSource);
	Object.defineProperties = makeProxy(Object.defineProperties, isAsSource);
	document.createElement = makeProxy(document.createElement, isAsSource);

	void basedrop();
	void tinywave();
};

bootstrap();
