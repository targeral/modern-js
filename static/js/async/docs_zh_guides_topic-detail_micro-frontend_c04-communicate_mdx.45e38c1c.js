(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_micro-frontend_c04-communicate_mdx"],{45224:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var r in e)Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}(e,{frontmatter:function(){return o},title:function(){return t},toc:function(){return i},default:function(){return d}});var s=r("9880"),c=r("23169"),o={sidebar_position:4,title:"主子应用通信"},t="主子应用通信",i=[{text:"props 通信",depth:2,id:"props-通信"},{text:"channel 通信",depth:2,id:"channel-通信"}];function a(n){var e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre"},(0,c.useMDXComponents)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"主子应用通信",children:["主子应用通信",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#主子应用通信",children:"#"})]}),"\n",(0,s.jsxs)(e.h2,{id:"props-通信",children:["props 通信",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#props-通信",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["Modern.js 中，会将子应用包裹成一个 React 组件，直接通过给 React 组件传递 ",(0,s.jsx)(e.code,{children:"props"})," 即可实现主应用和子应用通信的目的。"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",meta:"title=主应用：App.tsx",children:"function App() {\n  const { MApp } = useModuleApps();\n\n  return (\n    <div>\n      <MApp count={100} />\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",meta:"title=子应用：App.tsx",children:"function App(props) {\n  console.log(props);\n  return ...\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["子应用将会打印 ",(0,s.jsx)(e.code,{children:"{count: 0}"}),"，目前尚未支持子应用渲染响应式，及时在主应用上更改 ",(0,s.jsx)(e.code,{children:"count"})," 的数据也不会触发视图更新"]}),"\n",(0,s.jsxs)(e.h2,{id:"channel-通信",children:["channel 通信",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#channel-通信",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://www.garfishjs.org/api/channel",target:"_blank",rel:"noopener noreferrer",children:"Garfish.channel"})," 用于应用间的通信。它是 ",(0,s.jsx)(e.code,{children:"EventEmitter2"})," 的实例"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"// 子应用监听登录事件\nconst App = () => {\n  const handleLogin = userInfo => {\n    console.log(`${userInfo.name} has login`);\n  };\n\n  useEffect(() => {\n    window?.Garfish.channel.on('login', handleLogin);\n    return () => {\n      window?.Garfish.channel.removeListener('login', handleLogin);\n    };\n  });\n};\n\n// 主应用触发监听事件\napi.getLoginInfo.then(res => {\n  if (res.code === 0) {\n    window.Garfish.channel.emit('login', res.data);\n  }\n});\n"})})]})}var d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,c.useMDXComponents)(),n.components).wrapper;return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(a,n)})):a(n)}}}]);