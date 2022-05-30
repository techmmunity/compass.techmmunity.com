"use strict";(self.webpackChunkthothom_com=self.webpackChunkthothom_com||[]).push([[233],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),k=o,u=s["".concat(c,".").concat(k)]||s[k]||d[k]||i;return n?a.createElement(u,r(r({ref:t},m),{},{components:n})):a.createElement(u,r({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4427:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={sidebar_position:4},c="Connections",p={unversionedId:"overview/connections",id:"overview/connections",isDocsHomePage:!1,title:"Connections",description:"Connections are the classes used to create the database connection, and handle all the things related to it.",source:"@site/docs/overview/connections.md",sourceDirName:"overview",slug:"/overview/connections",permalink:"/docs/overview/connections",editUrl:"https://github.com/thothom/thothom.com/edit/master/docs/overview/connections.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/overview/plugins"},next:{title:"Decorators",permalink:"/docs/overview/decorators"}},m=[{value:"Options",id:"options",children:[{value:"<code>name</code> (optional)",id:"name-optional",children:[],level:3},{value:"<code>entities</code> (optional)",id:"entities-optional",children:[],level:3},{value:"<code>entitiesDir</code> (optional)",id:"entitiesdir-optional",children:[],level:3},{value:"<code>logging</code> (optional)",id:"logging-optional",children:[],level:3},{value:"<code>timeout</code> (optional)",id:"timeout-optional",children:[],level:3},{value:"<code>namingStrategy</code> (optional)",id:"namingstrategy-optional",children:[],level:3},{value:"<code>prefix</code> and <code>suffix</code> (optional)",id:"prefix-and-suffix-optional",children:[],level:3},{value:"<code>timeZone</code> (optional)",id:"timezone-optional",children:[],level:3},{value:"<code>databaseConfig</code> (required)",id:"databaseconfig-required",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"<code>load</code>",id:"load",children:[],level:3},{value:"<code>connect</code>",id:"connect",children:[],level:3},{value:"<code>getRepository</code>",id:"getrepository",children:[],level:3}],level:2}],d={toc:m};function s(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connections"},"Connections"),(0,i.kt)("p",null,"Connections are the classes used to create the ",(0,i.kt)("strong",{parentName:"p"},"database connection"),", and handle all the things related to it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"All")," of the connections are managed by the plugins, and in the most of the cases, it will be one of the only things that you should import from a plugin."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"Thoth")," doesn't have a connection class to be imported by the user!"),(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Connection")," will ",(0,i.kt)("strong",{parentName:"p"},"ALWAYS")," be exported by the plugin!"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All the plugins will always follow the naming pattern of ",(0,i.kt)("strong",{parentName:"p"},"Connection"),"."))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Thoth")," provides some basic config for the connections, that are present and can be used by any plugin."),(0,i.kt)("p",null,"Example where to use it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// database.connection.ts\n\nimport { Connection } from "example-thothom-plugin";\n\nexport const connect = async () => {\n  const connection = await new Connection({\n    // <- HERE this are the connection options\n  }).load();\n\n  await connection.connect();\n};\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The options are ",(0,i.kt)("strong",{parentName:"p"},"optional"),". You can (and we recommend) that you use an ",(0,i.kt)("inlineCode",{parentName:"p"},"thothom.config.js")," file."))),(0,i.kt)("h3",{id:"name-optional"},(0,i.kt)("inlineCode",{parentName:"h3"},"name")," (optional)"),(0,i.kt)("p",null,"This is the connection name. It's used to identify your connection, so ",(0,i.kt)("strong",{parentName:"p"},"each connection MUST have an unique name"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// database.connection.ts\n\nimport { Connection } from "example-thothom-plugin";\n\nexport const connect = async () => {\n  const connection = await new Connection({\n    name: "Default",\n  }).load();\n\n  await connection.connect();\n};\n')),(0,i.kt)("h3",{id:"entities-optional"},(0,i.kt)("inlineCode",{parentName:"h3"},"entities")," (optional)"),(0,i.kt)("p",null,"This field specifies your entities, and you must put ",(0,i.kt)("strong",{parentName:"p"},"only your main entities here"),". The sub-entities are recognized automatically, so you don't have to specify them here."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// database.connection.ts\n\nimport { Connection } from "example-thothom-plugin";\n\nimport { ExampleEntity } from "./example.entity";\n\nexport const connect = async () => {\n  const connection = await new Connection({\n    entities: [ExampleEntity], // All your entities should be here\n  }).load();\n\n  await connection.connect();\n};\n')),(0,i.kt)("h3",{id:"entitiesdir-optional"},(0,i.kt)("inlineCode",{parentName:"h3"},"entitiesDir")," (optional)"),(0,i.kt)("p",null,"If you don't want to import all your entities, you can use this option to specify the entities paths, and they will be automatically loaded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// database.connection.ts\n\nimport { Connection } from "example-thothom-plugin";\n\nexport const connect = async () => {\n  const connection = await new Connection({\n    entitiesDir: ["entities/**/dir/*.ts"], // All your entities paths should be here\n  }).load();\n\n  await connection.connect();\n};\n')),(0,i.kt)("h3",{id:"logging-optional"},(0,i.kt)("inlineCode",{parentName:"h3"},"logging")," (optional)"),(0,i.kt)("p",null,"This options specifies the logging level of the connection."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,i.kt)("th",{parentName:"tr",align:null},"value"),(0,i.kt)("th",{parentName:"tr",align:"center"},"error"),(0,i.kt)("th",{parentName:"tr",align:"center"},"warn"),(0,i.kt)("th",{parentName:"tr",align:"center"},"log"),(0,i.kt)("th",{parentName:"tr",align:"center"},"info"),(0,i.kt)("th",{parentName:"tr",align:"center"},"debug"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"MINIMUM"')),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"ALL"')),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"ALL_INTERNAL"')),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'["ERROR"]')),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'["WARN"]')),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'["LOG"]')),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'["INFO"]')),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'["DEBUG"]')),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"X")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"level"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"error")),(0,i.kt)("td",{parentName:"tr",align:null},"Database errors, invalid parameters, general errors")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"warn")),(0,i.kt)("td",{parentName:"tr",align:null},"Alerts that ",(0,i.kt)("em",{parentName:"td"},"may")," be a error or something to worry about")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"info")),(0,i.kt)("td",{parentName:"tr",align:null},"General info about ThothOM and it's process")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"log")),(0,i.kt)("td",{parentName:"tr",align:null},"Info about the data used to connect with the database, like the operations")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"debug")),(0,i.kt)("td",{parentName:"tr",align:null},"A ",(0,i.kt)("strong",{parentName:"td"},"LOT")," of logs, about ",(0,i.kt)("strong",{parentName:"td"},"EVERYTHING")," that ThothOM does. Do not use it.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// database.connection.ts\n\nimport { Connection } from "example-thothom-plugin";\n\nexport const connect = async () => {\n  const connection = await new Connection({\n    logging: "ALL",\n  }).load();\n\n  await connection.connect();\n};\n')),(0,i.kt)("h3",{id:"timeout-optional"},(0,i.kt)("inlineCode",{parentName:"h3"},"timeout")," (optional)"),(0,i.kt)("p",null,"The time ",(0,i.kt)("strong",{parentName:"p"},"in seconds")," that a query has before it be considered a fail."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// database.connection.ts\n\nimport { Connection } from "example-thothom-plugin";\n\nexport const connect = async () => {\n  const connection = await new Connection({\n    timeout: 10,\n  }).load();\n\n  await connection.connect();\n};\n')),(0,i.kt)("h3",{id:"namingstrategy-optional"},(0,i.kt)("inlineCode",{parentName:"h3"},"namingStrategy")," (optional)"),(0,i.kt)("p",null,"This is were ",(0,i.kt)("em",{parentName:"p"},"Thoth")," starts to bright! This config will format every name of your entities, columns and in the future, indexes and more!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Accepted values")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"camelCase"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"PascalCase"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"snake_case"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"kebab-case"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"UPPER_CASE"')),(0,i.kt)("li",{parentName:"ul"},"And a custom function, like ",(0,i.kt)("inlineCode",{parentName:"li"},"(name: string) => string"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// database.connection.ts\n\nimport { Connection } from "example-thothom-plugin";\n\nexport const connect = async () => {\n  const connection = await new Connection({\n    namingStrategy: {\n      entity: "snake_case",\n      column: "UPPER_CASE",\n    },\n  }).load();\n\n  await connection.connect();\n};\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// example.entity.ts\n\nimport { Entity, PrimaryColumn, Column } from "@thothom/core";\n\n@Entity()\nexport class ExampleEntity {\n  @PrimaryColumn()\n  public id: string;\n\n  @Column()\n  public fooBar: string;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"# In the database will be:\nTABLE: example_entity\nCOLUMNS: ID, FOO_BAR\n")),(0,i.kt)("h3",{id:"prefix-and-suffix-optional"},(0,i.kt)("inlineCode",{parentName:"h3"},"prefix")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"suffix")," (optional)"),(0,i.kt)("p",null,"Prefix / Suffix to be added / removed from entities, columns, etc, names."),(0,i.kt)("p",null,"Works ",(0,i.kt)("strong",{parentName:"p"},"FROM code TO database"),". Ex: An class ",(0,i.kt)("inlineCode",{parentName:"p"},"ExampleClass")," with prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"Prefix")," will be ",(0,i.kt)("inlineCode",{parentName:"p"},"PrefixExampleClass")," in the database."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Execution order:")," Remove -> Add"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The prefixes ",(0,i.kt)("strong",{parentName:"p"},"are")," affected by the ",(0,i.kt)("em",{parentName:"p"},"namingStrategy")," config! They are applied ",(0,i.kt)("strong",{parentName:"p"},"BEFORE")," the ",(0,i.kt)("em",{parentName:"p"},"namingStrategy")," conversion, so be careful with which naming strategy you use in this config!"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// database.connection.ts\n\nimport { Connection } from "example-thothom-plugin";\n\nexport const connect = async () => {\n  const connection = await new Connection({\n    prefix: {\n      entity: {\n        add: "Foo",\n      },\n      column: {\n        add: "Bar",\n      },\n    },\n    suffix: {\n      entity: {\n        remove: "Entity",\n      },\n      column: {\n        remove: "Column",\n      },\n    },\n  }).load();\n\n  await connection.connect();\n};\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// example.entity.ts\n\nimport { Entity, PrimaryColumn, Column } from "@thothom/core";\n\n@Entity()\nexport class ExampleEntity {\n  @PrimaryColumn()\n  public id: string;\n\n  @Column()\n  public exampleColumn: string;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"# In the database will be:\nTABLE: foo_example\nCOLUMNS: ID, BAR_EXAMPLE\n")),(0,i.kt)("h3",{id:"timezone-optional"},(0,i.kt)("inlineCode",{parentName:"h3"},"timeZone")," (optional)"),(0,i.kt)("p",null,"Time Zone used to format the dates before be saved in the database, and for the auto-generated columns."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"List with all time zones available"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DEFAULT:")," ",(0,i.kt)("inlineCode",{parentName:"p"},'"UTC"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// database.connection.ts\n\nimport { Connection } from "example-thothom-plugin";\n\nexport const connect = async () => {\n  const connection = await new Connection({\n    timeZone: "UTC",\n  }).load();\n\n  await connection.connect();\n};\n')),(0,i.kt)("h3",{id:"databaseconfig-required"},(0,i.kt)("inlineCode",{parentName:"h3"},"databaseConfig")," (required)"),(0,i.kt)("p",null,"Config used by the plugins to connect to the database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// database.connection.ts\n\nimport { Connection } from "example-thothom-plugin";\n\nexport const connect = async () => {\n  const connection = await new Connection({\n    databaseConfig: {\n      // ...Who knows?\n    },\n  }).load();\n\n  await connection.connect();\n};\n')),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("p",null,"The connection has some very important methods that you will use to develop your app."),(0,i.kt)("h3",{id:"load"},(0,i.kt)("inlineCode",{parentName:"h3"},"load")),(0,i.kt)("p",null,"This method loads all your entities information, so the plugin can work properly."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"load")," is an ",(0,i.kt)("strong",{parentName:"p"},"async")," method!"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// database.connection.ts\n\nimport { Connection } from "example-thothom-plugin";\n\nexport const connect = async () => {\n  const connection = await new Connection().load(); // <- Here!!!\n\n  await connection.connect();\n};\n')),(0,i.kt)("h3",{id:"connect"},(0,i.kt)("inlineCode",{parentName:"h3"},"connect")),(0,i.kt)("p",null,"This is the method that will truly connect with the database."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"connect")," must be called ",(0,i.kt)("strong",{parentName:"p"},"AFTER")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"load")," method!"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// database.connection.ts\n\nimport { Connection } from "example-thothom-plugin";\n\nexport const connect = async () => {\n  const connection = await new Connection().load();\n\n  await connection.connect(); // <- Here!!!\n};\n')),(0,i.kt)("h3",{id:"getrepository"},(0,i.kt)("inlineCode",{parentName:"h3"},"getRepository")),(0,i.kt)("p",null,"This method generates a new ",(0,i.kt)("a",{parentName:"p",href:"./repositories"},"repository")," to your entity."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"getRepository")," must be called ",(0,i.kt)("strong",{parentName:"p"},"AFTER")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," method!"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// database.connection.ts\n\nimport { Connection } from "example-thothom-plugin";\n\nimport { ExampleEntity } from "./example.entity";\n\nexport const connect = async () => {\n  const connection = await new Connection().load();\n\n  await connection.connect();\n\n  connection.getRepository<ExampleEntity>(ExampleEntity); // <- Here!!!\n};\n')))}s.isMDXComponent=!0}}]);