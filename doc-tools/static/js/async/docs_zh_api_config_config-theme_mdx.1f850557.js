(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_api_config_config-theme_mdx"],{40590:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return c}});var d,s=i("15169"),o=i("43932"),t=i("9880"),l=i("23169");function r(n){var e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",ul:"ul",li:"li"},(0,l.useMDXComponents)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.h1,{id:"主题配置",children:["主题配置",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#主题配置",children:"#"})]}),"\n",(0,t.jsxs)(e.p,{children:["主题配置位于 ",(0,t.jsx)(e.code,{children:"doc"})," 配置中的 ",(0,t.jsx)(e.code,{children:"themeConfig"})," 下。例如："]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      // ...\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"nav",children:["nav",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#nav",children:"#"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Type: ",(0,t.jsx)(e.code,{children:"Array"})]}),"\n",(0,t.jsxs)(e.li,{children:["Default: ",(0,t.jsx)(e.code,{children:"[]"})]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["网站的导航栏。 ",(0,t.jsx)(e.code,{children:"nav"})," 配置是 ",(0,t.jsx)(e.code,{children:"NavItem"})," 的数组，具有以下类型："]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"interface NavItem {\n  // 导航栏文本\n  text: string;\n  // 导航栏链接\n  link: '/';\n  // 导航栏链接的激活规则\n  activeMatch: '^/$|^/';\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"activeMatch"})," 用于匹配当前路由，当路由匹配 ",(0,t.jsx)(e.code,{children:"activeMatch"})," 规则时，nav 项会高亮显示。默认情况下，",(0,t.jsx)(e.code,{children:"activeMatch"})," 是 nav 项的 ",(0,t.jsx)(e.code,{children:"link"}),"。"]}),"\n",(0,t.jsx)(e.p,{children:"比如:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      nav: [\n        {\n          text: 'Home',\n          link: '/',\n        },\n        {\n          text: 'Guide',\n          link: '/guide/',\n        },\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(e.p,{children:["当然 ",(0,t.jsx)(e.code,{children:"nav"})," 数组中也可以配置多级菜单，类型如下:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"interface NavGroup {\n  // 导航栏文本\n  text: string;\n  // 子菜单\n  items: NavItem[];\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"例如下面的配置:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      nav: [\n        {\n          text: 'Home',\n          link: '/',\n        },\n        {\n          text: 'Guide',\n          items: [\n            {\n              text: 'Getting Started',\n              link: '/guide/getting-started',\n            },\n            {\n              text: 'Advanced',\n              link: '/guide/advanced',\n            },\n          ],\n        },\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"sidebar",children:["sidebar",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#sidebar",children:"#"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Type: ",(0,t.jsx)(e.code,{children:"Object"})]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"网站的侧边栏。配置为一个对象，类型如下："}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"// key 为 SidebarGroup 的路径\n// value 为 SidebarGroup 的数组\ntype Sidebar = Record<string, SidebarGroup[]>;\n\ninterface SidebarGroup {\n  text: string;\n  link?: string;\n  items: SidebarItem[];\n  // 是否可折叠\n  collapsible?: boolean;\n  // 是否默认折叠\n  collapsed?: boolean;\n}\n\n// 可填入一个对象，也可以填入一个字符串\n// 填入字符串时，内部会转换成一个对象，字符串会被当做 link，text 值会自动取对应文档的标题\ntype SidebarItem =\n  | {\n      // 侧边栏文本\n      text: string;\n      // 侧边栏链接\n      link: string;\n    }\n  | string;\n"})}),"\n",(0,t.jsx)(e.p,{children:"比如:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      sidebar: {\n        '/guide/': [\n          {\n            text: 'Getting Started',\n            items: [\n              // 填入一个对象\n              {\n                text: 'Introduction',\n                link: '/guide/getting-started/introduction',\n              },\n              {\n                text: 'Installation',\n                link: '/guide/getting-started/installation',\n              },\n            ],\n          },\n          {\n            text: 'Advanced',\n            items: [\n              // 直接填入链接字符串\n              '/guide/advanced/customization',\n              '/guide/advanced/markdown',\n            ],\n          },\n        ],\n      },\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"footer",children:["footer",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#footer",children:"#"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Type: ",(0,t.jsx)(e.code,{children:"Object"})]}),"\n",(0,t.jsxs)(e.li,{children:["Default: ",(0,t.jsx)(e.code,{children:"{}"})]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"主页的页脚。"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"footer"})," 配置是 ",(0,t.jsx)(e.code,{children:"Footer"})," 的一个对象，它具有以下类型："]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export interface Footer {\n  message?: string;\n  copyright?: string;\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"比如："}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      footer: {\n        message: 'This is a footer',\n      },\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"outlinetitle",children:["outlineTitle",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#outlinetitle",children:"#"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Type: ",(0,t.jsx)(e.code,{children:"string"})]}),"\n",(0,t.jsx)(e.li,{children:"Default: 'ON THIS PAGE'"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"在右侧边栏中配置大纲的标题。"}),"\n",(0,t.jsx)(e.p,{children:"比如:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      outlineTitle: 'Outline',\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"lastupdated",children:["lastUpdated",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#lastupdated",children:"#"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Type: ",(0,t.jsx)(e.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(e.li,{children:["Default: ",(0,t.jsx)(e.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"是否显示最后更新时间，默认情况下不显示。"}),"\n",(0,t.jsx)(e.p,{children:"比如:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      lastUpdated: true,\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"lastupdatedtext",children:["lastUpdatedText",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#lastupdatedtext",children:"#"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Type: ",(0,t.jsx)(e.code,{children:"string"})]}),"\n",(0,t.jsxs)(e.li,{children:["Default: ",(0,t.jsx)(e.code,{children:"Last Updated"})]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"最后更新时间的文本。"}),"\n",(0,t.jsx)(e.p,{children:"比如:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      lastUpdatedText: 'Last Updated',\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"prevpagetext",children:["prevPageText",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#prevpagetext",children:"#"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Type: ",(0,t.jsx)(e.code,{children:"string"})]}),"\n",(0,t.jsxs)(e.li,{children:["Default: ",(0,t.jsx)(e.code,{children:"Previous Page"})]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"上一页的文本。比如:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      prevPageText: 'Previous Page',\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"sociallinks",children:["socialLinks",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#sociallinks",children:"#"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Type: ",(0,t.jsx)(e.code,{children:"Array"})]}),"\n",(0,t.jsxs)(e.li,{children:["Default: ",(0,t.jsx)(e.code,{children:"[]"})]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["你可以通过如下的配置添加相关链接，比如 ",(0,t.jsx)(e.code,{children:"github"})," 链接、",(0,t.jsx)(e.code,{children:"twitter"})," 链接等。\n相关链接支持三种模式：",(0,t.jsx)(e.code,{children:"链接模式link"})," ",(0,t.jsx)(e.code,{children:"文本模式text"})," ",(0,t.jsx)(e.code,{children:"图片模式img"}),"，相关例子如下："]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      socialLinks: [\n        {\n          icon: 'github',\n          mode: 'link',\n          content: 'https://github.com/sanyuan0704/island.js',\n        },\n        {\n          icon: 'wechat',\n          mode: 'text',\n          content: '微信号xxx',\n        },\n        {\n          icon: 'qq',\n          mode: 'img',\n          content: '/qrcode.png',\n        },\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["当",(0,t.jsx)(e.code,{children:"link"}),"模式时，点击 icon 即可跳转链接。"]}),"\n",(0,t.jsxs)(e.li,{children:["当",(0,t.jsx)(e.code,{children:"text"}),"模式时，鼠标移到 icon 上会显示弹框，弹框内容是输入的文本。"]}),"\n",(0,t.jsxs)(e.li,{children:["当",(0,t.jsx)(e.code,{children:"img"}),"模式时，鼠标移到 icon 上会显示弹框，弹框内容是指定的图片，需要注意的是，图片需要放在",(0,t.jsx)(e.code,{children:"public"}),"目录下。"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"相关链接支持以下几种图片，通过 icon 属性来选择："}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export type SocialLinkIcon =\n  | 'lark'\n  | 'discord'\n  | 'facebook'\n  | 'github'\n  | 'instagram'\n  | 'linkedin'\n  | 'slack'\n  | 'twitter'\n  | 'youtube'\n  | 'weixin'\n  | 'qq'\n  | 'juejin'\n  | 'zhihu'\n  | 'bilibili'\n  | 'weibo'\n  | 'gitlab'\n  | { svg: string };\n"})}),"\n",(0,t.jsxs)(e.p,{children:["如果需要自定义 icon，可以通过传入一个带有",(0,t.jsx)(e.code,{children:"svg属性"}),"的对象，svg 的值为自定义图标内容即可，比如："]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      socialLinks: [\n        {\n          icon: {\n            svg: 'svg图标内容',\n          },\n          mode: 'link',\n          content: 'https://github.com/',\n        },\n      ],\n    },\n  }\n  plugins: [docTools()],\xb7\n});\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"nextpagetext",children:["nextPageText",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#nextpagetext",children:"#"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Type: ",(0,t.jsx)(e.code,{children:"string"})]}),"\n",(0,t.jsxs)(e.li,{children:["Default: ",(0,t.jsx)(e.code,{children:"Next Page"})]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"下一页的文本。比如:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      nextPageText: 'Next Page',\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"locales",children:["locales",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#locales",children:"#"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Type: ",(0,t.jsx)(e.code,{children:"Array<LocaleConfig>"})]}),"\n",(0,t.jsxs)(e.li,{children:["Default: ",(0,t.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["国际化配置。此配置为一个数组，数组中的每一项都是一个 ",(0,t.jsx)(e.code,{children:"LocaleConfig"})," 对象，它具有以下类型："]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export interface LocaleConfig {\n  /**\n   * 通用站点信息，优先级高于 `doc.locales` 中的配置\n   */\n  // 语言名称\n  lang?: string;\n  // HTML 标题，优先于 `themeConfig.title`\n  title?: string;\n  // HTML 描述，优先于 `themeConfig.description`\n  description?: string;\n  // 对应语言的显示文本\n  label: string;\n  /**\n   * 主题相关信息\n   */\n  // 右侧大纲标题\n  outlineTitle?: string;\n  // 是否显示右侧大纲\n  outline?: boolean;\n  // 最后更新时间文本\n  lastUpdatedText?: string;\n  // 是否显示最后更新时间\n  lastUpdated?: boolean;\n  // 上一页文本\n  prevPageText?: string;\n  // 下一页文本\n  nextPageText?: string;\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"LocaleConfig"})," 中包含许多与主题配置中相同的配置项，但它的优先级会更高。"]}),"\n",(0,t.jsxs)(e.h2,{id:"darkmode",children:["darkMode",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#darkmode",children:"#"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Type: ",(0,t.jsx)(e.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(e.li,{children:["Default: ",(0,t.jsx)(e.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"是否出现暗黑模式/白天模式切换按钮。比如："}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      darkMode: true,\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/doc-tools-doc/docs/zh/api/config/config-theme.mdx"]={toc:[{text:"nav",id:"nav",depth:2},{text:"sidebar",id:"sidebar",depth:2},{text:"footer",id:"footer",depth:2},{text:"outlineTitle",id:"outlinetitle",depth:2},{text:"lastUpdated",id:"lastupdated",depth:2},{text:"lastUpdatedText",id:"lastupdatedtext",depth:2},{text:"prevPageText",id:"prevpagetext",depth:2},{text:"socialLinks",id:"sociallinks",depth:2},{text:"nextPageText",id:"nextpagetext",depth:2},{text:"locales",id:"locales",depth:2},{text:"darkMode",id:"darkmode",depth:2}],title:"主题配置",frontmatter:{}};var c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,l.useMDXComponents)(),n.components).wrapper;return e?(0,t.jsx)(e,o._(s._({},n),{children:(0,t.jsx)(r,s._({},n))})):r(n)}}}]);