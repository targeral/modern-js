(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_api_config-theme_mdx"],{63175:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},title:function(){return d},toc:function(){return l},default:function(){return a}});var t=s("12151"),i=s("23169"),o={},d="Theme Config",l=[{text:"nav",depth:2,id:"nav"},{text:"sidebar",depth:2,id:"sidebar"},{text:"footer",depth:2,id:"footer"},{text:"outlineTitle",depth:2,id:"outlinetitle"},{text:"lastUpdated",depth:2,id:"lastupdated"},{text:"lastUpdatedText",depth:2,id:"lastupdatedtext"},{text:"prevPageText",depth:2,id:"prevpagetext"},{text:"socialLinks",depth:2,id:"sociallinks"},{text:"nextPageText",depth:2,id:"nextpagetext"},{text:"locales",depth:2,id:"locales"},{text:"darkMode",depth:2,id:"darkmode"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",h2:"h2",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"theme-config",children:["Theme Config",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#theme-config",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Theme config is located under ",(0,t.jsx)(n.code,{children:"themeConfig"})," in the ",(0,t.jsx)(n.code,{children:"doc"})," param. For example:"]}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      // ...\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,t.jsxs)(n.h2,{id:"nav",children:["nav",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#nav",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"Array"})]}),"\n",(0,t.jsxs)(n.li,{children:["Default: ",(0,t.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"nav"})," configuration is an array of ",(0,t.jsx)(n.code,{children:"NavItem"})," with the following types:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface NavItem {\n  // Navbar text\n  text: string;\n  // Navbar link\n  link: '/';\n  // Activation rules for navbar links\n  activeMatch: '^/$|^/';\n}\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"activeMatch"})," is used to match the current route, when the route matches the ",(0,t.jsx)(n.code,{children:"activeMatch"})," rule, the nav item will be highlighted. By default, ",(0,t.jsx)(n.code,{children:"activeMatch"})," is the ",(0,t.jsx)(n.code,{children:"link"})," of the nav item."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      nav: [\n        {\n          text: 'Home',\n          link: '/',\n        },\n        {\n          text: 'Guide',\n          link: '/guide/',\n        },\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,t.jsxs)(n.p,{children:["当然 ",(0,t.jsx)(n.code,{children:"nav"})," 数组中也可以配置多级菜单，类型如下:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface NavGroup {\n  // 导航栏文本\n  text: string;\n  // 子菜单\n  items: NavItem[];\n}\n"})})]})}),"\n",(0,t.jsx)(n.p,{children:"For example the following configuration:"}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      nav: [\n        {\n          text: 'Home',\n          link: '/',\n        },\n        {\n          text: 'Guide',\n          items: [\n            {\n              text: 'Getting Started',\n              link: '/guide/getting-started',\n            },\n            {\n              text: 'Advanced',\n              link: '/guide/advanced',\n            },\n            // Also support sub group menu\n            {\n              text: 'Group',\n              items: [\n                {\n                  text: 'Personal',\n                  link: 'http://xxx.com/',\n                },\n                {\n                  text: 'Company',\n                  link: 'http://xxx.com/',\n                },\n              ],\n            },\n          ],\n        },\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,t.jsxs)(n.h2,{id:"sidebar",children:["sidebar",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sidebar",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The sidebar of the website. The config is an object with the following types:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"// The key is the path of SidebarGroup\n// value is an array of SidebarGroup\ntype Sidebar = Record<string, SidebarGroup[]>;\n\ninterface SidebarGroup {\n  text: string;\n  link?: string;\n  items: SidebarItem[];\n  // whether to be collapsible\n  collapsible?: boolean;\n  // Whether to be collapsed by default\n  collapsed?: boolean;\n}\n\n// An object can be filled in, or a string can be filled in\n// When filling in a string, it will be converted into an object internally, the string will be used as a link, and the text value will automatically take the title of the corresponding document\ntype SidebarItem =\n  | {\n      // sidebar text\n      text: string;\n      // sidebar link\n      link: string;\n    }\n  | string;\n"})})]})}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      sidebar: {\n        '/guide/': [\n          {\n            text: 'Getting Started',\n            items: [\n              // Fill in an object\n              {\n                text: 'Introduction',\n                link: '/guide/getting-started/introduction',\n              },\n              {\n                text: 'Installation',\n                link: '/guide/getting-started/installation',\n              },\n            ],\n          },\n          {\n            text: 'Advanced',\n            items: [\n              // Fill in the link string directly\n              '/guide/advanced/customization',\n              '/guide/advanced/markdown',\n            ],\n          },\n        ],\n      },\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,t.jsxs)(n.h2,{id:"footer",children:["footer",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#footer",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"Object"})]}),"\n",(0,t.jsxs)(n.li,{children:["Default: ",(0,t.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The footer of the home page."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"footer"})," config is an object of ",(0,t.jsx)(n.code,{children:"Footer"}),", which has the following types:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"export interface Footer {\n  message?: string;\n  copyright?: string;\n}\n"})})]})}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      footer: {\n        message: 'This is a footer',\n      },\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,t.jsxs)(n.h2,{id:"outlinetitle",children:["outlineTitle",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outlinetitle",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.li,{children:"Default: 'ON THIS PAGE'"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Configure the title of the outline in the outline panel."}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      outlineTitle: 'Outline',\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,t.jsxs)(n.h2,{id:"lastupdated",children:["lastUpdated",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#lastupdated",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:["Default: ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Whether to display the last update time, it is not displayed by default."}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      lastUpdated: true,\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,t.jsxs)(n.h2,{id:"lastupdatedtext",children:["lastUpdatedText",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#lastupdatedtext",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.li,{children:["Default: ",(0,t.jsx)(n.code,{children:"Last Updated"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The text of the last update time."}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      lastUpdatedText: 'Last Updated',\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,t.jsxs)(n.h2,{id:"prevpagetext",children:["prevPageText",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prevpagetext",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.li,{children:["Default: ",(0,t.jsx)(n.code,{children:"Previous Page"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The text of the previous page. for example:"}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      prevPageText: 'Previous Page',\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,t.jsxs)(n.h2,{id:"sociallinks",children:["socialLinks",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sociallinks",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"Array"})]}),"\n",(0,t.jsxs)(n.li,{children:["Default: ",(0,t.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can add related links through the following config, such as ",(0,t.jsx)(n.code,{children:"github"})," links, ",(0,t.jsx)(n.code,{children:"twitter"})," links, etc.\nRelated links support three modes: ",(0,t.jsx)(n.code,{children:"link mode"})," ",(0,t.jsx)(n.code,{children:"text mode"})," ",(0,t.jsx)(n.code,{children:"image mode"}),", for example:"]}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      socialLinks: [\n        {\n          icon: 'github',\n          mode: 'link',\n          content: 'https://github.com/sanyuan0704/island.js',\n        },\n        {\n          icon: 'wechat',\n          mode: 'text',\n          content: 'wechat: xxx',\n        },\n        {\n          icon: 'qq',\n          mode: 'img',\n          content: '/qrcode.png',\n        },\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When in ",(0,t.jsx)(n.code,{children:"link"})," mode, click the icon to jump to the link."]}),"\n",(0,t.jsxs)(n.li,{children:["When in ",(0,t.jsx)(n.code,{children:"text"})," mode, when the mouse moves over the icon, a pop-up box will be displayed, and the content of the pop-up box is the entered text"]}),"\n",(0,t.jsxs)(n.li,{children:["When in the ",(0,t.jsx)(n.code,{children:"img"})," mode, moving the mouse over the icon will display a bullet box, and the content of the bullet box is the specified picture. It should be noted that the picture needs to be placed in the ",(0,t.jsx)(n.code,{children:"public"})," directory."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Related links support the following types of images, which can be selected through the icon attribute:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"export type SocialLinkIcon =\n  | 'discord'\n  | 'facebook'\n  | 'github'\n  | 'instagram'\n  | 'linkedin'\n  | 'slack'\n  | 'twitter'\n  | 'youtube'\n  | 'weixin'\n  | 'qq'\n  | 'juejin'\n  | 'zhihu'\n  | 'bilibili'\n  | 'weibo'\n  | 'gitlab'\n  | { svg: string };\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:["If you need to customize the icon, you can pass in an object with ",(0,t.jsx)(n.code,{children:"svg attribute"}),", and the value of svg is the content of the custom icon, for example:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      socialLinks: [\n        {\n          icon: {\n            svg: '<svg>xxx</svg>',\n          },\n          mode: 'link',\n          content: 'https://github.com/',\n        },\n      ],\n    },\n  }\n  plugins: [docTools()],\xb7\n});\n"})})]})}),"\n",(0,t.jsxs)(n.h2,{id:"nextpagetext",children:["nextPageText",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#nextpagetext",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.li,{children:["Default: ",(0,t.jsx)(n.code,{children:"Next Page"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Text for the next page. for example:"}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      nextPageText: 'Next Page',\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,t.jsxs)(n.h2,{id:"locales",children:["locales",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#locales",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"Array<LocaleConfig>"})]}),"\n",(0,t.jsxs)(n.li,{children:["Default: ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["I18n config. This config is an array, and every item of it is ",(0,t.jsx)(n.code,{children:"LocaleConfig"}),", and the types are as follows:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"export interface LocaleConfig {\n  // language name\n  lang?: string;\n  // HTML title, takes precedence over `themeConfig.title\n  title?: string;\n  // HTML description, takes precedence over `themeConfig.description`\n  description?: string;\n  // Display text for the corresponding language\n  label: string;\n  // Navbar config, takes precedence over `themeConfig.nav\n  nav?: NavItem[];\n  // Sidebar config, takes precedence over `themeConfig.sidebar`\n  sidebar?: Sidebar;\n  // Right outline title\n  outlineTitle?: string;\n  // Whether to display the outline title\n  outline?: boolean;\n  // Whether to display the last update time\n  lastUpdated?: boolean;\n  // Last update time text\n  lastUpdatedText?: string;\n  // Previous text\n  prevPageText?: string;\n  // Next page text\n  nextPageText?: string;\n}\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"LocaleConfig"})," contains many of the same configuration items as the theme config, but the former will have a higher priority."]}),"\n",(0,t.jsxs)(n.h2,{id:"darkmode",children:["darkMode",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#darkmode",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:["Default: ",(0,t.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Whether a Dark/Light mode toggle button appears. for example:"}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      darkMode: true,\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}}}]);