// ==UserScript==
// @name         microShield
// @encoding     utf-8
// @namespace    https://github.com/List-KR/microShield
// @homepageURL  https://github.com/List-KR/microShield
// @supportURL   https://github.com/List-KR/microShield/issues
// @updateURL    https://github.com/List-KR/microShield/raw/main/microShield.user.js
// @downloadURL  https://github.com/List-KR/microShield/raw/main/microShield.user.js
// @license      MIT
//
// @version      0.0.1
// @author       PiQuark6046 and contributors
//
// @match        *://ad-shield.team/*
// @match        *://algumon.com/*
// @match        *://*.algumon.com/*
// @match        *://loawa.com/*
// @match        *://*.loawa.com/*
// @match        *://*.inven.co.kr/*
// @match        *://ygosu.com/*
// @match        *://ppss.kr/*
// @match        *://ad-shield.io/*
// @match        *://sports.donga.com/*
// @match        *://mlbpark.donga.com/*
// @match        *://etoland.co.kr/*
// @match        *://*.etoland.co.kr/*
// @match        *://*.op.gg/*
// @match        *://tgd.kr/*
// @match        *://feedclick.net/*
// @match        *://*.reddit.com/*
// @match        *://*.nytimes.com/*
// @match        *://*.forbes.com/*
// @exclude      *://myaccount.nytimes.com/*
// @exclude      *://tgd.kr/member/login_page*
// @exclude      *://member.op.gg/*
// @exclude      *://etoland.co.kr/bbs/register.php
// @exclude      *://etoland.co.kr/bbs/password_lost.php
// @exclude      *://secure.donga.com/*
// @exclude      *://member.inven.co.kr/*
//
// @description        microShield allows the adblock community to resist against Ad-Shield widely.
//
// @grant        none
// @run-at       document-start
// ==/UserScript==

(() => {
    const isAdObject = (content) => {
        return content.indexOf('_id":"') >= 0 ||
            content.indexOf('ad-shield.io') >= 0
    }

    const findModifierType = (ref) => {
        if (ref.click_url) {
            return 'persist'
        }
        if (ref.inventory_id) {
            return 'internal'
        }

        return 'noop'
    }

    const modifiers = {
        noop: (ref) => ref,
        persist: (ref) => ref, // no required
        internal: (ref) => {
            ref.click_url = '/'
            ref.inventory_id = '0'
            ref.tracker_urls2 = []

            return ref
        }
    }

    const modify = (ref) => {
        const type = findModifierType(ref)

        return modifiers[type](ref)
    }

    unsafeWindow.JSON.parse = new Proxy(
        unsafeWindow.JSON.parse,
        {
            apply(target, thisArg, argsList) {
                const [source] = argsList
                const original = Reflect.apply(target, thisArg, argsList)

                if (!isAdObject(source)) {
                    return original
                }

                // normalize
                let ref = original

                while (Array.isArray(ref[0])) {
                    ref = original[0]
                }

                if (Array.isArray(ref)) {
                    for (let i = 0, l = ref.length; i < l; i++) {
                        ref[i] = modify(ref[i])
                    }
                } else {
                    ref = modify(ref)
                }

                return original
            }
        }
    )
})()
