(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_codesmith_api_handlebars_mdx"],{62771:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return i},toc:function(){return d},default:function(){return c}});var a=r("9880"),t=r("23169"),s={sidebar_position:5},i="@modern-js/codesmith-api-handlebars",d=[{text:"Use",depth:2,id:"use"},{text:"API",depth:2,id:"api"},{text:"renderTemplate",depth:3,id:"rendertemplate"},{text:"renderTemplateDir",depth:3,id:"rendertemplatedir"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,t.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"@modern-js/codesmith-api-handlebars",children:["@modern-js/codesmith-api-handlebars",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#@modern-js/codesmith-api-handlebars",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["An API wrapper for file operations using [handlebars] (",(0,a.jsx)(n.a,{href:"https://handlebarsjs.com/",target:"_blank",rel:"noopener noreferrer",children:"https://handlebarsjs.com/"}),") in the microgenerator, providing a way to render individual template files and folders."]}),"\n",(0,a.jsxs)(n.h2,{id:"use",children:["Use",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use",children:"#"})]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { HandlebarsAPI } from '@modern-js/codesmith-api-handlebars';\n\nexport default async (context: GeneratorContext, generator: GeneratorCore) => {\n  const handlebarApi = new HandlebarsAPI(generator);\n  await handlebarsAPI.renderTemplate(\n     material.get('templates/a.js'),\n     target: 'b.js',\n     { data: \"data\" }\n   );\n}\n"})})]})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create HandlebarsAPI instance, the parameter is the generator of the microgenerator function parameter, please see the composition of the microgenerator project for details."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Just call the API on its example."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"api",children:["API",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"rendertemplate",children:["renderTemplate",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rendertemplate",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Render a single template file."}),"\n",(0,a.jsx)(n.p,{children:"Parameter:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["templateResource: ",(0,a.jsx)(n.code,{children:"FsResource"}),". Template file resource, used by ",(0,a.jsx)(n.code,{children:"context.materials.get(<filename>)"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["target: ",(0,a.jsx)(n.code,{children:"string"}),". Target file path name."]}),"\n",(0,a.jsxs)(n.li,{children:["parameters?: ",(0,a.jsx)(n.code,{children:"Record<string, string>"}),". Render parameter."]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"rendertemplatedir",children:["renderTemplateDir",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rendertemplatedir",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Render template folder."}),"\n",(0,a.jsx)(n.p,{children:"Parameter:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["material: ",(0,a.jsx)(n.code,{children:"FsMaterial"}),". The material context of the current microgenerator execution."]}),"\n",(0,a.jsxs)(n.li,{children:["findGlob: ",(0,a.jsx)(n.code,{children:"string"}),". Template file matches the regular."]}),"\n",(0,a.jsxs)(n.li,{children:["target: ",(0,a.jsx)(n.code,{children:"(globMatch: string) => string"}),". The target file path generation function, the parameter is ",(0,a.jsx)(n.code,{children:"resourceKey."})]}),"\n",(0,a.jsxs)(n.li,{children:["options?: ",(0,a.jsx)(n.code,{children:"RenderTemplateDirOptions"}),". Glob Find the file configuration, the specific function viewable is here [glob] (",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/glob",target:"_blank",rel:"noopener noreferrer",children:"https://www.npmjs.com/package/glob"}),")."]}),"\n"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"type RenderTemplateDirOptions = {\n  nodir?: boolean;\n  dot?: boolean;\n  ignore?: string | readonly string[];\n};\n"})})]})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}}}]);