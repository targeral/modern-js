"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[832],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var r=n(18249),o=(n(52983),n(44993));const a={toc:[{value:"Boolean \u7c7b\u578b",id:"boolean-\u7c7b\u578b",level:3},{value:"Object \u7c7b\u578b",id:"object-\u7c7b\u578b",level:3},{value:"Function \u7c7b\u578b",id:"function-\u7c7b\u578b",level:3}]};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"true | Object | Function | undefined")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"\u914d\u7f6e ",(0,o.kt)("a",{parentName:"p",href:"https://pugjs.org/"},"Pug")," \u6a21\u677f\u5f15\u64ce\u3002"),(0,o.kt)("h3",{id:"boolean-\u7c7b\u578b"},"Boolean \u7c7b\u578b"),(0,o.kt)("p",null,"Builder \u9ed8\u8ba4\u4e0d\u542f\u7528 Pug \u6a21\u677f\u5f15\u64ce\uff0c\u4f60\u53ef\u4ee5\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.pug")," \u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," \u6765\u542f\u7528\u5b83\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  tools: {\n    pug: true,\n  },\n};\n")),(0,o.kt)("p",null,"\u542f\u7528\u540e\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"html.template")," \u4e2d\u6307\u5b9a\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"index.pug")," \u4f5c\u4e3a\u6a21\u677f\u6587\u4ef6\u3002"),(0,o.kt)("h3",{id:"object-\u7c7b\u578b"},"Object \u7c7b\u578b"),(0,o.kt)("p",null,"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.terser")," \u7684\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b\u65f6\uff0c\u53ef\u4ee5\u914d\u7f6e Pug \u6a21\u677f\u5f15\u64ce\u7684\u9009\u9879\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  tools: {\n    pug: {\n      doctype: 'xml',\n    },\n  },\n};\n")),(0,o.kt)("p",null,"\u8be6\u7ec6\u53c2\u6570\u8bf7\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://pugjs.org/api/reference.html#options"},"Pug API Reference"),"\u3002"),(0,o.kt)("h3",{id:"function-\u7c7b\u578b"},"Function \u7c7b\u578b"),(0,o.kt)("p",null,"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.pug")," \u914d\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Function")," \u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u503c\u4f5c\u4e3a\u6700\u7ec8\u7ed3\u679c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  tools: {\n    pug(config) {\n      config.doctype = 'xml';\n    },\n  },\n};\n")))}p.isMDXComponent=!0;const l={title:"tools.pug",sidebar_label:"pug"},i=void 0,u={unversionedId:"configure/app/tools/pug",id:"configure/app/tools/pug",title:"tools.pug",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 tools.pug\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/tools/pug.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/pug",permalink:"/v2/docs/configure/app/tools/pug",draft:!1,tags:[],version:"current",frontMatter:{title:"tools.pug",sidebar_label:"pug"},sidebar:"configsAppSidebar",previous:{title:"postcss",permalink:"/v2/docs/configure/app/tools/postcss"},next:{title:"sass",permalink:"/v2/docs/configure/app/tools/sass"}},c={},s=[],d={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-tools.html#tools-pug"},"tools.pug"),"\u3002")),(0,o.kt)(p,{mdxType:"Main"}))}m.isMDXComponent=!0}}]);