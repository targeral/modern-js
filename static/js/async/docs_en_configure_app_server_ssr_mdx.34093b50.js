(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_server_ssr_mdx"],{99340:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return t}});var s,i=r("15169"),c=r("43932"),l=r("9880"),a=r("23169");function d(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",pre:"pre",ol:"ol"},(0,a.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"serverssr",children:["server.ssr",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverssr",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type:"})," ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Enalbe SSR configuration."}),"\n",(0,l.jsxs)(n.h3,{id:"boolean-type",children:["Boolean Type",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["When the value type is ",(0,l.jsx)(n.code,{children:"boolean"}),", it indicates whether to enable SSR deployment mode. The default is ",(0,l.jsx)(n.code,{children:"false"})," to disable it."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    ssr: true,\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["When the value type is ",(0,l.jsx)(n.code,{children:"Object"}),", the following properties can be configured:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"mode"}),": ",(0,l.jsx)(n.code,{children:"string = 'string'"}),", which defaults to using ",(0,l.jsx)(n.code,{children:"renderToString"})," for rendering. Configure ",(0,l.jsx)(n.code,{children:"stream"})," to enable streaming rendering."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"forceCSR"}),": ",(0,l.jsx)(n.code,{children:"boolean = false"}),", which is off by default for forcing CSR rendering. Configure ",(0,l.jsx)(n.code,{children:"true"})," to force CSR by adding ",(0,l.jsx)(n.code,{children:"?csr=true"})," or adding ",(0,l.jsx)(n.code,{children:"x-modern-ssr-fallback"})," header when accessing the page."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"inlineScript"}),": ",(0,l.jsx)(n.code,{children:"boolean = true"}),", by default, SSR data is injected into HTML as inline scripts and assigned directly to global variables. Configure ",(0,l.jsx)(n.code,{children:"false"})," to distribute JSON instead of assigning to global variables."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    ssr: {\n      forceCSR: true,\n      mode: 'stream',\n      inlineScript: false,\n    },\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"active-fallback",children:["Active Fallback",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#active-fallback",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"In a production environment, there are scenarios where it is necessary to actively fallback an SSR project to CSR. Examples include"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"When the SSR fails, a fallback to the CSR is required to ensure product availability."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"When the SSR is working normally, but there are rendering failures during csr, debugging is required."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"When the SSR server is under heavy load, it may be necessary to fallback some traffic directly to the CSR to avoid service downtime."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["By configuring ",(0,l.jsx)(n.code,{children:"server.ssr.forceCSR"})," to ",(0,l.jsx)(n.code,{children:"true"})," in the project, you can control this behavior through query strings or request headers."]}),"\n",(0,l.jsx)(n.p,{children:"For example, in a custom Web Server middleware, you can actively fallback when traffic exceeds a certain threshold:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",meta:'title="server/index.ts"',children:"export const middleware = (ctx, next) => {\n  const { req, res } = ctx;\n  if (condition) {\n    req.headers['x-modern-ssr-fallback'] = '1';\n  }\n\n  next();\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fserver%2Fssr.mdx"]={toc:[{text:"Boolean Type",id:"boolean-type",depth:3},{text:"Object Type",id:"object-type",depth:3},{text:"Active Fallback",id:"active-fallback",depth:3}],title:"server.ssr",frontmatter:{sidebar_label:"ssr"}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,c._)((0,i._)({},e),{children:(0,l.jsx)(d,(0,i._)({},e))})):d(e)}}}]);