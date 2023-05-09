(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_rspack_mdx"],{35557:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var r=s("12151"),c=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",div:"div",button:"button",pre:"pre",h4:"h4"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"Object"})," | ",(0,r.jsx)(n.code,{children:"Function"})," | ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"打包工具："})," ",(0,r.jsx)(n.code,{children:"仅支持 Rspack"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"tools.rspack"})," 选项用于配置原生的 ",(0,r.jsx)(n.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"}),"。"]}),"\n",(0,r.jsxs)(n.h3,{id:"object-类型",children:["Object 类型",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["你可以配置为一个对象，这个对象将会和原始的 Rspack 配置通过 ",(0,r.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer",children:"webpack-merge"})," 进行合并。比如："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    rspack: {\n      resolve: {\n        alias: {\n          '@util': 'src/util',\n        },\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"function-类型",children:["Function 类型",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"你也可以配置为一个函数，这个函数接收一个参数，即原始的 Rspack 配置，你可以对这个配置进行修改，然后返回一个新的配置。比如："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    rspack: config => {\n      config.resolve.alias['@util'] = 'src/util';\n      return config;\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"这个函数的第二个参数是一个对象，包含了一些工具集合的信息。详情如下："}),"\n",(0,r.jsxs)(n.h3,{id:"工具集合",children:["工具集合",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#工具集合",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"env",children:["env",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#env",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"'development' | 'production' | 'test'"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"通过 env 参数可以判断当前环境为 development、production 还是 test。比如："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    rspack: (config, { env }) => {\n      if (env === 'development') {\n        config.devtool = 'cheap-module-eval-source-map';\n      }\n      return config;\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"isprod",children:["isProd",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isprod",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"通过 isProd 参数可以判断当前环境是否为 production。比如："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    rspack: (config, { isProd }) => {\n      if (isProd) {\n        config.devtool = 'source-map';\n      }\n      return config;\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"target",children:["target",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#target",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"'web' | 'node' | 'modern-web' | 'web-worker'"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"通过 target 参数可以判断当前构建的目标运行时环境。比如："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    rspack: (config, { target }) => {\n      if (target === 'node') {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"isserver",children:["isServer",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isserver",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["判断当前构建的目标运行时环境是否为 ",(0,r.jsx)(n.code,{children:"node"}),"，等价于 ",(0,r.jsx)(n.code,{children:"target === 'node'"}),"。"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    rspack: (config, { isServer }) => {\n      if (isServer) {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"iswebworker",children:["isWebWorker",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#iswebworker",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["判断当前构建的目标运行时环境是否为 ",(0,r.jsx)(n.code,{children:"web-worker"}),"，等价于 ",(0,r.jsx)(n.code,{children:"target === 'web-worker'"}),"。"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    rspack: (config, { isWebWorker }) => {\n      if (isWebWorker) {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"addrules",children:["addRules",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addrules",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"(rules: RuleSetRule | RuleSetRule[]) => void"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["添加额外的 ",(0,r.jsx)(n.a,{href:"https://www.rspack.dev/config/module.html#modulerules",target:"_blank",rel:"noopener noreferrer",children:"Rspack rules"}),"。"]}),"\n",(0,r.jsx)(n.p,{children:"示例："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    rspack: (config, { addRules }) => {\n      // 添加单条规则\n      addRules({\n        test: /\\.foo/,\n        loader: require.resolve('foo-loader'),\n      });\n\n      // 以数组形式添加多条规则\n      addRules([\n        {\n          test: /\\.foo/,\n          loader: require.resolve('foo-loader'),\n        },\n        {\n          test: /\\.bar/,\n          loader: require.resolve('bar-loader'),\n        },\n      ]);\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"prependplugins",children:["prependPlugins",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prependplugins",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"(plugins: RspackPluginInstance | RspackPluginInstance[]) => void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"在内部 Rspack 插件数组头部添加额外的插件，数组头部的插件会优先执行。"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    rspack: (config, { prependPlugins }) => {\n      // 添加单个插件\n      prependPlugins(new PluginA());\n\n      // 以数组形式添加多个插件\n      prependPlugins([new PluginA(), new PluginB()]);\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"appendplugins",children:["appendPlugins",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#appendplugins",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"(plugins: RspackPluginInstance | RspackPluginInstance[]) => void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"在内部 Rspack 插件数组尾部添加额外的插件，数组尾部的插件会在最后执行。"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    rspack: (config, { appendPlugins }) => {\n      // 添加单个插件\n      appendPlugins([new PluginA()]);\n\n      // 以数组形式添加多个插件\n      appendPlugins([new PluginA(), new PluginB()]);\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"removeplugin",children:["removePlugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#removeplugin",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"(name: string) => void"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["删除内部的 Rspack 插件，参数为该插件的 ",(0,r.jsx)(n.code,{children:"constructor.name"}),"。"]}),"\n",(0,r.jsxs)(n.p,{children:["例如，删除内部的 ",(0,r.jsx)(n.a,{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer",children:"webpack-bundle-analyzer"}),"："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    rspack: (config, { removePlugin }) => {\n      removePlugin('BundleAnalyzerPlugin');\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"mergeconfig",children:["mergeConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mergeconfig",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"(...configs: RspackConfig[]) => RspackConfig"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["用于合并多份 Rspack 配置，等价于 ",(0,r.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer",children:"webpack-merge"}),"。"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    rspack: (config, { mergeConfig }) => {\n      return mergeConfig(config, {\n        devtool: 'eval',\n      });\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"getcompiledpath",children:["getCompiledPath",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getcompiledpath",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"(name: string) => string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"获取 builder 内置依赖的所在路径，例如："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"sass"}),"\n",(0,r.jsx)(n.li,{children:"sass-loader"}),"\n",(0,r.jsx)(n.li,{children:"less"}),"\n",(0,r.jsx)(n.li,{children:"less-loader"}),"\n",(0,r.jsx)(n.li,{children:"babel-loader"}),"\n",(0,r.jsx)(n.li,{children:"url-loader"}),"\n",(0,r.jsx)(n.li,{children:"file-loader"}),"\n",(0,r.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"该方法通常在需要与 builder 复用同一份依赖时会被用到。"}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsx)(n.p,{children:"Builder 内部依赖会随着版本迭代而发生变化，例如产生大版本变更。在非必要的情况下，请避免使用此 API。"})})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    rspack: (config, { getCompiledPath }) => {\n      const loaderPath = getCompiledPath('less-loader');\n      // ...\n    },\n  },\n};\n"})})]})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},14169:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},title:function(){return a},toc:function(){return i},default:function(){return t}});var r=s("12151"),c=s("23169"),l=s.ir(s("35557")),d={sidebar_label:"rspack"},a="tools.rspack",i=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"tools-rspack",children:["tools.rspack",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tools-rspack",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolsrspack",target:"_blank",rel:"noopener noreferrer",children:"tools.rspack"}),"。\n"]})})]}),"\n","\n",(0,r.jsx)(l.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);