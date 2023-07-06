(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_plugins_plugin-vue_mdx"],{77924:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var s,i=r("15169"),l=r("43932"),d=r("9880"),a=r("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},(0,a.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"vue-插件",children:["Vue 插件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vue-插件",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Vue 插件提供了对 Vue 3 应用构建的支持。"}),"\n",(0,d.jsxs)(n.h2,{id:"快速开始",children:["快速开始",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"安装插件",children:["安装插件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装插件",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"你可以通过如下的命令安装插件:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/builder-plugin-vue -D\n\n# yarn\nyarn add @modern-js/builder-plugin-vue -D\n\n# pnpm\npnpm install @modern-js/builder-plugin-vue -D\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"注册插件",children:["注册插件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注册插件",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["你可以通过 ",(0,d.jsx)(n.code,{children:"addPlugins"})," 方法来注册 Vue 插件："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"import { builderPluginVue } from '@modern-js/builder-plugin-vue';\n\nbuilder.addPlugins([builderPluginVue()]);\n"})}),"\n",(0,d.jsxs)(n.p,{children:["安装完插件后，你可以直接在代码中引入 ",(0,d.jsx)(n.code,{children:"*.vue"})," 文件，无须添加其他配置。"]}),"\n",(0,d.jsxs)(n.h2,{id:"配置",children:["配置",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"如果你需要自定义 Vue 的编译行为，可以使用以下配置项。"}),"\n",(0,d.jsxs)(n.h3,{id:"vueloaderoptions",children:["vueLoaderOptions",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vueloaderoptions",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"类型："})," ",(0,d.jsx)(n.code,{children:"VueLoaderOptions"})]}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  compilerOptions: {\n    preserveWhitespace: false,\n  },\n  experimentalInlineMatchResource: builder === 'rspack',\n};\n"})}),"\n",(0,d.jsxs)(n.p,{children:["传递给 ",(0,d.jsx)(n.code,{children:"vue-loader"})," 的选项，请查阅 ",(0,d.jsx)(n.a,{href:"https://vue-loader.vuejs.org/",target:"_blank",rel:"noopener noreferrer",children:"vue-loader 文档"})," 来了解具体用法。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"builderPluginVue({\n  vueLoaderOptions: {\n    hotReload: false,\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"vuejsxoptions",children:["vueJsxOptions",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vuejsxoptions",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type VueJSXPluginOptions = {\n  /** 将 `on: { click: xx }` 转换为 `onClick: xxx` */\n  transformOn?: boolean;\n  /** 是否启用优化。 */\n  optimize?: boolean;\n  /** 合并静态和动态 class / style 属性 / onXXX 事件处理函数 */\n  mergeProps?: boolean;\n  /** 配置自定义元素 */\n  isCustomElement?: (tag: string) => boolean;\n  /** 启用对象插槽语法 */\n  enableObjectSlots?: boolean;\n  /** 替换用于编译 JSX 表达式的函数 */\n  pragma?: string;\n};\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"默认值："})," ",(0,d.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["传递给 ",(0,d.jsx)(n.code,{children:"@vue/babel-plugin-jsx"})," 的选项，请查阅 ",(0,d.jsx)(n.a,{href:"https://github.com/vuejs/babel-plugin-jsx",target:"_blank",rel:"noopener noreferrer",children:"@vue/babel-plugin-jsx 文档"})," 来了解具体用法。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"builderPluginVue({\n  vueJsxOptions: {\n    transformOn: true,\n  },\n});\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fplugins%2Fplugin-vue.mdx"]={toc:[{text:"快速开始",id:"快速开始",depth:2},{text:"安装插件",id:"安装插件",depth:3},{text:"注册插件",id:"注册插件",depth:3},{text:"配置",id:"配置",depth:2},{text:"vueLoaderOptions",id:"vueloaderoptions",depth:3},{text:"vueJsxOptions",id:"vuejsxoptions",depth:3}],title:"Vue 插件",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,l._)((0,i._)({},e),{children:(0,d.jsx)(o,(0,i._)({},e))})):o(e)}}}]);