(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_sass_mdx"],{72841:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var r=s("9880"),a=s("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",pre:"pre",p:"p",a:"a",h3:"h3",h4:"h4"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  // CSS Source Map enabled by default in development environment\n  sourceMap: isDev,\n};\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["You can modify the config of ",(0,r.jsx)(n.a,{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"noopener noreferrer",children:"sass-loader"})," via ",(0,r.jsx)(n.code,{children:"tools.sass"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"tools.sass"})," is ",(0,r.jsx)(n.code,{children:"Object"})," type, it is merged with the default config through Object.assign. It should be noted that ",(0,r.jsx)(n.code,{children:"sassOptions"})," is merged through deepMerge in a deep way."]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    sass: {\n      sourceMap: true,\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"tools.sass"})," is a Function, the default config is passed as the first parameter, which can be directly modified or returned as the final result. The second parameter provides some utility functions that can be called directly. For Example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    sass(config) {\n      // Modify sourceMap config\n      config.additionalData = async (content, loaderContext) => {\n        // ...\n      };\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"utility-function",children:["Utility Function",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#utility-function",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"addexcludes",children:["addExcludes",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"(excludes: RegExp | RegExp[]) => void"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Used to specify which files ",(0,r.jsx)(n.code,{children:"sass-loader"})," does not compile, You can pass in one or more regular expressions to match the path of sass files, for example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    sass(config, { addExcludes }) {\n      addExcludes(/node_modules/);\n    },\n  },\n};\n"})})})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},75521:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},title:function(){return i},toc:function(){return o},default:function(){return l}});var r=s("9880"),a=s("23169"),c=s.ir(s("72841")),d={sidebar_label:"sass"},i="tools.sass",o=[];function t(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolssass",children:["tools.sass",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolssass",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolssass",target:"_blank",rel:"noopener noreferrer",children:"tools.sass"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(c.default,{})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);