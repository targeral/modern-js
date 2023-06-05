(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["default~docs_en_api_builder-instance_mdx~docs_en_api_plugin-core_mdx~docs_en_api_plugin-hooks~631e86"],{98952:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Get the Builder config, this method must be called after the ",(0,t.jsx)(n.code,{children:"modifyBuilderConfig"})," hook is executed."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function GetBuilderConfig(): Readonly<BuilderConfig>;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},11893:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Get path information for all HTML assets."}),"\n",(0,t.jsx)(n.p,{children:"This method will return an object, the key is the entry name and the value is the relative path of the HTML file in the dist directory."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function GetHTMLPaths(): Record<string, string>;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},21606:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Get the normalized Builder config, this method must be called after the ",(0,t.jsx)(n.code,{children:"modifyBuilderConfig"})," hook is executed."]}),"\n",(0,t.jsxs)(n.p,{children:["Compared with the ",(0,t.jsx)(n.code,{children:"api.getBuilderConfig"})," method, the config returned by this method has been normalized, and the type definition of the config will be narrowed. For example, the ",(0,t.jsx)(n.code,{children:"undefined"})," type of ",(0,t.jsx)(n.code,{children:"config.html"})," will be removed."]}),"\n",(0,t.jsx)(n.p,{children:"It is recommended to use this method to get the Builder config."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function GetNormalizedConfig(): Readonly<NormalizedConfig>;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},62942:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Determines whether a plugin has been registered."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function IsPluginExists(pluginName: string): boolean;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},79621:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Called after executing the production build, you can get the build result information through the ",(0,t.jsx)(n.code,{children:"stats"})," parameter."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnAfterBuild(\n  callback: (params: { stats?: Stats | MultiStats }) => Promise<void> | void,\n): void;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},66924:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Called after creating a compiler instance, before executing a build, when you execute ",(0,t.jsx)(n.code,{children:"builder.startDevServer"}),", ",(0,t.jsx)(n.code,{children:"builder.build"})," or ",(0,t.jsx)(n.code,{children:"builder.createCompiler"}),", this hook will be called. You can get the compiler instance through the ",(0,t.jsx)(n.code,{children:"compiler"})," parameter."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnAfterCreateCompiler(callback: (params: {\n  compiler: Compiler | MultiCompiler;\n}) => Promise<void> | void;): void;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},65936:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Called after starting the development server, you can get the port number through the ",(0,t.jsx)(n.code,{children:"port"})," parameter."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnAfterStartDevServer(\n  callback: (params: { port: number }) => Promise<void> | void,\n): void;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},52650:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Called before executing the production environment build, you can get the final config object of the bundler through the ",(0,t.jsx)(n.code,{children:"bundlerConfigs"})," parameter."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnBeforeBuild(\n  callback: (params: {\n    bundlerConfigs?: WebpackConfig[] | RspackConfig[];\n  }) => Promise<void> | void,\n): void;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},84948:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Called before creating the compiler instance, when you execute ",(0,t.jsx)(n.code,{children:"builder.startDevServer"}),", ",(0,t.jsx)(n.code,{children:"builder.build"})," or ",(0,t.jsx)(n.code,{children:"builder.createCompiler"}),", this hook will be called. You can get the final config object of the bundler through the ",(0,t.jsx)(n.code,{children:"bundlerConfigs"})," parameter."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnBeforeCreateCompiler(\n  callback: (params: {\n    bundlerConfigs: WebpackConfig[] | RspackConfig[];\n  }) => Promise<void> | void,\n): void;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},28896:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Called before starting the development server."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnBeforeStartDevServer(callback: () => Promise<void> | void): void;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},62064:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Called after each development environment build, you can use ",(0,t.jsx)(n.code,{children:"isFirstCompile"})," to determine whether it is the first build."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnDevCompileDone(\n  callback: (params: { isFirstCompile: boolean }) => Promise<void> | void,\n): void;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},88879:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Called when the process is going to exit, this hook can only execute synchronous code."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnExit(callback: () => void): void;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},65574:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var t=r("9880"),s=r("23169"),i=r.ir(r("73181"));function o(e){var n=Object.assign({div:"div"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"What is Rspack"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["\n","\n",(0,t.jsx)(i.default,{}),"\n"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},73181:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",a:"a"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," is a high performance Rust-based JavaScript bundler that offers strong interoperability with the webpack ecosystem, enabling faster development cycles and efficient collaboration between the two tools."]}),"\n",(0,t.jsx)(n.p,{children:"Rspack's build performance is significantly better than Webpack, not only due to the language benefits of Rust, but also due to its parallel architecture and incremental compilation features. Benchmarking has shown that Rspack can deliver a 5-10x improvement in compilation performance."})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},7860:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["获取 Builder 配置，该方法必须在 ",(0,t.jsx)(n.code,{children:"modifyBuilderConfig"})," 钩子执行完成后才能被调用。"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function GetBuilderConfig(): Readonly<BuilderConfig>;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},15868:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"获取所有 HTML 产物的路径信息。"}),"\n",(0,t.jsx)(n.p,{children:"该方法会返回一个对象，对象的 key 为 entry 名称，value 为 HTML 文件在产物目录下的相对路径。"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function GetHTMLPaths(): Record<string, string>;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},45735:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["获取归一化后的 Builder 配置，该方法必须在 ",(0,t.jsx)(n.code,{children:"modifyBuilderConfig"})," 钩子执行完成后才能被调用。"]}),"\n",(0,t.jsxs)(n.p,{children:["相较于 ",(0,t.jsx)(n.code,{children:"getBuilderConfig"})," 方法，该方法返回的配置经过了归一化处理，配置的类型定义会得到收敛，比如 ",(0,t.jsx)(n.code,{children:"config.html"})," 的 ",(0,t.jsx)(n.code,{children:"undefined"})," 类型将被移除。"]}),"\n",(0,t.jsx)(n.p,{children:"推荐优先使用该方法获取配置。"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function GetNormalizedConfig(): Readonly<NormalizedConfig>;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},94567:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"判断某个插件是否已经被注册。"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function IsPluginExists(pluginName: string): boolean;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},15324:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["在执行生产环境构建后调用，你可以通过 ",(0,t.jsx)(n.code,{children:"stats"})," 参数获取到构建结果信息。"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnAfterBuild(\n  callback: (params: { stats?: Stats | MultiStats }) => Promise<void> | void,\n): void;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},83952:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["在创建 compiler 实例后、执行构建前调用，当你执行 ",(0,t.jsx)(n.code,{children:"builder.startDevServer"}),"、",(0,t.jsx)(n.code,{children:"builder.build"})," 或 ",(0,t.jsx)(n.code,{children:"builder.createCompiler"})," 时，都会调用此钩子。你可以通过 ",(0,t.jsx)(n.code,{children:"compiler"})," 参数获取到 compiler 实例对象。"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnAfterCreateCompiler(callback: (params: {\n  compiler: Compiler | MultiCompiler;\n}) => Promise<void> | void;): void;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},60991:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["在启动开发服务器后调用，你可以通过 ",(0,t.jsx)(n.code,{children:"port"})," 参数获得开发服务器监听的端口号。"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnAfterStartDevServer(\n  callback: (params: { port: number }) => Promise<void> | void,\n): void;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},26947:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["在执行生产环境构建前调用，你可以通过 ",(0,t.jsx)(n.code,{children:"bundlerConfigs"})," 参数获取到底层打包工具的最终配置对象。"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnBeforeBuild(\n  callback: (params: {\n    bundlerConfigs?: WebpackConfig[] | RspackConfig[];\n  }) => Promise<void> | void,\n): void;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},38682:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["在创建 compiler 实例前调用，当你执行 ",(0,t.jsx)(n.code,{children:"builder.startDevServer"}),"、",(0,t.jsx)(n.code,{children:"builder.build"})," 或 ",(0,t.jsx)(n.code,{children:"builder.createCompiler"})," 时，都会调用此钩子。你可以通过 ",(0,t.jsx)(n.code,{children:"bundlerConfigs"})," 参数获取到底层打包工具的最终配置对象。"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnBeforeCreateCompiler(\n  callback: (params: {\n    bundlerConfigs: WebpackConfig[] | RspackConfig[];\n  }) => Promise<void> | void,\n): void;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},46757:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"在启动开发服务器前调用。"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnBeforeStartDevServer(callback: () => Promise<void> | void): void;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},29213:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["在每次开发环境构建结束后调用，你可以通过 ",(0,t.jsx)(n.code,{children:"isFirstCompile"})," 来判断是否为首次构建。"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnDevCompileDone(\n  callback: (params: { isFirstCompile: boolean }) => Promise<void> | void,\n): void;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},98925:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"在进程即将退出时调用，这个钩子只能执行同步代码。"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnExit(callback: () => void): void;\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},30288:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var t=r("9880"),s=r("23169"),i=r.ir(r("72997"));function o(e){var n=Object.assign({div:"div"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"什么是 Rspack"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["\n","\n",(0,t.jsx)(i.default,{}),"\n"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},72997:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("23169");function i(e){var n=Object.assign({p:"p",a:"a"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," 是一个基于 Rust 的高性能 Web 构建工具，具备与 Webpack 生态系统的互操作性，可以被 Webpack 项目低成本集成，并提供更好的构建性能。"]}),"\n",(0,t.jsx)(n.p,{children:"相较于 Webpack，Rspack 的构建性能有明显提升，除了 Rust 带来的语言优势，这也来自于它的并行架构和增量编译等特性。经过 benchmark 验证，Rspack 可以带来 5 ～ 10 倍编译性能的提升。"})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},57883:function(e,n,r){e.exports={"next-steps":"d701a",nextSteps:"d701a"}},93310:function(e,n,r){e.exports={description:"_90dd",description:"_90dd",step:"_975a",step:"_975a",title:"_7a2c",title:"_7a2c"}},70792:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var t=r("9880"),s=r.ir(r("57883")),i=function(e){return(0,t.jsx)("div",{className:s.default.nextSteps,children:e.children})}},69571:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("9880"),s=r("96924"),i=r.ir(r("93310")),o=function(e){return(0,t.jsxs)("a",{className:i.default.step,href:(0,s.useUrl)(e.href),children:[(0,t.jsx)("p",{className:i.default.title,children:e.title}),(0,t.jsx)("p",{className:i.default.description,children:e.description})]})}},96924:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useUrl",{enumerable:!0,get:function(){return s}});var t=r("12416");function s(e){var n=(0,t.useLang)();return(0,t.withBase)("zh"===n?e:"/en".concat(e))}},12416:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),r.es(r("44110"),n)}}]);