(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_minify-css_mdx"],{8232:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var i=s("9880"),r=s("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",p:"p",a:"a",h3:"h3"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  minimizerOptions: {\n    preset: [\n      'default',\n      {\n        mergeLonghand: false,\n      },\n    ],\n  },\n};\n"})})]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bundler:"})," ",(0,i.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When building for production, Builder will minimize the CSS code through ",(0,i.jsx)(n.a,{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"css-minimizer-webpack-plugin"}),". The config of ",(0,i.jsx)(n.a,{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"css-minimizer-webpack-plugin"})," can be modified via ",(0,i.jsx)(n.code,{children:"tools.minifyCss"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"tools.minifyCss"})," is ",(0,i.jsx)(n.code,{children:"Object"})," type, it will be merged with the default config via ",(0,i.jsx)(n.code,{children:"Object.assign"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, modify the ",(0,i.jsx)(n.code,{children:"preset"})," config of ",(0,i.jsx)(n.a,{href:"https://cssnano.co/",target:"_blank",rel:"noopener noreferrer",children:"cssnano"}),":"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    minifyCss: {\n      minimizerOptions: {\n        preset: require.resolve('cssnano-preset-simple'),\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,i.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"tools.minifyCss"})," is ",(0,i.jsx)(n.code,{children:"Function"})," type, the default config is passed in as the first parameter, the config object can be modified directly, or a value can be returned as the final result."]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n   tools: {\n    minifyCss: options => {\n      options.minimizerOptions = {\n        preset: require.resolve('cssnano-preset-simple'),\n      },\n    }\n  }\n};\n"})})]})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},327:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return t},title:function(){return o},toc:function(){return l},default:function(){return d}});var i=s("9880"),r=s("23169"),c=s.ir(s("8232")),t={sidebar_label:"minifyCss"},o="tools.minifyCss",l=[];function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"tools-minifycss",children:["tools.minifyCss",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tools-minifycss",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolsminifycss",target:"_blank",rel:"noopener noreferrer",children:"tools.minifyCss"}),".\n"]})})]}),"\n","\n",(0,i.jsx)(c.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);