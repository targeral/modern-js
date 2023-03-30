(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_apis_app_hooks_src_index__mdx"],{81813:function(s,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var r in e)Object.defineProperty(s,r,{enumerable:!0,get:e[r]})}(e,{frontmatter:function(){return l},toc:function(){return i},title:function(){return c},default:function(){return a}});var n=r("12151"),o=r("21447");let l={title:"index.[tj]s",sidebar_position:4},i=[],c="index.[tj]s";function t(s){let e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",ol:"ol",li:"li",div:"div",button:"button",pre:"pre",span:"span"},(0,o.useMDXComponents)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.h1,{id:"indextjs",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#indextjs",children:"#"}),"index.[tj]s"]}),"\n",(0,n.jsx)(e.p,{children:"应用项目自定义路由入口标识。"}),"\n",(0,n.jsxs)(e.p,{children:["通常情况下 ",(0,n.jsx)(e.a,{href:"/apis/app/hooks/src/app.html",children:(0,n.jsx)(e.code,{children:"src/App.[tj]sx, src/[entry]/App.[tj]sx"})})," 钩子文件已经能满足我们的需求，当我们需要在 ",(0,n.jsx)(e.code,{children:"bootstrap"})," 之前添加自定义行为或者完全接管 webpack 打包入口时，可以在 ",(0,n.jsx)(e.code,{children:"src"})," 或者入口目录下放置 ",(0,n.jsx)(e.code,{children:"index.[tj]s"}),"。 下面有分两种情况进行讨论:"]}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"在 bootstrap 之前添加自定义行为："}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["只需要 ",(0,n.jsx)(e.code,{children:"src/index.[tj]s"})," 默认导出函数:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:"modern-code-title",children:"src/index.js"}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ReactDOM "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react-dom/client'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { bootstrap } "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (App"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"React"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"ComponentType"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// do something before bootstrap..."})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"bootstrap"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(App"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'root'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"undefined"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ReactDOM);"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.ol,{start:"2",children:["\n",(0,n.jsx)(e.li,{children:"完全接管 webpack 入口:"}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["当 ",(0,n.jsx)(e.code,{children:"src/index.[tj]sx?"})," 下没有默认导出函数时，该文件即为真正的 webpack 打包入口文件, 可以直接像使用 create-react-app 等脚手架一样组织代码:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:"modern-code-title",children:"src/index.jsx"}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" React "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ReactDOM "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react-dom/client'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" App "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./App'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"ReactDOM"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".createRoot"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"document"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".getElementById"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'root'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".render"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"App"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />);"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]})]})}var a=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.useMDXComponents)(),s.components);return e?(0,n.jsx)(e,Object.assign({},s,{children:(0,n.jsx)(t,s)})):t(s)}}}]);