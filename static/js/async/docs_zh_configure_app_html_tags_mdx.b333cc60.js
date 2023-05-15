(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_tags_mdx"],{7768:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var r=s("9880"),c=s("23169");function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"ArrayOrNot<HtmlInjectTag | HtmlInjectTagHandler>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"添加和修改最终注入到 HTML 页面的标签。"}),"\n",(0,r.jsxs)(n.h4,{id:"对象形式",children:["对象形式",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#对象形式",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export interface HtmlInjectTag {\n  tag: string;\n  attrs?: Record<string, string | boolean | null | undefined>;\n  children?: string;\n  /** @default false */\n  hash?: boolean | string | ((url: string, hash: string) => string);\n  /** @default true */\n  publicPath?: boolean | string | ((url: string, publicPath: string) => string);\n  /** @default false */\n  append?: boolean;\n  /**\n   * 仅对于允许包含在 head 中的元素会默认启用\n   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head#see_also}\n   */\n  head?: boolean;\n}\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"对象形式的配置项可以用于描述需要注入的标签，并可以通过参数控制注入的位置："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    assetPrefix: '//example.com/',\n  },\n  html: {\n    tags: [\n      {\n        tag: 'script',\n        attrs: { src: 'a.js' },\n        head: true,\n        append: true,\n        publicPath: true,\n        hash: true,\n      },\n    ],\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["这样的配置将会在 HTML 的 ",(0,r.jsx)(n.code,{children:"head"})," 最后添加一个 ",(0,r.jsx)(n.code,{children:"script"})," 标签："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <!-- some other headTags... -->\n    <script src="//example.com/a.js?8327ec63"></script>\n  </head>\n  <body>\n    <!-- some other bodyTags... -->\n  </body>\n</html>\n'})})})}),"\n",(0,r.jsxs)(n.p,{children:["标签最终的插入位置由 ",(0,r.jsx)(n.code,{children:"head"})," 和 ",(0,r.jsx)(n.code,{children:"append"})," 选项决定，两个配置相同的元素将被插入到相同区域，并且维持彼此之间的相对位置。"]}),"\n",(0,r.jsxs)(n.p,{children:["标签中表示外部资源文件路径的字段会受到 ",(0,r.jsx)(n.code,{children:"publicPath"})," 和 ",(0,r.jsx)(n.code,{children:"hash"})," 选项的影响，\n这些字段包括 ",(0,r.jsx)(n.code,{children:"script"})," 标签的 ",(0,r.jsx)(n.code,{children:"src"})," 和 ",(0,r.jsx)(n.code,{children:"link"})," 标签的 ",(0,r.jsx)(n.code,{children:"href"}),"。"]}),"\n",(0,r.jsxs)(n.p,{children:["启用 ",(0,r.jsx)(n.code,{children:"publicPath"})," 会让标签中表示路径的属性被拼接上 ",(0,r.jsx)(n.code,{children:"output.assetPrefix"})," 字段。\n而 ",(0,r.jsx)(n.code,{children:"hash"})," 字段会让文件名后多出一个哈希查询用于控制浏览器缓存，哈希字符串与 HTML 文件产物的哈希值相同。"]}),"\n",(0,r.jsx)(n.p,{children:"用户也可以向这两个配置传入函数，以自行控制路径拼接的逻辑。"}),"\n",(0,r.jsxs)(n.h4,{id:"函数形式",children:["函数形式",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数形式",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export type HtmlInjectTagUtils = {\n  outputName: string;\n  publicPath: string;\n  hash: string;\n};\n\nexport type HtmlInjectTagHandler = (\n  tags: HtmlInjectTag[],\n  utils: HtmlInjectTagUtils,\n) => HtmlInjectTag[] | void;\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"html.tags"})," 也支持传入回调函数，通过在回调中编写逻辑可以任意修改标签列表，常用于修改标签列表或是在插入标签的同时确保其相对位置。"]}),"\n",(0,r.jsx)(n.p,{children:"回调函数接受 tags 列表作为参数，并需要修改或直接返回新的 tags 数组："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    tags: [\n      tags => {\n        tags.splice(0, 1);\n      },\n      /* ^?\n       *   { tag: 'script', attrs: { src: 'b.js' } },\n       *   ... some other headTags\n       *   { tag: 'script', attrs: { src: 'c.js' } },\n       *   ... some other bodyTags\n       *   { tag: 'script', attrs: { src: 'a.js' }, head: false },\n       */\n      { tag: 'script', attrs: { src: 'a.js' }, head: false },\n      { tag: 'script', attrs: { src: 'b.js' }, append: false },\n      { tag: 'script', attrs: { src: 'c.js' } },\n      tags => [...tags, { tag: 'script', attrs: { src: 'd.js' } }],\n      /* ^?\n       *   ... some other headTags\n       *   { tag: 'script', attrs: { src: 'c.js' } },\n       *   ... some other bodyTags\n       *   { tag: 'script', attrs: { src: 'a.js' }, head: false },\n       */\n    ],\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["函数将在 HTML 处理流程的最后被执行，即如下的例子中不管回调函数在配置项中的位置如何，\n参数 ",(0,r.jsx)(n.code,{children:"tags"})," 都会包含配置项中所有的对象形式配置。"]}),"\n",(0,r.jsxs)(n.p,{children:["也因此在回调中修改 ",(0,r.jsx)(n.code,{children:"append"})," ",(0,r.jsx)(n.code,{children:"publicPath"})," ",(0,r.jsx)(n.code,{children:"hash"})," 等属性都不会生效，因为这些属性都已经分别应用到了标签的位置和路径属性。"]}),"\n",(0,r.jsx)(n.p,{children:"于是最终产物将会类似："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <!-- tags with `{ head: true, append: false }` here. -->\n    <!-- some other headTags... -->\n    <!-- tags with `{ head: true, append: true }` here. -->\n    <script src="//example.com/c.js"></script>\n    <script src="//example.com/d.js"></script>\n  </head>\n  <body>\n    <!-- tags with `{ head: false, append: false }` here. -->\n    <!-- some other bodyTags... -->\n    <!-- tags with `{ head: false, append: true }` here. -->\n    <script src="//example.com/a.js"></script>\n  </body>\n</html>\n'})})})}),"\n",(0,r.jsxs)(n.h4,{id:"限制",children:["限制",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#限制",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["这个配置用于在 Builder 构建完成后修改 HTML 产物的内容，并不会引入和解析新的模块。因此，它无法用于引入未编译的源码文件，也无法代替 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#source.preentry",target:"_blank",rel:"noopener noreferrer",children:"source.preEntry"})," 等配置。"]}),"\n",(0,r.jsx)(n.p,{children:"例如对于以下项目："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-plain",children:"web-app\n├── src\n│   ├── index.tsx\n│   └── polyfill.ts\n└── modern.config.ts\n"})})})}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  output: {\n    assetPrefix: '//example.com/',\n  },\n  html: {\n    tags: [\n      { tag: 'script', attrs: { src: './src/polyfill.ts' } },\n    ],\n  },\n};\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["这里的 tag 对象将会在简单处理后直接添加到 HTML 产物中，但对应的 ",(0,r.jsx)(n.code,{children:"polyfill.ts"})," 将不会被转译、打包，也因此应用会在处理这行脚本时出现 404 错误。"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-html",children:'<body>\n  <script src="//example.com/src/polyfill.ts"></script>\n</body>\n'})})})}),"\n",(0,r.jsx)(n.p,{children:"合理的使用场景包括："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["注入 CDN 上 ",(0,r.jsx)(n.strong,{children:"路径确定"})," 的静态资源"]}),"\n",(0,r.jsx)(n.li,{children:"注入需要首屏加载的内联脚本"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"例如以下示例的使用方式："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-plain",children:"web-app\n├── src\n│   └── index.tsx\n├── public\n│   └── service-worker.js\n└── modern.config.ts\n"})})})}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"function report() {\n  fetch('https://www.example.com/report')\n}\n\nexport default {\n  html: {\n    output: {\n      assetPrefix: '//example.com/',\n    },\n    tags: [\n      // Inject asset from the `public` directory.\n      { tag: 'script', attrs: { src: 'service-worker.js' } },\n      // Inject asset from other CDN url.\n      {\n        tag: 'script',\n        publicPath: false,\n        attrs: { src: 'https://cdn.example.com/foo.js' },\n      },\n      // Inject inline script.\n      {\n        tag: 'script',\n        children: report.toString() + '\\nreport()',\n      }\n    ],\n  },\n};\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"得到的产物将会类似："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-html",children:'<body>\n  <script src="//example.com/service-worker.js"></script>\n  <script src="https://cdn.example.com/foo.js"></script>\n  <script>\n    function report() {\n      fetch(\'https://www.example.com/report\')\n    }\n    report()\n  </script>\n</body>\n'})})})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},31610:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return t},title:function(){return l},toc:function(){return d},default:function(){return o}});var r=s("9880"),c=s("23169"),a=s.ir(s("7768")),t={sidebar_label:"tags"},l="html.tags",d=[];function i(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"htmltags",children:["html.tags",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmltags",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmltags",target:"_blank",rel:"noopener noreferrer",children:"html.tags"}),"。\n"]})})]}),"\n","\n",(0,r.jsx)(a.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}}}]);