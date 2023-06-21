(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_favicon-by-entries_mdx"],{52716:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s,i=r("15169"),c=r("43932"),o=r("9880"),t=r("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"类型："})," ",(0,o.jsx)(n.code,{children:"Record<string, string>"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"默认值："})," ",(0,o.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"用于在多页面的场景下，为不同的页面设置不同的 favicon。"}),"\n",(0,o.jsxs)(n.p,{children:["整体用法与 ",(0,o.jsx)(n.code,{children:"favicon"})," 一致，并且可以使用「入口名称」作为 key ，对各个页面进行单独设置。"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"faviconByEntries"})," 的优先级高于 ",(0,o.jsx)(n.code,{children:"favicon"}),"，因此会覆盖 ",(0,o.jsx)(n.code,{children:"favicon"})," 中设置的值。"]}),"\n",(0,o.jsxs)(n.h3,{id:"示例",children:["示例",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    favicon: './src/assets/default.png',\n    faviconByEntries: {\n      foo: './src/assets/foo.png',\n    },\n  },\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"重新编译后，可以看到:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["页面 ",(0,o.jsx)(n.code,{children:"foo"})," 的 favicon 为 ",(0,o.jsx)(n.code,{children:"./src/assets/foo.png"}),"。"]}),"\n",(0,o.jsxs)(n.li,{children:["其他页面的 favicon 为 ",(0,o.jsx)(n.code,{children:"./src/assets/default.png"}),"。"]}),"\n"]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/builder-doc/docs/zh/config/html/faviconByEntries.md"]={toc:[{text:"示例",id:"示例",depth:3}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,c._(i._({},e),{children:(0,o.jsx)(d,i._({},e))})):d(e)}},17665:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var s,i=r("15169"),c=r("43932"),o=r("9880"),t=r("23169"),d=r.ir(r("52716"));function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"htmlfaviconbyentries",children:["html.faviconByEntries",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlfaviconbyentries",children:"#"})]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive tip",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmlfaviconbyentries",target:"_blank",rel:"noopener noreferrer",children:"html.faviconByEntries"}),"。\n"]})})]}),"\n","\n",(0,o.jsx)(d.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/zh/configure/app/html/favicon-by-entries.mdx"]={toc:[],title:"html.faviconByEntries",frontmatter:{sidebar_label:"faviconByEntries"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,c._(i._({},e),{children:(0,o.jsx)(a,i._({},e))})):a(e)}}}]);