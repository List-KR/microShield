// ==UserScript==
// @name         microShield blocker for iOS
// @encoding     utf-8
// @namespace    https://github.com/List-KR/microShield
// @homepageURL  https://github.com/List-KR/microShield
// @supportURL   https://github.com/List-KR/microShield/issues
// @updateURL    https://cdn.jsdelivr.net/gh/List-KR/microShield@latest/microShield-ios-blocker.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/List-KR/microShield@latest/microShield-ios-blocker.user.js
// @license      Apache-2.0
//
// @version      4.6.11
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
// @match        *://slobodnadalmacija.hr/*
// @match        *://*.slobodnadalmacija.hr/*
// @match        *://carscoops.com/*
// @match        *://*.carscoops.com/*
// @match        *://indiatimes.com/*
// @match        *://*.indiatimes.com/*
// @match        *://flatpanelshd.com/*
// @match        *://*.flatpanelshd.com/*
// @match        *://sportsseoul.com/*
// @match        *://*.sportsseoul.com/*
// @match        *://gloria.hr/*
// @match        *://*.gloria.hr/*
// @match        *://videogamemods.com/*
// @match        *://*.videogamemods.com/*
// @match        *://adintrend.tv/*
// @match        *://ark-unity.com/*
// @match        *://*.ark-unity.com/*
// @match        *://cool-style.com.tw/*
// @match        *://*.cool-style.com.tw/*
// @match        *://dziennik.pl/*
// @match        *://*.dziennik.pl/*
// @match        *://eurointegration.com.ua/*
// @match        *://*.eurointegration.com.ua/*
// @match        *://jin115.com/*
// @match        *://*.jin115.com/*
// @match        *://onlinegdb.com/*
// @match        *://*.onlinegdb.com/*
// @match        *://winfuture.de/*
// @match        *://*.winfuture.de/*
//
// @description        microShield allows AdGuard, uBlock Origin, Brave and ABP to resist against Ad-Shield widely.
// @description:ko     microShield는 AdGuard, uBlock Origin, Brave 와 ABP가 애드쉴드에 널리 저항할 수 있도록 합니다.
// @description:ja     microShieldはAdGuard、uBlock Origin、Brave、ABPの環境でAd-Shieldを広範囲に回避します。
//
// @grant        none
// @run-at       document-start
// ==/UserScript==
// Original Srouce Code:
// Libraries: please see 'https://github.com/List-KR/microShield/package.json'.
// Originated from https://github.com/seia-soto/adshield-defuser and https://github.com/seia-soto/userscripts.
"use strict";(()=>{var urlSafeCharacters=[..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"],numericCharacters=[..."0123456789"],distinguishableCharacters=[..."CDEHKMPRTUWXY012458"],asciiPrintableCharacters=[..."!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"],alphanumericCharacters=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"],readUInt16LE=(uInt8Array,offset)=>uInt8Array[offset]+(uInt8Array[offset+1]<<8),generateForCustomCharacters=(length,characters,randomBytes)=>{let characterCount=characters.length,maxValidSelector=Math.floor(65536/characterCount)*characterCount-1,entropyLength=2*Math.ceil(1.1*length),string="",stringLength=0;for(;stringLength<length;){let entropy=randomBytes(entropyLength),entropyPosition=0;for(;entropyPosition<entropyLength&&stringLength<length;){let entropyValue=readUInt16LE(entropy,entropyPosition);entropyPosition+=2,!(entropyValue>maxValidSelector)&&(string+=characters[entropyValue%characterCount],stringLength++)}}return string},generateForCustomCharactersAsync=async(length,characters,randomBytesAsync)=>{let characterCount=characters.length,maxValidSelector=Math.floor(65536/characterCount)*characterCount-1,entropyLength=2*Math.ceil(1.1*length),string="",stringLength=0;for(;stringLength<length;){let entropy=await randomBytesAsync(entropyLength),entropyPosition=0;for(;entropyPosition<entropyLength&&stringLength<length;){let entropyValue=readUInt16LE(entropy,entropyPosition);entropyPosition+=2,!(entropyValue>maxValidSelector)&&(string+=characters[entropyValue%characterCount],stringLength++)}}return string},allowedTypes=new Set([void 0,"hex","base64","url-safe","numeric","distinguishable","ascii-printable","alphanumeric"]),createGenerator=(generateForCustomCharacters2,specialRandomBytes2,randomBytes)=>({length,type,characters})=>{if(!(length>=0&&Number.isFinite(length)))throw new TypeError("Expected a `length` to be a non-negative finite number");if(type!==void 0&&characters!==void 0)throw new TypeError("Expected either `type` or `characters`");if(characters!==void 0&&typeof characters!="string")throw new TypeError("Expected `characters` to be string");if(!allowedTypes.has(type))throw new TypeError(`Unknown type: ${type}`);if(type===void 0&&characters===void 0&&(type="hex"),type==="hex"||type===void 0&&characters===void 0)return specialRandomBytes2(Math.ceil(length*.5),"hex",length);if(type==="base64")return specialRandomBytes2(Math.ceil(length*.75),"base64",length);if(type==="url-safe")return generateForCustomCharacters2(length,urlSafeCharacters,randomBytes);if(type==="numeric")return generateForCustomCharacters2(length,numericCharacters,randomBytes);if(type==="distinguishable")return generateForCustomCharacters2(length,distinguishableCharacters,randomBytes);if(type==="ascii-printable")return generateForCustomCharacters2(length,asciiPrintableCharacters,randomBytes);if(type==="alphanumeric")return generateForCustomCharacters2(length,alphanumericCharacters,randomBytes);if(characters.length===0)throw new TypeError("Expected `characters` string length to be greater than or equal to 1");if(characters.length>65536)throw new TypeError("Expected `characters` string length to be less or equal to 65536");return generateForCustomCharacters2(length,characters,randomBytes)};function createStringGenerator(specialRandomBytes2,randomBytes){return createGenerator(generateForCustomCharacters,specialRandomBytes2,randomBytes)}function createAsyncStringGenerator(specialRandomBytesAsync,randomBytesAsync){return createGenerator(generateForCustomCharactersAsync,specialRandomBytesAsync,randomBytesAsync)}var toHex=uInt8Array=>[...uInt8Array].map(byte=>byte.toString(16).padStart(2,"0")).join(""),toBase64=uInt8Array=>btoa(String.fromCodePoint(...uInt8Array)),maxEntropy=65536;function getRandomValues(byteLength){let generatedBytes=new Uint8Array(byteLength);for(let totalGeneratedBytes=0;totalGeneratedBytes<byteLength;totalGeneratedBytes+=maxEntropy)generatedBytes.set(crypto.getRandomValues(new Uint8Array(Math.min(maxEntropy,byteLength-totalGeneratedBytes))),totalGeneratedBytes);return generatedBytes}function specialRandomBytes(byteLength,type,length){let generatedBytes=getRandomValues(byteLength);return(type==="hex"?toHex:toBase64)(generatedBytes).slice(0,length)}var browser_default=createStringGenerator(specialRandomBytes,getRandomValues),cryptoRandomStringAsync=createAsyncStringGenerator(specialRandomBytes,getRandomValues);var GenerateCallStack=()=>{let E=new Error;if(!E.stack)throw new Error("Stack trace is not available!");return E.stack},ParseCallStack=(Stack=GenerateCallStack())=>{if(Stack.includes("@")){let Raw2=Stack.split(`
`).slice(2),Trace2=[];navigator.userAgent.includes("Firefox/")&&Raw2.splice(-1,1);for(let Line of Raw2){let Start=Line.indexOf("@")+1,LastColon=Line.lastIndexOf(":"),Dump=LastColon<0?Line.slice(Start):Line.slice(Start,Line.lastIndexOf(":",LastColon-1));Trace2.push(Dump)}return Trace2}let Raw=Stack.slice(6).split(`
`).slice(2),Trace=[];for(let Line of Raw){let Dump=Line.slice(Line.indexOf("(")+1||Line.indexOf("at")+3,Line.lastIndexOf(":",Line.lastIndexOf(":")-1));Trace.push(Dump)}return Trace},JustifyCallStack=(Stack=ParseCallStack())=>{let SkipLines=0;for(let Line of Stack){let Index=Line.indexOf("://");if(Index===5||Index===4)break;SkipLines++}return Stack.slice(SkipLines)};var HasSubstringSetsInString=(Text,Substrings)=>{for(let Substring of Substrings)if(Text.includes(Substring))return!0;return!1};var AdshieldHostableDomains=["07c225f3.online","css-load.com","html-load.com","content-loader.com","html-load.cc"],AdshieldDomains=[...AdshieldHostableDomains,"22d2d4d9-0c15-4a3a-9562-384f2c100146.xyz","f97ae142.online","error-report.com","2aeabdd4-3280-4f03-bc92-1890494f28be.xyz","e1577bbd-2a7e-4bee-b2fe-12a6406689e5.xyz","fadeb9a7-2417-4a51-8d99-0421a5622cbe.xyz","8bf6c3e9-3f4f-40db-89b3-58248f943ce3.online","b714b1e8-4b7d-4ce9-a248-48fd5472aa0b.online","657475b7-0095-478d-90d4-96ce440604f9.online","4e55.xyz","4e68.xyz","b211.xyz","4a0e.xyz","safe-load.xyz","da29e6b8-f018-490f-b25f-39a887fc95e7.xyz","81ac.xyz","e076.xyz","b59c.xyz","48a16802.site","7e809ed7-e553-4e29-acb1-4e3c0e986562.site","d84bc26d.site","b1181fb1.site","f6176563.site","7fc8.site","295c.site","3a2e.site","58e0.site","bbd8.site","ca3d.site","ec44.site","f090.site","02777e.site","05751c.site","8acc5c.site","b9f25b.site","4aae8f.site","07e197.site","f2f8.xyz","a67d12.xyz","ca9246.xyz","a49ebd.xyz","485728.xyz","caa2c4.xyz","d980ed.xyz","4e04f7.xyz","68646f.xyz","1350c3.xyz","20519a.xyz","634369.xyz","d8b0a5.xyz","5fd6bc.xyz","1116c5.xyz","1a1fb6.xyz","7608d5.xyz","977878.xyz","bc98ad.xyz","11c7a3.xyz","5ceea3.xyz","97b448.xyz","dd2270.xyz","605efe.xyz","fbfec2.xyz","b0eb63.xyz","ce357c.xyz","b903c2.xyz","22dd31.xyz","cfb98a.xyz","072551.xyz","5550be.xyz","f8a070.xyz","4e990.xyz","6a6672.xyz","0395d1.xyz","156fd4.xyz","b82978.xyz"],AdshieldKeywords=[...AdshieldDomains,"failed to load website","blocking software"],AdshieldDomainsize=AdshieldHostableDomains.length;var IsAdShieldCall=(Trace=JustifyCallStack())=>Trace.length===0?!1:!!HasSubstringSetsInString(Trace[Trace.length-1],AdshieldDomains);var DocumentReady=async(Doc=document)=>{if(Doc.readyState==="loading")return new Promise(Resolve=>{Doc.addEventListener("readystatechange",()=>{Resolve()})})};var CreateDebug=Namespace=>{let Header=`[microShield:${Namespace}]`;return new Proxy(console.debug,{apply(Target,ThisArg,ArgArray){Reflect.apply(Target,ThisArg,[Header,...ArgArray])}})};var Config={Debug:!1};var Win=typeof unsafeWindow<"u"?unsafeWindow:window,Debug=CreateDebug("secret"),Secret=browser_default({length:20}),PprintCall=(Name,WasBlocked,V)=>{Debug(WasBlocked?"-":"+","name="+Name,"v=",V,"stack=",GenerateCallStack())},ProtectFunction=(F,Options)=>new Proxy(F,{apply(Target,ThisArg,ArgArray){let E=()=>{throw PprintCall(Options.Name,!0,ArgArray),new Error};if(IsAdShieldCall()&&E(),Options.CheckArguments){for(let Arg of ArgArray.filter(Arg2=>typeof Arg2=="string"))HasSubstringSetsInString(Arg,AdshieldKeywords)&&E();for(let Arg of ArgArray.filter(Arg2=>typeof Arg2=="function"))HasSubstringSetsInString(Arg.toString(),AdshieldKeywords)&&E();for(let Arg of ArgArray.filter(Arg2=>Arg2 instanceof URL))HasSubstringSetsInString(Arg.href,AdshieldKeywords)&&E()}if(Options.CheckErrorStack&&HasSubstringSetsInString(location.hostname,Options.CheckErrorStack))for(let Arg of ArgArray.filter(Arg2=>Arg2 instanceof Error))HasSubstringSetsInString(Arg.stack??"",[...AdshieldKeywords,"microShield",`@[native code]
E@${location.protocol}//${location.hostname+location.pathname}:`])&&E();if(Options.CheckArgumentFunctions)for(let CheckFunction of Options.CheckArgumentFunctions)CheckFunction(ArgArray)||E();if(Options.CheckOutputs){let Output=Reflect.apply(Target,ThisArg,ArgArray);HasSubstringSetsInString(Output.toLowerCase(),AdshieldKeywords)&&E()}return Config.Debug&&PprintCall(Options.Name,!1,ArgArray),Reflect.apply(Target,ThisArg,ArgArray)},setPrototypeOf(Target,V){throw PprintCall(Options.Name,!0,V),new Error}});var ProtectedDescriptors=new Set,ProtectDescriptors=(O,Key,NewProperty)=>{if(ProtectedDescriptors.size===0){let DefineProperty=ProtectFunction(Object.defineProperty,{CheckArgumentFunctions:[]}),DefineProperties=ProtectFunction(Object.defineProperties,{CheckArgumentFunctions:[ArgArray=>{for(let TargetProperty of Object.keys(ArgArray[1]))if(ProtectedDescriptors.has(ArgArray[0][TargetProperty]))return!1;return!0}]});ProtectedDescriptors.add(DefineProperty),ProtectedDescriptors.add(DefineProperties),Object.defineProperty(Win.Object,"defineProperty",{value:DefineProperty}),Object.defineProperties(Win.Object,{defineProperty:{value:DefineProperty},defineProperties:{value:DefineProperties}})}Object.defineProperty(O,Key,{value:NewProperty}),ProtectedDescriptors.add(NewProperty)},ProtectFunctionDescriptors=(O,Key,Options)=>{let Property=O[Key];Options===void 0&&(Options={}),Options.Name===void 0&&(Options.Name=Property.name),ProtectDescriptors(O,Key,ProtectFunction(Property,Options))};var ProtectedPrefix="asdf-",ProtectStorageApis=()=>{ProtectFunctionDescriptors(window.Storage.prototype,"setItem",{CheckArgumentFunctions:[ArgArray=>!ArgArray[0].startsWith(ProtectedPrefix)||ArgArray[2]===Secret]}),ProtectFunctionDescriptors(window.Storage.prototype,"removeItem",{CheckArgumentFunctions:[ArgArray=>!ArgArray[0].startsWith(ProtectedPrefix)||ArgArray[1]===Secret]}),ProtectFunctionDescriptors(window.Storage.prototype,"clear")};var Hook=()=>{let Win2=typeof unsafeWindow<"u"?unsafeWindow:window;ProtectFunctionDescriptors(Win2,"Error"),ProtectFunctionDescriptors(Win2.EventTarget.prototype,"addEventListener"),ProtectFunctionDescriptors(Win2.MessagePort.prototype,"postMessage"),ProtectFunctionDescriptors(Win2.Element.prototype,"remove"),ProtectFunctionDescriptors(Win2.Element.prototype,"removeChild"),ProtectFunctionDescriptors(Win2.Element.prototype,"insertAdjacentElement"),ProtectFunctionDescriptors(Win2.Element.prototype,"insertAdjacentHTML"),ProtectFunctionDescriptors(Win2,"setInterval"),ProtectFunctionDescriptors(Win2,"setTimeout",{CheckArguments:!0}),ProtectFunctionDescriptors(Win2.Element.prototype,"setAttribute",{CheckArguments:!0}),ProtectFunctionDescriptors(Win2.Element.prototype,"setAttributeNS",{CheckArguments:!0}),ProtectFunctionDescriptors(Win2.document,"createElement"),ProtectFunctionDescriptors(Win2.document,"createElementNS"),ProtectFunctionDescriptors(Win2,"alert",{CheckArguments:!0}),ProtectFunctionDescriptors(Win2,"confirm",{CheckArguments:!0}),ProtectFunctionDescriptors(Win2,"atob",{CheckOutputs:!0}),ProtectFunctionDescriptors(Win2,"decodeURI"),ProtectFunctionDescriptors(Win2,"decodeURIComponent"),ProtectFunctionDescriptors(Win2.console,"log",{CheckErrorStack:["jjang0u.com"]}),ProtectStorageApis(),ProtectFunctionDescriptors(Win2,"fetch",{CheckArguments:!0})},Observe=()=>{let Debug2=CreateDebug("observe");new MutationObserver(Mutations=>{for(let Mutation of Mutations)for(let AddedNode of Mutation.addedNodes){let Matched=AddedNode instanceof HTMLElement&&HasSubstringSetsInString(AddedNode.innerHTML,AdshieldKeywords);(Matched&&location.hostname!=="text-compare.com"||Matched&&location.hostname==="text-compare.com"&&AddedNode.className!=="text-compare")&&(AddedNode.remove(),Debug2(AddedNode))}}).observe(document.body,{subtree:!0,childList:!0})},Bootstrap=()=>{Hook(),DocumentReady().then(()=>{Observe()})};Bootstrap();})();
