(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_plugins_mdx"],{35097:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return r},toc:function(){return o},title:function(){return c},default:function(){return a}});var i=n("12151"),l=n("21447");let r={title:"plugins",sidebar_position:9},o=[{id:"precautions",text:"Precautions",depth:2},{id:"plugin-type",text:"Plugin type",depth:2},{id:"plugin-execution-order",text:"Plugin execution order",depth:2},{id:"example",text:"Example",depth:2},{id:"using-plugins-on-npm",text:"Using plugins on npm",depth:3},{id:"use-local-plugins",text:"Use local plugins",depth:3},{id:"plugin-configuration",text:"Plugin configuration",depth:3}],c="plugins";function t(e){let s=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",h3:"h3",div:"div",button:"button",pre:"pre",span:"span"},(0,l.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"plugins",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#plugins",children:"#"}),"plugins"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"CliPlugin[]"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Default:"})," ",(0,i.jsx)(s.code,{children:"[]"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Used to configure custom Modern.js framework plugins."}),"\n",(0,i.jsxs)(s.p,{children:["For the way to write custom plugins, please refer to ",(0,i.jsx)(s.a,{href:"/en/guides/topic-detail/framework-plugin/implement.html",children:"How to Write Plugins"}),"."]}),"\n",(0,i.jsxs)(s.h2,{id:"precautions",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#precautions",children:"#"}),"Precautions"]}),"\n",(0,i.jsxs)(s.p,{children:["This config ",(0,i.jsx)(s.strong,{children:"is used to configure the Modern.js framework plugin"}),". If you need to configure other types of plugins, please select the corresponding configs:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Use ",(0,i.jsx)(s.a,{href:"/en/configure/app/builder-plugins.html",children:"builderPlugins"})," to configure Modern.js Builder plugins."]}),"\n",(0,i.jsxs)(s.li,{children:["Use ",(0,i.jsx)(s.a,{href:"/en/configure/app/tools/webpack.html",children:"tools.webpack"})," or ",(0,i.jsx)(s.a,{href:"/en/configure/app/tools/webpack-chain.html",children:"tools.webpackChain"})," to configure webpack plugins."]}),"\n",(0,i.jsxs)(s.li,{children:["Use ",(0,i.jsx)(s.a,{href:"/en/configure/app/tools/babel.html",children:"tools.babel"})," to configure babel plugins."]}),"\n"]}),"\n",(0,i.jsxs)(s.h2,{id:"plugin-type",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-type",children:"#"}),"Plugin type"]}),"\n",(0,i.jsx)(s.p,{children:"There are three different type of framework plugins built into the Modern.js:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"CLI Plugin"}),"，for local development, compilation and build phases, can extend various capabilities on the command line and compilation phases."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Server Plugin"}),"，for server-level."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Runtime Plugin"}),"，for runtime."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The ability to customize CLI plugins is currently open Modern.js, and the Server plugin and Runtime plugin will be available in the future."}),"\n",(0,i.jsxs)(s.h2,{id:"plugin-execution-order",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-execution-order",children:"#"}),"Plugin execution order"]}),"\n",(0,i.jsxs)(s.p,{children:["By default, custom plugins are executed sequentially in the order of an array of ",(0,i.jsx)(s.code,{children:"plugins"}),", Modern.js built-in plugins are executed earlier than custom plugins."]}),"\n",(0,i.jsxs)(s.p,{children:["When the plugin uses related fields that control the order, such as ",(0,i.jsx)(s.code,{children:"pre"})," and ",(0,i.jsx)(s.code,{children:"post"}),", the execution order will be adjusted based on the declared fields, see ",(0,i.jsx)(s.a,{href:"/en/guides/topic-detail/framework-plugin/relationship.html",children:"Relationship between plugins"}),"."]}),"\n",(0,i.jsxs)(s.h2,{id:"example",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,i.jsx)(s.p,{children:"Below is an example of using the CLI plugin."}),"\n",(0,i.jsxs)(s.h3,{id:"using-plugins-on-npm",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#using-plugins-on-npm",children:"#"}),"Using plugins on npm"]}),"\n",(0,i.jsx)(s.p,{children:"To use the plugin on npm, you need to install the plugin through the package manager and import it."}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" myPlugin "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'my-plugin'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"myPlugin"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h3,{id:"use-local-plugins",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#use-local-plugins",children:"#"}),"Use local plugins"]}),"\n",(0,i.jsx)(s.p,{children:"Using the plugin in the local code repository, you can import it directly through the relative path import."}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" myPlugin "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./config/plugin/myPlugin'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"myPlugin"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h3,{id:"plugin-configuration",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-configuration",children:"#"}),"Plugin configuration"]}),"\n",(0,i.jsx)(s.p,{children:"If the plugin provides some custom configuration options, you can pass in the configuration through the parameters of the plugin function."}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" myPlugin "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'my-plugin'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"myPlugin"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      foo"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      bar"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    })"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.useMDXComponents)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}}}]);