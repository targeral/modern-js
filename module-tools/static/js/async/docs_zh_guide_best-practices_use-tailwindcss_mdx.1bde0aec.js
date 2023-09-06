(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["docs_zh_guide_best-practices_use-tailwindcss_mdx"],{3141:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var i,l=s("15169"),d=s("43932"),r=s("9880"),a=s("23169");function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ol:"ol",li:"li",code:"code",pre:"pre",div:"div",h3:"h3",strong:"strong",h4:"h4",ul:"ul",blockquote:"blockquote"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"使用-tailwind-css",children:["使用 Tailwind CSS",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-tailwind-css",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"})," 是一个以 Utility Class 为基础的 CSS 框架和设计系统，可以快速地为组件添加常用样式，同时支持主题样式的灵活扩展。"]}),"\n",(0,r.jsx)(n.p,{children:"Module Tools 支持使用 Tailwind CSS 开发组件样式。"}),"\n",(0,r.jsxs)(n.h2,{id:"启用-tailwind-css",children:["启用 Tailwind CSS",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#启用-tailwind-css",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"默认情况下，Module Tools 没有开启该功能，需要按照下面的方式开启它。"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["在项目根目录下执行 ",(0,r.jsx)(n.code,{children:"new"})," 命令，可以开启 Tailwind CSS 功能。"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",meta:'title="终端"',children:"pnpm run new\n\n? 请选择你想要的操作：启用可选功能\n? 请选择功能名称：启用 「Tailwind CSS」 支持\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["成功开启后，会看到 ",(0,r.jsx)(n.code,{children:"package.json"})," 中新增了依赖。"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",meta:'title="./package.json"',children:'{\n  "devDependencies": {\n    "@modern-js/plugin-tailwindcss": "x.y.z"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["最后，需要手动在配置文件中注册 ",(0,r.jsx)(n.code,{children:"tailwindcssPlugin"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';\n\nexport default defineConfig({\n  plugins: [moduleTools(), tailwindPlugin()],\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"配置-tailwind-css",children:["配置 Tailwind CSS",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-tailwind-css",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在 Module Tools 中，你有两种方式来配置 Tailwind CSS："}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["使用 ",(0,r.jsx)(n.code,{children:"tailwind.config.{ts,js}"})," 文件，该用法与 Tailwind CSS 的官方用法一致，请参考 ",(0,r.jsx)(n.a,{href:"https://tailwindcss.com/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:'"Tailwind CSS - Configuration"'})," 来了解更多用法。"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="tailwind.config.ts"',children:"import type { Config } from 'tailwindcss';\n\nexport default {\n  content: ['./src/**/*.{js,jsx,ts,tsx}'],\n} as Config;\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["请升级 Module Tools 到 >= 2.33.0 版本，以支持自动读取 ",(0,r.jsx)(n.code,{children:"tailwind.config.{ts,js}"})," 文件。\n"]})})]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["使用 ",(0,r.jsx)(n.a,{href:"/api/config/build-config#styletailwindcss",children:"style.tailwindcss"})," 配置项，这是旧版本的用法，我们更推荐使用 ",(0,r.jsx)(n.code,{children:"tailwind.config.{ts,js}"})," 文件进行配置。"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  style: {\n    tailwindcss: {\n      content: ['./src/**/*.{js,jsx,ts,tsx}'],\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["如果你同时使用了 ",(0,r.jsx)(n.code,{children:"tailwind.config.{ts,js}"})," 文件和 ",(0,r.jsx)(n.code,{children:"style.tailwindcss"})," 选项，那么 ",(0,r.jsx)(n.code,{children:"style.tailwindcss"})," 定义的配置会优先生效，并覆盖 ",(0,r.jsx)(n.code,{children:"tailwind.config.{ts,js}"})," 中定义的内容。"]}),"\n",(0,r.jsxs)(n.h2,{id:"tailwind-css-自动补全",children:["Tailwind CSS 自动补全",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tailwind-css-自动补全",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Tailwind CSS 官方提供了 ",(0,r.jsx)(n.a,{href:"https://github.com/tailwindlabs/tailwindcss-intellisense",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS IntelliSense"})," 插件，用于在 VS Code 中自动补全 Tailwind CSS 的 class names、CSS functions 和 directives。"]}),"\n",(0,r.jsx)(n.p,{children:"你可以参考以下步骤来启动自动补全功能："}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["在 VS Code 中安装 ",(0,r.jsx)(n.a,{href:"https://github.com/tailwindlabs/tailwindcss-intellisense",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS IntelliSense"})," 插件。"]}),"\n",(0,r.jsxs)(n.li,{children:["如果项目的根目录没有 ",(0,r.jsx)(n.code,{children:"tailwind.config.{ts,js}"})," 文件，那么你需要创建该文件，并写入当前项目的 Tailwind CSS 配置，否则 IDE 插件将无法正确生效。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"用法介绍",children:["用法介绍",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#用法介绍",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Tailwind CSS 提供了两种使用方式："}),"\n",(0,r.jsxs)(n.h3,{id:"html-类名",children:["HTML 类名",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-类名",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Tailwind CSS 支持在 HTML 标签上使用类名的方式增加样式。",(0,r.jsx)(n.strong,{children:"当使用 HTML 类名的时候，一定要注意导入 Tailwind CSS 相应的 css 文件。"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="./src/index.tsx"',children:"import 'tailwindcss/utilities.css';\n\nexport default () => {\n  return <div className=\"bg-black text-white\">hello world</div>;\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"样式产物（此时是 bundle 构建）："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",meta:'title="./dist/es/index.css"',children:"/* node_modules/tailwindcss/utilities.css */\n.table {\n  display: table;\n}\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n/** some more... */\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"apply",children:[(0,r.jsx)(n.code,{children:"@apply"}),(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apply",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Tailwind CSS 提供了 ",(0,r.jsx)(n.a,{href:"https://v2.tailwindcss.com/docs/functions-and-directives#apply",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"@apply"})})," 指令，可以通过它将 Tailwind CSS 提供的样式内联到我们编写的样式中。"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@apply"})," 可以用于 CSS、Less、Sass 中。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:".btn {\n  @apply font-bold py-2 px-4 rounded;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"但是使用过程中，对于 Less 和 Sass 有些情况需要注意："}),"\n",(0,r.jsxs)(n.h4,{id:"sass",children:["Sass",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sass",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["当将 Tailwind 与 Sass 一起使用时，",(0,r.jsx)(n.code,{children:"@apply"})," 后面存在 ",(0,r.jsx)(n.code,{children:"!important"})," 的时候，需要使用插值来让 Sass 正确编译。"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"不能正常工作："}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sass",children:".alert {\n  @apply bg-red-500 !important;\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"能够正常工作："}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sass",children:".alert {\n  @apply bg-red-500 #{!important};\n}\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"less",children:["Less",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#less",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在与 Less 一起使用 Tailwind 时，你不能嵌套 Tailwind 的 ",(0,r.jsx)(n.code,{children:"@screen"})," 指令。"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"不能正常工作："}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-less",children:".card {\n  @apply rounded-none;\n\n  @screen sm {\n    @apply rounded-lg;\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["相反，使用常规的媒体查询和 ",(0,r.jsx)(n.code,{children:"theme()"})," 函数来引用你的屏幕尺寸，或者干脆不要嵌套你的 ",(0,r.jsx)(n.code,{children:"@screen"})," 指令。"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-less",meta:'title="方法一"',children:"// Use a regular media query and theme()\n.card {\n  @apply rounded-none;\n\n  @media (min-width: theme('screens.sm')) {\n    @apply rounded-lg;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-less",meta:'title="方法二"',children:"// Use the @screen directive at the top-level\n.card {\n  @apply rounded-none;\n\n  @media (min-width: theme('screens.sm')) {\n    @apply rounded-lg;\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"推荐方式",children:["推荐方式",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#推荐方式",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["推荐使用 ",(0,r.jsx)(n.code,{children:"@apply"})," 指定的方式开发样式，这样在样式产物中仅包含通过指令内联的样式。"]})}),"\n",(0,r.jsx)(n.p,{children:"当使用 HTML 类名的方式添加样式的时候，默认情况下 Tailwind 不仅会将本身类名对应的样式加入产物中，同时还会有额外的样式代码存在，虽然这些代码可能不会对本身的样式产生影响。"}),"\n",(0,r.jsxs)(n.h3,{id:"bundle-和-bundleless-构建产物区别",children:["bundle 和 bundleless 构建产物区别",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bundle-和-bundleless-构建产物区别",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"对于以下代码，在 bundle 和 bundleless 两种模式下，构建产物会有很大区别。"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["所谓 bundle 和 bundleless 可以查看 ",(0,r.jsx)(n.a,{href:"/guide/advance/in-depth-about-build#bundle-%E5%92%8C-bundleless",children:"「Bundle 和 Bundleless」"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="./src/index.tsx"',children:"import 'tailwindcss/utilities.css';\n\nexport default () => {\n  return <div className=\"bg-black text-white\">hello world11</div>;\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Bundle 模式下，会将第三方依赖打包进来。"}),"\n",(0,r.jsx)(n.p,{children:"对于样式则会生成一份单独的产物文件，并且在 JS 产物文件中并不会存在导入样式的相关代码。"}),"\n",(0,r.jsxs)(n.p,{children:["如果需要将样式注入 JS 产物中，可以开启 ",(0,r.jsx)(n.a,{href:"/api/config/build-config#styleinject",children:(0,r.jsx)(n.code,{children:"style.inject"})})," 选项。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",meta:'title="./dist/es/index.css"',children:"/* node_modules/tailwindcss/utilities.css */\n.table {\n  display: table;\n}\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n/** some more... */\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",meta:'title="./dist/es/index.js"',children:"// src/index.tsx\nimport { jsx } from 'react/jsx-runtime';\nvar src_default = () => {\n  return /* @__PURE__ */ jsx('div', {\n    className: 'bg-black text-white',\n    children: 'hello world11',\n  });\n};\nexport { src_default as default };\n"})}),"\n",(0,r.jsx)(n.p,{children:"Bundleless 模式下，并不会将第三方依赖打包进来，此时不会有样式产物生成。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",meta:'title="./dist/es/index.js"',children:"import { jsx } from 'react/jsx-runtime';\nimport 'tailwindcss/utilities.css';\nvar src_default = () => {\n  return /* @__PURE__ */ jsx('div', {\n    className: 'bg-black text-white',\n    children: 'hello world11',\n  });\n};\nexport { src_default as default };\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"关于-designsystem-配置",children:["关于 ",(0,r.jsx)(n.code,{children:"designSystem"})," 配置",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#关于-designsystem-配置",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"designSystem"})," 是 Module Tools 中废弃的配置项。"]}),"\n",(0,r.jsxs)(n.p,{children:["从 Module Tools v2.33.0 版本开始，你可以使用 Tailwind CSS 的 ",(0,r.jsx)(n.code,{children:"theme"})," 配置项来代替 ",(0,r.jsx)(n.code,{children:"designSystem"}),"，不再需要将 ",(0,r.jsx)(n.code,{children:"theme"})," 配置拆分并设置到 ",(0,r.jsx)(n.code,{children:"designSystem"})," 上。"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"旧版本用法："}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"const { theme, ...rest } = tailwindConfig;\n\nexport default {\n  style: {\n    tailwindcss: rest,\n  },\n  designSystem: theme,\n};\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"当前版本用法："}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  style: {\n    tailwindcss: tailwindConfig,\n  },\n};\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguide%2Fbest-practices%2Fuse-tailwindcss.mdx"]={toc:[{text:"启用 Tailwind CSS",id:"启用-tailwind-css",depth:2},{text:"配置 Tailwind CSS",id:"配置-tailwind-css",depth:2},{text:"Tailwind CSS 自动补全",id:"tailwind-css-自动补全",depth:2},{text:"用法介绍",id:"用法介绍",depth:2},{text:"HTML 类名",id:"html-类名",depth:3},{text:"@apply",id:"apply",depth:3},{text:"Sass",id:"sass",depth:4},{text:"Less",id:"less",depth:4},{text:"推荐方式",id:"推荐方式",depth:3},{text:"bundle 和 bundleless 构建产物区别",id:"bundle-和-bundleless-构建产物区别",depth:3},{text:"关于 designSystem 配置",id:"关于-designsystem-配置",depth:3}],title:"使用 Tailwind CSS",frontmatter:{sidebar_position:2}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,d._)((0,l._)({},e),{children:(0,r.jsx)(t,(0,l._)({},e))})):t(e)}}}]);