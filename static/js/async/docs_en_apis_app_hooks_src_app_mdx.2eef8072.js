(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_hooks_src_app_mdx"],{44941:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var t,s=r("15169"),o=r("43932"),p=r("9880"),i=r("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(n.h1,{id:"app[tj]sx",children:["App.[tj]sx",(0,p.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#app[tj]sx",children:"#"})]}),"\n",(0,p.jsxs)(n.p,{children:["The identifier for the entry points when the application uses ",(0,p.jsx)(n.a,{href:"/guides/basic-features/routes#self-controlled-routing",children:"Self-controlled Routing"}),"."]}),"\n",(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.code,{children:"App.[tj]sx"})," is not the actual entry. Modern.js will generate the real entry for application. The content is roughly as follows:"]}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport { createApp, bootstrap } from '@modern-js/runtime';\n// App.[jt]sx\nimport App from '@_modern_js_src/App';\n// runtime plugin\nimport { router } from '@modern-js/runtime/plugins';\n\nconst IS_BROWSER = typeof window !== 'undefined' && window.name !== 'nodejs';\nconst MOUNT_ID = 'root';\n\nlet AppWrapper = null;\n\nfunction render() {\n  AppWrapper = createApp({\n    plugins: [\n     router({...{\"serverBase\":[\"/\"]}, ...App.config?.router}),\n    ]\n  })(App)\n  if (IS_BROWSER) {\n    bootstrap(AppWrapper, MOUNT_ID, null, ReactDOM);\n  }\n  return AppWrapper\n}\n\nAppWrapper = render();\nexport default AppWrapper;\n"})}),"\n",(0,p.jsxs)(n.div,{className:"modern-directive note",children:[(0,p.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,p.jsxs)(n.div,{className:"modern-directive-content",children:[(0,p.jsxs)(n.p,{children:["In the multi-entry scenario, each entry can have its own ",(0,p.jsx)(n.code,{children:"App.[jt]sx"}),". See ",(0,p.jsx)(n.a,{href:"/guides/concept/entries",children:"Entries"})," for details."]}),"\n"]})]})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/en/apis/app/hooks/src/app.mdx"]={toc:[],title:"App.[tj]sx",frontmatter:{title:"App.[tj]sx",sidebar_position:1}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,p.jsx)(n,o._(s._({},e),{children:(0,p.jsx)(a,s._({},e))})):a(e)}}}]);