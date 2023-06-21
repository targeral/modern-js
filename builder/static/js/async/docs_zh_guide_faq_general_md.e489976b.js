(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_faq_general_md"],{1537:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return t}});var d,s=n("15169"),i=n("43932"),l=n("9880"),a=n("23169");function o(e){var r=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",hr:"hr",blockquote:"blockquote"},(0,a.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.h1,{id:"通用类问题",children:["通用类问题",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#通用类问题",children:"#"})]}),"\n",(0,l.jsxs)(r.h3,{id:"modernjs-builder-和-modernjs-的关系？",children:["Modern.js Builder 和 Modern.js 的关系？",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-builder-和-modernjs-的关系？",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"Modern.js 的构建能力是基于 Modern.js Builder 实现的。"}),"\n",(0,l.jsx)(r.p,{children:"在开发 Modern.js 的过程中，我们把 Builder 作为独立的模块进行设计，并明确划分 Builder 与 Modern.js 的职责界限。\n因此，Builder 可以脱离 Modern.js 框架使用，被单独应用于其他框架或场景。"}),"\n",(0,l.jsx)(r.hr,{}),"\n",(0,l.jsxs)(r.h3,{id:"builder-能否用于构建工具库或组件库？",children:["Builder 能否用于构建工具库或组件库？",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-能否用于构建工具库或组件库？",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"Builder 专注于解决 Web 应用构建场景，我们不推荐你使用 Builder 来构建工具库或组件库。"}),"\n",(0,l.jsxs)(r.p,{children:["如果需要构建工具库或组件库，推荐使用 ",(0,l.jsx)(r.a,{href:"https://modernjs.dev/module-tools",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Module 解决方案"}),"。"]}),"\n",(0,l.jsx)(r.hr,{}),"\n",(0,l.jsxs)(r.h3,{id:"builder-是否会接入-turbopack？",children:["Builder 是否会接入 Turbopack？",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-是否会接入-turbopack？",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["Builder 已经在对接 Rspack，并且目前 Turbopack 仅支持在 Next.js 中使用，因此 Builder 暂时没有接入 ",(0,l.jsx)(r.a,{href:"https://turbo.build/pack",target:"_blank",rel:"noopener noreferrer",children:"Turbopack"})," 的计划。"]}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsxs)(r.p,{children:["你可以在 Rspack 的 ",(0,l.jsx)(r.a,{href:"https://www.rspack.dev/zh/guide/introduction.html",target:"_blank",rel:"noopener noreferrer",children:"介绍"})," 中查看 Rspack 与 Turbopack 的对比。"]}),"\n"]}),"\n",(0,l.jsx)(r.hr,{}),"\n",(0,l.jsxs)(r.h3,{id:"builder-是否会接入-vite？",children:["Builder 是否会接入 Vite？",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-是否会接入-vite？",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.a,{href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer",children:"Vite"})," 是一个非常优秀的工具，但 Builder 的目标是使用 Rspack 替换 webpack，Rspack 能提供极致的编译速度，同时能保持开发环境和生产环境的打包行为一致。"]}),"\n",(0,l.jsx)(r.p,{children:"Builder 会聚焦于从 webpack 演进至 Rspack 的过程，因此不会接入 Vite。"}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsxs)(r.p,{children:["你可以在 Rspack 的 ",(0,l.jsx)(r.a,{href:"https://www.rspack.dev/zh/guide/introduction.html",target:"_blank",rel:"noopener noreferrer",children:"介绍"})," 中查看 Rspack 与 Vite 的对比。"]}),"\n"]})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/builder-doc/docs/zh/guide/faq/general.md"]={toc:[{text:"Modern.js Builder 和 Modern.js 的关系？",id:"modernjs-builder-和-modernjs-的关系？",depth:3},{text:"Builder 能否用于构建工具库或组件库？",id:"builder-能否用于构建工具库或组件库？",depth:3},{text:"Builder 是否会接入 Turbopack？",id:"builder-是否会接入-turbopack？",depth:3},{text:"Builder 是否会接入 Vite？",id:"builder-是否会接入-vite？",depth:3}],title:"通用类问题",frontmatter:{}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return r?(0,l.jsx)(r,i._(s._({},e),{children:(0,l.jsx)(o,s._({},e))})):o(e)}}}]);