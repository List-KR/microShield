import {CreateDebug, DocumentReady} from '../utils.js'

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
			Decoded = Buffer.from(Attribute, 'base64').toString('utf-8')
		} catch (e) {
			Debug('failed to decode b64 stream', e)

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
