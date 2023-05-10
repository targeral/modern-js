(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_codesmith_structure_mdx"],{90380:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return i},title:function(){return o},toc:function(){return s},default:function(){return d}});var r=t("9880"),a=t("23169"),i={sidebar_position:2},o="The composition of the microgenerator",s=[{text:"package.json",depth:2,id:"package-json"},{text:"Entry file",depth:2,id:"entry-file"},{text:"context",depth:3,id:"context"},{text:"generator",depth:3,id:"generator"},{text:"Template File",depth:2,id:"template-file"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",h3:"h3"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"the-composition-of-the-microgenerator",children:["The composition of the microgenerator",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#the-composition-of-the-microgenerator",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"A microgenerator project is a module project or an Npm package that contains several basic parts:"}),"\n",(0,r.jsxs)(n.h2,{id:"package-json",children:["package.json",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#package-json",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"NPM package description information, including name, version, main and other fields."}),"\n",(0,r.jsxs)(n.h2,{id:"entry-file",children:["Entry file",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entry-file",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The js file corresponding to the above main field. The file exports a generator function by default, and the function format is as follows:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default async (\n  context: GeneratorContext,\n  generator: GeneratorCore,\n) => {};\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"The function parameters are context and generator:"}),"\n",(0,r.jsxs)(n.h3,{id:"context",children:["context",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#context",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Context provides context information maintained by the codesmith runtime. Its type is defined as:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface GeneratorContext {\n  materials: Record<string, FsMaterial>;\n  config: Record<string, any>;\n  data?: Record<string, any>;\n  current: { material: FsMaterial } | null;\n  [key: string]: any;\n}\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"Materials is an abstract file system for codesmith that maintains the mapping between generator names and actionable files."}),"\n",(0,r.jsx)(n.p,{children:"Materials also maintains this default mapping relationship, which is used to maintain the resource information of the current generator execution directory, and can operate on the target project resources through this field."}),"\n",(0,r.jsxs)(n.p,{children:["For example, when you need to modify a field in the ",(0,r.jsx)(n.code,{children:"package.json"})," of the current project:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"const resource = context.materials.default.get(\n  path.join(appDir, 'package.json'),\n);\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"Pass the acquired resources to the JSON API provided by codesmith to implement json operations."}),"\n",(0,r.jsxs)(n.p,{children:["The currently running generator file resource is maintained on the current field of ",(0,r.jsx)(n.code,{children:"GeneratorContext"}),", and the current ",(0,r.jsx)(n.code,{children:"FsMaterial"})," can be obtained through ",(0,r.jsx)(n.code,{children:"current.material"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The get method is provided in ",(0,r.jsx)(n.code,{children:"FsMaterial"})," to get the resource file and pass the resource file to the API supported by the generator to process the template file."]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"const resourceMap = await material.find('templates/**/*');\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["All template files in the generator that match to the ",(0,r.jsx)(n.code,{children:"templates /**/*"})," rules can be obtained in the above way, and the resource files can be operated by traversing the object."]}),"\n",(0,r.jsxs)(n.h3,{id:"generator",children:["generator",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#generator",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Generator provides the function method of the codesmith runtime. Its type is defined as:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface GeneratorCore {\n    logger: Logger;\n    outputPath: string;\n    output: {\n        fs: (file: string | number, data: any, options?: string | fs.WriteFileOptions | undefined) => Promise<void>\n    };\n    runSubGenerator: (subGenerator: string, relativePwdPath?: string | undefined, config?: Record<string, any> | undefined): Promise<void>\n}\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["The outputPath and the ",(0,r.jsx)(n.code,{children:"materials.default"})," in the context point to the same directory, the outputPath is used to directly calculate the target path and operate, and the ",(0,r.jsx)(n.code,{children:"materials.default"})," is used to obtain resource files."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"runSubGenerator"})," provides a way to run other microgenerators in one microgenerator, which will automatically update and maintain new context information."]}),"\n",(0,r.jsxs)(n.h2,{id:"template-file",children:["Template File",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#template-file",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Generator template file."}),"\n",(0,r.jsx)(n.p,{children:"It is recommended to create a templates directory in the project root directory to maintain the template file of the microgenerator. During the execution of the microgenerator, you can only use your own template file. For template files that need to be shared, it is recommended to use a shared sub-generator implementation."})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);