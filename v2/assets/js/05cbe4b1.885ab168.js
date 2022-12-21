"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6595,1010],{44993:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var o=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),s=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},l=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),l=s(t),u=a,k=l["".concat(i,".").concat(u)]||l[u]||d[u]||r;return t?o.createElement(k,p(p({ref:n},c),{},{components:t})):o.createElement(k,p({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=l;var m={};for(var i in n)hasOwnProperty.call(n,i)&&(m[i]=n[i]);m.originalType=e,m.mdxType="string"==typeof e?e:a,p[1]=m;for(var s=2;s<r;s++)p[s]=t[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}l.displayName="MDXCreateElement"},8764:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>m,default:()=>l,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var o=t(18249),a=(t(52983),t(44993)),r=t(79994);const p={sidebar_position:9},m=void 0,i={unversionedId:"apis/monorepo/commands/gen-release-note",id:"apis/monorepo/commands/gen-release-note",title:"gen-release-note",description:"\u6839\u636e\u5f53\u524d\u4ed3\u5e93\u7684 changeset \u4fe1\u606f\u81ea\u52a8\u751f\u6210 Release Note\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/monorepo/commands/gen-release-note.md",sourceDirName:"apis/monorepo/commands",slug:"/apis/monorepo/commands/gen-release-note",permalink:"/v2/docs/apis/monorepo/commands/gen-release-note",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"apisMonorepoSidebar",previous:{title:"clear",permalink:"/v2/docs/apis/monorepo/commands/clear"},next:{title:"upgrade",permalink:"/v2/docs/apis/monorepo/commands/upgrade"}},s={},c=[],d={toc:c};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern gen-release-note [options]\n\n\u6839\u636e\u5f53\u524d\u4ed3\u5e93 changeset \u6587\u4ef6\u751f\u6210 Release Note\n\nOptions:\n  --repo <repo>      \u4ed3\u5e93\u540d\u79f0\uff0c\u7528\u4e8e\u751f\u6210 Pull Request \u94fe\u63a5\uff0c \u4f8b\u5982\uff1a modern-js-dev/modern.js\n  --custom <cumtom>  \u81ea\u5b9a\u4e49 Release Note \u751f\u6210\u51fd\u6570\n  -h, --help         display help for command\n")),(0,a.kt)("p",null,"\u6839\u636e\u5f53\u524d\u4ed3\u5e93\u7684 changeset \u4fe1\u606f\u81ea\u52a8\u751f\u6210 Release Note\u3002"),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u9700\u8981\u5728 bump \u547d\u4ee4\u4e4b\u524d\u6267\u884c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"## Features:\n\n[[#1160](https://github.com/modern-js-dev/modern.js/pull/1160)] export ExecaError type\n\n## Bug Fix:\n\n[[#1264](https://github.com/modern-js-dev/modern.js/pull/1264)] fix: conventional router app use App.init not work\n\n")),(0,a.kt)(r.default,{mdxType:"CommandTip"}))}l.isMDXComponent=!0},79994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>m,toc:()=>s});var o=t(18249),a=(t(52983),t(44993));const r={},p=void 0,m={unversionedId:"components/command-tip",id:"components/command-tip",title:"command-tip",description:"pnpm v6 \u548c pnpm v7 \u7248\u672c\u5728\u6267\u884c\u547d\u4ee4\u65f6\u4f7f\u7528\u59ff\u52bf\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a",source:"@site/../../packages/toolkit/main-doc/zh/components/command-tip.md",sourceDirName:"components",slug:"/components/command-tip",permalink:"/v2/docs/components/command-tip",draft:!1,tags:[],version:"current",frontMatter:{}},i={},s=[],c={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"pnpm v6 \u548c pnpm v7 \u7248\u672c\u5728\u6267\u884c\u547d\u4ee4\u65f6\u4f7f\u7528\u59ff\u52bf\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,a.kt)("p",{parentName:"admonition"},"pnpm v7\uff1a"),(0,a.kt)("p",{parentName:"admonition"},"\u5728\u4f7f\u7528 pnpm \u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684\u547d\u4ee4\u65f6\uff0c\u5982\u679c\u9700\u8981\u4f20\u9012\u53c2\u6570\u81f3 pnpm\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u5230\u547d\u4ee4\u524d\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u4f8b\u5982\u4f7f\u7528 pnpm ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter")," \u53c2\u6570\u6267\u884c prepare \u547d\u4ee4\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pnpm run --filter "./packages/**" prepare\n')),(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u4f20\u9012\u53c2\u6570\u81f3\u547d\u4ee4\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u5230\u547d\u4ee4\u540e\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u4f8b\u5982\uff0c\u5728\u5982\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,a.kt)("p",{parentName:"admonition"},"\u6267\u884c command \u547d\u4ee4\u65f6\u643a\u5e26\u53c2\u6570\u65b9\u5f0f\u4e3a\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run command --options\n")),(0,a.kt)("p",{parentName:"admonition"},"pnpm v6:"),(0,a.kt)("p",{parentName:"admonition"},"\u5728\u5982\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,a.kt)("p",{parentName:"admonition"},"\u5f53\u9700\u8981\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"modern command --option"),"\uff1a"),(0,a.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 pnpm \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run command -- --option"),"\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u56e0\u4e3a pnpm \u5bf9\u4e8e\u547d\u4ee4\u53c2\u6570\u7684\u5904\u7406\u4e0e Yarn \u5e76\u4e0d\u76f8\u540c\uff0c\u4f46\u662f\u4e0e npm \u7c7b\u4f3c\uff1a\u5728\u4e0d\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f pnpm \u7684\u53c2\u6570\uff1b\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f\u6267\u884c\u811a\u672c\u7684\u53c2\u6570\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u5728\u4e0a\u8ff0\u4f8b\u5b50\u91cc\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"--option")," \u4f20\u9012\u7ed9\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"modern command"),"\u3002\u5982\u679c\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run command --option"),"\uff0c\u5219\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"--option")," \u5c06\u4f20\u9012\u7ed9 pnpm\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u603b\u7ed3\u6765\u8bf4\uff1a"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm v7 \u65f6\uff0c\u5982\u679c\u4f20\u9012\u53c2\u6570\u7ed9 pnpm\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u7f6e\u5230\u547d\u4ee4\u524d")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm v6 \u65f6\uff0c\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u7ed9 pnpm\uff0c\u4e0d\u9700\u8981\u52a0 ",(0,a.kt)("inlineCode",{parentName:"strong"},"--"),"\uff1b\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u662f\u7ed9\u811a\u672c\u4f7f\u7528\uff0c\u9700\u8981\u589e\u52a0 ",(0,a.kt)("inlineCode",{parentName:"strong"},"--")," \u5b57\u7b26\u4e32"),"\u3002")))}d.isMDXComponent=!0}}]);