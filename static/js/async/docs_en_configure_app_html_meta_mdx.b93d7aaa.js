(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_html_meta_mdx"],{32004:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r}});var s=t("9880"),a=t("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",pre:"pre",h3:"h3"},(0,a.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Record<string, false | string | Record<string, string | boolean>>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Configure the ",(0,s.jsx)(n.code,{children:"<meta>"})," tag of the HTML."]}),"\n",(0,s.jsxs)(n.h4,{id:"string-type",children:["String Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"value"})," of a ",(0,s.jsx)(n.code,{children:"meta"})," object is a string, the ",(0,s.jsx)(n.code,{children:"key"})," of the object is automatically mapped to ",(0,s.jsx)(n.code,{children:"name"}),", and the ",(0,s.jsx)(n.code,{children:"value"})," is mapped to ",(0,s.jsx)(n.code,{children:"content"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"For example to set description:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    meta: {\n      description: 'a description of the page',\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["The generated ",(0,s.jsx)(n.code,{children:"meta"})," tag in HTML is:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-html",children:'<meta name="description" content="a description of the page" />\n'})})})}),"\n",(0,s.jsxs)(n.h4,{id:"object-type",children:["Object Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"value"})," of a ",(0,s.jsx)(n.code,{children:"meta"})," object is an object, the ",(0,s.jsx)(n.code,{children:"key: value"})," of the object is mapped to the attribute of the ",(0,s.jsx)(n.code,{children:"meta"})," tag."]}),"\n",(0,s.jsxs)(n.p,{children:["In this case, the ",(0,s.jsx)(n.code,{children:"name"})," and ",(0,s.jsx)(n.code,{children:"content"})," properties will not be set by default."]}),"\n",(0,s.jsxs)(n.p,{children:["For example to set ",(0,s.jsx)(n.code,{children:"http-equiv"}),":"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    meta: {\n      'http-equiv': {\n        'http-equiv': 'x-ua-compatible',\n        content: 'ie=edge',\n      },\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"meta"})," tag in HTML is:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-html",children:'<meta http-equiv="x-ua-compatible" content="ie=edge" />\n'})})})}),"\n",(0,s.jsxs)(n.h3,{id:"remove-default-value",children:["Remove Default Value",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#remove-default-value",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Setting the ",(0,s.jsx)(n.code,{children:"value"})," of the ",(0,s.jsx)(n.code,{children:"meta"})," object to ",(0,s.jsx)(n.code,{children:"false"})," and the meta tag will not be generated."]}),"\n",(0,s.jsxs)(n.p,{children:["For example to remove the ",(0,s.jsx)(n.code,{children:"imagemode"}),":"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    meta: {\n      imagemode: false,\n    },\n  },\n};\n"})})})})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},51795:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return r},title:function(){return d},toc:function(){return i},default:function(){return o}});var s=t("9880"),a=t("23169"),c=t.ir(t("32004")),r={sidebar_label:"meta"},d="html.meta",i=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,a.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"htmlmeta",children:["html.meta",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlmeta",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmlmeta",target:"_blank",rel:"noopener noreferrer",children:"html.meta"}),".\n"]})})]}),"\n","\n",(0,s.jsx)(c.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);