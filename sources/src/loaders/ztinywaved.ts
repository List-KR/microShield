import {parseDomain, ParseResultType} from 'parse-domain'
import * as ZtinywaveRemoted from './ztinywave-remoted.js'
import type {GM} from '../GM.js'
declare const GM: GM

const Init = async () => {
  await GM.setValue('version', GM.info.script.version)
}

const ClearAllCaches = async () => {
  for (const Key of await GM.listValues()) {
    await GM.deleteValue(Key)
  }
  await Init()
}

export const GetDomain = () => {
  const DomainResult = parseDomain(location.hostname)
  if (DomainResult.type !== ParseResultType.Listed) {
    throw new Error(`Invalid domain: ${DomainResult}`)
  }

  return `${DomainResult.domain}.${DomainResult.topLevelDomains.join('.')}`
}

const ClearSiteCaches = async () => {
  const Domain = GetDomain()
  for (const Key of await GM.listValues()) {
    if (Key.startsWith(Domain)) {
      await GM.deleteValue(Key)
    }
  }
}

const ConvertToCacheObject = (CacheString: string) => {
  return JSON.parse(CacheString) as {
    Cache: string
    ScriptHostname: string
    Until: number
  }
}

const IsCacheExpired = async () => {
  // Cache is expired if it's older than 3 hours.
  const Domain = GetDomain()
  let ShouldRemoved = false
  for (const Key of await GM.listValues()) {
    if (Key.startsWith(Domain) && ConvertToCacheObject(await GM.getValue(Key, undefined) ?? '').Until < Date.now()) {
      ShouldRemoved ||= true
    }
  }

  return ShouldRemoved
}

const CheckBlank = (Key: string) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const KeyArray = JSON.parse(Key) as Array<{tags: string}>
  const NewKeyArray = KeyArray.filter((Value) => !Value.tags.includes('about:blank'))
  return JSON.stringify(NewKeyArray)
}

export const CreateCacheItem = async (Key: string, ScriptHostname: string) => {
  Key = CheckBlank(Key)
  // eslint-disable-next-line @typescript-eslint/naming-convention
  if ((JSON.parse(Key) as Array<{tags: string}>).length === 0) {
    return
  }
  await GM.setValue(GetDomain(), JSON.stringify({
    Cache: Key,
    ScriptHostname,
    Until: Date.now() + 1000 * 60 * 60 * 3
  }))
}

const DoesCacheExist = async (KeyPara: string) => {
  for (const Key of await GM.listValues()) {
    if (Key.startsWith(KeyPara)) {
      return true
    }
  }
  return false
}

const GetCacheItem = async () => {
  const Domain = GetDomain()
  for (const Key of await GM.listValues()) {
    if (Key.startsWith(Domain)) {
      return ConvertToCacheObject(await GM.getValue(Key, undefined) ?? '')
    }
  }
  throw new Error('Cache not found')
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const InjectCachedResources = (Data: {tags: string}[]) => {
	for (const Entry of Data) {
		try {
			if (Entry.tags) {
				document.head.insertAdjacentHTML('beforeend', Entry.tags)
			}
		} catch (error) {/* */}
	}
}

export const WindowLoad = async (): Promise<number> => {
  if (await GM.getValue('version', undefined) === undefined) {
    await Init()
    return 1
  }

  if (await GM.getValue('version', undefined) !== GM.info.script.version) {
    await ClearAllCaches()
    return 1
  }

  if (!await DoesCacheExist(GetDomain())) {
    return 1
  }

  if (await IsCacheExpired()) {
    await ClearSiteCaches()
    return 1
  }

  const CacheItem = await GetCacheItem()
  if (CacheItem.Cache.includes('resources://')) {
    const Token = await ZtinywaveRemoted.GetAcessToken(CacheItem.ScriptHostname)
		CacheItem.Cache = ZtinywaveRemoted.ReplaceResourceURLs(CacheItem.Cache, Token, CacheItem.ScriptHostname)
  }

  InjectCachedResources(JSON.parse(CacheItem.Cache))

  return 0
}