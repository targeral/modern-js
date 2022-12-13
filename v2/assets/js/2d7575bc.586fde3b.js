"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5749],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(18249),o=(n(52983),n(44993));const a={toc:[{value:"Object \u7c7b\u578b",id:"object-\u7c7b\u578b",level:3},{value:"Function \u7c7b\u578b",id:"function-\u7c7b\u578b",level:3}]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Object | Function")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"))),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.styleLoader")," \u53ef\u4ee5\u8bbe\u7f6e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/style-loader"},"style-loader")," \u7684\u914d\u7f6e\u9879\u3002"),(0,o.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0cBuilder \u9ed8\u8ba4\u4e0d\u4f1a\u5f00\u542f ",(0,o.kt)("inlineCode",{parentName:"p"},"style-loader"),"\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"output.disableCssExtract")," \u914d\u7f6e\u9879\u6765\u5f00\u542f\u5b83\u3002"),(0,o.kt)("h3",{id:"object-\u7c7b\u578b"},"Object \u7c7b\u578b"),(0,o.kt)("p",null,"\u5f53\u6b64\u503c\u4e3a Object \u7c7b\u578b\u65f6\uff0c\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 Object.assign \u5408\u5e76\u3002\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    styleLoader: {\n      insert: 'head',\n    },\n  },\n};\n")),(0,o.kt)("h3",{id:"function-\u7c7b\u578b"},"Function \u7c7b\u578b"),(0,o.kt)("p",null,"\u5f53\u6b64\u503c\u4e3a Function \u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u4f5c\u4e3a\u6700\u7ec8\u914d\u7f6e\u3002\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    styleLoader: config => {\n      config.insert = 'head';\n      return config;\n    },\n  },\n};\n")))}l.isMDXComponent=!0;const i={title:"tools.styleLoader",sidebar_label:"styleLoader"},s=void 0,p={unversionedId:"configure/app/tools/style-loader",id:"configure/app/tools/style-loader",title:"tools.styleLoader",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 tools.styleLoader\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/tools/style-loader.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/style-loader",permalink:"/v2/docs/configure/app/tools/style-loader",draft:!1,tags:[],version:"current",frontMatter:{title:"tools.styleLoader",sidebar_label:"styleLoader"},sidebar:"configsAppSidebar",previous:{title:"sass",permalink:"/v2/docs/configure/app/tools/sass"},next:{title:"styledComponents",permalink:"/v2/docs/configure/app/tools/styled-components"}},c={},u=[],d={toc:u};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-tools.html#tools-styleloader"},"tools.styleLoader"),"\u3002")),(0,o.kt)(l,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);