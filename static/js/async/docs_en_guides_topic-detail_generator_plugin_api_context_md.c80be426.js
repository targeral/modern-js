(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_context_md"],{99973:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t,s=i("15169"),r=i("43932"),d=i("9880"),a=i("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",h3:"h3",h4:"h4",div:"div",ol:"ol"},(0,a.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"context",children:["context",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#context",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["The generator plugin exports a function by default in the ",(0,d.jsx)(n.code,{children:"main"})," file, and the function parameter is ",(0,d.jsx)(n.code,{children:"context"}),". All APIs provided by the generator plugin are provided by this ",(0,d.jsx)(n.code,{children:"context"}),"."]}),"\n",(0,d.jsxs)(n.h2,{id:"types",children:["Types",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#types",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Let's first understand the type definition of ",(0,d.jsx)(n.code,{children:"context"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export interface IPluginContext {\n  locale?: string;\n  addInputBefore: (key: string, input: Schema) => void;\n  addInputAfter: (key: string, input: Schema) => void;\n  setInput: (key: string, field: string, value: unknown) => void;\n  setInputValue: (value: Record<string, unknown>) => void;\n  setDefaultConfig: (value: Record<string, unknown>) => void;\n  isFileExist: (fileName: string) => Promise<boolean>;\n  readDir: (dir: string) => Promise<string[]>;\n  setGitMessage: (gitMessage: string) => void;\n  onForged: (func: PluginForgedFunc) => void;\n  afterForged: (func: PluginAfterForgedFunc) => void;\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["The contents provided by ",(0,d.jsx)(n.code,{children:"context"})," can be mainly divided into three categories:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Get the information of the current generator execution environment."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Operate input."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Generator plugin lifecycle function."}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"The generator plugin APIs will be introduced from these three categories below."}),"\n",(0,d.jsxs)(n.h3,{id:"get-information",children:["Get Information",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#get-information",children:"#"})]}),"\n",(0,d.jsxs)(n.h4,{id:"locale",children:["locale",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#locale",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Gets the language of the generator plugin execution environment. ",(0,d.jsx)(n.code,{children:"@modern-js/create"})," provides two languages, ",(0,d.jsx)(n.code,{children:"zh"})," and ",(0,d.jsx)(n.code,{children:"en"}),", which correspond to these two values."]}),"\n",(0,d.jsxs)(n.h4,{id:"isfileexist",children:["isFileExist",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isfileexist",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Checks whether a file exists. We often need to confirm whether the target project file exists before defining the operation. This API can be used directly for this purpose."}),"\n",(0,d.jsxs)(n.p,{children:["For example, we need to find out if the ",(0,d.jsx)(n.code,{children:"package.json"})," file exists and then do someing:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const isExist = await context.isFileExist('package.json');\nif (isExist) {\n    ...\n}\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"readdir",children:["readDir",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#readdir",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Gets the file list in a folder. We often need to get the file list under the target project folder before defining the operation. This API can be used directly for this purpose."}),"\n",(0,d.jsxs)(n.p,{children:["For example, we need to get all files under the ",(0,d.jsx)(n.code,{children:"src"})," folder and then do someing:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const files = await context.readDir('src');\n\nfiles.map(name => {\n    ...\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"input-operations",children:["Input Operations",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input-operations",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"key"})," parameter used in input operations can refer to ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/generator/create/config",children:"Configuration Parameters"})," and use the key under the solution’s scheme, that is, it does not support ",(0,d.jsx)(n.code,{children:"solution"})," and ",(0,d.jsx)(n.code,{children:"scenes"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["The input parameter in input operations corresponds to the schema type described in ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/input",children:"Input"}),"."]}),"\n",(0,d.jsxs)(n.h4,{id:"addinputbefore",children:["addInputBefore",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addinputbefore",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Adds a question before the specified input ",(0,d.jsx)(n.code,{children:"key"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"For example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"context.addInputBefore('packageManager', {\n  type: 'object',\n  properties: {\n    language: {\n      type: 'string',\n      title: 'Please select the programming language:',\n      enum: [\n        { label: 'TS', value: 'ts' },\n        { label: 'ES6+', value: 'js' },\n      ],\n    },\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"addinputafter",children:["addInputAfter",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addinputafter",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Adds a question after the specified input ",(0,d.jsx)(n.code,{children:"key"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"For example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"context.addInputAfter('packageManager', {\n  type: 'object',\n  properties: {\n    language: {\n      type: 'string',\n      title: 'Please select the programming language:',\n      enum: [\n        { label: 'TS', value: 'ts' },\n        { label: 'ES6+', value: 'js' },\n      ],\n    },\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["The ",(0,d.jsx)(n.code,{children:"key"})," for adding a question cannot be the same as the ",(0,d.jsx)(n.code,{children:"key"})," of the question provided by Modern.js solution scheme itself."]}),"\n",(0,d.jsxs)(n.li,{children:["The priority of adding a question with ",(0,d.jsx)(n.code,{children:"addInputAfter"})," is higher than that of ",(0,d.jsx)(n.code,{children:"addInputBefore"}),". When adding an After question to a key and adding a Before question to the next key, the After question will be before the Before question."]}),"\n",(0,d.jsxs)(n.li,{children:["When adding multiple questions before or after the same ",(0,d.jsx)(n.code,{children:"key"}),", this method can be called multiple times, and the order of the questions will be arranged according to the calling sequence."]}),"\n"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.h4,{id:"setinput",children:["setInput",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setinput",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Sets the attributes of the specified input ",(0,d.jsx)(n.code,{children:"key"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["For example, set the ",(0,d.jsx)(n.code,{children:"title"})," attribute of ",(0,d.jsx)(n.code,{children:"packageName"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"context.setInput('packageName', 'title', \"Name\");\n"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsx)(n.p,{children:"For input options provided by Modern.js solution schemes, only deletion is supported, and adding will cause logical judgment problems in the code."})})]}),"\n",(0,d.jsxs)(n.h4,{id:"setinputvalue",children:["setInputValue",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setinputvalue",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Sets the default value of the specified input ",(0,d.jsx)(n.code,{children:"key"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["For example, set the default value of ",(0,d.jsx)(n.code,{children:"packageManager"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"context.setInputValue({\n  packageManager: 'npm',\n});\n"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsx)(n.p,{children:"After setting, the question still needs to be interactive, but the default value configured by the generator plugin will be used."})})]}),"\n",(0,d.jsxs)(n.h4,{id:"setdefaultconfig",children:["setDefaultConfig",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setdefaultconfig",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Sets the default value of the specified input ",(0,d.jsx)(n.code,{children:"key"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["For example, set the default value of ",(0,d.jsx)(n.code,{children:"packageManager"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"context.setDefaultConfig({\n  packageManager: 'npm',\n});\n"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["After setting, the corresponding question will no longer be displayed, which is consistent with the ",(0,d.jsx)(n.code,{children:"--config"})," behavior specified by ",(0,d.jsx)(n.code,{children:"@modern-js/create"}),". Does not support setting ",(0,d.jsx)(n.code,{children:"vertical"})," and ",(0,d.jsx)(n.code,{children:"projectOrg"}),".\n"]})})]}),"\n",(0,d.jsxs)(n.h4,{id:"setgitmessage",children:["setGitMessage",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setgitmessage",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Sets the initial git commit message. Modern.js defaults to the git initialization commit message as ",(0,d.jsx)(n.code,{children:"feat: init"}),", which can be modified by this function."]}),"\n",(0,d.jsxs)(n.h3,{id:"lifecycle-functions",children:["Lifecycle Functions",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#lifecycle-functions",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["The lifecycle functions are relatively complex and will be introduced separately in the following two sections, ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/onForged",children:(0,d.jsx)(n.code,{children:"onForged"})})," and ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/afterForged",children:(0,d.jsx)(n.code,{children:"afterForged"})}),"."]})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/en/guides/topic-detail/generator/plugin/api/context.md"]={toc:[{text:"Types",id:"types",depth:2},{text:"Get Information",id:"get-information",depth:3},{text:"locale",id:"locale",depth:4},{text:"isFileExist",id:"isfileexist",depth:4},{text:"readDir",id:"readdir",depth:4},{text:"Input Operations",id:"input-operations",depth:3},{text:"addInputBefore",id:"addinputbefore",depth:4},{text:"addInputAfter",id:"addinputafter",depth:4},{text:"setInput",id:"setinput",depth:4},{text:"setInputValue",id:"setinputvalue",depth:4},{text:"setDefaultConfig",id:"setdefaultconfig",depth:4},{text:"setGitMessage",id:"setgitmessage",depth:4},{text:"Lifecycle Functions",id:"lifecycle-functions",depth:3}],title:"context",frontmatter:{sidebar_position:1}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,r._(s._({},e),{children:(0,d.jsx)(c,s._({},e))})):c(e)}}}]);