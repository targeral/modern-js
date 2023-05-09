(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_guide_use-mdx_mdx"],{82729:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return o},toc:function(){return a},default:function(){return t}});var c=s("12151"),d=s("23169"),l=s.ir(s("1119")),r={},o="使用 MDX",a=[{text:"Markdown",depth:2,id:"markdown"},{text:"使用组件",depth:2,id:"使用组件"},{text:"Front Matter",depth:2,id:"front-matter"},{text:"自定义容器",depth:2,id:"自定义容器"},{text:"代码块",depth:2,id:"代码块"},{text:"开启 Rust 版本编译器",depth:2,id:"开启-rust-版本编译器"}];function i(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",blockquote:"blockquote",strong:"strong"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"使用-mdx",children:["使用 MDX",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-mdx",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js Doc 支持 ",(0,c.jsx)(n.a,{href:"https://mdxjs.com/",target:"_blank",rel:"noopener noreferrer",children:"MDX"}),"，这是一种功能强大的内容开发方式。"]}),"\n",(0,c.jsxs)(n.h2,{id:"markdown",children:["Markdown",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"MDX 是 Markdown 的超集，这意味着你可以像往常一样编写 Markdown 文件。例如："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-md",children:"# Hello World\n"})})]})}),"\n",(0,c.jsxs)(n.h2,{id:"使用组件",children:["使用组件",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用组件",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当你想在 Markdown 文件中使用 React 组件时，你应该使用 ",(0,c.jsx)(n.code,{children:".mdx"})," 扩展名来命名你的文件。例如："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-mdx",children:"// docs/index.mdx\nimport { CustomComponent } from './custom';\n\n# Hello World\n\n<CustomComponent />\n"})})]})}),"\n",(0,c.jsxs)(n.h2,{id:"front-matter",children:["Front Matter",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#front-matter",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"你可以在 Markdown 文件的开头添加 Front Matter，它是一个 YAML 格式的对象，用于定义一些元数据。例如："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-mdx",children:"---\ntitle: Hello World\n---\n"})})]})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"注意：默认情况下，Modern.js Doc 使用 h1 标题作为 html 的标题。"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"你还可以在正文中访问 Front Mattter 中定义的属性，例如："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-mdx",children:"---\ntitle: Hello World\n---\n\n# {frontmatter.title}\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["前面定义的属性将作为 ",(0,c.jsx)(n.code,{children:"frontmatter"})," 属性传递给组件。所以最终输出将是："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-html",children:"<h1>Hello World</h1>\n"})})]})}),"\n",(0,c.jsxs)(n.h2,{id:"自定义容器",children:["自定义容器",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义容器",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["你可以使用 ",(0,c.jsx)(n.code,{children:":::"})," 语法来创建自定义容器，且支持自定义标题。例如："]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"输入："})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-markdown",children:":::tip\n这是一个`tip`类型的`block`\n:::\n\n:::info\n这是一个`info`类型的`block`\n:::\n\n:::warning\n这是一个`warning`类型的`block`\n:::\n\n:::danger\n这是一个`danger`类型的`block`\n:::\n\n:::tip 自定义标题\n自定义标题的 `block`\n:::\n\n:::tip{title=自定义标题}\n自定义标题的 `block`\n:::\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"输出："})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["这是一个 ",(0,c.jsx)(n.code,{children:"tip"})," 类型的 ",(0,c.jsx)(n.code,{children:"block"}),"\n"]})})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["这是一个 ",(0,c.jsx)(n.code,{children:"info"})," 类型的 ",(0,c.jsx)(n.code,{children:"block"}),"\n"]})})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive warning",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["这是一个 ",(0,c.jsx)(n.code,{children:"warning"})," 类型的 ",(0,c.jsx)(n.code,{children:"block"}),"\n"]})})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive danger",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"DANGER"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["这是一个 ",(0,c.jsx)(n.code,{children:"danger"})," 类型的 ",(0,c.jsx)(n.code,{children:"block"}),"\n"]})})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"自定义标题"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["自定义标题的 ",(0,c.jsx)(n.code,{children:"block"}),"\n"]})})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"自定义标题"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["\n自定义标题的 ",(0,c.jsx)(n.code,{children:"block"}),"\n"]})})]}),"\n",(0,c.jsxs)(n.h2,{id:"代码块",children:["代码块",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码块",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"你可以使用 ``` 语法来创建代码块，且支持自定义标题。例如："}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"输入:"})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-md",children:"```js\nconsole.log('Hello World');\n```\n\n```js title=\"hello.js\"\nconsole.log('Hello World');\n```\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"输出:"})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"console.log('Hello World');\n"})})]})}),"\n",(0,c.jsxs)(n.div,{className:"language-",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:"hello.js"}),(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",meta:'title="hello.js"',children:"console.log('Hello World');\n"})})]})]}),"\n",(0,c.jsx)(n.p,{children:"你可以通过如下的语法指定代码行高亮，比如:"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"输入:"})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-md",children:"```js {1,3-5}\nconsole.log('Hello World');\n\nconst a = 1;\nconsole.log(a);\nconst b = 2;\nconsole.log(b);\n```\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"输出:"})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",meta:"{1,3-5}",children:"console.log('Hello World');\n\nconst a = 1;\nconsole.log(a);\nconst b = 2;\nconsole.log(b);\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"你也可以同时应用代码行高亮和代码块标题，比如:"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"输入:"})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-md",children:"```js title=\"hello.js\" {1,3-5}\nconsole.log('Hello World');\n\nconst a = 1;\n\nconsole.log(a);\n\nconst b = 2;\n\nconsole.log(b);\n```\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"输出:"})}),"\n",(0,c.jsxs)(n.div,{className:"language-",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:"hello.js"}),(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",meta:'title="hello.js" {1,3-5}',children:"console.log('Hello World');\n\nconst a = 1;\n\nconsole.log(a);\n\nconst b = 2;\n\nconsole.log(b);\n"})})]})]}),"\n",(0,c.jsxs)(n.h2,{id:"开启-rust-版本编译器",children:["开启 Rust 版本编译器",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开启-rust-版本编译器",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"你可以通过如下的配置开启 Rust 版本的 MDX 编译器:"}),"\n","\n",(0,c.jsx)(l.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(i,e)})):i(e)}}}]);