"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[88305],{54852:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(49231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},48687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(86215),o=(t(49231),t(54852));const a={sidebar_position:3},i="enableFunc",l={unversionedId:"apis/generator/plugin/new/enableFunc",id:"apis/generator/plugin/new/enableFunc",title:"enableFunc",description:"\u542f\u7528\u529f\u80fd\uff0c\u652f\u6301\u5e94\u7528\u548c\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u3002",source:"@site/docs/apis/generator/plugin/new/enableFunc.md",sourceDirName:"apis/generator/plugin/new",slug:"/apis/generator/plugin/new/enableFunc",permalink:"/docs/apis/generator/plugin/new/enableFunc",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apisGeneratorSidebar",previous:{title:"createElement",permalink:"/docs/apis/generator/plugin/new/createElement"},next:{title:"createSubProject",permalink:"/docs/apis/generator/plugin/new/createSubProject"}},c={},p=[{value:"func",id:"func",level:2},{value:"params",id:"params",level:2}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enablefunc"},"enableFunc"),(0,o.kt)("p",null,"\u542f\u7528\u529f\u80fd\uff0c\u652f\u6301\u5e94\u7528\u548c\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u3002"),(0,o.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,o.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ActionFunction {\n  UnBundle = 'unbundle',\n  TailwindCSS = 'tailwindcss',\n  Less = 'less',\n  Sass = 'sass',\n  BFF = 'bff',\n  MicroFrontend = 'micro_frontend',\n  Electron = 'electron',\n  I18n = 'i18n',\n  Test = 'test',\n  E2ETest = 'e2e_test',\n  Doc = 'doc',\n  Storybook = 'storybook',\n  RuntimeApi = 'runtimeApi',\n  SSG = 'ssg',\n  Polyfill = 'polyfill',\n  Deploy = 'deploy',\n}\nexport type ForgedAPI = {\n  enableFunc: (\n    func: ActionFunction,\n    params?: Record<string, unknown> | undefined,\n  ) => Promise<void>;\n  ...\n};\n")),(0,o.kt)("h2",{id:"func"},"func"),(0,o.kt)("p",null,"\u529f\u80fd\u540d\u79f0\uff0c\u6839\u636e\u4e0d\u7528\u7684\u5de5\u7a0b\u65b9\u6848\u652f\u6301\u7684\u529f\u80fd\u8fdb\u884c\u4f20\u503c\u3002"),(0,o.kt)("h2",{id:"params"},"params"),(0,o.kt)("p",null,"\u542f\u7528\u529f\u80fd\u65f6\u5176\u4ed6\u53c2\u6570\uff0c\u8be6\u7ec6\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/generator/config/mwa#new-%E5%91%BD%E4%BB%A4"},"\u5e94\u7528 New \u547d\u4ee4"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/generator/config/module#new-%E5%91%BD%E4%BB%A4"},"\u6a21\u5757 New \u547d\u4ee4"),"\u3002"))}u.isMDXComponent=!0}}]);