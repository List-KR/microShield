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
// @version      4.1.0
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
"use strict";(()=>{var Y=[..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"],Z=[..."0123456789"],X=[..."CDEHKMPRTUWXY012458"],B=[..."!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"],Q=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"],P=(e,t)=>e[t]+(e[t+1]<<8),$=(e,t,r)=>{let n=t.length,o=Math.floor(65536/n)*n-1,s=2*Math.ceil(1.1*e),c="",a=0;for(;a<e;){let i=r(s),d=0;for(;d<s&&a<e;){let p=P(i,d);d+=2,!(p>o)&&(c+=t[p%n],a++)}}return c},ee=async(e,t,r)=>{let n=t.length,o=Math.floor(65536/n)*n-1,s=2*Math.ceil(1.1*e),c="",a=0;for(;a<e;){let i=await r(s),d=0;for(;d<s&&a<e;){let p=P(i,d);d+=2,!(p>o)&&(c+=t[p%n],a++)}}return c},te=new Set([void 0,"hex","base64","url-safe","numeric","distinguishable","ascii-printable","alphanumeric"]),j=(e,t,r)=>({length:n,type:o,characters:s})=>{if(!(n>=0&&Number.isFinite(n)))throw new TypeError("Expected a `length` to be a non-negative finite number");if(o!==void 0&&s!==void 0)throw new TypeError("Expected either `type` or `characters`");if(s!==void 0&&typeof s!="string")throw new TypeError("Expected `characters` to be string");if(!te.has(o))throw new TypeError(`Unknown type: ${o}`);if(o===void 0&&s===void 0&&(o="hex"),o==="hex"||o===void 0&&s===void 0)return t(Math.ceil(n*.5),"hex",n);if(o==="base64")return t(Math.ceil(n*.75),"base64",n);if(o==="url-safe")return e(n,Y,r);if(o==="numeric")return e(n,Z,r);if(o==="distinguishable")return e(n,X,r);if(o==="ascii-printable")return e(n,B,r);if(o==="alphanumeric")return e(n,Q,r);if(s.length===0)throw new TypeError("Expected `characters` string length to be greater than or equal to 1");if(s.length>65536)throw new TypeError("Expected `characters` string length to be less or equal to 65536");return e(n,s,r)};function C(e,t){return j($,e,t)}function q(e,t){return j(ee,e,t)}var re=e=>[...e].map(t=>t.toString(16).padStart(2,"0")).join(""),ne=e=>btoa(String.fromCodePoint(...e)),R=65536;function k(e){let t=new Uint8Array(e);for(let r=0;r<e;r+=R)t.set(crypto.getRandomValues(new Uint8Array(Math.min(R,e-r))),r);return t}function z(e,t,r){let n=k(e);return(t==="hex"?re:ne)(n).slice(0,r)}var g=C(z,k),Ee=q(z,k);var f=(e,t)=>{for(let r of t)if(e.includes(r))return!0;return!1};var v=["07c225f3.online","css-load.com","html-load.com","content-loader.com","22d2d4d9-0c15-4a3a-9562-384f2c100146.xyz","f97ae142.online","html-load.cc","error-report.com","2aeabdd4-3280-4f03-bc92-1890494f28be.xyz","e1577bbd-2a7e-4bee-b2fe-12a6406689e5.xyz","fadeb9a7-2417-4a51-8d99-0421a5622cbe.xyz"],y=[...v,"failed to load website","blocking software"],oe=v.length,D=()=>v[Number(g({length:16,type:"numeric"}))*1e-16*oe>>>0],A=e=>{if(f(e,v))return!0;let t=new URL(e);return t.hostname!==location.hostname&&t.pathname==="/loader.min.js"};var H=[{id:"kynb",input:'0Nm}ubC9L6k{7("nx>s=Ko]IBw/ySgf%W',output:"a274bcljtv0omw6z9g5p13us8ekhxirfq",reserved1:121,reserved1Input:"e?`3AU<2Z[;	iJEFV'|Pa8T5j-.v :q#H)",reserved1Output:"eow5rfluq8x4zgj70p13ci6mh2s9tnkabv",reserved2:110,reserved2Input:`&XD_QOhMrltpR1c4zG
Y`,reserved2Output:"c7863qbsmwy54otnhiv1"},{id:"uyyk",input:"Tx<W|XvcubCz-ekU/ oiM	&:%Ig>2h{s[",output:"mjb0feu6lzx7kqhgop4at831c92ywir5n",reserved1:118,reserved1Input:`5f;Vt"qDLB91'm
}?R6S(Z#A\`Jr0HQlKP)`,reserved1Output:"qp5r842ycvxjowbaz7uhts9gk6i0emn13f",reserved2:115,reserved2Input:"NGnE8a_y.FjYO=4w3]p7",reserved2Output:"kn1eho6fjbr40pxc9i2q"},{id:"rypa",input:`B8 /Y9o]VHC_p3yt
hTONi5q6IG-r=2g%`,output:"ul2ow01j9zq58mfk4cv37absyigteh6xn",reserved1:112,reserved1Input:`nEeJKa.:P{A;x0UL"4'XFm|}wfvzQ#7ZS(`,reserved1Output:"m8961qwzghu27xeoapn3k5ilvrfjc4syt0",reserved2:114,reserved2Input:"&j<RDs[W>bukM`c?1)	l",reserved2Output:"6akyhor80m37slfw1vxp"},{id:"ehor",input:`"q4
J3fkZhj&lt\`wH50T='g|(EP[B-QYD`,output:"7uil5a3gxbrptvjeymo4c09wqzs682nf1",reserved1:107,reserved1Input:"<GcpOI/	zAX%6?9o r.bmFRie>Ks_)v;Vu",reserved1Output:"ypwzx2usm8og5q74tanlb6ri3vcehj9kf1",reserved2:104,reserved2Input:"7y:x218]U#NC}nWaMS{L",reserved2Output:"bja3zkfvqltgu5sw678n"},{id:"zmpc",input:`.Ip>szJ8EwahYM/v;yKc=f
([_T q3nOS`,output:"5nv1iegza269ju8soky04h3p7rltcxmbq",reserved1:119,reserved1Input:'QCABV"]#0jb&Wo6t:UuiHg1rPD4%)RlNk-',reserved1Output:"le4971m5irpukxjv3sq2o8y60gnbzthwfa",reserved2:102,reserved2Input:"G752e`LXx'Zm}9<	{?F",reserved2Output:"plbi21cxfmo36tn50uq"},{id:"fwbh",input:`x5A8hE9=
QG1"CuJ'oV(I)>lbW4D#e L6`,output:"wr275yogsj4kv03izcnx1uaqb8pflm6th",reserved1:57,reserved1Input:"3%t	{2rckfyXR]?NK&/Fgw;TSMmn-7_iU.",reserved1Output:"y93rfts7lxq8vkgjen5m0i6wzhap1ucb2o",reserved2:101,reserved2Input:"}qB<z`PZ[YH:0sjvaOp",reserved2Output:"6m7kwe3qaohu5g4bz8i"},{id:"qbuw",input:"i;Uj'[<w\"DT0lZLgS8f#hxsMV}ty:E-)`",output:"3c51goq40pzal9r6xuvtkey2swnj7mihb",reserved1:102,reserved1Input:`k96YK(v/&ICmGB	5bza?HcP_1W qRoA.=
`,reserved1Output:"mteqh0ys62p1fxj589ro4aunzlig3c7wbk",reserved2:56,reserved2Input:"{eF%OXrQ2>np3JN]47u",reserved2Output:"9jmanwyqx0s54zuto6h"},{id:"nloc",input:"x<[ykY%1-sK9_C0Raj#8OLl]/HwhqFU	3",output:"0ozupkrx6qjwnygl34m7i9th1f8v2bec5",reserved1:97,reserved1Input:'&m2GT5IrP" .B(o=:igbJpWnz7tcvNZ`>\n',reserved1Output:"74hfvbtcj2eroa0ul56yw3inqxkgp9m1zs",reserved2:115,reserved2Input:"uV6})Q'?D{SeAMX4;Ef",reserved2Output:"91ysxe8luorn6vpciwq"},{id:"fkad",input:"7z>g}{/W#`c[ZT&sI<2-haKXYn\no)xSFA",output:"niue8tmyacj3l91q65fxbwzrv7po2gk40",reserved1:115,reserved1Input:"1EHb.|u?p(qfPity'r6O%	w=]9BJRD;:8k",reserved1Output:"phm21v9cw4b73yglnfxotazsuj8qrk650i",reserved2:104,reserved2Input:'Qj^ NCUv54le"VMm_30GL',reserved2Output:"bixqrhwn9zjm54o12fe0s"},{id:"svmm",input:`maG;FT.e2cYzV:%i})g4bp-KUZy<wL
_?`,output:"1nwsr7vk8fh0l3ut92jigqx6z45cpbmyo",reserved1:97,reserved1Input:'krBJtD(Qlv^>#[h{X19o&SEAM/n"O= 05P',reserved1Output:"36qz0mv9tne7kwra5i1ujx28oyfspcglh4",reserved2:101,reserved2Input:"|`	'Rqj6CNWH]I8sx7u3f",reserved2Output:"wegyjpzux38q2a9vmifot"},{id:"cokq",input:`(r%96jVK7{kP	gDhOcFs'1;M"IuQZ/yqA`,output:"izxsomqh3p8bvga49w7fy2tluc6e5n01r",reserved1:106,reserved1Input:"^zG[wm\nC`=8Bv><&]0:T L#px3Xli-n).4",reserved1Output:"p91tzx4ibshwf3qyen506ugo2mkv8lrjc7",reserved2:107,reserved2Input:"EYf?RN2a}WbU5eH_|StJo",reserved2Output:"sm8fkhrwa94y0eupj2nq1"},{id:"znbg",input:"(	EHC_;s/.WgNfVl z9MYhQ}Tj:JFUS)#",output:"o5hkm78up2yxwvzsj0at1bglr6ei43ncq",reserved1:102,reserved1Input:`KZi{^4<m"5'c%
XLurypqA8[eIw-DR|kbB`,reserved1Output:"ou7ercvw9l01yghnfip685bzxqtak3sjm4",reserved2:57,reserved2Input:"=6a0G>POo37nv?x&1`]2t",reserved2Output:"crxmjf7yhgt6o3p8l09iv"}];var ie=async e=>{let r=await(await fetch(e,{cache:"force-cache"})).text();if(r.length===0)throw new Error("Failed to fetch resource!");return"<style>"+r+"</style>"},F=async e=>{let r=await(await fetch(e,{cache:"force-cache"})).text(),n=/eyJ[\w-]*\.eyJ[\w-]*\.[\w-]*/.exec(r);if(n===null)throw new Error("Failed to match predefined token in the script!");return n[0]},N=async(e,t)=>{let r=/(resources:\/\/[^'"]+)/g,n=D(),o="",s=null;for(;(s=r.exec(e))!==null;){let c="https://"+n+"/resources/"+s[1].slice(12)+"?token="+t;o+=await ie(c).catch(a=>(console.error(a),""))}return o};var l=e=>{let t=`[microShield:${e}]`;return new Proxy(console.debug,{apply(r,n,o){Reflect.apply(r,n,[t,...o])}})};var L={Debug:!1};var T=()=>{let e=new Error;if(!e.stack)throw new Error("Stack trace is not available!");return e.stack},ce=(e=T())=>{if(e.includes("@")){let n=e.split(`
`).slice(2),o=[];navigator.userAgent.includes("Firefox/")&&n.splice(-1,1);for(let s of n){let c=s.indexOf("@")+1,a=s.lastIndexOf(":"),i=a<0?s.slice(c):s.slice(c,s.lastIndexOf(":",a-1));o.push(i)}return o}let t=e.slice(6).split(`
`).slice(2),r=[];for(let n of t){let o=n.slice(n.indexOf("(")+1||n.indexOf("at")+3,n.lastIndexOf(":",n.lastIndexOf(":")-1));r.push(o)}return r},M=(e=ce())=>{let t=0;for(let r of e){let n=r.indexOf("://");if(n===5||n===4)break;t++}return e.slice(t)};var W=typeof unsafeWindow<"u"?unsafeWindow:window,ae=l("secret"),h=g({length:20}),S=(e,t,r)=>{ae(t?"-":"+","name="+e,"v=",r,"stack=",T())},O=(e,t)=>new Proxy(e,{apply(r,n,o){let s=()=>{throw S(t.Name,!0,o),new Error},c=M(),a=c[c.length-1];if(a===void 0||a.startsWith("chrome")||a.startsWith("webkit")||a.startsWith("moz"))return!1;if(A(a)&&s(),t.CheckArguments)for(let i of o.filter(d=>typeof d=="string"))f(i,y)&&s();if(t.CheckArgumentFunctions)for(let i of t.CheckArgumentFunctions)i(o)||s();if(t.CheckOutputs){let i=Reflect.apply(r,n,o);f(i.toLowerCase(),y)&&s()}return L.Debug&&S(t.Name,!1,o),Reflect.apply(r,n,o)},setPrototypeOf(r,n){throw S(t.Name,!0,n),new Error}}),m=new Set,ue=(e,t,r)=>{if(m.size===0){let n=O(Object.defineProperty,{CheckArgumentFunctions:[s=>!m.has(s[0][s[1]])]}),o=O(Object.defineProperties,{CheckArgumentFunctions:[s=>{for(let c of Object.keys(s[1]))if(m.has(s[0][c]))return!1;return!0}]});m.add(n),m.add(o),Object.defineProperty(W.Object,"defineProperty",{value:n}),Object.defineProperties(W.Object,{defineProperty:{value:n},defineProperties:{value:o}})}Object.defineProperty(e,t,{value:r}),m.add(r)},u=(e,t,r)=>{let n=e[t];r===void 0&&(r={}),r.Name===void 0&&(r.Name=n.name),ue(e,t,O(n,r))};var w="asdf-",U=()=>{u(window.Storage.prototype,"setItem",{CheckArgumentFunctions:[e=>!e[0].startsWith(w)||e[2]===h]}),u(window.Storage.prototype,"removeItem",{CheckArgumentFunctions:[e=>!e[0].startsWith(w)||e[1]===h]}),u(window.Storage.prototype,"clear")},_=e=>localStorage.getItem(w+e,h),G=(e,t)=>{localStorage.setItem(w+e,t,h)};var de=l("entities");var pe=e=>{let t=document.querySelector(e.Selector);if(!t)throw new Error("The target node was not found in the frame!");t.before(e.TextContent),t.remove()},le=e=>{document.head.insertAdjacentHTML("beforeend",e.Html)},fe=async e=>{e.Type===1?le(e):e.Type===0&&pe(e)},x=async e=>Promise.allSettled(e.map(async t=>fe(t))),K=async()=>{let e=_("entity-cache-rev2");if(!e)throw new Error("The cached entities does not exist on this browser!");let t=JSON.parse(e);if(Date.now()-t.CreatedAt>1e3*60*60*24*30)throw new Error("The cached entities are too old!");if(!t.Entities.reduce((n,o)=>o.Type===1?n+o.Html.length:n,0))throw new Error("The cached entities has no content!");return de("restoring cached entities data=",t),await x(t.Entities),!0},J=e=>{e.length!==0&&G("entity-cache-rev2",JSON.stringify({Entity:e,CreatedAt:Date.now()}))};var b=async(e=document)=>{if(e.readyState==="loading")return new Promise(t=>{e.addEventListener("readystatechange",()=>{t()})})};var E=l("ztinywave"),me=e=>{let t=e.slice(0,4),r=H.find(i=>i.id===t);if(!r)throw new Error("DEFUSER_ZTINYWAVE_KEY_NOT_FOUND");let n=String.fromCharCode(r.reserved1),o=String.fromCharCode(r.reserved2),s=(i,d,p)=>{let I=d.indexOf(p);return I>=0?i[I]:p},c=0,a=e.slice(4).split("").map(i=>{if(!c){if(i===n)return c=1,"";if(i===o)return c=2,""}return c===1?(c=0,r.reserved1Output.includes(i)?s(r.reserved1Input,r.reserved1Output,i):s(r.input,r.output,i)+i):c===2?(c=0,r.reserved2Output.includes(i)?s(r.reserved2Input,r.reserved2Output,i):s(r.input,r.output,i)+i):s(r.input,r.output,i)}).join("");return JSON.parse(a)},ye=async()=>{let e=[],t=()=>{let r=document.querySelectorAll('script[data]:not([data=""]),script[wp-data]:not([wp-data=""])');for(let n of r){let o=n.getAttribute("src"),s=n.getAttribute("data");o&&s&&e.push({Script:o,Data:s})}};if(t(),e.length===0&&(await b(document),t()),e.length===0)throw new Error("DEFUSER_ZTINYWAVE_TARGET_NOT_FOUND");return e},V=async()=>{if(await K().catch(o=>(E("Failed to initialise cached entities",o),!1)))return;let t=[],n=(await ye()).map(async o=>{E("source",o);let s=me(o.Data);E("payload",s);let c=[],a=[];for(let d of s)d.tags&&(d.tags.includes("resources://")?a.push({Type:1,Html:d.tags}):c.push({Type:1,Html:d.tags}));x(c);let i=await F(o.Script);for(let d of a)d.Type===1&&(d.Html=await N(d.Html,i));return x(a),t.push(...c,...a),t});E("sources resolves",await Promise.allSettled(n)),J(t)};var he=()=>{let e=typeof unsafeWindow<"u"?unsafeWindow:window;u(e,"Error"),u(e.EventTarget.prototype,"addEventListener"),u(e.MessagePort.prototype,"postMessage"),u(e.Element.prototype,"remove"),u(e.Element.prototype,"removeChild"),u(e.Element.prototype,"insertAdjacentElement"),u(e.Element.prototype,"insertAdjacentHTML"),u(e,"setInterval"),u(e,"setTimeout"),u(e.Element.prototype,"setAttribute",{CheckArguments:!0}),u(e.Element.prototype,"setAttributeNS",{CheckArguments:!0}),u(e.document,"createElement"),u(e.document,"createElementNS"),u(e,"alert",{CheckArguments:!0}),u(e,"confirm",{CheckArguments:!0}),u(e,"atob",{CheckOutputs:!0}),u(e,"decodeURI"),u(e,"decodeURIComponent"),U(),u(e,"fetch",{CheckArguments:!0})},ge=()=>{let e=l("observe");new MutationObserver(r=>{for(let n of r)for(let o of n.addedNodes)o instanceof HTMLElement&&f(o.innerHTML,y)&&(o.remove(),e(o))}).observe(document.body,{subtree:!0,childList:!0})},ve=()=>{he(),V(),b().then(()=>{ge()})};ve();})();
