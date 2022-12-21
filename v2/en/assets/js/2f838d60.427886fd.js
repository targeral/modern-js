"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1310],{44993:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(18249),o=(r(52983),r(44993));const a={title:"*.[server|node].[tj]sx",sidebar_position:8},i=void 0,s={unversionedId:"apis/app/hooks/src/server",id:"apis/app/hooks/src/server",title:"*.[server|node].[tj]sx",description:"Used in application projects to place server side code, it generally has the following two functions\uff1a",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/apis/app/hooks/src/server.md",sourceDirName:"apis/app/hooks/src",slug:"/apis/app/hooks/src/server",permalink:"/v2/en/docs/apis/app/hooks/src/server",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"*.[server|node].[tj]sx",sidebar_position:8},sidebar:"apisAppSidebar",previous:{title:"**/*.stories.[tj]sx",permalink:"/v2/en/docs/apis/app/hooks/src/stories"},next:{title:"**/*.[tj]s",permalink:"/v2/en/docs/apis/app/hooks/api/functions/api"}},p={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Used in application projects to place server side code, it generally has the following two functions\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When ",(0,o.kt)("inlineCode",{parentName:"p"},"*.tsx")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"*. [server|node].tsx")," coexist, rendering on the server side will give preference to the ",(0,o.kt)("inlineCode",{parentName:"p"},"*. [server|node].tsx")," file instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"*.tsx")," file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When using ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/data-fetch"},"data loader"),", the server-side dependencies need to be re-exported from this file"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// routes/user/avatar.tsx\nimport { useLoaderData } from '@modern-js/runtime/router';\nimport { readFile } from './utils.server';\n\ntype ProfileData = { /* some type declarations */ }\n\nexport const loader = async(): ProfileData => {\n  const profile = await readFile('profile.json');\n  return profile;\n}\n\nexport default function UserPage() {\n  const profileData = useLoaderData() as ProfileData;\n  return <div>{profileData}</div>;\n}\n\n// routes/user/utils.server.ts\nexport * from 'fs-extra';\n")))}u.isMDXComponent=!0}}]);