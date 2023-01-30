"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[7784],{92133:function(s,n,l){l.r(n),l.d(n,{content:function(){return o},frontmatter:function(){return c},toc:function(){return r}});var e=l(39980);const c=void 0,r=[{id:"object-\u7c7b\u578b",text:"Object \u7c7b\u578b",depth:3},{id:"function-\u7c7b\u578b",text:"Function \u7c7b\u578b",depth:3}],o="\"- **\u7c7b\u578b\uff1a** `Object | Function | undefined`\\n- **\u9ed8\u8ba4\u503c\uff1a**\\n\\n```js\\nconst defaultOptions = {\\n  minimizerOptions: {\\n    preset: [\\n      'default',\\n      {\\n        mergeLonghand: false,\\n      },\\n    ],\\n  },\\n};\\n```\\n\\n\u5728\u751f\u4ea7\u73af\u5883\u6784\u5efa\u65f6\uff0cBuilder \u4f1a\u901a\u8fc7 [css-minimizer-webpack-plugin](https://github.com/webpack-contrib/css-minimizer-webpack-plugin) \u5bf9 CSS \u4ee3\u7801\u8fdb\u884c\u538b\u7f29\u4f18\u5316\u3002\u53ef\u4ee5\u901a\u8fc7 `tools.minifyCss` \u4fee\u6539 [css-minimizer-webpack-plugin](https://github.com/webpack-contrib/css-minimizer-webpack-plugin) \u7684\u914d\u7f6e\u3002\\n\\n### Object \u7c7b\u578b\\n\\n\u5f53 `tools.minifyCss` \u7684\u503c\u4e3a `Object` \u7c7b\u578b\u65f6\uff0c\u4f1a\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 `Object.assign` \u5408\u5e76\u3002\\n\\n\u4f8b\u5982\u4e0b\u9762\u4fee\u6539 [cssnano](https://cssnano.co/) \u7684 `preset` \u914d\u7f6e\uff1a\\n\\n```js\\nexport default {\\n  tools: {\\n    minifyCss: {\\n      minimizerOptions: {\\n        preset: require.resolve('cssnano-preset-simple'),\\n      },\\n    },\\n  },\\n};\\n```\\n\\n### Function \u7c7b\u578b\\n\\n\u5f53 `tools.minifyCss` \u914d\u7f6e\u4e3a `Function` \u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u503c\u4f5c\u4e3a\u6700\u7ec8\u7ed3\u679c\u3002\\n\\n```js\\nexport default {\\n   tools: {\\n    minifyCss: options => {\\n      options.minimizerOptions = {\\n        preset: require.resolve('cssnano-preset-simple'),\\n      },\\n    }\\n  }\\n};\\n```\\n\"";function i(s){const n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",span:"span",p:"p",a:"a",h3:"h3"},s.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"\u7c7b\u578b\uff1a"})," ",(0,e.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,e.jsx)(n.li,{children:(0,e.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c\uff1a"})}),"\n"]}),"\n",(0,e.jsxs)(n.div,{className:"language-js",children:[(0,e.jsx)(n.div,{className:""}),(0,e.jsxs)(n.div,{className:"modern-code-content",children:[(0,e.jsx)(n.button,{className:"copy"}),(0,e.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"const"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"defaultOptions"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"="}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"minimizerOptions"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"preset"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" ["})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(n.span,{style:{color:"#A3BE8C"},children:"default"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"mergeLonghand"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"false"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    ]"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,e.jsxs)(n.p,{children:["\u5728\u751f\u4ea7\u73af\u5883\u6784\u5efa\u65f6\uff0cBuilder \u4f1a\u901a\u8fc7 ",(0,e.jsx)(n.a,{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"nofollow",children:"css-minimizer-webpack-plugin"})," \u5bf9 CSS \u4ee3\u7801\u8fdb\u884c\u538b\u7f29\u4f18\u5316\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,e.jsx)(n.code,{children:"tools.minifyCss"})," \u4fee\u6539 ",(0,e.jsx)(n.a,{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"nofollow",children:"css-minimizer-webpack-plugin"})," \u7684\u914d\u7f6e\u3002"]}),"\n",(0,e.jsxs)(n.h3,{id:"object-\u7c7b\u578b",children:[(0,e.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7c7b\u578b",children:"#"}),"Object \u7c7b\u578b"]}),"\n",(0,e.jsxs)(n.p,{children:["\u5f53 ",(0,e.jsx)(n.code,{children:"tools.minifyCss"})," \u7684\u503c\u4e3a ",(0,e.jsx)(n.code,{children:"Object"})," \u7c7b\u578b\u65f6\uff0c\u4f1a\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 ",(0,e.jsx)(n.code,{children:"Object.assign"})," \u5408\u5e76\u3002"]}),"\n",(0,e.jsxs)(n.p,{children:["\u4f8b\u5982\u4e0b\u9762\u4fee\u6539 ",(0,e.jsx)(n.a,{href:"https://cssnano.co/",target:"_blank",rel:"nofollow",children:"cssnano"})," \u7684 ",(0,e.jsx)(n.code,{children:"preset"})," \u914d\u7f6e\uff1a"]}),"\n",(0,e.jsxs)(n.div,{className:"language-js",children:[(0,e.jsx)(n.div,{className:""}),(0,e.jsxs)(n.div,{className:"modern-code-content",children:[(0,e.jsx)(n.button,{className:"copy"}),(0,e.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"export"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"default"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"tools"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"minifyCss"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"minimizerOptions"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"preset"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"require"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"."}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"resolve"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(n.span,{style:{color:"#A3BE8C"},children:"cssnano-preset-simple"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,e.jsxs)(n.h3,{id:"function-\u7c7b\u578b",children:[(0,e.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-\u7c7b\u578b",children:"#"}),"Function \u7c7b\u578b"]}),"\n",(0,e.jsxs)(n.p,{children:["\u5f53 ",(0,e.jsx)(n.code,{children:"tools.minifyCss"})," \u914d\u7f6e\u4e3a ",(0,e.jsx)(n.code,{children:"Function"})," \u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u503c\u4f5c\u4e3a\u6700\u7ec8\u7ed3\u679c\u3002"]}),"\n",(0,e.jsxs)(n.div,{className:"language-js",children:[(0,e.jsx)(n.div,{className:""}),(0,e.jsxs)(n.div,{className:"modern-code-content",children:[(0,e.jsx)(n.button,{className:"copy"}),(0,e.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"export"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"default"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"   "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"tools"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"minifyCss"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"options"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"=>"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"options"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"."}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"minimizerOptions"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"="}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"preset"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"require"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"."}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"resolve"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(n.span,{style:{color:"#A3BE8C"},children:"cssnano-preset-simple"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(n.span,{className:"line"})]})})]})]})]})}n.default=function(s={}){const{wrapper:n}=s.components||{};return n?(0,e.jsx)(n,Object.assign({},s,{children:(0,e.jsx)(i,s)})):i(s)}}}]);