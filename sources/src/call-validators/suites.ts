import {type GetCallStack} from '../utils.js'
import {AdShieldCallAnalyzer} from './analyzers.js'

export type ValidatorFunction = (callStack: ReturnType<typeof GetCallStack>) => boolean;

export const HasOriginOfAdShield: ValidatorFunction = ({Trace}) => AdShieldCallAnalyzer.analyze(Trace[Trace.length - 1])

export const HasAdShield: ValidatorFunction = ({Trace}) => {
	for (const Line of Trace) {
		if (AdShieldCallAnalyzer.analyze(Line)) {
			return true
		}
	}

	return false
}

export const CreateValidationSuite = (Validators: ValidatorFunction[]) => (CallStack: ReturnType<typeof GetCallStack>) => {
	for (const Validator of Validators) {
		if (Validator(CallStack)) {
			return true
		}
	}

	return false
}

export const AdShieldOriginCheck = CreateValidationSuite([HasOriginOfAdShield])

export const AdShieldStrictCheck = CreateValidationSuite([HasAdShield])
