(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_advanced_browser-compatibility_md"],{77386:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var o,t=r("15169"),i=r("43932"),s=r("9880"),a=r("23169");function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",strong:"strong",blockquote:"blockquote",code:"code",pre:"pre"},(0,a.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"browser-compatibility",children:["Browser Compatibility",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#browser-compatibility",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"This chapter introduces how to use the capabilities provided by Builder to deal with browser compatibility issues."}),"\n",(0,s.jsxs)(n.h2,{id:"set-browserslist",children:["Set browserslist",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#set-browserslist",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Before dealing with compatibility issues, you first need to clarify which browsers your project needs to support, and add the corresponding browserslist config."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you haven't set browserslist yet, please read the ",(0,s.jsx)(n.a,{href:"/guide/advanced/browserslist",children:"Browserslist"})," chapter first."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If you have set a browserslist, Builder will automatically compile according to that scope, downgrade JavaScript syntax and CSS syntax, and inject the required polyfill. In most cases, you can safely use modern ECMAScript features without worrying about compatibility issues."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"After setting the browserslist, if you still encountered some compatibility issues, please continue reading below contents to find some solutions."}),"\n",(0,s.jsxs)(n.h2,{id:"background-knowledge",children:["Background knowledge",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#background-knowledge",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Before dealing with compatibility issues, it is recommended that you understand the following background knowledge to better handle related issues."}),"\n",(0,s.jsxs)(n.h3,{id:"syntax-downgrade-and-api-downgrade",children:["Syntax downgrade and API downgrade",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#syntax-downgrade-and-api-downgrade",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When you use higher-version syntax and API in your project, in order to make the compiled code run stably in lower-version browsers, we need to downgrade two parts: syntax downgrade and API downgrade."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Builder downgrades syntax through syntax transpilation, and downgrades API through inject polyfill."})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Grammar and API are not strongly bound. When browser manufacturers implement the engine, they will support some syntax or implement some APIs in advance according to the specification or their own needs. Therefore, browsers from different manufacturers in the same period are not necessarily compatible with syntax and API. So in general practice, syntax and API are handled in two parts."}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"syntax-transpilation",children:["Syntax transpilation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#syntax-transpilation",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Syntax is a series of rules for how a programming language organizes code"}),", and code that does not follow these rules cannot be correctly recognized by the programming language's engine and therefore cannot be run. In JavaScript, the following examples are syntax rules:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.code,{children:"const foo = 1"}),", ",(0,s.jsx)(n.code,{children:"const"})," means to declare an immutable constant."]}),"\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.code,{children:"foo?.bar?.baz"}),", ",(0,s.jsx)(n.code,{children:"?."})," indicates optional chaining of access properties."]}),"\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.code,{children:"async function () {}"}),", ",(0,s.jsx)(n.code,{children:"async"})," means to declare an asynchronous function."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Because the parsers of different browsers can support different syntax, especially the old version of the browser engine can support less grammar, so when some syntax are run in the lower version of the browser engine, an error will be reported at the stage of parsing the AST ."}),"\n",(0,s.jsx)(n.p,{children:"For example, the following code will report an error in IE browser or a lower version of Node.js:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const foo = {};\nfoo?.bar();\n"})}),"\n",(0,s.jsx)(n.p,{children:"When we run this code in a low version of Node.js, the following error message will appear:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SyntaxError: Unexpected token.\n   at Object.exports.runInThisContext (vm.js:73:16)\n   at Object.<anonymous> ([eval]-wrapper:6:22)\n   at Module._compile (module.js:460:26)\n   at evalScript (node.js:431:25)\n   at startup (node.js:90:7)\n   at node.js:814:3\n"})}),"\n",(0,s.jsx)(n.p,{children:"It is obvious from the error message that this is a syntax error. This means that this syntax is not supported in lower versions of the engine."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Syntax can not be supported by polyfill or shim"}),". If you want to run some syntax that it does not originally support in a low-version browser, you need to transpile the code into a syntax that the low-version engine can support."]}),"\n",(0,s.jsx)(n.p,{children:"Transpile the above code into the following code to run in lower version engines:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"var foo = {};\nfoo === null || foo === void 0 ? void 0 : foo.bar();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After transpilation, the syntax of the code has changed, and some syntax that the engine of the lower version cannot understand has been replaced with the syntax it can understand, ",(0,s.jsx)(n.strong,{children:"but the meaning of the code itself has not changed"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If the engine encounters an unrecognized syntax when converting to AST, it will report a syntax error and abort the code execution process. In this case, if your project does not use capabilities such as SSR or SSG, the page will be blank, making the page unavailable."}),"\n",(0,s.jsx)(n.p,{children:"If the code is successfully converted to AST, the engine will convert the AST into executable code and execute it normally inside the engine."}),"\n",(0,s.jsxs)(n.h3,{id:"api-polyfill",children:["API Polyfill",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api-polyfill",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"JavaScript is an interpreted scripting language, unlike compiled languages like Rust. Rust will check the calls in the code during the compilation phase, and JavaScript does not know whether the function called by this line of code exists before it actually runs to a certain line of code, so some errors will only appear at runtime."}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"var str = 'Hello world!';\nconsole.log(str.notExistedMethod());\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The above code has correct syntax and can be converted to AST correctly in the first stage of the engine runtime, but when it is actually running, because the method ",(0,s.jsx)(n.code,{children:"notExistedMethod"})," does not exist on ",(0,s.jsx)(n.code,{children:"String.prototype"}),", an error will be reported:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Uncaught TypeError: str.notExistedMethod is not a function\n   at <anonymous>:2:17\n"})}),"\n",(0,s.jsxs)(n.p,{children:["With the iteration of ECMAScript, some new methods will be added to be built-in objects. For example, ",(0,s.jsx)(n.code,{children:"String.prototype.replaceAll"})," was introduced in ES2021, then the ",(0,s.jsx)(n.code,{children:"replaceAll"})," method does not exist in the built-in object ",(0,s.jsx)(n.code,{children:"String.prototype"})," of most browser engines before 2021, so the following code works in the latest Chrome, but not in earlier versions:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"'abc'.replaceAll('abc', 'xyz');\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In order to solve the problem that ",(0,s.jsx)(n.code,{children:"String.prototype"})," lacks ",(0,s.jsx)(n.code,{children:"replaceAll"})," in older browsers, we can extend the ",(0,s.jsx)(n.code,{children:"String.prototype"})," object in older browsers and add the ",(0,s.jsx)(n.code,{children:"replaceAll"})," method to it, for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// The implementation of this polyfill does not necessarily conform to the standard, it is only used as an example.\nif (!String.prototype.replaceAll) {\n  String.prototype.replaceAll = function (str, newStr) {\n    // If a regex pattern\n    if (\n      Object.prototype.toString.call(str).toLowerCase() === '[object regexp]'\n    ) {\n      return this.replace(str, newStr);\n    }\n    // If a string\n    return this.replace(new RegExp(str, 'g'), newStr);\n  };\n}\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"This technique of providing implementations for legacy environments to align new APIs is called polyfill."}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"downgrade-method",children:["Downgrade method",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#downgrade-method",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"In Builder, we divide code into three categories:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The first category is the source code in the current project."}),"\n",(0,s.jsx)(n.li,{children:"The second category is third-party dependencies installed through npm."}),"\n",(0,s.jsx)(n.li,{children:"The third category is the code out of the current project, such as the code in other directories in the monorepo."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By default, Builder will only compile and downgrade the first category, other categories will not be downgraded by default."}),"\n",(0,s.jsx)(n.p,{children:"There are several considerations for this approach:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Downgrading all third-party party dependencies will ",(0,s.jsx)(n.strong,{children:"significantly reduce build performance"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Most third-party dependencies have been downgraded before release, and the second downgrade may introduce new problems."}),"\n",(0,s.jsx)(n.li,{children:"The code out of the current project may have been compiled, or the compilation config may be different."}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"downgrade-the-current-project-code",children:["Downgrade the current project code",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#downgrade-the-current-project-code",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The code of the current project will be downgraded by default, so you don't need to add additional config, just make sure that the browserslist config is set correctly."}),"\n",(0,s.jsxs)(n.h3,{id:"downgrade-third-party-dependencies",children:["Downgrade third-party dependencies",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#downgrade-third-party-dependencies",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When you find that a third-party dependencies causes compatibility issues, you can add this dependency to Builder's ",(0,s.jsx)(n.a,{href:"/en/api/config-source#sourceinclude",children:"source.include"})," config, Make Builder do extra compilation for this dependency."]}),"\n",(0,s.jsxs)(n.p,{children:["Taking the npm package ",(0,s.jsx)(n.code,{children:"query-string"})," as an example, you can add the following config:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import path from 'path';\n\nexport default {\n  source: {\n    include: [/\\/query-string\\//],\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Please refer to ",(0,s.jsx)(n.a,{href:"/api/config-source#sourceinclude",children:"source.include"})," document for detailed usage guide."]}),"\n",(0,s.jsxs)(n.h3,{id:"downgrade-the-code-out-of-the-current-project",children:["Downgrade the code out of the current project",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#downgrade-the-code-out-of-the-current-project",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When you import the code out of the current project, if the code has not been compiled, then you also need to configure ",(0,s.jsx)(n.a,{href:"/en/api/config-source#sourceinclude",children:"source.include"})," to it to compile."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if you need to reference a module under the ",(0,s.jsx)(n.code,{children:"packages"})," directory in the monorepo, you can add the following config:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import path from 'path';\n\nexport default {\n  source: {\n    include: [\n      // method one:\n      // Compile all files in the package directory of Monorepo\n      path.resolve(__dirname, '../../packages'),\n\n      // Method Two:\n      // Compile the source code of a package in the Monorepo's package directory\n      // The matching range of this writing method is more precise, and has less impact on the overall compilation performance\n      path.resolve(__dirname, '../../packages/xxx/src'),\n    ],\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"polyfill-mode",children:["Polyfill mode",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill-mode",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Builder compiles JavaScript code through Babel or SWC, and injects polyfill libraries like ",(0,s.jsx)(n.a,{href:"https://github.com/zloirock/core-js",target:"_blank",rel:"noopener noreferrer",children:"core-js"}),", ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@babel/runtime",target:"_blank",rel:"noopener noreferrer",children:"@babel/runtime"})," and ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@swc/helpers",target:"_blank",rel:"noopener noreferrer",children:"@swc/helpers"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In different usage scenarios, you may need different polyfill solutions. Builder provides ",(0,s.jsx)(n.a,{href:"/en/api/config-output#outputpolyfill",children:"output.polyfill"})," config to switch between different polyfill modes."]}),"\n",(0,s.jsxs)(n.h3,{id:"entry-mode",children:["entry mode",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entry-mode",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"entry is the default mode and does not need to be set manually."}),"\n",(0,s.jsxs)(n.p,{children:["When using the entry mode, Builder will analyze which ",(0,s.jsx)(n.code,{children:"core-js"})," methods need to be injected according to the browserslist set by the current project, and inject them to the entry file of each page. The polyfill injected in this way is more comprehensive, and there is no need to worry about the project source code and third-party dependencies polyfill issues. However, because some unused polyfill codes are included, the bundle size may increase."]}),"\n",(0,s.jsx)(n.p,{children:"The config of entry mode is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    polyfill: 'entry',\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"usage-mode",children:["usage mode",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage-mode",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The usage mode allows more precise control over which core-js polyfills need to be injected."}),"\n",(0,s.jsx)(n.p,{children:"When you enable the usage mode, Builder will analyze the source code in the project and determine which polyfills need to be injected."}),"\n",(0,s.jsxs)(n.p,{children:["For example, the code uses the ",(0,s.jsx)(n.code,{children:"Map"})," object:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"var b = new Map();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After compilation, only the polyfills for ",(0,s.jsx)(n.code,{children:"Map"})," will be injected into this file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import 'core-js/modules/es.map';\nvar b = new Map();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The advantage of this method is that the size of the injected polyfill is smaller, which is suitable for projects with higher requirements on bundle size. The disadvantage is that polyfill may not be fully injected, because third-party dependencies will not be compiled and downgraded by default, so the polyfill required by third-party dependencies will not be analyzed. If you need to analyze a third-party dependency, you also need to add it to ",(0,s.jsx)(n.a,{href:"/en/api/config-source#sourceinclude",children:"source.include"})," config."]}),"\n",(0,s.jsx)(n.p,{children:"The config of usage mode is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    polyfill: 'usage',\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"disable-polyfill",children:["Disable Polyfill",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-polyfill",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can disable polyfill injection behavior by setting ",(0,s.jsx)(n.code,{children:"output.polyfill"})," to ",(0,s.jsx)(n.code,{children:"'off'"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    polyfill: 'off',\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When using this config, you need to ensure compatibility by yourself, such as manually import the required polyfill code through ",(0,s.jsx)(n.a,{href:"/en/api/config-source#sourcepreentry",children:"source.preEntry"}),"."]})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fen%2Fguide%2Fadvanced%2Fbrowser-compatibility.md"]={toc:[{text:"Set browserslist",id:"set-browserslist",depth:2},{text:"Background knowledge",id:"background-knowledge",depth:2},{text:"Syntax downgrade and API downgrade",id:"syntax-downgrade-and-api-downgrade",depth:3},{text:"Syntax transpilation",id:"syntax-transpilation",depth:3},{text:"API Polyfill",id:"api-polyfill",depth:3},{text:"Downgrade method",id:"downgrade-method",depth:2},{text:"Downgrade the current project code",id:"downgrade-the-current-project-code",depth:3},{text:"Downgrade third-party dependencies",id:"downgrade-third-party-dependencies",depth:3},{text:"Downgrade the code out of the current project",id:"downgrade-the-code-out-of-the-current-project",depth:3},{text:"Polyfill mode",id:"polyfill-mode",depth:2},{text:"entry mode",id:"entry-mode",depth:3},{text:"usage mode",id:"usage-mode",depth:3},{text:"Disable Polyfill",id:"disable-polyfill",depth:3}],title:"Browser Compatibility",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,i._)((0,t._)({},e),{children:(0,s.jsx)(d,(0,t._)({},e))})):d(e)}}}]);