(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_advanced_hmr_md"],{5287:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return t},toc:function(){return c},default:function(){return i}});var a=r("12151"),d=r("23169"),s={},t="模块热替换",c=[{text:"启用 HMR",depth:2,id:"启用-hmr"},{text:"自定义 HMR URL",depth:2,id:"自定义-hmr-url"},{text:"默认配置",depth:3,id:"默认配置"},{text:"线上代理",depth:3,id:"线上代理"},{text:"Live reloading 和 Hot reloading 的区别",depth:2,id:"live-reloading-和-hot-reloading-的区别"},{text:"常见问题",depth:2,id:"常见问题"},{text:"External react/reactDom 后，热更新不生效？",depth:3,id:"external-react/reactdom-后，热更新不生效？"},{text:"开启 https 后，热更新不生效？",depth:3,id:"开启-https-后，热更新不生效？"},{text:"热更新后 React 组件的 state 丢失？",depth:3,id:"热更新后-react-组件的-state-丢失？"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",h3:"h3",img:"img",blockquote:"blockquote"},(0,d.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"模块热替换",children:["模块热替换",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#模块热替换",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"模块热替换（HMR - hot module replacement）功能会在应用程序运行过程中，替换、添加或删除模块，而无需重新加载整个页面。主要是通过以下几种方式，来显著加快开发速度："}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"保留在完全重新加载页面期间丢失的应用程序状态。"}),"\n",(0,a.jsx)(n.li,{children:"只更新变更内容，以节省宝贵的开发时间。"}),"\n",(0,a.jsx)(n.li,{children:"在源代码中 CSS/JS 产生修改时，会立刻在浏览器中进行更新，这几乎相当于在浏览器 devtools 直接更改样式。"}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"启用-hmr",children:["启用 HMR",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#启用-hmr",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Builder 已内置了对 HMR 的支持，在开发环境下默认启用。"}),"\n",(0,a.jsxs)(n.p,{children:["如果你不需要使用 HMR 能力，可以将 ",(0,a.jsx)(n.a,{href:"/api/config-dev",children:"dev.hmr"})," 设置为 false，此时将不再提供热更新和 react-refresh 功能。"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    hmr: false,\n  },\n};\n"})})]})}),"\n",(0,a.jsxs)(n.h2,{id:"自定义-hmr-url",children:["自定义 HMR URL",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-hmr-url",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"在默认情况下，Builder 使用当前页面的 host 和端口号来拼接 HMR 对应的 WebSocket URL。"}),"\n",(0,a.jsxs)(n.p,{children:["当出现 HMR 连接失败的情况时，你可以通过自定义 ",(0,a.jsx)(n.code,{children:"devServer.client"})," 配置的方式来指定 WebSocket URL。"]}),"\n",(0,a.jsxs)(n.h3,{id:"默认配置",children:["默认配置",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认配置",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"默认配置如下，Builder 会根据当前页面的 location 自动推导 WebSocket 请求的 URL："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    devServer: {\n      client: {\n        path: '/webpack-hmr',\n        // 默认设置为 dev server 的端口号\n        port: '',\n        // 默认设置为 location.hostname\n        host: '',\n        // 默认设置为 location.protocol === 'https:' ? 'wss' : 'ws'\n        protocol: '',\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,a.jsxs)(n.h3,{id:"线上代理",children:["线上代理",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#线上代理",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["如果你将一个线上页面代理到本地进行开发，WebSocket 请求将会连接失败。此时你可以尝试将 ",(0,a.jsx)(n.code,{children:"devServer.client"})," 配置成如下值，使 HMR 请求能打到本地的 Dev Server。"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    devServer: {\n      client: {\n        host: 'localhost',\n        protocol: 'ws',\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,a.jsxs)(n.h2,{id:"live-reloading-和-hot-reloading-的区别",children:["Live reloading 和 Hot reloading 的区别",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#live-reloading-和-hot-reloading-的区别",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Live reloading: 修改文件之后，webpack 重新编译，并强制刷新浏览器，属于全局（整个应用）刷新，相当于 ",(0,a.jsx)(n.code,{children:"window.location.reload()"}),"；"]}),"\n",(0,a.jsx)(n.li,{children:"Hot reloading: 修改文件之后，webpack 重新编译对应模块，刷新时可以记住应用的状态，从而做到局部刷新，即热更新。"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["DevServer 提供了 ",(0,a.jsx)(n.a,{href:"/api/config-tools",children:"hot"})," 和 ",(0,a.jsx)(n.a,{href:"/api/config-tools",children:"liveReload"})," 这两个配置项来控制更新方式。当 hot 和 liveReload 同时开启时，DevServer 会优先尝试使用 hot 模式 (HMR)，如果 HMR 更新失败后，会降级到重新加载页面。"]}),"\n",(0,a.jsxs)(n.h2,{id:"常见问题",children:["常见问题",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#常见问题",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"external-react/reactdom-后，热更新不生效？",children:["External react/reactDom 后，热更新不生效？",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#external-react/reactdom-后，热更新不生效？",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"热更新能力生效需要用到 react 和 react-dom 的 development 模式， 而 CDN 上的 react 通常使用 production 模式。你需要切换到开发模式，或者在开发环境下不配置 external。"}),"\n",(0,a.jsxs)(n.p,{children:["如果不确定你当前使用的 React 模式，你可以参考：",(0,a.jsx)(n.a,{href:"https://reactjs.org/docs/optimizing-performance.html#use-the-production-build",target:"_blank",rel:"noopener noreferrer",children:"检查 React 模式"})]}),"\n",(0,a.jsxs)(n.h3,{id:"开启-https-后，热更新不生效？",children:["开启 https 后，热更新不生效？",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开启-https-后，热更新不生效？",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"当开启 https 时，由于证书的问题，会出现 HMR 连接失败的情况，此时打开控制台，会出现 HMR connect failed 的报错。"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/6221eh7uhbfvhn/modern/img_v2_2f90d027-a232-4bd8-8021-dac3c651682g.jpg",alt:"hmr-connect-error-0"})}),"\n",(0,a.jsx)(n.p,{children:"此问题的解决方法为：点击 Chrome 浏览器问题页面的「高级」->「继续前往 xxx（不安全）」。"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/6221eh7uhbfvhn/modern/59b37606-52ad-4886-a423-af2edaa49245.png",alt:"hmr-connect-error-1"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Tips: 当通过 Localhost 访问页面时，「您的连接不是私密连接」字样可能不会出现，可访问 Network 域名进行处理。"}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"热更新后-react-组件的-state-丢失？",children:["热更新后 React 组件的 state 丢失？",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#热更新后-react-组件的-state-丢失？",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Builder 使用 React 官方的 ",(0,a.jsx)(n.a,{href:"https://github.com/pmmmwh/react-refresh-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"Fast Refresh"})," 能力来进行组件热更新。"]}),"\n",(0,a.jsx)(n.p,{children:"在使用 Fast Refresh 时，要求组件不能为匿名函数，否则热更新后无法保留 React 组件的 state。"}),"\n",(0,a.jsx)(n.p,{children:"以下写法都是不正确的："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",children:"// 错误写法 1\nexport default function () {\n  return <div>Hello World</div>;\n}\n\n// 错误写法 2\nexport default () => <div>Hello World</div>;\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"正确的写法为："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",children:"// 正确写法 1\nexport default function MyComponent() {\n  return <div>Hello World</div>;\n}\n\n// 正确写法 2\nconst MyComponent = () => <div>Hello World</div>\n\nexport default MyComponent;\n"})})]})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}}}]);