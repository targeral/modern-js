(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_api_api-components_mdx"],{38575:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return r},default:function(){return i}});var t=s("12151"),a=s("23169"),o=s("93846"),c={},d="Internal Components",r=[{text:"NoSSR",depth:2,id:"nossr"},{text:"Tab/Tabs",depth:2,id:"tab/tabs"}];function l(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",button:"button",pre:"pre",code:"code"},(0,a.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"internal-components",children:["Internal Components",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#internal-components",children:"#"})]}),"\n",(0,t.jsxs)(n.h2,{id:"nossr",children:["NoSSR",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#nossr",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Used to skip the ssr for some components.For example"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { NoSSR } from '@modern-js/doc-tools/runtime';\n\nconst Component = () => {\n  return (\n    <NoSSR>\n      <div>The content here will only be rendered on the client side</div>\n    </NoSSR>\n  );\n};\n"})})]})}),"\n",(0,t.jsxs)(n.h2,{id:"tab/tabs",children:["Tab/Tabs",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tab/tabs",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"You can directly use the Tab/Tabs component in the document to achieve the effect of tab switching. for example:"}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"index.mdx"}),(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-mdx",meta:'title="index.mdx"',children:'import { Tab, Tabs } from \'@modern-js/doc-tools/theme\';\n\n<Tabs>\n  <Tab label="Tab 1">Tab 1 content</Tab>\n  <Tab label="Tab 2">Tab 2 content</Tab>\n</Tabs>\n'})})]})]}),"\n","\n",(0,t.jsxs)(o.Tabs,{children:[(0,t.jsx)(o.Tab,{label:"1",value:"1",children:(0,t.jsx)(n.p,{children:"Tab 1 content"})}),(0,t.jsx)(o.Tab,{label:"2",value:"2",children:(0,t.jsx)(n.p,{children:"Tab 2 content"})})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"Note"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["In order to make it easier for you to use these components, the ",(0,t.jsx)(n.code,{children:"@modern-js/doc-tools/theme"})," package has been aliased inside the framework, so you can directly use ",(0,t.jsx)(n.code,{children:"@theme"})," to import these components.\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"The props type of the Tabs component is as follows:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface TabsProps {\n  children: React.ReactNode;\n  defaultValue?: string;\n  groupId?: string;\n}\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"defaultValue"})," is used to set the tab item selected by default. This value will be compared with the value field of the Tab component props, and if they are equal, the tab will be selected."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"groupId"})," is used to sync the selected tab item between multiple Tabs components.The groups with the same groupId will be synchronized."]}),"\n",(0,t.jsx)(n.p,{children:"The props types of the Tab component are as follows:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface TabProps {\n  label: string;\n  // Used to identify the current tab, if not passed, the default label will be used\n  value?: string;\n  children: React.ReactNode;\n}\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"value"})," field is used to identify the current tab, if not passed, the default label will be used."]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}}}]);