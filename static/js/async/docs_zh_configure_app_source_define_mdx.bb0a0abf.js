(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_define_mdx"],{60059:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var s,i=r("15169"),d=r("43932"),c=r("9880"),o=r("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",h3:"h3",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"Record<string, unknown>"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"构建时将代码中的变量替换成其它值或者表达式，可以用于在代码逻辑中区分开发环境与生产环境等场景。"}),"\n",(0,c.jsxs)(n.p,{children:["传入的配置对象的键名是需要替换变量的名称，或者是用 ",(0,c.jsx)(n.code,{children:"."})," 连接的多个标识符，配置项的值则根据类型进行不同的处理："]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"字符串会被当作代码片段。"}),"\n",(0,c.jsx)(n.li,{children:"包括函数在内的其他类型会被转换成字符串。"}),"\n",(0,c.jsxs)(n.li,{children:["嵌套对象的父子键名之间会用 ",(0,c.jsx)(n.code,{children:"."})," 连接作为需要替换的变量名。"]}),"\n",(0,c.jsx)(n.li,{children:"以 typeof 开头的键名会用来替换 typeof 调用。"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["更多细节参考 ",(0,c.jsx)(n.a,{href:"https://webpack.js.org/plugins/define-plugin/",target:"_blank",rel:"noopener noreferrer",children:"webpack - DefinePlugin"}),"。"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["在使用 Rspack 作为打包工具时，支持的类型可参考 ",(0,c.jsx)(n.a,{href:"https://www.rspack.dev/zh/config/builtins.html#builtinsdefine",target:"_blank",rel:"noopener noreferrer",children:"Rspack.builtins.define"}),"\n"]})})]}),"\n",(0,c.jsxs)(n.h3,{id:"示例",children:["示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    define: {\n      PRODUCTION: JSON.stringify(true),\n      VERSION: JSON.stringify('5fa3b9'),\n      BROWSER_SUPPORTS_HTML5: true,\n      TWO: '1 + 1',\n      'typeof window': JSON.stringify('object'),\n      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),\n      'import.meta': { test: undefined },\n    },\n  },\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"表达式会被替换为对应的代码段："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const foo = TWO;\n\n// ⬇️ Turn into being...\nconst foo = 1 + 1;\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fsource%2Fdefine.md"]={toc:[{text:"示例",id:"示例",depth:3}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,d._)((0,i._)({},e),{children:(0,c.jsx)(t,(0,i._)({},e))})):t(e)}},84311:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,i=r("15169"),d=r("43932"),c=r("9880"),o=r("23169"),t=r("60059");function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,o.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"sourcedefine",children:["source.define",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcedefine",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourcedefine",target:"_blank",rel:"noopener noreferrer",children:"source.define"}),"。\n"]})})]}),"\n","\n",(0,c.jsx)(t.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fconfigure%2Fapp%2Fsource%2Fdefine.mdx"]={toc:[],title:"source.define",frontmatter:{sidebar_label:"define"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,d._)((0,i._)({},e),{children:(0,c.jsx)(l,(0,i._)({},e))})):l(e)}}}]);