(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_html_inject_mdx"],{74422:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var i=t("9880"),s=t("23169");function r(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"'head' | 'body' | 'true' | false"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"'head'"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Set the inject position of the ",(0,i.jsx)(n.code,{children:"<script>"})," tag."]}),"\n",(0,i.jsx)(n.p,{children:"Can be set to the following values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"'head'"}),": The script tag will be inject inside the head tag."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"'body'"}),": The script tag is inject at the end of the body tag."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"true"}),": The result depends on the scriptLoading config of ",(0,i.jsx)(n.code,{children:"html-webpack-plugin"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"false"}),": script tags will not be injected."]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"default-inject-position",children:["Default inject position",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-inject-position",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The script tag is inside the head tag by default:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <title></title>\n    <script defer src="/static/js/runtime-main.js"></script>\n    <script defer src="/static/js/main.js"></script>\n    <link href="/static/css/main.css" rel="stylesheet" />\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>\n'})}),"\n",(0,i.jsxs)(n.h4,{id:"inject-into-body",children:["Inject into body",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#inject-into-body",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Add the following config to inject script into the body tag:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    inject: 'body',\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"You will see that the script tag is generated at the end of the body tag:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <title></title>\n    <link href="/static/css/main.css" rel="stylesheet" />\n  </head>\n  <body>\n    <div id="root"></div>\n    <script defer src="/static/js/runtime-main.js"></script>\n    <script defer src="/static/js/main.js"></script>\n  </body>\n</html>\n'})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(r,e)})):r(e)}},75242:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return l},default:function(){return o}});var i=t("9880"),s=t("23169"),r=t.ir(t("74422")),c={sidebar_label:"inject"},d="html.inject",l=[];function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"htmlinject",children:["html.inject",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlinject",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmlinject",target:"_blank",rel:"noopener noreferrer",children:"html.inject"}),".\n"]})})]}),"\n","\n",(0,i.jsx)(r.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);