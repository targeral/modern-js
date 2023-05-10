(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_convert-to-rem_mdx"],{56661:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var s=r("9880"),d=r("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean | object"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["通过设置 ",(0,s.jsx)(n.code,{children:"output.convertToRem"}),"，Builder 可进行如下处理："]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"将 CSS 中的 px 转成 rem"}),"\n",(0,s.jsx)(n.li,{children:"在 HTML 模版中插入运行时代码，对根元素 fontSize 进行设置"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"boolean-类型",children:["Boolean 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当设置 ",(0,s.jsx)(n.code,{children:"output.convertToRem"})," 为 ",(0,s.jsx)(n.code,{children:"true"}),"，将开启 rem 处理能力。"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    convertToRem: true,\n  },\n};\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"此时，rem 配置默认如下："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"{\n  enableRuntime: true,\n  rootFontSize: 50,\n  screenWidth: 375,\n  rootFontSize: 50,\n  maxRootFontSize: 64,\n  widthQueryKey: '',\n  excludeEntries: [],\n  supportLandscape: false,\n  useRootFontSizeBeyondMax: false,\n  pxtorem: {\n    rootValue: 50,\n    unitPrecision: 5,\n    propList: ['*'],\n  }\n}\n"})})]})}),"\n",(0,s.jsxs)(n.h4,{id:"object-类型",children:["Object 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当 ",(0,s.jsx)(n.code,{children:"output.convertToRem"})," 的值为 ",(0,s.jsx)(n.code,{children:"object"})," 类型时，Builder 会根据当前配置进行 rem 处理。"]}),"\n",(0,s.jsx)(n.p,{children:"选项："}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"名称"}),"\n",(0,s.jsx)(n.th,{children:"类型"}),"\n",(0,s.jsx)(n.th,{children:"默认值"}),"\n",(0,s.jsx)(n.th,{children:"描述"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"enableRuntime"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})}),"\n",(0,s.jsx)(n.td,{children:"是否自动生成 runtime 代码来动态计算根元素字体大小"}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"inlineRuntime"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})}),"\n",(0,s.jsxs)(n.td,{children:["是否将 runtime 代码内联到 HTML 文件中。如果设置为 ",(0,s.jsx)(n.code,{children:"false"}),"，运行时代码会被抽取为一个独立的 ",(0,s.jsx)(n.code,{children:"convert-rem.[version].js"})," 文件，并输出到产物目录下"]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"rootFontSize"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"50"})}),"\n",(0,s.jsx)(n.td,{children:"根元素字体值"}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"maxRootFontSize"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"64"})}),"\n",(0,s.jsx)(n.td,{children:"最大根元素字体值"}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"widthQueryKey"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'' "})}),"\n",(0,s.jsx)(n.td,{children:"根据 widthQueryKey 的值去 url query 中取 client width"}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"screenWidth"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"375"})}),"\n",(0,s.jsx)(n.td,{children:"UI 设计图宽度"}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"excludeEntries"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string[]"})}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[]"})}),"\n",(0,s.jsx)(n.td,{children:"不进行调整的页面入口"}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"supportLandscape"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),"\n",(0,s.jsx)(n.td,{children:"横屏时使用 height 计算 rem"}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"useRootFontSizeBeyondMax"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),"\n",(0,s.jsx)(n.td,{children:"超过 maxRootFontSize 时，是否使用 rootFontSize"}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"pxtorem"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object"})}),"\n",(0,s.jsxs)(n.td,{children:["rootValue。默认与 rootFontSize 相同 ","unitPrecision: 5。精确位数 ","propList: ['*']。支持转换的 CSS 属性"]}),"\n",(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"https://github.com/cuth/postcss-pxtorem#options",target:"_blank",rel:"noopener noreferrer",children:"postcss-pxtorem"})," 插件属性"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    convertToRem: {\n      rootFontSize: 30,\n      excludeEntries: ['404', 'page2'],\n      pxtorem: {\n        propList: ['font-size'],\n      },\n    },\n  },\n};\n"})})]})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}},65847:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return i},toc:function(){return o},default:function(){return h}});var s=r("9880"),d=r("23169"),t=r.ir(r("56661")),c={sidebar_label:"convertToRem"},i="output.convertToRem",o=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"output-converttorem",children:["output.convertToRem",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#output-converttorem",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputconverttorem",target:"_blank",rel:"noopener noreferrer",children:"output.convertToRem"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(t.default,{})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);