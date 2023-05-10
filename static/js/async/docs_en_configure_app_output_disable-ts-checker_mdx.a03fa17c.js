(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_disable-ts-checker_mdx"],{601:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var c=s("9880"),i=s("23169");function r(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Type:"})," ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Default:"})," ",(0,c.jsx)(n.code,{children:"false"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Bundler:"})," ",(0,c.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Whether to disable TypeScript type checker during compilation."}),"\n",(0,c.jsxs)(n.p,{children:["By default, Builder will run the TypeScript type checker in a separate process during the build process. Its checking logic is consistent with TypeScript's native ",(0,c.jsx)(n.code,{children:"tsc"})," command. You can use ",(0,c.jsx)(n.code,{children:"tsconfig.json"})," or Builder's ",(0,c.jsx)(n.code,{children:"tools.tsChecker"})," config to customize the checking behavior."]}),"\n",(0,c.jsxs)(n.h3,{id:"blocking-compilation",children:["Blocking Compilation",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#blocking-compilation",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"In development build, type errors will not block the compilation process."}),"\n",(0,c.jsx)(n.li,{children:"In production build, type errors will cause the build to fail to ensure the stability of the production code."}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"example",children:["Example",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"Disable TypeScript type checker:"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: true,\n  },\n};\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"Disable type checker in development:"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: process.env.NODE_ENV === 'development',\n  },\n};\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"Disable type checker in production:"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: process.env.NODE_ENV === 'production',\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsx)(n.p,{children:"It is not recommended to disable type checker in production, which will reduce the stability of the production code, please use it with caution."})})]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(r,e)})):r(e)}},76992:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return t},title:function(){return o},toc:function(){return d},default:function(){return a}});var c=s("9880"),i=s("23169"),r=s.ir(s("601")),t={sidebar_label:"disableTsChecker"},o="output.disableTsChecker",d=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"output-disabletschecker",children:["output.disableTsChecker",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#output-disabletschecker",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputdisabletschecker",target:"_blank",rel:"noopener noreferrer",children:"output.disableTsChecker"}),".\n"]})})]}),"\n","\n",(0,c.jsx)(r.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}}}]);