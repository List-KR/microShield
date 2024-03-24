import * as ZCache from '../__generated__/ztinywave.cache.js'
import {DocumentReady, CreateDebug} from '../utils.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
type Data = Array<{tags: string}>

const Debug = CreateDebug('[microShield:tinywave]')

const Decode = (Payload: string, ScriptURL: string) => {
	const Id = Payload.slice(0, 4)
	const Key = ZCache.source.find(Store => Store.id === Id)

	if (!Key) {
		throw new Error('DEFUSER_TINYWAVE_KEY_NOT_FOUND')
	}

	const Ra = String.fromCharCode(Key.reserved1)
	const Rb = String.fromCharCode(Key.reserved2)

	const Unwrap = (Input: string, Output: string, Char: string) => {
		const Index = Output.indexOf(Char)

		if (Index >= 0) {
			return Input[Index]
		}

		return Char
	}

	let Mode = 0

	let Data = Payload
		.slice(4)
		.split('')
		.map(Char => {
			if (!Mode) {
				if (Char === Ra) {
					Mode = 1

					return ''
				}

				if (Char === Rb) {
					Mode = 2

					return ''
				}
			}

			if (Mode === 1) {
				Mode = 0

				if (Key.reserved1Output.includes(Char)) {
					return Unwrap(Key.reserved1Input, Key.reserved1Output, Char)
				}

				return Unwrap(Key.input, Key.output, Char) + Char
			}

			if (Mode === 2) {
				Mode = 0

				if (Key.reserved2Output.includes(Char)) {
					return Unwrap(Key.reserved2Input, Key.reserved2Output, Char)
				}

				return Unwrap(Key.input, Key.output, Char) + Char
			}

			return Unwrap(Key.input, Key.output, Char)
		})
		.join('')

	if (Data.includes('resources://') && Key.remoteResourceToken) {
		Debug('downloading remote resource from Ad-Shield is required', {Id: Key.id, data: Data})
		const ScriptHostname = new URL(ScriptURL.startsWith('//') ? `https:${ScriptURL}` : ScriptURL).hostname
		Data = Data.replace(/resources:\/\/[a-zA-Z0-9-.]+/, (`https://${ScriptHostname}/resources/${/(?<=resources:\/\/)[a-zA-Z0-9-.]+/.exec(Data) as unknown as string}?token=${Key.remoteResourceToken}`))
	}

	return JSON.parse(Data) as Data
}

const Restore = (Data: Data) => {
	Debug('restore')

	let Failed = 0

	for (const Entry of Data) {
		try {
			if (Entry.tags) {
				document.head.insertAdjacentHTML('beforeend', Entry.tags)
			}
		} catch (error) {
			Debug('restore error=', error)

			Failed++
		}
	}

	Debug(`restore total=${Data.length} failed=${Failed}`)
}

const Extract = async () => {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	let source: {
		// eslint-disable-next-line @typescript-eslint/naming-convention
		script: string;
		// eslint-disable-next-line @typescript-eslint/naming-convention
		data: string;
	} | undefined

	const Pick = () => {
		const Target: HTMLScriptElement = document.querySelector('script[data]:not([data=""])')!

		if (Target) {
			const Script = Target.getAttribute('src')
			const Data = Target.getAttribute('data')

			if (Script && Data) {
				source = {
					script: Script,
					data: Data
				}
			}
		}
	}

	Pick()

	if (!source) {
		await DocumentReady(document)

		Pick()
	}

	if (!source) {
		throw new Error('DEFUSER_SHORTWAVE_TARGET_NOT_FOUND')
	}

	return Decode(source.data, source.script)
}

export const Tinywave = async () => {
	Debug('run')

	const Payload = await Extract()

	Debug('payload', Payload)

	Restore(Payload)
}
