(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{254:function(t,e,s){"use strict";s.r(e);var r=s(4),a=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"browserslist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#browserslist"}},[t._v("#")]),t._v(" Browserslist")]),t._v(" "),e("p",[t._v("Builder supports using "),e("a",{attrs:{href:"https://browsersl.ist/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Browserslist"),e("OutboundLink")],1),t._v(" to specify which browsers should be supported in your Web application.")]),t._v(" "),e("h2",{attrs:{id:"what-is-browserslist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-browserslist"}},[t._v("#")]),t._v(" What is Browserslist")]),t._v(" "),e("p",[t._v("Since different browsers support ECMAScript and CSS differently, developers need to set the correct browser range for web applications.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://browsersl.ist/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Browserslist"),e("OutboundLink")],1),t._v(" can specify which browsers your web application can run in, it provides a configuration for specifying browsers range. Browserslist has become a standard in the industry, it is used by libraries such as Autoprefixer, Babel, ESLint, PostCSS, SWC and Webpack.")]),t._v(" "),e("p",[t._v("When you specify a browser range through Browserslist, Builder will compile JavaScript and CSS code to the specified syntax, and inject the corresponding polyfill code. "),e("strong",[t._v("When you only need to be compatible with modern browsers, the compilation process will introduce less compatible code and polyfills, and the performance of the page will be better.")])]),t._v(" "),e("p",[t._v("For example, when you need to be compatible with IE11 browser, Builder will compile the code to ES5 and inject the polyfill required by IE11 through "),e("code",[t._v("core-js")]),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("What is polyfill")]),t._v(" "),e("p",[t._v("A polyfill is a piece of code that provides the functionality of a newer feature to older browsers that do not support that feature natively. It is used to fill in the gaps in older browsers' implementations of web standards, allowing developers to use newer features safely without having to worry about whether or not they will work in older browsers. For example, if a browser does not support the Array.map() method, a polyfill can be used to provide that functionality, allowing code that uses "),e("code",[t._v("Array.prototype.flat()")]),t._v(" to work in that browser. Polyfills are commonly used to ensure that web applications can work on a wide range of browsers, including older ones.")])]),t._v(" "),e("h2",{attrs:{id:"set-browserslist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-browserslist"}},[t._v("#")]),t._v(" Set Browserslist")]),t._v(" "),e("p",[t._v("You can set the Browserslist value in the "),e("code",[t._v("package.json")]),t._v(" or "),e("code",[t._v(".browserslistrc")]),t._v(" file in the root directory of the current project.")]),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("p",[t._v("Set via "),e("code",[t._v("browserslist")]),t._v(" in "),e("code",[t._v("package.json")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"browserslist"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iOS 9"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Android 4.4"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"last 2 versions"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"> 0.2%"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"not dead"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Set via a separate "),e("code",[t._v(".browserslistrc")]),t._v(" file:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("iOS 9\nAndroid 4.4\nlast 2 versions\n> 0.2%\nnot dead\n")])])]),e("h3",{attrs:{id:"use-output-overridebrowserslist-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-output-overridebrowserslist-config"}},[t._v("#")]),t._v(" Use output.overrideBrowserslist config")]),t._v(" "),e("p",[t._v("In addition to the above standard usage, Builder also provides "),e("RouterLink",{attrs:{to:"/en/api/config-output.html#output-overridebrowserslist"}},[t._v("output.overrideBrowserslist")]),t._v(" config, which can also set the value of Browserslist.")],1),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    overrideBrowserslist"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iOS 9'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Android 4.4'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'last 2 versions'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'> 0.2%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'not dead'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("When you build multiple targets at the same time, you can set different browser ranges for different targets. At this point, you need to set "),e("code",[t._v("overrideBrowserslist")]),t._v(" to an object whose key is the corresponding build target.")]),t._v(" "),e("p",[t._v("For example to set different ranges for "),e("code",[t._v("web")]),t._v(" and "),e("code",[t._v("node")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("output")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("overrideBrowserslist")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("web")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iOS 9'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Android 4.4'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'last 2 versions'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'> 0.2%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'not dead'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("node")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node >= 14'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("In most cases, it is recommended to use the "),e("code",[t._v(".browserslistrc")]),t._v(" file rather than the "),e("code",[t._v("overrideBrowserslist")]),t._v(" config. Because the "),e("code",[t._v(".browserslistrc")]),t._v(" file is the official config file, it is more general and can be recognized by other libraries in the community.")]),t._v(" "),e("h2",{attrs:{id:"commonly-used-browserslist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commonly-used-browserslist"}},[t._v("#")]),t._v(" Commonly used Browserslist")]),t._v(" "),e("p",[t._v("The following are some commonly used Browserslist, you can choose according to your project type.")]),t._v(" "),e("h3",{attrs:{id:"mobile-h5-scene"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mobile-h5-scene"}},[t._v("#")]),t._v(" Mobile H5 scene")]),t._v(" "),e("p",[t._v("The mobile H5 scene is mainly compatible with "),e("code",[t._v("iOS")]),t._v(" and "),e("code",[t._v("Android")]),t._v(" systems, usually we set Browserslist as:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("iOS 9\nAndroid 4.4\nlast 2 versions\n0.2%\nnot dead\n")])])]),e("p",[t._v("The above Browserslist will compile the code to the ES5 specification, which is compatible with most mobile scenarios on the market. For the detailed browsers list, please check "),e("a",{attrs:{href:"https://browserslist.dev/?q=aU9TIDksIEFuZHJvaWQgNC40LCBsYXN0IDIgdmVyc2lvbnMsID4gMC4yJSwgbm90IGRlYWQ%3D",target:"_blank",rel:"noopener noreferrer"}},[t._v("browserslist.dev"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/browserslist-dev-1222.png",alt:""}})]),t._v(" "),e("p",[t._v("You can also choose to use the ES6 specification in the H5 scene, which will make the performance of the page better. The corresponding Browserslist is as follows:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("iOS 10\nChrome 51\n> 0.2%\nnot dead\nnot op_mini all\n")])])]),e("h3",{attrs:{id:"desktop-pc-scene"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#desktop-pc-scene"}},[t._v("#")]),t._v(" Desktop PC scene")]),t._v(" "),e("p",[t._v("In the desktop PC scenario, if you need to be compatible with IE 11 browsers, you can set Browserslist to:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> 0.5%\nnot dead\nInternet Explorer 11\n")])])]),e("p",[t._v("The above Browserslist will compile the code to the ES5 specification. For the specific browser list, please check "),e("a",{attrs:{href:"https://browserslist.dev/?q=PiAwLjUlLCBub3QgZGVhZCwgSUUgMTE%3D",target:"_blank",rel:"noopener noreferrer"}},[t._v("browserslist.dev"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("If you don't need to be compatible with IE 11 browsers, you can adjust Browserslist to get a more performant output, such as setting it to browsers that supports native ES Modules:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("chrome > 61\nedge > 16\nfirefox > 60\nsafari > 11\nios_saf > 11\n")])])]),e("h2",{attrs:{id:"default-browserslist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-browserslist"}},[t._v("#")]),t._v(" Default Browserslist")]),t._v(" "),e("p",[t._v("Builder will set different default values of Browserslist according to "),e("RouterLink",{attrs:{to:"/guide/basic/build-target.html"}},[t._v("build target")]),t._v(", but we recommend that you explicitly set Browserslist in your project, which will make the compatible scope of the project more clear.")],1),t._v(" "),e("h3",{attrs:{id:"web-target"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-target"}},[t._v("#")]),t._v(" Web Target")]),t._v(" "),e("p",[t._v("The default values of web target are as follows:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("%\nnot dead\nnot op_mini all\n")])])]),e("p",[t._v("Under this browser range, JavaScript code will be compiled to ES5 syntax.")]),t._v(" "),e("h3",{attrs:{id:"node-target"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-target"}},[t._v("#")]),t._v(" Node Target")]),t._v(" "),e("p",[t._v("Node target will be compatible with Node.js 14.0 by default.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\n")])])]),e("h3",{attrs:{id:"web-worker-target"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-worker-target"}},[t._v("#")]),t._v(" Web Worker Target")]),t._v(" "),e("p",[t._v("The default Browserslist of the Web Worker target is consistent with the Web target.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("%\nnot dead\nnot op_mini all\n")])])]),e("h3",{attrs:{id:"modern-web-target"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modern-web-target"}},[t._v("#")]),t._v(" Modern Web Target")]),t._v(" "),e("p",[t._v("Modern Web target will be compatible with browsers that support "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("native ES Modules"),e("OutboundLink")],1),t._v(" by default.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("chrome "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("61")]),t._v("\nedge "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\nfirefox "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\nsafari "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\nios_saf "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\n")])])]),e("h2",{attrs:{id:"query-browser-support"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-browser-support"}},[t._v("#")]),t._v(" Query browser support")]),t._v(" "),e("p",[t._v("When developing, we need to know the browser support of certain features or APIs. At this time, we can check on the "),e("a",{attrs:{href:"https://caniuse.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("caniuse"),e("OutboundLink")],1),t._v(" website.")]),t._v(" "),e("p",[t._v("For example, we need to know the browser support of "),e("code",[t._v("Promise")]),t._v(", just enter "),e("code",[t._v("Promise")]),t._v(" in "),e("a",{attrs:{href:"https://caniuse.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("caniuse"),e("OutboundLink")],1),t._v(", and you can see the following results:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/caniuse-demo-1222.png",alt:""}})]),t._v(" "),e("p",[t._v("As can be seen from the above table, "),e("code",[t._v("Promise")]),t._v(" is natively supported in Chrome 33 and iOS 8, but not in IE 11.")])])}),[],!1,null,null,null);e.default=a.exports}}]);