(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_micro-frontend_c02-development_mdx~docs_zh_guides_topic-detail_mi~67fa08"],{8360:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var o=t("12151"),r=t("23169");function s(e){var n=Object.assign({div:"div",button:"button",pre:"pre",code:"code"},(0,r.useMDXComponents)(),e.components);return(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"src/App.tsx"}),(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-js",meta:'title="src/App.tsx"',children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n\nimport { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, BrowserRouter, Link, Outlet } from '@modern-js/runtime/router';\n\nconst AppLayout = () => (\n  <>\n    <div><Link to={'/table'}>加载约定式路由子应用</Link></div>\n    <div><Link to={'/dashboard'}>加载自控式路由子应用</Link></div>\n    <div><Link to={'/'}>卸载子应用</Link></div>\n    <Outlet />\n  </>\n)\n\nexport default () => {\n  const { apps, MApp, Table, Dashboard } = useModuleApps();\n\n  // 使用的不是 MApp 组件，需要使用 createBrowserRouter 来创建路由\n  const router = createBrowserRouter(\n    createRoutesFromElements(\n      <Route path=\"/\" element={<AppLayout />}>\n        <Route key={'table'} path={'table/*'} element={<Table />} />\n        <Route key={'dashboard'} path={'dashboard/*'} element={<Dashboard />} />\n      </Route>\n    )\n  );\n\n  return (\n    // 方法一：使用 MApp 自动根据配置的 activeWhen 参数加载子应用(本项目配置在 modern.config.ts 中)\n    // <BrowserRouter>\n    //   <MApp />\n    // </BrowserRouter>\n\n    // 方法二：手动写 Route 组件方式加载子应用，方便于需要鉴权等需要前置操作的场景\n    <>\n      <RouterProvider router={router} />\n    </>\n  );\n};\n"})})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(s,e)})):s(e)}}}]);