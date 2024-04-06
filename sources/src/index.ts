import {AdshieldKeywords} from './adshield/validators.js'
import {Tinywave} from './loaders/ztinywave.js'
import {DocumentReady} from './utils/frame.js'
import {CreateDebug} from './utils/logger.js'
import {ProtectFunctionDescriptors} from './utils/secret.js'
import {ProtectStorageApis} from './utils/storage.js'
import {HasSubstringSetsInString} from './utils/string.js'

const Hook = () => {
	// Pollusions
	ProtectFunctionDescriptors(window, 'Error')

	// Messaging
	ProtectFunctionDescriptors(window.EventTarget.prototype, 'addEventListener')
	ProtectFunctionDescriptors(window.MessagePort.prototype, 'postMessage')

	// Breakage
	ProtectFunctionDescriptors(window.Element.prototype, 'remove')
	ProtectFunctionDescriptors(window.Element.prototype, 'removeChild')
	ProtectFunctionDescriptors(window.Element.prototype, 'insertAdjacentElement')
	ProtectFunctionDescriptors(window.Element.prototype, 'insertAdjacentHTML')

	// Timer
	ProtectFunctionDescriptors(window, 'setInterval')
	ProtectFunctionDescriptors(window, 'setTimeout')

	// Scripting
	ProtectFunctionDescriptors(window.Element.prototype, 'setAttribute', {CheckArguments: true})
	ProtectFunctionDescriptors(window.Element.prototype, 'setAttributeNS', {CheckArguments: true})
	ProtectFunctionDescriptors(window.document, 'createElement')
	ProtectFunctionDescriptors(window.document, 'createElementNS')
	ProtectFunctionDescriptors(window, 'alert', {CheckArguments: true})
	ProtectFunctionDescriptors(window, 'confirm', {CheckArguments: true})
	ProtectFunctionDescriptors(window, 'atob', {CheckOutputs: true})
	ProtectFunctionDescriptors(window, 'decodeURI')
	ProtectFunctionDescriptors(window, 'decodeURIComponent')

	// Storage
	ProtectStorageApis()

	// Networking
	ProtectFunctionDescriptors(window, 'fetch', {CheckArguments: true})
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