"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7565],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(18249),a=(n(52983),n(44993));const o={title:"Fetch Data",sidebar_position:3},i=void 0,s={unversionedId:"guides/basic-features/data-fetch",id:"guides/basic-features/data-fetch",title:"Fetch Data",description:"Modern.js provides out of the box fetching data capabilities, developers can use these APIs to develop in CSR and SSR environments isomorphic.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/basic-features/data-fetch.md",sourceDirName:"guides/basic-features",slug:"/guides/basic-features/data-fetch",permalink:"/v2/en/docs/guides/basic-features/data-fetch",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Fetch Data",sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"Builder",permalink:"/v2/en/docs/guides/basic-features/builder"},next:{title:"CSS-in-JS",permalink:"/v2/en/docs/guides/basic-features/css/css-in-js"}},d={},l=[{value:"useLoader(Old)",id:"useloaderold",level:2},{value:"Route Loader",id:"route-loader",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Modern.js provides out of the box fetching data capabilities, developers can use these APIs to develop in CSR and SSR environments isomorphic."),(0,a.kt)("p",null,"It should be noted that these APIs do not help applications to initiate requests, but help developers better manage the relationship between data and routing."),(0,a.kt)("h2",{id:"useloaderold"},"useLoader(Old)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"useLoader"))," is an API in Modern.js old version. The API is a React Hook specially provided for SSR applications, allowing developers to fetch data in components."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"CSR don't need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"useLoader")," to fetch data.")),(0,a.kt)("p",null,"Here is the simplest example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLoader } from '@modern-js/runtime';\n\nexport default () => {\n  const { data } = useLoader(async () => {\n    console.log('fetch in useLoader');\n\n    // No real request is sent here, just a hard coding data is returned.\n    // In a real project, the data obtained from the remote end should be returned.\n    return {\n      name: 'modern.js',\n    };\n  });\n\n  return <div>Hello, {data?.name}</div>;\n};\n")),(0,a.kt)("p",null,"After the above code starts, visit the page. You can see that the log is printed at terminal, but not at console in browser."),(0,a.kt)("p",null,"This is because Modern.js server-side rendering, the data returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"useLoader")," is collected and injected into the HTML of the response. If SSR rendering succeeds, the following code snippet can be seen in the HTML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<script>\nwindow._SSR_DATA = {};\n<\/script>\n")),(0,a.kt)("p",null,"In this global variable, every piece of data is recorded, and this data will be used first in the process of rendering on the browser side. If the data does not exist, the ",(0,a.kt)("inlineCode",{parentName:"p"},"useLoader")," function will be re-executed."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"During the build phase, Modern.js will automatically generate a Loader ID for each ",(0,a.kt)("inlineCode",{parentName:"p"},"useLoader")," and inject it into the JS bundle of SSR and CSR, which is used to associate Loader and data.")),(0,a.kt)("p",null,"Compared with ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," in the Next.js, get data in advance before rendering. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"useLoader"),", you can get the data required by the local UI in the component without passing the data layer by layer. Similarly, it will not add redundant logic to the outermost data acquisition function because different routes require different data requests. Of course, ",(0,a.kt)("inlineCode",{parentName:"p"},"useLoader")," also has some problems, such as the difficulty of Treeshaking server-level code, and the need for one more pre-render at the server level."),(0,a.kt)("p",null,"Modern.js in the new version, a new Loader solution is designed. The new solution solves these problems and can cooperate with ",(0,a.kt)("strong",{parentName:"p"},"nested routing")," to optimize page performance."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Detailed APIs can be found at ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/core/use-loader"},"useLoader"),".")),(0,a.kt)("h2",{id:"route-loader"},"Route Loader"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Stay tuned.")))}c.isMDXComponent=!0}}]);