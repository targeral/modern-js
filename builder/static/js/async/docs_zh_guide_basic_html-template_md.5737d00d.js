(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_basic_html-template_md"],{70092:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var s,t=r("15169"),l=r("43932"),a=r("9880"),h=r("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",div:"div"},(0,h.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"配置-html-模板",children:["配置 HTML 模板",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-html-模板",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"在构建的过程中，Builder 会基于 HTML 模板文件和模板参数进行编译，生成若干份 HTML 文件。"}),"\n",(0,a.jsx)(n.p,{children:"Builder 提供了一些配置项来对 HTML 模板进行设置。通过本章节你可以了解到这些配置项的基本用法。"}),"\n",(0,a.jsxs)(n.h2,{id:"设置模板文件",children:["设置模板文件",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#设置模板文件",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"通常来说，HTML 模板文件是由上层框架预先定义的。"}),"\n",(0,a.jsxs)(n.p,{children:["比如在 Modern.js 框架中，默认会预设一份 HTML 模板，同时也支持用户自定义模板的内容。你可以阅读 ",(0,a.jsx)(n.a,{href:"https://modernjs.dev/guides/basic-features/html.html",target:"_blank",rel:"noopener noreferrer",children:"「Modern.js - HTML 模板」"})," 章节来了解相关内容。"]}),"\n",(0,a.jsxs)(n.p,{children:["在 Builder 中，你可以使用 ",(0,a.jsx)(n.a,{href:"/api/config-html#htmltemplate",children:"html.template"})," 和 ",(0,a.jsx)(n.a,{href:"/api/config-html#htmltemplatebyentries",children:"html.templateByEntries"})," 配置项来设置自定义的 HTML 模板文件。"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    template: './static/index.html',\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"设置页面标题",children:["设置页面标题",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#设置页面标题",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["你可以通过 ",(0,a.jsx)(n.a,{href:"/api/config-html#htmltitle",children:"html.title"})," 和 ",(0,a.jsx)(n.a,{href:"/api/config-html#htmltitlebyentries",children:"html.titleByEntries"})," 配置项来设置 HTML 的 ",(0,a.jsx)(n.code,{children:"<title>"})," 标签。"]}),"\n",(0,a.jsxs)(n.p,{children:["当你的项目中只有一个页面时，直接使用 ",(0,a.jsx)(n.code,{children:"html.title"})," 设置即可："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    title: 'example',\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["当你的项目中有多个页面时，请使用 ",(0,a.jsx)(n.code,{children:"html.titleByEntries"})," 来为不同的页面设置对应的标题，",(0,a.jsx)(n.code,{children:"html.titleByEntries"})," 使用页面的「入口名称」作为 key。"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    titleByEntries: {\n      foo: 'Foo',\n      bar: 'Bar',\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"设置页面图标",children:["设置页面图标",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#设置页面图标",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Builder 支持设置 ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Favicon",target:"_blank",rel:"noopener noreferrer",children:"favicon"})," 图标 和 iOS 系统下的 ",(0,a.jsx)(n.a,{href:"https://webhint.io/docs/user-guide/hints/hint-apple-touch-icons/",target:"_blank",rel:"noopener noreferrer",children:"apple-touch-icon"})," 图标。"]}),"\n",(0,a.jsxs)(n.p,{children:["你可以通过 ",(0,a.jsx)(n.a,{href:"/api/config-html#htmlfavicon",children:"html.favicon"})," 和 ",(0,a.jsx)(n.a,{href:"/api/config-html#htmlfaviconbyentries",children:"html.faviconByEntries"})," 配置项来设置 favicon 图标。"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    favicon: './src/assets/icon.png',\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["也可以通过 ",(0,a.jsx)(n.a,{href:"/api/config-html#htmlappicon",children:"html.appIcon"})," 配置项来设置 iOS 系统下的 apple-touch-icon 图标。"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    appIcon: './src/assets/icon.png',\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"设置-meta-标签",children:["设置 meta 标签",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#设置-meta-标签",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["你可以通过 ",(0,a.jsx)(n.a,{href:"/api/config-html#htmlmeta",children:"html.meta"})," 和 ",(0,a.jsx)(n.a,{href:"/api/config-html#htmlmetabyentries",children:"html.metaByEntries"})," 配置项来设置 HTML 的 ",(0,a.jsx)(n.code,{children:"<meta>"})," 标签。"]}),"\n",(0,a.jsx)(n.p,{children:"比如设置 description："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    meta: {\n      description: 'a description of the page',\n    },\n  },\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"最终在 HTML 中生成的 meta 标签为："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<meta name="description" content="a description of the page" />\n'})}),"\n",(0,a.jsxs)(n.h2,{id:"设置模板参数",children:["设置模板参数",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#设置模板参数",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"在 HTML 模板中，你可以使用丰富的模板参数，Builder 默认注入的模板参数包括："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type DefaultParameters = {\n  meta: string; // 对应 html.meta 配置\n  title: string; // 对应 html.title 配置\n  mountId: string; // 对应 html.mountId 配置\n  entryName: string; // 入口名称\n  assetPrefix: string; // 对应 output.assetPrefix 配置\n  compilation: webpack.Compilation; // 对应 webpack 的 compilation 对象\n  webpackConfig: Configuration; // webpack 配置\n  // htmlWebpackPlugin 内置的参数\n  // 详见 https://github.com/jantimon/html-webpack-plugin\n  htmlWebpackPlugin: {\n    tags: object;\n    files: object;\n    options: object;\n  };\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["你也可以通过 ",(0,a.jsx)(n.a,{href:"/api/config-html#htmltemplateparameters",children:"html.templateParameters"})," 和 ",(0,a.jsx)(n.a,{href:"/api/config-html#htmltemplateparametersbyentries",children:"html.templateParametersByEntries"})," 配置项来传入自定义的模板参数。"]}),"\n",(0,a.jsx)(n.p,{children:"比如："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    templateParameters: {\n      text: 'World',\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["接下来，你可以在 HTML 模板中，通过 ",(0,a.jsx)(n.code,{children:"<%= text %>"})," 来读取参数："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<div>hello <%= text %>!</div>\n"})}),"\n",(0,a.jsx)(n.p,{children:"经过编译后的最终 HTML 代码如下："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<div>hello world!</div>\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"模板引擎",children:["模板引擎",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#模板引擎",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Builder 支持 ",(0,a.jsx)(n.a,{href:"https://www.lodashjs.com/docs/lodash.template",target:"_blank",rel:"noopener noreferrer",children:"Lodash Template"}),"、",(0,a.jsx)(n.a,{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer",children:"EJS"}),"、",(0,a.jsx)(n.a,{href:"https://pugjs.org/",target:"_blank",rel:"noopener noreferrer",children:"Pug"})," 等多个模板引擎，默认使用最基础的 Lodash Template 作为模板引擎。"]}),"\n",(0,a.jsxs)(n.h3,{id:"",children:[(0,a.jsx)(n.a,{href:"https://www.lodashjs.com/docs/lodash.template",target:"_blank",rel:"noopener noreferrer",children:"Lodash Template"}),(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["当模板文件的后缀为 ",(0,a.jsx)(n.code,{children:".html"})," 时，Builder 会使用 Lodash Template 对模板进行编译。"]}),"\n",(0,a.jsxs)(n.p,{children:["例如，在模板中定义一个 ",(0,a.jsx)(n.code,{children:"text"})," 参数，值为 ",(0,a.jsx)(n.code,{children:"'world'"}),"，在构建时会自动将 ",(0,a.jsx)(n.code,{children:"<%= text %>"})," 替换为对应的值。"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<!-- 输入  -->\n<div>hello <%= text %>!</div>\n\n<!-- 输出 -->\n<div>hello world!</div>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["请阅读 ",(0,a.jsx)(n.a,{href:"https://www.lodashjs.com/docs/lodash.template",target:"_blank",rel:"noopener noreferrer",children:"Lodash Template"})," 文档来了解完整用法。"]}),"\n",(0,a.jsxs)(n.h3,{id:"-1",children:[(0,a.jsx)(n.a,{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer",children:"EJS"}),(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#-1",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["当模板文件的后缀为 ",(0,a.jsx)(n.code,{children:".ejs"})," 时，Builder 会使用 EJS 模板引擎对模板进行编译。EJS 是一套简单的模板语言，支持直接在标签内书写简单、直白的 JavaScript 代码，并通过 JavaScript 输出最终所需的 HTML。"]}),"\n",(0,a.jsxs)(n.p,{children:["例如，你可以先通过 ",(0,a.jsx)(n.a,{href:"/api/config-html#htmltemplate",children:"html.template"})," 配置项来引用一个 ",(0,a.jsx)(n.code,{children:".ejs"})," 模板文件："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    template: './static/index.ejs',\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["接着在模板中定义一个 ",(0,a.jsx)(n.code,{children:"user"})," 参数，值为 ",(0,a.jsx)(n.code,{children:"{ name: 'Jack' }"}),"。在构建时，会自动将 ",(0,a.jsx)(n.code,{children:"<%= user.name %>"})," 替换为对应的值。"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<!-- 输入  -->\n<% if (user) { %>\n<h2><%= user.name %></h2>\n<% } %>\n\n<!-- 输出 -->\n<h2>Jack</h2>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["请阅读 ",(0,a.jsx)(n.a,{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer",children:"EJS"})," 文档来了解完整用法。"]}),"\n",(0,a.jsxs)(n.h3,{id:"-2",children:[(0,a.jsx)(n.a,{href:"https://pugjs.org/",target:"_blank",rel:"noopener noreferrer",children:"Pug"}),(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#-2",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["当模板文件的后缀为 ",(0,a.jsx)(n.code,{children:".pug"})," 时，Builder 会使用 Pug 模板引擎对模板进行编译。Pug 是一款健壮、灵活、功能丰富的模板引擎，专门为 Node.js 平台开发。"]}),"\n",(0,a.jsxs)(n.p,{children:["使用 Pug 模板前，需要开启 ",(0,a.jsx)(n.a,{href:"/api/config-tools#toolspug",children:"tools.pug"})," 配置项，并通过 ",(0,a.jsx)(n.a,{href:"/api/config-html#htmltemplate",children:"html.template"})," 配置项来引用一个 ",(0,a.jsx)(n.code,{children:".pug"})," 模板文件："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    template: './static/index.pug',\n  },\n  tools: {\n    pug: true,\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["开启后，你可以在 ",(0,a.jsx)(n.code,{children:".pug"})," 模板中使用 Pug 语法："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<!-- 输入  -->\np Hello #{text}!\n\n<!-- 输出 -->\n<p>Hello World!</p>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["请阅读 ",(0,a.jsx)(n.a,{href:"https://pugjs.org/",target:"_blank",rel:"noopener noreferrer",children:"Pug"})," 文档来了解完整用法。"]}),"\n",(0,a.jsxs)(n.h2,{id:"注入标签",children:["注入标签",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注入标签",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["通过配置 ",(0,a.jsx)(n.code,{children:"html.tags"})," 选项可以在最终生成的 HTML 产物中插入任意标签。"]}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive warning",children:[(0,a.jsx)(n.div,{className:"modern-directive-title",children:"使用场景"}),(0,a.jsx)(n.div,{className:"modern-directive-content",children:(0,a.jsx)(n.p,{children:"前端应用的产物最终都会直接或间接地被 HTML 入口引用，但大多数时候直接向 HTML 注入标签都并非首选。"})})]}),"\n",(0,a.jsxs)(n.p,{children:["模版文件中可以通过 ",(0,a.jsx)(n.code,{children:"htmlWebpackPlugin.tags"})," 变量来访问需要最终注入到 HTML 的所有标签："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<html>\n  <head>\n    <%= htmlWebpackPlugin.tags.headTags %>\n  </head>\n  <body>\n    <%= htmlWebpackPlugin.tags.bodyTags %>\n  </body>\n</html>\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"html.tags"})," 的作用就是调整这些模板变量进而修改 HTML，配置的具体定义参考 ",(0,a.jsx)(n.a,{href:"/api/config-html#htmltags",children:"API References"}),"。"]}),"\n",(0,a.jsxs)(n.h3,{id:"对象形式",children:["对象形式",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#对象形式",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    assetPrefix: '//example.com/'\n  },\n  html: {\n    tags: [\n      { tag: 'script', attrs: { src: 'a.js' } },\n      { tag: 'script', attrs: { src: 'b.js' }, append: false },\n      { tag: 'link', attrs: { href: 'style.css', rel: 'stylesheet' }, append: true }\n      { tag: 'link', attrs: { href: 'page.css', rel: 'stylesheet' }, publicPath: false }\n      { tag: 'script', attrs: { src: 'c.js' }, head: false },\n      { tag: 'meta', attrs: { name: 'referrer', content: 'origin' } },\n    ],\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["标签最终的插入位置由 ",(0,a.jsx)(n.code,{children:"head"})," 和 ",(0,a.jsx)(n.code,{children:"append"})," 选项决定，两个配置相同的元素将被插入到相同区域，并且维持彼此之间的相对位置。"]}),"\n",(0,a.jsxs)(n.p,{children:["标签默认会启用 ",(0,a.jsx)(n.code,{children:"publicPath"})," 配置，即会将 ",(0,a.jsx)(n.code,{children:"output.assetPrefix"})," 的值拼接到 ",(0,a.jsx)(n.code,{children:"script"})," 标签的 ",(0,a.jsx)(n.code,{children:"src"})," 等表示路径的属性上。"]}),"\n",(0,a.jsx)(n.p,{children:"所以以上配置构建出的 HTML 产物将会类似："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <script src="//example.com/b.js"></script>\n    <link href="//example.com/style.css" rel="stylesheet" />\n    <link href="page.css" rel="stylesheet" />\n    <!-- some other headTags... -->\n    <script src="//example.com/a.js"></script>\n    <meta name="referrer" content="origin" />\n  </head>\n  <body>\n    <!-- some other bodyTags... -->\n    <script src="//example.com/c.js"></script>\n  </body>\n</html>\n'})}),"\n",(0,a.jsxs)(n.h3,{id:"函数形式",children:["函数形式",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数形式",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"html.tags"})," 也支持传入回调函数，常用于修改标签列表或是在插入标签的同时确保其相对位置："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    tags: [\n      tags => {\n        tags.splice(0, 1);\n      },\n      { tag: 'script', attrs: { src: 'a.js' }, head: false },\n      { tag: 'script', attrs: { src: 'b.js' }, append: false },\n      { tag: 'script', attrs: { src: 'c.js' } },\n      tags => [...tags, { tag: 'script', attrs: { src: 'd.js' } }],\n    ],\n  },\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"最终产物将会类似："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <!-- some other headTags... -->\n    <script src="//example.com/c.js"></script>\n    <script src="//example.com/d.js"></script>\n  </head>\n  <body>\n    <!-- some other bodyTags... -->\n    <script src="//example.com/a.js"></script>\n  </body>\n</html>\n'})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/builder-doc/docs/zh/guide/basic/html-template.md"]={toc:[{text:"设置模板文件",id:"设置模板文件",depth:2},{text:"设置页面标题",id:"设置页面标题",depth:2},{text:"设置页面图标",id:"设置页面图标",depth:2},{text:"设置 meta 标签",id:"设置-meta-标签",depth:2},{text:"设置模板参数",id:"设置模板参数",depth:2},{text:"模板引擎",id:"模板引擎",depth:2},{text:"",id:"",depth:3},{text:"",id:"-1",depth:3},{text:"",id:"-2",depth:3},{text:"注入标签",id:"注入标签",depth:2},{text:"对象形式",id:"对象形式",depth:3},{text:"函数形式",id:"函数形式",depth:3}],title:"配置 HTML 模板",frontmatter:{}};var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,h.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,l._(t._({},e),{children:(0,a.jsx)(c,t._({},e))})):c(e)}}}]);