(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_template-parameters_mdx"],{8170:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var r,a=t("15169"),s=t("43932"),l=t("9880"),i=t("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"类型："})," ",(0,l.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"type DefaultParameters = {\n  meta: string; // 对应 html.meta 配置\n  title: string; // 对应 html.title 配置\n  mountId: string; // 对应 html.mountId 配置\n  entryName: string; // 入口名称\n  assetPrefix: string; // 对应 output.assetPrefix 配置\n  compilation: webpack.Compilation; // 对应 webpack 的 compilation 对象\n  webpackConfig: Configuration; // webpack 配置\n  // htmlWebpackPlugin 内置的参数\n  // 详见 https://github.com/jantimon/html-webpack-plugin\n  htmlWebpackPlugin: {\n    tags: object;\n    files: object;\n    options: object;\n  };\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["定义 HTML 模板中的参数，对应 ",(0,l.jsx)(n.a,{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"html-webpack-plugin"})," 的 ",(0,l.jsx)(n.code,{children:"templateParameters"})," 配置项。你可以使用配置为对象或者函数。"]}),"\n",(0,l.jsx)(n.p,{children:"如果是对象，会和默认参数合并。比如："}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    templateParameters: {\n      title: 'My App',\n    },\n  },\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"如果是函数，会传入默认参数，你可以返回一个对象，用于覆盖默认参数。比如："}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    templateParameters: defaultParameters => {\n      console.log(defaultParameters.compilation);\n      console.log(defaultParameters.title);\n      return {\n        title: 'My App',\n      };\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"示例",children:["示例",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["如果需要在 HTML 模板中使用 ",(0,l.jsx)(n.code,{children:"foo"})," 参数，可以添加如下设置："]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    templateParameters: {\n      foo: 'bar',\n    },\n  },\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"或者使用函数配置："}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    templateParameters: defaultParameters => {\n      return {\n        foo: 'bar',\n      };\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["接下来，你可以在 HTML 模板中，通过 ",(0,l.jsx)(n.code,{children:"<%= foo %>"})," 来读取参数："]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"<script>window.foo = '<%= foo %>'</script>\n"})}),"\n",(0,l.jsx)(n.p,{children:"经过编译后的最终 HTML 代码如下："}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"<script>window.foo = 'bar'</script>\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/builder-doc/docs/zh/config/html/templateParameters.md"]={toc:[{text:"示例",id:"示例",depth:3}],title:"",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,s._(a._({},e),{children:(0,l.jsx)(o,a._({},e))})):o(e)}},44148:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var r,a=t("15169"),s=t("43932"),l=t("9880"),i=t("23169"),o=t.ir(t("8170"));function c(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"htmltemplateparameters",children:["html.templateParameters",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmltemplateparameters",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,l.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmltemplateparameters",target:"_blank",rel:"noopener noreferrer",children:"html.templateParameters"}),"。\n"]})})]}),"\n","\n",(0,l.jsx)(o.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/zh/configure/app/html/template-parameters.mdx"]={toc:[],title:"html.templateParameters",frontmatter:{sidebar_label:"templateParameters"}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,s._(a._({},e),{children:(0,l.jsx)(c,a._({},e))})):c(e)}}}]);