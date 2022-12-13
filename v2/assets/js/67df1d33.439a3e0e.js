"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5049],{44993:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(52983);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25989:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(18249),a=(r(52983),r(44993));const o={sidebar_position:10},s="\u6d4b\u8bd5",i={unversionedId:"guides/advanced-features/testing",id:"guides/advanced-features/testing",title:"\u6d4b\u8bd5",description:"Modern.js \u9ed8\u8ba4\u7ee7\u627f\u4e86 Jest \u7684\u6d4b\u8bd5\u80fd\u529b\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/advanced-features/testing.md",sourceDirName:"guides/advanced-features",slug:"/guides/advanced-features/testing",permalink:"/v2/docs/guides/advanced-features/testing",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"guidesSidebar",previous:{title:"ESLint \u89c4\u5219\u96c6",permalink:"/v2/docs/guides/advanced-features/eslint"},next:{title:"\u914d\u7f6e\u5e95\u5c42\u5de5\u5177",permalink:"/v2/docs/guides/advanced-features/low-level"}},p={},l=[{value:"\u6d4b\u8bd5\u6587\u4ef6",id:"\u6d4b\u8bd5\u6587\u4ef6",level:2},{value:"\u4f7f\u7528\u59ff\u52bf",id:"\u4f7f\u7528\u59ff\u52bf",level:2},{value:"transform",id:"transform",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,a.kt)("p",null,"Modern.js \u9ed8\u8ba4\u7ee7\u627f\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," \u7684\u6d4b\u8bd5\u80fd\u529b\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u9996\u5148\u9700\u8981\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u542f\u7528\u300c\u5355\u5143\u6d4b\u8bd5 / \u96c6\u6210\u6d4b\u8bd5\u300d\u529f\u80fd\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c\uff1a \u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd\uff1a \u542f\u7528\u300c\u5355\u5143\u6d4b\u8bd5 / \u96c6\u6210\u6d4b\u8bd5\u300d\u529f\u80fd\n")),(0,a.kt)("p",null,"\u6267\u884c\u4e0a\u8ff0\u547d\u4ee4\u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u5c06\u4f1a\u81ea\u52a8\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},'"test": "modern test"')," \u547d\u4ee4\u3002"),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u6587\u4ef6"},"\u6d4b\u8bd5\u6587\u4ef6"),(0,a.kt)("p",null,"Modern.js \u9ed8\u8ba4\u8bc6\u522b\u7684\u6d4b\u8bd5\u6587\u4ef6\u8def\u5f84\u4e3a\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"<rootDir>/src/**/*.test.[jt]s?(x)")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"<rootDir>/tests/**/*.test.[jt]s?(x)"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u81ea\u5b9a\u4e49 test \u76ee\u5f55\uff0c\u53ef\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/app/tools/jest"},"tools.jest")," \u8fdb\u884c\u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u59ff\u52bf"},"\u4f7f\u7528\u59ff\u52bf"),(0,a.kt)("p",null,"Modern.js test \u652f\u6301\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/"},"testing-library")," \u76f8\u5173\u5305 API\uff0c\u53ef\u76f4\u63a5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/testing")," \u8fdb\u884c\u5bfc\u5165:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import { render, screen } from '@modern-js/runtime/testing';\n")),(0,a.kt)("p",null,"\u5176\u4ed6 Modern.js \u652f\u6301\u7684 testing API \u53ef\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/testing/cleanup"},"\u8fd9\u91cc"),"\u3002"),(0,a.kt)("h2",{id:"transform"},"transform"),(0,a.kt)("p",null,"Modern.js \u6d4b\u8bd5\u9ed8\u8ba4\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/babel-jest"},"babel-jest")," \u8fdb\u884c\u6e90\u7801\u7f16\u8bd1\uff0c\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kulshekhar/ts-jest"},"ts-jest"),"\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/app/testing/transformer"},"testing.transform")," \u8fdb\u884c\u914d\u7f6e\u3002"))}u.isMDXComponent=!0}}]);