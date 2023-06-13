(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_new_option_md"],{37999:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return c},toc:function(){return a},default:function(){return h}});var i=r("9880"),s=r("23169"),d={sidebar_position:2},c="CLI 参数",a=[{text:"--lang <lang>",depth:2,id:"--lang-<lang>"},{text:"-c, --config <config>",depth:2,id:"-c,---config-<config>"},{text:"-d,--debug",depth:2,id:"-d,--debug"},{text:"--registry <registry>",depth:2,id:"--registry-<registry>"},{text:"--dist-tag <distTag>",depth:2,id:"--dist-tag-<disttag>"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"cli-参数",children:["CLI 参数",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cli-参数",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"new"})," 命令提供了很多配置参数用于配置其执行过程中的行为，可以通过 ",(0,i.jsx)(n.code,{children:"--help"})," 参数进行查看："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run new --help\n\nUsage: modern new [options]\n\n启用可选功能\n\nOptions:\n  --lang <lang>          设置 new 命令执行语言(zh 或者 en)\n  -c, --config <config>  生成器运行默认配置(JSON 字符串)\n  -d, --debug            开启 Debug 模式，打印调试日志信息 (default: false)\n  --dist-tag <tag>       生成器使用特殊的 npm Tag 版本\n  --registry <registry>  生成器运行过程中定制 npm Registry\n  -h, --help             display help for command\n"})}),"\n",(0,i.jsx)(n.p,{children:"下面将针对这些参数做详细介绍："}),"\n",(0,i.jsxs)(n.h2,{id:"--lang-<lang>",children:["--lang <lang>",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--lang-<lang>",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["执行执行语言，支持 ",(0,i.jsx)(n.code,{children:"zh"})," 和 ",(0,i.jsx)(n.code,{children:"en"}),"。"]}),"\n",(0,i.jsxs)(n.p,{children:["默认情况下，",(0,i.jsx)(n.code,{children:"new"})," 命令会自动识别用户的系统语言，选择使用中文或者英文，如果识别失败或者不符合使用习惯，可以使用该参数手动指定。"]}),"\n",(0,i.jsxs)(n.h2,{id:"-c,---config-<config>",children:["-c, --config <config>",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#-c,---config-<config>",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"指定项目默认配置。"}),"\n",(0,i.jsx)(n.p,{children:"默认情况下，new 命令在执行过程中会出现选择操作类型、开启功能等交互问题，当需要提前指定这些配置内容时，可以通过该字段传入。"}),"\n",(0,i.jsx)(n.p,{children:"该字段为 JSON 字符串，例如需指定 BFF 框架时："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'npm run new --config \'{"framework": "express"}\'\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"config"})," 支持的参数可查看",(0,i.jsx)(n.a,{href:"/guides/topic-detail/generator/new/config",children:"配置参数"}),"。"]}),"\n",(0,i.jsxs)(n.h2,{id:"-d,--debug",children:["-d,--debug",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#-d,--debug",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"展示调试日志。"}),"\n",(0,i.jsx)(n.p,{children:"当在使用过程中遇到问题时，可以使用该参数显示调试日志，方便快速定位问题位置及对问题进行排查。"}),"\n",(0,i.jsxs)(n.h2,{id:"--registry-<registry>",children:["--registry <registry>",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--registry-<registry>",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"指定执行子生成器和获取项目依赖版本的 npm registry。"}),"\n",(0,i.jsxs)(n.h2,{id:"--dist-tag-<disttag>",children:["--dist-tag <distTag>",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--dist-tag-<disttag>",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"指定生成器版本。"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"new"})," 命令执行过程中会执行更小的微生成器，默认会使用 ",(0,i.jsx)(n.code,{children:"latest"})," 的微生成器版本，使用该参数可以指定执行的微生成器的版本号的版本。"]}),"\n",(0,i.jsxs)(n.p,{children:["比如使用 ",(0,i.jsx)(n.code,{children:"next"})," 版本："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run new --dist-tag next\n"})})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}}}]);