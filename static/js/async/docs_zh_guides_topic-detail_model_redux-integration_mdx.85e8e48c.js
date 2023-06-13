(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_model_redux-integration_mdx"],{84303:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return i},title:function(){return o},toc:function(){return s},default:function(){return a}});var d=n("9880"),t=n("23169"),i={sidebar_position:11,title:"Redux 生态集成"},o="Redux 生态集成",s=[];function c(e){var r=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h1,{id:"redux-生态集成",children:["Redux 生态集成",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#redux-生态集成",children:"#"})]}),"\n",(0,d.jsxs)(r.p,{children:["Reduck 基于 Redux 实现，因此可以使用 Redux ",(0,d.jsx)(r.a,{href:"https://redux.js.org/introduction/ecosystem",target:"_blank",rel:"noopener noreferrer",children:"生态的库"}),"，实现功能增强。通过 ",(0,d.jsx)(r.a,{href:"/apis/app/runtime/model/Provider",children:(0,d.jsx)(r.code,{children:"Provider"})})," 、",(0,d.jsx)(r.a,{href:"/apis/app/runtime/model/create-app",children:(0,d.jsx)(r.code,{children:"createApp"})})," 和 ",(0,d.jsx)(r.a,{href:"/apis/app/runtime/model/create-store",children:(0,d.jsx)(r.code,{children:"createStore"})})," 等 API ，可以设置使用 Redux 的 ",(0,d.jsx)(r.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#middleware",target:"_blank",rel:"noopener noreferrer",children:"中间件"})," 和 ",(0,d.jsx)(r.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#store-enhancer",target:"_blank",rel:"noopener noreferrer",children:"Store Enhancer"}),"；使用 ",(0,d.jsx)(r.a,{href:"/apis/app/runtime/model/create-store",children:(0,d.jsx)(r.code,{children:"createStore"})})," 还可以完全掌控 Store 的创建过程。"]}),"\n",(0,d.jsxs)(r.p,{children:["例如，我们希望使用中间件 ",(0,d.jsx)(r.a,{href:"https://github.com/LogRocket/redux-logger",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)(r.code,{children:"redux-logger"})}),"，示例代码如下："]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-ts",children:"ReactDOM.render(\n  <Provider config={{ middlewares: [logger] }}>\n    // 通过 Provider 的 config 参数设置 中间件\n    <App />\n  </Provider>,\n  document.getElementById('root'),\n);\n"})}),"\n",(0,d.jsxs)(r.div,{className:"modern-directive caution",children:[(0,d.jsx)(r.div,{className:"modern-directive-title",children:"CAUTION"}),(0,d.jsxs)(r.div,{className:"modern-directive-content",children:[(0,d.jsx)(r.p,{children:"Reduck 基于 Redux 底层 API 做了上层封装，屏蔽了 Redux 的一些底层概念，如 Reducer 等。Reduck 对于 Model 是动态挂载的，而 Redux 是在 Store 创建时就会挂载应用所需的全部状态。基于这些实现上的差异，有些 Redux 生态的库是无法直接在 Reduck 中使用的。"}),"\n"]})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return r?(0,d.jsx)(r,Object.assign({},e,{children:(0,d.jsx)(c,e)})):c(e)}}}]);