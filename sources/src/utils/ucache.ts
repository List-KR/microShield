import type {GM} from '../GM.js'

declare const GM: GM

export async function CheckVersion() {
  if (await GM.getValue('version', null) === null) {
    await GM.setValue('version', GM.info.script.version)
  } else if (await GM.getValue('version', null) !== GM.info.script.version) {
    for (const Key of await GM.listValues()) {
      await GM.deleteValue(Key)
    }
    await GM.setValue('version', GM.info.script.version)
  }
}