(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_basic_css-usage_md"],{28006:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return c}});var r,i=n("15169"),t=n("43932"),o=n("9880"),l=n("23169");function a(e){var s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li",div:"div"},(0,l.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.h1,{id:"css-usage",children:["CSS Usage",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#css-usage",children:"#"})]}),"\n",(0,o.jsx)(s.p,{children:"Builder has built-in multiple style resource processing capabilities, including Less / Sass preprocessor, PostCSS, CSS Modules, CSS inline and CSS compression."}),"\n",(0,o.jsx)(s.p,{children:"In addition, Builder also provides multiple configs to customize the compile rules of style resources."}),"\n",(0,o.jsxs)(s.h2,{id:"using-less,-sass-and-stylus",children:["Using Less, Sass and Stylus",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#using-less,-sass-and-stylus",children:"#"})]}),"\n",(0,o.jsx)(s.p,{children:"The Builder has built-in community popular CSS preprocessors such as Less, Sass."}),"\n",(0,o.jsxs)(s.p,{children:["By default, you don't need to configure anything for Less and Sass. If you need to customize loader config, you can configure ",(0,o.jsx)(s.a,{href:"/en/api/config-tools#toolsless",children:"tools.less"}),", ",(0,o.jsx)(s.a,{href:"/en/api/config-tools#toolssass",children:"tools.sass"})," to set it up."]}),"\n",(0,o.jsxs)(s.p,{children:["You can also use Stylus in Builder, just install the Stylus plugin provided by Builder, please refer to ",(0,o.jsx)(s.a,{href:"/plugins/plugin-stylus",children:"Stylus Plugin"})," for usage."]}),"\n",(0,o.jsxs)(s.h2,{id:"using-postcss",children:["Using PostCSS",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#using-postcss",children:"#"})]}),"\n",(0,o.jsxs)(s.p,{children:["Builder has built-in ",(0,o.jsx)(s.a,{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer",children:"PostCSS"})," to transform the CSS code. You can configure the postcss-loader via ",(0,o.jsx)(s.a,{href:"/en/api/config-tools#toolspostcss",children:"tools.postcss"}),"."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",children:"export default {\n  tools: {\n    postcss: opts => {\n      const viewportPlugin = require('postcss-px-to-viewport')({\n        viewportWidth: 375,\n      });\n      opts.postcssOptions.plugins.push(viewportPlugin);\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(s.h3,{id:"builtin-postcss-plugins",children:["Builtin PostCSS plugins",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#builtin-postcss-plugins",children:"#"})]}),"\n",(0,o.jsx)(s.p,{children:"Builder has some builtin PostCSS plugins, which will perform the following transformations on CSS:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"}),": we have enabled ",(0,o.jsx)(s.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"})," to add vendor prefixes to CSS rules. If you want to configure the target browser, you can use ",(0,o.jsx)(s.a,{href:"/en/api/config-output#outputoverridebrowserslist",children:"output.overrideBrowserslist"})," config."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-nested",target:"_blank",rel:"noopener noreferrer",children:"postcss-nesting"}),": Provide ",(0,o.jsx)(s.a,{href:"https://drafts.csswg.org/css-nesting-1/",target:"_blank",rel:"noopener noreferrer",children:"CSS Nesting"})," support, you can Use nested writing in CSS, such as:"]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-css",children:".my-table {\n  & td {\n    text-align: center;\n\n    &.c {\n      text-transform: uppercase;\n    }\n  }\n}\n"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-flexbugs-fixes",target:"_blank",rel:"noopener noreferrer",children:"postcss-flexbugs-fixes"}),": Used to fix known ",(0,o.jsx)(s.a,{href:"https://github.com/philipwalton/flexbugs",target:"_blank",rel:"noopener noreferrer",children:"Flex Bugs"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-initial",target:"_blank",rel:"noopener noreferrer",children:"postcss-initial"}),": Enabled only when it needs to be compatible with legacy browsers, providing the ",(0,o.jsxs)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/initial_value",target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)(s.code,{children:"initial"})," attribute value"]})," compatible."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-page-break",target:"_blank",rel:"noopener noreferrer",children:"postcss-page-break"}),": Enabled only when compatibility with legacy browsers is required, providing support for ",(0,o.jsxs)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/break-after",target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)(s.code,{children:"break-"})," attribute"]}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-font-variant",target:"_blank",rel:"noopener noreferrer",children:"postcss-font-variant"}),": Enabled only when compatibility with legacy browsers is required, providing support for ",(0,o.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(s.code,{children:"font-variant"})}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-media-minmax",target:"_blank",rel:"noopener noreferrer",children:"postcss-media-minmax"}),": Enabled only when compatibility with legacy browsers is required, providing support for ",(0,o.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#syntax_improvements_in_level_4",target:"_blank",rel:"noopener noreferrer",children:"Media Query Ranges"})," compatibility."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-custom-properties",target:"_blank",rel:"noopener noreferrer",children:"postcss-custom-properties"}),": Only enabled when compatibility with legacy browsers is required, providing support for ",(0,o.jsx)(s.a,{href:"https://www.w3.org/TR/css-variables-1/",target:"_blank",rel:"noopener noreferrer",children:"Custom Properties"}),", you can define and use custom variables in CSS, such as:"]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-css",children:":root {\n  --main-bg-color: pink;\n}\n\nbody {\n  background-color: var(--main-bg-color);\n}\n"})}),"\n",(0,o.jsxs)(s.h2,{id:"using-css-modules",children:["Using CSS Modules",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#using-css-modules",children:"#"})]}),"\n",(0,o.jsxs)(s.p,{children:["Please read the ",(0,o.jsx)(s.a,{href:"/guide/basic/css-modules",children:"Using CSS Modules"})," chapter for a complete usage of CSS Modules."]}),"\n",(0,o.jsxs)(s.h2,{id:"css-minify",children:["CSS Minify",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#css-minify",children:"#"})]}),"\n",(0,o.jsx)(s.p,{children:"Usually, in production environments we compress static resources such as CSS, JS, etc. to achieve better transfer efficiency."}),"\n",(0,o.jsxs)(s.p,{children:["Builder automatically compresses CSS code at production build time with ",(0,o.jsx)(s.a,{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"css-minimizer-webpack-plugin"})," (The compression tool used at the bottom is ",(0,o.jsx)(s.a,{href:"https://cssnano.co/",target:"_blank",rel:"noopener noreferrer",children:"cssnano"}),")."]}),"\n",(0,o.jsxs)(s.p,{children:["You can configure ",(0,o.jsx)(s.a,{href:"/en/api/config-tools#toolsminifycss",children:"tools.minifyCss"})," to make it more customizable."]}),"\n",(0,o.jsxs)(s.div,{className:"modern-directive tip",children:[(0,o.jsx)(s.div,{className:"modern-directive-title",children:"About cssnano"}),(0,o.jsx)(s.div,{className:"modern-directive-content",children:(0,o.jsx)(s.p,{children:"cssnano is a tool for optimizing and minifying CSS files. It reduces the size of CSS files by removing unused rules, merging similar rules, removing comments and whitespace, and converting length units, among other techniques, to improve the loading speed of websites."})})]}),"\n",(0,o.jsxs)(s.h2,{id:"inline-css-files",children:["Inline CSS Files",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#inline-css-files",children:"#"})]}),"\n",(0,o.jsxs)(s.p,{children:["By default, Builder will extract CSS into a separate ",(0,o.jsx)(s.code,{children:".css"})," file and output it to the dist directory."]}),"\n",(0,o.jsxs)(s.p,{children:["If you want to inline styles into your JS file, you can set ",(0,o.jsx)(s.a,{href:"/en/api/config-output#outputdisablecssextract",children:"output.disableCssExtract"})," to true to disable CSS extraction logic.When the JS file is requested by the browser, JS dynamically inserts the ",(0,o.jsx)(s.code,{children:"<style>"})," tag into the Html to load the CSS styles."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    disableCssExtract: true,\n  },\n};\n"})}),"\n",(0,o.jsx)(s.p,{children:"This will increase the size of your JS Bundle, so it is usually not recommended to disable the CSS extraction."}),"\n",(0,o.jsxs)(s.h2,{id:"import-css-in-node_modules",children:["Import CSS in node_modules",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#import-css-in-node_modules",children:"#"})]}),"\n",(0,o.jsx)(s.p,{children:"You can directly import CSS files in node_modules."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Import in a component:"}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",meta:'title="src/App.tsx"',children:"// Import the Arco Design style:\nimport '@arco-design/web-react/dist/css/arco.css';\n"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Import in a style file:"}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-css",meta:'title="src/App.css"',children:"/* reference normalize.css */\n/* https://github.com/necolas/normalize.css */\n@import 'normalize.css';\n\nbody {\n  /* */\n}\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/builder-doc/docs/en/guide/basic/css-usage.md"]={toc:[{text:"Using Less, Sass and Stylus",id:"using-less,-sass-and-stylus",depth:2},{text:"Using PostCSS",id:"using-postcss",depth:2},{text:"Builtin PostCSS plugins",id:"builtin-postcss-plugins",depth:3},{text:"Using CSS Modules",id:"using-css-modules",depth:2},{text:"CSS Minify",id:"css-minify",depth:2},{text:"Inline CSS Files",id:"inline-css-files",depth:2},{text:"Import CSS in node_modules",id:"import-css-in-node_modules",depth:2}],title:"CSS Usage",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return s?(0,o.jsx)(s,t._(i._({},e),{children:(0,o.jsx)(a,i._({},e))})):a(e)}}}]);