(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_basic_builder-config_mdx"],{51648:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return c},toc:function(){return l},default:function(){return h}});var d=r("9880"),i=r("23169"),s={},c="Builder 配置项",l=[{text:"配置分类",depth:2,id:"配置分类"},{text:"配置默认值",depth:2,id:"配置默认值"},{text:"使用配置",depth:2,id:"使用配置"},{text:"在上层框架中使用",depth:3,id:"在上层框架中使用"},{text:"通过 Node API 使用",depth:3,id:"通过-node-api-使用"},{text:"与框架配置的关系",depth:2,id:"与框架配置的关系"},{text:"调试配置",depth:2,id:"调试配置"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",div:"div",button:"button",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"builder-配置项",children:["Builder 配置项",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-配置项",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Builder 提供了丰富的配置项，以帮助使用者对构建行为进行定制。"}),"\n",(0,d.jsxs)(n.h2,{id:"配置分类",children:["配置分类",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置分类",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Builder 中的配置可以分为以下几类："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"/api/config-dev",children:"Dev Config"}),"：与本地开发有关的配置。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"/api/config-html",children:"Html Config"}),"：与 HTML 有关的配置。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"/api/config-tools",children:"Tools Config"}),"：与底层工具有关的配置。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"/api/config-source",children:"Source Config"}),"：与源代码解析、编译方式相关的配置。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"/api/config-output",children:"Output Config"}),"：与构建产物有关的配置。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"/api/config-security",children:"Security Config"}),"：与安全有关的配置。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"/api/config-performance",children:"Performance Config"}),"：与编译性能、产物性能有关的配置。"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["你可以在 ",(0,d.jsx)(n.a,{href:"/api/",children:"API Reference"})," 页面找到所有配置项的详细说明。"]}),"\n",(0,d.jsxs)(n.h2,{id:"配置默认值",children:["配置默认值",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置默认值",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Builder 为每个配置项预设了一个默认值，默认值可以满足大部分使用场景。同时，上层框架也会基于垂直场景的需求，覆盖一部分配置的默认值。"}),"\n",(0,d.jsx)(n.p,{children:"因此，在大多数情况下，你不需要声明任何 Builder 配置，直接开箱使用即可。"}),"\n",(0,d.jsxs)(n.h2,{id:"使用配置",children:["使用配置",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用配置",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"在上层框架中使用",children:["在上层框架中使用",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在上层框架中使用",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"当你使用一个基于 Builder 的上层框架时，你可以直接通过框架的配置文件来定义 Builder 配置，上层框架会自动将相关配置透传给 Builder。"}),"\n",(0,d.jsxs)(n.p,{children:["比如在 Modern.js 框架中，你可以直接在 ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/configure/app/usage.html",target:"_blank",rel:"noopener noreferrer",children:"modern.config.ts"})," 文件里定义 Builder 的 ",(0,d.jsx)(n.a,{href:"/api/config-source",children:"source.alias"})," 配置："]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n};\n"})})]})]}),"\n",(0,d.jsx)(n.p,{children:"常用的框架配置文件包括："}),"\n",(0,d.jsxs)(n.table,{children:["\n",(0,d.jsxs)(n.thead,{children:["\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.th,{children:"框架"}),"\n",(0,d.jsx)(n.th,{children:"配置文件"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.tbody,{children:["\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:"Modern.js"}),"\n",(0,d.jsx)(n.td,{children:"modern.config.ts"}),"\n"]}),"\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:"EdenX"}),"\n",(0,d.jsx)(n.td,{children:"edenx.config.ts"}),"\n"]}),"\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:"PIA"}),"\n",(0,d.jsx)(n.td,{children:"pia.config.ts"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"通过-node-api-使用",children:["通过 Node API 使用",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通过-node-api-使用",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["当你通过 Node API 调用 Builder 时，你可以通过 Provider 的 ",(0,d.jsx)(n.code,{children:"builderConfig"})," 配置项来传入 Builder 配置："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { builderWebpackProvider } from '@modern-js/builder-webpack-provider';\n\nconst provider = builderWebpackProvider({\n  builderConfig: {\n    // some configs\n  },\n});\n"})})]})}),"\n",(0,d.jsxs)(n.p,{children:["关于 Node API 的完整用法，请参考 ",(0,d.jsx)(n.a,{href:"/api/builder-core",children:"API - createBuilder"}),"。"]}),"\n",(0,d.jsxs)(n.h2,{id:"与框架配置的关系",children:["与框架配置的关系",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#与框架配置的关系",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"通常来说，Builder 配置是框架配置的子集。"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Builder 配置只处理构建相关行为"}),"，而框架配置涵盖的范围更大，还包括运行时、服务端、部署等方面，因此框架是在 Builder 配置的基础上扩展出来的。"]}),"\n",(0,d.jsxs)(n.h2,{id:"调试配置",children:["调试配置",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#调试配置",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["在执行构建时，你可以添加 ",(0,d.jsx)(n.code,{children:"DEBUG=builder"})," 环境变量来开启 Builder 的调试模式。"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"DEBUG=builder pnpm dev\n"})})]})}),"\n",(0,d.jsx)(n.p,{children:"在调试模式下，Builder 会将内部最终生成的 Builder 配置写入到产物目录下，便于开发者查看和调试。"}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{children:"Inspect config succeed, open following files to view the content:\n\n  - Builder Config: /Project/demo/dist/builder.config.js\n  - Webpack Config (web): /Project/demo/dist/webpack.config.web.js\n"})})]})}),"\n",(0,d.jsxs)(n.p,{children:["打开生成的 ",(0,d.jsx)(n.code,{children:"/dist/builder.config.js"})," 文件，即可查看 Builder 配置的完整内容。"]}),"\n",(0,d.jsxs)(n.p,{children:["关于调试模式的完整介绍，请查看 ",(0,d.jsx)(n.a,{href:"/guide/debug/debug-mode",children:"开启调试模式"})," 章节。"]})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}}}]);