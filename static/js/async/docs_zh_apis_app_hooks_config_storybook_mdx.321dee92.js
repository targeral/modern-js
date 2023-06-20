(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_hooks_config_storybook_mdx"],{1881:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var o in n)Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return t},default:function(){return d}});var r=o("9880"),s=o("23169"),i={title:"storybook/",sidebar_position:7},c="storybook/",t=[{text:"示例",depth:3,id:"示例"},{text:"限制",depth:3,id:"限制"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"storybook/",children:["storybook/",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook/",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js 支持使用 Storybook 进行调试，当需要对 Storybook 进行配置时，需要在项目 config/storybook 目录进行配置。"}),"\n",(0,r.jsxs)(n.p,{children:["Storybook 配置请查看：",(0,r.jsx)(n.a,{href:"https://storybook.js.org/docs/react/configure/overview",target:"_blank",rel:"noopener noreferrer",children:"Storybook 配置"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsx)(n.p,{children:"使用 Storybook 进行调试需要提前在项目下执行 new 命令启用「Visual Testing (Storybook)」模式功能。"}),"\n"]})]}),"\n",(0,r.jsxs)(n.h3,{id:"示例",children:["示例",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["对于 Storybook Manager app 部分的 webpack 配置，可以通过增加 ",(0,r.jsx)(n.code,{children:"./config/storybook/main.js"})," 文件进行配置。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// ./config/storybook/main.js\n\nmodule.exports = {\n  // it controls the Storybook manager app\n  managerWebpack: async (config, options) => {\n    // update config here\n    return config;\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"限制",children:["限制",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#限制",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在使用 config/storybook 目录进行配置时，存在以下限制："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["不能修改 Story 文件存放的位置，即无法在 ",(0,r.jsx)(n.code,{children:"main.js"})," 文件里修改 ",(0,r.jsx)(n.code,{children:"stories"})," 配置。"]}),"\n",(0,r.jsxs)(n.li,{children:["不支持在 ",(0,r.jsx)(n.code,{children:"main.js"})," 中修改 Webpack 和 Babel 相关配置，相关需求可通过 ",(0,r.jsx)(n.a,{href:"/configure/app/tools/webpack",children:(0,r.jsx)(n.code,{children:"tools.webpack"})})," / ",(0,r.jsx)(n.a,{href:"/configure/app/tools/babel",children:(0,r.jsx)(n.code,{children:"tools.babel"})})," 修改。"]}),"\n"]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);