(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_pre-entry_mdx"],{32457:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return t}});var s,c=n("15169"),d=n("43932"),l=n("9880"),i=n("23169");function o(e){var r=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:"类型："})," ",(0,l.jsx)(r.code,{children:"string | string[]"})]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:"默认值："})," ",(0,l.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"在每个页面的入口文件前添加一段代码，这段代码会早于页面的代码执行，因此可以用于执行一些全局的代码逻辑，比如注入 polyfill、设置全局样式等。"}),"\n",(0,l.jsxs)(r.h4,{id:"添加单个脚本",children:["添加单个脚本",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#添加单个脚本",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["首先创建一个 ",(0,l.jsx)(r.code,{children:"src/polyfill.ts"})," 文件："]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-js",children:"console.log('I am a polyfill');\n"})}),"\n",(0,l.jsxs)(r.p,{children:["然后将 ",(0,l.jsx)(r.code,{children:"src/polyfill.ts"})," 配置到 ",(0,l.jsx)(r.code,{children:"source.preEntry"})," 上："]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/polyfill.ts',\n  },\n};\n"})}),"\n",(0,l.jsxs)(r.p,{children:["重新运行编译并访问任意页面，可以看到 ",(0,l.jsx)(r.code,{children:"src/polyfill.ts"})," 中的代码已经执行，并在 console 中输出了对应的内容。"]}),"\n",(0,l.jsxs)(r.h4,{id:"添加全局样式",children:["添加全局样式",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#添加全局样式",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["你也可以通过 ",(0,l.jsx)(r.code,{children:"source.preEntry"})," 来配置全局样式，这段 CSS 代码会早于页面代码加载，比如引入一个 ",(0,l.jsx)(r.code,{children:"normalize.css"})," 文件："]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/normalize.css',\n  },\n};\n"})}),"\n",(0,l.jsxs)(r.h4,{id:"添加多个脚本",children:["添加多个脚本",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#添加多个脚本",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["你可以将 ",(0,l.jsx)(r.code,{children:"preEntry"})," 设置为数组来添加多个脚本，它们会按数组顺序执行："]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: ['./src/polyfill-a.ts', './src/polyfill-b.ts'],\n  },\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/builder-doc/docs/zh/config/source/preEntry.md"]={toc:[{text:"添加单个脚本",id:"添加单个脚本",depth:4},{text:"添加全局样式",id:"添加全局样式",depth:4},{text:"添加多个脚本",id:"添加多个脚本",depth:4}],title:"",frontmatter:{}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,l.jsx)(r,d._(c._({},e),{children:(0,l.jsx)(o,c._({},e))})):o(e)}},12530:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return a}});var s,c=n("15169"),d=n("43932"),l=n("9880"),i=n("23169"),o=n.ir(n("32457"));function t(e){var r=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.h1,{id:"sourcepreentry",children:["source.preEntry",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcepreentry",children:"#"})]}),"\n",(0,l.jsxs)(r.div,{className:"modern-directive tip",children:[(0,l.jsx)(r.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(r.div,{className:"modern-directive-content",children:(0,l.jsxs)(r.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,l.jsx)(r.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourcepreentry",target:"_blank",rel:"noopener noreferrer",children:"source.preEntry"}),"。\n"]})})]}),"\n","\n",(0,l.jsx)(o.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/zh/configure/app/source/pre-entry.mdx"]={toc:[],title:"source.preEntry",frontmatter:{sidebar_label:"preEntry"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,l.jsx)(r,d._(c._({},e),{children:(0,l.jsx)(t,c._({},e))})):t(e)}}}]);