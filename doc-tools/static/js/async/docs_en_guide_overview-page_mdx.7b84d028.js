(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_guide_overview-page_mdx"],{85768:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},toc:function(){return o},title:function(){return s},default:function(){return c}});var a=r("9880"),i=r("23169"),d=void 0,o=[{id:"effect",text:"Effect",depth:2},{id:"how-to-use",text:"How to use",depth:2},{id:"1-create-a-new-directory-and-configure-frontmatter",text:"1. Create a new directory and configure frontmatter",depth:3},{id:"2-configure-sidebar",text:"2. Configure sidebar",depth:3}],s="Overview Page";function t(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",h3:"h3",div:"div",pre:"pre",code:"code"},(0,i.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"overview-page",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#overview-page",children:"#"}),"Overview Page"]}),"\n",(0,a.jsxs)(n.h2,{id:"effect",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#effect",children:"#"}),"Effect"]}),"\n",(0,a.jsx)(n.p,{children:"Modern.js Doc has a built-in preview page, the effect is as follows:"}),"\n",(0,a.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/edenx-doc/Xnip2023-02-17_16-55-07.jpg"}),"\n",(0,a.jsxs)(n.h2,{id:"how-to-use",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-use",children:"#"}),"How to use"]}),"\n",(0,a.jsx)(n.p,{children:"Generating the preview page requires the following two steps:"}),"\n",(0,a.jsxs)(n.h3,{id:"1-create-a-new-directory-and-configure-frontmatter",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-create-a-new-directory-and-configure-frontmatter",children:"#"}),"1. Create a new directory and configure frontmatter"]}),"\n",(0,a.jsx)(n.p,{children:"For example, create the following directories and files"}),"\n",(0,a.jsxs)(n.div,{className:"language-bash",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-bash",children:"├── docs\n│   ├── index.md\n│   ├── api\n│   │   ├── index.md\n│   │   ├── preview1.md\n│   │   └── preview2.md\n// ...\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["We add the following to ",(0,a.jsx)(n.code,{children:"api/index.md"}),":"]}),"\n",(0,a.jsxs)(n.div,{className:"language-md",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-md",children:"---\noverview: true\n---\n"})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"2-configure-sidebar",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-configure-sidebar",children:"#"}),"2. Configure ",(0,a.jsx)(n.code,{children:"sidebar"})]}),"\n",(0,a.jsx)(n.p,{children:"The structure of the overview page will be generated based on the config of the sidebar. For example, we add the following sidebar config:"}),"\n",(0,a.jsxs)(n.div,{className:"language-ts",children:[(0,a.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      sidebar: {\n        '/api/': [\n          {\n            text: 'Group1',\n            items: [\n              // Note: Documents need to be created in advance\n              '/api/foo',\n              '/api/bar',\n            ],\n          },\n          {\n            text: 'Group2',\n            items: ['/api/xxx', '/api/yyy'],\n          },\n        ],\n      },\n    },\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"The framework will extract all the files under the api directory and the h1 and h2 titles in them, and generate a overview page according to the group info in the sidebar config."})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(t,e)})):t(e)}}}]);