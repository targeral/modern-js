"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6538],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||s[g]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(18249),o=(n(52983),n(44993));const a={sidebar_position:4},i="createSubProject",p={unversionedId:"guides/topic-detail/generator/plugin/api/new/createSubProject",id:"guides/topic-detail/generator/plugin/api/new/createSubProject",title:"createSubProject",description:"Create subprojects and only support Monorepo engineering solutions.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/generator/plugin/api/new/createSubProject.md",sourceDirName:"guides/topic-detail/generator/plugin/api/new",slug:"/guides/topic-detail/generator/plugin/api/new/createSubProject",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/new/createSubProject",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guidesSidebar",previous:{title:"enableFunc",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/new/enableFunc"},next:{title:"install",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/npm/install"}},l={},u=[{value:"solution",id:"solution",level:2},{value:"params",id:"params",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"createsubproject"},"createSubProject"),(0,o.kt)("p",null,"Create subprojects and only support Monorepo engineering solutions."),(0,o.kt)("p",null,"This method is available on the ",(0,o.kt)("inlineCode",{parentName:"p"},"onForged")," API parameter."),(0,o.kt)("p",null,"Its type is defined as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export enum SubSolution {\n  MWA = 'mwa',\n  MWATest = 'mwa_test',\n  Module = 'module',\n  InnerModule = 'inner_module',\n}\nexport type ForgedAPI = {\n  createSubProject: (\n    solution: SubSolution,\n    params: Record<string, unknown>,\n  ) => Promise<void>;\n  ...\n};\n")),(0,o.kt)("h2",{id:"solution"},"solution"),(0,o.kt)("p",null,"Sub-project engineering solution name."),(0,o.kt)("h2",{id:"params"},"params"),(0,o.kt)("p",null,"For other parameters of creating subprojects, please refer to",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/config/monorepo"},"Monorepo Create Sub Project"),"."))}s.isMDXComponent=!0}}]);