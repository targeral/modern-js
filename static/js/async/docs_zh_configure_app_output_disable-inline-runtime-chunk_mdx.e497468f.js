(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_disable-inline-runtime-chunk_mdx"],{43167:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var r=i("9880"),s=i("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",a:"a",h3:"h3",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"用于控制是否将打包工具的 runtime 代码内联到 HTML 中。"}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"什么是 runtimeChunk"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["当 Builder 构建完成后，会在 dist 目录生成 ",(0,r.jsx)(n.code,{children:"builder-runtime.js"})," 文件，该文件为 webpack 或 Rspack 的 runtime 代码，即 runtimeChunk。"]}),"\n",(0,r.jsxs)(n.p,{children:["runtimeChunk 是一段运行时代码，它由 webpack 或 Rspack 提供，包含必要的模块处理逻辑，比如模块加载、模块解析等，具体可参考 ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/concepts/manifest/#runtime",target:"_blank",rel:"noopener noreferrer",children:"Runtime"}),"。"]}),"\n"]})]}),"\n",(0,r.jsx)(n.p,{children:"在生产环境下，Builder 默认会将 runtimeChunk 文件内联到 HTML 文件中，而不是写到产物目录中，这样做是为了减少文件请求的数量。"}),"\n",(0,r.jsxs)(n.h3,{id:"禁用内联",children:["禁用内联",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#禁用内联",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["如果你不希望 runtimeChunk 文件被内联到 HTML 文件里，可以把 ",(0,r.jsx)(n.code,{children:"disableInlineRuntimeChunk"})," 设置为 ",(0,r.jsx)(n.code,{children:"true"}),"，此时会生成一个独立的 ",(0,r.jsx)(n.code,{children:"builder-runtime.js"})," 文件。"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableInlineRuntimeChunk: true,\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"合并到页面文件中",children:["合并到页面文件中",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#合并到页面文件中",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"如果你不希望生成独立的 runtimeChunk 文件，而是想让 runtimeChunk 代码被打包到页面的 JS 文件里，可以这样设置："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: {\n      optimization: {\n        runtimeChunk: false,\n      },\n    },\n  },\n};\n"})})]})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}},10902:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return a},default:function(){return u}});var r=i("9880"),s=i("23169"),t=i.ir(i("43167")),c={sidebar_label:"disableInlineRuntimeChunk"},d="output.disableInlineRuntimeChunk",a=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"output-disableinlineruntimechunk",children:["output.disableInlineRuntimeChunk",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#output-disableinlineruntimechunk",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputdisableinlineruntimechunk",target:"_blank",rel:"noopener noreferrer",children:"output.disableInlineRuntimeChunk"}),"。\n"]})})]}),"\n","\n",(0,r.jsx)(t.default,{})]})}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);