(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_terser_mdx"],{13231:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var s,t=r("15169"),i=r("43932"),o=r("9880"),c=r("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3",div:"div"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"类型："})," ",(0,o.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const defaultTerserOptions = {\n  terserOptions: {\n    mangle: {\n      safari10: true,\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"打包工具："})," ",(0,o.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["在生产环境构建时，Builder 会通过 ",(0,o.jsx)(n.a,{href:"https://github.com/webpack-contrib/terser-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"terser-webpack-plugin"})," 对 JavaScript 代码进行压缩优化。可以通过 ",(0,o.jsx)(n.code,{children:"tools.terser"})," 修改 ",(0,o.jsx)(n.a,{href:"https://github.com/webpack-contrib/terser-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"terser-webpack-plugin"})," 的配置。"]}),"\n",(0,o.jsxs)(n.h3,{id:"object-类型",children:["Object 类型",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["当 ",(0,o.jsx)(n.code,{children:"tools.terser"})," 的值为 ",(0,o.jsx)(n.code,{children:"Object"})," 类型时，会与默认配置通过 ",(0,o.jsx)(n.code,{children:"Object.assign"})," 合并。"]}),"\n",(0,o.jsxs)(n.p,{children:["例如通过 ",(0,o.jsx)(n.code,{children:"exclude"})," 排除部分文件的压缩："]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    terser: {\n      exclude: /\\/excludes/,\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"function-类型",children:["Function 类型",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["当 ",(0,o.jsx)(n.code,{children:"tools.terser"})," 配置为 ",(0,o.jsx)(n.code,{children:"Function"})," 类型时，默认配置作为第一个参数传入，可以直接修改配置对象，也可以返回一个值作为最终结果。"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    terser: opts => {\n      opts.exclude = /\\/excludes/;\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive tip",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"禁用代码压缩"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["如果你需要禁用代码压缩，可以使用 ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputdisableminimize",target:"_blank",rel:"noopener noreferrer",children:"output.disableMinimize"})," 配置项。\n"]})})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/builder-doc/docs/zh/config/tools/terser.md"]={toc:[{text:"Object 类型",id:"object-类型",depth:3},{text:"Function 类型",id:"function-类型",depth:3}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,i._(t._({},e),{children:(0,o.jsx)(d,t._({},e))})):d(e)}},74157:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s,t=r("15169"),i=r("43932"),o=r("9880"),c=r("23169"),d=r.ir(r("13231"));function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"toolsterser",children:["tools.terser",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsterser",children:"#"})]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive tip",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolsterser",target:"_blank",rel:"noopener noreferrer",children:"tools.terser"}),"。\n"]})})]}),"\n","\n",(0,o.jsx)(d.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/zh/configure/app/tools/terser.mdx"]={toc:[],title:"tools.terser",frontmatter:{sidebar_label:"terser"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,i._(t._({},e),{children:(0,o.jsx)(l,t._({},e))})):l(e)}}}]);