"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[2923],{9054:function(s,e,n){n.r(e),n.d(e,{content:function(){return i},frontmatter:function(){return l},toc:function(){return o}});var r=n(39980);const l=void 0,o=[{id:"\u793a\u4f8b",text:"\u793a\u4f8b",depth:3},{id:"\u9519\u8bef\u65e5\u5fd7",text:"\u9519\u8bef\u65e5\u5fd7",depth:3},{id:"\u89e3\u51b3\u65b9\u6cd5",text:"\u89e3\u51b3\u65b9\u6cd5",depth:3}],i="\"- **\u7c7b\u578b\uff1a**\\n\\n```ts\\ntype CheckSyntax =\\n  | boolean\\n  | {\\n      targets: string[];\\n    };\\n```\\n\\n- **\u9ed8\u8ba4\u503c\uff1a** `false`\\n\\n\u5206\u6790\u6784\u5efa\u4ea7\u7269\u4e2d\u662f\u5426\u5b58\u5728\u5f53\u524d\u6d4f\u89c8\u5668\u8303\u56f4\u4e0b\u4e0d\u517c\u5bb9\u7684\u9ad8\u7ea7\u8bed\u6cd5\u3002\u5982\u679c\u5b58\u5728\uff0c\u4f1a\u5c06\u8be6\u7ec6\u4fe1\u606f\u6253\u5370\u5728\u7ec8\u7aef\u3002\\n\\n### \u793a\u4f8b\\n\\n```ts\\nexport default {\\n  security: {\\n    checkSyntax: true,\\n  },\\n};\\n```\\n\\n\u5982\u679c\u5c06 `security.checkSyntax` \u6307\u5b9a\u4e3a `true` \u7684\u8bdd\uff0c\u5219 targets \u4f1a\u88ab\u8ba4\u5b9a\u4e3a\u9879\u76ee\u8bbe\u5b9a\u7684 browserslist\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003 [\u8bbe\u7f6e\u6d4f\u89c8\u5668\u8303\u56f4](https://modernjs.dev/builder/guide/advanced/browser-compatibility.html)\u3002\\n\\n\u5f00\u542f\u540e\u5c06\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u8fdb\u884c\u68c0\u6d4b\uff0c\u5f53\u68c0\u6d4b\u5230\u4e0d\u517c\u5bb9\u7684\u9ad8\u7ea7\u8bed\u6cd5\u540e\uff0c\u4f1a\u5c06\u9519\u8bef\u65e5\u5fd7\u6253\u5370\u5728\u7ec8\u7aef\uff0c\u5e76\u9000\u51fa\u5f53\u524d\u6784\u5efa\u6d41\u7a0b\u3002\\n\\n### \u9519\u8bef\u65e5\u5fd7\\n\\n\u9519\u8bef\u65e5\u5fd7\u7684\u683c\u5f0f\u5982\u4e0b\u6240\u793a\uff0c\u5305\u542b\u4ee3\u7801\u6765\u6e90\u6587\u4ef6\u3001\u4ea7\u7269\u4f4d\u7f6e\u3001\u9519\u8bef\u539f\u56e0\u3001\u6e90\u4ee3\u7801\u7b49\u4fe1\u606f\uff1a\\n\\n```bash\\nerror   [Syntax Checker] Find some syntax errors after production build:\\n\\n  ERROR#1:\\n  source - /node_modules/foo/index.js:1:0\\n  output - /Project/dist/static/js/main.3f7a4d7e.js:2:39400\\n  reason - The keyword 'const' is reserved (2:39400)\\n  code   - const foo = 'bar';\\n```\\n\\n### \u89e3\u51b3\u65b9\u6cd5\\n\\n\u5f53\u68c0\u6d4b\u5230\u8bed\u6cd5\u9519\u8bef\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u6765\u5904\u7406\uff1a\\n\\n- \u5982\u679c\u4f60\u5e0c\u671b\u964d\u7ea7\u8be5\u8bed\u6cd5\uff0c\u4ee5\u4fdd\u8bc1\u4ee3\u7801\u5177\u5907\u826f\u597d\u7684\u517c\u5bb9\u6027\uff0c\u53ef\u4ee5\u901a\u8fc7 `source.include` \u914d\u7f6e\u6765\u7f16\u8bd1\u76f8\u5e94\u7684\u6a21\u5757\u3002\\n- \u5982\u679c\u4f60\u4e0d\u5e0c\u671b\u964d\u7ea7\u8be5\u8bed\u6cd5\uff0c\u53ef\u4ee5\u8c03\u6574\u9879\u76ee\u7684 browserslist \u8303\u56f4\uff0c\u8c03\u6574\u81f3\u4e0e\u8be5\u8bed\u6cd5\u76f8\u5339\u914d\u7684\u8303\u56f4\u3002\\n\"";function c(s){const e=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",span:"span",p:"p",h3:"h3",a:"a"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"\u7c7b\u578b\uff1a"})}),"\n"]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"CheckSyntax"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      targets"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[];"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    };"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u9ed8\u8ba4\u503c\uff1a"})," ",(0,r.jsx)(e.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5206\u6790\u6784\u5efa\u4ea7\u7269\u4e2d\u662f\u5426\u5b58\u5728\u5f53\u524d\u6d4f\u89c8\u5668\u8303\u56f4\u4e0b\u4e0d\u517c\u5bb9\u7684\u9ad8\u7ea7\u8bed\u6cd5\u3002\u5982\u679c\u5b58\u5728\uff0c\u4f1a\u5c06\u8be6\u7ec6\u4fe1\u606f\u6253\u5370\u5728\u7ec8\u7aef\u3002"}),"\n",(0,r.jsxs)(e.h3,{id:"\u793a\u4f8b",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793a\u4f8b",children:"#"}),"\u793a\u4f8b"]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  security"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    checkSyntax"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u5c06 ",(0,r.jsx)(e.code,{children:"security.checkSyntax"})," \u6307\u5b9a\u4e3a ",(0,r.jsx)(e.code,{children:"true"})," \u7684\u8bdd\uff0c\u5219 targets \u4f1a\u88ab\u8ba4\u5b9a\u4e3a\u9879\u76ee\u8bbe\u5b9a\u7684 browserslist\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,r.jsx)(e.a,{href:"https://modernjs.dev/builder/guide/advanced/browser-compatibility.html",target:"_blank",rel:"nofollow",children:"\u8bbe\u7f6e\u6d4f\u89c8\u5668\u8303\u56f4"}),"\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u5f00\u542f\u540e\u5c06\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u8fdb\u884c\u68c0\u6d4b\uff0c\u5f53\u68c0\u6d4b\u5230\u4e0d\u517c\u5bb9\u7684\u9ad8\u7ea7\u8bed\u6cd5\u540e\uff0c\u4f1a\u5c06\u9519\u8bef\u65e5\u5fd7\u6253\u5370\u5728\u7ec8\u7aef\uff0c\u5e76\u9000\u51fa\u5f53\u524d\u6784\u5efa\u6d41\u7a0b\u3002"}),"\n",(0,r.jsxs)(e.h3,{id:"\u9519\u8bef\u65e5\u5fd7",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9519\u8bef\u65e5\u5fd7",children:"#"}),"\u9519\u8bef\u65e5\u5fd7"]}),"\n",(0,r.jsx)(e.p,{children:"\u9519\u8bef\u65e5\u5fd7\u7684\u683c\u5f0f\u5982\u4e0b\u6240\u793a\uff0c\u5305\u542b\u4ee3\u7801\u6765\u6e90\u6587\u4ef6\u3001\u4ea7\u7269\u4f4d\u7f6e\u3001\u9519\u8bef\u539f\u56e0\u3001\u6e90\u4ee3\u7801\u7b49\u4fe1\u606f\uff1a"}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"error   [Syntax Checker] Find some syntax errors after production build:"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  ERROR#1:"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"source"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" - /node_modules/foo/index.js:1:0"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  output - /Project/dist/static/js/main.3f7a4d7e.js:2:39400"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  reason - The keyword "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'const'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" is reserved (2:39400)"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  code   - const foo = "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'bar'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h3,{id:"\u89e3\u51b3\u65b9\u6cd5",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u89e3\u51b3\u65b9\u6cd5",children:"#"}),"\u89e3\u51b3\u65b9\u6cd5"]}),"\n",(0,r.jsx)(e.p,{children:"\u5f53\u68c0\u6d4b\u5230\u8bed\u6cd5\u9519\u8bef\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u6765\u5904\u7406\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u5982\u679c\u4f60\u5e0c\u671b\u964d\u7ea7\u8be5\u8bed\u6cd5\uff0c\u4ee5\u4fdd\u8bc1\u4ee3\u7801\u5177\u5907\u826f\u597d\u7684\u517c\u5bb9\u6027\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"source.include"})," \u914d\u7f6e\u6765\u7f16\u8bd1\u76f8\u5e94\u7684\u6a21\u5757\u3002"]}),"\n",(0,r.jsx)(e.li,{children:"\u5982\u679c\u4f60\u4e0d\u5e0c\u671b\u964d\u7ea7\u8be5\u8bed\u6cd5\uff0c\u53ef\u4ee5\u8c03\u6574\u9879\u76ee\u7684 browserslist \u8303\u56f4\uff0c\u8c03\u6574\u81f3\u4e0e\u8be5\u8bed\u6cd5\u76f8\u5339\u914d\u7684\u8303\u56f4\u3002"}),"\n"]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(c,s)})):c(s)}}}]);