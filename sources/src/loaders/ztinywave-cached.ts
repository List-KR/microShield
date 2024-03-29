import {parseDomain} from 'parse-domain'
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

const WindowLoad = async () => {
  if (await GM.getValue('version', undefined) === undefined) {
    await Init()
  }

  if (await GM.getValue('version', undefined) !== GM.info.script.version) {
    await ClearAllCaches()
  }
}