"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9362],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=r,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(18249),r=(n(52983),n(44993));const o={toc:[{value:"Example",id:"example",level:4}]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type FilenameConfig = {\n  js?: string;\n  css?: string;\n  svg?: string;\n  font?: string;\n  image?: string;\n  media?: string;\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Development\nconst devDefaultFilename = {\n  js: '[name].js',\n  css: '[name].css',\n  svg: '[name].[contenthash:8].svg',\n  font: '[name].[contenthash:8][ext]',\n  image: '[name].[contenthash:8][ext]',\n  media: '[name].[contenthash:8][ext]',\n};\n\n// Production\nconst prodDefaultFilename = {\n  js: '[name].[contenthash:8].js',\n  css: '[name].[contenthash:8].css',\n  svg: '[name].[contenthash:8].svg',\n  font: '[name].[contenthash:8][ext]',\n  image: '[name].[contenthash:8][ext]',\n  media: '[name].[contenthash:8][ext]',\n};\n")),(0,r.kt)("p",null,"Sets the filename of dist files."),(0,r.kt)("p",null,"After the production build, there will be a hash in the middle of the filename by default. You can disable this behavior through the ",(0,r.kt)("inlineCode",{parentName:"p"},"output.disableFilenameHash")," config."),(0,r.kt)("p",null,"Detail:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"js"),": The name of the JavaScript file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"css"),": The name of the CSS style file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"svg"),": The name of the SVG image."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"font"),": The name of the font file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"image"),": The name of a non-SVG image."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"media"),": The name of a media asset, such as a video.")),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"Set the name of the JavaScript file to ",(0,r.kt)("inlineCode",{parentName:"p"},"[name]_script.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    filename: {\n      js:\n        process.env.NODE_ENV === 'production'\n          ? '[name]_script.[contenthash:8].js'\n          : '[name]_script.js',\n    },\n  },\n};\n")))}i.isMDXComponent=!0;const l={title:"output.filename",sidebar_label:"filename"},p=void 0,s={unversionedId:"configure/app/output/filename",id:"configure/app/output/filename",title:"output.filename",description:"This configuration is Modern.js Builder configuration, more detail can see output.filename\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/output/filename.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/filename",permalink:"/v2/en/docs/configure/app/output/filename",draft:!1,tags:[],version:"current",frontMatter:{title:"output.filename",sidebar_label:"filename"},sidebar:"configsAppSidebar",previous:{title:"externals",permalink:"/v2/en/docs/configure/app/output/externals"},next:{title:"legalComments",permalink:"/v2/en/docs/configure/app/output/legal-comments"}},u={},c=[],m={toc:c};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"BUILDER",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, more detail can see ",(0,r.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-filename"},"output.filename"),"\u3002")),(0,r.kt)(i,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);