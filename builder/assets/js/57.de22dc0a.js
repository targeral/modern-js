(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{280:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"esbuild-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#esbuild-plugin"}},[t._v("#")]),t._v(" esbuild Plugin")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("About esbuild")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("esbuild"),s("OutboundLink")],1),t._v(" is a front-end build tool based on Golang. It has the functions of bundling, compiling and minimizing JavaScript code. Compared with traditional tools, the performance is significantly improved. When minimizing code, compared to webpack's built-in terser minimizer, esbuild has dozens of times better performance.")])]),t._v(" "),s("p",[t._v("Builder provides esbuild plugin that allow you to use esbuild instead of babel-loader, ts-loader and terser for transformation and minification process. When you enable esbuild in a large project, "),s("strong",[t._v("it can greatly reduce the time required for code compilation and compression, while effectively avoiding OOM (heap out of memory) problems")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),s("p",[t._v("You can install the plugin with the following command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @modern-js/builder-plugin-esbuild -D\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# yarn")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @modern-js/builder-plugin-esbuild -D\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pnpm")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pnpm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @modern-js/builder-plugin-esbuild -D\n")])])]),s("h2",{attrs:{id:"register"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register"}},[t._v("#")]),t._v(" Register")]),t._v(" "),s("p",[t._v("You can register the plugin in Builder to enable esbuild features:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" PluginEsbuild "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@modern-js/builder-plugin-esbuild'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add plugins to the builder instance")]),t._v("\nbuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPlugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PluginEsbuild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" Config")]),t._v(" "),s("p",[t._v("The plugin will enable code transformation and minification by default. You can also customize the behavior of the plugin through configuration.")]),t._v(" "),s("h3",{attrs:{id:"loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[t._v("#")]),t._v(" loader")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type")]),t._v(":")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoaderOptions")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EsbuildLoaderOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[s("strong",[t._v("Default")]),t._v(":")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" defaultOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es2015'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" builderConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("charset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("This config is used to enable JavaScript/TypeScript transformation, which will replace babel-loader and ts-loader with esbuild-loader.")]),t._v(" "),s("p",[t._v("If you want to modify the options, you can check the "),s("a",{attrs:{href:"https://github.com/privatenumber/esbuild-loader#loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("esbuild-loader documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"set-the-target-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-the-target-environment"}},[t._v("#")]),t._v(" Set the target environment")]),t._v(" "),s("p",[t._v("Use the "),s("code",[t._v("target")]),t._v(" option to set the target environment for transformation. "),s("code",[t._v("target")]),t._v(" can be set directly to the JavaScript language version, such as "),s("code",[t._v("es6")]),t._v(", "),s("code",[t._v("es2020")]),t._v("; it can also be set to several target environments, each target environment is an environment name followed by a version number, such as "),s("code",[t._v("['chrome58', 'edge16' ,'firefox57']")]),t._v(". For a detailed introduction of the "),s("code",[t._v("target")]),t._v(" option, please refer to "),s("a",{attrs:{href:"https://esbuild.github.io/api/#target",target:"_blank",rel:"noopener noreferrer"}},[t._v("esbuild - target"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("target supports setting to the following environments:")]),t._v(" "),s("ul",[s("li",[t._v("chrome")]),t._v(" "),s("li",[t._v("edge")]),t._v(" "),s("li",[t._v("firefox")]),t._v(" "),s("li",[t._v("ie")]),t._v(" "),s("li",[t._v("ios")]),t._v(" "),s("li",[t._v("node")]),t._v(" "),s("li",[t._v("opera")]),t._v(" "),s("li",[t._v("safari")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPlugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PluginEsbuild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    loader"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chrome61'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"disable-transformation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable-transformation"}},[t._v("#")]),t._v(" Disable transformation")]),t._v(" "),s("p",[t._v("Set "),s("code",[t._v("loader")]),t._v(" to "),s("code",[t._v("false")]),t._v(" to disable esbuild transformation, and Builder will continue to use Babel to transform the code.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPlugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PluginEsbuild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    loader"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"minimize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minimize"}},[t._v("#")]),t._v(" minimize")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type")]),t._v(":")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MinimizeOptions")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EsbuildMinifyOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[s("strong",[t._v("Default")]),t._v(":")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" defaultOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  css"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es2015'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("This option is used to enable minification for JavaScript and CSS.")]),t._v(" "),s("p",[t._v("If you want to modify the options, you can check the "),s("a",{attrs:{href:"https://github.com/privatenumber/esbuild-loader#minifyplugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("esbuild-loader documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"set-the-target-environment-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-the-target-environment-2"}},[t._v("#")]),t._v(" Set the target environment")]),t._v(" "),s("p",[t._v("Use the "),s("code",[t._v("target")]),t._v(" option to set the target environment for minification.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPlugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PluginEsbuild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    minimize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chrome61'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"disable-minification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable-minification"}},[t._v("#")]),t._v(" Disable minification")]),t._v(" "),s("p",[t._v("Set "),s("code",[t._v("minimize")]),t._v(" to "),s("code",[t._v("false")]),t._v(" to disable esbuild minification, and Builder will continue to use Terser to minify the code.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPlugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PluginEsbuild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    minimize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[t._v("#")]),t._v(" Limitations")]),t._v(" "),s("p",[t._v("Although esbuild can significantly improve the build performance of existing webpack projects, it still has certain limitations that require special attention.")]),t._v(" "),s("h3",{attrs:{id:"compatibility"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[t._v("#")]),t._v(" Compatibility")]),t._v(" "),s("p",[t._v("As a compiler (i.e. "),s("code",[t._v("loader")]),t._v(" capability), esbuild usually supports at least ES2015 (that is, ES6) syntax, and does not have the ability to automatically inject Polyfill.. If the production environment needs to downgrade to ES5 and below syntax, it is recommended to use SWC compilation.")]),t._v(" "),s("p",[t._v("You can specify the target syntax version by following config:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPlugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PluginEsbuild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    loader"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es2015'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("As a code minify tool (i.e. "),s("code",[t._v("minimize")]),t._v(" capability), esbuild can minify the code in production environment, and usually supports ES2015 syntax at least.")]),t._v(" "),s("p",[t._v("If you set the compressed "),s("code",[t._v("target")]),t._v(" to "),s("code",[t._v("es5")]),t._v(", you need to ensure that all codes have been compiled to ES5 codes, otherwise it will cause esbuild compilation error: "),s("code",[t._v("Transforming 'xxx' to the configured target environment (\"es5\") is not supported yet")]),t._v(".")]),t._v(" "),s("p",[t._v("Therefore, for projects that need to be compatible with ES5 and below syntax in the production environment, please be careful to enable the minimize capability, and it is recommended to use SWC compression.")]),t._v(" "),s("p",[t._v("You can specify the target syntax version by following config:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPlugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PluginEsbuild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("minimize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es2015'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("Caution")]),t._v(" "),s("p",[t._v("Projects that need to be compatible with ES5 and below syntax in the production environment need to be careful to turn on the minimize config.")])]),t._v(" "),s("h3",{attrs:{id:"not-support-babel-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#not-support-babel-plugins"}},[t._v("#")]),t._v(" Not support Babel plugins")]),t._v(" "),s("p",[t._v("As a compiler, the syntax transformation function of the original Babel plugins such as "),s("code",[t._v("babel-plugin-import")]),t._v(" is not available after esbuild is turned on. And since the bottom layer of the plugin uses esbuild's "),s("code",[t._v("Transform API")]),t._v(", it does not support esbuild plugins to customize the compilation process.")]),t._v(" "),s("p",[t._v("If you have requirements related to Babel plugins such as "),s("code",[t._v("babel-plugin-import")]),t._v(", you can use the SWC plugin.")]),t._v(" "),s("h3",{attrs:{id:"bundle-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bundle-size"}},[t._v("#")]),t._v(" Bundle Size")]),t._v(" "),s("p",[t._v("Although the compression speed of esbuild is faster, the compression ratio of esbuild is lower than that of terser, so the bundle size will increase, please use it according to the scenes. Generally speaking, esbuild is more suitable for scenes that are not sensitive to bundle size.")]),t._v(" "),s("p",[t._v("You can refer to "),s("a",{attrs:{href:"https://github.com/privatenumber/minification-benchmarks",target:"_blank",rel:"noopener noreferrer"}},[t._v("minification-benchmarks"),s("OutboundLink")],1),t._v(" for a detailed comparison between minimizers.")])])}),[],!1,null,null,null);s.default=e.exports}}]);