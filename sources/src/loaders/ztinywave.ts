import * as cache from '../cache/ztinywave.js';
import {getResourceToken, predefinedToken, resolveResourceUrls} from '../adshield/resources.js';
import {type Entity, EntityTypes, insertEntities, putCachedEntities, tryCachedEntities} from '../utils/entities.js';
import {documentReady} from '../utils/frame.js';
import {createDebug} from '../utils/logger.js';

type Data = Array<{tags: string}>;

const debug = createDebug('ztinywave');

const decode = (payload: string) => {
	const id = payload.slice(0, 4);
	const key = cache.source.find(store => store.id === id);

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

const extract = async () => {
	const sources: Array<{
		script: string;
		data: string;
	}> = [];

	const pick = () => {
		const targets: NodeListOf<HTMLScriptElement> = document.querySelectorAll('script[data]:not([data=""]),script[wp-data]:not([wp-data=""])')!;

		for (const target of targets) {
			const script = target.getAttribute('src');
			const data = target.getAttribute('data');

			if (script && data) {
				sources.push({
					script,
					data,
				});
			}
		}
	};

	pick();

	if (sources.length === 0) {
		await documentReady(document);

		pick();
	}

	if (sources.length === 0) {
		throw new Error('DEFUSER_ZTINYWAVE_TARGET_NOT_FOUND');
	}

	return sources;
};

export const tinywave = async () => {
	const isCachedEntitiesPassed = await tryCachedEntities()
		.catch((error: Error) => {
			debug('Failed to initialise cached entities', error);

			return false;
		});

	if (isCachedEntitiesPassed) {
		return;
	}

	const entities: Entity[] = [];

	const sources = await extract();
	const sourcesResolves = sources.map(async source => {
		debug('source', source);

		const payload = decode(source.data);

		debug('payload', payload);

		const publicEntities: Entity[] = [];
		const privateEntities: Entity[] = [];

		for (const item of payload) {
			if (item.tags) {
				if (item.tags.includes('resources://')) {
					privateEntities.push({
						type: EntityTypes.Head,
						html: item.tags,
					});
				} else {
					publicEntities.push({
						type: EntityTypes.Head,
						html: item.tags,
					});
				}
			}
		}

		void insertEntities(publicEntities);

		const token = await getResourceToken(source.script)
			.catch(e => {
				debug('DEFUSER_ZTINYWAVE_RESOURCE_TOKEN_NOT_FOUND', e);

				return predefinedToken;
			});

		for (const entity of privateEntities) {
			if (entity.type === EntityTypes.Head) {
				// eslint-disable-next-line no-await-in-loop
				entity.html = await resolveResourceUrls(entity.html, token);
			}
		}

		void insertEntities(privateEntities);

		entities.push(...publicEntities, ...privateEntities);
	});

	debug('sources resolves', await Promise.allSettled(sourcesResolves));

	putCachedEntities(entities);
};