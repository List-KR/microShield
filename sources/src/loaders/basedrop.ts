import {CreateDebug} from '../utils/logger.js'
import {DocumentReady} from '../utils/frame.js'

const Debug = CreateDebug('[microShield:basedrop]')

export const BaseDrop = async () => {
	await DocumentReady(document)

	let AppenDant = ''

	for (const TargetNode of document.querySelectorAll('script[wp-data]')) {
		const Attribute = TargetNode.getAttribute('wp-data')

		if (!Attribute) {
			Debug('empty attribute', TargetNode)

			continue
		}

		let Decoded: string

		try {
      Decoded = new TextDecoder().decode(Uint8Array.from(atob(Attribute), C => C.charCodeAt(0)))
		} catch (e) {
			Debug('failed to decode base64 stream', e)

			continue
		}

		if (!Decoded.startsWith('<')) {
			Debug('failed to decode encoded text', Decoded)

			continue
		}

		AppenDant += Decoded
	}

	if (!AppenDant) {
		return
	}

	document.head.insertAdjacentHTML('beforeend', AppenDant)
}
