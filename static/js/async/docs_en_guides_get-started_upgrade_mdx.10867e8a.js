(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_get-started_upgrade_mdx"],{77379:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var d,a=r("15169"),s=r("43932"),o=r("9880"),t=r("23169");function i(e){var n=Object.assign({p:"p",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,o.jsxs)(n.p,{children:["According to the ",(0,o.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern.js/releases",target:"_blank",rel:"noopener noreferrer",children:"Release Note"})," on the official website, developers can also manually upgrade the project to the desired version."]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/en/components/release-note.mdx"]={toc:[],title:"",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,s._(a._({},e),{children:(0,o.jsx)(i,a._({},e))})):i(e)}},90793:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return h}});var d,a=r("15169"),s=r("43932"),o=r("9880"),t=r("23169"),i=r.ir(r("77379"));function c(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",strong:"strong",div:"div",h3:"h3"},(0,t.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"upgrade",children:["Upgrade",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#upgrade",children:"#"})]}),"\n",(0,o.jsxs)(n.h2,{id:"upgrade-with-command",children:["Upgrade with command",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#upgrade-with-command",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Modern.js provides the ",(0,o.jsx)(n.code,{children:"upgrade"})," command to support upgrading the project to the latest version of Modern.js."]}),"\n",(0,o.jsxs)(n.p,{children:["Run ",(0,o.jsx)(n.code,{children:"pnpm run upgrade"})," in the project:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ pnpm run upgrade\n\n> modern upgrade\n\n[INFO] [Project Type]: Web App\n[INFO] [Modern.js Latest Version]: 2.0.0\n[INFO] Upgrade Modern.js package version success!\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can see that the dependencies in the project's ",(0,o.jsx)(n.code,{children:"package.json"})," have been updated to the latest version."]}),"\n",(0,o.jsxs)(n.h2,{id:"upgrade-to-a-specified-version",children:["Upgrade to a specified version",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#upgrade-to-a-specified-version",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["All packages of Modern.js are currently released with a ",(0,o.jsx)(n.strong,{children:"uniform version number"}),"."]}),"\n","\n",(0,o.jsx)(i.default,{}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive tip",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsxs)(n.div,{className:"modern-directive-content",children:[(0,o.jsx)(n.p,{children:"When upgrading, you need to upgrade all packages provided by Modern.js, instead of upgrading a single dependency."}),"\n"]})]}),"\n",(0,o.jsxs)(n.h2,{id:"lock-nested-dependency",children:["Lock nested dependency",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#lock-nested-dependency",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"When a nested dependency of the project has a problem and Modern.js cannot be updated immediately, you can use the package manager to lock the version of the nested dependency."}),"\n",(0,o.jsxs)(n.h3,{id:"pnpm",children:["pnpm",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pnpm",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["For projects using pnpm, add the following configuration to the ",(0,o.jsx)(n.code,{children:"package.json"})," in the ",(0,o.jsx)(n.strong,{children:"root directory"})," of the project, and then run ",(0,o.jsx)(n.code,{children:"pnpm install"})," again:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "pnpm": {\n    "overrides": {\n      "package-name": "^1.0.0"\n    }\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"yarn",children:["Yarn",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#yarn",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["For projects using Yarn, add the following configuration to the ",(0,o.jsx)(n.code,{children:"package.json"})," in the ",(0,o.jsx)(n.strong,{children:"root directory"})," of the project, and then run ",(0,o.jsx)(n.code,{children:"yarn install"})," again:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "resolutions": {\n    "package-name": "^1.0.0"\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"npm",children:["Npm",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["For projects using Npm, add the following configuration to the ",(0,o.jsx)(n.code,{children:"package.json"})," in the ",(0,o.jsx)(n.strong,{children:"root directory"})," of the project, and then run ",(0,o.jsx)(n.code,{children:"npm install"})," again:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "overrides": {\n    "package-name": "^1.0.0"\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive info",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,o.jsxs)(n.div,{className:"modern-directive-content",children:[(0,o.jsxs)(n.p,{children:["For Monorepo repositories, you can only lock dependency versions in the ",(0,o.jsx)(n.code,{children:"package.json"})," in the root directory of the project, and it will affect all packages in the Monorepo."]}),"\n"]})]})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/en/guides/get-started/upgrade.mdx"]={toc:[{text:"Upgrade with command",id:"upgrade-with-command",depth:2},{text:"Upgrade to a specified version",id:"upgrade-to-a-specified-version",depth:2},{text:"Lock nested dependency",id:"lock-nested-dependency",depth:2},{text:"pnpm",id:"pnpm",depth:3},{text:"Yarn",id:"yarn",depth:3},{text:"Npm",id:"npm",depth:3}],title:"Upgrade",frontmatter:{title:"Upgrade",sidebar_position:3}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,s._(a._({},e),{children:(0,o.jsx)(c,a._({},e))})):c(e)}}}]);