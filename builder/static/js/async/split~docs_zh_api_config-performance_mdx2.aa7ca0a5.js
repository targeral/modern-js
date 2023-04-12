(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_zh_api_config-performance_mdx2"],{41898:function(e,n,c){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var c in n)Object.defineProperty(e,c,{enumerable:!0,get:n[c]})}(n,{frontmatter:function(){return r},title:function(){return a},toc:function(){return d},default:function(){return i}});var s=c("12151"),l=c("23169"),r={},a="",d=[];function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",p:"p"},(0,l.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"type BuildCacheConfig =\n  | {\n      /**\n       * webpack 文件缓存系统的缓存目录\n       */\n      cacheDirectory?: string;\n    }\n  | boolean;\n"})})]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"const defaultBuildCacheConfig = {\n  cacheDirectory: './node_modules/.cache/webpack',\n};\n"})})]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"打包工具："})," ",(0,s.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"控制 Builder 在构建过程中的缓存行为。"}),"\n",(0,s.jsxs)(n.p,{children:["Builder 默认会开启构建缓存来提升二次构建的速度，并默认把生成的缓存文件写到 ",(0,s.jsx)(n.code,{children:"./node_modules/.cache/webpack"})," 目录下。"]}),"\n",(0,s.jsxs)(n.p,{children:["你可以通过 ",(0,s.jsx)(n.code,{children:"buildCache"})," 配置缓存路径，比如："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    buildCache: {\n      cacheDirectory: './node_modules/.custom_cache/webpack',\n    },\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["如果不希望缓存，你也可以将 ",(0,s.jsx)(n.code,{children:"buildCache"})," 置为 ",(0,s.jsx)(n.code,{children:"false"})," 将其禁用掉："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    buildCache: false,\n  },\n};\n"})})]})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);