(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_zh_api_config-source_mdx6"],{1859:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return d},title:function(){return a},toc:function(){return o},default:function(){return i}});var c=n("12151"),r=n("23169"),d={},a="",o=[{text:"示例",depth:3,id:"示例"},{text:"Array 类型",depth:4,id:"array-类型"},{text:"Function 类型",depth:4,id:"function-类型"}];function l(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre",img:"img",h4:"h4"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"类型："})," ",(0,c.jsx)(s.code,{children:"Array<string | Regexp> | Function"})]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"默认值："})," ",(0,c.jsx)(s.code,{children:"undefined"})]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"打包工具："})," ",(0,c.jsx)(s.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"限制源代码的引用路径。配置该选项后，所有源文件只能从约定的目录下引用代码，从其他目录引用代码会产生对应的报错提示。"}),"\n",(0,c.jsxs)(s.h3,{id:"示例",children:["示例",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:["首先我们配置 ",(0,c.jsx)(s.code,{children:"moduleScopes"})," 仅包含 ",(0,c.jsx)(s.code,{children:"src"})," 目录："]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src'],\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(s.p,{children:["然后在 ",(0,c.jsx)(s.code,{children:"src/App.tsx"})," 中导入 ",(0,c.jsx)(s.code,{children:"src"})," 目录外部的 ",(0,c.jsx)(s.code,{children:"utils/a"})," 模块:"]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-js",children:"import a from '../utils/a';\n"})})]})}),"\n",(0,c.jsx)(s.p,{children:"在编译时，会提示引用路径错误:"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/module-scopes-error.png",alt:"scopes-error"})}),"\n",(0,c.jsxs)(s.p,{children:["通过该选项配置 ",(0,c.jsx)(s.code,{children:"utils"})," 目录，再进行编译，则不会出现错误提示。"]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src', './utils'],\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(s.h4,{id:"array-类型",children:["Array 类型",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#array-类型",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:["当 ",(0,c.jsx)(s.code,{children:"moduleScopes"})," 的值为 ",(0,c.jsx)(s.code,{children:"Array"})," 类型时，可以直接设置若干个代码路径，比如添加以下配置："]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src', './shared', './utils'],\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(s.h4,{id:"function-类型",children:["Function 类型",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"moduleScopes"})," 也支持通过函数的形式来进行修改，避免覆盖默认值："]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: scopes => {\n      scopes.push('./shared');\n    },\n  },\n};\n"})})]})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return s?(0,c.jsx)(s,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}}}]);