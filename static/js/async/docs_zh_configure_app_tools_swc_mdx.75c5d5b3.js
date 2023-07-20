(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_swc_mdx"],{49172:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var r,d=s("15169"),o=s("43932"),i=s("9880"),c=s("23169");function t(e){var n=Object.assign({p:"p",code:"code",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["首先，你需要执行 ",(0,i.jsx)(n.code,{children:"pnpm run new"})," 启用 SWC 编译："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"? 请选择你想要的操作 启用可选功能\n? 请选择功能名称 启用「SWC 编译」\n"})}),"\n",(0,i.jsxs)(n.p,{children:["执行完成后，你只需在 ",(0,i.jsx)(n.code,{children:"modern.config.ts"})," 文件中注册 Modern.js 的 SWC 插件，即可启用 SWC 编译和压缩能力。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { swcPlugin } from '@modern-js/plugin-swc';\n\nexport default defineConfig({\n  plugins: [appTools(), swcPlugin()],\n});\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fshared%2FenableSwc.md"]={toc:[],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,o._)((0,d._)({},e),{children:(0,i.jsx)(t,(0,d._)({},e))})):t(e)}},2707:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return h}});var r,d=s("15169"),o=s("43932"),i=s("9880"),c=s("23169"),t=s("10469"),l=s("49172");function a(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",h2:"h2",div:"div",p:"p",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"toolsswc",children:["tools.swc",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsswc",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"类型："})," ",(0,i.jsx)(n.code,{children:"Object"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"默认值："})," ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"介绍",children:["介绍",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"})]}),"\n","\n",(0,i.jsx)(t.default,{}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsx)(n.p,{children:"在使用 Rspack 作为打包工具时，默认会使用 SWC 进行转译和压缩，因此你不需要再安装和配置 SWC 插件。"}),"\n",(0,i.jsx)(n.p,{children:"如果你使用 Rspack 时配置了当前的 SWC 插件，它将不会产生任何效果。\n"})]})]}),"\n",(0,i.jsxs)(n.h2,{id:"安装",children:["安装",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装",children:"#"})]}),"\n","\n",(0,i.jsx)(l.default,{}),"\n",(0,i.jsxs)(n.h2,{id:"配置项",children:["配置项",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置项",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["你可以通过 ",(0,i.jsx)(n.code,{children:"tools.swc"})," 配置项来设置 SWC 编译行为。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  tools: {\n    swc: {\n      jsMinify: {\n        compress: {},\n        mangle: true,\n      },\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["完整配置项请参考 ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/plugins/plugin-swc.html#%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - SWC 插件配置"}),"。"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fconfigure%2Fapp%2Ftools%2Fswc.mdx"]={toc:[{text:"介绍",id:"介绍",depth:2},{text:"安装",id:"安装",depth:2},{text:"配置项",id:"配置项",depth:2}],title:"tools.swc",frontmatter:{sidebar_label:"swc"}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,o._)((0,d._)({},e),{children:(0,i.jsx)(a,(0,d._)({},e))})):a(e)}}}]);