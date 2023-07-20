(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_api_config-performance_mdx"],{63207:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return m}});var s,c=r("15169"),i=r("43932"),l=r("9880"),d=r("23169"),o=r("619"),a=r("26646"),t=r("18653"),h=r("90082"),p=r("96296"),j=r("5927"),x=r("34432");function u(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2"},(0,d.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"performance-config",children:["Performance Config",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-config",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"本章节描述了 Builder 中与性能有关的配置。"}),"\n",(0,l.jsxs)(n.h2,{id:"performancebuildcache",children:["performance.buildCache",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancebuildcache",children:"#"})]}),"\n","\n",(0,l.jsx)(o.default,{}),"\n",(0,l.jsxs)(n.h2,{id:"performancebundleanalyze",children:["performance.bundleAnalyze",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancebundleanalyze",children:"#"})]}),"\n","\n",(0,l.jsx)(a.default,{}),"\n",(0,l.jsxs)(n.h2,{id:"performancechunksplit",children:["performance.chunkSplit",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancechunksplit",children:"#"})]}),"\n","\n",(0,l.jsx)(t.default,{}),"\n",(0,l.jsxs)(n.h2,{id:"performanceprintfilesize",children:["performance.printFileSize",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceprintfilesize",children:"#"})]}),"\n","\n",(0,l.jsx)(h.default,{}),"\n",(0,l.jsxs)(n.h2,{id:"performanceprofile",children:["performance.profile",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceprofile",children:"#"})]}),"\n","\n",(0,l.jsx)(p.default,{}),"\n",(0,l.jsxs)(n.h2,{id:"performanceremoveconsole",children:["performance.removeConsole",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceremoveconsole",children:"#"})]}),"\n","\n",(0,l.jsx)(j.default,{}),"\n",(0,l.jsxs)(n.h2,{id:"performanceremovemomentlocale",children:["performance.removeMomentLocale",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceremovemomentlocale",children:"#"})]}),"\n","\n",(0,l.jsx)(x.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fapi%2Fconfig-performance.mdx"]={toc:[{text:"performance.buildCache",id:"performancebuildcache",depth:2},{text:"performance.bundleAnalyze",id:"performancebundleanalyze",depth:2},{text:"performance.chunkSplit",id:"performancechunksplit",depth:2},{text:"performance.printFileSize",id:"performanceprintfilesize",depth:2},{text:"performance.profile",id:"performanceprofile",depth:2},{text:"performance.removeConsole",id:"performanceremoveconsole",depth:2},{text:"performance.removeMomentLocale",id:"performanceremovemomentlocale",depth:2}],title:"Performance Config",frontmatter:{extractApiHeaders:[2]}};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,i._)((0,c._)({},e),{children:(0,l.jsx)(u,(0,c._)({},e))})):u(e)}},619:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,c=r("15169"),i=r("43932"),l=r("9880"),d=r("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"type BuildCacheConfig =\n  | {\n      /**\n       * webpack 文件缓存系统的缓存目录\n       */\n      cacheDirectory?: string;\n    }\n  | boolean;\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"const defaultBuildCacheConfig = {\n  cacheDirectory: './node_modules/.cache/webpack',\n};\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"打包工具："})," ",(0,l.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"控制 Builder 在构建过程中的缓存行为。"}),"\n",(0,l.jsxs)(n.p,{children:["Builder 默认会开启构建缓存来提升二次构建的速度，并默认把生成的缓存文件写到 ",(0,l.jsx)(n.code,{children:"./node_modules/.cache/webpack"})," 目录下。"]}),"\n",(0,l.jsxs)(n.p,{children:["你可以通过 ",(0,l.jsx)(n.code,{children:"buildCache"})," 配置缓存路径，比如："]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    buildCache: {\n      cacheDirectory: './node_modules/.custom_cache/webpack',\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["如果不希望缓存，你也可以将 ",(0,l.jsx)(n.code,{children:"buildCache"})," 置为 ",(0,l.jsx)(n.code,{children:"false"})," 将其禁用掉："]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    buildCache: false,\n  },\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fperformance%2FbuildCache.md"]={toc:[],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,i._)((0,c._)({},e),{children:(0,l.jsx)(o,(0,c._)({},e))})):o(e)}},26646:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,c=r("15169"),i=r("43932"),l=r("9880"),d=r("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",pre:"pre",h3:"h3",img:"img",ol:"ol"},(0,d.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"类型："})," ",(0,l.jsx)(n.code,{children:"Object | undefined"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["用于开启 ",(0,l.jsx)(n.a,{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer",children:"webpack-bundle-analyzer"})," 插件来分析产物体积。"]}),"\n",(0,l.jsxs)(n.p,{children:["默认情况下，Builder 不会开启 ",(0,l.jsx)(n.code,{children:"webpack-bundle-analyzer"}),"。当开启该功能后，内部的默认配置如下:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"const defaultConfig = {\n  analyzerMode: 'static',\n  openAnalyzer: false,\n  // target 为编译目标，如 `web`、`node` 等\n  reportFilename: `report-${target}.html`,\n};\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"启用-bundle-analyze",children:["启用 Bundle Analyze",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#启用-bundle-analyze",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["你有两种方式开启 ",(0,l.jsx)(n.code,{children:"webpack-bundle-analyzer"})," 来分析构建产物的体积:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["添加环境变量 ",(0,l.jsx)(n.code,{children:"BUNDLE_ANALYZE=true"}),"，比如："]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"BUNDLE_ANALYZE=true pnpm build\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["配置 ",(0,l.jsx)(n.code,{children:"performance.bundleAnalyze"})," 来固定开启："]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    bundleAnalyze: {},\n  },\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"在启用后，Builder 会生成一个分析构建产物体积的 HTML 文件，并在 Terminal 中打印以下日志："}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"Webpack Bundle Analyzer saved report to /Project/my-project/dist/report-web.html\n"})}),"\n",(0,l.jsx)(n.p,{children:"手动在浏览器中打开该文件，可以看到打包产物的瓦片图；区块的面积越大，说明该模块的体积越大。"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/mwa-build-analyze-8784f762c1ab0cb20935829d5f912c4c.png",alt:""})}),"\n",(0,l.jsxs)(n.h3,{id:"覆盖默认配置",children:["覆盖默认配置",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#覆盖默认配置",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["你可以通过 ",(0,l.jsx)(n.code,{children:"performance.bundleAnalyze"})," 来覆盖默认配置，比如开启 ",(0,l.jsx)(n.code,{children:"server"})," 模式："]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    bundleAnalyze: process.env.BUNDLE_ANALYZE\n      ? {\n          analyzerMode: 'server',\n          openAnalyzer: true,\n        }\n      : {},\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"size-类型",children:["Size 类型",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#size-类型",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["在 ",(0,l.jsx)(n.code,{children:"webpack-bundle-analyzer"})," 的面板中，你可以在左上角控制 Size 类型（默认为 ",(0,l.jsx)(n.code,{children:"Parsed"}),"）："]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Stat"}),"：从打包工具的 ",(0,l.jsx)(n.code,{children:"stats"})," 对象中获取的体积，它反映了代码在压缩之前的体积。"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Parsed"}),"：磁盘上的文件体积，它反映了代码在压缩之后的体积。"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Gzipped"}),"：浏览器里请求的文件体积，它反映了代码在压缩和 gzip 后的体积。"]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"生成-statsjson",children:["生成 stats.json",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#生成-statsjson",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"generateStatsFile"})," 设置为 true 时，将会生成 stats JSON 文件。"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    bundleAnalyze: {\n      generateStatsFile: true,\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"注意事项",children:["注意事项",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项",children:"#"})]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["开启 Server 模式会导致 ",(0,l.jsx)(n.code,{children:"build"})," 进程不能正常退出。"]}),"\n",(0,l.jsxs)(n.li,{children:["开启 bundleAnalyzer 会降低构建性能。因此，在日常开发过程中不应该开启此配置项，建议通过 ",(0,l.jsx)(n.code,{children:"BUNDLE_ANALYZE"})," 环境变量来按需开启。"]}),"\n",(0,l.jsxs)(n.li,{children:["由于 ",(0,l.jsx)(n.code,{children:"dev"})," 阶段不会进行代码压缩等优化，无法反映真实的产物体积，因此建议在 ",(0,l.jsx)(n.code,{children:"build"})," 阶段分析产物体积。"]}),"\n"]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fperformance%2FbundleAnalyze.md"]={toc:[{text:"启用 Bundle Analyze",id:"启用-bundle-analyze",depth:3},{text:"覆盖默认配置",id:"覆盖默认配置",depth:3},{text:"Size 类型",id:"size-类型",depth:3},{text:"生成 stats.json",id:"生成-statsjson",depth:3},{text:"注意事项",id:"注意事项",depth:3}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,i._)((0,c._)({},e),{children:(0,l.jsx)(o,(0,c._)({},e))})):o(e)}},18653:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,c=r("15169"),i=r("43932"),l=r("9880"),d=r("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h3:"h3",a:"a",div:"div",blockquote:"blockquote"},(0,d.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"类型："})," ",(0,l.jsx)(n.code,{children:"Object"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"默认值："})," ",(0,l.jsx)(n.code,{children:"{ strategy: 'split-by-experience' }"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"performance.chunkSplit"})," 用于配置 Builder 的拆包策略。配置项的类型 ",(0,l.jsx)(n.code,{children:"ChunkSplit"})," 如下:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"type ForceSplitting = RegExp[] | Record<string, RegExp>;\n\ninterface BaseChunkSplit {\n  strategy?:\n    | 'split-by-module'\n    | 'split-by-experience'\n    | 'all-in-one'\n    | 'single-vendor';\n  override?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\ninterface SplitBySize {\n  strategy?: 'split-by-size';\n  minSize?: number;\n  maxSize?: number;\n  override?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\ninterface SplitCustom {\n  strategy?: 'custom';\n  splitChunks?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\nexport type ChunkSplit = BaseChunkSplit | SplitBySize | SplitCustom;\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"chunksplitstrategy",children:["chunkSplit.strategy",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitstrategy",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"Builder 支持设置以下几种拆包策略："}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"split-by-experience"}),": 根据经验制定的拆分策略，自动将一些常用的 npm 包拆分为体积适中的 chunk。"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"split-by-module"}),": 按 NPM 包的粒度拆分，每个 NPM 包对应一个 chunk。"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"split-by-size"}),"：根据模块大小自动进行拆分。"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"all-in-one"}),": 将所有代码全部打包到一个 chunk 中。"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"single-vendor"}),": 将所有 NPM 包的代码打包到一个单独的 chunk 中。"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"custom"}),": 自定义拆包配置。"]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"默认拆包策略",children:["默认拆包策略",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认拆包策略",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["Builder 默认采用 ",(0,l.jsx)(n.code,{children:"split-by-experience"})," 策略，这是我们根据经验制定的策略。具体来说，当你的项目中引用了以下 npm 包时，它们会自动被拆分为单独的 chunk："]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"lib-polyfill.js"}),"：包含 ",(0,l.jsx)(n.code,{children:"core-js"}),"，",(0,l.jsx)(n.code,{children:"@babel/runtime"}),"，",(0,l.jsx)(n.code,{children:"@swc/helpers"}),"。"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"lib-react.js"}),"：包含 ",(0,l.jsx)(n.code,{children:"react"}),"，",(0,l.jsx)(n.code,{children:"react-dom"}),"。"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"lib-router.js"}),"：包含 ",(0,l.jsx)(n.code,{children:"react-router"}),"，",(0,l.jsx)(n.code,{children:"react-router-dom"}),"，",(0,l.jsx)(n.code,{children:"history"}),"，",(0,l.jsx)(n.code,{children:"@remix-run/router"}),"。"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"lib-lodash.js"}),"：包含 ",(0,l.jsx)(n.code,{children:"lodash"}),"，",(0,l.jsx)(n.code,{children:"lodash-es"}),"。"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"lib-antd.js"}),"：包含 ",(0,l.jsx)(n.code,{children:"antd"}),"。"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"lib-arco.js"}),"：包含 ",(0,l.jsx)(n.code,{children:"@arco-design/web-react"}),"。"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"lib-semi.js"}),"：包含 ",(0,l.jsx)(n.code,{children:"@douyinfe/semi-ui"}),"。"]}),"\n"]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsx)(n.p,{children:"如果项目中没有安装或引用以上 npm 包，则不会生成相应的 chunk。"})})]}),"\n",(0,l.jsxs)(n.p,{children:["如果你想使用其他拆包策略，可以通过 ",(0,l.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," 配置项来指定。"]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["在使用 Rspack 作为打包工具时，暂时不支持采用 ",(0,l.jsx)(n.code,{children:"split-by-module"})," 策略。\n"]})})]}),"\n",(0,l.jsxs)(n.h3,{id:"chunksplitminsize",children:["chunkSplit.minSize",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitminsize",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"类型："})," ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"默认值："})," ",(0,l.jsx)(n.code,{children:"10000"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["当 ",(0,l.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," 为 ",(0,l.jsx)(n.code,{children:"split-by-size"})," 时，可以通过 ",(0,l.jsx)(n.code,{children:"performance.chunkSplit.minSize"})," 配置项来指定 chunk 的最小大小，单位为字节。默认值为 10000。比如:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-size',\n      minSize: 20000,\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"chunksplitmaxsize",children:["chunkSplit.maxSize",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitmaxsize",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"类型："})," ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"默认值："})," ",(0,l.jsx)(n.code,{children:"Infinity"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["当 ",(0,l.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," 为 ",(0,l.jsx)(n.code,{children:"split-by-size"})," 时，可以通过 ",(0,l.jsx)(n.code,{children:"performance.chunkSplit.maxSize"})," 配置项来指定 chunk 的最大大小，单位为字节。默认值为 ",(0,l.jsx)(n.code,{children:"Infinity"}),"。比如:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-size',\n      maxSize: 50000,\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"chunksplitforcesplitting",children:["chunkSplit.forceSplitting",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitforcesplitting",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"类型："})," ",(0,l.jsx)(n.code,{children:"RegExp[] | Record<string, RegExp>"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"默认值："})," ",(0,l.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["通过 ",(0,l.jsx)(n.code,{children:"performance.chunkSplit.forceSplitting"})," 配置项可以将指定的模块强制拆分为一个独立的 chunk。"]}),"\n",(0,l.jsxs)(n.p,{children:["比如将 node_modules 下的 ",(0,l.jsx)(n.code,{children:"axios"})," 库拆分到 ",(0,l.jsx)(n.code,{children:"axios.js"})," 中："]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n      forceSplitting: {\n        axios: /node_modules\\/axios/,\n      },\n    },\n  },\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"相比直接配置 webpack 的 splitChunks，这是一个更加简便的方式。"}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["注意，通过 ",(0,l.jsx)(n.code,{children:"forceSplitting"})," 配置拆分的 chunk 会通过 ",(0,l.jsx)(n.code,{children:"<script>"})," 标签插入到 HTML 文件中，作为首屏请求的资源。因此，请根据实际场景来进行适当地拆分，避免首屏资源体积过大。\n"]})})]}),"\n",(0,l.jsxs)(n.h3,{id:"chunksplitsplitchunks",children:["chunkSplit.splitChunks",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitsplitchunks",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["当 ",(0,l.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," 为 ",(0,l.jsx)(n.code,{children:"custom"})," 时，可以通过 ",(0,l.jsx)(n.code,{children:"performance.chunkSplit.splitChunks"})," 配置项来指定自定义的 webpack 拆包配置。此配置会和 webpack 的 splitChunks 配置进行合并（cacheGroups 配置也会合并）。比如:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'custom',\n      splitChunks: {\n        cacheGroups: {\n          react: {\n            test: /[\\\\/]node_modules[\\\\/](react|react-dom)[\\\\/]/,\n            name: 'react',\n            chunks: 'all',\n          },\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"chunksplitoverride",children:["chunkSplit.override",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitoverride",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["当 ",(0,l.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," 为 ",(0,l.jsx)(n.code,{children:"split-by-experience"}),"、",(0,l.jsx)(n.code,{children:"split-by-module"}),"、",(0,l.jsx)(n.code,{children:"split-by-size"})," 或 ",(0,l.jsx)(n.code,{children:"single-vendor"})," 时，可以通过 ",(0,l.jsx)(n.code,{children:"performance.chunkSplit.override"})," 配置项来自定义 webpack 拆包配置，此配置会和 webpack 的 splitChunks 配置进行合并（cacheGroups 配置也会合并）。比如:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n      override: {\n        cacheGroups: {\n          react: {\n            test: /[\\\\/]node_modules[\\\\/](react|react-dom)[\\\\/]/,\n            name: 'react',\n            chunks: 'all',\n          },\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:'当 Builder 构建 "node" 类型的产物时，由于 Node Bundles 不需要通过拆包来优化加载性能，因此 chunkSplit 规则不会生效。'}),"\n"]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fperformance%2FchunkSplit.md"]={toc:[{text:"chunkSplit.strategy",id:"chunksplitstrategy",depth:3},{text:"默认拆包策略",id:"默认拆包策略",depth:3},{text:"chunkSplit.minSize",id:"chunksplitminsize",depth:3},{text:"chunkSplit.maxSize",id:"chunksplitmaxsize",depth:3},{text:"chunkSplit.forceSplitting",id:"chunksplitforcesplitting",depth:3},{text:"chunkSplit.splitChunks",id:"chunksplitsplitchunks",depth:3},{text:"chunkSplit.override",id:"chunksplitoverride",depth:3}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,i._)((0,c._)({},e),{children:(0,l.jsx)(o,(0,c._)({},e))})):o(e)}},90082:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,c=r("15169"),i=r("43932"),l=r("9880"),d=r("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h3:"h3",a:"a"},(0,d.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"类型："})," ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"默认值："})," ",(0,l.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"是否在生产环境构建后输出所有静态资源文件的体积。"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"info    File sizes after production build:\n\n  File                                     Size         Gzipped\n  dist/static/js/lib-corejs.1c836fe7.js    212.89 kB    66.57 kB\n  dist/static/js/lib-react.fcafbc5c.js     134.65 kB    43.45 kB\n  dist/static/js/main.6ff06f70.js          8.93 kB      3.73 kB\n  dist/static/css/main.9f48031b.css        2.64 kB      927 B\n  dist/html/main/index.html                1.64 kB      874 B\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"示例",children:["示例",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"禁用相关日志："}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    printFileSize: false,\n  },\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fperformance%2FprintFileSize.md"]={toc:[{text:"示例",id:"示例",depth:3}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,i._)((0,c._)({},e),{children:(0,l.jsx)(o,(0,c._)({},e))})):o(e)}},96296:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,c=r("15169"),i=r("43932"),l=r("9880"),d=r("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"类型："})," ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"默认值："})," ",(0,l.jsx)(n.code,{children:"false"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"打包工具："})," ",(0,l.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["是否捕获每个模块的耗时信息，对应 webpack 的 ",(0,l.jsx)(n.a,{href:"https://webpack.js.org/configuration/other-options/#profile",target:"_blank",rel:"noopener noreferrer",children:"profile"})," 配置。"]}),"\n",(0,l.jsxs)(n.h3,{id:"示例",children:["示例",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    profile: true,\n  },\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"开启后，Webpack 生成一些有关模块的统计数据的 JSON 文件会将模块构建的耗时信息也包含进去。"})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fperformance%2Fprofile.md"]={toc:[{text:"示例",id:"示例",depth:3}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,i._)((0,c._)({},e),{children:(0,l.jsx)(o,(0,c._)({},e))})):o(e)}},5927:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,c=r("15169"),i=r("43932"),l=r("9880"),d=r("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"类型："})," ",(0,l.jsx)(n.code,{children:"boolean | ConsoleType[]"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"默认值："})," ",(0,l.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["在生产环境构建时，是否自动移除代码中的 ",(0,l.jsx)(n.code,{children:"console.xx"}),"。"]}),"\n",(0,l.jsxs)(n.h4,{id:"移除所有-console",children:["移除所有 console",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#移除所有-console",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["当 ",(0,l.jsx)(n.code,{children:"removeConsole"})," 被设置为 ",(0,l.jsx)(n.code,{children:"true"})," 时，会移除所有类型的 ",(0,l.jsx)(n.code,{children:"console.xx"}),"："]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    removeConsole: true,\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h4,{id:"移除特定的-console",children:["移除特定的 console",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#移除特定的-console",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["你也可以指定仅移除特定类型的 ",(0,l.jsx)(n.code,{children:"console.xx"}),"，比如移除 ",(0,l.jsx)(n.code,{children:"console.log"})," 和 ",(0,l.jsx)(n.code,{children:"console.warn"}),"："]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    removeConsole: ['log', 'warn'],\n  },\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"目前支持配置以下类型的 console："}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"type ConsoleType = 'log' | 'info' | 'warn' | 'error' | 'table' | 'group';\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fperformance%2FremoveConsole.md"]={toc:[{text:"移除所有 console",id:"移除所有-console",depth:4},{text:"移除特定的 console",id:"移除特定的-console",depth:4}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,i._)((0,c._)({},e),{children:(0,l.jsx)(o,(0,c._)({},e))})):o(e)}},34432:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,c=r("15169"),i=r("43932"),l=r("9880"),d=r("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"类型："})," ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"默认值："})," ",(0,l.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["是否移除 ",(0,l.jsx)(n.a,{href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer",children:"moment.js"})," 的语言包文件。"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"moment.js"})," 默认包含了大量的语言包文件，会导致打包后的包体积增大。"]}),"\n",(0,l.jsxs)(n.p,{children:["当项目中使用了 ",(0,l.jsx)(n.code,{children:"moment.js"})," 时，推荐开启此选项，自动排除所有的语言包文件："]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    removeMomentLocale: true,\n  },\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"开启后，可以通过以下方式来加载语言包文件："}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"import moment from 'moment';\nimport 'moment/locale/zh-cn';\n\nmoment.locale('zh-cn');\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fperformance%2FremoveMomentLocale.md"]={toc:[],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,i._)((0,c._)({},e),{children:(0,l.jsx)(o,(0,c._)({},e))})):o(e)}}}]);