(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_new_createSubProject_mdx"],{393:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return a},toc:function(){return i},default:function(){return d}});var o=r("9880"),s=r("23169"),t={sidebar_position:4},a="createSubProject",i=[{text:"solution",depth:2,id:"solution"},{text:"params",depth:2,id:"params"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",h2:"h2"},(0,s.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"createsubproject",children:["createSubProject",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createsubproject",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"创建子项目，只支持 Monorepo 工程方案。"}),"\n",(0,o.jsxs)(n.p,{children:["该方法可在 ",(0,o.jsx)(n.code,{children:"onForged"})," 生命周期的 api 参数上获取。"]}),"\n",(0,o.jsx)(n.p,{children:"其类型定义为："}),"\n",(0,o.jsx)(n.div,{className:"language-",children:(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",children:"export enum SubSolution {\n  MWA = 'mwa',\n  MWATest = 'mwa_test',\n  Module = 'module',\n  InnerModule = 'inner_module',\n}\nexport type ForgedAPI = {\n  createSubProject: (\n    solution: SubSolution,\n    params: Record<string, unknown>,\n  ) => Promise<void>;\n  ...\n};\n"})})})}),"\n",(0,o.jsxs)(n.h2,{id:"solution",children:["solution",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#solution",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"子项目工程方案名称。"}),"\n",(0,o.jsxs)(n.h2,{id:"params",children:["params",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["创建子项目的其他参数，详细参考",(0,o.jsx)(n.a,{href:"/guides/topic-detail/generator/config/monorepo#%E5%88%9B%E5%BB%BA%E5%AD%90%E9%A1%B9%E7%9B%AE",children:"Monorepo 创建子项目"}),"。"]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}}}]);