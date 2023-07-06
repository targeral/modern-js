(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_api_config_config-frontmatter_mdx"],{30346:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var i,o=t("15169"),s=t("43932"),r=t("9880"),a=t("23169");function d(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",p:"p",pre:"pre",strong:"strong"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"front-matter-config",children:["Front Matter Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#front-matter-config",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"title",children:["title",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#title",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The title of the page. By default, the page's h1 heading will be used as the title of the HTML document. But if you want to use a different title, you can use Front Matter to specify the title of the page. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"---\ntitle: My Home Page\n---\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"description",children:["description",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#description",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A custom description for the page. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"---\ndescription: This is my custom description for this page.\n---\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"pagetype",children:["pageType",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pagetype",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"'home' | 'doc' | 'custom' | 'blank' | '404'"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"'doc'"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The type of the page. By default, the page type is ",(0,r.jsx)(n.code,{children:"doc"}),". But if you want to use a different page type, you can use the Front Matter field ",(0,r.jsx)(n.code,{children:"pageType"})," to specify the page type. E.g:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"---\npageType: home\n---\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The meaning of each ",(0,r.jsx)(n.code,{children:"pageType"})," config is as follows:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"home"}),": ",(0,r.jsx)(n.strong,{children:"Home page"}),", including the layout content of the top navigation bar and home page."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"doc"}),": ",(0,r.jsx)(n.strong,{children:"Doc page"}),", including top navigation bar, left sidebar, body content, and outline bar on the right."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"custom"}),": ",(0,r.jsx)(n.strong,{children:"Custom page"}),", including top navigation bar and custom content."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blank"}),": Also belongs to ",(0,r.jsx)(n.strong,{children:"custom page"}),", but does not include ",(0,r.jsx)(n.code,{children:"Top Navigation Bar"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"404"}),": ",(0,r.jsx)(n.strong,{children:"Not found page"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hero",children:["hero",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hero",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The hero config for the home page. It has the following types:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export interface Hero {\n  name: string;\n  text: string;\n  tagline: string;\n  image?: {\n    src: string;\n    alt: string;\n  };\n  actions: {\n    text: string;\n    link: string;\n    theme: 'brand' | 'alt';\n  }[];\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"For example, you can use the following Front Matter to specify a page's hero config:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"---\npageType: home\n\nhero:\n  name: Modern.js Doc\n  text: A documentation solution\n  tagline: A modern documentation development technology stack\n  actions:\n    - theme: brand\n      text: Introduction\n      link: /en/guide/introduction\n    - theme: alt\n      text: Quick Start\n      link: /en/guide/getting-started\n---\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"features",children:["features",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#features",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"Array"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["features config of the ",(0,r.jsx)(n.code,{children:"home"})," page. It has the following types:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export interface Feature {\n  title: string;\n  details: string;\n  icon: string;\n  // The link of the feature, not required.\n  link?: string;\n}\n\nexport type Features = Feature[];\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For example, you could use the following to specify the features configuration for the ",(0,r.jsx)(n.code,{children:"home"})," page:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"---\npageType: home\n\nfeatures:\n  - title: 'MDX Support'\n    details: MDX is a powerful way to write content. You can use React components in Markdown.\n    icon: \uD83D\uDCE6\n  - title: 'Feature Rich'\n    details: Out of box support for i18n, full-text search etc.\n    icon: \uD83C\uDFA8\n  - title: 'Customizable'\n    details: You can customize the theme ui and the build process.\n    icon: \uD83D\uDE80\n---\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"sidebar",children:["sidebar",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sidebar",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Whether to show the sidebar on the left. By default, the ",(0,r.jsx)(n.code,{children:"doc"})," page will display the sidebar on the left. If you want to hide the sidebar on the left, you can use the following Front Matter config:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"---\nsidebar: false\n---\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"outline",children:["outline",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outline",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Whether to display the outline column on the right. By default, the ",(0,r.jsx)(n.code,{children:"doc"})," page displays the outline column on the right. You can hide the outline column with the following config:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"---\noutline: false\n---\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"footer",children:["footer",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#footer",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Whether to display the components at the bottom of the document (such as previous/next page). By default, the ",(0,r.jsx)(n.code,{children:"doc"})," page will display the footer at the bottom. You can hide the footer with the following config:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"---\nfooter: false\n---\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fdoc-tools-doc%2Fdocs%2Fen%2Fapi%2Fconfig%2Fconfig-frontmatter.mdx"]={toc:[{text:"title",id:"title",depth:2},{text:"description",id:"description",depth:2},{text:"pageType",id:"pagetype",depth:2},{text:"hero",id:"hero",depth:2},{text:"features",id:"features",depth:2},{text:"sidebar",id:"sidebar",depth:2},{text:"outline",id:"outline",depth:2},{text:"footer",id:"footer",depth:2}],title:"Front Matter Config",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,s._)((0,o._)({},e),{children:(0,r.jsx)(d,(0,o._)({},e))})):d(e)}}}]);