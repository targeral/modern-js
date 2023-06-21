(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_title-by-entries_mdx"],{59723:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var r,i=t("15169"),s=t("43932"),l=t("9880"),d=t("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"类型："})," ",(0,l.jsx)(n.code,{children:"Record<string, string>"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"默认值："})," ",(0,l.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["用于在多页面的场景下，为不同的页面设置不同的 ",(0,l.jsx)(n.code,{children:"title"}),"。"]}),"\n",(0,l.jsxs)(n.p,{children:["整体用法与 ",(0,l.jsx)(n.code,{children:"title"})," 一致，并且可以使用「入口名称」作为 key ，对各个页面进行单独设置。"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"titleByEntries"})," 的优先级高于 ",(0,l.jsx)(n.code,{children:"title"}),"，因此会覆盖 ",(0,l.jsx)(n.code,{children:"title"})," 中设置的值。"]}),"\n",(0,l.jsxs)(n.h3,{id:"示例",children:["示例",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    title: 'ByteDance',\n    titleByEntries: {\n      foo: 'TikTok',\n    },\n  },\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"重新编译后，可以看到:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["页面 ",(0,l.jsx)(n.code,{children:"foo"})," 的 title 为 ",(0,l.jsx)(n.code,{children:"TikTok"}),"。"]}),"\n",(0,l.jsxs)(n.li,{children:["其他页面的 title 为 ",(0,l.jsx)(n.code,{children:"ByteDance"}),"。"]}),"\n"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/builder-doc/docs/zh/config/html/titleByEntries.md"]={toc:[{text:"示例",id:"示例",depth:3}],title:"",frontmatter:{}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,s._(i._({},e),{children:(0,l.jsx)(c,i._({},e))})):c(e)}},96901:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return h}});var r,i=t("15169"),s=t("43932"),l=t("9880"),d=t("23169"),c=t.ir(t("59723"));function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"htmltitlebyentries",children:["html.titleByEntries",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmltitlebyentries",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,l.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmltitlebyentries",target:"_blank",rel:"noopener noreferrer",children:"html.titleByEntries"}),"。\n"]})})]}),"\n","\n",(0,l.jsx)(c.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/zh/configure/app/html/title-by-entries.mdx"]={toc:[],title:"html.titleByEntries",frontmatter:{sidebar_label:"titleByEntries"}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,s._(i._({},e),{children:(0,l.jsx)(o,i._({},e))})):o(e)}}}]);