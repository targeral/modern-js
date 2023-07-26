(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_hooks_api_api_mdx"],{17866:function(e,d,s){"use strict";s.r(d),s.d(d,{default:function(){return x}});var n,i=s("15169"),c=s("43932"),r=s("9880"),h=s("23169");function l(e){var d=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre"},(0,h.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.h1,{id:"tjs",children:["**/*.[tj]s",(0,r.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#tjs",children:"#"})]}),"\n",(0,r.jsxs)(d.p,{children:["在 ",(0,r.jsx)(d.a,{href:"/guides/advanced-features/bff/type#%E5%87%BD%E6%95%B0%E5%86%99%E6%B3%95",children:"BFF 函数写法"}),"下，声明 API 路由的文件。除了",(0,r.jsx)(d.a,{href:"/apis/app/hooks/api/api#%E7%99%BD%E5%90%8D%E5%8D%95",children:"某些约定文件"}),"外，",(0,r.jsx)(d.code,{children:"api"})," 目录下的文件会被注册为接口的路由。"]}),"\n",(0,r.jsxs)(d.div,{className:"modern-directive info",children:[(0,r.jsx)(d.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(d.div,{className:"modern-directive-content",children:[(0,r.jsxs)(d.p,{children:["使用 ",(0,r.jsx)(d.code,{children:"api"})," 目录需要开启 BFF 功能，需要在项目下执行 new 命令启用「BFF」功能。"]}),"\n",(0,r.jsxs)(d.p,{children:["该文件支持使用 ",(0,r.jsx)(d.code,{children:"js"})," 或 ",(0,r.jsx)(d.code,{children:"ts"})," 语言，但必须使用 ",(0,r.jsx)(d.code,{children:"esm"})," 语法导出函数。"]}),"\n"]})]}),"\n",(0,r.jsxs)(d.h2,{id:"该文件约定路由如下",children:["该文件约定路由如下：",(0,r.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#该文件约定路由如下",children:"#"})]}),"\n",(0,r.jsxs)(d.h3,{id:"默认路由",children:["默认路由",(0,r.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#默认路由",children:"#"})]}),"\n",(0,r.jsxs)(d.p,{children:["路由系统会将以 ",(0,r.jsx)(d.code,{children:"index"})," 命名的文件会被映射到上一层目录。"]}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"api/index.ts"})," -> ",(0,r.jsx)(d.code,{children:"$BASENAME/"})]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"api/user/index.ts"})," -> ",(0,r.jsx)(d.code,{children:"$BASENAME/user"})]}),"\n"]}),"\n",(0,r.jsxs)(d.h3,{id:"嵌套路由",children:["嵌套路由",(0,r.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#嵌套路由",children:"#"})]}),"\n",(0,r.jsx)(d.p,{children:"路由系统也支持解析嵌套的文件，如果创建嵌套文件夹结构，文件仍会以相同方式自动解析路由。"}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"api/hello.ts"})," -> ",(0,r.jsx)(d.code,{children:"$BASENAME/hello"})]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"api/user/list.ts"})," -> ",(0,r.jsx)(d.code,{children:"$BASENAME/user/list"})]}),"\n"]}),"\n",(0,r.jsxs)(d.h3,{id:"动态路由",children:["动态路由",(0,r.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#动态路由",children:"#"})]}),"\n",(0,r.jsxs)(d.p,{children:["路由系统支持通过 ",(0,r.jsx)(d.code,{children:"[]"})," 命名的文件目录生成动态路由。"]}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"api/user/[username]/info.ts"})," -> ",(0,r.jsx)(d.code,{children:"$BASENAME/user/:username/info"})]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"api/user/[username]/delete.ts"})," -> ",(0,r.jsx)(d.code,{children:"$BASENAME/user/:username/delete"})]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"api/article/[id]/info.ts"})," -> ",(0,r.jsx)(d.code,{children:"$BASENAME/article/:id/info"})]}),"\n"]}),"\n",(0,r.jsxs)(d.p,{children:["其中的 ",(0,r.jsx)(d.code,{children:"$BASENAME"})," 可以在 ",(0,r.jsx)(d.code,{children:"modern.config.js"})," 中进行配置，默认值为 ",(0,r.jsx)(d.code,{children:"/api"}),"。"]}),"\n",(0,r.jsxs)(d.h3,{id:"白名单",children:["白名单",(0,r.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#白名单",children:"#"})]}),"\n",(0,r.jsxs)(d.p,{children:["默认 ",(0,r.jsx)(d.code,{children:"api"})," 目录下所有文件都会当作 BFF 函数文件去解析，但同样我们也设置了白名单，这些文件不被被解析："]}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:["命名以 ",(0,r.jsx)(d.code,{children:"_"})," 开头的文件。例如：",(0,r.jsx)(d.code,{children:"_utils.ts"}),"。"]}),"\n",(0,r.jsxs)(d.li,{children:["命名以 ",(0,r.jsx)(d.code,{children:"_"})," 开头的文件夹下所有文件。例如：",(0,r.jsx)(d.code,{children:"_utils/index.ts"}),"、",(0,r.jsx)(d.code,{children:"_utils/cp.ts"}),"。"]}),"\n",(0,r.jsxs)(d.li,{children:["测试文件。例如：",(0,r.jsx)(d.code,{children:"foo.test.ts"}),"。"]}),"\n",(0,r.jsxs)(d.li,{children:["TypeScript 类型文件。例如：",(0,r.jsx)(d.code,{children:"hello.d.ts"}),"。"]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"node_module"})," 下的文件。"]}),"\n"]}),"\n",(0,r.jsxs)(d.h2,{id:"函数定义",children:["函数定义",(0,r.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#函数定义",children:"#"})]}),"\n",(0,r.jsx)(d.p,{children:"除了上面的路由规则之外，代码中函数定义与导出也有相应的约定。"}),"\n",(0,r.jsx)(d.p,{children:"函数通过具名导出，导出函数的名字为对应接口接受的 HTTP Method，即："}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-ts",children:"export const get = async () => {\n  return {\n    name: 'Modern.js',\n    desc: '现代 web 工程方案',\n  };\n};\n"})}),"\n",(0,r.jsxs)(d.p,{children:["这样导出函数，则会得到一个 ",(0,r.jsx)(d.code,{children:"GET"})," 接口。"]}),"\n",(0,r.jsxs)(d.p,{children:["应用工程中支持了 9 个 Method 定义，即：",(0,r.jsx)(d.code,{children:"GET"}),"、",(0,r.jsx)(d.code,{children:"POST"}),"、",(0,r.jsx)(d.code,{children:"PUT"}),"、",(0,r.jsx)(d.code,{children:"DELETE"}),"、",(0,r.jsx)(d.code,{children:"CONNECT"}),"、",(0,r.jsx)(d.code,{children:"TRACE"}),"、",(0,r.jsx)(d.code,{children:"PATCH"}),"、",(0,r.jsx)(d.code,{children:"OPTION"}),"、",(0,r.jsx)(d.code,{children:"HEAD"}),"，即可以用这些 Method 作为函数导出的名字。"]}),"\n",(0,r.jsxs)(d.p,{children:["名字是大小不敏感的，就是说，如果是 ",(0,r.jsx)(d.code,{children:"GET"}),"，写成 ",(0,r.jsx)(d.code,{children:"get"}),"、",(0,r.jsx)(d.code,{children:"Get"}),"、",(0,r.jsx)(d.code,{children:"GEt"}),"、",(0,r.jsx)(d.code,{children:"GET"}),"，都可以准确识别。而默认导出，即 ",(0,r.jsx)(d.code,{children:"export default xxx"})," 则会被映射为 ",(0,r.jsx)(d.code,{children:"Get"}),"。"]}),"\n",(0,r.jsxs)(d.p,{children:["因为 ",(0,r.jsx)(d.code,{children:"delete"})," 是 JavaScript 中的关键字，可以使用 ",(0,r.jsx)(d.code,{children:"del"})," 或者 ",(0,r.jsx)(d.code,{children:"DELETE"})," 代替。"]}),"\n",(0,r.jsx)(d.p,{children:"可以在一个文件中定义多个不同 Method 的函数，但如果定义多个相同 Method 的函数，则只有第一个会生效。"}),"\n",(0,r.jsxs)(d.div,{className:"modern-directive info",children:[(0,r.jsx)(d.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(d.div,{className:"modern-directive-content",children:[(0,r.jsx)(d.p,{children:"需要注意的是，定义的函数都应该是异步的，这个与函数调用时类型有关。"}),"\n"]})]})]})}(n=globalThis).__RSPRESS_PAGE_META||(n.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fhooks%2Fapi%2Fapi.mdx"]={toc:[{text:"该文件约定路由如下：",id:"该文件约定路由如下",depth:2},{text:"默认路由",id:"默认路由",depth:3},{text:"嵌套路由",id:"嵌套路由",depth:3},{text:"动态路由",id:"动态路由",depth:3},{text:"白名单",id:"白名单",depth:3},{text:"函数定义",id:"函数定义",depth:2}],title:"**/*.[tj]s",frontmatter:{title:"**/*.[tj]s",sidebar_position:1}};var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=Object.assign({},(0,h.useMDXComponents)(),e.components).wrapper;return d?(0,r.jsx)(d,(0,c._)((0,i._)({},e),{children:(0,r.jsx)(l,(0,i._)({},e))})):l(e)}}}]);