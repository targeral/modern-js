(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_api_config-experiments_mdx"],{740:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return a},title:function(){return t},toc:function(){return l},default:function(){return d}});var s=i("9880"),o=i("23169"),r=i.ir(i("14447")),a={extractApiHeaders:[2]},t="Experiments Config",l=[{text:"experiments.lazyCompilation",depth:2,id:"experiments-lazycompilation"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"experiments-config",children:["Experiments Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#experiments-config",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"This section describes some experimental configs in the Builder, which can enable unstable features in Builder."}),"\n",(0,s.jsxs)(n.p,{children:["If you meet issues with experimental features, please disable the config first and report through ",(0,s.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern.js/issues",target:"_blank",rel:"noopener noreferrer",children:"GitHub Issues"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"experiments-lazycompilation",children:["experiments.lazyCompilation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#experiments-lazycompilation",children:"#"})]}),"\n","\n",(0,s.jsx)(r.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},14447:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s=i("9880"),o=i("23169");function r(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",p:"p",h3:"h3",a:"a",h4:"h4"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"type LazyCompilationOptions =\n  | boolean\n  | {\n      // Whether to enable lazy compilation for entries\n      entries?: boolean;\n      // Whether to enable lazy compilation for dynamic imports\n      imports?: boolean;\n    };\n"})})]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bundler:"})," ",(0,s.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Used to enable the lazy compilation (i.e. compile on demand). When this config is enabled, Builder will compile entrypoints and dynamic imports only when they are used. It will improve the compilation startup time of the project."}),"\n",(0,s.jsx)(n.p,{children:"Lazy compilation only takes effect in the development."}),"\n",(0,s.jsxs)(n.h3,{id:"lazy-compilation-for-dynamic-imports",children:["Lazy Compilation for Dynamic Imports",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#lazy-compilation-for-dynamic-imports",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Lazy compile async modules introduced by ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import",target:"_blank",rel:"noopener noreferrer",children:"Dynamic Import"}),":"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  experiments: {\n    lazyCompilation: {\n      imports: true,\n      entries: false,\n    },\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"imports"})," option is enabled, all async modules will only be compiled when requested. If your project is a single-page application, and routing is split through Dynamic Import, there will be a significant effect of speeding up compilation."]}),"\n",(0,s.jsxs)(n.h3,{id:"lazy-compilation-for-entires",children:["Lazy Compilation for Entires",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#lazy-compilation-for-entires",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"In addition to lazy compilation for async modules, you can also choose to lazily compile both entries and async modules at the same time."}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  experiments: {\n    lazyCompilation: {\n      imports: true,\n      entries: true,\n    },\n  },\n};\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"The above config can also be simplified to:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  experiments: {\n    lazyCompilation: true,\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"entries"})," option is enabled, all pages will not be compiled when the compilation is started, and the page will be compiled only when you visit it."]}),"\n",(0,s.jsx)(n.p,{children:"When using lazy compilation for entries, there are some considerations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Only work for multi-page applications, no work for single-page applications."}),"\n",(0,s.jsx)(n.li,{children:"when you visit a page, there will be a white screen for a period of time due to waiting for the page to be compiled."}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"limitations",children:["Limitations",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#limitations",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"disable-split-chunks",children:["Disable split chunks",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-split-chunks",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When you enable lazy compilation, in order to ensure the compilation results, Builder will disable split chunks in the development. This will not affect the build results in the production, but will cause a difference between the build results of the development and production."}),"\n",(0,s.jsxs)(n.h4,{id:"use-proxy",children:["Use proxy",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-proxy",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Lazy Compilation relies on the local development server of webpack. When you proxy a domain name to localhost, Lazy Compilation will not work properly. Therefore, if you need to develop with proxy, please disable Lazy Compilation."})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(r,e)})):r(e)}}}]);