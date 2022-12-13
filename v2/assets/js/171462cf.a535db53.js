"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4414],{44993:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||p;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},38361:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=t(18249),a=(t(52983),t(44993));const p={sidebar_position:7},o=void 0,i={unversionedId:"apis/app/commands/inspect",id:"apis/app/commands/inspect",title:"inspect",description:"modern inspect \u547d\u4ee4\uff0c\u7528\u4e8e\u67e5\u770b\u9879\u76ee\u7684 webpack \u5b8c\u6574\u914d\u7f6e\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/commands/inspect.md",sourceDirName:"apis/app/commands",slug:"/apis/app/commands/inspect",permalink:"/v2/docs/apis/app/commands/inspect",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"apisAppSidebar",previous:{title:"start",permalink:"/v2/docs/apis/app/commands/start"},next:{title:"upgrade",permalink:"/v2/docs/apis/app/commands/upgrade"}},c={},s=[{value:"\u6307\u5b9a\u73af\u5883",id:"\u6307\u5b9a\u73af\u5883",level:2},{value:"\u914d\u7f6e\u7c7b\u578b",id:"\u914d\u7f6e\u7c7b\u578b",level:2},{value:"SSR \u914d\u7f6e",id:"ssr-\u914d\u7f6e",level:3}],l={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Usage: modern inspect [options]\n\ninspect internal webpack config\n\nOptions:\n  --env <env>           \u67e5\u770b\u6307\u5b9a\u73af\u5883\u4e0b\u7684\u914d\u7f6e (default: "development")\n  --output <output>     \u6307\u5b9a\u5728 dist \u76ee\u5f55\u4e0b\u8f93\u51fa\u7684\u8def\u5f84 (default: "/")\n  --no-console          \u4e0d\u5728\u7ec8\u7aef\u4e2d\u8f93\u51fa\u5b8c\u6574\u7ed3\u679c\n  --verbose             \u5728\u7ed3\u679c\u4e2d\u5c55\u793a\u51fd\u6570\u7684\u5b8c\u6574\u5185\u5bb9\n  -c --config <config>  \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u4ee5\u4e3a\u76f8\u5bf9\u8def\u5f84\u6216\u7edd\u5bf9\u8def\u5f84\n  -h, --help            \u663e\u793a\u547d\u4ee4\u5e2e\u52a9\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"modern inspect")," \u547d\u4ee4\uff0c\u7528\u4e8e\u67e5\u770b\u9879\u76ee\u7684 webpack \u5b8c\u6574\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u547d\u4ee4 ",(0,a.kt)("inlineCode",{parentName:"p"},"npx modern inspect"),"\uff0c\u4f1a\u5c06 webpack \u914d\u7f6e\u8f93\u51fa\u5728\u7ec8\u7aef\u754c\u9762\uff0c\u540c\u65f6\u4e5f\u4f1a\u5728\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u751f\u6210\u4e00\u4efd ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.client.inspect.js")," \u6587\u4ef6\uff0c\u5f00\u53d1\u8005\u53ef\u624b\u52a8\u6253\u5f00\u67e5\u770b\u3002"),(0,a.kt)("h2",{id:"\u6307\u5b9a\u73af\u5883"},"\u6307\u5b9a\u73af\u5883"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f1a\u8f93\u51fa\u5f00\u53d1\u73af\u5883\u7684 webpack \u914d\u7f6e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," \u9009\u9879\u6765\u8f93\u51fa\u751f\u4ea7\u73af\u5883\u7684\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"modern inspect --env production\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u7c7b\u578b"},"\u914d\u7f6e\u7c7b\u578b"),(0,a.kt)("h3",{id:"ssr-\u914d\u7f6e"},"SSR \u914d\u7f6e"),(0,a.kt)("p",null,"\u5982\u679c\u9879\u76ee\u5f00\u542f\u4e86 SSR \u80fd\u529b\uff0c\u5219\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u4f1a\u53e6\u5916\u751f\u6210\u4e00\u4efd ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.ssr.inspect.js")," \u6587\u4ef6\uff0c\u5bf9\u5e94 SSR \u6784\u5efa\u65f6\u7684 webpack \u914d\u7f6e\u3002"))}d.isMDXComponent=!0}}]);