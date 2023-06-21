(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_guide_advanced_extend-build_mdx"],{26246:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var d,o=r("15169"),s=r("43932"),i=r("9880"),c=r("23169");function l(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",div:"div"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"构建能力扩展",children:["构建能力扩展",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#构建能力扩展",children:"#"})]}),"\n",(0,i.jsxs)(n.h2,{id:"modernjs-builder",children:["Modern.js Builder",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-builder",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js Doc 底层基于 ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder"})," 的 Rspack 模式来进行文档构建。"]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js Builder 提供了丰富的构建配置，你可以使用 ",(0,i.jsx)(n.a,{href:"/api/config/config-build#builderconfig",children:"doc.builderConfig"})," 来自定义这些配置项。比如，将产物目录修改为 ",(0,i.jsx)(n.code,{children:"doc_dist"}),"："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    builderConfig: {\n      output: {\n        distPath: {\n          root: 'doc_dist',\n        },\n      },\n      tools: {\n        rspack(options) {\n          // 修改 rspack 的配置\n        },\n      },\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,i.jsxs)(n.p,{children:["你可以通过 ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/api/index.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - API"})," 的文档来了解更多的配置项。"]}),"\n",(0,i.jsxs)(n.p,{children:["注意，Modern.js Doc 仅支持 Rspack 打包工具，因此一些与 webpack 相关的配置项将无法生效，比如 ",(0,i.jsx)(n.code,{children:"tools.webpack"}),"。当然，你可以通过 ",(0,i.jsx)(n.code,{children:"tools.rspack"})," 来修改 Rspack 的配置。"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"mdx-编译插件",children:["MDX 编译插件",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mdx-编译插件",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["在框架中 MDX 的编译基于 ",(0,i.jsx)(n.a,{href:"https://github.com/unifiedjs/unified",target:"_blank",rel:"noopener noreferrer",children:"unified"})," 完成，你可以通过 ",(0,i.jsx)(n.code,{children:"markdown"})," 配置来添加相关的编译插件。比如"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      remarkPlugins: [\n        [\n          require('remark-autolink-headings'),\n          {\n            behavior: 'wrap',\n          },\n        ],\n      ],\n      rehypePlugins: [require('rehype-slug')],\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/doc-tools-doc/docs/zh/guide/advanced/extend-build.mdx"]={toc:[{text:"Modern.js Builder",id:"modernjs-builder",depth:2},{text:"MDX 编译插件",id:"mdx-编译插件",depth:2}],title:"构建能力扩展",frontmatter:{}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,s._(o._({},e),{children:(0,i.jsx)(l,o._({},e))})):l(e)}}}]);