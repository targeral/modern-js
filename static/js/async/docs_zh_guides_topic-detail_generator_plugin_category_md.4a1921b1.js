(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_category_md"],{69357:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return i},title:function(){return a},toc:function(){return c},default:function(){return t}});var r=d("9880"),s=d("23169"),i={sidebar_position:2},a="类型",c=[{text:"介绍",depth:2,id:"介绍"},{text:"标识",depth:2,id:"标识"},{text:"扩展",depth:3,id:"扩展"},{text:"自定义",depth:3,id:"自定义"},{text:"创建初始项目",depth:2,id:"创建初始项目"},{text:"扩展",depth:3,id:"扩展-1"},{text:"自定义",depth:3,id:"自定义-1"},{text:"执行顺序",depth:2,id:"执行顺序"},{text:"扩展",depth:3,id:"扩展-2"},{text:"自定义",depth:3,id:"自定义-2"}];function h(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",pre:"pre",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"类型",children:["类型",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#类型",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"介绍",children:["介绍",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"生成器插件分为两类："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"扩展：Web 应用( Npm 模块) = Web 应用( Npm 模块) + 生成器插件"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"自定义：新应用(模块) = Web 应用(模块) + 生成器插件"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"简单理解就是扩展还是使用 Modern.js 原本的工程方案名称，自定义会创建一个新的名称。"}),"\n",(0,r.jsxs)(n.h2,{id:"标识",children:["标识",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#标识",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["生成器插件的类型通过 ",(0,r.jsx)(n.code,{children:"package.json"})," 中的 meta 字段来提供："]}),"\n",(0,r.jsxs)(n.h3,{id:"扩展",children:["扩展",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#扩展",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n "meta": {\n    "extend": "mwa" // module\n }\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"自定义",children:["自定义",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n "meta": {\n    "key": "new_app",\n    "name": "新应用",\n    "type": "mwa" // module 和 custom\n }\n}\n'})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["自定义类型的 type 支持 custom 类型，custom 为使用 Modern.js 提供的一些项目开发的最佳实践模板，比如 ",(0,r.jsx)(n.code,{children:".gitignore"}),"、",(0,r.jsx)(n.code,{children:".editorConfig"})," 等文件，其他业务相关代码模板需要手动通过生成器插件提供。\n"]})})]}),"\n",(0,r.jsxs)(n.h2,{id:"创建初始项目",children:["创建初始项目",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建初始项目",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"扩展-1",children:["扩展",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#扩展-1",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest plugin --plugin @modern-js/generator-plugin-plugin\n? 请选择你想创建的工程类型 Npm 模块\n? 请选择项目场景 生成器插件\n? 请输入生成器插件插件包名 plugin\n? 请选择开发语言 TS\n? 请选择包管理工具 pnpm\n? 请选择插件类型 extend\n? 请选择插件基础类型 Web 应用\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"自定义-1",children:["自定义",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-1",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest plugin --plugin @modern-js/generator-plugin-plugin\n? 请选择项目类型 生成器插件\n? 请选择项目组织方式 独立项目\n? 请选择开发语言 TS\n? 请选择包管理工具 pnpm\n? 请输入生成器插件插件包名 plugin\n? 请选择开发语言 TS\n? 请选择包管理工具 pnpm\n? 请选择插件类型 custom\n? 请输入插件关键字 new_app\n? 请输入插件展示名称 新应用\n? 请选择插件基础类型 Web 应用\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"执行顺序",children:["执行顺序",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#执行顺序",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["生成器插件支持同时使用多个，也就是执行 ",(0,r.jsx)(n.code,{children:"@modern-js/create"})," 时支持多个 ",(0,r.jsx)(n.code,{children:"--plugin"})," 参数。"]}),"\n",(0,r.jsxs)(n.h3,{id:"扩展-2",children:["扩展",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#扩展-2",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"扩展生成器插件支持在执行时会按照声明的生成器插件参数的顺序，依次执行对应 extend 的工程方案的生命周期函数。"}),"\n",(0,r.jsxs)(n.p,{children:["例如存在 A 和 B 两个生成器插件，A 和 B 都是 extend 的 Web 应用工程方案，A 插件声明添加 ",(0,r.jsx)(n.code,{children:"a.ts"})," 文件，B 插件声明添加 ",(0,r.jsx)(n.code,{children:"b.ts"})," 文件，\n执行 ",(0,r.jsx)(n.code,{children:"npx @modern-js/create@latest --plugin A --plugin B"})," 时，选择 Web 应用工程时，会先生成 Web 应用默认的项目文件，然后执行 A 插件创建 ",(0,r.jsx)(n.code,{children:"a.ts"})," 文件，再执行 B 插件，生成 ",(0,r.jsx)(n.code,{children:"b.ts"})," 文件。"]}),"\n",(0,r.jsxs)(n.h3,{id:"自定义-2",children:["自定义",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-2",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["自定义生成器插件只支持同一时间运行一个生成器插件，当 ",(0,r.jsx)(n.code,{children:"@modern-js/create"})," 声明 ",(0,r.jsx)(n.code,{children:"--plugin"})," 参数时，会在选择工程方案之后增加选择工程方案场景选项，即为上述 ",(0,r.jsx)(n.code,{children:"package.json"})," 中定义的新 name，选择对应 name 的生成器插件，即会在默认工程方案执行完成后，执行对应的生成器插件逻辑。声明 ",(0,r.jsx)(n.code,{children:"--plugin"})," 参数时，工程方案场景下将会逐一列举出对应的生成器插件名称供选择。"]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}}}]);