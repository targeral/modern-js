(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_guide_basic_use-mdx_mdx"],{8635:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var o,i=s("15169"),r=s("43932"),d=s("9880"),t=s("23169");function l(e){var n=Object.assign({pre:"pre",code:"code",div:"div",p:"p",a:"a",strong:"strong"},(0,t.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      experimentalMdxRs: true,\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"NOTICE"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["The bottom layer of this function is based on the ",(0,d.jsx)(n.a,{href:"https://github.com/web-infra-dev/mdx-rs-binding",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/mdx-rs-binding"})," library developed by Modern.js Doc. The performance is ",(0,d.jsx)(n.strong,{children:"5 ~ 10"})," times higher than the JS version of the MDX compiler, but the JS version of the plugin is not yet supported. If you need to add a custom remark or rehype plugin, it is not recommended to enable this function.\n"]})})]})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fdoc-tools-doc%2Fdocs%2Fen%2Ffragments%2Fmdx-rs.mdx"]={toc:[],title:"",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,r._)((0,i._)({},e),{children:(0,d.jsx)(l,(0,i._)({},e))})):l(e)}},41911:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var o,i=s("15169"),r=s("43932"),d=s("9880"),t=s("23169"),l=s("8635");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",blockquote:"blockquote",strong:"strong",div:"div",h3:"h3"},(0,t.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"use-mdx",children:["Use MDX",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-mdx",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js Doc supports ",(0,d.jsx)(n.a,{href:"https://mdxjs.com/",target:"_blank",rel:"noopener noreferrer",children:"MDX"}),", a powerful way to develop content."]}),"\n",(0,d.jsxs)(n.h2,{id:"markdown",children:["Markdown",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"MDX is a superset of Markdown, which means you can write Markdown files as usual. For example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-md",children:"# Hello World\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"use-component",children:["Use Component",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-component",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["When you want to use React components in Markdown files, you should name your files with ",(0,d.jsx)(n.code,{children:".mdx"})," extension. For example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-mdx",children:"// docs/index.mdx\nimport { CustomComponent } from './custom';\n\n# Hello World\n\n<CustomComponent />\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"front-matter",children:["Front Matter",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#front-matter",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"You can add Front Matter at the beginning of your Markdown file, which is a YAML-formatted object that defines some metadata. For example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:"---\ntitle: Hello World\n---\n"})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Note: By default, Modern.js Doc uses h1 headings as html headings."}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"You can also access properties defined in Front Matter in the body, for example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-markdown",children:"---\ntitle: Hello World\n---\n\n# {frontmatter.title}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["The previously defined properties will be passed to the component as ",(0,d.jsx)(n.code,{children:"frontmatter"})," properties. So the final output will be:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:"<h1>Hello World</h1>\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"custom-container",children:["Custom Container",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-container",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["You can use the ",(0,d.jsx)(n.code,{children:":::"})," syntax to create custom containers and support custom titles. For example:"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Input:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-markdown",children:':::tip\nThis is a `block` of type `tip`\n:::\n\n:::info\nThis is a `block` of type `info`\n:::\n\n:::warning\nThis is a `block` of type `warning`\n:::\n\n:::danger\nThis is a `block` of type `danger`\n:::\n\n:::tip Custom Title\nThis is a `block` of `Custom Title`\n:::\n\n:::tip{title="Custom Title"}\nThis is a `block` of `Custom Title`\n:::\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Output:"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["This is a ",(0,d.jsx)(n.code,{children:"block"})," of type ",(0,d.jsx)(n.code,{children:"tip"}),"\n"]})})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["This is a ",(0,d.jsx)(n.code,{children:"block"})," of type ",(0,d.jsx)(n.code,{children:"info"}),"\n"]})})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive warning",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["This is a ",(0,d.jsx)(n.code,{children:"block"})," of type ",(0,d.jsx)(n.code,{children:"warning"}),"\n"]})})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive danger",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"DANGER"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["This is a ",(0,d.jsx)(n.code,{children:"block"})," of type ",(0,d.jsx)(n.code,{children:"danger"}),"\n"]})})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"Custom Title"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["This is a ",(0,d.jsx)(n.code,{children:"block"})," of ",(0,d.jsx)(n.code,{children:"Custom Title"}),"\n"]})})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"Custom Title"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["\nThis is a ",(0,d.jsx)(n.code,{children:"block"})," of ",(0,d.jsx)(n.code,{children:"Custom Title"}),"\n"]})})]}),"\n",(0,d.jsxs)(n.h2,{id:"code-block",children:["Code Block",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#code-block",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"basic-usage",children:["Basic Usage",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-usage",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"You can use the ``` syntax to create code blocks and support custom titles. For example:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Input:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-md",children:"```js\nconsole.log('Hello World');\n```\n\n```js title=\"hello.js\"\nconsole.log('Hello World');\n```\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Output:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"console.log('Hello World');\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="hello.js"',children:"console.log('Hello World');\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"show-line-numbers",children:["Show Line Numbers",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#show-line-numbers",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["If you want to display line numbers, you can enable the ",(0,d.jsx)(n.code,{children:"showLineNumbers"})," option in the config file:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  // ...\n  doc: {\n    markdown: {\n      showLineNumbers: true,\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"line-highlighting",children:["Line Highlighting",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#line-highlighting",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"You can also apply line highlighting and code block title at the same time, for example:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Input:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-md",children:"```js title=\"hello.js\" {1,3-5}\nconsole.log('Hello World');\n\nconst a = 1;\n\nconsole.log(a);\n\nconst b = 2;\n\nconsole.log(b);\n```\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Ouput:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="hello.js" {1,3-5}',children:"console.log('Hello World');\n\nconst a = 1;\n\nconsole.log(a);\n\nconst b = 2;\n\nconsole.log(b);\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"rustify-mdx-compiler",children:["Rustify MDX compiler",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rustify-mdx-compiler",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"You can enable Rustify MDX compiler by following config:"}),"\n","\n",(0,d.jsx)(l.default,{})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fdoc-tools-doc%2Fdocs%2Fen%2Fguide%2Fbasic%2Fuse-mdx.mdx"]={toc:[{text:"Markdown",id:"markdown",depth:2},{text:"Use Component",id:"use-component",depth:2},{text:"Front Matter",id:"front-matter",depth:2},{text:"Custom Container",id:"custom-container",depth:2},{text:"Code Block",id:"code-block",depth:2},{text:"Basic Usage",id:"basic-usage",depth:3},{text:"Show Line Numbers",id:"show-line-numbers",depth:3},{text:"Line Highlighting",id:"line-highlighting",depth:3},{text:"Rustify MDX compiler",id:"rustify-mdx-compiler",depth:2}],title:"Use MDX",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,r._)((0,i._)({},e),{children:(0,d.jsx)(c,(0,i._)({},e))})):c(e)}}}]);