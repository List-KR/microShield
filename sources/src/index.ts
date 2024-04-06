import {AdshieldKeywords} from './adshield/validators.js'
import {Tinywave} from './loaders/ztinywave.js'
import {DocumentReady} from './utils/frame.js'
import {CreateDebug} from './utils/logger.js'
import {ProtectFunctionDescriptors} from './utils/secret.js'
import {ProtectStorageApis} from './utils/storage.js'
import {HasSubstringSetsInString} from './utils/string.js'

type unsafeWindow = typeof window
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const unsafeWindow: unsafeWindow

const Hook = () => {
	// eslint-disable-next-line no-negated-condition
	const Win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window

	// Pollusions
	ProtectFunctionDescriptors(Win, 'Error')

	// Messaging
	ProtectFunctionDescriptors(Win.EventTarget.prototype, 'addEventListener')
	ProtectFunctionDescriptors(Win.MessagePort.prototype, 'postMessage')

	// Breakage
	ProtectFunctionDescriptors(Win.Element.prototype, 'remove')
	ProtectFunctionDescriptors(Win.Element.prototype, 'removeChild')
	ProtectFunctionDescriptors(Win.Element.prototype, 'insertAdjacentElement')
	ProtectFunctionDescriptors(Win.Element.prototype, 'insertAdjacentHTML')

	// Timer
	ProtectFunctionDescriptors(Win, 'setInterval')
	ProtectFunctionDescriptors(Win, 'setTimeout')

	// Scripting
	ProtectFunctionDescriptors(Win.Element.prototype, 'setAttribute', {CheckArguments: true})
	ProtectFunctionDescriptors(Win.Element.prototype, 'setAttributeNS', {CheckArguments: true})
	ProtectFunctionDescriptors(Win.document, 'createElement')
	ProtectFunctionDescriptors(Win.document, 'createElementNS')
	ProtectFunctionDescriptors(Win, 'alert', {CheckArguments: true})
	ProtectFunctionDescriptors(Win, 'confirm', {CheckArguments: true})
	ProtectFunctionDescriptors(Win, 'atob', {CheckOutputs: true})
	ProtectFunctionDescriptors(Win, 'decodeURI')
	ProtectFunctionDescriptors(Win, 'decodeURIComponent')

	// Storage
	ProtectStorageApis()

	// Networking
	ProtectFunctionDescriptors(Win, 'fetch', {CheckArguments: true})
}

const Observe = () => {
	const Debug = CreateDebug('observe')
	const Observer = new MutationObserver(Mutations => {
		for (const Mutation of Mutations) {
			for (const AddedNode of Mutation.addedNodes) {
				if (AddedNode instanceof HTMLElement && HasSubstringSetsInString(AddedNode.innerHTML, AdshieldKeywords)) {
					AddedNode.remove()

					Debug(AddedNode)
				}
			}
		}
	})

	Observer.observe(document.body, {
		subtree: true,
		childList: true
	})
}

const Bootstrap = () => {
	Hook()
	void Tinywave()

	void DocumentReady()
		.then(() => {
			Observe()
		})
}

Bootstrap()