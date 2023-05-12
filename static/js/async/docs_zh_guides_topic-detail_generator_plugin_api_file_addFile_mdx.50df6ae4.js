(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_file_addFile_mdx"],{92755:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var a in n)Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}(n,{frontmatter:function(){return i},title:function(){return t},toc:function(){return s},default:function(){return c}});var r=a("9880"),d=a("23169"),i={sidebar_position:4},t="addFile",s=[{text:"type",depth:2,id:"type"},{text:"file",depth:2,id:"file"},{text:"template",depth:2,id:"template"},{text:"templateFile",depth:2,id:"templatefile"},{text:"force",depth:2,id:"force"},{text:"data",depth:2,id:"data"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",h2:"h2"},(0,d.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"addfile",children:["addFile",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addfile",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["添加单个文件。用于添加 ",(0,r.jsx)(n.code,{children:"templates"})," 目录的单个模板文件或者直接使用模板添加到模板文件。"]}),"\n",(0,r.jsx)(n.p,{children:"该方法可用于任何文件类型，对于二进制以外的文件类型，添加文件时会进行 Handlebars 渲染。"}),"\n",(0,r.jsxs)(n.p,{children:["该方法可在 ",(0,r.jsx)(n.code,{children:"onForged"})," 生命周期的 api 参数上获取。"]}),"\n",(0,r.jsx)(n.p,{children:"其类型定义为："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export interface AddFileParams {\n  type: FileType;\n  file: string;\n  template?: string;\n  templateFile?: string;\n  force?: boolean;\n  data?: Record<string, string>;\n}\nexport type ForgedAPI = {\n  addFile: (params: AddFileParams) => Promise<void>;\n  ...\n};\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"type",children:["type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["文件类型，具体可查看",(0,r.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/file/introduce#%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B",children:"文件类型"}),"。"]}),"\n",(0,r.jsxs)(n.h2,{id:"file",children:["file",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#file",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"创建的目标文件路径。"}),"\n",(0,r.jsxs)(n.h2,{id:"template",children:["template",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#template",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"文件模板，配置该字段值可直接用于模板渲染文件。优先级低于 templateFile。"}),"\n",(0,r.jsxs)(n.h2,{id:"templatefile",children:["templateFile",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#templatefile",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["模板文件，用于渲染的模板文件路径，其值为 ",(0,r.jsx)(n.code,{children:"templates"})," 的相对路径即可。"]}),"\n",(0,r.jsxs)(n.h2,{id:"force",children:["force",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#force",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"是否强制覆盖，当添加的文件已存在时，默认会冲突报错，设置该值为 true 时，可强制覆盖。"}),"\n",(0,r.jsxs)(n.h2,{id:"data",children:["data",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#data",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Handlebars 渲染数据。"})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);