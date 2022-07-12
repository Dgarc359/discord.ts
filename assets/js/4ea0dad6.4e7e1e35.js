"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1102],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return r?o.createElement(f,s(s({ref:t},p),{},{components:r})):o.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3358:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:0},s="Common Errors",i={unversionedId:"faq/Errors/Common",id:"faq/Errors/Common",title:"Common Errors",description:"The most common errors we hear everyday are listed here to help everyone. If you can't find a common error or its solution, please make a pull request or issue.",source:"@site/docs/faq/Errors/Common.md",sourceDirName:"faq/Errors",slug:"/faq/Errors/Common",permalink:"/docs/faq/Errors/Common",draft:!1,editUrl:"https://github.com/oceanroleplay/discord.ts/edit/main/docs/docs/faq/Errors/Common.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1657623941,formattedLastUpdatedAt:"Jul 12, 2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docSidebar",previous:{title:"ESM vs CJS",permalink:"/docs/faq/esm-vs-cjs"},next:{title:"Pagination",permalink:"/docs/faq/Errors/Pagination"}},l={},d=[{value:"ERR_MODULE_NOT_FOUND",id:"err_module_not_found",level:2},{value:"Solution",id:"solution",level:4},{value:"SyntaxError: The requested module does not provide an export named",id:"syntaxerror-the-requested-module-does-not-provide-an-export-named",level:2},{value:"Solution",id:"solution-1",level:4},{value:"Slash: Missing Access",id:"slash-missing-access",level:2},{value:"Solution",id:"solution-2",level:4},{value:"DISALLOWED_INTENTS",id:"disallowed_intents",level:2},{value:"Solution",id:"solution-3",level:4}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"common-errors"},"Common Errors"),(0,n.kt)("p",null,"The most common errors we hear everyday are listed here to help everyone. If you can't find a common error or its solution, please make a pull request or issue."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"err_module_not_found"},"ERR_MODULE_NOT_FOUND"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown"},"CustomError: Cannot find module '/project/secret' imported from '/project/index.ts'\n")),(0,n.kt)("h4",{id:"solution"},"Solution"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/faq/esm-vs-cjs#import-in-cjs-vs-esm"},"Read here")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"syntaxerror-the-requested-module-does-not-provide-an-export-named"},"SyntaxError: The requested module does not provide an export named"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { ArgsOf, Client } from 'discordx';\n^^^^^\nSyntaxError: The requested module 'discordx' does not provide an export named 'ArgsOf'\n\n")),(0,n.kt)("h4",{id:"solution-1"},"Solution"),(0,n.kt)("p",null,"Use import type. ",(0,n.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-3-8-beta/#type-only-imports-exports"},"Read it in depth"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import type { ArgsOf } from "discordx";\nimport { Client } from "discordx";\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"slash-missing-access"},"Slash: Missing Access"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown"},"      throw new DiscordAPIError(data, res.status, request);\n            ^\n\nDiscordAPIError: Missing Access\n")),(0,n.kt)("h4",{id:"solution-2"},"Solution"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/decorators/commands/slash#authorize-your-bot-to-use-application-commands"},"Authorize your bot to use application commands")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"disallowed_intents"},"DISALLOWED_INTENTS"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Error [DISALLOWED_INTENTS]: Privileged intent provided is not enabled or whitelisted\n")),(0,n.kt)("h4",{id:"solution-3"},"Solution"),(0,n.kt)("p",null,"Some ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/topics/gateway#gateway-intents"},"Gateway Intents")," require approval if your bot is verified. If your bot is not verified, you can toggle those intents to access them. - ",(0,n.kt)("em",{parentName:"p"},"Discord")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Privileged Gateway Intents",src:r(9020).Z,width:"1402",height:"698"}),")"))}c.isMDXComponent=!0},9020:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/privileged-gateway-intents-b208d5e9edc65ba14cb2eb6af4afa2b2.png"}}]);