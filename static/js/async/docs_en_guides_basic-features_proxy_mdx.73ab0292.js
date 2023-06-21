(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_basic-features_proxy_mdx"],{44149:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return c}});var o,s=n("15169"),t=n("43932"),a=n("9880"),i=n("23169");function d(e){var r=Object.assign({p:"p",code:"code",a:"a",h3:"h3",pre:"pre",img:"img"},(0,i.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["Modern.js provides an out-of-the-box global proxy plugin ",(0,a.jsx)(r.code,{children:"@modern-js/plugin-proxy"}),", which is based on ",(0,a.jsx)(r.a,{href:"https://github.com/avwo/whistle",target:"_blank",rel:"noopener noreferrer",children:"whistle"})," and can be used to view and modify the requests and responses of HTTP/HTTPS, as well as be used as an HTTP proxy server."]}),"\n",(0,a.jsxs)(r.h3,{id:"setting-proxy-rules",children:["Setting Proxy Rules",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#setting-proxy-rules",children:"#"})]}),"\n",(0,a.jsxs)(r.p,{children:["After installing the proxy plugin and configuring the rules, run ",(0,a.jsx)(r.code,{children:"pnpm run dev"}),". Modern.js will automatically enable the proxy server when the development server is started."]}),"\n",(0,a.jsxs)(r.p,{children:["Specific proxy rules can be set via the ",(0,a.jsx)(r.a,{href:"/configure/app/dev/proxy",children:(0,a.jsx)(r.code,{children:"dev.proxy"})})," or the ",(0,a.jsx)(r.code,{children:"config/proxy.js"})," file."]}),"\n",(0,a.jsxs)(r.h3,{id:"proxy-dashboard",children:["Proxy Dashboard",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#proxy-dashboard",children:"#"})]}),"\n",(0,a.jsxs)(r.p,{children:["After installing the proxy plugin and configuring the proxy rules, run the ",(0,a.jsx)(r.code,{children:"pnpm run dev"})," command:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"  App running at:\n\n  Local:    http://localhost:8080/\n  Network:  http://192.168.0.1:8080/\n\nℹ  info      Starting the proxy server.....\n✔  success   Proxy Server start on localhost:8899\n"})}),"\n",(0,a.jsx)(r.p,{children:"You can see that the proxy server has started successfully in the console."}),"\n",(0,a.jsxs)(r.p,{children:["Access ",(0,a.jsx)(r.code,{children:"http://localhost:8899"}),", and you can set the rules through the dashboard."]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/debug/debug-proxy-ui.png",alt:"debug-proxy-ui"})})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/en/components/global-proxy.mdx"]={toc:[{text:"Setting Proxy Rules",id:"setting-proxy-rules",depth:3},{text:"Proxy Dashboard",id:"proxy-dashboard",depth:3}],title:"",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,a.jsx)(r,t._(s._({},e),{children:(0,a.jsx)(d,s._({},e))})):d(e)}},44152:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});var o,s=n("15169"),t=n("43932"),a=n("9880"),i=n("23169"),d=n.ir(n("44149"));function c(e){var r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.h1,{id:"proxy",children:["Proxy",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#proxy",children:"#"})]}),"\n",(0,a.jsxs)(r.h2,{id:"local-proxy",children:["Local Proxy",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#local-proxy",children:"#"})]}),"\n",(0,a.jsxs)(r.p,{children:["Modern.js provides a way to configure the development proxy in ",(0,a.jsx)(r.a,{href:"/configure/app/tools/dev-server",children:(0,a.jsx)(r.code,{children:"tools.devServer"})}),". For example, to proxy the local interface to an online address:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  tools: {\n    devServer: {\n      proxy: {\n        '/go/api': {\n          target: 'http://www.example.com/',\n          changeOrigin: true,\n        },\n      },\n    },\n  },\n});\n"})}),"\n",(0,a.jsxs)(r.p,{children:["When access ",(0,a.jsx)(r.code,{children:"http://localhost:8080/go/api"}),", the response content will be returned from ",(0,a.jsx)(r.a,{href:"http://www.example.com/",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)(r.a,{href:"http://www.example.com/",target:"_blank",rel:"noopener noreferrer",children:"http://www.example.com/"})}),"."]}),"\n",(0,a.jsxs)(r.div,{className:"modern-directive info",children:[(0,a.jsx)(r.div,{className:"modern-directive-title",children:"INFO"}),(0,a.jsx)(r.div,{className:"modern-directive-content",children:(0,a.jsxs)(r.p,{children:["For more detail, see ",(0,a.jsx)(r.a,{href:"https://github.com/chimurai/http-proxy-middleware",target:"_blank",rel:"noopener noreferrer",children:"http-proxy-middleware"}),".\n"]})})]}),"\n",(0,a.jsxs)(r.h2,{id:"global-proxy",children:["Global Proxy",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#global-proxy",children:"#"})]}),"\n","\n",(0,a.jsx)(d.default,{}),"\n",(0,a.jsxs)(r.h2,{id:"bff-proxy",children:["BFF Proxy",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#bff-proxy",children:"#"})]}),"\n",(0,a.jsxs)(r.p,{children:["By configuring ",(0,a.jsx)(r.a,{href:"/configure/app/bff/proxy",children:(0,a.jsx)(r.code,{children:"bff.proxy"})}),", BFF API requests can be proxied to a specified service. Unlike the other proxy methods above, it can be used in the production environment:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  bff: {\n    proxy: {\n      '/api/v1': 'https://cnodejs.org',\n    },\n  },\n});\n"})}),"\n",(0,a.jsxs)(r.p,{children:["For example, when using BFF function in the code, the final request ",(0,a.jsx)(r.code,{children:"http://localhost:8080/api/v1/topics"})," will be automatically proxied to ",(0,a.jsx)(r.code,{children:"https://cnodejs.org/api/v1/topics"}),":"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:"import getTopics from '@api/v1/topics';\n\ngetTopics();\n"})})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/en/guides/basic-features/proxy.mdx"]={toc:[{text:"Local Proxy",id:"local-proxy",depth:2},{text:"Global Proxy",id:"global-proxy",depth:2},{text:"BFF Proxy",id:"bff-proxy",depth:2}],title:"Proxy",frontmatter:{title:"Proxy",sidebar_position:5}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,a.jsx)(r,t._(s._({},e),{children:(0,a.jsx)(c,s._({},e))})):c(e)}}}]);