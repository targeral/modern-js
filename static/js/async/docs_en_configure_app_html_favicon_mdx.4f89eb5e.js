(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_html_favicon_mdx"],{4113:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return s}});var t=r("9880"),i=r("23169");function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Set the favicon icon path for all pages, can be set as:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a URL."}),"\n",(0,t.jsx)(n.li,{children:"an absolute path to the file."}),"\n",(0,t.jsx)(n.li,{children:"a relative path relative to the project root directory."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["After config this option, the favicon will be automatically copied to the dist directory during the compilation, and the corresponding ",(0,t.jsx)(n.code,{children:"link"})," tag will be added to the HTML."]}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Set as a relative path:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    favicon: './src/assets/icon.png',\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Set to an absolute path:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  html: {\n    favicon: path.resolve(__dirname, './src/assets/icon.png'),\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Set to a URL:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  html: {\n    favicon: 'https://foo.com/favicon.ico',\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"After recompiling, the following tags are automatically generated in the HTML:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<link rel="icon" href="/favicon.ico" />\n'})})]})}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},14287:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return c},toc:function(){return o},default:function(){return d}});var t=r("9880"),i=r("23169"),a=r.ir(r("4113")),s={sidebar_label:"favicon"},c="html.favicon",o=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"htmlfavicon",children:["html.favicon",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlfavicon",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmlfavicon",target:"_blank",rel:"noopener noreferrer",children:"html.favicon"}),".\n"]})})]}),"\n","\n",(0,t.jsx)(a.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}}}]);