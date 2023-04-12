(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_en_api_config-dev_mdx4"],{22454:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return r},title:function(){return c},toc:function(){return a},default:function(){return d}});var t=n("12151"),i=n("23169"),r={},c="",a=[{text:"Boolean Type",depth:4,id:"boolean-type"},{text:"String type",depth:4,id:"string-type"}];function l(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h4:"h4",div:"div",button:"button",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"boolean | string"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default:"})," ",(0,t.jsx)(s.code,{children:"'/'"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Set the URL prefix of static assets in the development environment, similar to the ",(0,t.jsx)(s.a,{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," config of webpack."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"assetPrefix"})," will affect the URLs of most of the static assets, including JavaScript files, CSS files, images, videos, etc. If an incorrect value is specified, you'll receive 404 errors while loading these resources."]}),"\n",(0,t.jsxs)(s.p,{children:["This config is only used in the development environment. In the production environment, please use the ",(0,t.jsx)(s.code,{children:"output.assetPrefix"})," to set the URL prefix."]}),"\n",(0,t.jsxs)(s.h4,{id:"boolean-type",children:["Boolean Type",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["If ",(0,t.jsx)(s.code,{children:"assetPrefix"})," is set to ",(0,t.jsx)(s.code,{children:"true"}),", the URL prefix will be ",(0,t.jsx)(s.code,{children:"//ip:port/"}),":"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: true,\n  },\n};\n"})})]})}),"\n",(0,t.jsx)(s.p,{children:"The script URL will be:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:'<script defer src="//${ip}:8080/static/js/main.js"></script>\n'})})]})}),"\n",(0,t.jsxs)(s.p,{children:["If ",(0,t.jsx)(s.code,{children:"assetPrefix"})," is set to ",(0,t.jsx)(s.code,{children:"false"})," or not set, ",(0,t.jsx)(s.code,{children:"/"})," is used as the default value."]}),"\n",(0,t.jsxs)(s.h4,{id:"string-type",children:["String type",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#string-type",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["When the value of ",(0,t.jsx)(s.code,{children:"assetPrefix"})," is ",(0,t.jsx)(s.code,{children:"string"})," type, the string will be used as the URL prefix:"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: 'http://example.com/assets/',\n  },\n};\n"})})]})}),"\n",(0,t.jsx)(s.p,{children:"The script URL will be:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:'<script defer src="http://example.com/assets/static/js/main.js"></script>\n'})})]})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}}}]);