(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_performance_remove-console_mdx"],{77556:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var o=r("9880"),s=r("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"boolean | ConsoleType[]"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Whether to remove ",(0,o.jsx)(n.code,{children:"console.xx"})," in production build."]}),"\n",(0,o.jsxs)(n.h4,{id:"remove-all-consoles",children:["Remove all consoles",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#remove-all-consoles",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.code,{children:"removeConsole"})," is set to ",(0,o.jsx)(n.code,{children:"true"}),", all types of ",(0,o.jsx)(n.code,{children:"console.xx"})," are removed:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    removeConsole: true,\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.h4,{id:"remove-specific-console",children:["Remove specific console",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#remove-specific-console",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["You can also specify to remove only certain types of ",(0,o.jsx)(n.code,{children:"console.xx"}),", such as ",(0,o.jsx)(n.code,{children:"console.log"})," and ",(0,o.jsx)(n.code,{children:"console.warn"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    removeConsole: ['log', 'warn'],\n  },\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"The following types of console are currently supported:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"type ConsoleType = 'log' | 'info' | 'warn' | 'error' | 'table' | 'group';\n"})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}},88326:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return l},title:function(){return i},toc:function(){return a},default:function(){return t}});var o=r("9880"),s=r("23169"),c=r.ir(r("77556")),l={sidebar_label:"removeConsole"},i="performance.removeConsole",a=[];function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"performanceremoveconsole",children:["performance.removeConsole",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceremoveconsole",children:"#"})]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive tip",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-performance.html#performanceremoveconsole",target:"_blank",rel:"noopener noreferrer",children:"performance.removeConsole"}),".\n"]})})]}),"\n","\n",(0,o.jsx)(c.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}}}]);