"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={title:"Readme"},o=void 0,s={unversionedId:"packages/utilities/README",id:"packages/utilities/README",title:"Readme",description:'<a href="https://discord-ts.js.org/discord"',source:"@site/docs/packages/utilities/README.md",sourceDirName:"packages/utilities",slug:"/packages/utilities/",permalink:"/docs/packages/utilities/",draft:!1,editUrl:"https://github.com/oceanroleplay/discord.ts/edit/main/docs/docs/packages/utilities/README.md",tags:[],version:"current",frontMatter:{title:"Readme"},sidebar:"packagesSidebar",previous:{title:"Readme",permalink:"/docs/packages/socket.io/"}},l={},m=[{value:"Example",id:"example",level:2},{value:"Example",id:"example-1",level:2},{value:"Rate limit",id:"rate-limit",level:2},{value:"Example",id:"example-2",level:3},{value:"NotBot",id:"notbot",level:2},{value:"PermissionGuard",id:"permissionguard",level:2},{value:"Example",id:"example-3",level:3},{value:"EnumChoice",id:"enumchoice",level:2}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:""}),(0,r.kt)("div",null,(0,r.kt)("p",{align:"center"},(0,r.kt)("a",{href:"https://discord-ts.js.org",target:"_blank",rel:"nofollow"},(0,r.kt)("img",{src:"https://discord-ts.js.org/discord-ts.svg",width:"546"}))),(0,r.kt)("p",{align:"center"},(0,r.kt)("a",{href:"https://discord-ts.js.org/discord"},(0,r.kt)("img",{src:"https://img.shields.io/discord/874802018361950248?color=5865F2&logo=discord&logoColor=white",alt:"Discord server"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@discordx/utilities"},(0,r.kt)("img",{src:"https://img.shields.io/npm/v/@discordx/utilities.svg?maxAge=3600",alt:"NPM version"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@discordx/utilities"},(0,r.kt)("img",{src:"https://img.shields.io/npm/dt/@discordx/utilities.svg?maxAge=3600",alt:"NPM downloads"})),(0,r.kt)("a",{href:"https://github.com/oceanroleplay/discord.ts/actions"},(0,r.kt)("img",{src:"https://github.com/oceanroleplay/discord.ts/workflows/Build/badge.svg",alt:"Build status"})),(0,r.kt)("a",{href:"https://www.paypal.me/vijayxmeena"},(0,r.kt)("img",{src:"https://img.shields.io/badge/donate-paypal-F96854.svg",alt:"paypal"}))),(0,r.kt)("p",{align:"center"},(0,r.kt)("b",null," Create a discord bot with TypeScript and Decorators! "))),(0,r.kt)("h1",{id:"content"},"Content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#-introduction"},"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#-installation"},"Installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#-category"},"@Category")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#-description"},"@Description")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%EF%B8%8F-guards"},"guards"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rate-limit"},"Rate Limit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#notbot"},"NotBot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#permissionguard"},"PermissionGuard")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#-useful"},"Useful"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enumchoice"},"EnumChoice"))))),(0,r.kt)("h1",{id:"-introduction"},"\ud83d\udcd6 Introduction"),(0,r.kt)("p",null,"Add useful features to discordx, If a feature isn't available, request it."),(0,r.kt)("h1",{id:"-installation"},"\ud83d\udcbb Installation"),(0,r.kt)("p",null,"Version 16.6.0 or newer of Node.js is required"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @discordx/utilities\nyarn add @discordx/utilities\n")),(0,r.kt)("h1",{id:"-category"},"\ud83d\udcdf @Category"),(0,r.kt)("p",null,"Create group of commands"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@Discord()\n@Category("Admin Commands")\nclass Example {\n  // commands\n\n  @Slash()\n  myCommand(interaction: CommandInteraction) {\n    //....\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// Access data from anywhere\nMetadataStorage.instance.applicationCommands.forEach(\n  (cmd: DApplicationCommand & ICategory) => {\n    if (cmd.category === "Admin Commands") {\n      // access\n    }\n  }\n);\n')),(0,r.kt)("h1",{id:"-description"},"\ud83d\udcdf @Description"),(0,r.kt)("p",null,"The description property can be set using this decorator"),(0,r.kt)("h2",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@Discord()\nclass Example {\n  @Slash("hello")\n  @Description("say hello to bot")\n  handle(interaction: CommandInteraction) {\n    //....\n  }\n}\n')),(0,r.kt)("p",null,"Is equivalent to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@Discord()\nclass Example {\n  @Slash("hello", { description: "say hello to bot" })\n  handle(interaction: CommandInteraction) {\n    //....\n  }\n}\n')),(0,r.kt)("h1",{id:"\ufe0f-guards"},"\u2694\ufe0f guards"),(0,r.kt)("p",null,"Useful guards created by the Discord.ts team to use in your bot!"),(0,r.kt)("h2",{id:"rate-limit"},"Rate limit"),(0,r.kt)("p",null,"This guard will rate limit a user for a specified amount of time. When set, a user can only call a command x amount of\ntimes after that, a cooldown is applied disallowing any more calls to the command until the cooldown is over."),(0,r.kt)("p",null,"This cooldown starts from the moment the user sends the last message."),(0,r.kt)("p",null,"If your cooldown is 10 seconds, and you allow 3 calls of your command, the user will have 10 seconds to call it 3 times,\nwith the timer resetting after each call."),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@Discord()\nclass RateLimitExample {\n  /**\n   * 1 command every 30 seconds with default message\n   */\n  @Slash("rate_limit_1")\n  @Guard(RateLimit(TIME_UNIT.seconds, 30))\n  rateLimit1(interaction: CommandInteraction): void {\n    interaction.reply("It worked!");\n  }\n\n  /**\n   * Allow 3 command before rate limit of 30 seconds (from last message)\n   */\n  @Slash("rate_limit_3")\n  @Guard(\n    RateLimit(TIME_UNIT.seconds, 30, {\n      message: "Please wait `30` seconds!",\n      rateValue: 3,\n    })\n  )\n  rateLimit3(interaction: CommandInteraction): void {\n    interaction.reply("It worked!");\n  }\n\n  /**\n   * Rate limit simple command\n   *\n   * @param message\n   */\n  @SimpleCommand("rateLimit")\n  @Guard(RateLimit(TIME_UNIT.seconds, 10))\n  private async rateLimitSimpleCommand({\n    message,\n  }: SimpleCommandMessage): Promise<void> {\n    message.reply("It worked!");\n  }\n}\n')),(0,r.kt)("h2",{id:"notbot"},"NotBot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@SimpleCommand("hello")\n@Guard(NotBot)\nhello({ message }: SimpleCommandMessage): void {\n  message.reply("It worked!");\n}\n')),(0,r.kt)("p",null,"This will work on both Slash and Simple commands"),(0,r.kt)("h2",{id:"permissionguard"},"PermissionGuard"),(0,r.kt)("p",null,"When you are using global commands, but still wish to restrict commands to permissions from roles, then you can use this\nguard to easily supply an array of Permissions that a user must have in order to execute the command."),(0,r.kt)("p",null,"The guard can take an array of permissions or an async resolver to the permission array"),(0,r.kt)("h3",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@Discord()\nexport class PermissionGuards {\n  /**\n   * Only allow users with the role "BAN_MEMBERS"\n   *\n   * @param interaction\n   */\n  @Slash("permission_ban_members")\n  @Guard(PermissionGuard(["BAN_MEMBERS"]))\n  banMembers1(interaction: CommandInteraction): void {\n    interaction.reply("It worked!");\n  }\n\n  /**\n   * Only allow users with the role "BAN_MEMBERS" with a custom message\n   *\n   * @param interaction\n   */\n  @Slash("permission_ban_members")\n  @Guard(\n    PermissionGuard(["BAN_MEMBERS"], {\n      content: "You do not have the role `BAN_MEMBERS`",\n    })\n  )\n  banMembers2(interaction: CommandInteraction): void {\n    interaction.reply("It worked!");\n  }\n\n  /**\n   * get the permissions from an async resolver\n   *\n   * @param interaction\n   */\n  @Slash("permission_ban_members")\n  @Guard(\n    PermissionGuard(PermissionGuards.resolvePermission, {\n      content: "You do not have the role `BAN_MEMBERS`",\n    })\n  )\n  banMembers3(interaction: CommandInteraction): void {\n    interaction.reply("It worked!");\n  }\n\n  private static resolvePermission(\n    interaction: PermissionHandler\n  ): Promise<PermissionString[]> {\n    if (interaction instanceof CommandInteraction) {\n      // if guild id is 123\n      if (interaction.guildId === "123") {\n        return Promise.resolve(["ADD_REACTIONS"]);\n      }\n    }\n    return Promise.resolve(["BAN_MEMBERS"]);\n  }\n}\n')),(0,r.kt)("h1",{id:"-useful"},"\ud83e\uddf0 Useful"),(0,r.kt)("p",null,"Here are some helpful functions for accelerating your development."),(0,r.kt)("h2",{id:"enumchoice"},"EnumChoice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'enum RPS {\n  Rock = "0",\n  Paper = "1",\n  scissors = "2",\n}\n\n@SlashChoice(...EnumChoice(RPS))\n')),(0,r.kt)("h1",{id:"\ufe0f-need-help"},"\u260e\ufe0f Need help?"),(0,r.kt)("p",null,"Ask in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://discord-ts.js.org/discord"},"discord server"))," or open\na ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/oceanroleplay/discord.ts/issues"},"issue"))),(0,r.kt)("h1",{id:"thank-you"},"Thank you"),(0,r.kt)("p",null,"Show your support for ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/discordx"},"discordx")," by giving us a star\non ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts"},"github"),"."))}d.isMDXComponent=!0}}]);