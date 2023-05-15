(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_inject_mdx"],{94885:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var r=s("9880"),i=s("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"'head' | 'body'| 'true' | false"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"'head'"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["修改构建产物中 ",(0,r.jsx)(n.code,{children:"<script>"})," 标签在 HTML 中的插入位置。"]}),"\n",(0,r.jsx)(n.p,{children:"可以设置为以下值："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"'head'"}),": script 标签会插入在 HTML 的 head 标签内。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"'body'"}),": script 标签会插入在 HTML 的 body 标签尾部。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"true"}),": 最终表现取决于 ",(0,r.jsx)(n.code,{children:"html-webpack-plugin"})," 的 scriptLoading 配置项。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"false"}),": script 标签不插入 HTML 中。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"默认插入位置",children:["默认插入位置",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认插入位置",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"script 标签默认在 head 标签内："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <title></title>\n    <script defer src="/static/js/runtime-main.js"></script>\n    <script defer src="/static/js/main.js"></script>\n    <link href="/static/css/main.css" rel="stylesheet" />\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>\n'})})})}),"\n",(0,r.jsxs)(n.h4,{id:"插入至-body-标签",children:["插入至 body 标签",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#插入至-body-标签",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"添加如下配置，可以将 script 插入至 body 标签："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    inject: 'body',\n  },\n};\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"可以看到 script 标签生成在 body 标签尾部："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <title></title>\n    <link href="/static/css/main.css" rel="stylesheet" />\n  </head>\n  <body>\n    <div id="root"></div>\n    <script defer src="/static/js/runtime-main.js"></script>\n    <script defer src="/static/js/main.js"></script>\n  </body>\n</html>\n'})})})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},61443:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return t},title:function(){return d},toc:function(){return l},default:function(){return h}});var r=s("9880"),i=s("23169"),c=s.ir(s("94885")),t={sidebar_label:"inject"},d="html.inject",l=[];function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"htmlinject",children:["html.inject",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlinject",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmlinject",target:"_blank",rel:"noopener noreferrer",children:"html.inject"}),"。\n"]})})]}),"\n","\n",(0,r.jsx)(c.default,{})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);