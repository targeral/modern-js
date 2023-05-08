(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_html-plugin_mdx"],{1270:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var s=t("12151"),r=t("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",p:"p",a:"a",h3:"h3"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"false | Object | Function"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"const defaultHtmlPluginOptions = {\n  inject, // corresponding to the html.inject config\n  favicon, // corresponding to html.favicon config\n  filename, // generated based on output.distPath and entryName\n  template, // defaults to the built-in HTML template path\n  templateParameters, // corresponding to the html.templateParameters config\n  chunks: [entryName],\n  minify: {\n    removeComments: false,\n    useShortDoctype: true,\n    keepClosingSlash: true,\n    collapseWhitespace: true,\n    removeRedundantAttributes: true,\n    removeScriptTypeAttributes: true,\n    removeStyleLinkTypeAttributes: true,\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["The configs of ",(0,s.jsx)(n.a,{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"html-webpack-plugin"})," or ",(0,s.jsx)(n.a,{href:"https://github.com/web-infra-dev/rspack/tree/main/packages/rspack-plugin-html",target:"_blank",rel:"noopener noreferrer",children:"@rspack/plugin-html"})," can be modified through ",(0,s.jsx)(n.code,{children:"tools.htmlPlugin"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"tools.htmlPlugin"})," is ",(0,s.jsx)(n.code,{children:"Object"})," type, the value will be merged with the default config via ",(0,s.jsx)(n.code,{children:"Object.assign"}),"."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin: {\n      scriptLoading: 'blocking',\n    },\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"tools.htmlPlugin"})," is a Function:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The first parameter is the default config, which can be modified directly."}),"\n",(0,s.jsx)(n.li,{children:"The second parameter is also an object, containing the entry name and the entry value."}),"\n",(0,s.jsx)(n.li,{children:"The Function can return a new object as the final config."}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin(config, { entryName, entryValue }) {\n      if (entryName === 'main') {\n        config.scriptLoading = 'blocking';\n      }\n    },\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.h3,{id:"boolean-type",children:["Boolean Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The built-in ",(0,s.jsx)(n.code,{children:"html-webpack-plugin"})," plugins can be disabled by set ",(0,s.jsx)(n.code,{children:"tools.htmlPlugin"})," to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin: false,\n  },\n};\n"})})]})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},51543:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return l},title:function(){return c},toc:function(){return a},default:function(){return d}});var s=t("12151"),r=t("23169"),i=t.ir(t("1270")),l={sidebar_label:"htmlPlugin"},c="tools.htmlPlugin",a=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"tools-htmlplugin",children:["tools.htmlPlugin",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tools-htmlplugin",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolshtmlplugin",target:"_blank",rel:"noopener noreferrer",children:"tools.htmlPlugin"}),".\n"]})})]}),"\n","\n",(0,s.jsx)(i.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);