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
// @version      2.2.1
// @author       HoJeong Go and contributors
//
// @match        *://ad-shield.team/*
// @match        *://algumon.com/*
// @match        *://*.algumon.com/*
// @match        *://loawa.com/*
// @match        *://*.loawa.com/*
// @match        *://ygosu.com/*
// @match        *://m.ygosu.com/*
// @match        *://ppss.kr/*
// @match        *://ad-shield.io/*
// @match        *://feedclick.net/*
// @match        *://sportalkorea.com/*
// @match        *://*.sportalkorea.com/*
//
// @description        microShield allows the adblock community to resist against Ad-Shield widely.
// @description:ko     microShield는 애드블록 커뮤니티가 애드쉴드에 널리 저항할 수 있도록 합니다.
//
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(() => {
  if (typeof unsafeWindow === 'undefined') {
    unsafeWindow = window
  }

  const secret = (Date.now() * Math.random()).toString(36)

  // Legacy
  const w = unsafeWindow
  const _atob = atob
  const _json_parse = JSON.parse

  // Utils
  const waitForDomLoad = () => new Promise((resolve, _reject) => {
    if (document.readyState === 'complete') {
      resolve(null)
    }

    // Catch all "interactive" and "complete" state
    w.document.addEventListener('readystatechange', () => resolve(null))
  })

  const selectorCallback = (selector = '', callback) => {
    const node = w.document.querySelector(selector)

    if (node && callback) {
      callback(node)
    }
  }

  const copyString = (text) => (' ' + text).slice(1)

  const randomString = (length) => {
    let result = ''

    while (result.length < length) {
      result += Math.random().toString(36).slice(2)
    }

    return result.slice(0, length)
  }

  // Hash
  // https://gist.github.com/hyamamoto/fd435505d29ebfa3d9716fd2be8d42f0
  const hash = (text) => {
    const length = text.length
    let token = 0
    let i = 0

    if (length > 0) {
      while (i < length) {
        token = (token << 5) - token + text.charCodeAt(i++) | 0
      }
    }

    return token
  }

  // Analysis
  const analysisCache = {}
  const analysis = (payload) => {
    const token = hash(payload)

    if (typeof analysisCache[token] !== 'undefined') {
      return analysisCache[token]
    }

    try {
      payload = decodeURIComponent(escape(_atob(payload)))

      if (
        payload.includes('<<1')
        || payload.includes('ad-shield')
        || payload.includes('scrollWidth')
        || payload.includes('createDynamicsCompressor')
        || payload.includes('CanvasCaptureMediaStream')
        || payload.includes('shield')
        || payload.includes('innerHeight')
        || payload.includes('visitor_fingerprint')
      ) {
        analysisCache[token] = payload

        return analysisCache[token]
      }
    } catch (_error) {
      analysisCache[token] = false

      return false
    }
  }

  const extract = (payload) => {
    if (Array.isArray(payload) && payload.length === 1) {
      return extract(payload[0])
    } else if (typeof payload === 'object' && Object.keys(payload).length === 1) {
      for (const value of payload) {
        return extract(value)
      }
    }

    return payload
  }

  const possibleKeys = ['id', 'class', 'tag_name', 'insert_attrs']
  const isHostage = (payload) => {
    for (const key of Object.keys(payload[0])) {
      if (possibleKeys.indexOf(key)) {
        return true
      }
    }

    return false
  }

  // Parse
  const parse = (payload, altKey) => {
    const text = _atob(payload)
    let key = altKey

    if (typeof key === 'undefined') {
      key = text.charCodeAt(0)
    }

    let value = ''

    for (let i = 1; i < text.length; i++) {
      value += String.fromCharCode(text.charCodeAt(i) ^ key)
    }

    return decodeURIComponent(escape(value))
  }

  // Restore
  const restore = (data) => {
    for (const hostage of data) {
      try {
        const isElementIdSpecified = !!hostage.id
        const tagName = hostage.tag_name || ''
        const selector = isElementIdSpecified
          ? (tagName + '#' + hostage.id)
          : (tagName + '.' + (hostage.class || hostage.class_name))
        const node = w.document.querySelector(selector)

        if (hostage.text) {
          // There is another way to restore the text node by creating DocumentFragment, but it was slower.
          // document.createRange().createContextualFragment()
          node.before(hostage.text)
          node.remove()
        }
        if (hostage.insert_attrs) {
          for (const attribute of hostage.insert_attrs) {
            node.setAttribute(attribute.key, attribute.val)
          }
        }
      } catch (_error) { }
    }
  }

  // Fallbacks
  const fallbacks = [
    (matches) => {
      console.log(matches)
    },
    () => {
      w.atob = new Proxy(
        _atob,
        {
          apply() {
            throw new ReferenceError('atob is not defined for malware')
          }
        }
      )
    }
  ]
  const defuserFallback = (matches = []) => {
    Promise
      .all(fallbacks.map(f => f(matches)))
      .catch(console.log)
  }

  // Defuse
  const defuser = (payload) => {
    if (!payload) {
      return
    }

    const pattern = /\w+\("([^"\n ]+=?=?)"\)/g
    const matches = []
    let match
    let found

    while ((match = pattern.exec(payload)) !== null) {
      try {
        const [, phrase] = match
        const decoded = parse(phrase)

        matches.push(decoded)

        const data = extract(_json_parse(decoded))

        if (!isHostage(data)) {
          console.log(data)

          continue
        }

        found = true

        restore(data)
      } catch (_error) { }
    }

    document.cookie = 'as_uuid=; expires=-1'
    document.cookie = 'as_uuid='
      + randomString(8) + '-'
      + randomString(4) + '-'
      + '4' + randomString(3) + '-'
      + [8, 9, 'A', 'B'][Math.floor(Math.random() * 4)] + randomString(4) + '-'
      + randomString(12) + ';'

    if (!found) {
      // Try to download metadata from remote server
      // Passing matches are for future use
      defuserFallback(matches)
    }
  }

  const updateModuleTypes = async (selector) => {
    const nodes = Array
      .from(w.document.querySelectorAll(selector))
      .sort((a, b) => -(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING || -1))

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      const scriptElement = w.document.createElement('script')

      // Defer
      const scriptElementLoaded = new Promise((resolve, _reject) => {
        if (!node.hasAttribute('src')) {
          scriptElement.textContent = node.innerHTML

          resolve(null)
        }

        scriptElement.addEventListener('load', () => resolve(null))
        scriptElement.addEventListener('error', () => resolve(null))
      })

      for (const attribute of node.attributes) {
        scriptElement.setAttribute(attribute.name, attribute.value)
      }

      if (node.hasAttribute('type')) {
        scriptElement.setAttribute('type', node.getAttribute('type').split('_').pop())
      }

      try {
        node.parentNode.appendChild(scriptElement)
        node.remove()
      } catch (_error) { }

      // Wait for forcibly deferred script
      await scriptElementLoaded
    }
  }

  const inlineDefuser = (force = w.document.readyState !== 'loading') => {
    w.document.write = console.log
    w.document.writeln = console.log

    if (force) {
      return updateModuleTypes('script[type*="_"]:not([adshield-skip-harvest])')
    }

    w.addEventListener('load', (_event) => {
      updateModuleTypes('script[type*="_"]:not([adshield-skip-harvest])')
    })
  }

  // For users using UserScript app on App Store
  const runtimeDefuser = () => {
    // Make some errors to intercept the running logic
    // Sure we can use runtimeDefuser everywhere, but it hurts atob at anytime
    w.atob = new Proxy(
      w.atob,
      {
        apply() {
          throw new ReferenceError('atob is not defined for malware')
        }
      }
    )

    // Just give fallback for post-load environment
    defuserFallback()
    inlineDefuser()
  }

  // Deferred definitions
  fallbacks.push(
    async () => {
      await waitForDomLoad()

      selectorCallback('p[style*="display"][style*="none"][id]', element => {
        const source = copyString(element.textContent)

        element.remove()
        defuser(decodeURIComponent(escape(_atob(source))))
      })

      selectorCallback('script[src][data]', element => {
        const source = copyString(element.getAttribute('data'))

        restore(extract(_json_parse(parse(source))).hostages)
        element.remove()
      })
    }
  )

  // Runner
  if (document.readyState !== 'loading') {
    return runtimeDefuser()
  }

  w.atob = new Proxy(
    w.atob,
    {
      apply(target, thisArg, argsList) {
        const [source, code] = argsList
        const original = Reflect.apply(target, thisArg, argsList)

        const malware = analysis(source)

        if (!malware || code === secret) {
          return original
        }

        defuser(malware)

        throw new ReferenceError('atob is not defined for malware')
      }
    }
  )

  inlineDefuser()
})()