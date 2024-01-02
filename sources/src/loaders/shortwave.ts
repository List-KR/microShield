import * as asKit from '../adshield-defuser-libs/shortwave';
import {ProtobufWireTypes} from '../adshield-defuser-libs/protobuf';
import * as cache from '../__generated__/shortwave.cache.js';
import {createDebug, documentReady} from '../utils.js';

const debug = createDebug('[microShield:shortwave]');

const extract = async () => {
	let source: {
		script: string;
		data: string;
	} | undefined;

	const useSelector = () => {
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

	debug('html:pre');
	useSelector();

	if (!source) {
		await documentReady(document);

		debug('html:post');
		useSelector();
	}

	if (!source) {
		throw new Error('DEFUSER_SHORTWAVE_TARGET_NOT_FOUND');
	}

	debug('bin:cached');

	return asKit.decode(source.data, cache.source);
};

const restoreV1 = (entries: ReturnType<typeof asKit['decode']>['details']) => {
	debug('restore:v1');

	let failed = 0;

	for (const entry of entries) {
		try {
			switch (entry.type) {
				case asKit.PayloadV1Types.Text: {
					const node = document.querySelector(`#${entry.id}`)!;

					// Let the error occur
					node.before(entry.text);
					node.remove();

					break;
				}

				case asKit.PayloadV1Types.Head: {
					document.head.insertAdjacentHTML('beforeend', entry.code);

					break;
				}

				default: {
					throw new Error('DEFUSER_SHORTWAVE_UNSUPPORTED_ENTRY_TYPE');
				}
			}
		} catch (error) {
			debug('restore:v1 error=', error);

			failed++;
		}
	}

	debug(`restore:v1 total=${entries.length} failed=${failed}`);
};

export const shortwave = async () => {
	const payload = await extract();

	debug('payload', payload);

	if (payload.meta.version?.wireType !== ProtobufWireTypes.Uint32) {
		throw new Error('DEFUSER_SHORTWAVE_UNSUPPORTED_PAYLOAD_VERSION');
	}

	await documentReady(document);

	switch (payload.meta.version.value) {
		case 1: {
			restoreV1(payload.details);

			break;
		}

		default: {
			throw new Error('DEFUSER_SHORTWAVE_UNSUPPORTED_PAYLOAD_VERSION');
		}
	}
};
