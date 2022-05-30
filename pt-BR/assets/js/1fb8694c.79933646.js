"use strict";(self.webpackChunkthothom_com=self.webpackChunkthothom_com||[]).push([[526],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=o,f=d["".concat(l,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1006:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],p={sidebar_position:8},l="Save Operators",s={unversionedId:"overview/save-operators",id:"overview/save-operators",isDocsHomePage:!1,title:"Save Operators",description:"Save operators are used standardize how complex queries are made, so developers only have to learn how to do an specific thing one time.",source:"@site/docs/overview/save-operators.md",sourceDirName:"overview",slug:"/overview/save-operators",permalink:"/pt-BR/docs/overview/save-operators",editUrl:"https://github.com/thothom/thothom.com/edit/master/docs/overview/save-operators.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Find Operators",permalink:"/pt-BR/docs/overview/find-operators"},next:{title:"Migrations",permalink:"/pt-BR/docs/overview/migrations"}},u=[{value:"Append",id:"append",children:[],level:2},{value:"IfNotExists",id:"ifnotexists",children:[],level:2},{value:"Max",id:"max",children:[],level:2},{value:"Min",id:"min",children:[],level:2},{value:"Minus",id:"minus",children:[],level:2},{value:"Plus",id:"plus",children:[],level:2},{value:"Pop",id:"pop",children:[],level:2},{value:"Remove",id:"remove",children:[],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"save-operators"},"Save Operators"),(0,r.kt)("p",null,"Save operators are used standardize how complex queries are made, so developers only have to learn how to do an specific thing one time."),(0,r.kt)("p",null,"The support of it's operators depends ",(0,r.kt)("strong",{parentName:"p"},"of the plugins"),", so you ",(0,r.kt)("strong",{parentName:"p"},"must")," see their docs to confirm ",(0,r.kt)("strong",{parentName:"p"},"if")," you can use this operators, and ",(0,r.kt)("strong",{parentName:"p"},"how exactly")," they work. Some of then will only accept certain types of values, ou values that are referring to something specific, like indexes in an array."),(0,r.kt)("h2",{id:"append"},"Append"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Append")," operator is used to add items to the end of an list."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Append } from "@thothom/core";\n\nimport { exampleRepository } from "./example.repository";\n\nconst tags = ["tag1", "tag2"];\n\nawait exampleRepository.update(\n  {\n    id: 1,\n  },\n  {\n    roles: Append("admin", "moderator"),\n    tags: Append(...tags),\n  }\n);\n\n// Before\n{\n  roles: ["foo"],\n  tags: ["bar"]\n}\n\n// After\n{\n  roles: ["foo", "admin", "moderator"],\n  tags: ["bar", "tag1", "tag2"]\n}\n')),(0,r.kt)("h2",{id:"ifnotexists"},"IfNotExists"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IfNotExists")," operator is used to create a value only if the column doesn't exists before."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { IfNotExists } from "@thothom/core";\n\nimport { exampleRepository } from "./example.repository";\n\nawait exampleRepository.upsert(\n  {\n    id: 1,\n  },\n  {\n    createdAt: IfNotExists("01/01/2020"),\n  }\n);\n')),(0,r.kt)("h2",{id:"max"},"Max"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Max")," operator is used to update the value of the column ONLY IF it's lower than the value specified."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("p",null,"If the database value is ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),", and you use ",(0,r.kt)("inlineCode",{parentName:"p"},"Max(7)"),", it will update the database value to ",(0,r.kt)("inlineCode",{parentName:"p"},"7"),", but if the database value is ",(0,r.kt)("inlineCode",{parentName:"p"},"10"),", and you use ",(0,r.kt)("inlineCode",{parentName:"p"},"Max(7)"),", the database value will continue ",(0,r.kt)("inlineCode",{parentName:"p"},"10"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Max } from "@thothom/core";\n\nimport { exampleRepository } from "./example.repository";\n\nawait exampleRepository.update(\n  {\n    id: 1,\n  },\n  {\n    count: Max(5),\n  }\n);\n')),(0,r.kt)("h2",{id:"min"},"Min"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Min")," operator is used to update the value of the column ONLY IF it's greater than the value specified."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("p",null,"If the database value is ",(0,r.kt)("inlineCode",{parentName:"p"},"7"),", and you use ",(0,r.kt)("inlineCode",{parentName:"p"},"Min(5)"),", it will update the database value to ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),", but if the database value is ",(0,r.kt)("inlineCode",{parentName:"p"},"7"),", and you use ",(0,r.kt)("inlineCode",{parentName:"p"},"Min(10)"),", the database value will continue ",(0,r.kt)("inlineCode",{parentName:"p"},"7"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Min } from "@thothom/core";\n\nimport { exampleRepository } from "./example.repository";\n\nawait exampleRepository.update(\n  {\n    id: 1,\n  },\n  {\n    count: Min(5),\n  }\n);\n')),(0,r.kt)("h2",{id:"minus"},"Minus"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Minus")," operator update the value of a column as itself ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," the value passed as param"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("p",null,"If the database value is ",(0,r.kt)("inlineCode",{parentName:"p"},"10"),", and you use ",(0,r.kt)("inlineCode",{parentName:"p"},"Minus(5)"),", the database value will be updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Minus } from "@thothom/core";\n\nimport { exampleRepository } from "./example.repository";\n\nawait exampleRepository.update(\n  {\n    id: 1,\n  },\n  {\n    count: Minus(5),\n  }\n);\n')),(0,r.kt)("h2",{id:"plus"},"Plus"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Plus")," operator update the value of a column as itself ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," the value passed as param"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("p",null,"If the database value is ",(0,r.kt)("inlineCode",{parentName:"p"},"10"),", and you use ",(0,r.kt)("inlineCode",{parentName:"p"},"Plus(5)"),", the database value will be updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"15"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Plus } from "@thothom/core";\n\nimport { exampleRepository } from "./example.repository";\n\nawait exampleRepository.update(\n  {\n    id: 1,\n  },\n  {\n    count: Plus(5),\n  }\n);\n')),(0,r.kt)("h2",{id:"pop"},"Pop"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Pop")," operator is used to remove items from a list."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Pop } from "@thothom/core";\n\nimport { exampleRepository } from "./example.repository";\n\nawait exampleRepository.update(\n  {\n    id: 1,\n  },\n  {\n    roles: Pop("admin", "moderator"),\n  }\n);\n')),(0,r.kt)("h2",{id:"remove"},"Remove"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Remove")," operator is used to remove a column from a record."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Remove } from "@thothom/core";\n\nimport { exampleRepository } from "./example.repository";\n\nawait exampleRepository.update(\n  {\n    id: 1,\n  },\n  {\n    deletedAt: Remove(),\n  }\n);\n')))}d.isMDXComponent=!0}}]);