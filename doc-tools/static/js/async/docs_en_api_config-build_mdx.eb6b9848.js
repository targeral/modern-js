(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_api_config-build_mdx"],{76518:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return o},toc:function(){return a},default:function(){return c}});var i=r("12151"),d=r("23169"),s={},o="Build Config",a=[{text:"builderConfig",depth:2,id:"builderconfig"},{text:"markdown",depth:2,id:"markdown"},{text:"markdown.remarkPlugins",depth:3,id:"markdown.remarkplugins"},{text:"markdown.rehypePlugins",depth:3,id:"markdown.rehypeplugins"},{text:"markdown.checkDeadLinks",depth:3,id:"markdown.checkdeadlinks"}];function l(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",div:"div",button:"button",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"build-config",children:["Build Config",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-config",children:"#"})]}),"\n",(0,i.jsxs)(n.h2,{id:"builderconfig",children:["builderConfig",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderconfig",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Customize Modern.js Builder configuration, see ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/api/index.html",target:"_blank",rel:"noopener noreferrer",children:"official website configuration"})," for details."]}),"\n",(0,i.jsxs)(n.h2,{id:"markdown",children:["markdown",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configure MDX-related compilation abilities."}),"\n",(0,i.jsxs)(n.h3,{id:"markdown.remarkplugins",children:["markdown.remarkPlugins",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown.remarkplugins",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"Array"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configure the remark plugins. for example:"}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      remarkPlugins: [\n        [\n          require('remark-autolink-headings'),\n          {\n            behavior: 'wrap',\n          },\n        ],\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"markdown.rehypeplugins",children:["markdown.rehypePlugins",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown.rehypeplugins",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"Array"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configure the rehype plugin. for example:"}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      rehypePlugins: [\n        [\n          require('rehype-autolink-headings'),\n          {\n            behavior: 'wrap',\n          },\n        ],\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"markdown.checkdeadlinks",children:["markdown.checkDeadLinks",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown.checkdeadlinks",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Whether to check for dead links. for example:"}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      checkDeadLinks: true,\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,i.jsx)(n.p,{children:"After enabling this config, the framework will check the links in the document based on the conventional routing table. If there is an unreachable link, the build will throw an error and exit."}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive warning",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:"However, we do not recommend using this feature during the development environment, because it will disable the physical cache of the build tool webpack, resulting in slower project startup."})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);