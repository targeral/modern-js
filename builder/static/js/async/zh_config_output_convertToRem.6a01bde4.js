"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[6418],{25690:function(s,e,n){n.r(e),n.d(e,{content:function(){return o},frontmatter:function(){return r},toc:function(){return c}});var l=n(39980);const r=void 0,c=[{id:"boolean-\u7c7b\u578b",text:"Boolean \u7c7b\u578b",depth:4},{id:"object-\u7c7b\u578b",text:"Object \u7c7b\u578b",depth:4},{id:"\u793a\u4f8b",text:"\u793a\u4f8b",depth:3}],o="\"- **\u7c7b\u578b\uff1a** `boolean | object`\\n- **\u9ed8\u8ba4\u503c\uff1a** `false`\\n\\n\u901a\u8fc7\u8bbe\u7f6e `output.convertToRem`\uff0cBuilder \u53ef\u8fdb\u884c\u5982\u4e0b\u5904\u7406\uff1a\\n\\n- \u5c06 CSS \u4e2d\u7684 px \u8f6c\u6210 rem\\n- \u5728 HTML \u6a21\u7248\u4e2d\u63d2\u5165\u8fd0\u884c\u65f6\u4ee3\u7801\uff0c\u5bf9\u6839\u5143\u7d20 fontSize \u8fdb\u884c\u8bbe\u7f6e\\n\\n#### Boolean \u7c7b\u578b\\n\\n\u5f53\u8bbe\u7f6e `output.convertToRem` \u4e3a `true`\uff0c\u5c06\u5f00\u542f rem \u5904\u7406\u80fd\u529b\u3002\\n\\n```js\\nexport default {\\n  output: {\\n    convertToRem: true,\\n  },\\n};\\n```\\n\\n\u6b64\u65f6\uff0crem \u914d\u7f6e\u9ed8\u8ba4\u5982\u4e0b\uff1a\\n\\n```js\\n{\\n  enableRuntime: true,\\n  rootFontSize: 50,\\n  screenWidth: 375,\\n  rootFontSize: 50,\\n  maxRootFontSize: 64,\\n  widthQueryKey: '',\\n  excludeEntries: [],\\n  supportLandscape: false,\\n  useRootFontSizeBeyondMax: false,\\n  pxtorem: {\\n    rootValue: 50,\\n    unitPrecision: 5,\\n    propList: ['*'],\\n  }\\n}\\n```\\n\\n#### Object \u7c7b\u578b\\n\\n\u5f53 `output.convertToRem` \u7684\u503c\u4e3a `object` \u7c7b\u578b\u65f6\uff0cBuilder \u4f1a\u6839\u636e\u5f53\u524d\u914d\u7f6e\u8fdb\u884c rem \u5904\u7406\u3002\\n\\n\u9009\u9879\uff1a\\n\\n| \u540d\u79f0                     | \u7c7b\u578b       | \u9ed8\u8ba4\u503c                                                                                                                                  | \u63cf\u8ff0                                                                                      |\\n| ------------------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |\\n| enableRuntime            | `boolean`  | `true`                                                                                                                                  | \u5f00\u542f HTML \u6a21\u7248\u63d2\u5165\u529f\u80fd\uff0c\u52a8\u6001\u8ba1\u7b97\u6839\u5143\u7d20\u5b57\u4f53\u5927\u5c0f                                    |\\n| rootFontSize             | `number`   | `50`                                                                                                                                    | \u6839\u5143\u7d20\u5b57\u4f53\u503c                                                                              |\\n| maxRootFontSize          | `number`   | `64`                                                                                                                                    | \u6700\u5927\u6839\u5143\u7d20\u5b57\u4f53\u503c                                                                          |\\n| widthQueryKey            | `string`   | `'' `                                                                                                                                   | \u6839\u636e widthQueryKey \u7684\u503c\u53bb url query \u4e2d\u53d6 client width |\\n| screenWidth              | `number`   | `375`                                                                                                                                   | UI \u8bbe\u8ba1\u56fe\u5bbd\u5ea6                                                                                  |\\n| excludeEntries           | `string[]` | `[]`                                                                                                                                    | \u4e0d\u8fdb\u884c\u8c03\u6574\u7684\u9875\u9762\u5165\u53e3                                                                      |\\n| supportLandscape         | `boolean`  | `false`                                                                                                                                 | \u6a2a\u5c4f\u65f6\u4f7f\u7528 height \u8ba1\u7b97 rem                                                                |\\n| useRootFontSizeBeyondMax | `boolean`  | `false`                                                                                                                                 | \u8d85\u8fc7 maxRootFontSize \u65f6\uff0c\u662f\u5426\u4f7f\u7528 rootFontSize                                            |\\n| pxtorem                  | `object`   | <ul><li>rootValue\u3002\u9ed8\u8ba4\u4e0e rootFontSize \u76f8\u540c </li><li>unitPrecision: 5\u3002\u7cbe\u786e\u4f4d\u6570 </li><li>propList: ['*']\u3002\u652f\u6301\u8f6c\u6362\u7684 CSS \u5c5e\u6027</li></ul> | [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem#options) \u63d2\u4ef6\u5c5e\u6027               |\\n\\n### \u793a\u4f8b\\n\\n```js\\nexport default {\\n  output: {\\n    convertToRem: {\\n      rootFontSize: 30,\\n      excludeEntries: ['404', 'page2'],\\n      pxtorem: {\\n        propList: ['font-size'],\\n      },\\n    },\\n  },\\n};\\n```\\n\"";function i(s){const e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u7c7b\u578b\uff1a"})," ",(0,l.jsx)(e.code,{children:"boolean | object"})]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u9ed8\u8ba4\u503c\uff1a"})," ",(0,l.jsx)(e.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u901a\u8fc7\u8bbe\u7f6e ",(0,l.jsx)(e.code,{children:"output.convertToRem"}),"\uff0cBuilder \u53ef\u8fdb\u884c\u5982\u4e0b\u5904\u7406\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5c06 CSS \u4e2d\u7684 px \u8f6c\u6210 rem"}),"\n",(0,l.jsx)(e.li,{children:"\u5728 HTML \u6a21\u7248\u4e2d\u63d2\u5165\u8fd0\u884c\u65f6\u4ee3\u7801\uff0c\u5bf9\u6839\u5143\u7d20 fontSize \u8fdb\u884c\u8bbe\u7f6e"}),"\n"]}),"\n",(0,l.jsxs)(e.h4,{id:"boolean-\u7c7b\u578b",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-\u7c7b\u578b",children:"#"}),"Boolean \u7c7b\u578b"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5f53\u8bbe\u7f6e ",(0,l.jsx)(e.code,{children:"output.convertToRem"})," \u4e3a ",(0,l.jsx)(e.code,{children:"true"}),"\uff0c\u5c06\u5f00\u542f rem \u5904\u7406\u80fd\u529b\u3002"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"output"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"convertToRem"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"\u6b64\u65f6\uff0crem \u914d\u7f6e\u9ed8\u8ba4\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  enableRuntime"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  rootFontSize"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#B48EAD"},children:"50"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  screenWidth"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#B48EAD"},children:"375"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  rootFontSize"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#B48EAD"},children:"50"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  maxRootFontSize"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#B48EAD"},children:"64"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  widthQueryKey"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"''"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  excludeEntries"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" []"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  supportLandscape"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"false"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  useRootFontSizeBeyondMax"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"false"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  pxtorem"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    rootValue"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#B48EAD"},children:"50"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    unitPrecision"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#B48EAD"},children:"5"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    propList"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"*"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h4,{id:"object-\u7c7b\u578b",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7c7b\u578b",children:"#"}),"Object \u7c7b\u578b"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5f53 ",(0,l.jsx)(e.code,{children:"output.convertToRem"})," \u7684\u503c\u4e3a ",(0,l.jsx)(e.code,{children:"object"})," \u7c7b\u578b\u65f6\uff0cBuilder \u4f1a\u6839\u636e\u5f53\u524d\u914d\u7f6e\u8fdb\u884c rem \u5904\u7406\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u9009\u9879\uff1a"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u540d\u79f0"}),(0,l.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,l.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"}),(0,l.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"enableRuntime"}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"boolean"})}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"true"})}),(0,l.jsx)(e.td,{children:"\u5f00\u542f HTML \u6a21\u7248\u63d2\u5165\u529f\u80fd\uff0c\u52a8\u6001\u8ba1\u7b97\u6839\u5143\u7d20\u5b57\u4f53\u5927\u5c0f"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"rootFontSize"}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"number"})}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"50"})}),(0,l.jsx)(e.td,{children:"\u6839\u5143\u7d20\u5b57\u4f53\u503c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"maxRootFontSize"}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"number"})}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"64"})}),(0,l.jsx)(e.td,{children:"\u6700\u5927\u6839\u5143\u7d20\u5b57\u4f53\u503c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"widthQueryKey"}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"string"})}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"'' "})}),(0,l.jsx)(e.td,{children:"\u6839\u636e widthQueryKey \u7684\u503c\u53bb url query \u4e2d\u53d6 client width"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"screenWidth"}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"number"})}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"375"})}),(0,l.jsx)(e.td,{children:"UI \u8bbe\u8ba1\u56fe\u5bbd\u5ea6"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"excludeEntries"}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"string[]"})}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"[]"})}),(0,l.jsx)(e.td,{children:"\u4e0d\u8fdb\u884c\u8c03\u6574\u7684\u9875\u9762\u5165\u53e3"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"supportLandscape"}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"boolean"})}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"false"})}),(0,l.jsx)(e.td,{children:"\u6a2a\u5c4f\u65f6\u4f7f\u7528 height \u8ba1\u7b97 rem"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"useRootFontSizeBeyondMax"}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"boolean"})}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"false"})}),(0,l.jsx)(e.td,{children:"\u8d85\u8fc7 maxRootFontSize \u65f6\uff0c\u662f\u5426\u4f7f\u7528 rootFontSize"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"pxtorem"}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"object"})}),(0,l.jsxs)(e.td,{children:["rootValue\u3002\u9ed8\u8ba4\u4e0e rootFontSize \u76f8\u540c ","unitPrecision: 5\u3002\u7cbe\u786e\u4f4d\u6570 ","propList: ['*']\u3002\u652f\u6301\u8f6c\u6362\u7684 CSS \u5c5e\u6027"]}),(0,l.jsxs)(e.td,{children:[(0,l.jsx)(e.a,{href:"https://github.com/cuth/postcss-pxtorem#options-8",target:"_blank",rel:"nofollow",children:"postcss-pxtorem"})," \u63d2\u4ef6\u5c5e\u6027"]})]})]})]}),"\n",(0,l.jsxs)(e.h3,{id:"\u793a\u4f8b",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793a\u4f8b",children:"#"}),"\u793a\u4f8b"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"output"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"convertToRem"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"rootFontSize"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#B48EAD"},children:"30"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"excludeEntries"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"404"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"page2"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"pxtorem"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"propList"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"font-size"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(i,s)})):i(s)}}}]);