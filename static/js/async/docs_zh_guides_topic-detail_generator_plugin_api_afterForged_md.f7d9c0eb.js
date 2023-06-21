(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_afterForged_md"],{96126:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return c}});var r,d=n("15169"),t=n("43932"),a=n("9880"),s=n("23169");function o(e){var i=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,s.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.h1,{id:"afterforged",children:["afterForged",(0,a.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#afterforged",children:"#"})]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"afterForged"})," 为生成器插件中用于文件操作后其他步骤操作的生命周期函数。"]}),"\n",(0,a.jsxs)(i.h2,{id:"类型",children:["类型",(0,a.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#类型",children:"#"})]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-ts",children:"export type AfterForgedAPI = {\n  isInGitRepo: () => Promise<boolean>;\n  initGitRepo: () => Promise<void>;\n  gitAddAndCommit: (commitMessage: string) => Promise<void>;\n  install: () => Promise<void>;\n};\n\nexport type PluginAfterForgedFunc = (api: AfterForgedAPI, inputData: Record<string, unknown>) => Promise<void>;\n\nexport interface IPluginContext {\n   afterForged: (func: PluginAfterForgedFunc) => void;\n  ...\n}\n"})}),"\n",(0,a.jsxs)(i.h2,{id:"api",children:["API",(0,a.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,a.jsx)(i.p,{children:"下面将分别介绍 api 参数提供的 API。"}),"\n",(0,a.jsxs)(i.h3,{id:"isingitrepo",children:["isInGitRepo",(0,a.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#isingitrepo",children:"#"})]}),"\n",(0,a.jsx)(i.p,{children:"判断当前项目是否为一个 Git 仓库。"}),"\n",(0,a.jsxs)(i.h3,{id:"initgitrepo",children:["initGitRepo",(0,a.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#initgitrepo",children:"#"})]}),"\n",(0,a.jsx)(i.p,{children:"初始化当前项目为 Git 仓库。"}),"\n",(0,a.jsxs)(i.h3,{id:"gitaddandcommit",children:["gitAddAndCommit",(0,a.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#gitaddandcommit",children:"#"})]}),"\n",(0,a.jsx)(i.p,{children:"提交当前仓库变更。"}),"\n",(0,a.jsx)(i.p,{children:"参数："}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"commitMessage"}),": commit 信息。"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.h3,{id:"install",children:["install",(0,a.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,a.jsxs)(i.p,{children:["在项目根目录安装依赖。",(0,a.jsx)(i.code,{children:"install"})," 函数中将根据 ",(0,a.jsx)(i.code,{children:"packageManager"})," 的值使用对应的包管理工具安装依赖。"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/zh/guides/topic-detail/generator/plugin/api/afterForged.md"]={toc:[{text:"类型",id:"类型",depth:2},{text:"API",id:"api",depth:2},{text:"isInGitRepo",id:"isingitrepo",depth:3},{text:"initGitRepo",id:"initgitrepo",depth:3},{text:"gitAddAndCommit",id:"gitaddandcommit",depth:3},{text:"install",id:"install",depth:3}],title:"afterForged",frontmatter:{sidebar_position:3}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return i?(0,a.jsx)(i,t._(d._({},e),{children:(0,a.jsx)(o,d._({},e))})):o(e)}}}]);