(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_plugins_plugin-vue_mdx"],{30432:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return t},toc:function(){return o},default:function(){return d}});var r=s("9880"),i=s("23169"),l={},t="Vue Plugin",o=[{text:"Quick Start",depth:2,id:"quick-start"},{text:"Install",depth:3,id:"install"},{text:"Register",depth:3,id:"register"},{text:"Config",depth:2,id:"config"},{text:"vueLoaderOptions",depth:3,id:"vueloaderoptions"},{text:"vueJsxOptions",depth:3,id:"vuejsxoptions"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"vue-plugin",children:["Vue Plugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vue-plugin",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The Vue plugin provides support for Vue 3 application builds."}),"\n",(0,r.jsxs)(n.h2,{id:"quick-start",children:["Quick Start",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"install",children:["Install",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"You can install the plugin with the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/builder-plugin-vue -D\n\n# yarn\nyarn add @modern-js/builder-plugin-vue -D\n\n# pnpm\npnpm install @modern-js/builder-plugin-vue -D\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"register",children:["Register",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can register Vue plugin with the ",(0,r.jsx)(n.code,{children:"addPlugins"})," method:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { builderPluginVue } from '@modern-js/builder-plugin-vue';\n\nbuilder.addPlugins([builderPluginVue()]);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After installing the plugin, you can directly import ",(0,r.jsx)(n.code,{children:"*.vue"})," files into the code without adding other configs."]}),"\n",(0,r.jsxs)(n.h2,{id:"config",children:["Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"If you need to customize the compilation behavior of Vue, you can use the following configs."}),"\n",(0,r.jsxs)(n.h3,{id:"vueloaderoptions",children:["vueLoaderOptions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vueloaderoptions",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"VueLoaderOptions"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  compilerOptions: {\n    preserveWhitespace: false,\n  },\n  experimentalInlineMatchResource: builder === 'rspack',\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Options passed to ",(0,r.jsx)(n.code,{children:"vue-loader"}),", please refer to the ",(0,r.jsx)(n.a,{href:"https://vue-loader.vuejs.org/",target:"_blank",rel:"noopener noreferrer",children:"vue-loader documentation"})," for detailed usage."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"builderPluginVue({\n  vueLoaderOptions: {\n    hotReload: false,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"vuejsxoptions",children:["vueJsxOptions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vuejsxoptions",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type VueJSXPluginOptions = {\n  /** transform `on: { click: xx }` to `onClick: xxx` */\n  transformOn?: boolean;\n  /** enable optimization or not. */\n  optimize?: boolean;\n  /** merge static and dynamic class / style attributes / onXXX handlers */\n  mergeProps?: boolean;\n  /** configuring custom elements */\n  isCustomElement?: (tag: string) => boolean;\n  /** enable object slots syntax */\n  enableObjectSlots?: boolean;\n  /** Replace the function used when compiling JSX expressions */\n  pragma?: string;\n};\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Options passed to ",(0,r.jsx)(n.code,{children:"@vue/babel-plugin-jsx"}),", please refer to the ",(0,r.jsx)(n.a,{href:"https://github.com/vuejs/babel-plugin-jsx",target:"_blank",rel:"noopener noreferrer",children:"@vue/babel-plugin-jsx documentation"})," for specific usage."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"builderPluginVue({\n  vueJsxOptions: {\n    transformOn: true,\n  },\n});\n"})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);