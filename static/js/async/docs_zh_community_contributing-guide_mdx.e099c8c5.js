(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_community_contributing-guide_mdx"],{9969:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return d},toc:function(){return l},default:function(){return h}});var a=s("12151"),c=s("23169"),r={sidebar_position:3},d="贡献指南",l=[{text:"设置开发环境",depth:2,id:"设置开发环境"},{text:"Fork 仓库",depth:3,id:"fork-仓库"},{text:"安装 Node.js",depth:3,id:"安装-node-js"},{text:"安装 pnpm",depth:3,id:"安装-pnpm"},{text:"安装依赖",depth:3,id:"安装依赖"},{text:"设置 Git 邮箱",depth:3,id:"设置-git-邮箱"},{text:"代码变更和构建",depth:2,id:"代码变更和构建"},{text:"创建一个新分支",depth:3,id:"创建一个新分支"},{text:"构建 Package",depth:3,id:"构建-package"},{text:"测试",depth:2,id:"测试"},{text:"添加新测试",depth:3,id:"添加新测试"},{text:"运行单元测试",depth:3,id:"运行单元测试"},{text:"运行 E2E 测试",depth:3,id:"运行-e2e-测试"},{text:"Linting",depth:2,id:"linting"},{text:"文档",depth:2,id:"文档"},{text:"提交变更",depth:2,id:"提交变更"},{text:"添加 Changeset",depth:3,id:"添加-changeset"},{text:"提交你的变更",depth:3,id:"提交你的变更"},{text:"PR 标题格式",depth:3,id:"pr-标题格式"},{text:"发布",depth:2,id:"发布"}];function i(e){var n=Object.assign({h1:"h1",a:"a",p:"p",hr:"hr",h2:"h2",h3:"h3",div:"div",button:"button",pre:"pre",code:"code",ul:"ul",li:"li",blockquote:"blockquote",ol:"ol"},(0,c.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"贡献指南",children:["贡献指南",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#贡献指南",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"感谢你有兴趣为 Modern.js 做贡献！在开始你的贡献之前，请花几分钟时间阅读以下指南。"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h2,{id:"设置开发环境",children:["设置开发环境",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#设置开发环境",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"fork-仓库",children:["Fork 仓库",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fork-仓库",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://help.github.com/articles/fork-a-repo/",target:"_blank",rel:"noopener noreferrer",children:"Fork"})," Modern.js 仓库到你的 GitHub 账户，然后 ",(0,a.jsx)(n.a,{href:"https://help.github.com/articles/cloning-a-repository/",target:"_blank",rel:"noopener noreferrer",children:"clone"})," 到你的本地。"]}),"\n",(0,a.jsxs)(n.h3,{id:"安装-node-js",children:["安装 Node.js",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装-node-js",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"我们推荐使用 Node.js 16 或 18。你可以通过以下命令查看当前使用的 Node.js 版本："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-bash",children:"node -v\n#v16.18.0\n"})})]})}),"\n",(0,a.jsxs)(n.p,{children:["如果你当前环境没有安装 Node.js，可以使用 ",(0,a.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer",children:"nvm"}),"或者 ",(0,a.jsx)(n.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"})," 来安装它。"]}),"\n",(0,a.jsx)(n.p,{children:"以下是如何通过 nvm 安装 Node.js 16 LTS 版本的示例："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-bash",children:"# 安装 Node.js 16 的 LTS 版本\nnvm install 16 --lts\n\n# 将新安装的 Node.js 16 设为默认版本\nnvm alias default 16\n\n# 切换到新安装的 Node.js 16\nnvm use 16\n"})})]})}),"\n",(0,a.jsxs)(n.h3,{id:"安装-pnpm",children:["安装 pnpm",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装-pnpm",children:"#"})]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-bash",children:"# 使用 corepack 启用 pnpm，仅在 Node.js >= `v14.19.0` 上可用\ncorepack enable\n"})})]})}),"\n",(0,a.jsxs)(n.h3,{id:"安装依赖",children:["安装依赖",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装依赖",children:"#"})]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:"pnpm install\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"这将完成："}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"安装所有依赖项"}),"\n",(0,a.jsx)(n.li,{children:"在 monorepo 中的 packages 之间创建 symlinks"}),"\n",(0,a.jsxs)(n.li,{children:["运行 ",(0,a.jsx)(n.code,{children:"prepare"})," 脚本来构建所有包（这将需要一些时间，但可以保证所有包都被正确构建）"]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"在此之后，你通常不需要一次性构建所有 packages。如果你正在开发的新功能依赖另一个 package 的最新代码，通常只构建指定的 package 就足够了。"}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"设置-git-邮箱",children:["设置 Git 邮箱",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#设置-git-邮箱",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["请确保在 ",(0,a.jsx)(n.code,{children:"<https://github.com/settings/emails>"})," 中设置了电子邮件，当你提交 Pull Request 时将需要它。"]}),"\n",(0,a.jsx)(n.p,{children:"检查你的 git 客户端是否已配置邮箱："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:"git config --list | grep email\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"全局设置邮箱："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:'git config --global user.email "SOME_EMAIL@example.com"\n'})})]})}),"\n",(0,a.jsx)(n.p,{children:"针对本地仓库设置邮箱："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:'git config user.email "SOME_EMAIL@example.com"\n'})})]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h2,{id:"代码变更和构建",children:["代码变更和构建",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码变更和构建",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"当你在 fork 的仓库中设置完本地开发环境后，我们就可以开始开发了。"}),"\n",(0,a.jsxs)(n.h3,{id:"创建一个新分支",children:["创建一个新分支",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建一个新分支",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"建议在一个新的分支上开发，这样便于后续提交 pull request："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:"git checkout -b MY_BRANCH_NAME\n"})})]})}),"\n",(0,a.jsxs)(n.h3,{id:"构建-package",children:["构建 Package",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#构建-package",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["要构建你要更改的 package，首先打开 package 目录，然后执行 ",(0,a.jsx)(n.code,{children:"build"})," 命令："]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:"# 将 some-path 替换为你要构建的 package 的路径\ncd ./packages/some-package\npnpm run build\n"})})]})}),"\n",(0,a.jsxs)(n.p,{children:["此外，你可以使用 ",(0,a.jsx)(n.code,{children:"--filter"})," 选项从仓库根目录来构建指定的 package："]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:"pnpm run --filter @modern-js/some-package build\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"构建所有包："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:"pnpm run prepare\n"})})]})}),"\n",(0,a.jsxs)(n.p,{children:["如果你需要清理项目中的所有 ",(0,a.jsx)(n.code,{children:"node_modules/*"}),"，执行 ",(0,a.jsx)(n.code,{children:"reset"})," 命令："]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:"pnpm 运行重置\n"})})]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h2,{id:"测试",children:["测试",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#测试",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"添加新测试",children:["添加新测试",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加新测试",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"如果你进行了 bugfix，或者添加了需要测试的代码，请添加一些测试代码。"}),"\n",(0,a.jsxs)(n.p,{children:["你可以在 ",(0,a.jsx)(n.code,{children:"<PACKAGE_DIR>/tests"})," 文件夹中添加单元测试用例。测试语法基于 ",(0,a.jsx)(n.a,{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer",children:"Jest"})," 和 ",(0,a.jsx)(n.a,{href:"https://vitest.dev/",target:"_blank",rel:"noopener noreferrer",children:"Vitest"}),"。"]}),"\n",(0,a.jsxs)(n.h3,{id:"运行单元测试",children:["运行单元测试",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#运行单元测试",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"在提交 pull request 之前，为了确保本次变更没有引入缺陷，你可以通过执行以下命令运行单元测试："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:"pnpm run test\n"})})]})}),"\n",(0,a.jsxs)(n.p,{children:["你也可以使用 ",(0,a.jsx)(n.code,{children:"--filter"})," 选项运行单个包的单元测试："]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:"pnpm run --filter @modern-js/some-package test\n"})})]})}),"\n",(0,a.jsxs)(n.h3,{id:"运行-e2e-测试",children:["运行 E2E 测试",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#运行-e2e-测试",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"除了单元测试之外，Modern.js 仓库还包括端到端 (E2E) 测试，用于检查整个应用程序的功能。"}),"\n",(0,a.jsxs)(n.p,{children:["你可以执行 ",(0,a.jsx)(n.code,{children:"test:e2e"})," 命令来运行 E2E 测试："]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:"pnpm run test:e2e\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"如果需要运行指定的测试，可以添加关键字进行过滤："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:"# 只运行带有 copy-assets 关键词的测试用例\nnpx jest copy-assets\n"})})]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h2,{id:"linting",children:["Linting",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#linting",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"为了帮助保持代码风格的一致性和可读性，我们使用 ESLint 对代码进行校验。"}),"\n",(0,a.jsx)(n.p,{children:"你可以执行以下命令来运行 Linter："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:"pnpm run lint\n"})})]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h2,{id:"文档",children:["文档",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#文档",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"目前 Modern.js 提供英文和中文文档。如果你熟悉中文，请同时更新中英文文档。否则，只需更新英文文档即可。"}),"\n",(0,a.jsxs)(n.p,{children:["你可以在 ",(0,a.jsx)(n.code,{children:"packages/document"})," 文件夹中找到所有文档："]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:"root\n└─ packages\n   └─ document\n       ├─ builder-doc    # Modern.js Builder 文档\n       ├─ doc-tools-doc  # Modern.js Doc 文档\n       ├─ main-doc       # Modern.js Framework 文档\n       └─ module-doc     # Modern.js Module 文档\n"})})]})}),"\n",(0,a.jsxs)(n.p,{children:["文档站使用 ",(0,a.jsx)(n.a,{href:"https://modernjs.dev/doc-tools",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Doc"})," 构建，文档内容可以使用 markdown 或 mdx 语法编写。详细使用方法可以参考 ",(0,a.jsx)(n.a,{href:"https://modernjs.dev/doc-tools",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Doc 文档"}),"。"]}),"\n",(0,a.jsxs)(n.p,{children:["Modern.js Doc 的源代码可以在 ",(0,a.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern.js/tree/main/packages/solutions/doc-tools",target:"_blank",rel:"noopener noreferrer",children:"这个文件夹"})," 中找到。"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h2,{id:"提交变更",children:["提交变更",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#提交变更",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"添加-changeset",children:["添加 Changeset",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加-changeset",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Modern.js 使用 ",(0,a.jsx)(n.a,{href:"https://github.com/changesets/changesets",target:"_blank",rel:"noopener noreferrer",children:"Changesets"})," 来管理版本和 Changelog。"]}),"\n",(0,a.jsxs)(n.p,{children:["如果你修改了一些包，则需要为本次变更添加一个新的变更集。请运行 ",(0,a.jsx)(n.code,{children:"change"})," 命令来选择更改的包并添加 changeset 信息。"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:"pnpm run change\n"})})]})}),"\n",(0,a.jsxs)(n.h3,{id:"提交你的变更",children:["提交你的变更",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#提交你的变更",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["提交变更到 fork 后的仓库，并 ",(0,a.jsx)(n.a,{href:"https://help.github.com/articles/creating-a-pull-request/",target:"_blank",rel:"noopener noreferrer",children:"创建 pull request"}),"。"]}),"\n",(0,a.jsxs)(n.h3,{id:"pr-标题格式",children:["PR 标题格式",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pr-标题格式",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"PR 标题的格式遵循 Conventional Commits。"}),"\n",(0,a.jsx)(n.p,{children:"一个例子："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{children:"feat(plugin-swc): 添加 `xxx` 配置项\n^ ^ ^\n| | |__ 主题\n| |_______ 范围\n|____________ 类型\n"})})]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h2,{id:"发布",children:["发布",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#发布",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Modern.js 使用 ",(0,a.jsx)(n.a,{href:"https://github.com/changesets/changesets",target:"_blank",rel:"noopener noreferrer",children:"Changesets"})," 来管理版本和 changelog。"]}),"\n",(0,a.jsx)(n.p,{children:"仓库的维护者可以将所有包的新版本发布到 npm。"}),"\n",(0,a.jsx)(n.p,{children:"以下是发布的步骤（我们通常使用 CI 进行发布，并避免在本地发布 npm 包）："}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["拉取 ",(0,a.jsx)(n.code,{children:"main"})," 分支的最新代码。"]}),"\n",(0,a.jsx)(n.li,{children:"安装依赖："}),"\n"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:"pnpm i\n"})})]})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"构建 packages："}),"\n"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:"pnpm prepare\n"})})]})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"升级版本："}),"\n"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:"pnpm run bump\n"})})]})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"提交版本变更。"}),"\n"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-sh",children:'git add .\ngit commit -m "Release va.b.c"\n'})})]})})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(i,e)})):i(e)}}}]);