(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_codesmith_api_json_mdx"],{67700:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return a},toc:function(){return d},default:function(){return c}});var t=r("9880"),s=r("23169"),i={sidebar_position:2},a="@modern-js/codesmith-api-json",d=[{text:"Use",depth:2,id:"use"},{text:"API",depth:2,id:"api"},{text:"get",depth:3,id:"get"},{text:"extend",depth:3,id:"extend"},{text:"update",depth:3,id:"update"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"@modern-js/codesmith-api-json",children:["@modern-js/codesmith-api-json",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#@modern-js/codesmith-api-json",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"The JSON API encapsulation in the microgenerator provides common JSON file operation methods."}),"\n",(0,t.jsxs)(n.h2,{id:"use",children:["Use",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { JsonAPI } from '@modern-js/codesmith-api-json';\n\nexport default async (context: GeneratorContext, generator: GeneratorCore) => {\n  const jsonAPI = new JsonAPI(generator);\n  await jsonAPI.update(context.materials.default.get('package.json'), {\n    query: {},\n    update: {\n      $set: {\n        'dependencies.@modern-js/plugin-bff': `^2.0.0`,\n      },\n    },\n  });\n};\n"})})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create JsonAPI instance, the parameter is the generator of the microgenerator function parameter, please see the composition of the microgenerator project for details."}),"\n",(0,t.jsx)(n.li,{children:"Just call the API on its example."}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"api",children:["API",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"get",children:["get",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#get",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Get the JSON file content."}),"\n",(0,t.jsx)(n.p,{children:"Parameter:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["resource: ",(0,t.jsx)(n.code,{children:"FsResource"}),". A file resource, get by ",(0,t.jsx)(n.code,{children:"context.materials.default.get(<filename>)"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"extend",children:["extend",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extend",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Merge objects into a JSON file."}),"\n",(0,t.jsx)(n.p,{children:"Parameter:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["resource: ",(0,t.jsx)(n.code,{children:"FsResource"}),". A file resource, get by ",(0,t.jsx)(n.code,{children:"context.materials.default.get(<filename>)"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["obj: ",(0,t.jsx)(n.code,{children:"Record<string, any>"}),". Object to be merged."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"update",children:["update",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#update",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"pdate object fields to JSON file."}),"\n",(0,t.jsx)(n.p,{children:"Parameter:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["resource: ",(0,t.jsx)(n.code,{children:"FsResource"}),". A file resource, get by ",(0,t.jsx)(n.code,{children:"context.materials.default.get(<filename>)"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["operation: ",(0,t.jsx)(n.code,{children:"{ query: Record<string, any>; update: Record<string, any> }"}),". Update operation, use gesture to view ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/declaration-update",target:"_blank",rel:"noopener noreferrer",children:"declaration-update"})," in detail."]}),"\n"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);