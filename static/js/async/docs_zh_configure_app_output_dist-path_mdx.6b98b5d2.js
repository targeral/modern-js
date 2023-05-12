(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_dist-path_mdx"],{30863:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var i=s("9880"),r=s("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",pre:"pre",code:"code",p:"p",h3:"h3",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"type DistPathConfig = {\n  root?: string;\n  js?: string;\n  css?: string;\n  svg?: string;\n  font?: string;\n  html?: string;\n  image?: string;\n  media?: string;\n  server?: string;\n};\n"})})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"默认值"})}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"const defaultDistPath = {\n  root: 'dist',\n  html: 'html',\n  js: 'static/js',\n  css: 'static/css',\n  svg: 'static/svg',\n  font: 'static/font',\n  image: 'static/image',\n  media: 'static/media',\n  server: 'bundles',\n};\n"})})})}),"\n",(0,i.jsx)(n.p,{children:"设置构建产物的输出目录，Builder 会根据产物的类型输出到对应的子目录下。"}),"\n",(0,i.jsx)(n.p,{children:"其中："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"root"}),": 表示所有构建产物输出的根目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"html"}),"：表示 HTML 文件的输出目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"js"}),"：表示 JavaScript 文件的输出目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"css"}),"：表示 CSS 样式文件的输出目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"svg"}),"：表示 SVG 图片的输出目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"font"}),"：表示字体文件的输出目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"image"}),"：表示非 SVG 图片的输出目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"media"}),"：表示视频等媒体资源的输出目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"server"}),": 表示服务端产物的输出目录，仅在 target 为 ",(0,i.jsx)(n.code,{children:"node"})," 时有效。"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"示例",children:["示例",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["以 JavaScript 文件为例，会输出到 ",(0,i.jsx)(n.code,{children:"distPath.root"})," + ",(0,i.jsx)(n.code,{children:"distPath.js"})," 目录，即为 ",(0,i.jsx)(n.code,{children:"dist/static/js"}),"。"]}),"\n",(0,i.jsxs)(n.p,{children:["如果需要将 JavaScript 文件输出到 ",(0,i.jsx)(n.code,{children:"build/resource/js"})," 目录，可以这样设置："]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    distPath: {\n      root: 'build',\n      js: 'resource/js',\n    },\n  },\n};\n"})})})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}},58191:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return a},default:function(){return o}});var i=s("9880"),r=s("23169"),t=s.ir(s("30863")),c={sidebar_label:"distPath"},d="output.distPath",a=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"outputdistpath",children:["output.distPath",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdistpath",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputdistpath",target:"_blank",rel:"noopener noreferrer",children:"output.distPath"}),"。\n"]})})]}),"\n","\n",(0,i.jsx)(t.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);