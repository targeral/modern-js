(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_basic_json-files_md"],{69263:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var a,l=r("15169"),s=r("43932"),d=r("9880"),o=r("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},(0,o.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"引用-json-文件",children:["引用 JSON 文件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#引用-json-文件",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Builder 支持在代码中引用 JSON 文件，也支持引用 ",(0,d.jsx)(n.a,{href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer",children:"YAML"})," 和 ",(0,d.jsx)(n.a,{href:"https://toml.io/en/",target:"_blank",rel:"noopener noreferrer",children:"TOML"})," 文件并将其转换为 JSON 格式。"]}),"\n",(0,d.jsxs)(n.h2,{id:"json-文件",children:["JSON 文件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#json-文件",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"你可以直接在 JavaScript 文件中引用 JSON 文件。"}),"\n",(0,d.jsxs)(n.h3,{id:"示例",children:["示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",meta:'title="example.json"',children:'{\n  "name": "foo",\n  "items": [1, 2]\n}\n'})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="index.js"',children:"import example from './example.json';\n\nconsole.log(example.name); // 'foo';\nconsole.log(example.items); // [1, 2];\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"具名引用",children:["具名引用",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#具名引用",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Builder 暂不支持通过 named import 来引用 JSON 文件："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"import { name } from './example.json';\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"yaml-文件",children:["YAML 文件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#yaml-文件",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"YAML 是一种数据序列化语言，通常用于编写配置文件。"}),"\n",(0,d.jsxs)(n.p,{children:["你可以直接在 JavaScript 中引用 ",(0,d.jsx)(n.code,{children:".yaml"})," 或 ",(0,d.jsx)(n.code,{children:".yml"})," 文件，它们会被自动转换为 JSON 格式。"]}),"\n",(0,d.jsxs)(n.h3,{id:"示例-1",children:["示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例-1",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",meta:'title="example.yaml"',children:"---\nhello: world\nfoo:\n  bar: baz\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"import example from './example.yaml';\n\nconsole.log(example.hello); // 'world';\nconsole.log(example.foo); // { bar: 'baz' };\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"添加类型声明",children:["添加类型声明",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加类型声明",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["当你在 TypeScript 代码中引用 YAML 文件时，请在项目中创建 ",(0,d.jsx)(n.code,{children:"src/global.d.ts"})," 文件，并添加相应的类型声明："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="src/global.d.ts"',children:"declare module '*.yaml' {\n  const content: Record<string, any>;\n  export default content;\n}\n\ndeclare module '*.yml' {\n  const content: Record<string, any>;\n  export default content;\n}\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"toml-文件",children:["TOML 文件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toml-文件",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"TOML 是一种语义明显、易于阅读的配置文件格式。"}),"\n",(0,d.jsxs)(n.p,{children:["你可以直接在 JavaScript 中引用 ",(0,d.jsx)(n.code,{children:".toml"})," 文件，它会被自动转换为 JSON 格式。"]}),"\n",(0,d.jsxs)(n.h3,{id:"示例-2",children:["示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例-2",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-toml",meta:'title="example.toml"',children:'hello = "world"\n\n[foo]\nbar = "baz"\n'})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"import example from './example.toml';\n\nconsole.log(example.hello); // 'world';\nconsole.log(example.foo); // { bar: 'baz' };\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"添加类型声明-1",children:["添加类型声明",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加类型声明-1",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["当你在 TypeScript 代码中引用 TOML 文件时，请在项目中创建 ",(0,d.jsx)(n.code,{children:"src/global.d.ts"})," 文件，并添加相应的类型声明："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="src/global.d.ts"',children:"declare module '*.toml' {\n  const content: Record<string, any>;\n  export default content;\n}\n"})})]})}(a=globalThis).__RSPRESS_PAGE_META||(a.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/builder-doc/docs/zh/guide/basic/json-files.md"]={toc:[{text:"JSON 文件",id:"json-文件",depth:2},{text:"示例",id:"示例",depth:3},{text:"具名引用",id:"具名引用",depth:3},{text:"YAML 文件",id:"yaml-文件",depth:2},{text:"示例",id:"示例-1",depth:3},{text:"添加类型声明",id:"添加类型声明",depth:3},{text:"TOML 文件",id:"toml-文件",depth:2},{text:"示例",id:"示例-2",depth:3},{text:"添加类型声明",id:"添加类型声明-1",depth:3}],title:"引用 JSON 文件",frontmatter:{}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,s._(l._({},e),{children:(0,d.jsx)(c,l._({},e))})):c(e)}}}]);