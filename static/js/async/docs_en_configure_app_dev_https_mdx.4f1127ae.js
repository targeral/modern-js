(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_dev_https_mdx"],{32529:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r,s=n("15169"),i=n("43932"),a=n("9880"),c=n("23169");function d(e){var t=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h4:"h4",a:"a",div:"div"},(0,c.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Type:"})," ",(0,a.jsx)(t.code,{children:"boolean | { key: string; cert: string }"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Default:"})," ",(0,a.jsx)(t.code,{children:"false"})]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"After configuring this option, you can enable HTTPS Dev Server, and disabling the HTTP Dev Server."}),"\n",(0,a.jsx)(t.p,{children:"HTTP:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"  > Local: http://localhost:8080/\n  > Network: http://192.168.0.1:8080/\n"})}),"\n",(0,a.jsx)(t.p,{children:"HTTPS:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"  > Local: https://localhost:8080/\n  > Network: https://192.168.0.1:8080/\n"})}),"\n",(0,a.jsxs)(t.h4,{id:"automatically-generate-certificates",children:["Automatically generate certificates",(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#automatically-generate-certificates",children:"#"})]}),"\n",(0,a.jsxs)(t.p,{children:["You can directly set ",(0,a.jsx)(t.code,{children:"https"})," to ",(0,a.jsx)(t.code,{children:"true"}),", Builder will automatically generate the HTTPS certificate based on ",(0,a.jsx)(t.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["When using this method, you need to manually install the ",(0,a.jsx)(t.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"})," dependency in your project:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# npm\nnpm install devcert@1.2.2 -D\n\n# yarn\nyarn add devcert@1.2.2 -D\n\n# pnpm\npnpm add devcert@1.2.2 -D\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Then configure ",(0,a.jsx)(t.code,{children:"dev.https"})," to ",(0,a.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"export default {\n  dev: {\n    https: true,\n  },\n};\n"})}),"\n",(0,a.jsx)(t.p,{children:"The devcert has some limitations, it does not currently support IP addresses yet."}),"\n",(0,a.jsxs)(t.div,{className:"modern-directive tip",children:[(0,a.jsx)(t.div,{className:"modern-directive-title",children:"TIP"}),(0,a.jsx)(t.div,{className:"modern-directive-content",children:(0,a.jsxs)(t.p,{children:["The https proxy automatically installs the certificate and needs root authority, please enter the password according to the prompt.",(0,a.jsx)(t.strong,{children:"The password is only used to trust the certificate, and will not be leaked or be used elsewhere"}),".\n"]})})]}),"\n",(0,a.jsxs)(t.h4,{id:"manually-set-the-certificate",children:["Manually set the certificate",(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#manually-set-the-certificate",children:"#"})]}),"\n",(0,a.jsxs)(t.p,{children:["You can also manually pass in the certificate and the private key required in the ",(0,a.jsx)(t.code,{children:"dev.https"})," option. This parameter will be directly passed to the createServer method of the https module in Node.js."]}),"\n",(0,a.jsxs)(t.p,{children:["For details, please refer to ",(0,a.jsx)(t.a,{href:"https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener",target:"_blank",rel:"noopener noreferrer",children:"https.createServer"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import fs from 'fs';\n\nexport default {\n  dev: {\n    https: {\n      key: fs.readFileSync('certificates/private.pem'),\n      cert: fs.readFileSync('certificates/public.pem'),\n    },\n  },\n};\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fdev%2Fhttps.md"]={toc:[{text:"Automatically generate certificates",id:"automatically-generate-certificates",depth:4},{text:"Manually set the certificate",id:"manually-set-the-certificate",depth:4}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return t?(0,a.jsx)(t,(0,i._)((0,s._)({},e),{children:(0,a.jsx)(d,(0,s._)({},e))})):d(e)}},21948:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r,s=n("15169"),i=n("43932"),a=n("9880"),c=n("23169"),d=n("32529");function l(e){var t=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.h1,{id:"devhttps",children:["dev.https",(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#devhttps",children:"#"})]}),"\n",(0,a.jsxs)(t.div,{className:"modern-directive tip",children:[(0,a.jsx)(t.div,{className:"modern-directive-title",children:"TIP"}),(0,a.jsx)(t.div,{className:"modern-directive-content",children:(0,a.jsxs)(t.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,a.jsx)(t.a,{href:"https://modernjs.dev/builder/en/api/config-dev.html#devhttps",target:"_blank",rel:"noopener noreferrer",children:"dev.https"}),".\n"]})})]}),"\n","\n",(0,a.jsx)(d.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fdev%2Fhttps.mdx"]={toc:[],title:"dev.https",frontmatter:{sidebar_label:"https"}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return t?(0,a.jsx)(t,(0,i._)((0,s._)({},e),{children:(0,a.jsx)(l,(0,s._)({},e))})):l(e)}}}]);