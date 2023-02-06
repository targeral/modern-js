"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[2140],{87389:function(s,e,n){n.r(e),n.d(e,{content:function(){return o},frontmatter:function(){return i},toc:function(){return l}});var r=n(39980);const i=void 0,l=[{id:"\u4f18\u5148\u7ea7",text:"\u4f18\u5148\u7ea7",depth:4},{id:"\u9ed8\u8ba4\u503c",text:"\u9ed8\u8ba4\u503c",depth:4},{id:"\u793a\u4f8b",text:"\u793a\u4f8b",depth:3},{id:"\u6839\u636e\u4ea7\u7269\u7c7b\u578b\u8bbe\u7f6e",text:"\u6839\u636e\u4ea7\u7269\u7c7b\u578b\u8bbe\u7f6e",depth:4}],o="\"- **\u7c7b\u578b\uff1a** `string[] | Record<BuilderTarget, string[]>`\\n- **\u9ed8\u8ba4\u503c\uff1a** `undefined`\\n\\n\u6307\u5b9a\u9879\u76ee\u517c\u5bb9\u7684\u76ee\u6807\u6d4f\u89c8\u5668\u8303\u56f4\u3002\u8be5\u503c\u4f1a\u88ab [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) \u548c [autoprefixer](https://github.com/postcss/autoprefixer) \u7528\u6765\u786e\u5b9a\u9700\u8981\u8f6c\u6362\u7684 JavaScript \u8bed\u6cd5\u7279\u6027\u548c\u9700\u8981\u6dfb\u52a0\u7684 CSS \u6d4f\u89c8\u5668\u524d\u7f00\u3002\\n\\n#### \u4f18\u5148\u7ea7\\n\\n`overrideBrowserslist` \u914d\u7f6e\u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e\u9879\u76ee\u4e2d\u7684 `.browserslistrc` \u914d\u7f6e\u6587\u4ef6\u548c package.json \u4e2d\u7684 `browserslist` \u5b57\u6bb5\u3002\\n\\n\u5927\u591a\u6570\u573a\u666f\u4e0b\uff0c\u63a8\u8350\u4f18\u5148\u4f7f\u7528 `.browserslistrc` \u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 `overrideBrowserslist` \u914d\u7f6e\u3002\u56e0\u4e3a `.browserslistrc` \u6587\u4ef6\u662f\u5b98\u65b9\u5b9a\u4e49\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u901a\u7528\u6027\u66f4\u5f3a\uff0c\u53ef\u4ee5\u88ab\u793e\u533a\u4e2d\u7684\u5176\u4ed6\u5e93\u8bc6\u522b\u3002\\n\\n#### \u9ed8\u8ba4\u503c\\n\\n\u5982\u679c\u9879\u76ee\u4e2d\u6ca1\u6709\u5b9a\u4e49\u4efb\u4f55 `browserslist` \u76f8\u5173\u7684\u914d\u7f6e\uff0c\u4e5f\u6ca1\u6709\u5b9a\u4e49 `overrideBrowserslist`\uff0c\u90a3\u4e48 Builder \u4f1a\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u4e3a\uff1a\\n\\n```js\\n['> 0.01%', 'not dead', 'not op_mini all'];\\n```\\n\\n### \u793a\u4f8b\\n\\n\u4e0b\u9762\u662f\u517c\u5bb9\u79fb\u52a8\u7aef H5 \u573a\u666f\u7684\u793a\u4f8b\uff1a\\n\\n```js\\nexport default {\\n  output: {\\n    overrideBrowserslist: [\\n      'iOS 9',\\n      'Android 4.4',\\n      'last 2 versions',\\n      '> 0.2%',\\n      'not dead',\\n    ],\\n  },\\n};\\n```\\n\\n\u53ef\u4ee5\u67e5\u770b [browserslist \u6587\u6863](https://github.com/browserslist/browserslist) \u6765\u4e86\u89e3\u5982\u4f55\u81ea\u5b9a\u4e49\u6d4f\u89c8\u5668\u8303\u56f4\u3002\\n\\n#### \u6839\u636e\u4ea7\u7269\u7c7b\u578b\u8bbe\u7f6e\\n\\n\u5f53\u4f60\u540c\u65f6\u6784\u5efa\u591a\u79cd\u7c7b\u578b\u7684\u4ea7\u7269\u65f6\uff0c\u4f60\u53ef\u4ee5\u4e3a\u4e0d\u540c\u7684\u4ea7\u7269\u7c7b\u578b\u8bbe\u7f6e\u4e0d\u540c\u7684\u76ee\u6807\u6d4f\u89c8\u5668\u8303\u56f4\u3002\u6b64\u65f6\uff0c\u4f60\u9700\u8981\u628a `overrideBrowserslist` \u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5bf9\u8c61\u7684 key \u4e3a\u5bf9\u5e94\u7684\u4ea7\u7269\u7c7b\u578b\u3002\\n\\n\u6bd4\u5982\u4e3a `web` \u548c `node` \u8bbe\u7f6e\u4e0d\u540c\u7684\u8303\u56f4\uff1a\\n\\n```js\\nexport default {\\n  output: {\\n    overrideBrowserslist: {\\n      web: ['iOS 9', 'Android 4.4', 'last 2 versions', '> 0.2%', 'not dead'],\\n      node: ['node >= 14'],\\n    },\\n  },\\n};\\n```\\n\"";function t(s){const e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h4:"h4",div:"div",button:"button",pre:"pre",span:"span",h3:"h3"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7c7b\u578b\uff1a"})," ",(0,r.jsx)(e.code,{children:"string[] | Record<BuilderTarget, string[]>"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u9ed8\u8ba4\u503c\uff1a"})," ",(0,r.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6307\u5b9a\u9879\u76ee\u517c\u5bb9\u7684\u76ee\u6807\u6d4f\u89c8\u5668\u8303\u56f4\u3002\u8be5\u503c\u4f1a\u88ab ",(0,r.jsx)(e.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"nofollow",children:"@babel/preset-env"})," \u548c ",(0,r.jsx)(e.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"nofollow",children:"autoprefixer"})," \u7528\u6765\u786e\u5b9a\u9700\u8981\u8f6c\u6362\u7684 JavaScript \u8bed\u6cd5\u7279\u6027\u548c\u9700\u8981\u6dfb\u52a0\u7684 CSS \u6d4f\u89c8\u5668\u524d\u7f00\u3002"]}),"\n",(0,r.jsxs)(e.h4,{id:"\u4f18\u5148\u7ea7",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4f18\u5148\u7ea7",children:"#"}),"\u4f18\u5148\u7ea7"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"overrideBrowserslist"})," \u914d\u7f6e\u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e\u9879\u76ee\u4e2d\u7684 ",(0,r.jsx)(e.code,{children:".browserslistrc"})," \u914d\u7f6e\u6587\u4ef6\u548c package.json \u4e2d\u7684 ",(0,r.jsx)(e.code,{children:"browserslist"})," \u5b57\u6bb5\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5927\u591a\u6570\u573a\u666f\u4e0b\uff0c\u63a8\u8350\u4f18\u5148\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:".browserslistrc"})," \u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"overrideBrowserslist"})," \u914d\u7f6e\u3002\u56e0\u4e3a ",(0,r.jsx)(e.code,{children:".browserslistrc"})," \u6587\u4ef6\u662f\u5b98\u65b9\u5b9a\u4e49\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u901a\u7528\u6027\u66f4\u5f3a\uff0c\u53ef\u4ee5\u88ab\u793e\u533a\u4e2d\u7684\u5176\u4ed6\u5e93\u8bc6\u522b\u3002"]}),"\n",(0,r.jsxs)(e.h4,{id:"\u9ed8\u8ba4\u503c",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9ed8\u8ba4\u503c",children:"#"}),"\u9ed8\u8ba4\u503c"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u9879\u76ee\u4e2d\u6ca1\u6709\u5b9a\u4e49\u4efb\u4f55 ",(0,r.jsx)(e.code,{children:"browserslist"})," \u76f8\u5173\u7684\u914d\u7f6e\uff0c\u4e5f\u6ca1\u6709\u5b9a\u4e49 ",(0,r.jsx)(e.code,{children:"overrideBrowserslist"}),"\uff0c\u90a3\u4e48 Builder \u4f1a\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u4e3a\uff1a"]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'> 0.01%'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'not dead'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'not op_mini all'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h3,{id:"\u793a\u4f8b",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793a\u4f8b",children:"#"}),"\u793a\u4f8b"]}),"\n",(0,r.jsx)(e.p,{children:"\u4e0b\u9762\u662f\u517c\u5bb9\u79fb\u52a8\u7aef H5 \u573a\u666f\u7684\u793a\u4f8b\uff1a"}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    overrideBrowserslist"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'iOS 9'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Android 4.4'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'last 2 versions'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'> 0.2%'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'not dead'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u67e5\u770b ",(0,r.jsx)(e.a,{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"nofollow",children:"browserslist \u6587\u6863"})," \u6765\u4e86\u89e3\u5982\u4f55\u81ea\u5b9a\u4e49\u6d4f\u89c8\u5668\u8303\u56f4\u3002"]}),"\n",(0,r.jsxs)(e.h4,{id:"\u6839\u636e\u4ea7\u7269\u7c7b\u578b\u8bbe\u7f6e",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6839\u636e\u4ea7\u7269\u7c7b\u578b\u8bbe\u7f6e",children:"#"}),"\u6839\u636e\u4ea7\u7269\u7c7b\u578b\u8bbe\u7f6e"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5f53\u4f60\u540c\u65f6\u6784\u5efa\u591a\u79cd\u7c7b\u578b\u7684\u4ea7\u7269\u65f6\uff0c\u4f60\u53ef\u4ee5\u4e3a\u4e0d\u540c\u7684\u4ea7\u7269\u7c7b\u578b\u8bbe\u7f6e\u4e0d\u540c\u7684\u76ee\u6807\u6d4f\u89c8\u5668\u8303\u56f4\u3002\u6b64\u65f6\uff0c\u4f60\u9700\u8981\u628a ",(0,r.jsx)(e.code,{children:"overrideBrowserslist"})," \u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5bf9\u8c61\u7684 key \u4e3a\u5bf9\u5e94\u7684\u4ea7\u7269\u7c7b\u578b\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6bd4\u5982\u4e3a ",(0,r.jsx)(e.code,{children:"web"})," \u548c ",(0,r.jsx)(e.code,{children:"node"})," \u8bbe\u7f6e\u4e0d\u540c\u7684\u8303\u56f4\uff1a"]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    overrideBrowserslist"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      web"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'iOS 9'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Android 4.4'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'last 2 versions'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'> 0.2%'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'not dead'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      node"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'node >= 14'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(t,s)})):t(s)}}}]);