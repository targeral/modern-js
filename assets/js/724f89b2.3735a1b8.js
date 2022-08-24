"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[6074],{54852:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(49231);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=i(a),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},351:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=a(86215),r=(a(49231),a(54852));const o={title:"\u914d\u7f6e\u5e95\u5c42\u5de5\u5177",sidebar_label:"\u914d\u7f6e\u5e95\u5c42\u5de5\u5177",sidebar_position:8},l=void 0,p={unversionedId:"guides/usages/low-level",id:"guides/usages/low-level",title:"\u914d\u7f6e\u5e95\u5c42\u5de5\u5177",description:"\u4f7f\u7528\u65b9\u5f0f",source:"@site/docs/guides/usages/low-level.md",sourceDirName:"guides/usages",slug:"/guides/usages/low-level",permalink:"/docs/guides/usages/low-level",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u914d\u7f6e\u5e95\u5c42\u5de5\u5177",sidebar_label:"\u914d\u7f6e\u5e95\u5c42\u5de5\u5177",sidebar_position:8},sidebar:"guidesSidebar",previous:{title:"\u81ea\u5b9a\u4e49 HTML \u6a21\u677f",permalink:"/docs/guides/usages/html"},next:{title:"\u63d0\u5347\u7f16\u8bd1\u901f\u5ea6",permalink:"/docs/guides/usages/compile-speed"}},s={},i=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u5e95\u5c42\u914d\u7f6e\u660e\u7ec6",id:"\u5e95\u5c42\u914d\u7f6e\u660e\u7ec6",level:2}],d={toc:i};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)("p",null,"Modern.js \u5185\u90e8\u9ed8\u8ba4\u96c6\u6210\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://postcss.org/"},"PostCSS"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS")," \u7b49\u5de5\u5177\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u9ed8\u8ba4\u914d\u7f6e\u80fd\u591f\u6ee1\u8db3\u5927\u591a\u4e1a\u52a1\u5f00\u53d1\u9700\u6c42\u3002\u5f53\u6709\u7279\u6b8a\u9700\u6c42\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5e95\u5c42\u914d\u7f6e\u6765\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u4ee5\u914d\u7f6e Webpack \u4e3a\u4f8b\uff0c\u53ea\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u4e2d\u6dfb\u52a0 ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/config/tools/webpack"},(0,r.kt)("inlineCode",{parentName:"a"},"tools.webpack"))," \u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    webpack: config => {\n\n    }\n  }\n})\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tools")," \u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u914d\u7f6e\u90fd\u53ef\u4ee5\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"Function"),"\u3002"),(0,r.kt)("p",null,"\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," \u65f6\uff0c\u4f1a\u4e0e\u5185\u90e8\u9ed8\u8ba4\u914d\u7f6e\u8fdb\u884c\u5408\u5e76\uff0c\u5177\u4f53\u5408\u5e76\u7b56\u7565\u53c2\u8003\u5bf9\u5e94\u7684\u914d\u7f6e\u9009\u9879\u6587\u6863\uff08\u89c1\u4e0b\u8868\uff09\u3002"),(0,r.kt)("p",null,"\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," \u65f6\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u5185\u90e8\u7684\u9ed8\u8ba4\u914d\u7f6e\u5bf9\u8c61\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u8fd9\u4e2a\u5bf9\u8c61\u4e0d\u505a\u8fd4\u56de\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\u6216\u8005\u5408\u5e76\u540e\u7684\u5bf9\u8c61\u4f5c\u4e3a\u6700\u7ec8\u7ed3\u679c\u3002"),(0,r.kt)("h2",{id:"\u5e95\u5c42\u914d\u7f6e\u660e\u7ec6"},"\u5e95\u5c42\u914d\u7f6e\u660e\u7ec6"),(0,r.kt)("p",null,"\u76ee\u524d\u63d0\u4f9b\u7684\u5e95\u5c42\u914d\u7f6e\u5982\u4e0b\u8868\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5e95\u5c42\u5de5\u5177"),(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DevServer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apis/app/config/tools/dev-server"},"tools.devServer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Babel"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apis/app/config/tools/babel"},"tools.babel"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"styled-components"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apis/app/config/tools/styled-components"},"tools.styledComponents"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PostCSS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apis/app/config/tools/postcss"},"tools.postcss"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Less"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apis/app/config/tools/less"},"tools.less"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sass"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apis/app/config/tools/sass"},"tools.sass"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"webpack"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apis/app/config/tools/webpack"},"tools.webpack"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Minify CSS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apis/app/config/tools/minify-css"},"tools.minifyCss"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"terser"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apis/app/config/tools/terser"},"tools.terser"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lodash"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apis/app/config/tools/lodash"},"tools.lodash"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tailwind CSS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apis/app/config/tools/tailwindcss"},"tools.tailwind"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Autoprefixer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apis/app/config/tools/autoprefixer"},"tools.autoprefixer"))))))}c.isMDXComponent=!0}}]);