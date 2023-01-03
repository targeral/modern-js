"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2634],{44993:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>s});var r=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(t),s=a,k=u["".concat(p,".").concat(s)]||u[s]||d[s]||l;return t?r.createElement(k,i(i({ref:n},m),{},{components:t})):r.createElement(k,i({ref:n},m))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},48173:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(18249),a=(t(52983),t(44993));const l={sidebar_label:"microFrontend"},i="deploy.microFrontend",o={unversionedId:"configure/app/deploy/microFrontend",id:"configure/app/deploy/microFrontend",title:"deploy.microFrontend",description:"* \u7c7b\u578b\uff1aobject",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/deploy/microFrontend.md",sourceDirName:"configure/app/deploy",slug:"/configure/app/deploy/microFrontend",permalink:"/v2/docs/configure/app/deploy/microFrontend",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"microFrontend"},sidebar:"configsAppSidebar",previous:{title:"startUrl",permalink:"/v2/docs/configure/app/dev/start-url"},next:{title:"transformer",permalink:"/v2/docs/configure/app/testing/transformer"}},p={},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"enableHtmlEntry",id:"enablehtmlentry",level:3},{value:"externalBasicLibrary",id:"externalbasiclibrary",level:3}],m={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploymicrofrontend"},"deploy.microFrontend"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"object")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"{enableHtmlEntry: true, externalBasicLibrary: false}"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface MicroFrontend {\n  enableHtmlEntry?: boolean;\n  externalBasicLibrary?: boolean;\n  moduleApp?: string;\n}\n")),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy.microFrontend")," \u5c5e\u6027\u6765\u914d\u7f6e\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u7684\u4fe1\u606f\u3002"),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u9700\u8981\u5148\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u542f\u7528\u300c\u5fae\u524d\u7aef\u300d \u529f\u80fd\u3002")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default defineConfig({\n  deploy: {\n    microFrontend: {\n      enableHtmlEntry: true\n    }\n  }\n});\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,a.kt)("h3",{id:"enablehtmlentry"},"enableHtmlEntry"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"true"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u662f\u5426\u542f\u7528 html \u5165\u53e3\u7684\u529f\u80fd\uff0c\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5c06\u5b50\u5e94\u7528\u6784\u5efa\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"HTML")," \u6a21\u5f0f\uff0cGarfish \u652f\u6301\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"html")," \u5165\u53e3\uff0c\u53ef\u4ee5\u5f00\u542f\u5f00\u9009\u9879\uff0c\u4f53\u9a8c\u5bf9\u5e94\u529f\u80fd\uff0c\u4e3a HTML \u5165\u53e3\u65f6\u76f4\u63a5\u5c06\u5b50\u5e94\u7528 entry \u6307\u5411\u5b50\u5e94\u7528\u7684 html \u5373\u53ef")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", \u8868\u660e\u5b50\u5e94\u7528\u6784\u5efa\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"js"),"\uff0c\u6784\u5efa\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"js")," \u540e\u5b50\u5e94\u7528\u65e0\u6cd5\u72ec\u7acb\u8fd0\u884c\uff0c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"JS")," \u5165\u53e3\u65f6\u5c06\u5b50\u5e94\u7528\u7684\u5165\u53e3\u6587\u4ef6\u6307\u5411\u5b50\u5e94\u7528\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"JS")))),(0,a.kt)("h3",{id:"externalbasiclibrary"},"externalBasicLibrary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"false")))),(0,a.kt)("p",null,"\u662f\u5426 ",(0,a.kt)("inlineCode",{parentName:"p"},"external")," \u57fa\u7840\u5e93\uff0c\u5f53\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u5f53\u524d\u5b50\u5e94\u7528\u5c06\u4f1a ",(0,a.kt)("inlineCode",{parentName:"p"},"external"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"react"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"react-dom"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"EdenX")," \u4e3b\u5e94\u7528\u4f1a\u81ea\u52a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"setExternal")," \u8fd9\u4e24\u4e2a\u57fa\u7840\u5e93\uff0c\u5982\u679c\u5176\u4ed6\u7c7b\u578b\u7684\u6846\u67b6\u8bf7\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Garfish.setExternal")," \u589e\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"react"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"react-dom")," \u4f9d\u8d56"))}d.isMDXComponent=!0}}]);