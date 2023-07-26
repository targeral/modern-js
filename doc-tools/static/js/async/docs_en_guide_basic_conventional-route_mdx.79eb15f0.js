(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_guide_basic_conventional-route_mdx"],{43764:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var o,i=t("15169"),r=t("43932"),s=t("9880"),d=t("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"conventional-route",children:["Conventional Route",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#conventional-route",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"what-is-it",children:["What is it?",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#what-is-it",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Modern.js Doc uses file system routing, and the file path of the page is simply mapped to the routing path, which makes the routing of the entire project very intuitive."}),"\n",(0,s.jsxs)(n.p,{children:["For example, if there is a file named ",(0,s.jsx)(n.code,{children:"foo.md"})," in the ",(0,s.jsx)(n.code,{children:"docs"})," directory, the routing path for that file will be ",(0,s.jsx)(n.code,{children:"/foo"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"mapping-rules",children:["Mapping Rules",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mapping-rules",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Modern.js Doc automatically scans the root directory and all subdirectories, and maps file paths to route paths. For example, if you have the following file structure:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docs\n├── foo\n│   └── bar.md\n└── foo.md\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then ",(0,s.jsx)(n.code,{children:"bar.md"})," will be routed to ",(0,s.jsx)(n.code,{children:"/foo/bar"}),", and ",(0,s.jsx)(n.code,{children:"foo.md"})," will be routed to ",(0,s.jsx)(n.code,{children:"/foo"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The specific mapping rules are as follows:"}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"file path"}),"\n",(0,s.jsx)(n.th,{children:"route path"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"index.md"})}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/foo.md"})}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/foo"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/foo/bar.md"})}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/foo/bar"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/zoo/index.md"})}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/zoo"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"component-routing",children:["Component Routing",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#component-routing",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In conventional routing, in addition to ",(0,s.jsx)(n.code,{children:".md(x)"})," files, you can also use ",(0,s.jsx)(n.code,{children:".tsx"})," files as route components. By default, a component is exported in ",(0,s.jsx)(n.code,{children:".tsx"}),", and this component will be automatically registered in the route. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="foo.tsx"',children:"export default () => {\n  return <div>foo</div>;\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Of course, if you want to customize the layout, you can add an export to declare the layout type. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="foo.tsx"',children:"export const frontmatter = {\n  // Declare layout type\n  // The custom layout here will not have a sidebar\n  pageType: 'custom',\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For detailed meanings of each ",(0,s.jsx)(n.code,{children:"pageType"}),", please refer to the ",(0,s.jsx)(n.a,{href:"/api/config/config-frontmatter#pagetype",children:"API documentation"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"custom-behavior",children:["Custom Behavior",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-behavior",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to customize the routing behavior, you can use the ",(0,s.jsx)(n.code,{children:"route"})," field in the configuration file. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  route: {\n    // These files will be excluded from the routing (support glob pattern)\n    exclude: ['component/**/*']\n    // These files will be included in the routing (support glob pattern)\n    include: ['other-dir/**/*'],\n  }\n});\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"best-practices",children:["Best Practices",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#best-practices",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["We recommend that you place documentation files in the ",(0,s.jsx)(n.code,{children:"docs"})," directory to make your project more clear. For non-documentation content, such as custom components, util functions, etc., they can be maintained outside the ",(0,s.jsx)(n.code,{children:"docs"})," directory. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docs\n└── foo.mdx\nsrc\n├── components\n│   └── CustomComponent.tsx\n└── utils\n    └── utils.ts\n"})})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguide%2Fbasic%2Fconventional-route.mdx"]={toc:[{text:"What is it?",id:"what-is-it",depth:2},{text:"Mapping Rules",id:"mapping-rules",depth:2},{text:"Component Routing",id:"component-routing",depth:2},{text:"Custom Behavior",id:"custom-behavior",depth:2},{text:"Best Practices",id:"best-practices",depth:2}],title:"Conventional Route",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,r._)((0,i._)({},e),{children:(0,s.jsx)(c,(0,i._)({},e))})):c(e)}}}]);