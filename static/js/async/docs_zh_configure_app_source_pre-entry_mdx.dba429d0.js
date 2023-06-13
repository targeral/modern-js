(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_pre-entry_mdx"],{87847:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var s=r("9880"),c=r("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"string | string[]"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"在每个页面的入口文件前添加一段代码，这段代码会早于页面的代码执行，因此可以用于执行一些全局的代码逻辑，比如注入 polyfill、设置全局样式等。"}),"\n",(0,s.jsxs)(n.h4,{id:"添加单个脚本",children:["添加单个脚本",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加单个脚本",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["首先创建一个 ",(0,s.jsx)(n.code,{children:"src/polyfill.ts"})," 文件："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"console.log('I am a polyfill');\n"})}),"\n",(0,s.jsxs)(n.p,{children:["然后将 ",(0,s.jsx)(n.code,{children:"src/polyfill.ts"})," 配置到 ",(0,s.jsx)(n.code,{children:"source.preEntry"})," 上："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/polyfill.ts',\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["重新运行编译并访问任意页面，可以看到 ",(0,s.jsx)(n.code,{children:"src/polyfill.ts"})," 中的代码已经执行，并在 console 中输出了对应的内容。"]}),"\n",(0,s.jsxs)(n.h4,{id:"添加全局样式",children:["添加全局样式",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加全局样式",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["你也可以通过 ",(0,s.jsx)(n.code,{children:"source.preEntry"})," 来配置全局样式，这段 CSS 代码会早于页面代码加载，比如引入一个 ",(0,s.jsx)(n.code,{children:"normalize.css"})," 文件："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/normalize.css',\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"添加多个脚本",children:["添加多个脚本",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加多个脚本",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["你可以将 ",(0,s.jsx)(n.code,{children:"preEntry"})," 设置为数组来添加多个脚本，它们会按数组顺序执行："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: ['./src/polyfill-a.ts', './src/polyfill-b.ts'],\n  },\n};\n"})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},65106:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return l},title:function(){return d},toc:function(){return t},default:function(){return a}});var s=r("9880"),c=r("23169"),i=r.ir(r("87847")),l={sidebar_label:"preEntry"},d="source.preEntry",t=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourcepreentry",children:["source.preEntry",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcepreentry",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourcepreentry",target:"_blank",rel:"noopener noreferrer",children:"source.preEntry"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(i.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);