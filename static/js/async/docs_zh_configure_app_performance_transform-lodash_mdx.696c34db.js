(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_performance_transform-lodash_mdx"],{6277:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var s,a=r("15169"),d=r("43932"),o=r("9880"),l=r("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre"},(0,l.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"类型："})," ",(0,o.jsx)(n.code,{children:"boolean"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"默认值："})," ",(0,o.jsx)(n.code,{children:"true"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"打包工具："})," ",(0,o.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["是否模块化 ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/lodash",target:"_blank",rel:"noopener noreferrer",children:"lodash"})," 的导入，删除未使用的 lodash 模块，从而减少 lodash 代码体积。"]}),"\n",(0,o.jsxs)(n.p,{children:["这项优化基于 ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-plugin-lodash",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-lodash"})," 和 ",(0,o.jsx)(n.a,{href:"https://github.com/web-infra-dev/swc-plugins/tree/main/crates/plugin_lodash",target:"_blank",rel:"noopener noreferrer",children:"swc-plugin-lodash"})," 实现。"]}),"\n",(0,o.jsxs)(n.h3,{id:"示例",children:["示例",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["该选项默认开启，Builder 会自动将 ",(0,o.jsx)(n.code,{children:"lodash"})," 的代码引用指向子路径。"]}),"\n",(0,o.jsx)(n.p,{children:"比如："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="input.js"',children:"import _ from 'lodash';\nimport { add } from 'lodash/fp';\n\nconst addOne = add(1);\n_.map([1, 2, 3], addOne);\n"})}),"\n",(0,o.jsx)(n.p,{children:"转换后的代码为："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="output.js"',children:"import _add from 'lodash/fp/add';\nimport _map from 'lodash/map';\n\nconst addOne = _add(1);\n_map([1, 2, 3], addOne);\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"关闭转换",children:["关闭转换",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#关闭转换",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["在个别情况下，",(0,o.jsx)(n.code,{children:"lodash"})," 的 import 转换可能会生成不符合预期的代码，此时你可以手动关闭这项优化："]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    transformLodash: false,\n  },\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fperformance%2FtransformLodash.md"]={toc:[{text:"示例",id:"示例",depth:3},{text:"关闭转换",id:"关闭转换",depth:3}],title:"",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,d._)((0,a._)({},e),{children:(0,o.jsx)(t,(0,a._)({},e))})):t(e)}},65923:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return i}});var s,a=r("15169"),d=r("43932"),o=r("9880"),l=r("23169"),t=r("6277");function c(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,l.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"performancetransformlodash",children:["performance.transformLodash",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancetransformlodash",children:"#"})]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive tip",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-performance.html#performancetransformlodash",target:"_blank",rel:"noopener noreferrer",children:"performance.transformLodash"}),"。\n"]})})]}),"\n","\n",(0,o.jsx)(t.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fperformance%2Ftransform-lodash.mdx"]={toc:[],title:"performance.transformLodash",frontmatter:{sidebar_label:"transformLodash"}};var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,d._)((0,a._)({},e),{children:(0,o.jsx)(c,(0,a._)({},e))})):c(e)}}}]);