(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_hooks_config_storybook_mdx"],{43255:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return t}});var r,s=n("15169"),i=n("43932"),c=n("9880"),a=n("23169");function d(e){var o=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li"},(0,a.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o.h1,{id:"storybook/",children:["storybook/",(0,c.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook/",children:"#"})]}),"\n",(0,c.jsx)(o.p,{children:"Modern.js 支持使用 Storybook 进行调试，当需要对 Storybook 进行配置时，需要在项目 config/storybook 目录进行配置。"}),"\n",(0,c.jsxs)(o.p,{children:["Storybook 配置请查看：",(0,c.jsx)(o.a,{href:"https://storybook.js.org/docs/react/configure/overview",target:"_blank",rel:"noopener noreferrer",children:"Storybook 配置"})]}),"\n",(0,c.jsxs)(o.div,{className:"modern-directive info",children:[(0,c.jsx)(o.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(o.div,{className:"modern-directive-content",children:[(0,c.jsx)(o.p,{children:"使用 Storybook 进行调试需要提前在项目下执行 new 命令启用「Visual Testing (Storybook)」模式功能。"}),"\n"]})]}),"\n",(0,c.jsxs)(o.h3,{id:"示例",children:["示例",(0,c.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsxs)(o.p,{children:["对于 Storybook Manager app 部分的 webpack 配置，可以通过增加 ",(0,c.jsx)(o.code,{children:"./config/storybook/main.js"})," 文件进行配置。"]}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-js",children:"// ./config/storybook/main.js\n\nmodule.exports = {\n  // it controls the Storybook manager app\n  managerWebpack: async (config, options) => {\n    // update config here\n    return config;\n  },\n};\n"})}),"\n",(0,c.jsxs)(o.h3,{id:"限制",children:["限制",(0,c.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#限制",children:"#"})]}),"\n",(0,c.jsx)(o.p,{children:"在使用 config/storybook 目录进行配置时，存在以下限制："}),"\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsxs)(o.li,{children:["不能修改 Story 文件存放的位置，即无法在 ",(0,c.jsx)(o.code,{children:"main.js"})," 文件里修改 ",(0,c.jsx)(o.code,{children:"stories"})," 配置。"]}),"\n",(0,c.jsxs)(o.li,{children:["不支持在 ",(0,c.jsx)(o.code,{children:"main.js"})," 中修改 Webpack 和 Babel 相关配置，相关需求可通过 ",(0,c.jsx)(o.a,{href:"/configure/app/tools/webpack",children:(0,c.jsx)(o.code,{children:"tools.webpack"})})," / ",(0,c.jsx)(o.a,{href:"/configure/app/tools/babel",children:(0,c.jsx)(o.code,{children:"tools.babel"})})," 修改。"]}),"\n"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/zh/apis/app/hooks/config/storybook.mdx"]={toc:[{text:"示例",id:"示例",depth:3},{text:"限制",id:"限制",depth:3}],title:"storybook/",frontmatter:{title:"storybook/",sidebar_position:7}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return o?(0,c.jsx)(o,i._(s._({},e),{children:(0,c.jsx)(d,s._({},e))})):d(e)}}}]);