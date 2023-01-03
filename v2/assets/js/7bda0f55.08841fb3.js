"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2548],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(f,s(s({ref:t},c),{},{components:n})):i.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(18249),a=(n(52983),n(44993));const r={sidebar_position:2},s="Tailwind CSS",l={unversionedId:"guides/basic-features/css/tailwindcss",id:"guides/basic-features/css/tailwindcss",title:"Tailwind CSS",description:"Tailwind CSS \u662f\u4e00\u4e2a\u4ee5 Utility Class \u4e3a\u57fa\u7840\u7684 CSS \u6846\u67b6\u548c\u8bbe\u8ba1\u7cfb\u7edf\uff0c\u53ef\u4ee5\u5feb\u901f\u5730\u4e3a\u7ec4\u4ef6\u6dfb\u52a0\u5e38\u7528\u6837\u5f0f\uff0c\u540c\u65f6\u652f\u6301\u4e3b\u9898\u6837\u5f0f\u7684\u7075\u6d3b\u6269\u5c55\u3002\u5728 Modern.js \u4e2d\u4f7f\u7528 Tailwind CSS\uff0c\u53ea\u9700\u8981\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c pnpm run new \u5e76\u5f00\u542f\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/basic-features/css/tailwindcss.md",sourceDirName:"guides/basic-features/css",slug:"/guides/basic-features/css/tailwindcss",permalink:"/v2/docs/guides/basic-features/css/tailwindcss",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"CSS-in-JS",permalink:"/v2/docs/guides/basic-features/css/css-in-js"},next:{title:"PostCSS",permalink:"/v2/docs/guides/basic-features/css/postcss"}},o={},p=[{value:"Tailwind CSS \u7248\u672c",id:"tailwind-css-\u7248\u672c",level:2},{value:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",level:3},{value:"Theme \u914d\u7f6e",id:"theme-\u914d\u7f6e",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tailwind-css"},"Tailwind CSS"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS")," \u662f\u4e00\u4e2a\u4ee5 Utility Class \u4e3a\u57fa\u7840\u7684 CSS \u6846\u67b6\u548c\u8bbe\u8ba1\u7cfb\u7edf\uff0c\u53ef\u4ee5\u5feb\u901f\u5730\u4e3a\u7ec4\u4ef6\u6dfb\u52a0\u5e38\u7528\u6837\u5f0f\uff0c\u540c\u65f6\u652f\u6301\u4e3b\u9898\u6837\u5f0f\u7684\u7075\u6d3b\u6269\u5c55\u3002\u5728 Modern.js \u4e2d\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS"),"\uff0c\u53ea\u9700\u8981\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u5e76\u5f00\u542f\u3002"),(0,a.kt)("p",null,"\u6309\u7167\u5982\u4e0b\u8fdb\u884c\u9009\u62e9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd \u542f\u7528 Tailwind CSS \u652f\u6301\n")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"modern.config.ts")," \u4e2d\u6ce8\u518c Tailwind \u63d2\u4ef6:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import TailwindCSSPlugin from '@modern-js/plugin-tailwindcss';\n// https://modernjs.dev/docs/apis/app/config\nexport default defineConfig({\n  ...,\n  plugins: [..., TailwindCSSPlugin()],\n});\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u65f6\u5728\u5165\u53e3\u7684\u6839\u7ec4\u4ef6(\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.jsx"),")\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\n")),(0,a.kt)("p",null,"\u7136\u540e\u5373\u53ef\u5728\u5404\u4e2a\u7ec4\u4ef6\u4e2d\u4f7f\u7528 Tailwind CSS \u63d0\u4f9b\u7684 Utility Class \u4e86\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const App = () => (\n  <div className="h-12 w-48">\n    <p className="text-xl font-medium text-black">hello world</p>\n  </div>\n);\n')),(0,a.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u6839\u636e\u9700\u6c42\u4e0d\u540c\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u6027\u7684\u5bfc\u5165 Tailwind CSS \u63d0\u4f9b\u7684 CSS \u6587\u4ef6\u3002\u7531\u4e8e\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tailwind")," \u4e0e\u76f4\u63a5\u5bfc\u5165 CSS \u6587\u4ef6\u7684\u4f5c\u7528\u7b49\u4ef7\uff0c\u56e0\u6b64\u5173\u4e8e Tailwind CSS \u63d0\u4f9b\u7684 CSS \u6587\u4ef6\u7684\u7528\u9014\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/functions-and-directives#tailwind"},(0,a.kt)("inlineCode",{parentName:"a"},"@tailwind")," \u7684\u4f7f\u7528")," \u6587\u6863\u4e2d\u6ce8\u91ca\u91cc\u7684\u5185\u5bb9\u3002")),(0,a.kt)("h2",{id:"tailwind-css-\u7248\u672c"},"Tailwind CSS \u7248\u672c"),(0,a.kt)("p",null,"Modern.js \u540c\u65f6\u652f\u6301 Tailwind CSS v2 \u548c v3 \u7248\u672c\uff0c\u6846\u67b6\u4f1a\u8bc6\u522b\u9879\u76ee ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"tailwindcss")," \u4f9d\u8d56\u7248\u672c\uff0c\u5e76\u542f\u7528\u76f8\u5e94\u7684\u914d\u7f6e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f1a\u4e3a\u4f60\u5b89\u88c5 Tailwind CSS v3 \u7248\u672c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684\u9879\u76ee\u4ecd\u5728\u4f7f\u7528 Tailwind CSS v2\uff0c\u6211\u4eec\u63a8\u8350\u4f60\u5347\u7ea7\u5230 v3 \u4ee5\u652f\u6301 JIT \u7b49\u80fd\u529b\u3002\u5173\u4e8e Tailwind CSS v2 \u4e0e v3 \u7248\u672c\u4e4b\u95f4\u7684\u5dee\u5f02\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u6587\u7ae0\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tailwindcss.com/blog/tailwindcss-v3"},"Tailwind CSS v3.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tailwindcss.com/docs/upgrade-guide"},"Upgrade Guide"))),(0,a.kt)("h3",{id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"},"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"),(0,a.kt)("p",null,"Tailwind CSS v2 \u548c v3 \u5747\u4e0d\u652f\u6301 IE 11 \u6d4f\u89c8\u5668\uff0c\u76f8\u5173\u80cc\u666f\u8bf7\u53c2\u8003\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tailwindcss.com/docs/browser-support"},"Tailwind CSS v3 - Browser Support"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://v2.tailwindcss.com/docs/browser-support"},"Tailwind CSS v2 - Browser Support"))),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5728 IE 11 \u6d4f\u89c8\u5668\u4e0a\u4f7f\u7528 Tailwind CSS\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u90e8\u5206\u6837\u5f0f\u4e0d\u53ef\u7528\u7684\u73b0\u8c61\uff0c\u8bf7\u8c28\u614e\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"theme-\u914d\u7f6e"},"Theme \u914d\u7f6e"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u81ea\u5b9a\u4e49 Tailwind CSS \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/theme"},"theme")," \u914d\u7f6e\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u5728\u914d\u7f6e ",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/app/source/design-system"},(0,a.kt)("inlineCode",{parentName:"a"},"source.designSystem"))," \u4e2d\u4fee\u6539\uff0c\u4f8b\u5982\uff0c\u989c\u8272\u4e3b\u9898\u4e2d\u589e\u52a0\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"primary"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  source: {\n    designSystem: {\n      extend: {\n        colors: {\n          primary: '#5c6ac4',\n        },\n      },\n    },\n  },\n});\n")),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u5bf9 Tailwind CSS \u505a ",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/theme"},"theme")," \u4ee5\u5916\u7684\u5176\u4ed6\u7279\u6b8a\u914d\u7f6e\u65f6\uff0c\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/app/tools/tailwindcss"},(0,a.kt)("inlineCode",{parentName:"a"},"tools.tailwindcss"))," \u4e2d\u914d\u7f6e\uff0c\u4f8b\u5982\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"variants"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  tools: {\n    tailwindcss: {\n      variants: {\n        extend: {\n          backgroundColor: ['active'],\n        },\n      },\n    },\n  },\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5f53\u4f60\u4e3a\u9879\u76ee\u914d\u7f6e Tailwind CSS \u7684\u65f6\u5019\uff0c",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/app/source/design-system"},"source.designSystem")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/app/tools/tailwindcss"},"tools.tailwindcss")," \u8fd9\u4e24\u4e2a\u914d\u7f6e\u7684\u7ec4\u5408\u7b49\u4ef7\u4e8e\u5355\u72ec\u914d\u7f6e\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"tailwindcss.config.js")," \u6587\u4ef6\u3002\u5176\u4e2d ",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/app/source/design-system"},"source.designSystem")," \u7b49\u6548\u4e8e Tailwind CSS \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://v2.tailwindcss.com/docs/configuration#theme"},"theme")," \u914d\u7f6e\u3002")))}d.isMDXComponent=!0}}]);