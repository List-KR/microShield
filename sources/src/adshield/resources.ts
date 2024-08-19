import {UnprotectedFetch} from '../utils/secret.js'
import {GetRandomAdShieldHost} from './validators.js'
import type {GM} from '../GM.js'
import { AdvancedExtractor } from '@list-kr/microshield-token-parser'

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
		try {
			return await GetResourceTokenFromCDN(ResponseHash)
		}
		catch {
			if (await GM.getValue(ResponseHash, null) === null) {
				const Token = new AdvancedExtractor(Text).GetToken()
				await GM.setValue(ResponseHash, Token)
				return Token
			} else {
				return await GM.getValue(ResponseHash, null)
			}
		}
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
	let Matches: RegExpExecArray | null = null

	while ((Matches = Pattern.exec(Html)) !== null) {
		const Url = 'https://' + Host + '/resources/' + Matches[1].slice(12 /* 'resources://'.length */) + '?token=' + Token

		 
		NewHtml += await GetCachableHtml(Url)
			.catch(Errors => {
				console.error(Errors)

				return ''
			})
	}

	return NewHtml
}