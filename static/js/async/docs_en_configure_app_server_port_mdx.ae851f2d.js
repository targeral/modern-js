(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_server_port_mdx"],{86583:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var t,o=r("15169"),d=r("43932"),s=r("9880"),i=r("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"serverport",children:["server.port",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverport",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"8080"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When running the ",(0,s.jsx)(n.code,{children:"dev"}),", ",(0,s.jsx)(n.code,{children:"start"}),", and ",(0,s.jsx)(n.code,{children:"serve"})," commands, Modern.js will start with ",(0,s.jsx)(n.code,{children:"8080"})," as the default port and automatically increase the port number when the port is occupied. You can use this configuration to modify the port number that the Server starts with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    port: 3000,\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"difference-between-serverport-and-devport",children:["Difference between ",(0,s.jsx)(n.code,{children:"server.port"})," and ",(0,s.jsx)(n.code,{children:"dev.port"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#difference-between-serverport-and-devport",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In most cases, we recommend using ",(0,s.jsx)(n.code,{children:"server.port"})," instead of ",(0,s.jsx)(n.code,{children:"dev.port"})," to set the port number, and the differences between them are as follows:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dev.port"})," only works in the development environment, while ",(0,s.jsx)(n.code,{children:"server.port"})," works in both the development and production environments."]}),"\n",(0,s.jsxs)(n.li,{children:["In the development environment, ",(0,s.jsx)(n.code,{children:"dev.port"})," has a higher priority than ",(0,s.jsx)(n.code,{children:"server.port"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When you set both ",(0,s.jsx)(n.code,{children:"dev.port"})," and ",(0,s.jsx)(n.code,{children:"server.port"}),", ",(0,s.jsx)(n.code,{children:"dev.port"})," will take effect in the development environment, and ",(0,s.jsx)(n.code,{children:"server.port"})," will take effect in the production environment. For example, in the following example, the port number listened to in the development environment is ",(0,s.jsx)(n.code,{children:"3001"}),", and the port number listened to in the production environment is ",(0,s.jsx)(n.code,{children:"3002"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    port: 3001,\n  },\n  server: {\n    port: 3002,\n  },\n});\n"})})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/en/configure/app/server/port.mdx"]={toc:[{text:"Difference between server.port and dev.port",id:"difference-between-serverport-and-devport",depth:3}],title:"server.port",frontmatter:{sidebar_label:"port"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,d._(o._({},e),{children:(0,s.jsx)(c,o._({},e))})):c(e)}}}]);