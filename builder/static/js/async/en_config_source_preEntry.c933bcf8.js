"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[9878],{8986:function(s,e,l){l.r(e),l.d(e,{content:function(){return o},frontmatter:function(){return c},toc:function(){return r}});var n=l(39980);const c=void 0,r=[{id:"add-a-single-script",text:"Add a single script",depth:4},{id:"add-global-style",text:"Add global style",depth:4},{id:"add-multiple-scripts",text:"Add multiple scripts",depth:4}],o="\"- Type: `string | string[]`\\n- Default: `undefined`\\n\\nAdd a script before the entry file of each page. This script will be executed before the page code. It can be used to execute global logics, such as injecting polyfills, setting global styles, etc.\\n\\n#### Add a single script\\n\\nFirst create a `src/polyfill.ts` file:\\n\\n```js\\nconsole.log('I am a polyfill');\\n```\\n\\nThen configure `src/polyfill.ts` to `source.preEntry`:\\n\\n```js\\nexport default {\\n  source: {\\n    preEntry: './src/polyfill.ts',\\n  },\\n};\\n```\\n\\nRe-run the compilation and visit any page, you can see that the code in `src/polyfill.ts` has been executed, and the `I am a polyfill` is logged in the console.\\n\\n#### Add global style\\n\\nYou can also configure the global style through `source.preEntry`, this CSS code will be loaded earlier than the page code, such as introducing a `normalize.css` file:\\n\\n```js\\nexport default {\\n  source: {\\n    preEntry: './src/normalize.css',\\n  },\\n};\\n```\\n\\n#### Add multiple scripts\\n\\nYou can add multiple scripts by setting `preEntry` to an array, and they will be executed in array order:\\n\\n```js\\nexport default {\\n  source: {\\n    preEntry: ['./src/polyfill-a.ts', './src/polyfill-b.ts'],\\n  },\\n};\\n```\\n\"";function a(s){const e=Object.assign({ul:"ul",li:"li",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Type: ",(0,n.jsx)(e.code,{children:"string | string[]"})]}),"\n",(0,n.jsxs)(e.li,{children:["Default: ",(0,n.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Add a script before the entry file of each page. This script will be executed before the page code. It can be used to execute global logics, such as injecting polyfills, setting global styles, etc."}),"\n",(0,n.jsxs)(e.h4,{id:"add-a-single-script",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#add-a-single-script",children:"#"}),"Add a single script"]}),"\n",(0,n.jsxs)(e.p,{children:["First create a ",(0,n.jsx)(e.code,{children:"src/polyfill.ts"})," file:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"console"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"log"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"I am a polyfill"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.p,{children:["Then configure ",(0,n.jsx)(e.code,{children:"src/polyfill.ts"})," to ",(0,n.jsx)(e.code,{children:"source.preEntry"}),":"]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"source"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"preEntry"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"./src/polyfill.ts"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.p,{children:["Re-run the compilation and visit any page, you can see that the code in ",(0,n.jsx)(e.code,{children:"src/polyfill.ts"})," has been executed, and the ",(0,n.jsx)(e.code,{children:"I am a polyfill"})," is logged in the console."]}),"\n",(0,n.jsxs)(e.h4,{id:"add-global-style",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#add-global-style",children:"#"}),"Add global style"]}),"\n",(0,n.jsxs)(e.p,{children:["You can also configure the global style through ",(0,n.jsx)(e.code,{children:"source.preEntry"}),", this CSS code will be loaded earlier than the page code, such as introducing a ",(0,n.jsx)(e.code,{children:"normalize.css"})," file:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"source"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"preEntry"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"./src/normalize.css"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h4,{id:"add-multiple-scripts",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#add-multiple-scripts",children:"#"}),"Add multiple scripts"]}),"\n",(0,n.jsxs)(e.p,{children:["You can add multiple scripts by setting ",(0,n.jsx)(e.code,{children:"preEntry"})," to an array, and they will be executed in array order:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"source"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"preEntry"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"./src/polyfill-a.ts"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"./src/polyfill-b.ts"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,n.jsx)(e,Object.assign({},s,{children:(0,n.jsx)(a,s)})):a(s)}}}]);