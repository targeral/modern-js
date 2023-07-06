(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_faq_features_md"],{40811:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});var s,c=r("15169"),i=r("43932"),a=r("9880"),d=r("23169");function t(e){var n=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",pre:"pre",code:"code",hr:"hr",blockquote:"blockquote",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"功能类问题",children:["功能类问题",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#功能类问题",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"如何配置组件库按需引入？",children:["如何配置组件库按需引入？",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何配置组件库按需引入？",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["如果需要配置组件库的按需引入，你可以通过 ",(0,a.jsx)(n.a,{href:"/api/config-source#sourcetransformimport",children:"source.transformImport"})," 配置，这个配置的能力等价于 ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"}),"。"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    transformImport: [\n      {\n        libraryName: 'xxx-components',\n        libraryDirectory: 'es',\n        style: true,\n      },\n    ],\n  },\n};\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"如何在编译过程中进行-eslint-代码校验？",children:["如何在编译过程中进行 ESLint 代码校验？",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何在编译过程中进行-eslint-代码校验？",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["出于编译性能的考虑，Builder 默认不会在编译过程中进行 ESLint 校验，如果需要该功能，可以手动安装并注册社区中的 ",(0,a.jsx)(n.a,{href:"https://github.com/webpack-contrib/eslint-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"eslint-webpack-plugin"}),"。"]}),"\n",(0,a.jsx)(n.p,{children:"注册该插件的示例代码如下："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import ESLintPlugin from 'eslint-webpack-plugin';\n\nexport default {\n  tools: {\n    webpackChain(chain) {\n      chain.plugin('eslint-plugin').use(ESLintPlugin, [\n        {\n          extensions: ['.js', '.ts', '.jsx', 'tsx', '.mjs'],\n        },\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["更详细的用法请参考 ",(0,a.jsx)(n.a,{href:"https://github.com/webpack-contrib/eslint-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"eslint-webpack-plugin"})," 文档。"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"如何配置静态资源的-cdn-路径？",children:["如何配置静态资源的 CDN 路径？",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何配置静态资源的-cdn-路径？",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["如果需要将 JS、CSS 等静态资源上传到 CDN 使用，那么可以通过 ",(0,a.jsx)(n.a,{href:"/api/config-output#outputassetprefix",children:"output.assetPrefix"})," 配置来设置静态资源的 URL 前缀。"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    assetPrefix: 'https://cdn.example.com/assets/',\n  },\n};\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"如何清空-webpack-编译缓存？",children:["如何清空 webpack 编译缓存？",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何清空-webpack-编译缓存？",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["默认情况下，Builder 的 webpack 编译缓存生成在 ",(0,a.jsx)(n.code,{children:"./node_modules/.cache/webpack"})," 目录下。"]}),"\n",(0,a.jsx)(n.p,{children:"如果需要清空本地的编译缓存，可以执行以下命令："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rm -rf ./node_modules/.cache\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"如何移除代码中的-console？",children:["如何移除代码中的 console？",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何移除代码中的-console？",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["在生产环境构建时，我们可以移除代码中的 ",(0,a.jsx)(n.code,{children:"console"}),"，从而避免开发环境的日志被输出到生产环境。"]}),"\n",(0,a.jsxs)(n.p,{children:["Builder 默认提供了移除 console 的配置项，请查看 ",(0,a.jsx)(n.a,{href:"/api/config-performance#performanceremoveconsole",children:"performance.removeConsole"}),"。"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"如何查看最终生成的-webpack-/-rspack-配置?",children:["如何查看最终生成的 webpack / Rspack 配置?",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何查看最终生成的-webpack-/-rspack-配置?",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"通过-inspect-命令查看",children:["通过 inspect 命令查看",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通过-inspect-命令查看",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["当你使用 Modern.js 等上层框架时，框架通常会提供 ",(0,a.jsx)(n.a,{href:"https://modernjs.dev/apis/app/commands.html",target:"_blank",rel:"noopener noreferrer",children:"inspect 命令"})," 用于查看项目最终生成的 Modern.js Builder 配置以及 webpack / Rspack 配置。"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"➜ npx modern inspect\n\nInspect config succeed, open following files to view the content:\n\n  - Builder Config: /root/my-project/dist/builder.config.js\n  - Rspack Config (web): /root/my-project/dist/rspack.config.web.js\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"通过-builder-调试模式查看",children:["通过 Builder 调试模式查看",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通过-builder-调试模式查看",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["通过在执行构建时添加 ",(0,a.jsx)(n.code,{children:"DEBUG=builder"})," 环境变量可开启 Builder 的",(0,a.jsx)(n.a,{href:"/guide/debug/debug-mode",children:"调试模式"}),"，此时会输出最终生成的 webpack 或 Rspack 配置到 dist 目录下。"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"➜ DEBUG=builder pnpm dev\n\ndebug   create context [1842.90 ms]\ndebug   add default plugins [1874.45 ms]\ndebug   add default plugins done [1938.57 ms]\n...\n\nInspect config succeed, open following files to view the content:\n\n  - Builder Config: /root/my-project/dist/builder.config.js\n  - Rspack Config (web): /root/my-project/dist/rspack.config.web.js\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fguide%2Ffaq%2Ffeatures.md"]={toc:[{text:"如何配置组件库按需引入？",id:"如何配置组件库按需引入？",depth:3},{text:"如何在编译过程中进行 ESLint 代码校验？",id:"如何在编译过程中进行-eslint-代码校验？",depth:3},{text:"如何配置静态资源的 CDN 路径？",id:"如何配置静态资源的-cdn-路径？",depth:3},{text:"如何清空 webpack 编译缓存？",id:"如何清空-webpack-编译缓存？",depth:3},{text:"如何移除代码中的 console？",id:"如何移除代码中的-console？",depth:3},{text:"如何查看最终生成的 webpack / Rspack 配置?",id:"如何查看最终生成的-webpack-/-rspack-配置?",depth:3},{text:"通过 inspect 命令查看",id:"通过-inspect-命令查看",depth:4},{text:"通过 Builder 调试模式查看",id:"通过-builder-调试模式查看",depth:4}],title:"功能类问题",frontmatter:{}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,i._)((0,c._)({},e),{children:(0,a.jsx)(t,(0,c._)({},e))})):t(e)}}}]);