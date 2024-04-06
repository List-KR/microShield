import cryptoRandomString from 'crypto-random-string'
import {JustifyCallStack} from '../utils/call-stack.js'
import {HasSubstringSetsInString} from '../utils/string.js'

export const AdshieldDomains = [
	'css-load.com',
	'07c225f3.online',
	'content-loader.com',
	'error-report.com',
	'html-load.com'
]

export const AdshieldKeywords = [
	...AdshieldDomains,
	'failed to load website',
	'blocking software'
]

const AdshieldDomainsize = AdshieldDomains.length

// eslint-disable-next-line no-bitwise
export const GetRandomAdShieldHost = () => AdshieldDomains[(Number(cryptoRandomString({length: 16, type: 'numeric'})) * 0.0000000000000001 * AdshieldDomainsize) >>> 0]

export const IsAdShieldCall = (Trace = JustifyCallStack()) => {
	if (Trace.length === 0) {
		return false
	}

	if (HasSubstringSetsInString(Trace[Trace.length - 1], AdshieldDomains)) {
		return true
	}

	const Url = new URL(Trace[Trace.length - 1])

	if (Url.hostname !== location.hostname && Url.pathname === '/loader.min.js') {
		return true
	}

	return false
}