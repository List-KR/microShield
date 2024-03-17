import * as AsKit from '../adshield-defuser-libs/baseshower.js'
import {CreateDebug, DocumentReady} from '../utils.js'

const Debug = CreateDebug('[microShield:baseshower]')

const Extract = async () => {
	let Data: string | undefined

	const UseSelector = () => {
		const Target: HTMLScriptElement = document.querySelector('script[data]:not([data=""])')!

		if (Target) {
			const DataProperty = Target.getAttribute('data')

			if (DataProperty) {
				Data = DataProperty
			}
		}
	}

	Debug('html:pre')
	UseSelector()

	if (!Data) {
		await DocumentReady(document)

		Debug('html:post')
		UseSelector()
	}

	if (!Data) {
		throw new Error('DEFUSER_BASESHOWER_TARGET_NOT_FOUND')
	}

	return AsKit.Decode(Data)
}

const Restore = (Source: ReturnType<typeof AsKit.Decode>) => {
	Debug('restore', JSON.stringify(Source))

	let Failed = 0

	for (const Entry of Source) {
		try {
			if (AsKit.IsTag(Entry)) {
				document.head.insertAdjacentHTML('beforeend', Entry.tags)

				continue
			}

			if (AsKit.IsText(Entry)) {
				const TargetedNode = document.getElementById(Entry.text_id)

				if (!TargetedNode) {
					continue
				}

				TargetedNode.before(Entry.text_value)
				TargetedNode.remove()

				continue
			}
		} catch (error) {
			Debug('restore:v1 error=', error)

			Failed++
		}
	}

	Debug(`restore total=${Source.length} failed=${Failed}`)
}

export const Baseshower = async () => {
	const Payload = await Extract()

	Debug('payload', Payload)

	await DocumentReady(document)

	Restore(Payload)
}
