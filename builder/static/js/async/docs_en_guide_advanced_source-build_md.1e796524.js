(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_advanced_source-build_md"],{92854:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return i}});var t,r=n("15169"),o=n("43932"),d=n("9880"),c=n("23169");function a(e){var s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",ol:"ol",li:"li"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h1,{id:"source-code-build-mode",children:["Source-code Build Mode",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#source-code-build-mode",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"The source-code build mode allows developers to use dependent subproject source code in Monorepo. This allows HMR (Hot Module Replacement) to be performed without starting a subproject build task."}),"\n",(0,d.jsxs)(s.h2,{id:"enable-source-code-build",children:["Enable source-code build",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-source-code-build",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["You can enable this feature by setting ",(0,d.jsx)(s.a,{href:"/api/config-experiments#experimentssourcebuild",children:(0,d.jsx)(s.code,{children:"experiments.sourceBuild"})})," to ",(0,d.jsx)(s.code,{children:"true"}),"."]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-ts",children:"export default {\n    experiments: {\n        sourceBuild: true,\n    },\n};\n"})}),"\n",(0,d.jsxs)(s.h2,{id:"specify-the-sub-projects-that-need-to-read-the-source-code",children:["Specify the sub-projects that need to read the source code",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#specify-the-sub-projects-that-need-to-read-the-source-code",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["When you need to read the source code of a subproject, you need to make sure that the package.json of the subproject contains a ",(0,d.jsx)(s.code,{children:"source"})," field, and that the path to the file corresponding to that field is the path to the source code file."]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "name": "lib",\n  "main": "./dist/index.js",\n  "source": "./src/index.ts"\n}\n'})}),"\n",(0,d.jsxs)(s.p,{children:["If the ",(0,d.jsx)(s.a,{href:"https://nodejs.org/api/packages.html#package-entry-points",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)(s.code,{children:"exports"})})," configuration exists for the subproject, then you need to add the ",(0,d.jsx)(s.code,{children:"source"})," field to exports at the same time."]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "name": "lib",\n  "main": "./dist/index.js",\n  "source": "./src/index.ts",\n  "exports": {\n    ".": {\n      "source": "./src/index.ts",\n      "default": "./dist/index.js"\n    },\n    "./features": {\n      "source": "./src/features/index.ts",\n      "default": "./dist/features/index.js"\n    }\n  }\n}\n'})}),"\n",(0,d.jsxs)(s.h2,{id:"caveat",children:["Caveat",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#caveat",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"There are a few things to keep in mind when using the source-code build mode:"}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsx)(s.li,{children:"Ensure that all configurations or features used by sub-projects need to be set in the Builder's configuration file."}),"\n",(0,d.jsx)(s.li,{children:"Ensure that the current project uses the same code syntax as the subprojects, such as the syntax of the decorators."}),"\n",(0,d.jsxs)(s.li,{children:["There may be some limitations in the source build. When you encounter problems, you can remove the ",(0,d.jsx)(s.code,{children:"source"})," field in the package.json of the subproject and use the build product of the subproject for debugging."]}),"\n"]})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fen%2Fguide%2Fadvanced%2Fsource-build.md"]={toc:[{text:"Enable source-code build",id:"enable-source-code-build",depth:2},{text:"Specify the sub-projects that need to read the source code",id:"specify-the-sub-projects-that-need-to-read-the-source-code",depth:2},{text:"Caveat",id:"caveat",depth:2}],title:"Source-code Build Mode",frontmatter:{}};var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return s?(0,d.jsx)(s,(0,o._)((0,r._)({},e),{children:(0,d.jsx)(a,(0,r._)({},e))})):a(e)}}}]);