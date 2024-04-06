import {createDebug} from './logger.js';
import {pull, push} from './storage.js';

const debug = createDebug('entities');

export const enum EntityTypes {
	Text = 0,
	Head,
}

export type TextEntity = {
	type: EntityTypes.Text;
	selector: string;
	textContent: string;
};

export type HeadEntity = {
	type: EntityTypes.Head;
	html: string;
};

export type Entity = TextEntity
| HeadEntity;

export const insertTextEntity = (entity: TextEntity) => {
	const node = document.querySelector(entity.selector);

	if (!node) {
		throw new Error('The target node was not found in the frame!');
	}

	node.before(entity.textContent);
	node.remove();
};

export const insertHeadEntity = (entity: HeadEntity) => {
	document.head.insertAdjacentHTML('beforeend', entity.html);
};

export const insertEntity = async (entity: Entity) => {
	if (entity.type === EntityTypes.Head) {
		insertHeadEntity(entity);
	} else if (entity.type === EntityTypes.Text) {
		insertTextEntity(entity);
	}
};

export const insertEntities = async (entities: Entity[]) => Promise.allSettled(entities.map(async entity => insertEntity(entity)));

export const tryCachedEntities = async () => {
	const json = pull('entity-cache-rev2');

	if (!json) {
		throw new Error('The cached entities does not exist on this browser!');
	}

	const data = JSON.parse(json) as {
		entities: Entity[];
		createdAt: number;
	};

	if ((Date.now() - data.createdAt) > 1000 * 60 * 60 * 24 * 30) {
		throw new Error('The cached entities are too old!');
	}

	debug('restoring cached entities data=', data);

	await insertEntities(data.entities);

	return true;
};

export const putCachedEntities = (entities: Entity[]) => {
	if (entities.length === 0) {
		return;
	}

	push('entity-cache-rev2', JSON.stringify({
		entities,
		createdAt: Date.now(),
	}));
};