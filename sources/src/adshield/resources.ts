import {UnprotectedFetch} from '../utils/secret.js'
import {GetRandomAdShieldHost} from './validators.js'
import type {GM} from '../GM.js'

declare const GM: GM

export const GetCachableHtml = async (Url: string) => {
	const ResponseRaw = await UnprotectedFetch(Url, {
		cache: 'force-cache'
	})
	const Text = await ResponseRaw.text()

	if (Text.length === 0) {
		throw new Error('Failed to fetch resource!')
	}

	return '<style>' + Text + '</style>'
}

export const GetResourceToken = async (ScriptUrl: string) => {
	const ResponseRaw = await UnprotectedFetch(ScriptUrl, {
		cache: 'force-cache'
	})
	const Text = await ResponseRaw.text()

	const Match = /eyJ[\w-]*\.eyJ[\w-]*\.[\w-]*/.exec(Text)

	if (Match === null) {
		const ResponseHash = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-1', new TextEncoder().encode(Text)))).map(Block =>Block.toString(16).padStart(2, '0')).join('')
		return await GetResourceTokenFromCDN(ResponseHash)
	}

	return Match[0]
}

const GetResourceTokenFromCDN = async (Hash: string) => {
	const CurrentDate = new Date()
	const XHR = await GM.xmlHttpRequest({
		url: `https://cdn.jsdelivr.net/gh/List-KR/microShield-token@latest/${CurrentDate.getUTCFullYear()}/${CurrentDate.getUTCMonth()}/${CurrentDate.getUTCDate()}/${Hash}.token`
	})
	if (XHR.status !== 200) {
		throw new Error('Failed to fetch token!')
	}
	return XHR.response
}

export const ResolveResourceUrls = async (Html: string, Token: string) => {
	const Pattern = /(resources:\/\/[^'"]+)/g
	const Host = GetRandomAdShieldHost()

	let NewHtml = ''
	// eslint-disable-next-line @typescript-eslint/ban-types
	let Matches: RegExpExecArray | null = null

	while ((Matches = Pattern.exec(Html)) !== null) {
		const Url = 'https://' + Host + '/resources/' + Matches[1].slice(12 /* 'resources://'.length */) + '?token=' + Token

		// eslint-disable-next-line no-await-in-loop
		NewHtml += await GetCachableHtml(Url)
			.catch(Errors => {
				console.error(Errors)

				return ''
			})
	}

	return NewHtml
}