(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_entries_mdx"],{67146:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return i},toc:function(){return t},default:function(){return o}});var r=s("9880"),d=s("23169"),c={sidebar_label:"entries"},i="source.entries",t=[{text:"String 类型",depth:2,id:"string-类型"},{text:"Object 类型",depth:2,id:"object-类型"},{text:"禁用入口文件生成",depth:3,id:"禁用入口文件生成"},{text:"约定式路由",depth:3,id:"约定式路由"},{text:"入口合并规则",depth:2,id:"入口合并规则"}];function l(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",div:"div",pre:"pre",code:"code",p:"p",h2:"h2",h3:"h3"},(0,d.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"sourceentries",children:["source.entries",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceentries",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type Entries = Record<\n  string,\n  | string\n  | {\n      entry: string;\n      disableMount?: boolean;\n      customBootstrap?: string;\n    }\n>;\n"})})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," 根据当前项目的目录结构计算出的入口对象。"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"用于配置自定义的页面入口。"}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"何时使用"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["对于大部分场景，Modern.js 根据目录结构自动生成的入口已经可以满足需求，具体可参考",(0,r.jsx)(n.a,{href:"/guides/concept/entries",children:"入口"}),"。"]}),"\n",(0,r.jsx)(n.p,{children:"如果你需要自定义页面入口时，可以通过该选项进行设置。"}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"string-类型",children:["String 类型",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string-类型",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["当 ",(0,r.jsx)(n.code,{children:"entries"})," 对象的 value 为 ",(0,r.jsx)(n.code,{children:"string"})," 类型时，表示入口模块的文件路径:"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      // 指定一个名称为 entry_customize 的新入口\n      entry_customize: './src/home/test/index.ts',\n    },\n    // 禁用默认入口扫描\n    disableDefaultEntries: true,\n  },\n});\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["默认情况下，配置的入口等价于 ",(0,r.jsx)(n.code,{children:"App.[jt]sx"}),"，即指定的入口文件",(0,r.jsx)(n.strong,{children:"只需要导出应用的根组件"}),"。"]}),"\n",(0,r.jsx)(n.p,{children:"例如以下目录结构："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n├── src\n│   └── entry\n│       ├── chat.tsx\n│       └── home.tsx\n└── package.json\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"上述目录不符合 Modern.js 的目录结构约定，因此，Modern.js 在分析目录结构时，不会得到任何默认入口。"}),"\n",(0,r.jsxs)(n.p,{children:["在不想改变目录结构的情况下（如项目迁移），可以通过 ",(0,r.jsx)(n.code,{children:"source.entries"})," 自定义入口："]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    entries: {\n      home: './src/entry/home.tsx',\n      chat: './src/entry/chat.tsx',\n    },\n    // 禁用默认入口扫描\n    disableDefaultEntries: true,\n  },\n});\n"})})})]}),"\n",(0,r.jsxs)(n.h2,{id:"object-类型",children:["Object 类型",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["当值为 ",(0,r.jsx)(n.code,{children:"Object"})," 时，可配置如下属性："]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"entry"}),"：",(0,r.jsx)(n.code,{children:"string"}),"，入口文件路径。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"disableMount"}),"：",(0,r.jsx)(n.code,{children:"boolean = false"}),"，关闭 Modern.js 自动生成入口代码的行为。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"customBootstrap"}),"： ",(0,r.jsx)(n.code,{children:"string = ''"}),"，指定",(0,r.jsx)(n.a,{href:"/guides/concept/entries#%E8%87%AA%E5%AE%9A%E4%B9%89-bootstrap",children:"自定义 Bootstrap"})," 的文件路径。"]}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      entry_customize: {\n        // 入口文件路径\n        entry: './src/home/test/index.tsx',\n      },\n    },\n    // 禁用默认入口扫描\n    disableDefaultEntries: true,\n  },\n});\n"})})})]}),"\n",(0,r.jsxs)(n.h3,{id:"禁用入口文件生成",children:["禁用入口文件生成",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#禁用入口文件生成",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["默认情况下，配置的入口等价于 ",(0,r.jsx)(n.code,{children:"App.[jt]sx"}),"，Modern.js 会自动生成一个入口文件来引用你配置的入口。"]}),"\n",(0,r.jsxs)(n.p,{children:["如果你希望禁用 Modern.js 自动生成入口文件的逻辑，可以将 ",(0,r.jsx)(n.code,{children:"disableMount"})," 属性设置为 ",(0,r.jsx)(n.code,{children:"true"}),"。"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    entries: {\n      entry_customize: {\n        entry: './src/home/test/index.tsx',\n        disableMount: true,\n      },\n    },\n    // 禁用默认入口扫描\n    disableDefaultEntries: true,\n  },\n});\n"})})})]}),"\n",(0,r.jsxs)(n.h3,{id:"约定式路由",children:["约定式路由",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#约定式路由",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["如果你需要为某个自定义入口启用约定式路由，可以将 ",(0,r.jsx)(n.code,{children:"entry"})," 设置为目录路径："]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      // 启用约定式路由\n      entry_spa: {\n        // 约定式路由的入口路径必须设置为目录\n        entry: './src/about',\n      },\n    },\n    // 禁用默认入口扫描\n    disableDefaultEntries: true,\n  },\n});\n"})})})]}),"\n",(0,r.jsxs)(n.h2,{id:"入口合并规则",children:["入口合并规则",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#入口合并规则",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在设置 ",(0,r.jsx)(n.code,{children:"source.entries"})," 后，如果没有设置 ",(0,r.jsx)(n.code,{children:"disableDefaultEntries: true"}),"，Modern.js 会将自定义入口与分析目录结构得到的入口合并。"]}),"\n",(0,r.jsx)(n.p,{children:"合并规则为："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"比较自定义入口设置的入口路径和默认入口路径，当入口路径一致时，自定义入口会覆盖默认入口。"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"例如以下目录结构:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{children:".\n├── src\n│   ├── chat\n│   │   └── App.tsx\n│   └── home\n│       └── index.ts\n└── package.json\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js 会分析 ",(0,r.jsx)(n.code,{children:"src/"})," 目录，得到默认入口 ",(0,r.jsx)(n.code,{children:"chat"})," 和 ",(0,r.jsx)(n.code,{children:"home"}),"。当用户在 ",(0,r.jsx)(n.code,{children:"modern.config.ts"})," 文件中配置如下时："]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      index: './src/home/index.ts',\n    },\n  },\n};\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["可以看到自定义入口 ",(0,r.jsx)(n.code,{children:"index"})," 的路径和默认入口 ",(0,r.jsx)(n.code,{children:"home"})," 的路径一致，在合并的过程中，",(0,r.jsx)(n.code,{children:"index"})," 会覆盖掉 ",(0,r.jsx)(n.code,{children:"home"}),"，最终入口如下："]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"chat -> ./src/chat/App.tsx"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"index -> ./src/home/index.ts"})}),"\n"]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);