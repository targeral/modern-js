(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_ts-loader_mdx"],{28680:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s,r=d("15169"),o=d("43932"),l=d("9880"),c=d("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",h4:"h4"},(0,c.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"类型："})," ",(0,l.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"默认值："})," ",(0,l.jsx)(n.code,{children:"undefined"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"打包工具："})," ",(0,l.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["项目中默认不开启 ts-loader，当 ",(0,l.jsx)(n.code,{children:"tools.tsLoader"})," 不为 undefined 则表示开启 ts-loader，同时禁用 babel-loader 对 TypeScript 的编译。"]}),"\n",(0,l.jsxs)(n.h3,{id:"object-类型",children:["Object 类型",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"当此值为 Object 类型时，与默认配置通过 Object.assign 合并。"}),"\n",(0,l.jsx)(n.p,{children:"默认配置如下:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "target": "es5",\n    "module": "ESNext"\n  },\n  "transpileOnly": true,\n  "allowTsInNodeModules": true\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["你可以通过 ",(0,l.jsx)(n.code,{children:"tools.tsLoader"})," 配置项来覆盖默认配置:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: {\n      allowTsInNodeModules: false,\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"function-类型",children:["Function 类型",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["当此值为 Function 类型时，默认配置作为第一参数传入，可以直接修改配置对象，也可以返回一个对象作为最终配置；第二个参数为修改 ",(0,l.jsx)(n.code,{children:"ts-loader"})," 配置工具函数集合："]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: opts => {\n      opts.allowTsInNodeModules = false;\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"工具函数",children:["工具函数",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#工具函数",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"tools.tsLoader"})," 的值为 Function 类型时，第二个参数可用的工具函数如下："]}),"\n",(0,l.jsxs)(n.h4,{id:"addincludes",children:["addIncludes",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addincludes",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"类型："})," ",(0,l.jsx)(n.code,{children:"(includes: string | RegExp | Array<string | RegExp>) => void"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["默认情况下只会编译 src 目录下的业务代码，使用 addIncludes 可以指定 ts-loader 编译 ",(0,l.jsx)(n.code,{children:"node_modules"})," 下的一些文件。比如:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: (config, { addIncludes }) => {\n      addIncludes([/node_modules\\/react/]);\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h4,{id:"addexcludes",children:["addExcludes",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"类型："})," ",(0,l.jsx)(n.code,{children:"(excludes: string | RegExp | Array<string | RegExp>) => void"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["和 ",(0,l.jsx)(n.code,{children:"addIncludes"})," 相反，指定 ",(0,l.jsx)(n.code,{children:"ts-loader"})," 编译时排除某些文件。"]}),"\n",(0,l.jsx)(n.p,{children:"例如不编译 src/example 目录下的文件："}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: (config, { addExcludes }) => {\n      addExcludes([/src\\/example\\//]);\n    },\n  },\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/builder-doc/docs/zh/config/tools/tsLoader.md"]={toc:[{text:"Object 类型",id:"object-类型",depth:3},{text:"Function 类型",id:"function-类型",depth:3},{text:"工具函数",id:"工具函数",depth:3},{text:"addIncludes",id:"addincludes",depth:4},{text:"addExcludes",id:"addexcludes",depth:4}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,o._(r._({},e),{children:(0,l.jsx)(t,r._({},e))})):t(e)}},10053:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var s,r=d("15169"),o=d("43932"),l=d("9880"),c=d("23169"),t=d.ir(d("28680"));function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"toolstsloader",children:["tools.tsLoader",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolstsloader",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,l.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolstsloader",target:"_blank",rel:"noopener noreferrer",children:"tools.tsLoader"}),"。\n"]})})]}),"\n","\n",(0,l.jsx)(t.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/zh/configure/app/tools/ts-loader.mdx"]={toc:[],title:"tools.tsLoader",frontmatter:{sidebar_label:"tsLoader"}};var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,o._(r._({},e),{children:(0,l.jsx)(a,r._({},e))})):a(e)}}}]);