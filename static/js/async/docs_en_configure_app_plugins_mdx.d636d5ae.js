(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_plugins_mdx"],{38932:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return d}});var s,l=i("15169"),r=i("43932"),o=i("9880"),t=i("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",h3:"h3",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"plugins",children:["plugins",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugins",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"CliPlugin[]"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Used to configure custom Modern.js framework plugins."}),"\n",(0,o.jsxs)(n.p,{children:["Refer to ",(0,o.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/implement",children:"How to Develop Plugins"})," for how to write custom plugins."]}),"\n",(0,o.jsxs)(n.h2,{id:"note",children:["Note",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#note",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"This option is used to configure framework plugins. If you need to configure other types of plugins, please choose the corresponding configuration method:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["To configure Modern.js Builder plugins, use the ",(0,o.jsx)(n.a,{href:"/configure/app/builder-plugins",children:"builderPlugins"})," option."]}),"\n",(0,o.jsxs)(n.li,{children:["To configure webpack plugins, use the ",(0,o.jsx)(n.a,{href:"/configure/app/tools/webpack",children:"tools.webpack"}),"、",(0,o.jsx)(n.a,{href:"/configure/app/tools/webpack-chain",children:"tools.webpackChain"})," or ",(0,o.jsx)(n.a,{href:"/configure/app/tools/bundler-chain",children:"tools.bundlerChain"})," options."]}),"\n",(0,o.jsxs)(n.li,{children:["To configure Rspack plugins, use the ",(0,o.jsx)(n.a,{href:"/configure/app/tools/rspack",children:"tools.rspack"})," or ",(0,o.jsx)(n.a,{href:"/configure/app/tools/bundler-chain",children:"tools.bundlerChain"})," options."]}),"\n",(0,o.jsxs)(n.li,{children:["To configure Babel plugins, use the ",(0,o.jsx)(n.a,{href:"/configure/app/tools/babel",children:"tools.babel"})," option."]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"plugin-types",children:["Plugin types",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-types",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Modern.js has three types of plugins:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"CLI plugins"}),", applicable to local development, compilation and construction stages, can extend various capabilities in the command line and compilation stages."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Server plugins"}),", applicable to the server."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Runtime plugins"}),", applicable to the front-end runtime."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Currently, Modern.js has opened up the ability to customize CLI plugins, and Server plugins and Runtime plugins will be opened up later."}),"\n",(0,o.jsxs)(n.h2,{id:"plugin-execution-order",children:["Plugin execution order",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-execution-order",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["By default, custom plugins are executed in the order of the ",(0,o.jsx)(n.code,{children:"plugins"})," array, and the execution time of built-in Modern.js plugins is earlier than that of custom plugins."]}),"\n",(0,o.jsxs)(n.p,{children:["When the plugin sets options that control the order, such as ",(0,o.jsx)(n.code,{children:"pre"})," and ",(0,o.jsx)(n.code,{children:"post"}),", the execution order will be adjusted based on the declared fields. Refer to ",(0,o.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/relationship",children:"Relationship between plugins"})," for more information."]}),"\n",(0,o.jsxs)(n.h2,{id:"example",children:["Example",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"The following is an example of using CLI plugins."}),"\n",(0,o.jsxs)(n.h3,{id:"use-plugins-on-npm",children:["Use plugins on npm",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-plugins-on-npm",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["To use plugins from npm registry, you need to first install the plugins , and import them in ",(0,o.jsx)(n.code,{children:"modern.config.ts"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { myPlugin } from 'my-plugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"use-local-plugins",children:["Use local plugins",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-local-plugins",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"To use local plugins, import them directly using a relative path."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { myPlugin } from './config/plugin/myPlugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"plugin-configuration",children:["Plugin configuration",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-configuration",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"If the plugin provides some custom configuration options, they can be passed in as parameters to the plugin function."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { myPlugin } from 'my-plugin';\n\nexport default defineConfig({\n  plugins: [\n    myPlugin({\n      foo: 1,\n      bar: 2,\n    }),\n  ],\n});\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fplugins.mdx"]={toc:[{text:"Note",id:"note",depth:2},{text:"Plugin types",id:"plugin-types",depth:2},{text:"Plugin execution order",id:"plugin-execution-order",depth:2},{text:"Example",id:"example",depth:2},{text:"Use plugins on npm",id:"use-plugins-on-npm",depth:3},{text:"Use local plugins",id:"use-local-plugins",depth:3},{text:"Plugin configuration",id:"plugin-configuration",depth:3}],title:"plugins",frontmatter:{title:"plugins",sidebar_position:9}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,r._)((0,l._)({},e),{children:(0,o.jsx)(a,(0,l._)({},e))})):a(e)}}}]);