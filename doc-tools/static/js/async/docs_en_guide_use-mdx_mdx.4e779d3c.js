(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_guide_use-mdx_mdx"],{94621:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return d},toc:function(){return a},default:function(){return r}});var c=s("12151"),o=s("23169"),l={},d="Use MDX",a=[{text:"Markdown",depth:2,id:"markdown"},{text:"Use Component",depth:2,id:"use-component"},{text:"Front Matter",depth:2,id:"front-matter"},{text:"Custom Container",depth:2,id:"custom-container"},{text:"Code Block",depth:2,id:"code-block"}];function i(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",blockquote:"blockquote",strong:"strong"},(0,o.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"use-mdx",children:["Use MDX",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-mdx",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js Doc supports ",(0,c.jsx)(n.a,{href:"https://mdxjs.com/",target:"_blank",rel:"noopener noreferrer",children:"MDX"}),", a powerful way to develop content."]}),"\n",(0,c.jsxs)(n.h2,{id:"markdown",children:["Markdown",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"MDX is a superset of Markdown, which means you can write Markdown files as usual. For example:"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-md",children:"# Hello World\n"})})]})}),"\n",(0,c.jsxs)(n.h2,{id:"use-component",children:["Use Component",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-component",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["When you want to use React components in Markdown files, you should name your files with ",(0,c.jsx)(n.code,{children:".mdx"})," extension. For example:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-mdx",children:"// docs/index.mdx\nimport { CustomComponent } from './custom';\n\n# Hello World\n\n<CustomComponent />\n"})})]})}),"\n",(0,c.jsxs)(n.h2,{id:"front-matter",children:["Front Matter",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#front-matter",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"You can add Front Matter at the beginning of your Markdown file, which is a YAML-formatted object that defines some metadata. For example:"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-mdx",children:"---\ntitle: Hello World\n---\n"})})]})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"Note: By default, Modern.js Doc uses h1 headings as html headings."}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"You can also access properties defined in Front Matter in the body, for example:"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-mdx",children:"---\ntitle: Hello World\n---\n\n# {frontmatter.title}\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["The previously defined properties will be passed to the component as ",(0,c.jsx)(n.code,{children:"frontmatter"})," properties. So the final output will be:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-html",children:"<h1>Hello World</h1>\n"})})]})}),"\n",(0,c.jsxs)(n.h2,{id:"custom-container",children:["Custom Container",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-container",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["You can use the ",(0,c.jsx)(n.code,{children:":::"})," syntax to create custom containers and support custom titles. For example:"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Input:"})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-markdown",children:':::tip\nThis is a `block` of type `tip`\n:::\n\n:::info\nThis is a `block` of type `info`\n:::\n\n:::warning\nThis is a `block` of type `warning`\n:::\n\n:::danger\nThis is a `block` of type `danger`\n:::\n\n:::tip Custom Title\nThis is a `block` of `Custom Title`\n:::\n\n:::tip{title="Custom Title"}\nThis is a `block` of `Custom Title`\n:::\n'})})]})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Output:"})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["This is a ",(0,c.jsx)(n.code,{children:"block"})," of type ",(0,c.jsx)(n.code,{children:"tip"}),"\n"]})})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["This is a ",(0,c.jsx)(n.code,{children:"block"})," of type ",(0,c.jsx)(n.code,{children:"info"}),"\n"]})})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive warning",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["This is a ",(0,c.jsx)(n.code,{children:"block"})," of type ",(0,c.jsx)(n.code,{children:"warning"}),"\n"]})})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive danger",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"DANGER"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["This is a ",(0,c.jsx)(n.code,{children:"block"})," of type ",(0,c.jsx)(n.code,{children:"danger"}),"\n"]})})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"Custom Title"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["This is a ",(0,c.jsx)(n.code,{children:"block"})," of ",(0,c.jsx)(n.code,{children:"Custom Title"}),"\n"]})})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"Custom Title"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["\nThis is a ",(0,c.jsx)(n.code,{children:"block"})," of ",(0,c.jsx)(n.code,{children:"Custom Title"}),"\n"]})})]}),"\n",(0,c.jsxs)(n.h2,{id:"code-block",children:["Code Block",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#code-block",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"You can use the ``` syntax to create code blocks and support custom titles. For example:"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Input:"})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-md",children:"```js\nconsole.log('Hello World');\n```\n\n```js title=\"hello.js\"\nconsole.log('Hello World');\n```\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Output:"})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"console.log('Hello World');\n"})})]})}),"\n",(0,c.jsxs)(n.div,{className:"language-",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:"hello.js"}),(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",meta:'title="hello.js"',children:"console.log('Hello World');\n"})})]})]}),"\n",(0,c.jsx)(n.p,{children:"You can specify code line highlighting with the following syntax, for example:"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Input:"})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-md",children:"```js {1,3-5}\nconsole.log('Hello World');\n\nconst a = 1;\nconsole.log(a);\nconst b = 2;\nconsole.log(b);\n```\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Output:"})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",meta:"{1,3-5}",children:"console.log('Hello World');\n\nconst a = 1;\nconsole.log(a);\nconst b = 2;\nconsole.log(b);\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"You can also apply line highlighting and code block title at the same time, for example:"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Input:"})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-md",children:"```js title=\"hello.js\" {1,3-5}\nconsole.log('Hello World');\n\nconst a = 1;\n\nconsole.log(a);\n\nconst b = 2;\n\nconsole.log(b);\n```\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Ouput:"})}),"\n",(0,c.jsxs)(n.div,{className:"language-",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:"hello.js"}),(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",meta:'title="hello.js" {1,3-5}',children:"console.log('Hello World');\n\nconst a = 1;\n\nconsole.log(a);\n\nconst b = 2;\n\nconsole.log(b);\n"})})]})]})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(i,e)})):i(e)}}}]);