(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_guide_basic_auto-nav-sidebar_mdx"],{78282:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return c}});var a,s=i("15169"),l=i("43932"),d=i("9880"),t=i("23169");function r(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h2:"h2",pre:"pre",h3:"h3",strong:"strong"},(0,t.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"auto-nav/sidebar",children:["Auto Nav/Sidebar",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#auto-nav/sidebar",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["In Modern.js Doc, in addition to declaring ",(0,d.jsx)(n.a,{href:"/api/config/config-theme#nav",children:"nav"})," and ",(0,d.jsx)(n.a,{href:"/api/config/config-theme#sidebar",children:"sidebar"})," through ",(0,d.jsx)(n.code,{children:"themeConfig"})," in the config file, you You can also automatically generate the nav bar and sidebar by declaring the ",(0,d.jsx)(n.code,{children:"_meta.json"})," description file. We recommend the latter because it can make the config file more concise and clear."]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["Automated navbar/sidebar will only work if there are no ",(0,d.jsx)(n.code,{children:"nav"})," and ",(0,d.jsx)(n.code,{children:"sidebar"})," configurations in the config file ",(0,d.jsx)(n.code,{children:"modern.config.ts"}),".\n"]})})]}),"\n",(0,d.jsxs)(n.h2,{id:"basic-concept",children:["Basic Concept",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-concept",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["First, ",(0,d.jsx)(n.code,{children:"_meta.json"})," can be divided into two categories: navbar level and sidebar level. The difference between the two is that the navigation-level ",(0,d.jsx)(n.code,{children:"_meta.json"})," lives in the document root, while the sidebar-level ",(0,d.jsx)(n.code,{children:"_meta.json"})," lives in a subdirectory of the document root. for example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"docs\n├── _meta.json // navigation bar level\n└── guides\n    ├── _meta.json // sidebar level\n    ├── introduction.mdx\n    └── advanced\n        ├── _meta.json // sidebar level\n        └── plugin-development.md\n"})}),"\n",(0,d.jsxs)(n.p,{children:["If your document supports i18n, then ",(0,d.jsx)(n.code,{children:"_meta.json"})," at the navigation bar level will be placed in the corresponding language directory, for example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"docs\n├── en\n│   ├── _meta.json // navigation bar level\n│   └── guides\n│       ├── _meta.json // sidebar level\n│       ├── introduction.mdx\n│       ├── install.mdx\n│       └── advanced\n│           ├── _meta.json // sidebar level\n│           └── plugin-development.md\n└── zh\n    ├── _meta.json // navigation bar level\n    └── guides\n        ├── _meta.json // sidebar level\n        ├── introduction.mdx\n        ├── install.mdx\n        └── advanced\n            ├── _meta.json // sidebar level\n            └── plugin-development.md\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"navbar-level-config",children:["Navbar Level Config",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#navbar-level-config",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["In the case of the navigation bar level, you can fill in an array in ",(0,d.jsx)(n.code,{children:"_meta.json"}),", and its type is exactly the same as the nav config of the default theme. For details, please refer to ",(0,d.jsx)(n.a,{href:"/api/config/config-theme#nav",children:"nav config"}),". for example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "text": "Guide",\n    "link": "/guides/introduction",\n    "activeMatch": "^/guides/"\n  }\n]\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"sidebar-level-config",children:["Sidebar Level Config",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sidebar-level-config",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["In the case of the sidebar level, you can fill in ",(0,d.jsx)(n.code,{children:"_meta.json"})," an array with each item of the following type:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export type SideMetaItem =\n  | string\n  | {\n      type: 'file';\n      name: string;\n      label?: string;\n    }\n  | {\n      type: 'dir';\n      name: string;\n      label?: string;\n      collapsible?: boolean;\n      collapsed?: boolean;\n    };\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"string",children:["string",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["When the type is ",(0,d.jsx)(n.code,{children:"string"}),", it means that the item is a file, and the file name is the string, for example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'["introduction"]\n'})}),"\n",(0,d.jsxs)(n.p,{children:["The file name may or may not have a suffix, for example ",(0,d.jsx)(n.code,{children:"introduction"})," will be parsed as ",(0,d.jsx)(n.code,{children:"introduction.mdx"}),"."]}),"\n",(0,d.jsxs)(n.h3,{id:"obejct",children:["obejct",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#obejct",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"When the type is an object, you can describe it as a file, a directory or a custom link."}),"\n",(0,d.jsxs)(n.p,{children:["In the case of describing ",(0,d.jsx)(n.strong,{children:"file"}),", the types are as follows:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"{\n  type: 'file';\n  name: string;\n  label?: string;\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Among them, ",(0,d.jsx)(n.code,{children:"name"})," means the file name, ",(0,d.jsx)(n.code,{children:"with"}),"/",(0,d.jsx)(n.code,{children:"without"})," suffix is ​​supported, ",(0,d.jsx)(n.code,{children:"label"})," means the display name of the file in the sidebar.",(0,d.jsx)(n.code,{children:"label"})," is an optional value, if it is not filled, it will automatically take the h1 title in the document. For example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "type": "file",\n  "name": "introduction",\n  "label": "Introduction"\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["In the case of describing ",(0,d.jsx)(n.strong,{children:"directories"}),", the types are as follows:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"{\n  type: 'dir';\n  name: string;\n  label?: string;\n  collapsible?: boolean;\n  collapsed?: boolean;\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Among them, ",(0,d.jsx)(n.code,{children:"name"})," indicates the directory name, ",(0,d.jsx)(n.code,{children:"label"})," indicates the display name of the directory in the sidebar, ",(0,d.jsx)(n.code,{children:"collapsible"})," indicates whether the directory can be collapsed, and ",(0,d.jsx)(n.code,{children:"collapsed"})," indicates whether the directory is collapsed by default, for example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "type": "dir",\n  "name": "advanced",\n  "label": "Advanced",\n  "collapsible": true,\n  "collapsed": false\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["In the case of describing ",(0,d.jsx)(n.strong,{children:"custom link"}),", the types are as follows:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"{\n  type: 'custom-link';\n  link: string;\n  label: string;\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Among them, ",(0,d.jsx)(n.code,{children:"link"})," indicates the link address, ",(0,d.jsx)(n.code,{children:"label"})," indicates the display name of the link in the sidebar, for example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "type": "custom-link",\n  "link": "/my-link",\n  "label": "My Link"\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"link"})," support external links, for example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "type": "custom-link",\n  "link": "https://github.com",\n  "label": "GitHub"\n}\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"complete-example",children:["Complete Example",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#complete-example",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Here is a complete example using the three types above:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'[\n  "install",\n  {\n    "type": "file",\n    "name": "introduction",\n    "label": "Introduction"\n  },\n  {\n    "type": "dir",\n    "name": "advanced",\n    "label": "Advanced",\n    "collapsible": true,\n    "collapsed": false\n  },\n  {\n    "type": "custom-link",\n    "link": "/my-link",\n    "label": "My Link"\n  }\n]\n'})})]})}(a=globalThis).__RSPRESS_PAGE_META||(a.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fdoc-tools-doc%2Fdocs%2Fen%2Fguide%2Fbasic%2Fauto-nav-sidebar.mdx"]={toc:[{text:"Basic Concept",id:"basic-concept",depth:2},{text:"Navbar Level Config",id:"navbar-level-config",depth:2},{text:"Sidebar Level Config",id:"sidebar-level-config",depth:2},{text:"string",id:"string",depth:3},{text:"obejct",id:"obejct",depth:3},{text:"Complete Example",id:"complete-example",depth:3}],title:"Auto Nav/Sidebar",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,l._)((0,s._)({},e),{children:(0,d.jsx)(r,(0,s._)({},e))})):r(e)}}}]);