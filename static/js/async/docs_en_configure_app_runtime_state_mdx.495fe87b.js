(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_runtime_state_mdx"],{72904:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t,i=s("15169"),r=s("43932"),d=s("9880"),l=s("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2"},(0,l.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"runtimestate",children:["runtime.state",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimestate",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"boolean | object"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Once ",(0,d.jsx)(n.code,{children:"state"})," is enabled, you can use ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/model/quick-start",children:"Model"})," for state management."]}),"\n",(0,d.jsx)(n.p,{children:"The specific configuration items are as follows:"}),"\n",(0,d.jsxs)(n.h2,{id:"models",children:["models",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#models",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"Array<Model>"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Register model objects that are mounted in advance, and these models will be mounted immediately after the Reduck store is created. Generally, there is no need to mount in advance."}),"\n",(0,d.jsxs)(n.h2,{id:"initialstate",children:["initialState",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initialstate",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"Object"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Used to set the initial state of the global store. Generally used for SSR to initialize data during the hydration phase."}),"\n",(0,d.jsxs)(n.h2,{id:"immer",children:["immer",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#immer",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Whether to enable to update the state with mutable, it is enabled by default, and set to ",(0,d.jsx)(n.code,{children:"false"})," if you want to disable it."]}),"\n",(0,d.jsxs)(n.h2,{id:"effects",children:["effects",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#effects",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Whether to enable the side effect management feature, it is enabled by default, and set to ",(0,d.jsx)(n.code,{children:"false"})," if you want to disable it."]}),"\n",(0,d.jsxs)(n.h2,{id:"autoactions",children:["autoActions",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#autoactions",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Whether to enable the auto-generated actions feature, it is enabled by default, and set to ",(0,d.jsx)(n.code,{children:"false"})," if you want to disable it."]}),"\n",(0,d.jsxs)(n.h2,{id:"devtools",children:["devtools",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devtools",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"boolean | EnhancerOptions"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Whether to enable devtools, it is enabled by default, and all parameters of ",(0,d.jsx)(n.a,{href:"https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md",target:"_blank",rel:"noopener noreferrer",children:"redux-devtools-extension"})," are supported at the same time. If you want to disable it, set it to ",(0,d.jsx)(n.code,{children:"false"}),"."]})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/en/configure/app/runtime/state.mdx"]={toc:[{text:"models",id:"models",depth:2},{text:"initialState",id:"initialstate",depth:2},{text:"immer",id:"immer",depth:2},{text:"effects",id:"effects",depth:2},{text:"autoActions",id:"autoactions",depth:2},{text:"devtools",id:"devtools",depth:2}],title:"runtime.state",frontmatter:{sidebar_label:"state"}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,r._(i._({},e),{children:(0,d.jsx)(a,i._({},e))})):a(e)}}}]);