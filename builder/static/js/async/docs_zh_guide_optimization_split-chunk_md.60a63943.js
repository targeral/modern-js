(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_optimization_split-chunk_md"],{21010:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var i,d=r("15169"),s=r("43932"),h=r("9880"),l=r("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",blockquote:"blockquote",ul:"ul",li:"li",code:"code",h3:"h3",h4:"h4",pre:"pre"},(0,l.useMDXComponents)(),e.components);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(n.h1,{id:"拆包最佳实践",children:["拆包最佳实践",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#拆包最佳实践",children:"#"})]}),"\n",(0,h.jsx)(n.p,{children:"良好的拆包策略对于提升应用的加载性能是十分重要的，可以充分利用浏览器的缓存机制，减少请求数量，加快页面加载速度。"}),"\n",(0,h.jsx)(n.p,{children:"在 Builder 中内置了多种拆包策略，可以满足大部分应用的需求，你也可以根据自己的业务场景，自定义拆包配置。"}),"\n",(0,h.jsxs)(n.h2,{id:"拆包策略",children:["拆包策略",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#拆包策略",children:"#"})]}),"\n",(0,h.jsxs)(n.blockquote,{children:["\n",(0,h.jsxs)(n.p,{children:["Builder 的拆包配置集中在 ",(0,h.jsx)(n.a,{href:"/api/config-performance#performancechunksplit",children:"performance.chunkSplit"})," 中。"]}),"\n"]}),"\n",(0,h.jsx)(n.p,{children:"Builder 支持设置以下几种拆包策略："}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:"split-by-experience"}),": 根据经验制定的拆分策略，自动将一些常用的 npm 包拆分为体积适中的 chunk。"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:"split-by-module"}),": 按 NPM 包的粒度拆分，每个 NPM 包对应一个 chunk。"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:"split-by-size"}),"：根据模块大小自动进行拆分。"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:"all-in-one"}),": 将所有代码全部打包到一个 chunk 中。"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:"single-vendor"}),": 将所有 NPM 包的代码打包到一个单独的 chunk 中。"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:"custom"}),": 自定义拆包配置。"]}),"\n"]}),"\n",(0,h.jsxs)(n.h3,{id:"split-by-experience",children:["split-by-experience",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#split-by-experience",children:"#"})]}),"\n",(0,h.jsxs)(n.h4,{id:"分包策略",children:["分包策略",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#分包策略",children:"#"})]}),"\n",(0,h.jsxs)(n.p,{children:["Builder 默认采用 ",(0,h.jsx)(n.code,{children:"split-by-experience"})," 策略，这是我们根据经验制定的策略。具体来说，当你的项目中引用了以下 npm 包时，它们会自动被拆分为单独的 chunk："]}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:"lib-polyfill.js"}),"：包含 ",(0,h.jsx)(n.code,{children:"core-js"}),"，",(0,h.jsx)(n.code,{children:"@babel/runtime"}),"，",(0,h.jsx)(n.code,{children:"@swc/helpers"}),"。"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:"lib-react.js"}),"：包含 ",(0,h.jsx)(n.code,{children:"react"}),"，",(0,h.jsx)(n.code,{children:"react-dom"}),"。"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:"lib-router.js"}),"：包含 ",(0,h.jsx)(n.code,{children:"react-router"}),"，",(0,h.jsx)(n.code,{children:"react-router-dom"}),"，",(0,h.jsx)(n.code,{children:"history"}),"，",(0,h.jsx)(n.code,{children:"@remix-run/router"}),"。"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:"lib-lodash.js"}),"：包含 ",(0,h.jsx)(n.code,{children:"lodash"}),"，",(0,h.jsx)(n.code,{children:"lodash-es"}),"。"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:"lib-antd.js"}),"：包含 ",(0,h.jsx)(n.code,{children:"antd"}),"。"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:"lib-arco.js"}),"：包含 ",(0,h.jsx)(n.code,{children:"@arco-design/web-react"})," 以及 ",(0,h.jsx)(n.code,{children:"@arco-design"})," 组织下相关的包。"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:"lib-semi.js"}),"：包含 ",(0,h.jsx)(n.code,{children:"@douyinfe/semi-ui"})," 以及 ",(0,h.jsx)(n.code,{children:"@ies"})," 和 ",(0,h.jsx)(n.code,{children:"@douyinfe"})," 组织下相关的包。"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:"lib-axios.js"}),"：包含 ",(0,h.jsx)(n.code,{children:"axios"})," 以及相关的包。"]}),"\n"]}),"\n",(0,h.jsx)(n.p,{children:"这种拆包策略将常用的包进行分组，然后拆分为单独的 chunk，一般 chunk 的数量不会很多，适合绝大部分应用，同时也是我们推荐的拆包策略。"}),"\n",(0,h.jsxs)(n.h4,{id:"配置",children:["配置",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置",children:"#"})]}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n    },\n  },\n};\n"})}),"\n",(0,h.jsxs)(n.h4,{id:"注意事项",children:["注意事项",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项",children:"#"})]}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:"如果项目中没有安装或引用以上 npm 包，则不会生成相应的 chunk。"}),"\n"]}),"\n",(0,h.jsxs)(n.h3,{id:"split-by-module",children:["split-by-module",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#split-by-module",children:"#"})]}),"\n",(0,h.jsxs)(n.h4,{id:"分包策略-1",children:["分包策略",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#分包策略-1",children:"#"})]}),"\n",(0,h.jsx)(n.p,{children:"将每一个 NPM 包拆分为一个单独的 chunk。"}),"\n",(0,h.jsxs)(n.h4,{id:"配置-1",children:["配置",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-1",children:"#"})]}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-module',\n    },\n  },\n};\n"})}),"\n",(0,h.jsxs)(n.h4,{id:"注意事项-1",children:["注意事项",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项-1",children:"#"})]}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:"这个配置会最细化地拆分 node_modules，产生大量的文件请求。"}),"\n",(0,h.jsx)(n.li,{children:"在使用 HTTP/2 时，由于存在多路复用，会加快资源的加载时间，并提高缓存命中率。"}),"\n",(0,h.jsx)(n.li,{children:"在未使用 HTTP/2 时，由于 HTTP 队头阻塞问题，会导致页面加载性能下降，请谨慎使用。"}),"\n"]}),"\n",(0,h.jsxs)(n.h3,{id:"all-in-one",children:["all-in-one",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#all-in-one",children:"#"})]}),"\n",(0,h.jsxs)(n.h4,{id:"分包策略-2",children:["分包策略",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#分包策略-2",children:"#"})]}),"\n",(0,h.jsx)(n.p,{children:"此分包策略将业务代码、第三方依赖打包在同一个 chunk 中。"}),"\n",(0,h.jsxs)(n.h4,{id:"配置-2",children:["配置",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-2",children:"#"})]}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'all-in-one',\n    },\n  },\n};\n"})}),"\n",(0,h.jsxs)(n.h4,{id:"注意事项-2",children:["注意事项",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项-2",children:"#"})]}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:"这个配置会将构建生成的 JS 代码全部打包到一个文件里（除了 dynamic import 拆分的 chunk）"}),"\n",(0,h.jsx)(n.li,{children:"单个 JS 文件的体积可能会非常大，使页面加载性能下降。"}),"\n"]}),"\n",(0,h.jsxs)(n.h3,{id:"single-vendor",children:["single-vendor",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#single-vendor",children:"#"})]}),"\n",(0,h.jsxs)(n.h4,{id:"分包策略-3",children:["分包策略",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#分包策略-3",children:"#"})]}),"\n",(0,h.jsx)(n.p,{children:"此分包策略将第三方依赖打包在一个 chunk 中，业务代码打包在另外的 chunk 中。"}),"\n",(0,h.jsxs)(n.h4,{id:"配置-3",children:["配置",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-3",children:"#"})]}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'single-vendor',\n    },\n  },\n};\n"})}),"\n",(0,h.jsxs)(n.h4,{id:"注意事项-3",children:["注意事项",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项-3",children:"#"})]}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:"单个 vendor 文件的体积可能会非常大，使页面加载性能下降。"}),"\n"]}),"\n",(0,h.jsxs)(n.h3,{id:"split-by-size",children:["split-by-size",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#split-by-size",children:"#"})]}),"\n",(0,h.jsxs)(n.h4,{id:"分包策略-4",children:["分包策略",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#分包策略-4",children:"#"})]}),"\n",(0,h.jsxs)(n.p,{children:["该策略下，设置 ",(0,h.jsx)(n.code,{children:"minSize"}),"、",(0,h.jsx)(n.code,{children:"maxSize"})," 为一个固定值后，Builder 会自动进行拆分，无需干预。"]}),"\n",(0,h.jsxs)(n.h4,{id:"配置-4",children:["配置",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-4",children:"#"})]}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-size',\n      minSize: 30000,\n      maxSize: 50000,\n    },\n  },\n};\n"})}),"\n",(0,h.jsxs)(n.h2,{id:"自定义拆包",children:["自定义拆包",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义拆包",children:"#"})]}),"\n",(0,h.jsx)(n.p,{children:"除了使用内置的拆包策略外，你也可以通过 Builder 自定义拆包功能来满足更多的定制化需求。自定义拆包分为两部分:"}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:"自定义拆包分组"}),"\n",(0,h.jsx)(n.li,{children:"自定义原生 bundler 拆包配置"}),"\n"]}),"\n",(0,h.jsx)(n.p,{children:"值得注意的是，这两种自定义拆包能力可以和内置的拆包策略一起使用，也就是说，你可以使用内置的拆包策略来拆分常用的包，然后再使用自定义拆包功能来拆分其他的包。"}),"\n",(0,h.jsxs)(n.h3,{id:"自定义分组",children:["自定义分组",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义分组",children:"#"})]}),"\n",(0,h.jsx)(n.p,{children:"Builder 支持自定义拆包分组，这样比内置拆包策略更灵活，同时比手写 bundler 底层配置更简单。"}),"\n",(0,h.jsxs)(n.p,{children:["比如将 node_modules 下的 ",(0,h.jsx)(n.code,{children:"axios"})," 库拆分到 ",(0,h.jsx)(n.code,{children:"axios.js"})," 中："]}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n      forceSplitting: {\n        axios: /node_modules\\/axios/,\n      },\n    },\n  },\n};\n"})}),"\n",(0,h.jsxs)(n.p,{children:["通过 ",(0,h.jsx)(n.code,{children:"forceSplitting"})," 配置，你可以很方便把某些模块拆分为一个 chunk。"]}),"\n",(0,h.jsxs)(n.h4,{id:"注意事项-4",children:["注意事项",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项-4",children:"#"})]}),"\n",(0,h.jsxs)(n.p,{children:["通过 ",(0,h.jsx)(n.code,{children:"forceSplitting"})," 配置拆分的 chunk 会通过 ",(0,h.jsx)(n.code,{children:"<script>"})," 标签插入到 HTML 文件中，作为首屏请求的资源。因此，请根据实际场景来进行适当地拆分，避免首屏资源体积过大。"]}),"\n",(0,h.jsxs)(n.h3,{id:"自定义-bundler-拆包配置",children:["自定义 bundler 拆包配置",(0,h.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-bundler-拆包配置",children:"#"})]}),"\n",(0,h.jsxs)(n.p,{children:["除了使用自定义分组外，你还可以通过 ",(0,h.jsx)(n.code,{children:"override"})," 配置项来自定义底层 bundler 的拆包配置，比如:"]}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n      override: {\n        chunks: 'all',\n        minSize: 30000,\n      },\n    },\n  },\n};\n"})}),"\n",(0,h.jsxs)(n.p,{children:["其中 ",(0,h.jsx)(n.code,{children:"override"})," 中的配置会和 bundler 的配置进行合并，具体配置项请参考 ",(0,h.jsx)(n.a,{href:"https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks",target:"_blank",rel:"noopener noreferrer",children:"webpack - splitChunks"})," 或 ",(0,h.jsx)(n.a,{href:"https://rspack.dev/zh/config/optimization.html#optimization-splitchunks",target:"_blank",rel:"noopener noreferrer",children:"Rspack - splitChunks"}),"。"]})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fguide%2Foptimization%2Fsplit-chunk.md"]={toc:[{text:"拆包策略",id:"拆包策略",depth:2},{text:"split-by-experience",id:"split-by-experience",depth:3},{text:"分包策略",id:"分包策略",depth:4},{text:"配置",id:"配置",depth:4},{text:"注意事项",id:"注意事项",depth:4},{text:"split-by-module",id:"split-by-module",depth:3},{text:"分包策略",id:"分包策略-1",depth:4},{text:"配置",id:"配置-1",depth:4},{text:"注意事项",id:"注意事项-1",depth:4},{text:"all-in-one",id:"all-in-one",depth:3},{text:"分包策略",id:"分包策略-2",depth:4},{text:"配置",id:"配置-2",depth:4},{text:"注意事项",id:"注意事项-2",depth:4},{text:"single-vendor",id:"single-vendor",depth:3},{text:"分包策略",id:"分包策略-3",depth:4},{text:"配置",id:"配置-3",depth:4},{text:"注意事项",id:"注意事项-3",depth:4},{text:"split-by-size",id:"split-by-size",depth:3},{text:"分包策略",id:"分包策略-4",depth:4},{text:"配置",id:"配置-4",depth:4},{text:"自定义拆包",id:"自定义拆包",depth:2},{text:"自定义分组",id:"自定义分组",depth:3},{text:"注意事项",id:"注意事项-4",depth:4},{text:"自定义 bundler 拆包配置",id:"自定义-bundler-拆包配置",depth:3}],title:"拆包最佳实践",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,h.jsx)(n,(0,s._)((0,d._)({},e),{children:(0,h.jsx)(c,(0,d._)({},e))})):c(e)}}}]);