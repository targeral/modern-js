(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_plugin_plugin-api_mdx"],{15175:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},toc:function(){return a},title:function(){return r},default:function(){return c}});var o=s("9880"),i=s("23169"),d=void 0,a=[{id:"globalstyles",text:"globalStyles",depth:3},{id:"globaluicomponents",text:"globalUIComponents",depth:3},{id:"add-global-ui-components",text:"Add global UI components",depth:4},{id:"register-global-side-effects",text:"Register global side effects",depth:4},{id:"builderconfig",text:"builderConfig",depth:3},{id:"config",text:"config",depth:3},{id:"beforebuildafterbuild",text:"beforeBuild/afterBuild",depth:3},{id:"markdown",text:"markdown",depth:3},{id:"extendpagedata",text:"extendPageData",depth:3},{id:"addpages",text:"addPages",depth:3}],r="Plugin API";function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h3:"h3",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",pre:"pre",h4:"h4",blockquote:"blockquote"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"plugin-api",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-api",children:"#"}),"Plugin API"]}),"\n",(0,o.jsx)(n.p,{children:"In the previous section, we introduced the basic structure of the plugin. In this section, we will introduce the API of the plugin to help you understand the abilities of the plugin in more detail."}),"\n",(0,o.jsxs)(n.h3,{id:"globalstyles",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#globalstyles",children:"#"}),"globalStyles"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type"}),"：",(0,o.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"It is used to add a global style, and the absolute path of a style file is passed in, and the usage is as follows:"}),"\n",(0,o.jsxs)(n.div,{className:"language-tsx",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"plugin.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { DocPlugin } from '@modern-js/doc-tools';\nimport path from 'path';\n\nexport function pluginForDoc(): DocPlugin {\n  // style path\n  const stylePath = path.join(__dirname, 'some-style.css');\n  return {\n    // plugin name\n    name: 'plugin-name',\n    globalStyles: path.join(__dirname, 'global.css'),\n  };\n}\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"For example, if you want to modify the theme color, you can do so by adding a global style:"}),"\n",(0,o.jsxs)(n.div,{className:"language-css",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"global.css"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-css",children:":root {\n  --modern-c-brand: #ffa500;\n  --modern-c-brand-dark: #ffa500;\n  --modern-c-brand-darker: #c26c1d;\n  --modern-c-brand-light: #f2a65a;\n  --modern-c-brand-lighter: #f2a65a;\n}\n"})})})]}),"\n",(0,o.jsxs)(n.h3,{id:"globaluicomponents",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#globaluicomponents",children:"#"}),"globalUIComponents"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type"}),"：",(0,o.jsx)(n.code,{children:"string[]"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"It is used to add global components, passing in an array, each item in the array is the absolute path of a component, the usage is as follows:"}),"\n",(0,o.jsxs)(n.div,{className:"language-tsx",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"plugin.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(): DocPlugin {\n  // component path\n  const componentPath = path.join(__dirname, 'xxx.tsx');\n  return {\n    // plugin name\n    name: 'plugin-comp',\n    // Path to global components\n    globalUIComponents: [componentPath],\n  };\n}\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"When you register global components, the framework will automatically render these React components in the theme without manually importing and using them."}),"\n",(0,o.jsx)(n.p,{children:"Through global components, you can complete many custom functions, such as:"}),"\n",(0,o.jsxs)(n.h4,{id:"add-global-ui-components",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-global-ui-components",children:"#"}),"Add global UI components"]}),"\n",(0,o.jsxs)(n.div,{className:"language-tsx",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"comp-ui.tsx"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\n\n// Need a default export\nexport default function PluginUI() {\n  return <div>这是一个全局的布局组件</div>;\n}\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["In this way, the content of the component will be rendered in the theme page, such as adding ",(0,o.jsx)(n.strong,{children:"BackToTop"})," button."]}),"\n",(0,o.jsxs)(n.h4,{id:"register-global-side-effects",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register-global-side-effects",children:"#"}),"Register global side effects"]}),"\n",(0,o.jsxs)(n.div,{className:"language-tsx",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"comp-side-effect.tsx"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useLocation } from '@modern-js/doc-tools/runtime';\n\n// Need a default export\nexport default function PluginSideEffect() {\n  const { pathname } = useLocation();\n  useEffect(() => {\n    // Executed when the component renders for the first time\n  }, []);\n\n  useEffect(() => {\n    // Executed when the route changes\n  }, [pathname]);\n  return null;\n}\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"This way, side effects of components are executed in the theme page. For example, some of the following scenarios require side effects:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Redirect for certain page routes."}),"\n",(0,o.jsx)(n.li,{children:"Bind click event on the img tag of the page to implement the image zoom function."}),"\n",(0,o.jsx)(n.li,{children:"When the route changes, the PV data of different pages are reported."}),"\n",(0,o.jsx)(n.li,{children:"......"}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"builderconfig",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderconfig",children:"#"}),"builderConfig"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type"}),"：",(0,o.jsx)(n.code,{children:"BuilderConfig"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The bottom layer of Modern.js Doc is based on the Rspack mode of ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder"})," for document build process. The Builder can be configured through ",(0,o.jsx)(n.code,{children:"builderConfig"}),". For specific configuration items, please refer to ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/api/index.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Of course, if you want to configure Rspack directly, you can also configure it through ",(0,o.jsx)(n.code,{children:"buildConfig.tools.rspack"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.div,{className:"language-tsx",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"plugin.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(slug: string): DocPlugin {\n  return {\n    name: 'plugin-name',\n    // Global variable definitions for build phase\n    builderConfig: {\n      source: {\n        define: {\n          SLUG: JSON.stringify(slug),\n        },\n      },\n      tools: {\n        rspack(options) {\n          // Modify rspack config\n        },\n      },\n    },\n  };\n}\n"})})})]}),"\n",(0,o.jsxs)(n.h3,{id:"config",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"}),"config"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type"}),"：",(0,o.jsx)(n.code,{children:"(config: DocConfig) => DocConfig | Promise<DocConfig>"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["It is used to modify/extend the configuration of Modern.js Doc itself. For example, if you want to modify the title of the document, you can do it through ",(0,o.jsx)(n.code,{children:"config"}),":"]}),"\n",(0,o.jsxs)(n.div,{className:"language-tsx",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"plugin.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(): DocPlugin {\n  return {\n    name: 'plugin-name',\n    // Extend the config of the Modern.js Doc itself\n    config(config) {\n      return {\n        ...config,\n        title: '新的文档标题',\n      };\n    },\n  };\n}\n"})})})]}),"\n",(0,o.jsxs)(n.h3,{id:"beforebuildafterbuild",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforebuildafterbuild",children:"#"}),"beforeBuild/afterBuild"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type"}),"：",(0,o.jsx)(n.code,{children:"(config: DocConfig, isProd: boolean) => void | Promise<void>"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"It is used to perform some operations before/after the document is built. The first parameter is the config of the document, and the second parameter is whether it is currently a production environment. The usage is as follows:"}),"\n",(0,o.jsxs)(n.div,{className:"language-tsx",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"plugin.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(): DocPlugin {\n  return {\n    name: 'plugin-name',\n    // Hook to execute before build\n    async beforeBuild(config, isProd) {\n      // Do something here\n    },\n    // Hook to execute after build\n    async afterBuild(config, isProd) {\n      // Do something here\n    },\n  };\n}\n"})})})]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive tip",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["\nWhen the ",(0,o.jsx)(n.code,{children:"beforeBuild"})," hook is executed, the ",(0,o.jsx)(n.code,{children:"config"}),"plugins of all plugins have been processed, so the config parameter already represents the final document configuration."]})})]}),"\n",(0,o.jsxs)(n.h3,{id:"markdown",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown",children:"#"}),"markdown"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type"}),"：",(0,o.jsx)(n.code,{children:"{ remarkPlugins?: Plugin[]; rehypePlugins?: Plugin[] }"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["It is used to extend the compilation ability of Markdown/MDX. If you want to add custom remark/rehype plug-ins, you can use ",(0,o.jsx)(n.code,{children:"markdown.remarkPlugins/markdown.rehypePlugins"})," to achieve:"]}),"\n",(0,o.jsxs)(n.div,{className:"language-tsx",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"plugin.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(): DocPlugin {\n  return {\n    name: 'plugin-name',\n    markdown: {\n      remarkPlugins: [\n        // Add custom remark plugin\n      ],\n      rehypePlugins: [\n        // Add custom rehype plugin\n      ],\n    },\n  };\n}\n"})})})]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive warning",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["\nWhen mdx-rs compilation is enabled (that is, ",(0,o.jsx)(n.code,{children:"doc.markdown.experimentalMdxRs"})," is ",(0,o.jsx)(n.code,{children:"true"}),"in the config file), the added remark/rehype plugin will be ignored."]})})]}),"\n",(0,o.jsxs)(n.h3,{id:"extendpagedata",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extendpagedata",children:"#"}),"extendPageData"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"(pageData: PageData) => void | Promise<void>"})]}),"\n"]}),"\n",(0,o.jsxs)(n.div,{className:"language-tsx",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"plugin.ts"}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(): DocPlugin {\n  return {\n    name: 'plugin-name',\n    // Extend the page data\n    extendPageData(pageData) {\n      // You can add or modify properties on the pageData object\n      pageData.a = 1;\n    },\n  };\n}\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["After extending the page data, you can access the page data through the ",(0,o.jsx)(n.code,{children:"usePageData"})," hook in the theme."]}),"\n",(0,o.jsxs)(n.div,{className:"language-tsx",children:[(0,o.jsx)(n.div,{className:""}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { usePageData } from '@modern-js/doc-tools';\n\nexport function MyComponent() {\n  const { page } = usePageData();\n  // page.a === 1\n  return <div>{page.a}</div>;\n}\n"})})})]}),"\n",(0,o.jsxs)(n.h3,{id:"addpages",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addpages",children:"#"}),"addPages"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"(config: UserConfig) => AddtionalPage[] | Promise<AddtionalPage[]>"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"config"})," parameter is the ",(0,o.jsx)(n.code,{children:"doc"})," config of ",(0,o.jsx)(n.code,{children:"modern.config.ts"}),", and the ",(0,o.jsx)(n.code,{children:"AddtionalPage"})," type is defined as follows:"]}),"\n",(0,o.jsxs)(n.div,{className:"language-tsx",children:[(0,o.jsx)(n.div,{className:""}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-tsx",children:"interface AddtionalPage {\n  routePath: string;\n  filepath?: string;\n  content?: string;\n}\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["Used to add additional pages, you can return an array in the ",(0,o.jsx)(n.code,{children:"addPages"})," function, each item in the array is a page config, you can specify the route of the page through ",(0,o.jsx)(n.code,{children:"routePath"}),", through ",(0,o.jsx)(n.code,{children:"filepath"})," or ",(0,o.jsx)(n.code,{children:"content"})," to specify the content of the page. For example:"]}),"\n",(0,o.jsxs)(n.div,{className:"language-tsx",children:[(0,o.jsx)(n.div,{className:""}),(0,o.jsx)(n.div,{className:"modern-code-content",children:(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import path from 'path';\nimport { DocPlugin } from '@modern-js/doc-tools';\n\nexport function docPluginDemo(): DocPlugin {\n  return {\n    name: 'add-pages',\n    addPages() {\n      return [\n        //  Support the absolute path of the real file (filepath), which will read the content of md(x) in the disk\n        {\n          routePath: '/filepath-route',\n          filepath: path.join(__dirname, 'blog', 'index.md'),\n        },\n        //  Support to directly pass in the content of md(x) through the content parameter\n        {\n          routePath: '/content-route',\n          content: '# Demo2',\n        },\n      ];\n    },\n  };\n}\n"})})})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(t,e)})):t(e)}}}]);