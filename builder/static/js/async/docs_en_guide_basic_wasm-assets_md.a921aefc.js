(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_basic_wasm-assets_md"],{2383:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return t},title:function(){return i},toc:function(){return r},default:function(){return o}});var d=n("12151"),a=n("23169"),t={},i="Import Wasm Assets",r=[{text:"Import",depth:2,id:"import"},{text:"Output Directory",depth:2,id:"output-directory"},{text:"Add Type Declaration",depth:2,id:"add-type-declaration"}];function c(e){var s=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",button:"button",pre:"pre",code:"code"},(0,a.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h1,{id:"import-wasm-assets",children:["Import Wasm Assets",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#import-wasm-assets",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"Builder supports import WebAssembly assets in code."}),"\n",(0,d.jsxs)(s.div,{className:"modern-directive tip",children:[(0,d.jsx)(s.div,{className:"modern-directive-title",children:"What is WebAssembly"}),(0,d.jsx)(s.div,{className:"modern-directive-content",children:(0,d.jsx)(s.p,{children:"WebAssembly (Wasm) is a portable, high-performance binary format designed to execute CPU-intensive computing tasks in modern web browsers, bringing performance and reliability similar to native compiled code to the web platform."})})]}),"\n",(0,d.jsxs)(s.div,{className:"modern-directive info",children:[(0,d.jsx)(s.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsx)(s.div,{className:"modern-directive-content",children:(0,d.jsx)(s.p,{children:"If you are using Rspack as the bundler, import Wasm assets is not supported yet."})})]}),"\n",(0,d.jsxs)(s.h2,{id:"import",children:["Import",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#import",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"You can import a WebAssembly module directly in a JavaScript file:"}),"\n",(0,d.jsxs)(s.div,{className:"language-",children:[(0,d.jsx)(s.div,{className:"modern-code-title",children:"index.js"}),(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-js",meta:'title="index.js"',children:"import { add } from './add.wasm';\n\nconsole.log(add); // [native code]\nconsole.log(add(1, 2)); // 3\n"})})]})]}),"\n",(0,d.jsx)(s.p,{children:"WebAssembly modules can also be imported via Dynamic Import:"}),"\n",(0,d.jsxs)(s.div,{className:"language-",children:[(0,d.jsx)(s.div,{className:"modern-code-title",children:"index.js"}),(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-js",meta:'title="index.js"',children:"import('./add.wasm').then(({ add }) => {\n  console.log('---- Async Wasm Module');\n  console.log(add); // [native code]\n  console.log(add(1, 2)); // 3\n});\n"})})]})]}),"\n",(0,d.jsxs)(s.h2,{id:"output-directory",children:["Output Directory",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#output-directory",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["When a ",(0,d.jsx)(s.code,{children:".wasm"})," asset is imported, it will be output by Builder to the ",(0,d.jsx)(s.code,{children:"dist/static/wasm"})," directory by default."]}),"\n",(0,d.jsxs)(s.p,{children:["You can change the output directory of ",(0,d.jsx)(s.code,{children:".wasm"})," files via ",(0,d.jsx)(s.a,{href:"/api/config-output",children:"output.distPath"})," config."]}),"\n",(0,d.jsx)(s.div,{className:"language-",children:(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    distPath: {\n      wasm: 'resource/wasm',\n    },\n  },\n};\n"})})]})}),"\n",(0,d.jsxs)(s.h2,{id:"add-type-declaration",children:["Add Type Declaration",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#add-type-declaration",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"When you import a Wasm file in TypeScript code, you usually need to add the corresponding type declaration."}),"\n",(0,d.jsxs)(s.p,{children:["For example, the ",(0,d.jsx)(s.code,{children:"add.wasm"})," file exports an ",(0,d.jsx)(s.code,{children:"add()"})," method, then you can create an ",(0,d.jsx)(s.code,{children:"add.wasm.d.ts"})," file in the same directory and add the corresponding type declaration:"]}),"\n",(0,d.jsxs)(s.div,{className:"language-",children:[(0,d.jsx)(s.div,{className:"modern-code-title",children:"add.wasm.d.ts"}),(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-ts",meta:'title="add.wasm.d.ts"',children:"export const add = (num1: number, num2: number) => number;\n"})})]})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return s?(0,d.jsx)(s,Object.assign({},e,{children:(0,d.jsx)(c,e)})):c(e)}}}]);