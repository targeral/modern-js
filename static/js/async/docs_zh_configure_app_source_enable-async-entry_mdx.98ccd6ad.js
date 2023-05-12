(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_enable-async-entry_mdx"],{96958:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return a},toc:function(){return i},default:function(){return l}});var s=r("9880"),c=r("23169"),d={sidebar_label:"enableAsyncEntry"},a="source.enableAsyncEntry",i=[{text:"背景知识",depth:2,id:"背景知识"},{text:"示例",depth:2,id:"示例"}];function o(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",div:"div",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourceenableasyncentry",children:["source.enableAsyncEntry",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceenableasyncentry",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"该选项用于 webpack 模块联邦（Module Federation）场景。"}),"\n",(0,s.jsx)(n.p,{children:"开启此选项后，Modern.js 会通过 Dynamic Import 来包裹自动生成的入口文件（asynchronous boundary），使页面代码可以消费模块联邦生成的远程模块。"}),"\n",(0,s.jsxs)(n.h2,{id:"背景知识",children:["背景知识",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#背景知识",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"如果不了解 webpack 模块联邦，请先阅读 Module Federation 官方文档："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://webpack.docschina.org/concepts/module-federation/",target:"_blank",rel:"noopener noreferrer",children:"中文文档"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://webpack.js.org/concepts/module-federation",target:"_blank",rel:"noopener noreferrer",children:"英文文档"})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"首先，在配置文件中开启此选项："}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    enableAsyncEntry: true,\n  },\n});\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["然后执行 ",(0,s.jsx)(n.code,{children:"dev"})," 或 ",(0,s.jsx)(n.code,{children:"build"})," 命令，可以看到 Modern.js 自动生成的文件变为以下结构："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"node_modules\n  └─ .modern-js\n     └─ main\n        ├─ bootstrap.jsx  # 真正的入口代码\n        ├─ index.js      # 异步入口文件（asynchronous boundary）\n        └─ index.html\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["其中 ",(0,s.jsx)(n.code,{children:"index.js"})," 的内容如下："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"import('./bootstrap.jsx');\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"此时，就可以在当前页面中消费任意的远程模块了。"}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["Modern.js 未对 webpack 的 ModuleFederationPlugin 进行封装，请通过 ",(0,s.jsx)(n.a,{href:"/configure/app/tools/webpack-chain",children:"tools.webpackChain"})," 自行配置 ModuleFederationPlugin。"]}),"\n"]})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);