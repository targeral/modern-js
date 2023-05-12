(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_new_enableFunc_mdx"],{27028:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var r in e)Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}(e,{frontmatter:function(){return a},title:function(){return s},toc:function(){return d},default:function(){return o}});var i=r("9880"),c=r("23169"),a={sidebar_position:3},s="enableFunc",d=[{text:"func",depth:2,id:"func"},{text:"params",depth:2,id:"params"}];function t(n){var e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",h2:"h2"},(0,c.useMDXComponents)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"enablefunc",children:["enableFunc",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#enablefunc",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"启用功能，支持应用和模块工程方案。"}),"\n",(0,i.jsxs)(e.p,{children:["该方法可在 ",(0,i.jsx)(e.code,{children:"onForged"})," 生命周期的 api 参数上获取。"]}),"\n",(0,i.jsx)(e.p,{children:"其类型定义为："}),"\n",(0,i.jsx)(e.div,{className:"language-",children:(0,i.jsx)(e.div,{className:"modern-code-content",children:(0,i.jsx)(e.pre,{className:"code",children:(0,i.jsx)(e.code,{className:"language-ts",children:"export enum ActionFunction {\n  UnBundle = 'unbundle',\n  TailwindCSS = 'tailwindcss',\n  BFF = 'bff',\n  MicroFrontend = 'micro_frontend',\n  I18n = 'i18n',\n  Test = 'test',\n  E2ETest = 'e2e_test',\n  Doc = 'doc',\n  Storybook = 'storybook',\n  RuntimeApi = 'runtimeApi',\n  SSG = 'ssg',\n  Polyfill = 'polyfill',\n  Deploy = 'deploy',\n}\nexport type ForgedAPI = {\n  enableFunc: (\n    func: ActionFunction,\n    params?: Record<string, unknown> | undefined,\n  ) => Promise<void>;\n  ...\n};\n"})})})}),"\n",(0,i.jsxs)(e.h2,{id:"func",children:["func",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#func",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"功能名称，根据不用的工程方案支持的功能进行传值。"}),"\n",(0,i.jsxs)(e.h2,{id:"params",children:["params",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["启用功能时其他参数，详细参考",(0,i.jsx)(e.a,{href:"/guides/topic-detail/generator/config/app#new-%E5%91%BD%E4%BB%A4",children:"应用 New 命令"}),"和",(0,i.jsx)(e.a,{href:"/guides/topic-detail/generator/config/module#new-%E5%91%BD%E4%BB%A4",children:"模块 New 命令"}),"。"]})]})}var o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,c.useMDXComponents)(),n.components).wrapper;return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(t,n)})):t(n)}}}]);