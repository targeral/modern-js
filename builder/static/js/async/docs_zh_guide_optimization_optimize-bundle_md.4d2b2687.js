(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_optimization_optimize-bundle_md"],{95050:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return i},toc:function(){return c},default:function(){return o}});var r=s("9880"),d=s("23169"),l={},i="产物体积优化",c=[{text:"减少重复依赖",depth:2,id:"减少重复依赖"},{text:"使用更轻量的库",depth:2,id:"使用更轻量的库"},{text:"提升 Browserslist 范围",depth:2,id:"提升-browserslist-范围"},{text:"按需引入 polyfill",depth:2,id:"按需引入-polyfill"},{text:"使用图片压缩",depth:2,id:"使用图片压缩"},{text:"代码拆包",depth:2,id:"代码拆包"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",div:"div",pre:"pre",img:"img"},(0,d.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"产物体积优化",children:["产物体积优化",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#产物体积优化",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"产物体积的优化在生产环境中是非常重要的，因为它直接影响到了线上的用户体验。在这篇文档中，我们将介绍在 Builder 中一些常见的产物体积优化方式。"}),"\n",(0,r.jsxs)(n.h2,{id:"减少重复依赖",children:["减少重复依赖",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#减少重复依赖",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在业务项目中，会存在某些第三方依赖被安装了多个版本的现象。重复依赖会导致包体积变大、构建速度变慢。"}),"\n",(0,r.jsx)(n.p,{children:"我们可以通过社区中的一些工具来检测或消除重复依赖。"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["如果你在使用 ",(0,r.jsx)(n.code,{children:"pnpm >= 7.26.0"}),"，可以使用 pnpm 自带的 ",(0,r.jsx)(n.a,{href:"https://pnpm.io/cli/dedupe",target:"_blank",rel:"noopener noreferrer",children:"pnpm dedupe"})," 命令来升级和消除其中的重复依赖。"]}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm dedupe\n"})})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["如果你在使用 ",(0,r.jsx)(n.code,{children:"pnpm < 7.26.0"})," 版本，可以使用 ",(0,r.jsx)(n.a,{href:"https://github.com/ocavue/pnpm-deduplicate",target:"_blank",rel:"noopener noreferrer",children:"pnpm-deduplicate"})," 来分析出所有的重复依赖，并通过升级依赖或声明 ",(0,r.jsx)(n.a,{href:"https://pnpm.io/package_json#pnpmoverrides",target:"_blank",rel:"noopener noreferrer",children:"pnpm overrides"})," 进行版本合并。"]}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx pnpm-deduplicate --list\n"})})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["如果你在使用 ",(0,r.jsx)(n.code,{children:"yarn"}),"，可以使用 ",(0,r.jsx)(n.a,{href:"https://github.com/scinos/yarn-deduplicate",target:"_blank",rel:"noopener noreferrer",children:"yarn-deduplicate"})," 来自动合并重复依赖："]}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx yarn-deduplicate && yarn\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"使用更轻量的库",children:["使用更轻量的库",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用更轻量的库",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["建议将项目中体积较大的三方库替换为更轻量的库，比如将 ",(0,r.jsx)(n.a,{href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer",children:"moment"})," 替换为 ",(0,r.jsx)(n.a,{href:"https://day.js.org/",target:"_blank",rel:"noopener noreferrer",children:"day.js"}),"。"]}),"\n",(0,r.jsxs)(n.p,{children:["如果你需要找出项目中体积较大的三方库，可以在执行构建时添加 ",(0,r.jsx)(n.a,{href:"/api/config-performance",children:"BUNDLE_ANALYZE=true"})," 环境变量："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"BUNDLE_ANALYZE=true pnpm build\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"添加该参数后，Builder 会生成一个分析构建产物体积的 HTML 文件，手动在浏览器中打开该文件，可以看到打包产物的瓦片图。区块的面积越大，说明该模块的体积越大。"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/mwa-build-analyze-8784f762c1ab0cb20935829d5f912c4c.png",alt:""})}),"\n",(0,r.jsxs)(n.h2,{id:"提升-browserslist-范围",children:["提升 Browserslist 范围",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#提升-browserslist-范围",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Builder 会根据项目的 Browserslist 配置范围进行代码编译，并注入相应的 Polyfill。如果项目不需要兼容旧版浏览器，可以根据实际情况来提升 Browserslist 范围，从而减少在语法和 Polyfill 上的编译开销。"}),"\n",(0,r.jsx)(n.p,{children:"Builder 默认的 Browserslist 配置为："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"['> 0.01%', 'not dead', 'not op_mini all'];\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"比如只兼容 Chrome 61 以上的浏览器，可以改成："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"['Chrome >= 61'];\n"})})})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["请阅读 ",(0,r.jsx)(n.a,{href:"/guide/advanced/browserslist",children:"设置浏览器范围"})," 章节来了解更多关于 Browserslist 的用法。\n"]})})]}),"\n",(0,r.jsxs)(n.h2,{id:"按需引入-polyfill",children:["按需引入 polyfill",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#按需引入-polyfill",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在明确第三方依赖不需要额外 polyfill 的情况下，你可以将 ",(0,r.jsx)(n.a,{href:"/api/config-output",children:"output.polyfill"})," 设置为 ",(0,r.jsx)(n.code,{children:"usage"}),"。"]}),"\n",(0,r.jsxs)(n.p,{children:["在 ",(0,r.jsx)(n.code,{children:"usage"})," 模式下，Builder 会分析源代码中使用的语法，按需注入所需的 polyfill 代码，从而减少 polyfill 的代码量。"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    polyfill: 'usage',\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["请阅读 ",(0,r.jsx)(n.a,{href:"/guide/advanced/browser-compatibility",children:"浏览器兼容性"})," 章节来了解更多关于 polyfill 的用法。\n"]})})]}),"\n",(0,r.jsxs)(n.h2,{id:"使用图片压缩",children:["使用图片压缩",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用图片压缩",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在一般的前端项目中，图片资源的体积往往是项目产物体积的大头，因此如果能尽可能精简图片的体积，那么将会对项目的打包产物体积起到明显的优化效果。你可以在 Builder 中注册插件来启用图片压缩功能:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"import { builderPluginImageCompress } from '@modern-js/builder-plugin-image-compress';\n\n// 往 builder 实例上添加插件\nbuilder.addPlugins([builderPluginImageCompress()]);\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["详见 ",(0,r.jsx)(n.a,{href:"/plugins/plugin-image-compress",children:"Image Compress 插件"}),"。"]}),"\n",(0,r.jsxs)(n.h2,{id:"代码拆包",children:["代码拆包",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码拆包",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"良好的拆包策略对于提升应用的加载性能是十分重要的，可以充分利用浏览器的缓存机制，减少请求数量，加快页面加载速度。"}),"\n",(0,r.jsxs)(n.p,{children:["在 Builder 中内置了",(0,r.jsx)(n.a,{href:"/guide/optimization/split-chunk",children:"多种拆包策略"}),"，可以满足大部分应用的需求，你也可以根据自己的业务场景，自定义拆包配置。"]}),"\n",(0,r.jsxs)(n.p,{children:["比如将 node_modules 下的 ",(0,r.jsx)(n.code,{children:"axios"})," 库拆分到 ",(0,r.jsx)(n.code,{children:"axios.js"})," 中："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n      forceSplitting: {\n        axios: /node_modules\\/axios/,\n      },\n    },\n  },\n};\n"})})})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);