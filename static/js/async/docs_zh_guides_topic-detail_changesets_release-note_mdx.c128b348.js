(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_changesets_release-note_mdx"],{41636:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var r,t=s("15169"),a=s("43932"),i=s("9880"),c=s("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div",h2:"h2",h3:"h3",h4:"h4",ul:"ul",li:"li",strong:"strong"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"自定义-release-note-格式",children:["自定义 Release Note 格式",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-release-note-格式",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js 提供了 ",(0,i.jsx)(n.code,{children:"modern gen-release-note"})," 命令，支持通过当前存在的 changeset 和 git commit 信息自动生成 Release Note 信息，在发布命令执行之前，可以通过执行该命令生成本次发布的 Release Note。"]}),"\n",(0,i.jsx)(n.p,{children:"默认生成的 Release Note 格式为："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-markdown",children:"- fix: add missing type definitions by @zllkjc in https://github.com/web-infra-dev/modern.js/pull/3835\n"})}),"\n",(0,i.jsx)(n.p,{children:"根据 commit 信息获取 changeset 的 Pull Request ID，并生成 Github 的链接，内容为 changeset 的 changelog 信息和作者信息。"}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsx)(n.p,{children:"获取作者信息，需要提供 Github Token 环境变量，通过 GITHUB_AUTH_TOKEN 传入。"})})]}),"\n",(0,i.jsx)(n.p,{children:"当默认生成 Release Note 逻辑不能满足需求时，支持自定义 Release Note 格式。"}),"\n",(0,i.jsxs)(n.h2,{id:"信息",children:["信息",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#信息",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"getreleaseinfo",children:["getReleaseInfo",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getreleaseinfo",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"生成 Release Note 信息需要先收集一些信息，比如 commit ID、Pull Request ID、commit message 等等。"}),"\n",(0,i.jsxs)(n.p,{children:["该逻辑可通过 ",(0,i.jsx)(n.code,{children:"getReleaseInfo"})," 函数实现。"]}),"\n",(0,i.jsxs)(n.h4,{id:"params",children:["Params",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"commit"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"类型： string;"}),"\n",(0,i.jsx)(n.p,{children:"当前 changeset 对应的 commit message 信息。"}),"\n",(0,i.jsxs)(n.p,{children:["执行 ",(0,i.jsx)(n.code,{children:"git log --pretty=format:%h--%s--%ae .changeset/${changeset.id}.md"})," 的结果。"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"commitObj"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"初步解析 commit 获取基本信息。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export enum CommitType {\n  Performance = 'performance',\n  Features = 'features',\n  BugFix = 'bugFix',\n  Doc = 'doc',\n  Other = 'other',\n}\n\ninterface Commit {\n  id: string; // commit id\n  type: CommitType;\n  repository?: string; // 参数传入的 repo 信息或者 package.json 中定义的 repository 信息\n  pullRequestId?: string;\n  author?: string;\n  message: string; // commit message\n  summary: string; // changeset summary\n  summary_zh: string; // changeset zh summary\n  [key: string]: string | undefined;\n}\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"返回值",children:["返回值",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"commitObj， 补充后完整的 commit 对象。"}),"\n",(0,i.jsxs)(n.h4,{id:"默认实现",children:["默认实现",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认实现",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Modern.js 的默认实现为：根据 commit 信息拆分出 Pull Request ID，并根据 commit id 获取到用户信息，加入到 commitObj 中。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function getReleaseInfo(commit: string, commitObj: Commit) {\n  const commitRegex = /(.*)\\(#(\\d*)\\)/;\n\n  const [commitId, message, email] = commit.split('--');\n\n  const author = AuthorMap.get(email);\n  const token = authToken || process.env.GITHUB_AUTH_TOKEN;\n  if (author) {\n    commitObj.author = author;\n  } else if (repo && token) {\n    try {\n      const res = await axios.get(\n        `https://api.github.com/repos/${repo}/commits/${commitId}`,\n        {\n          method: 'GET',\n          headers: {\n            'Content-Type': 'application/json',\n            Authorization: token,\n          },\n        },\n      );\n      const author = res.data.author.login;\n      commitObj.author = author;\n      AuthorMap.set(email, author);\n    } catch (e) {\n      console.warn(e);\n    }\n  }\n\n  if ((message || commitObj.summary).match(commitRegex)) {\n    const [, messageShort, pullRequestId] = (\n      message || commitObj.summary\n    ).match(commitRegex)!;\n    commitObj.pullRequestId = pullRequestId;\n    commitObj.message = messageShort.trim();\n  }\n\n  return commitObj;\n}\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"getreleasenoteline",children:["getReleaseNoteLine",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getreleasenoteline",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["根据 ",(0,i.jsx)(n.code,{children:"getReleaseInfo"})," 中获取的 commit 对象信息，生成对应的 Release Note。"]}),"\n",(0,i.jsxs)(n.p,{children:["该逻辑可通过 ",(0,i.jsx)(n.code,{children:"getReleaseNoteLine"})," 函数实现。"]}),"\n",(0,i.jsxs)(n.h4,{id:"params-1",children:["Params",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params-1",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"commit"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"类型和上述 commitObj 类型一致。"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"lang"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"类型： string;"}),"\n",(0,i.jsxs)(n.p,{children:["获取对应语言的 Release Note 信息，支持 ",(0,i.jsx)(n.code,{children:"en"})," 和 ",(0,i.jsx)(n.code,{children:"zh"}),"，默认为 ",(0,i.jsx)(n.code,{children:"en"}),"。"]}),"\n",(0,i.jsxs)(n.h4,{id:"返回值-1",children:["返回值",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值-1",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"生成的 Release Note。"}),"\n",(0,i.jsxs)(n.h4,{id:"默认实现-1",children:["默认实现",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认实现-1",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Modern.js 的默认实现为："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export function getReleaseNoteLine(\n  commit: Commit,\n  lang: 'en' | 'zh' = 'en',\n) {\n  const { repository, pullRequestId, summary, summary_zh, author } = commit;\n  const pullRequest =\n    pullRequestId && repository\n      ? `https://github.com/${repository}/pull/${pullRequestId}`\n      : '';\n  if (lang === 'en') {\n    return `- ${summary}${author ? ` by @${author}` : ''}${\n      pullRequest ? ` in ${pullRequest}` : ''\n    }\\n`;\n  }\n  return `- ${summary_zh}${author ? ` 由 @${author} 实现` : ''}${\n    pullRequest ? `， 详情可查看 ${pullRequest}` : ''\n  }\\n`;\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"使用自定义模块",children:["使用自定义模块",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用自定义模块",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"gen-release-note"})," 命令支持 ",(0,i.jsx)(n.code,{children:"--custom"})," 参数，该参数可传入自定义 Release Note 模块的模块名称或者路径。"]}),"\n",(0,i.jsxs)(n.h3,{id:"配置相对路径",children:["配置相对路径",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置相对路径",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["custom 参数值如果为相对路径为",(0,i.jsx)(n.strong,{children:"项目跟目录"}),"。"]}),"\n",(0,i.jsxs)(n.p,{children:["例如创建 ",(0,i.jsx)(n.code,{children:"scripts/my-release-note-config.js"})," 文件，定义如下内容："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="scripts/my-release-note-config.js"',children:"function getReleaseInfo(commit, commitObj) {\n  return commitObj;\n}\n\nfunction getReleaseNoteLine(commit) {}\n\nmodule.exports = {\n  getReleaseInfo,\n  getReleaseNoteLine,\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"执行下面命令："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm run gen-release-note --custom ./scripts/my-release-note-config.js\n"})}),"\n",(0,i.jsxs)(n.p,{children:["也可以把命令参数直接定义到 ",(0,i.jsx)(n.code,{children:"package.json"})," 中："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n    "scripts": {\n        ...\n        "gen-release-note": "modern gen-release-note --custom ./scripts/my-release-note-config.js"\n    },\n    ...\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["直接执行命令 ",(0,i.jsx)(n.code,{children:"pnpm run gen-release-note"})," 即可。"]}),"\n",(0,i.jsxs)(n.h3,{id:"使用模块工程方案",children:["使用模块工程方案",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用模块工程方案",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"custom 参数值还可以使用模块工程方案进行管理，提供通用方案。"}),"\n",(0,i.jsxs)(n.h4,{id:"使用-npx-@modern-js/create@latest-创建模块工程方案",children:["使用 ",(0,i.jsx)(n.code,{children:"npx @modern-js/create@latest"})," 创建模块工程方案",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-npx-@modern-js/create@latest-创建模块工程方案",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"? 请选择你想创建的工程类型：Npm 模块\n? 请填写项目名称：custom-release-note\n? 请选择开发语言：TS\n? 请选择包管理工具：pnpm\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"实现自定义内容",children:["实现自定义内容",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#实现自定义内容",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export function getReleaseInfo() {}\n\nexport function getReleaseNoteLine() {}\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"将模块发布到-npm",children:["将模块发布到 NPM",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#将模块发布到-npm",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"在目标仓库根目录安装对应模块，例如-custom-release-note",children:["在目标仓库根目录安装对应模块，例如 ",(0,i.jsx)(n.code,{children:"custom-release-note"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在目标仓库根目录安装对应模块，例如-custom-release-note",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"执行-gen-release-note-命令添加-custom-参数",children:["执行 gen-release-note 命令添加 custom 参数",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#执行-gen-release-note-命令添加-custom-参数",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm run gen-release-note --custom custom-release-note\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"使用-monorepo-工程方案",children:["使用 Monorepo 工程方案",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-monorepo-工程方案",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"如果你当前仓库为 Monorepo 工程方案，可以直接使用模块子项目进行管理。"}),"\n",(0,i.jsxs)(n.h4,{id:"执行-pnpm-run-new-创建模块子项目",children:["执行 ",(0,i.jsx)(n.code,{children:"pnpm run new"})," 创建模块子项目",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#执行-pnpm-run-new-创建模块子项目",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"? 请选择你想创建的工程类型：Npm 模块\n? 请填写子项目名称：custom-release-note\n? 请填写子项目目录名称：custom-release-note\n? 请选择开发语言：TS\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"实现自定义内容-1",children:["实现自定义内容",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#实现自定义内容-1",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export function getReleaseInfo() {}\n\nexport function getReleaseNoteLine() {}\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"在-monorepo-根目录添加子项目模块依赖，例如-custom-release-note。",children:["在 Monorepo 根目录添加子项目模块依赖，例如 ",(0,i.jsx)(n.code,{children:"custom-release-note"}),"。",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在-monorepo-根目录添加子项目模块依赖，例如-custom-release-note。",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "devDependencies": {\n    "custom-release-note": "workspace:*",\n    ...\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.h4,{id:"执行-gen-release-note-命令添加---custom-参数",children:["执行 ",(0,i.jsx)(n.code,{children:"gen-release-note"})," 命令添加 ",(0,i.jsx)(n.code,{children:"--custom"})," 参数",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#执行-gen-release-note-命令添加---custom-参数",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm run gen-release-note --custom custom-release-note\n"})}),"\n",(0,i.jsx)(n.p,{children:"该模块发布到 NPM 后，依然可以和模块类型一样供其他仓库使用。"})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/zh/guides/topic-detail/changesets/release-note.mdx"]={toc:[{text:"信息",id:"信息",depth:2},{text:"getReleaseInfo",id:"getreleaseinfo",depth:3},{text:"Params",id:"params",depth:4},{text:"返回值",id:"返回值",depth:4},{text:"默认实现",id:"默认实现",depth:4},{text:"getReleaseNoteLine",id:"getreleasenoteline",depth:4},{text:"Params",id:"params-1",depth:4},{text:"返回值",id:"返回值-1",depth:4},{text:"默认实现",id:"默认实现-1",depth:4},{text:"使用自定义模块",id:"使用自定义模块",depth:2},{text:"配置相对路径",id:"配置相对路径",depth:3},{text:"使用模块工程方案",id:"使用模块工程方案",depth:3},{text:"使用 npx @modern-js/create@latest 创建模块工程方案",id:"使用-npx-@modern-js/create@latest-创建模块工程方案",depth:4},{text:"实现自定义内容",id:"实现自定义内容",depth:4},{text:"将模块发布到 NPM",id:"将模块发布到-npm",depth:4},{text:"在目标仓库根目录安装对应模块，例如 custom-release-note",id:"在目标仓库根目录安装对应模块，例如-custom-release-note",depth:4},{text:"执行 gen-release-note 命令添加 custom 参数",id:"执行-gen-release-note-命令添加-custom-参数",depth:4},{text:"使用 Monorepo 工程方案",id:"使用-monorepo-工程方案",depth:3},{text:"执行 pnpm run new 创建模块子项目",id:"执行-pnpm-run-new-创建模块子项目",depth:4},{text:"实现自定义内容",id:"实现自定义内容-1",depth:4},{text:"在 Monorepo 根目录添加子项目模块依赖，例如 custom-release-note。",id:"在-monorepo-根目录添加子项目模块依赖，例如-custom-release-note。",depth:4},{text:"执行 gen-release-note 命令添加 --custom 参数",id:"执行-gen-release-note-命令添加---custom-参数",depth:4}],title:"自定义 Release Note 格式",frontmatter:{sidebar_position:8}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,a._(t._({},e),{children:(0,i.jsx)(o,t._({},e))})):o(e)}}}]);