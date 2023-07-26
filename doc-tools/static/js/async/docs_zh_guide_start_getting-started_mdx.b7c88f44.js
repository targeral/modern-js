(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_guide_start_getting-started_mdx"],{47128:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return o}});var d,r=s("15169"),c=s("43932"),a=s("9880"),i=s("23169"),l=s("27385");function h(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",p:"p",pre:"pre",code:"code"},(0,i.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"快速开始",children:["快速开始",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"})]}),"\n",(0,a.jsxs)(n.h2,{id:"1-初始化项目",children:["1. 初始化项目",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-初始化项目",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"方式一通过脚手架创建",children:["方式一：通过脚手架创建",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#方式一通过脚手架创建",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"你可以通过 Modern.js 脚手架命令来创建一个 Modern.js Doc 项目:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# `modern-doc-app` 为项目名称\nnpx @modern-js/create@latest modern-doc-app\n"})}),"\n",(0,a.jsxs)(n.p,{children:["选择 ",(0,a.jsx)(n.code,{children:"文档站"})," 类型，然后选择包管理工具即可完成项目创建。"]}),"\n",(0,a.jsxs)(n.h3,{id:"方式二手动创建",children:["方式二：手动创建",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#方式二手动创建",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"首先，你可以通过以下命令创建一个新目录："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir modern-doc-app && cd modern-doc-app\n"})}),"\n",(0,a.jsxs)(n.p,{children:["执行 ",(0,a.jsx)(n.code,{children:"npm init -y"})," 来初始化一个项目。你可以使用 npm、yarn 或 pnpm 安装 Modern.js Doc:"]}),"\n","\n",(0,a.jsxs)(l.Tabs,{values:[{label:"npm"},{label:"yarn"},{label:"pnpm"}],children:[(0,a.jsx)(l.Tab,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"npm install @modern-js/doc-tools typescript -D\n"})})}),(0,a.jsx)(l.Tab,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"yarn add @modern-js/doc-tools typescript -D\n"})})}),(0,a.jsx)(l.Tab,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"pnpm install @modern-js/doc-tools typescript -D\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"然后通过如下命令创建文件:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir docs && echo '# Hello World' > docs/index.md\n"})}),"\n",(0,a.jsxs)(n.p,{children:["在",(0,a.jsx)(n.code,{children:"package.json"}),"中加上如下的脚本:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "dev": "modern dev",\n    "build": "modern build",\n    "preview": "modern preview"\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["然后初始化一个配置文件 ",(0,a.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\nimport path from 'path';\n\nexport default defineConfig({\n  doc: {\n    root: path.join(__dirname, 'docs'),\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["同时新建 ",(0,a.jsx)(n.code,{children:"tsconfig.json"}),"，内容如下:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'{\n  "compilerOptions": {\n    "esModuleInterop": true,\n    "jsx": "react-jsx"\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.h2,{id:"2-启动-dev-server",children:["2. 启动 Dev Server",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-启动-dev-server",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"通过如下命令启动本地开发服务:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,a.jsx)(n.p,{children:"这样 Modern.js Doc 将启动开发服务。"}),"\n",(0,a.jsxs)(n.h2,{id:"3-生产环境构建",children:["3. 生产环境构建",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3-生产环境构建",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"通过如下命令构建生产环境的产物:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,a.jsxs)(n.p,{children:["默认情况下，Modern.js Doc 将会把产物打包到 ",(0,a.jsx)(n.code,{children:"doc_build"})," 目录。"]}),"\n",(0,a.jsxs)(n.h2,{id:"4-本地预览产物",children:["4. 本地预览产物",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4-本地预览产物",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"通过如下命令启动本地预览服务:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run preview\n"})}),"\n",(0,a.jsx)(n.p,{children:"这样 Modern.js Doc 将启动产物预览服务。"})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguide%2Fstart%2Fgetting-started.mdx"]={toc:[{text:"1. 初始化项目",id:"1-初始化项目",depth:2},{text:"方式一：通过脚手架创建",id:"方式一通过脚手架创建",depth:3},{text:"方式二：手动创建",id:"方式二手动创建",depth:3},{text:"2. 启动 Dev Server",id:"2-启动-dev-server",depth:2},{text:"3. 生产环境构建",id:"3-生产环境构建",depth:2},{text:"4. 本地预览产物",id:"4-本地预览产物",depth:2}],title:"快速开始",frontmatter:{}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,c._)((0,r._)({},e),{children:(0,a.jsx)(h,(0,r._)({},e))})):h(e)}}}]);