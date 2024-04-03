import type {GM} from '../GM.js'
declare const GM: GM

const RequestAdShieldScript = async (ScriptHostname: string) => {
  const ResponseRaw = await fetch(`https://${ScriptHostname}/loader.min.js`, {
    cache: 'force-cache'
  })

  const ResourceText = await ResponseRaw.text()
  if (ResourceText.length === 0) {
    throw new Error('Empty response')
  }

  return ResourceText
}

const FindAccessTokenInAdShieldScript = (ScriptText: string) => {
  const Result = /eyJ[\w-]*\.eyJ[\w-]*\.[\w-]*/.exec(ScriptText)
  if (Result === null) {
    throw new Error('Token not found')
  }
  return Result[0]
}

export const GetAcessToken = async (ScriptHostname: string) => {
  return FindAccessTokenInAdShieldScript(await RequestAdShieldScript(ScriptHostname))
}

export const ReplaceResourceURLs = (Data: string, Token: string, ScriptHostname: string) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const DataTags: Array<{tags: string}> = JSON.parse(Data)
  DataTags.map(async DataTagsObject => {
    const DecodedCssString = DataTagsObject.tags
    const Keyword = /(?<=resources:\/\/)[a-zA-Z0-9._-]+/.exec(DecodedCssString)?.[0] || ''
    DataTagsObject.tags = DecodedCssString.replace(/resources:\/\/[a-zA-Z0-9._-]+/, `https://${ScriptHostname}/resources/${Keyword}?token=${Token}`)
  })
  return JSON.stringify(DataTags)
}