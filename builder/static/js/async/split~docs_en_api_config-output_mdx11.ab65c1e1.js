(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_en_api_config-output_mdx11"],{36706:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return l},toc:function(){return d},default:function(){return a}});var i=s("12151"),t=s("23169"),c={},l="",d=[{text:"Example",depth:3,id:"example"},{text:"Using RegExp",depth:3,id:"using-regexp"}];function r(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",a:"a",h3:"h3",button:"button",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bundler:"})," ",(0,i.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether to inline output scripts files (.js files) into HTML with ",(0,i.jsx)(n.code,{children:"<script>"})," tags in production mode."]}),"\n",(0,i.jsx)(n.p,{children:"Note that, with this option on, the scripts files will no longer be written in dist directory, they will only exist inside the HTML file instead."}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["When using convention-based routing, you need to set ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/en/configure/app/output/splitRouteChunks.html",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n.code,{children:"output.splitRouteChunks"})})," to false if this option is turned on.\n"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"By default, we have following output files:"}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/css/style.css\ndist/static/js/main.js\n"})})]})}),"\n",(0,i.jsxs)(n.p,{children:["After turn on the ",(0,i.jsx)(n.code,{children:"output.enableInlineScripts"})," option:"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableInlineScripts: true,\n  },\n};\n"})})]})}),"\n",(0,i.jsx)(n.p,{children:"The output files will become:"}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/css/style.css\n"})})]})}),"\n",(0,i.jsxs)(n.p,{children:["And ",(0,i.jsx)(n.code,{children:"dist/static/js/main.js"})," will be inlined in ",(0,i.jsx)(n.code,{children:"index.html"}),":"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-html",children:"<html>\n  <body>\n    <script>\n      // content of dist/static/js/main.js\n    </script>\n  </body>\n</html>\n"})})]})}),"\n",(0,i.jsxs)(n.h3,{id:"using-regexp",children:["Using RegExp",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-regexp",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["If you need to inline part of the JS files, you can set ",(0,i.jsx)(n.code,{children:"enableInlineScripts"})," to a regular expression that matches the URL of the JS file that needs to be inlined."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, to inline ",(0,i.jsx)(n.code,{children:"main.js"})," into HTML, you can add the following configuration:"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableInlineScripts: /\\/main\\.\\w+\\.js$/,\n  },\n};\n"})})]})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["The production filename will contains a hash by default, such as ",(0,i.jsx)(n.code,{children:"/main.18a568e5.js"}),".\n"]})})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(r,e)})):r(e)}}}]);