(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_security_nonce_mdx"],{3161:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var c=r("9880"),s=r("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h4:"h4",a:"a",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"type Nonce = string;\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"为 HTML 所引入的脚本资源添加随机属性值 nonce，使浏览器在解析到带有匹配 nonce 值的内联脚本时，能判断该脚本是否能执行。"}),"\n",(0,c.jsxs)(n.h4,{id:"nonce-介绍",children:["nonce 介绍",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#nonce-介绍",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["nonce 机制在 Content Security Policy（CSP，内容安全策略）中起到关键作用，用于提升网页安全性。其允许开发者在 CSP 中为内联 ",(0,c.jsx)(n.code,{children:"<script>"})," 标签定义一个唯一且随机的字符串值，即 ",(0,c.jsx)(n.code,{children:"nonce"}),"。"]}),"\n",(0,c.jsxs)(n.p,{children:["浏览器在解析到带有匹配 ",(0,c.jsx)(n.code,{children:"nonce"})," 值的内联脚本时，会允许其执行或应用，否则 CSP 将阻止其运行。这样可以有效地防止潜在的跨站脚本（XSS）攻击。值得注意的是，每次页面加载时，都应该生成新的 nonce 值。"]}),"\n",(0,c.jsxs)(n.p,{children:["关于 nonce 的更多内容，可以查看 ",(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce",target:"_blank",rel:"noopener noreferrer",children:"nonce - MDN"}),"。"]}),"\n",(0,c.jsxs)(n.h3,{id:"示例",children:["示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["默认情况下，不会开启 ",(0,c.jsx)(n.code,{children:"nonce"}),"，你可以按照需求定义该值："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  security: {\n    nonce: 'my-project-nonce',\n  },\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"通常，我们可以在项目中可以定义一个固定值，并在 Nginx、Web Server、网关等响应下游的服务器上，统一替换成随机值即可。"})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(i,e)})):i(e)}},69925:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return o},toc:function(){return d},default:function(){return a}});var c=r("9880"),s=r("23169"),i=r.ir(r("3161")),t={sidebar_label:"nonce"},o="security.nonce",d=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"securitynonce",children:["security.nonce",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitynonce",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-security.html#securitynonce",target:"_blank",rel:"noopener noreferrer",children:"security.nonce"}),"。\n"]})})]}),"\n","\n",(0,c.jsx)(i.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}}}]);