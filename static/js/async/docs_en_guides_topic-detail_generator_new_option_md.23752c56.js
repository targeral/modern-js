(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_new_option_md"],{90410:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var i,s=r("15169"),t=r("43932"),a=r("9880"),o=r("23169");function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2"},(0,o.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"cli-parameters",children:["CLI Parameters",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cli-parameters",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"new"})," command provides many configuration parameters to configure its behavior during execution, which can be viewed using the ",(0,a.jsx)(n.code,{children:"--help"})," parameter:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run new --help\n\nUsage: modern new [options]\n\nenable optional features or add a new entry\n\nOptions:\n  --lang <lang>          set new command language(en or zh)\n  -c, --config <config>  set default generator config(json string)\n  -d, --debug            using debug mode to log something (default: false)\n  --dist-tag <tag>       use specified tag version for it's generator\n  --registry <registry>  set npm registry url to run npm command\n  -h, --help             display help for command\n"})}),"\n",(0,a.jsx)(n.p,{children:"The following will provide a detailed introduction to these parameters:"}),"\n",(0,a.jsxs)(n.h2,{id:"--lang-<lang>",children:["--lang <lang>",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--lang-<lang>",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["The language used for execution, supports ",(0,a.jsx)(n.code,{children:"zh"})," and ",(0,a.jsx)(n.code,{children:"en"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["By default, the ",(0,a.jsx)(n.code,{children:"new"})," command will automatically recognize the user's system language and choose to use Chinese or English. If recognition fails or does not meet usage habits, this parameter can be used to manually specify it."]}),"\n",(0,a.jsxs)(n.h2,{id:"-c,---config-<config>",children:["-c, --config <config>",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#-c,---config-<config>",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Specify the default configuration for the project."}),"\n",(0,a.jsxs)(n.p,{children:["By default, the ",(0,a.jsx)(n.code,{children:"new"})," command will prompt interactive questions during the execution process for selecting operation types, enabling features, etc. When it is necessary to specify these configuration contents in advance, they can be passed in through this field."]}),"\n",(0,a.jsx)(n.p,{children:"This field is a JSON string. For example, to specify the BFF framework:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'npm run new --config \'{"framework": "express"}\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The parameters supported by ",(0,a.jsx)(n.code,{children:"config"})," can be viewed in ",(0,a.jsx)(n.a,{href:"/guides/topic-detail/generator/new/config",children:"Configuration Parameters"}),"。"]}),"\n",(0,a.jsxs)(n.h2,{id:"-d,--debug",children:["-d,--debug",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#-d,--debug",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Displays debug logs."}),"\n",(0,a.jsx)(n.p,{children:"When encountering problems during use, this parameter can be used to display debug logs, which is convenient for quickly locating the problem location and troubleshooting the problem."}),"\n",(0,a.jsxs)(n.h2,{id:"--registry-<registry>",children:["--registry <registry>",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--registry-<registry>",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Specify the sub-generator to execute and the npm registry to fetch project dependencies version."}),"\n",(0,a.jsxs)(n.h2,{id:"--dist-tag-<disttag>",children:["--dist-tag <distTag>",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--dist-tag-<disttag>",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Specify the generator version."}),"\n",(0,a.jsxs)(n.p,{children:["During the execution process of the ",(0,a.jsx)(n.code,{children:"new"})," command, smaller micro-generator will be executed by default, and the latest micro-generator version will be used by default. This parameter can be used to specify the version number of the micro-generator to be executed."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, using the ",(0,a.jsx)(n.code,{children:"next"})," version:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run new --dist-tag next\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/en/guides/topic-detail/generator/new/option.md"]={toc:[{text:"--lang <lang>",id:"--lang-<lang>",depth:2},{text:"-c, --config <config>",id:"-c,---config-<config>",depth:2},{text:"-d,--debug",id:"-d,--debug",depth:2},{text:"--registry <registry>",id:"--registry-<registry>",depth:2},{text:"--dist-tag <distTag>",id:"--dist-tag-<disttag>",depth:2}],title:"CLI Parameters",frontmatter:{sidebar_position:2}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,t._(s._({},e),{children:(0,a.jsx)(d,s._({},e))})):d(e)}}}]);