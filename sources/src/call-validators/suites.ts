import {type getCallStack} from '../utils.js'
import {adShieldCallAnalyzer} from './analyzers.js'

export type ValidatorFunction = (callStack: ReturnType<typeof getCallStack>) => boolean;

export const hasOriginOfAdShield: ValidatorFunction = ({trace}) => adShieldCallAnalyzer.analyze(trace[trace.length - 1])

export const hasAdShield: ValidatorFunction = ({trace}) => {
	for (const line of trace) {
		if (adShieldCallAnalyzer.analyze(line)) {
			return true
		}
	}

	return false
}

export const createValidationSuite = (validators: ValidatorFunction[]) => (callStack: ReturnType<typeof getCallStack>) => {
	for (const validator of validators) {
		if (validator(callStack)) {
			return true
		}
	}

	return false
}

export const adShieldOriginCheck = createValidationSuite([hasOriginOfAdShield])

export const adShieldStrictCheck = createValidationSuite([hasAdShield])
