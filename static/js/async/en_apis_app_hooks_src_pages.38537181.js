"use strict";(self.webpackChunk_modern_js_main_doc_website=self.webpackChunk_modern_js_main_doc_website||[]).push([[43459],{25343:function(s,e,n){n.r(e),n.d(e,{frontmatter:function(){return r},title:function(){return o},toc:function(){return i}});var l=n(97458);const r={title:"pages/",sidebar_position:3},i=[{id:"dynamic-routing",text:"Dynamic Routing",depth:3},{id:"global-layout",text:"Global Layout",depth:3},{id:"partial-layout",text:"Partial Layout",depth:3},{id:"404-\u8def\u7531",text:"404 \u8def\u7531",depth:3}],o="pages/";function c(s){const e=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",span:"span",ul:"ul",li:"li",h3:"h3"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"pages",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#pages",children:"#"}),"pages/"]}),"\n",(0,l.jsx)(e.p,{children:"Entry identifier if the application want uses file system-based routing."}),"\n",(0,l.jsxs)(e.p,{children:["When the entry is the ",(0,l.jsx)(e.strong,{children:"Pages entry"})," type, the files in the ",(0,l.jsx)(e.code,{children:"pages/"})," directory will be analyzed to client side routing."]}),"\n",(0,l.jsx)(e.p,{children:"For example, the following directory:"}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"\u2514\u2500\u2500 src"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    \u2514\u2500\u2500 pages"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        \u251c\u2500\u2500 about"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        \u2502   \u2514\u2500\u2500 index.jsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        \u251c\u2500\u2500 index.jsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        \u2514\u2500\u2500 info.jsx"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"The generated route is configured as:"}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"["})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  { path: "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", component: "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pages/index.jsx'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" },"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  { path: "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/info'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" component: "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pages/info.jsx'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" },"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  { path: "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/about'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", component: "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pages/about/index.jsx'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"Files match the following conditions will not be treated as routing files:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["suffix is not ",(0,l.jsx)(e.code,{children:".(j|t)sx?"}),"."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:".d.ts"})," type definition file."]}),"\n",(0,l.jsxs)(e.li,{children:["test file suffix like ",(0,l.jsx)(e.code,{children:".(test|spec|e2e).(j|t)sx?"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\nit is recommended to write only the routing files in the ",(0,l.jsx)(e.code,{children:"pages/"}),", and write the business logic to the independent features directory outside the ",(0,l.jsx)(e.code,{children:"pages/"}),". In this way, most of the files in the pages directory will be routing files, and there is no need for additional filtering rules."]})})]}),"\n",(0,l.jsxs)(e.h3,{id:"dynamic-routing",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-routing",children:"#"}),"Dynamic Routing"]}),"\n",(0,l.jsxs)(e.p,{children:["Directories or files wrapped with ",(0,l.jsx)(e.code,{children:"[]"})," are considered dynamic routing."]}),"\n",(0,l.jsx)(e.p,{children:"For example the following directory structure:"}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"\u2514\u2500\u2500 src"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    \u2514\u2500\u2500 pages"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        \u251c\u2500\u2500 [post]"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        \u2502   \u251c\u2500\u2500 detail.jsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        \u2502   \u2514\u2500\u2500 index.js"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        \u251c\u2500\u2500 users"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        \u2502   \u2514\u2500\u2500 [id].jsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        \u251c\u2500\u2500 index.jsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        \u2514\u2500\u2500 info.jsx"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"The generated route is configured as:"}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"["})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  { path"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" component"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pages/index.jsx'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  { path"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/info'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" component"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pages/info.jsx'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  { path"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/:post/'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" component"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pages/[post]/index.js'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  { path"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/:post/detail'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" components: "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pages/[post]/detail.jsx'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  { path"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/users/:id'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" components"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pages/users/[id].jsx'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["Basis dynamic routing, it supports adding special routing suffixes ",(0,l.jsx)(e.code,{children:"(*\u3001?\u3001+)"}),"."]}),"\n",(0,l.jsxs)(e.p,{children:["For example: ",(0,l.jsx)(e.code,{children:"src/pages/users/[id]*.tsx"})," generate route ",(0,l.jsx)(e.code,{children:"/users/:id*"})]}),"\n",(0,l.jsxs)(e.h3,{id:"global-layout",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#global-layout",children:"#"}),"Global Layout"]}),"\n",(0,l.jsxs)(e.p,{children:["When the entire App needs a global ",(0,l.jsx)(e.code,{children:"layout"}),", it can be achieved through ",(0,l.jsx)(e.code,{children:"pages/_app.tsx"}),", which as follows:"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" React "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" UserLayout "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'xxxx'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" const "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ({Component"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pageProps}"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{ Component"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"React"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"ComponentType"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}) "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"UserLayout"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Component"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pageProps} />"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"UserLayout"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["The above ",(0,l.jsx)(e.code,{children:"Component"})," is the component to which the route is accessed."]}),"\n",(0,l.jsx)(e.p,{children:"For example the following directory structure:"}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"\u2514\u2500\u2500 pages"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    \u251c\u2500\u2500 a"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    \u2502   \u251c\u2500\u2500 b"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    \u2502   \u2502   \u2514\u2500\u2500 index.js"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    \u2502   \u2514\u2500\u2500 index.js"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    \u2514\u2500\u2500 index.js"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["access ",(0,l.jsx)(e.code,{children:"/"}),", the ",(0,l.jsx)(e.code,{children:"Component"})," is ",(0,l.jsx)(e.code,{children:"pages/index.js"}),"."]}),"\n",(0,l.jsxs)(e.li,{children:["access ",(0,l.jsx)(e.code,{children:"/a"}),", the ",(0,l.jsx)(e.code,{children:"Component"})," is ",(0,l.jsx)(e.code,{children:"pages/a/index.js"}),"."]}),"\n",(0,l.jsxs)(e.li,{children:["access ",(0,l.jsx)(e.code,{children:"/a/b"}),", the ",(0,l.jsx)(e.code,{children:"Component"})," is ",(0,l.jsx)(e.code,{children:"pages/a/b/index.js"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"Advantages"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"preserve the state of the global layout when the page changes."}),"\n",(0,l.jsx)(e.li,{children:"add global css."}),"\n",(0,l.jsx)(e.li,{children:"handle ComponentDidCatch error"}),"\n",(0,l.jsxs)(e.li,{children:["use ",(0,l.jsx)(e.a,{href:"/en/apis/app/runtime/app/define-config.html",children:"defineConfig"})," dynamic configuration runtime."]}),"\n"]})})]}),"\n",(0,l.jsxs)(e.h3,{id:"partial-layout",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#partial-layout",children:"#"}),"Partial Layout"]}),"\n",(0,l.jsx)(e.p,{children:"When developing an App, where sub routes under the same route may share the layout."}),"\n",(0,l.jsxs)(e.p,{children:["For this scene, Modern.js convention, when there is a ",(0,l.jsx)(e.code,{children:"_layout.js"})," in the directory, the routes can shared this layout."]}),"\n",(0,l.jsx)(e.p,{children:"For example the following directory structure:"}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"\u2514\u2500\u2500 pages"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    \u251c\u2500\u2500 a"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    \u2502   \u251c\u2500\u2500 b"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    \u2502   \u2502   \u2514\u2500\u2500 index.js"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    \u2502   \u251c\u2500\u2500 _layout.js"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    \u2502   \u2514\u2500\u2500 index.js"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    \u2514\u2500\u2500 index.js"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:"modern-code-title",children:"pages/a/_layout.js"}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" React "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"ALayout"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ({ Component"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pageProps }) "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Component"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pageProps} />;"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ALayout;"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"The Component props is the specific route, for example"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["access ",(0,l.jsx)(e.code,{children:"/a"}),", the ",(0,l.jsx)(e.code,{children:"Component"})," is ",(0,l.jsx)(e.code,{children:"pages/a/index.js"}),"."]}),"\n",(0,l.jsxs)(e.li,{children:["\u8bbf\u95ee ",(0,l.jsx)(e.code,{children:"/a/b"}),", the ",(0,l.jsx)(e.code,{children:"Component"})," is ",(0,l.jsx)(e.code,{children:"pages/a/b/index.js"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["In this way, you can use ",(0,l.jsx)(e.code,{children:"pages/a/_layout.js"})," to display the routing common layout in the ",(0,l.jsx)(e.code,{children:"a"})," directory."]}),"\n",(0,l.jsxs)(e.h3,{id:"404-\u8def\u7531",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#404-\u8def\u7531",children:"#"}),"404 \u8def\u7531"]}),"\n",(0,l.jsxs)(e.p,{children:["The convention ",(0,l.jsx)(e.code,{children:"pages/404.[tj]sx"})," is the default 404 route."]}),"\n",(0,l.jsx)(e.p,{children:"For example the following directory structure:"}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"\u2514\u2500\u2500 src"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    \u2514\u2500\u2500 pages"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        \u251c\u2500\u2500 user.js"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        \u251c\u2500\u2500 home.js"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        \u251c\u2500\u2500 404.js"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"the generated route is configured is as:"}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"["})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { path: "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/user'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", component: "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./pages/user.js'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { path: "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/home'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", component: "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./pages/home.js'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" },"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { path: "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'*'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", component: "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./pages/404.js'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["All unmatched routes will match to ",(0,l.jsx)(e.code,{children:"pages/404.[tj]s"}),"."]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(c,s)})):c(s)}}}]);