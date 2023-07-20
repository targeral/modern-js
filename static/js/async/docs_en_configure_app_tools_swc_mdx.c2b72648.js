(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_swc_mdx"],{97530:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d}});var r,o=s("15169"),i=s("43932"),t=s("9880"),l=s("23169");function c(e){var n=Object.assign({p:"p",code:"code",pre:"pre"},(0,l.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["First, you need to execute ",(0,t.jsx)(n.code,{children:"pnpm run new"})," to enable the SWC compile:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"? Please select the operation you want: Enable features\n? Please select the feature name: Enable SWC Compile\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After the installation, please register the SWC plugin in the ",(0,t.jsx)(n.code,{children:"modern.config.ts"})," file, then the SWC compilation and compression will be enabled."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { swcPlugin } from '@modern-js/plugin-swc';\n\nexport default defineConfig({\n  plugins: [appTools(), swcPlugin()],\n});\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fen%2Fshared%2FenableSwc.md"]={toc:[],title:"",frontmatter:{}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,(0,i._)((0,o._)({},e),{children:(0,t.jsx)(c,(0,o._)({},e))})):c(e)}},72339:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return h}});var r,o=s("15169"),i=s("43932"),t=s("9880"),l=s("23169"),c=s("90603"),d=s("97530");function a(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",h2:"h2",div:"div",p:"p",pre:"pre"},(0,l.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"toolsswc",children:["tools.swc",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsswc",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Object"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"introduction",children:["Introduction",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n","\n",(0,t.jsx)(c.default,{}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsx)(n.p,{children:"When using Rspack as the bundler, SWC will be used for transpiling and compression by default, so you don't need to install or configure the SWC plugin."}),"\n",(0,t.jsx)(n.p,{children:"If you have configured the current SWC plugin when using Rspack, it will not have any effect.\n"})]})]}),"\n",(0,t.jsxs)(n.h2,{id:"install",children:["Install",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n","\n",(0,t.jsx)(d.default,{}),"\n",(0,t.jsxs)(n.h2,{id:"config",children:["Config",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["You can set the SWC compilation behavior through the ",(0,t.jsx)(n.code,{children:"tools.swc"})," config."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  tools: {\n    swc: {\n      jsMinify: {\n        compress: {},\n        mangle: true,\n      },\n    },\n  },\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For config details, please refer to ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/plugins/plugin-swc.html#config",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - SWC Plugin Configuration"}),"."]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fen%2Fconfigure%2Fapp%2Ftools%2Fswc.mdx"]={toc:[{text:"Introduction",id:"introduction",depth:2},{text:"Install",id:"install",depth:2},{text:"Config",id:"config",depth:2}],title:"tools.swc",frontmatter:{sidebar_label:"swc"}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,(0,i._)((0,o._)({},e),{children:(0,t.jsx)(a,(0,o._)({},e))})):a(e)}}}]);