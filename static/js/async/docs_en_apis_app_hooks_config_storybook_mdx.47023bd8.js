(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_hooks_config_storybook_mdx"],{50442:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return d}});var i,r=n("15169"),t=n("43932"),s=n("9880"),a=n("23169");function c(e){var o=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h4:"h4",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,a.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.h1,{id:"storybook",children:["storybook/",(0,s.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook",children:"#"})]}),"\n",(0,s.jsxs)(o.p,{children:["Modern.js supports debugging using Storybook. When configuring Storybook, you need to configure it in the ",(0,s.jsx)(o.code,{children:"config/storybook"})," directory of the project."]}),"\n",(0,s.jsxs)(o.p,{children:["Please refer to ",(0,s.jsx)(o.a,{href:"https://storybook.js.org/docs/react/configure/overview",target:"_blank",rel:"noopener noreferrer",children:"Storybook Configuration"})," for Storybook configuration."]}),"\n",(0,s.jsxs)(o.div,{className:"modern-directive info",children:[(0,s.jsx)(o.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(o.div,{className:"modern-directive-content",children:[(0,s.jsx)(o.p,{children:"Enabling the Visual Testing (Storybook) mode function requires running the new command to enable it under the project first."}),"\n"]})]}),"\n",(0,s.jsxs)(o.h4,{id:"example",children:["Example",(0,s.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsxs)(o.p,{children:["For the webpack configuration of the Storybook Manager app section, you can configure it by adding the ",(0,s.jsx)(o.code,{children:"./config/storybook/main.js"})," file to configure it."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-js",children:"// ./config/storybook/main.js\n\nmodule.exports = {\n  // it controls the Storybook manager app\n  managerWebpack: async (config, options) => {\n    // update config here\n    return config;\n  },\n};\n"})}),"\n",(0,s.jsxs)(o.h3,{id:"limitation",children:["Limitation",(0,s.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#limitation",children:"#"})]}),"\n",(0,s.jsxs)(o.p,{children:["There are some limitations when using the ",(0,s.jsx)(o.code,{children:"config/storybook"})," directory for configuration:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["The location where the Story file is stored cannot be modified, that is, the ",(0,s.jsx)(o.code,{children:"stories"})," configuration cannot be modified in the ",(0,s.jsx)(o.code,{children:"main.js"})," file."]}),"\n",(0,s.jsxs)(o.li,{children:["It is not supported to modify Webpack and Babel related configurations in ",(0,s.jsx)(o.code,{children:"main.js"}),", related requirements can be passed through ",(0,s.jsx)(o.a,{href:"/configure/app/tools/webpack",children:(0,s.jsx)(o.code,{children:"tools.webpack"})})," /",(0,s.jsx)(o.a,{href:"/configure/app/tools/babel",children:(0,s.jsx)(o.code,{children:"tools.babel"})})," modify."]}),"\n"]})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fhooks%2Fconfig%2Fstorybook.mdx"]={toc:[{text:"Example",id:"example",depth:4},{text:"Limitation",id:"limitation",depth:3}],title:"storybook/",frontmatter:{title:"storybook/",sidebar_position:7}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return o?(0,s.jsx)(o,(0,t._)((0,r._)({},e),{children:(0,s.jsx)(c,(0,r._)({},e))})):c(e)}}}]);