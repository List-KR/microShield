import {getRandomAdShieldHost} from './validators.js';

export const predefinedToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiIiwiZW1haWwiOiIiLCJleHAiOjE3MTE4OTA4NTksImlhdCI6MTcxMTgwNDQ1OX0.OCQlZuCbVJRnmZqsZMdR_u9EnLzpvp5bUwkw1ziQnhA';

export const getCachableHtml = async (url: string) => {
	const response = await fetch(url, {
		cache: 'force-cache',
	});
	const text = await response.text();

	if (text.length === 0) {
		throw new Error('Failed to fetch resource!');
	}

	return '<style>' + text + '</style>';
};

export const getResourceToken = async (scriptUrl: string) => {
	const response = await fetch(scriptUrl, {
		cache: 'force-cache',
	});
	const text = await response.text();

	const match = /eyJ[\w-]*\.eyJ[\w-]*\.[\w-]*/.exec(text);

	if (match === null) {
		throw new Error('Failed to match predefined token in the script!');
	}

	return match[0];
};

export const resolveResourceUrls = async (html: string, token: string) => {
	const pattern = /(resources:\/\/[^'"]+)/g;
	const host = getRandomAdShieldHost();

	let newHtml = '';
	// eslint-disable-next-line @typescript-eslint/ban-types
	let matches: RegExpExecArray | null = null;

	while ((matches = pattern.exec(html)) !== null) {
		const url = 'https://' + host + '/resources/' + matches[1].slice(12 /* 'resources://'.length */) + '?token=' + token;

		// eslint-disable-next-line no-await-in-loop
		newHtml += await getCachableHtml(url)
			.catch(error => {
				console.error(error);

				return '';
			});
	}

	return newHtml;
};