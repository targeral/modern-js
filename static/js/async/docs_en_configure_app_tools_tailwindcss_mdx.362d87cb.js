(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_tailwindcss_mdx"],{403:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return r},default:function(){return d}});var i=s("12151"),t=s("23169"),c={sidebar_label:"tailwindcss"},o="tools.tailwindcss",r=[{text:"Function Type",depth:3,id:"function-type"},{text:"Object Type",depth:3,id:"object-type"},{text:"Limitations",depth:3,id:"limitations"}];function a(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",h3:"h3",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"tools-tailwindcss",children:["tools.tailwindcss",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tools-tailwindcss",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"const tailwind = {\n  content: [\n    './config/html/**/*.html',\n    './config/html/**/*.ejs',\n    './config/html/**/*.hbs',\n    './src/**/*.js',\n    './src/**/*.jsx',\n    './src/**/*.ts',\n    './src/**/*.tsx',\n    './storybook/**/*',\n  ],\n  // Use source.design System config as Tailwind CSS theme config\n  theme: source.designSystem,\n};\n"})})]})}),"\n",(0,i.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"tools.tailwindcss"}),"'s type is Function, the default tailwindcss config will be passed in as the first parameter, the config object can be modified directly, or a value can be returned as the final result."]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    tailwindcss(config) {\n      config.content.push('./some-folder/**/*.{js,ts}');\n    },\n  },\n};\n"})})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"tools.tailwindcss"}),"'s type is ",(0,i.jsx)(n.code,{children:"Object"}),", the config will be shallow merged with default config by ",(0,i.jsx)(n.code,{children:"Object.assign"}),"."]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    tailwindcss: {\n      plugins: [\n        require('@tailwindcss/forms'),\n        require('@tailwindcss/aspect-ratio'),\n        require('@tailwindcss/typography'),\n      ],\n    },\n  },\n};\n"})})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"limitations",children:["Limitations",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#limitations",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"theme"})," attribute is not allowed, otherwise the build will fail. Modern.js use ",(0,i.jsx)(n.a,{href:"/configure/app/source/design-system",children:"source.designSystem"})," as the Tailwind CSS Theme configuration."]}),"\n",(0,i.jsxs)(n.p,{children:["Other uses are consistent with ",(0,i.jsx)(n.a,{href:"https://tailwindcss.com/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"}),"."]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);