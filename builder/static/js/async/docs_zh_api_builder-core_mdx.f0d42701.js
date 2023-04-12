(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_api_builder-core_mdx"],{3830:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return s},title:function(){return c},toc:function(){return l},default:function(){return o}});var d=n("12151"),i=n("23169"),s={extractApiHeaders:[2]},c="Builder Core",l=[{text:"createBuilder",depth:2,id:"createbuilder"},{text:"builderWebpackProvider",depth:3,id:"builderwebpackprovider"},{text:"builderRspackProvider",depth:3,id:"builderrspackprovider"},{text:"options",depth:3,id:"options"},{text:"mergeBuilderConfig",depth:2,id:"mergebuilderconfig"},{text:"webpack",depth:2,id:"webpack"},{text:"HtmlWebpackPlugin",depth:2,id:"htmlwebpackplugin"}];function a(e){var r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",h3:"h3",div:"div",button:"button",pre:"pre",ul:"ul",li:"li",strong:"strong",blockquote:"blockquote"},(0,i.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h1,{id:"builder-core",children:["Builder Core",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-core",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"本章节描述了 Builder 提供的一些核心方法。"}),"\n",(0,d.jsxs)(r.h2,{id:"createbuilder",children:["createBuilder",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#createbuilder",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"创建一个 Builder 实例对象。"}),"\n",(0,d.jsxs)(r.p,{children:["使用该方法时，需要搭配 ",(0,d.jsx)(r.code,{children:"@modern-js/builder-webpack-provider"})," 或 ",(0,d.jsx)(r.code,{children:"@modern-js/builder-rspack-provider"})," 使用，Provider 基于特定 bundler 实现了对应的构建能力。"]}),"\n",(0,d.jsxs)(r.h3,{id:"builderwebpackprovider",children:["builderWebpackProvider",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builderwebpackprovider",children:"#"})]}),"\n",(0,d.jsxs)(r.p,{children:["当传入 ",(0,d.jsx)(r.code,{children:"builderWebpackProvider"})," 时，Builder 会使用 webpack 作为 bundler 进行构建。"]}),"\n",(0,d.jsx)(r.div,{className:"language-",children:(0,d.jsxs)(r.div,{className:"modern-code-content",children:[(0,d.jsx)(r.button,{className:"copy"}),(0,d.jsx)(r.pre,{className:"code",children:(0,d.jsx)(r.code,{className:"language-ts",children:"import { createBuilder } from '@modern-js/builder';\nimport { builderWebpackProvider } from '@modern-js/builder-webpack-provider';\n\nconst provider = builderWebpackProvider({\n  builderConfig: {\n    // some configs\n  },\n});\n\nconst builder = await createBuilder(provider, {\n  // some options\n});\n"})})]})}),"\n",(0,d.jsxs)(r.h3,{id:"builderrspackprovider",children:["builderRspackProvider",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builderrspackprovider",children:"#"})]}),"\n",(0,d.jsxs)(r.p,{children:["当传入 ",(0,d.jsx)(r.code,{children:"builderRspackProvider"})," 时，Builder 会使用 Rspack 作为 bundler 进行构建。"]}),"\n",(0,d.jsx)(r.div,{className:"language-",children:(0,d.jsxs)(r.div,{className:"modern-code-content",children:[(0,d.jsx)(r.button,{className:"copy"}),(0,d.jsx)(r.pre,{className:"code",children:(0,d.jsx)(r.code,{className:"language-ts",children:"import { createBuilder } from '@modern-js/builder';\nimport { builderRspackProvider } from '@modern-js/builder-rspack-provider';\n\nconst provider = builderRspackProvider({\n  builderConfig: {\n    // some configs\n  },\n});\n\nconst builder = await createBuilder(provider, {\n  // some options\n});\n"})})]})}),"\n",(0,d.jsxs)(r.h3,{id:"options",children:["options",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#options",children:"#"})]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"createBuilder"})," 的第二个参数是一个配置对象，你可以传入以下选项："]}),"\n",(0,d.jsx)(r.div,{className:"language-",children:(0,d.jsxs)(r.div,{className:"modern-code-content",children:[(0,d.jsx)(r.button,{className:"copy"}),(0,d.jsx)(r.pre,{className:"code",children:(0,d.jsx)(r.code,{className:"language-ts",children:"type BuilderEntry = Record<string, string | string[]>;\n\ntype BuilderTarget = 'web' | 'node' | 'modern-web' | 'web-worker';\n\ntype CreateBuilderOptions = {\n  cwd?: string;\n  entry?: BuilderEntry;\n  target?: BuilderTarget | BuilderTarget[];\n  framework?: string;\n  configPath?: string | null;\n};\n"})})]})}),"\n",(0,d.jsx)(r.p,{children:"各个选项的作用："}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"cwd"}),": 当前执行构建的根路径，默认值为 ",(0,d.jsx)(r.code,{children:"process.cwd()"})]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"entry"}),": 构建入口对象"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"target"}),": 构建产物类型，默认值为 ",(0,d.jsx)(r.code,{children:"['web']"}),"，详见 ",(0,d.jsx)(r.a,{href:"/guide/basic/build-target",children:"构建产物类型"})," 章节。"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"framework"}),": 框架的英文名称，唯一标识符，默认值为 ",(0,d.jsx)(r.code,{children:"'modern.js'"})]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"configPath"}),": 框架配置文件的路径（绝对路径），该参数影响构建缓存更新"]}),"\n"]}),"\n",(0,d.jsxs)(r.h2,{id:"mergebuilderconfig",children:["mergeBuilderConfig",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#mergebuilderconfig",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"合并多份 Builder 配置对象，并返回一个合并后的新对象。"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.strong,{children:"类型"})}),"\n"]}),"\n",(0,d.jsx)(r.div,{className:"language-",children:(0,d.jsxs)(r.div,{className:"modern-code-content",children:[(0,d.jsx)(r.button,{className:"copy"}),(0,d.jsx)(r.pre,{className:"code",children:(0,d.jsx)(r.code,{className:"language-ts",children:"function mergeBuilderConfig(...configs: BuilderConfig[]): BuilderConfig;\n"})})]})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(r.div,{className:"language-",children:(0,d.jsxs)(r.div,{className:"modern-code-content",children:[(0,d.jsx)(r.button,{className:"copy"}),(0,d.jsx)(r.pre,{className:"code",children:(0,d.jsx)(r.code,{className:"language-ts",children:"import { mergeBuilderConfig } from '@modern-js/builder';\n\nconst config1 = {\n  dev: {\n    https: false,\n  },\n};\nconst config2 = {\n  dev: {\n    https: true,\n  },\n};\n\nconst mergedConfig = mergeBuilderConfig(config1, config2);\n\nconsole.log(mergedConfig); // { dev: { https: true } }\n"})})]})}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsx)(r.p,{children:"该方法不会修改传入的 config 对象。"}),"\n"]}),"\n",(0,d.jsxs)(r.h2,{id:"webpack",children:["webpack",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"webpack 对象，用于消费 webpack 内置插件或类型定义。"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(r.div,{className:"language-",children:(0,d.jsxs)(r.div,{className:"modern-code-content",children:[(0,d.jsx)(r.button,{className:"copy"}),(0,d.jsx)(r.pre,{className:"code",children:(0,d.jsx)(r.code,{className:"language-ts",children:"import webpack from '@modern-js/builder-webpack-provider/webpack';\n\nnew webpack.DefinePlugin();\n"})})]})}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsx)(r.p,{children:'大部分场景下，推荐从 Builder 中引用 webpack 对象，而不是手动安装一份 "webpack" 依赖，这样可以避免出现多实例问题。'}),"\n"]}),"\n",(0,d.jsxs)(r.h2,{id:"htmlwebpackplugin",children:["HtmlWebpackPlugin",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlwebpackplugin",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"HtmlWebpackPlugin 对象，通常用于实现 HtmlWebpackPlugin 的自定义插件。"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(r.div,{className:"language-",children:(0,d.jsxs)(r.div,{className:"modern-code-content",children:[(0,d.jsx)(r.button,{className:"copy"}),(0,d.jsx)(r.pre,{className:"code",children:(0,d.jsx)(r.code,{className:"language-ts",children:"import HtmlWebpackPlugin from '@modern-js/builder-webpack-provider/html-webpack-plugin';\n"})})]})}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsx)(r.p,{children:'大部分场景下，推荐从 Builder 中引用 HtmlWebpackPlugin 对象，而不是手动安装一份 "html-webpack-plugin" 依赖，这样可以避免出现多实例问题。'}),"\n"]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,d.jsx)(r,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}}}]);