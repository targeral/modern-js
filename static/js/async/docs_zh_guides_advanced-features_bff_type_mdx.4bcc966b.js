(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_bff_type_mdx"],{79445:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return a},default:function(){return o}});var s=r("9880"),d=r("23169"),i={sidebar_position:2,title:"函数写法 & 框架写法"},c="函数写法 & 框架写法",a=[{text:"函数写法",depth:2,id:"函数写法"},{text:"框架写法",depth:2,id:"框架写法"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",div:"div",code:"code",h2:"h2",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"函数写法-&-框架写法",children:["函数写法 & 框架写法",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数写法-&-框架写法",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["运行时框架支持也是 ",(0,s.jsx)(n.strong,{children:"BFF"})," 中重要的一环。Modern.js 支持通过插件扩展 BFF 的运行时框架，并提供了一系列内置插件，开发者可以直接使用对应框架的约定和生态。"]}),"\n",(0,s.jsxs)(n.p,{children:["插件中兼容了这些框架大部分的规范，每一种框架都需要提供两类扩展写法 BFF 函数的方式，分别是",(0,s.jsx)(n.strong,{children:"函数写法"}),"和",(0,s.jsx)(n.strong,{children:"框架写法"}),"。"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["当前 ",(0,s.jsx)(n.code,{children:"api/"})," 目录结构是否为框架写法由对应的插件决定，Modern.js 并不关心。"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"函数写法",children:["函数写法",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数写法",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当插件认为当前为函数写法时，必须支持在 ",(0,s.jsx)(n.code,{children:"api/_app.ts"})," 中编写中间件，用来扩展 BFF 函数。"]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js 会收集 ",(0,s.jsx)(n.code,{children:"api/_app.ts"})," 中的中间件，并传递给插件，由插件将中间件注入运行时，例如："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { hook } from '@modern-js/runtime/server';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(myMiddleware);\n});\n"})})})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["不同插件的中间件的写法不一定相同，详情可见",(0,s.jsx)(n.a,{href:"/guides/advanced-features/bff/frameworks",children:"运行时框架"}),"。"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"框架写法",children:["框架写法",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#框架写法",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"框架写法是一种使用框架结构来扩展 BFF 函数的方式。和函数写法相比，框架写法虽然能够利用更多框架的结构，在复杂场景下让整个 BFF Server 更加清晰，但也相的更加复杂，需要关心更多框架层面的内容。"}),"\n",(0,s.jsxs)(n.p,{children:["框架写法中，所有的 BFF 函数都需要写在 ",(0,s.jsx)(n.code,{children:"api/lambda/"})," 目录下，并且无法使用钩子文件 ",(0,s.jsx)(n.code,{children:"_app.[tj]s"}),"。"]}),"\n",(0,s.jsx)(n.p,{children:"多数情况下，函数写法就能覆盖大多数 BFF 函数的定制需求。只有当你的项目服务端逻辑比较复杂，代码需要分层，或者需要使用更多框架的元素时，才需要使用框架写法。"}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["不同插件框架写法的目录结构不一定相同，详情可见",(0,s.jsx)(n.a,{href:"/guides/advanced-features/bff/frameworks",children:"运行时框架"}),"。"]}),"\n"]})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}}}]);