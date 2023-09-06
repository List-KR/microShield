// eslint-disable-next-line @typescript-eslint/naming-convention
type unsafeWindowType = typeof window & typeof globalThis;
declare const unsafeWindow: unsafeWindowType;
// eslint-disable-next-line no-negated-condition
const win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
/* eslint-disable no-eval */
import {useDebug, useBannedKeywords} from '../utils';

const debug = useDebug('[microShield:evalInterceptors]');

export const useEvalInterceptor = () => {
	const evalProxy = new Proxy(eval, {
		apply(target: typeof eval, thisArg: undefined | string, argLists: string[] | [string]) {
			if ((!argLists.length && typeof thisArg === 'undefined') || (!useBannedKeywords(argLists[0] ?? thisArg))) {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-return
				return Reflect.apply(target, thisArg, argLists);
			}

			debug('eval:ban', argLists);
		},
	});
	Object.defineProperty(win, 'eval', {
		value: evalProxy,
	});
};
