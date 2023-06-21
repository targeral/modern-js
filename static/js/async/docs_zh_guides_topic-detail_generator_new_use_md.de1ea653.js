(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_new_use_md"],{27585:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return h}});var r,d=s("15169"),c=s("43932"),i=s("9880"),o=s("23169");function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre",div:"div"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"使用",children:["使用",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["在 Web 应用、 Npm 模块和 Monorepo 项目中，我们提供了 ",(0,i.jsx)(n.code,{children:"new"})," 命令用于创建项目元素、开启功能和创建子项目。"]}),"\n",(0,i.jsxs)(n.h2,{id:"web-应用",children:["Web 应用",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#web-应用",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Web 应用项目通过 ",(0,i.jsx)(n.code,{children:"@modern-js/app-tools"})," 提供 ",(0,i.jsx)(n.code,{children:"new"})," 命令。"]}),"\n",(0,i.jsx)(n.p,{children:"new 命令提供了三种操作类型："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"创建工程元素"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"启用可选功能"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"自动重构"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"每种操作类型都提供了对应支持的列表，可根据项目情况进行选择。"}),"\n",(0,i.jsx)(n.p,{children:"例如："}),"\n",(0,i.jsx)(n.p,{children:"创建新的应用入口："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run new\n? 请选择你想要的操作 创建工程元素\n? 请选择创建元素类型 新建「应用入口」\n? 请填写入口名称 entry\n"})}),"\n",(0,i.jsxs)(n.p,{children:["执行完成后将会在项目 ",(0,i.jsx)(n.code,{children:"src"})," 目录创建新入口对应名称的文件夹及默认入口文件，并且自动帮忙整理之前 ",(0,i.jsx)(n.code,{children:"src"})," 下入口文件到 ",(0,i.jsx)(n.code,{children:"package.json"})," 中 ",(0,i.jsx)(n.code,{children:"name"})," 字段对应的文件夹中。"]}),"\n",(0,i.jsx)(n.p,{children:"开启 BFF 功能："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run new\n? 请选择你想要的操作 启用可选功能\n? 请选择功能名称 启用「BFF」功能\n? 请选择 BFF 类型 函数模式\n? 请选择运行时框架 Express\n"})}),"\n",(0,i.jsx)(n.p,{children:"执行完成后将会在项目安装 BFF 相关依赖，并创建 api 目录用于 BFF 模块的开发并提供提示信息用于注册 BFF 插件。"}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:["这里未帮助用户自动注册插件，原因是由于 ",(0,i.jsx)(n.code,{children:"modern.config.[tj]s"})," 在项目生命周期中变化比较复杂，可能存在模块之间互相引用问题，让用户手动注册能保证修改配置的正确性。"]}),"\n",(0,i.jsx)(n.p,{children:"在后续定制化的开发中，如果有类似的需求，也可以通过提示的方式给到使用方操作指南，让用户对文件进行手动操作。\n"})]})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive warning",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["执行 new 命令时可能会出现需要开启的功能不在列表中，需要检查一下项目 ",(0,i.jsx)(n.code,{children:"package.json"})," 中是否已经安装对应功能的插件，如果仍需使用 new 命令开启，需要先手动移除对应的插件依赖。\n"]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"npm-模块",children:["Npm 模块",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-模块",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Npm 模块项目通过 ",(0,i.jsx)(n.code,{children:"@modern-js/module-tools"})," 提供 new 命令。"]}),"\n",(0,i.jsx)(n.p,{children:"new 命令提供了启用可选功能的能力。"}),"\n",(0,i.jsx)(n.p,{children:"例如："}),"\n",(0,i.jsx)(n.p,{children:"开启 Storybook 能力："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run new\n? 请选择你想要的操作 启用可选功能\n? 请选择功能名称 启用「Storybook」\n"})}),"\n",(0,i.jsxs)(n.p,{children:["执行完成后将会在项目安装 Storybook 插件相关依赖，增加 ",(0,i.jsx)(n.code,{children:"storybook"})," 命令，创建 ",(0,i.jsx)(n.code,{children:"stories"})," 目录用于 Storybook 模块的开发并提供提示信息用于注册 Storybook 插件。"]}),"\n",(0,i.jsxs)(n.h2,{id:"monorepo",children:["Monorepo",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#monorepo",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Monorepo 项目通过 ",(0,i.jsx)(n.code,{children:"@modern-js/monorepo-tools"})," 提供 new 命令。"]}),"\n",(0,i.jsx)(n.p,{children:"new 命令提供了创建子项目的能力。"}),"\n",(0,i.jsx)(n.p,{children:"例如："}),"\n",(0,i.jsx)(n.p,{children:"创建 Web 应用子项目："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"? 请选择你想创建的工程类型 Web 应用\n? 请填写子项目名称 web_app\n? 请填写子项目目录名称 web_app\n? 请选择开发语言 TS\n? 请选择构建工具 webpack\n"})}),"\n",(0,i.jsxs)(n.p,{children:["执行完成后将会在项目 apps 目录创建 ",(0,i.jsx)(n.code,{children:"web_app"})," 的子项目，在子项目目录中依然可以执行 new 命令创建项目元素和开启功能。"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/zh/guides/topic-detail/generator/new/use.md"]={toc:[{text:"Web 应用",id:"web-应用",depth:2},{text:"Npm 模块",id:"npm-模块",depth:2},{text:"Monorepo",id:"monorepo",depth:2}],title:"使用",frontmatter:{sidebar_position:1}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,c._(d._({},e),{children:(0,i.jsx)(l,d._({},e))})):l(e)}}}]);