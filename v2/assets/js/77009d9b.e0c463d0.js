"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8015],{44993:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(f,p(p({ref:n},c),{},{components:t})):r.createElement(f,p({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(18249),a=(t(52983),t(44993));const o={sidebar_position:1},p="dev / start",i={unversionedId:"apis/app/commands/dev",id:"apis/app/commands/dev",title:"dev / start",description:"modern dev \u547d\u4ee4\u7528\u4e8e\u542f\u52a8\u4e00\u4e2a\u672c\u5730\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u5bf9\u6e90\u4ee3\u7801\u8fdb\u884c\u5f00\u53d1\u73af\u5883\u7f16\u8bd1\uff0c\u540c\u65f6\u76d1\u542c\u6e90\u6587\u4ef6\u53d8\u5316\uff0c\u9ed8\u8ba4\u652f\u6301\u6a21\u5757\u70ed\u66f4\u65b0\u548c React Fast Refresh\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/commands/dev.md",sourceDirName:"apis/app/commands",slug:"/apis/app/commands/dev",permalink:"/v2/docs/apis/app/commands/dev",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apisAppSidebar",previous:{title:"\u547d\u4ee4",permalink:"/v2/docs/apis/app/commands/"},next:{title:"new",permalink:"/v2/docs/apis/app/commands/new"}},l={},s=[{value:"\u7f16\u8bd1\u90e8\u5206\u9875\u9762",id:"\u7f16\u8bd1\u90e8\u5206\u9875\u9762",level:2},{value:"\u901a\u8fc7\u53c2\u6570\u6307\u5b9a\u9875\u9762",id:"\u901a\u8fc7\u53c2\u6570\u6307\u5b9a\u9875\u9762",level:3}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dev--start"},"dev / start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern dev / modern start [options]\n\n\u672c\u5730\u5f00\u53d1\u547d\u4ee4\n\nOptions:\n  -e --entry <entry>    \u6307\u5b9a\u5165\u53e3\uff0c\u53ea\u7f16\u8bd1\u7279\u5b9a\u7684\u9875\u9762\n  -c --config <config>  \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u4ee5\u4e3a\u76f8\u5bf9\u8def\u5f84\u6216\u7edd\u5bf9\u8def\u5f84\n  -h, --help            \u663e\u793a\u547d\u4ee4\u5e2e\u52a9\n  --analyze             \u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef\uff0c\u67e5\u770b\u5404\u4e2a\u6a21\u5757\u6253\u5305\u540e\u7684\u5927\u5c0f\n  --api-only            \u4ec5\u542f\u52a8 API \u63a5\u53e3\u670d\u52a1\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"modern dev")," \u547d\u4ee4\u7528\u4e8e\u542f\u52a8\u4e00\u4e2a\u672c\u5730\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u5bf9\u6e90\u4ee3\u7801\u8fdb\u884c\u5f00\u53d1\u73af\u5883\u7f16\u8bd1\uff0c\u540c\u65f6\u76d1\u542c\u6e90\u6587\u4ef6\u53d8\u5316\uff0c\u9ed8\u8ba4\u652f\u6301\u6a21\u5757\u70ed\u66f4\u65b0\u548c React Fast Refresh\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"modern start")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"modern dev")," \u547d\u4ee4\u7684\u522b\u540d\uff0c\u4e24\u8005\u7684\u529f\u80fd\u548c\u7528\u6cd5\u5b8c\u5168\u4e00\u81f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ modern dev\n\ninfo    Starting dev server...\ninfo    App running at:\n\n  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n")),(0,a.kt)("h2",{id:"\u7f16\u8bd1\u90e8\u5206\u9875\u9762"},"\u7f16\u8bd1\u90e8\u5206\u9875\u9762"),(0,a.kt)("p",null,"\u5728\u591a\u9875\u9762\uff08MPA\uff09\u9879\u76ee\u4e2d\uff0c\u53ef\u4ee5\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"--entry")," \u53c2\u6570\u6765\u6307\u5b9a\u7f16\u8bd1\u5176\u4e2d\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u9875\u9762\u3002\u8fd9\u6837\u53ef\u4ee5\u53ea\u7f16\u8bd1\u9879\u76ee\u4e2d\u7684\u90e8\u5206\u4ee3\u7801\uff0c\u4ece\u800c\u63d0\u5347 dev \u542f\u52a8\u901f\u5ea6\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"modern dev --entry"),"\uff0c\u5728\u547d\u4ee4\u884c\u754c\u9762\u4e2d\u4f1a\u5c55\u793a\u5165\u53e3\u9009\u62e9\u6846\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ modern dev --entry\n\n? \u8bf7\u9009\u62e9\u9700\u8981\u6784\u5efa\u7684\u5165\u53e3\n\u276f \u25ef foo\n  \u25ef bar\n  \u25ef baz\n")),(0,a.kt)("p",null,"\u6bd4\u5982\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u5165\u53e3\uff0c\u90a3\u4e48\u53ea\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u5165\u53e3\u76f8\u5173\u7684\u4ee3\u7801\u4f1a\u8fdb\u884c\u7f16\u8bd1\uff0c\u5176\u4ed6\u9875\u9762\u7684\u4ee3\u7801\u5c06\u4e0d\u4f1a\u53c2\u4e0e\u6784\u5efa\u3002"),(0,a.kt)("h3",{id:"\u901a\u8fc7\u53c2\u6570\u6307\u5b9a\u9875\u9762"},"\u901a\u8fc7\u53c2\u6570\u6307\u5b9a\u9875\u9762"),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"--entry")," \u540e\u9762\u901a\u8fc7\u53c2\u6570\u6765\u6307\u5b9a\u9875\u9762\u540d\u79f0\uff0c\u591a\u4e2a\u9875\u9762\u7684\u540d\u79f0\u4f7f\u7528\u9017\u53f7\u5206\u9694\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7f16\u8bd1 foo \u9875\u9762\nmodern dev --entry foo\n\n# \u7f16\u8bd1 foo \u548c bar \u9875\u9762\nmodern dev --entry foo,bar\n")))}d.isMDXComponent=!0}}]);