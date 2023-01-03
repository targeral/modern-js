"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3715],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||p;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<p;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var r=n(18249),o=(n(52983),n(44993));const p={sidebar_position:2},a="\u521b\u5efa\u5b50\u9879\u76ee",i={unversionedId:"guides/topic-detail/monorepo/create-sub-project",id:"guides/topic-detail/monorepo/create-sub-project",title:"\u521b\u5efa\u5b50\u9879\u76ee",description:"\u672c\u7ae0\u5c06\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Monorepo \u5de5\u7a0b\u4e0b\u521b\u5efa\u5b50\u9879\u76ee\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/monorepo/create-sub-project.md",sourceDirName:"guides/topic-detail/monorepo",slug:"/guides/topic-detail/monorepo/create-sub-project",permalink:"/v2/docs/guides/topic-detail/monorepo/create-sub-project",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"Monorepo \u5de5\u7a0b\u4ecb\u7ecd",permalink:"/v2/docs/guides/topic-detail/monorepo/intro"},next:{title:"\u5b50\u9879\u76ee\u8054\u8c03",permalink:"/v2/docs/guides/topic-detail/monorepo/sub-project-interface"}},l={},c=[],u={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u521b\u5efa\u5b50\u9879\u76ee"},"\u521b\u5efa\u5b50\u9879\u76ee"),(0,o.kt)("p",null,"\u672c\u7ae0\u5c06\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Monorepo \u5de5\u7a0b\u4e0b\u521b\u5efa\u5b50\u9879\u76ee\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Modern.js \u652f\u6301\u4f7f\u7528 pnpm \u548c Yarn \u7684 Monorepo\uff0c\u8fd9\u91cc\u4ee5\u4f7f\u7528 pnpm \u4e3a\u4f8b\u3002\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u4ee5\u540c\u6837\u65b9\u5f0f\u4f7f\u7528 Yarn \u6765\u6267\u884c\u3002")),(0,o.kt)("p",null,"Modern.js \u9488\u5bf9 Monorepo \u5de5\u7a0b\u63d0\u4f9b\u4e86\u751f\u6210\u5668\u529f\u80fd\uff0c\u5b83\u7528\u4e8e\u5728 Monorepo \u5de5\u7a0b\u4e0b\u521b\u5efa\u4e0d\u540c\u7c7b\u578b\u7684 Monorepo \u5b50\u9879\u76ee\u3002\u5728\u751f\u6210\u5668\u4e2d\u63d0\u4f9b\u4ee5\u4e0b\u7c7b\u578b\u5b50\u9879\u76ee\u7684\u521b\u5efa\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u300c\u5e94\u7528\u300d\u7c7b\u578b"),(0,o.kt)("li",{parentName:"ul"},"\u300c\u6a21\u5757\u300d\u7c7b\u578b")),(0,o.kt)("p",null,"\u8981\u542f\u52a8 Monorepo \u7684\u751f\u6210\u5668\u529f\u80fd\uff0c\u53ef\u4ee5\u5728 Monorepo \u5de5\u7a0b\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm run new\n")),(0,o.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 Yarn \u7684\u65b9\u5f0f\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"yarn new"))),(0,o.kt)("p",null,"\u6267\u884c\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u521b\u5efa\u7684\u5de5\u7a0b\u7c7b\u578b (Use arrow keys)\n\u276f \u5e94\u7528\n  \u5e94\u7528\uff08\u6d4b\u8bd5\uff09\n  \u6a21\u5757\n  \u6a21\u5757\uff08\u5185\u90e8\uff09\n")),(0,o.kt)("admonition",{title:"\u6ce8",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u300c\u5e94\u7528\u300d\u4e0e\u300c\u5e94\u7528\uff08\u6d4b\u8bd5\uff09\u300d\u90fd\u662f\u300c\u5e94\u7528\u300d\u7c7b\u578b\u7684\u9879\u76ee\uff0c\u533a\u522b\u662f\u300c\u5e94\u7528\u300d\u7c7b\u578b\u7684\u5b50\u9879\u76ee\u4f1a\u521b\u5efa\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"./apps")," \u76ee\u5f55\u4e0b\uff0c\u800c \u300c\u5e94\u7528\uff08\u6d4b\u8bd5\uff09\u300d\u7c7b\u578b\u7684\u5b50\u9879\u76ee\u4f1a\u521b\u5efa\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"./examples")," \u76ee\u5f55\u4e0b\u3002")),(0,o.kt)("admonition",{title:"\u6ce8",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u300c\u6a21\u5757\u300d\u4e0e\u300c\u6a21\u5757\uff08\u5185\u90e8\uff09\u300d\u90fd\u662f\u300c\u6a21\u5757\u300d\u7c7b\u578b\u7684\u9879\u76ee\uff0c\u533a\u522b\u4e4b\u4e00\u662f\u300c\u6a21\u5757\u300d\u7c7b\u578b\u7684\u5b50\u9879\u76ee\u4f1a\u521b\u5efa\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"./packages")," \u76ee\u5f55\u4e0b\uff0c\u800c\u300c\u6a21\u5757\uff08\u5185\u90e8\uff09\u300d\u7c7b\u578b\u7684\u5b50\u9879\u76ee\u4f1a\u521b\u5efa\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"./features")," \u76ee\u5f55\u4e0b\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u300c\u6a21\u5757\u300d\u7c7b\u578b\u7684\u5b50\u9879\u76ee\u5141\u8bb8\u88ab\u53d1\u5e03\u5230\u5916\u90e8\uff08\u4f8b\u5982 npm)\uff0c\u800c\u5bf9\u4e8e\u300c\u6a21\u5757\uff08\u5185\u90e8\uff09\u300d\u7684\u5b50\u9879\u76ee\u5219\u53ef\u4ee5\u5728\u5e94\u7528\u9879\u76ee\u4e2d\u76f4\u63a5\u4f7f\u7528\u5176\u6e90\u7801\uff08\u8be5\u7279\u6027\u662f\u300c\u6a21\u5757\u300d\u9879\u76ee\u4e0d\u5177\u5907\u7684\uff0c\u5e94\u7528\u9879\u76ee\u5bf9\u4e8e\u300c\u6a21\u5757\uff08\u5185\u90e8\uff09\u300d\u5b50\u9879\u76ee\u505a\u4e86\u7279\u6b8a\u5904\u7406\uff09\uff0c\u56e0\u6b64\u8fd9\u7c7b\u5b50\u9879\u76ee\u4e0d\u9700\u8981\u53d1\u5e03\u5230\u5916\u90e8\u3002")),(0,o.kt)("p",null,"\u7136\u540e\u6839\u636e\u4e0d\u540c\u7684\u9700\u6c42\u9009\u62e9\u5bf9\u5e94\u7684\u7c7b\u578b\u9879\u76ee\u9009\u9879\uff0c\u9009\u62e9\u4e4b\u540e\u4fbf\u5f00\u59cb\u51fa\u73b0\u5bf9\u5e94\u5b50\u9879\u76ee\u7c7b\u578b\u7684\u95ee\u9898\u548c\u9009\u9879\u3002\u4f8b\u5982\u9009\u62e9\u300c\u5e94\u7528\u300d\u540e\u4f1a\u51fa\u73b0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u521b\u5efa\u7684\u5de5\u7a0b\u7c7b\u578b \u5e94\u7528\n? \u8bf7\u586b\u5199\u5b50\u9879\u76ee\u540d\u79f0\n")),(0,o.kt)("p",null,"\u5f53\u5b8c\u6210\u6240\u6709\u751f\u6210\u5668\u95ee\u9898\u4e4b\u540e\uff0c\u4fbf\u5f00\u59cb\u8fdb\u884c\u9879\u76ee\u7684\u521b\u5efa\u548c\u9879\u76ee\u4f9d\u8d56\u7684\u4e0b\u8f7d\u3002\u5f53\u521b\u5efa\u6210\u529f\u4e4b\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[INFO] \u4f9d\u8d56\u81ea\u52a8\u5b89\u88c5\u6210\u529f\n[INFO] \u521b\u5efa\u6210\u529f\uff01\n\u53ef\u5728\u65b0\u9879\u76ee\u7684\u76ee\u5f55\u4e0b\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\npnpm run dev          # \u6309\u5f00\u53d1\u73af\u5883\u7684\u8981\u6c42\uff0c\u8fd0\u884c\u548c\u8c03\u8bd5\u9879\u76ee\npnpm run build        # \u6309\u751f\u4ea7\u73af\u5883\u7684\u8981\u6c42\uff0c\u6784\u5efa\u9879\u76ee\npnpm run serve        # \u6309\u751f\u4ea7\u73af\u5883\u7684\u8981\u6c42\uff0c\u8fd0\u884c\u9879\u76ee\npnpm run lint         # \u68c0\u67e5\u548c\u4fee\u590d\u6240\u6709\u4ee3\u7801\npnpm run new          # \u7ee7\u7eed\u521b\u5efa\u66f4\u591a\u9879\u76ee\u8981\u7d20\uff0c\u6bd4\u5982\u5e94\u7528\u5165\u53e3\n")))}s.isMDXComponent=!0}}]);