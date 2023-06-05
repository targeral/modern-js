(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_dev_https_mdx"],{439:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var s=r("9880"),t=r("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h4:"h4",a:"a",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean | { key: string; cert: string }"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"配置该选项后，可以开启 Dev Server 对 HTTPS 的支持，同时会禁用 HTTP 服务器。"}),"\n",(0,s.jsx)(n.p,{children:"开启前："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n"})}),"\n",(0,s.jsx)(n.p,{children:"开启后："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"  > Local:    https://localhost:8080/\n  > Network:  https://192.168.0.1:8080/\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"自动生成证书",children:["自动生成证书",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自动生成证书",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["你可以直接将 ",(0,s.jsx)(n.code,{children:"https"})," 设置为 ",(0,s.jsx)(n.code,{children:"true"}),"，Builder 会基于 ",(0,s.jsx)(n.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"})," 来自动生成 Dev Server 所需的 HTTPS 证书。"]}),"\n",(0,s.jsxs)(n.p,{children:["使用这种方式时，你需要在当前项目中手动安装 ",(0,s.jsx)(n.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"})," 依赖："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install devcert@1.2.2 -D\n\n# yarn\nyarn add devcert@1.2.2 -D\n\n# pnpm\npnpm add devcert@1.2.2 -D\n"})}),"\n",(0,s.jsxs)(n.p,{children:["然后配置 ",(0,s.jsx)(n.code,{children:"dev.https"})," 为 ",(0,s.jsx)(n.code,{children:"true"})," 即可："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    https: true,\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"该方式有一定局限性，由于 devcert 目前不支持 IP addresses，因此访问 Network 域名时，会遇到「您的连接不是私密连接」的问题。"}),"\n",(0,s.jsx)(n.p,{children:"此问题的解决方法为：点击 Chrome 浏览器问题页面的「高级」->「继续前往 192.168.0.1（不安全）」。"}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["https 代理自动安装证书需要获取 root 权限, 请根据提示输入密码即可。 ",(0,s.jsx)(n.strong,{children:"密码仅在信任证书时使用，不会泄漏或者用于其他环节"}),"。\n"]})})]}),"\n",(0,s.jsxs)(n.h4,{id:"手动设置证书",children:["手动设置证书",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#手动设置证书",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["你也可以在 ",(0,s.jsx)(n.code,{children:"dev.https"})," 选项中手动传入 HTTPS 服务器所需要的证书和对应的私钥，这个参数将直接传递给 Node.js 中 https 模块的 createServer。"]}),"\n",(0,s.jsxs)(n.p,{children:["具体可以参考 ",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener",target:"_blank",rel:"noopener noreferrer",children:"https.createServer"}),"。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import fs from 'fs';\n\nexport default {\n  dev: {\n    https: {\n      key: fs.readFileSync('certificates/private.pem'),\n      cert: fs.readFileSync('certificates/public.pem'),\n    },\n  },\n};\n"})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},93632:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return i},toc:function(){return a},default:function(){return h}});var s=r("9880"),t=r("23169"),d=r.ir(r("439")),c={sidebar_label:"https"},i="dev.https",a=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"devhttps",children:["dev.https",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devhttps",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-dev.html#devhttps",target:"_blank",rel:"noopener noreferrer",children:"dev.https"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(d.default,{})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);