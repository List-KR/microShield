import {CreateDebug} from './logger.js'
import {Pull, Push} from './storage.js'

const Debug = CreateDebug('entities')

export const enum EntityTypes {
	Text = 0,
	Head
}

export type TextEntity = {
	Type: EntityTypes.Text;
	Selector: string;
	TextContent: string;
}

export type HeadEntity = {
	Type: EntityTypes.Head;
	Html: string;
}

export type Entity = TextEntity
| HeadEntity

export const InsertTextEntity = (Entity: TextEntity) => {
	const SelectedNode = document.querySelector(Entity.Selector)

	if (!SelectedNode) {
		throw new Error('The target node was not found in the frame!')
	}

	SelectedNode.before(Entity.TextContent)
	SelectedNode.remove()
}

export const InsertHeadEntity = (Entity: HeadEntity) => {
	document.head.insertAdjacentHTML('beforeend', Entity.Html)
}

export const InsertEntity = async (Entity: Entity) => {
	if (Entity.Type === EntityTypes.Head) {
		InsertHeadEntity(Entity)
	} else if (Entity.Type === EntityTypes.Text) {
		InsertTextEntity(Entity)
	}
}

export const InsertEntities = async (Entities: Entity[]) => Promise.allSettled(Entities.map(async Entity => InsertEntity(Entity)))

export const TryCachedEntities = async () => {
	const Json = Pull('entity-cache-rev2')

	if (!Json) {
		throw new Error('The cached entities does not exist on this browser!')
	}

	const Data = JSON.parse(Json) as {
		Entities: Entity[];
		CreatedAt: number;
	}

	if ((Date.now() - Data.CreatedAt) > 1000 * 60 * 60 * 24 * 30) {
		throw new Error('The cached entities are too old!')
	}
	
	const TotalEntityLength = Data.Entities.reduce((State, Entity) => {
		if (Entity.Type === EntityTypes.Head) {
			return State + Entity.Html.length
		}

		return State
	}, 0)

	if (!TotalEntityLength) {
		throw new Error('The cached entities has no content!')
	}


	Debug('restoring cached entities data=', Data)

	await InsertEntities(Data.Entities)

	return true
}

export const PutCachedEntities = (Entity: Entity[]) => {
	if (Entity.length === 0) {
		return
	}

	Push('entity-cache-rev2', JSON.stringify({
		Entity,
		CreatedAt: Date.now()
	}))
}