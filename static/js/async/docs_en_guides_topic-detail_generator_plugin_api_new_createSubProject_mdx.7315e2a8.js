(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_new_createSubProject_mdx"],{3970:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return a},toc:function(){return i},default:function(){return d}});var o=r("12151"),t=r("23169"),s={sidebar_position:4},a="createSubProject",i=[{text:"solution",depth:2,id:"solution"},{text:"params",depth:2,id:"params"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",h2:"h2"},(0,t.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"createsubproject",children:["createSubProject",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createsubproject",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Create subprojects and only support Monorepo engineering solutions."}),"\n",(0,o.jsxs)(n.p,{children:["This method is available on the ",(0,o.jsx)(n.code,{children:"onForged"})," API parameter."]}),"\n",(0,o.jsx)(n.p,{children:"Its type is defined as:"}),"\n",(0,o.jsx)(n.div,{className:"language-",children:(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-ts",children:"export enum SubSolution {\n  MWA = 'mwa',\n  MWATest = 'mwa_test',\n  Module = 'module',\n  InnerModule = 'inner_module',\n}\nexport type ForgedAPI = {\n  createSubProject: (\n    solution: SubSolution,\n    params: Record<string, unknown>,\n  ) => Promise<void>;\n  ...\n};\n"})})]})}),"\n",(0,o.jsxs)(n.h2,{id:"solution",children:["solution",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#solution",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Sub-project engineering solution name."}),"\n",(0,o.jsxs)(n.h2,{id:"params",children:["params",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["For other parameters of creating subprojects, please refer to",(0,o.jsx)(n.a,{href:"/guides/topic-detail/generator/config/monorepo",children:"Monorepo Create Sub Project"}),"."]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}}}]);