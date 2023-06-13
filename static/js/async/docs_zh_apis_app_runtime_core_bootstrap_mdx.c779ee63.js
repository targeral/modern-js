(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_core_bootstrap_mdx"],{80800:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return i},toc:function(){return o},default:function(){return a}});var t=r("9880"),s=r("23169"),d={title:"bootstrap"},i="bootstrap",o=[{text:"使用姿势",depth:2,id:"使用姿势"},{text:"函数签名",depth:2,id:"函数签名"},{text:"参数",depth:3,id:"参数"},{text:"示例",depth:2,id:"示例"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"bootstrap",children:["bootstrap",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bootstrap",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["用于启动和挂载应用，通常情况下不做手动调用。只有在使用",(0,t.jsx)(n.a,{href:"/guides/concept/entries#%E8%87%AA%E5%AE%9A%E4%B9%89-bootstrap",children:"自定义 Bootstrap"})," 时，才需要使用该 API。"]}),"\n",(0,t.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import ReactDOM from 'react-dom/client';\nimport { bootstrap } from '@modern-js/runtime';\n\nbootstrap(App, 'root', undefined, ReactDOM);\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"函数签名",children:["函数签名",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type BootStrap<T = unknown> = (\n  App: React.ComponentType,\n  id: string | HTMLElement | RuntimeContext,\n  root?: any,\n  ReactDOM?: {\n    render?: Renderer;\n    hydrate?: Renderer;\n    createRoot?: typeof createRoot;\n    hydrateRoot?: typeof hydrateRoot;\n  },\n) => Promise<T>;\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"参数",children:["参数",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"AppComponent"}),"：通过 ",(0,t.jsx)(n.a,{href:"/zh/apis/app/runtime/core/create-app",children:(0,t.jsx)(n.code,{children:"createApp"})})," 创建的 ReactElement 实例。"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"id"}),"：要挂载的 DOM 根元素 id，如 ",(0,t.jsx)(n.code,{children:'"root"'}),"。"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"root"}),": ReactDOM.createRoot 的返回值，用于 bootstrap 函数外需要 root 销毁组件的场景。"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ReactDOM"}),": ReactDOM 对象，用于区分 React 18 和 React 17 API。"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"示例",children:["示例",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import ReactDOM from 'react-dom/client';\nimport { createApp, bootstrap } from '@modern-js/runtime';\n\nfunction App() {\n  return <div>Hello Modern.js</div>;\n}\n\nconst WrappedApp = createApp({\n  // 传入自定义插件\n  plugins: [customPlugin()],\n})(App);\n\nbootstrap(WrappedApp, 'root', undefined, ReactDOM);\n"})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["由于 ",(0,t.jsx)(n.code,{children:"@modern-js/runtime/plugins"})," 是别名处理的，在 ts 项目中使用时需要声明其类型， 只需要在 ",(0,t.jsx)(n.code,{children:"src/modern-app-env.d.ts"})," 添加以下类型声明即可："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"declare module '@modern-js/runtime/plugins';\n"})}),"\n"]})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive warning",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsx)(n.p,{children:"bootstrap 只支持在 CSR 场景下使用。"}),"\n"]})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}}}]);