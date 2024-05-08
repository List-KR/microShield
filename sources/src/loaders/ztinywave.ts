import * as cache from '../cache/ztinywave.js'
import {GetResourceToken, ResolveResourceUrls} from '../adshield/resources.js'
import {type Entity, EntityTypes, InsertEntities, PutCachedEntities, TryCachedEntities} from '../utils/entities.js'
import {DocumentReady} from '../utils/frame.js'
import {CreateDebug} from '../utils/logger.js'
import {LoadHardcoded} from '../cache/ztinywave-hardcode.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
type Data = Array<{tags: string}>

const Debug = CreateDebug('ztinywave')

const Decode = (Payload: string) => {
	const Id = Payload.slice(0, 4)
	const Key = cache.source.find(Store => Store.id === Id)

	if (!Key) {
		throw new Error('DEFUSER_ZTINYWAVE_KEY_NOT_FOUND')
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

	const Data = Payload
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

	return JSON.parse(Data) as Data
}

const Extract = async () => {
	const Sources: Array<{
		Script: string;
		Data: string;
	}> = []

	const Pick = () => {
		const Targets: NodeListOf<HTMLScriptElement> = document.querySelectorAll('script[data]:not([data=""]),script[wp-data]:not([wp-data=""])')!

		for (const Target of Targets) {
			const Script = Target.getAttribute('src')
			const Data = Target.getAttribute('data')

			if (Script && Data) {
				Sources.push({
					Script,
					Data
				})
			}
		}
	}

	Pick()

	if (Sources.length === 0) {
		await DocumentReady(document)

		Pick()
	}

	if (Sources.length === 0) {
		throw new Error('DEFUSER_ZTINYWAVE_TARGET_NOT_FOUND')
	}

	return Sources
}

export const Tinywave = async () => {
	const IsCachedEntitiesPassed = await TryCachedEntities()
		.catch((Errors: Error) => {
			Debug('Failed to initialise cached entities', Errors)

			return false
		})

	if (IsCachedEntitiesPassed) {
		return
	}

	const Entities: Entity[] = []

	const Sources = await Extract()
	const SourcesResolves = Sources.map(async Source => {
		Debug('source', Source)

		const Payload = Decode(Source.Data)

		Debug('payload', Payload)

		const PublicEntities: Entity[] = []
		const PrivateEntities: Entity[] = []
		const HardcodedEntities: Entity[] = []

		for (const Item of Payload) {
			if (Item.tags) {
				if (Item.tags.includes('resources://')) {
					PrivateEntities.push({
						Type: EntityTypes.Head,
						Html: Item.tags
					})
				} else {
					PublicEntities.push({
						Type: EntityTypes.Head,
						Html: Item.tags
					})
				}
			}
		}

		const LoadedHardcoded = LoadHardcoded()
		if (LoadedHardcoded?.domain) {
			for (const Item of LoadedHardcoded.css) {
				HardcodedEntities.push({
					Type: EntityTypes.Head,
					Html: `<style>${Item}</style>`
				})
			}
		}

		void InsertEntities(PublicEntities)

		const Token = await GetResourceToken(Source.Script)

		for (const Entity of PrivateEntities) {
			if (Entity.Type === EntityTypes.Head) {
				// eslint-disable-next-line no-await-in-loop
				Entity.Html = await ResolveResourceUrls(Entity.Html, Token)
			}
		}

		void InsertEntities(PrivateEntities)

		Entities.push(...PublicEntities, ...PrivateEntities)

		return Entities
	})

	Debug('sources resolves', await Promise.allSettled(SourcesResolves))

	PutCachedEntities(Entities)
}