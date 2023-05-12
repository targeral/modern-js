(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_auto-load-plugin_mdx"],{4772:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},title:function(){return r},toc:function(){return l},default:function(){return a}});var d=s("9880"),i=s("23169"),o={title:"autoLoadPlugins (自动注册插件)",sidebar_position:11},r="autoLoadPlugins (自动注册插件)",l=[{text:"手动注册插件",depth:3,id:"手动注册插件"},{text:"自动注册插件",depth:3,id:"自动注册插件"}];function c(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",div:"div",pre:"pre",ol:"ol"},(0,i.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"autoloadplugins-(自动注册插件)",children:["autoLoadPlugins (自动注册插件)",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#autoloadplugins-(自动注册插件)",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"类型："})," ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"默认值："})," ",(0,d.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"用于配置 Modern.js 是否开启自动注册插件。"}),"\n",(0,d.jsxs)(n.h3,{id:"手动注册插件",children:["手动注册插件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#手动注册插件",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["默认情况下，安装插件后，你需要在 ",(0,d.jsx)(n.code,{children:"modern.config.ts"})," 文件中手动注册插件。"]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import appTools, { defineConfig } from '@modern-js/app-tools';\nimport i18nPlugin from '@modern-js/plugin-i18n';\n\nexport default defineConfig({\n  plugins: [appTools(), i18nPlugin()],\n});\n"})})})]}),"\n",(0,d.jsxs)(n.h3,{id:"自动注册插件",children:["自动注册插件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自动注册插件",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["除了手段注册，Modern.js 还提供自动注册插件的方式: 将 ",(0,d.jsx)(n.code,{children:"autoLoadPlugin"})," 配置项置为 ",(0,d.jsx)(n.code,{children:"true"}),"。"]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  autoLoadPlugins: true,\n});\n"})})})]}),"\n",(0,d.jsx)(n.p,{children:"Modern.js 将通过以下几个步骤帮你自动注册插件"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"Modern.js 在内部维护一份官方插件列表。"}),"\n"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"const InternalPlugins = ['@modern-js/app-tools', '@modern-js/plugin-i18n', ...];\n"})})})}),"\n",(0,d.jsxs)(n.ol,{start:"2",children:["\n",(0,d.jsxs)(n.li,{children:["Modern.js 将读取你的 ",(0,d.jsx)(n.code,{children:"package.json"})," 文件，收集依赖信息。"]}),"\n"]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"package.json"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'"dependencies": {\n  "@modern-js/plugin-i18n": "x.x.x"\n  ...\n},\n"devDependencies": {\n  "@modern-js/app-tools": "x.x.x"\n  ...\n}\n'})})})]}),"\n",(0,d.jsxs)(n.ol,{start:"3",children:["\n",(0,d.jsxs)(n.li,{children:["Modern.js 观察到你安装了 ",(0,d.jsx)(n.code,{children:"@modern-js/plugin-i18n"})," 和 ",(0,d.jsx)(n.code,{children:"@modern-js/app-tools"})," 等依赖后，将会引入插件自动注册。"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"可以注意到这种方式相对黑盒，你甚至对加载插件的过程是无感知的。我们希望更多的细节暴露给开发者，能让开发者去控制这一过程。"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"因此我们更加推荐你手动注册插件。"})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(c,e)})):c(e)}}}]);