(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_security_check-syntax_mdx"],{57289:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3",a:"a"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type CheckSyntax =\n  | boolean\n  | {\n      targets: string[];\n      exclude?: RegExp | Array<RegExp>;\n    };\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Analyzes the build output files for the presence of high-level syntax that is incompatible with the current browserslist. If present, the details will be printed in the terminal."}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    checkSyntax: true,\n    exclude: /node_modules\\/foo/,\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"security.checkSyntax"})," is specified as ",(0,t.jsx)(n.code,{children:"true"}),", targets will be recognized as the browserslist set by the project. For details, please refer to ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/zh/guide/advanced/browser-compatibility.html",target:"_blank",rel:"noopener noreferrer",children:"Browserslist"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"When enabled, it will be detected in the production environment, and when an incompatible advanced syntax is detected, it will not only print the error logs on the terminal but also exit the build process."}),"\n",(0,t.jsxs)(n.h3,{id:"error-log",children:["Error Log",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#error-log",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"The format of the error log is as follows, including the source file, output location, error reason and source code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"error [Syntax Checker] Find some syntax errors after production build:\n\n   ERROR#1:\n   source - /node_modules/foo/index.js:1:0\n   output - /Project/dist/static/js/main.3f7a4d7e.js:2:39400\n   reason - The keyword 'const' is reserved (2:39400)\n   code - const foo = 'bar';\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"solution",children:["Solution",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#solution",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"If a syntax error is detected, you can handle it in the following ways:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you want to downgrade this syntax to ensure good code compatibility, you can compile the corresponding module through the ",(0,t.jsx)(n.code,{children:"source.include"})," config."]}),"\n",(0,t.jsx)(n.li,{children:"If you don't want to downgrade the syntax, you can adjust the project's browserslist to match the syntax."}),"\n",(0,t.jsxs)(n.li,{children:["If you do not want to check the syntax of certain products, you can use the ",(0,t.jsx)(n.code,{children:"checkSyntax.exclude"})," configuration to exclude the files to be checked."]}),"\n"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},17171:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return a},default:function(){return l}});var t=r("9880"),s=r("23169"),i=r.ir(r("57289")),c={sidebar_label:"checkSyntax"},o="security.checkSyntax",a=[];function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"securitychecksyntax",children:["security.checkSyntax",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitychecksyntax",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-security.html#securitychecksyntax",target:"_blank",rel:"noopener noreferrer",children:"security.checkSyntax"}),".\n"]})})]}),"\n","\n",(0,t.jsx)(i.default,{})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);