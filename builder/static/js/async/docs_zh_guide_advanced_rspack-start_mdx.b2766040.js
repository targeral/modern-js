(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_advanced_rspack-start_mdx"],{97467:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return a},toc:function(){return l},default:function(){return h}});var i=r("9880"),s=r("23169"),c=r.ir(r("44299")),d={},a="使用 Rspack",l=[{text:"启用 Rspack",depth:2,id:"启用-rspack"},{text:"在 Modern.js 框架中启用",depth:3,id:"在-modernjs-框架中启用"},{text:"在前端框架中接入",depth:3,id:"在前端框架中接入"},{text:"从 webpack 迁移到 Rspack",depth:2,id:"从-webpack-迁移到-rspack"},{text:"Builder 配置差异",depth:3,id:"builder-配置差异"},{text:"Source Config",depth:4,id:"source-config"},{text:"Html Config",depth:4,id:"html-config"},{text:"Security Config",depth:4,id:"security-config"},{text:"Dev Config",depth:4,id:"dev-config"},{text:"Output Config",depth:4,id:"output-config"},{text:"Experiments Config",depth:4,id:"experiments-config"},{text:"Performance Config",depth:4,id:"performance-config"},{text:"Tools Config",depth:4,id:"tools-config"},{text:"从 webpackChain 迁移到 bundlerChain",depth:3,id:"从-webpackchain-迁移到-bundlerchain"},{text:"CHAIN_ID 差异",depth:3,id:"chain_id-差异"},{text:"修改 Rspack 配置",depth:3,id:"修改-rspack-配置"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",ol:"ol",li:"li",code:"code",div:"div",pre:"pre",ul:"ul",h4:"h4",blockquote:"blockquote",strong:"strong"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"使用-rspack",children:["使用 Rspack",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-rspack",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"这篇文档会向你介绍如何在 Builder 中开启 Rspack 构建模式。"}),"\n","\n",(0,i.jsx)(c.default,{}),"\n",(0,i.jsxs)(n.h2,{id:"启用-rspack",children:["启用 Rspack",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#启用-rspack",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"在-modernjs-框架中启用",children:["在 Modern.js 框架中启用",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在-modernjs-框架中启用",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js 框架默认使用 webpack 作为打包工具。如果希望启用 Rspack 作为打包工具，我们推荐通过 ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/guides/advanced-features/rspack-start.html#%E5%88%9D%E5%A7%8B%E5%8C%96-rspack-%E9%A1%B9%E7%9B%AE",target:"_blank",rel:"noopener noreferrer",children:"Modern.js 生成器"})," 方式启用。"]}),"\n",(0,i.jsx)(n.p,{children:"当然，你也可以通过下面的步骤来手动接入:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["安装 ",(0,i.jsx)(n.code,{children:"@modern-js/builder-rspack-provider"}),"（版本号需要与 Modern.js 版本号保持一致）。"]}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{children:"pnpm add @modern-js/builder-rspack-provider -D\n"})})})}),"\n",(0,i.jsx)(n.p,{children:"通过 package.json 或 lock 文件，确认 Modern.js 版本号:"}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"package.json"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-json",meta:"title=package.json",children:'{\n  "devDependencies": {\n    "@modern-js/app-tools": "2.8.0"\n  }\n}\n'})})})]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"在 Modern.js 配置文件中声明使用 Rspack:"}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-diff",meta:"title=modern.config.ts",children:"import appTools, { defineConfig } from '@modern-js/app-tools';\n\n+ export default defineConfig<'rspack'>({\n  plugins: [\n    appTools({\n+     bundler: 'experimental-rspack',\n    }),\n  ],\n});\n"})})})]}),"\n",(0,i.jsxs)(n.h3,{id:"在前端框架中接入",children:["在前端框架中接入",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在前端框架中接入",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["如果你基于 Builder 开发了一个前端框架，接入 rspack-provider 和 ",(0,i.jsx)(n.a,{href:"/guide/quick-start",children:"接入 webpack-provider"})," 的方式类似，只需要把依赖从 ",(0,i.jsx)(n.code,{children:"@modern-js/builder-webpack-provider"})," 改为 ",(0,i.jsx)(n.code,{children:"@modern-js/builder-rspack-provider"})," 即可。"]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:"title=modern.config.ts",children:"import { createBuilder } from '@modern-js/builder';\nimport { builderRspackProvider } from '@modern-js/builder-rspack-provider';\n\nconst provider = builderRspackProvider({\n  builderConfig: {\n    // some configs\n  },\n});\n"})})})]}),"\n",(0,i.jsxs)(n.h2,{id:"从-webpack-迁移到-rspack",children:["从 webpack 迁移到 Rspack",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#从-webpack-迁移到-rspack",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Builder 旨在消除不同打包工具之间的主要差异，帮助用户以较低成本进行迁移。但由于各个打包工具提供的能力不同，你仍需要了解其中的部分差异。"}),"\n",(0,i.jsxs)(n.p,{children:["本文将从 Builder 的角度介绍 webpack 和 Rspack 之间的区别。如果需要了解更深层次的差异，请参考 ",(0,i.jsx)(n.a,{href:"http://rspack.dev/zh/guide/migrate-from-webpack.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack 文档"}),"。"]}),"\n",(0,i.jsxs)(n.h3,{id:"builder-配置差异",children:["Builder 配置差异",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-配置差异",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"目前，Builder 内大部分的配置项已经适配了 Rspack。Builder 所做的工作包括不限于："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["对一些原本使用借助 webpack loader / plugin (在 Rspack 中不支持使用) 实现的功能，使用 Rspack 替代方案实现。比如，通过 ",(0,i.jsx)(n.code,{children:"css/module"})," 替代 ",(0,i.jsx)(n.code,{children:"css-loader"})," 的 modules 能力。"]}),"\n",(0,i.jsxs)(n.li,{children:["对 webpack 插件进行验证及封装。如 ",(0,i.jsx)(n.code,{children:"@svgr/webpack"}),"、",(0,i.jsx)(n.code,{children:"webpack-bundle-analyzer"})," 等;"]}),"\n",(0,i.jsxs)(n.li,{children:["对 Rspack 内置能力进行封装。如 ",(0,i.jsx)(n.code,{children:"css"}),"、",(0,i.jsx)(n.code,{children:"minify"})," 等;"]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"source-config",children:["Source Config",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#source-config",children:"#"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Builder 中与源代码解析、编译方式相关的配置。"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"不支持的配置项及能力包括："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-source",children:"source.include"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-source",children:"source.exclude"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-source",children:"source.moduleScopes"})}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"html-config",children:["Html Config",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-config",children:"#"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Builder 中与 HTML 有关的配置。"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"所有 html 下的配置项及能力在 Rspack 内均可使用。"}),"\n",(0,i.jsxs)(n.h4,{id:"security-config",children:["Security Config",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#security-config",children:"#"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Builder 中与安全有关的配置。"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["所有 security 下的配置项及能力",(0,i.jsx)(n.strong,{children:"均不支持"}),"在 Rspack 内使用。"]}),"\n",(0,i.jsxs)(n.h4,{id:"dev-config",children:["Dev Config",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dev-config",children:"#"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Builder 中与本地开发有关的配置。"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"所有 dev 下的配置项及能力在 Rspack 内均可使用。"}),"\n",(0,i.jsxs)(n.h4,{id:"output-config",children:["Output Config",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#output-config",children:"#"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Builder 中与构建产物有关的配置。"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"不支持的配置项及能力包括："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-output",children:"output.disableCssExtract"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-output",children:"output.disableSourcemap.css"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-output",children:"output.enableAssetManifest"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-output",children:"output.enableCssModuleTSDeclaration"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-output",children:"output.legalComments.inline"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-output",children:"output.enableInlineScripts"})}),"\n",(0,i.jsxs)(n.li,{children:["tsChecker 能力","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-output",children:"output.disableTsChecker"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"experiments-config",children:["Experiments Config",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#experiments-config",children:"#"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Builder 中的一些实验性配置。"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["所有 experiments 下的配置项及能力",(0,i.jsx)(n.strong,{children:"均不支持"}),"在 Rspack 内使用。"]}),"\n",(0,i.jsxs)(n.h4,{id:"performance-config",children:["Performance Config",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-config",children:"#"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Builder 中与性能有关的配置。"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"不支持的配置项及能力包括："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-performance",children:"performance.profile"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-performance",children:"performance.removeMomentLocale"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-performance",children:"performance.buildCache"})}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"tools-config",children:["Tools Config",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tools-config",children:"#"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Builder 中与底层工具有关的配置。"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"不支持的配置项包括："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-tools",children:"tools.terser"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-tools",children:"tools.cssExtract"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-tools",children:"tools.cssLoader"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-tools",children:"tools.devServer.devMiddleware"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-tools",children:"tools.inspector"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-tools",children:"tools.minifyCss"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-tools",children:"tools.styleLoader"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-tools",children:"tools.styledComponents"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-tools",children:"tools.tsLoader"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-tools",children:"tools.tsChecker"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-tools",children:"tools.webpack"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config-tools",children:"tools.webpackChain"})}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsx)(n.p,{children:"除上述配置外，一些已支持的配置可能存在能力差异，请参考各配置 API 获取具体差异信息。"})})]}),"\n",(0,i.jsxs)(n.h3,{id:"从-webpackchain-迁移到-bundlerchain",children:["从 webpackChain 迁移到 bundlerChain",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#从-webpackchain-迁移到-bundlerchain",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Builder 支持通过 ",(0,i.jsx)(n.a,{href:"/api/config-tools",children:"bundlerChain"})," 来修改 Rspack config。通过 bundlerChain 修改的配置，在 webpack 和 Rspack 构建时均可生效。"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsx)(n.p,{children:"bundlerChain 只为 Rspack & webpack 配置提供一致的 api 修改方式，实际 plugin / loader 是否可用，需要看 Rspack / webpack 实际支持情况。"})})]}),"\n",(0,i.jsxs)(n.h3,{id:"chain_id-差异",children:["CHAIN_ID 差异",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_id-差异",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"因为 webpack 和 rspack 的一些实现差异，所以在规则配置上会有些不同。"}),"\n",(0,i.jsxs)(n.p,{children:["可通过 ",(0,i.jsx)(n.a,{href:"/api/config-tools",children:"tools.bundlerChain#CHAIN_ID"})," 查看所有在 Rspack & webpack 中都支持的规则。"]}),"\n",(0,i.jsxs)(n.h3,{id:"修改-rspack-配置",children:["修改 Rspack 配置",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#修改-rspack-配置",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["BundlerChain 只支持修改 Rspack & webpack 交集部分，更多 Rspack 独有功能，需要通过 ",(0,i.jsx)(n.a,{href:"/api/config-tools",children:"tools.rspack"})," 修改。"]}),"\n",(0,i.jsxs)(n.p,{children:["在修改 Rspack 配置之前，你可能需要了解 ",(0,i.jsx)(n.a,{href:"https://www.rspack.dev/zh/guide/config-diff.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack 和 Webpack 的配置兼容性"}),"。"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    rspack: (config, { env }) => {\n      if (env === 'development') {\n        config.devtool = 'cheap-module-eval-source-map';\n      }\n      return config;\n    },\n  },\n};\n"})})})}),"\n",(0,i.jsxs)(n.p,{children:["关于 Rspack 的详细配置信息，请参考 ",(0,i.jsx)(n.a,{href:"https://rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack 官网"}),"。"]})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}}}]);