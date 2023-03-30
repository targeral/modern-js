(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_plugins_plugin-node-polyfill_mdx"],{59228:function(e,s,l){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var l in s)Object.defineProperty(e,l,{enumerable:!0,get:s[l]})}(s,{frontmatter:function(){return r},toc:function(){return o},title:function(){return c},default:function(){return a}});var n=l("12151"),i=l("21447");let r=void 0,o=[{id:"quick-start",text:"Quick Start",depth:2},{id:"install",text:"Install",depth:3},{id:"register",text:"Register",depth:3},{id:"node-polyfills",text:"Node Polyfills",depth:2},{id:"globals",text:"Globals",depth:3},{id:"modules",text:"Modules",depth:3},{id:"fallbacks",text:"Fallbacks",depth:3}],c="Node Polyfill Plugin";function d(e){let s=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",h3:"h3",button:"button",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"node-polyfill-plugin",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#node-polyfill-plugin",children:"#"}),"Node Polyfill Plugin"]}),"\n",(0,n.jsxs)(s.div,{className:"modern-directive tip",children:[(0,n.jsx)(s.div,{className:"modern-directive-title",children:"About Node Polyfill"}),(0,n.jsx)(s.div,{className:"modern-directive-content",children:(0,n.jsx)(s.p,{children:"\nNormally, we don't need to use Node libs on the browser side. However, it is possible to use some Node libs when the code will run on both the Node side and the browser side, and Node Polyfill provides browser versions of polyfills for these Node libs."})})]}),"\n",(0,n.jsx)(s.p,{children:"By using the Node Polyfill plugin, Node core libs polyfills are automatically injected into the browser-side, allowing you to use these modules on the browser side with confidence."}),"\n",(0,n.jsxs)(s.h2,{id:"quick-start",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"}),"Quick Start"]}),"\n",(0,n.jsxs)(s.h3,{id:"install",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"}),"Install"]}),"\n",(0,n.jsx)(s.p,{children:"You can install the plugin with the following command:"}),"\n",(0,n.jsxs)(s.div,{className:"language-bash",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# npm"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"npm install @modern-js/builder-plugin-node-polyfill -D"})}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# yarn"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"yarn add @modern-js/builder-plugin-node-polyfill -D"})}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# pnpm"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm add @modern-js/builder-plugin-node-polyfill -D"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.h3,{id:"register",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"}),"Register"]}),"\n",(0,n.jsxs)(s.p,{children:["In upper-level frameworks such as Modern.js, you can register node polyfill plugins through the ",(0,n.jsx)(s.code,{children:"builderPlugins"})," config:"]}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { builderPluginNodePolyfill } "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/builder-plugin-node-polyfill'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  builderPlugins"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"builderPluginNodePolyfill"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.p,{children:["If you are using the Builder's Node API, you can register node polyfill plugins through the ",(0,n.jsx)(s.code,{children:"addPlugins"})," method:"]}),"\n",(0,n.jsxs)(s.div,{className:"language-js",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { builderPluginNodePolyfill } "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/builder-plugin-node-polyfill'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// add the plugin to the builder instance"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"builder"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".addPlugins"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(["}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"builderPluginNodePolyfill"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()]);"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.h2,{id:"node-polyfills",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#node-polyfills",children:"#"}),"Node Polyfills"]}),"\n",(0,n.jsxs)(s.h3,{id:"globals",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#globals",children:"#"}),"Globals"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Buffer"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"process"})}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"When the above global variables are used directly in code, the corresponding polyfill will be injected."}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"bufferData"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Buffer"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'xxxx'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.h3,{id:"modules",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#modules",children:"#"}),"Modules"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"assert"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"buffer"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"console"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"constants"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"crypto"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"domain"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"events"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"http"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"https"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"os"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"path"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"punycode"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"process"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"querystring"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"stream"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"_stream_duplex"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"_stream_passthrough"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"_stream_readable"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"_stream_transform"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"_stream_writable"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"string_decoder"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"sys"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"timers"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"tty"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"url"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"util"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"vm"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"zlib"})}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"When the above module is referenced in code via import / require syntax, the corresponding polyfill will be injected."}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { Buffer } "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'buffer'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"bufferData"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Buffer"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'xxxx'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.h3,{id:"fallbacks",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#fallbacks",children:"#"}),"Fallbacks"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"child_process"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"cluster"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"dgram"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"dns"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"fs"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"module"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"net"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"readline"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"repl"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"tls"})}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Currently there is no polyfill for the above modules on the browser side, so when you import the above modules, it will automatically fallback to an empty object."}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" fs "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'fs'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(fs); "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// -> {}"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.useMDXComponents)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}}}]);