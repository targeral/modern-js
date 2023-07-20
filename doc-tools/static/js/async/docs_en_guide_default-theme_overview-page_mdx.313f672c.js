(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_guide_default-theme_overview-page_mdx"],{86197:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var i,o=r("15169"),d=r("43932"),a=r("9880"),t=r("23169");function s(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",img:"img",h3:"h3",pre:"pre",code:"code"},(0,t.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"overview-page",children:["Overview Page",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#overview-page",children:"#"})]}),"\n",(0,a.jsxs)(n.h2,{id:"effect",children:["Effect",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#effect",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Modern.js Doc has a built-in preview page, the effect is as follows:"}),"\n",(0,a.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/edenx-doc/Xnip2023-02-17_16-55-07.jpg"}),"\n",(0,a.jsxs)(n.h2,{id:"how-to-use",children:["How to use",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-use",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Generating the preview page requires the following two steps:"}),"\n",(0,a.jsxs)(n.h3,{id:"1-create-a-new-directory-and-configure-frontmatter",children:["1. Create a new directory and configure frontmatter",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-create-a-new-directory-and-configure-frontmatter",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"For example, create the following directories and files"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"├── docs\n│   ├── index.md\n│   ├── api\n│   │   ├── index.md\n│   │   ├── preview1.md\n│   │   └── preview2.md\n// ...\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We add the following to ",(0,a.jsx)(n.code,{children:"api/index.md"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-md",children:"---\noverview: true\n---\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"2-configure-sidebar",children:["2. Configure ",(0,a.jsx)(n.code,{children:"sidebar"}),(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-configure-sidebar",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"The structure of the overview page will be generated based on the config of the sidebar. For example, we add the following sidebar config:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      sidebar: {\n        '/api/': [\n          {\n            text: 'Group1',\n            items: [\n              // Note: Documents need to be created in advance\n              '/api/foo',\n              '/api/bar',\n            ],\n          },\n          {\n            text: 'Group2',\n            items: ['/api/xxx', '/api/yyy'],\n          },\n        ],\n      },\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"The framework will extract all the files under the api directory and the h1 and h2 titles in them, and generate a overview page according to the group info in the sidebar config."})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fdoc-tools-doc%2Fdocs%2Fen%2Fguide%2Fdefault-theme%2Foverview-page.mdx"]={toc:[{text:"Effect",id:"effect",depth:2},{text:"How to use",id:"how-to-use",depth:2},{text:"1. Create a new directory and configure frontmatter",id:"1-create-a-new-directory-and-configure-frontmatter",depth:3},{text:"2. Configure sidebar",id:"2-configure-sidebar",depth:3}],title:"Overview Page",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,d._)((0,o._)({},e),{children:(0,a.jsx)(s,(0,o._)({},e))})):s(e)}}}]);