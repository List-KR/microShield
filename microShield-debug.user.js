// ==UserScript==
// @name         microShield
// @encoding     utf-8
// @namespace    https://github.com/List-KR/microShield
// @homepageURL  https://github.com/List-KR/microShield
// @supportURL   https://github.com/List-KR/microShield/issues
// @updateURL    https://cdn.jsdelivr.net/gh/List-KR/microShield@latest/microShield.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/List-KR/microShield@latest/microShield.user.js
// @license      Apache-2.0
//
// @version      4.4.1-adguardcorelib
// @author       PiQuark6046 and contributors
//
// @match        *://ygosu.com/*
// @match        *://m.ygosu.com/*
// @match        *://ad-shield.io/*
// @match        *://feedclick.net/*
// @match        *://sportalkorea.com/*
// @match        *://*.sportalkorea.com/*
// @match        *://enetnews.co.kr/*
// @match        *://*.enetnews.co.kr/*
// @match        *://edaily.co.kr/*
// @match        *://*.edaily.co.kr/*
// @match        *://economist.co.kr/*
// @match        *://*.economist.co.kr/*
// @match        *://etoday.co.kr/*
// @match        *://*.etoday.co.kr/*
// @match        *://hankyung.com/*
// @match        *://*.hankyung.com/*
// @match        *://isplus.com/*
// @match        *://*.isplus.com/*
// @match        *://hometownstation.com/*
// @match        *://*.hometownstation.com/*
// @match        *://inven.co.kr/*
// @match        *://*.inven.co.kr/*
// @match        *://loawa.com/*
// @match        *://*.loawa.com/*
// @match        *://viva100.com/*
// @match        *://*.viva100.com/*
// @match        *://joongdo.co.kr/*
// @match        *://*.joongdo.co.kr/*
// @match        *://kagit.kr/*
// @match        *://*.kagit.kr/*
// @match        *://jjang0u.com/*
// @match        *://*.jjang0u.com/*
// @match        *://cboard.net/*
// @match        *://*.cboard.net/*
// @match        *://a-ha.io/*
// @match        *://*.a-ha.io/*
// @match        *://interfootball.co.kr/*
// @match        *://*.interfootball.co.kr/*
// @match        *://fourfourtwo.co.kr/*
// @match        *://*.fourfourtwo.co.kr/*
// @match        *://newdaily.co.kr/*
// @match        *://*.newdaily.co.kr/*
// @match        *://genshinlab.com/*
// @match        *://*.genshinlab.com/*
// @match        *://thephoblographer.com/*
// @match        *://*.thephoblographer.com/*
// @match        *://dogdrip.net/*
// @match        *://*.dogdrip.net/*
// @match        *://honkailab.com/*
// @match        *://*.honkailab.com/*
// @match        *://warcraftrumbledeck.com/*
// @match        *://*.warcraftrumbledeck.com/*
// @match        *://mlbpark.donga.com/*
// @match        *://*.mlbpark.donga.com/*
// @match        *://gamingdeputy.com/*
// @match        *://*.gamingdeputy.com/*
// @match        *://thestockmarketwatch.com/*
// @match        *://*.thestockmarketwatch.com/*
// @match        *://thesaurus.net/*
// @match        *://*.thesaurus.net/*
// @match        *://forexlive.com/*
// @match        *://*.forexlive.com/*
// @match        *://tweaksforgeeks.com/*
// @match        *://*.tweaksforgeeks.com/*
// @match        *://alle-tests.nl/*
// @match        *://*.alle-tests.nl/*
// @match        *://allthetests.com/*
// @match        *://*.allthetests.com/*
// @match        *://issuya.com/*
// @match        *://*.issuya.com/*
// @match        *://maketecheasier.com/*
// @match        *://*.maketecheasier.com/*
// @match        *://motorbikecatalog.com/*
// @match        *://*.motorbikecatalog.com/*
// @match        *://automobile-catalog.com/*
// @match        *://*.automobile-catalog.com/*
// @match        *://topstarnews.net/*
// @match        *://*.topstarnews.net/*
// @match        *://worldhistory.org/*
// @match        *://*.worldhistory.org/*
// @match        *://etnews.com/*
// @match        *://*.etnews.com/*
// @match        *://iusm.co.kr/*
// @match        *://*.iusm.co.kr/*
// @match        *://meeco.kr/*
// @match        *://*.meeco.kr/*
// @match        *://etoland.co.kr/*
// @match        *://*.etoland.co.kr/*
// @match        *://picrew.me/*
// @match        *://*.picrew.me/*
// @match        *://apkmirror.com/*
// @match        *://*.apkmirror.com/*
// @match        *://uttranews.com/*
// @match        *://*.uttranews.com/*
// @match        *://fntimes.com/*
// @match        *://*.fntimes.com/*
// @match        *://javatpoint.com/*
// @match        *://*.javatpoint.com/*
// @match        *://text-compare.com/*
// @match        *://*.text-compare.com/*
// @match        *://vipotv.com/*
// @match        *://*.vipotv.com/*
// @match        *://lamire.jp/*
// @match        *://*.lamire.jp/*
// @match        *://dt.co.kr/*
// @match        *://*.dt.co.kr/*
// @match        *://g-enews.*/*
// @match        *://*.g-enews.*/*
// @match        *://allthekingz.com/*
// @match        *://*.allthekingz.com/*
// @match        *://gadgets360.com/*
// @match        *://*.gadgets360.com/*
// @match        *://sports.hankooki.com/*
// @match        *://*.sports.hankooki.com/*
// @match        *://ajunews.com/*
// @match        *://*.ajunews.com/*
// @match        *://munhwa.com/*
// @match        *://*.munhwa.com/*
// @match        *://zal.kr/*
// @match        *://*.zal.kr/*
//
// @description        microShield allows AdGuard, uBlock Origin, Brave and ABP to resist against Ad-Shield widely.
// @description:ko     microShield는 AdGuard, uBlock Origin, Brave 와 ABP가 애드쉴드에 널리 저항할 수 있도록 합니다.
//
// @grant        none
// @run-at       document-start
// ==/UserScript==
// Original Srouce Code:
// Libraries: please see 'https://github.com/List-KR/microShield/package.json'.
// Originated from https://github.com/seia-soto/adshield-defuser and https://github.com/seia-soto/userscripts.
"use strict";
(() => {
  // node_modules/crypto-random-string/core.js
  var urlSafeCharacters = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"];
  var numericCharacters = [..."0123456789"];
  var distinguishableCharacters = [..."CDEHKMPRTUWXY012458"];
  var asciiPrintableCharacters = [..."!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"];
  var alphanumericCharacters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"];
  var readUInt16LE = (uInt8Array, offset) => uInt8Array[offset] + (uInt8Array[offset + 1] << 8);
  var generateForCustomCharacters = (length, characters, randomBytes) => {
    const characterCount = characters.length;
    const maxValidSelector = Math.floor(65536 / characterCount) * characterCount - 1;
    const entropyLength = 2 * Math.ceil(1.1 * length);
    let string = "";
    let stringLength = 0;
    while (stringLength < length) {
      const entropy = randomBytes(entropyLength);
      let entropyPosition = 0;
      while (entropyPosition < entropyLength && stringLength < length) {
        const entropyValue = readUInt16LE(entropy, entropyPosition);
        entropyPosition += 2;
        if (entropyValue > maxValidSelector) {
          continue;
        }
        string += characters[entropyValue % characterCount];
        stringLength++;
      }
    }
    return string;
  };
  var generateForCustomCharactersAsync = async (length, characters, randomBytesAsync) => {
    const characterCount = characters.length;
    const maxValidSelector = Math.floor(65536 / characterCount) * characterCount - 1;
    const entropyLength = 2 * Math.ceil(1.1 * length);
    let string = "";
    let stringLength = 0;
    while (stringLength < length) {
      const entropy = await randomBytesAsync(entropyLength);
      let entropyPosition = 0;
      while (entropyPosition < entropyLength && stringLength < length) {
        const entropyValue = readUInt16LE(entropy, entropyPosition);
        entropyPosition += 2;
        if (entropyValue > maxValidSelector) {
          continue;
        }
        string += characters[entropyValue % characterCount];
        stringLength++;
      }
    }
    return string;
  };
  var allowedTypes = /* @__PURE__ */ new Set([
    void 0,
    "hex",
    "base64",
    "url-safe",
    "numeric",
    "distinguishable",
    "ascii-printable",
    "alphanumeric"
  ]);
  var createGenerator = (generateForCustomCharacters2, specialRandomBytes2, randomBytes) => ({ length, type, characters }) => {
    if (!(length >= 0 && Number.isFinite(length))) {
      throw new TypeError("Expected a `length` to be a non-negative finite number");
    }
    if (type !== void 0 && characters !== void 0) {
      throw new TypeError("Expected either `type` or `characters`");
    }
    if (characters !== void 0 && typeof characters !== "string") {
      throw new TypeError("Expected `characters` to be string");
    }
    if (!allowedTypes.has(type)) {
      throw new TypeError(`Unknown type: ${type}`);
    }
    if (type === void 0 && characters === void 0) {
      type = "hex";
    }
    if (type === "hex" || type === void 0 && characters === void 0) {
      return specialRandomBytes2(Math.ceil(length * 0.5), "hex", length);
    }
    if (type === "base64") {
      return specialRandomBytes2(Math.ceil(length * 0.75), "base64", length);
    }
    if (type === "url-safe") {
      return generateForCustomCharacters2(length, urlSafeCharacters, randomBytes);
    }
    if (type === "numeric") {
      return generateForCustomCharacters2(length, numericCharacters, randomBytes);
    }
    if (type === "distinguishable") {
      return generateForCustomCharacters2(length, distinguishableCharacters, randomBytes);
    }
    if (type === "ascii-printable") {
      return generateForCustomCharacters2(length, asciiPrintableCharacters, randomBytes);
    }
    if (type === "alphanumeric") {
      return generateForCustomCharacters2(length, alphanumericCharacters, randomBytes);
    }
    if (characters.length === 0) {
      throw new TypeError("Expected `characters` string length to be greater than or equal to 1");
    }
    if (characters.length > 65536) {
      throw new TypeError("Expected `characters` string length to be less or equal to 65536");
    }
    return generateForCustomCharacters2(length, characters, randomBytes);
  };
  function createStringGenerator(specialRandomBytes2, randomBytes) {
    return createGenerator(generateForCustomCharacters, specialRandomBytes2, randomBytes);
  }
  function createAsyncStringGenerator(specialRandomBytesAsync, randomBytesAsync) {
    return createGenerator(generateForCustomCharactersAsync, specialRandomBytesAsync, randomBytesAsync);
  }

  // node_modules/crypto-random-string/browser.js
  var toHex = (uInt8Array) => [...uInt8Array].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  var toBase64 = (uInt8Array) => btoa(String.fromCodePoint(...uInt8Array));
  var maxEntropy = 65536;
  function getRandomValues(byteLength) {
    const generatedBytes = new Uint8Array(byteLength);
    for (let totalGeneratedBytes = 0; totalGeneratedBytes < byteLength; totalGeneratedBytes += maxEntropy) {
      generatedBytes.set(
        crypto.getRandomValues(new Uint8Array(Math.min(maxEntropy, byteLength - totalGeneratedBytes))),
        totalGeneratedBytes
      );
    }
    return generatedBytes;
  }
  function specialRandomBytes(byteLength, type, length) {
    const generatedBytes = getRandomValues(byteLength);
    const convert = type === "hex" ? toHex : toBase64;
    return convert(generatedBytes).slice(0, length);
  }
  var browser_default = createStringGenerator(specialRandomBytes, getRandomValues);
  var cryptoRandomStringAsync = createAsyncStringGenerator(specialRandomBytes, getRandomValues);

  // sources/src/utils/call-stack.ts
  var GenerateCallStack = () => {
    const E = new Error();
    if (!E.stack) {
      throw new Error("Stack trace is not available!");
    }
    return E.stack;
  };
  var ParseCallStack = (Stack = GenerateCallStack()) => {
    if (Stack.includes("@")) {
      const Raw2 = Stack.split("\n").slice(2);
      const Trace2 = [];
      if (navigator.userAgent.includes("Firefox/")) {
        Raw2.splice(-1, 1);
      }
      for (const Line of Raw2) {
        const Start = Line.indexOf("@") + 1;
        const LastColon = Line.lastIndexOf(":");
        const Dump = LastColon < 0 ? Line.slice(Start) : Line.slice(Start, Line.lastIndexOf(":", LastColon - 1));
        Trace2.push(Dump);
      }
      return Trace2;
    }
    const Raw = Stack.slice(6).split("\n").slice(2);
    const Trace = [];
    for (const Line of Raw) {
      const Dump = Line.slice(
        Line.indexOf("(") + 1 || Line.indexOf("at") + 3,
        Line.lastIndexOf(":", Line.lastIndexOf(":") - 1)
      );
      Trace.push(Dump);
    }
    return Trace;
  };
  var JustifyCallStack = (Stack = ParseCallStack()) => {
    let SkipLines = 0;
    for (const Line of Stack) {
      const Index = Line.indexOf("://");
      if (Index === 5 || Index === 4) {
        break;
      }
      SkipLines++;
    }
    return Stack.slice(SkipLines);
  };

  // sources/src/utils/string.ts
  var HasSubstringSetsInString = (Text, Substrings) => {
    for (const Substring of Substrings) {
      if (Text.includes(Substring)) {
        return true;
      }
    }
    return false;
  };

  // sources/src/adshield/validators.ts
  var AdshieldHostableDomains = [
    "07c225f3.online",
    "css-load.com",
    "html-load.com",
    "content-loader.com",
    "html-load.cc"
  ];
  var AdshieldDomains = [
    ...AdshieldHostableDomains,
    "22d2d4d9-0c15-4a3a-9562-384f2c100146.xyz",
    "f97ae142.online",
    "error-report.com",
    "2aeabdd4-3280-4f03-bc92-1890494f28be.xyz",
    "e1577bbd-2a7e-4bee-b2fe-12a6406689e5.xyz",
    "fadeb9a7-2417-4a51-8d99-0421a5622cbe.xyz",
    "8bf6c3e9-3f4f-40db-89b3-58248f943ce3.online",
    "b714b1e8-4b7d-4ce9-a248-48fd5472aa0b.online",
    "657475b7-0095-478d-90d4-96ce440604f9.online",
    "4e55.xyz",
    "4e68.xyz",
    "b211.xyz",
    "4a0e.xyz",
    "safe-load.xyz",
    "da29e6b8-f018-490f-b25f-39a887fc95e7.xyz",
    "81ac.xyz",
    "e076.xyz",
    "b59c.xyz",
    "48a16802.site",
    "7e809ed7-e553-4e29-acb1-4e3c0e986562.site",
    "d84bc26d.site",
    "b1181fb1.site",
    "f6176563.site",
    "7fc8.site",
    "295c.site"
  ];
  var AdshieldKeywords = [
    ...AdshieldDomains,
    "failed to load website",
    "blocking software"
  ];
  var AdshieldDomainsize = AdshieldHostableDomains.length;
  var GetRandomAdShieldHost = () => AdshieldHostableDomains[Number(browser_default({ length: 16, type: "numeric" })) * 1e-16 * AdshieldDomainsize >>> 0];
  var IsAdShieldCall = (Trace = JustifyCallStack()) => {
    if (Trace.length === 0) {
      return false;
    }
    if (HasSubstringSetsInString(Trace[Trace.length - 1], AdshieldDomains)) {
      return true;
    }
    return false;
  };

  // sources/src/cache/ztinywave.ts
  var source = [
    {
      "id": "kynb",
      "input": '0Nm}ubC9L6k{7("nx>s=Ko]IBw/ySgf%W',
      "output": "a274bcljtv0omw6z9g5p13us8ekhxirfq",
      "reserved1": 121,
      "reserved1Input": "e?`3AU<2Z[;	iJEFV'|Pa8T5j-.v :q#H)",
      "reserved1Output": "eow5rfluq8x4zgj70p13ci6mh2s9tnkabv",
      "reserved2": 110,
      "reserved2Input": "&XD_QOhMrltpR1c4zG\nY",
      "reserved2Output": "c7863qbsmwy54otnhiv1"
    },
    {
      "id": "uyyk",
      "input": "Tx<W|XvcubCz-ekU/ oiM	&:%Ig>2h{s[",
      "output": "mjb0feu6lzx7kqhgop4at831c92ywir5n",
      "reserved1": 118,
      "reserved1Input": "5f;Vt\"qDLB91'm\n}?R6S(Z#A`Jr0HQlKP)",
      "reserved1Output": "qp5r842ycvxjowbaz7uhts9gk6i0emn13f",
      "reserved2": 115,
      "reserved2Input": "NGnE8a_y.FjYO=4w3]p7",
      "reserved2Output": "kn1eho6fjbr40pxc9i2q"
    },
    {
      "id": "rypa",
      "input": "B8 /Y9o]VHC_p3yt\nhTONi5q6IG-r=2g%",
      "output": "ul2ow01j9zq58mfk4cv37absyigteh6xn",
      "reserved1": 112,
      "reserved1Input": `nEeJKa.:P{A;x0UL"4'XFm|}wfvzQ#7ZS(`,
      "reserved1Output": "m8961qwzghu27xeoapn3k5ilvrfjc4syt0",
      "reserved2": 114,
      "reserved2Input": "&j<RDs[W>bukM`c?1)	l",
      "reserved2Output": "6akyhor80m37slfw1vxp"
    },
    {
      "id": "ehor",
      "input": "\"q4\nJ3fkZhj&lt`wH50T='g|(EP[B-QYD",
      "output": "7uil5a3gxbrptvjeymo4c09wqzs682nf1",
      "reserved1": 107,
      "reserved1Input": "<GcpOI/	zAX%6?9o r.bmFRie>Ks_)v;Vu",
      "reserved1Output": "ypwzx2usm8og5q74tanlb6ri3vcehj9kf1",
      "reserved2": 104,
      "reserved2Input": "7y:x218]U#NC}nWaMS{L",
      "reserved2Output": "bja3zkfvqltgu5sw678n"
    },
    {
      "id": "zmpc",
      "input": ".Ip>szJ8EwahYM/v;yKc=f\n([_T q3nOS",
      "output": "5nv1iegza269ju8soky04h3p7rltcxmbq",
      "reserved1": 119,
      "reserved1Input": 'QCABV"]#0jb&Wo6t:UuiHg1rPD4%)RlNk-',
      "reserved1Output": "le4971m5irpukxjv3sq2o8y60gnbzthwfa",
      "reserved2": 102,
      "reserved2Input": "G752e`LXx'Zm}9<	{?F",
      "reserved2Output": "plbi21cxfmo36tn50uq"
    },
    {
      "id": "fwbh",
      "input": `x5A8hE9=
QG1"CuJ'oV(I)>lbW4D#e L6`,
      "output": "wr275yogsj4kv03izcnx1uaqb8pflm6th",
      "reserved1": 57,
      "reserved1Input": "3%t	{2rckfyXR]?NK&/Fgw;TSMmn-7_iU.",
      "reserved1Output": "y93rfts7lxq8vkgjen5m0i6wzhap1ucb2o",
      "reserved2": 101,
      "reserved2Input": "}qB<z`PZ[YH:0sjvaOp",
      "reserved2Output": "6m7kwe3qaohu5g4bz8i"
    },
    {
      "id": "qbuw",
      "input": "i;Uj'[<w\"DT0lZLgS8f#hxsMV}ty:E-)`",
      "output": "3c51goq40pzal9r6xuvtkey2swnj7mihb",
      "reserved1": 102,
      "reserved1Input": "k96YK(v/&ICmGB	5bza?HcP_1W qRoA.=\n",
      "reserved1Output": "mteqh0ys62p1fxj589ro4aunzlig3c7wbk",
      "reserved2": 56,
      "reserved2Input": "{eF%OXrQ2>np3JN]47u",
      "reserved2Output": "9jmanwyqx0s54zuto6h"
    },
    {
      "id": "nloc",
      "input": "x<[ykY%1-sK9_C0Raj#8OLl]/HwhqFU	3",
      "output": "0ozupkrx6qjwnygl34m7i9th1f8v2bec5",
      "reserved1": 97,
      "reserved1Input": '&m2GT5IrP" .B(o=:igbJpWnz7tcvNZ`>\n',
      "reserved1Output": "74hfvbtcj2eroa0ul56yw3inqxkgp9m1zs",
      "reserved2": 115,
      "reserved2Input": "uV6})Q'?D{SeAMX4;Ef",
      "reserved2Output": "91ysxe8luorn6vpciwq"
    },
    {
      "id": "fkad",
      "input": "7z>g}{/W#`c[ZT&sI<2-haKXYn\no)xSFA",
      "output": "niue8tmyacj3l91q65fxbwzrv7po2gk40",
      "reserved1": 115,
      "reserved1Input": "1EHb.|u?p(qfPity'r6O%	w=]9BJRD;:8k",
      "reserved1Output": "phm21v9cw4b73yglnfxotazsuj8qrk650i",
      "reserved2": 104,
      "reserved2Input": 'Qj^ NCUv54le"VMm_30GL',
      "reserved2Output": "bixqrhwn9zjm54o12fe0s"
    },
    {
      "id": "svmm",
      "input": "maG;FT.e2cYzV:%i})g4bp-KUZy<wL\n_?",
      "output": "1nwsr7vk8fh0l3ut92jigqx6z45cpbmyo",
      "reserved1": 97,
      "reserved1Input": 'krBJtD(Qlv^>#[h{X19o&SEAM/n"O= 05P',
      "reserved1Output": "36qz0mv9tne7kwra5i1ujx28oyfspcglh4",
      "reserved2": 101,
      "reserved2Input": "|`	'Rqj6CNWH]I8sx7u3f",
      "reserved2Output": "wegyjpzux38q2a9vmifot"
    },
    {
      "id": "cokq",
      "input": `(r%96jVK7{kP	gDhOcFs'1;M"IuQZ/yqA`,
      "output": "izxsomqh3p8bvga49w7fy2tluc6e5n01r",
      "reserved1": 106,
      "reserved1Input": "^zG[wm\nC`=8Bv><&]0:T L#px3Xli-n).4",
      "reserved1Output": "p91tzx4ibshwf3qyen506ugo2mkv8lrjc7",
      "reserved2": 107,
      "reserved2Input": "EYf?RN2a}WbU5eH_|StJo",
      "reserved2Output": "sm8fkhrwa94y0eupj2nq1"
    },
    {
      "id": "znbg",
      "input": "(	EHC_;s/.WgNfVl z9MYhQ}Tj:JFUS)#",
      "output": "o5hkm78up2yxwvzsj0at1bglr6ei43ncq",
      "reserved1": 102,
      "reserved1Input": `KZi{^4<m"5'c%
XLurypqA8[eIw-DR|kbB`,
      "reserved1Output": "ou7ercvw9l01yghnfip685bzxqtak3sjm4",
      "reserved2": 57,
      "reserved2Input": "=6a0G>POo37nv?x&1`]2t",
      "reserved2Output": "crxmjf7yhgt6o3p8l09iv"
    }
  ];

  // sources/src/config.ts
  var Config = {
    Debug: true
  };

  // sources/src/utils/logger.ts
  var CreateDebug = (Namespace) => {
    const Header = `[microShield:${Namespace}]`;
    return new Proxy(console.debug, {
      apply(Target, ThisArg, ArgArray) {
        Reflect.apply(Target, ThisArg, [Header, ...ArgArray]);
      }
    });
  };

  // sources/src/utils/secret.ts
  var Win = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
  var Debug = CreateDebug("secret");
  var Secret = browser_default({ length: 20 });
  var PprintCall = (Name, WasBlocked, V) => {
    Debug(WasBlocked ? "-" : "+", "name=" + Name, "v=", V, "stack=", GenerateCallStack());
  };
  var ProtectFunction = (F, Options) => new Proxy(F, {
    apply(Target, ThisArg, ArgArray) {
      const E = () => {
        PprintCall(Options.Name, true, ArgArray);
        throw new Error();
      };
      if (IsAdShieldCall()) {
        E();
      }
      if (Options.CheckArguments) {
        for (const Arg of ArgArray.filter((Arg2) => typeof Arg2 === "string")) {
          if (HasSubstringSetsInString(Arg, AdshieldKeywords)) {
            E();
          }
        }
        for (const Arg of ArgArray.filter((Arg2) => typeof Arg2 === "function")) {
          if (HasSubstringSetsInString(Arg.toString(), AdshieldKeywords)) {
            E();
          }
        }
        for (const Arg of ArgArray.filter((Arg2) => Arg2 instanceof URL)) {
          if (HasSubstringSetsInString(Arg.href, AdshieldKeywords)) {
            E();
          }
        }
      }
      if (Options.CheckErrorStack && HasSubstringSetsInString(location.hostname, Options.CheckErrorStack)) {
        for (const Arg of ArgArray.filter((Arg2) => Arg2 instanceof Error)) {
          if (HasSubstringSetsInString(Arg.stack ?? "", [...AdshieldKeywords, "microShield", `@[native code]
E@${location.protocol}//${location.hostname + location.pathname}:`])) {
            E();
          }
        }
      }
      if (Options.CheckArgumentFunctions) {
        for (const CheckFunction of Options.CheckArgumentFunctions) {
          if (!CheckFunction(ArgArray)) {
            E();
          }
        }
      }
      if (Options.CheckOutputs) {
        const Output = Reflect.apply(Target, ThisArg, ArgArray);
        if (HasSubstringSetsInString(Output.toLowerCase(), AdshieldKeywords)) {
          E();
        }
      }
      if (Config.Debug) {
        PprintCall(Options.Name, false, ArgArray);
      }
      return Reflect.apply(Target, ThisArg, ArgArray);
    },
    setPrototypeOf(Target, V) {
      PprintCall(Options.Name, true, V);
      throw new Error();
    }
  });
  var UnprotectedFetch = fetch;
  var ProtectedDescriptors = /* @__PURE__ */ new Set();
  var ProtectDescriptors = (O, Key, NewProperty) => {
    if (ProtectedDescriptors.size === 0) {
      const DefineProperty = ProtectFunction(Object.defineProperty, {
        CheckArgumentFunctions: [
          // ArgArray => !ProtectedDescriptors.has(ArgArray[0][ArgArray[1]])
        ]
      });
      const DefineProperties = ProtectFunction(Object.defineProperties, {
        CheckArgumentFunctions: [
          (ArgArray) => {
            for (const TargetProperty of Object.keys(ArgArray[1])) {
              if (ProtectedDescriptors.has(ArgArray[0][TargetProperty])) {
                return false;
              }
            }
            return true;
          }
        ]
      });
      ProtectedDescriptors.add(DefineProperty);
      ProtectedDescriptors.add(DefineProperties);
      Object.defineProperty(Win.Object, "defineProperty", {
        value: DefineProperty
      });
      Object.defineProperties(Win.Object, {
        defineProperty: {
          value: DefineProperty
        },
        defineProperties: {
          value: DefineProperties
        }
      });
    }
    Object.defineProperty(O, Key, {
      value: NewProperty
    });
    ProtectedDescriptors.add(NewProperty);
  };
  var ProtectFunctionDescriptors = (O, Key, Options) => {
    const Property = O[Key];
    if (Options === void 0) {
      Options = {};
    }
    if (Options.Name === void 0) {
      Options.Name = Property.name;
    }
    ProtectDescriptors(O, Key, ProtectFunction(Property, Options));
  };

  // sources/src/adshield/resources.ts
  var GetCachableHtml = async (Url) => {
    const ResponseRaw = await UnprotectedFetch(Url, {
      cache: "force-cache"
    });
    const Text = await ResponseRaw.text();
    if (Text.length === 0) {
      throw new Error("Failed to fetch resource!");
    }
    return "<style>" + Text + "</style>";
  };
  var GetResourceToken = async (ScriptUrl) => {
    const ResponseRaw = await UnprotectedFetch(ScriptUrl, {
      cache: "force-cache"
    });
    const Text = await ResponseRaw.text();
    const Match = /eyJ[\w-]*\.eyJ[\w-]*\.[\w-]*/.exec(Text);
    if (Match === null) {
      throw new Error("Failed to match predefined token in the script!");
    }
    return Match[0];
  };
  var ResolveResourceUrls = async (Html, Token) => {
    const Pattern = /(resources:\/\/[^'"]+)/g;
    const Host = GetRandomAdShieldHost();
    let NewHtml = "";
    let Matches = null;
    while ((Matches = Pattern.exec(Html)) !== null) {
      const Url = "https://" + Host + "/resources/" + Matches[1].slice(
        12
        /* 'resources://'.length */
      ) + "?token=" + Token;
      NewHtml += await GetCachableHtml(Url).catch((Errors) => {
        console.error(Errors);
        return "";
      });
    }
    return NewHtml;
  };

  // sources/src/utils/storage.ts
  var ProtectedPrefix = "asdf-";
  var ProtectStorageApis = () => {
    ProtectFunctionDescriptors(window.Storage.prototype, "setItem", {
      CheckArgumentFunctions: [
        (ArgArray) => !ArgArray[0].startsWith(ProtectedPrefix) || ArgArray[2] === Secret
      ]
    });
    ProtectFunctionDescriptors(window.Storage.prototype, "removeItem", {
      CheckArgumentFunctions: [
        (ArgArray) => !ArgArray[0].startsWith(ProtectedPrefix) || ArgArray[1] === Secret
      ]
    });
    ProtectFunctionDescriptors(window.Storage.prototype, "clear");
  };

  // sources/src/utils/entities.ts
  var Debug2 = CreateDebug("entities");
  var InsertTextEntity = (Entity) => {
    const SelectedNode = document.querySelector(Entity.Selector);
    if (!SelectedNode) {
      throw new Error("The target node was not found in the frame!");
    }
    SelectedNode.before(Entity.TextContent);
    SelectedNode.remove();
  };
  var InsertHeadEntity = (Entity) => {
    document.head.insertAdjacentHTML("beforeend", Entity.Html);
  };
  var InsertEntity = async (Entity) => {
    if (Entity.Type === 1 /* Head */) {
      InsertHeadEntity(Entity);
    } else if (Entity.Type === 0 /* Text */) {
      InsertTextEntity(Entity);
    }
  };
  var InsertEntities = async (Entities) => Promise.allSettled(Entities.map(async (Entity) => InsertEntity(Entity)));

  // sources/src/utils/frame.ts
  var DocumentReady = async (Doc = document) => {
    if (Doc.readyState === "loading") {
      return new Promise((Resolve) => {
        Doc.addEventListener("readystatechange", () => {
          Resolve();
        });
      });
    }
  };

  // sources/src/loaders/ztinywave.ts
  var Debug3 = CreateDebug("ztinywave");
  var Decode = (Payload) => {
    const Id = Payload.slice(0, 4);
    const Key = source.find((Store) => Store.id === Id);
    if (!Key) {
      throw new Error("DEFUSER_ZTINYWAVE_KEY_NOT_FOUND");
    }
    const Ra = String.fromCharCode(Key.reserved1);
    const Rb = String.fromCharCode(Key.reserved2);
    const Unwrap = (Input, Output, Char) => {
      const Index = Output.indexOf(Char);
      if (Index >= 0) {
        return Input[Index];
      }
      return Char;
    };
    let Mode = 0;
    const Data = Payload.slice(4).split("").map((Char) => {
      if (!Mode) {
        if (Char === Ra) {
          Mode = 1;
          return "";
        }
        if (Char === Rb) {
          Mode = 2;
          return "";
        }
      }
      if (Mode === 1) {
        Mode = 0;
        if (Key.reserved1Output.includes(Char)) {
          return Unwrap(Key.reserved1Input, Key.reserved1Output, Char);
        }
        return Unwrap(Key.input, Key.output, Char) + Char;
      }
      if (Mode === 2) {
        Mode = 0;
        if (Key.reserved2Output.includes(Char)) {
          return Unwrap(Key.reserved2Input, Key.reserved2Output, Char);
        }
        return Unwrap(Key.input, Key.output, Char) + Char;
      }
      return Unwrap(Key.input, Key.output, Char);
    }).join("");
    return JSON.parse(Data);
  };
  var Extract = async () => {
    const Sources = [];
    const Pick = () => {
      const Targets = document.querySelectorAll('script[data]:not([data=""]),script[wp-data]:not([wp-data=""])');
      for (const Target of Targets) {
        const Script = Target.getAttribute("src");
        const Data = Target.getAttribute("data");
        if (Script && Data) {
          Sources.push({
            Script,
            Data
          });
        }
      }
    };
    Pick();
    if (Sources.length === 0) {
      await DocumentReady(document);
      Pick();
    }
    if (Sources.length === 0) {
      throw new Error("DEFUSER_ZTINYWAVE_TARGET_NOT_FOUND");
    }
    return Sources;
  };
  var Tinywave = async () => {
    const Entities = [];
    const Sources = await Extract();
    const SourcesResolves = Sources.map(async (Source) => {
      Debug3("source", Source);
      const Payload = Decode(Source.Data);
      Debug3("payload", Payload);
      const PublicEntities = [];
      const PrivateEntities = [];
      for (const Item of Payload) {
        if (Item.tags) {
          if (Item.tags.includes("resources://")) {
            PrivateEntities.push({
              Type: 1 /* Head */,
              Html: Item.tags
            });
          } else {
            PublicEntities.push({
              Type: 1 /* Head */,
              Html: Item.tags
            });
          }
        }
      }
      void InsertEntities(PublicEntities);
      const Token = await GetResourceToken(Source.Script);
      for (const Entity of PrivateEntities) {
        if (Entity.Type === 1 /* Head */) {
          Entity.Html = await ResolveResourceUrls(Entity.Html, Token);
        }
      }
      void InsertEntities(PrivateEntities);
      Entities.push(...PublicEntities, ...PrivateEntities);
      return Entities;
    });
    Debug3("sources resolves", await Promise.allSettled(SourcesResolves));
  };

  // sources/src/loaders/basedrop.ts
  var Debug4 = CreateDebug("[microShield:basedrop]");
  var BaseDrop = async () => {
    await DocumentReady(document);
    let AppenDant = "";
    for (const TargetNode of document.querySelectorAll("script[wp-data]")) {
      const Attribute = TargetNode.getAttribute("wp-data");
      if (!Attribute) {
        Debug4("empty attribute", TargetNode);
        continue;
      }
      let Decoded;
      try {
        Decoded = new TextDecoder().decode(Uint8Array.from(atob(Attribute), (C) => C.charCodeAt(0)));
      } catch (e) {
        Debug4("failed to decode base64 stream", e);
        continue;
      }
      if (!Decoded.startsWith("<")) {
        Debug4("failed to decode encoded text", Decoded);
        continue;
      }
      AppenDant += Decoded;
    }
    if (!AppenDant) {
      return;
    }
    document.head.insertAdjacentHTML("beforeend", AppenDant);
  };

  // sources/src/index.ts
  var Hook = () => {
    const Win2 = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
    ProtectFunctionDescriptors(Win2, "Error");
    ProtectFunctionDescriptors(Win2.EventTarget.prototype, "addEventListener");
    ProtectFunctionDescriptors(Win2.MessagePort.prototype, "postMessage");
    ProtectFunctionDescriptors(Win2.Element.prototype, "remove");
    ProtectFunctionDescriptors(Win2.Element.prototype, "removeChild");
    ProtectFunctionDescriptors(Win2.Element.prototype, "insertAdjacentElement");
    ProtectFunctionDescriptors(Win2.Element.prototype, "insertAdjacentHTML");
    ProtectFunctionDescriptors(Win2, "setInterval");
    ProtectFunctionDescriptors(Win2, "setTimeout", { CheckArguments: true });
    ProtectFunctionDescriptors(Win2.Element.prototype, "setAttribute", { CheckArguments: true });
    ProtectFunctionDescriptors(Win2.Element.prototype, "setAttributeNS", { CheckArguments: true });
    ProtectFunctionDescriptors(Win2.document, "createElement");
    ProtectFunctionDescriptors(Win2.document, "createElementNS");
    ProtectFunctionDescriptors(Win2, "alert", { CheckArguments: true });
    ProtectFunctionDescriptors(Win2, "confirm", { CheckArguments: true });
    ProtectFunctionDescriptors(Win2, "atob", { CheckOutputs: true });
    ProtectFunctionDescriptors(Win2, "decodeURI");
    ProtectFunctionDescriptors(Win2, "decodeURIComponent");
    ProtectFunctionDescriptors(Win2.console, "log", { CheckErrorStack: ["jjang0u.com"] });
    ProtectStorageApis();
    ProtectFunctionDescriptors(Win2, "fetch", { CheckArguments: true });
  };
  var Observe = () => {
    const Debug5 = CreateDebug("observe");
    const Observer = new MutationObserver((Mutations) => {
      for (const Mutation of Mutations) {
        for (const AddedNode of Mutation.addedNodes) {
          const Matched = AddedNode instanceof HTMLElement && HasSubstringSetsInString(AddedNode.innerHTML, AdshieldKeywords);
          if (Matched && location.hostname !== "text-compare.com" || Matched && location.hostname === "text-compare.com" && AddedNode.className !== "text-compare") {
            AddedNode.remove();
            Debug5(AddedNode);
          }
        }
      }
    });
    Observer.observe(document.body, {
      subtree: true,
      childList: true
    });
  };
  var Bootstrap = () => {
    Hook();
    void Tinywave();
    void BaseDrop();
    void DocumentReady().then(() => {
      Observe();
    });
  };
  Bootstrap();
})();
