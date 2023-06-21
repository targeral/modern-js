(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_model_create-store_mdx"],{2975:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return c}});var s,d=n("15169"),t=n("43932"),o=n("9880"),i=n("23169"),a=n.ir(n("93490"));function l(e){var r=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li",strong:"strong",em:"em"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.h1,{id:"createstore",children:["createStore",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#createstore",children:"#"})]}),"\n","\n",(0,o.jsx)(a.default,{}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"createStore"})," 用于创建一个 Store 对象。Reduck 的 Store 基于 Redux 的 ",(0,o.jsx)(r.a,{href:"https://redux.js.org/api/store",target:"_blank",rel:"noopener noreferrer",children:"Store"})," 实现，用于存储应用的状态，同时提供一组用于管理状态和 Model 的方法。"]}),"\n",(0,o.jsxs)(r.p,{children:["一般情况下，不需要使用这个 API，只有需要完全掌控 Store 的创建时，才会使用这个 API。例如，自定义一个 Store，传入 ",(0,o.jsx)(r.a,{href:"/zh/apis/app/runtime/model/Provider",children:(0,o.jsx)(r.code,{children:"Provider"})})," 组件使用。"]}),"\n",(0,o.jsxs)(r.h2,{id:"函数签名",children:["函数签名",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"interface StoreConfig {\n  initialState?: Record<string, any>;\n  middlewares?: Middleware[];\n  models?: Model[];\n  plugins?: Plugin[];\n  enhancers?: StoreEnhancer[];\n}\n\ninterface ReduckStore extends ReduxStore {\n  use: typeof useModel;\n  unmount: (model: Model) => void;\n}\n\nfunction createStore(config: StoreConfig): ReduckStore;\n"})}),"\n",(0,o.jsxs)(r.h3,{id:"参数",children:["参数",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["config?：store 配置选项","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"initialState?: 设置全局 Store 的初始状态。"}),"\n",(0,o.jsx)(r.li,{children:"models?: 设置提前（Store 创建后）挂载到 Store 的 Model。（正常使用无需提前挂载）"}),"\n",(0,o.jsxs)(r.li,{children:["middlewares?: 设置 Redux ",(0,o.jsx)(r.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#middleware",target:"_blank",rel:"noopener noreferrer",children:"中间件"}),"。"]}),"\n",(0,o.jsxs)(r.li,{children:["enhancers?: 设置 Redux 的 ",(0,o.jsx)(r.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#store-enhancer",target:"_blank",rel:"noopener noreferrer",children:"Store enhancer"})," 。"]}),"\n",(0,o.jsxs)(r.li,{children:["plugins?: 设置 Reduck 插件。",(0,o.jsx)(r.strong,{children:(0,o.jsx)(r.em,{children:"试验性配置，不推荐使用"})}),"。"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.h3,{id:"返回值",children:["返回值",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"Reduck Store 对象："}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["use：动态挂载和获取 Model 对象。用法与 ",(0,o.jsx)(r.a,{href:"/zh/apis/app/runtime/model/use-model",children:(0,o.jsx)(r.code,{children:"useModel"})})," 相同，但可以在 React 组件外使用。"]}),"\n",(0,o.jsx)(r.li,{children:"unmount：卸载 Model 对象，Model 的 State 会从 Store 中清除。"}),"\n",(0,o.jsxs)(r.li,{children:["ReduxStore：Redux Store 对象具有的方法，",(0,o.jsx)(r.a,{href:"https://redux.js.org/tutorials/fundamentals/part-4-store#redux-store",target:"_blank",rel:"noopener noreferrer",children:"详见"}),"。"]}),"\n"]}),"\n",(0,o.jsxs)(r.h2,{id:"示例",children:["示例",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"const store = createStore();\n\nfunction load() {\n  const [, actions] = store.use(fooModel);\n\n  actions.load();\n}\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/zh/apis/app/runtime/model/create-store.mdx"]={toc:[{text:"函数签名",id:"函数签名",depth:2},{text:"参数",id:"参数",depth:3},{text:"返回值",id:"返回值",depth:3},{text:"示例",id:"示例",depth:2}],title:"createStore",frontmatter:{sidebar_position:10,title:"createStore"}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,o.jsx)(r,t._(d._({},e),{children:(0,o.jsx)(l,d._({},e))})):l(e)}}}]);