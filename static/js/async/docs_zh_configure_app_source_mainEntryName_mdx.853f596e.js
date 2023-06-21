(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_mainEntryName_mdx"],{68382:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var s,i=r("15169"),d=r("43932"),c=r("9880"),a=r("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"sourcemainentryname",children:["source.mainEntryName",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcemainentryname",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"string"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"main"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"该选项用于配置 Modern.js 的主入口名称。"}),"\n",(0,c.jsxs)(n.p,{children:["默认情况下，Modern.js 的默认主入口名称为 ",(0,c.jsx)(n.code,{children:"main"}),"，当使用单入口或者入口名称和 ",(0,c.jsx)(n.code,{children:"package.json"})," 中 name 字段一致时，会将对应入口作为主入口，通过该配置可以修改主入口的名称。"]}),"\n",(0,c.jsx)(n.p,{children:"比如将主入口名称改为 index："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    mainEntryName: 'index',\n  },\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:["构建之后，对应 html 产物路径将会变为 ",(0,c.jsx)(n.code,{children:"dist/html/index/index.html"}),"。"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["当修改主入口名称后，其他 ",(0,c.jsx)(n.code,{children:"**ByEntries"})," 的配置也需要对应调整使用修改后的入口名称。\n"]})})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/zh/configure/app/source/mainEntryName.mdx"]={toc:[],title:"source.mainEntryName",frontmatter:{sidebar_label:"mainEntryName"}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,d._(i._({},e),{children:(0,c.jsx)(o,i._({},e))})):o(e)}}}]);