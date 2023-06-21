(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_performance_build-cache_mdx"],{43646:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var c,s=r("15169"),d=r("43932"),a=r("9880"),i=r("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type BuildCacheConfig =\n  | {\n      /**\n       * webpack 文件缓存系统的缓存目录\n       */\n      cacheDirectory?: string;\n    }\n  | boolean;\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const defaultBuildCacheConfig = {\n  cacheDirectory: './node_modules/.cache/webpack',\n};\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"打包工具："})," ",(0,a.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"控制 Builder 在构建过程中的缓存行为。"}),"\n",(0,a.jsxs)(n.p,{children:["Builder 默认会开启构建缓存来提升二次构建的速度，并默认把生成的缓存文件写到 ",(0,a.jsx)(n.code,{children:"./node_modules/.cache/webpack"})," 目录下。"]}),"\n",(0,a.jsxs)(n.p,{children:["你可以通过 ",(0,a.jsx)(n.code,{children:"buildCache"})," 配置缓存路径，比如："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    buildCache: {\n      cacheDirectory: './node_modules/.custom_cache/webpack',\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["如果不希望缓存，你也可以将 ",(0,a.jsx)(n.code,{children:"buildCache"})," 置为 ",(0,a.jsx)(n.code,{children:"false"})," 将其禁用掉："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    buildCache: false,\n  },\n};\n"})})]})}(c=globalThis).__RSPRESS_PAGE_META||(c.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/builder-doc/docs/zh/config/performance/buildCache.md"]={toc:[],title:"",frontmatter:{}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,d._(s._({},e),{children:(0,a.jsx)(l,s._({},e))})):l(e)}},42117:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var c,s=r("15169"),d=r("43932"),a=r("9880"),i=r("23169"),l=r.ir(r("43646"));function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"performancebuildcache",children:["performance.buildCache",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancebuildcache",children:"#"})]}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive tip",children:[(0,a.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,a.jsx)(n.div,{className:"modern-directive-content",children:(0,a.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,a.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-performance.html#performancebuildcache",target:"_blank",rel:"noopener noreferrer",children:"performance.buildCache"}),"。\n"]})})]}),"\n","\n",(0,a.jsx)(l.default,{})]})}(c=globalThis).__RSPRESS_PAGE_META||(c.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/zh/configure/app/performance/build-cache.mdx"]={toc:[],title:"performance.buildCache",frontmatter:{sidebar_label:"buildCache"}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,d._(s._({},e),{children:(0,a.jsx)(o,s._({},e))})):o(e)}}}]);