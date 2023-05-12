(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_guide_i18n_mdx"],{26481:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},toc:function(){return r},title:function(){return o},default:function(){return t}});var d=s("9880"),c=s("23169"),i=s.ir(s("65548")),l=void 0,r=[{id:"定义-i18n-文本数据",text:"定义 I18n 文本数据",depth:2},{id:"配置默认语言",text:"配置默认语言",depth:2},{id:"配置-locales-数据",text:"配置 locales 数据",depth:2},{id:"新建不同的语言版本的文档",text:"新建不同的语言版本的文档",depth:2},{id:"配置侧边栏和导航栏",text:"配置侧边栏和导航栏",depth:2},{id:"自定义组件中使用-usei18n",text:"自定义组件中使用 useI18n",depth:2}],o="国际化";function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",ol:"ol",code:"code",h2:"h2",div:"div",pre:"pre",strong:"strong"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"国际化",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#国际化",children:"#"}),"国际化"]}),"\n",(0,d.jsx)(n.p,{children:"在 Modern.js Doc 中实现文档的国际化，你需要做如下的操作:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"定义 I18n 文本数据。"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.ol,{start:"2",children:["\n",(0,d.jsx)(n.li,{children:"配置默认语言。"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.ol,{start:"3",children:["\n",(0,d.jsxs)(n.li,{children:["配置 ",(0,d.jsx)(n.code,{children:"doc.locales"})," 和 ",(0,d.jsx)(n.code,{children:"doc.themeConfig.locales"}),"。"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.ol,{start:"4",children:["\n",(0,d.jsx)(n.li,{children:"新建不同的语言版本的文档。"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.ol,{start:"5",children:["\n",(0,d.jsx)(n.li,{children:"配置侧边栏和导航栏。"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.ol,{start:"6",children:["\n",(0,d.jsxs)(n.li,{children:["自定义组件中使用 ",(0,d.jsx)(n.code,{children:"useI18n"}),"。"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"定义-i18n-文本数据",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#定义-i18n-文本数据",children:"#"}),"定义 I18n 文本数据"]}),"\n",(0,d.jsxs)(n.p,{children:["在当前工作区新建 ",(0,d.jsx)(n.code,{children:"i18n.json"}),"，目录结构如下："]}),"\n",(0,d.jsxs)(n.div,{className:"language-bash",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",meta:"{15}",children:".\n├── docs\n├── i18n.json\n├── package.json\n├── tsconfig.json\n└── modern.config.ts\n"})})})]}),"\n",(0,d.jsx)(n.p,{children:"在这个 JSON 文件中，你可以定义国际化所需的文本，类型定义如下:"}),"\n",(0,d.jsxs)(n.div,{className:"language-ts",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"export interface I18n {\n  // key 为文本 id\n  [key: string]: {\n    // key 为语言\n    [key: string]: string;\n  };\n}\n"})})})]}),"\n",(0,d.jsx)(n.p,{children:"举个例子:"}),"\n",(0,d.jsxs)(n.div,{className:"language-json",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"i18n.json"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "getting-started": {\n    "zh": "开始",\n    "en": "Getting Started"\n  },\n  "features": {\n    "zh": "基础功能",\n    "en": "Features"\n  },\n  "guide": {\n    "zh": "指南",\n    "en": "Guide"\n  }\n}\n'})})})]}),"\n",(0,d.jsxs)(n.p,{children:["这些文本数据在",(0,d.jsx)(n.strong,{children:"配置文件"}),"和",(0,d.jsx)(n.strong,{children:"自定义组件"}),"中都会用到，后文会详细介绍。"]}),"\n",(0,d.jsxs)(n.h2,{id:"配置默认语言",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置默认语言",children:"#"}),"配置默认语言"]}),"\n",(0,d.jsxs)(n.p,{children:["在 ",(0,d.jsx)(n.code,{children:"modern.config.ts"}),"中，你可以通过 ",(0,d.jsx)(n.code,{children:"doc.lang"})," 配置文档的默认语言，如下例子所示:"]}),"\n",(0,d.jsxs)(n.div,{className:"language-ts",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    lang: 'zh',\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,d.jsxs)(n.p,{children:["这很重要，因为",(0,d.jsx)(n.strong,{children:"对于默认语言下的路由，框架会去掉语言前缀"}),"，比如 ",(0,d.jsx)(n.code,{children:"/zh/guide/getting-started"})," 会被转换为 ",(0,d.jsx)(n.code,{children:"/guide/getting-started"}),"。"]}),"\n",(0,d.jsxs)(n.h2,{id:"配置-locales-数据",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-locales-数据",children:"#"}),"配置 ",(0,d.jsx)(n.code,{children:"locales"})," 数据"]}),"\n",(0,d.jsxs)(n.p,{children:["在 ",(0,d.jsx)(n.code,{children:"modern.config.ts"}),"中，你可以通过两个地方来配置 ",(0,d.jsx)(n.code,{children:"locales"})," 数据:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"doc.locales"}),"，用于配置站点的",(0,d.jsx)(n.code,{children:"语言"}),"、",(0,d.jsx)(n.code,{children:"标题"}),"、",(0,d.jsx)(n.code,{children:"描述"}),"等信息，主要围绕站点本身的信息来配置。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"doc.themeConfig.locales"}),"，用于配置主题的",(0,d.jsx)(n.code,{children:"语言"}),"、",(0,d.jsx)(n.code,{children:"大纲栏标题"}),"、",(0,d.jsx)(n.code,{children:"上一页/下一页文本"}),"等信息，主要进行主题相关的配置。"]}),"\n"]}),"\n",(0,d.jsxs)(n.div,{className:"language-ts",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    // locales 为一个对象数组\n    locales: [\n      {\n        lang: 'en',\n        // 导航栏切换语言的标签\n        label: 'English',\n        title: 'Modern.js',\n        description: 'Modern.js 文档框架',\n      },\n      {\n        lang: 'zh',\n        // 导航栏切换语言的标签\n        label: '简体中文',\n        title: 'Modern.js',\n        description: 'Modern.js Doc',\n      },\n    ],\n    themeConfig: {\n      locales: [\n        {\n          lang: 'en',\n          outlineTitle: 'ON THIS Page',\n        },\n        {\n          lang: 'zh',\n          outlineTitle: '大纲',\n        },\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"注意"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["\n默认主题中， ",(0,d.jsx)(n.code,{children:"doc.themeConfig.locales"})," 也包含 ",(0,d.jsx)(n.code,{children:"doc.locales"}),"中的所有字段，前者优先级更高。"]})})]}),"\n",(0,d.jsxs)(n.p,{children:["对于其它的国际化主题参数配置，请参考",(0,d.jsx)(n.a,{href:"/doc-tools/zh/api/config-theme.html#locales",children:"API 类型"}),"。"]}),"\n",(0,d.jsxs)(n.h2,{id:"新建不同的语言版本的文档",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#新建不同的语言版本的文档",children:"#"}),"新建不同的语言版本的文档"]}),"\n",(0,d.jsx)(n.p,{children:"在做好上面的配置后，我们就可以开始新建不同语言版本的文档了，非常简单，我们只需要在文档根目录下新建如下的结构即可："}),"\n",(0,d.jsxs)(n.div,{className:"language-bash",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"docs\n├── en\n│   ├── api\n│   │   └── index.md\n│   └── guide\n│       └── getting-started.md\n│       └── features.md\n└── zh\n    ├── api\n    │   └── index.md\n    └── guide\n        └── getting-started.md\n        └── features.md\n"})})})]}),"\n",(0,d.jsxs)(n.p,{children:["可以看到，我们把不同语言的文档放在了 ",(0,d.jsx)(n.code,{children:"docs"})," 目录下的 ",(0,d.jsx)(n.code,{children:"en"})," 和 ",(0,d.jsx)(n.code,{children:"zh"})," 目录中，这样就可以方便地区分不同语言的文档了。"]}),"\n",(0,d.jsxs)(n.h2,{id:"配置侧边栏和导航栏",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置侧边栏和导航栏",children:"#"}),"配置侧边栏和导航栏"]}),"\n",(0,d.jsxs)(n.p,{children:["我们在",(0,d.jsx)(n.a,{href:"/doc-tools/zh/guide/conventional-route.html",children:"约定式路由"}),"中提到过，针对不同的文件路径，我们会自动生成对应的路由。那么，在国际化文档的场景中，每份文档的路由是不一样的，那么针对 N 种语言的文档，我们需要写 N 份侧边栏和导航栏的配置吗？"]}),"\n",(0,d.jsxs)(n.p,{children:["答案是",(0,d.jsx)(n.strong,{children:"不用"}),"。在 Modern.js Doc 框架中，你只需要写一份配置即可。如何完成呢？"]}),"\n",(0,d.jsx)(n.p,{children:"我们来这样配置侧边栏和导航栏:"}),"\n",(0,d.jsxs)(n.div,{className:"language-ts",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\n// 工具函数，用于获取类型提示\nconst getI18nKey = (key: keyof typeof import('./i18n.json')) => key;\n\nexport default defineConfig({\n  doc: {\n    // 前面的配置省略\n    themeConfig: {\n      nav: [\n        {\n          text: getI18nKey('guide'),\n          link: '/guide/',\n        },\n      ],\n      sidebar: {\n        '/guide/': [\n          {\n            text: getI18nKey('getting-started'),\n            link: '/guide/getting-started',\n          },\n          {\n            text: getI18nKey('features'),\n            link: '/guide/features',\n          },\n        ],\n      },\n    },\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,d.jsx)(n.p,{children:"可以看到，在 nav 和 sidebar 的配置中，我们主要涉及到两种元素的配置:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"文本"}),"。在国际化场景中，你只需要传入 ",(0,d.jsx)(n.code,{children:"i18n.json"})," 中的文案 key 即可，框架会自动根据当前语言来获取对应的文本。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"链接"}),"。你无需添加语言前缀，框架会自动根据当前语言来添加对应的语言前缀。比如默认语言为中文的情况下，在英文文档中 ",(0,d.jsx)(n.code,{children:"/guide/features"})," 会被转换为 ",(0,d.jsx)(n.code,{children:"/en/guide/features"}),"。"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["最后你只需要写一份 ",(0,d.jsx)(n.code,{children:"nav"})," 和 ",(0,d.jsx)(n.code,{children:"sidebar"})," 的配置，框架会自动根据当前语言来获取对应的文本和链接。"]}),"\n",(0,d.jsxs)(n.h2,{id:"自定义组件中使用-usei18n",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义组件中使用-usei18n",children:"#"}),"自定义组件中使用 ",(0,d.jsx)(n.code,{children:"useI18n"})]}),"\n",(0,d.jsx)(n.p,{children:"在 MDX 开发或者自定义主题开发的过程中，你可能会写一些自定义组件，这些组件中也需要使用到国际化文本，那么如何获取呢？"}),"\n","\n",(0,d.jsx)(i.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}}}]);