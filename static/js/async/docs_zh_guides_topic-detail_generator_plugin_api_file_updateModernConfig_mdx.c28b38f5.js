(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_file_updateModernConfig_mdx"],{48755:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return o},title:function(){return c},toc:function(){return s},default:function(){return t}});var r=d("9880"),i=d("23169"),o={sidebar_position:8},c="updateModernConfig",s=[{text:"updateInfo",depth:2,id:"updateinfo"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",h2:"h2"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"updatemodernconfig",children:["updateModernConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updatemodernconfig",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["更新 ",(0,r.jsx)(n.code,{children:"package.json"})," 中 ",(0,r.jsx)(n.code,{children:"modernConfig"})," 字段。"]}),"\n",(0,r.jsxs)(n.p,{children:["该方法可在 ",(0,r.jsx)(n.code,{children:"onForged"})," 生命周期的 api 参数上获取。"]}),"\n",(0,r.jsx)(n.p,{children:"其类型定义为："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export type ForgedAPI = {\n  updateModernConfig: (updateInfo: Record<string, any>) => Promise<void>;\n  ...\n};\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"updateinfo",children:["updateInfo",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updateinfo",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"字段更新信息。"}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["该函数为 updateJSONFile 的封装，将自动更新 ",(0,r.jsx)(n.code,{children:"package.json"})," 的 ",(0,r.jsx)(n.code,{children:"modernConfig"})," 字段 ",(0,r.jsx)(n.code,{children:"updateInfo"})," 中只需填写相对于 ",(0,r.jsx)(n.code,{children:"modernConfig"})," 的更新信息即可。"]}),"\n"]})]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);