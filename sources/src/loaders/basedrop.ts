import {createDebug, documentReady} from '../utils.js'

const debug = createDebug('[microShield:basedrop]')

export const basedrop = async () => {
	await documentReady(document)

	let appendant = ''

	for (const node of document.querySelectorAll('script[wp-data]')) {
		const attribute = node.getAttribute('wp-data')

		if (!attribute) {
			debug('empty attribute', node)

			continue
		}

		let decoded: string

		try {
			decoded = Buffer.from(attribute, 'base64').toString('utf-8')
		} catch (e) {
			debug('failed to decode b64 stream', e)

			continue
		}

		if (!decoded.startsWith('<')) {
			debug('failed to decode encoded text', decoded)

			continue
		}

		appendant += decoded
	}

	if (!appendant) {
		return
	}

	document.head.insertAdjacentHTML('beforeend', appendant)
}
