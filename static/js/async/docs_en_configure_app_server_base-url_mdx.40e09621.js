(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_server_base-url_mdx"],{5333:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return l},default:function(){return c}});var s=r("9880"),t=r("23169"),a={sidebar_label:"baseUrl"},i="server.baseUrl",l=[];function o(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"serverbaseurl",children:["server.baseUrl",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverbaseurl",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string | string[]"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Uniformly set the server-level routing prefix (often used in the case of shared domain names to distinguish traffic)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    // All generated routes are automatically prefixed with `/base`\n    // Path to the generated server-side route file: dist/route.json\n    baseUrl: '/base'\n\n    // Multiple baseUrl\n    baseUrl: ['/base-new', '/base-old']\n  }\n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After ",(0,s.jsx)(n.code,{children:"dev"}),", you can see that the routed access will be prefixed accordingly:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"App running at:\n\n  > Local:    http://localhost:8080/base/\n  > Network:  http://192.168.0.1:8080/base/\n"})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);