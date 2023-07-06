(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_api_config_config-build_mdx"],{20847:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var o,d=r("15169"),i=r("43932"),s=r("9880"),l=r("23169"),a=r("8635");function t(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",p:"p",pre:"pre",h3:"h3",blockquote:"blockquote"},(0,l.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"build-config",children:["Build Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-config",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"builderconfig",children:["builderConfig",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderconfig",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Used to customize the configurations of Modern.js Builder. For complete configurations, please refer to ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/index.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - API"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, change the output directory to ",(0,s.jsx)(n.code,{children:"doc_dist"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  doc: {\n    builderConfig: {\n      output: {\n        distPath: {\n          root: 'doc_dist',\n        },\n      },\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"default-config",children:["Default Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-config",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["If you need to see the default ",(0,s.jsx)(n.code,{children:"builderConfig"}),", you can add the ",(0,s.jsx)(n.code,{children:"DEBUG=builder"})," parameter when running the ",(0,s.jsx)(n.code,{children:"modern dev"})," or ",(0,s.jsx)(n.code,{children:"modern build"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"DEBUG=builder modern dev\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After execution, the ",(0,s.jsx)(n.code,{children:"builder.config.js"})," file is created in the ",(0,s.jsx)(n.code,{children:"doc_build"})," directory, which contains the complete ",(0,s.jsx)(n.code,{children:"builderConfig"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Please refer to ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/debug/debug-mode.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - Debug Mode"})," for more information on how to debug the Builder."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"markdown",children:["markdown",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Configure MDX-related compilation abilities."}),"\n",(0,s.jsxs)(n.h3,{id:"markdownremarkplugins",children:["markdown.remarkPlugins",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdownremarkplugins",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"Array"})]}),"\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Configure the remark plugins. for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      remarkPlugins: [\n        [\n          require('remark-autolink-headings'),\n          {\n            behavior: 'wrap',\n          },\n        ],\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"markdownrehypeplugins",children:["markdown.rehypePlugins",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdownrehypeplugins",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"Array"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Configure the rehype plugin. for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      rehypePlugins: [\n        [\n          require('rehype-autolink-headings'),\n          {\n            behavior: 'wrap',\n          },\n        ],\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"markdowncheckdeadlinks",children:["markdown.checkDeadLinks",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdowncheckdeadlinks",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Whether to check for dead links. for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      checkDeadLinks: true,\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"After enabling this config, the framework will check the links in the document based on the conventional routing table. If there is an unreachable link, the build will throw an error and exit."}),"\n",(0,s.jsxs)(n.h3,{id:"markdownexperimentalmdxrs",children:["markdown.experimentalMdxRs",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdownexperimentalmdxrs",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Whether to use the Rust version of the MDX compiler, an experimental feature. For example:"}),"\n","\n",(0,s.jsx)(a.default,{}),"\n",(0,s.jsxs)(n.h3,{id:"markdownshowlinenumbers",children:["markdown.showLineNumbers",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdownshowlinenumbers",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Whether to display the line number of the code block. Defaults to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"markdownglobalcomponents",children:["markdown.globalComponents",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdownglobalcomponents",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Type: ",(0,s.jsx)(n.code,{children:"string[]"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Register component to the global scope, which will make it automatically available in every MDX file, without any import statements.For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\nimport path from 'path';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      globalComponents: [path.join(__dirname, 'src/src/components/Alert.tsx')],\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then you can use the ",(0,s.jsx)(n.code,{children:"Alert"})," component in any MDX file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mdx",meta:'title="test.mdx"',children:'<Alert type="info">This is a info alert</Alert>\n'})})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fdoc-tools-doc%2Fdocs%2Fen%2Fapi%2Fconfig%2Fconfig-build.mdx"]={toc:[{text:"builderConfig",id:"builderconfig",depth:2},{text:"Default Config",id:"default-config",depth:3},{text:"markdown",id:"markdown",depth:2},{text:"markdown.remarkPlugins",id:"markdownremarkplugins",depth:3},{text:"markdown.rehypePlugins",id:"markdownrehypeplugins",depth:3},{text:"markdown.checkDeadLinks",id:"markdowncheckdeadlinks",depth:3},{text:"markdown.experimentalMdxRs",id:"markdownexperimentalmdxrs",depth:3},{text:"markdown.showLineNumbers",id:"markdownshowlinenumbers",depth:3},{text:"markdown.globalComponents",id:"markdownglobalcomponents",depth:3}],title:"Build Config",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,i._)((0,d._)({},e),{children:(0,s.jsx)(t,(0,d._)({},e))})):t(e)}},8635:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return t}});var o,d=r("15169"),i=r("43932"),s=r("9880"),l=r("23169");function a(e){var n=Object.assign({pre:"pre",code:"code",div:"div",p:"p",a:"a",strong:"strong"},(0,l.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      experimentalMdxRs: true,\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTICE"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["The bottom layer of this function is based on the ",(0,s.jsx)(n.a,{href:"https://github.com/web-infra-dev/mdx-rs-binding",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/mdx-rs-binding"})," library developed by Modern.js Doc. The performance is ",(0,s.jsx)(n.strong,{children:"5 ~ 10"})," times higher than the JS version of the MDX compiler, but the JS version of the plugin is not yet supported. If you need to add a custom remark or rehype plugin, it is not recommended to enable this function.\n"]})})]})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fdoc-tools-doc%2Fdocs%2Fen%2Ffragments%2Fmdx-rs.mdx"]={toc:[],title:"",frontmatter:{}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,i._)((0,d._)({},e),{children:(0,s.jsx)(a,(0,d._)({},e))})):a(e)}}}]);