(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_plugin_plugin-api_mdx"],{8741:function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var s in e)Object.defineProperty(n,s,{enumerable:!0,get:e[s]})}(e,{frontmatter:function(){return i},title:function(){return r},toc:function(){return a},default:function(){return o}});var d=s("12151"),c=s("23169"),i={},r="插件 API",a=[{text:"globalStyles",depth:3,id:"globalstyles"},{text:"globalUIComponents",depth:3,id:"globaluicomponents"},{text:"添加全局的 UI 组件",depth:4,id:"添加全局的-ui-组件"},{text:"注册全局副作用",depth:4,id:"注册全局副作用"},{text:"builderConfig",depth:3,id:"builderconfig"},{text:"config",depth:3,id:"config"},{text:"beforeBuild/afterBuild",depth:3,id:"beforebuild/afterbuild"},{text:"markdown",depth:3,id:"markdown"},{text:"extendPageData",depth:3,id:"extendpagedata"},{text:"addPages",depth:3,id:"addpages"}];function l(n){var e=Object.assign({h1:"h1",a:"a",p:"p",h3:"h3",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",h4:"h4",blockquote:"blockquote"},(0,c.useMDXComponents)(),n.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.h1,{id:"插件-api",children:["插件 API",(0,d.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#插件-api",children:"#"})]}),"\n",(0,d.jsx)(e.p,{children:"上一节我们介绍了插件的基本结构，本节我们来介绍插件的 API，帮助你更细致地了解插件功能。"}),"\n",(0,d.jsxs)(e.h3,{id:"globalstyles",children:["globalStyles",(0,d.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#globalstyles",children:"#"})]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"类型"}),"：",(0,d.jsx)(e.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"用于添加全局样式，传入一个样式文件的绝对路径，使用方式如下："}),"\n",(0,d.jsxs)(e.div,{className:"language-",children:[(0,d.jsx)(e.div,{className:"modern-code-title",children:"plugin.ts"}),(0,d.jsxs)(e.div,{className:"modern-code-content",children:[(0,d.jsx)(e.button,{className:"copy"}),(0,d.jsx)(e.pre,{className:"code",children:(0,d.jsx)(e.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { DocPlugin } from '@modern-js/doc-tools';\nimport path from 'path';\n\nexport function pluginForDoc(): DocPlugin {\n  // 样式路径\n  const stylePath = path.join(__dirname, 'some-style.css');\n  return {\n    // 插件名称\n    name: 'plugin-name',\n    // 全局样式的路径\n    globalStyles: path.join(__dirname, 'global.css'),\n  };\n}\n"})})]})]}),"\n",(0,d.jsx)(e.p,{children:"比如你想修改主题色，可以通过添加全局样式来实现："}),"\n",(0,d.jsxs)(e.div,{className:"language-",children:[(0,d.jsx)(e.div,{className:"modern-code-title",children:"global.css"}),(0,d.jsxs)(e.div,{className:"modern-code-content",children:[(0,d.jsx)(e.button,{className:"copy"}),(0,d.jsx)(e.pre,{className:"code",children:(0,d.jsx)(e.code,{className:"language-css",meta:'title="global.css"',children:":root {\n  --modern-c-brand: #ffa500;\n  --modern-c-brand-dark: #ffa500;\n  --modern-c-brand-darker: #c26c1d;\n  --modern-c-brand-light: #f2a65a;\n  --modern-c-brand-lighter: #f2a65a;\n}\n"})})]})]}),"\n",(0,d.jsxs)(e.h3,{id:"globaluicomponents",children:["globalUIComponents",(0,d.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#globaluicomponents",children:"#"})]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"类型"}),"：",(0,d.jsx)(e.code,{children:"string[]"})]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"用于添加全局组件，传入一个数组，数组中的每一项都是一个组件的绝对路径，使用方式如下："}),"\n",(0,d.jsxs)(e.div,{className:"language-",children:[(0,d.jsx)(e.div,{className:"modern-code-title",children:"plugin.ts"}),(0,d.jsxs)(e.div,{className:"modern-code-content",children:[(0,d.jsx)(e.button,{className:"copy"}),(0,d.jsx)(e.pre,{className:"code",children:(0,d.jsx)(e.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(): DocPlugin {\n  // 组件路径\n  const componentPath = path.join(__dirname, 'xxx.tsx');\n  return {\n    // 插件名称\n    name: 'plugin-comp',\n    // 全局组件的路径\n    globalUIComponents: [componentPath],\n  };\n}\n"})})]})]}),"\n",(0,d.jsx)(e.p,{children:"当你注册了全局组件之后，框架会自动将这些 React 组件在主题中进行渲染，而不用你手动引入。"}),"\n",(0,d.jsx)(e.p,{children:"通过全局组件，你可以完成诸多自定义的功能，比如:"}),"\n",(0,d.jsxs)(e.h4,{id:"添加全局的-ui-组件",children:["添加全局的 UI 组件",(0,d.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#添加全局的-ui-组件",children:"#"})]}),"\n",(0,d.jsxs)(e.div,{className:"language-",children:[(0,d.jsx)(e.div,{className:"modern-code-title",children:"comp-ui.tsx"}),(0,d.jsxs)(e.div,{className:"modern-code-content",children:[(0,d.jsx)(e.button,{className:"copy"}),(0,d.jsx)(e.pre,{className:"code",children:(0,d.jsx)(e.code,{className:"language-tsx",meta:'title="comp-ui.tsx"',children:"import React from 'react';\n\n// 需要默认导出一个组件\nexport default function PluginUI() {\n  return <div>这是一个全局的布局组件</div>;\n}\n"})})]})]}),"\n",(0,d.jsxs)(e.p,{children:["这样，在主题页面中会渲染组件的内容，比如添加",(0,d.jsx)(e.strong,{children:"回到顶部按钮"}),"。"]}),"\n",(0,d.jsxs)(e.h4,{id:"注册全局副作用",children:["注册全局副作用",(0,d.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#注册全局副作用",children:"#"})]}),"\n",(0,d.jsxs)(e.div,{className:"language-",children:[(0,d.jsx)(e.div,{className:"modern-code-title",children:"comp-side-effect.tsx"}),(0,d.jsxs)(e.div,{className:"modern-code-content",children:[(0,d.jsx)(e.button,{className:"copy"}),(0,d.jsx)(e.pre,{className:"code",children:(0,d.jsx)(e.code,{className:"language-tsx",meta:'title="comp-side-effect.tsx"',children:"import { useEffect } from 'react';\nimport { useLocation } from '@modern-js/doc-tools/runtime';\n\n// 需要默认导出一个组件\nexport default function PluginSideEffect() {\n  const { pathname } = useLocation();\n  useEffect(() => {\n    // 组件初次渲染时执行\n  }, []);\n\n  useEffect(() => {\n    // 路由变化时执行\n  }, [pathname]);\n  return null;\n}\n"})})]})]}),"\n",(0,d.jsx)(e.p,{children:"这样，在主题页面中会执行组件的副作用。比如以下的一些需要副作用的场景:"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"针对某些页面路由进行重定向操作。"}),"\n",(0,d.jsx)(e.li,{children:"对页面的 img 标签进行事件监听，实现图片放大功能。"}),"\n",(0,d.jsx)(e.li,{children:"路由变化时，上报不同页面的 PV 数据。"}),"\n",(0,d.jsx)(e.li,{children:"......"}),"\n"]}),"\n",(0,d.jsxs)(e.h3,{id:"builderconfig",children:["builderConfig",(0,d.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#builderconfig",children:"#"})]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"类型"}),"：",(0,d.jsx)(e.code,{children:"BuilderConfig"})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:["Modern.js Doc 底层基于 ",(0,d.jsx)(e.a,{href:"https://modernjs.dev/builder/",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder"})," 的 Rspack 模式来进行文档构建。通过 ",(0,d.jsx)(e.code,{children:"builderConfig"})," 可以对 Builder 进行配置，具体的配置项可以参考 ",(0,d.jsx)(e.a,{href:"https://modernjs.dev/builder/api/index.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder"}),"。"]}),"\n",(0,d.jsxs)(e.blockquote,{children:["\n",(0,d.jsxs)(e.p,{children:["当然，如果你想要直接配置 Rspack，也可以通过 ",(0,d.jsx)(e.code,{children:"buildConfig.tools.rspack"})," 进行配置。"]}),"\n"]}),"\n",(0,d.jsxs)(e.div,{className:"language-",children:[(0,d.jsx)(e.div,{className:"modern-code-title",children:"plugin.ts"}),(0,d.jsxs)(e.div,{className:"modern-code-content",children:[(0,d.jsx)(e.button,{className:"copy"}),(0,d.jsx)(e.pre,{className:"code",children:(0,d.jsx)(e.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(slug: string): DocPlugin {\n  return {\n    // 插件名称\n    name: 'plugin-name',\n    // 构建阶段的全局变量定义\n    builderConfig: {\n      source: {\n        define: {\n          SLUG: JSON.stringify(slug),\n        },\n      },\n      tools: {\n        rspack(options) {\n          // 修改 rspack 的配置\n        },\n      },\n    },\n  };\n}\n"})})]})]}),"\n",(0,d.jsxs)(e.h3,{id:"config",children:["config",(0,d.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"类型"}),"：",(0,d.jsx)(e.code,{children:"(config: DocConfig) => DocConfig | Promise<DocConfig>"})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:["用于修改/扩展 Modern.js Doc 本身的配置，比如你想要修改文档的标题，可以通过 ",(0,d.jsx)(e.code,{children:"config"})," 来实现："]}),"\n",(0,d.jsxs)(e.div,{className:"language-",children:[(0,d.jsx)(e.div,{className:"modern-code-title",children:"plugin.ts"}),(0,d.jsxs)(e.div,{className:"modern-code-content",children:[(0,d.jsx)(e.button,{className:"copy"}),(0,d.jsx)(e.pre,{className:"code",children:(0,d.jsx)(e.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(): DocPlugin {\n  return {\n    // 插件名称\n    name: 'plugin-name',\n    // 扩展 Modern.js Doc 本身的配置\n    config(config) {\n      return {\n        ...config,\n        // 这里可以扩展 Modern.js Doc 的配置\n        title: '新的文档标题',\n      };\n    },\n  };\n}\n"})})]})]}),"\n",(0,d.jsxs)(e.h3,{id:"beforebuild/afterbuild",children:["beforeBuild/afterBuild",(0,d.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#beforebuild/afterbuild",children:"#"})]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"类型"}),"：",(0,d.jsx)(e.code,{children:"(config: DocConfig, isProd: boolean) => void | Promise<void>"})]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"用于在文档构建之前/之后执行一些操作，第一个参数是文档的配置，第二个参数是当前是否是生产环境。使用方式如下："}),"\n",(0,d.jsxs)(e.div,{className:"language-",children:[(0,d.jsx)(e.div,{className:"modern-code-title",children:"plugin.ts"}),(0,d.jsxs)(e.div,{className:"modern-code-content",children:[(0,d.jsx)(e.button,{className:"copy"}),(0,d.jsx)(e.pre,{className:"code",children:(0,d.jsx)(e.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(): DocPlugin {\n  return {\n    // 插件名称\n    name: 'plugin-name',\n    // 在构建之前执行的钩子\n    async beforeBuild(config, isProd) {\n      // 这里可以执行一些操作\n    },\n    // 在构建之后执行的钩子\n    async afterBuild(config, isProd) {\n      // 这里可以执行一些操作\n    },\n  };\n}\n"})})]})]}),"\n",(0,d.jsxs)(e.div,{className:"modern-directive tip",children:[(0,d.jsx)(e.div,{className:"modern-directive-title",children:"提醒"}),(0,d.jsx)(e.div,{className:"modern-directive-content",children:(0,d.jsxs)(e.p,{children:["在 ",(0,d.jsx)(e.code,{children:"beforeBuild"})," 钩子执行时，已经经过了所有插件的 ",(0,d.jsx)(e.code,{children:"config"})," 插件处理，因此 config 参数已经代表了最终的文档配置。\n"]})})]}),"\n",(0,d.jsxs)(e.h3,{id:"markdown",children:["markdown",(0,d.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown",children:"#"})]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"类型"}),"：",(0,d.jsx)(e.code,{children:"{ remarkPlugins?: Plugin[]; rehypePlugins?: Plugin[] }"})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:["用于扩展 Markdown/MDX 的编译能力，如果你想要添加自定义的 remark/rehype 插件，可以通过 ",(0,d.jsx)(e.code,{children:"markdown.remarkPlugins/markdown.rehypePlugins"})," 来实现："]}),"\n",(0,d.jsxs)(e.div,{className:"language-",children:[(0,d.jsx)(e.div,{className:"modern-code-title",children:"plugin.ts"}),(0,d.jsxs)(e.div,{className:"modern-code-content",children:[(0,d.jsx)(e.button,{className:"copy"}),(0,d.jsx)(e.pre,{className:"code",children:(0,d.jsx)(e.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(): DocPlugin {\n  return {\n    // 插件名称\n    name: 'plugin-name',\n    // 扩展 Markdown/MDX 编译能力\n    markdown: {\n      remarkPlugins: [\n        // 添加自定义的 remark 插件\n      ],\n      rehypePlugins: [\n        // 添加自定义的 rehype 插件\n      ],\n    },\n  };\n}\n"})})]})]}),"\n",(0,d.jsxs)(e.div,{className:"modern-directive warning",children:[(0,d.jsx)(e.div,{className:"modern-directive-title",children:"注意"}),(0,d.jsx)(e.div,{className:"modern-directive-content",children:(0,d.jsxs)(e.p,{children:["在开启 mdx-rs 编译的情况下(即配置文件中 ",(0,d.jsx)(e.code,{children:"doc.markdown.experimentalMdxRs"})," 为 ",(0,d.jsx)(e.code,{children:"true"}),")，添加的 remark/rehype 插件会被忽略。\n"]})})]}),"\n",(0,d.jsxs)(e.h3,{id:"extendpagedata",children:["extendPageData",(0,d.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#extendpagedata",children:"#"})]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"类型"}),"：",(0,d.jsx)(e.code,{children:"(pageData: PageData) => void | Promise<void>"})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:["用于扩展页面数据，比如你想要在页面数据中添加一些自定义的属性，可以通过 ",(0,d.jsx)(e.code,{children:"extendPageData"})," 来实现："]}),"\n",(0,d.jsxs)(e.div,{className:"language-",children:[(0,d.jsx)(e.div,{className:"modern-code-title",children:"plugin.ts"}),(0,d.jsxs)(e.div,{className:"modern-code-content",children:[(0,d.jsx)(e.button,{className:"copy"}),(0,d.jsx)(e.pre,{className:"code",children:(0,d.jsx)(e.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(): DocPlugin {\n  return {\n    // 插件名称\n    name: 'plugin-name',\n    // 扩展页面数据\n    extendPageData(pageData) {\n      // 你可以往 pageData 对象上添加或者修改属性\n      pageData.a = 1;\n    },\n  };\n}\n"})})]})]}),"\n",(0,d.jsxs)(e.p,{children:["在扩展页面数据之后，你可以在主题中通过 ",(0,d.jsx)(e.code,{children:"usePageData"})," 这个 hook 来访问页面数据。"]}),"\n",(0,d.jsx)(e.div,{className:"language-",children:(0,d.jsxs)(e.div,{className:"modern-code-content",children:[(0,d.jsx)(e.button,{className:"copy"}),(0,d.jsx)(e.pre,{className:"code",children:(0,d.jsx)(e.code,{className:"language-tsx",children:"import { usePageData } from '@modern-js/doc-tools';\n\nexport function MyComponent() {\n  const { page } = usePageData();\n  // page.a === 1\n  return <div>{page.a}</div>;\n}\n"})})]})}),"\n",(0,d.jsxs)(e.h3,{id:"addpages",children:["addPages",(0,d.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#addpages",children:"#"})]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"类型"}),"：",(0,d.jsx)(e.code,{children:"(config: UserConfig) => AdditionalPage[] | Promise<AdditionalPage[]>"})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:["其中，",(0,d.jsx)(e.code,{children:"config"})," 为 ",(0,d.jsx)(e.code,{children:"modern.config.ts"})," 配置文件中导出的 ",(0,d.jsx)(e.code,{children:"doc"})," 属性值，",(0,d.jsx)(e.code,{children:"AdditionalPage"})," 的类型定义如下："]}),"\n",(0,d.jsx)(e.div,{className:"language-",children:(0,d.jsxs)(e.div,{className:"modern-code-content",children:[(0,d.jsx)(e.button,{className:"copy"}),(0,d.jsx)(e.pre,{className:"code",children:(0,d.jsx)(e.code,{className:"language-tsx",children:"interface AdditionalPage {\n  routePath: string;\n  filepath?: string;\n  content?: string;\n}\n"})})]})}),"\n",(0,d.jsxs)(e.p,{children:["主要用来添加额外的页面，你可以在 ",(0,d.jsx)(e.code,{children:"addPages"})," 函数中返回一个数组，数组中的每一项都是一个页面的配置，你可以通过 ",(0,d.jsx)(e.code,{children:"routePath"})," 来指定页面的路由，通过 ",(0,d.jsx)(e.code,{children:"filepath"})," 或者 ",(0,d.jsx)(e.code,{children:"content"})," 来指定页面的内容。比如："]}),"\n",(0,d.jsx)(e.div,{className:"language-",children:(0,d.jsxs)(e.div,{className:"modern-code-content",children:[(0,d.jsx)(e.button,{className:"copy"}),(0,d.jsx)(e.pre,{className:"code",children:(0,d.jsx)(e.code,{className:"language-tsx",children:"import path from 'path';\nimport { DocPlugin } from '@modern-js/doc-tools';\n\nexport function docPluginDemo(): DocPlugin {\n  return {\n    name: 'add-pages',\n    addPages() {\n      return [\n        //  支持真实文件的绝对路径(filepath)，这样会读取磁盘中的 md(x) 内容\n        {\n          routePath: '/filepath-route',\n          filepath: path.join(__dirname, 'blog', 'index.md'),\n        },\n        //  支持通过 content 参数直接传入 md(x) 内容\n        {\n          routePath: '/content-route',\n          content: '# Demo2',\n        },\n      ];\n    },\n  };\n}\n"})})]})})]})}var o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,c.useMDXComponents)(),n.components).wrapper;return e?(0,d.jsx)(e,Object.assign({},n,{children:(0,d.jsx)(l,n)})):l(n)}}}]);