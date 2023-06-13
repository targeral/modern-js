(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_guide_default-theme_i18n_mdx"],{59234:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return r},title:function(){return a},toc:function(){return d},default:function(){return c}});var t=i("9880"),o=i("23169"),s=i.ir(i("5926")),r={},a="Internationalization",d=[{text:"Defines I18n text data",depth:2,id:"defines-i18n-text-data"},{text:"Configure the default language",depth:2,id:"configure-the-default-language"},{text:"Configure locales",depth:2,id:"configure-locales"},{text:"Create documents in different language",depth:2,id:"create-documents-in-different-language"},{text:"Configure sidebar and navbar",depth:2,id:"configure-sidebar-and-navbar"},{text:"Use useI18n in custom components",depth:2,id:"use-usei18n-in-custom-components"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",ol:"ol",code:"code",h2:"h2",pre:"pre",strong:"strong",div:"div",blockquote:"blockquote"},(0,o.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"internationalization",children:["Internationalization",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#internationalization",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"To achieve document internationalization in Modern.js Doc, you need to do the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Defines I18n text data."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Configure the default language."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Configure ",(0,t.jsx)(n.code,{children:"doc.locales"})," and ",(0,t.jsx)(n.code,{children:"doc.themeConfig.locales"}),"。"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Create documents in different language version."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Configure sidebar and navbar."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"useI18n"})," in custom components."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"defines-i18n-text-data",children:["Defines I18n text data",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#defines-i18n-text-data",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Create a new ",(0,t.jsx)(n.code,{children:"i18n.json"})," in the current workspace, the directory structure is as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",meta:"{15}",children:".\n├── docs\n├── i18n.json\n├── package.json\n├── tsconfig.json\n└── modern.config.ts\n"})}),"\n",(0,t.jsx)(n.p,{children:"In this JSON file, you can define the text needed for internationalization, the type definition is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export interface I18n {\n  // key: text id\n  [key: string]: {\n    // key: language\n    [key: string]: string;\n  };\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",meta:'title="i18n.json"',children:'{\n  "getting-started": {\n    "zh": "开始",\n    "en": "Getting Started"\n  },\n  "features": {\n    "zh": "基础功能",\n    "en": "Features"\n  },\n  "guide": {\n    "zh": "指南",\n    "en": "Guide"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["These text data are used in both ",(0,t.jsx)(n.strong,{children:"config file"})," and ",(0,t.jsx)(n.strong,{children:"custom components"}),", which will be introduced in detail later."]}),"\n",(0,t.jsxs)(n.h2,{id:"configure-the-default-language",children:["Configure the default language",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configure-the-default-language",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"modern.config.ts"}),", you can configure the default language of the document via ",(0,t.jsx)(n.code,{children:"doc.lang"}),", as shown in the following example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    lang: 'zh',\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This is important because ",(0,t.jsx)(n.strong,{children:"for routes in the default language, the framework will remove the language prefix"}),", such as ",(0,t.jsx)(n.code,{children:"/zh/guide/getting-started"})," will be converted to ",(0,t.jsx)(n.code,{children:"/guide/getting-started"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"configure-locales",children:["Configure ",(0,t.jsx)(n.code,{children:"locales"}),(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configure-locales",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"modern.config.ts"}),", you can configure ",(0,t.jsx)(n.code,{children:"locales"})," data in two places:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"doc.locales"}),", used to configure the ",(0,t.jsx)(n.code,{children:"lang"}),", ",(0,t.jsx)(n.code,{children:"title"}),", ",(0,t.jsx)(n.code,{children:"description"})," and other information of the site, mainly around the information of the site itself."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"doc.themeConfig.locales"}),", used to configure the theme's ",(0,t.jsx)(n.code,{children:"lang"}),", ",(0,t.jsx)(n.code,{children:"outline title"}),", ",(0,t.jsx)(n.code,{children:"previous page/next page text"})," and other information, mainly for theme-related config."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    locales: [\n      {\n        lang: 'en',\n        // The label in nav bar to switch language\n        label: 'English',\n        title: 'Modern.js',\n        description: 'Modern.js 文档框架',\n      },\n      {\n        lang: 'zh',\n        // The label in nav bar to switch language\n        label: '简体中文',\n        title: 'Modern.js',\n        description: 'Modern.js Doc',\n      },\n    ],\n    themeConfig: {\n      locales: [\n        {\n          lang: 'en',\n          outlineTitle: 'ON THIS Page',\n        },\n        {\n          lang: 'zh',\n          outlineTitle: '大纲',\n        },\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"Note"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["In the default theme, ",(0,t.jsx)(n.code,{children:"doc.themeConfig.locales"})," also contains all the fields in ",(0,t.jsx)(n.code,{children:"doc.locales"}),", the former takes precedence.\n"]})})]}),"\n",(0,t.jsxs)(n.p,{children:["For other international theme parameters, please refer to ",(0,t.jsx)(n.a,{href:"/api/config/config-theme#locales",children:"API type"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"create-documents-in-different-language",children:["Create documents in different language",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-documents-in-different-language",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"After the above configuration, we can start to create documents in different language versions. It is very simple. We only need to create the following structure in the document root directory:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docs\n├── en\n│   ├── api\n│   │   └── index.md\n│   └── guide\n│       └── getting-started.md\n│       └── features.md\n└── zh\n    ├── api\n    │   └── index.md\n    └── guide\n        └── getting-started.md\n        └── features.md\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As you can see, we put documents in different languages ​​in the ",(0,t.jsx)(n.code,{children:"en"})," and ",(0,t.jsx)(n.code,{children:"zh"})," directories under the ",(0,t.jsx)(n.code,{children:"docs"})," directory, so that we can easily distinguish documents in different languages."]}),"\n",(0,t.jsxs)(n.h2,{id:"configure-sidebar-and-navbar",children:["Configure sidebar and navbar",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configure-sidebar-and-navbar",children:"#"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If you use the ",(0,t.jsx)(n.a,{href:"/guide/basic/auto-nav-sidebar",children:"Auto Nav/Sidebar"})," method, you can skip this part."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["As we mentioned in ",(0,t.jsx)(n.a,{href:"/guide/basic/conventional-route",children:"Conventional Routing"}),", we will automatically generate corresponding routes for different file paths. Then, in the scenario of internationalized documents, the routing of each document is different, so for documents in N languages, do we need to write N copies of sidebar and nav bar config?"]}),"\n",(0,t.jsxs)(n.p,{children:["The answer is ",(0,t.jsx)(n.strong,{children:"no"}),". In the Modern.js Doc framework, you only need to write a configuration. How to do it?"]}),"\n",(0,t.jsx)(n.p,{children:"Let's configure the sidebar and navbar like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\n// Utility function for getting type hints\nconst getI18nKey = (key: keyof typeof import('./i18n.json')) => key;\n\nexport default defineConfig({\n  doc: {\n    // The previous config is omitted\n    themeConfig: {\n      nav: [\n        {\n          text: getI18nKey('guide'),\n          link: '/guide/',\n        },\n      ],\n      sidebar: {\n        '/guide/': [\n          {\n            text: getI18nKey('getting-started'),\n            link: '/guide/getting-started',\n          },\n          {\n            text: getI18nKey('features'),\n            link: '/guide/features',\n          },\n        ],\n      },\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"It can be seen that in the config of nav and sidebar, we mainly involve the two elements:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"text"}),". In the internationalization scenario, you only need to pass in the key in ",(0,t.jsx)(n.code,{children:"i18n.json"}),", and the framework will automatically obtain the corresponding text according to the current language."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"link"}),". You don't need to add a language prefix, the framework will automatically add the corresponding language prefix according to the current language. For example, if the default language is Chinese, ",(0,t.jsx)(n.code,{children:"/guide/features"})," will be converted to ",(0,t.jsx)(n.code,{children:"/en/guide/features"})," in the English document."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Finally, you only need to write a ",(0,t.jsx)(n.code,{children:"nav"})," and ",(0,t.jsx)(n.code,{children:"sidebar"})," config, and the framework will automatically obtain the corresponding text and links according to the current language."]}),"\n",(0,t.jsxs)(n.h2,{id:"use-usei18n-in-custom-components",children:["Use ",(0,t.jsx)(n.code,{children:"useI18n"})," in custom components",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-usei18n-in-custom-components",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"In the process of MDX development or custom theme development, you may write some custom components, which also need to use international text, so how to get it?"}),"\n","\n",(0,t.jsx)(s.default,{})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}}}]);