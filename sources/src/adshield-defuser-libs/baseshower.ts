export type Tag = {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	tags: string;
};

export type Text = {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	text_id: string;
	// eslint-disable-next-line @typescript-eslint/naming-convention
	text_value: string;
};

export type Payload = Tag | Text;

// @ts-expect-error Known properties
export const IsTag = (Payload: Payload): Payload is Tag => typeof Payload.tags === 'string'

// @ts-expect-error Known properties
export const IsText = (Payload: Payload): Payload is Text => typeof Payload.text_id === 'string' && typeof Payload.text_value === 'string'

export const Decode = (Binary: string) => {
	Binary = Buffer.from(Binary, 'base64').toString('binary')

	const Key = Binary.charCodeAt(0)
	const BufferInstance = new Uint8Array(Binary.length - 1)

	for (let I = 1; I < Binary.length; I++) {
		// eslint-disable-next-line no-bitwise
		BufferInstance[I - 1] = Binary.charCodeAt(I) ^ Key
	}

	const Decoder = new TextDecoder()
	const Out = Decoder.decode(BufferInstance)

	// eslint-disable-next-line @typescript-eslint/naming-convention
	return JSON.parse(decodeURIComponent(Out)) as Array<{tags: string} | {text_id: string; text_value: string}>
}
