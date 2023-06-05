(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_hooks_api_lambda_mdx"],{46526:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});!function(e,i){for(var n in i)Object.defineProperty(e,n,{enumerable:!0,get:i[n]})}(i,{frontmatter:function(){return r},title:function(){return t},toc:function(){return l},default:function(){return a}});var s=n("9880"),d=n("23169"),r={title:"lambda/*.[tj]s",sidebar_position:3},t="lambda/*.[tj]s",l=[{text:"Routing File Convention",depth:2,id:"routing-file-convention"},{text:"Default Routing",depth:3,id:"default-routing"},{text:"Nested Routing",depth:3,id:"nested-routing"},{text:"Dynamic Routing",depth:3,id:"dynamic-routing"},{text:"Allow List",depth:3,id:"allow-list"},{text:"Function Definition",depth:2,id:"function-definition"}];function c(e){var i=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h2:"h2",h3:"h3",ul:"ul",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.h1,{id:"lambda/*[tj]s",children:["lambda/*.[tj]s",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#lambda/*[tj]s",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["Files that declare API routes under the ",(0,s.jsx)(i.a,{href:"/guides/advanced-features/bff/type#framework-mode",children:"BFF Framework Mode"}),". Except for ",(0,s.jsx)(i.a,{href:"/apis/app/hooks/api/api#allow-list",children:"convention files"}),", files under the ",(0,s.jsx)(i.code,{children:"lambda/"})," directory will be registered as the routes."]}),"\n",(0,s.jsxs)(i.div,{className:"modern-directive info",children:[(0,s.jsx)(i.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(i.div,{className:"modern-directive-content",children:[(0,s.jsxs)(i.p,{children:["Using the ",(0,s.jsx)(i.code,{children:"api"}),' directory requires enabling the BFF function, and you need to run the new command to enable the "BFF" function under the project.']}),"\n"]})]}),"\n",(0,s.jsxs)(i.div,{className:"modern-directive tip",children:[(0,s.jsx)(i.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsxs)(i.div,{className:"modern-directive-content",children:[(0,s.jsxs)(i.p,{children:["This file supports using ",(0,s.jsx)(i.code,{children:"js"})," or ",(0,s.jsx)(i.code,{children:"ts"})," language, but must export functions using ",(0,s.jsx)(i.code,{children:"esm"})," syntax."]}),"\n"]})]}),"\n",(0,s.jsxs)(i.h2,{id:"routing-file-convention",children:["Routing File Convention",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#routing-file-convention",children:"#"})]}),"\n",(0,s.jsxs)(i.h3,{id:"default-routing",children:["Default Routing",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#default-routing",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["The routing system will map files named ",(0,s.jsx)(i.code,{children:"index"})," to the previous directory."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api/lambda/index.ts"})," -> ",(0,s.jsx)(i.code,{children:"$BASENAME/"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api/lambda/user/index.ts"})," -> ",(0,s.jsx)(i.code,{children:"$BASENAME/user"})]}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"nested-routing",children:["Nested Routing",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#nested-routing",children:"#"})]}),"\n",(0,s.jsx)(i.p,{children:"The routing system also supports parsing nested files. If you create a nested folder structure, the files will still automatically resolve routes in the same way."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api/lambda/hello.ts"})," -> ",(0,s.jsx)(i.code,{children:"$BASENAME/hello"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api/lambda/user/list.ts"})," -> ",(0,s.jsx)(i.code,{children:"$BASENAME/user/list"})]}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"dynamic-routing",children:["Dynamic Routing",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-routing",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["The routing system supports generating dynamic routes through file directories named with ",(0,s.jsx)(i.code,{children:"[]"}),"."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api/lambda/user/[username]/info.ts"})," -> ",(0,s.jsx)(i.code,{children:"$BASENAME/user/:username/info"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api/lambda/user/[username]/delete.ts"})," -> ",(0,s.jsx)(i.code,{children:"$BASENAME/user/:username/delete"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api/lambda/article/[id]/info.ts"})," -> ",(0,s.jsx)(i.code,{children:"$BASENAME/article/:id/info"})]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"$BASENAME"})," can be configured in ",(0,s.jsx)(i.code,{children:"modern.config.js"}),", and the default value is ",(0,s.jsx)(i.code,{children:"/api"}),"."]}),"\n",(0,s.jsxs)(i.h3,{id:"allow-list",children:["Allow List",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#allow-list",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["By default, all files in the ",(0,s.jsx)(i.code,{children:"lambda"})," directory are parsed as BFF function files, but we also set up a whitelist so that these files are not parsed:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Files named starting with ",(0,s.jsx)(i.code,{children:"_"}),". For example: ",(0,s.jsx)(i.code,{children:"_utils.ts"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["All files in a folder named starting with ",(0,s.jsx)(i.code,{children:"_"}),". For example: ",(0,s.jsx)(i.code,{children:"_utils/index.ts"}),", ",(0,s.jsx)(i.code,{children:"_utils/cp.ts"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Test files. For example: ",(0,s.jsx)(i.code,{children:"foo.test.ts"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["TypeScript type files. For example: ",(0,s.jsx)(i.code,{children:"hello.d.ts"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Files under ",(0,s.jsx)(i.code,{children:"node_module"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.h2,{id:"function-definition",children:["Function Definition",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#function-definition",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["Completely consistent with the ",(0,s.jsx)(i.a,{href:"/apis/app/hooks/api/api#function-definition",children:"Function Definition"})," under the function mode."]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return i?(0,s.jsx)(i,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}]);