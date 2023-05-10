(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_community_blog_2022-0910-updates_md"],{15624:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},title:function(){return i},toc:function(){return a},default:function(){return h}});var r=s("9880"),c=s("23169"),d={sidebar_position:98},i="2022 年 9 ~ 10 月更新内容",a=[{text:"支持 pnpm v7",depth:2,id:"支持-pnpm-v7"},{text:"服务端增加 Typescript 作为 ts 文件编译器",depth:2,id:"服务端增加-typescript-作为-ts-文件编译器"},{text:"其他更新",depth:2,id:"其他更新"},{text:"配置更新",depth:3,id:"配置更新"},{text:"底层依赖升级",depth:3,id:"底层依赖升级"},{text:"功能预告",depth:2,id:"功能预告"}];function l(e){var n=Object.assign({h1:"h1",a:"a",blockquote:"blockquote",p:"p",ul:"ul",li:"li",strong:"strong",h2:"h2",code:"code",div:"div",button:"button",pre:"pre",h3:"h3"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"2022-年-9-~-10-月更新内容",children:["2022 年 9 ~ 10 月更新内容",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2022-年-9-~-10-月更新内容",children:"#"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"发表于 2022.11.01"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js 9 ~ 10 月的最新版本为 v1.21.0，本双月的主要更新有："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"支持 pnpm v7"}),"：完成框架对 pnpm v7 的支持。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"服务端增加 Typescript 作为 ts 文件编译器"}),"。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"支持-pnpm-v7",children:["支持 pnpm v7",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#支持-pnpm-v7",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js 框架完成了对 pnpm v7 的变更适配。"}),"\n",(0,r.jsxs)(n.p,{children:["使用 ",(0,r.jsx)(n.code,{children:"npx @modern-js/create@modern-1"})," 创建项目时会根据用户当前环境的 pnpm 版本进行安装依赖操作，并且在初始化项目中会在 ",(0,r.jsx)(n.code,{children:".npmrc"})," 中添加\n",(0,r.jsx)(n.code,{children:"strict-peer-dependencies=false"})," 配置，避免安装时由于 ",(0,r.jsx)(n.code,{children:"peerDependencies"})," 缺失导致安装依赖失败问题。\n同时适配 ",(0,r.jsx)(n.code,{children:"release"}),"、",(0,r.jsx)(n.code,{children:"deploy"})," 命令对 pnpm v7 的支持。"]}),"\n",(0,r.jsx)(n.p,{children:"pnpm v7 在命令传参方面姿势发生了变化，需注意："}),"\n",(0,r.jsxs)(n.p,{children:["在使用 pnpm 调用 ",(0,r.jsx)(n.code,{children:"package.json"})," 中的命令时，如果需要传递参数至 pnpm，需要将参数放到命令前。"]}),"\n",(0,r.jsxs)(n.p,{children:["例如使用 pnpm ",(0,r.jsx)(n.code,{children:"--filter"})," 参数执行 prepare 命令："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:'pnpm run --filter "./packages/**" prepare\n'})})]})}),"\n",(0,r.jsx)(n.p,{children:"如果需要传递参数至命令，需要将参数放到命令后。"}),"\n",(0,r.jsxs)(n.p,{children:["例如，在如下 ",(0,r.jsx)(n.code,{children:"package.json"})," 配置中："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n'})})]})}),"\n",(0,r.jsx)(n.p,{children:"执行 command 命令时携带参数方式为："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run command --options\n"})})]})}),"\n",(0,r.jsxs)(n.h2,{id:"服务端增加-typescript-作为-ts-文件编译器",children:["服务端增加 Typescript 作为 ts 文件编译器",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#服务端增加-typescript-作为-ts-文件编译器",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在 Modernjs 之前的版本中，我们为了保证前后端编译器的统一，使用了 Babel 作为前后端默认的编译器，并保持相同的编译逻辑，但随着使用的项目增多，我们发现在一些服务端常用的语法场景下，Babel 编译 ts 有一些问题。"}),"\n",(0,r.jsxs)(n.p,{children:["因此，我们将服务端编译 ts 的编译器由 Babel 改为了 Typescript，在别名解析逻辑上与 Babel 版本保持一致，同样支持使用 ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," 或者插件设置别名。"]}),"\n",(0,r.jsx)(n.p,{children:"在执行 build 命令时，已默认使用 Typescript 编译，并默认开启了类型校验，很多项目在 9、10 双月已经在使用。"}),"\n",(0,r.jsxs)(n.p,{children:["执行 dev 命令时，如果希望使用 Typescript 编译，需要安装 ",(0,r.jsx)(n.code,{children:"ts-node"}),"，",(0,r.jsx)(n.code,{children:"tsconfig-paths"})," 到 ",(0,r.jsx)(n.code,{children:"devDependencies"}),"，否则默认仍然使用 Babel 编译。在 Modern.js 2.0 中，我们将使用 ts-node 作为默认的编译器。"]}),"\n",(0,r.jsxs)(n.h2,{id:"其他更新",children:["其他更新",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#其他更新",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"配置更新",children:["配置更新",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置更新",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["支持在 ",(0,r.jsx)(n.code,{children:"tools.webpackChain"})," 中获取 ",(0,r.jsx)(n.code,{children:"HtmlWebpackPlugin"})," 对象，使用方式请参考",(0,r.jsx)(n.a,{href:"https://modernjs.dev/v1/docs/apis/app/config/tools/webpack-chain#htmlwebpackplugin",target:"_blank",rel:"noopener noreferrer",children:"文档"}),"。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"底层依赖升级",children:["底层依赖升级",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#底层依赖升级",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"husky 升级至 v8"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["使用 ",(0,r.jsx)(n.code,{children:"npx @modern-js/create@modern-1"})," 创建项目时，husky 会默认安装 v8 版本，并移除 ",(0,r.jsx)(n.code,{children:"package.json"})," 中 husky 的配置，使用 ",(0,r.jsx)(n.code,{children:".husky"})," 文件夹的形式管理 husky 配置。"]}),"\n",(0,r.jsxs)(n.p,{children:["在初次安装依赖时需要执行 ",(0,r.jsx)(n.code,{children:"npx husky install"})," 进行 husky 初始化，默认项目会在 prepare 命令中完成，如果 husky 配置未生效，可通过手动执行完成 husky 配置。"]}),"\n",(0,r.jsxs)(n.h2,{id:"功能预告",children:["功能预告",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#功能预告",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js 团队目前除了正常开发维护 Modern 1.0 外，正在全力打造 Modern.js 2.0。"}),"\n",(0,r.jsx)(n.p,{children:"Modern.js 2.0 将带来新的构建体系，除了支持使用稳定的 webpack 进行构建，还即将支持将底层构建工具切换为自研的 Rust bundler，提供更流畅的编译速度。"}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js 2.0 将基于 ",(0,r.jsx)(n.a,{href:"https://reactrouter.com",target:"_blank",rel:"noopener noreferrer",children:"React-Router v6"})," 推荐嵌套路由作为新的路由方式；将默认支持 React 18 并提供 Streaming SSR 的支持，使用户体验更加流畅。"]})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);