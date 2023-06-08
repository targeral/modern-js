(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_guide_advanced_extend-build_mdx"],{85515:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var o in n)Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}(n,{frontmatter:function(){return d},title:function(){return s},toc:function(){return t},default:function(){return a}});var r=o("9880"),i=o("23169"),d={},s="Build Extension",t=[{text:"Modern.js Builder",depth:2,id:"modernjs-builder"},{text:"MDX Compilation",depth:2,id:"mdx-compilation"}];function c(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"build-extension",children:["Build Extension",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-extension",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"modernjs-builder",children:["Modern.js Builder",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-builder",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js Doc builds documents based on the Rspack mode of ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js Builder provides flexible build configurations, you can use ",(0,r.jsx)(n.a,{href:"/api/config/config-build#builderconfig",children:"doc.builderConfig"})," to customize these configurations. For example, change the output directory to ",(0,r.jsx)(n.code,{children:"doc_dist"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    builderConfig: {\n      output: {\n        distPath: {\n          root: 'doc_dist',\n        },\n      },\n      tools: {\n        rspack(options) {\n          // 修改 rspack 的配置\n        },\n      },\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,r.jsxs)(n.p,{children:["You can learn more configurations through the ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/index.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - API"})," documentation."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that Modern.js Doc only supports Rspack bundler, so some configurations related to webpack will not work, such as ",(0,r.jsx)(n.code,{children:"tools.webpack"}),". Of course, you can use the ",(0,r.jsx)(n.code,{children:"tools.rspack"})," to customize the Rspack config."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"mdx-compilation",children:["MDX Compilation",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mdx-compilation",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The compilation of MDX in the framework is based on ",(0,r.jsx)(n.a,{href:"https://github.com/unifiedjs/unified",target:"_blank",rel:"noopener noreferrer",children:"unified"}),", and you can add related compilation plugins through ",(0,r.jsx)(n.code,{children:"markdown"})," configuration. for example\n:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      remarkPlugins: [\n        [\n          require('remark-autolink-headings'),\n          {\n            behavior: 'wrap',\n          },\n        ],\n      ],\n      rehypePlugins: [require('rehype-slug')],\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);