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
// @version      3.23.0
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
//
// @description        microShield allows AdGuard, uBlock Origin, Brave and ABP to resist against Ad-Shield widely.
// @description:ko     microShield는 AdGuard, uBlock Origin, Brave 와 ABP가 애드쉴드에 널리 저항할 수 있도록 합니다.
//
// @grant        unsafeWindow
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @run-at       document-start
// ==/UserScript==
// Original Srouce Code:
// Libraries: please see 'https://github.com/List-KR/microShield/package.json'.
// Originated from https://github.com/seia-soto/adshield-defuser and https://github.com/seia-soto/userscripts.
"use strict";(()=>{var A=[{id:"kynb",input:'0Nm}ubC9L6k{7("nx>s=Ko]IBw/ySgf%W',output:"a274bcljtv0omw6z9g5p13us8ekhxirfq",reserved1:121,reserved1Input:"e?`3AU<2Z[;	iJEFV'|Pa8T5j-.v :q#H)",reserved1Output:"eow5rfluq8x4zgj70p13ci6mh2s9tnkabv",reserved2:110,reserved2Input:`&XD_QOhMrltpR1c4zG
Y`,reserved2Output:"c7863qbsmwy54otnhiv1"},{id:"uyyk",input:"Tx<W|XvcubCz-ekU/ oiM	&:%Ig>2h{s[",output:"mjb0feu6lzx7kqhgop4at831c92ywir5n",reserved1:118,reserved1Input:`5f;Vt"qDLB91'm
}?R6S(Z#A\`Jr0HQlKP)`,reserved1Output:"qp5r842ycvxjowbaz7uhts9gk6i0emn13f",reserved2:115,reserved2Input:"NGnE8a_y.FjYO=4w3]p7",reserved2Output:"kn1eho6fjbr40pxc9i2q"},{id:"rypa",input:`B8 /Y9o]VHC_p3yt
hTONi5q6IG-r=2g%`,output:"ul2ow01j9zq58mfk4cv37absyigteh6xn",reserved1:112,reserved1Input:`nEeJKa.:P{A;x0UL"4'XFm|}wfvzQ#7ZS(`,reserved1Output:"m8961qwzghu27xeoapn3k5ilvrfjc4syt0",reserved2:114,reserved2Input:"&j<RDs[W>bukM`c?1)	l",reserved2Output:"6akyhor80m37slfw1vxp"},{id:"ehor",input:`"q4
J3fkZhj&lt\`wH50T='g|(EP[B-QYD`,output:"7uil5a3gxbrptvjeymo4c09wqzs682nf1",reserved1:107,reserved1Input:"<GcpOI/	zAX%6?9o r.bmFRie>Ks_)v;Vu",reserved1Output:"ypwzx2usm8og5q74tanlb6ri3vcehj9kf1",reserved2:104,reserved2Input:"7y:x218]U#NC}nWaMS{L",reserved2Output:"bja3zkfvqltgu5sw678n"},{id:"zmpc",input:`.Ip>szJ8EwahYM/v;yKc=f
([_T q3nOS`,output:"5nv1iegza269ju8soky04h3p7rltcxmbq",reserved1:119,reserved1Input:'QCABV"]#0jb&Wo6t:UuiHg1rPD4%)RlNk-',reserved1Output:"le4971m5irpukxjv3sq2o8y60gnbzthwfa",reserved2:102,reserved2Input:"G752e`LXx'Zm}9<	{?F",reserved2Output:"plbi21cxfmo36tn50uq"},{id:"fwbh",input:`x5A8hE9=
QG1"CuJ'oV(I)>lbW4D#e L6`,output:"wr275yogsj4kv03izcnx1uaqb8pflm6th",reserved1:57,reserved1Input:"3%t	{2rckfyXR]?NK&/Fgw;TSMmn-7_iU.",reserved1Output:"y93rfts7lxq8vkgjen5m0i6wzhap1ucb2o",reserved2:101,reserved2Input:"}qB<z`PZ[YH:0sjvaOp",reserved2Output:"6m7kwe3qaohu5g4bz8i"},{id:"qbuw",input:"i;Uj'[<w\"DT0lZLgS8f#hxsMV}ty:E-)`",output:"3c51goq40pzal9r6xuvtkey2swnj7mihb",reserved1:102,reserved1Input:`k96YK(v/&ICmGB	5bza?HcP_1W qRoA.=
`,reserved1Output:"mteqh0ys62p1fxj589ro4aunzlig3c7wbk",reserved2:56,reserved2Input:"{eF%OXrQ2>np3JN]47u",reserved2Output:"9jmanwyqx0s54zuto6h"},{id:"nloc",input:"x<[ykY%1-sK9_C0Raj#8OLl]/HwhqFU	3",output:"0ozupkrx6qjwnygl34m7i9th1f8v2bec5",reserved1:97,reserved1Input:'&m2GT5IrP" .B(o=:igbJpWnz7tcvNZ`>\n',reserved1Output:"74hfvbtcj2eroa0ul56yw3inqxkgp9m1zs",reserved2:115,reserved2Input:"uV6})Q'?D{SeAMX4;Ef",reserved2Output:"91ysxe8luorn6vpciwq"},{id:"fkad",input:"7z>g}{/W#`c[ZT&sI<2-haKXYn\no)xSFA",output:"niue8tmyacj3l91q65fxbwzrv7po2gk40",reserved1:115,reserved1Input:"1EHb.|u?p(qfPity'r6O%	w=]9BJRD;:8k",reserved1Output:"phm21v9cw4b73yglnfxotazsuj8qrk650i",reserved2:104,reserved2Input:'Qj^ NCUv54le"VMm_30GL',reserved2Output:"bixqrhwn9zjm54o12fe0s"},{id:"svmm",input:`maG;FT.e2cYzV:%i})g4bp-KUZy<wL
_?`,output:"1nwsr7vk8fh0l3ut92jigqx6z45cpbmyo",reserved1:97,reserved1Input:'krBJtD(Qlv^>#[h{X19o&SEAM/n"O= 05P',reserved1Output:"36qz0mv9tne7kwra5i1ujx28oyfspcglh4",reserved2:101,reserved2Input:"|`	'Rqj6CNWH]I8sx7u3f",reserved2Output:"wegyjpzux38q2a9vmifot"},{id:"cokq",input:`(r%96jVK7{kP	gDhOcFs'1;M"IuQZ/yqA`,output:"izxsomqh3p8bvga49w7fy2tluc6e5n01r",reserved1:106,reserved1Input:"^zG[wm\nC`=8Bv><&]0:T L#px3Xli-n).4",reserved1Output:"p91tzx4ibshwf3qyen506ugo2mkv8lrjc7",reserved2:107,reserved2Input:"EYf?RN2a}WbU5eH_|StJo",reserved2Output:"sm8fkhrwa94y0eupj2nq1"},{id:"znbg",input:"(	EHC_;s/.WgNfVl z9MYhQ}Tj:JFUS)#",output:"o5hkm78up2yxwvzsj0at1bglr6ei43ncq",reserved1:102,reserved1Input:`KZi{^4<m"5'c%
XLurypqA8[eIw-DR|kbB`,reserved1Output:"ou7ercvw9l01yghnfip685bzxqtak3sjm4",reserved2:57,reserved2Input:"=6a0G>POo37nv?x&1`]2t",reserved2Output:"crxmjf7yhgt6o3p8l09iv"}];var F=async e=>{let n=await(await fetch(`https://${e}/loader.min.js`,{cache:"force-cache"})).text();if(n.length===0)throw new Error("Empty response");return n},W=e=>{let t=/eyJ[\w-]*\.eyJ[\w-]*\.[\w-]*/.exec(e);if(t===null)throw new Error("Token not found");return t[0]},R=async e=>W(await F(e)),z=(e,t,n)=>{let r=JSON.parse(e);return r.map(async a=>{let o=a.tags,i=new RegExp("(?<=resources:\\/\\/)[a-zA-Z0-9._-]+").exec(o)?.[0]||"";a.tags=o.replace(/resources:\/\/[a-zA-Z0-9._-]+/,`https://${n}/resources/${i}?token=${t}`)}),JSON.stringify(r)};var v=class{Cache;Analyzer;constructor(t){this.Cache=new Map,this.Analyzer=t}analyze(t){if(this.Cache.has(t))return this.Cache.get(t);let n=this.Analyzer(t);return this.Cache.set(t,n),n}},X=new v(e=>e.startsWith("[")||e.startsWith("<")),$=new v(e=>e.startsWith("chrome")||e.startsWith("webkit")||e.startsWith("moz")),w=["07c225f3.online","css-load.com","html-load.com","content-loader.com","22d2d4d9-0c15-4a3a-9562-384f2c100146.xyz","f97ae142.online","html-load.cc","2aeabdd4-3280-4f03-bc92-1890494f28be.xyz","e1577bbd-2a7e-4bee-b2fe-12a6406689e5.xyz"],h=new v(e=>{for(let t of w)if(e.includes(t))return!0;return!1});var _=({Trace:e})=>h.analyze(e[e.length-1]),L=({Trace:e})=>{for(let t of e)if(h.analyze(t))return!0;return!1},P=e=>t=>{for(let n of e)if(n(t))return!0;return!1},m=P([_]),l=P([L]);var k=e=>new Proxy(console.debug,{apply(t,n,r){Reflect.apply(t,n,[`${e}`,...r])}}),y=k("[microShield:__utils__]");var p=()=>{let e=new Error;if(!e.stack)throw new Error("Stack trace is not available!");if(e.stack.includes("@")){let r=e.stack.split(`
`).slice(2),a=[];navigator.userAgent.includes("Firefox/")&&r.splice(-1,1);for(let o of r){let i=o.indexOf("@")+1,u=o.lastIndexOf(":"),f=u<0?o.slice(i):o.slice(i,o.lastIndexOf(":",u-1));a.push(f)}return{Trace:a,Raw:r}}let t=e.stack.slice(6).split(`
`).slice(2),n=[];for(let r of t){let a=r.slice(r.indexOf("(")+1||r.indexOf("at")+3,r.lastIndexOf(":",r.lastIndexOf(":")-1));n.push(a)}return{Trace:n,Raw:t}},d=(e,t=e.name)=>new Proxy(e,{apply(r,a,o){let i=p();if(m(i))throw y(`apply name=${t} Args=`,o,"stack=",i.Raw),new Error("microShield");return Reflect.apply(r,a,o)},setPrototypeOf(r,a){let o=p();if(l(o))throw y(`setPrototypeOf name=${t} stack=`,o.Raw),new Error("microShield");return Reflect.setPrototypeOf(r,a)}}),x=async e=>e.readyState!=="loading"?!0:new Promise(t=>{e.addEventListener("readystatechange",()=>{t(!0)})}),q=(e,t=e.name)=>new Proxy(e,{set(r,a,o,i){let u=p();if(m(u))throw y(`set name=${t} Args=`,o,"stack=",u.Raw),new Error("Overriding Error is not allowed!");return Reflect.set(r,a,o,i)},setPrototypeOf(r,a){let o=p();if(l(o))throw y(`setPrototypeOf name=${t} stack=`,o.Raw),new Error("Overriding prototype of Error is not allowed!");return Reflect.setPrototypeOf(r,a)}}),H=e=>{let t=e.join(`
`),n=!1;return n||=(t.match(/eval/g)?.length??-1)>=4&&(t.includes("NodeList.forEach")??!1),n||=(/^[A-Za-z0-9/<>]+@https:\/\/.+ line [0-9]+ > eval/.exec(t)?.length??-1)>=1&&(t.match(/\n([a-zA-Z0-9]+)?@https:\/\/.+ line [0-9]+ > eval/g)?.length??-1)>=2,n||=(t.match(/\n([a-zA-Z0-9]+)?@\n/g)?.length??-1)>=2&&(t.includes("forEach@[native code]")??!1),n},O=(e,t=e.name)=>new Proxy(e,{apply(r,a,o){let i=p();if(H(i.Raw)||m(i))throw y(`apply name=${t} Args=`,o,"stack=",i.Raw),new Error("microShield");return Reflect.apply(r,a,o)},setPrototypeOf(r,a){let o=p();if(l(o))throw y(`setPrototypeOf name=${t} stack=`,o.Raw),new Error("microShield");return Reflect.setPrototypeOf(r,a)}}),j=(e,t=e.name)=>new Proxy(e,{apply(r,a,o){if(o.length>0&&w.some(i=>o.join(`
`).includes(i)))throw new Error("microShield");return Reflect.apply(r,a,o)},setPrototypeOf(r,a){let o=p();if(l(o))throw y(`setPrototypeOf name=${t} stack=`,o.Raw),new Error("microShield");return Reflect.setPrototypeOf(r,a)}});var g=k("[microShield:tinywave]"),N=async(e,t)=>{let n=e.slice(0,4),r=A.find(c=>c.id===n);if(!r)throw new Error("DEFUSER_TINYWAVE_KEY_NOT_FOUND");let a=String.fromCharCode(r.reserved1),o=String.fromCharCode(r.reserved2),i=(c,C,E)=>{let I=C.indexOf(E);return I>=0?c[I]:E},u=0,f=e.slice(4).split("").map(c=>{if(!u){if(c===a)return u=1,"";if(c===o)return u=2,""}return u===1?(u=0,r.reserved1Output.includes(c)?i(r.reserved1Input,r.reserved1Output,c):i(r.input,r.output,c)+c):u===2?(u=0,r.reserved2Output.includes(c)?i(r.reserved2Input,r.reserved2Output,c):i(r.input,r.output,c)+c):i(r.input,r.output,c)}).join(""),b=new URL(t.startsWith("//")?`https:${t}`:t).hostname;if(f.includes("resources://")){g("downloading remote resource from Ad-Shield is required",{Id:r.id,data:f});let c=await R(b);f=z(f,c,b)}return JSON.parse(f)},G=e=>{g("restore");let t=0;for(let n of e)try{n.tags&&document.head.insertAdjacentHTML("beforeend",n.tags)}catch(r){g("restore error=",r),t++}g(`restore total=${e.length} failed=${t}`)},Z=async()=>{let e,t=()=>{let n=document.querySelector('script[data]:not([data=""])');if(n){let r=n.getAttribute("src"),a=n.getAttribute("data");r&&a&&(e={script:r,data:a})}};if(t(),e||(await x(document),t()),!e)throw new Error("DEFUSER_SHORTWAVE_TARGET_NOT_FOUND");return await N(e.data,e.script)},T=async()=>{let e=await Z();g("payload",e),G(e)};var U=[["inventories",e=>Array.isArray(e)&&Object.getOwnPropertyNames(e[0]).includes("originalAds")],["key",e=>typeof e=="string"&&e.startsWith("as")]],S=e=>{if(typeof e!="object")return!1;if(Array.isArray(e)){for(let n of e)if(S(n))return!0}let t=Object.getOwnPropertyNames(e);for(let[n,r]of U)if(t.includes(n)&&r(e[n]))return!0;return!1};var s=typeof unsafeWindow<"u"?unsafeWindow:window,J=()=>{s.Element.prototype.remove=O(s.Element.prototype.remove,"Element.prototype.remove"),s.Element.prototype.removeChild=O(s.Element.prototype.removeChild,"Element.prototype.removeChild"),s.Element.prototype.insertAdjacentHTML=d(s.Element.prototype.insertAdjacentHTML,"Element.prototype.insertAdjacentHTML"),s.Element.prototype.setAttribute=d(s.Element.prototype.setAttribute,"Element.prototype.setAttribute"),s.alert=j(s.alert,"alert"),s.HTMLScriptElement.prototype.setAttribute=new Proxy(s.HTMLScriptElement.prototype.setAttribute,{apply(e,t,n){n[0]==="src"&&typeof n[1]=="string"&&h.analyze(n[1])||Reflect.apply(e,t,n)},setPrototypeOf(e,t){return!1}}),s.EventTarget.prototype.addEventListener=d(s.EventTarget.prototype.addEventListener,"EventTarget.prototype.addEventListener"),s.MessagePort.prototype.postMessage=d(s.MessagePort.prototype.postMessage,"MessagePort.prototype.postMessage"),s.document.createElement=d(s.document.createElement,"document.createElement"),s.setInterval=d(s.setInterval,"setInterval"),s.setTimeout=d(s.setTimeout,"setInterval"),s.decodeURIComponent=new Proxy(s.decodeURIComponent,{apply(e,t,n){let r=Reflect.apply(e,t,n);for(let a of w)if(r.includes(a))return"";return r}}),localStorage.removeItem("as_profile_cache"),localStorage.removeItem("adshield-analytics-uuid"),s.Storage.prototype.setItem=new Proxy(s.Storage.prototype.setItem,{apply(e,t,n){let[r]=n;if(l(p())||r.startsWith("as_")||r.startsWith("as-")||r.includes("adshield"))throw new DOMException("QuotaExceededError");return Reflect.apply(e,t,n)}}),s.fetch=d(s.fetch,"fetch"),s.XMLHttpRequest=new Proxy(s.XMLHttpRequest,{construct(e,t,n){return l(p())?{}:Reflect.construct(e,t,n)}}),s.Error=q(s.Error,"Error"),s.navigator.vendor.includes("Apple")&&(s.JSON.parse=new Proxy(s.JSON.parse,{apply(e,t,n){let r=Reflect.apply(e,t,n);return m(p())||S(r)?null:r},set(){throw new Error("Overriding JSON.parse is not allowed!")}}),x(document).then(()=>{for(let t of document.querySelectorAll('iframe[src="about:blank"]'))t.remove();new MutationObserver(t=>{for(let n of t)for(let r of n.addedNodes)r instanceof HTMLIFrameElement&&r.getAttribute("src")==="about:blank"&&r.remove()}).observe(document.documentElement??document.body,{childList:!0,subtree:!0}),document.head.insertAdjacentHTML("afterbegin",'<style>iframe[src="about:blank"]{display:none!important}</style>')})),T()};J();})();
