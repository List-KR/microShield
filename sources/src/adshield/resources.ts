import {UnprotectedFetch} from '../utils/secret.js'
import {GetRandomAdShieldHost} from './validators.js'

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
		return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiIiwiZW1haWwiOiIiLCJleHAiOjE3MjEyODcxNjQsImlhdCI6MTcyMTIwMDc2NH0.QA2UD-FsX0zEV4ROiWy_QjCS4oIurkuQ5baCgQJyYGg&20240313'
	}

	return Match[0]
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