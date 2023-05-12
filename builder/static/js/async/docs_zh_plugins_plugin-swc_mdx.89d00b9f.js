(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_plugins_plugin-swc_mdx"],{32348:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},title:function(){return l},toc:function(){return a},default:function(){return t}});var r=s("9880"),i=s("23169"),c=s.ir(s("58953")),d={},l="SWC 插件",a=[{text:"快速开始",depth:2,id:"快速开始"},{text:"安装",depth:3,id:"安装"},{text:"注册插件",depth:3,id:"注册插件"},{text:"配置",depth:2,id:"配置"},{text:"presetReact",depth:3,id:"presetreact"},{text:"presetEnv",depth:3,id:"presetenv"},{text:"jsMinify",depth:3,id:"jsminify"},{text:"cssMinify",depth:3,id:"cssminify"},{text:"extensions",depth:3,id:"extensions"},{text:"extensions.reactUtils",depth:4,id:"extensionsreactutils"},{text:"extensions.lodash",depth:4,id:"extensionslodash"},{text:"extensions.styledComponent",depth:4,id:"extensionsstyledcomponent"},{text:"extensions.emotion",depth:4,id:"extensionsemotion"},{text:"extensions.pluginImport",depth:4,id:"extensionspluginimport"},{text:"限制",depth:2,id:"限制"}];function o(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",div:"div",p:"p",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",h4:"h4"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"swc-插件",children:["SWC 插件",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#swc-插件",children:"#"})]}),"\n","\n",(0,r.jsx)(c.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"快速开始",children:["快速开始",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsx)(n.p,{children:"在使用 Rspack 作为打包工具时，默认会使用 SWC 进行转译和压缩，因此你不需要再安装和配置 SWC 插件。"})})]}),"\n",(0,r.jsxs)(n.h3,{id:"安装",children:["安装",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"你可以通过如下的命令安装插件:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/builder-plugin-swc -D\n\n# yarn\nyarn add @modern-js/builder-plugin-swc -D\n\n# pnpm\npnpm add @modern-js/builder-plugin-swc -D\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"注册插件",children:["注册插件",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注册插件",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在 Modern.js 等上层框架中，你可以通过 ",(0,r.jsx)(n.code,{children:"builderPlugins"})," 配置项来注册 SWC 插件："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { builderPluginSwc } from '@modern-js/builder-plugin-swc';\n\nexport default {\n  builderPlugins: [builderPluginSwc()],\n};\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["当你直接调用 Builder 的 Node API 时，可以通过 ",(0,r.jsx)(n.code,{children:"addPlugins"})," 方法来注册 SWC 插件："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"import { builderPluginSwc } from '@modern-js/builder-plugin-swc';\n\n// 往 builder 实例上添加插件\nbuilder.addPlugins([builderPluginSwc()]);\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"That's it !"}),"\n",(0,r.jsx)(n.p,{children:"现在你可以在项目中无缝使用 SWC 的转译和压缩能力了。"}),"\n",(0,r.jsxs)(n.h2,{id:"配置",children:["配置",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type PluginConfig = {\n  presetReact?: ReactConfig;\n  presetEnv?: EnvConfig;\n  jsMinify?: boolean | JsMinifyOptions;\n  cssMinify?: boolean | CssMinifyOptions;\n  extensions?: Extensions;\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"presetreact",children:["presetReact",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#presetreact",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," SWC 中的 ",(0,r.jsx)(n.a,{href:"https://swc.rs/docs/configuration/compilation#jsctransformreact",target:"_blank",rel:"noopener noreferrer",children:"presetReact"}),"。"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["对标 ",(0,r.jsx)(n.code,{children:"@babel/preset-react"}),"。传入的值会与默认配置进行合并。"]}),"\n",(0,r.jsxs)(n.p,{children:["插件默认会自动根据你的 ",(0,r.jsx)(n.code,{children:"react"})," 版本确定 ",(0,r.jsx)(n.code,{children:"runtime"})," 字段，如果 ",(0,r.jsx)(n.code,{children:"react"})," 版本大于 17.0.0，会设置成 ",(0,r.jsx)(n.code,{children:"automatic"}),"，否则设置成 ",(0,r.jsx)(n.code,{children:"classic"}),"。"]}),"\n",(0,r.jsxs)(n.h3,{id:"presetenv",children:["presetEnv",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#presetenv",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," SWC 中的 ",(0,r.jsx)(n.a,{href:"https://swc.rs/docs/configuration/supported-browsers#options",target:"_blank",rel:"noopener noreferrer",children:"presetEnv"}),"。"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["对标 ",(0,r.jsx)(n.code,{children:"@babel/preset-env"}),"。传入的值会与默认配置进行合并。\n默认配置为:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"{\n  targets: '', // 自动从项目中获取 browserslist\n  mode: 'usage',\n}\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"jsminify",children:["jsMinify",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#jsminify",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"boolean"})," 或者 ",(0,r.jsx)(n.a,{href:"https://terser.org/docs/api-reference.html#compress-options",target:"_blank",rel:"noopener noreferrer",children:"terser 中的 compress 配置"}),"。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"{ compress: {}, mangle: true }"}),"。"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["如果配置 ",(0,r.jsx)(n.code,{children:"false"})," 将不会使用 SWC 的压缩能力，配置 ",(0,r.jsx)(n.code,{children:"true"})," 会启用默认压缩配置，如果配置是对象，则会与默认配置进行合并。"]}),"\n",(0,r.jsxs)(n.h3,{id:"cssminify",children:["cssMinify",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cssminify",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"是否启用 SWC 对 CSS 文件进行压缩，若启用会使得 CSS 压缩性能提高，但压缩率会略微降低。"}),"\n",(0,r.jsxs)(n.h3,{id:"extensions",children:["extensions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extensions",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"extensions"})," 包含了从 Babel 移植过来的一些插件能力。"]}),"\n",(0,r.jsxs)(n.h4,{id:"extensionsreactutils",children:["extensions.reactUtils",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extensionsreactutils",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ReactUtilsOptions = {\n  autoImportReact?: boolean;\n  removeEffect?: boolean;\n  removePropTypes?: {\n    mode?: 'remove' | 'unwrap' | 'unsafe-wrap';\n    removeImport?: boolean;\n    ignoreFilenames?: string[];\n    additionalLibraries?: string[];\n    classNameMatchers?: string[];\n  };\n};\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["一些用于 ",(0,r.jsx)(n.code,{children:"React"})," 的工具，包括以下配置项:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"reactUtils.autoImportReact"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["自动引入 ",(0,r.jsx)(n.code,{children:"React"}),", ",(0,r.jsx)(n.code,{children:"import React from 'react'"}),"，用于 ",(0,r.jsx)(n.code,{children:"jsx"})," 转换使用 ",(0,r.jsx)(n.code,{children:"React.createElement"}),"。"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"reactUtils.removeEffect"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["移除 ",(0,r.jsx)(n.code,{children:"useEffect"})," 调用。"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"reactUtils.removePropTypes"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type RemovePropTypesOptions = {\n  mode?: 'remove' | 'unwrap' | 'unsafe-wrap';\n  removeImport?: boolean;\n  ignoreFilenames?: string[];\n  additionalLibraries?: string[];\n  classNameMatchers?: string[];\n};\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["移除 ",(0,r.jsx)(n.code,{children:"React"})," 组件在运行时的类型判断。移植自 ",(0,r.jsx)(n.a,{href:"https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types",target:"_blank",rel:"noopener noreferrer",children:"@babel/plugin-react-transform-remove-prop-types"}),"。"]}),"\n",(0,r.jsxs)(n.p,{children:["相应配置和 ",(0,r.jsx)(n.code,{children:"@babel/plugin-react-transform-remove-prop-types"})," 插件保持一致。"]}),"\n",(0,r.jsxs)(n.h4,{id:"extensionslodash",children:["extensions.lodash",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extensionslodash",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"{ cwd?: string; ids?: string;}"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"{ cwd: process.cwd(), ids: [] }"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["移植自 ",(0,r.jsx)(n.a,{href:"https://github.com/lodash/babel-plugin-lodash",target:"_blank",rel:"noopener noreferrer",children:"@babel/plugin-lodash"}),"。"]}),"\n",(0,r.jsxs)(n.h4,{id:"extensionsstyledcomponent",children:["extensions.styledComponent",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extensionsstyledcomponent",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:'boolean | {\n  displayName?: boolean; // 默认开发模式开启, 生产模式关闭,\n  ssr?: boolean; // 默认开启\n  fileName?: boolean; // 默认开启\n  topLevelImportPaths?: string[]; // 默认空\n  meaninglessFileNames?: string[]; // 默认为 ["index"].\n  cssProp?: boolean; // 默认开启\n  namespace?: string; // 默认空\n};\n'})})})}),"\n",(0,r.jsxs)(n.p,{children:["由 Next.js 团队移植自 ",(0,r.jsx)(n.a,{href:"https://github.com/styled-components/babel-plugin-styled-components",target:"_blank",rel:"noopener noreferrer",children:"styled-component"}),"。"]}),"\n",(0,r.jsxs)(n.h4,{id:"extensionsemotion",children:["extensions.emotion",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extensionsemotion",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"boolean | {\n  sourceMap?: boolean, // 默认开启\n  autoLabel?: 'never' | 'dev-only' | 'always', // 默认 'dev-only'\n  // 默认 '[local]'.\n  // 允许的值为: `[local]` `[filename]` 以及 `[dirname]`\n  // 只有当 autoLabel 设置成 'dev-only' 或者 'always' 才会生效.\n  // 该配置允许你定义结果标签的格式，该格式的组成是字符串以及可以由方括号包裹字符串作为变量\n  // 例如对于 \"my-classname--[local]\"，其中的 [local] 会被替换成相应的变量\n  labelFormat?: string,\n  // 默认值 undefined.\n  // 该配置允许让编译器知道哪一个引入需要进行转换，所以如果你重导出了 emotion\n  // 的导出，你仍然可以使用该插件进行转换\n  importMap?: {\n    [packageName: string]: {\n      [exportName: string]: {\n        canonicalImport?: [string, string],\n        styledBaseImport?: [string, string],\n      }\n    }\n  },\n},\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["由 Next.js 团队移植自 ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@emotion/babel-plugin",target:"_blank",rel:"noopener noreferrer",children:"@emotion/babel-plugin"}),"。"]}),"\n",(0,r.jsxs)(n.h4,{id:"extensionspluginimport",children:["extensions.pluginImport",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extensionspluginimport",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["Builder 提供了 ",(0,r.jsx)(n.a,{href:"/api/config-source",children:"source.transformImport"})," 配置项，因此你不需要手动配置 ",(0,r.jsx)(n.code,{children:"extensions.pluginImport"}),"。\n"]})})]}),"\n",(0,r.jsxs)(n.p,{children:["移植自 ",(0,r.jsx)(n.a,{href:"https://github.com/umijs/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"}),"，配置选项保持一致。"]}),"\n",(0,r.jsxs)(n.p,{children:["一些配置可以传入函数，例如 ",(0,r.jsx)(n.code,{children:"customName"}),"，",(0,r.jsx)(n.code,{children:"customStyleName"})," 等，这些 JavaScript 函数会由 Rust 通过 Node-API 调用，这种调用会造成一些性能劣化。"]}),"\n",(0,r.jsxs)(n.p,{children:["简单的函数逻辑其实可以通过模版语言来代替，因此",(0,r.jsx)(n.code,{children:"customName"}),"，",(0,r.jsx)(n.code,{children:"customStyleName"})," 等这些配置除了可以传入函数，也可以传入字符串作为模版来代替函数，提高性能。"]}),"\n",(0,r.jsx)(n.p,{children:"我们以下面代码为例说明:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { MyButton as Btn } from 'foo';\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"添加以下配置："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"PluginSWC({\n  extensions: {\n    pluginImport: [\n      {\n        libraryName: 'foo',\n        customName: 'foo/es/{{ member }}',\n      },\n    ],\n  },\n});\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["其中的 ",(0,r.jsx)(n.code,{children:"{{ member }}"})," 会被替换为相应的引入成员，转换后:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import Btn from 'foo/es/MyButton';\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["可以看出配置 ",(0,r.jsx)(n.code,{children:'customName: "foo/es/{{ member }}"'})," 的效果等同于配置 ",(0,r.jsx)(n.code,{children:" customName: (member) => `foo/es/${member}`  "}),"，但是不会有 Node-API 的调用开销。"]}),"\n",(0,r.jsxs)(n.p,{children:["这里使用到的模版是 ",(0,r.jsx)(n.a,{href:"https://handlebarsjs.com",target:"_blank",rel:"noopener noreferrer",children:"handlebars"}),"，模版配置中还内置了一些有用的辅助工具，还是以上面的导入语句为例，配置成："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"PluginSWC({\n  extensions: {\n    pluginImport: [\n      {\n        libraryName: 'foo',\n        customName: 'foo/es/{{ kebabCase member }}',\n      },\n    ],\n  },\n});\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"会转换成下面的结果:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import Btn from 'foo/es/my-button';\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["除了 ",(0,r.jsx)(n.code,{children:"kebabCase"})," 以外还有 ",(0,r.jsx)(n.code,{children:"camelCase"}),"，",(0,r.jsx)(n.code,{children:"snakeCase"}),"，",(0,r.jsx)(n.code,{children:"upperCase"}),"，",(0,r.jsx)(n.code,{children:"lowerCase"})," 可以使用。"]}),"\n",(0,r.jsxs)(n.h2,{id:"限制",children:["限制",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#限制",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["不支持 ",(0,r.jsx)(n.code,{children:"@babel/plugin-transform-runtime"})," 以及其他自定义的 Babel 插件。"]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);