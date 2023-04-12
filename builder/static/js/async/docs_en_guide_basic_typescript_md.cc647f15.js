(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_basic_typescript_md"],{48646:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return r},title:function(){return a},toc:function(){return o},default:function(){return l}});var s=t("12151"),i=t("23169"),r={},a="Use TypeScript",o=[{text:"TypeScript compilation",depth:2,id:"typescript-compilation"},{text:"Why Babel is the default option",depth:3,id:"why-babel-is-the-default-option"},{text:"Type checking",depth:2,id:"type-checking"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",strong:"strong",div:"div",button:"button",pre:"pre",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"use-typescript",children:["Use TypeScript",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-typescript",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Builder supports TypeScript compilation and type checking by default, you can use ",(0,s.jsx)(n.code,{children:". ts"})," and `. tsx' files in the project without any configuration."]}),"\n",(0,s.jsxs)(n.h2,{id:"typescript-compilation",children:["TypeScript compilation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#typescript-compilation",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Builder has three ways to compile TypeScript files."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Babel"})}),"\n",(0,s.jsx)(n.p,{children:"By default, all TypeScript files are compiled by Babel."}),"\n",(0,s.jsxs)(n.p,{children:["You may find some old articles pointing out that Babel cannot handle ",(0,s.jsx)(n.code,{children:"const enum"})," and ",(0,s.jsx)(n.code,{children:"namespace alias"})," syntax, however since version ",(0,s.jsx)(n.a,{href:"https://babeljs.io/blog/2021/07/26/7.15.0",target:"_blank",rel:"noopener noreferrer",children:"7.15"})," Babel has supported them. Babel compile is enabled by default."]}),"\n",(0,s.jsx)(n.p,{children:"If you want more Babel plugins"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"ts-loader"})}),"\n",(0,s.jsx)(n.p,{children:"The ts-loader uses TypeScript's official compiler-TSC under the hood. When ts-loader is enabled, TypeScript files will no longer be compiled by Babel, but Babel will still inject polyfill into the TSC output and transform it to the lower version of JavaScript."}),"\n",(0,s.jsx)(n.p,{children:"Enable ts-loader(with default options):"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: {},\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["More configuration can be found at ",(0,s.jsx)(n.a,{href:"/en/api/config-tools",children:"tools.tsLoader"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If ts-loader is enabled with default configuration, it does not have type checking, we do type checking by ",(0,s.jsx)(n.a,{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"fork-ts-checker-webpack-plugin"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"SWC"})}),"\n",(0,s.jsx)(n.p,{children:"If you want a super fast compiler, and you don't need some custom Babel plugins, then you can use SWC for compilation and minification."}),"\n",(0,s.jsxs)(n.p,{children:["SWC plugin in Builder supports TypeScript, TSX and legacy decorator, you can check ",(0,s.jsx)(n.a,{href:"/en/plugins/plugin-swc",children:"SWC plugin"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"why-babel-is-the-default-option",children:["Why Babel is the default option",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#why-babel-is-the-default-option",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Babel supports TypeScript well. It cannot check types, but we can check types in another process. Babel follows standards more when compiled to lower versions of JavaScript in certain situations. For example, Babel will initialize class members as undefined, and mark class methods as non-enumerable. If TSC is enabled, for better syntax downgrading and Polyfill, the TSC output will still be compiled by Babel, causing unnecessary performance costs."}),"\n",(0,s.jsxs)(n.h2,{id:"type-checking",children:["Type checking",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#type-checking",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Currently, the only stable TypeScript type checking tool is TSC, and it usually takes a while to check types in a large project, so Builder by default using tsChecker(",(0,s.jsx)(n.a,{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"fork-ts-checker-webpack-plugin"}),") for asynchronous type checking, it won't block project setup."]}),"\n",(0,s.jsx)(n.p,{children:"Set tsChecker(with default options):"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsChecker: {},\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["More configurations can be seen at ",(0,s.jsx)(n.a,{href:"/en/api/config-tools",children:"tsChecker configuration"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that if ts-loader is enabled and ",(0,s.jsx)(n.code,{children:"compileOnly: false"})," is set, please disable tsChecker to avoid duplicate type-checking."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"STC"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["The author of SWC has announced a new open-source type-checking tool based on Rust, which is called ",(0,s.jsx)(n.a,{href:"https://github.com/dudykr/stc",target:"_blank",rel:"noopener noreferrer",children:"STC"}),", it's super fast but it cannot used for production now, really don't recommend you use that for now, when it's stabled we will use that in Builder SWC plugin as experimental ability.\n"]})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}]);