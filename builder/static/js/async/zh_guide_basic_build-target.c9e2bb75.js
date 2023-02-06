"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[1722],{57027:function(e,s,n){n.r(s),n.d(s,{content:function(){return c},frontmatter:function(){return i},title:function(){return o},toc:function(){return l}});var r=n(39980);const i=void 0,l=[{id:"\u9ed8\u8ba4\u4ea7\u7269",text:"\u9ed8\u8ba4\u4ea7\u7269",depth:2},{id:"\u53ef\u9009\u7c7b\u578b",text:"\u53ef\u9009\u7c7b\u578b",depth:2},{id:"\u5e76\u884c\u6784\u5efa",text:"\u5e76\u884c\u6784\u5efa",depth:2},{id:"node-\u4ea7\u7269",text:"Node \u4ea7\u7269",depth:2},{id:"web-worker-\u4ea7\u7269",text:"Web Worker \u4ea7\u7269",depth:2},{id:"modern-web-\u4ea7\u7269",text:"Modern Web \u4ea7\u7269",depth:2}],o="\u6784\u5efa\u4ea7\u7269\u7c7b\u578b",c="\"# \u6784\u5efa\u4ea7\u7269\u7c7b\u578b\\n\\nBuilder \u652f\u6301\u591a\u79cd\u6784\u5efa\u4ea7\u7269\u7c7b\u578b\uff0c\u5206\u522b\u9002\u7528\u4e8e\u4e0d\u540c\u7684\u76ee\u6807\u8fd0\u884c\u73af\u5883\u3002\u5728\u8bbe\u7f6e\u6b63\u786e\u7684\u4ea7\u7269\u7c7b\u578b\u540e\uff0cBuilder \u4f1a\u9488\u5bf9\u8be5\u73af\u5883\u4f18\u5316\u6253\u5305\u7ed3\u679c\uff0c\u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\u542f\u7528\u4e00\u4e9b\u5bf9\u5e94\u7684\u63d2\u4ef6\u6216\u8005\u914d\u7f6e\u3002\\n\\n\u4f60\u53ef\u4ee5\u901a\u8fc7 [createBuilder](/api/builder-core.html#createbuilder) \u65b9\u6cd5\u7684 `target` \u53c2\u6570\u6765\u8bbe\u7f6e\u4ea7\u7269\u7c7b\u578b\u3002\\n\\n## \u9ed8\u8ba4\u4ea7\u7269\\n\\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c`target` \u4f1a\u88ab\u8bbe\u7f6e\u4e3a `'web'`\uff0c\u5e76\u6784\u5efa\u51fa**\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u73af\u5883\u91cc\u7684\u4ea7\u7269**\u3002\\n\\n\u540c\u65f6\uff0cBuilder \u4f1a\u8bfb\u53d6\u9879\u76ee\u4e2d\u7684 [Browserslist \u914d\u7f6e](https://github.com/browserslist/browserslist)\uff0c\u4ee5\u786e\u5b9a\u9700\u8981\u517c\u5bb9\u7684\u6d4f\u89c8\u5668\u8303\u56f4\u3002\\n\\n## \u53ef\u9009\u7c7b\u578b\\n\\n\u9664\u4e86 `'web'` \u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5c06 `target` \u8bbe\u7f6e\u4e3a\u4ee5\u4e0b\u503c\uff1a\\n\\n- `'node'`: \u6784\u5efa\u51fa\u8fd0\u884c\u5728 Node.js \u73af\u5883\u7684\u4ea7\u7269\uff0c\u901a\u5e38\u7528\u4e8e SSR \u7b49\u573a\u666f\u3002\\n- `'web-worker'`\uff1a\u6784\u5efa\u51fa\u8fd0\u884c\u5728 Web Worker \u91cc\u7684\u4ea7\u7269\u3002\\n- `'modern-web'`\uff1a\u6784\u5efa\u51fa\u8fd0\u884c\u5728\u73b0\u4ee3\u6d4f\u89c8\u5668\u91cc\u7684\u4ea7\u7269\u3002\\n\\n\u6bd4\u5982\u6784\u5efa\u51fa\u9002\u7528\u4e8e Node.js \u73af\u5883\u7684\u4ea7\u7269\uff1a\\n\\n```ts\\nconst builder = await createBuilder(provider, {\\n  target: 'node',\\n});\\n```\\n\\n## \u5e76\u884c\u6784\u5efa\\n\\n\u5f53 target \u4e3a\u5305\u542b\u591a\u4e2a\u503c\u7684\u6570\u7ec4\u65f6\uff0cBuilder \u4f1a\u5e76\u884c\u6784\u5efa\uff0c\u5e76\u751f\u6210\u591a\u4efd\u4e0d\u540c\u7684\u4ea7\u7269\u3002\\n\\n\u6bd4\u5982\u540c\u65f6\u6784\u5efa\u6d4f\u89c8\u5668\u4ea7\u7269\u548c SSR \u4ea7\u7269\uff1a\\n\\n```ts\\nconst builder = await createBuilder(provider, {\\n  target: ['web', 'node'],\\n});\\n```\\n\\n## Node \u4ea7\u7269\\n\\n\u6307\u8fd0\u884c\u5728 Node.js \u73af\u5883\u7684\u4ea7\u7269\uff0c\u901a\u5e38\u7528\u4e8e SSR \u7b49\u573a\u666f\u3002\\n\\n\u5f53 `target` \u8bbe\u7f6e\u4e3a `'node'` \u65f6\uff0cBuilder \u4f1a\u8fdb\u884c\u4ee5\u4e0b\u5904\u7406\uff1a\\n\\n- \u4e0d\u4f1a\u751f\u6210 HTML \u6587\u4ef6\uff0c\u4e0e HTML \u76f8\u5173\u7684\u903b\u8f91\u4e5f\u4e0d\u4f1a\u6267\u884c\uff0c\u56e0\u4e3a Node.js \u73af\u5883\u4e0d\u9700\u8981 HTML\u3002\\n- \u4e0d\u4f1a\u6253\u5305\u6216\u62bd\u53d6 CSS \u4ee3\u7801\uff0c\u4f46\u4ea7\u7269\u4e2d\u4f1a\u5305\u542b CSS Modules \u7684 id \u4fe1\u606f\u3002\\n- \u4e0d\u4f1a\u5f00\u542f\u9ed8\u8ba4\u7684\u62c6\u5305\u7b56\u7565\uff0c\u4f46 dynamic import \u4f9d\u7136\u53ef\u4ee5\u751f\u6548\u3002\\n- \u4e0d\u4f1a\u5f00\u542f\u70ed\u66f4\u65b0\u76f8\u5173\u7684\u80fd\u529b\u3002\\n- \u5c06 Browserslist \u7684\u9ed8\u8ba4\u503c\u8c03\u6574\u4e3a `['node >= 14']`\u3002\\n\\n:::tip\\n\u5982\u679c\u89e6\u53d1\u4e86\u5e76\u884c\u6784\u5efa\uff0c\u6bd4\u5982\u540c\u65f6\u6784\u5efa web \u4ea7\u7269\u548c node \u4ea7\u7269\uff0c\u90a3\u4e48\u4e0a\u8ff0\u5904\u7406\u4e0d\u4f1a\u5f71\u54cd web \u4ea7\u7269\uff0cweb \u4ea7\u7269\u6240\u9700\u7684 HTML\u3001CSS \u7b49\u6587\u4ef6\u4f9d\u7136\u4f1a\u6b63\u786e\u751f\u6210\u3002\\n:::\\n\\n## Web Worker \u4ea7\u7269\\n\\n\u6307\u8fd0\u884c\u5728 [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) \u73af\u5883\u7684\u4ea7\u7269\u3002\\n\\n:::tip Web Worker\\nWeb Workers \u662f\u4e00\u79cd JavaScript API\uff0c\u5b83\u5141\u8bb8\u7f51\u9875\u5728\u540e\u53f0\u7ebf\u7a0b\u4e2d\u6267\u884c\u811a\u672c\uff0c\u4e0e\u4e3b\u7ebf\u7a0b\uff08\u7f51\u9875\uff09\u5206\u79bb\u3002\u8fd9\u610f\u5473\u7740\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Web Workers \u6765\u6267\u884c\u8ba1\u7b97\u5bc6\u96c6\u578b\u6216\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u4efb\u52a1\uff0c\u800c\u65e0\u9700\u963b\u585e\u4e3b\u7ebf\u7a0b\uff0c\u8fdb\u800c\u5f71\u54cd\u7f51\u9875\u7684\u6027\u80fd\u3002\\n:::\\n\\n\u5f53 `target` \u8bbe\u7f6e\u4e3a `'web-worker'` \u65f6\uff0cBuilder \u4f1a\u8fdb\u884c\u4ee5\u4e0b\u5904\u7406\uff1a\\n\\n- \u4e0d\u4f1a\u751f\u6210 HTML \u6587\u4ef6\uff0c\u4e0e HTML \u76f8\u5173\u7684\u903b\u8f91\u4e5f\u4e0d\u4f1a\u6267\u884c\uff0c\u56e0\u4e3a Web Worker \u73af\u5883\u4e0d\u9700\u8981 HTML\u3002\\n- \u4e0d\u4f1a\u6253\u5305\u6216\u62bd\u53d6 CSS \u4ee3\u7801\uff0c\u4f46\u4ea7\u7269\u4e2d\u4f1a\u5305\u542b CSS Modules \u7684 id \u4fe1\u606f\u3002\\n- \u4e0d\u4f1a\u5f00\u542f\u9ed8\u8ba4\u7684\u62c6\u5305\u7b56\u7565\uff0c**\u5e76\u4e14 dynamic import \u4e5f\u4e0d\u4f1a\u751f\u6548**\uff0c\u56e0\u4e3a Web Worker \u4ec5\u8fd0\u884c\u652f\u6301\u5355\u4e2a JavaScript \u6587\u4ef6\u3002\\n- \u4e0d\u4f1a\u5f00\u542f\u70ed\u66f4\u65b0\u76f8\u5173\u7684\u80fd\u529b\u3002\\n\\n## Modern Web \u4ea7\u7269\\n\\n\u6307\u8fd0\u884c\u5728\u73b0\u4ee3\u6d4f\u89c8\u5668\u73af\u5883\u7684\u4ea7\u7269\u3002\\n\\n:::tip \u4ec0\u4e48\u662f\u73b0\u4ee3\u6d4f\u89c8\u5668?\\n\u73b0\u4ee3\u6d4f\u89c8\u5668\u662f\u6211\u4eec\u7684\u4e00\u4e2a\u7ea6\u5b9a\u7528\u8bed\uff0c\u6307\u652f\u6301 [\u539f\u751f ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) \u7684\u6d4f\u89c8\u5668\u3002\\n:::\\n\\n\u5f53 `target` \u8bbe\u7f6e\u4e3a `'modern-web'` \u65f6\uff0cBuilder \u4f1a\u8fdb\u884c\u4ee5\u4e0b\u5904\u7406\uff1a\\n\\n- \u5c06 Browserslist \u7684\u9ed8\u8ba4\u503c\u8c03\u6574\u4e3a\uff1a\\n\\n```js\\nconst browserslist = [\\n  'chrome > 61',\\n  'edge > 16',\\n  'firefox > 60',\\n  'safari > 11',\\n  'ios_saf > 11',\\n];\\n```\\n\"";function t(e){const s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",strong:"strong",ul:"ul",li:"li",div:"div",button:"button",pre:"pre",span:"span"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"\u6784\u5efa\u4ea7\u7269\u7c7b\u578b",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6784\u5efa\u4ea7\u7269\u7c7b\u578b",children:"#"}),"\u6784\u5efa\u4ea7\u7269\u7c7b\u578b"]}),"\n",(0,r.jsx)(s.p,{children:"Builder \u652f\u6301\u591a\u79cd\u6784\u5efa\u4ea7\u7269\u7c7b\u578b\uff0c\u5206\u522b\u9002\u7528\u4e8e\u4e0d\u540c\u7684\u76ee\u6807\u8fd0\u884c\u73af\u5883\u3002\u5728\u8bbe\u7f6e\u6b63\u786e\u7684\u4ea7\u7269\u7c7b\u578b\u540e\uff0cBuilder \u4f1a\u9488\u5bf9\u8be5\u73af\u5883\u4f18\u5316\u6253\u5305\u7ed3\u679c\uff0c\u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\u542f\u7528\u4e00\u4e9b\u5bf9\u5e94\u7684\u63d2\u4ef6\u6216\u8005\u914d\u7f6e\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/builder/api/builder-core.html#createbuilder",children:"createBuilder"})," \u65b9\u6cd5\u7684 ",(0,r.jsx)(s.code,{children:"target"})," \u53c2\u6570\u6765\u8bbe\u7f6e\u4ea7\u7269\u7c7b\u578b\u3002"]}),"\n",(0,r.jsxs)(s.h2,{id:"\u9ed8\u8ba4\u4ea7\u7269",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9ed8\u8ba4\u4ea7\u7269",children:"#"}),"\u9ed8\u8ba4\u4ea7\u7269"]}),"\n",(0,r.jsxs)(s.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.jsx)(s.code,{children:"target"})," \u4f1a\u88ab\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"'web'"}),"\uff0c\u5e76\u6784\u5efa\u51fa",(0,r.jsx)(s.strong,{children:"\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u73af\u5883\u91cc\u7684\u4ea7\u7269"}),"\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u540c\u65f6\uff0cBuilder \u4f1a\u8bfb\u53d6\u9879\u76ee\u4e2d\u7684 ",(0,r.jsx)(s.a,{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"nofollow",children:"Browserslist \u914d\u7f6e"}),"\uff0c\u4ee5\u786e\u5b9a\u9700\u8981\u517c\u5bb9\u7684\u6d4f\u89c8\u5668\u8303\u56f4\u3002"]}),"\n",(0,r.jsxs)(s.h2,{id:"\u53ef\u9009\u7c7b\u578b",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53ef\u9009\u7c7b\u578b",children:"#"}),"\u53ef\u9009\u7c7b\u578b"]}),"\n",(0,r.jsxs)(s.p,{children:["\u9664\u4e86 ",(0,r.jsx)(s.code,{children:"'web'"})," \u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5c06 ",(0,r.jsx)(s.code,{children:"target"})," \u8bbe\u7f6e\u4e3a\u4ee5\u4e0b\u503c\uff1a"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"'node'"}),": \u6784\u5efa\u51fa\u8fd0\u884c\u5728 Node.js \u73af\u5883\u7684\u4ea7\u7269\uff0c\u901a\u5e38\u7528\u4e8e SSR \u7b49\u573a\u666f\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"'web-worker'"}),"\uff1a\u6784\u5efa\u51fa\u8fd0\u884c\u5728 Web Worker \u91cc\u7684\u4ea7\u7269\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"'modern-web'"}),"\uff1a\u6784\u5efa\u51fa\u8fd0\u884c\u5728\u73b0\u4ee3\u6d4f\u89c8\u5668\u91cc\u7684\u4ea7\u7269\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u6bd4\u5982\u6784\u5efa\u51fa\u9002\u7528\u4e8e Node.js \u73af\u5883\u7684\u4ea7\u7269\uff1a"}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"builder"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"createBuilder"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(provider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  target"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'node'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"\u5e76\u884c\u6784\u5efa",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5e76\u884c\u6784\u5efa",children:"#"}),"\u5e76\u884c\u6784\u5efa"]}),"\n",(0,r.jsx)(s.p,{children:"\u5f53 target \u4e3a\u5305\u542b\u591a\u4e2a\u503c\u7684\u6570\u7ec4\u65f6\uff0cBuilder \u4f1a\u5e76\u884c\u6784\u5efa\uff0c\u5e76\u751f\u6210\u591a\u4efd\u4e0d\u540c\u7684\u4ea7\u7269\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u6bd4\u5982\u540c\u65f6\u6784\u5efa\u6d4f\u89c8\u5668\u4ea7\u7269\u548c SSR \u4ea7\u7269\uff1a"}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"builder"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"createBuilder"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(provider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  target"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'web'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'node'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"node-\u4ea7\u7269",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#node-\u4ea7\u7269",children:"#"}),"Node \u4ea7\u7269"]}),"\n",(0,r.jsx)(s.p,{children:"\u6307\u8fd0\u884c\u5728 Node.js \u73af\u5883\u7684\u4ea7\u7269\uff0c\u901a\u5e38\u7528\u4e8e SSR \u7b49\u573a\u666f\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u5f53 ",(0,r.jsx)(s.code,{children:"target"})," \u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"'node'"})," \u65f6\uff0cBuilder \u4f1a\u8fdb\u884c\u4ee5\u4e0b\u5904\u7406\uff1a"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u4e0d\u4f1a\u751f\u6210 HTML \u6587\u4ef6\uff0c\u4e0e HTML \u76f8\u5173\u7684\u903b\u8f91\u4e5f\u4e0d\u4f1a\u6267\u884c\uff0c\u56e0\u4e3a Node.js \u73af\u5883\u4e0d\u9700\u8981 HTML\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u4e0d\u4f1a\u6253\u5305\u6216\u62bd\u53d6 CSS \u4ee3\u7801\uff0c\u4f46\u4ea7\u7269\u4e2d\u4f1a\u5305\u542b CSS Modules \u7684 id \u4fe1\u606f\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u4e0d\u4f1a\u5f00\u542f\u9ed8\u8ba4\u7684\u62c6\u5305\u7b56\u7565\uff0c\u4f46 dynamic import \u4f9d\u7136\u53ef\u4ee5\u751f\u6548\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u4e0d\u4f1a\u5f00\u542f\u70ed\u66f4\u65b0\u76f8\u5173\u7684\u80fd\u529b\u3002"}),"\n",(0,r.jsxs)(s.li,{children:["\u5c06 Browserslist \u7684\u9ed8\u8ba4\u503c\u8c03\u6574\u4e3a ",(0,r.jsx)(s.code,{children:"['node >= 14']"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsx)(s.p,{children:"\n\u5982\u679c\u89e6\u53d1\u4e86\u5e76\u884c\u6784\u5efa\uff0c\u6bd4\u5982\u540c\u65f6\u6784\u5efa web \u4ea7\u7269\u548c node \u4ea7\u7269\uff0c\u90a3\u4e48\u4e0a\u8ff0\u5904\u7406\u4e0d\u4f1a\u5f71\u54cd web \u4ea7\u7269\uff0cweb \u4ea7\u7269\u6240\u9700\u7684 HTML\u3001CSS \u7b49\u6587\u4ef6\u4f9d\u7136\u4f1a\u6b63\u786e\u751f\u6210\u3002"})})]}),"\n",(0,r.jsxs)(s.h2,{id:"web-worker-\u4ea7\u7269",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#web-worker-\u4ea7\u7269",children:"#"}),"Web Worker \u4ea7\u7269"]}),"\n",(0,r.jsxs)(s.p,{children:["\u6307\u8fd0\u884c\u5728 ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API",target:"_blank",rel:"nofollow",children:"Web Worker"})," \u73af\u5883\u7684\u4ea7\u7269\u3002"]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"Web Worker"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsx)(s.p,{children:"\nWeb Workers \u662f\u4e00\u79cd JavaScript API\uff0c\u5b83\u5141\u8bb8\u7f51\u9875\u5728\u540e\u53f0\u7ebf\u7a0b\u4e2d\u6267\u884c\u811a\u672c\uff0c\u4e0e\u4e3b\u7ebf\u7a0b\uff08\u7f51\u9875\uff09\u5206\u79bb\u3002\u8fd9\u610f\u5473\u7740\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Web Workers \u6765\u6267\u884c\u8ba1\u7b97\u5bc6\u96c6\u578b\u6216\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u4efb\u52a1\uff0c\u800c\u65e0\u9700\u963b\u585e\u4e3b\u7ebf\u7a0b\uff0c\u8fdb\u800c\u5f71\u54cd\u7f51\u9875\u7684\u6027\u80fd\u3002"})})]}),"\n",(0,r.jsxs)(s.p,{children:["\u5f53 ",(0,r.jsx)(s.code,{children:"target"})," \u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"'web-worker'"})," \u65f6\uff0cBuilder \u4f1a\u8fdb\u884c\u4ee5\u4e0b\u5904\u7406\uff1a"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u4e0d\u4f1a\u751f\u6210 HTML \u6587\u4ef6\uff0c\u4e0e HTML \u76f8\u5173\u7684\u903b\u8f91\u4e5f\u4e0d\u4f1a\u6267\u884c\uff0c\u56e0\u4e3a Web Worker \u73af\u5883\u4e0d\u9700\u8981 HTML\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u4e0d\u4f1a\u6253\u5305\u6216\u62bd\u53d6 CSS \u4ee3\u7801\uff0c\u4f46\u4ea7\u7269\u4e2d\u4f1a\u5305\u542b CSS Modules \u7684 id \u4fe1\u606f\u3002"}),"\n",(0,r.jsxs)(s.li,{children:["\u4e0d\u4f1a\u5f00\u542f\u9ed8\u8ba4\u7684\u62c6\u5305\u7b56\u7565\uff0c",(0,r.jsx)(s.strong,{children:"\u5e76\u4e14 dynamic import \u4e5f\u4e0d\u4f1a\u751f\u6548"}),"\uff0c\u56e0\u4e3a Web Worker \u4ec5\u8fd0\u884c\u652f\u6301\u5355\u4e2a JavaScript \u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(s.li,{children:"\u4e0d\u4f1a\u5f00\u542f\u70ed\u66f4\u65b0\u76f8\u5173\u7684\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"modern-web-\u4ea7\u7269",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-web-\u4ea7\u7269",children:"#"}),"Modern Web \u4ea7\u7269"]}),"\n",(0,r.jsx)(s.p,{children:"\u6307\u8fd0\u884c\u5728\u73b0\u4ee3\u6d4f\u89c8\u5668\u73af\u5883\u7684\u4ea7\u7269\u3002"}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"\u4ec0\u4e48\u662f\u73b0\u4ee3\u6d4f\u89c8\u5668?"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\n\u73b0\u4ee3\u6d4f\u89c8\u5668\u662f\u6211\u4eec\u7684\u4e00\u4e2a\u7ea6\u5b9a\u7528\u8bed\uff0c\u6307\u652f\u6301 ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"nofollow",children:"\u539f\u751f ES Modules"}),"\u7684\u6d4f\u89c8\u5668\u3002"]})})]}),"\n",(0,r.jsxs)(s.p,{children:["\u5f53 ",(0,r.jsx)(s.code,{children:"target"})," \u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"'modern-web'"})," \u65f6\uff0cBuilder \u4f1a\u8fdb\u884c\u4ee5\u4e0b\u5904\u7406\uff1a"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u5c06 Browserslist \u7684\u9ed8\u8ba4\u503c\u8c03\u6574\u4e3a\uff1a"}),"\n"]}),"\n",(0,r.jsxs)(s.div,{className:"language-js",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"browserslist"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'chrome > 61'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'edge > 16'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'firefox > 60'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'safari > 11'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ios_saf > 11'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"];"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);