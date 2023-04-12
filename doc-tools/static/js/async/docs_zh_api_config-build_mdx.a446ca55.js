(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_api_config-build_mdx"],{36441:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return o},toc:function(){return a},default:function(){return l}});var d=r("12151"),s=r("23169"),i={},o="构建配置",a=[{text:"builderConfig",depth:2,id:"builderconfig"},{text:"markdown",depth:2,id:"markdown"},{text:"markdown.remarkPlugins",depth:3,id:"markdown.remarkplugins"},{text:"markdown.rehypePlugins",depth:3,id:"markdown.rehypeplugins"},{text:"markdown.checkDeadLinks",depth:3,id:"markdown.checkdeadlinks"}];function c(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",div:"div",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"构建配置",children:["构建配置",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#构建配置",children:"#"})]}),"\n",(0,d.jsxs)(n.h2,{id:"builderconfig",children:["builderConfig",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderconfig",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["自定义 Modern.js Builder 配置，详见 ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/api/index.html",target:"_blank",rel:"noopener noreferrer",children:"官网配置"}),"。"]}),"\n",(0,d.jsxs)(n.h2,{id:"markdown",children:["markdown",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Type: ",(0,d.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"配置 MDX 相关的编译能力。"}),"\n",(0,d.jsxs)(n.h3,{id:"markdown.remarkplugins",children:["markdown.remarkPlugins",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown.remarkplugins",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Type: ",(0,d.jsx)(n.code,{children:"Array"})]}),"\n",(0,d.jsxs)(n.li,{children:["Default: ",(0,d.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"配置 remark 插件。比如："}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      remarkPlugins: [\n        [\n          require('remark-autolink-headings'),\n          {\n            behavior: 'wrap',\n          },\n        ],\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,d.jsxs)(n.h3,{id:"markdown.rehypeplugins",children:["markdown.rehypePlugins",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown.rehypeplugins",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Type: ",(0,d.jsx)(n.code,{children:"Array"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"配置 rehype 插件。比如："}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      rehypePlugins: [\n        [\n          require('rehype-autolink-headings'),\n          {\n            behavior: 'wrap',\n          },\n        ],\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,d.jsxs)(n.h3,{id:"markdown.checkdeadlinks",children:["markdown.checkDeadLinks",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown.checkdeadlinks",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(n.li,{children:["Default: ",(0,d.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"是否检查死链。比如："}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      checkDeadLinks: true,\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,d.jsx)(n.p,{children:"开启这个配置后，框架会基于约定式路由表对文档中的链接进行检查，若出现无法访问的链接，构建会抛出错误并退出。"}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive warning",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:"不过我们并不推荐在开发阶段使用这个功能，因为它会禁用底层构建工具 webpack 的物理缓存，导致项目启动速度变慢。"})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(c,e)})):c(e)}}}]);