(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guide_basic_build-target_md"],{50871:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var s in r)Object.defineProperty(e,s,{enumerable:!0,get:r[s]})}(r,{frontmatter:function(){return t},toc:function(){return l},title:function(){return o},default:function(){return c}});var n=s("12151"),i=s("21447");let t=void 0,l=[{id:"default-target",text:"Default Target",depth:2},{id:"optional-targets",text:"Optional Targets",depth:2},{id:"multiple-targets",text:"Multiple Targets",depth:2},{id:"node-target",text:"Node Target",depth:2},{id:"web-worker-target",text:"Web Worker Target",depth:2},{id:"modern-web-target",text:"Modern Web Target",depth:2}],o="Build Target";function a(e){let r=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",div:"div",button:"button",pre:"pre",span:"span",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h1,{id:"build-target",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#build-target",children:"#"}),"Build Target"]}),"\n",(0,n.jsx)(r.p,{children:"Builder supports build multiple target types for running in different target environments. After setting the correct target type, Builder will optimize the build results for the environment, and enable some plugins or configs for the target environment during the build process."}),"\n",(0,n.jsxs)(r.p,{children:["You can set the type through the ",(0,n.jsx)(r.code,{children:"target"})," parameter of the ",(0,n.jsx)(r.a,{href:"/builder/en/api/builder-core.html#createbuilder",children:"createBuilder"})," method."]}),"\n",(0,n.jsxs)(r.h2,{id:"default-target",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#default-target",children:"#"}),"Default Target"]}),"\n",(0,n.jsxs)(r.p,{children:["By default, the build target is ",(0,n.jsx)(r.code,{children:"'web'"}),", and the build result can run in a browser environment."]}),"\n",(0,n.jsxs)(r.p,{children:["the Builder will read the ",(0,n.jsx)(r.a,{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer",children:"Browserslist config"})," in the project to determine the range of browsers."]}),"\n",(0,n.jsxs)(r.h2,{id:"optional-targets",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#optional-targets",children:"#"}),"Optional Targets"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"target"})," can also be set to the following values:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"'node'"}),": Build for Node.js environment, usually used in SSR and other scenarios."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"'web-worker'"}),": Build for Web Worker environment."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"'modern-web'"}),": Build for modern browsers."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"For example, to build for the Node.js environment:"}),"\n",(0,n.jsxs)(r.div,{className:"language-ts",children:[(0,n.jsx)(r.div,{className:""}),(0,n.jsxs)(r.div,{className:"modern-code-content",children:[(0,n.jsx)(r.button,{className:"copy"}),(0,n.jsx)(r.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(r.code,{children:[(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-constant)"},children:"builder"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"createBuilder"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"(provider"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"  target"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'node'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(r.span,{className:"line",children:(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,n.jsx)(r.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(r.h2,{id:"multiple-targets",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#multiple-targets",children:"#"}),"Multiple Targets"]}),"\n",(0,n.jsx)(r.p,{children:"When target is an array containing multiple values, Builder will perform multiple builds at the same time."}),"\n",(0,n.jsx)(r.p,{children:"For example, we can build a browser target and an node target at the same time:"}),"\n",(0,n.jsxs)(r.div,{className:"language-ts",children:[(0,n.jsx)(r.div,{className:""}),(0,n.jsxs)(r.div,{className:"modern-code-content",children:[(0,n.jsx)(r.button,{className:"copy"}),(0,n.jsx)(r.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(r.code,{children:[(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-constant)"},children:"builder"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"createBuilder"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"(provider"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"  target"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'web'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'node'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(r.span,{className:"line",children:(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,n.jsx)(r.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(r.h2,{id:"node-target",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#node-target",children:"#"}),"Node Target"]}),"\n",(0,n.jsx)(r.p,{children:"Refers to the build target running in the Node.js environment, usually used in scenarios such as SSR."}),"\n",(0,n.jsxs)(r.p,{children:["When ",(0,n.jsx)(r.code,{children:"target"})," is set to ",(0,n.jsx)(r.code,{children:"'node'"}),", Builder will:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"No HTML files will be generated, and HTML-related logic will not be executed, since HTML is not required by the Node.js environment."}),"\n",(0,n.jsx)(r.li,{children:"CSS code will not be bundled or extracted, but the id information of CSS Modules will be included in the bundle."}),"\n",(0,n.jsx)(r.li,{children:"The default code split strategy will be disabled, but dynamic import can still work."}),"\n",(0,n.jsx)(r.li,{children:"Disable the HMR."}),"\n",(0,n.jsxs)(r.li,{children:["Adjust the default value of Browserslist to ",(0,n.jsx)(r.code,{children:"['node >= 14']"}),"。"]}),"\n"]}),"\n",(0,n.jsxs)(r.div,{className:"modern-directive tip",children:[(0,n.jsx)(r.div,{className:"modern-directive-title",children:"TIP"}),(0,n.jsx)(r.div,{className:"modern-directive-content",children:(0,n.jsx)(r.p,{children:"\nIf target is an array, such as building web and node targets at the same time, then the above processing will not affect the web target, The HTML, CSS and other files required for the web target will still be generated correctly."})})]}),"\n",(0,n.jsxs)(r.h2,{id:"web-worker-target",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#web-worker-target",children:"#"}),"Web Worker Target"]}),"\n",(0,n.jsxs)(r.p,{children:["Refers to the build target running in the ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API",target:"_blank",rel:"noopener noreferrer",children:"Web Worker"})," environment."]}),"\n",(0,n.jsxs)(r.div,{className:"modern-directive tip",children:[(0,n.jsx)(r.div,{className:"modern-directive-title",children:"Web Worker"}),(0,n.jsx)(r.div,{className:"modern-directive-content",children:(0,n.jsx)(r.p,{children:"\nA web worker is a type of JavaScript program that runs in the background, independently of other scripts, without affecting the performance of the page. This makes it possible to run long-running scripts, such as ones that handle complex calculations or access remote resources, without blocking the user interface or other scripts. Web workers provide an easy way to run tasks in the background and improve the overall performance of web applications."})})]}),"\n",(0,n.jsxs)(r.p,{children:["When ",(0,n.jsx)(r.code,{children:"target"})," is set to ",(0,n.jsx)(r.code,{children:"'web-worker'"}),", Builder will:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"No HTML files will be generated, and HTML-related logic will not be executed, since HTML is not required by the Web Worker environment."}),"\n",(0,n.jsx)(r.li,{children:"CSS code will not be bundled or extracted, but the id information of CSS Modules will be included in the bundle."}),"\n",(0,n.jsxs)(r.li,{children:["The default code split strategy will be disabled, and ",(0,n.jsx)(r.strong,{children:"dynamic import can not work"}),", because the Web Worker only runs a single JavaScript file."]}),"\n",(0,n.jsx)(r.li,{children:"Disable the HMR."}),"\n"]}),"\n",(0,n.jsxs)(r.h2,{id:"modern-web-target",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-web-target",children:"#"}),"Modern Web Target"]}),"\n",(0,n.jsx)(r.p,{children:"Refers to the build target running in the modern browsers."}),"\n",(0,n.jsxs)(r.div,{className:"modern-directive tip",children:[(0,n.jsx)(r.div,{className:"modern-directive-title",children:"What are modern browsers?"}),(0,n.jsx)(r.div,{className:"modern-directive-content",children:(0,n.jsxs)(r.p,{children:["\nModern browsers are one of our conventions to refer to browsers that support ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer",children:"native ES Modules"}),"."]})})]}),"\n",(0,n.jsxs)(r.p,{children:["When ",(0,n.jsx)(r.code,{children:"target"})," is set to ",(0,n.jsx)(r.code,{children:"'modern-web'"}),", Builder will:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Adjust the default value of Browserslist to："}),"\n"]}),"\n",(0,n.jsxs)(r.div,{className:"language-js",children:[(0,n.jsx)(r.div,{className:""}),(0,n.jsxs)(r.div,{className:"modern-code-content",children:[(0,n.jsx)(r.button,{className:"copy"}),(0,n.jsx)(r.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(r.code,{children:[(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-constant)"},children:"browserslist"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'chrome >= 61'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'edge >= 16'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'firefox >= 60'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'safari >= 11'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ios_saf >= 11'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(r.span,{className:"line",children:(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"];"})}),"\n",(0,n.jsx)(r.span,{className:"line"})]})})]})]})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,i.useMDXComponents)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}}}]);