import * as asKit from '../adshield-defuser-libs/basera1n';
import {createDebug, documentReady} from '../utils.js';

const debug = createDebug('[microShield:basera1n]');

const extract = async () => {
	let data: string | undefined;

	const useSelector = () => {
		const target: HTMLScriptElement = document.querySelector('script[data]:not([data=""])')!;

		if (target) {
			const dataProperty = target.getAttribute('data');

			if (dataProperty) {
				data = dataProperty;
			}
		}
	};

	debug('html:pre');
	useSelector();

	if (!data) {
		await documentReady(document);

		debug('html:post');
		useSelector();
	}

	if (!data) {
		throw new Error('DEFUSER_BASERA1N_TARGET_NOT_FOUND');
	}

	return asKit.decode(data);
};

const restore = (source: string) => {
	debug('restore', source);

	const data = JSON.parse(source) as {
		api: {
			'/ads/bid': string;
			'/ads/opt-out': string;
			'/analytics/adb': string;
			'/analytics/ads': string;
			'/log': string;
			'/negotiate/dummy-image': string;
			data: {
				'/negotiate/dummy-image/rgb': string;
			};
		};
		hostages: Array<{
			id: string;
			text: string;
		}>;
		inventories: Array<{
			id: string;
			width: number;
			height: number;
			position: {
				selector: string;
				'position-rule': string;
				'insert-rule': Array<{
					rule: string;
					value: string;
				}>;
			};
			'original-ads': Array<{
				selector: string;
			}>;
			attributes: Array<{
				key: string;
				value: string;
			}>;
		}>;
	};

	let failed = 0;

	for (const entry of data.hostages) {
		try {
			const node = document.getElementById(entry.id);

			if (!node) {
				continue;
			}

			node.before(entry.text);
			node.remove();
		} catch (error) {
			debug('restore:v1 error=', error);

			failed++;
		}
	}

	debug(`restore total=${data.hostages.length} failed=${failed}`);
};

export const basera1n = async () => {
	const payload = await extract();

	debug('payload', payload);

	await documentReady(document);

	restore(payload);
};
