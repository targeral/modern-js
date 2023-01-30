"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[7480],{20380:function(s,e,l){l.r(e),l.d(e,{content:function(){return o},frontmatter:function(){return c},toc:function(){return r}});var n=l(39980);const c=void 0,r=[{id:"example",text:"Example",depth:3}],o="\"- **Type:** `Record<string, ArrayOrNot<HtmlInjectTag | HtmlInjectTagHandler>>`\\n- **Default:** `undefined`\\n\\nUsed for multiple entry applications, injecting different tags for each entry.\\n\\nThe usage is the same as `tags`, and you can use the \\\"entry name\\\" as the key to set each page individually.\\n\\n`tagsByEntries` will override the value set in `tags`.\\n\\n### Example\\n\\n```js\\nexport default {\\n  html: {\\n    tags: [\\n      { tag: 'script', attrs: { src: 'a.js' } }\\n    ],\\n    tagsByEntries: {\\n      foo: [\\n        { tag: 'script', attrs: { src: 'b.js' } }\\n      ],\\n    },\\n  },\\n};\\n```\\n\\nCompile the application and you can see a tag injected on the `foo` page:\\n\\n```html\\n<script src=\\\"b.js\\\"><\/script>\\n```\\n\\nAnd for any other pages:\\n\\n```html\\n<script src=\\\"a.js\\\"><\/script>\\n```\\n\"";function a(s){const e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Type:"})," ",(0,n.jsx)(e.code,{children:"Record<string, ArrayOrNot<HtmlInjectTag | HtmlInjectTagHandler>>"})]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Default:"})," ",(0,n.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Used for multiple entry applications, injecting different tags for each entry."}),"\n",(0,n.jsxs)(e.p,{children:["The usage is the same as ",(0,n.jsx)(e.code,{children:"tags"}),', and you can use the "entry name" as the key to set each page individually.']}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"tagsByEntries"})," will override the value set in ",(0,n.jsx)(e.code,{children:"tags"}),"."]}),"\n",(0,n.jsxs)(e.h3,{id:"example",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"html"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"tags"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" ["})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"tag"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"script"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"attrs"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"src"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"a.js"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    ]"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"tagsByEntries"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"foo"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" ["})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"tag"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"script"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"attrs"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"src"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"b.js"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      ]"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.p,{children:["Compile the application and you can see a tag injected on the ",(0,n.jsx)(e.code,{children:"foo"})," page:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-html",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"<script"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"src"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:'"'}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"b.js"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:'"'}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"><\/script>"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsx)(e.p,{children:"And for any other pages:"}),"\n",(0,n.jsxs)(e.div,{className:"language-html",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"<script"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"src"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:'"'}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"a.js"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:'"'}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"><\/script>"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,n.jsx)(e,Object.assign({},s,{children:(0,n.jsx)(a,s)})):a(s)}}}]);