(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_favicon_mdx"],{49695:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s,i=r("15169"),c=r("43932"),o=r("9880"),l=r("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,l.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"类型："})," ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"默认值："})," ",(0,o.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"设置页面的 favicon 图标，可以设置为："}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"URL 地址。"}),"\n",(0,o.jsx)(n.li,{children:"文件的绝对路径。"}),"\n",(0,o.jsx)(n.li,{children:"相对于项目根目录的相对路径。"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["配置该选项后，在编译过程中会自动将图标拷贝至 dist 目录下，并在 HTML 中添加相应的 ",(0,o.jsx)(n.code,{children:"link"})," 标签。"]}),"\n",(0,o.jsxs)(n.h3,{id:"示例",children:["示例",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"设置为相对路径："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    favicon: './src/assets/icon.png',\n  },\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"设置为绝对路径："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  html: {\n    favicon: path.resolve(__dirname, './src/assets/icon.png'),\n  },\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"设置为 URL："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  html: {\n    favicon: 'https://foo.com/favicon.ico',\n  },\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"重新编译后，HTML 中自动生成了以下标签："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<link rel="icon" href="/favicon.ico" />\n'})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/builder-doc/docs/zh/config/html/favicon.md"]={toc:[{text:"示例",id:"示例",depth:3}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,c._(i._({},e),{children:(0,o.jsx)(t,i._({},e))})):t(e)}},64757:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var s,i=r("15169"),c=r("43932"),o=r("9880"),l=r("23169"),t=r.ir(r("49695"));function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,l.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"htmlfavicon",children:["html.favicon",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlfavicon",children:"#"})]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive tip",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmlfavicon",target:"_blank",rel:"noopener noreferrer",children:"html.favicon"}),"。\n"]})})]}),"\n","\n",(0,o.jsx)(t.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/zh/configure/app/html/favicon.mdx"]={toc:[],title:"html.favicon",frontmatter:{sidebar_label:"favicon"}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,c._(i._({},e),{children:(0,o.jsx)(a,i._({},e))})):a(e)}}}]);