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
	xmlHttpRequest({
		method,
		url,
		headers,
		responseType,
		data
	}: {
		method?: string,
		url: string,
		headers?: Record<string, string>,
		responseType?: 'text' | 'json',
		data?: string
	}): Promise<{
		status: number
		response: string
	}>
}