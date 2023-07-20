(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_favicon-by-entries_mdx"],{82328:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return a}});var r,i=s("15169"),c=s("43932"),o=s("9880"),d=s("23169");function t(n){var e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,d.useMDXComponents)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"类型："})," ",(0,o.jsx)(e.code,{children:"Record<string, string>"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"默认值："})," ",(0,o.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"用于在多页面的场景下，为不同的页面设置不同的 favicon。"}),"\n",(0,o.jsxs)(e.p,{children:["整体用法与 ",(0,o.jsx)(e.code,{children:"favicon"})," 一致，并且可以使用「入口名称」作为 key ，对各个页面进行单独设置。"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"faviconByEntries"})," 的优先级高于 ",(0,o.jsx)(e.code,{children:"favicon"}),"，因此会覆盖 ",(0,o.jsx)(e.code,{children:"favicon"})," 中设置的值。"]}),"\n",(0,o.jsxs)(e.h3,{id:"示例",children:["示例",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"export default {\n  html: {\n    favicon: './src/assets/default.png',\n    faviconByEntries: {\n      foo: './src/assets/foo.png',\n    },\n  },\n};\n"})}),"\n",(0,o.jsx)(e.p,{children:"重新编译后，可以看到:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["页面 ",(0,o.jsx)(e.code,{children:"foo"})," 的 favicon 为 ",(0,o.jsx)(e.code,{children:"./src/assets/foo.png"}),"。"]}),"\n",(0,o.jsxs)(e.li,{children:["其他页面的 favicon 为 ",(0,o.jsx)(e.code,{children:"./src/assets/default.png"}),"。"]}),"\n"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fhtml%2FfaviconByEntries.md"]={toc:[{text:"示例",id:"示例",depth:3}],title:"",frontmatter:{}};var a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,d.useMDXComponents)(),n.components).wrapper;return e?(0,o.jsx)(e,(0,c._)((0,i._)({},n),{children:(0,o.jsx)(t,(0,i._)({},n))})):t(n)}},73933:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return l}});var r,i=s("15169"),c=s("43932"),o=s("9880"),d=s("23169"),t=s("82328");function a(n){var e=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{id:"htmlfaviconbyentries",children:["html.faviconByEntries",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlfaviconbyentries",children:"#"})]}),"\n",(0,o.jsxs)(e.div,{className:"modern-directive tip",children:[(0,o.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(e.div,{className:"modern-directive-content",children:(0,o.jsxs)(e.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,o.jsx)(e.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmlfaviconbyentries",target:"_blank",rel:"noopener noreferrer",children:"html.faviconByEntries"}),"。\n"]})})]}),"\n","\n",(0,o.jsx)(t.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fconfigure%2Fapp%2Fhtml%2Ffavicon-by-entries.mdx"]={toc:[],title:"html.faviconByEntries",frontmatter:{sidebar_label:"faviconByEntries"}};var l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,d.useMDXComponents)(),n.components).wrapper;return e?(0,o.jsx)(e,(0,c._)((0,i._)({},n),{children:(0,o.jsx)(a,(0,i._)({},n))})):a(n)}}}]);