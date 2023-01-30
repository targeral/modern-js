"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[9313],{87830:function(e,s,n){n.r(s),n.d(s,{content:function(){return r},frontmatter:function(){return c},toc:function(){return o}});var l=n(39980);const c=void 0,o=[{id:"example",text:"Example",depth:3}],r='"- **Type:** `string`\\n- **Default:** `\'root\'`\\n\\nBy default, the `root` element is included in the HTML template for component mounting, and the element id can be modified through `mountId`.\\n\\n```html\\n<body>\\n  <div id=\\"root\\"></div>\\n</body>\\n```\\n\\n### Example\\n\\nSet the `id` to `app`:\\n\\n```js\\nexport default {\\n  html: {\\n    mountId: \'app\',\\n  },\\n};\\n```\\n\\nAfter compilation:\\n\\n```html\\n<body>\\n  <div id=\\"app\\"></div>\\n</body>\\n```\\n\\n:::tip\\nIf you customized the HTML template, please make sure that the template contains `<div id=\\"<%= mountId %>\\"></div>`, otherwise this config will not take effect.\\n:::\\n"';function i(e){const s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",span:"span",h3:"h3",a:"a"},e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Type:"})," ",(0,l.jsx)(s.code,{children:"string"})]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Default:"})," ",(0,l.jsx)(s.code,{children:"'root'"})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["By default, the ",(0,l.jsx)(s.code,{children:"root"})," element is included in the HTML template for component mounting, and the element id can be modified through ",(0,l.jsx)(s.code,{children:"mountId"}),"."]}),"\n",(0,l.jsxs)(s.div,{className:"language-html",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"<body>"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"<div"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#8FBCBB"},children:"id"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"="}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(s.span,{style:{color:"#A3BE8C"},children:"root"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"></div>"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"</body>"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.h3,{id:"example",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,l.jsxs)(s.p,{children:["Set the ",(0,l.jsx)(s.code,{children:"id"})," to ",(0,l.jsx)(s.code,{children:"app"}),":"]}),"\n",(0,l.jsxs)(s.div,{className:"language-js",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#88C0D0"},children:"html"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#88C0D0"},children:"mountId"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(s.span,{style:{color:"#A3BE8C"},children:"app"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(s.p,{children:"After compilation:"}),"\n",(0,l.jsxs)(s.div,{className:"language-html",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"<body>"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"<div"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#8FBCBB"},children:"id"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"="}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(s.span,{style:{color:"#A3BE8C"},children:"app"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"></div>"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"</body>"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.div,{className:"modern-directive tip",children:[(0,l.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(s.div,{className:"modern-directive-content",children:(0,l.jsxs)(s.p,{children:["\nIf you customized the HTML template, please make sure that the template contains ",(0,l.jsx)(s.code,{children:'<div id="<%= mountId %>"></div>'}),", otherwise this config will not take effect."]})})]})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(i,e)})):i(e)}}}]);