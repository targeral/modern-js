(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_new_enableFunc_mdx"],{73447:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return t},toc:function(){return o},default:function(){return d}});var i=r("9880"),a=r("23169"),s={sidebar_position:3},t="enableFunc",o=[{text:"func",depth:2,id:"func"},{text:"params",depth:2,id:"params"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",h2:"h2"},(0,a.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"enablefunc",children:["enableFunc",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enablefunc",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Enable functionality to support application and module engineering scenarios."}),"\n",(0,i.jsxs)(n.p,{children:["This method is available on the ",(0,i.jsx)(n.code,{children:"onForged"})," API parameter."]}),"\n",(0,i.jsx)(n.p,{children:"Its type is defined as:"}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"export enum ActionFunction {\n  UnBundle = 'unbundle',\n  TailwindCSS = 'tailwindcss',\n  BFF = 'bff',\n  MicroFrontend = 'micro_frontend',\n  I18n = 'i18n',\n  Test = 'test',\n  E2ETest = 'e2e_test',\n  Doc = 'doc',\n  Storybook = 'storybook',\n  RuntimeApi = 'runtimeApi',\n  SSG = 'ssg',\n  Polyfill = 'polyfill',\n  Deploy = 'deploy',\n}\nexport type ForgedAPI = {\n  enableFunc: (\n    func: ActionFunction,\n    params?: Record<string, unknown> | undefined,\n  ) => Promise<void>;\n  ...\n};\n"})})})}),"\n",(0,i.jsxs)(n.h2,{id:"func",children:["func",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#func",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The function name is passed according to the functions supported by the different engineering solutions."}),"\n",(0,i.jsxs)(n.h2,{id:"params",children:["params",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["For other parameters when the function is enabled, please refer to ",(0,i.jsx)(n.a,{href:"/guides/topic-detail/generator/config/app",children:"App New Command"})," and ",(0,i.jsx)(n.a,{href:"/guides/topic-detail/generator/config/module",children:"Module New Command"}),"."]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}}}]);