(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_core_use-module-apps_mdx"],{7669:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return o},title:function(){return c},toc:function(){return i},default:function(){return p}});var s=r("9880"),t=r("23169"),a=r.ir(r("89266")),d=r.ir(r("51582")),o={title:"useModuleApps"},c="useModuleApps",i=[{text:"使用姿势",depth:2,id:"使用姿势"},{text:"函数签名",depth:2,id:"函数签名"},{text:"示例",depth:2,id:"示例"},{text:"集中式路由",depth:3,id:"集中式路由"},{text:"加载动画",depth:2,id:"加载动画"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",pre:"pre",code:"code",h3:"h3",strong:"strong"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"usemoduleapps",children:["useModuleApps",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usemoduleapps",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"返回所有微前端子应用的 React 组件，用于可自由控制路由。"}),"\n",(0,s.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n"})})})}),"\n",(0,s.jsxs)(n.h2,{id:"函数签名",children:["函数签名",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"function useModuleApps(): Record<string, React.FC<any>>"})}),"\n",(0,s.jsx)(n.p,{children:"分别返回包裹每个子应用后的 React 组件。"}),"\n",(0,s.jsxs)(n.h2,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"需要先配置微前端子应用信息。"}),"\n","\n",(0,s.jsx)(a.default,{}),"\n",(0,s.jsxs)(n.p,{children:["这里演示主应用为自控式路由的场景，全部场景参考 ",(0,s.jsx)(n.a,{href:"/guides/topic-detail/micro-frontend/c02-development",children:"体验微前端"})]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"App.tsx"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:"title=App.tsx",children:"function App() {\n  const { apps, MApp, Table, Dashboard } = useModuleApps();\n\n  // 使用的不是 MApp 组件，需要使用 createBrowserRouter 来创建路由\n  const router = createBrowserRouter(\n    createRoutesFromElements(\n      <Route path=\"/\" element={<AppLayout />}>\n        <Route key={'table'} path={'table/*'} element={<Table />} />\n        <Route key={'dashboard'} path={'dashboard/*'} element={<Dashboard />} />\n      </Route>\n    )\n  );\n\n  return (\n    // 方法一：使用 MApp 自动根据配置的 activeWhen 参数加载子应用(本项目配置在 modern.config.ts 中)\n    // <BrowserRouter>\n    //   <MApp />\n    // </BrowserRouter>\n\n    // 方法二：手动写 Route 组件方式加载子应用，方便于需要鉴权等需要前置操作的场景\n    <>\n      <RouterProvider router={router} />\n    </>\n  );\n}\n\ndefineConfig(App, {\n  masterApp: {\n    apps: [\n      {\n        // name 区分大小写，name 提供的是什么 useModuleApps 返回的就是什么\n        name: 'Table',\n        entry: 'http://127.0.0.1:8081/',\n      },\n      {\n        name: 'Dashboard',\n        entry: 'http://localhost:8082',\n      },\n    ],\n  },\n});\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["通过 ",(0,s.jsx)(n.code,{children:"useModuleApps()"})," 获取到 ",(0,s.jsx)(n.code,{children:"Table"})," 和 ",(0,s.jsx)(n.code,{children:"Dashboard"})," 子应用组件（名称和配置里的 ",(0,s.jsx)(n.code,{children:"name"})," 字段对应），之后就可以像使用普通的 React 组件一样去加载子应用。"]}),"\n",(0,s.jsxs)(n.h3,{id:"集中式路由",children:["集中式路由",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#集中式路由",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"集中式路由"})," 是将子应用的激活路由集中配置的方式。我们给子应用列表信息添加 ",(0,s.jsx)(n.code,{children:"activeWhen"})," 字段来启用 ",(0,s.jsx)(n.strong,{children:"集中式路由"}),"。"]}),"\n","\n",(0,s.jsx)(d.default,{}),"\n",(0,s.jsxs)(n.p,{children:["然后在主应用中使用 ",(0,s.jsx)(n.code,{children:"useModuleApp"})," 方法获取 ",(0,s.jsx)(n.code,{children:"MApp"})," 组件, 并在主应用渲染 ",(0,s.jsx)(n.code,{children:"MApp"}),"。"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"主应用：App.tsx"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:"title=主应用：App.tsx",children:"import { useModuleApp } from '@modern-js/plugin-runtime';\n\nfunction App() {\n  const { MApp } = useModuleApps();\n\n  return (\n    <div>\n      <MApp />\n    </div>\n  );\n}\n\ndefineConfig(App, {\n  masterApp: {\n    apps: [\n      {\n        // name 区分大小写，name 提供的是什么 useModuleApps 返回的就是什么\n        name: 'Table',\n        activeWhen: '/table',\n        entry: 'http://127.0.0.1:8081/',\n      },\n      {\n        name: 'Dashboard',\n        activeWhen: '/dashboard',\n        entry: 'http://localhost:8082',\n      },\n    ],\n  },\n});\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["这样启动应用后，访问 ",(0,s.jsx)(n.code,{children:"/dashboard"})," 路由，会渲染 ",(0,s.jsx)(n.code,{children:"Dashboard"})," 子应用，访问 ",(0,s.jsx)(n.code,{children:"/table"})," 路由，会渲染 ",(0,s.jsx)(n.code,{children:"Table"})," 子应用。"]}),"\n",(0,s.jsxs)(n.h2,{id:"加载动画",children:["加载动画",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#加载动画",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"可以通过以下方式，自定义组件加载过程的过渡动画。"}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"App.tsx"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="App.tsx"',children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n\nimport { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, BrowserRouter, Link, Outlet } from '@modern-js/runtime/router';\n\nconst AppLayout = () => (\n  <>\n    <div><Link to={'/table'}>加载约定式路由子应用</Link></div>\n    <div><Link to={'/dashboard'}>加载自控式路由子应用</Link></div>\n    <div><Link to={'/'}>卸载子应用</Link></div>\n    <Outlet />\n  </>\n)\n\nexport default () => {\n  const { apps } = useModuleApps();\n\n  // 使用的不是 MApp 组件，需要使用 createBrowserRouter 来创建路由\n  const router = createBrowserRouter(\n    createRoutesFromElements(\n      <Route path=\"/\" element={<AppLayout />}>\n        {apps.map(app => {\n          const { Component } = app;\n          // 模糊匹配，path 需要写成类似 abc/* 的模式\n          return (\n            <Route\n              key={app.name}\n              path={`${app.name.toLowerCase()}/*`}\n              element={\n              <Component\n                loadable={{\n                  loading: ({ pastDelay, error }: any) => {\n                    if (error) {\n                      return <div>error: {error?.message}</div>;\n                    } else if (pastDelay) {\n                      return <div>loading</div>;\n                    } else {\n                      return null;\n                    }\n                  },\n                }}\n              />\n              }\n            />\n          )\n        })}\n      </Route>\n    )\n  );\n\n  return (\n    <>\n      <RouterProvider router={router} />\n    </>\n  );\n};\n"})})})]})]})}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);