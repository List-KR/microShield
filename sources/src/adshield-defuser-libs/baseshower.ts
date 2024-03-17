export type Tag = {
	tags: string;
};

export type Text = {
	text_id: string;
	text_value: string;
};

export type Payload = Tag | Text;

// @ts-expect-error Known properties
export const isTag = (payload: Payload): payload is Tag => typeof payload.tags === 'string'

// @ts-expect-error Known properties
export const isText = (payload: Payload): payload is Text => typeof payload.text_id === 'string' && typeof payload.text_value === 'string'

export const decode = (binary: string) => {
	binary = Buffer.from(binary, 'base64').toString('binary')

	const key = binary.charCodeAt(0)
	const buffer = new Uint8Array(binary.length - 1)

	for (let i = 1; i < binary.length; i++) {
		// eslint-disable-next-line no-bitwise
		buffer[i - 1] = binary.charCodeAt(i) ^ key
	}

	const decoder = new TextDecoder()
	const out = decoder.decode(buffer)

	return JSON.parse(decodeURIComponent(out)) as Array<{tags: string} | {text_id: string; text_value: string}>
}
