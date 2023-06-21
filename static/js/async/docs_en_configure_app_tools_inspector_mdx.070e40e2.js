(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_inspector_mdx"],{50589:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var o,t=r("15169"),s=r("43932"),i=r("9880"),c=r("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bundler:"})," ",(0,i.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can enable or configure the ",(0,i.jsx)(n.a,{href:"https://github.com/web-infra-dev/webpack-inspector",target:"_blank",rel:"noopener noreferrer",children:"webpack inspector"})," through ",(0,i.jsx)(n.code,{children:"tools.inspector"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When the configuration is not ",(0,i.jsx)(n.code,{children:"undefined"}),", it means that ",(0,i.jsx)(n.code,{children:"webpack-inspector"})," is enabled, and the type of ",(0,i.jsx)(n.code,{children:"tools.inspector"})," can be ",(0,i.jsx)(n.code,{children:"Object"})," or ",(0,i.jsx)(n.code,{children:"Function"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"tools.inspector"})," is configured with type ",(0,i.jsx)(n.code,{children:"Object"}),", it is merged with the default configuration via Object.assign. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    inspector: {\n      // The default port is 3333\n      port: 3334,\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"tools.inspector"})," is a Function, the default configuration is passed as the first parameter and can be directly modified or returned as the final result. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    inspector(config) {\n      config.port = 3334;\n    },\n  },\n};\n"})})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/builder-doc/docs/en/config/tools/inspector.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,s._(t._({},e),{children:(0,i.jsx)(d,t._({},e))})):d(e)}},86759:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var o,t=r("15169"),s=r("43932"),i=r("9880"),c=r("23169"),d=r.ir(r("50589"));function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"toolsinspector",children:["tools.inspector",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsinspector",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolsinspector",target:"_blank",rel:"noopener noreferrer",children:"tools.inspector"}),".\n"]})})]}),"\n","\n",(0,i.jsx)(d.default,{})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/en/configure/app/tools/inspector.mdx"]={toc:[],title:"tools.inspector",frontmatter:{sidebar_label:"inspector"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,s._(t._({},e),{children:(0,i.jsx)(l,t._({},e))})):l(e)}}}]);