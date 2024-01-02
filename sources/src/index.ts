import {basedrop} from './loaders/basedrop.js';
import {tinywave} from './loaders/ztinywave.js';
import {documentReady, getCallStack, makeProxy} from './utils.js';
import {adShieldOriginCheck, adShieldStrictCheck} from './call-validators/suites.js';
import {isAdShieldObj} from './obj-validators/index.js';

const bootstrap = () => {
	Element.prototype.remove = makeProxy(Element.prototype.remove, 'Element.prototype.remove');
	Element.prototype.removeChild = makeProxy(Element.prototype.removeChild, 'Element.prototype.removeChild');
	Element.prototype.insertAdjacentHTML = makeProxy(Element.prototype.insertAdjacentHTML, 'Element.prototype.insertAdjacentHTML');
	Element.prototype.setAttribute = makeProxy(Element.prototype.setAttribute, 'Element.prototype.setAttribute');
	EventTarget.prototype.addEventListener = makeProxy(EventTarget.prototype.addEventListener, 'EventTarget.prototype.addEventListener');
	// Prevent messaging to inline
	MessagePort.prototype.postMessage = makeProxy(MessagePort.prototype.postMessage, 'MessagePort.prototype.postMessage');
	document.createElement = makeProxy(document.createElement, 'document.createElement');
	// Prevent useless timer apis for performance
	window.setInterval = makeProxy(setInterval, 'setInterval');
	window.setTimeout = makeProxy(setTimeout, 'setInterval');

	// Local Storage
	localStorage.removeItem('as_profile_cache');
	localStorage.removeItem('adshield-analytics-uuid');

	Storage.prototype.setItem = new Proxy(Storage.prototype.setItem, {
		apply(target, thisArg, argArray) {
			const [key] = argArray as [string, string];

			if (adShieldStrictCheck(getCallStack()) || key.startsWith('as_') || key.startsWith('as-') || key.includes('adshield')) {
				throw new DOMException('QuotaExceededError');
			}

			return Reflect.apply(target, thisArg, argArray) as unknown;
		},
	});

	// Network/XHR
	window.fetch = makeProxy(fetch, 'fetch');
	window.XMLHttpRequest = new Proxy(XMLHttpRequest, {
		construct(target, argArray, newTarget) {
			if (adShieldStrictCheck(getCallStack())) {
				return {};
			}

			return Reflect.construct(target, argArray, newTarget) as XMLHttpRequest;
		},
	});

	// Error prototype
	window.Error = new Proxy(Error, {
		set() {
			throw new Error('Overriding Error is not allowed!');
		},
		setPrototypeOf() {
			throw new Error('Overriding prototype of Error is not allowed!');
		},
	});

	if (navigator.vendor.includes('Apple')) {
		// Deserialization
		JSON.parse = new Proxy(JSON.parse, {
			apply(target, thisArg, argArray) {
				const obj = Reflect.apply(target, thisArg, argArray) as unknown;

				if (adShieldOriginCheck(getCallStack()) || isAdShieldObj(obj)) {
					return null;
				}

				return obj;
			},
			set() {
				throw new Error('Overriding JSON.parse is not allowed!');
			},
		});

		void documentReady(document).then(() => {
			// Remove already created ad elements
			for (const el of document.querySelectorAll('iframe[src="about:blank"]')) {
				el.remove();
			}

			const observer = new MutationObserver(records => {
				for (const record of records) {
					for (const node of record.addedNodes) {
						if (node instanceof HTMLIFrameElement && node.getAttribute('src') === 'about:blank') {
							node.remove();
						}
					}
				}
			});

			observer.observe(document.documentElement ?? document.body, {
				childList: true,
				subtree: true,
			});

			document.head.insertAdjacentHTML('afterbegin', '<style>iframe[src="about:blank"]{display:none!important}</style>');
		});
	}

	void basedrop();
	void tinywave();
};

bootstrap();
