(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_basic-features_data-fetch_mdx"],{61095:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return c}});var s,d=n("15169"),a=n("43932"),o=n("9880"),i=n("23169");function t(e){var r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",h3:"h3",pre:"pre",h4:"h4",ol:"ol",li:"li",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.h1,{id:"数据获取",children:["数据获取",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#数据获取",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"Modern.js 中提供了开箱即用的数据获取能力，开发者可以通过这些 API，在 CSR 和 SSR 环境同构的进行开发。"}),"\n",(0,o.jsx)(r.p,{children:"需要注意的是，这些 API 并不帮助应用发起请求，而是帮助开发者更好地管理数据，提升项目的性能。"}),"\n",(0,o.jsxs)(r.h2,{id:"data-loader(推荐)",children:["Data Loader(推荐)",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#data-loader(推荐)",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["Modern.js 推荐使用约定式路由做路由的管理，通过 Modern.js 的",(0,o.jsx)(r.a,{href:"/guides/basic-features/routes#%E7%BA%A6%E5%AE%9A%E5%BC%8F%E8%B7%AF%E7%94%B1",children:"约定式（嵌套）路由"}),"，每个路由组件(",(0,o.jsx)(r.code,{children:"layout.ts"})," 或 ",(0,o.jsx)(r.code,{children:"page.ts"}),")可以有一个同名的 ",(0,o.jsx)(r.code,{children:"loader"})," 文件，该 ",(0,o.jsx)(r.code,{children:"loader"})," 文件需要导出一个函数，函数会在组件渲染之前执行，为路由组件提供数据。"]}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive info",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"INFO"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsxs)(r.p,{children:["Modern.js v1 支持通过 ",(0,o.jsx)(r.a,{href:"#useloader%EF%BC%88%E6%97%A7%E7%89%88%EF%BC%89",children:"useLoader"})," 获取数据，这已经不是我们推荐的用法，除迁移过程外，不推荐两者混用。"]}),"\n"]})]}),"\n",(0,o.jsxs)(r.h3,{id:"基础示例",children:["基础示例",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#基础示例",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["路由组件如 ",(0,o.jsx)(r.code,{children:"layout.ts"})," 或 ",(0,o.jsx)(r.code,{children:"page.ts"}),"，可以定义同名的 ",(0,o.jsx)(r.code,{children:"loader"})," 文件，",(0,o.jsx)(r.code,{children:"loader"})," 文件中导出一个函数，该函数提供组件所需的数据，然后在路由组件中通过 ",(0,o.jsx)(r.code,{children:"useLoaderData"})," 函数获取数据，如下面示例："]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:".\n└── routes\n    ├── layout.tsx\n    └── user\n        ├── layout.tsx\n        ├── layout.loader.ts\n        ├── page.tsx\n        └── page.loader.ts\n"})}),"\n",(0,o.jsx)(r.p,{children:"在文件中定义以下代码："}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",meta:'title="routes/user/page.tsx"',children:"import { useLoaderData } from '@modern-js/runtime/router';\nimport type { ProfileData } from './page.loader.ts';\n\nexport default function UserPage() {\n  const profileData = useLoaderData() as ProfileData;\n  return <div>{profileData}</div>;\n}\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",meta:'title="routes/user/page.loader.ts"',children:"export type ProfileData = {\n  /*  some types */\n};\n\nexport default async (): Promise<ProfileData> => {\n  const res = await fetch('https://api/user/profile');\n  return await res.json();\n};\n"})}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive caution",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"CAUTION"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsxs)(r.p,{children:["这里路由组件和 ",(0,o.jsx)(r.code,{children:"loader"})," 文件共享类型，要使用 ",(0,o.jsx)(r.code,{children:"import type"})," 语法。"]}),"\n"]})]}),"\n",(0,o.jsxs)(r.p,{children:["在 CSR 环境下，",(0,o.jsx)(r.code,{children:"loader"})," 函数会在客户端执行，",(0,o.jsx)(r.code,{children:"loader"})," 函数内可以使用浏览器的 API（但通常不需要，也不推荐）。"]}),"\n",(0,o.jsxs)(r.p,{children:["在 SSR 环境下，不管是首屏，还是在客户端的导航，",(0,o.jsx)(r.code,{children:"loader"})," 函数只会在服务端执行，这里可以调用任意的 Node.js API，同时这里使用的任何依赖和代码都不会包含在客户端的 bundle 中。"]}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive info",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"INFO"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsxs)(r.p,{children:["在以后的版本中，Modern.js 可能会支持在 CSR 环境下，",(0,o.jsx)(r.code,{children:"loader"})," 函数也在服务端运行，以提高性能和安全性，所以这里建议尽可能地保证 ",(0,o.jsx)(r.code,{children:"loader"})," 的纯粹，只做数据获取的场景。"]}),"\n"]})]}),"\n",(0,o.jsxs)(r.p,{children:["当在客户端导航时，基于 Modern.js 的",(0,o.jsx)(r.a,{href:"/guides/basic-features/routes",children:"约定式路由"}),"，所有的 ",(0,o.jsx)(r.code,{children:"loader"})," 函数会并行执行（请求），即当访问 ",(0,o.jsx)(r.code,{children:"/user/profile"})," 时，",(0,o.jsx)(r.code,{children:"/user"})," 和 ",(0,o.jsx)(r.code,{children:"/user/profile"})," 下的 loader 函数都会并行执行（请求），以提高客户端的性能。"]}),"\n",(0,o.jsxs)(r.h3,{id:"loader-函数",children:[(0,o.jsx)(r.code,{children:"loader"})," 函数",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#loader-函数",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"loader"})," 函数有两个入参："]}),"\n",(0,o.jsxs)(r.h4,{id:"params",children:[(0,o.jsx)(r.code,{children:"params"}),(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["当路由文件通过 ",(0,o.jsx)(r.code,{children:"[]"})," 时，会作为",(0,o.jsx)(r.a,{href:"/guides/basic-features/routes#%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1",children:"动态路由"}),"，动态路由片段会作为参数传入 ",(0,o.jsx)(r.code,{children:"loader"})," 函数："]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"// routes/user/[id]/page.loader.ts\nimport { LoaderFunctionArgs } from '@modern-js/runtime/router';\n\nexport default async ({ params }: LoaderFunctionArgs) => {\n  const { id } = params;\n  const res = await fetch(`https://api/user/${id}`);\n  return res.json();\n};\n"})}),"\n",(0,o.jsxs)(r.p,{children:["当访问 ",(0,o.jsx)(r.code,{children:"/user/123"})," 时，",(0,o.jsx)(r.code,{children:"loader"})," 函数的参数为 ",(0,o.jsx)(r.code,{children:"{ params: { id: '123' } }"}),"。"]}),"\n",(0,o.jsxs)(r.h4,{id:"request",children:[(0,o.jsx)(r.code,{children:"request"}),(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#request",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"request"})," 是一个 ",(0,o.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request",target:"_blank",rel:"noopener noreferrer",children:"Fetch Request"})," 实例。"]}),"\n",(0,o.jsxs)(r.p,{children:["一个常见的使用场景是通过 ",(0,o.jsx)(r.code,{children:"request"})," 获取查询参数："]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"// routes/user/[id]/page.loader.ts\nimport { LoaderFunctionArgs } from '@modern-js/runtime/router';\n\nexport default async ({ request }: LoaderFunctionArgs) => {\n  const url = new URL(request.url);\n  const userId = url.searchParams.get('id');\n  return queryUser(userId);\n};\n"})}),"\n",(0,o.jsxs)(r.h4,{id:"返回值",children:["返回值",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"loader"})," 函数的返回值可以是任何可序列化的内容，也可以是一个 ",(0,o.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Response",target:"_blank",rel:"noopener noreferrer",children:"Fetch Response"})," 实例："]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"const loader = async (): Promise<ProfileData> => {\n  return {\n    message: 'hello world',\n  };\n};\nexport default loader;\n"})}),"\n",(0,o.jsxs)(r.p,{children:["默认情况下，",(0,o.jsx)(r.code,{children:"loader"})," 返回的响应 ",(0,o.jsx)(r.code,{children:"Content-type"})," 是 ",(0,o.jsx)(r.code,{children:"application/json"}),"，",(0,o.jsx)(r.code,{children:"status"})," 为 200，你可以通过自定义 ",(0,o.jsx)(r.code,{children:"Response"})," 来设置："]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"const loader = async (): Promise<ProfileData> => {\n  const data = { message: 'hello world' };\n  return new Response(JSON.stringify(data), {\n    status: 200,\n    headers: {\n      'Content-Type': 'application/json; utf-8',\n    },\n  });\n};\n"})}),"\n",(0,o.jsxs)(r.h3,{id:"请求-api",children:["请求 API",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#请求-api",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["Modern.js 对 ",(0,o.jsx)(r.code,{children:"fetch"})," API 做了 polyfill, 用于发起请求，该 API 与浏览器的 ",(0,o.jsx)(r.code,{children:"fetch"})," API 一致，但是在服务端也能使用该 API 发起请求，这意味着不管是 CSR 还是 SSR，都可以使用统一的 ",(0,o.jsx)(r.code,{children:"fetch"})," API 进行数据获取："]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"async function loader() {\n  const res = await fetch('https://api/user/profile');\n}\n"})}),"\n",(0,o.jsxs)(r.h3,{id:"错误处理",children:["错误处理",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#错误处理",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["在 ",(0,o.jsx)(r.code,{children:"loader"})," 函数中，可以通过 ",(0,o.jsx)(r.code,{children:"throw error"})," 或者 ",(0,o.jsx)(r.code,{children:"throw response"})," 的方式处理错误，当 ",(0,o.jsx)(r.code,{children:"loader"})," 函数中有错误被抛出时，Modern.js 会停止执行当前 ",(0,o.jsx)(r.code,{children:"loader"})," 中的代码，并将前端 UI 切换到定义的 ",(0,o.jsx)(r.a,{href:"/guides/basic-features/routes#%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86",children:(0,o.jsx)(r.code,{children:"ErrorBoundary"})})," 组件："]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"// routes/user/profile/page.loader.ts\nexport default async function loader() {\n  const res = await fetch('https://api/user/profile');\n  if (!res.ok) {\n    throw res;\n  }\n  return res.json();\n}\n\n// routes/user/profile/error.tsx\nimport { useRouteError } from '@modern-js/runtime/router';\nconst ErrorBoundary = () => {\n  const error = useRouteError() as Response;\n  return (\n    <div>\n      <h1>{error.status}</h1>\n      <h2>{error.statusText}</h2>\n    </div>\n  );\n};\n\nexport default ErrorBoundary;\n"})}),"\n",(0,o.jsxs)(r.h3,{id:"获取上层组件的数据",children:["获取上层组件的数据",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#获取上层组件的数据",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["很多场景下，子组件需要获取到祖先组件 ",(0,o.jsx)(r.code,{children:"loader"})," 中的数据，你可以通过 ",(0,o.jsx)(r.code,{children:"useRouteLoaderData"})," 方便地获取到祖先组件的数据："]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"// routes/user/profile/page.tsx\nimport { useRouteLoaderData } from '@modern-js/runtime/router';\n\nexport default function UserLayout() {\n  // 获取 routes/user/layout.loader.ts 中 `loader` 返回的数据\n  const data = useRouteLoaderData('user/layout');\n  return (\n    <div>\n      <h1>{data.name}</h1>\n      <h2>{data.age}</h2>\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"userRouteLoaderData"})," 接受一个参数 ",(0,o.jsx)(r.code,{children:"routeId"}),"，在使用约定式路由时，Modern.js 会为你自动生成",(0,o.jsx)(r.code,{children:"routeId"}),"，",(0,o.jsx)(r.code,{children:"routeId"})," 的值是对应组件相对于 ",(0,o.jsx)(r.code,{children:"src/routes"})," 的路径，如上面的例子中，子组件想要获取 ",(0,o.jsx)(r.code,{children:"routes/user/layout.tsx"})," 中 loader 返回的数据，",(0,o.jsx)(r.code,{children:"routeId"})," 的值就是 ",(0,o.jsx)(r.code,{children:"user/layout"}),"。"]}),"\n",(0,o.jsxs)(r.p,{children:["在多入口（MPA） 场景下，",(0,o.jsx)(r.code,{children:"routeId"})," 的值需要加上对应入口的名称，入口名称非指定情况下一般是入口的目录名，如以下目录结构："]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:".\n└── src\n    ├── entry1\n    │     └── routes\n    │           └── layout.tsx\n    └── entry2\n          └── routes\n                └── layout.tsx\n"})}),"\n",(0,o.jsxs)(r.p,{children:["如果想获取 ",(0,o.jsx)(r.code,{children:"entry1/routes/layout.tsx"})," 中 ",(0,o.jsx)(r.code,{children:"loader"})," 返回的数据，",(0,o.jsx)(r.code,{children:"routeId"})," 的值就是 ",(0,o.jsx)(r.code,{children:"entry1_layout"}),"。"]}),"\n",(0,o.jsxs)(r.h3,{id:"(wip)loading-ui",children:["(WIP)Loading UI",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#(wip)loading-ui",children:"#"})]}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive info",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"INFO"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsx)(r.p,{children:"此功能目前是实验性质，后续 API 可能有调整。"}),(0,o.jsx)(r.p,{children:"目前仅支持 CSR，敬请期待 Streaming SSR。"}),"\n"]})]}),"\n",(0,o.jsxs)(r.p,{children:["创建 ",(0,o.jsx)(r.code,{children:"user/layout.loader.ts"}),"，并添加以下代码："]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",meta:'title="routes/user/layout.loader.ts"',children:"import { defer } from \"@modern-js/runtime/router\"\n\nconst loader = () =>\ndefer({\n  userInfo: new Promise((resolve) => {\n      setTimeout(() => {\n        resolve({\n          age: 1,\n          name: 'user layout'\n        })\n      }, 1000)\n    })\n  })\n\nexport default loader;\n"})}),"\n",(0,o.jsxs)(r.p,{children:["在 ",(0,o.jsx)(r.code,{children:"user/layout.tsx"})," 中添加以下代码："]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",meta:'title="routes/user/layout.tsx"',children:"import { Await, defer, useLoaderData, Outlet } from '@modern-js/runtime/router';\n\nexport default function UserLayout() {\n  const { userInfo } = useLoaderData() as { userInfo: Promise<UserInfo> };\n  return (\n    <div>\n      <React.Suspense fallback={<p>Loading...</p>}>\n        <Await\n          resolve={userInfo}\n          children={userInfo => (\n            <div>\n              <span>{userInfo.name}</span>\n              <span>{userInfo.age}</span>\n              <Outlet />\n            </div>\n          )}\n        ></Await>\n      </React.Suspense>\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive info",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"INFO"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsxs)(r.p,{children:["Await 组件的具体用法请查看 ",(0,o.jsx)(r.a,{href:"https://reactrouter.com/en/main/components/await",target:"_blank",rel:"noopener noreferrer",children:"Await"})]}),"\n",(0,o.jsxs)(r.p,{children:["defer 的具体用法请查看 ",(0,o.jsx)(r.a,{href:"https://reactrouter.com/en/main/guides/deferred",target:"_blank",rel:"noopener noreferrer",children:"defer"})]}),"\n"]})]}),"\n","\n",(0,o.jsxs)(r.h3,{id:"错误用法",children:["错误用法",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#错误用法",children:"#"})]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"loader"})," 中只能返回可序列化的数据，在 SSR 环境下，",(0,o.jsx)(r.code,{children:"loader"})," 函数的返回值会被序列化为 JSON 字符串，然后在客户端被反序列化为对象。因此，",(0,o.jsx)(r.code,{children:"loader"})," 函数中不能返回不可序列化的数据（如函数）。"]}),"\n"]}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive warning",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"WARNING"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsx)(r.p,{children:"目前 CSR 下没有这个限制，但我们强烈推荐你遵循该限制，且未来我们可能在 CSR 下也加上该限制。"}),"\n"]})]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"// This won't work!\nexport default () => {\n  return {\n    user: {},\n    method: () => {},\n  };\n};\n"})}),"\n",(0,o.jsxs)(r.ol,{start:"2",children:["\n",(0,o.jsxs)(r.li,{children:["Modern.js 会帮你调用 ",(0,o.jsx)(r.code,{children:"loader"})," 函数，你不应该自己调用 ",(0,o.jsx)(r.code,{children:"loader"})," 函数："]}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"// This won't work!\nexport default async () => {\n  const res = fetch('https://api/user/profile');\n  return res.json();\n};\n\nimport loader from './page.loader.ts';\nexport default function RouteComp() {\n  const data = loader();\n}\n"})}),"\n",(0,o.jsxs)(r.ol,{start:"3",children:["\n",(0,o.jsxs)(r.li,{children:["不能从路由组件中引入 ",(0,o.jsx)(r.code,{children:"loader"})," 文件，也不能从 ",(0,o.jsx)(r.code,{children:"loader"})," 文件引入路由组件中的变量，如果需要共享类型的话，应该使用 ",(0,o.jsx)(r.code,{children:"import type"})]}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"// Not allowed\n// routes/layout.tsx\nimport { useLoaderData } from '@modern-js/runtime/router';\nimport { ProfileData } from './page.loader.ts'; // should use \"import type\" instead\n\nexport const fetch = wrapFetch(fetch);\n\nexport default function UserPage() {\n  const profileData = useLoaderData() as ProfileData;\n  return <div>{profileData}</div>;\n}\n\n// routes/layout.loader.ts\nimport { fetch } from './layout.tsx'; // should not be imported from the routing component\nexport type ProfileData = {\n  /*  some types */\n};\n\nexport default async (): Promise<ProfileData> => {\n  const res = await fetch('https://api/user/profile');\n  return await res.json();\n};\n"})}),"\n",(0,o.jsxs)(r.ol,{start:"4",children:["\n",(0,o.jsxs)(r.li,{children:["在服务端运行时，",(0,o.jsx)(r.code,{children:"loader"})," 函数会被打包为一个统一的 bundle，所以我们不推荐服务端的代码使用 ",(0,o.jsx)(r.code,{children:"__filename"})," 和 ",(0,o.jsx)(r.code,{children:"__dirname"}),"。"]}),"\n"]}),"\n",(0,o.jsxs)(r.h3,{id:"常见问题",children:["常见问题",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#常见问题",children:"#"})]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"loader"})," 和 BFF 函数的关系"]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["在 CSR 项目中，",(0,o.jsx)(r.code,{children:"loader"})," 在客户端执行，在 ",(0,o.jsx)(r.code,{children:"loader"})," 可以直接调用 BFF 函数进行接口请求。"]}),"\n",(0,o.jsxs)(r.p,{children:["在 SSR 项目中，每个 ",(0,o.jsx)(r.code,{children:"loader"})," 也是一个服务端接口，我们推荐使用 ",(0,o.jsx)(r.code,{children:"loader"})," 替代 http method 为 ",(0,o.jsx)(r.code,{children:"get"})," 的 BFF 函数，作为接口层，避免多一层转发和执行。"]}),"\n",(0,o.jsxs)(r.h2,{id:"useloader（旧版）",children:["useLoader（旧版）",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#useloader（旧版）",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:(0,o.jsx)(r.code,{children:"useLoader"})})," 是 Modern.js 老版本中的 API。该 API 是一个 React Hook，专门提供给 SSR 应用使用，让开发者能同构的在组件中获取数据。"]}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive tip",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsxs)(r.p,{children:["CSR 的项目没有必要使用 ",(0,o.jsx)(r.code,{children:"useLoader"})," 获取数据。"]}),"\n"]})]}),"\n",(0,o.jsx)(r.p,{children:"以下是一个最简单的例子："}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"import { useLoader } from '@modern-js/runtime';\n\nexport default () => {\n  const { data } = useLoader(async () => {\n    console.log('fetch in useLoader');\n\n    // 这里没有发送真实的请求，只是返回了一个写死的数据。\n    // 真实项目中，应该返回从远端获取的数据。\n    return {\n      name: 'Modern.js',\n    };\n  });\n\n  return <div>Hello, {data?.name}</div>;\n};\n"})}),"\n",(0,o.jsx)(r.p,{children:"上述代码启动后，访问页面。可以看到在终端输出了日志，而在浏览器终端却没有打印日志。"}),"\n",(0,o.jsxs)(r.p,{children:["这是因为 Modern.js 在服务端渲染时，在会收集 ",(0,o.jsx)(r.code,{children:"useLoader"})," 返回的数据，并将数据注入到响应的 HTML 中。如果 SSR 渲染成功，在 HTML 中可以看到如下代码片段："]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-html",children:"<script>\n  window._SSR_DATA = {};\n</script>\n"})}),"\n",(0,o.jsxs)(r.p,{children:["在这全局变量中，记录了每一份数据，而在浏览器端渲染的过程中，会优先使用这份数据。如果数据不存在，则会重新执行 ",(0,o.jsx)(r.code,{children:"useLoader"})," 函数。"]}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive note",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"NOTE"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsxs)(r.p,{children:["在构建阶段，Modern.js 会自动为每个 ",(0,o.jsx)(r.code,{children:"useLoader"})," 生成一个 Loader ID，并注入到 SSR 和 CSR 的 JS Bundle 中，用来关联 Loader 和数据。"]}),"\n"]})]}),"\n",(0,o.jsxs)(r.p,{children:["相比于 Next.js 中的 ",(0,o.jsx)(r.code,{children:"getServerSideProps"}),"，在渲染前预先获取数据。使用 ",(0,o.jsx)(r.code,{children:"useLoader"}),"，可以在组件中获取局部 UI 所需要的数据，而不用将数据层层传递。同样，也不会因为不同路由需要不同数据请求，而在最外层的数据获取函数中添加冗余的逻辑。当然 ",(0,o.jsx)(r.code,{children:"useLoader"})," 也存在一些问题，例如服务端代码 Treeshaking 困难，服务端需要多一次预渲染等。"]}),"\n",(0,o.jsxs)(r.p,{children:["Modern.js 在新版本中，设计了全新的 Loader 方案。新方案解决了这些问题，并能够配合",(0,o.jsx)(r.strong,{children:"嵌套路由"}),"，对页面性能做优化。"]}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive note",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"NOTE"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsxs)(r.p,{children:["详细 API 可以查看 ",(0,o.jsx)(r.a,{href:"/apis/app/runtime/core/use-loader",children:"useLoader"}),"。"]}),"\n"]})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/zh/guides/basic-features/data-fetch.mdx"]={toc:[{text:"Data Loader(推荐)",id:"data-loader(推荐)",depth:2},{text:"基础示例",id:"基础示例",depth:3},{text:"loader 函数",id:"loader-函数",depth:3},{text:"params",id:"params",depth:4},{text:"request",id:"request",depth:4},{text:"返回值",id:"返回值",depth:4},{text:"请求 API",id:"请求-api",depth:3},{text:"错误处理",id:"错误处理",depth:3},{text:"获取上层组件的数据",id:"获取上层组件的数据",depth:3},{text:"(WIP)Loading UI",id:"(wip)loading-ui",depth:3},{text:"错误用法",id:"错误用法",depth:3},{text:"常见问题",id:"常见问题",depth:3},{text:"useLoader（旧版）",id:"useloader（旧版）",depth:2}],title:"数据获取",frontmatter:{title:"数据获取",sidebar_position:3}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,o.jsx)(r,a._(d._({},e),{children:(0,o.jsx)(t,d._({},e))})):t(e)}}}]);