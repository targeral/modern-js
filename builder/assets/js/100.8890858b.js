(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{323:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"引用-svg-资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用-svg-资源"}},[t._v("#")]),t._v(" 引用 SVG 资源")]),t._v(" "),s("p",[t._v("Builder 支持在代码中引用 SVG 资源，并将 SVG 图片转换为 React 组件或 URL。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("什么是 SVG")]),t._v(" "),s("p",[t._v("SVG 是 Scalable Vector Graphics 的缩写，意为可伸缩矢量图形。SVG 是一种用来描述二维矢量图形的 XML-based 格式，可以用来创建可以无限放大或缩小而不失真的图像。因为 SVG 图形是由矢量图形元素组成的，所以可以轻松地在各种尺寸和分辨率下渲染。")])]),t._v(" "),s("h2",{attrs:{id:"在-js-文件中引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-js-文件中引用"}},[t._v("#")]),t._v(" 在 JS 文件中引用")]),t._v(" "),s("p",[t._v("在 JS 文件中引用 SVG 资源时，如果你具名导入 "),s("code",[t._v("ReactComponent")]),t._v(" 对象，Builder 会调用 "),s("a",{attrs:{href:"https://react-svgr.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SVGR"),s("OutboundLink")],1),t._v("，将 SVG 图片转换为一个 React 组件。")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/component/Logo.tsx")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ReactComponent "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Logo "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./static/logo.svg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logo")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("如果你使用默认导入，那么 SVG 会被当做普通的静态资源来处理，你会得到一个 URL 字符串：")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logoURL "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./static/logo.svg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logoURL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "/static/logo.6c12aba3.png"')]),t._v("\n")])])]),s("h2",{attrs:{id:"修改默认导出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改默认导出"}},[t._v("#")]),t._v(" 修改默认导出")]),t._v(" "),s("p",[t._v("你可以通过 "),s("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-svgdefaultexport"}},[t._v("output.svgDefaultExport")]),t._v(" 配置项来修改 SVG 文件默认导出的内容，比如把默认导出的内容设置为 React 组件：")],1),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    svgDefaultExport"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'component'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("此时再使用默认导入，你会得到一个 React 组件，而不是 URL：")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/component/Logo.tsx")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Logo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./static/logo.svg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logo")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"在-css-文件中引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-css-文件中引用"}},[t._v("#")]),t._v(" 在 CSS 文件中引用")]),t._v(" "),s("p",[t._v("在 CSS 文件中引用 SVG 资源时，SVG 会被当做一个普通的静态资源来处理，你会得到一个 URL：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".logo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string url"}},[t._v("'../static/logo.svg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"静态资源处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态资源处理"}},[t._v("#")]),t._v(" 静态资源处理")]),t._v(" "),s("p",[t._v("当 SVG 不是作为 React 组件，而是作为一个普通的静态资源被引用时，它的处理逻辑和其他静态资源完全一致，也会受到静态资源内联、URL 前缀等规则的影响。")]),t._v(" "),s("p",[t._v("请阅读 "),s("RouterLink",{attrs:{to:"/guide/basic/static-assets.html"}},[t._v("引用静态资源")]),t._v(" 章节来了解静态资源的处理规则。")],1)])}),[],!1,null,null,null);s.default=e.exports}}]);