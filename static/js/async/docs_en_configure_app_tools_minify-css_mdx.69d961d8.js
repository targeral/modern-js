(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_minify-css_mdx"],{78360:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var i,r=s("15169"),o=s("43932"),t=s("9880"),c=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3"},(0,c.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  minimizerOptions: {\n    preset: [\n      'default',\n      {\n        mergeLonghand: false,\n      },\n    ],\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Bundler:"})," ",(0,t.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["When building for production, Builder will minimize the CSS code through ",(0,t.jsx)(n.a,{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"css-minimizer-webpack-plugin"}),". The config of ",(0,t.jsx)(n.a,{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"css-minimizer-webpack-plugin"})," can be modified via ",(0,t.jsx)(n.code,{children:"tools.minifyCss"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"tools.minifyCss"})," is ",(0,t.jsx)(n.code,{children:"Object"})," type, it will be merged with the default config via ",(0,t.jsx)(n.code,{children:"Object.assign"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, modify the ",(0,t.jsx)(n.code,{children:"preset"})," config of ",(0,t.jsx)(n.a,{href:"https://cssnano.co/",target:"_blank",rel:"noopener noreferrer",children:"cssnano"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    minifyCss: {\n      minimizerOptions: {\n        preset: require.resolve('cssnano-preset-simple'),\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"tools.minifyCss"})," is ",(0,t.jsx)(n.code,{children:"Function"})," type, the default config is passed in as the first parameter, the config object can be modified directly, or a value can be returned as the final result."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n   tools: {\n    minifyCss: options => {\n      options.minimizerOptions = {\n        preset: require.resolve('cssnano-preset-simple'),\n      },\n    }\n  }\n};\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/builder-doc/docs/en/config/tools/minifyCss.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3}],title:"",frontmatter:{}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,o._(r._({},e),{children:(0,t.jsx)(l,r._({},e))})):l(e)}},77890:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var i,r=s("15169"),o=s("43932"),t=s("9880"),c=s("23169"),l=s.ir(s("78360"));function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"toolsminifycss",children:["tools.minifyCss",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsminifycss",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolsminifycss",target:"_blank",rel:"noopener noreferrer",children:"tools.minifyCss"}),".\n"]})})]}),"\n","\n",(0,t.jsx)(l.default,{})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/en/configure/app/tools/minify-css.mdx"]={toc:[],title:"tools.minifyCss",frontmatter:{sidebar_label:"minifyCss"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,o._(r._({},e),{children:(0,t.jsx)(d,r._({},e))})):d(e)}}}]);