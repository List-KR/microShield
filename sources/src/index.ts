import {BaseDrop} from './loaders/basedrop.js'
import {Tinywave} from './loaders/ztinywave.js'
import {DocumentReady, GetCallStack, MakeProxy, MakeProxyError, MakeUnsafeProxy, MakeInlineProxy} from './utils.js'
import {AdShieldOriginCheck, AdShieldStrictCheck} from './call-validators/suites.js'
import {AdShieldCallAnalyzer, KnownAdShieldOrigins} from './call-validators/analyzers.js'
import {IsAdShieldObj} from './obj-validators/index.js'

type unsafeWindow = typeof window
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const unsafeWindow: unsafeWindow

// eslint-disable-next-line no-negated-condition
const Win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window

const Bootstrap = () => {
	Win.Element.prototype.remove = MakeUnsafeProxy(Win.Element.prototype.remove, 'Element.prototype.remove')
	Win.Element.prototype.removeChild = MakeUnsafeProxy(Win.Element.prototype.removeChild, 'Element.prototype.removeChild')
	Win.Element.prototype.insertAdjacentHTML = MakeProxy(Win.Element.prototype.insertAdjacentHTML, 'Element.prototype.insertAdjacentHTML')
	Win.Element.prototype.setAttribute = MakeProxy(Win.Element.prototype.setAttribute, 'Element.prototype.setAttribute')
	Win.alert = MakeInlineProxy(Win.alert, 'alert')
	Win.HTMLScriptElement.prototype.setAttribute = new Proxy(Win.HTMLScriptElement.prototype.setAttribute, {
		apply(Target, ThisArg, Args: [string, string]) {
			if (Args[0] === 'src' && typeof Args[1] === 'string') {
				if (AdShieldCallAnalyzer.analyze(Args[1])) {
					return
				}
			}

			Reflect.apply(Target, ThisArg, Args)
		},
		setPrototypeOf(Target, V) {
			return false
		}
	})
	Win.EventTarget.prototype.addEventListener = MakeProxy(Win.EventTarget.prototype.addEventListener, 'EventTarget.prototype.addEventListener')
	// Prevent messaging to inline
	Win.MessagePort.prototype.postMessage = MakeProxy(Win.MessagePort.prototype.postMessage, 'MessagePort.prototype.postMessage')
	Win.document.createElement = MakeProxy(Win.document.createElement, 'document.createElement')
	// Prevent useless timer apis for performance
	Win.setInterval = MakeProxy(Win.setInterval, 'setInterval')
	Win.setTimeout = MakeProxy(Win.setTimeout, 'setInterval')
	Win.decodeURIComponent = new Proxy(Win.decodeURIComponent, {
		apply(Target, ThisArg, Args: [string]) {
			const Payload = Reflect.apply(Target, ThisArg, Args)

			for (const Domain of KnownAdShieldOrigins) {
				if (Payload.includes(Domain)) {
					return ''
				}
			}

			return Payload
		}
	})

	// Local Storage
	localStorage.removeItem('as_profile_cache')
	localStorage.removeItem('adshield-analytics-uuid')

	Win.Storage.prototype.setItem = new Proxy(Win.Storage.prototype.setItem, {
		apply(Target, ThisArg, Args) {
			const [Key] = Args as [string, string]

			if (AdShieldStrictCheck(GetCallStack()) || Key.startsWith('as_') || Key.startsWith('as-') || Key.includes('adshield')) {
				throw new DOMException('QuotaExceededError')
			}

			return Reflect.apply(Target, ThisArg, Args) as unknown
		}
	})

	// Network/XHR
	Win.fetch = MakeProxy(Win.fetch, 'fetch')
	Win.XMLHttpRequest = new Proxy(Win.XMLHttpRequest, {
		construct(Target, Args, NewTarget) {
			if (AdShieldStrictCheck(GetCallStack())) {
				return {}
			}

			return Reflect.construct(Target, Args, NewTarget) as XMLHttpRequest
		}
	})

	// Error prototype
	Win.Error = MakeProxyError(Win.Error, 'Error')

	if (Win.navigator.vendor.includes('Apple')) {
		// Deserialization
		Win.JSON.parse = new Proxy(Win.JSON.parse, {
			apply(Target, ThisArg, Args) {
				const Obj = Reflect.apply(Target, ThisArg, Args) as unknown

				if (AdShieldOriginCheck(GetCallStack()) || IsAdShieldObj(Obj)) {
					return null
				}

				return Obj
			},
			set() {
				throw new Error('Overriding JSON.parse is not allowed!')
			}
		})

		void DocumentReady(document).then(() => {
			// Remove already created ad elements
			for (const TargetedElement of document.querySelectorAll('iframe[src="about:blank"]')) {
				TargetedElement.remove()
			}

			const Observer = new MutationObserver(Records => {
				for (const Record of Records) {
					for (const AddedNode of Record.addedNodes) {
						if (AddedNode instanceof HTMLIFrameElement && AddedNode.getAttribute('src') === 'about:blank') {
							AddedNode.remove()
						}
					}
				}
			})

			Observer.observe(document.documentElement ?? document.body, {
				childList: true,
				subtree: true
			})

			document.head.insertAdjacentHTML('afterbegin', '<style>iframe[src="about:blank"]{display:none!important}</style>')
		})
	}

	void BaseDrop()
	void Tinywave()
}

Bootstrap()
