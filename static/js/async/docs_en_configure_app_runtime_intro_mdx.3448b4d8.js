(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_runtime_intro_mdx"],{30914:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return s},title:function(){return d},toc:function(){return c},default:function(){return a}});var r=i("12151"),t=i("23169"),s={sidebar_label:"Overview",sidebar_position:1},d="Overview",c=[{text:"Configuration",depth:2,id:"configuration"},{text:"runtime",depth:3,id:"runtime"},{text:"Base",depth:4,id:"base"},{text:"DefineConfig",depth:4,id:"defineconfig"},{text:"runtimeByEntries",depth:3,id:"runtimebyentries"},{text:"Introduction",depth:4,id:"introduction"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",code:"code",h4:"h4",div:"div",button:"button",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"overview",children:["Overview",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#overview",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"This section describes the configuration of the Runtime plugin."}),"\n",(0,r.jsxs)(n.h2,{id:"configuration",children:["Configuration",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"runtime",children:["runtime",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtime",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The runtime is configured as follows:"}),"\n",(0,r.jsxs)(n.h4,{id:"base",children:["Base",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#base",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Configure in ",(0,r.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    state: true,\n    router: true,\n  },\n});\n"})})]})]}),"\n",(0,r.jsxs)(n.h4,{id:"defineconfig",children:["DefineConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#defineconfig",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Configure use ",(0,r.jsx)(n.a,{href:"/apis/app/runtime/app/define-config",children:(0,r.jsx)(n.code,{children:"defineConfig"})})," API:"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsx)(n.p,{children:"When there is a function in the runtime configuration, it can only be configured in this way."}),"\n"]})]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"src/App.tsx"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/App.tsx"',children:"import { defineConfig } from '@modern-js/runtime';\n\nconst App = () => {\n  /** */\n};\n\ndefineConfig(App, {\n  router: {\n    supportHtml5History: false,\n  },\n});\n\nexport default App;\n"})})]})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsx)(n.p,{children:"Using runtime configuration, you can solve the problem that runtime plugin configuration needs to be at runtime to get specific content."}),"\n",(0,r.jsxs)(n.p,{children:["Runtime plugin runtime configuration and configuration directly in ",(0,r.jsx)(n.code,{children:"modern.config.ts"})," are merged by default, and runtime configuration takes precedence."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive warning",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["defineConfig can only define the specific configuration content of the Runtime plugin. To confirm whether to enable the plugin, it needs to be determined through the configuration in ",(0,r.jsx)(n.code,{children:"modernConfig"})," in ",(0,r.jsx)(n.code,{children:"package.json"})," or ",(0,r.jsx)(n.code,{children:"modern.config.ts"}),"."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h3,{id:"runtimebyentries",children:["runtimeByEntries",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimebyentries",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"introduction",children:["Introduction",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Add the runtime configuration according to the entry. The option attribute is consistent with the runtime. The specified value will be replaced and merged with the content of the runtime attribute."}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    state: false,\n  },\n  runtimeByEntries: {\n    entry1: {\n      state: true, // { state: true }\n    },\n    entry2: {\n      // { state: false, router: true }\n      router: true,\n    },\n  },\n});\n"})})]})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);