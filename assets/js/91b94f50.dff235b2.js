"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3677],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(g,s(s({ref:t},c),{},{components:r})):a.createElement(g,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3697:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=r(7462),o=(r(7294),r(3905));const n={title:"Readme"},s=void 0,i={unversionedId:"packages/lava-queue/README",id:"packages/lava-queue/README",title:"Readme",description:'<a href="https://discord-ts.js.org/discord"',source:"@site/docs/packages/lava-queue/README.md",sourceDirName:"packages/lava-queue",slug:"/packages/lava-queue/",permalink:"/docs/packages/lava-queue/",draft:!1,editUrl:"https://github.com/oceanroleplay/discord.ts/edit/main/docs/docs/packages/lava-queue/README.md",tags:[],version:"current",frontMatter:{title:"Readme"},sidebar:"packagesSidebar",previous:{title:"Readme",permalink:"/docs/packages/lava-player/"},next:{title:"Readme",permalink:"/docs/packages/music/"}},p={},l=[],c={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:""}),(0,o.kt)("div",null,(0,o.kt)("p",{align:"center"},(0,o.kt)("a",{href:"https://discord-ts.js.org",target:"_blank",rel:"nofollow"},(0,o.kt)("img",{src:"https://discord-ts.js.org/discord-ts.svg",width:"546"}))),(0,o.kt)("p",{align:"center"},(0,o.kt)("a",{href:"https://discord-ts.js.org/discord"},(0,o.kt)("img",{src:"https://img.shields.io/discord/874802018361950248?color=5865F2&logo=discord&logoColor=white",alt:"Discord server"})),(0,o.kt)("a",{href:"https://www.npmjs.com/package/@discordx/lava-queue"},(0,o.kt)("img",{src:"https://img.shields.io/npm/v/@discordx/lava-queue.svg?maxAge=3600",alt:"NPM version"})),(0,o.kt)("a",{href:"https://www.npmjs.com/package/@discordx/lava-queue"},(0,o.kt)("img",{src:"https://img.shields.io/npm/dt/@discordx/lava-queue.svg?maxAge=3600",alt:"NPM downloads"})),(0,o.kt)("a",{href:"https://github.com/oceanroleplay/discord.ts/actions"},(0,o.kt)("img",{src:"https://github.com/oceanroleplay/discord.ts/workflows/Build/badge.svg",alt:"Build status"})),(0,o.kt)("a",{href:"https://www.paypal.me/vijayxmeena"},(0,o.kt)("img",{src:"https://img.shields.io/badge/donate-paypal-F96854.svg",alt:"paypal"}))),(0,o.kt)("p",{align:"center"},(0,o.kt)("b",null," Create a discord bot with TypeScript and Decorators! "))),(0,o.kt)("h1",{id:"-introduction"},"\ud83d\udcd6 Introduction"),(0,o.kt)("p",null,"A powerful queue system for ",(0,o.kt)("inlineCode",{parentName:"p"},"@discordx/lava-player")," library written in ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org"},"TypeScript")," for ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js"),"."),(0,o.kt)("h1",{id:"-installation"},"\ud83d\udcbb Installation"),(0,o.kt)("p",null,"Version 16.6.0 or newer of Node.js is required"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install @discordx/lava-queue\nyarn add @discordx/lava-queue\n")),(0,o.kt)("h1",{id:"-bot-examples"},"\ud83e\udd16 Bot Examples"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord-lavalink-music-bot/"},"Starter repo from @oceanroleplay")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Create a pull request to include your bot in the example list."),(0,o.kt)("h1",{id:"\ufe0f-need-help"},"\u260e\ufe0f Need help?"),(0,o.kt)("p",null,"Ask in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://discord-ts.js.org/discord"},"discord server"))," or open a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/oceanroleplay/discord.ts/issues"},"issue"))),(0,o.kt)("h1",{id:"thank-you"},"Thank you"),(0,o.kt)("p",null,"Show your support for ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/discordx"},"discordx")," by giving us a star on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts"},"github"),"."))}d.isMDXComponent=!0}}]);