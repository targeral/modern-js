(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_guide_default-theme_components_mdx"],{62352:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var s,o=t("15169"),r=t("43932"),a=t("9880"),d=t("23169"),c=t("27385");function i(e){var n=Object.assign({h2:"h2",a:"a",p:"p",pre:"pre",code:"code",div:"div"},(0,d.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h2,{id:"nossr",children:["NoSSR",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#nossr",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Used to skip the ssr for some components.For example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { NoSSR } from '@modern-js/doc-tools/runtime';\n\nconst Component = () => {\n  return (\n    <NoSSR>\n      <div>The content here will only be rendered on the client side</div>\n    </NoSSR>\n  );\n};\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"tab/tabs",children:["Tab/Tabs",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tab/tabs",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"You can directly use the Tab/Tabs component in the document to achieve the effect of tab switching. for example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",meta:'title="index.mdx"',children:'import { Tab, Tabs } from \'@modern-js/doc-tools/theme\';\n\nfunction App() {\n  return (\n    <Tabs>\n      <Tab label="Tab 1">Tab 1 content</Tab>\n      <Tab label="Tab 2">Tab 2 content</Tab>\n    </Tabs>\n  );\n}\n'})}),"\n","\n",(0,a.jsxs)(c.Tabs,{children:[(0,a.jsx)(c.Tab,{label:"1",value:"1",children:(0,a.jsx)(n.p,{children:"Tab 1 content"})}),(0,a.jsx)(c.Tab,{label:"2",value:"2",children:(0,a.jsx)(n.p,{children:"Tab 2 content"})})]}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive info",children:[(0,a.jsx)(n.div,{className:"modern-directive-title",children:"Note"}),(0,a.jsx)(n.div,{className:"modern-directive-content",children:(0,a.jsxs)(n.p,{children:["In order to make it easier for you to use these components, the ",(0,a.jsx)(n.code,{children:"@modern-js/doc-tools/theme"})," package has been aliased inside the framework, so you can directly use ",(0,a.jsx)(n.code,{children:"@theme"})," to import these components.\n"]})})]}),"\n",(0,a.jsx)(n.p,{children:"The props type of the Tabs component is as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"interface TabsProps {\n  children: React.ReactNode;\n  defaultValue?: string;\n  groupId?: string;\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"defaultValue"})," is used to set the tab item selected by default. This value will be compared with the value field of the Tab component props, and if they are equal, the tab will be selected."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"groupId"})," is used to sync the selected tab item between multiple Tabs components.The groups with the same groupId will be synchronized."]}),"\n",(0,a.jsx)(n.p,{children:"The props types of the Tab component are as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"interface TabProps {\n  label: string;\n  // Used to identify the current tab, if not passed, the default label will be used\n  value?: string;\n  children: React.ReactNode;\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"value"})," field is used to identify the current tab, if not passed, the default label will be used."]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/doc-tools-doc/docs/en/fragments/internal-components.mdx"]={toc:[{text:"NoSSR",id:"nossr",depth:2},{text:"Tab/Tabs",id:"tab/tabs",depth:2}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,r._(o._({},e),{children:(0,a.jsx)(i,o._({},e))})):i(e)}},98307:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var s,o=t("15169"),r=t("43932"),a=t("9880"),d=t("23169"),c=t.ir(t("62352"));function i(e){var n=Object.assign({h1:"h1",a:"a"},(0,d.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"internal-components",children:["Internal Components",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#internal-components",children:"#"})]}),"\n","\n",(0,a.jsx)(c.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/doc-tools-doc/docs/en/guide/default-theme/components.mdx"]={toc:[],title:"Internal Components",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,r._(o._({},e),{children:(0,a.jsx)(i,o._({},e))})):i(e)}}}]);