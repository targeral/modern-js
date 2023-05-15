(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_abstract_mdx"],{6768:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var r in e)Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}(e,{frontmatter:function(){return i},title:function(){return o},toc:function(){return d},default:function(){return l}});var s=r("9880"),c=r("23169"),i={sidebar_position:1},o="为什么需要生成器插件",d=[];function t(n){var e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",ol:"ol",li:"li"},(0,c.useMDXComponents)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"为什么需要生成器插件",children:["为什么需要生成器插件",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#为什么需要生成器插件",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["Modern.js 提供了应用、模块和 Monorepo 三种工程方案，并通过使用 ",(0,s.jsx)(e.code,{children:"@modern-js/create"})," 工具可以创建三种工程方案的初始项目模板，初始项目模板会提供基本的代码开发环境、简单的示例代码及配置等。"]}),"\n",(0,s.jsx)(e.p,{children:"Modern.js 提供的初始化模板具有通用性，能满足一些通用的项目开发需求。"}),"\n",(0,s.jsx)(e.p,{children:"当你深度使用 Modern.js 时，必然会发现每次创建的项目都会进行一些针对自身项目的特定的相似改动，比如修改示例代码、增加一些配置、开启某些功能等。"}),"\n",(0,s.jsxs)(e.p,{children:["生成器插件可以帮你将这些针对个人或团队特定的改动沉淀下来，在执行 ",(0,s.jsx)(e.code,{children:"npx @modern-js/create"})," 只需简单的带上 ",(0,s.jsx)(e.code,{children:"--plugin"})," 参数即可避免每次创建完项目都需重复性修改项目的工作。"]}),"\n",(0,s.jsxs)(e.p,{children:["生成器插件是在 Modern.js 提供的初始化模板项目的基础上，提供对模板进行增加、删除、修改的方法，并通过快捷的方式修改 ",(0,s.jsx)(e.code,{children:"package.json"}),"、",(0,s.jsx)(e.code,{children:"modernConfig"})," 配置和开启功能等操作。"]}),"\n",(0,s.jsx)(e.p,{children:"生成器插件提供了两种定制化方式："}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"扩展工程方案：直接对默认提供的三大工程方案进行定制化"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"创建工程方案场景：基于默认的三大工程方案创建对应的工程方案场景"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"接下来将会逐步介绍如何使用和开发生成器插件。"})]})}var l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,c.useMDXComponents)(),n.components).wrapper;return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(t,n)})):t(n)}}}]);