import {basedrop} from './loaders/basedrop.js';
import {tinywave} from './loaders/ztinywave.js';
import {documentReady, getCallStack, makeProxy, makeProxyError, makeUnsafeProxy, makeInlineProxy} from './utils.js';
import {adShieldOriginCheck, adShieldStrictCheck} from './call-validators/suites.js';
import {adShieldCallAnalyzer, knownAdShieldOrigins} from './call-validators/analyzers.js';
import {isAdShieldObj} from './obj-validators/index.js';
import {isNotResourceInfectedByAdShield} from './call-validators/analyzers.js';

// eslint-disable-next-line @typescript-eslint/naming-convention
type unsafeWindow = typeof window;
// eslint-disable-next-line @typescript-eslint/no-redeclare
declare const unsafeWindow: unsafeWindow;

// eslint-disable-next-line no-negated-condition
const win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;

const bootstrap = () => {
	win.Element.prototype.remove = makeUnsafeProxy(win.Element.prototype.remove, 'Element.prototype.remove');
	win.Element.prototype.removeChild = makeUnsafeProxy(win.Element.prototype.removeChild, 'Element.prototype.removeChild');
	win.Element.prototype.insertAdjacentHTML = makeProxy(win.Element.prototype.insertAdjacentHTML, 'Element.prototype.insertAdjacentHTML');
	win.Element.prototype.setAttribute = makeProxy(win.Element.prototype.setAttribute, 'Element.prototype.setAttribute');
	win.alert = makeInlineProxy(win.alert, 'alert');
	win.HTMLScriptElement.prototype.setAttribute = new Proxy(win.HTMLScriptElement.prototype.setAttribute, {
		apply(target, thisArg, argArray: [string, string]) {
			if (argArray[0] === 'src' && typeof argArray[1] === 'string') {
				if (adShieldCallAnalyzer.analyze(argArray[1])) {
					return;
				}
			}

			Reflect.apply(target, thisArg, argArray);
		},
		setPrototypeOf(_target, _v) {
			return false;
		},
	});
	win.EventTarget.prototype.addEventListener = makeProxy(win.EventTarget.prototype.addEventListener, 'EventTarget.prototype.addEventListener');
	win.Function.prototype.apply = makeProxy(win.Function.prototype.apply, 'Function.prototype.apply');
	// Prevent messaging to inline
	win.MessagePort.prototype.postMessage = makeProxy(win.MessagePort.prototype.postMessage, 'MessagePort.prototype.postMessage');
	win.document.createElement = makeProxy(win.document.createElement, 'document.createElement');
	// Prevent useless timer apis for performance
	win.setInterval = makeProxy(win.setInterval, 'setInterval');
	win.setTimeout = makeProxy(win.setTimeout, 'setInterval');
	win.decodeURIComponent = new Proxy(win.decodeURIComponent, {
		apply(target, thisArg, argArray: [string]) {
			const payload = Reflect.apply(target, thisArg, argArray);

			for (const domain of knownAdShieldOrigins) {
				if (payload.includes(domain)) {
					return '';
				}
			}

			return payload;
		},
	});

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
			if (adShieldStrictCheck(getCallStack()) && isNotResourceInfectedByAdShield(getCallStack())) {
				return {};
			}

			return Reflect.construct(target, argArray, newTarget) as XMLHttpRequest;
		},
	});

	// Error prototype
	win.Error = makeProxyError(win.Error, 'Error');

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
