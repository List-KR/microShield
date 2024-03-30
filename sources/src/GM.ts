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
	xmlHttpRequest(XMLHttpRequestDetails: {url: string, method?: 'GET' | 'POST'}, onload?: (
		status: number,
		statusText: string,
		readyState: number,
		response: string | ArrayBuffer | Blob | Document | JSON | null,
		responseText?: string
		) => void): {abort(): void}
}