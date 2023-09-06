(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_plugins_plugin-image-compress_mdx"],{5457:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return p}});var r,i=n("15169"),d=n("43932"),l=n("9880"),a=n("23169");function c(e){var s=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",h3:"h3",pre:"pre",code:"code"},(0,a.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.h1,{id:"image-compress-插件",children:["Image Compress 插件",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#image-compress-插件",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"Image Compress 插件会将项目中用到的图片资源进行压缩处理，进而在图片视觉观感不受影响的同时减小产物体积。"}),"\n",(0,l.jsxs)(s.div,{className:"modern-directive tip",children:[(0,l.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(s.div,{className:"modern-directive-content",children:(0,l.jsx)(s.p,{children:"在使用 Rspack 作为打包工具时，Image Compress 插件暂不支持使用。"})})]}),"\n",(0,l.jsxs)(s.h2,{id:"快速开始",children:["快速开始",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"})]}),"\n",(0,l.jsxs)(s.h3,{id:"安装插件",children:["安装插件",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#安装插件",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"你可以通过如下的命令安装插件:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/builder-plugin-image-compress -D\n\n# yarn\nyarn add @modern-js/builder-plugin-image-compress -D\n\n# pnpm\npnpm add @modern-js/builder-plugin-image-compress -D\n"})}),"\n",(0,l.jsxs)(s.h3,{id:"注册插件",children:["注册插件",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#注册插件",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["在 Modern.js 等上层框架中，你可以通过 ",(0,l.jsx)(s.code,{children:"builderPlugins"})," 配置项来注册 Image Compress 插件："]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"import { builderPluginImageCompress } from '@modern-js/builder-plugin-image-compress';\n\nexport default {\n  builderPlugins: [builderPluginImageCompress()],\n};\n"})}),"\n",(0,l.jsxs)(s.p,{children:["当你直接调用 Builder 的 Node API 时，可以通过 ",(0,l.jsx)(s.code,{children:"addPlugins"})," 方法来注册 Image Compress 插件："]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"import { builderPluginImageCompress } from '@modern-js/builder-plugin-image-compress';\n\n// 往 builder 实例上添加插件\nbuilder.addPlugins([builderPluginImageCompress()]);\n"})}),"\n",(0,l.jsxs)(s.h2,{id:"配置项",children:["配置项",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#配置项",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["插件接受一系列压缩器配置项组成的数组，数组的每一项既可以是字符串也可以是对象。字符串代表使用对应名称的压缩器并启用其默认配置，\n或是使用对象格式配置并在 ",(0,l.jsx)(s.code,{children:"use"})," 字段指定压缩器，对象的剩余字段将作为压缩器的配置项。"]}),"\n",(0,l.jsxs)(s.p,{children:["插件默认会开启 ",(0,l.jsx)(s.code,{children:"jpeg"}),", ",(0,l.jsx)(s.code,{children:"png"}),", ",(0,l.jsx)(s.code,{children:"ico"})," 三种图片压缩器，即等同于如下两种写法的配置："]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"builderPluginImageCompress(['jpeg', 'png', 'ico']);\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"builderPluginImageCompress([{ use: 'jpeg' }, { use: 'png' }, { use: 'ico' }]);\n"})}),"\n",(0,l.jsx)(s.p,{children:"通过指定配置项可以覆盖默认配置，例如让 jpeg 压缩器识别新的拓展名并设置 png 压缩器的质量："}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"builderPluginImageCompress([\n  { use: 'jpeg', test: /\\.(jpg|jpeg|jpe)$/ },\n  { use: 'png', minQuality: 50 },\n  'ico',\n]);\n"})}),"\n",(0,l.jsxs)(s.p,{children:["默认的 ",(0,l.jsx)(s.code,{children:"png"})," 压缩器为有损压缩，如果需要将其替换为无损压缩器，你可以使用如下配置："]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"builderPluginImageCompress(['jpeg', 'pngLossless', 'ico']);\n"})}),"\n",(0,l.jsxs)(s.p,{children:["配置项列表最终会转换成对应的 bundler loader 配置，因此压缩器也遵循从下到上依次匹配的规则。\n例如对于如下配置，",(0,l.jsx)(s.code,{children:"png"})," 压缩器会优先于 ",(0,l.jsx)(s.code,{children:"pngLossless"})," 压缩器生效："]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"builderPluginImageCompress(['jpeg', 'pngLossless', 'ico', 'png']);\n"})}),"\n",(0,l.jsxs)(s.p,{children:["压缩器的具体配置项请参考 ",(0,l.jsx)(s.a,{href:"https://image.napi.rs/docs",target:"_blank",rel:"noopener noreferrer",children:"@napi-rs/image"}),"。"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fplugins%2Fplugin-image-compress.mdx"]={toc:[{text:"快速开始",id:"快速开始",depth:2},{text:"安装插件",id:"安装插件",depth:3},{text:"注册插件",id:"注册插件",depth:3},{text:"配置项",id:"配置项",depth:2}],title:"Image Compress 插件",frontmatter:{}};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return s?(0,l.jsx)(s,(0,d._)((0,i._)({},e),{children:(0,l.jsx)(c,(0,i._)({},e))})):c(e)}}}]);