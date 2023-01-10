"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7498],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),o=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=o(n),d=r,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var o=2;o<l;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var a=n(18249),r=(n(52983),n(44993));const l={toc:[{value:"\u5bf9\u8c61\u5f62\u5f0f",id:"\u5bf9\u8c61\u5f62\u5f0f",level:4},{value:"\u51fd\u6570\u5f62\u5f0f",id:"\u51fd\u6570\u5f62\u5f0f",level:4}]};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"ArrayOrNot<HtmlInjectTag | HtmlInjectTagHandler>")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,r.kt)("p",null,"\u6dfb\u52a0\u548c\u4fee\u6539\u6700\u7ec8\u6ce8\u5165\u5230 HTML \u9875\u9762\u7684\u6807\u7b7e\u3002"),(0,r.kt)("h4",{id:"\u5bf9\u8c61\u5f62\u5f0f"},"\u5bf9\u8c61\u5f62\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface HtmlInjectTag {\n  tag: string;\n  attrs?: Record<string, string | boolean | null | undefined>;\n  children?: string;\n  /** @default false */\n  hash?: boolean | string | ((url: string, hash: string) => string);\n  /** @default true */\n  publicPath?: boolean | string | ((url: string, publicPath: string) => string);\n  /** @default false */\n  append?: boolean;\n  /**\n   * \u4ec5\u5bf9\u4e8e\u5141\u8bb8\u5305\u542b\u5728 head \u4e2d\u7684\u5143\u7d20\u4f1a\u9ed8\u8ba4\u542f\u7528\n   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head#see_also}\n   */\n  head?: boolean;\n}\n")),(0,r.kt)("p",null,"\u5bf9\u8c61\u5f62\u5f0f\u7684\u914d\u7f6e\u9879\u53ef\u4ee5\u7528\u4e8e\u63cf\u8ff0\u9700\u8981\u6ce8\u5165\u7684\u6807\u7b7e\uff0c\u5e76\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570\u63a7\u5236\u6ce8\u5165\u7684\u4f4d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    assetPrefix: '//example.com/'\n  },\n  html: {\n    tags: [\n      {\n        tag: 'script',\n        attrs: { src: 'a.js' },\n        head: true,\n        append: true,\n        publicPath: true,\n        hash: true,\n      },\n    ],\n  },\n};\n")),(0,r.kt)("p",null,"\u8fd9\u6837\u7684\u914d\u7f6e\u5c06\u4f1a\u5728 HTML \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," \u6700\u540e\u6dfb\u52a0\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," \u6807\u7b7e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    \x3c!-- some other headTags... --\x3e\n    <script src="//example.com/a.js?8327ec63"><\/script>\n  </head>\n  <body>\n    \x3c!-- some other bodyTags... --\x3e\n  </body>\n</html>\n')),(0,r.kt)("p",null,"\u6807\u7b7e\u6700\u7ec8\u7684\u63d2\u5165\u4f4d\u7f6e\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"append")," \u9009\u9879\u51b3\u5b9a\uff0c\u4e24\u4e2a\u914d\u7f6e\u76f8\u540c\u7684\u5143\u7d20\u5c06\u88ab\u63d2\u5165\u5230\u76f8\u540c\u533a\u57df\uff0c\u5e76\u4e14\u7ef4\u6301\u5f7c\u6b64\u4e4b\u95f4\u7684\u76f8\u5bf9\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u6807\u7b7e\u4e2d\u8868\u793a\u5916\u90e8\u8d44\u6e90\u6587\u4ef6\u8def\u5f84\u7684\u5b57\u6bb5\u4f1a\u53d7\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"publicPath")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," \u9009\u9879\u7684\u5f71\u54cd\uff0c\n\u8fd9\u4e9b\u5b57\u6bb5\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," \u6807\u7b7e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"link")," \u6807\u7b7e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"href"),"\u3002"),(0,r.kt)("p",null,"\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"publicPath")," \u4f1a\u8ba9\u6807\u7b7e\u4e2d\u8868\u793a\u8def\u5f84\u7684\u5c5e\u6027\u88ab\u62fc\u63a5\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"output.assetPrefix")," \u5b57\u6bb5\u3002\n\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," \u5b57\u6bb5\u4f1a\u8ba9\u6587\u4ef6\u540d\u540e\u591a\u51fa\u4e00\u4e2a\u54c8\u5e0c\u67e5\u8be2\u7528\u4e8e\u63a7\u5236\u6d4f\u89c8\u5668\u7f13\u5b58\uff0c\u54c8\u5e0c\u5b57\u7b26\u4e32\u4e0e HTML \u6587\u4ef6\u4ea7\u7269\u7684\u54c8\u5e0c\u503c\u76f8\u540c\u3002"),(0,r.kt)("p",null,"\u7528\u6237\u4e5f\u53ef\u4ee5\u5411\u8fd9\u4e24\u4e2a\u914d\u7f6e\u4f20\u5165\u51fd\u6570\uff0c\u4ee5\u81ea\u884c\u63a7\u5236\u8def\u5f84\u62fc\u63a5\u7684\u903b\u8f91\u3002"),(0,r.kt)("h4",{id:"\u51fd\u6570\u5f62\u5f0f"},"\u51fd\u6570\u5f62\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export type HtmlInjectTagUtils = {\n  outputName: string;\n  publicPath: string;\n  hash: string;\n};\n\nexport type HtmlInjectTagHandler = (\n  tags: HtmlInjectTag[],\n  utils: HtmlInjectTagUtils,\n) => HtmlInjectTag[] | void;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"html.tags")," \u4e5f\u652f\u6301\u4f20\u5165\u56de\u8c03\u51fd\u6570\uff0c\u901a\u8fc7\u5728\u56de\u8c03\u4e2d\u7f16\u5199\u903b\u8f91\u53ef\u4ee5\u4efb\u610f\u4fee\u6539\u6807\u7b7e\u5217\u8868\uff0c\u5e38\u7528\u4e8e\u4fee\u6539\u6807\u7b7e\u5217\u8868\u6216\u662f\u5728\u63d2\u5165\u6807\u7b7e\u7684\u540c\u65f6\u786e\u4fdd\u5176\u76f8\u5bf9\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u56de\u8c03\u51fd\u6570\u63a5\u53d7 tags \u5217\u8868\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u9700\u8981\u4fee\u6539\u6216\u76f4\u63a5\u8fd4\u56de\u65b0\u7684 tags \u6570\u7ec4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  html: {\n    tags: [\n      tags => { tags.splice(0, 1); },\n      /* ^? \n       *   { tag: 'script', attrs: { src: 'b.js' } },\n       *   ... some other headTags\n       *   { tag: 'script', attrs: { src: 'c.js' } },\n       *   ... some other bodyTags\n       *   { tag: 'script', attrs: { src: 'a.js' }, head: false },\n       */\n      { tag: 'script', attrs: { src: 'a.js' }, head: false },\n      { tag: 'script', attrs: { src: 'b.js' }, append: false },\n      { tag: 'script', attrs: { src: 'c.js' } },\n      tags => [...tags, { tag: 'script', attrs: { src: 'd.js' } }],\n      /* ^? \n       *   ... some other headTags\n       *   { tag: 'script', attrs: { src: 'c.js' } },\n       *   ... some other bodyTags\n       *   { tag: 'script', attrs: { src: 'a.js' }, head: false },\n       */\n    ],\n  },\n};\n")),(0,r.kt)("p",null,"\u51fd\u6570\u5c06\u5728 HTML \u5904\u7406\u6d41\u7a0b\u7684\u6700\u540e\u88ab\u6267\u884c\uff0c\u5373\u5982\u4e0b\u7684\u4f8b\u5b50\u4e2d\u4e0d\u7ba1\u56de\u8c03\u51fd\u6570\u5728\u914d\u7f6e\u9879\u4e2d\u7684\u4f4d\u7f6e\u5982\u4f55\uff0c\n\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"tags")," \u90fd\u4f1a\u5305\u542b\u914d\u7f6e\u9879\u4e2d\u6240\u6709\u7684\u5bf9\u8c61\u5f62\u5f0f\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u4e5f\u56e0\u6b64\u5728\u56de\u8c03\u4e2d\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"append")," ",(0,r.kt)("inlineCode",{parentName:"p"},"publicPath")," ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," \u7b49\u5c5e\u6027\u90fd\u4e0d\u4f1a\u751f\u6548\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u5c5e\u6027\u90fd\u5df2\u7ecf\u5206\u522b\u5e94\u7528\u5230\u4e86\u6807\u7b7e\u7684\u4f4d\u7f6e\u548c\u8def\u5f84\u5c5e\u6027\u3002"),(0,r.kt)("p",null,"\u4e8e\u662f\u6700\u7ec8\u4ea7\u7269\u5c06\u4f1a\u7c7b\u4f3c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    \x3c!-- some other headTags... --\x3e\n    <script src="//example.com/c.js"><\/script>\n    <script src="//example.com/d.js"><\/script>\n  </head>\n  <body>\n    \x3c!-- some other bodyTags... --\x3e\n    <script src="//example.com/a.js"><\/script>\n  </body>\n</html>\n')))}s.isMDXComponent=!0;const p={title:"html.tags",sidebar_label:"tags"},i=void 0,o={unversionedId:"configure/app/html/tags",id:"configure/app/html/tags",title:"html.tags",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 html.tags\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/html/tags.md",sourceDirName:"configure/app/html",slug:"/configure/app/html/tags",permalink:"/v2/docs/configure/app/html/tags",draft:!1,tags:[],version:"current",frontMatter:{title:"html.tags",sidebar_label:"tags"},sidebar:"configsAppSidebar",previous:{title:"tagsByEntries",permalink:"/v2/docs/configure/app/html/tags-by-entries"},next:{title:"templateByEntries",permalink:"/v2/docs/configure/app/html/template-by-entries"}},c={},m=[],u={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"BUILDER",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-html.html#html-tags"},"html.tags"),"\u3002")),(0,r.kt)(s,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);