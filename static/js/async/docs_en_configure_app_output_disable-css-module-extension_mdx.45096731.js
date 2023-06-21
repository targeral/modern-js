(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_disable-css-module-extension_mdx"],{83576:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return c}});var d,i=n("15169"),l=n("43932"),r=n("9880"),o=n("23169");function t(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",h3:"h3",a:"a",pre:"pre",h4:"h4"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Type:"})," ",(0,r.jsx)(s.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Default:"})," ",(0,r.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Whether to treat all ",(0,r.jsx)(s.code,{children:".css"})," files in the source directory as CSS Modules."]}),"\n",(0,r.jsxs)(s.p,{children:["By default, only the ",(0,r.jsx)(s.code,{children:"*.module.css"})," files are treated as CSS Modules. After enabling this config, all ",(0,r.jsx)(s.code,{children:"*.css"})," style files in the source directory will be regarded as CSS Modules."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:".sass"}),", ",(0,r.jsx)(s.code,{children:".scss"})," and ",(0,r.jsx)(s.code,{children:".less"})," files are also affected by ",(0,r.jsx)(s.code,{children:"disableCssModuleExtension"}),"."]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["We do not recommend enabling this config, because after enabling ",(0,r.jsx)(s.code,{children:"disableCssModuleExtension"}),", CSS Modules files and ordinary CSS files cannot be clearly distinguished, which is not conducive to long-term maintenance.\n"]})})]}),"\n",(0,r.jsxs)(s.h3,{id:"example",children:["Example",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    disableCssModuleExtension: true,\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"detailed",children:["Detailed",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#detailed",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"The following is a detailed explanation of the CSS Modules rules:"}),"\n",(0,r.jsxs)(s.h4,{id:"disablecssmoduleextension-is-false-(default)",children:["disableCssModuleExtension is false (default)",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#disablecssmoduleextension-is-false-(default)",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"The following files are treated as CSS Modules:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["all ",(0,r.jsx)(s.code,{children:"*.module.css"})," files"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The following files are treated as normal CSS:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["all ",(0,r.jsx)(s.code,{children:"*.css"})," files (excluding ",(0,r.jsx)(s.code,{children:".module"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:["all ",(0,r.jsx)(s.code,{children:"*.global.css"})," files"]}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"disablecssmoduleextension-is-true",children:["disableCssModuleExtension is true",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#disablecssmoduleextension-is-true",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"The following files are treated as CSS Modules:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"*.css"})," and ",(0,r.jsx)(s.code,{children:"*.module.css"})," files in the source directory"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"*.module.css"})," files under node_modules"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The following files are treated as normal CSS:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["all ",(0,r.jsx)(s.code,{children:"*.global.css"})," files"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"*.css"})," files under node_modules (without ",(0,r.jsx)(s.code,{children:".module"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["For CSS Modules files inside node_modules, please always use the ",(0,r.jsx)(s.code,{children:"*.module.css"})," suffix.\n"]})})]})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/builder-doc/docs/en/config/output/disableCssModuleExtension.md"]={toc:[{text:"Example",id:"example",depth:3},{text:"Detailed",id:"detailed",depth:3},{text:"disableCssModuleExtension is false (default)",id:"disablecssmoduleextension-is-false-(default)",depth:4},{text:"disableCssModuleExtension is true",id:"disablecssmoduleextension-is-true",depth:4}],title:"",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return s?(0,r.jsx)(s,l._(i._({},e),{children:(0,r.jsx)(t,i._({},e))})):t(e)}},77191:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return a}});var d,i=n("15169"),l=n("43932"),r=n("9880"),o=n("23169"),t=n.ir(n("83576"));function c(e){var s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"outputdisablecssmoduleextension",children:["output.disableCssModuleExtension",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisablecssmoduleextension",children:"#"})]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(s.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputdisablecssmoduleextension",target:"_blank",rel:"noopener noreferrer",children:"output.disableCssModuleExtension"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(t.default,{})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/en/configure/app/output/disable-css-module-extension.mdx"]={toc:[],title:"output.disableCssModuleExtension",frontmatter:{sidebar_label:"disableCssModuleExtension"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return s?(0,r.jsx)(s,l._(i._({},e),{children:(0,r.jsx)(c,i._({},e))})):c(e)}}}]);