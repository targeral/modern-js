(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guide_optimization_optimize-bundle_md"],{54551:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return l},toc:function(){return a},title:function(){return o},default:function(){return t}});var i=n("12151"),r=n("21447");let l=void 0,a=[{id:"reduce-duplicate-dependencies",text:"Reduce duplicate dependencies",depth:2},{id:"use-lightweight-libraries",text:"Use lightweight libraries",depth:2},{id:"adjust-browserslist",text:"Adjust Browserslist",depth:2},{id:"usage-polyfill",text:"Usage polyfill",depth:2},{id:"image-compression",text:"Image Compression",depth:2},{id:"split-chunk",text:"Split Chunk",depth:2}],o="Bundle Size Optimization";function c(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",div:"div",button:"button",pre:"pre",span:"span",img:"img"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"bundle-size-optimization",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#bundle-size-optimization",children:"#"}),"Bundle Size Optimization"]}),"\n",(0,i.jsx)(s.p,{children:"Bundle size optimization is an important part in production environment because it directly affects the user experience of online users. In this document, we will introduce some common bundle size optimization methods in Builder."}),"\n",(0,i.jsxs)(s.h2,{id:"reduce-duplicate-dependencies",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#reduce-duplicate-dependencies",children:"#"}),"Reduce duplicate dependencies"]}),"\n",(0,i.jsx)(s.p,{children:"In real projects, there will be some third-party dependencies installed with multiple versions. Duplicate dependencies can lead to larger bundles and slower builds."}),"\n",(0,i.jsx)(s.p,{children:"We can detect or eliminate duplicate dependencies with some community tools."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["If you are using ",(0,i.jsx)(s.code,{children:"pnpm >= 7.26.0"}),", you can use the ",(0,i.jsx)(s.a,{href:"https://pnpm.io/cli/dedupe",target:"_blank",rel:"noopener noreferrer",children:"pnpm dedupe"})," command to upgrade and eliminate duplicate dependencies."]}),"\n"]}),"\n",(0,i.jsxs)(s.div,{className:"language-bash",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm dedupe"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["If you are using ",(0,i.jsx)(s.code,{children:"pnpm < 7.26.0"}),", you can use ",(0,i.jsx)(s.a,{href:"https://github.com/ocavue/pnpm-deduplicate",target:"_blank",rel:"noopener noreferrer",children:"pnpm-deduplicate"})," to analyze all duplicate dependencies, then update dependencies or declare ",(0,i.jsx)(s.a,{href:"https://pnpm.io/package_json#pnpmoverrides",target:"_blank",rel:"noopener noreferrer",children:"pnpm overrides"})," to merge duplicated dependencies."]}),"\n"]}),"\n",(0,i.jsxs)(s.div,{className:"language-bash",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"npx pnpm-deduplicate --list"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["If you are using ",(0,i.jsx)(s.code,{children:"yarn"}),", you can use ",(0,i.jsx)(s.a,{href:"https://github.com/scinos/yarn-deduplicate",target:"_blank",rel:"noopener noreferrer",children:"yarn-deduplicate"})," to automatically merge duplicated dependencies:"]}),"\n"]}),"\n",(0,i.jsxs)(s.div,{className:"language-bash",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"npx yarn-deduplicate "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" yarn"})]}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h2,{id:"use-lightweight-libraries",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#use-lightweight-libraries",children:"#"}),"Use lightweight libraries"]}),"\n",(0,i.jsxs)(s.p,{children:["It is recommended to using lightweight libraries in your project, such as replacing ",(0,i.jsx)(s.a,{href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer",children:"moment"})," with ",(0,i.jsx)(s.a,{href:"https://day.js.org/",target:"_blank",rel:"noopener noreferrer",children:"day.js"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["If you want to find out the large libraries in the project, you can add the ",(0,i.jsx)(s.a,{href:"/builder/en/api/config-performance.html#performancebundleanalyze",children:"BUNDLE_ANALYZE=true"})," environment variable when building:"]}),"\n",(0,i.jsxs)(s.div,{className:"language-bash",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"BUNDLE_ANALYZE=true pnpm build"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsx)(s.p,{children:"After adding this parameter, Builder will generate a HTML file that analyzes the bundle size, you can manually open the file in the browser and view the detail of the bundle size. When an area is larger, it indicates that its corresponding bundle size is larger."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/mwa-build-analyze-8784f762c1ab0cb20935829d5f912c4c.png",alt:""})}),"\n",(0,i.jsxs)(s.h2,{id:"adjust-browserslist",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#adjust-browserslist",children:"#"}),"Adjust Browserslist"]}),"\n",(0,i.jsx)(s.p,{children:"The Builder will compile the code according to the project's Browserslist config, and inject some Polyfills. If the project does not need to be compatible with legacy browsers, you can adjust the Browserslist and drop some legacy browsers, thereby reducing the compilation overhead on syntax and polyfill."}),"\n",(0,i.jsx)(s.p,{children:"Builder's default Browserslist config is:"}),"\n",(0,i.jsxs)(s.div,{className:"language-js",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'> 0.01%'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'not dead'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'not op_mini all'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsx)(s.p,{children:"For example, if you only need to be compatible with browsers above Chrome 61, you can change it to:"}),"\n",(0,i.jsxs)(s.div,{className:"language-js",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Chrome >= 61'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive tip",children:[(0,i.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsxs)(s.p,{children:["\nPlease read the ",(0,i.jsx)(s.a,{href:"/builder/en/guide/advanced/browserslist.html",children:"Browserslist"}),"chapter to know more about the usage of Browserslist."]})})]}),"\n",(0,i.jsxs)(s.h2,{id:"usage-polyfill",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#usage-polyfill",children:"#"}),"Usage polyfill"]}),"\n",(0,i.jsxs)(s.p,{children:["When it is clear that third-party dependencies do not require additional polyfill, you can set ",(0,i.jsx)(s.a,{href:"/builder/en/api/config-output.html#outputpolyfill",children:"output.polyfill"})," to ",(0,i.jsx)(s.code,{children:"usage"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["In ",(0,i.jsx)(s.code,{children:"usage"})," mode, Builder analyzes the syntax used in the source code and injects the required polyfill code on demand to reduce the size of polyfill."]}),"\n",(0,i.jsxs)(s.div,{className:"language-js",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    polyfill"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'usage'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive tip",children:[(0,i.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsxs)(s.p,{children:["\nPlease read the ",(0,i.jsx)(s.a,{href:"/builder/en/guide/advanced/browser-compatibility.html",children:"Browser Compatibility"}),"chapter to know more about the usage of Browserslist."]})})]}),"\n",(0,i.jsxs)(s.h2,{id:"image-compression",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#image-compression",children:"#"}),"Image Compression"]}),"\n",(0,i.jsx)(s.p,{children:"In general front-end projects, the size of image often accounts for a large proportion of the total bundle size of the project.So if the image size can be reduced as much as possible, it will have a significant optimization effect on the project bundle size. You can enable image compression by registering a plugin in the Builder:"}),"\n",(0,i.jsxs)(s.div,{className:"language-js",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { builderPluginImageCompress } "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/builder-plugin-image-compress'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Add the plugin to the Builder"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"builder"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".addPlugins"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"builderPluginImageCompress"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()]);"})]}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["See details in ",(0,i.jsx)(s.a,{href:"/builder/en/plugins/plugin-image-compress.html",children:"plugin-image-compress"}),"。"]}),"\n",(0,i.jsxs)(s.h2,{id:"split-chunk",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#split-chunk",children:"#"}),"Split Chunk"]}),"\n",(0,i.jsx)(s.p,{children:"A great chunk splitting strategy is very important to improve the loading performance of the application. It can make full use of the browser's caching mechanism to reduce the number of requests and improve the loading speed of the application."}),"\n",(0,i.jsxs)(s.p,{children:["A variety of ",(0,i.jsx)(s.a,{href:"/builder/en/guide/optimization/split-chunk.html",children:"chunk splitting strategies"})," are built into Builder, which can meet the needs of most applications. You can also customize the chunk splitting config according to your own business scenarios."]}),"\n",(0,i.jsxs)(s.p,{children:["For example, split the ",(0,i.jsx)(s.code,{children:"axios"})," library under node_modules into ",(0,i.jsx)(s.code,{children:"axios.js"}),":"]}),"\n",(0,i.jsxs)(s.div,{className:"language-js",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  performance"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    chunkSplit"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      strategy"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'split-by-experience'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      forceSplitting"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        axios"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:" /node_modules\\/axios/"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}}}]);