(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{273:function(e,t,r){"use strict";r.r(t);var o=r(4),s=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("Modern.js Builder is "),t("strong",[e._v("a Build Engine for Modern Web Development")]),e._v(".")]),e._v(" "),t("p",[e._v("With the growing of the front-end ecosystem, more and more build tools and plugins are created. For most developers, the configuration and dependencies required to build a web application have become complex; the cost of finding best practices for developers has also risen.")]),e._v(" "),t("p",[e._v("In order to reduce the complexity and make it easier to build a project, we abstracted the build abilities based on the practical experience of Modern.js, and created the open source tool Modern.js Builder.")]),e._v(" "),t("h2",{attrs:{id:"rust-tools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rust-tools"}},[e._v("#")]),e._v(" Rust Tools")]),e._v(" "),t("p",[e._v("In recent years, the trend in front-end toolchains has been to re-implement them with native programming languages like Rust for better performance. Some high-performance tools have created, such as "),t("a",{attrs:{href:"https://swc.rs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SWC"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener noreferrer"}},[e._v("esbuild"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://turbo.build/pack",target:"_blank",rel:"noopener noreferrer"}},[e._v("Turbopack"),t("OutboundLink")],1),e._v(", etc., and their use is gradually expanding. However, there are many differences between these Rust tools and JavaScript tools, including functional differences, configuration inconsistencies, which make it difficult for users to migrate.")]),e._v(" "),t("img",{attrs:{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/rust-tools-11175.png"}}),e._v(" "),t("p",[e._v("The Rust process of the front-end toolchain will continue for a long time, "),t("strong",[e._v("Modern.js Builder is expected to help developers better transition to Rust tools")]),e._v(". Whether it's JavaScript tools, Rust tools, or even low-level bundlers like webpack, they're all replaceable components in Modern.js Builder. You can incrementally replace these components by turning on configuration or enabling plugins, and Modern.js Builder will smooth out the major differences and help users migrate.")]),e._v(" "),t("h2",{attrs:{id:"position"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#position"}},[e._v("#")]),e._v(" Position")]),e._v(" "),t("p",[e._v("Modern.js Builder is a build engine serving the upper-level front-end frameworks. It focuses on solving problems in web application building, and expects to provide out-of-box building abilities for front-end frameworks.")]),e._v(" "),t("img",{staticStyle:{"max-width":"80%","margin-left":"10%"},attrs:{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-layers-1117.png"}}),e._v(" "),t("p",[e._v("If you are developing a front-end framework, or developing a scaffolding for a front-end application, Builder can provide most of the build logics for you, which allowing you to focus on implementing other features of the framework.")]),e._v(" "),t("p",[e._v("If you are a business developer, in most cases, you do not need to manually install Builder in your projects. We recommend that you use the upper-level frameworks based on Builder.")]),e._v(" "),t("p",[e._v("Currently, the following front-end frameworks are already using Builder:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/modern-js-dev/modern.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Modern.js 2.0"),t("OutboundLink")],1),e._v(" Framework (Open source).")]),e._v(" "),t("li",[e._v("EdenX Framework and PIA Framework inside ByteDance.")])]),e._v(" "),t("h2",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),t("h3",{attrs:{id:"support-multiple-bundlers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#support-multiple-bundlers"}},[e._v("#")]),e._v(" Support Multiple Bundlers")]),e._v(" "),t("p",[t("strong",[e._v("Builder supports using multiple bundlers")]),e._v(", users can use different bundlers according the your needs.")]),e._v(" "),t("p",[e._v("By default, Builder uses webpack 5 as the bundler. Although the compilation speed of webpack is not ideal, it is still the most mature and ecological bundler in the community. Based on webpack, Builder integrates "),t("a",{attrs:{href:"https://github.com/babel/babel",target:"_blank",rel:"noopener noreferrer"}},[e._v("babel"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/postcss/postcss",target:"_blank",rel:"noopener noreferrer"}},[e._v("postcss"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/terser/terser",target:"_blank",rel:"noopener noreferrer"}},[e._v("terser"),t("OutboundLink")],1),e._v(" and other tools to transform or minify codes. Builder also supports replacing some compile tools with native tools to improve compilation speed, such as replacing babel/terser with "),t("a",{attrs:{href:"https://github.com/swc-project/swc",target:"_blank",rel:"noopener noreferrer"}},[e._v("swc"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener noreferrer"}},[e._v("esbuild"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("At the same time, We are integrating rspack to improve compilation speed, rspack is a Rust Bundler developed by ByteDance.")]),e._v(" "),t("p",[e._v("At present, the webpack provider is stable for production, and the rspack provider is still under development.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("About Turbopack")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://turbo.build/pack",target:"_blank",rel:"noopener noreferrer"}},[e._v("Turbopack"),t("OutboundLink")],1),e._v(" is the rust-powered successor to webpack, we will continue to pay attention to it. At present, Turbopack only supports use in Next.js. When Turbopack can be used independently, and the completion and community ecology reach a certain level, we will consider supporting it for sure.")])]),e._v(" "),t("h3",{attrs:{id:"deep-optimization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deep-optimization"}},[e._v("#")]),e._v(" Deep optimization")]),e._v(" "),t("p",[e._v("Builder "),t("strong",[e._v("makes full use of various optimization strategies")]),e._v(" in the webpack ecosystem to ensure the product performance in the production environment.")]),e._v(" "),t("p",[e._v("Taking the chunk splitting scenario as an example, the webpack's splitChunks config is complex, and Builder makes it as an out-of-the-box "),t("RouterLink",{attrs:{to:"/en/api/config-performance.html#performance-chunksplit"}},[e._v("performance.chunkSplit")]),e._v(" config, it will split common third-party libraries into chunks to make page loading faster.")],1),e._v(" "),t("h3",{attrs:{id:"extensible-plugin-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extensible-plugin-system"}},[e._v("#")]),e._v(" Extensible Plugin System")]),e._v(" "),t("p",[e._v("Provides rich configuration items and a flexible plugin system to support in-depth customization of all features.")]),e._v(" "),t("p",[e._v("For Builder, all building abilities are achieved through plugins:")]),e._v(" "),t("ul",[t("li",[e._v("Most of the plugins are lightweight, built in Builder, and developers can enable or disable them through configs.")]),e._v(" "),t("li",[e._v("Some plugins are more complex and developed as independent npm packages, developers can install and use them as needed.")])]),e._v(" "),t("p",[e._v("Builder also supports custom plugins, so framework developers can develop custom plugins to meet customized requirements.")]),e._v(" "),t("h2",{attrs:{id:"npm-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-packages"}},[e._v("#")]),e._v(" npm packages")]),e._v(" "),t("p",[e._v("Below is the npm package published by Builder.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Package")]),e._v(" "),t("th",[e._v("Version")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder",target:"_blank",rel:"noopener noreferrer"}},[e._v("@modern-js/builder"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder/beta?style=flat-square",alt:""}})]),e._v(" "),t("td",[e._v("Core package of Builder")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-webpack-provider",target:"_blank",rel:"noopener noreferrer"}},[e._v("@modern-js/builder-webpack-provider"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-webpack-provider/beta?style=flat-square",alt:""}})]),e._v(" "),t("td",[e._v("Provides webpack build ability")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-rspack-provider",target:"_blank",rel:"noopener noreferrer"}},[e._v("@modern-js/builder-rspack-provider"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-rspack-provider/beta?style=flat-square",alt:""}})]),e._v(" "),t("td",[e._v("Provides rspack build ability")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-swc",target:"_blank",rel:"noopener noreferrer"}},[e._v("@modern-js/builder-plugin-swc"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-swc/beta?style=flat-square",alt:""}})]),e._v(" "),t("td",[e._v("SWC Plugin")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-esbuild",target:"_blank",rel:"noopener noreferrer"}},[e._v("@modern-js/builder-plugin-esbuild"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-esbuild/beta?style=flat-square",alt:""}})]),e._v(" "),t("td",[e._v("esbuild Plugin")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-node-polyfill",target:"_blank",rel:"noopener noreferrer"}},[e._v("@modern-js/builder-plugin-node-polyfill"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-node-polyfill/beta?style=flat-square",alt:""}})]),e._v(" "),t("td",[e._v("Node Polyfill Plugin")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-image-compress",target:"_blank",rel:"noopener noreferrer"}},[e._v("@modern-js/builder-plugin-image-compress"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-image-compress/beta?style=flat-square",alt:""}})]),e._v(" "),t("td",[e._v("Image Compress Plugin")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-shared",target:"_blank",rel:"noopener noreferrer"}},[e._v("@modern-js/builder-shared"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-shared/beta?style=flat-square",alt:""}})]),e._v(" "),t("td",[e._v("Shared modules of Builder")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/@modern-js/builder-doc",target:"_blank",rel:"noopener noreferrer"}},[e._v("@modern-js/builder-doc"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("img",{attrs:{src:"https://img.shields.io/npm/v/@modern-js/builder-doc/beta?style=flat-square",alt:""}})]),e._v(" "),t("td",[e._v("Documentation snippets of Builder")])])])]),e._v(" "),t("p",[e._v("You can view the source code of these packages in the "),t("a",{attrs:{href:"https://github.com/modern-js-dev/modern.js/tree/main/packages/builder/",target:"_blank",rel:"noopener noreferrer"}},[e._v("packages/builder"),t("OutboundLink")],1),e._v(" directory of the modern.js repository.")]),e._v(" "),t("h2",{attrs:{id:"next-step"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next-step"}},[e._v("#")]),e._v(" Next Step")]),e._v(" "),t("p",[e._v("You may want:")]),e._v(" "),t("NextSteps",[t("Step",{attrs:{href:"/guide/quick-start.html",title:"Quick Start",description:"Learn how to use Builder"}}),e._v(" "),t("Step",{attrs:{href:"/guide/features.html",title:"All Features",description:"Learn all features of Builder"}}),e._v(" "),t("Step",{attrs:{href:"/api",title:"API Reference",description:"View detailed API documentation"}})],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);