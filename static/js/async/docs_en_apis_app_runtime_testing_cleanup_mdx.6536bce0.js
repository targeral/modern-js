(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_apis_app_runtime_testing_cleanup_mdx"],{93486:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return a},toc:function(){return l},title:function(){return t},default:function(){return c}});var r=n("12151"),i=n("21447");let a={title:"cleanup",sidebar_position:3},l=[{id:"usage",text:"Usage",depth:2},{id:"function-signature",text:"Function Signature",depth:2},{id:"example",text:"Example",depth:2}],t="cleanup";function o(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"cleanup",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#cleanup",children:"#"}),"cleanup"]}),"\n",(0,r.jsx)(s.p,{children:"Used to uninstall all currently rendered components."}),"\n",(0,r.jsxs)(s.h2,{id:"usage",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"}),"Usage"]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { cleanup } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modenr-js/runtime/testing'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"function-signature",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"}),"Function Signature"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"function cleanup(): void"})}),"\n",(0,r.jsxs)(s.h2,{id:"example",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive info",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\nNote that if you are using a testing framework that supports afterEach and it is injected into your testing environment (such as mocha, Jest, and Jasmine), ",(0,r.jsxs)(s.strong,{children:["will execute ",(0,r.jsx)(s.code,{children:"cleanup"})]})," in the afterEach hook by default. Otherwise, you will need to do manual cleanup after each test."]})})]}),"\n",(0,r.jsxs)(s.p,{children:["For example, if you use the ",(0,r.jsx)(s.a,{href:"https://github.com/avajs/ava",target:"_blank",rel:"noopener noreferrer",children:"ava"})," test framework, then you need to use the ",(0,r.jsx)(s.code,{children:"test.after Each"})," hook like this."]}),"\n",(0,r.jsxs)(s.div,{className:"language-tsx",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { cleanup"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" render } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/testing'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" test "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ava'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"test"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".afterEach"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(cleanup);"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"test"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'renders into document'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"render"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />);"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// ... more tests ..."})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);