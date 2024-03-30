/* eslint-disable @typescript-eslint/naming-convention */
interface XMLHttpRequestDetails extends XMLHttpRequest{
	anonymous?: boolean
}

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
	xmlHttpRequest(XMLHttpRequestDetails: XMLHttpRequestDetails, onload?: (
		status: number,
		statusText: string,
		readyState: number,
		response: string | ArrayBuffer | Blob | Document | JSON | null,
		responseText?: string
		) => void): {abort(): void}
}