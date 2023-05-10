(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_codesmith_api_app_mdx"],{8684:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return c},toc:function(){return d},default:function(){return t}});var r=s("9880"),i=s("23169"),a={sidebar_position:1},c="@modern-js/codesmith-api-app",d=[{text:"使用姿势",depth:2,id:"使用姿势"},{text:"API",depth:2,id:"api"},{text:"checkEnvironment",depth:3,id:"checkenvironment"},{text:"runInstall",depth:3,id:"runinstall"},{text:"runGitAndInstall",depth:3,id:"rungitandinstall"},{text:"forgeTemplate",depth:3,id:"forgetemplate"},{text:"showSuccessInfo",depth:3,id:"showsuccessinfo"},{text:"runSubGenerator",depth:3,id:"runsubgenerator"},{text:"getInputBySchema",depth:3,id:"getinputbyschema"},{text:"getInputBySchemaFunc",depth:3,id:"getinputbyschemafunc"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3",ol:"ol"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"@modern-js/codesmith-api-app",children:["@modern-js/codesmith-api-app",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#@modern-js/codesmith-api-app",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"微生成器开发过程中常用 API 的组合封装，包含 fs、git、npm 等其他包的 API 封装，在能满足需求时，推荐使用该 npm 包的 API。"}),"\n",(0,r.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { AppAPI } from '@modern-js/codesmith-api-app';\n\nexport default async (context: GeneratorContext, generator: GeneratorCore) => {\n  const appApi = new AppAPI(context, generator);\n  await appApi.runInstall();\n};\n"})})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["创建 AppAPI 实例，参数和微生成器函数参数一致，为 context 和 generator，具体介绍请看",(0,r.jsx)(n.a,{href:"/guides/topic-detail/generator/codesmith/structure",children:"微生成器项目组成"}),"。"]}),"\n",(0,r.jsx)(n.li,{children:"调用其实例上 API 即可。"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"api",children:["API",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"checkenvironment",children:["checkEnvironment",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#checkenvironment",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"检查当前生成器运行环境，检查项为："}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"node 及 node 版本，默认大于 12.22.12，可传递参数执行 node 版本。"}),"\n",(0,r.jsx)(n.li,{children:"可使用 yarn、pnpm 或者 npm。"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"参数："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["nodeVersion?: ",(0,r.jsx)(n.code,{children:"string"})," 校验的 node 版本。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"runinstall",children:["runInstall",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runinstall",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["安装依赖，可传入安装依赖命令，默认根据 config 中的 ",(0,r.jsx)(n.code,{children:"packageManager"})," 值进行。"]}),"\n",(0,r.jsx)(n.p,{children:"参数："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["command?: ",(0,r.jsx)(n.code,{children:"string"})," 安装依赖命令。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"rungitandinstall",children:["runGitAndInstall",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rungitandinstall",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"该函数完成以下动作："}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"校验当前生成器执行目录是否为一个 git 仓库。"}),"\n",(0,r.jsx)(n.li,{children:"如果不是一个 git 仓库，初始化为一个 git 仓库。"}),"\n",(0,r.jsx)(n.li,{children:"安装依赖。"}),"\n",(0,r.jsxs)(n.li,{children:["在非 monorepo 项目(判断条件，config 中 ",(0,r.jsx)(n.code,{children:"isMonorepoSubProject"})," 不存在或者为 false)中提交初始 commit，commit 信息为 feat: init，支持自定义。"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"参数："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["commitMessage?: ",(0,r.jsx)(n.code,{children:"string"})," 初始化 commit message 信息。"]}),"\n",(0,r.jsxs)(n.li,{children:["installFunc?: ",(0,r.jsx)(n.code,{children:"() => Promise<void>"})," 安装依赖函数。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"forgetemplate",children:["forgeTemplate",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#forgetemplate",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"渲染生成器模板文件。"}),"\n",(0,r.jsx)(n.p,{children:"参数："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["templatePattern: string 模板文件匹配正则，例如： ",(0,r.jsx)(n.code,{children:"templates/base-templates/**/*"})," 。"]}),"\n",(0,r.jsxs)(n.li,{children:["filter?: ",(0,r.jsx)(n.code,{children:"(resourceKey: string) => boolean"})," 过滤函数，参数为 templatePattern 匹配的文件路径，返回 true 表示渲染该文件，返回 false 表示不渲染该文件。"]}),"\n",(0,r.jsxs)(n.li,{children:["rename?: ",(0,r.jsx)(n.code,{children:"(resourceKey: string) => string"})," 重命名函数，参数为 templatePattern 匹配的文件路径，返回新文件名。默认会替换 resourceKey 开头的 templates 目录和结尾的 .handlebars 后缀。"]}),"\n",(0,r.jsxs)(n.li,{children:["parameters?: ",(0,r.jsx)(n.code,{children:"Record<string, any>"})," 渲染参数，当模板中存在 handlebars 或者 ejs 变量时，使用其传递对应变量值。"]}),"\n",(0,r.jsxs)(n.li,{children:["type?: ",(0,r.jsx)(n.code,{children:"'handlebars' | 'ejs'"})," 模板文件类型，默认为 handlebars。"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"例如:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"await appApi.forgeTemplate(\n  'templates/base-templates/**/*',\n  undefined,\n  resourceKey =>\n    resourceKey\n      .replace('templates/base-templates/', '')\n      .replace('.handlebars', ''),\n);\n\nawait appApi.forgeTemplate(\n  'templates/base-template/**/*',\n  resourceKey => !resourceKey.include('eslintrc.json'),\n  resourceKey =>\n    resourceKey\n      .replace('templates/base-template/', projectPath)\n      .replace('language', language as string)\n      .replace('.handlebars', ''),\n  {\n    name: packageName as string,\n    language,\n    isTs: language === Language.TS,\n    packageManager: getPackageManagerText(packageManager as any),\n  },\n);\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"showsuccessinfo",children:["showSuccessInfo",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#showsuccessinfo",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"展示成功信息。"}),"\n",(0,r.jsx)(n.p,{children:"参数："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["successInfo?: ",(0,r.jsx)(n.code,{children:"string"}),"，默认为 Success || 成功。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"runsubgenerator",children:["runSubGenerator",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runsubgenerator",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"运行子生成器。"}),"\n",(0,r.jsx)(n.p,{children:"参数："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["subGenerator: ",(0,r.jsx)(n.code,{children:"string"})," 子生成器名称或者路径。"]}),"\n",(0,r.jsxs)(n.li,{children:["relativePwdPath?: ",(0,r.jsx)(n.code,{children:"string"})," 子生成器运行的相对路径。"]}),"\n",(0,r.jsxs)(n.li,{children:["config?: ",(0,r.jsx)(n.code,{children:"Record<string, unknown>"})," 子生成器运行的默认 config 配置。"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"例如："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"await appApi.runSubGenerator(\n  getGeneratorPath('@modern-js/repo-generator', context.config.distTag),\n  undefined,\n  { ...context.config, hasPlugin: false },\n);\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"getinputbyschema",children:["getInputBySchema",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getinputbyschema",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"通过 schema 完成用户交互输入。"}),"\n",(0,r.jsx)(n.p,{children:"参数："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["schema: ",(0,r.jsx)(n.code,{children:"FormilySchema | Question[]"})," 问题列表，支持 Formily schema 和 inquirer 类型。"]}),"\n",(0,r.jsxs)(n.li,{children:["type: ",(0,r.jsx)(n.code,{children:"'formily' | 'inquirer'"})," 类型，默认值为 formily。"]}),"\n",(0,r.jsxs)(n.li,{children:["configValue: ",(0,r.jsx)(n.code,{children:"Record<string, unknown> = {}"})," schema 默认值，传入该值的 schema 字段对应的问题将不再和用户交互。"]}),"\n",(0,r.jsxs)(n.li,{children:["validateMap?: ",(0,r.jsx)(n.code,{children:"Record<string, (input: unknown, data?: Record<string, unknown>) => { success: boolean; error?: string }>"})," schema 中特殊字段的验证函数。"]}),"\n",(0,r.jsxs)(n.li,{children:["initValue?: ",(0,r.jsx)(n.code,{children:"Record<string, any>"})," schema 中字段的初始化值。"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Formily Schema 类型支持方式可参考",(0,r.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/input/type",children:"自定义输入相关类型定义"}),"。"]}),"\n",(0,r.jsxs)(n.h3,{id:"getinputbyschemafunc",children:["getInputBySchemaFunc",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getinputbyschemafunc",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"通过 schema 完成用户交互输入，schema 参数值为函数，用户处理国际化问题，仅支持 Formily schema。"}),"\n",(0,r.jsx)(n.p,{children:"参数："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["schema: ",(0,r.jsx)(n.code,{children:"config?: Record<string, any>) => FormilySchema"})," 获取问题列表函数，config 参数为当前生成器中的 config 配置信息。"]}),"\n",(0,r.jsxs)(n.li,{children:["configValue: ",(0,r.jsx)(n.code,{children:"Record<string, unknown> = {}"})," schema 默认值，传入该值的 schema 字段对应的问题将不再和用户交互。"]}),"\n",(0,r.jsxs)(n.li,{children:["validateMap?: ",(0,r.jsx)(n.code,{children:"Record<string, (input: unknown, data?: Record<string, unknown>) => { success: boolean; error?: string }>"})," schema 中特殊字段的验证函数。"]}),"\n",(0,r.jsxs)(n.li,{children:["initValue?: ",(0,r.jsx)(n.code,{children:"Record<string, any>"})," schema 中字段的初始化值。"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Formily Schema 类型支持方式可参考",(0,r.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/input/type",children:"自定义输入相关类型定义"}),"。"]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);