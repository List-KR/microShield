import protobufjs from 'protobufjs';

export enum ProtobufWireTypes {
	// The internal type will have negative integer as the value
	Nested = -1,
	Uint32 = 0,
	Uint64 = 1,
	Binary = 2,
	Float = 5,
}

export type ProtobufField = {id: number; wireType: ProtobufWireTypes.Uint32; value: number}
| {id: number; wireType: ProtobufWireTypes.Uint64; value: protobufjs.Long}
| {id: number; wireType: ProtobufWireTypes.Binary; value: Buffer}
| {id: number; wireType: ProtobufWireTypes.Float; value: number};

// https://github.com/konsumer/rawproto/blob/master/package.json
export const getProtobufFields = (buffer: Buffer) => {
	const reader = protobufjs.Reader.create(buffer);
	const out: ProtobufField[] = [];

	while (reader.pos < reader.len) {
		const tag = reader.uint64();
		// @ts-expect-error Tag is calculatable here
		// eslint-disable-next-line no-bitwise
		const id = tag >>> 3;
		// @ts-expect-error Tag is calculatable here
		// eslint-disable-next-line no-bitwise
		const wireType = tag & 7;

		switch (wireType) {
			case ProtobufWireTypes.Uint32: // Int32, int64, uint32, bool, enum, etc
				out.push({id, wireType, value: reader.uint32()} as const);
				break;
			case ProtobufWireTypes.Uint64: // Fixed64, sfixed64, double
				out.push({id, wireType, value: reader.fixed64()} as const);
				break;
			case ProtobufWireTypes.Binary: // String, bytes, sub-message
				out.push({id, wireType, value: Buffer.from(reader.bytes())} as const);
				break;
			case ProtobufWireTypes.Float: // Fixed32, sfixed32, float
				out.push({id, wireType, value: reader.float()} as const);
				break;
			default: reader.skipType(wireType);
		}
	}

	return out;
};

// The following type is used to express compiled `enum` which is not constant in JavaScript
// Also see https://github.com/microsoft/TypeScript/issues/30611#issuecomment-479087883
export const getProtobufMap = <FieldMap extends Record<string, string | number>>(names: FieldMap, fields: ProtobufField[]) => {
	const out: Partial<Record<keyof FieldMap, ProtobufField>> = {};

	for (const field of fields) {
		const name = names[field.id.toString()] as keyof FieldMap;

		if (name) {
			out[name] = field;
		}
	}

	return out;
};
