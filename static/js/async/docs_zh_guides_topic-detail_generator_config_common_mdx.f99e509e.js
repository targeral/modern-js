(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_generator_config_common_mdx"],{20191:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},toc:function(){return c},title:function(){return l},default:function(){return a}});var i=s("12151"),r=s("21447");let d={sidebar_position:1},c=[{id:"solution",text:"solution",depth:3},{id:"scenes",text:"scenes",depth:3},{id:"language",text:"language",depth:3},{id:"packagemanager",text:"packageManager",depth:3},{id:"其他配置",text:"其他配置",depth:2},{id:"noneedinstall",text:"noNeedInstall",depth:3},{id:"noneedgit",text:"noNeedGit",depth:3},{id:"successinfo",text:"successInfo",depth:3},{id:"ismonoreposubproject",text:"isMonorepoSubProject",depth:3},{id:"istest",text:"isTest",depth:3},{id:"ispublic",text:"isPublic",depth:3}],l="通用配置";function h(e){let n=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",ul:"ul",li:"li",div:"div",code:"code",h2:"h2",strong:"strong"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"通用配置",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通用配置",children:"#"}),"通用配置"]}),"\n",(0,i.jsxs)(n.h3,{id:"solution",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#solution",children:"#"}),"solution"]}),"\n",(0,i.jsx)(n.p,{children:"工程方案类型(solution)，选项如下："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"应用(mwa)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"模块(module)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Monorepo"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["\nsolution 配置只能在 ",(0,i.jsx)(n.code,{children:"@modern-js/create"})," 的 ",(0,i.jsx)(n.code,{children:"--config"})," 参数中使用，不能在生成器插件中通过设置输入默认值的方式使用。"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"scenes",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#scenes",children:"#"}),"scenes"]}),"\n",(0,i.jsx)(n.p,{children:"项目场景(scenes)，当使用创建工程方案场景类型的生成器插件时，该值为对应生成器插件的 key 值。"}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["\nscenes 配置只能在 ",(0,i.jsx)(n.code,{children:"@modern-js/create"})," 的 ",(0,i.jsx)(n.code,{children:"--config"})," 参数中使用，不能在生成器插件中通过设置输入默认值的方式使用。"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"language",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#language",children:"#"}),"language"]}),"\n",(0,i.jsx)(n.p,{children:"开发语言(language)，选项如下："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"TS(ts)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"ES6+(js)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"packagemanager",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packagemanager",children:"#"}),"packageManager"]}),"\n",(0,i.jsx)(n.p,{children:"包管理工具(packageManager)，选项如下："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"pnpm(pnpm)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Yarn(yarn)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["\n在生成器插件创建工程方案场景的自定义类型(custom)中，默认只提供了 ",(0,i.jsx)(n.code,{children:"packageManager"})," 配置。"]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"其他配置",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#其他配置",children:"#"}),"其他配置"]}),"\n",(0,i.jsxs)(n.h3,{id:"noneedinstall",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#noneedinstall",children:"#"}),"noNeedInstall"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"类型："})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"默认值："})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"是否跳过依赖安装。"}),"\n",(0,i.jsxs)(n.h3,{id:"noneedgit",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#noneedgit",children:"#"}),"noNeedGit"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"类型："})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"默认值："})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"是否跳过 git 初始化和提交初始 commit。"}),"\n",(0,i.jsxs)(n.h3,{id:"successinfo",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#successinfo",children:"#"}),"successInfo"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"类型："})," ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"默认值："})," 不同工程方案的命令操作提示"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"自定义创建项目成功的提示信息。"}),"\n",(0,i.jsxs)(n.h3,{id:"ismonoreposubproject",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ismonoreposubproject",children:"#"}),"isMonorepoSubProject"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"类型："})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"默认值："})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"是否为 Monorepo 子项目。"}),"\n",(0,i.jsxs)(n.h3,{id:"istest",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#istest",children:"#"}),"isTest"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"类型："})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"默认值："})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"作用于应用项目，标识是否为测试项目。"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"true"}),": 创建到路径 ",(0,i.jsx)(n.code,{children:"examples/"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"false"}),": 创建到路径 ",(0,i.jsx)(n.code,{children:"apps/"})]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"ispublic",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ispublic",children:"#"}),"isPublic"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"类型："})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"默认值："})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"作用于模块 (Module) 项目，标识是否需要对外发布。"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"true"}),": 创建到路径 ",(0,i.jsx)(n.code,{children:"packages/"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"false"}),": 创建到路径 ",(0,i.jsx)(n.code,{children:"features/"})]}),"\n"]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}}}]);