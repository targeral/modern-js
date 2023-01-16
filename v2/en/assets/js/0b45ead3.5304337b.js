"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[776],{44993:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>u});var t=n(52983);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?t.createElement(f,p(p({ref:r},l),{},{components:n})):t.createElement(f,p({ref:r},l))}));function u(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22607:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var t=n(18249),o=(n(52983),n(44993));const a={sidebar_position:8},p=void 0,i={unversionedId:"apis/monorepo/commands/clear",id:"apis/monorepo/commands/clear",title:"clear",description:"\u9ed8\u8ba4\u5bf9 Monorepo \u4ee5\u53ca Monorepo \u5b50\u9879\u76ee\u7684 node_modules \u8fdb\u884c\u6e05\u7406\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/monorepo/commands/clear.md",sourceDirName:"apis/monorepo/commands",slug:"/apis/monorepo/commands/clear",permalink:"/v2/en/docs/apis/monorepo/commands/clear",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"apisMonorepoSidebar",previous:{title:"deploy",permalink:"/v2/en/docs/apis/monorepo/commands/deploy"},next:{title:"gen-release-note",permalink:"/v2/en/docs/apis/monorepo/commands/gen-release-note"}},c={},s=[],l={toc:s};function m(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern clear [options]\n\nclear project dirs\n\nOptions:\n  --remove-dirs [dirs...]  remove dirs, default is node_modules\n  -h, --help               display help for command\n")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u5bf9 Monorepo \u4ee5\u53ca Monorepo \u5b50\u9879\u76ee\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \u8fdb\u884c\u6e05\u7406\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--remove-dirs")," \u6765\u6307\u5b9a\u8981\u5220\u9664\u7684\u76ee\u5f55\uff0c\u4f8b\u5982\u6267\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx modern clear --remove-dirs dist\n")),(0,o.kt)("p",null,"\u5219\u4f1a\u6e05\u7406\u6240\u6709 Monorepo \u5b50\u9879\u76ee\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u3002"))}m.isMDXComponent=!0}}]);