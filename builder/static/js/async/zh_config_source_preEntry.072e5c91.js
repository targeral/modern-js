"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[3608],{44372:function(s,n,e){e.r(n),e.d(n,{content:function(){return i},frontmatter:function(){return r},toc:function(){return o}});var l=e(39980);const r=void 0,o=[{id:"\u6dfb\u52a0\u5355\u4e2a\u811a\u672c",text:"\u6dfb\u52a0\u5355\u4e2a\u811a\u672c",depth:4},{id:"\u6dfb\u52a0\u5168\u5c40\u6837\u5f0f",text:"\u6dfb\u52a0\u5168\u5c40\u6837\u5f0f",depth:4},{id:"\u6dfb\u52a0\u591a\u4e2a\u811a\u672c",text:"\u6dfb\u52a0\u591a\u4e2a\u811a\u672c",depth:4}],i="\"- **\u7c7b\u578b\uff1a** `string | string[]`\\n- **\u9ed8\u8ba4\u503c\uff1a** `undefined`\\n\\n\u5728\u6bcf\u4e2a\u9875\u9762\u7684\u5165\u53e3\u6587\u4ef6\u524d\u6dfb\u52a0\u4e00\u6bb5\u4ee3\u7801\uff0c\u8fd9\u6bb5\u4ee3\u7801\u4f1a\u65e9\u4e8e\u9875\u9762\u7684\u4ee3\u7801\u6267\u884c\uff0c\u56e0\u6b64\u53ef\u4ee5\u7528\u4e8e\u6267\u884c\u4e00\u4e9b\u5168\u5c40\u7684\u4ee3\u7801\u903b\u8f91\uff0c\u6bd4\u5982\u6ce8\u5165 polyfill\u3001\u8bbe\u7f6e\u5168\u5c40\u6837\u5f0f\u7b49\u3002\\n\\n#### \u6dfb\u52a0\u5355\u4e2a\u811a\u672c\\n\\n\u9996\u5148\u521b\u5efa\u4e00\u4e2a `src/polyfill.ts` \u6587\u4ef6\uff1a\\n\\n```js\\nconsole.log('I am a polyfill');\\n```\\n\\n\u7136\u540e\u5c06 `src/polyfill.ts` \u914d\u7f6e\u5230 `source.preEntry` \u4e0a\uff1a\\n\\n```js\\nexport default {\\n  source: {\\n    preEntry: './src/polyfill.ts',\\n  },\\n};\\n```\\n\\n\u91cd\u65b0\u8fd0\u884c\u7f16\u8bd1\u5e76\u8bbf\u95ee\u4efb\u610f\u9875\u9762\uff0c\u53ef\u4ee5\u770b\u5230 `src/polyfill.ts` \u4e2d\u7684\u4ee3\u7801\u5df2\u7ecf\u6267\u884c\uff0c\u5e76\u5728 console \u4e2d\u8f93\u51fa\u4e86\u5bf9\u5e94\u7684\u5185\u5bb9\u3002\\n\\n#### \u6dfb\u52a0\u5168\u5c40\u6837\u5f0f\\n\\n\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 `source.preEntry` \u6765\u914d\u7f6e\u5168\u5c40\u6837\u5f0f\uff0c\u8fd9\u6bb5 CSS \u4ee3\u7801\u4f1a\u65e9\u4e8e\u9875\u9762\u4ee3\u7801\u52a0\u8f7d\uff0c\u6bd4\u5982\u5f15\u5165\u4e00\u4e2a `normalize.css` \u6587\u4ef6\uff1a\\n\\n```js\\nexport default {\\n  source: {\\n    preEntry: './src/normalize.css',\\n  },\\n};\\n```\\n\\n#### \u6dfb\u52a0\u591a\u4e2a\u811a\u672c\\n\\n\u4f60\u53ef\u4ee5\u5c06 `preEntry` \u8bbe\u7f6e\u4e3a\u6570\u7ec4\u6765\u6dfb\u52a0\u591a\u4e2a\u811a\u672c\uff0c\u5b83\u4eec\u4f1a\u6309\u6570\u7ec4\u987a\u5e8f\u6267\u884c\uff1a\\n\\n```js\\nexport default {\\n  source: {\\n    preEntry: ['./src/polyfill-a.ts', './src/polyfill-b.ts'],\\n  },\\n};\\n```\\n\"";function c(s){const n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u7c7b\u578b\uff1a"})," ",(0,l.jsx)(n.code,{children:"string | string[]"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c\uff1a"})," ",(0,l.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u6bcf\u4e2a\u9875\u9762\u7684\u5165\u53e3\u6587\u4ef6\u524d\u6dfb\u52a0\u4e00\u6bb5\u4ee3\u7801\uff0c\u8fd9\u6bb5\u4ee3\u7801\u4f1a\u65e9\u4e8e\u9875\u9762\u7684\u4ee3\u7801\u6267\u884c\uff0c\u56e0\u6b64\u53ef\u4ee5\u7528\u4e8e\u6267\u884c\u4e00\u4e9b\u5168\u5c40\u7684\u4ee3\u7801\u903b\u8f91\uff0c\u6bd4\u5982\u6ce8\u5165 polyfill\u3001\u8bbe\u7f6e\u5168\u5c40\u6837\u5f0f\u7b49\u3002"}),"\n",(0,l.jsxs)(n.h4,{id:"\u6dfb\u52a0\u5355\u4e2a\u811a\u672c",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6dfb\u52a0\u5355\u4e2a\u811a\u672c",children:"#"}),"\u6dfb\u52a0\u5355\u4e2a\u811a\u672c"]}),"\n",(0,l.jsxs)(n.p,{children:["\u9996\u5148\u521b\u5efa\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"src/polyfill.ts"})," \u6587\u4ef6\uff1a"]}),"\n",(0,l.jsxs)(n.div,{className:"language-js",children:[(0,l.jsx)(n.div,{className:""}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(n.code,{children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'I am a polyfill'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,l.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(n.p,{children:["\u7136\u540e\u5c06 ",(0,l.jsx)(n.code,{children:"src/polyfill.ts"})," \u914d\u7f6e\u5230 ",(0,l.jsx)(n.code,{children:"source.preEntry"})," \u4e0a\uff1a"]}),"\n",(0,l.jsxs)(n.div,{className:"language-js",children:[(0,l.jsx)(n.div,{className:""}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(n.code,{children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    preEntry"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./src/polyfill.ts'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(n.p,{children:["\u91cd\u65b0\u8fd0\u884c\u7f16\u8bd1\u5e76\u8bbf\u95ee\u4efb\u610f\u9875\u9762\uff0c\u53ef\u4ee5\u770b\u5230 ",(0,l.jsx)(n.code,{children:"src/polyfill.ts"})," \u4e2d\u7684\u4ee3\u7801\u5df2\u7ecf\u6267\u884c\uff0c\u5e76\u5728 console \u4e2d\u8f93\u51fa\u4e86\u5bf9\u5e94\u7684\u5185\u5bb9\u3002"]}),"\n",(0,l.jsxs)(n.h4,{id:"\u6dfb\u52a0\u5168\u5c40\u6837\u5f0f",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6dfb\u52a0\u5168\u5c40\u6837\u5f0f",children:"#"}),"\u6dfb\u52a0\u5168\u5c40\u6837\u5f0f"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"source.preEntry"})," \u6765\u914d\u7f6e\u5168\u5c40\u6837\u5f0f\uff0c\u8fd9\u6bb5 CSS \u4ee3\u7801\u4f1a\u65e9\u4e8e\u9875\u9762\u4ee3\u7801\u52a0\u8f7d\uff0c\u6bd4\u5982\u5f15\u5165\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"normalize.css"})," \u6587\u4ef6\uff1a"]}),"\n",(0,l.jsxs)(n.div,{className:"language-js",children:[(0,l.jsx)(n.div,{className:""}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(n.code,{children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    preEntry"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./src/normalize.css'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(n.h4,{id:"\u6dfb\u52a0\u591a\u4e2a\u811a\u672c",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6dfb\u52a0\u591a\u4e2a\u811a\u672c",children:"#"}),"\u6dfb\u52a0\u591a\u4e2a\u811a\u672c"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5c06 ",(0,l.jsx)(n.code,{children:"preEntry"})," \u8bbe\u7f6e\u4e3a\u6570\u7ec4\u6765\u6dfb\u52a0\u591a\u4e2a\u811a\u672c\uff0c\u5b83\u4eec\u4f1a\u6309\u6570\u7ec4\u987a\u5e8f\u6267\u884c\uff1a"]}),"\n",(0,l.jsxs)(n.div,{className:"language-js",children:[(0,l.jsx)(n.div,{className:""}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(n.code,{children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    preEntry"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./src/polyfill-a.ts'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./src/polyfill-b.ts'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(n.span,{className:"line"})]})})]})]})]})}n.default=function(s={}){const{wrapper:n}=s.components||{};return n?(0,l.jsx)(n,Object.assign({},s,{children:(0,l.jsx)(c,s)})):c(s)}}}]);