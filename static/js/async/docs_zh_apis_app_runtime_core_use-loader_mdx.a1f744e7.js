(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_core_use-loader_mdx"],{85975:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return a},default:function(){return l}});var s=r("9880"),d=r("23169"),i={title:"useLoader"},c="useLoader",a=[{text:"使用姿势",depth:2,id:"使用姿势"},{text:"函数签名",depth:2,id:"函数签名"},{text:"参数",depth:3,id:"参数"},{text:"返回值",depth:3,id:"返回值"},{text:"示例",depth:2,id:"示例"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"useloader",children:["useLoader",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useloader",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["一个同构的 API，通常会用来做异步请求。当 SSR 的时候，服务端使用 ",(0,s.jsx)(n.code,{children:"useLoader"})," 预加载数据，同时浏览器端也会复用这部分数据。"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"在使用 Rspack 作为打包工具时，暂不支持使用 useLoader API。"})})]}),"\n",(0,s.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { useLoader } from '@modern-js/runtime';\n"})})})}),"\n",(0,s.jsxs)(n.h2,{id:"函数签名",children:["函数签名",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"type LoaderFn = (context: runtimeContext) => Promise<unknow>;\ntype Options = {\n  onSuccess: (data: Record<string, any>) => void;\n  onError: (error: Error) => void;\n  initialData: Record<string, any>;\n  skip: boolean;\n  params: Record<string, any>;\n  static: boolean;\n};\ntype ReturnData = {\n  data: Record<string, any>;\n  loading: boolean;\n  error: Error;\n  reload: (params?: Record<string, any>) => Promise<any> | undefined;\n  reloading: boolean;\n};\n\nfunction useLoader(loaderFn: LoaderFn, options: Options): ReturnData;\n"})})})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"runtimeContext"})," 类型可以参考 ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/core/use-runtime-context",children:"useRuntimeContext"}),"。"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h3,{id:"参数",children:["参数",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"loaderFn"}),"：用于加载数据的函数，返回 Promise。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"}),"：可选配置项。","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onSuccess"}),"：执行成功的回调。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onError"}),"：执行失败的回调。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"initialData"}),"：首次执行前的初始数据，对应返回值中的 ",(0,s.jsx)(n.code,{children:"data"})," 字段。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"skip"}),"：当值为 ",(0,s.jsx)(n.code,{children:"true"})," 时，函数不执行。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"params"}),"：当 ",(0,s.jsx)(n.code,{children:"params"})," 序列化结果发生改变时，函数会重新执行。同时，",(0,s.jsx)(n.code,{children:"params"})," 也会作为函数的第二个参数被传入。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"static"}),"：当值为 ",(0,s.jsx)(n.code,{children:"true"})," 时，",(0,s.jsx)(n.code,{children:"useLoader"})," 用于 ",(0,s.jsx)(n.a,{href:"/guides/advanced-features/ssg",children:"SSG"})," 编译阶段数据的获取。"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"返回值",children:["返回值",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"}),"：执行成功时的返回数据。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"loading"}),"：表示函数是否处于执行过程中。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"error"}),"：函数执行失败时的错误信息。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"reload"}),"：调用后可以重新执行函数。","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"params"}),"：当值为 ",(0,s.jsx)(n.code,{children:"undefined"})," 时，函数执行时将复用上次的值；否则会使用新的值重新执行函数。"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"reloading"}),"：调用 ",(0,s.jsx)(n.code,{children:"reload"})," 的执行过程中，",(0,s.jsx)(n.code,{children:"reloading"})," 值为 ",(0,s.jsx)(n.code,{children:"true"}),"。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"function Container() {\n  const { data, error, loading } = useLoader(\n    async (context, params) => {\n      console.log(params) // nicole\n      return fetch(user);\n    },\n    {\n      onSuccess: data => {\n        console.log('I did success:(',  data);\n      },\n      onError: error => {\n        console.log('I met error:)',  error);\n      },\n      initialData: { name: 'nicole', gender: 'female' },\n      params: 'nicole'\n    }\n  );\n\n  return ...;\n}\n"})})})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);