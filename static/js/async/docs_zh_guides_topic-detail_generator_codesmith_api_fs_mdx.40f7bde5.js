(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_generator_codesmith_api_fs_mdx"],{72841:function(s,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var r in e)Object.defineProperty(s,r,{enumerable:!0,get:e[r]})}(e,{frontmatter:function(){return i},toc:function(){return o},title:function(){return c},default:function(){return a}});var n=r("12151"),l=r("21447");let i={sidebar_position:3},o=[{id:"使用姿势",text:"使用姿势",depth:2},{id:"api",text:"API",depth:2},{id:"renderfile",text:"renderFile",depth:3},{id:"renderdir",text:"renderDir",depth:3}],c="@modern-js/codesmith-api-fs";function t(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",h3:"h3"},(0,l.useMDXComponents)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.h1,{id:"modern-jscodesmith-api-fs",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-jscodesmith-api-fs",children:"#"}),"@modern-js/codesmith-api-fs"]}),"\n",(0,n.jsx)(e.p,{children:"微生成器中文件操作的 API 封装，提供渲染单个模板文件和文件夹的方法。FsAPI 通常用于处理二进制文件或者不能使用 handlebars、ejs 处理的模板文件。"}),"\n",(0,n.jsxs)(e.h2,{id:"使用姿势",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"}),"使用姿势"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { FsAPI } "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/codesmith-api-fs'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (context"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorContext"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" generator"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorCore"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"fsApi"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"FsAPI"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(generator);"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"fsApi"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".renderFile"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"     "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"material"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".get"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'templates/a.js'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"     target: "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'b.js'"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"   );"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"创建 FsAPI 实例，参数为微生成器函数参数的 generator，具体介绍请看微生成器项目组成 。"}),"\n",(0,n.jsx)(e.li,{children:"调用其实例上 API 即可。"}),"\n"]}),"\n",(0,n.jsxs)(e.h2,{id:"api",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"}),"API"]}),"\n",(0,n.jsxs)(e.h3,{id:"renderfile",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#renderfile",children:"#"}),"renderFile"]}),"\n",(0,n.jsx)(e.p,{children:"渲染单个模板文件。"}),"\n",(0,n.jsx)(e.p,{children:"参数："}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["resource: ",(0,n.jsx)(e.code,{children:"FsResource"})," 模板文件资源，通过 ",(0,n.jsx)(e.code,{children:"context.materials.get(<filename>)"})," 使用。"]}),"\n",(0,n.jsxs)(e.li,{children:["target: ",(0,n.jsx)(e.code,{children:"string"})," 目标文件路径名称。"]}),"\n"]}),"\n",(0,n.jsxs)(e.h3,{id:"renderdir",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#renderdir",children:"#"}),"renderDir"]}),"\n",(0,n.jsx)(e.p,{children:"渲染模板文件夹。"}),"\n",(0,n.jsx)(e.p,{children:"参数："}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["material: ",(0,n.jsx)(e.code,{children:"FsMaterial"})," 当前微生成器执行的 material 上下文。"]}),"\n",(0,n.jsxs)(e.li,{children:["findGlob: ",(0,n.jsx)(e.code,{children:"string"})," 模板文件匹配正则。"]}),"\n",(0,n.jsxs)(e.li,{children:["target: ",(0,n.jsx)(e.code,{children:"(globMatch: string) => string"})," 目标文件路径生成函数，参数为 ",(0,n.jsx)(e.code,{children:"resourceKey。"})]}),"\n",(0,n.jsxs)(e.li,{children:["options?: ",(0,n.jsx)(e.code,{children:"RenderTemplateDirOptions"})," glob 查找文件配置，具体函数可查看这里 ",(0,n.jsx)(e.a,{href:"https://www.npmjs.com/package/glob",target:"_blank",rel:"noopener noreferrer",children:"glob"}),"。"]}),"\n"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"RenderTemplateDirOptions"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  nodir"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dot"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  ignore"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"readonly"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[];"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]})]})}var a=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.useMDXComponents)(),s.components);return e?(0,n.jsx)(e,Object.assign({},s,{children:(0,n.jsx)(t,s)})):t(s)}}}]);