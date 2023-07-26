(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_ssr_mdx"],{90640:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var s,d=r("15169"),a=r("43932"),i=r("9880"),c=r("23169");function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",div:"div",ol:"ol",li:"li",strong:"strong",h3:"h3",ul:"ul"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"服务端渲染ssr",children:["服务端渲染（SSR）",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#服务端渲染ssr",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"在 Modern.js 中，SSR 也是开箱即用的。开发者无需为 SSR 编写复杂的服务端逻辑，也无需关心 SSR 的运维，或是创建单独的服务。Modern.js 拥有完备的 SSR 降级策略，保证页面能够安全运行。"}),"\n",(0,i.jsxs)(n.p,{children:["启用 SSR 非常简单，只需要设置 ",(0,i.jsx)(n.a,{href:"/configure/app/server/ssr",children:(0,i.jsx)(n.code,{children:"server.ssr"})})," 为 ",(0,i.jsx)(n.code,{children:"true"})," 即可："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  server: {\n    ssr: true,\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"ssr-时的数据获取",children:["SSR 时的数据获取",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ssr-时的数据获取",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js 中提供了 Data Loader，方便开发者在 SSR、CSR 下同构的获取数据。每个路由模块，如 ",(0,i.jsx)(n.code,{children:"layout.tsx"})," 和 ",(0,i.jsx)(n.code,{children:"page.tsx"})," 都可以定义自己的 Data Loader："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="src/routes/page.loader.ts"',children:"export default () => {\n  return {\n    message: 'Hello World',\n  };\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["在组件中可以通过 Hooks API 的方式获取 ",(0,i.jsx)(n.code,{children:"loader"})," 函数返回的数据："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { useLoaderData } from '@modern-js/runtime/router';\nexport default () => {\n  const data = useLoaderData();\n  return <div>{data.message}</div>;\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Modern.js 打破传统的 SSR 开发模式，提供了用户无感的 SSR 开发体验。并且提供了优雅的降级处理，一旦 SSR 请求失败，会自动降级在浏览器端重新发起请求。"}),"\n",(0,i.jsxs)(n.p,{children:["不过，开发者仍然需要关注数据的兜底处理，例如 ",(0,i.jsx)(n.code,{children:"null"})," 值或不符合预期的数据返回。避免在 SSR 时产生 React 渲染错误或是返回凌乱的渲染结果。"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"当以客户端路由的方式请求页面时，Modern.js 会发送一个 HTTP 请求，服务端接收到请求后执行页面对应的 Data Loader 函数，然后将执行结果作为请求的响应返回浏览器。"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["使用 Data Loader 时，数据获取发生在渲染前，Modern.js 也仍然支持在组件渲染时获取数据。更多相关内容可以查看",(0,i.jsx)(n.a,{href:"/guides/basic-features/data-fetch",children:"数据获取"}),"。"]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"保持渲染一致",children:["保持渲染一致",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#保持渲染一致",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["有些业务中，UI 展示会和用户设备有关，例如 ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent",target:"_blank",rel:"noopener noreferrer",children:"UA"})," 信息。如果处理不够仔细，此时很有可能出现不符合预期的渲染结果。"]}),"\n",(0,i.jsx)(n.p,{children:"这里通过一个例子，演示当 SSR 与 CSR 渲染不一致时出现的问题，在组件中添加以下代码："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"{\n  typeof window !== 'undefined' ? <div>browser content</div> : null;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"启动应用后，访问页面，会发现浏览器控制台抛出警告信息："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"Warning: Expected server HTML to contain a matching <div> in <div>.\n"})}),"\n",(0,i.jsx)(n.p,{children:"这是 React hydrate 结果与 SSR 渲染结果不一致造成的。虽然当前页面表现正常，但在复杂应用中，很有可能因此出现 DOM 层级混乱、样式混乱等问题。"}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:["关于 hydrate (注水)逻辑请参考",(0,i.jsx)(n.a,{href:"https://zh-hans.react.dev/reference/react-dom/hydrate",target:"_blank",rel:"noopener noreferrer",children:"这里"}),"。"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.p,{children:["应用需要保持 SSR 与 CSR 渲染结果的一致性，如果存在不一致的情况，说明这部分内容无需在 SSR 中进行渲染。Modern.js 为这类在 SSR 中不需要渲染的内容提供 ",(0,i.jsxs)(n.a,{href:"/apis/app/runtime/core/use-runtime-context",children:[(0,i.jsx)(n.code,{children:"<NoSSR>"})," 工具组件"]}),"："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { NoSSR } from '@modern-js/runtime/ssr';\n"})}),"\n",(0,i.jsxs)(n.p,{children:["在不需要进行 SSR 的元素外部，用 ",(0,i.jsx)(n.code,{children:"NoSSR"})," 组件包裹："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<NoSSR>\n  <div>client content</div>\n</NoSSR>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["修改代码后，刷新页发现之前的 Waring 消失。打开浏览器开发者工具的 Network 窗口，查看返回的 HTML 文档是不包含 ",(0,i.jsx)(n.code,{children:"NoSSR"})," 组件包裹的内容的。"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/apis/app/runtime/core/use-runtime-context",children:(0,i.jsx)(n.code,{children:"useRuntimeContext"})})," 可以获取完整的请求信息，可以利用它保证 SSR 与 CSR 的渲染结果一致。"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"关注内存泄漏",children:["关注内存泄漏",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#关注内存泄漏",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive warning",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"警告"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsx)(n.p,{children:"在 SSR 场景下，开发者需要特别关注内存泄露问题，即使是微小的内存泄露，在大量的访问后也会对服务造成影响。"}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:"SSR 时，浏览器的每次请求，都会触发服务端重新执行一次组件渲染逻辑。所以，需要避免在全局定义任何可能不断增长的数据结构，或在全局进行事件订阅，或创建不会被销毁的流。"}),"\n",(0,i.jsxs)(n.p,{children:["例如以下代码，使用 ",(0,i.jsx)(n.a,{href:"https://redux-observable.js.org/",target:"_blank",rel:"noopener noreferrer",children:"redux-observable"})," 时，习惯了 CSR 的开发者通常会在组件中这样编码："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"/* 代码仅作为示例，不可运行 */\nimport { createEpicMiddleware, combineEpics } from 'redux-observable';\n\nconst epicMiddleware = createEpicMiddleware();\nconst rootEpic = combineEpics();\n\nexport default function Test() {\n  epicMiddleware.run(rootEpic);\n  return <div>Hello Modern.js</div>;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["在组件外层创建 Middleware 实例 ",(0,i.jsx)(n.code,{children:"epicMiddleware"}),"，并在组件内部调用 ",(0,i.jsx)(n.code,{children:"epicMiddleware.run"}),"。"]}),"\n",(0,i.jsxs)(n.p,{children:["在浏览器端，这段代码不会造成任何问题，但是在 SSR 时，Middleware 实例会一直无法被销毁。每次渲染组件，调用 ",(0,i.jsx)(n.code,{children:"epicMiddleware.run(rootEpic)"})," 时，都会在内部添加新的事件绑定，导致整个对象不断变大，最终对应用性能造成影响。"]}),"\n",(0,i.jsx)(n.p,{children:"CSR 中这类问题不易被发觉，因此从 CSR 切换到 SSR 时，如果不确定应用是否存在这类隐患，可以对应用进行压测。"}),"\n",(0,i.jsxs)(n.h2,{id:"收敛服务端数据",children:["收敛服务端数据",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#收敛服务端数据",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"为了保持 SSR 阶段请求的数据，可以在浏览器端直接使用，Modern.js 会将渲染过程中收集的数据与状态注入到 HTML 内。但是，CSR 应用常常存在接口数据量大、组件状态未收敛的情况，这时如果直接使用 SSR，渲染得到的 HTML 体积可能会存在过大的问题。此时，SSR 不仅无法为应用带来用户体验上的提升，反而可能起到相反的作用。"}),"\n",(0,i.jsxs)(n.p,{children:["因此，使用 SSR 时，",(0,i.jsx)(n.strong,{children:"开发者需要为应用做合理的瘦身"}),"："]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"关注首屏，SSR 中可以只请求首屏需要的数据，并在浏览器端渲染剩余的部分。"}),"\n",(0,i.jsx)(n.li,{children:"将与渲染无关的数据，从接口返回数据中剔除。"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"serverless-pre-render",children:["Serverless Pre-render",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverless-pre-render",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Modern.js 提供 Serverless Pre-rendering (SPR) 这一特性来提升 SSR 性能。"}),"\n",(0,i.jsx)(n.p,{children:"SPR 利用预渲染与缓存技术，为 SSR 页面提供静态 Web 的响应性能。它让 SSR 应用拥有静态 Web 页面的响应速度与稳定性，同时还能保持数据的动态更新。"}),"\n",(0,i.jsxs)(n.p,{children:["在 Modern.js 中使用 SPR 非常简单，只需要在组件中新增 ",(0,i.jsx)(n.code,{children:"PreRender"})," 组件，该组件所在的页面就会自动开启 SPR。"]}),"\n",(0,i.jsxs)(n.p,{children:["这里模拟一个使用 ",(0,i.jsx)(n.code,{children:"useLoaderData"})," API 的组件，Data Loader 中的请求需要消耗 2s 时间。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",meta:'title="page.loader.ts"',children:"export default async () => {\n  await new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve(null);\n    }, 2000);\n  });\n\n  return {\n    message: 'Hello Modern.js',\n  };\n};\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",meta:'title="page.tsx"',children:"import { useLoaderData } from '@modern-js/runtime/router';\n\nexport default () => {\n  const data = useLoaderData();\n  return <div>{data?.message}</div>;\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["执行 ",(0,i.jsx)(n.code,{children:"dev"})," 命令后，打开页面，可以明显的察觉到页面需要等到 2s 后才返回。"]}),"\n",(0,i.jsxs)(n.p,{children:["接下来使用 ",(0,i.jsx)(n.code,{children:"PreRender"})," 组件来进行优化，该组件可以直接从 ",(0,i.jsx)(n.code,{children:"@modern-js/runtime/ssr"})," 中导出："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { PreRender } from '@modern-js/runtime/ssr';\n"})}),"\n",(0,i.jsxs)(n.p,{children:["在路由组件内使用 ",(0,i.jsx)(n.code,{children:"PreRender"})," 组件，并设置参数 ",(0,i.jsx)(n.code,{children:"interval"}),"，用于表示该次渲染结果的过期时间为 5s："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<PreRender interval={5} />\n"})}),"\n",(0,i.jsxs)(n.p,{children:["修改后，执行 ",(0,i.jsx)(n.code,{children:"pnpm run build && pnpm run serve"})," 启动应用，并打开页面。"]}),"\n",(0,i.jsx)(n.p,{children:"首次打开时，和之前的渲染并没有什么不同，同样存在 2s 延迟。点击刷新，页面瞬间打开，但此时，页面数据并没有因为刷新发生变化，这是因为缓存还没有过期。"}),"\n",(0,i.jsx)(n.p,{children:"等待 5s，重新刷新页面，页面的数据仍然没有变化。再一次刷新页面数据发生变化，但是页面仍然几乎是瞬间响应的。\n这是因为在之前的请求时，SPR 已经在后台异步获取了新的渲染结果，本次请求到的页面是已经缓存在服务器中的版本。"}),"\n",(0,i.jsxs)(n.p,{children:["可以想象，当 ",(0,i.jsx)(n.code,{children:"interval"})," 设置为 1 时，用户可以在感知到实时数据的同时，拥有静态页面的响应体验。"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"PreRender"})," 的详细使用可以参考",(0,i.jsx)(n.a,{href:"/apis/app/runtime/ssr/pre-render",children:"这里"}),"。"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"treeshaking",children:["Treeshaking",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#treeshaking",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"开启 SSR 时，Modern.js 会用相同的入口，构建出 SSR Bundle 和 CSR Bundle 两份产物。因此，在 SSR Bundle 中存在 Web API，或是在 CSR Bundle 中存在 Node API 时，都可能导致运行出错。"}),"\n",(0,i.jsx)(n.p,{children:"在组件中引入 Web API，通常情况下是要做一些全局监听，或是获取浏览器相关的数据，例如："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"document.addEventListener('load', () => {\n  console.log('document load');\n});\nconst App = () => {\n  return <div>Hello World</div>;\n};\nexport default App;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["在组件文件中引入 Node API，通常情况下是因为使用了 ",(0,i.jsx)(n.code,{children:"useLoader"}),"，例如："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import fse from 'fs-extra';\nimport { useLoader } from '@modern-js/runtime'\n\nconst App = () => {\n  const { data } = useLoader(async () => {\n    const file = fse.readFileSync('./myfile');\n    return {\n      ...\n    };\n  })\n\n  return <div>Hello World</div>;\n};\nexport default App;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"环境变量区分",children:["环境变量区分",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#环境变量区分",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["对于第一种情况，我们可以直接使用 Modern.js 内置的环境变量 ",(0,i.jsx)(n.code,{children:"MODERN_TARGET"})," 进行判断，在构建时删除无用代码："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"if (process.env.MODERN_TARGET === 'browser') {\n  document.addEventListener('load', () => {\n    console.log('document load');\n  });\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"开发环境打包后，SSR 产物和 CSR 产物会被编译成以下内容。因此 SSR 环境中不会再因为 Web API 报错："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// SSR 产物\nif (false) {\n}\n\n// CSR 产物\nif (true) {\n  document.addEventListener('load', () => {\n    console.log('document load');\n  });\n}\n"})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive note",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["更多内容可以查看",(0,i.jsx)(n.a,{href:"/guides/basic-features/env-vars",children:"环境变量"}),"。\n"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"文件后缀区分",children:["文件后缀区分",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#文件后缀区分",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["但例如第二种情况，在代码中引入了 ",(0,i.jsx)(n.code,{children:"fs-extra"}),"，它内部有使用了 Node API 的副作用，如果直接引用到组件中，会造成 CSR 加载报错。"]}),"\n",(0,i.jsxs)(n.p,{children:["环境变量的方式并不能在这种情况下生效，Modern.js 也支持通过 ",(0,i.jsx)(n.code,{children:".node."})," 后缀的文件来区分 SSR Bundle 和 CSR Bundle 产物的打包文件。"]}),"\n",(0,i.jsxs)(n.p,{children:["可以创建同名的 ",(0,i.jsx)(n.code,{children:".ts"})," 和 ",(0,i.jsx)(n.code,{children:".node.ts"})," 文件做一层代理："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="compat.ts"',children:"export const readFileSync: any = () => {};\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="compat.node.ts"',children:"export { readFileSync } from 'fs-extra';\n"})}),"\n",(0,i.jsxs)(n.p,{children:["在文件中直接引入 ",(0,i.jsx)(n.code,{children:"./compat"}),"，此时 SSR 环境下会优先使用 ",(0,i.jsx)(n.code,{children:".node.ts"})," 后缀的文件，CSR 环境下会使用 ",(0,i.jsx)(n.code,{children:".ts"})," 后缀的文件。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="App.tsx"',children:"import { readFileSync } from './compat'\n\nexport const loader = () => {\n  const file = readFileSync('./myfile');\n  return {\n    ...\n  };\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"独立文件",children:["独立文件",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#独立文件",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"上述两种方式，都会为开发者带来一些心智负担。在真实的业务中，我们发现大多数的 Node / Web 代码混用都出现在数据请求中。"}),"\n",(0,i.jsxs)(n.p,{children:["因此，Modern.js 基于",(0,i.jsx)(n.a,{href:"/guides/basic-features/routes",children:"嵌套路由"}),"开发设计了",(0,i.jsx)(n.a,{href:"/guides/basic-features/data-fetch",children:"更简单的方案"}),"来分离 CSR 和 SSR 的代码。"]}),"\n",(0,i.jsxs)(n.p,{children:["我们可以通过独立文件来分离",(0,i.jsx)(n.strong,{children:"数据请求"}),"与",(0,i.jsx)(n.strong,{children:"组件代码"}),"。在 ",(0,i.jsx)(n.code,{children:"routes/page.tsx"})," 中编写组件逻辑，在 ",(0,i.jsx)(n.code,{children:"routes/page.loader.ts"})," 中编写数据请求逻辑。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="routes/page.tsx"',children:"export default Page = () => {\n  return <div>Hello World<div>\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="routes/page.loader.tsx"',children:"import fse from 'fs-extra';\nexport default () => {\n  const file = fse.readFileSync('./myfile');\n  return {\n    ...\n  };\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"接口请求",children:["接口请求",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#接口请求",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["在 SSR 中发起接口请求时，开发者有时自己封装了同构的请求工具。部分接口需要传递用户 Cookie，开发者可以通过 ",(0,i.jsx)(n.a,{href:"/guides/basic-features/data-fetch#route-loader",children:(0,i.jsx)(n.code,{children:"useRuntimeContext"})})," API 获取到请求头来实现。"]}),"\n",(0,i.jsxs)(n.p,{children:["需要注意的是，此时获取到的是 HTML 请求的请求头，不一定适用于接口请求，因此",(0,i.jsx)(n.strong,{children:"千万不能"}),"透传所有请求头。并且，一些后端接口，或是通用网关，会根据请求头中的信息做校验，全量透传容易出现各种难以排查的问题，推荐",(0,i.jsx)(n.strong,{children:"按需透传"}),"。"]}),"\n",(0,i.jsxs)(n.p,{children:["如果实在需要透传所有请求头，请务必过滤 ",(0,i.jsx)(n.code,{children:"host"})," 字段。"]}),"\n",(0,i.jsxs)(n.h2,{id:"流式渲染",children:["流式渲染",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#流式渲染",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Modern.js 支持了 React 18 的流式渲染，可以通过如下配置启用："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  server: {\n    ssr: {\n      mode: 'stream',\n    },\n  },\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"Modern.js 的流式渲染基于 React Router 实现，主要涉及 API 有："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://reactrouter.com/en/main/utils/defer",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n.code,{children:"defer"})}),"：在 Data Loader 中使用，用于支持异步获取数据。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://reactrouter.com/en/main/components/await",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n.code,{children:"Await"})}),"：用于渲染 Data Loader 返回的异步数据。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://reactrouter.com/en/main/hooks/use-async-value",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n.code,{children:"useAsyncValue"})}),"：用于从最近的父级 ",(0,i.jsx)(n.code,{children:"Await"})," 组件中获取数据。"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"异步获取数据",children:["异步获取数据",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#异步获取数据",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="page.loader.ts"',children:"import { defer, type LoaderFunctionArgs } from '@modern-js/runtime/router';\n\ninterface User {\n  name: string;\n  age: number;\n}\n\nexport interface Data {\n  data: User;\n}\n\nexport default ({ params }: LoaderFunctionArgs) => {\n  const userId = params.id;\n\n  const user = new Promise<User>(resolve => {\n    setTimeout(() => {\n      resolve({\n        name: `user-${userId}`,\n        age: 18,\n      });\n    }, 200);\n  });\n\n  return defer({ data: user });\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"user"})," 是一个 Promise 类型的对象，表示需要异步获取的数据，通过 ",(0,i.jsx)(n.code,{children:"defer"})," 处理需要异步获取的 ",(0,i.jsx)(n.code,{children:"user"}),"。注意，",(0,i.jsx)(n.code,{children:"defer"})," 必须接收一个对象类型的参数，\n因此， 传入 ",(0,i.jsx)(n.code,{children:"defer"})," 的参数为：",(0,i.jsx)(n.code,{children:"{ data: user }"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"defer"})," 还可以同时接收异步数据和同步数据。例如："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="page.loader.ts"',children:"// 省略部分代码\n\nexport default ({ params }: LoaderFunctionArgs) => {\n  const userId = params.id;\n\n  const user = new Promise<User>(resolve => {\n    setTimeout(() => {\n      resolve({\n        name: `user-${userId}`,\n        age: 18,\n      });\n    }, 200);\n  });\n\n  const otherData = new Promise<string>(resolve => {\n    setTimeout(() => {\n      resolve('some sync data');\n    }, 200);\n  });\n\n  return defer({\n    data: user,\n    other: await otherData,\n  });\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"otherData"})," 前加了 ",(0,i.jsx)(n.code,{children:"await"}),"，所以是同步获取的数据，它可以和异步获取的数据 ",(0,i.jsx)(n.code,{children:"user"})," 同时传入 ",(0,i.jsx)(n.code,{children:"defer"}),"。"]}),"\n",(0,i.jsxs)(n.h3,{id:"渲染异步数据",children:["渲染异步数据",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#渲染异步数据",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["通过 ",(0,i.jsx)(n.code,{children:"Await"})," 组件，可以获取到 Data Loader 中异步返回的数据，然后进行渲染。例如："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",meta:'title="page.tsx"',children:"import { Await, useLoaderData } from '@modern-js/runtime/router';\nimport { Suspense } from 'react';\nimport type { Data } from './page.loader';\n\nconst Page = () => {\n  const data = useLoaderData() as Data;\n\n  return (\n    <div>\n      User info:\n      <Suspense fallback={<div id=\"loading\">loading user data ...</div>}>\n        <Await resolve={data.data}>\n          {user => {\n            return (\n              <div id=\"data\">\n                name: {user.name}, age: {user.age}\n              </div>\n            );\n          }}\n        </Await>\n      </Suspense>\n    </div>\n  );\n};\n\nexport default Page;\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Await"})," 需要包裹在 ",(0,i.jsx)(n.code,{children:"Suspense"})," 组件内部，",(0,i.jsx)(n.code,{children:"Await"})," 的 ",(0,i.jsx)(n.code,{children:"resolve"})," 传入的是 Data Loader 异步获取的数据，当数据获取完成后，\n通过 ",(0,i.jsx)(n.a,{href:"https://zh-hans.react.dev/reference/react/cloneElement#passing-data-with-a-render-prop",target:"_blank",rel:"noopener noreferrer",children:"Render Props"})," 模式，渲染获取到的数据。在数据的获取阶段，将展示\n",(0,i.jsx)(n.code,{children:"Suspense"})," 组件 ",(0,i.jsx)(n.code,{children:"fallback"})," 属性设置的内容。"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive warning",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"注意"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsx)(n.p,{children:"从 Data Loader 文件导入类型时，需要使用 import type 语法，保证只导入类型信息，这样可以避免 Data Loader 的代码打包到前端产物的 bundle 文件中。"}),"\n",(0,i.jsxs)(n.p,{children:["所以，这里的导入方式为：",(0,i.jsx)(n.code,{children:"import type { Data } from './page.loader'"}),";"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.p,{children:["也可以通过 ",(0,i.jsx)(n.code,{children:"useAsyncValue"})," 获取 Data Loader 返回的异步数据。例如："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",meta:"title='page.tsx'",children:"import { useAsyncValue } from '@modern-js/runtime/router';\n\n// 省略部分代码\n\nconst UserInfo = () => {\n  const user = useAsyncValue();\n\n  return (\n    <div>\n      name: {user.name}, age: {user.age}\n    </div>\n  );\n};\n\nconst Page = () => {\n  const data = useLoaderData() as Data;\n\n  return (\n    <div>\n      User info:\n      <Suspense fallback={<div id=\"loading\">loading user data ...</div>}>\n        <Await resolve={data.data}>\n          <UserInfo />\n        </Await>\n      </Suspense>\n    </div>\n  );\n};\n\nexport default Page;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"错误处理",children:["错误处理",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#错误处理",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Await"})," 组件的 ",(0,i.jsx)(n.code,{children:"errorElement"})," 属性，可以用来处理当 Data Loader 执行时，或者子组件渲染时抛出的错误。\n例如，我们故意在 Data Loader 函数中抛出错误："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="page.loader.ts"',children:"import { defer } from '@modern-js/runtime/router';\n\nexport default () => {\n  const data = new Promise((resolve, reject) => {\n    setTimeout(() => {\n      reject(new Error('error occurs'));\n    }, 200);\n  });\n\n  return defer({ data });\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["然后通过 ",(0,i.jsx)(n.code,{children:"useAsyncError"})," 获取错误，并将用于渲染错误信息的组件赋值给 ",(0,i.jsx)(n.code,{children:"Await"})," 组件的 ",(0,i.jsx)(n.code,{children:"errorElement"})," 属性："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",meta:'title="page.ts"',children:"import { Await, useAsyncError, useLoaderData } from '@modern-js/runtime/router';\nimport { Suspense } from 'react';\n\nexport default function Page() {\n  const data = useLoaderData();\n\n  return (\n    <div>\n      Error page\n      <Suspense fallback={<div>loading ...</div>}>\n        <Await resolve={data.data} errorElement={<ErrorElement />}>\n          {(data: any) => {\n            return <div>never displayed</div>;\n          }}\n        </Await>\n      </Suspense>\n    </div>\n  );\n}\n\nfunction ErrorElement() {\n  const error = useAsyncError() as Error;\n  return <p>Something went wrong! {error.message}</p>;\n}\n"})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://reactrouter.com/en/main/guides/deferred",target:"_blank",rel:"noopener noreferrer",children:"Deferred Data"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/reactwg/react-18/discussions/37",target:"_blank",rel:"noopener noreferrer",children:"New Suspense SSR Architecture in React 18"})}),"\n"]}),"\n"]})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguides%2Fadvanced-features%2Fssr.mdx"]={toc:[{text:"SSR 时的数据获取",id:"ssr-时的数据获取",depth:2},{text:"保持渲染一致",id:"保持渲染一致",depth:2},{text:"关注内存泄漏",id:"关注内存泄漏",depth:2},{text:"收敛服务端数据",id:"收敛服务端数据",depth:2},{text:"Serverless Pre-render",id:"serverless-pre-render",depth:2},{text:"Treeshaking",id:"treeshaking",depth:2},{text:"环境变量区分",id:"环境变量区分",depth:3},{text:"文件后缀区分",id:"文件后缀区分",depth:3},{text:"独立文件",id:"独立文件",depth:3},{text:"接口请求",id:"接口请求",depth:2},{text:"流式渲染",id:"流式渲染",depth:2},{text:"异步获取数据",id:"异步获取数据",depth:3},{text:"渲染异步数据",id:"渲染异步数据",depth:3},{text:"错误处理",id:"错误处理",depth:3}],title:"服务端渲染（SSR）",frontmatter:{title:"服务端渲染（SSR）",sidebar_position:3}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,a._)((0,d._)({},e),{children:(0,i.jsx)(t,(0,d._)({},e))})):t(e)}}}]);