(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_advanced_alias_md"],{78419:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return r},toc:function(){return c},default:function(){return l}});var i=s("9880"),o=s("23169"),a={},r="Alias",c=[{text:"Using source.alias config",depth:2,id:"using-sourcealias-config"},{text:"Using paths config in tsconfig.json",depth:2,id:"using-paths-config-in-tsconfigjson"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",ul:"ul",li:"li",h2:"h2",pre:"pre",div:"div"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"alias",children:["Alias",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#alias",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Alias is a way to specify a short name for a module or a path to a directory or file. This can be useful when you want to use a short, easy-to-remember name for a module instead of a long, complex path."}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you have a file at ",(0,i.jsx)(n.code,{children:"src/common/request.ts"}),", you could create an alias called ",(0,i.jsx)(n.code,{children:"@request"})," for it, so you could import the file like this: ",(0,i.jsx)(n.code,{children:"import request from '@request'"}),". This makes it easier to reference the file in your code, and also allows you to move the file to a different location without having to update all the import statements in your code."]}),"\n",(0,i.jsx)(n.p,{children:"In Builder, you can set aliases in two ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/en/api/config-source#sourcealias",children:"source.alias"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"paths"})," in ",(0,i.jsx)(n.code,{children:"tsconfig.json"})]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"using-sourcealias-config",children:["Using ",(0,i.jsx)(n.code,{children:"source.alias"})," config",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-sourcealias-config",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/en/api/config-source#sourcealias",children:"source.alias"})," corresponds to webpack's native ",(0,i.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolvealias",target:"_blank",rel:"noopener noreferrer",children:"resolve.alias"})," config, you can configure it as an object or a function."]}),"\n",(0,i.jsx)(n.p,{children:"First, you can configure it as an object, for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"The relative path in it will be parsed as an absolute path in Builder."}),"\n",(0,i.jsxs)(n.p,{children:["You can also configure it as a function to get the preset ",(0,i.jsx)(n.code,{children:"alias"})," object and modify it, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: alias => {\n      alias['@common'] = './src/common';\n      return alias;\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"using-paths-config-in-tsconfigjson",children:["Using ",(0,i.jsx)(n.code,{children:"paths"})," config in ",(0,i.jsx)(n.code,{children:"tsconfig.json"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-paths-config-in-tsconfigjson",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["In addition to ",(0,i.jsx)(n.code,{children:"source.alias"}),", you can also configure it by ",(0,i.jsx)(n.code,{children:"paths"})," in ",(0,i.jsx)(n.code,{children:"tsconfig.json"}),". We recommend to use this way in TypeScript projects, because it can solve type problem of alias path."]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "paths": {\n      "@common/*": ["./src/common/*"]\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"Priority"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"paths"})," config has higher priority than ",(0,i.jsx)(n.code,{children:"source.alias"}),".\n"]})})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}}}]);