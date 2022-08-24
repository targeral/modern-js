"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[70967],{54852:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(49231);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),f=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=f(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),l=f(t),d=o,m=l["".concat(p,".").concat(d)]||l[d]||u[d]||i;return t?n.createElement(m,s(s({ref:r},c),{},{components:t})):n.createElement(m,s({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=l;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var f=2;f<i;f++)s[f]=t[f];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},59471:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>f});var n=t(86215),o=(t(49231),t(54852));const i={sidebar_position:6,title:"\u4f7f\u7528 BFF \u4ee3\u7406"},s=void 0,a={unversionedId:"guides/features/server-side/bff/bff-proxy",id:"guides/features/server-side/bff/bff-proxy",title:"\u4f7f\u7528 BFF \u4ee3\u7406",description:"\u901a\u8fc7\u914d\u7f6e BFF \u4ee3\u7406\uff0c\u65e0\u9700\u624b\u52a8\u5199\u7801\uff0c\u5373\u53ef\u5bf9 API \u8bf7\u6c42\u8fdb\u884c\u8f6c\u53d1\u3002",source:"@site/docs/guides/features/server-side/bff/bff-proxy.md",sourceDirName:"guides/features/server-side/bff",slug:"/guides/features/server-side/bff/bff-proxy",permalink:"/docs/guides/features/server-side/bff/bff-proxy",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u4f7f\u7528 BFF \u4ee3\u7406"},sidebar:"guidesSidebar",previous:{title:"\u8fd0\u884c\u65f6\u6846\u67b6",permalink:"/docs/guides/features/server-side/bff/frameworks"},next:{title:"\u5fae\u524d\u7aef\u4ecb\u7ecd",permalink:"/docs/guides/features/micro-frontend/introduction"}},p={},f=[],c={toc:f};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u901a\u8fc7\u914d\u7f6e BFF \u4ee3\u7406\uff0c\u65e0\u9700\u624b\u52a8\u5199\u7801\uff0c\u5373\u53ef\u5bf9 API \u8bf7\u6c42\u8fdb\u884c\u8f6c\u53d1\u3002"),(0,o.kt)("p",null,"::: caution\n\u4f7f\u7528 BFF \u4ee3\u7406\u9700\u786e\u4fdd\u8bf7\u6c42\u80fd\u8fdb\u5165 BFF handler\u3002\uff08\u4f8b\u5982\u8bf7\u6c42\u8def\u5f84\u5fc5\u987b\u5305\u542b bff prefix\uff09\n:::"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern.server-runtime.config.js")," \u6587\u4ef6\u4e2d\u7f16\u5199\u4ee5\u4e0b BFF \u4ee3\u7406\u914d\u7f6e\uff0c\u4f1a\u5c06\u53d1\u9001\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8080/api/v1/topics")," \u7684\u8bf7\u6c42\u4ee3\u7406\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"https://cnodejs.org/api/v1/topics"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.server-runtime.config.js"',title:'"modern.server-runtime.config.js"'},"import { defineConfig } from '@modern-js/app-tools/server';\nexport default defineConfig({\n  bff: {\n    proxy: {\n      '/api/v1/topics': 'https://cnodejs.org',\n    },\n  },\n};\n")),(0,o.kt)("p",null,"\u5177\u4f53 API \u8bf7\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/config/bff/proxy"},"BFF \u4ee3\u7406"),"\uff0c\u66f4\u591a Modern.js \u4ee3\u7406\u7684\u80fd\u529b\u53ef\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/usages/debug/proxy-and-mock"},"\u8c03\u8bd5\u4ee3\u7406"),"\u3002"))}u.isMDXComponent=!0}}]);