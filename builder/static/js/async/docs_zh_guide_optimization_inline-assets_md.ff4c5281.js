(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_optimization_inline-assets_md"],{30909:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},title:function(){return r},toc:function(){return a},default:function(){return t}});var c=s("9880"),i=s("23169"),d={},r="静态资源内联",a=[{text:"自动内联",depth:2,id:"自动内联"},{text:"强制内联",depth:2,id:"强制内联"},{text:"从 CSS 文件中引用",depth:3,id:"从-css-文件中引用"},{text:"强制不内联",depth:2,id:"强制不内联"},{text:"从 CSS 文件中引用",depth:3,id:"从-css-文件中引用-1"},{text:"内联 JS 文件",depth:2,id:"内联-js-文件"},{text:"内联 CSS 文件",depth:2,id:"内联-css-文件"},{text:"添加类型声明",depth:2,id:"添加类型声明"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",pre:"pre",code:"code",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"静态资源内联",children:["静态资源内联",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#静态资源内联",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"静态资源内联是一种优化网页性能的方法，它指的是将静态资源直接内联到 HTML 或 JS 文件中，而不是使用外部文件引用的方式。这样做的好处是减少了浏览器发起的请求数，从而提高页面的加载速度。"}),"\n",(0,c.jsx)(n.p,{children:"不过，静态资源内联也有一些缺点，比如增加了单个文件的体积，可能会导致加载变慢。所以在实际应用中，需要根据具体情况来决定是否使用静态资源内联。"}),"\n",(0,c.jsx)(n.p,{children:"Builder 默认会自动内联体积小于 10KB 的静态资源，但有时候你可能需要手动控制某些特殊资源，让其强制内联或者强制不内联，这篇文档阐述了如何进行精确地控制静态资源内联行为。"}),"\n",(0,c.jsxs)(n.h2,{id:"自动内联",children:["自动内联",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自动内联",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"默认情况下，当图片、字体、媒体等类型的文件体积小于阈值（默认为 10KB）时，Builder 会将资源进行内联处理，资源内联后，会被转换成一个 Base64 编码的字符串，不再会发送独立的 HTTP 请求。当文件体积大于或等于该阈值时，则会被作为单独的资源文件，通过独立的 HTTP 请求来加载。"}),"\n",(0,c.jsxs)(n.p,{children:["自动内联的体积阈值可以通过 ",(0,c.jsx)(n.a,{href:"/api/config-output#outputdataurilimit",children:"output.dataUriLimit"})," 配置项修改。例如，修改图片资源的阈值为 5000 字节，设置视频资源不内联："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    dataUriLimit: {\n      image: 5000,\n      media: 0,\n    },\n  },\n};\n"})})})}),"\n",(0,c.jsxs)(n.h2,{id:"强制内联",children:["强制内联",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#强制内联",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["你可以通过在引入资源时添加 ",(0,c.jsx)(n.code,{children:"inline"})," URL 参数来强制内联该资源，无论该资源的体积是否小于阈值。"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport img from './foo.png?inline';\n\nexport default function Foo() {\n  return <img src={img} />;\n}\n"})})})}),"\n",(0,c.jsxs)(n.p,{children:["在上面这个例子中，",(0,c.jsx)(n.code,{children:"foo.png"})," 图片将始终被内联，无论该图片的大小是否大于阈值。"]}),"\n",(0,c.jsxs)(n.p,{children:["除了 ",(0,c.jsx)(n.code,{children:"inline"})," 参数以外，你也可以使用 ",(0,c.jsx)(n.code,{children:"__inline"})," 参数来强制内联该资源："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import img from './foo.png?__inline';\n"})})})}),"\n",(0,c.jsxs)(n.h3,{id:"从-css-文件中引用",children:["从 CSS 文件中引用",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#从-css-文件中引用",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当你在 CSS 文件中引用静态资源时，同样可以通过 ",(0,c.jsx)(n.code,{children:"inline"})," 或 ",(0,c.jsx)(n.code,{children:"__inline"})," 参数来强制内联资源。"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-css",children:".foo {\n  background-image: url('./icon.png?inline');\n}\n"})})})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"你真的需要强制内联吗？"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsx)(n.p,{children:"内联体积过大的资源时，会显著增加页面的白屏时间或首次可交互时间，这会损害用户体验。并且当你将一个静态资源多次内联到 CSS 文件中时，base64 内容会重复注入，导致产物体积增大。因此，请酌情使用强制内联。"})})]}),"\n",(0,c.jsxs)(n.h2,{id:"强制不内联",children:["强制不内联",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#强制不内联",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当你想把一些资源始终作为单独的资源文件来处理，无论该资源的体积多小时，你可以添加 ",(0,c.jsx)(n.code,{children:"url"})," URL 参数来强制不内联该资源。"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport img from './foo.png?url';\n\nexport default function Foo() {\n  return <img src={img} />;\n}\n"})})})}),"\n",(0,c.jsxs)(n.p,{children:["在上面这个例子中，",(0,c.jsx)(n.code,{children:"foo.png"})," 图片将始终通过单独的资源文件加载，无论该图片的大小是否小于阈值。"]}),"\n",(0,c.jsxs)(n.p,{children:["除了 ",(0,c.jsx)(n.code,{children:"url"})," 参数以外，你也可以使用 ",(0,c.jsx)(n.code,{children:"__inline=false"})," 参数来强制不内联该资源："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import img from './foo.png?__inline=false';\n"})})})}),"\n",(0,c.jsxs)(n.h3,{id:"从-css-文件中引用-1",children:["从 CSS 文件中引用",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#从-css-文件中引用-1",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当你在 CSS 文件中引用静态资源时，同样可以通过 ",(0,c.jsx)(n.code,{children:"url"})," 或 ",(0,c.jsx)(n.code,{children:"__inline=false"})," 参数来强制不内联资源。"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-css",children:".foo {\n  background-image: url('./icon.png?url');\n}\n"})})})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"你真的需要把资源排除内联吗？"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsx)(n.p,{children:"将资源排除内联将增加 Web App 需要加载的资源数量，这对于弱网环境，或是未开启 HTTP2 的场景下，将会降低资源加载效率，因此，请酌情使用强制不内联。"})})]}),"\n",(0,c.jsxs)(n.h2,{id:"内联-js-文件",children:["内联 JS 文件",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#内联-js-文件",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"除了将静态资源文件内联到 JS 文件里，Builder 也支持将 JS 文件内联到 HTML 文件中。"}),"\n",(0,c.jsxs)(n.p,{children:["只需要开启 ",(0,c.jsx)(n.a,{href:"/api/config-output#outputenableinlinescripts",children:"output.enableInlineScripts"})," 配置项，构建生成的 JS 文件将不会被写入产物目录下，而是会直接内联到对应的 HTML 文件中。"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    enableInlineScripts: true,\n  },\n};\n"})})})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsx)(n.p,{children:"内联 JS 文件可能会导致 HTML 单文件体积过大，并且不利于静态资源缓存，请酌情使用。"})})]}),"\n",(0,c.jsxs)(n.h2,{id:"内联-css-文件",children:["内联 CSS 文件",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#内联-css-文件",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"你也可以将 CSS 文件内联到 HTML 文件中。"}),"\n",(0,c.jsxs)(n.p,{children:["只需要开启 ",(0,c.jsx)(n.a,{href:"/api/config-output#outputenableinlinestyles",children:"output.enableInlineStyles"})," 配置项，构建生成的 CSS 文件将不会被写入产物目录下，而是会直接内联到对应的 HTML 文件中。"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    enableInlineStyles: true,\n  },\n};\n"})})})}),"\n",(0,c.jsxs)(n.h2,{id:"添加类型声明",children:["添加类型声明",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加类型声明",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当你在 TypeScript 代码中使用 ",(0,c.jsx)(n.code,{children:"?inline"})," 和 ",(0,c.jsx)(n.code,{children:"?url"})," 等 URL 参数时，TypeScript 可能会提示该模块缺少类型定义："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{children:"TS2307: Cannot find module './logo.png?inline' or its corresponding type declarations.\n"})})})}),"\n",(0,c.jsxs)(n.p,{children:["此时你需要为这些 URL 参数添加类型声明，请在项目中创建 ",(0,c.jsx)(n.code,{children:"src/global.d.ts"})," 文件，并添加以下类型声明："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"declare module '*?inline' {\n  const content: string;\n  export default content;\n}\n\ndeclare module '*?inline' {\n  const content: string;\n  export default content;\n}\n\ndeclare module '*?__inline' {\n  const content: string;\n  export default content;\n}\n\ndeclare module '*?inline=false' {\n  const content: string;\n  export default content;\n}\n"})})})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}}}]);