(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_server_base-url_mdx"],{40626:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var s,a=r("15169"),t=r("43932"),l=r("9880"),i=r("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"serverbaseurl",children:["server.baseUrl",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverbaseurl",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type:"})," ",(0,l.jsx)(n.code,{children:"string | string[]"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Uniformly set the prefix of server-side routes (commonly used in situations where multiple applications share the same domain name to distinguish traffic)."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    // All generated routes will automatically have the prefix `/base`\n    // Generated server-side route file path: dist/route.json\n    baseUrl: '/base'\n\n    // Multiple baseUrl\n    baseUrl: ['/base-new', '/base-old']\n  }\n})\n"})}),"\n",(0,l.jsxs)(n.p,{children:["After running ",(0,l.jsx)(n.code,{children:"dev"}),", you will see that the route access will have the corresponding prefix added:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"App running at:\n\n  > Local:    http://localhost:8080/base/\n  > Network:  http://192.168.0.1:8080/base/\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/en/configure/app/server/base-url.mdx"]={toc:[],title:"server.baseUrl",frontmatter:{sidebar_label:"baseUrl"}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,t._(a._({},e),{children:(0,l.jsx)(o,a._({},e))})):o(e)}}}]);