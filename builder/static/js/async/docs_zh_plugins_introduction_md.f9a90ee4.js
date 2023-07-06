(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_plugins_introduction_md"],{56706:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return a}});var r,s=i("15169"),d=i("43932"),l=i("9880"),c=i("23169");function o(n){var e=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",code:"code",pre:"pre",strong:"strong",h3:"h3"},(0,c.useMDXComponents)(),n.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"插件系统",children:["插件系统",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#插件系统",children:"#"})]}),"\n",(0,l.jsx)(e.p,{children:"Builder 提供了一套轻量强大的插件系统，用以实现自身的大多数功能，并允许用户进行扩展。\n开发者编写的插件能够修改 Builder 的默认行为并添加各类额外功能，包括但不限于："}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"修改 bundler 配置"}),"\n",(0,l.jsx)(e.li,{children:"处理新的文件类型"}),"\n",(0,l.jsx)(e.li,{children:"修改或编译文件"}),"\n",(0,l.jsx)(e.li,{children:"部署产物"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Builder 底层支持 webpack 和 Rspack 等 bundler，并提供统一的 Node.js API 来抹平插件开发的差异，进而接入不同的上层框架、降低用户对底层 bundler 切换的感知。"}),"\n",(0,l.jsxs)(e.h2,{id:"开发插件",children:["开发插件",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#开发插件",children:"#"})]}),"\n",(0,l.jsxs)(e.p,{children:["插件提供类似 ",(0,l.jsx)(e.code,{children:"(options?: PluginOptions) => BuilderPlugin"})," 的函数作为入口，建议将插件函数命名为 ",(0,l.jsx)(e.code,{children:"builderPluginXXX"}),"。"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder-webpack-provider';\n\nexport interface PluginFooOptions {\n  message?: string;\n}\n\nexport const builderPluginFoo = (\n  options?: PluginFooOptions,\n): BuilderPlugin => ({\n  name: 'plugin-foo',\n  setup(api) {\n    api.onExit(() => {\n      const msg = options.message || 'finish.';\n      console.log(msg);\n    });\n  },\n});\n\nbuilder.addPlugins([builderPluginFoo({ message: 'some other message.' })]);\n"})}),"\n",(0,l.jsxs)(e.p,{children:["函数形式的插件可以 ",(0,l.jsx)(e.strong,{children:"接受选项对象"})," 并 ",(0,l.jsx)(e.strong,{children:"返回插件实例"}),"，并通过闭包机制管理内部状态。"]}),"\n",(0,l.jsx)(e.p,{children:"其中各部分的作用分别为："}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"name"})," 属性用于标注插件名称"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"setup"})," 作为插件逻辑的主入口"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"api"})," 对象包含了各类钩子和工具函数"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["为了便于识别，插件名称需要包含约定的 ",(0,l.jsx)(e.code,{children:"builder-plugin"})," 前缀，例如 ",(0,l.jsx)(e.code,{children:"builder-plugin-foo"})," ",(0,l.jsx)(e.code,{children:"@scope/builder-plugin-bar"})," 等。"]}),"\n",(0,l.jsxs)(e.h2,{id:"生命周期钩子",children:["生命周期钩子",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#生命周期钩子",children:"#"})]}),"\n",(0,l.jsx)(e.p,{children:"Builder 在内部按照约定的生命周期进行任务调度，插件可以通过注册钩子来介入工作流程的任意阶段，并实现自己的功能。"}),"\n",(0,l.jsxs)(e.p,{children:["Builder 生命周期钩子的完整列表参考 ",(0,l.jsx)(e.a,{href:"/api/plugin-hooks",children:"API 文档"}),"。"]}),"\n",(0,l.jsxs)(e.p,{children:["Builder 不会接管底层 Bundler 的生命周期，相关生命周期钩子的使用方式见对应文档：",(0,l.jsx)(e.a,{href:"https://webpack.js.org/api/compiler-hooks/",target:"_blank",rel:"noopener noreferrer",children:"webpack hooks"})]}),"\n",(0,l.jsxs)(e.h2,{id:"使用配置项",children:["使用配置项",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用配置项",children:"#"})]}),"\n",(0,l.jsx)(e.p,{children:"自行编写的插件通常使用初始化时传入函数的参数作为配置项即可，开发者可以随意定义和使用函数的入参。"}),"\n",(0,l.jsx)(e.p,{children:"但某些情况下插件可能需要读取 / 修改 Builder 公用的配置项，这时就需要了解 Builder 内部对配置项的生产和消费流程："}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"读取、解析配置并合并默认值"}),"\n",(0,l.jsxs)(e.li,{children:["插件通过 ",(0,l.jsx)(e.code,{children:"api.modifyBuilderConfig(...)"})," 回调修改配置项"]}),"\n",(0,l.jsx)(e.li,{children:"归一化配置项并提供给插件后续消费，此后无法再修改配置项"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"整套流程可以通过这个简单的插件体现："}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"export const builderPluginUploadDist = (): BuilderPlugin => ({\n  name: 'plugin-upload-dist',\n  setup(api) {\n    api.modifyBuilderConfig(config => {\n      // 尝试关闭代码压缩，需要自己填充默认值\n      config.output ||= {};\n      config.output.disableMinimize = true;\n      // 轮到其它插件修改配置...\n    });\n    api.onBeforeBuild(() => {\n      // 读取最终的配置\n      const config = api.getNormalizedConfig();\n      if (!config.output.disableMinimize) {\n        // 其它插件又启用了压缩则报错\n        throw new Error(\n          'You must disable minimize to upload readable dist files.',\n        );\n      }\n    });\n    api.onAfterBuild(() => {\n      const config = api.getNormalizedConfig();\n      const distRoot = config.output.distPath.root;\n      // TODO: 上传 `distRoot` 目录下所有产物文件\n    });\n  },\n});\n"})}),"\n",(0,l.jsx)(e.p,{children:"插件中有三种方式使用配置项对象："}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"api.modifyBuilderConfig(config => {})"})," 在回调中修改配置"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"api.getBuilderConfig()"})," 获取配置项"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"api.getNormalizedConfig()"})," 获取归一化后的配置项"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["归一化的配置项会再次合并默认值并移除大部分可选类型，对于 ",(0,l.jsx)(e.code,{children:"PluginUploadDist"})," 的例子其部分类型定义为："]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"api.modifyBuilderConfig((config: BuilderConfig) => {});\napi.getBuilderConfig() as BuilderConfig;\ntype BuilderConfig = {\n  output?: {\n    disableMinimize?: boolean;\n    distPath?: { root?: string };\n  };\n};\n\napi.getNormalizedConfig() as NormalizedConfig;\ntype NormalizedConfig = {\n  output: {\n    disableMinimize: boolean;\n    distPath: { root: string };\n  };\n};\n"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"getNormalizedConfig()"})," 的返回值类型与 ",(0,l.jsx)(e.code,{children:"BuilderConfig"})," 的略有不同、相比文档其它地方描述的类型进行了收窄，\n在使用时无需自行判空、填充默认值。"]}),"\n",(0,l.jsx)(e.p,{children:"因此使用配置项的最佳方式应该是："}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["通过 ",(0,l.jsx)(e.code,{children:"api.modifyBuilderConfig(config => {})"})," 来",(0,l.jsx)(e.strong,{children:"修改配置"})]}),"\n",(0,l.jsxs)(e.li,{children:["在其后的生命周期中读取 ",(0,l.jsx)(e.code,{children:"api.getNormalizedConfig()"})," 作为插件",(0,l.jsx)(e.strong,{children:"实际使用的配置"})]}),"\n"]}),"\n",(0,l.jsxs)(e.h2,{id:"修改-webpack-配置",children:["修改 webpack 配置",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#修改-webpack-配置",children:"#"})]}),"\n",(0,l.jsx)(e.p,{children:"插件可以通过多种方式修改 webpack 的配置项。"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"api.modifyWebpackChain(chain => {})"})," 修改 webpack-chain"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"api.modifyWebpackConfig(config => {})"})," 修改最终的 webpack 配置"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"api.onAfterCreateCompiler(compiler => {})"})," 直接操作 webpack 实例"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["通常推荐使用 ",(0,l.jsx)(e.a,{href:"https://github.com/neutrinojs/webpack-chain",target:"_blank",rel:"noopener noreferrer",children:"neutrinojs/webpack-chain"})," 提供的链式 API 来修改 webpack 配置的工作。"]}),"\n",(0,l.jsxs)(e.p,{children:["Builder 使用的是兼容 webpack5 的修改版本：",(0,l.jsx)(e.a,{href:"https://github.com/sorrycc/webpack-chain",target:"_blank",rel:"noopener noreferrer",children:"sorrycc/webpack-chain"}),"。"]}),"\n",(0,l.jsxs)(e.h2,{id:"参考范例",children:["参考范例",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#参考范例",children:"#"})]}),"\n",(0,l.jsxs)(e.h3,{id:"修改-loader",children:["修改 Loader",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#修改-loader",children:"#"})]}),"\n",(0,l.jsxs)(e.p,{children:["Loader 可以读取和处理不同类型的文件模块，具体参考 ",(0,l.jsx)(e.a,{href:"https://webpack.js.org/concepts/loaders",target:"_blank",rel:"noopener noreferrer",children:"concepts"})," 和 ",(0,l.jsx)(e.a,{href:"https://webpack.js.org/loaders/",target:"_blank",rel:"noopener noreferrer",children:"loaders"}),"。"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder-webpack-provider';\n\nexport const builderPluginTypeScriptExt = (): BuilderPlugin => ({\n  name: 'builder-typescript-ext',\n  setup(api) {\n    api.modifyWebpackChain(async chain => {\n      // 设置 ts-loader 将更多的文件识别为 typescript 模块\n      chain.module.rule(CHAIN_ID.RULE.TS).test(/\\.(ts|mts|cts|tsx|tss|tsm)$/);\n    });\n  },\n});\n"})}),"\n",(0,l.jsxs)(e.h3,{id:"添加模块入口",children:["添加模块入口",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#添加模块入口",children:"#"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder-webpack-provider';\n\nexport const builderPluginAdminPanel = (): BuilderPlugin => ({\n  name: 'builder-admin-panel',\n  setup(api) {\n    api.modifyWebpackChain(async chain => {\n      config.entry('admin-panel').add('src/admin/panel.js');\n    });\n  },\n});\n"})}),"\n",(0,l.jsxs)(e.h3,{id:"接入-webpack-插件",children:["接入 webpack 插件",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#接入-webpack-插件",children:"#"})]}),"\n",(0,l.jsx)(e.p,{children:"开发者可以在 Builder 插件中接入已有的 webpack 插件来平缓迁移项目："}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder-webpack-provider';\nimport type { Options } from '@modern-js/inspector-webpack-plugin';\n\nexport const builderPluginInspector = (options?: Options): BuilderPlugin => ({\n  name: 'builder-plugin-inspector',\n  setup(api) {\n    api.modifyWebpackChain(async chain => {\n      // 仅在需要的时候动态加载模块，避免不必要的性能消耗\n      const { InspectorWebpackPlugin } = await import(\n        '@modern-js/inspector-webpack-plugin'\n      );\n      // 修改 webpack chain 接入插件\n      chain\n        .plugin('inspector-webpack-plugin')\n        .use(InspectorWebpackPlugin, [inspectorOptions]);\n    });\n  },\n});\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fplugins%2Fintroduction.md"]={toc:[{text:"开发插件",id:"开发插件",depth:2},{text:"生命周期钩子",id:"生命周期钩子",depth:2},{text:"使用配置项",id:"使用配置项",depth:2},{text:"修改 webpack 配置",id:"修改-webpack-配置",depth:2},{text:"参考范例",id:"参考范例",depth:2},{text:"修改 Loader",id:"修改-loader",depth:3},{text:"添加模块入口",id:"添加模块入口",depth:3},{text:"接入 webpack 插件",id:"接入-webpack-插件",depth:3}],title:"插件系统",frontmatter:{}};var a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,c.useMDXComponents)(),n.components).wrapper;return e?(0,l.jsx)(e,(0,d._)((0,s._)({},n),{children:(0,l.jsx)(o,(0,s._)({},n))})):o(n)}}}]);