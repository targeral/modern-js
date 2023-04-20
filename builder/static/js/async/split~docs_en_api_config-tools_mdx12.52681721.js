(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_en_api_config-tools_mdx12"],{9605:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return t},toc:function(){return i},default:function(){return d}});var o=s("12151"),c=s("23169"),r={},t="",i=[{text:"Object Type",depth:3,id:"object-type"},{text:"Function Type",depth:3,id:"function-type"}];function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",button:"button",pre:"pre",h3:"h3"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"undefined"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Bundler:"})," ",(0,o.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The config of ",(0,o.jsx)(n.a,{href:"https://github.com/webpack-contrib/css-loader",target:"_blank",rel:"noopener noreferrer",children:"css-loader"})," can be modified through ",(0,o.jsx)(n.code,{children:"tools.cssLoader"}),". The default config is as follows:"]}),"\n",(0,o.jsx)(n.div,{className:"language-",children:(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-js",children:"{\n  importLoaders: 1,\n  modules: {\n    auto: true,\n    exportLocalsConvention: 'camelCase',\n    localIdentName: config.output.cssModuleLocalIdentName,\n    // isServer indicates node (SSR) build\n    // isWebWorker indicates web worker build\n    exportOnlyLocals: isServer || isWebWorker,\n  },\n  // CSS Source Map enabled by default in development environment\n  sourceMap: isDev,\n}\n"})})]})}),"\n",(0,o.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"When this value is an Object, it is merged with the default config via deep merge. For example:"}),"\n",(0,o.jsx)(n.div,{className:"language-",children:(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    cssLoader: {\n      modules: {\n        exportOnlyLocals: true,\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,o.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"When the value is a Function, the default config is passed in as the first parameter. You can modify the config object directly, or return an object as the final config. For example:"}),"\n",(0,o.jsx)(n.div,{className:"language-",children:(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    cssLoader: config => {\n      config.modules.exportOnlyLocals = true;\n      return config;\n    },\n  },\n};\n"})})]})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}}}]);