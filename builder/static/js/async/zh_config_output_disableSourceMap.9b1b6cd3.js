"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[8599],{16903:function(s,l,n){n.r(l),n.d(l,{content:function(){return o},frontmatter:function(){return c},toc:function(){return r}});var e=n(39980);const c=void 0,r=[],o="\"- **\u7c7b\u578b\uff1a**\\n\\n```ts\\ntype DisableSourceMap =\\n  | boolean\\n  | {\\n      js?: boolean;\\n      css?: boolean;\\n    };\\n```\\n\\n- **\u9ed8\u8ba4\u503c\uff1a**\\n\\n```ts\\nconst defaultDisableSourceMap = {\\n  js: false,\\n  css: process.env.NODE_ENV === 'production',\\n};\\n```\\n\\n\u662f\u5426\u7981\u7528 Source Map \u751f\u6210\u3002\\n\\n:::tip \u4ec0\u4e48\u662f Source Map\\nSource Map \u662f\u4fdd\u5b58\u6e90\u4ee3\u7801\u6620\u5c04\u5173\u7cfb\u7684\u4fe1\u606f\u6587\u4ef6\uff0c\u5b83\u8bb0\u5f55\u4e86\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u7684\u6bcf\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u4ee5\u53ca\u6240\u5bf9\u5e94\u7684\u7f16\u8bd1\u524d\u7684\u4f4d\u7f6e\u3002\u901a\u8fc7 Source Map\uff0c\u53ef\u4ee5\u5728\u8c03\u8bd5\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u65f6\uff0c\u76f4\u63a5\u67e5\u770b\u5bf9\u5e94\u7684\u6e90\u4ee3\u7801\u3002\\n:::\\n\\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cBuilder \u7684 Source Map \u751f\u6210\u89c4\u5219\u5982\u4e0b\uff1a\\n\\n- \u5728\u5f00\u53d1\u73af\u5883\u6784\u5efa\u65f6\uff0c\u4f1a\u751f\u6210 JS \u6587\u4ef6\u548c CSS \u6587\u4ef6\u7684 SourceMap\uff0c\u4fbf\u4e8e\u8fdb\u884c\u5f00\u53d1\u8c03\u8bd5\u3002\\n- \u5728\u751f\u4ea7\u73af\u5883\u6784\u5efa\u65f6\uff0c\u4f1a\u751f\u6210 JS \u6587\u4ef6\u7684 Source Map\uff0c\u7528\u4e8e\u8c03\u8bd5\u548c\u6392\u67e5\u7ebf\u4e0a\u95ee\u9898\uff1b\u4e0d\u4f1a\u751f\u6210 CSS \u6587\u4ef6\u7684 Source Map\u3002\\n\\n\u5982\u679c\u9879\u76ee\u4e0d\u9700\u8981 Source Map\uff0c\u53ef\u4ee5\u5173\u95ed\u8be5\u529f\u80fd\uff0c\u4ece\u800c\u63d0\u5347\u6784\u5efa\u7684\u901f\u5ea6\u3002\\n\\n```js\\nexport default {\\n  output: {\\n    disableSourceMap: true,\\n  },\\n};\\n```\\n\\n\u5982\u679c\u9700\u8981\u5f00\u542f\u5f00\u53d1\u73af\u5883\u7684 Source Map\uff0c\u5e76\u5728\u751f\u4ea7\u73af\u5883\u7981\u7528\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\uff1a\\n\\n```js\\nexport default {\\n  output: {\\n    disableSourceMap: process.env.NODE_ENV === 'production',\\n  },\\n};\\n```\\n\\n\u5982\u679c\u9700\u8981\u5355\u72ec\u63a7\u5236 JS \u6587\u4ef6\u6216 CSS \u6587\u4ef6\u7684 Source Map\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u65b9\u8bbe\u7f6e\uff1a\\n\\n```js\\nexport default {\\n  output: {\\n    disableSourceMap: {\\n      js: false,\\n      css: true,\\n    },\\n  },\\n};\\n```\\n\"";function a(s){const l=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",span:"span",p:"p"},s.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:(0,e.jsx)(l.strong,{children:"\u7c7b\u578b\uff1a"})}),"\n"]}),"\n",(0,e.jsxs)(l.div,{className:"language-ts",children:[(0,e.jsx)(l.div,{className:""}),(0,e.jsxs)(l.div,{className:"modern-code-content",children:[(0,e.jsx)(l.button,{className:"copy"}),(0,e.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(l.code,{children:[(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"type"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#8FBCBB"},children:"DisableSourceMap"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"="})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"|"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#8FBCBB"},children:"boolean"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"|"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      js"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"?:"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#8FBCBB"},children:"boolean"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      css"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"?:"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#8FBCBB"},children:"boolean"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:(0,e.jsx)(l.strong,{children:"\u9ed8\u8ba4\u503c\uff1a"})}),"\n"]}),"\n",(0,e.jsxs)(l.div,{className:"language-ts",children:[(0,e.jsx)(l.div,{className:""}),(0,e.jsxs)(l.div,{className:"modern-code-content",children:[(0,e.jsx)(l.button,{className:"copy"}),(0,e.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(l.code,{children:[(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"const"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9"},children:"defaultDisableSourceMap"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"="}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9"},children:"js"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"false"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9"},children:"css"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9"},children:"process"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"."}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9"},children:"env"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"."}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9"},children:"NODE_ENV"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"==="}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#A3BE8C"},children:"production"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,e.jsx)(l.p,{children:"\u662f\u5426\u7981\u7528 Source Map \u751f\u6210\u3002"}),"\n",(0,e.jsxs)(l.div,{className:"modern-directive tip",children:[(0,e.jsx)(l.p,{className:"modern-directive-title",children:"\u4ec0\u4e48\u662f Source Map"}),(0,e.jsx)(l.div,{className:"modern-directive-content",children:(0,e.jsx)(l.p,{children:"\nSource Map \u662f\u4fdd\u5b58\u6e90\u4ee3\u7801\u6620\u5c04\u5173\u7cfb\u7684\u4fe1\u606f\u6587\u4ef6\uff0c\u5b83\u8bb0\u5f55\u4e86\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u7684\u6bcf\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u4ee5\u53ca\u6240\u5bf9\u5e94\u7684\u7f16\u8bd1\u524d\u7684\u4f4d\u7f6e\u3002\u901a\u8fc7 Source Map\uff0c\u53ef\u4ee5\u5728\u8c03\u8bd5\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u65f6\uff0c\u76f4\u63a5\u67e5\u770b\u5bf9\u5e94\u7684\u6e90\u4ee3\u7801\u3002"})})]}),"\n",(0,e.jsx)(l.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cBuilder \u7684 Source Map \u751f\u6210\u89c4\u5219\u5982\u4e0b\uff1a"}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"\u5728\u5f00\u53d1\u73af\u5883\u6784\u5efa\u65f6\uff0c\u4f1a\u751f\u6210 JS \u6587\u4ef6\u548c CSS \u6587\u4ef6\u7684 SourceMap\uff0c\u4fbf\u4e8e\u8fdb\u884c\u5f00\u53d1\u8c03\u8bd5\u3002"}),"\n",(0,e.jsx)(l.li,{children:"\u5728\u751f\u4ea7\u73af\u5883\u6784\u5efa\u65f6\uff0c\u4f1a\u751f\u6210 JS \u6587\u4ef6\u7684 Source Map\uff0c\u7528\u4e8e\u8c03\u8bd5\u548c\u6392\u67e5\u7ebf\u4e0a\u95ee\u9898\uff1b\u4e0d\u4f1a\u751f\u6210 CSS \u6587\u4ef6\u7684 Source Map\u3002"}),"\n"]}),"\n",(0,e.jsx)(l.p,{children:"\u5982\u679c\u9879\u76ee\u4e0d\u9700\u8981 Source Map\uff0c\u53ef\u4ee5\u5173\u95ed\u8be5\u529f\u80fd\uff0c\u4ece\u800c\u63d0\u5347\u6784\u5efa\u7684\u901f\u5ea6\u3002"}),"\n",(0,e.jsxs)(l.div,{className:"language-js",children:[(0,e.jsx)(l.div,{className:""}),(0,e.jsxs)(l.div,{className:"modern-code-content",children:[(0,e.jsx)(l.button,{className:"copy"}),(0,e.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(l.code,{children:[(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"output"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"disableSourceMap"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"true"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,e.jsx)(l.p,{children:"\u5982\u679c\u9700\u8981\u5f00\u542f\u5f00\u53d1\u73af\u5883\u7684 Source Map\uff0c\u5e76\u5728\u751f\u4ea7\u73af\u5883\u7981\u7528\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\uff1a"}),"\n",(0,e.jsxs)(l.div,{className:"language-js",children:[(0,e.jsx)(l.div,{className:""}),(0,e.jsxs)(l.div,{className:"modern-code-content",children:[(0,e.jsx)(l.button,{className:"copy"}),(0,e.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(l.code,{children:[(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"output"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"disableSourceMap"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9"},children:"process"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"."}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9"},children:"env"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"."}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9"},children:"NODE_ENV"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"==="}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#A3BE8C"},children:"production"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,e.jsx)(l.p,{children:"\u5982\u679c\u9700\u8981\u5355\u72ec\u63a7\u5236 JS \u6587\u4ef6\u6216 CSS \u6587\u4ef6\u7684 Source Map\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u65b9\u8bbe\u7f6e\uff1a"}),"\n",(0,e.jsxs)(l.div,{className:"language-js",children:[(0,e.jsx)(l.div,{className:""}),(0,e.jsxs)(l.div,{className:"modern-code-content",children:[(0,e.jsx)(l.button,{className:"copy"}),(0,e.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(l.code,{children:[(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"output"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"disableSourceMap"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"js"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"false"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"css"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"true"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(l.span,{className:"line"})]})})]})]})]})}l.default=function(s={}){const{wrapper:l}=s.components||{};return l?(0,e.jsx)(l,Object.assign({},s,{children:(0,e.jsx)(a,s)})):a(s)}}}]);