(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_define_mdx"],{86483:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var i,s=r("15169"),t=r("43932"),o=r("9880"),d=r("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",h3:"h3",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"Record<string, unknown>"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Replaces variables in your code with other values or expressions at compile time. This can be useful for allowing different behavior between development builds and production builds."}),"\n",(0,o.jsxs)(n.p,{children:["Each key passed into options is an identifier or multiple identifiers joined with ",(0,o.jsx)(n.code,{children:"."}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If the value is a string it will be used as a code fragment."}),"\n",(0,o.jsx)(n.li,{children:"If the value isn't a string, it will be stringified (including functions)."}),"\n",(0,o.jsx)(n.li,{children:"If the value is an object all keys are defined the same way."}),"\n",(0,o.jsx)(n.li,{children:"If you prefix typeof to the key, it's only defined for typeof calls."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For more information please visit ",(0,o.jsx)(n.a,{href:"https://webpack.js.org/plugins/define-plugin/",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(n.a,{href:"https://webpack.js.org/plugins/define-plugin/",target:"_blank",rel:"noopener noreferrer",children:"https://webpack.js.org/plugins/define-plugin/"})}),"."]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive tip",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["When using Rspack as the bundler, the supported types can be found in ",(0,o.jsx)(n.a,{href:"https://www.rspack.dev/config/builtins.html#builtinsdefine",target:"_blank",rel:"noopener noreferrer",children:"Rspack.builtins.define"}),".\n"]})})]}),"\n",(0,o.jsxs)(n.h3,{id:"example",children:["Example",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    define: {\n      PRODUCTION: JSON.stringify(true),\n      VERSION: JSON.stringify('5fa3b9'),\n      BROWSER_SUPPORTS_HTML5: true,\n      TWO: '1 + 1',\n      'typeof window': JSON.stringify('object'),\n      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),\n      'import.meta': { test: undefined },\n    },\n  },\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Expressions will be replaced with the corresponding code fragments:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const foo = TWO;\n\n// ⬇️ Turn into being...\nconst foo = 1 + 1;\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/builder-doc/docs/en/config/source/define.md"]={toc:[{text:"Example",id:"example",depth:3}],title:"",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,t._(s._({},e),{children:(0,o.jsx)(l,s._({},e))})):l(e)}},45198:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var i,s=r("15169"),t=r("43932"),o=r("9880"),d=r("23169"),l=r.ir(r("86483"));function c(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"sourcedefine",children:["source.define",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcedefine",children:"#"})]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive tip",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourcedefine",target:"_blank",rel:"noopener noreferrer",children:"source.define"}),".\n"]})})]}),"\n","\n",(0,o.jsx)(l.default,{})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/en/configure/app/source/define.mdx"]={toc:[],title:"source.define",frontmatter:{sidebar_label:"define"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,t._(s._({},e),{children:(0,o.jsx)(c,s._({},e))})):c(e)}}}]);