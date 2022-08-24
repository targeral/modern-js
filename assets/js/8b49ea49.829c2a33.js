"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[14244],{54852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(86215),o=(n(49231),n(54852));const a={title:"\u200b\u4f7f\u7528 Loader"},l=void 0,i={unversionedId:"guides/tutorials/c11-container/11.3-use-loader",id:"guides/tutorials/c11-container/11.3-use-loader",title:"\u200b\u4f7f\u7528 Loader",description:"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u90fd\u662f\u7528 useEffect \u6765\u8bf7\u6c42 BFF\uff0c\u52a0\u8f7d\u8054\u7cfb\u4eba\u5217\u8868\u6570\u636e\u3002",source:"@site/docs/guides/tutorials/c11-container/11.3-use-loader.md",sourceDirName:"guides/tutorials/c11-container",slug:"/guides/tutorials/c11-container/11.3-use-loader",permalink:"/docs/guides/tutorials/c11-container/11.3-use-loader",tags:[],version:"current",frontMatter:{title:"\u200b\u4f7f\u7528 Loader"},sidebar:"guidesSidebar",previous:{title:"\u5bb9\u5668\u7ec4\u4ef6\uff08Container\uff09",permalink:"/docs/guides/tutorials/c11-container/11.2-add-container"},next:{title:"\u200b\u6d4b\u8bd5\u5bb9\u5668\u7ec4\u4ef6",permalink:"/docs/guides/tutorials/c11-container/11.4-testing"}},p={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u90fd\u662f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u6765\u8bf7\u6c42 BFF\uff0c\u52a0\u8f7d\u8054\u7cfb\u4eba\u5217\u8868\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u5728\u542f\u7528 SSR \u7684\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u5728\u670d\u52a1\u5668\u7aef\u662f\u4e0d\u4f1a\u6267\u884c\u7684\uff0c\u6240\u4ee5 SSR \u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u52a0\u8f7d\u6570\u636e\uff0c\u8fd9\u79cd SSR \u53ea\u80fd\u6e32\u67d3\u5f88\u6709\u9650\u7684 UI\uff0c\u662f\u4f4e\u4ef7\u503c\u7684\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u5728\u5f53\u524d\u9879\u76ee\u4e2d\u5f00\u542f ",(0,o.kt)("a",{parentName:"p",href:"docs/apis/app/config/server/ssr"},"SSR"),"\uff0c\u770b\u4e0b\u8fd9\u79cd\u6548\u679c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"server": {\n  "ssr": true,\n}\n')),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u5728 devtools \u7684 network \u9762\u677f\u91cc\u67e5\u770b HTML \u8bf7\u6c42\u7684 Preview \u9762\u677f\uff0c\u53ef\u4ee5\u770b\u5230 SSR \u7684\u6e32\u67d3\u7ed3\u679c\u53ea\u6709\u5bfc\u822a\u680f\u548c Pending... \u5b57\u7b26\uff0c\u5e76\u6ca1\u6709\u8054\u7cfb\u4eba\u6570\u636e\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/11/display5.png",alt:"display5"})),(0,o.kt)("p",null,"\u524d\u9762\u63d0\u5230\u8fc7\uff0c\u5e94\u7528\u5de5\u7a0b\u91cc\u7684 SSR \u5b9e\u73b0\u662f Serverless SSR\uff0c\u4e0d\u4ec5\u5728\u90e8\u7f72\u3001\u8fd0\u7ef4\u73af\u8282\uff0c\u5728\u5f00\u53d1\u73af\u8282\u5bf9 Server \u4e5f\u662f\u65e0\u611f\u7684\uff0c\u9879\u76ee\u91cc\u4e0d\u9700\u8981\u4e13\u95e8\u5199\u670d\u52a1\u5668\u7684\u5b9e\u73b0\u3002"),(0,o.kt)("p",null,"\u4e0a\u8ff0\u52a0\u8f7d\u521d\u59cb\u6570\u636e\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u4e5f\u4e0d\u5e94\u8be5\u50cf\u4f20\u7edf\u6a21\u5f0f\u4e00\u6837\uff0c\u5728\u5ba2\u6237\u7aef\u4ee3\u7801\u548c\u670d\u52a1\u5668\u7aef\u4ee3\u7801\u4e2d\u5206\u522b\u5b9e\u73b0\u3002"),(0,o.kt)("p",null,"Modern.js \u63d0\u4f9b\u4e00\u4e2a\u53eb ",(0,o.kt)("inlineCode",{parentName:"p"},"useLoader")," \u7684 hooks API\uff0c\u5728\u8fd9\u79cd\u573a\u666f\u4e0b\u66ff\u4ee3 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect"),"\uff0c\u80fd\u81ea\u52a8\u5728 SSR \u73af\u8282\u505a",(0,o.kt)("strong",{parentName:"p"},"\u9884\u52a0\u8f7d"),"\uff0c\u5148\u83b7\u53d6\u8db3\u591f\u7684\u6570\u636e\uff0c\u518d\u8fd0\u884c app \u4ee3\u7801\u6e32\u67d3 HTML\u3002"),(0,o.kt)("p",null,"\u540c\u65f6\uff0c\u5728 CSR \u73af\u8282\u4e2d\uff0c\u81ea\u52a8\u68c0\u67e5\u5f53\u524d loader \u9700\u8981\u7684\u6570\u636e\uff0c\u5982\u679c\u5728 SSR \u73af\u8282\u4e2d\u5df2\u7ecf\u9884\u52a0\u8f7d\uff0c\u5728\u5ba2\u6237\u7aef\u5c31\u4e0d\u518d\u91cd\u590d\u6267\u884c loader\uff0c\u76f4\u63a5\u7528\u73b0\u6210\u6570\u636e\uff1b\u53cd\u4e4b\u5c31\u5728\u5ba2\u6237\u7aef\u6267\u884c loader\uff08\u76f8\u5f53\u4e8e\u4e00\u79cd fallback\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useLoader")," \u7684\u4f7f\u7528\u5f88\u7b80\u5355\uff0c\u628a\u5f53\u524d\u9879\u76ee\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"Contacts")," \u7ec4\u4ef6\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u4ee3\u7801\u66ff\u6362\u6210\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"useLoader(\n  async () => {\n    if (!items.length && !error && !pending) {\n      return actions.load();\n    }\n    return Promise.resolve();\n  },\n  {\n    params: 'contacts',\n  },\n);\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useLoader")," API \u8981\u6c42\u8fd4\u56de\u4e00\u4e2a promise\uff0c\u7528\u4e8e\u5224\u65ad\u8fd9\u4e2a loader \u662f\u5426\u5b8c\u6210\u3002\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5f53\u524d Loader \u7684\u552f\u4e00\u6807\u8bc6\u3002"),(0,o.kt)("p",null,"\u540c\u65f6\uff0c\u5728\u6587\u4ef6\u9876\u90e8\u7684\u5bfc\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"useLoader"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useLoader } from '@modern-js/runtime';\n")),(0,o.kt)("p",null,"\u91cd\u65b0\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u67e5\u770b ",(0,o.kt)("inlineCode",{parentName:"p"},"view-source:http://localhost:8080/contacts/"),"\uff0c\u6216\u5728 devtools \u7684 Network \u9762\u677f\u91cc\u67e5\u770b HTML \u8bf7\u6c42\u7684\u300c Preview \u300d\uff0c\u53ef\u4ee5\u770b\u5230 SSR \u6e32\u67d3\u51fa\u6765\u7684 HTML \u5df2\u7ecf\u5305\u542b\u5b8c\u6574\u7684 UI\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/11/display6.png",alt:"display6"})),(0,o.kt)("p",null,"\u67e5\u770b ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/contacts/"),"\uff0c\u53ef\u4ee5\u770b\u5230\u9996\u5c4f\u662f\u6ca1\u6709 pending \u8fc7\u7a0b\u7684\u3002"),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,o.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c11/hello-modern-3"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}u.isMDXComponent=!0}}]);