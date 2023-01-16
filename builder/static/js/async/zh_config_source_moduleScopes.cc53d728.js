"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[3143],{98482:function(s,l,e){e.r(l),e.d(l,{content:function(){return o},frontmatter:function(){return c},toc:function(){return r}});var n=e(39980);const c=void 0,r=[{id:"\u793a\u4f8b",text:"\u793a\u4f8b",depth:4},{id:"array-\u7c7b\u578b",text:"Array \u7c7b\u578b",depth:4},{id:"function-\u7c7b\u578b",text:"Function \u7c7b\u578b",depth:4}],o="\"- Type: `Array<string | Regexp> | Function`\\n- Default: `undefined`\\n\\n\u9650\u5236\u6e90\u4ee3\u7801\u7684\u5f15\u7528\u8def\u5f84\u3002\u914d\u7f6e\u8be5\u9009\u9879\u540e\uff0c\u6240\u6709\u6e90\u6587\u4ef6\u53ea\u80fd\u4ece\u7ea6\u5b9a\u7684\u76ee\u5f55\u4e0b\u5f15\u7528\u4ee3\u7801\uff0c\u4ece\u5176\u4ed6\u76ee\u5f55\u5f15\u7528\u4ee3\u7801\u4f1a\u4ea7\u751f\u5bf9\u5e94\u7684\u62a5\u9519\u63d0\u793a\u3002\\n\\n#### \u793a\u4f8b\\n\\n\u9996\u5148\u6211\u4eec\u914d\u7f6e `moduleScopes` \u4ec5\u5305\u542b `src` \u76ee\u5f55\uff1a\\n\\n```js\\nexport default {\\n  source: {\\n    moduleScopes: ['./src'],\\n  },\\n};\\n```\\n\\n\u7136\u540e\u5728 `src/App.tsx` \u4e2d\u5bfc\u5165 `src` \u76ee\u5f55\u5916\u90e8\u7684 `utils/a` \u6a21\u5757:\\n\\n```js\\nimport a from '../utils/a';\\n```\\n\\n\u5728\u7f16\u8bd1\u65f6\uff0c\u4f1a\u63d0\u793a\u5f15\u7528\u8def\u5f84\u9519\u8bef:\\n\\n![scopes-error](https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/module-scopes-error.png)\\n\\n\u901a\u8fc7\u8be5\u9009\u9879\u914d\u7f6e `utils` \u76ee\u5f55\uff0c\u518d\u8fdb\u884c\u7f16\u8bd1\uff0c\u5219\u4e0d\u4f1a\u51fa\u73b0\u9519\u8bef\u63d0\u793a\u3002\\n\\n```js\\nexport default {\\n  source: {\\n    moduleScopes: ['./src', './utils'],\\n  },\\n};\\n```\\n\\n#### Array \u7c7b\u578b\\n\\n\u5f53 `moduleScopes` \u7684\u503c\u4e3a `Array` \u7c7b\u578b\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bbe\u7f6e\u82e5\u5e72\u4e2a\u4ee3\u7801\u8def\u5f84\uff0c\u6bd4\u5982\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a\\n\\n```js\\nexport default {\\n  source: {\\n    moduleScopes: ['./src', './shared', './utils'],\\n  },\\n};\\n```\\n\\n#### Function \u7c7b\u578b\\n\\n`moduleScopes` \u4e5f\u652f\u6301\u901a\u8fc7\u51fd\u6570\u7684\u5f62\u5f0f\u6765\u8fdb\u884c\u4fee\u6539\uff0c\u907f\u514d\u8986\u76d6\u9ed8\u8ba4\u503c\uff1a\\n\\n```js\\nexport default {\\n  source: {\\n    moduleScopes: scopes => {\\n      scopes.push('./shared');\\n    },\\n  },\\n};\\n```\\n\"";function a(s){const l=Object.assign({ul:"ul",li:"li",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre",span:"span",img:"img"},s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["Type: ",(0,n.jsx)(l.code,{children:"Array<string | Regexp> | Function"})]}),"\n",(0,n.jsxs)(l.li,{children:["Default: ",(0,n.jsx)(l.code,{children:"undefined"})]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"\u9650\u5236\u6e90\u4ee3\u7801\u7684\u5f15\u7528\u8def\u5f84\u3002\u914d\u7f6e\u8be5\u9009\u9879\u540e\uff0c\u6240\u6709\u6e90\u6587\u4ef6\u53ea\u80fd\u4ece\u7ea6\u5b9a\u7684\u76ee\u5f55\u4e0b\u5f15\u7528\u4ee3\u7801\uff0c\u4ece\u5176\u4ed6\u76ee\u5f55\u5f15\u7528\u4ee3\u7801\u4f1a\u4ea7\u751f\u5bf9\u5e94\u7684\u62a5\u9519\u63d0\u793a\u3002"}),"\n",(0,n.jsxs)(l.h4,{id:"\u793a\u4f8b",children:[(0,n.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793a\u4f8b",children:"#"}),"\u793a\u4f8b"]}),"\n",(0,n.jsxs)(l.p,{children:["\u9996\u5148\u6211\u4eec\u914d\u7f6e ",(0,n.jsx)(l.code,{children:"moduleScopes"})," \u4ec5\u5305\u542b ",(0,n.jsx)(l.code,{children:"src"})," \u76ee\u5f55\uff1a"]}),"\n",(0,n.jsxs)(l.div,{className:"language-js",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"source"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"moduleScopes"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"./src"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(l.p,{children:["\u7136\u540e\u5728 ",(0,n.jsx)(l.code,{children:"src/App.tsx"})," \u4e2d\u5bfc\u5165 ",(0,n.jsx)(l.code,{children:"src"})," \u76ee\u5f55\u5916\u90e8\u7684 ",(0,n.jsx)(l.code,{children:"utils/a"})," \u6a21\u5757:"]}),"\n",(0,n.jsxs)(l.div,{className:"language-js",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"import"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#8FBCBB"},children:"a"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"from"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"../utils/a"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,n.jsx)(l.p,{children:"\u5728\u7f16\u8bd1\u65f6\uff0c\u4f1a\u63d0\u793a\u5f15\u7528\u8def\u5f84\u9519\u8bef:"}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/module-scopes-error.png",alt:"scopes-error"})}),"\n",(0,n.jsxs)(l.p,{children:["\u901a\u8fc7\u8be5\u9009\u9879\u914d\u7f6e ",(0,n.jsx)(l.code,{children:"utils"})," \u76ee\u5f55\uff0c\u518d\u8fdb\u884c\u7f16\u8bd1\uff0c\u5219\u4e0d\u4f1a\u51fa\u73b0\u9519\u8bef\u63d0\u793a\u3002"]}),"\n",(0,n.jsxs)(l.div,{className:"language-js",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"source"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"moduleScopes"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"./src"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"./utils"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(l.h4,{id:"array-\u7c7b\u578b",children:[(0,n.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#array-\u7c7b\u578b",children:"#"}),"Array \u7c7b\u578b"]}),"\n",(0,n.jsxs)(l.p,{children:["\u5f53 ",(0,n.jsx)(l.code,{children:"moduleScopes"})," \u7684\u503c\u4e3a ",(0,n.jsx)(l.code,{children:"Array"})," \u7c7b\u578b\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bbe\u7f6e\u82e5\u5e72\u4e2a\u4ee3\u7801\u8def\u5f84\uff0c\u6bd4\u5982\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"]}),"\n",(0,n.jsxs)(l.div,{className:"language-js",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"source"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"moduleScopes"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"./src"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"./shared"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"./utils"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(l.h4,{id:"function-\u7c7b\u578b",children:[(0,n.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#function-\u7c7b\u578b",children:"#"}),"Function \u7c7b\u578b"]}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"moduleScopes"})," \u4e5f\u652f\u6301\u901a\u8fc7\u51fd\u6570\u7684\u5f62\u5f0f\u6765\u8fdb\u884c\u4fee\u6539\uff0c\u907f\u514d\u8986\u76d6\u9ed8\u8ba4\u503c\uff1a"]}),"\n",(0,n.jsxs)(l.div,{className:"language-js",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"source"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"moduleScopes"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"scopes"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"=>"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"scopes"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"."}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"push"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#A3BE8C"},children:"./shared"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]})]})}l.default=function(s={}){const{wrapper:l}=s.components||{};return l?(0,n.jsx)(l,Object.assign({},s,{children:(0,n.jsx)(a,s)})):a(s)}}}]);