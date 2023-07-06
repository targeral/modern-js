(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_plugins_plugin-image-compress_mdx"],{63865:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d}});var r,i=s("15169"),o=s("43932"),a=s("9880"),l=s("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",h3:"h3",pre:"pre",code:"code"},(0,l.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"image-compress-plugin",children:["Image Compress Plugin",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#image-compress-plugin",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"With the image compression plugin, image resources used in the project can be compressed to reduce the size of the artifacts without affecting the visual appearance of the image."}),"\n",(0,a.jsxs)(n.h2,{id:"quick-start",children:["Quick Start",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive tip",children:[(0,a.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,a.jsx)(n.div,{className:"modern-directive-content",children:(0,a.jsx)(n.p,{children:"When using Rspack as the bundler, the Image Compress plugin is not currently supported."})})]}),"\n",(0,a.jsxs)(n.h3,{id:"install",children:["Install",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"You can install the plugin with the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/builder-plugin-image-compress -D\n\n# yarn\nyarn add @modern-js/builder-plugin-image-compress -D\n\n# pnpm\npnpm add @modern-js/builder-plugin-image-compress -D\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"register",children:["Register",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["In upper-level frameworks such as Modern.js, you can register image compress plugin through the ",(0,a.jsx)(n.code,{children:"builderPlugins"})," config:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { builderPluginImageCompress } from '@modern-js/builder-plugin-image-compress';\n\nexport default {\n  builderPlugins: [builderPluginImageCompress()],\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you are using the Builder's Node API, you can register image compress plugin through the ",(0,a.jsx)(n.code,{children:"addPlugins"})," method:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { builderPluginImageCompress } from '@modern-js/builder-plugin-image-compress';\n\n// add the plugin to the builder instance\nbuilder.addPlugins([builderPluginImageCompress()]);\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"config",children:["Config",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["The plugin accepts an array of compressor configuration options, each of which can be either a string or an object. The string can be the name of a built-in compressor and its default configuration enabled.\nOr use the object format configuration and specify the compressor in the ",(0,a.jsx)(n.code,{children:"use"})," field. The remaining fields of the object will be used as compressor configuration options."]}),"\n",(0,a.jsxs)(n.p,{children:["By default, the plugin will enable ",(0,a.jsx)(n.code,{children:"jpeg"}),", ",(0,a.jsx)(n.code,{children:"png"}),", ",(0,a.jsx)(n.code,{children:"ico"})," image compressors, which are equivalent to the following two examples:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"builderPluginImageCompress(['jpeg', 'png', 'ico']);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"builderPluginImageCompress([{ use: 'jpeg' }, { use: 'png' }, { use: 'ico' }]);\n"})}),"\n",(0,a.jsx)(n.p,{children:"The default configuration can be overridden by specifying a configuration option.\nFor example, to allow the jpeg compressor to recognize new extension name and to set the quality of the png compressor."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"builderPluginImageCompress([\n  { use: 'jpeg', test: /\\.(jpg|jpeg|jpe)$/ },\n  { use: 'png', minQuality: 50 },\n  'ico',\n]);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The default ",(0,a.jsx)(n.code,{children:"png"})," compressor is lossy.\nIf you want to replace it with a lossless compressor, you can use the following configuration."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"builderPluginImageCompress(['jpeg', 'pngLossless', 'ico']);\n"})}),"\n",(0,a.jsx)(n.p,{children:"The list of configuration options will eventually be converted to the corresponding bundler loader configuration, so compressors follow the same bottom-to-top matching rule."}),"\n",(0,a.jsxs)(n.p,{children:["For example, the ",(0,a.jsx)(n.code,{children:"png"})," compressor will take precedence over the ",(0,a.jsx)(n.code,{children:"pngLossless"})," compressor for the following configuration:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"builderPluginImageCompress(['jpeg', 'pngLossless', 'ico', 'png']);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For more information on compressors, please visit ",(0,a.jsx)(n.a,{href:"https://image.napi.rs/docs",target:"_blank",rel:"noopener noreferrer",children:"@napi-rs/image"}),"."]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern-js%2Fmodern-js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fen%2Fplugins%2Fplugin-image-compress.mdx"]={toc:[{text:"Quick Start",id:"quick-start",depth:2},{text:"Install",id:"install",depth:3},{text:"Register",id:"register",depth:3},{text:"Config",id:"config",depth:2}],title:"Image Compress Plugin",frontmatter:{}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,o._)((0,i._)({},e),{children:(0,a.jsx)(c,(0,i._)({},e))})):c(e)}}}]);