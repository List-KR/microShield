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
	'4a0e.xyz',
	'safe-load.xyz',
	'da29e6b8-f018-490f-b25f-39a887fc95e7.xyz',
	'81ac.xyz',
	'e076.xyz',
	'b59c.xyz',
	'48a16802.site',
	'7e809ed7-e553-4e29-acb1-4e3c0e986562.site',
	'd84bc26d.site',
	'b1181fb1.site',
	'f6176563.site',
	'7fc8.site',
	'295c.site',
	'3a2e.site',
	'58e0.site',
	'bbd8.site',
	'ca3d.site',
	'ec44.site',
	'f090.site',
	'02777e.site',
	'05751c.site',
	'8acc5c.site',
	'b9f25b.site',
	'4aae8f.site',
	'07e197.site',
	'f2f8.xyz',
	'a67d12.xyz',
	'ca9246.xyz',
	'a49ebd.xyz',
	'485728.xyz',
	'caa2c4.xyz',
	'd980ed.xyz',
	'4e04f7.xyz',
	'68646f.xyz',
	'1350c3.xyz',
	'20519a.xyz',
	'634369.xyz',
	'd8b0a5.xyz',
	'5fd6bc.xyz',
	'1116c5.xyz',
	'1a1fb6.xyz',
	'7608d5.xyz',
	'977878.xyz',
	'bc98ad.xyz',
	'11c7a3.xyz',
	'5ceea3.xyz',
	'97b448.xyz',
	'dd2270.xyz',
	'605efe.xyz'
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