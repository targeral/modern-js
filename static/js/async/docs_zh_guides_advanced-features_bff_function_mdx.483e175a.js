(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_bff_function_mdx"],{25615:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return h}});var d,i=s("15169"),r=s("43932"),c=s("9880"),t=s("23169"),l=s("78955");function a(e){var n=Object.assign({ol:"ol",li:"li",code:"code",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["执行 ",(0,c.jsx)(n.code,{children:"pnpm new"}),"，选择启用 BFF"]}),"\n",(0,c.jsxs)(n.li,{children:["根据选择的运行时框架，将下面的代码添加到 ",(0,c.jsx)(n.code,{children:"modern.config.[tj]s"})," 中："]}),"\n"]}),"\n","\n",(0,c.jsxs)(l.Tabs,{children:[(0,c.jsx)(l.Tab,{value:"express",label:"Express.js",default:!0,children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { expressPlugin } from '@modern-js/plugin-express';\nimport { bffPlugin } from '@modern-js/plugin-bff';\n\nexport default defineConfig({\n  plugins: [expressPlugin(), bffPlugin()],\n});\n"})})}),(0,c.jsx)(l.Tab,{value:"koa",label:"Koa.js",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { koaPlugin } from '@modern-js/plugin-koa';\nimport { bffPlugin } from '@modern-js/plugin-bff';\n\nexport default defineConfig({\n  plugins: [koaPlugin(), bffPlugin()],\n});\n"})})})]})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fcomponents%2Fenable-bff.mdx"]={toc:[],title:"",frontmatter:{}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,r._)((0,i._)({},e),{children:(0,c.jsx)(a,(0,i._)({},e))})):a(e)}},9174:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return h}});var d,i=s("15169"),r=s("43932"),c=s("9880"),t=s("23169"),l=s("25615");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",strong:"strong",div:"div",pre:"pre",img:"img",h3:"h3",ul:"ul",li:"li",h4:"h4"},(0,t.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"基础用法",children:["基础用法",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基础用法",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["通过 Modern.js 开发的应用，可以在 ",(0,c.jsx)(n.code,{children:"api/"})," 目录下定义接口函数，前端可以调用这些接口函数，即可发起请求，无需写前后端胶水层代码，同时保证前后端类型安全。"]}),"\n",(0,c.jsxs)(n.h2,{id:"启用-bff",children:["启用 BFF",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#启用-bff",children:"#"})]}),"\n","\n",(0,c.jsx)(l.default,{}),"\n",(0,c.jsxs)(n.h2,{id:"bff-函数",children:["BFF 函数",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bff-函数",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["允许通过一体化调用的函数，称为 ",(0,c.jsx)(n.strong,{children:"BFF 函数"}),"。这里写一个最简单的 BFF 函数，创建 ",(0,c.jsx)(n.code,{children:"api/hello.ts"})," 文件："]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive caution",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:["如果是框架模式（有 ",(0,c.jsx)(n.code,{children:"api/lambda"})," 目录），需要创建 ",(0,c.jsx)(n.code,{children:"api/lambda/hello.ts"})]}),"\n"]})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="api/hello.ts"',children:"export const get = async () => 'Hello Modern.js';\n"})}),"\n",(0,c.jsxs)(n.p,{children:["接着在 ",(0,c.jsx)(n.code,{children:"src/App.tsx"})," 中直接引入函数并调用："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",meta:"title=src/App.tsx",children:"import { useState, useEffect } from 'react';\nimport { get as hello } from '@api/hello';\n\nexport default () => {\n  const [text, setText] = useState('');\n\n  useEffect(() => {\n    hello().then(setText);\n  }, []);\n  return <div>{text}</div>;\n};\n"})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:["Modern.js 生成器已经在 ",(0,c.jsx)(n.code,{children:"tsconfig.json"})," 中配置 ",(0,c.jsx)(n.code,{children:"@api"})," 别名，因此可以直接通过别名的方式引入函数。"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.p,{children:["在 ",(0,c.jsx)(n.code,{children:"src/App.tsx"})," 中引入的函数，会自动转换成接口调用，不需要再去通过 fetch 去调用接口。"]}),"\n",(0,c.jsxs)(n.p,{children:["执行 ",(0,c.jsx)(n.code,{children:"pnpm run dev"})," 打开 ",(0,c.jsx)(n.code,{children:"http://localhost:8080/"})," 可以看到页面已经展示了 BFF 函数返回的内容，在 Network 中可以看到页面向 ",(0,c.jsx)(n.code,{children:"http://localhost:8080/api/hello"})," 发送了请求："]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://p6-piu.byteimg.com/tos-cn-i-8jisjyls3a/fd41750f8d414179a9b4ecb519919b36~tplv-8jisjyls3a-3:0:0:q75.png",alt:"Network"})}),"\n",(0,c.jsxs)(n.h2,{id:"函数路由",children:["函数路由",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数路由",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js 中，BFF 函数对应的路由系统是基于文件系统实现的，也是一种",(0,c.jsx)(n.strong,{children:"约定式路由"}),"。"]}),"\n",(0,c.jsxs)(n.p,{children:["函数写法下 ",(0,c.jsx)(n.code,{children:"api/"})," 下的所有文件中的每个 BFF 函数都会映射为一个接口。框架写法下 ",(0,c.jsx)(n.code,{children:"api/lambda"})," 下的所有文件中的每个 BFF 函数都会映射为一个接口。"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive note",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsx)(n.p,{children:"函数写法和框架写法会在下一节详细介绍。"}),"\n"]})]}),"\n",(0,c.jsxs)(n.p,{children:["所有 BFF 函数生成的路由都带有统一的前缀，默认值为 ",(0,c.jsx)(n.code,{children:"/api"}),"。可以通过 ",(0,c.jsx)(n.a,{href:"/configure/app/bff/prefix",children:"bff.prefix"})," 设置公共路由的前缀。"]}),"\n",(0,c.jsx)(n.p,{children:"下面介绍几种路由的约定。"}),"\n",(0,c.jsxs)(n.h3,{id:"默认路由",children:["默认路由",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认路由",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["以 ",(0,c.jsx)(n.code,{children:"index.[jt]s"})," 命名的文件会被映射到上一层目录。"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"api/index.ts"})," -> ",(0,c.jsx)(n.code,{children:"{prefix}/"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"api/user/index.ts"})," -> ",(0,c.jsx)(n.code,{children:"{prefix}/user"})]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"多层路由",children:["多层路由",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#多层路由",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"支持解析嵌套的文件，如果创建嵌套文件夹结构，文件仍会以相同方式自动解析路由。"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"api/hello.ts"})," -> ",(0,c.jsx)(n.code,{children:"{prefix}/hello"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"api/user/list.ts"})," -> ",(0,c.jsx)(n.code,{children:"{prefix}/user/list"})]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"动态路由",children:["动态路由",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#动态路由",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["同样的，创建命名带有 ",(0,c.jsx)(n.code,{children:"[xxx]"})," 的文件夹或者文件，支持动态的命名路由参数。动态路由的函数参数规则可以看 ",(0,c.jsx)(n.a,{href:"/guides/advanced-features/bff/function#dynamic-path",children:"dynamac-path"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"api/user/[username]/info.ts"})," -> ",(0,c.jsx)(n.code,{children:"{prefix}/user/:username/info"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"api/user/username/[action].ts"})," -> ",(0,c.jsx)(n.code,{children:"{prefix}/user/username/:action"})]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"白名单",children:["白名单",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#白名单",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["默认 ",(0,c.jsx)(n.code,{children:"api/"})," 目录下所有文件都会当作 BFF 函数文件去解析，但以下文件不会被解析："]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["命名以 ",(0,c.jsx)(n.code,{children:"_"})," 开头的文件。例如：",(0,c.jsx)(n.code,{children:"_utils.ts"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:["命名以 ",(0,c.jsx)(n.code,{children:"_"})," 开头的文件夹下所有文件。例如：",(0,c.jsx)(n.code,{children:"_utils/index.ts"}),"、",(0,c.jsx)(n.code,{children:"_utils/cp.ts"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:["测试文件。例如：",(0,c.jsx)(n.code,{children:"foo.test.ts"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:["TypeScript 类型文件。例如：",(0,c.jsx)(n.code,{children:"hello.d.ts"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"node_module"})," 下的文件。"]}),"\n"]}),"\n",(0,c.jsxs)(n.h2,{id:"restful-api",children:["RESTful API",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#restful-api",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"Modern.js 的 BFF 函数需要遵循 RESTful API 标准来定义, 遵循 HTTP Method 规范，并且不允许自由定义参数。"}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:["假设函数允许自由定义参数，产出的路由必然由",(0,c.jsx)(n.strong,{children:"私有协议"}),"进行调用（原因是无法区分请求参数与请求体），而无法实现任意的 RESTful API。"]}),"\n",(0,c.jsxs)(n.p,{children:["如果服务仅用于应用本身不存在问题，但它",(0,c.jsx)(n.strong,{children:"不标准的接口定义"}),"无法融入更大的体系。 在多个系统共同工作的情况下（例如 BFF 低码搭建），会导致其他系统也需要遵循",(0,c.jsx)(n.strong,{children:"私有协议"}),"。"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.h3,{id:"函数具名导出",children:["函数具名导出",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数具名导出",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js BFF 函数的导出名决定了函数对应接口的 Method，如 ",(0,c.jsx)(n.code,{children:"get"}),"，",(0,c.jsx)(n.code,{children:"post"})," 等。"]}),"\n",(0,c.jsx)(n.p,{children:"例如，按照以下例子，可导出一个 GET 接口。"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export const get = async () => {\n  return {\n    name: 'Modern.js',\n    desc: '现代 web 工程方案',\n  };\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["按照以下例子，则可导出一个 ",(0,c.jsx)(n.code,{children:"POST"})," 接口"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export const post = async () => {\n  return {\n    name: 'Modern.js',\n    desc: '现代 web 工程方案',\n  };\n};\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["对应 HTTP Method，Modern.js 也支持了 9 种定义，即：",(0,c.jsx)(n.code,{children:"GET"}),"、",(0,c.jsx)(n.code,{children:"POST"}),"、",(0,c.jsx)(n.code,{children:"PUT"}),"、",(0,c.jsx)(n.code,{children:"DELETE"}),"、",(0,c.jsx)(n.code,{children:"CONNECT"}),"、",(0,c.jsx)(n.code,{children:"TRACE"}),"、",(0,c.jsx)(n.code,{children:"PATCH"}),"、",(0,c.jsx)(n.code,{children:"OPTIONS"}),"、",(0,c.jsx)(n.code,{children:"HEAD"}),"，即可以用这些 Method 作为函数导出的名字。"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["名字是大小不敏感的，如果是 ",(0,c.jsx)(n.code,{children:"GET"}),"，写成 ",(0,c.jsx)(n.code,{children:"get"}),"、",(0,c.jsx)(n.code,{children:"Get"}),"、",(0,c.jsx)(n.code,{children:"GEt"}),"、",(0,c.jsx)(n.code,{children:"GET"}),"，都可以准确识别。而默认导出，即 ",(0,c.jsx)(n.code,{children:"export default xxx"})," 则会被映射为 ",(0,c.jsx)(n.code,{children:"Get"}),"。"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"可以在一个文件中定义多个不同 Method 的函数，但如果定义多个相同 Method 的函数，则只有第一个会生效。"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsx)(n.p,{children:"需要注意的是，定义的函数都应该是异步的，与函数调用时类型有关，后面会提到。"}),"\n"]})]}),"\n",(0,c.jsxs)(n.h3,{id:"函数参数规则",children:["函数参数规则",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数参数规则",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"如上所述，为了满足 RESTful API 的设计标准，因此 Modern.js 中 BFF 函数需要遵循一定的入参规则。"}),"\n",(0,c.jsxs)(n.p,{children:["函数参数分为两块，分别是请求路径中的动态部分和请求选项 ",(0,c.jsx)(n.code,{children:"RequestOption"}),"。"]}),"\n",(0,c.jsxs)(n.h4,{id:"dynamic-path",children:["Dynamic Path",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-path",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"动态路由会作为函数第一部分的入参，每个入参对应一段动态路由。例如以下示例，uid 会作为前两个参数传递到函数中："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="api/[level]/[id].ts"',children:"export default async (level: number, id: number) => {\n  const userData = await queryUser(level, uid);\n  return userData;\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"在调用时直接传入动态参数："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="App.tsx"',children:"import { useState, useEffect } from 'react';\nimport { get as getUser } from '@api/[level]/[id]';\n\nexport default () => {\n  const [name, setName] = useState('');\n\n  useEffect(() => {\n    getUser(6, 001).then(userData => setName(userData.name));\n  }, []);\n\n  return <div>{name}</div>;\n};\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"requestoption",children:["RequestOption",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#requestoption",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Dynamic Path 之后的参数是包含 querystring、request body 的对象 ",(0,c.jsx)(n.code,{children:"RequestOption"}),"，这个字段用来定义 ",(0,c.jsx)(n.code,{children:"data"})," 和 ",(0,c.jsx)(n.code,{children:"query"})," 的类型。"]}),"\n",(0,c.jsxs)(n.p,{children:["在不存在动态路由的普通函数中，可以从第一个入参中获取传入的 ",(0,c.jsx)(n.code,{children:"data"})," 和 ",(0,c.jsx)(n.code,{children:"query"}),"，例如："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="api/hello.ts"',children:"import type { RequestOption } from '@modern-js/runtime/server';\n\nexport async function post({\n  query,\n  data,\n}: RequestOption<Record<string, string>, Record<string, string>>) {\n  // do somethings\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"这里你也可以使用自定义类型："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="api/lambda/hello.ts"',children:"import type { RequestOption } from '@modern-js/runtime/server';\n\ntype IQuery = {\n  // some types\n};\ntype IData = {\n  // some types\n};\n\nexport async function post({ query, data }: { query: IQuery; data: IData }) {\n  // do somethings\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["当函数文件使用动态路由规则时，动态路由会在 ",(0,c.jsx)(n.code,{children:"RequestOption"})," 对象参数前。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="api/[sku]/[id]/item.ts"',children:"export async function post(\n  sku: string,\n  id: string,\n  {\n    data,\n    query,\n  }: RequestOption<Record<string, string>, Record<string, string>>,\n) {\n  // do somethings\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"调用时也按照函数定义，传入对应的参数即可："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="App.tsx"',children:"import { post } from '@api/[sku]/[id]/item';\n\nexport default () => {\n  const addSku = () => {\n    post('0001' /* sku */, '1234' /* id */, {\n      query: {\n        /* ... */\n      },\n      data: {\n        /* ... */\n      },\n    });\n  };\n\n  return <div onClick={addSku}>添加 SKU</div>;\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"之前提到，定义的函数都应该是异步的，是因为在前端调用时会自动转换成 HTTP 接口调用，所以为了保持类型定义与实际调用体验统一，需要在定义 BFF 函数时将它设置为异步。"})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fguides%2Fadvanced-features%2Fbff%2Ffunction.mdx"]={toc:[{text:"启用 BFF",id:"启用-bff",depth:2},{text:"BFF 函数",id:"bff-函数",depth:2},{text:"函数路由",id:"函数路由",depth:2},{text:"默认路由",id:"默认路由",depth:3},{text:"多层路由",id:"多层路由",depth:3},{text:"动态路由",id:"动态路由",depth:3},{text:"白名单",id:"白名单",depth:3},{text:"RESTful API",id:"restful-api",depth:2},{text:"函数具名导出",id:"函数具名导出",depth:3},{text:"函数参数规则",id:"函数参数规则",depth:3},{text:"Dynamic Path",id:"dynamic-path",depth:4},{text:"RequestOption",id:"requestoption",depth:4}],title:"基础用法",frontmatter:{sidebar_position:1,title:"基础用法"}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,r._)((0,i._)({},e),{children:(0,c.jsx)(a,(0,i._)({},e))})):a(e)}}}]);