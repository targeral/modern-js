"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6110],{44993:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(k,a(a({ref:t},c),{},{components:r})):n.createElement(k,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(18249),o=(r(52983),r(44993));const i={title:"\u4ecb\u7ecd",sidebar_position:1},a=void 0,l={unversionedId:"guides/topic-detail/framework-plugin/introduction",id:"guides/topic-detail/framework-plugin/introduction",title:"\u4ecb\u7ecd",description:"Modern.js \u63d2\u4ef6\u7cfb\u7edf",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/framework-plugin/introduction.md",sourceDirName:"guides/topic-detail/framework-plugin",slug:"/guides/topic-detail/framework-plugin/introduction",permalink:"/v2/docs/guides/topic-detail/framework-plugin/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u4ecb\u7ecd",sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"@modern-js/codesmith-api-npm",permalink:"/v2/docs/guides/topic-detail/generator/codesmith/api/npm"},next:{title:"Hook \u6a21\u578b",permalink:"/v2/docs/guides/topic-detail/framework-plugin/hook"}},p={},u=[{value:"Modern.js \u63d2\u4ef6\u7cfb\u7edf",id:"modernjs-\u63d2\u4ef6\u7cfb\u7edf",level:2},{value:"\u63d2\u4ef6\u53ef\u4ee5\u505a\u4ec0\u4e48",id:"\u63d2\u4ef6\u53ef\u4ee5\u505a\u4ec0\u4e48",level:2}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"modernjs-\u63d2\u4ef6\u7cfb\u7edf"},"Modern.js \u63d2\u4ef6\u7cfb\u7edf"),(0,o.kt)("p",null,"Modern.js \u7528\u4e8e\u6269\u5c55\u9879\u76ee\u8fd0\u884c\u3001\u8bf7\u6c42\u3001\u6e32\u67d3\u7b49\u4e0d\u540c\u9636\u6bb5\u529f\u80fd\u7684\u7cfb\u7edf\uff0c\u4e3b\u8981\u5206\u4e3a\u4e09\u4e2a\u90e8\u5206\uff1aHook \u6a21\u578b\u3001\u7ba1\u7406\u5668\uff0c\u4e0a\u4e0b\u6587\u5171\u4eab\u673a\u5236\u3002"),(0,o.kt)("p",null,"Hook \u6a21\u578b\u7528\u4e8e\u786e\u5b9a\u5f53\u524d Hook \u7684\u6267\u884c\u65b9\u5f0f\uff0c\u4e0d\u540c Hook \u6a21\u578b\u7684\u51fd\u6570\u62e5\u6709\u4e0d\u540c\u7684\u6267\u884c\u903b\u8f91\u3002\u7ba1\u7406\u5668\u7528\u4e8e\u63a7\u5236 Hook \u7684\u6267\u884c\u4e0e\u8c03\u5ea6\u3002\u4e0a\u4e0b\u6587\u5171\u4eab\u673a\u5236\u7528\u4e8e\u5728\u4e0d\u540c Hook \u95f4\u4f20\u9012\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u76ee\u524d Modern.js \u63d0\u4f9b\u51e0\u79cd\u4e0d\u540c\u7684 Hook \u6a21\u578b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pipeline",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sync"),(0,o.kt)("li",{parentName:"ul"},"Async"))),(0,o.kt)("li",{parentName:"ul"},"Waterfall",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sync"),(0,o.kt)("li",{parentName:"ul"},"Async"))),(0,o.kt)("li",{parentName:"ul"},"Workflow",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sync"),(0,o.kt)("li",{parentName:"ul"},"Async"),(0,o.kt)("li",{parentName:"ul"},"Parallel(Async)")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u540e\u7eed\u7ae0\u8282\u8be6\u7ec6\u4ecb\u7ecd\u5404\u4e2a\u6a21\u578b\u7684\u6267\u884c\u65b9\u5f0f\u3002")),(0,o.kt)("p",null,"\u57fa\u4e8e Hook \u6a21\u578b\u548c\u7ba1\u7406\u5668\uff0cModern.js \u66b4\u9732\u4e86\u4e09\u5957\u63d2\u4ef6\uff1aCLI\u3001Runtime\u3001Server\u3002"),(0,o.kt)("p",null,"\u5176\u4e2d CLI \u63d2\u4ef6\u662f Modern.js \u4e2d\u4e3b\u8981\u7684\u8fd0\u884c\u6d41\u7a0b\u63a7\u5236\u6a21\u578b\uff0cModern.js \u4e2d\u7edd\u5927\u90e8\u5206\u529f\u80fd\u90fd\u662f\u4e3b\u8981\u901a\u8fc7\u8fd9\u4e00\u5957\u6a21\u578b\u8fd0\u884c\u7684\u3002Runtime \u63d2\u4ef6\u4e3b\u8981\u8d1f\u8d23\u5904\u7406 React \u7ec4\u4ef6\u6e32\u67d3\u903b\u8f91\u3002Server \u63d2\u4ef6\u4e3b\u8981\u7528\u4e8e\u5bf9\u670d\u52a1\u7aef\u7684\u751f\u547d\u5468\u671f\u4ee5\u53ca\u7528\u6237\u8bf7\u6c42\u7684\u63a7\u5236\u3002"),(0,o.kt)("h2",{id:"\u63d2\u4ef6\u53ef\u4ee5\u505a\u4ec0\u4e48"},"\u63d2\u4ef6\u53ef\u4ee5\u505a\u4ec0\u4e48"),(0,o.kt)("p",null,"Modern.js \u7684\u6240\u6709\u529f\u80fd\u90fd\u662f\u901a\u8fc7\u8fd9\u5957\u63d2\u4ef6\u5b9e\u73b0\u7684\uff0c\u8fd9\u610f\u5473\u7740 Modern.js \u4e2d\u7684\u6240\u6709\u80fd\u529b\u662f\u90fd\u5bf9\u5f00\u53d1\u8005\u5f00\u653e\u7684\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u7f16\u5199\u63d2\u4ef6\u6765\u6269\u5c55\u66f4\u591a\u529f\u80fd\uff0c\u9002\u914d\u590d\u6742\u573a\u666f\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u547d\u4ee4"),(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539 Modern.js \u914d\u7f6e\u3001\u914d\u7f6e\u6821\u9a8c Schema"),(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539\u7f16\u8bd1\u65f6\u7684 Webpack/Babel/Less/Sass/Tailwind CSS/... \u914d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539\u8fd0\u884c\u65f6\u9700\u8981\u6e32\u67d3\u7684 React \u7ec4\u4ef6\u3001Element"),(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539\u9875\u9762\u8def\u7531"),(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539\u670d\u52a1\u5668\u8def\u7531"),(0,o.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u63a7\u5236\u53f0\u8f93\u51fa"),(0,o.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u52a8\u6001 HTML \u6a21\u7248"),(0,o.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49 Node.js \u670d\u52a1\u5668\u6846\u67b6"),(0,o.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49 React \u7ec4\u4ef6\u5ba2\u6237\u7aef/\u670d\u52a1\u5668\u7aef\u6e32\u67d3"),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("p",null,"\u5f53 Modern.js \u6682\u65f6\u6ca1\u6709\u8986\u76d6\u5230\u4f60\u6240\u9700\u8981\u7684\u529f\u80fd\u6216\u573a\u666f\u65f6\uff0c\u53ef\u4ee5\u5f00\u53d1\u4e00\u4e2a\u81ea\u5b9a\u4e49\u63d2\u4ef6\uff0c\u6765\u5b9e\u73b0\u9002\u914d\u7279\u6b8a\u573a\u666f\u7684\u76f8\u5173\u529f\u80fd\u3002"))}s.isMDXComponent=!0}}]);