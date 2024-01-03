import {basedrop} from './loaders/basedrop.js';
import {tinywave} from './loaders/ztinywave.js';
import {documentReady, getCallStack, makeProxy} from './utils.js';
import {adShieldOriginCheck, adShieldStrictCheck} from './call-validators/suites.js';
import {isAdShieldObj} from './obj-validators/index.js';

// eslint-disable-next-line @typescript-eslint/naming-convention
type unsafeWindow = typeof window;
// eslint-disable-next-line @typescript-eslint/no-redeclare
declare const unsafeWindow: unsafeWindow;

// eslint-disable-next-line no-negated-condition
const win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;

const bootstrap = () => {
	win.Element.prototype.remove = makeProxy(win.Element.prototype.remove, 'Element.prototype.remove');
	win.Element.prototype.removeChild = makeProxy(win.Element.prototype.removeChild, 'Element.prototype.removeChild');
	win.Element.prototype.insertAdjacentHTML = makeProxy(win.Element.prototype.insertAdjacentHTML, 'Element.prototype.insertAdjacentHTML');
	win.Element.prototype.setAttribute = makeProxy(win.Element.prototype.setAttribute, 'Element.prototype.setAttribute');
	win.EventTarget.prototype.addEventListener = makeProxy(win.EventTarget.prototype.addEventListener, 'EventTarget.prototype.addEventListener');
	// Prevent messaging to inline
	win.MessagePort.prototype.postMessage = makeProxy(win.MessagePort.prototype.postMessage, 'MessagePort.prototype.postMessage');
	win.document.createElement = makeProxy(win.document.createElement, 'document.createElement');
	// Prevent useless timer apis for performance
	win.setInterval = makeProxy(win.setInterval, 'setInterval');
	win.setTimeout = makeProxy(win.setTimeout, 'setInterval');

	// Local Storage
	localStorage.removeItem('as_profile_cache');
	localStorage.removeItem('adshield-analytics-uuid');

	win.Storage.prototype.setItem = new Proxy(win.Storage.prototype.setItem, {
		apply(target, thisArg, argArray) {
			const [key] = argArray as [string, string];

			if (adShieldStrictCheck(getCallStack()) || key.startsWith('as_') || key.startsWith('as-') || key.includes('adshield')) {
				throw new DOMException('QuotaExceededError');
			}

			return Reflect.apply(target, thisArg, argArray) as unknown;
		},
	});

	// Network/XHR
	win.fetch = makeProxy(win.fetch, 'fetch');
	win.XMLHttpRequest = new Proxy(win.XMLHttpRequest, {
		construct(target, argArray, newTarget) {
			if (adShieldStrictCheck(getCallStack())) {
				return {};
			}

			return Reflect.construct(target, argArray, newTarget) as XMLHttpRequest;
		},
	});

	// Error prototype
	win.Error = new Proxy(win.Error, {
		set() {
			throw new Error('Overriding Error is not allowed!');
		},
		setPrototypeOf() {
			throw new Error('Overriding prototype of Error is not allowed!');
		},
	});

	if (win.navigator.vendor.includes('Apple')) {
		// Deserialization
		win.JSON.parse = new Proxy(win.JSON.parse, {
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
