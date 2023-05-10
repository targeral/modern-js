(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_config_common_mdx"],{73864:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return t},default:function(){return l}});var i=s("9880"),r=s("23169"),c={sidebar_position:1},d="Generator Configuration",t=[{text:"solution",depth:3,id:"solution"},{text:"scenes",depth:3,id:"scenes"},{text:"language",depth:3,id:"language"},{text:"packageManager",depth:3,id:"packagemanager"},{text:"Other configurations",depth:2,id:"other-configurations"},{text:"noNeedInstall",depth:3,id:"noneedinstall"},{text:"noNeedGit",depth:3,id:"noneedgit"},{text:"successInfo",depth:3,id:"successinfo"},{text:"isMonorepoSubProject",depth:3,id:"ismonoreposubproject"},{text:"isTest",depth:3,id:"istest"},{text:"isPublic",depth:3,id:"ispublic"}];function o(e){var n=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",ul:"ul",li:"li",div:"div",code:"code",h2:"h2",strong:"strong"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"generator-configuration",children:["Generator Configuration",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#generator-configuration",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"solution",children:["solution",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#solution",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Engineering solution type (solution), the options are as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Application(mwa)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Module(module)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Monorepo"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:["Solution configuration can only be used in the ",(0,i.jsx)(n.code,{children:"--config"})," parameter of ",(0,i.jsx)(n.code,{children:"@modern-js/create"}),", not by setting the default value in the generator plugin."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h3,{id:"scenes",children:["scenes",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#scenes",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Project scenarios (scenes), when using the generator plugin that creates the project scene type, this value is the key value of the corresponding generator plugin."}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:["scenes configuration can only be used in the ",(0,i.jsx)(n.code,{children:"--config"})," parameter of ",(0,i.jsx)(n.code,{children:"@modern-js/create"}),", not by setting the default value in the generator plugin."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h3,{id:"language",children:["language",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#language",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Development language (language), the options are as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"TS(ts)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"ES6+(js)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"packagemanager",children:["packageManager",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packagemanager",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Package management tool (packageManager), the options are as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"pnpm(pnpm)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Yarn(yarn)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:["In the custom type of the generator plugin to create a project scenario, only the ",(0,i.jsx)(n.code,{children:"packageManager"})," configuration is provided by default."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"other-configurations",children:["Other configurations",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#other-configurations",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"noneedinstall",children:["noNeedInstall",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#noneedinstall",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Whether to skip the dependency installation."}),"\n",(0,i.jsxs)(n.h3,{id:"noneedgit",children:["noNeedGit",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#noneedgit",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Whether to skip git initialization and commit initial commit."}),"\n",(0,i.jsxs)(n.h3,{id:"successinfo",children:["successInfo",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#successinfo",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," Command operation prompts for different project schemes."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Customize prompt information to create project success."}),"\n",(0,i.jsxs)(n.h3,{id:"ismonoreposubproject",children:["isMonorepoSubProject",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ismonoreposubproject",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Whether it is a Monorepo subproject."}),"\n",(0,i.jsxs)(n.h3,{id:"istest",children:["isTest",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#istest",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Works on an Application project to identify whether it is a test project."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"true"}),": create project to ",(0,i.jsx)(n.code,{children:"examples/"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"false"}),": create project to ",(0,i.jsx)(n.code,{children:"apps/"})]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"ispublic",children:["isPublic",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ispublic",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Used in the Module project to identify whether it needs to be published to npm."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"true"}),": create project to ",(0,i.jsx)(n.code,{children:"packages/"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"false"}),": create project to ",(0,i.jsx)(n.code,{children:"features/"})]}),"\n"]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}}}]);