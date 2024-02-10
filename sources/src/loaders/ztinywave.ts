import * as cache from '../__generated__/ztinywave.cache.js';
import {documentReady, createDebug} from '../utils.js';

type Data = Array<{tags: string}>;

const debug = createDebug('[microShield:tinywave]');

const decode = (payload: string, scriptURL: string) => {
	const id = payload.slice(0, 4);
	const key = cache.source.find(store => store.id === id);

	if (!key) {
		throw new Error('DEFUSER_TINYWAVE_KEY_NOT_FOUND');
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

const restore = (data: Data) => {
	debug('restore');

	let failed = 0;

	for (const entry of data) {
		try {
			if (entry.tags) {
				document.head.insertAdjacentHTML('beforeend', entry.tags);
			}
		} catch (error) {
			debug('restore error=', error);

			failed++;
		}
	}

	debug(`restore total=${data.length} failed=${failed}`);
};

const extract = async () => {
	let source: {
		script: string;
		data: string;
	} | undefined;

	const pick = () => {
		const target: HTMLScriptElement = document.querySelector('script[data]:not([data=""])')!;

		if (target) {
			const script = target.getAttribute('src');
			const data = target.getAttribute('data');

			if (script && data) {
				source = {
					script,
					data,
				};
			}
		}
	};

	pick();

	if (!source) {
		await documentReady(document);

		pick();
	}

	if (!source) {
		throw new Error('DEFUSER_SHORTWAVE_TARGET_NOT_FOUND');
	}

	return decode(source.data, source.script);
};

export const tinywave = async () => {
	const payload = await extract();

	debug('payload', payload);

	restore(payload);
};
