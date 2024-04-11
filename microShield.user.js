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
// @version      4.2.5
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
"use strict";(()=>{var Q=[..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"],$=[..."0123456789"],ee=[..."CDEHKMPRTUWXY012458"],te=[..."!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"],re=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"],j=(e,t)=>e[t]+(e[t+1]<<8),ne=(e,t,r)=>{let n=t.length,o=Math.floor(65536/n)*n-1,s=2*Math.ceil(1.1*e),i="",a=0;for(;a<e;){let u=r(s),d=0;for(;d<s&&a<e;){let f=j(u,d);d+=2,!(f>o)&&(i+=t[f%n],a++)}}return i},oe=async(e,t,r)=>{let n=t.length,o=Math.floor(65536/n)*n-1,s=2*Math.ceil(1.1*e),i="",a=0;for(;a<e;){let u=await r(s),d=0;for(;d<s&&a<e;){let f=j(u,d);d+=2,!(f>o)&&(i+=t[f%n],a++)}}return i},se=new Set([void 0,"hex","base64","url-safe","numeric","distinguishable","ascii-printable","alphanumeric"]),A=(e,t,r)=>({length:n,type:o,characters:s})=>{if(!(n>=0&&Number.isFinite(n)))throw new TypeError("Expected a `length` to be a non-negative finite number");if(o!==void 0&&s!==void 0)throw new TypeError("Expected either `type` or `characters`");if(s!==void 0&&typeof s!="string")throw new TypeError("Expected `characters` to be string");if(!se.has(o))throw new TypeError(`Unknown type: ${o}`);if(o===void 0&&s===void 0&&(o="hex"),o==="hex"||o===void 0&&s===void 0)return t(Math.ceil(n*.5),"hex",n);if(o==="base64")return t(Math.ceil(n*.75),"base64",n);if(o==="url-safe")return e(n,Q,r);if(o==="numeric")return e(n,$,r);if(o==="distinguishable")return e(n,ee,r);if(o==="ascii-printable")return e(n,te,r);if(o==="alphanumeric")return e(n,re,r);if(s.length===0)throw new TypeError("Expected `characters` string length to be greater than or equal to 1");if(s.length>65536)throw new TypeError("Expected `characters` string length to be less or equal to 65536");return e(n,s,r)};function D(e,t){return A(ne,e,t)}function q(e,t){return A(oe,e,t)}var ie=e=>[...e].map(t=>t.toString(16).padStart(2,"0")).join(""),ce=e=>btoa(String.fromCodePoint(...e)),R=65536;function E(e){let t=new Uint8Array(e);for(let r=0;r<e;r+=R)t.set(crypto.getRandomValues(new Uint8Array(Math.min(R,e-r))),r);return t}function z(e,t,r){let n=E(e);return(t==="hex"?ie:ce)(n).slice(0,r)}var v=D(z,E),Oe=q(z,E);var k=()=>{let e=new Error;if(!e.stack)throw new Error("Stack trace is not available!");return e.stack},ae=(e=k())=>{if(e.includes("@")){let n=e.split(`
`).slice(2),o=[];navigator.userAgent.includes("Firefox/")&&n.splice(-1,1);for(let s of n){let i=s.indexOf("@")+1,a=s.lastIndexOf(":"),u=a<0?s.slice(i):s.slice(i,s.lastIndexOf(":",a-1));o.push(u)}return o}let t=e.slice(6).split(`
`).slice(2),r=[];for(let n of t){let o=n.slice(n.indexOf("(")+1||n.indexOf("at")+3,n.lastIndexOf(":",n.lastIndexOf(":")-1));r.push(o)}return r},H=(e=ae())=>{let t=0;for(let r of e){let n=r.indexOf("://");if(n===5||n===4)break;t++}return e.slice(t)};var l=(e,t)=>{for(let r of t)if(e.includes(r))return!0;return!1};var T=["07c225f3.online","css-load.com","html-load.com","content-loader.com","html-load.cc"],F=[...T,"22d2d4d9-0c15-4a3a-9562-384f2c100146.xyz","f97ae142.online","error-report.com","2aeabdd4-3280-4f03-bc92-1890494f28be.xyz","e1577bbd-2a7e-4bee-b2fe-12a6406689e5.xyz","fadeb9a7-2417-4a51-8d99-0421a5622cbe.xyz","8bf6c3e9-3f4f-40db-89b3-58248f943ce3.online","b714b1e8-4b7d-4ce9-a248-48fd5472aa0b.online"],m=[...F,"failed to load website","blocking software"],ue=T.length,N=()=>T[Number(v({length:16,type:"numeric"}))*1e-16*ue>>>0],M=(e=H())=>e.length===0?!1:!!l(e[e.length-1],F);var L=[{id:"kynb",input:'0Nm}ubC9L6k{7("nx>s=Ko]IBw/ySgf%W',output:"a274bcljtv0omw6z9g5p13us8ekhxirfq",reserved1:121,reserved1Input:"e?`3AU<2Z[;	iJEFV'|Pa8T5j-.v :q#H)",reserved1Output:"eow5rfluq8x4zgj70p13ci6mh2s9tnkabv",reserved2:110,reserved2Input:`&XD_QOhMrltpR1c4zG
Y`,reserved2Output:"c7863qbsmwy54otnhiv1"},{id:"uyyk",input:"Tx<W|XvcubCz-ekU/ oiM	&:%Ig>2h{s[",output:"mjb0feu6lzx7kqhgop4at831c92ywir5n",reserved1:118,reserved1Input:`5f;Vt"qDLB91'm
}?R6S(Z#A\`Jr0HQlKP)`,reserved1Output:"qp5r842ycvxjowbaz7uhts9gk6i0emn13f",reserved2:115,reserved2Input:"NGnE8a_y.FjYO=4w3]p7",reserved2Output:"kn1eho6fjbr40pxc9i2q"},{id:"rypa",input:`B8 /Y9o]VHC_p3yt
hTONi5q6IG-r=2g%`,output:"ul2ow01j9zq58mfk4cv37absyigteh6xn",reserved1:112,reserved1Input:`nEeJKa.:P{A;x0UL"4'XFm|}wfvzQ#7ZS(`,reserved1Output:"m8961qwzghu27xeoapn3k5ilvrfjc4syt0",reserved2:114,reserved2Input:"&j<RDs[W>bukM`c?1)	l",reserved2Output:"6akyhor80m37slfw1vxp"},{id:"ehor",input:`"q4
J3fkZhj&lt\`wH50T='g|(EP[B-QYD`,output:"7uil5a3gxbrptvjeymo4c09wqzs682nf1",reserved1:107,reserved1Input:"<GcpOI/	zAX%6?9o r.bmFRie>Ks_)v;Vu",reserved1Output:"ypwzx2usm8og5q74tanlb6ri3vcehj9kf1",reserved2:104,reserved2Input:"7y:x218]U#NC}nWaMS{L",reserved2Output:"bja3zkfvqltgu5sw678n"},{id:"zmpc",input:`.Ip>szJ8EwahYM/v;yKc=f
([_T q3nOS`,output:"5nv1iegza269ju8soky04h3p7rltcxmbq",reserved1:119,reserved1Input:'QCABV"]#0jb&Wo6t:UuiHg1rPD4%)RlNk-',reserved1Output:"le4971m5irpukxjv3sq2o8y60gnbzthwfa",reserved2:102,reserved2Input:"G752e`LXx'Zm}9<	{?F",reserved2Output:"plbi21cxfmo36tn50uq"},{id:"fwbh",input:`x5A8hE9=
QG1"CuJ'oV(I)>lbW4D#e L6`,output:"wr275yogsj4kv03izcnx1uaqb8pflm6th",reserved1:57,reserved1Input:"3%t	{2rckfyXR]?NK&/Fgw;TSMmn-7_iU.",reserved1Output:"y93rfts7lxq8vkgjen5m0i6wzhap1ucb2o",reserved2:101,reserved2Input:"}qB<z`PZ[YH:0sjvaOp",reserved2Output:"6m7kwe3qaohu5g4bz8i"},{id:"qbuw",input:"i;Uj'[<w\"DT0lZLgS8f#hxsMV}ty:E-)`",output:"3c51goq40pzal9r6xuvtkey2swnj7mihb",reserved1:102,reserved1Input:`k96YK(v/&ICmGB	5bza?HcP_1W qRoA.=
`,reserved1Output:"mteqh0ys62p1fxj589ro4aunzlig3c7wbk",reserved2:56,reserved2Input:"{eF%OXrQ2>np3JN]47u",reserved2Output:"9jmanwyqx0s54zuto6h"},{id:"nloc",input:"x<[ykY%1-sK9_C0Raj#8OLl]/HwhqFU	3",output:"0ozupkrx6qjwnygl34m7i9th1f8v2bec5",reserved1:97,reserved1Input:'&m2GT5IrP" .B(o=:igbJpWnz7tcvNZ`>\n',reserved1Output:"74hfvbtcj2eroa0ul56yw3inqxkgp9m1zs",reserved2:115,reserved2Input:"uV6})Q'?D{SeAMX4;Ef",reserved2Output:"91ysxe8luorn6vpciwq"},{id:"fkad",input:"7z>g}{/W#`c[ZT&sI<2-haKXYn\no)xSFA",output:"niue8tmyacj3l91q65fxbwzrv7po2gk40",reserved1:115,reserved1Input:"1EHb.|u?p(qfPity'r6O%	w=]9BJRD;:8k",reserved1Output:"phm21v9cw4b73yglnfxotazsuj8qrk650i",reserved2:104,reserved2Input:'Qj^ NCUv54le"VMm_30GL',reserved2Output:"bixqrhwn9zjm54o12fe0s"},{id:"svmm",input:`maG;FT.e2cYzV:%i})g4bp-KUZy<wL
_?`,output:"1nwsr7vk8fh0l3ut92jigqx6z45cpbmyo",reserved1:97,reserved1Input:'krBJtD(Qlv^>#[h{X19o&SEAM/n"O= 05P',reserved1Output:"36qz0mv9tne7kwra5i1ujx28oyfspcglh4",reserved2:101,reserved2Input:"|`	'Rqj6CNWH]I8sx7u3f",reserved2Output:"wegyjpzux38q2a9vmifot"},{id:"cokq",input:`(r%96jVK7{kP	gDhOcFs'1;M"IuQZ/yqA`,output:"izxsomqh3p8bvga49w7fy2tluc6e5n01r",reserved1:106,reserved1Input:"^zG[wm\nC`=8Bv><&]0:T L#px3Xli-n).4",reserved1Output:"p91tzx4ibshwf3qyen506ugo2mkv8lrjc7",reserved2:107,reserved2Input:"EYf?RN2a}WbU5eH_|StJo",reserved2Output:"sm8fkhrwa94y0eupj2nq1"},{id:"znbg",input:"(	EHC_;s/.WgNfVl z9MYhQ}Tj:JFUS)#",output:"o5hkm78up2yxwvzsj0at1bglr6ei43ncq",reserved1:102,reserved1Input:`KZi{^4<m"5'c%
XLurypqA8[eIw-DR|kbB`,reserved1Output:"ou7ercvw9l01yghnfip685bzxqtak3sjm4",reserved2:57,reserved2Input:"=6a0G>POo37nv?x&1`]2t",reserved2Output:"crxmjf7yhgt6o3p8l09iv"}];var U={Debug:!1};var p=e=>{let t=`[microShield:${e}]`;return new Proxy(console.debug,{apply(r,n,o){Reflect.apply(r,n,[t,...o])}})};var W=typeof unsafeWindow<"u"?unsafeWindow:window,pe=p("secret"),h=v({length:20}),S=(e,t,r)=>{pe(t?"-":"+","name="+e,"v=",r,"stack=",k())},O=(e,t)=>new Proxy(e,{apply(r,n,o){let s=()=>{throw S(t.Name,!0,o),new Error};if(M()&&s(),t.CheckArguments){for(let i of o.filter(a=>typeof a=="string"))l(i,m)&&s();for(let i of o.filter(a=>typeof a=="function"))l(i.toString(),m)&&s()}if(t.CheckArgumentFunctions)for(let i of t.CheckArgumentFunctions)i(o)||s();if(t.CheckOutputs){let i=Reflect.apply(r,n,o);l(i.toLowerCase(),m)&&s()}return U.Debug&&S(t.Name,!1,o),Reflect.apply(r,n,o)},setPrototypeOf(r,n){throw S(t.Name,!0,n),new Error}}),I=fetch,g=new Set,fe=(e,t,r)=>{if(g.size===0){let n=O(Object.defineProperty,{CheckArgumentFunctions:[]}),o=O(Object.defineProperties,{CheckArgumentFunctions:[s=>{for(let i of Object.keys(s[1]))if(g.has(s[0][i]))return!1;return!0}]});g.add(n),g.add(o),Object.defineProperty(W.Object,"defineProperty",{value:n}),Object.defineProperties(W.Object,{defineProperty:{value:n},defineProperties:{value:o}})}Object.defineProperty(e,t,{value:r}),g.add(r)},c=(e,t,r)=>{let n=e[t];r===void 0&&(r={}),r.Name===void 0&&(r.Name=n.name),fe(e,t,O(n,r))};var le=async e=>{let r=await(await I(e,{cache:"force-cache"})).text();if(r.length===0)throw new Error("Failed to fetch resource!");return"<style>"+r+"</style>"},_=async e=>{let r=await(await I(e,{cache:"force-cache"})).text(),n=/eyJ[\w-]*\.eyJ[\w-]*\.[\w-]*/.exec(r);if(n===null)throw new Error("Failed to match predefined token in the script!");return n[0]},G=async(e,t)=>{let r=/(resources:\/\/[^'"]+)/g,n=N(),o="",s=null;for(;(s=r.exec(e))!==null;){let i="https://"+n+"/resources/"+s[1].slice(12)+"?token="+t;o+=await le(i).catch(a=>(console.error(a),""))}return o};var w="asdf-",K=()=>{c(window.Storage.prototype,"setItem",{CheckArgumentFunctions:[e=>!e[0].startsWith(w)||e[2]===h]}),c(window.Storage.prototype,"removeItem",{CheckArgumentFunctions:[e=>!e[0].startsWith(w)||e[1]===h]}),c(window.Storage.prototype,"clear")},J=e=>localStorage.getItem(w+e,h),V=(e,t)=>{localStorage.setItem(w+e,t,h)};var me=p("entities");var ye=e=>{let t=document.querySelector(e.Selector);if(!t)throw new Error("The target node was not found in the frame!");t.before(e.TextContent),t.remove()},ge=e=>{document.head.insertAdjacentHTML("beforeend",e.Html)},he=async e=>{e.Type===1?ge(e):e.Type===0&&ye(e)},x=async e=>Promise.allSettled(e.map(async t=>he(t))),Y=async()=>{let e=J("entity-cache-rev2");if(!e)throw new Error("The cached entities does not exist on this browser!");let t=JSON.parse(e);if(Date.now()-t.CreatedAt>1e3*60*60*24*30)throw new Error("The cached entities are too old!");if(!t.Entities.reduce((n,o)=>o.Type===1?n+o.Html.length:n,0))throw new Error("The cached entities has no content!");return me("restoring cached entities data=",t),await x(t.Entities),!0},B=e=>{e.length!==0&&V("entity-cache-rev2",JSON.stringify({Entity:e,CreatedAt:Date.now()}))};var y=async(e=document)=>{if(e.readyState==="loading")return new Promise(t=>{e.addEventListener("readystatechange",()=>{t()})})};var b=p("ztinywave"),ve=e=>{let t=e.slice(0,4),r=L.find(u=>u.id===t);if(!r)throw new Error("DEFUSER_ZTINYWAVE_KEY_NOT_FOUND");let n=String.fromCharCode(r.reserved1),o=String.fromCharCode(r.reserved2),s=(u,d,f)=>{let C=d.indexOf(f);return C>=0?u[C]:f},i=0,a=e.slice(4).split("").map(u=>{if(!i){if(u===n)return i=1,"";if(u===o)return i=2,""}return i===1?(i=0,r.reserved1Output.includes(u)?s(r.reserved1Input,r.reserved1Output,u):s(r.input,r.output,u)+u):i===2?(i=0,r.reserved2Output.includes(u)?s(r.reserved2Input,r.reserved2Output,u):s(r.input,r.output,u)+u):s(r.input,r.output,u)}).join("");return JSON.parse(a)},we=async()=>{let e=[],t=()=>{let r=document.querySelectorAll('script[data]:not([data=""]),script[wp-data]:not([wp-data=""])');for(let n of r){let o=n.getAttribute("src"),s=n.getAttribute("data");o&&s&&e.push({Script:o,Data:s})}};if(t(),e.length===0&&(await y(document),t()),e.length===0)throw new Error("DEFUSER_ZTINYWAVE_TARGET_NOT_FOUND");return e},Z=async()=>{if(await Y().catch(o=>(b("Failed to initialise cached entities",o),!1)))return;let t=[],n=(await we()).map(async o=>{b("source",o);let s=ve(o.Data);b("payload",s);let i=[],a=[];for(let d of s)d.tags&&(d.tags.includes("resources://")?a.push({Type:1,Html:d.tags}):i.push({Type:1,Html:d.tags}));x(i);let u=await _(o.Script);for(let d of a)d.Type===1&&(d.Html=await G(d.Html,u));return x(a),t.push(...i,...a),t});b("sources resolves",await Promise.allSettled(n)),B(t)};var P=p("[microShield:basedrop]"),X=async()=>{await y(document);let e="";for(let t of document.querySelectorAll("script[wp-data]")){let r=t.getAttribute("wp-data");if(!r){P("empty attribute",t);continue}let n;try{n=new TextDecoder().decode(Uint8Array.from(atob(r),o=>o.charCodeAt(0)))}catch(o){P("failed to decode base64 stream",o);continue}if(!n.startsWith("<")){P("failed to decode encoded text",n);continue}e+=n}e&&document.head.insertAdjacentHTML("beforeend",e)};var xe=()=>{let e=typeof unsafeWindow<"u"?unsafeWindow:window;c(e,"Error"),c(e.EventTarget.prototype,"addEventListener"),c(e.MessagePort.prototype,"postMessage"),c(e.Element.prototype,"remove"),c(e.Element.prototype,"removeChild"),c(e.Element.prototype,"insertAdjacentElement"),c(e.Element.prototype,"insertAdjacentHTML"),c(e,"setInterval"),c(e,"setTimeout",{CheckArguments:!0}),c(e.Element.prototype,"setAttribute",{CheckArguments:!0}),c(e.Element.prototype,"setAttributeNS",{CheckArguments:!0}),c(e.document,"createElement"),c(e.document,"createElementNS"),c(e,"alert",{CheckArguments:!0}),c(e,"confirm",{CheckArguments:!0}),c(e,"atob",{CheckOutputs:!0}),c(e,"decodeURI"),c(e,"decodeURIComponent"),K(),c(e,"fetch",{CheckArguments:!0})},be=()=>{let e=p("observe");new MutationObserver(r=>{for(let n of r)for(let o of n.addedNodes)o instanceof HTMLElement&&l(o.innerHTML,m)&&(o.remove(),e(o))}).observe(document.body,{subtree:!0,childList:!0})},Ee=()=>{xe(),Z(),X(),y().then(()=>{be()})};Ee();})();
