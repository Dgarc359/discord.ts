"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=d(n),c=a,m=h["".concat(l,".").concat(c)]||h[c]||u[c]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},i="Sharding",s={unversionedId:"general/sharding",id:"general/sharding",title:"Sharding",description:"Sharding your bot with discordx.",source:"@site/docs/general/sharding.md",sourceDirName:"general",slug:"/general/sharding",permalink:"/docs/general/sharding",draft:!1,editUrl:"https://github.com/oceanroleplay/discord.ts/edit/main/docs/docs/general/sharding.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1657623941,formattedLastUpdatedAt:"Jul 12, 2022",frontMatter:{},sidebar:"docSidebar",previous:{title:"MetadataStorage",permalink:"/docs/general/metadatastorage"},next:{title:"IOC support via DI",permalink:"/docs/general/dependencyInjection"}},l={},d=[{value:"Purpose",id:"purpose",level:2},{value:"Before you start",id:"before-you-start",level:2},{value:"What if my bot is in less than 2,000 servers?",id:"what-if-my-bot-is-in-less-than-2000-servers",level:3},{value:"What if my bot does not compile with tsc?",id:"what-if-my-bot-does-not-compile-with-tsc",level:3},{value:"I&#39;m Ready",id:"im-ready",level:2},{value:"Running",id:"running",level:2},{value:"That&#39;s it",id:"thats-it",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sharding"},"Sharding"),(0,a.kt)("p",null,"Sharding your bot with ",(0,a.kt)("inlineCode",{parentName:"p"},"discordx"),"."),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"Sharding is the process of splitting your main discord process into multiple shards to help with the load when your bot is in 2,500+ guilds. discord.",(0,a.kt)("strong",{parentName:"p"},"js")," has recommended to start making updates for sharding at around 2,000 guilds."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://discordjs.guide/sharding/#when-to-shard"},"Discord.js Sharding Guide")),(0,a.kt)("p",null,"When you hit that milestone and need to begin the sharding process this guide will serve as a starting document to help you get set up."),(0,a.kt)("h2",{id:"before-you-start"},"Before you start"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 Get your bot into 2,000 guilds"),(0,a.kt)("li",{parentName:"ul"},"\u2705 Ensure your bot compiles down to javascript with ",(0,a.kt)("inlineCode",{parentName:"li"},"tsc"))),(0,a.kt)("h3",{id:"what-if-my-bot-is-in-less-than-2000-servers"},"What if my bot is in less than 2,000 servers?"),(0,a.kt)("p",null,"discord.",(0,a.kt)("strong",{parentName:"p"},"js")," has stated"),(0,a.kt)("p",null,'"',(0,a.kt)("em",{parentName:"p"},"Sharding is only necessary at 2,500 guilds\u2014at that point, Discord will not allow your bot to login without sharding. With that in mind, you should consider this when your bot is around 2,000 guilds, which should be enough time to get this working. Contrary to popular belief, sharding itself is very simple. It can be complex depending on your bot's needs, however. If your bot is in a total of 2,000 or more servers, then please continue with this guide. Otherwise, it may be a good idea to wait until then."),'"'),(0,a.kt)("p",null,"However if you are curious you may continue to read this doc! But don't worry about sharding until 2,000 guilds. Focus on building a quality bot as sharding adds more complexity."),(0,a.kt)("h3",{id:"what-if-my-bot-does-not-compile-with-tsc"},"What if my bot does not compile with tsc?"),(0,a.kt)("p",null,"If your bot does not compile with ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc")," but runs with ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," you will ",(0,a.kt)("strong",{parentName:"p"},"not")," be able to shard with the discord.",(0,a.kt)("strong",{parentName:"p"},"js")," sharding managers."),(0,a.kt)("p",null,"I found success with using this ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "module": "ESNext",\n    "target": "ESNext",\n    "strict": true,\n    "noImplicitAny": true,\n    "sourceMap": true,\n    "emitDecoratorMetadata": true,\n    "experimentalDecorators": true,\n    "importHelpers": true,\n    "forceConsistentCasingInFileNames": true,\n    "moduleResolution": "Node",\n    "outDir": "./src/build"\n  },\n  "exclude": ["node_modules"],\n  "indent": [true, "spaces", 2]\n}\n')),(0,a.kt)("p",null,"If you are receiving errors that complain about imports. Try using the following import where the compiler complains about the import."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"- import fs from 'fs';\n+ import fs = require(\"fs\");\n")),(0,a.kt)("h2",{id:"im-ready"},"I'm Ready"),(0,a.kt)("p",null,"Did you really read the previous section? If not go back and read it."),(0,a.kt)("p",null,"Okay so now that you are ready let's talk about the set up."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"Bot\n\u251c\u2500\u2500\u2500environments/\n\u251c\u2500\u2500\u2500src/\n    \u251c\u2500\u2500\u2500app/\n        \u251c\u2500\u2500\u2500abstract/\n        \u251c\u2500\u2500\u2500commands/\n        \u251c\u2500\u2500\u2500const/\n        \u251c\u2500\u2500\u2500decorators/\n        \u251c\u2500\u2500\u2500guards/\n        \u251c\u2500\u2500\u2500handlers/\n        \u251c\u2500\u2500\u2500models/\n        \u251c\u2500\u2500\u2500services/\n+       \u251c\u2500\u2500\u2500entry.bot.ts\n+       \u2514\u2500\u2500\u2500shard.bot.ts\n\n")),(0,a.kt)("p",null,"I recommend renaming your main entry file where you call ",(0,a.kt)("inlineCode",{parentName:"p"},"client.login(TOKEN);")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"entry.bot.ts")," you can rename it to whatever you'd like just make sure you know that file is where the bot starts. Next you'll need to make a new ",(0,a.kt)("inlineCode",{parentName:"p"},"shard.bot.ts")," file. Again you can name it whatever as long as you know this file is where we will handle sharding."),(0,a.kt)("p",null,"You don't need to change anything in the ",(0,a.kt)("inlineCode",{parentName:"p"},"entry.bot.ts")," file. The magic will be in the ",(0,a.kt)("inlineCode",{parentName:"p"},"shard.bot.ts")," file."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Read the ",(0,a.kt)("a",{parentName:"p",href:"https://discordjs.guide/sharding/"},"discord.js sharding docs"),".")),(0,a.kt)("p",null,"You will make a new class in the ",(0,a.kt)("inlineCode",{parentName:"p"},"shard.bot.ts")," file. I have named my class ShardBot"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class ShardBot {}\n")),(0,a.kt)("p",null,"Inside this class I have defined a ",(0,a.kt)("inlineCode",{parentName:"p"},"static start")," method that gets called outside of the ShardBot class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class ShardBot {\n  static start(): void {}\n}\n\nShardBot.start();\n")),(0,a.kt)("p",null,"Now that we have the main bits of the Sharding class we need to use the discord.",(0,a.kt)("strong",{parentName:"p"},"js")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ShardingManager")," to spawn a shard."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { ShardingManager } from "discord.js";\nimport { environment } from "../../environments/environment";\n\nexport class ShardBot {\n  static start(): void {\n    const manager = new ShardingManager("./src/build/src/app/entry.bot.js", {\n      token: environment.DISCORD_TOKEN,\n    });\n\n    manager.on("shardCreate", (shard) => {\n      console.log(`Launched shard ${shard.id}`);\n    });\n\n    manager.spawn();\n  }\n}\nShardBot.start();\n')),(0,a.kt)("p",null,"The main thing to note here is that the path in the Instantiation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShardingManager")," has the path to the ",(0,a.kt)("inlineCode",{parentName:"p"},"entry.bot.js")," file and not the ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," file. The sharding manager requires the bot file to be a ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," file. This is why you need to ensure you can compile your bot with ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc"),"."),(0,a.kt)("p",null,"The path in there may also be different for your bot so make sure you have the correct path!"),(0,a.kt)("h2",{id:"running"},"Running"),(0,a.kt)("p",null,"Now that your bot compiles and has the shard file we can run the bot with the sharding class."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node build/app/shard.bot.js")),(0,a.kt)("p",null,"will start the shard here."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Make sure you provide the correct path to the shard file when running with node.")),(0,a.kt)("p",null,"Once it starts up you should see"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Launched shard 0\n")),(0,a.kt)("p",null,"in the console."),(0,a.kt)("h2",{id:"thats-it"},"That's it"),(0,a.kt)("p",null,"Congrats! Your bot is now using the sharding managers. You can still run the entry file instead of the shard file if you don't want to use sharding until it is needed."))}u.isMDXComponent=!0}}]);