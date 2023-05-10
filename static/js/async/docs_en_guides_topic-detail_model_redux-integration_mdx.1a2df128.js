(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_model_redux-integration_mdx"],{98561:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return s},title:function(){return i},toc:function(){return a},default:function(){return c}});var t=n("9880"),o=n("23169"),s={sidebar_position:11,title:"Ecosystem Integration"},i="Redux Ecosystem Integration",a=[];function d(e){var r=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"redux-ecosystem-integration",children:["Redux Ecosystem Integration",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#redux-ecosystem-integration",children:"#"})]}),"\n",(0,t.jsxs)(r.p,{children:["Reduck is based on Redux, so you can use libraries from the ",(0,t.jsx)(r.a,{href:"https://redux.js.org/introduction/ecosystem",target:"_blank",rel:"noopener noreferrer",children:"Redux ecosystem"})," to enhance its functionality. APIs like ",(0,t.jsx)(r.a,{href:"/apis/app/runtime/model/Provider",children:(0,t.jsx)(r.code,{children:"Provider"})}),", ",(0,t.jsx)(r.a,{href:"/apis/app/runtime/model/create-app",children:(0,t.jsx)(r.code,{children:"createApp"})}),", and ",(0,t.jsx)(r.a,{href:"/apis/app/runtime/model/create-store",children:(0,t.jsx)(r.code,{children:"createStore"})})," allow you to configure the use of ",(0,t.jsx)(r.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#middleware",target:"_blank",rel:"noopener noreferrer",children:"middlewares"})," and ",(0,t.jsx)(r.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#store-enhancer",target:"_blank",rel:"noopener noreferrer",children:"store enhancers"}),"; and using ",(0,t.jsx)(r.a,{href:"/apis/app/runtime/model/create-store",children:(0,t.jsx)(r.code,{children:"createStore"})}),", you can take complete control over the process of creating the store."]}),"\n",(0,t.jsxs)(r.p,{children:["For example, if we want to use the middleware ",(0,t.jsx)(r.a,{href:"https://github.com/LogRocket/redux-logger",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(r.code,{children:"redux-logger"})}),", the example code is as follows:"]}),"\n",(0,t.jsx)(r.div,{className:"language-",children:(0,t.jsxs)(r.div,{className:"modern-code-content",children:[(0,t.jsx)(r.button,{className:"copy"}),(0,t.jsx)(r.pre,{className:"code",children:(0,t.jsx)(r.code,{className:"language-ts",children:"ReactDOM.render(\n  <Provider config={{ middlewares: [logger] }}>\n    // Set middleware through the config parameter of Provider\n    <App />\n  </Provider>,\n  document.getElementById('root'),\n);\n"})})]})}),"\n",(0,t.jsxs)(r.div,{className:"modern-directive caution",children:[(0,t.jsx)(r.div,{className:"modern-directive-title",children:"CAUTION"}),(0,t.jsx)(r.div,{className:"modern-directive-content",children:(0,t.jsx)(r.p,{children:"Reduck is built on top of the lower-level Redux API, and abstracts away some of the underlying concepts of Redux, such as Reducers. Reduck allows models to be dynamically mounted, whereas Redux mounts all the necessary state at Store creation time. Due to these implementation differences, some libraries from the Redux ecosystem cannot be used directly in Reduck."})})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);