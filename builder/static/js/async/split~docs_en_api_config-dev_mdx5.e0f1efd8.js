(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_en_api_config-dev_mdx5"],{18836:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{frontmatter:function(){return a},title:function(){return c},toc:function(){return i},default:function(){return d}});var s=n("12151"),r=n("23169"),a={},c="",i=[{text:"Automatically generate certificates",depth:4,id:"automatically-generate-certificates"},{text:"Manually set the certificate",depth:4,id:"manually-set-the-certificate"}];function l(e){var t=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",h4:"h4",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Type:"})," ",(0,s.jsx)(t.code,{children:"boolean | { key: string; cert: string }"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Default:"})," ",(0,s.jsx)(t.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"After configuring this option, you can enable HTTPS Dev Server, and disabling the HTTP Dev Server."}),"\n",(0,s.jsx)(t.p,{children:"HTTP:"}),"\n",(0,s.jsx)(t.div,{className:"language-",children:(0,s.jsxs)(t.div,{className:"modern-code-content",children:[(0,s.jsx)(t.button,{className:"copy"}),(0,s.jsx)(t.pre,{className:"code",children:(0,s.jsx)(t.code,{className:"language-bash",children:"  > Local: http://localhost:8080/\n  > Network: http://192.168.0.1:8080/\n"})})]})}),"\n",(0,s.jsx)(t.p,{children:"HTTPS:"}),"\n",(0,s.jsx)(t.div,{className:"language-",children:(0,s.jsxs)(t.div,{className:"modern-code-content",children:[(0,s.jsx)(t.button,{className:"copy"}),(0,s.jsx)(t.pre,{className:"code",children:(0,s.jsx)(t.code,{className:"language-bash",children:"  > Local: https://localhost:8080/\n  > Network: https://192.168.0.1:8080/\n"})})]})}),"\n",(0,s.jsxs)(t.h4,{id:"automatically-generate-certificates",children:["Automatically generate certificates",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#automatically-generate-certificates",children:"#"})]}),"\n",(0,s.jsxs)(t.p,{children:["You can directly set ",(0,s.jsx)(t.code,{children:"https"})," to ",(0,s.jsx)(t.code,{children:"true"}),", Builder will automatically generate the HTTPS certificate based on ",(0,s.jsx)(t.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["When using this method, you need to manually install the ",(0,s.jsx)(t.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"})," dependency in your project:"]}),"\n",(0,s.jsx)(t.div,{className:"language-",children:(0,s.jsxs)(t.div,{className:"modern-code-content",children:[(0,s.jsx)(t.button,{className:"copy"}),(0,s.jsx)(t.pre,{className:"code",children:(0,s.jsx)(t.code,{className:"language-bash",children:"# npm\nnpm install devcert@1.2.2 -D\n\n#yarn\nyarn add devcert@1.2.2 -D\n\n#pnpm\npnpm add devcert@1.2.2 -D\n"})})]})}),"\n",(0,s.jsxs)(t.p,{children:["Then configure ",(0,s.jsx)(t.code,{children:"dev.https"})," to ",(0,s.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,s.jsx)(t.div,{className:"language-",children:(0,s.jsxs)(t.div,{className:"modern-code-content",children:[(0,s.jsx)(t.button,{className:"copy"}),(0,s.jsx)(t.pre,{className:"code",children:(0,s.jsx)(t.code,{className:"language-ts",children:"export default {\n  dev: {\n    https: true,\n  },\n};\n"})})]})}),"\n",(0,s.jsx)(t.p,{children:"The devcert has some limitations, it does not currently support IP addresses yet."}),"\n",(0,s.jsxs)(t.div,{className:"modern-directive tip",children:[(0,s.jsx)(t.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsxs)(t.div,{className:"modern-directive-content",children:["The https proxy automatically installs the certificate and needs root authority, please enter the password according to the prompt.",(0,s.jsx)(t.strong,{children:"The password is only used to trust the certificate, and will not be leaked or be used elsewhere"}),".\n"]})]}),"\n",(0,s.jsxs)(t.h4,{id:"manually-set-the-certificate",children:["Manually set the certificate",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#manually-set-the-certificate",children:"#"})]}),"\n",(0,s.jsxs)(t.p,{children:["You can also manually pass in the certificate and the private key required in the ",(0,s.jsx)(t.code,{children:"dev.https"})," option. This parameter will be directly passed to the createServer method of the https module in Node.js."]}),"\n",(0,s.jsxs)(t.p,{children:["For details, please refer to ",(0,s.jsx)(t.a,{href:"https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener",target:"_blank",rel:"noopener noreferrer",children:"https.createServer"}),"."]}),"\n",(0,s.jsx)(t.div,{className:"language-",children:(0,s.jsxs)(t.div,{className:"modern-code-content",children:[(0,s.jsx)(t.button,{className:"copy"}),(0,s.jsx)(t.pre,{className:"code",children:(0,s.jsx)(t.code,{className:"language-ts",children:"import fs from 'fs';\n\nexport default {\n  dev: {\n    https: {\n      key: fs.readFileSync('certificates/private.pem'),\n      cert: fs.readFileSync('certificates/public.pem'),\n    },\n  },\n};\n"})})]})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);