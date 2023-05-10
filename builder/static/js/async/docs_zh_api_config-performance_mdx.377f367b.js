(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_api_config-performance_mdx"],{6353:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return j},title:function(){return x},toc:function(){return p},default:function(){return m}});var c=s("9880"),r=s("23169"),l=s.ir(s("45569")),i=s.ir(s("13042")),d=s.ir(s("63862")),a=s.ir(s("75613")),o=s.ir(s("96018")),t=s.ir(s("25133")),h=s.ir(s("88673")),j={extractApiHeaders:[2]},x="Performance Config",p=[{text:"performance.buildCache",depth:2,id:"performance-buildcache"},{text:"performance.bundleAnalyze",depth:2,id:"performance-bundleanalyze"},{text:"performance.chunkSplit",depth:2,id:"performance-chunksplit"},{text:"performance.printFileSize",depth:2,id:"performance-printfilesize"},{text:"performance.profile",depth:2,id:"performance-profile"},{text:"performance.removeConsole",depth:2,id:"performance-removeconsole"},{text:"performance.removeMomentLocale",depth:2,id:"performance-removemomentlocale"}];function u(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"performance-config",children:["Performance Config",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-config",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"本章节描述了 Builder 中与性能有关的配置。"}),"\n",(0,c.jsxs)(n.h2,{id:"performance-buildcache",children:["performance.buildCache",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-buildcache",children:"#"})]}),"\n","\n",(0,c.jsx)(l.default,{}),"\n",(0,c.jsxs)(n.h2,{id:"performance-bundleanalyze",children:["performance.bundleAnalyze",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-bundleanalyze",children:"#"})]}),"\n","\n",(0,c.jsx)(i.default,{}),"\n",(0,c.jsxs)(n.h2,{id:"performance-chunksplit",children:["performance.chunkSplit",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-chunksplit",children:"#"})]}),"\n","\n",(0,c.jsx)(d.default,{}),"\n",(0,c.jsxs)(n.h2,{id:"performance-printfilesize",children:["performance.printFileSize",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-printfilesize",children:"#"})]}),"\n","\n",(0,c.jsx)(a.default,{}),"\n",(0,c.jsxs)(n.h2,{id:"performance-profile",children:["performance.profile",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-profile",children:"#"})]}),"\n","\n",(0,c.jsx)(o.default,{}),"\n",(0,c.jsxs)(n.h2,{id:"performance-removeconsole",children:["performance.removeConsole",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-removeconsole",children:"#"})]}),"\n","\n",(0,c.jsx)(t.default,{}),"\n",(0,c.jsxs)(n.h2,{id:"performance-removemomentlocale",children:["performance.removeMomentLocale",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-removemomentlocale",children:"#"})]}),"\n","\n",(0,c.jsx)(h.default,{})]})}var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(u,e)})):u(e)}},45569:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var c=s("9880"),r=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"type BuildCacheConfig =\n  | {\n      /**\n       * webpack 文件缓存系统的缓存目录\n       */\n      cacheDirectory?: string;\n    }\n  | boolean;\n"})})]})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"const defaultBuildCacheConfig = {\n  cacheDirectory: './node_modules/.cache/webpack',\n};\n"})})]})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"打包工具："})," ",(0,c.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"控制 Builder 在构建过程中的缓存行为。"}),"\n",(0,c.jsxs)(n.p,{children:["Builder 默认会开启构建缓存来提升二次构建的速度，并默认把生成的缓存文件写到 ",(0,c.jsx)(n.code,{children:"./node_modules/.cache/webpack"})," 目录下。"]}),"\n",(0,c.jsxs)(n.p,{children:["你可以通过 ",(0,c.jsx)(n.code,{children:"buildCache"})," 配置缓存路径，比如："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    buildCache: {\n      cacheDirectory: './node_modules/.custom_cache/webpack',\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["如果不希望缓存，你也可以将 ",(0,c.jsx)(n.code,{children:"buildCache"})," 置为 ",(0,c.jsx)(n.code,{children:"false"})," 将其禁用掉："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    buildCache: false,\n  },\n};\n"})})]})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}},13042:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var c=s("9880"),r=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"Object | undefined"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["你有两种方式开启 ",(0,c.jsx)(n.code,{children:"webpack-bundle-analyzer"})," 来分析构建产物的体积:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["添加环境变量 ",(0,c.jsx)(n.code,{children:"BUNDLE_ANALYZE=true"}),"；"]}),"\n",(0,c.jsxs)(n.li,{children:["配置 ",(0,c.jsx)(n.code,{children:"performance.bundleAnalyze"}),"。"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["默认情况下，不会开启 ",(0,c.jsx)(n.code,{children:"webpack-bundle-analyzer"}),"，当开启之后它的配置如下:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"{\n  analyzerMode: 'static',\n  openAnalyzer: false,\n  // target 为编译目标，如 `web`、`node` 等\n  reportFilename: `report-${target}.html`,\n}\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["你可以通过 ",(0,c.jsx)(n.code,{children:"performance.bundleAnalyze"})," 来覆盖默认配置，比如："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    bundleAnalyze: {\n      analyzerMode: 'server',\n      openAnalyzer: true,\n    },\n  },\n};\n"})})]})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}},63862:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var c=s("9880"),r=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",h3:"h3",a:"a",blockquote:"blockquote"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"Object"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"{ strategy: 'split-by-experience' }"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"performance.chunkSplit"})," 用于配置 Builder 的拆包策略。配置项的类型 ",(0,c.jsx)(n.code,{children:"ChunkSplit"})," 如下:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"type ForceSplitting = RegExp[] | Record<string, RegExp>;\n\ninterface BaseChunkSplit {\n  strategy?:\n    | 'split-by-module'\n    | 'split-by-experience'\n    | 'all-in-one'\n    | 'single-vendor';\n  override?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\ninterface SplitBySize {\n  strategy?: 'split-by-size';\n  minSize?: number;\n  maxSize?: number;\n  override?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\ninterface SplitCustom {\n  strategy?: 'custom';\n  splitChunks?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\nexport type ChunkSplit = BaseChunkSplit | SplitBySize | SplitCustom;\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"chunksplit-strategy",children:["chunkSplit.strategy",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit-strategy",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"Builder 支持设置以下几种拆包策略："}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"split-by-experience"}),": 根据经验制定的拆分策略，自动将一些常用的 npm 包拆分为体积适中的 chunk。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"split-by-module"}),": 按 NPM 包的粒度拆分，每个 NPM 包对应一个 chunk。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"split-by-size"}),"：根据模块大小自动进行拆分。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"all-in-one"}),": 将所有代码全部打包到一个 chunk 中。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"single-vendor"}),": 将所有 NPM 包的代码打包到一个单独的 chunk 中。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"custom"}),": 自定义拆包配置。"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"默认拆包策略",children:["默认拆包策略",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认拆包策略",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Builder 默认采用 ",(0,c.jsx)(n.code,{children:"split-by-experience"})," 策略，这是我们根据经验制定的策略。具体来说，当你的项目中引用了以下 npm 包时，它们会自动被拆分为单独的 chunk："]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"lib-polyfill.js"}),"：包含 ",(0,c.jsx)(n.code,{children:"core-js"}),"，",(0,c.jsx)(n.code,{children:"@babel/runtime"}),"，",(0,c.jsx)(n.code,{children:"@swc/helpers"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"lib-react.js"}),"：包含 ",(0,c.jsx)(n.code,{children:"react"}),"，",(0,c.jsx)(n.code,{children:"react-dom"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"lib-router.js"}),"：包含 ",(0,c.jsx)(n.code,{children:"react-router"}),"，",(0,c.jsx)(n.code,{children:"react-router-dom"}),"，",(0,c.jsx)(n.code,{children:"history"}),"，",(0,c.jsx)(n.code,{children:"@remix-run/router"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"lib-lodash.js"}),"：包含 ",(0,c.jsx)(n.code,{children:"lodash"}),"，",(0,c.jsx)(n.code,{children:"lodash-es"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"lib-antd.js"}),"：包含 ",(0,c.jsx)(n.code,{children:"antd"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"lib-arco.js"}),"：包含 ",(0,c.jsx)(n.code,{children:"@arco-design/web-react"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"lib-semi.js"}),"：包含 ",(0,c.jsx)(n.code,{children:"@douyinfe/semi-ui"}),"。"]}),"\n"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsx)(n.p,{children:"如果项目中没有安装或引用以上 npm 包，则不会生成相应的 chunk。"})})]}),"\n",(0,c.jsxs)(n.p,{children:["如果你想使用其他拆包策略，可以通过 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," 配置项来指定。"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["在使用 Rspack 作为打包工具时，暂时不支持采用 ",(0,c.jsx)(n.code,{children:"split-by-module"})," 策略。\n"]})})]}),"\n",(0,c.jsxs)(n.h3,{id:"chunksplit-minsize",children:["chunkSplit.minSize",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit-minsize",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"number"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"10000"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," 为 ",(0,c.jsx)(n.code,{children:"split-by-size"})," 时，可以通过 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.minSize"})," 配置项来指定 chunk 的最小大小，单位为字节。默认值为 10000。比如:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-size',\n      minSize: 20000,\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"chunksplit-maxsize",children:["chunkSplit.maxSize",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit-maxsize",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"number"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"Infinity"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," 为 ",(0,c.jsx)(n.code,{children:"split-by-size"})," 时，可以通过 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.maxSize"})," 配置项来指定 chunk 的最大大小，单位为字节。默认值为 ",(0,c.jsx)(n.code,{children:"Infinity"}),"。比如:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-size',\n      maxSize: 50000,\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"chunksplit-forcesplitting",children:["chunkSplit.forceSplitting",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit-forcesplitting",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"RegExp[] | Record<string, RegExp>"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["通过 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.forceSplitting"})," 配置项可以将指定的模块强制拆分为一个独立的 chunk。"]}),"\n",(0,c.jsxs)(n.p,{children:["比如将 node_modules 下的 ",(0,c.jsx)(n.code,{children:"axios"})," 库拆分到 ",(0,c.jsx)(n.code,{children:"axios.js"})," 中："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n      forceSplitting: {\n        axios: /node_modules\\/axios/,\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"相比直接配置 webpack 的 splitChunks，这是一个更加简便的方式。"}),"\n",(0,c.jsxs)(n.h3,{id:"chunksplit-splitchunks",children:["chunkSplit.splitChunks",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit-splitchunks",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," 为 ",(0,c.jsx)(n.code,{children:"custom"})," 时，可以通过 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.splitChunks"})," 配置项来指定自定义的 webpack 拆包配置。此配置会和 webpack 的 splitChunks 配置进行合并（cacheGroups 配置也会合并）。比如:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'custom',\n      splitChunks: {\n        cacheGroups: {\n          react: {\n            test: /[\\\\/]node_modules[\\\\/](react|react-dom)[\\\\/]/,\n            name: 'react',\n            chunks: 'all',\n          },\n        },\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"chunksplit-override",children:["chunkSplit.override",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit-override",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," 为 ",(0,c.jsx)(n.code,{children:"split-by-experience"}),"、",(0,c.jsx)(n.code,{children:"split-by-module"}),"、",(0,c.jsx)(n.code,{children:"split-by-size"})," 或 ",(0,c.jsx)(n.code,{children:"single-vendor"})," 时，可以通过 ",(0,c.jsx)(n.code,{children:"performance.chunkSplit.override"})," 配置项来自定义 webpack 拆包配置，此配置会和 webpack 的 splitChunks 配置进行合并（cacheGroups 配置也会合并）。比如:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n      override: {\n        cacheGroups: {\n          react: {\n            test: /[\\\\/]node_modules[\\\\/](react|react-dom)[\\\\/]/,\n            name: 'react',\n            chunks: 'all',\n          },\n        },\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:'当 Builder 构建 "node" 类型的产物时，由于 Node Bundles 不需要通过拆包来优化加载性能，因此 chunkSplit 规则不会生效。'}),"\n"]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}},75613:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var c=s("9880"),r=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",h3:"h3",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"是否在生产环境构建后输出所有静态资源文件的体积。"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-bash",children:"info    File sizes after production build:\n\n  File                                     Size         Gzipped\n  dist/static/js/lib-corejs.1c836fe7.js    212.89 kB    66.57 kB\n  dist/static/js/lib-react.fcafbc5c.js     134.65 kB    43.45 kB\n  dist/static/js/main.6ff06f70.js          8.93 kB      3.73 kB\n  dist/static/css/main.9f48031b.css        2.64 kB      927 B\n  dist/html/main/index.html                1.64 kB      874 B\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"示例",children:["示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"禁用相关日志："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    printFileSize: false,\n  },\n};\n"})})]})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}},96018:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var c=s("9880"),r=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",div:"div",button:"button",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"false"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"打包工具："})," ",(0,c.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["是否捕获每个模块的耗时信息，对应 webpack 的 ",(0,c.jsx)(n.a,{href:"https://webpack.js.org/configuration/other-options/#profile",target:"_blank",rel:"noopener noreferrer",children:"profile"})," 配置。"]}),"\n",(0,c.jsxs)(n.h3,{id:"示例",children:["示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    profile: true,\n  },\n};\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"开启后，Webpack 生成一些有关模块的统计数据的 JSON 文件会将模块构建的耗时信息也包含进去。"})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}},25133:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var c=s("9880"),r=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"boolean | ConsoleType[]"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["在生产环境构建时，是否自动移除代码中的 ",(0,c.jsx)(n.code,{children:"console.xx"}),"。"]}),"\n",(0,c.jsxs)(n.h4,{id:"移除所有-console",children:["移除所有 console",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#移除所有-console",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"removeConsole"})," 被设置为 ",(0,c.jsx)(n.code,{children:"true"})," 时，会移除所有类型的 ",(0,c.jsx)(n.code,{children:"console.xx"}),"："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    removeConsole: true,\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h4,{id:"移除特定的-console",children:["移除特定的 console",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#移除特定的-console",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["你也可以指定仅移除特定类型的 ",(0,c.jsx)(n.code,{children:"console.xx"}),"，比如移除 ",(0,c.jsx)(n.code,{children:"console.log"})," 和 ",(0,c.jsx)(n.code,{children:"console.warn"}),"："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    removeConsole: ['log', 'warn'],\n  },\n};\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"目前支持配置以下类型的 console："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"type ConsoleType = 'log' | 'info' | 'warn' | 'error' | 'table' | 'group';\n"})})]})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}},88673:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var c=s("9880"),r=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",button:"button",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"false"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"打包工具："})," ",(0,c.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["是否移除 ",(0,c.jsx)(n.a,{href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer",children:"moment.js"})," 的语言包文件。"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"moment.js"})," 默认包含了大量的语言包文件，会导致打包后的包体积增大。"]}),"\n",(0,c.jsxs)(n.p,{children:["当项目中使用了 ",(0,c.jsx)(n.code,{children:"moment.js"})," 时，推荐开启此选项，自动排除所有的语言包文件："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    removeMomentLocale: true,\n  },\n};\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"开启后，可以通过以下方式来加载语言包文件："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"import moment from 'moment';\nimport 'moment/locale/zh-cn';\n\nmoment.locale('zh-cn');\n"})})]})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}}}]);