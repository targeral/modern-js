(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_codesmith_api_git_mdx"],{94712:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});!function(e,i){for(var n in i)Object.defineProperty(e,n,{enumerable:!0,get:i[n]})}(i,{frontmatter:function(){return d},title:function(){return o},toc:function(){return s},default:function(){return c}});var t=n("9880"),r=n("23169"),d={sidebar_position:4},o="@modern-js/codesmith-api-git",s=[{text:"Use",depth:2,id:"use"},{text:"API",depth:2,id:"api"},{text:"isInGitRepo",depth:3,id:"isingitrepo"},{text:"initGitRepo",depth:3,id:"initgitrepo"},{text:"addAndCommit",depth:3,id:"addandcommit"}];function a(e){var i=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.h1,{id:"@modern-js/codesmith-api-git",children:["@modern-js/codesmith-api-git",(0,t.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#@modern-js/codesmith-api-git",children:"#"})]}),"\n",(0,t.jsx)(i.p,{children:"The API encapsulation of git-related operations in the micro-generator provides methods for judging git repository, initialization and commit code."}),"\n",(0,t.jsxs)(i.h2,{id:"use",children:["Use",(0,t.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#use",children:"#"})]}),"\n",(0,t.jsx)(i.div,{className:"language-",children:(0,t.jsx)(i.div,{className:"modern-code-content",children:(0,t.jsx)(i.pre,{className:"code",children:(0,t.jsx)(i.code,{className:"language-ts",children:"import { GitAPI } from '@modern-js/codesmith-api-git';\n\nexport default async (context: GeneratorContext, generator: GeneratorCore) => {\n  const gitApi = new GitAPI(generatorCore, generatorContext);\n  await gitApi.initGitRepo();\n};\n"})})})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Create GitAPI instance, the parameter is the generator of the microgenerator function parameter, please see the composition of the microgenerator project for details."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Just call the API on its example."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.h2,{id:"api",children:["API",(0,t.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,t.jsxs)(i.h3,{id:"isingitrepo",children:["isInGitRepo",(0,t.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#isingitrepo",children:"#"})]}),"\n",(0,t.jsx)(i.p,{children:"Whether the current directory is a git repository."}),"\n",(0,t.jsx)(i.p,{children:"Parameter:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["cwd?: ",(0,t.jsx)(i.code,{children:"string"}),". The execution directory of the git command, the default is microgenerator ",(0,t.jsx)(i.code,{children:"outputPath"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.h3,{id:"initgitrepo",children:["initGitRepo",(0,t.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#initgitrepo",children:"#"})]}),"\n",(0,t.jsxs)(i.p,{children:["The initialization is the git repository. The default branch name for init can be configured via ",(0,t.jsx)(i.code,{children:"defaultBranch"})," in the generator config."]}),"\n",(0,t.jsx)(i.p,{children:"Parameter:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["cwd?: ",(0,t.jsx)(i.code,{children:"string"}),". The execution directory of the git command, the default is microgenerator ",(0,t.jsx)(i.code,{children:"outputPath"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["force?: ",(0,t.jsx)(i.code,{children:"boolean"}),". Use this parameter to force git init when the current directory is already a git repository."]}),"\n"]}),"\n",(0,t.jsxs)(i.h3,{id:"addandcommit",children:["addAndCommit",(0,t.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#addandcommit",children:"#"})]}),"\n",(0,t.jsxs)(i.p,{children:["Execute ",(0,t.jsx)(i.code,{children:"git add ."})," and ",(0,t.jsx)(i.code,{children:"git commit"})," commit the current changes."]}),"\n",(0,t.jsx)(i.p,{children:"Parameter:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["commitMessage: ",(0,t.jsx)(i.code,{children:"string"}),". Commit information."]}),"\n",(0,t.jsxs)(i.li,{children:["cwd?: ",(0,t.jsx)(i.code,{children:"string"}),". The execution directory of the git command, the default is microgenerator ",(0,t.jsx)(i.code,{children:"outputPath"}),"."]}),"\n"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return i?(0,t.jsx)(i,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}}}]);