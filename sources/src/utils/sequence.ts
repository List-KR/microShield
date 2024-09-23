import type * as ErrorStackParser from 'error-stack-parser'

export function MatchSpecificSeq(StackFrames: ReturnType<typeof ErrorStackParser.parse>, Patterns: Array<RegExp | undefined>): boolean {
  return StackFrames.some((StackFrame, I) => 
    Patterns.every((Pattern, J) => {
      if (I + J >= StackFrames.length) return false
      return Pattern === undefined || Pattern.test(typeof StackFrames[I + J].functionName !== 'undefined' ? StackFrames[I + J].functionName as string : '')
    })
  )
}
