(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_web-server_hook_mdx"],{45029:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var t,s=r("15169"),i=r("43932"),d=r("9880"),o=r("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,o.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"hook",children:["Hook",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hook",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Used to extend Modern.js built-in Web Server, all page requests are handled by these hooks."}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive note",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["For more detail, see ",(0,d.jsx)(n.a,{href:"/guides/advanced-features/web-server",children:"Extend Web Server"}),"."]}),"\n"]})]}),"\n",(0,d.jsxs)(n.h2,{id:"usage",children:["Usage",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { AfterMatchHook, AfterRenderHook } from '@modern-js/runtime/server';\n\nexport const afterMatch: AfterMatchHook = (context, next) => {};\nexport const afterRender: AfterRenderHook = (context, next) => {};\n"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["Before using this API, please execute ",(0,d.jsx)(n.code,{children:"pnpm run new"}),' to create a new "Custom Web Server" source code directory.']}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'pnpm run new\n? Please select the operation you want: Create Elements\n? Please select the type of element to create: New "Custom Web Server" source code directory\n'})}),"\n"]})]}),"\n",(0,d.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type HookContext = {\n  response: {\n    set: (key: string, value: string) => void;\n    status: (code: number) => void;\n    cookies: {\n      set: (key: string, value: string, options?: any) => void;\n      clear: () => void;\n    };\n    raw: (\n      body: string,\n      { status, headers }: { status: number; headers: Record<string, any> },\n    ) => void;\n  };\n  request: {\n    host: string;\n    pathname: string;\n    query: Record<string, any>;\n    cookie: string;\n    cookies: {\n      get: (key: string) => string;\n    };\n    headers: IncomingHttpHeaders;\n  };\n};\n\nfunction Hook(context: HookContext, next: NextFunction): Promsie<void> | void;\n"})}),"\n",(0,d.jsxs)(n.p,{children:["different Hooks additionally provide different contexts. Currently Modern.js support ",(0,d.jsx)(n.code,{children:"AfterMatch"})," and ",(0,d.jsx)(n.code,{children:"AfterRender"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type AfterMatchContext = HookContext & {\n  router: {\n    redirect: (url: string, status: number) => void;\n    rewrite: (entry: string) => void;\n  };\n};\n\ntype AfterRenderContext = {\n  template: {\n    get: () => string;\n    set: (html: string) => void;\n    prependHead: (fragment: string) => void;\n    appendHead: (fragment: string) => void;\n    prependBody: (fragment: string) => void;\n    appendBody: (fragment: string) => void;\n  };\n};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"input",children:["Input",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"context"}),": Hook context.","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"response"}),": provides a series of methods to process the response."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"request"}),": provides a series of methods to get request info."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"router"}),": provides methods on routing."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"template"}),": provides methods on content."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"next"}),": call next listener (not affect the server process, only current hook)."]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"example",children:["Example",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"redirect",children:["Redirect",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#redirect",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Redirect to pages outside the site, for example to login page:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import type { AfterMatch } from '@modern-js/runtime/server';\n\nexport const afterMatch: AfterMatch = async (ctx, next) => {\n  ctx.router.redirect('https://website.com/login', 302);\n};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"rewrite",children:["Rewrite",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rewrite",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Rewrite to pages of the current site, for example, the same route returns pages that are adapted to different UA:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import type { AfterMatch } from '@modern-js/runtime/server';\n\nexport const afterMatch: AfterMatch = async (ctx, next) => {\n  ctx.router.rewrite('mobile');\n};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"html-inject",children:["HTML Inject",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-inject",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Inject some HTML content to the page, such as scripts, page skeletons, etc.:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import type { AfterRender } from '@modern-js/runtime/server';\n\nexport const afterRender: AfterRenderHook = (context, next) => {\n  ctx.template.prependBody('<div>Footer</div>');\n};\n"})})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/en/apis/app/runtime/web-server/hook.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Example",id:"example",depth:2},{text:"Redirect",id:"redirect",depth:3},{text:"Rewrite",id:"rewrite",depth:3},{text:"HTML Inject",id:"html-inject",depth:3}],title:"Hook",frontmatter:{title:"Hook"}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,i._(s._({},e),{children:(0,d.jsx)(a,s._({},e))})):a(e)}}}]);