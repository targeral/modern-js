(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_bff_use-context_mdx"],{31842:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var r,s=t("15169"),a=t("43932"),i=t("9880"),o=t("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",div:"div"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"usecontext",children:["useContext",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usecontext",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Used to get the request context in the BFF function."}),"\n",(0,i.jsxs)(n.h2,{id:"usage",children:["Usage",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"according to the framework extend plugin, export from the corresponding namespace:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { useContext } from '@modern-js/runtime/{namespace}';\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"function useContext(): any"})}),"\n",(0,i.jsxs)(n.h2,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Developers can get more request information through ",(0,i.jsx)(n.code,{children:"context"}),", such as browser UA(an example is when using the koa framework):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { useContext } from '@modern-js/runtime/koa';\n\nexport async function get() {\n  const ctx = useContext();\n  return ctx.req.headers['user-agent'];\n}\n"})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive caution",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:["only in BFF function, ",(0,i.jsx)(n.code,{children:"useContext"})," API can be used."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.p,{children:["Although the ",(0,i.jsx)(n.code,{children:"useContext"})," API is supported in any framework extend plugin, the types of return values are different."]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/en/apis/app/runtime/bff/use-context.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Example",id:"example",depth:2}],title:"useContext",frontmatter:{title:"useContext"}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,a._(s._({},e),{children:(0,i.jsx)(c,s._({},e))})):c(e)}}}]);