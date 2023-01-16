"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[5064],{92826:function(s,n,e){e.r(n),e.d(n,{content:function(){return o},frontmatter:function(){return c},toc:function(){return r}});var l=e(39980);const c=void 0,r=[{id:"example",text:"Example",depth:4}],o="\"- **Type**\\n\\n```ts\\ntype FilenameConfig = {\\n  js?: string;\\n  css?: string;\\n  svg?: string;\\n  font?: string;\\n  image?: string;\\n  media?: string;\\n};\\n```\\n\\n- **Default**\\n\\n```js\\n// Development\\nconst devDefaultFilename = {\\n  js: '[name].js',\\n  css: '[name].css',\\n  svg: '[name].[contenthash:8].svg',\\n  font: '[name].[contenthash:8][ext]',\\n  image: '[name].[contenthash:8][ext]',\\n  media: '[name].[contenthash:8][ext]',\\n};\\n\\n// Production\\nconst prodDefaultFilename = {\\n  js: '[name].[contenthash:8].js',\\n  css: '[name].[contenthash:8].css',\\n  svg: '[name].[contenthash:8].svg',\\n  font: '[name].[contenthash:8][ext]',\\n  image: '[name].[contenthash:8][ext]',\\n  media: '[name].[contenthash:8][ext]',\\n};\\n```\\n\\nSets the filename of dist files.\\n\\nAfter the production build, there will be a hash in the middle of the filename by default. You can disable this behavior through the `output.disableFilenameHash` config.\\n\\nDetail:\\n\\n- `js`: The name of the JavaScript file.\\n- `css`: The name of the CSS style file.\\n- `svg`: The name of the SVG image.\\n- `font`: The name of the font file.\\n- `image`: The name of a non-SVG image.\\n- `media`: The name of a media asset, such as a video.\\n\\n#### Example\\n\\nSet the name of the JavaScript file to `[name]_script.js`:\\n\\n```js\\nexport default {\\n  output: {\\n    filename: {\\n      js:\\n        process.env.NODE_ENV === 'production'\\n          ? '[name]_script.[contenthash:8].js'\\n          : '[name]_script.js',\\n    },\\n  },\\n};\\n```\\n\"";function a(s){const n=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",span:"span",p:"p",h4:"h4",a:"a"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,l.jsxs)(n.div,{className:"language-ts",children:[(0,l.jsx)(n.div,{className:""}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(n.code,{children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"type"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#8FBCBB"},children:"FilenameConfig"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"="}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  js"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"?:"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#8FBCBB"},children:"string"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  css"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"?:"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#8FBCBB"},children:"string"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  svg"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"?:"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#8FBCBB"},children:"string"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  font"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"?:"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#8FBCBB"},children:"string"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  image"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"?:"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#8FBCBB"},children:"string"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  media"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"?:"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#8FBCBB"},children:"string"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Default"})}),"\n"]}),"\n",(0,l.jsxs)(n.div,{className:"language-js",children:[(0,l.jsx)(n.div,{className:""}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(n.code,{children:[(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"#616E88"},children:"// Development"})}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"const"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9"},children:"devDefaultFilename"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"="}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"js"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"[name].js"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"css"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"[name].css"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"svg"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"[name].[contenthash:8].svg"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"font"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"[name].[contenthash:8][ext]"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"image"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"[name].[contenthash:8][ext]"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"media"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"[name].[contenthash:8][ext]"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(n.span,{className:"line"}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"#616E88"},children:"// Production"})}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"const"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9"},children:"prodDefaultFilename"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"="}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"js"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"[name].[contenthash:8].js"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"css"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"[name].[contenthash:8].css"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"svg"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"[name].[contenthash:8].svg"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"font"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"[name].[contenthash:8][ext]"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"image"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"[name].[contenthash:8][ext]"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"media"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"[name].[contenthash:8][ext]"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(n.p,{children:"Sets the filename of dist files."}),"\n",(0,l.jsxs)(n.p,{children:["After the production build, there will be a hash in the middle of the filename by default. You can disable this behavior through the ",(0,l.jsx)(n.code,{children:"output.disableFilenameHash"})," config."]}),"\n",(0,l.jsx)(n.p,{children:"Detail:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"js"}),": The name of the JavaScript file."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"css"}),": The name of the CSS style file."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"svg"}),": The name of the SVG image."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"font"}),": The name of the font file."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"image"}),": The name of a non-SVG image."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"media"}),": The name of a media asset, such as a video."]}),"\n"]}),"\n",(0,l.jsxs)(n.h4,{id:"example",children:[(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,l.jsxs)(n.p,{children:["Set the name of the JavaScript file to ",(0,l.jsx)(n.code,{children:"[name]_script.js"}),":"]}),"\n",(0,l.jsxs)(n.div,{className:"language-js",children:[(0,l.jsx)(n.div,{className:""}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(n.code,{children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"output"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"filename"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(n.span,{style:{color:"#88C0D0"},children:"js"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9"},children:"process"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"."}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9"},children:"env"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"."}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9"},children:"NODE_ENV"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"==="}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"production"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"          "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:"?"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"[name]_script.[contenthash:8].js"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"          "}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:":"}),(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#A3BE8C"},children:"[name]_script.js"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(n.span,{className:"line"})]})})]})]})]})}n.default=function(s={}){const{wrapper:n}=s.components||{};return n?(0,l.jsx)(n,Object.assign({},s,{children:(0,l.jsx)(a,s)})):a(s)}}}]);