"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6885],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(n),f=i,m=s["".concat(l,".").concat(f)]||s[f]||c[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},56118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var r=n(18249),i=(n(52983),n(44993));const a={sidebar_position:3},o="addInputAfter",p={unversionedId:"guides/topic-detail/generator/plugin/api/input/addInputAfter",id:"guides/topic-detail/generator/plugin/api/input/addInputAfter",title:"addInputAfter",description:"Add input question after default input.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/generator/plugin/api/input/addInputAfter.md",sourceDirName:"guides/topic-detail/generator/plugin/api/input",slug:"/guides/topic-detail/generator/plugin/api/input/addInputAfter",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/input/addInputAfter",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"addInputBefore",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/input/addInputBefore"},next:{title:"setInput",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/input/setInput"}},l={},d=[{value:"key",id:"key",level:2},{value:"input",id:"input",level:2},{value:"Example",id:"example",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"addinputafter"},"addInputAfter"),(0,i.kt)("p",null,"Add input question after default input."),(0,i.kt)("p",null,"The method is available directly on the context."),(0,i.kt)("p",null,"Its type is defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IPluginContext {\n  addInputAfter: (key: string, input: Schema) => void;\n  ...\n}\n")),(0,i.kt)("h2",{id:"key"},"key"),(0,i.kt)("p",null,"Modern.js the problem keyword of the configuration of the engineering solution, the specific configuration viewable ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/config/common"},"Generator Configuration"),"."),(0,i.kt)("h2",{id:"input"},"input"),(0,i.kt)("p",null,"Questions that need to be added, specific type definition viewable ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/plugin/api/input/type"},"Customize input related type definition"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Add input after package management tool:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"context.addInputAfter('packageManager', {\n  type: 'object',\n  properties: {\n    language: {\n      type: 'string',\n      title: 'Develop Language',\n      enum: [\n        { label: 'TS', value: 'ts' },\n        { label: 'ES6+', value: 'js' },\n      ],\n    },\n  },\n})\n")),(0,i.kt)("admonition",{title:"Notes",type:"info"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"The key of the added question cannot be duplicated with the key of the question of the item type itself provided by the Modern.js.")),(0,i.kt)("ol",{parentName:"admonition",start:2},(0,i.kt)("li",{parentName:"ol"},"The priority of adding the problem ",(0,i.kt)("inlineCode",{parentName:"li"},"addInputAfter")," is higher than ",(0,i.kt)("inlineCode",{parentName:"li"},"addInputBefore"),". When adding After problem to one ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," and Before problem to the next key at the same time, After problem will be before Before.")),(0,i.kt)("ol",{parentName:"admonition",start:3},(0,i.kt)("li",{parentName:"ol"},"When multiple questions need to be added before or after the same ",(0,i.kt)("inlineCode",{parentName:"li"},"key"),", the method can be called multiple times, and the order of questions will be permutated in the order in which they are called."))))}c.isMDXComponent=!0}}]);