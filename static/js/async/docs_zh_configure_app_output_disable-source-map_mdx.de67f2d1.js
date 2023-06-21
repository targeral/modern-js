(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_disable-source-map_mdx"],{70154:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var s,c=r("15169"),o=r("43932"),i=r("9880"),a=r("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type DisableSourceMap =\n  | boolean\n  | {\n      js?: boolean;\n      css?: boolean;\n    };\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const defaultDisableSourceMap = {\n  js: false,\n  css: process.env.NODE_ENV === 'production',\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"是否禁用 Source Map 生成。"}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"什么是 Source Map"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsx)(n.p,{children:"Source Map 是保存源代码映射关系的信息文件，它记录了编译后的代码的每一个位置，以及所对应的编译前的位置。通过 Source Map，可以在调试编译后的代码时，直接查看对应的源代码。"})})]}),"\n",(0,i.jsx)(n.p,{children:"默认情况下，Builder 的 Source Map 生成规则如下："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"在开发环境构建时，会生成 JS 文件和 CSS 文件的 SourceMap，便于进行开发调试。"}),"\n",(0,i.jsx)(n.li,{children:"在生产环境构建时，会生成 JS 文件的 Source Map，用于调试和排查线上问题；不会生成 CSS 文件的 Source Map。"}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsx)(n.p,{children:"在使用 Rspack 作为打包工具时，暂不支持单独禁用 css sourcemap。"})})]}),"\n",(0,i.jsx)(n.p,{children:"如果项目不需要 Source Map，可以关闭该功能，从而提升构建的速度。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: true,\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"如果需要开启开发环境的 Source Map，并在生产环境禁用，可以设置为："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: process.env.NODE_ENV === 'production',\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"如果需要单独控制 JS 文件或 CSS 文件的 Source Map，可以参考下方设置："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: {\n      js: false,\n      css: true,\n    },\n  },\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/builder-doc/docs/zh/config/output/disableSourceMap.md"]={toc:[],title:"",frontmatter:{}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,o._(c._({},e),{children:(0,i.jsx)(d,c._({},e))})):d(e)}},79778:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var s,c=r("15169"),o=r("43932"),i=r("9880"),a=r("23169"),d=r.ir(r("70154"));function t(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,a.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"outputdisablesourcemap",children:["output.disableSourceMap",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisablesourcemap",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputdisablesourcemap",target:"_blank",rel:"noopener noreferrer",children:"output.disableSourceMap"}),"。\n"]})})]}),"\n","\n",(0,i.jsx)(d.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/zh/configure/app/output/disable-source-map.mdx"]={toc:[],title:"output.disableSourceMap",frontmatter:{sidebar_label:"disableSourceMap"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,o._(c._({},e),{children:(0,i.jsx)(t,c._({},e))})):t(e)}}}]);