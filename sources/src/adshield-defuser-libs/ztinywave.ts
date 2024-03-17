import {parse} from 'acorn'
import * as walker from 'acorn-walk'
import {chromium} from 'playwright'

// eslint-disable-next-line @typescript-eslint/naming-convention
export type Data = Array<{tags: string}>;

export type KeyEntry = {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	id: string;
	// eslint-disable-next-line @typescript-eslint/naming-convention
	input: string;
	// eslint-disable-next-line @typescript-eslint/naming-convention
	output: string;
	// eslint-disable-next-line @typescript-eslint/naming-convention
	reserved1: number;
	// eslint-disable-next-line @typescript-eslint/naming-convention
	reserved1Input: string;
	// eslint-disable-next-line @typescript-eslint/naming-convention
	reserved1Output: string;
	// eslint-disable-next-line @typescript-eslint/naming-convention
	reserved2: number;
	// eslint-disable-next-line @typescript-eslint/naming-convention
	reserved2Input: string;
	// eslint-disable-next-line @typescript-eslint/naming-convention
	reserved2Output: string;
};

/**
 * The code below is highly un-optimized.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const getKeys__Node__ = async (source: string) => {
	if (typeof window !== 'undefined') {
		throw new Error('This code cannot be run on browser environment!')
	}

	const Re = /\w+=\[{['\w()]+:.+?,['\w()]+:.+?,['\w()]+:.+?,['\w()]+:.+?,['\w()]+:.+?,['\w()]+:.+?,['\w()]+:.+?,['\w()]+:.+?,['\w()]+:.+?},{/gm
	const Markers: number[] = []

	for (const Match of source.matchAll(Re)) {
		if (!Match.index) {
			continue
		}

		Markers.push(Match.index)
	}

	const AST = parse(source, {
		ecmaVersion: 'latest',
		sourceType: 'script',
	})
	const InjectionMarkers: Array<{
		// eslint-disable-next-line @typescript-eslint/naming-convention
		id: string;
		// eslint-disable-next-line @typescript-eslint/naming-convention
		start: number;
		// eslint-disable-next-line @typescript-eslint/naming-convention
		declarationStart: number;
		// eslint-disable-next-line @typescript-eslint/naming-convention
		end: number;
	}> = []

	walker.full(AST, TargetedNode => {
		if (!Markers.includes(TargetedNode.start)) {
			return
		}

		if (TargetedNode.type === 'VariableDeclarator') {
			const Id = source.slice(TargetedNode.start, TargetedNode.end).split('=')[0]
			const Marker = InjectionMarkers.find(Marker => Marker.id === Id)

			if (!Marker) {
				return
			}

			Marker.declarationStart = TargetedNode.start
			Marker.end = TargetedNode.end
		} else if (TargetedNode.type === 'Identifier') {
			const Id = source.slice(TargetedNode.start, TargetedNode.end)

			InjectionMarkers.push({
				id: Id,
				start: TargetedNode.start,
				declarationStart: TargetedNode.end,
				end: TargetedNode.end,
			})
		}
	})

	const Secret = (crypto.getRandomValues(new Uint32Array(1))[0] * crypto.getRandomValues(new Uint32Array(1))[0]).toString(36).slice(2)
	const Header = `const ${Secret} = (id, source) => {
	const el = document.createElement('code')
	el.setAttribute('data-${Secret}', id)
	el.textContent = JSON.stringify(source)
	document.body.appendChild(el)
};
`

	let Scriptable = (' ' + source).slice(1)

	for (const Marker of InjectionMarkers.reverse()) {
		Scriptable = Scriptable.slice(0, Marker.start) + `
${Scriptable.slice(Marker.start, Marker.end)},
_${Secret}=${Secret}('${Marker.id}', ${Marker.id})` + Scriptable.slice(Marker.end)
	}

	Scriptable = Header + Scriptable

	const Browser = await chromium.launch({
		headless: false,
	})
	const Context = await Browser.newContext()
	await Context.setOffline(true)

	const Page = await Context.newPage()
	await Page.goto('about:blank')

	const Raws: string[] = await Page.evaluate(`(() => {
		try {
			${Scriptable}
		} catch (e) {}

		const data = []

		for (const el of document.querySelectorAll('[data-${Secret}]')) {
			data.push(el.textContent)
		}

		return data
	})()`)

	await Browser.close()

	const Keys: KeyEntry[] = []

	for (const Raw of Raws) {
		Keys.push(...JSON.parse(Raw) as KeyEntry[])
	}

	return Keys
}

export const Decode = (Payload: string, KeyStore: KeyEntry[]) => {
	const Id = Payload.slice(0, 4)
	const Key = KeyStore.find(Store => Store.id === Id)

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
