import {parse} from 'acorn';
import * as walker from 'acorn-walk';
import {chromium} from 'playwright';

export type Data = Array<{tags: string}>;

export type KeyEntry = {
	id: string;
	input: string;
	output: string;
	reserved1: number;
	reserved1Input: string;
	reserved1Output: string;
	reserved2: number;
	reserved2Input: string;
	reserved2Output: string;
};

/**
 * The code below is highly un-optimized.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const getKeys__Node__ = async (source: string) => {
	if (typeof window !== 'undefined') {
		throw new Error('This code cannot be run on browser environment!');
	}

	const re = /\w+=\[{['\w()]+:.+?,['\w()]+:.+?,['\w()]+:.+?,['\w()]+:.+?,['\w()]+:.+?,['\w()]+:.+?,['\w()]+:.+?,['\w()]+:.+?,['\w()]+:.+?},{/gm;
	const markers: number[] = [];

	for (const match of source.matchAll(re)) {
		if (!match.index) {
			continue;
		}

		markers.push(match.index);
	}

	const ast = parse(source, {
		ecmaVersion: 'latest',
		sourceType: 'script',
	});
	const injectionMarkers: Array<{
		id: string;
		start: number;
		declarationStart: number;
		end: number;
	}> = [];

	walker.full(ast, node => {
		if (!markers.includes(node.start)) {
			return;
		}

		if (node.type === 'VariableDeclarator') {
			const id = source.slice(node.start, node.end).split('=')[0];
			const marker = injectionMarkers.find(marker => marker.id === id);

			if (!marker) {
				return;
			}

			marker.declarationStart = node.start;
			marker.end = node.end;
		} else if (node.type === 'Identifier') {
			const id = source.slice(node.start, node.end);

			injectionMarkers.push({
				id,
				start: node.start,
				declarationStart: node.end,
				end: node.end,
			});
		}
	});

	const secret = (crypto.getRandomValues(new Uint32Array(1))[0] * crypto.getRandomValues(new Uint32Array(1))[0]).toString(36).slice(2);
	const header = `const ${secret} = (id, source) => {
	const el = document.createElement('code')
	el.setAttribute('data-${secret}', id)
	el.textContent = JSON.stringify(source)
	document.body.appendChild(el)
};
`;

	let scriptable = (' ' + source).slice(1);

	for (const marker of injectionMarkers.reverse()) {
		scriptable = scriptable.slice(0, marker.start) + `
${scriptable.slice(marker.start, marker.end)},
_${secret}=${secret}('${marker.id}', ${marker.id})` + scriptable.slice(marker.end);
	}

	scriptable = header + scriptable;

	const browser = await chromium.launch({
		headless: false,
	});
	const context = await browser.newContext();
	await context.setOffline(true);

	const page = await context.newPage();
	await page.goto('about:blank');

	const raws: string[] = await page.evaluate(`(() => {
		try {
			${scriptable}
		} catch (e) {}

		const data = []

		for (const el of document.querySelectorAll('[data-${secret}]')) {
			data.push(el.textContent)
		}

		return data
	})()`);

	await browser.close();

	const keys: KeyEntry[] = [];

	for (const raw of raws) {
		keys.push(...JSON.parse(raw) as KeyEntry[]);
	}

	return keys;
};

export const decode = (payload: string, keyStore: KeyEntry[]) => {
	const id = payload.slice(0, 4);
	const key = keyStore.find(store => store.id === id);

	if (!key) {
		throw new Error('DEFUSER_ZTINYWAVE_KEY_NOT_FOUND');
	}

	const ra = String.fromCharCode(key.reserved1);
	const rb = String.fromCharCode(key.reserved2);

	const unwrap = (input: string, output: string, char: string) => {
		const index = output.indexOf(char);

		if (index >= 0) {
			return input[index];
		}

		return char;
	};

	let mode = 0;

	const data = payload
		.slice(4)
		.split('')
		.map(char => {
			if (!mode) {
				if (char === ra) {
					mode = 1;

					return '';
				}

				if (char === rb) {
					mode = 2;

					return '';
				}
			}

			if (mode === 1) {
				mode = 0;

				if (key.reserved1Output.includes(char)) {
					return unwrap(key.reserved1Input, key.reserved1Output, char);
				}

				return unwrap(key.input, key.output, char) + char;
			}

			if (mode === 2) {
				mode = 0;

				if (key.reserved2Output.includes(char)) {
					return unwrap(key.reserved2Input, key.reserved2Output, char);
				}

				return unwrap(key.input, key.output, char) + char;
			}

			return unwrap(key.input, key.output, char);
		})
		.join('');

	return JSON.parse(data) as Data;
};
