"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4346],{44993:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>d});var t=r(52983);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?t.createElement(f,p(p({ref:n},l),{},{components:r})):t.createElement(f,p({ref:n},l))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74915:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(18249),a=(r(52983),r(44993));const o={sidebar_position:6},p=void 0,i={unversionedId:"apis/app/commands/serve",id:"apis/app/commands/serve",title:"serve",description:"\u901a\u5e38\u4f7f\u7528 modern serve \u547d\u4ee4\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u542f\u7528\u5e94\u7528\u5de5\u7a0b, \u9700\u8981\u63d0\u524d\u6267\u884c build \u547d\u4ee4\u6784\u5efa\u51fa\u5bf9\u5e94\u4ea7\u7269\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/commands/serve.md",sourceDirName:"apis/app/commands",slug:"/apis/app/commands/serve",permalink:"/v2/docs/apis/app/commands/serve",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"apisAppSidebar",previous:{title:"build",permalink:"/v2/docs/apis/app/commands/build"},next:{title:"inspect",permalink:"/v2/docs/apis/app/commands/inspect"}},s={},c=[],l={toc:c};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern serve [options]\n\nrun server\n\nOptions:\n  -c --config <config>  \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u4ee5\u4e3a\u76f8\u5bf9\u8def\u5f84\u6216\u7edd\u5bf9\u8def\u5f84\n  -h, --help            \u663e\u793a\u547d\u4ee4\u5e2e\u52a9\n  --api-only            \u4ec5\u542f\u52a8 API \u63a5\u53e3\u670d\u52a1\n")),(0,a.kt)("p",null,"\u901a\u5e38\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"modern serve")," \u547d\u4ee4\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u542f\u7528\u5e94\u7528\u5de5\u7a0b, \u9700\u8981\u63d0\u524d\u6267\u884c ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/commands/build"},(0,a.kt)("inlineCode",{parentName:"a"},"build"))," \u547d\u4ee4\u6784\u5efa\u51fa\u5bf9\u5e94\u4ea7\u7269\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5e94\u7528\u5c06\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:8080")," \u542f\u52a8\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"server.port")," \u4fee\u6539 Server \u7aef\u53e3\u53f7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default defineConfig({\n  server: {\n    port: 8081,\n  },\n});\n")))}m.isMDXComponent=!0}}]);