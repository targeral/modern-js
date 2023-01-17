"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[3827],{6e3:function(s,e,n){n.r(e),n.d(e,{content:function(){return r},frontmatter:function(){return c},toc:function(){return o}});var l=n(39980);const c=void 0,o=[{id:"\u793a\u4f8b",text:"\u793a\u4f8b",depth:4},{id:"\u6839\u636e\u4ea7\u7269\u7c7b\u578b\u8bbe\u7f6e",text:"\u6839\u636e\u4ea7\u7269\u7c7b\u578b\u8bbe\u7f6e",depth:4}],r="\"- Type: `string | Record<BuilderTarget, string>`\\n- Default: `undefined`\\n\\n\u7528\u4e8e\u4e3a [resolve.extensions](https://webpack.js.org/configuration/resolve/#resolveextensions) \u6dfb\u52a0\u7edf\u4e00\u7684\u524d\u7f00\u3002\\n\\n\u5982\u679c\u591a\u4e2a\u6587\u4ef6\u62e5\u6709\u76f8\u540c\u7684\u540d\u79f0\uff0c\u4f46\u5177\u6709\u4e0d\u540c\u7684\u6587\u4ef6\u540e\u7f00\uff0cBuilder \u4f1a\u6839\u636e extensions \u6570\u7ec4\u7684\u987a\u5e8f\u8fdb\u884c\u8bc6\u522b\uff0c\u89e3\u6790\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u88ab\u8bc6\u522b\u7684\u6587\u4ef6\uff0c\u5e76\u8df3\u8fc7\u5176\u4f59\u6587\u4ef6\u3002\\n\\n#### \u793a\u4f8b\\n\\n\u4e0b\u9762\u662f\u914d\u7f6e `.web` \u524d\u7f00\u7684\u4f8b\u5b50\u3002\\n\\n```js\\nexport default {\\n  source: {\\n    resolveExtensionPrefix: '.web',\\n  },\\n};\\n```\\n\\n\u914d\u7f6e\u5b8c\u6210\u540e\uff0cextensions \u6570\u7ec4\u4f1a\u53d1\u751f\u4ee5\u4e0b\u53d8\u5316\uff1a\\n\\n```js\\n// \u914d\u7f6e\u524d\\nconst extensions = ['.js', '.ts', ...];\\n\\n// \u914d\u7f6e\u540e\\nconst extensions = ['.web.js', '.js', '.web.ts' , '.ts', ...];\\n```\\n\\n\u5728\u4ee3\u7801\u4e2d `import './foo'` \u65f6\uff0c\u4f1a\u4f18\u5148\u8bc6\u522b `foo.web.js` \u6587\u4ef6\uff0c\u518d\u8bc6\u522b `foo.js` \u6587\u4ef6\u3002\\n\\n#### \u6839\u636e\u4ea7\u7269\u7c7b\u578b\u8bbe\u7f6e\\n\\n\u5f53\u4f60\u540c\u65f6\u6784\u5efa\u591a\u79cd\u7c7b\u578b\u7684\u4ea7\u7269\u65f6\uff0c\u4f60\u53ef\u4ee5\u4e3a\u4e0d\u540c\u7684\u4ea7\u7269\u7c7b\u578b\u8bbe\u7f6e\u4e0d\u540c\u7684 extension \u524d\u7f00\u3002\u6b64\u65f6\uff0c\u4f60\u9700\u8981\u628a `resolveExtensionPrefix` \u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5bf9\u8c61\u7684 key \u4e3a\u5bf9\u5e94\u7684\u4ea7\u7269\u7c7b\u578b\u3002\\n\\n\u6bd4\u5982\u4e3a `web` \u548c `node` \u8bbe\u7f6e\u4e0d\u540c\u7684 extension \u524d\u7f00\uff1a\\n\\n```js\\nexport default {\\n  output: {\\n    source: {\\n      resolveExtensionPrefix: {\\n        web: '.web',\\n        node: '.node',\\n      },\\n    },\\n  },\\n};\\n```\\n\\n\u5728\u4ee3\u7801\u4e2d `import './foo'` \u65f6\uff0c\u5bf9\u4e8e node \u4ea7\u7269\uff0c\u4f1a\u4f18\u5148\u8bc6\u522b `foo.node.js` \u6587\u4ef6\uff0c\u800c\u5bf9\u4e8e web \u4ea7\u7269\uff0c\u5219\u4f1a\u4f18\u5148\u8bc6\u522b `foo.web.js` \u6587\u4ef6\u3002\\n\"";function i(s){const e=Object.assign({ul:"ul",li:"li",code:"code",p:"p",a:"a",h4:"h4",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Type: ",(0,l.jsx)(e.code,{children:"string | Record<BuilderTarget, string>"})]}),"\n",(0,l.jsxs)(e.li,{children:["Default: ",(0,l.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u7528\u4e8e\u4e3a ",(0,l.jsx)(e.a,{href:"https://webpack.js.org/configuration/resolve/#resolveextensions-2",target:"_blank",rel:"nofollow",children:"resolve.extensions"})," \u6dfb\u52a0\u7edf\u4e00\u7684\u524d\u7f00\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u591a\u4e2a\u6587\u4ef6\u62e5\u6709\u76f8\u540c\u7684\u540d\u79f0\uff0c\u4f46\u5177\u6709\u4e0d\u540c\u7684\u6587\u4ef6\u540e\u7f00\uff0cBuilder \u4f1a\u6839\u636e extensions \u6570\u7ec4\u7684\u987a\u5e8f\u8fdb\u884c\u8bc6\u522b\uff0c\u89e3\u6790\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u88ab\u8bc6\u522b\u7684\u6587\u4ef6\uff0c\u5e76\u8df3\u8fc7\u5176\u4f59\u6587\u4ef6\u3002"}),"\n",(0,l.jsxs)(e.h4,{id:"\u793a\u4f8b",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793a\u4f8b",children:"#"}),"\u793a\u4f8b"]}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0b\u9762\u662f\u914d\u7f6e ",(0,l.jsx)(e.code,{children:".web"})," \u524d\u7f00\u7684\u4f8b\u5b50\u3002"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"source"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"resolveExtensionPrefix"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:".web"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"\u914d\u7f6e\u5b8c\u6210\u540e\uff0cextensions \u6570\u7ec4\u4f1a\u53d1\u751f\u4ee5\u4e0b\u53d8\u5316\uff1a"}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#616E88"},children:"// \u914d\u7f6e\u524d"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"extensions"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:".js"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:".ts"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"..."}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#616E88"},children:"// \u914d\u7f6e\u540e"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"extensions"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:".web.js"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:".js"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:".web.ts"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:".ts"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"..."}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u4ee3\u7801\u4e2d ",(0,l.jsx)(e.code,{children:"import './foo'"})," \u65f6\uff0c\u4f1a\u4f18\u5148\u8bc6\u522b ",(0,l.jsx)(e.code,{children:"foo.web.js"})," \u6587\u4ef6\uff0c\u518d\u8bc6\u522b ",(0,l.jsx)(e.code,{children:"foo.js"})," \u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(e.h4,{id:"\u6839\u636e\u4ea7\u7269\u7c7b\u578b\u8bbe\u7f6e",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6839\u636e\u4ea7\u7269\u7c7b\u578b\u8bbe\u7f6e",children:"#"}),"\u6839\u636e\u4ea7\u7269\u7c7b\u578b\u8bbe\u7f6e"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5f53\u4f60\u540c\u65f6\u6784\u5efa\u591a\u79cd\u7c7b\u578b\u7684\u4ea7\u7269\u65f6\uff0c\u4f60\u53ef\u4ee5\u4e3a\u4e0d\u540c\u7684\u4ea7\u7269\u7c7b\u578b\u8bbe\u7f6e\u4e0d\u540c\u7684 extension \u524d\u7f00\u3002\u6b64\u65f6\uff0c\u4f60\u9700\u8981\u628a ",(0,l.jsx)(e.code,{children:"resolveExtensionPrefix"})," \u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5bf9\u8c61\u7684 key \u4e3a\u5bf9\u5e94\u7684\u4ea7\u7269\u7c7b\u578b\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u6bd4\u5982\u4e3a ",(0,l.jsx)(e.code,{children:"web"})," \u548c ",(0,l.jsx)(e.code,{children:"node"})," \u8bbe\u7f6e\u4e0d\u540c\u7684 extension \u524d\u7f00\uff1a"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"output"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"source"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"resolveExtensionPrefix"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"web"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:".web"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"node"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:".node"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u4ee3\u7801\u4e2d ",(0,l.jsx)(e.code,{children:"import './foo'"})," \u65f6\uff0c\u5bf9\u4e8e node \u4ea7\u7269\uff0c\u4f1a\u4f18\u5148\u8bc6\u522b ",(0,l.jsx)(e.code,{children:"foo.node.js"})," \u6587\u4ef6\uff0c\u800c\u5bf9\u4e8e web \u4ea7\u7269\uff0c\u5219\u4f1a\u4f18\u5148\u8bc6\u522b ",(0,l.jsx)(e.code,{children:"foo.web.js"})," \u6587\u4ef6\u3002"]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(i,s)})):i(s)}}}]);