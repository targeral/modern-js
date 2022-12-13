"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4302],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(52983);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=s,y=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},92422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=n(18249),s=(n(52983),n(44993));const a={toc:[{value:"assetsRetry.max",id:"assetsretrymax",level:3},{value:"assetsRetry.domain",id:"assetsretrydomain",level:3},{value:"assetsRetry.type",id:"assetsretrytype",level:3},{value:"assetsRetry.test",id:"assetsretrytest",level:3},{value:"assetsRetry.crossOrigin",id:"assetsretrycrossorigin",level:3},{value:"assetsRetry.onRetry",id:"assetsretryonretry",level:3},{value:"assetsRetry.onSuccess",id:"assetsretryonsuccess",level:3},{value:"assetsRetry.onFail",id:"assetsretryonfail",level:3}]};function o(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Type: ",(0,s.kt)("inlineCode",{parentName:"li"},"Object"))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"output.assetsRetry")," \u7528\u4e8e\u914d\u7f6e\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25\u65f6\u7684\u91cd\u8bd5\u903b\u8f91\u3002\u914d\u7f6e\u7c7b\u578b\u5982\u4e0b:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export type AssetsRetryHookContext = {\n  times: number;\n  domain: string;\n  url: string;\n  tagName: string;\n};\n\nexport type AssetsRetryOptions = {\n  type?: string[];\n  domain?: string[];\n  max?: number;\n  test?: string | ((url: string) => boolean);\n  crossOrigin?: boolean;\n  onRetry?: (options: AssetsRetryHookContext) => void;\n  onSuccess?: (options: AssetsRetryHookContext) => void;\n  onFail?: (options: AssetsRetryHookContext) => void;\n};\n")),(0,s.kt)("p",null,"\u9ed8\u8ba4\u503c\u5982\u4e0b:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export const defaultAssetsRetryOptions: AssetsRetryOptions = {\n  type: ['script', 'link', 'img'],\n  domain: [],\n  max: 3,\n  test: '',\n  crossOrigin: false,\n  onRetry: () => {},\n  onSuccess: () => {},\n  onFail: () => {},\n};\n")),(0,s.kt)("h3",{id:"assetsretrymax"},"assetsRetry.max"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Type: ",(0,s.kt)("inlineCode",{parentName:"li"},"number")),(0,s.kt)("li",{parentName:"ul"},"Default: ",(0,s.kt)("inlineCode",{parentName:"li"},"3"))),(0,s.kt)("p",null,"\u5355\u4e2a\u8d44\u6e90\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u3002\u6bd4\u5982\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    assetsRetry: {\n      max: 3,\n    },\n  },\n};\n")),(0,s.kt)("h3",{id:"assetsretrydomain"},"assetsRetry.domain"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Type: ",(0,s.kt)("inlineCode",{parentName:"li"},"string[]")),(0,s.kt)("li",{parentName:"ul"},"Default: ",(0,s.kt)("inlineCode",{parentName:"li"},"[]"))),(0,s.kt)("p",null,"\u6307\u5b9a\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25\u65f6\u7684\u91cd\u8bd5\u57df\u540d\uff0c\u5982\u679c\u4e3a\u7a7a\u5219\u4f7f\u7528\u5f53\u524d\u9875\u9762\u7684\u57df\u540d\u3002\u6bd4\u5982\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    assetsRetry: {\n      domain: ['https://cdn1.example.com', 'https://cdn2.example.com'],\n    },\n  },\n};\n")),(0,s.kt)("h3",{id:"assetsretrytype"},"assetsRetry.type"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Type: ",(0,s.kt)("inlineCode",{parentName:"li"},"string[]")),(0,s.kt)("li",{parentName:"ul"},"Default: ",(0,s.kt)("inlineCode",{parentName:"li"},"['script', 'link', 'img']"))),(0,s.kt)("p",null,"\u53ef\u91cd\u8bd5\u7684\u8d44\u6e90\u7c7b\u578b\u3002\u6bd4\u5982\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    assetsRetry: {\n      type: ['script', 'link'],\n    },\n  },\n};\n")),(0,s.kt)("h3",{id:"assetsretrytest"},"assetsRetry.test"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Type: ",(0,s.kt)("inlineCode",{parentName:"li"},"string | ((url: string) => boolean) | undefined")),(0,s.kt)("li",{parentName:"ul"},"Default: ",(0,s.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,s.kt)("p",null,"\u5339\u914d\u8d44\u6e90 URL \u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u6216\u51fd\u6570\uff0c\u9ed8\u8ba4\u5339\u914d\u6240\u6709\u8d44\u6e90\u3002\u6bd4\u5982\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    assetsRetry: {\n      test: /cdn\\.example\\.com/,\n    },\n  },\n};\n")),(0,s.kt)("h3",{id:"assetsretrycrossorigin"},"assetsRetry.crossOrigin"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Type: ",(0,s.kt)("inlineCode",{parentName:"li"},"undefined | boolean")),(0,s.kt)("li",{parentName:"ul"},"Default: false")),(0,s.kt)("p",null,"\u7528\u4e8e\u5411 ",(0,s.kt)("inlineCode",{parentName:"p"},"<script>")," \u8d44\u6e90\u6807\u7b7e\u4e2d\u6ce8\u5165 crossorigin \u5c5e\u6027\uff0c\u4f20\u5165 true \u5219\u4f1a\u542f\u7528\u9ed8\u8ba4\u503c anonymous\u3002\u6bd4\u5982\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    assetsRetry: {\n      crossOrigin: true,\n    },\n  },\n};\n")),(0,s.kt)("h3",{id:"assetsretryonretry"},"assetsRetry.onRetry"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Type: ",(0,s.kt)("inlineCode",{parentName:"li"},"undefined | (options: AssetsRetryHookContext) => void"))),(0,s.kt)("p",null,"\u8d44\u6e90\u91cd\u8bd5\u65f6\u7684\u56de\u8c03\u51fd\u6570\u3002\u6bd4\u5982\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    assetsRetry: {\n      onRetry: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n")),(0,s.kt)("h3",{id:"assetsretryonsuccess"},"assetsRetry.onSuccess"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Type: ",(0,s.kt)("inlineCode",{parentName:"li"},"undefined | (options: AssetsRetryHookContext) => void"))),(0,s.kt)("p",null,"\u8d44\u6e90\u91cd\u8bd5\u6210\u529f\u65f6\u7684\u56de\u8c03\u51fd\u6570\u3002\u6bd4\u5982\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    assetsRetry: {\n      onSuccess: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n")),(0,s.kt)("h3",{id:"assetsretryonfail"},"assetsRetry.onFail"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Type: ",(0,s.kt)("inlineCode",{parentName:"li"},"undefined | (options: AssetsRetryHookContext) => void"))),(0,s.kt)("p",null,"\u8d44\u6e90\u91cd\u8bd5\u8d85\u8fc7\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u65f6\u7684\u56de\u8c03\u51fd\u6570\u3002\u6bd4\u5982\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    assetsRetry: {\n      onFail: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n")))}o.isMDXComponent=!0;const l={title:"output.assetsRetry",sidebar_label:"assetsRetry"},i=void 0,p={unversionedId:"configure/app/output/assets-retry",id:"configure/app/output/assets-retry",title:"output.assetsRetry",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 output.assetsRetry\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/output/assets-retry.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/assets-retry",permalink:"/v2/docs/configure/app/output/assets-retry",draft:!1,tags:[],version:"current",frontMatter:{title:"output.assetsRetry",sidebar_label:"assetsRetry"},sidebar:"configsAppSidebar",previous:{title:"assetPrefix",permalink:"/v2/docs/configure/app/output/asset-prefix"},next:{title:"charset",permalink:"/v2/docs/configure/app/output/charset"}},u={},m=[],c={toc:m};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"BUILDER",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,s.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-assetsretry"},"output.assetsRetry"),"\u3002")),(0,s.kt)(o,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);