(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_html_meta-by-entries_mdx"],{45361:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var r=s("9880"),t=s("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Record<string, Meta>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Set different meta tags for different pages."}),"\n",(0,r.jsxs)(n.p,{children:["The usage is same as ",(0,r.jsx)(n.code,{children:"meta"}),', and you can use the "entry name" as the key to set each page individually.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"metaByEntries"})," will overrides the value set in ",(0,r.jsx)(n.code,{children:"meta"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    meta: {\n      description: 'ByteDance',\n    },\n    metaByEntries: {\n      foo: {\n        description: 'TikTok',\n      },\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["After compiling, you can see that the meta of the page ",(0,r.jsx)(n.code,{children:"foo"})," is:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-html",children:'<meta name="description" content="TikTok" />\n'})})})}),"\n",(0,r.jsx)(n.p,{children:"The meta of other pages is:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-html",children:'<meta name="description" content="ByteDance" />\n'})})})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},13350:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return c},toc:function(){return d},default:function(){return o}});var r=s("9880"),t=s("23169"),i=s.ir(s("45361")),a={sidebar_label:"metaByEntries"},c="html.metaByEntries",d=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"htmlmetabyentries",children:["html.metaByEntries",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlmetabyentries",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmlmetabyentries",target:"_blank",rel:"noopener noreferrer",children:"html.metaByEntries"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(i.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);