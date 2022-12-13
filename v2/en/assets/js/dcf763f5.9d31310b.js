"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6667],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(18249),o=(n(52983),n(44993));const i={toc:[{value:"Object Type",id:"object-type",level:3},{value:"Function Type",id:"function-type",level:3}]};function a(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Object | Function | undefined")),(0,o.kt)("li",{parentName:"ul"},"Default:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const defaultTerserOptions = {\n  terserOptions: {\n    mangle: {\n      safari10: true,\n    },\n  },\n};\n")),(0,o.kt)("p",null,"When building for production, Builder will minimize the JavaScript code through ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/terser-webpack-plugin"},"terser-webpack-plugin"),". The config of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/terser-webpack-plugin"},"terser-webpack-plugin")," can be modified via ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.terser"),"."),(0,o.kt)("h3",{id:"object-type"},"Object Type"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.terser")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Object")," type, it will be merged with the default config via ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign"),"."),(0,o.kt)("p",null,"For example, to exclude some files from minification:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    terser: {\n      exclude: /\\/excludes/,\n    },\n  },\n};\n")),(0,o.kt)("h3",{id:"function-type"},"Function Type"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.terser")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Function")," type, the default config is passed in as the first parameter, the config object can be modified directly, or a value can be returned as the final result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    terser: opts => {\n      opts.exclude = /\\/excludes/;\n    },\n  },\n};\n")))}a.isMDXComponent=!0;const l={title:"tools.terser",sidebar_label:"terser"},p=void 0,c={unversionedId:"configure/app/tools/terser",id:"configure/app/tools/terser",title:"tools.terser",description:"This configuration is Modern.js Builder configuration, more detail can see tools.terser\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/tools/terser.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/terser",permalink:"/v2/en/docs/configure/app/tools/terser",draft:!1,tags:[],version:"current",frontMatter:{title:"tools.terser",sidebar_label:"terser"},sidebar:"configsAppSidebar",previous:{title:"tailwindcss",permalink:"/v2/en/docs/configure/app/tools/tailwindcss"},next:{title:"tsChecker",permalink:"/v2/en/docs/configure/app/tools/ts-checker"}},s={},u=[],d={toc:u};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, more detail can see ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-tools.html#tools-terser"},"tools.terser"),"\u3002")),(0,o.kt)(a,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);