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
// @version      4.5.18
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
// @match        *://wfmz.com/*
// @match        *://*.wfmz.com/*
// @match        *://thestar.co.uk/*
// @match        *://*.thestar.co.uk/*
// @match        *://yorkshirepost.co.uk/*
// @match        *://*.yorkshirepost.co.uk/*
// @match        *://mydaily.co.kr/*
// @match        *://*.mydaily.co.kr/*
// @match        *://raenonx.cc/*
// @match        *://*.raenonx.cc/*
// @match        *://ndtvprofit.com/*
// @match        *://*.ndtvprofit.com/*
// @match        *://badmouth1.com/*
// @match        *://*.badmouth1.com/*
// @match        *://logicieleducatif.fr/*
// @match        *://*.logicieleducatif.fr/*
// @match        *://taxguru.in/*
// @match        *://*.taxguru.in/*
// @match        *://islamicfinder.org/*
// @match        *://*.islamicfinder.org/*
// @match        *://aikatu.jp/*
// @match        *://*.aikatu.jp/*
// @match        *://secure-signup.net/*
// @match        *://*.secure-signup.net/*
// @match        *://globalrph.com/*
// @match        *://*.globalrph.com/*
// @match        *://sportsrec.com/*
// @match        *://*.sportsrec.com/*
// @match        *://reportera.co.kr/*
// @match        *://*.reportera.co.kr/*
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
"use strict";(()=>{var urlSafeCharacters=[..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"],numericCharacters=[..."0123456789"],distinguishableCharacters=[..."CDEHKMPRTUWXY012458"],asciiPrintableCharacters=[..."!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"],alphanumericCharacters=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"],readUInt16LE=(uInt8Array,offset)=>uInt8Array[offset]+(uInt8Array[offset+1]<<8),generateForCustomCharacters=(length,characters,randomBytes)=>{let characterCount=characters.length,maxValidSelector=Math.floor(65536/characterCount)*characterCount-1,entropyLength=2*Math.ceil(1.1*length),string="",stringLength=0;for(;stringLength<length;){let entropy=randomBytes(entropyLength),entropyPosition=0;for(;entropyPosition<entropyLength&&stringLength<length;){let entropyValue=readUInt16LE(entropy,entropyPosition);entropyPosition+=2,!(entropyValue>maxValidSelector)&&(string+=characters[entropyValue%characterCount],stringLength++)}}return string},generateForCustomCharactersAsync=async(length,characters,randomBytesAsync)=>{let characterCount=characters.length,maxValidSelector=Math.floor(65536/characterCount)*characterCount-1,entropyLength=2*Math.ceil(1.1*length),string="",stringLength=0;for(;stringLength<length;){let entropy=await randomBytesAsync(entropyLength),entropyPosition=0;for(;entropyPosition<entropyLength&&stringLength<length;){let entropyValue=readUInt16LE(entropy,entropyPosition);entropyPosition+=2,!(entropyValue>maxValidSelector)&&(string+=characters[entropyValue%characterCount],stringLength++)}}return string},allowedTypes=new Set([void 0,"hex","base64","url-safe","numeric","distinguishable","ascii-printable","alphanumeric"]),createGenerator=(generateForCustomCharacters2,specialRandomBytes2,randomBytes)=>({length,type,characters})=>{if(!(length>=0&&Number.isFinite(length)))throw new TypeError("Expected a `length` to be a non-negative finite number");if(type!==void 0&&characters!==void 0)throw new TypeError("Expected either `type` or `characters`");if(characters!==void 0&&typeof characters!="string")throw new TypeError("Expected `characters` to be string");if(!allowedTypes.has(type))throw new TypeError(`Unknown type: ${type}`);if(type===void 0&&characters===void 0&&(type="hex"),type==="hex"||type===void 0&&characters===void 0)return specialRandomBytes2(Math.ceil(length*.5),"hex",length);if(type==="base64")return specialRandomBytes2(Math.ceil(length*.75),"base64",length);if(type==="url-safe")return generateForCustomCharacters2(length,urlSafeCharacters,randomBytes);if(type==="numeric")return generateForCustomCharacters2(length,numericCharacters,randomBytes);if(type==="distinguishable")return generateForCustomCharacters2(length,distinguishableCharacters,randomBytes);if(type==="ascii-printable")return generateForCustomCharacters2(length,asciiPrintableCharacters,randomBytes);if(type==="alphanumeric")return generateForCustomCharacters2(length,alphanumericCharacters,randomBytes);if(characters.length===0)throw new TypeError("Expected `characters` string length to be greater than or equal to 1");if(characters.length>65536)throw new TypeError("Expected `characters` string length to be less or equal to 65536");return generateForCustomCharacters2(length,characters,randomBytes)};function createStringGenerator(specialRandomBytes2,randomBytes){return createGenerator(generateForCustomCharacters,specialRandomBytes2,randomBytes)}function createAsyncStringGenerator(specialRandomBytesAsync,randomBytesAsync){return createGenerator(generateForCustomCharactersAsync,specialRandomBytesAsync,randomBytesAsync)}var toHex=uInt8Array=>[...uInt8Array].map(byte=>byte.toString(16).padStart(2,"0")).join(""),toBase64=uInt8Array=>btoa(String.fromCodePoint(...uInt8Array)),maxEntropy=65536;function getRandomValues(byteLength){let generatedBytes=new Uint8Array(byteLength);for(let totalGeneratedBytes=0;totalGeneratedBytes<byteLength;totalGeneratedBytes+=maxEntropy)generatedBytes.set(crypto.getRandomValues(new Uint8Array(Math.min(maxEntropy,byteLength-totalGeneratedBytes))),totalGeneratedBytes);return generatedBytes}function specialRandomBytes(byteLength,type,length){let generatedBytes=getRandomValues(byteLength);return(type==="hex"?toHex:toBase64)(generatedBytes).slice(0,length)}var browser_default=createStringGenerator(specialRandomBytes,getRandomValues),cryptoRandomStringAsync=createAsyncStringGenerator(specialRandomBytes,getRandomValues);var GenerateCallStack=()=>{let E=new Error;if(!E.stack)throw new Error("Stack trace is not available!");return E.stack},ParseCallStack=(Stack=GenerateCallStack())=>{if(Stack.includes("@")){let Raw2=Stack.split(`
`).slice(2),Trace2=[];navigator.userAgent.includes("Firefox/")&&Raw2.splice(-1,1);for(let Line of Raw2){let Start=Line.indexOf("@")+1,LastColon=Line.lastIndexOf(":"),Dump=LastColon<0?Line.slice(Start):Line.slice(Start,Line.lastIndexOf(":",LastColon-1));Trace2.push(Dump)}return Trace2}let Raw=Stack.slice(6).split(`
`).slice(2),Trace=[];for(let Line of Raw){let Dump=Line.slice(Line.indexOf("(")+1||Line.indexOf("at")+3,Line.lastIndexOf(":",Line.lastIndexOf(":")-1));Trace.push(Dump)}return Trace},JustifyCallStack=(Stack=ParseCallStack())=>{let SkipLines=0;for(let Line of Stack){let Index=Line.indexOf("://");if(Index===5||Index===4)break;SkipLines++}return Stack.slice(SkipLines)};var HasSubstringSetsInString=(Text,Substrings)=>{for(let Substring of Substrings)if(Text.includes(Substring))return!0;return!1};var AdshieldHostableDomains=["07c225f3.online","css-load.com","html-load.com","content-loader.com","html-load.cc"],AdshieldDomains=[...AdshieldHostableDomains,"22d2d4d9-0c15-4a3a-9562-384f2c100146.xyz","f97ae142.online","error-report.com","2aeabdd4-3280-4f03-bc92-1890494f28be.xyz","e1577bbd-2a7e-4bee-b2fe-12a6406689e5.xyz","fadeb9a7-2417-4a51-8d99-0421a5622cbe.xyz","8bf6c3e9-3f4f-40db-89b3-58248f943ce3.online","b714b1e8-4b7d-4ce9-a248-48fd5472aa0b.online","657475b7-0095-478d-90d4-96ce440604f9.online","4e55.xyz","4e68.xyz","b211.xyz","4a0e.xyz","safe-load.xyz","da29e6b8-f018-490f-b25f-39a887fc95e7.xyz","81ac.xyz","e076.xyz","b59c.xyz","48a16802.site","7e809ed7-e553-4e29-acb1-4e3c0e986562.site","d84bc26d.site","b1181fb1.site","f6176563.site","7fc8.site","295c.site","3a2e.site","58e0.site","bbd8.site","ca3d.site","ec44.site","f090.site","02777e.site","05751c.site","8acc5c.site","b9f25b.site","4aae8f.site","07e197.site","f2f8.xyz","a67d12.xyz","ca9246.xyz","a49ebd.xyz","485728.xyz","caa2c4.xyz","d980ed.xyz","4e04f7.xyz","68646f.xyz","1350c3.xyz","20519a.xyz","634369.xyz","d8b0a5.xyz","5fd6bc.xyz","1116c5.xyz","1a1fb6.xyz","7608d5.xyz","977878.xyz","bc98ad.xyz","11c7a3.xyz","5ceea3.xyz","97b448.xyz","dd2270.xyz","605efe.xyz","fbfec2.xyz","b0eb63.xyz","ce357c.xyz","b903c2.xyz","22dd31.xyz","cfb98a.xyz"],AdshieldKeywords=[...AdshieldDomains,"failed to load website","blocking software"],AdshieldDomainsize=AdshieldHostableDomains.length,GetRandomAdShieldHost=()=>AdshieldHostableDomains[Number(browser_default({length:16,type:"numeric"}))*1e-16*AdshieldDomainsize>>>0],IsAdShieldCall=(Trace=JustifyCallStack())=>Trace.length===0?!1:!!HasSubstringSetsInString(Trace[Trace.length-1],AdshieldDomains);var source=[{id:"kynb",input:'0Nm}ubC9L6k{7("nx>s=Ko]IBw/ySgf%W',output:"a274bcljtv0omw6z9g5p13us8ekhxirfq",reserved1:121,reserved1Input:"e?`3AU<2Z[;	iJEFV'|Pa8T5j-.v :q#H)",reserved1Output:"eow5rfluq8x4zgj70p13ci6mh2s9tnkabv",reserved2:110,reserved2Input:`&XD_QOhMrltpR1c4zG
Y`,reserved2Output:"c7863qbsmwy54otnhiv1"},{id:"uyyk",input:"Tx<W|XvcubCz-ekU/ oiM	&:%Ig>2h{s[",output:"mjb0feu6lzx7kqhgop4at831c92ywir5n",reserved1:118,reserved1Input:`5f;Vt"qDLB91'm
}?R6S(Z#A\`Jr0HQlKP)`,reserved1Output:"qp5r842ycvxjowbaz7uhts9gk6i0emn13f",reserved2:115,reserved2Input:"NGnE8a_y.FjYO=4w3]p7",reserved2Output:"kn1eho6fjbr40pxc9i2q"},{id:"rypa",input:`B8 /Y9o]VHC_p3yt
hTONi5q6IG-r=2g%`,output:"ul2ow01j9zq58mfk4cv37absyigteh6xn",reserved1:112,reserved1Input:`nEeJKa.:P{A;x0UL"4'XFm|}wfvzQ#7ZS(`,reserved1Output:"m8961qwzghu27xeoapn3k5ilvrfjc4syt0",reserved2:114,reserved2Input:"&j<RDs[W>bukM`c?1)	l",reserved2Output:"6akyhor80m37slfw1vxp"},{id:"ehor",input:`"q4
J3fkZhj&lt\`wH50T='g|(EP[B-QYD`,output:"7uil5a3gxbrptvjeymo4c09wqzs682nf1",reserved1:107,reserved1Input:"<GcpOI/	zAX%6?9o r.bmFRie>Ks_)v;Vu",reserved1Output:"ypwzx2usm8og5q74tanlb6ri3vcehj9kf1",reserved2:104,reserved2Input:"7y:x218]U#NC}nWaMS{L",reserved2Output:"bja3zkfvqltgu5sw678n"},{id:"zmpc",input:`.Ip>szJ8EwahYM/v;yKc=f
([_T q3nOS`,output:"5nv1iegza269ju8soky04h3p7rltcxmbq",reserved1:119,reserved1Input:'QCABV"]#0jb&Wo6t:UuiHg1rPD4%)RlNk-',reserved1Output:"le4971m5irpukxjv3sq2o8y60gnbzthwfa",reserved2:102,reserved2Input:"G752e`LXx'Zm}9<	{?F",reserved2Output:"plbi21cxfmo36tn50uq"},{id:"fwbh",input:`x5A8hE9=
QG1"CuJ'oV(I)>lbW4D#e L6`,output:"wr275yogsj4kv03izcnx1uaqb8pflm6th",reserved1:57,reserved1Input:"3%t	{2rckfyXR]?NK&/Fgw;TSMmn-7_iU.",reserved1Output:"y93rfts7lxq8vkgjen5m0i6wzhap1ucb2o",reserved2:101,reserved2Input:"}qB<z`PZ[YH:0sjvaOp",reserved2Output:"6m7kwe3qaohu5g4bz8i"},{id:"qbuw",input:"i;Uj'[<w\"DT0lZLgS8f#hxsMV}ty:E-)`",output:"3c51goq40pzal9r6xuvtkey2swnj7mihb",reserved1:102,reserved1Input:`k96YK(v/&ICmGB	5bza?HcP_1W qRoA.=
`,reserved1Output:"mteqh0ys62p1fxj589ro4aunzlig3c7wbk",reserved2:56,reserved2Input:"{eF%OXrQ2>np3JN]47u",reserved2Output:"9jmanwyqx0s54zuto6h"},{id:"nloc",input:"x<[ykY%1-sK9_C0Raj#8OLl]/HwhqFU	3",output:"0ozupkrx6qjwnygl34m7i9th1f8v2bec5",reserved1:97,reserved1Input:'&m2GT5IrP" .B(o=:igbJpWnz7tcvNZ`>\n',reserved1Output:"74hfvbtcj2eroa0ul56yw3inqxkgp9m1zs",reserved2:115,reserved2Input:"uV6})Q'?D{SeAMX4;Ef",reserved2Output:"91ysxe8luorn6vpciwq"},{id:"fkad",input:"7z>g}{/W#`c[ZT&sI<2-haKXYn\no)xSFA",output:"niue8tmyacj3l91q65fxbwzrv7po2gk40",reserved1:115,reserved1Input:"1EHb.|u?p(qfPity'r6O%	w=]9BJRD;:8k",reserved1Output:"phm21v9cw4b73yglnfxotazsuj8qrk650i",reserved2:104,reserved2Input:'Qj^ NCUv54le"VMm_30GL',reserved2Output:"bixqrhwn9zjm54o12fe0s"},{id:"svmm",input:`maG;FT.e2cYzV:%i})g4bp-KUZy<wL
_?`,output:"1nwsr7vk8fh0l3ut92jigqx6z45cpbmyo",reserved1:97,reserved1Input:'krBJtD(Qlv^>#[h{X19o&SEAM/n"O= 05P',reserved1Output:"36qz0mv9tne7kwra5i1ujx28oyfspcglh4",reserved2:101,reserved2Input:"|`	'Rqj6CNWH]I8sx7u3f",reserved2Output:"wegyjpzux38q2a9vmifot"},{id:"cokq",input:`(r%96jVK7{kP	gDhOcFs'1;M"IuQZ/yqA`,output:"izxsomqh3p8bvga49w7fy2tluc6e5n01r",reserved1:106,reserved1Input:"^zG[wm\nC`=8Bv><&]0:T L#px3Xli-n).4",reserved1Output:"p91tzx4ibshwf3qyen506ugo2mkv8lrjc7",reserved2:107,reserved2Input:"EYf?RN2a}WbU5eH_|StJo",reserved2Output:"sm8fkhrwa94y0eupj2nq1"},{id:"znbg",input:"(	EHC_;s/.WgNfVl z9MYhQ}Tj:JFUS)#",output:"o5hkm78up2yxwvzsj0at1bglr6ei43ncq",reserved1:102,reserved1Input:`KZi{^4<m"5'c%
XLurypqA8[eIw-DR|kbB`,reserved1Output:"ou7ercvw9l01yghnfip685bzxqtak3sjm4",reserved2:57,reserved2Input:"=6a0G>POo37nv?x&1`]2t",reserved2Output:"crxmjf7yhgt6o3p8l09iv"}];var Config={Debug:!1};var CreateDebug=Namespace=>{let Header=`[microShield:${Namespace}]`;return new Proxy(console.debug,{apply(Target,ThisArg,ArgArray){Reflect.apply(Target,ThisArg,[Header,...ArgArray])}})};var Win=typeof unsafeWindow<"u"?unsafeWindow:window,Debug=CreateDebug("secret"),Secret=browser_default({length:20}),PprintCall=(Name,WasBlocked,V)=>{Debug(WasBlocked?"-":"+","name="+Name,"v=",V,"stack=",GenerateCallStack())},ProtectFunction=(F,Options)=>new Proxy(F,{apply(Target,ThisArg,ArgArray){let E=()=>{throw PprintCall(Options.Name,!0,ArgArray),new Error};if(IsAdShieldCall()&&E(),Options.CheckArguments){for(let Arg of ArgArray.filter(Arg2=>typeof Arg2=="string"))HasSubstringSetsInString(Arg,AdshieldKeywords)&&E();for(let Arg of ArgArray.filter(Arg2=>typeof Arg2=="function"))HasSubstringSetsInString(Arg.toString(),AdshieldKeywords)&&E();for(let Arg of ArgArray.filter(Arg2=>Arg2 instanceof URL))HasSubstringSetsInString(Arg.href,AdshieldKeywords)&&E()}if(Options.CheckErrorStack&&HasSubstringSetsInString(location.hostname,Options.CheckErrorStack))for(let Arg of ArgArray.filter(Arg2=>Arg2 instanceof Error))HasSubstringSetsInString(Arg.stack??"",[...AdshieldKeywords,"microShield",`@[native code]
E@${location.protocol}//${location.hostname+location.pathname}:`])&&E();if(Options.CheckArgumentFunctions)for(let CheckFunction of Options.CheckArgumentFunctions)CheckFunction(ArgArray)||E();if(Options.CheckOutputs){let Output=Reflect.apply(Target,ThisArg,ArgArray);HasSubstringSetsInString(Output.toLowerCase(),AdshieldKeywords)&&E()}return Config.Debug&&PprintCall(Options.Name,!1,ArgArray),Reflect.apply(Target,ThisArg,ArgArray)},setPrototypeOf(Target,V){throw PprintCall(Options.Name,!0,V),new Error}}),UnprotectedFetch=fetch,ProtectedDescriptors=new Set,ProtectDescriptors=(O,Key,NewProperty)=>{if(ProtectedDescriptors.size===0){let DefineProperty=ProtectFunction(Object.defineProperty,{CheckArgumentFunctions:[]}),DefineProperties=ProtectFunction(Object.defineProperties,{CheckArgumentFunctions:[ArgArray=>{for(let TargetProperty of Object.keys(ArgArray[1]))if(ProtectedDescriptors.has(ArgArray[0][TargetProperty]))return!1;return!0}]});ProtectedDescriptors.add(DefineProperty),ProtectedDescriptors.add(DefineProperties),Object.defineProperty(Win.Object,"defineProperty",{value:DefineProperty}),Object.defineProperties(Win.Object,{defineProperty:{value:DefineProperty},defineProperties:{value:DefineProperties}})}Object.defineProperty(O,Key,{value:NewProperty}),ProtectedDescriptors.add(NewProperty)},ProtectFunctionDescriptors=(O,Key,Options)=>{let Property=O[Key];Options===void 0&&(Options={}),Options.Name===void 0&&(Options.Name=Property.name),ProtectDescriptors(O,Key,ProtectFunction(Property,Options))};var GetCachableHtml=async Url=>{let Text=await(await UnprotectedFetch(Url,{cache:"force-cache"})).text();if(Text.length===0)throw new Error("Failed to fetch resource!");return"<style>"+Text+"</style>"},GetResourceToken=async ScriptUrl=>{let Text=await(await UnprotectedFetch(ScriptUrl,{cache:"force-cache"})).text(),Match=/eyJ[\w-]*\.eyJ[\w-]*\.[\w-]*/.exec(Text);if(Match===null)throw new Error("Failed to match predefined token in the script!");return Match[0]},ResolveResourceUrls=async(Html,Token)=>{let Pattern=/(resources:\/\/[^'"]+)/g,Host=GetRandomAdShieldHost(),NewHtml="",Matches=null;for(;(Matches=Pattern.exec(Html))!==null;){let Url="https://"+Host+"/resources/"+Matches[1].slice(12)+"?token="+Token;NewHtml+=await GetCachableHtml(Url).catch(Errors=>(console.error(Errors),""))}return NewHtml};var ProtectedPrefix="asdf-",ProtectStorageApis=()=>{ProtectFunctionDescriptors(window.Storage.prototype,"setItem",{CheckArgumentFunctions:[ArgArray=>!ArgArray[0].startsWith(ProtectedPrefix)||ArgArray[2]===Secret]}),ProtectFunctionDescriptors(window.Storage.prototype,"removeItem",{CheckArgumentFunctions:[ArgArray=>!ArgArray[0].startsWith(ProtectedPrefix)||ArgArray[1]===Secret]}),ProtectFunctionDescriptors(window.Storage.prototype,"clear")},Pull=Key=>localStorage.getItem(ProtectedPrefix+Key,Secret),Push=(Key,Value)=>{localStorage.setItem(ProtectedPrefix+Key,Value,Secret)};var Debug2=CreateDebug("entities");var InsertTextEntity=Entity=>{let SelectedNode=document.querySelector(Entity.Selector);if(!SelectedNode)throw new Error("The target node was not found in the frame!");SelectedNode.before(Entity.TextContent),SelectedNode.remove()},IsInstailledInAdGuardCoreLib=new Error().stack?.includes("local.adguard.org"),InsertHeadEntity=Entity=>{IsInstailledInAdGuardCoreLib&&location.hostname.includes("etoday.co.kr")&&document.querySelectorAll(".sticky-body-spacer, .sticky-body-spacer_sub").forEach(Element=>Element.classList.remove("sticky-body-spacer","sticky-body-spacer_sub")),document.head.insertAdjacentHTML("beforeend",Entity.Html)},InsertEntity=async Entity=>{Entity.Type===1?InsertHeadEntity(Entity):Entity.Type===0&&InsertTextEntity(Entity)},InsertEntities=async Entities=>Promise.allSettled(Entities.map(async Entity=>InsertEntity(Entity))),TryCachedEntities=async()=>{let Json=Pull("entity-cache-rev2");if(!Json)throw new Error("The cached entities does not exist on this browser!");let Data=JSON.parse(Json);if(Date.now()-Data.CreatedAt>1e3*60*60*24*30)throw new Error("The cached entities are too old!");if(!Data.Entities.reduce((State,Entity)=>Entity.Type===1?State+Entity.Html.length:State,0))throw new Error("The cached entities has no content!");return Debug2("restoring cached entities data=",Data),await InsertEntities(Data.Entities),!0},PutCachedEntities=Entity=>{Entity.length!==0&&Push("entity-cache-rev2",JSON.stringify({Entity,CreatedAt:Date.now()}))};var DocumentReady=async(Doc=document)=>{if(Doc.readyState==="loading")return new Promise(Resolve=>{Doc.addEventListener("readystatechange",()=>{Resolve()})})};var HardcodedEntities=[{domain:"mydaily.co.kr",css:[".header_top > .header_right { width: 180px !important; }"]}],LoadHardcoded=()=>HardcodedEntities.find(Entity=>location.hostname.includes(Entity.domain));var Debug3=CreateDebug("ztinywave"),Decode=Payload=>{let Id=Payload.slice(0,4),Key=source.find(Store=>Store.id===Id);if(!Key)throw new Error("DEFUSER_ZTINYWAVE_KEY_NOT_FOUND");let Ra=String.fromCharCode(Key.reserved1),Rb=String.fromCharCode(Key.reserved2),Unwrap=(Input,Output,Char)=>{let Index=Output.indexOf(Char);return Index>=0?Input[Index]:Char},Mode=0,Data=Payload.slice(4).split("").map(Char=>{if(!Mode){if(Char===Ra)return Mode=1,"";if(Char===Rb)return Mode=2,""}return Mode===1?(Mode=0,Key.reserved1Output.includes(Char)?Unwrap(Key.reserved1Input,Key.reserved1Output,Char):Unwrap(Key.input,Key.output,Char)+Char):Mode===2?(Mode=0,Key.reserved2Output.includes(Char)?Unwrap(Key.reserved2Input,Key.reserved2Output,Char):Unwrap(Key.input,Key.output,Char)+Char):Unwrap(Key.input,Key.output,Char)}).join("");return JSON.parse(Data)},Extract=async()=>{let Sources=[],Pick=()=>{let Targets=document.querySelectorAll('script[data]:not([data=""]),script[wp-data]:not([wp-data=""])');for(let Target of Targets){let Script=Target.getAttribute("src"),Data=Target.getAttribute("data");Script&&Data&&Sources.push({Script,Data})}};if(Pick(),Sources.length===0&&(await DocumentReady(document),Pick()),Sources.length===0)throw new Error("DEFUSER_ZTINYWAVE_TARGET_NOT_FOUND");return Sources},Tinywave=async()=>{if(await TryCachedEntities().catch(Errors=>(Debug3("Failed to initialise cached entities",Errors),!1)))return;let Entities=[],Sources=await Extract(),LoadedHardcoded=LoadHardcoded();if(LoadedHardcoded?.domain)for(let Item of LoadedHardcoded.css)Sources.push({Script:LoadedHardcoded.domain,Data:`<style>${Item}</style>`});let SourcesResolves=Sources.map(async Source=>{Debug3("source",Source);let Payload=[{tags:Source.Data}];Source.Data.startsWith("<link")||Source.Data.startsWith("<style")||(Payload=Decode(Source.Data)),Debug3("payload",Payload);let PublicEntities=[],PrivateEntities=[];for(let Item of Payload)Item.tags&&(Item.tags.includes("resources://")?PrivateEntities.push({Type:1,Html:Item.tags}):PublicEntities.push({Type:1,Html:Item.tags}));if(InsertEntities(PublicEntities),!location.hostname.includes(Source.Script)){let Token=await GetResourceToken(Source.Script);for(let Entity of PrivateEntities)Entity.Type===1&&(Entity.Html=await ResolveResourceUrls(Entity.Html,Token))}return InsertEntities(PrivateEntities),Entities.push(...PublicEntities,...PrivateEntities),Entities});Debug3("sources resolves",await Promise.allSettled(SourcesResolves)),PutCachedEntities(Entities)};var Debug4=CreateDebug("[microShield:basedrop]"),BaseDrop=async()=>{await DocumentReady(document);let AppenDant="";for(let TargetNode of document.querySelectorAll("script[wp-data]")){let Attribute=TargetNode.getAttribute("wp-data");if(!Attribute){Debug4("empty attribute",TargetNode);continue}let Decoded;try{Decoded=new TextDecoder().decode(Uint8Array.from(atob(Attribute),C=>C.charCodeAt(0)))}catch(e){Debug4("failed to decode base64 stream",e);continue}if(!Decoded.startsWith("<")){Debug4("failed to decode encoded text",Decoded);continue}AppenDant+=Decoded}AppenDant&&document.head.insertAdjacentHTML("beforeend",AppenDant)};var Hook=()=>{let Win2=typeof unsafeWindow<"u"?unsafeWindow:window;ProtectFunctionDescriptors(Win2,"Error"),ProtectFunctionDescriptors(Win2.EventTarget.prototype,"addEventListener"),ProtectFunctionDescriptors(Win2.MessagePort.prototype,"postMessage"),ProtectFunctionDescriptors(Win2.Element.prototype,"remove"),ProtectFunctionDescriptors(Win2.Element.prototype,"removeChild"),ProtectFunctionDescriptors(Win2.Element.prototype,"insertAdjacentElement"),ProtectFunctionDescriptors(Win2.Element.prototype,"insertAdjacentHTML"),ProtectFunctionDescriptors(Win2,"setInterval"),ProtectFunctionDescriptors(Win2,"setTimeout",{CheckArguments:!0}),ProtectFunctionDescriptors(Win2.Element.prototype,"setAttribute",{CheckArguments:!0}),ProtectFunctionDescriptors(Win2.Element.prototype,"setAttributeNS",{CheckArguments:!0}),ProtectFunctionDescriptors(Win2.document,"createElement"),ProtectFunctionDescriptors(Win2.document,"createElementNS"),ProtectFunctionDescriptors(Win2,"alert",{CheckArguments:!0}),ProtectFunctionDescriptors(Win2,"confirm",{CheckArguments:!0}),ProtectFunctionDescriptors(Win2,"atob",{CheckOutputs:!0}),ProtectFunctionDescriptors(Win2,"decodeURI"),ProtectFunctionDescriptors(Win2,"decodeURIComponent"),ProtectFunctionDescriptors(Win2.console,"log",{CheckErrorStack:["jjang0u.com"]}),ProtectStorageApis(),ProtectFunctionDescriptors(Win2,"fetch",{CheckArguments:!0})},Observe=()=>{let Debug5=CreateDebug("observe");new MutationObserver(Mutations=>{for(let Mutation of Mutations)for(let AddedNode of Mutation.addedNodes){let Matched=AddedNode instanceof HTMLElement&&HasSubstringSetsInString(AddedNode.innerHTML,AdshieldKeywords);(Matched&&location.hostname!=="text-compare.com"||Matched&&location.hostname==="text-compare.com"&&AddedNode.className!=="text-compare")&&(AddedNode.remove(),Debug5(AddedNode))}}).observe(document.body,{subtree:!0,childList:!0})},Bootstrap=()=>{Hook(),Tinywave(),BaseDrop(),DocumentReady().then(()=>{Observe()})};Bootstrap();})();
