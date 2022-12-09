(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{318:function(e,r,a){"use strict";a.r(r);var t=a(4),s=Object(t.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"名词解释"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[e._v("#")]),e._v(" 名词解释")]),e._v(" "),r("h2",{attrs:{id:"bundler"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bundler"}},[e._v("#")]),e._v(" Bundler")]),e._v(" "),r("p",[e._v("指 "),r("code",[e._v("webpack")]),e._v(" 和 "),r("code",[e._v("rspack")]),e._v(" 等模块打包工具。")]),e._v(" "),r("p",[e._v("当 Bundler 处理 Web 应用时，它会构建一个依赖关系图，其中包含应用需要的各个模块，然后将所有模块打包成一个或多个 bundle。")]),e._v(" "),r("h2",{attrs:{id:"rspack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rspack"}},[e._v("#")]),e._v(" Rspack")]),e._v(" "),r("p",[e._v("字节跳动 Web Infra 团队自研的 Rust Bundler，核心架构对齐 webpack 实现，并对社区常用的构建能力做了开箱即用的支持。从长期来看，rspack 会对齐 webpack 的主要 API，兼容主流的 webpack loader 与 plugin 生态，以保证开发者可以平滑地从 webpack 迁移到 rspack。")]),e._v(" "),r("p",[e._v("Rspack 通过以下方式来提升编译性能：")]),e._v(" "),r("ul",[r("li",[e._v("高度 LTO 优化的 Native code。")]),e._v(" "),r("li",[e._v("充分利用多核优势，整个编译过程充分进行多线程优化。")]),e._v(" "),r("li",[e._v("基于请求的按需编译（Lazy Compilation），减小每次编译的模块数目，以提升冷启动的速度。")])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),r("p",[e._v("Rspack 目前仍在研发过程中，尚未开源。")])]),e._v(" "),r("h2",{attrs:{id:"builder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#builder"}},[e._v("#")]),e._v(" Builder")]),e._v(" "),r("p",[e._v("Builder 可以翻译为「构建引擎」，Builder 的目标是「复用构建工具的最佳实践」。")]),e._v(" "),r("p",[e._v("因为 webpack 等 Bundler 是比较底层的，如果我们基于 webpack 来构建一个项目，需要充分理解 webpack 的各个配置项和三方插件，并进行大量的配置组装和性能调优等工作。")]),e._v(" "),r("p",[e._v("Builder 比 Bundler 的封装程度更高，默认集成代码转换、代码压缩等能力。通过接入 Builder，可以快速获得构建现代 Web 应用的能力。")]),e._v(" "),r("p",[e._v("Builder 内部的分层如下：")]),e._v(" "),r("img",{attrs:{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-struct-10092.png"}}),e._v(" "),r("h2",{attrs:{id:"builder-provider"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#builder-provider"}},[e._v("#")]),e._v(" Builder Provider")]),e._v(" "),r("p",[e._v("Builder Provider 是 Builder 的组成部分之一，Provider 基于特定 bundler 实现了对应的构建能力。")]),e._v(" "),r("p",[e._v("目前 Builder 提供了两个 Provider：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("@modern-js/builder-webpack-provider")]),e._v("：底层基于 webpack 来实现。")]),e._v(" "),r("li",[r("code",[e._v("@modern-js/builder-rspack-provider")]),e._v("：底层基于 rspack 来实现。")])]),e._v(" "),r("h2",{attrs:{id:"modern-js"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#modern-js"}},[e._v("#")]),e._v(" Modern.js")]),e._v(" "),r("p",[e._v("现代 Web 工程方案。")]),e._v(" "),r("p",[e._v("Modern.js 由字节跳动 Web Infra 团队开源，提供了一系列现代 Web 开发的最佳工程实践，如前后端一体化、约定式路由、构建方案、样式方案等。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://modernjs.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Modern.js 官网地址"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"edenx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#edenx"}},[e._v("#")]),e._v(" EdenX")]),e._v(" "),r("p",[e._v("字节跳动内部的 Web 工程方案，基于 Modern.js 实现。")])])}),[],!1,null,null,null);r.default=s.exports}}]);