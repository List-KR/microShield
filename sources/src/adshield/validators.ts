import cryptoRandomString from 'crypto-random-string'
import {JustifyCallStack} from '../utils/call-stack.js'
import {HasSubstringSetsInString} from '../utils/string.js'

export const AdshieldHostableDomains = [
	'07c225f3.online',
	'css-load.com',
	'html-load.com',
	'content-loader.com',
	'html-load.cc'
]

export const AdshieldDomains = [
	...AdshieldHostableDomains,
	'22d2d4d9-0c15-4a3a-9562-384f2c100146.xyz',
	'f97ae142.online',
	'error-report.com',
	'2aeabdd4-3280-4f03-bc92-1890494f28be.xyz',
	'e1577bbd-2a7e-4bee-b2fe-12a6406689e5.xyz',
	'fadeb9a7-2417-4a51-8d99-0421a5622cbe.xyz',
	'8bf6c3e9-3f4f-40db-89b3-58248f943ce3.online',
	'b714b1e8-4b7d-4ce9-a248-48fd5472aa0b.online',
	'657475b7-0095-478d-90d4-96ce440604f9.online',
	'4e55.xyz',
	'4e68.xyz',
	'b211.xyz',
	'4a0e.xyz'
]

export const AdshieldKeywords = [
	...AdshieldDomains,
	'failed to load website',
	'blocking software'
]

const AdshieldDomainsize = AdshieldHostableDomains.length

// eslint-disable-next-line no-bitwise
export const GetRandomAdShieldHost = () => AdshieldHostableDomains[(Number(cryptoRandomString({length: 16, type: 'numeric'})) * 0.0000000000000001 * AdshieldDomainsize) >>> 0]

export const IsAdShieldCall = (Trace = JustifyCallStack()) => {
	if (Trace.length === 0) {
		return false
	}

	if (HasSubstringSetsInString(Trace[Trace.length - 1], AdshieldDomains)) {
		return true
	}

	return false
}