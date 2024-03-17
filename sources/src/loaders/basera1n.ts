import * as AsKit from '../adshield-defuser-libs/basera1n.js'
import {CreateDebug, DocumentReady} from '../utils.js'

const Debug = CreateDebug('[microShield:basera1n]')

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
		throw new Error('DEFUSER_BASERA1N_TARGET_NOT_FOUND')
	}

	return AsKit.Decode(Data)
}

const Restore = (Source: string) => {
	Debug('restore', Source)

	const Data = JSON.parse(Source) as {
		// eslint-disable-next-line @typescript-eslint/naming-convention
		api: {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'/ads/bid': string;
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'/ads/opt-out': string;
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'/analytics/adb': string;
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'/analytics/ads': string;
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'/log': string;
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'/negotiate/dummy-image': string;
			// eslint-disable-next-line @typescript-eslint/naming-convention
			data: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'/negotiate/dummy-image/rgb': string;
			};
		};
		// eslint-disable-next-line @typescript-eslint/naming-convention
		hostages: Array<{
			// eslint-disable-next-line @typescript-eslint/naming-convention
			id: string;
			// eslint-disable-next-line @typescript-eslint/naming-convention
			text: string;
		}>;
		// eslint-disable-next-line @typescript-eslint/naming-convention
		inventories: Array<{
			// eslint-disable-next-line @typescript-eslint/naming-convention
			id: string;
			// eslint-disable-next-line @typescript-eslint/naming-convention
			width: number;
			// eslint-disable-next-line @typescript-eslint/naming-convention
			height: number;
			// eslint-disable-next-line @typescript-eslint/naming-convention
			position: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				selector: string;
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'position-rule': string;
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'insert-rule': Array<{
					// eslint-disable-next-line @typescript-eslint/naming-convention
					rule: string;
					// eslint-disable-next-line @typescript-eslint/naming-convention
					value: string;
				}>;
			};
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'original-ads': Array<{
				// eslint-disable-next-line @typescript-eslint/naming-convention
				selector: string;
			}>;
			// eslint-disable-next-line @typescript-eslint/naming-convention
			attributes: Array<{
				// eslint-disable-next-line @typescript-eslint/naming-convention
				key: string;
				// eslint-disable-next-line @typescript-eslint/naming-convention
				value: string;
			}>;
		}>;
	}

	let Failed = 0

	for (const Entry of Data.hostages) {
		try {
			const TargetedNode = document.getElementById(Entry.id)

			if (!TargetedNode) {
				continue
			}

			TargetedNode.before(Entry.text)
			TargetedNode.remove()
		} catch (error) {
			Debug('restore:v1 error=', error)

			Failed++
		}
	}

	Debug(`restore total=${Data.hostages.length} failed=${Failed}`)
}

export const Basera1n = async () => {
	const Payload = await Extract()

	Debug('payload', Payload)

	await DocumentReady(document)

	Restore(Payload)
}
