"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[6575],{90356:function(s,l,e){e.r(l),e.d(l,{content:function(){return o},frontmatter:function(){return c},toc:function(){return r}});var n=e(39980);const c=void 0,r=[{id:"object-\u7c7b\u578b",text:"Object \u7c7b\u578b",depth:3},{id:"function-\u7c7b\u578b",text:"Function \u7c7b\u578b",depth:3},{id:"\u5de5\u5177\u51fd\u6570",text:"\u5de5\u5177\u51fd\u6570",depth:3},{id:"addexcludes",text:"addExcludes",depth:4}],o='"- Type: `Object | Function`\\n- Default:\\n\\n```js\\nconst defaultOptions = {\\n  lessOptions: {\\n    javascriptEnabled: true,\\n  },\\n  // \u9ed8\u8ba4\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u542f\u7528 CSS \u7684 Source Map\\n  sourceMap: isDev,\\n};\\n```\\n\\n\u4f60\u53ef\u4ee5\u901a\u8fc7 `tools.less` \u4fee\u6539 [less-loader](https://github.com/webpack-contrib/less-loader) \u7684\u914d\u7f6e\u3002\\n\\n### Object \u7c7b\u578b\\n\\n\u5f53 `tools.less` \u7684\u503c\u4e3a `Object` \u7c7b\u578b\u65f6\uff0c\u4f1a\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 Object.assign \u8fdb\u884c\u6d45\u5c42\u5408\u5e76\uff0c\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c`lessOptions` \u4f1a\u901a\u8fc7 deepMerge \u8fdb\u884c\u6df1\u5c42\u5408\u5e76\u3002\\n\\n```js\\nexport default {\\n  tools: {\\n    less: {\\n      lessOptions: {\\n        javascriptEnabled: false,\\n      },\\n    },\\n  },\\n};\\n```\\n\\n### Function \u7c7b\u578b\\n\\n\u5f53 `tools.less` \u4e3a Function \u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u503c\u4f5c\u4e3a\u6700\u7ec8\u7ed3\u679c\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u63d0\u4f9b\u4e86\u4e00\u4e9b\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u7684\u5de5\u5177\u51fd\u6570\uff1a\\n\\n```js\\nexport default {\\n  tools: {\\n    less(config) {\\n      // \u4fee\u6539 lessOptions \u914d\u7f6e\\n      config.lessOptions = {\\n        javascriptEnabled: false,\\n      };\\n    },\\n  },\\n};\\n```\\n\\n### \u5de5\u5177\u51fd\u6570\\n\\n#### addExcludes\\n\\n- Type: `(excludes: RegExp | RegExp[]) => void`\\n\\n\u7528\u6765\u6307\u5b9a `less-loader` \u4e0d\u7f16\u8bd1\u54ea\u4e9b\u6587\u4ef6\uff0c\u4f60\u53ef\u4ee5\u4f20\u5165\u4e00\u4e2a\u6216\u591a\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u6765\u5339\u914d less \u6587\u4ef6\u7684\u8def\u5f84\u3002\u4f8b\u5982\uff1a\\n\\n```js\\nexport default {\\n  tools: {\\n    less(config, { addExcludes }) {\\n      addExcludes(/node_modules/);\\n    },\\n  },\\n};\\n```\\n"';function a(s){const l=Object.assign({ul:"ul",li:"li",code:"code",div:"div",button:"button",pre:"pre",span:"span",p:"p",a:"a",h3:"h3",h4:"h4"},s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["Type: ",(0,n.jsx)(l.code,{children:"Object | Function"})]}),"\n",(0,n.jsx)(l.li,{children:"Default:"}),"\n"]}),"\n",(0,n.jsxs)(l.div,{className:"language-js",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"const"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"defaultOptions"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"lessOptions"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"javascriptEnabled"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"true"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#616E88"},children:"// \u9ed8\u8ba4\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u542f\u7528 CSS \u7684 Source Map"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"sourceMap"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"isDev"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(l.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,n.jsx)(l.code,{children:"tools.less"})," \u4fee\u6539 ",(0,n.jsx)(l.a,{href:"https://github.com/webpack-contrib/less-loader",target:"_blank",rel:"nofollow",children:"less-loader"})," \u7684\u914d\u7f6e\u3002"]}),"\n",(0,n.jsxs)(l.h3,{id:"object-\u7c7b\u578b",children:[(0,n.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7c7b\u578b",children:"#"}),"Object \u7c7b\u578b"]}),"\n",(0,n.jsxs)(l.p,{children:["\u5f53 ",(0,n.jsx)(l.code,{children:"tools.less"})," \u7684\u503c\u4e3a ",(0,n.jsx)(l.code,{children:"Object"})," \u7c7b\u578b\u65f6\uff0c\u4f1a\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 Object.assign \u8fdb\u884c\u6d45\u5c42\u5408\u5e76\uff0c\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c",(0,n.jsx)(l.code,{children:"lessOptions"})," \u4f1a\u901a\u8fc7 deepMerge \u8fdb\u884c\u6df1\u5c42\u5408\u5e76\u3002"]}),"\n",(0,n.jsxs)(l.div,{className:"language-js",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"tools"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"less"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"lessOptions"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"javascriptEnabled"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"false"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(l.h3,{id:"function-\u7c7b\u578b",children:[(0,n.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#function-\u7c7b\u578b",children:"#"}),"Function \u7c7b\u578b"]}),"\n",(0,n.jsxs)(l.p,{children:["\u5f53 ",(0,n.jsx)(l.code,{children:"tools.less"})," \u4e3a Function \u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u503c\u4f5c\u4e3a\u6700\u7ec8\u7ed3\u679c\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u63d0\u4f9b\u4e86\u4e00\u4e9b\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u7684\u5de5\u5177\u51fd\u6570\uff1a"]}),"\n",(0,n.jsxs)(l.div,{className:"language-js",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"tools"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"less"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"config"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:")"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#616E88"},children:"// \u4fee\u6539 lessOptions \u914d\u7f6e"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"config"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"."}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"lessOptions"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"javascriptEnabled"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"false"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(l.h3,{id:"\u5de5\u5177\u51fd\u6570",children:[(0,n.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5de5\u5177\u51fd\u6570",children:"#"}),"\u5de5\u5177\u51fd\u6570"]}),"\n",(0,n.jsxs)(l.h4,{id:"addexcludes",children:[(0,n.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"}),"addExcludes"]}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["Type: ",(0,n.jsx)(l.code,{children:"(excludes: RegExp | RegExp[]) => void"})]}),"\n"]}),"\n",(0,n.jsxs)(l.p,{children:["\u7528\u6765\u6307\u5b9a ",(0,n.jsx)(l.code,{children:"less-loader"})," \u4e0d\u7f16\u8bd1\u54ea\u4e9b\u6587\u4ef6\uff0c\u4f60\u53ef\u4ee5\u4f20\u5165\u4e00\u4e2a\u6216\u591a\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u6765\u5339\u914d less \u6587\u4ef6\u7684\u8def\u5f84\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,n.jsxs)(l.div,{className:"language-js",children:[(0,n.jsx)(l.div,{className:""}),(0,n.jsxs)(l.div,{className:"modern-code-content",children:[(0,n.jsx)(l.button,{className:"copy"}),(0,n.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(l.code,{children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"tools"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"less"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"config"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9"},children:"addExcludes"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"})"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(l.span,{style:{color:"#88C0D0"},children:"addExcludes"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"/"}),(0,n.jsx)(l.span,{style:{color:"#EBCB8B"},children:"node_modules"}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"/"}),(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(l.span,{className:"line"})]})})]})]})]})}l.default=function(s={}){const{wrapper:l}=s.components||{};return l?(0,n.jsx)(l,Object.assign({},s,{children:(0,n.jsx)(a,s)})):a(s)}}}]);