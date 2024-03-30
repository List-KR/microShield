/* eslint-disable @typescript-eslint/naming-convention */
export type GM = {
	getValue(key: string, defaultValue: undefined): Promise<string | undefined>
	setValue(key: string, value: string): Promise<void>
	deleteValue(key: string): Promise<void>
	listValues(): Promise<string[]>
	info: {
		script: {
			version: string
		}
	}
}