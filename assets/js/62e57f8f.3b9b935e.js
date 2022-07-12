"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=o,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},l="@ModalComponent",i={unversionedId:"decorators/gui/modal-component",id:"decorators/gui/modal-component",title:"@ModalComponent",description:"add modal interaction handler for your bot using @ModalComponent decorator",source:"@site/docs/decorators/gui/modal-component.md",sourceDirName:"decorators/gui",slug:"/decorators/gui/modal-component",permalink:"/docs/decorators/gui/modal-component",draft:!1,editUrl:"https://github.com/oceanroleplay/discord.ts/edit/main/docs/docs/decorators/gui/modal-component.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1657623941,formattedLastUpdatedAt:"Jul 12, 2022",frontMatter:{},sidebar:"docSidebar",previous:{title:"@ContextMenu",permalink:"/docs/decorators/gui/context-menu"},next:{title:"@SelectMenuComponent",permalink:"/docs/decorators/gui/select-menu-component"}},d={},p=[{value:"Example",id:"example",level:2},{value:"Signature",id:"signature",level:2},{value:"Parameters",id:"parameters",level:2},{value:"custom_id",id:"custom_id",level:3},{value:"options",id:"options",level:3},{value:"<code>botIds</code>",id:"botids",level:4},{value:"<code>Guilds</code>",id:"guilds",level:4}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modalcomponent"},"@ModalComponent"),(0,o.kt)("p",null,"add modal interaction handler for your bot using ",(0,o.kt)("inlineCode",{parentName:"p"},"@ModalComponent")," decorator"),(0,o.kt)("p",null,"Here are some example screenshots:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1803).Z,width:"562",height:"523"})),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'@Discord()\nexport class Example {\n  @Slash("modal")\n  attachment(interaction: CommandInteraction): void {\n    // Create the modal\n    const modal = new Modal()\n      .setTitle("My Awesome Form")\n      .setCustomId("AwesomeForm");\n\n    // Create text input fields\n    const tvShowInputComponent = new TextInputComponent()\n      .setCustomId("tvField")\n      .setLabel("Favorite TV show")\n      .setStyle("SHORT");\n\n    const haikuInputComponent = new TextInputComponent()\n      .setCustomId("haikuField")\n      .setLabel("Write down your favorite haiku")\n      .setStyle("PARAGRAPH");\n\n    const row1 = new MessageActionRow<ModalActionRowComponent>().addComponents(\n      tvShowInputComponent\n    );\n\n    const row2 = new MessageActionRow<ModalActionRowComponent>().addComponents(\n      haikuInputComponent\n    );\n\n    // Add action rows to form\n    modal.addComponents(row1, row2);\n\n    // --- snip ---\n\n    // Present the modal to the user\n    interaction.showModal(modal);\n  }\n\n  @ModalComponent("AwesomeForm")\n  async handle(interaction: ModalSubmitInteraction): Promise<void> {\n    const [favTVShow, favHaiku] = ["tvField", "haikuField"].map((id) =>\n      interaction.fields.getTextInputValue(id)\n    );\n\n    await interaction.reply(\n      `Favorite TV Show: ${favTVShow}, Favorite haiku: ${favHaiku}`\n    );\n\n    return;\n  }\n}\n')),(0,o.kt)("h2",{id:"signature"},"Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@ModalComponent(custom_id: string | RegExp, options?: { guilds?: Snowflake[]; botIds?: string[] })\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"custom_id"},"custom_id"),(0,o.kt)("p",null,"A unique id for your button interaction to be handled under."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"string ","|"," RegExp"),(0,o.kt)("td",{parentName:"tr",align:null},"function name"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"As per discord latest announcement, ",(0,o.kt)("inlineCode",{parentName:"p"},"custom_ids")," being unique within a message. ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/interactions/message-components#custom-id"},"read here more"))),(0,o.kt)("h3",{id:"options"},"options"),(0,o.kt)("p",null,"Multiple options, check below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"object"),(0,o.kt)("td",{parentName:"tr",align:null},"undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("h4",{id:"botids"},(0,o.kt)("inlineCode",{parentName:"h4"},"botIds")),(0,o.kt)("p",null,"Array of bot ids, for which only the event will be executed."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"string","[ ]"),(0,o.kt)("td",{parentName:"tr",align:null},"[ ]")))),(0,o.kt)("h4",{id:"guilds"},(0,o.kt)("inlineCode",{parentName:"h4"},"Guilds")),(0,o.kt)("p",null,"The guilds where the command is created"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"string","[ ]"),(0,o.kt)("td",{parentName:"tr",align:null},"[ ]")))))}u.isMDXComponent=!0},1803:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/modal-example-a46fefe3565fad826da4d7b559ed1776.png"}}]);