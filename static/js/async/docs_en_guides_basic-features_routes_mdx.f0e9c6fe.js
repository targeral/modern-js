(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_basic-features_routes_mdx"],{50034:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return o},title:function(){return i},toc:function(){return a},default:function(){return c}});var s=t("12151"),r=t("23169"),o={title:"Routes",sidebar_position:1},i="Routes",a=[{text:"Conventional routing",depth:2,id:"conventional-routing"},{text:"Routing file convention",depth:3,id:"routing-file-convention"},{text:"Layout",depth:4,id:"layout"},{text:"Page",depth:4,id:"page"},{text:"Dynamic routing",depth:3,id:"dynamic-routing"},{text:"Catch all routing",depth:3,id:"catch-all-routing"},{text:"Layout with No Path",depth:3,id:"layout-with-no-path"},{text:"No Layout",depth:3,id:"no-layout"},{text:"(WIP)Loading",depth:3,id:"(wip)loading"},{text:"Redirect",depth:3,id:"redirect"},{text:"ErrorBoundary",depth:3,id:"errorboundary"},{text:"Hooks before rendering",depth:3,id:"hooks-before-rendering"},{text:"Runtime Configuration",depth:3,id:"runtime-configuration"},{text:"Prefetch",depth:3,id:"prefetch"},{text:"Self-controlled routing",depth:2,id:"self-controlled-routing"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",div:"div",h2:"h2",code:"code",button:"button",pre:"pre",h3:"h3",h4:"h4",ol:"ol",li:"li",ul:"ul"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"routes",children:["Routes",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#routes",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js build-in provides partial support for ",(0,s.jsx)(n.a,{href:"https://reactrouter.com/en/main",target:"_blank",rel:"noopener noreferrer",children:"React Router 6"})," and provides various types of routing modes. According to different ",(0,s.jsx)(n.a,{href:"/guides/concept/entries",children:"entry"})," types, routing is divided into three modes, namely ",(0,s.jsx)(n.strong,{children:"Conventional routing"}),", ",(0,s.jsx)(n.strong,{children:"Self-controlled routing"})," and ",(0,s.jsx)(n.strong,{children:"Other"}),"."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"The routes mentioned in this section are client routes, that is, SPA routes."}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"conventional-routing",children:["Conventional routing",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#conventional-routing",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(n.code,{children:"routes/"})," as the agreed entry, Modern.js will automatically generate the corresponding routing structure based on the file system."]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js supports the popular convention routing mode in the industry: ",(0,s.jsx)(n.strong,{children:"nested routing"}),". When using nested routing, the routing of the page corresponds the UI structure, and we will introduce this routing mode in detail."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{children:"/user/johnny/profile                  /user/johnny/posts\n+------------------+                  +-----------------+\n| User             |                  | User            |\n| +--------------+ |                  | +-------------+ |\n| | Profile      | |  +------------>  | | Posts       | |\n| |              | |                  | |             | |\n| +--------------+ |                  | +-------------+ |\n+------------------+                  +-----------------+\n"})})]})}),"\n",(0,s.jsxs)(n.h3,{id:"routing-file-convention",children:["Routing file convention",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#routing-file-convention",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["There are two file conventions in the ",(0,s.jsx)(n.code,{children:"routes/"})," directory ",(0,s.jsx)(n.code,{children:"layout.[jt]sx"})," and ",(0,s.jsx)(n.code,{children:"page.[jt]sx"}),"(abbreviated as ",(0,s.jsx)(n.code,{children:".tsx"})," later). These two files determine the layout hierarchy of the application, where ",(0,s.jsx)(n.code,{children:"layout.tsx"})," is used as the layout component, and ",(0,s.jsx)(n.code,{children:"page.tsx"})," is used as the content component, which is the leaf node of the entire routing table."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, here ",(0,s.jsx)(n.code,{children:"routes/layout.tsx"})," will be used as the layout component of all components under the ",(0,s.jsx)(n.code,{children:"/"})," route:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── layout.tsx\n    ├── page.tsx\n    └── user\n        ├── layout.tsx\n        └── page.tsx\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["When the route is ",(0,s.jsx)(n.code,{children:"/"}),", there will be the following UI layout:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <Page />\n</Layout>\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["Similarly, ",(0,s.jsx)(n.code,{children:"routes/user/layout.tsx"})," will be used as a layout component for all components under the ",(0,s.jsx)(n.code,{children:"/user"})," route. When the route is ",(0,s.jsx)(n.code,{children:"/user"}),", the following UI layout will be available:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <UserLayout>\n    <UserPage />\n  </UserLayout>\n</Layout>\n"})})]})}),"\n",(0,s.jsxs)(n.h4,{id:"layout",children:["Layout",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#layout",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<Layout>"})," component refers to all ",(0,s.jsx)(n.code,{children:"layout.tsx"})," files in the ",(0,s.jsx)(n.code,{children:"routes/"})," directory, which represent the layout of the corresponding route segment, and use ",(0,s.jsx)(n.code,{children:"<Outlet>"})," to represent sub-components."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<Outlet>"})," is a new API in React Router 6, see ",(0,s.jsx)(n.a,{href:"https://reactrouter.com/en/main/components/outlet#outlet",target:"_blank",rel:"noopener noreferrer",children:"Outlet"})," for details."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["In order to facilitate the introduction of the relationship between ",(0,s.jsx)(n.code,{children:"<Layout>"})," and ",(0,s.jsx)(n.code,{children:"<Outlet>"}),", the following file directory example:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── blog\n    │   └── page.tsx\n    ├── layout.tsx\n    ├── page.tsx\n    └── user\n        ├── layout.tsx\n        └── page.tsx\n"})})]})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["When the route is ",(0,s.jsx)(n.code,{children:"/"}),", ",(0,s.jsx)(n.code,{children:"<Outlet>"})," in ",(0,s.jsx)(n.code,{children:"routes/layout.tsx"})," represents the component exported in ",(0,s.jsx)(n.code,{children:"routes/page.tsx"}),", generating the following UI structure:"]}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <Page />\n</Layout>\n"})})]})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["When the route is ",(0,s.jsx)(n.code,{children:"/blog"}),", ",(0,s.jsx)(n.code,{children:"<Outlet>"})," in ",(0,s.jsx)(n.code,{children:"routes/layout.tsx"})," represents the component exported in ",(0,s.jsx)(n.code,{children:"routes/blog/page.tsx"}),", generating the following UI structure:"]}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <BlogPage />\n</Layout>\n"})})]})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["When the route is ",(0,s.jsx)(n.code,{children:"/user"}),", ",(0,s.jsx)(n.code,{children:"<Outlet>"})," in ",(0,s.jsx)(n.code,{children:"routes/layout.tsx"})," represents the component exported in ",(0,s.jsx)(n.code,{children:"routes/user/layout.tsx"}),". ",(0,s.jsx)(n.code,{children:"<Outlet>"})," in ",(0,s.jsx)(n.code,{children:"routes/user/layout.tsx"})," represents the component exported in ",(0,s.jsx)(n.code,{children:"routes/user/page.tsx"}),". Generate the following UI structure:"]}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <UserLayout>\n    <UserPage />\n  </UserLayout>\n</Layout>\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["In summary, if there is a ",(0,s.jsx)(n.code,{children:"layout.tsx"})," in the file directory of the subroute, the ",(0,s.jsx)(n.code,{children:"<Outlet>"})," in the previous ",(0,s.jsx)(n.code,{children:"layout.tsx"})," is the ",(0,s.jsx)(n.code,{children:"layout.tsx"})," under the file directory of the subroute, otherwise it is the ",(0,s.jsx)(n.code,{children:"page.tsx"})," under the file directory of the subroute."]}),"\n",(0,s.jsxs)(n.h4,{id:"page",children:["Page",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#page",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["All routes should end with the ",(0,s.jsx)(n.code,{children:"<Page>"})," component. In the ",(0,s.jsx)(n.code,{children:"page.tsx"})," file, if the developer introduces the ",(0,s.jsx)(n.code,{children:"<Outlet>"})," component, it will have no effect."]}),"\n",(0,s.jsxs)(n.h3,{id:"dynamic-routing",children:["Dynamic routing",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-routing",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["With a file directory named ",(0,s.jsx)(n.code,{children:"[]"}),", the generated route will be used as a dynamic route. For example the following file directory:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{children:"└── routes\n    ├── [id]\n    │   └── page.tsx\n    ├── blog\n    │   └── page.tsx\n    └── page.tsx\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"routes/[id]/page.tsx"})," file is converted to the ",(0,s.jsx)(n.code,{children:"/:id"})," route. Except for the ",(0,s.jsx)(n.code,{children:"/blog"})," route that exactly matches, all other ",(0,s.jsx)(n.code,{children:"/xxx"})," will match this route."]}),"\n",(0,s.jsxs)(n.p,{children:["In component, you can get the corresponding named parameters through ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/router/router#useparams",children:"useParams"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"catch-all-routing",children:["Catch all routing",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#catch-all-routing",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["If a ",(0,s.jsx)(n.code,{children:"$.tsx"})," file is created in the routes directory, this file will act as a wildcard route component that will be rendered when there is no matching route."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$.tsx"})," can be thought of as a special ",(0,s.jsx)(n.code,{children:"page"})," routing component that renders ",(0,s.jsx)(n.code,{children:"$.tsx"})," as a child of ",(0,s.jsx)(n.code,{children:"layout"})," when there is a ",(0,s.jsx)(n.code,{children:"layout"})," component in the current directory.\n"]})})]}),"\n",(0,s.jsx)(n.p,{children:"For example, the following directory structure:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{children:"└── routes\n    ├── $.tsx\n    ├── blog\n    │   └── page.tsx\n    └── page.tsx\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"routes/$.tsx"})," component is rendered when accessing any path that does not match, and again, the remainder of the url can be captured in ",(0,s.jsx)(n.code,{children:"$.tsx"})," using ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/router/router#useparams",children:"useParams"}),"."]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"$.tsx"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="$.tsx"',children:"import { useParams } from '@modern-js/runtime/router';\n// When the path is `/aaa/bbb`\nconst params = useParams();\nparams['*']; // => 'aaa/bbb'\n"})})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"layout-with-no-path",children:["Layout with No Path",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#layout-with-no-path",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When a directory name begins with ",(0,s.jsx)(n.code,{children:"__"}),", the corresponding directory name is not converted to the actual routing path, such as the following file directory:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{children:".\n└── routes\n    ├── __auth\n    │   ├── layout.tsx\n    │   ├── login\n    │   │   └── page.tsx\n    │   └── signup\n    │       └── page.tsx\n    ├── layout.tsx\n    └── page.tsx\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js will generate two routes, ",(0,s.jsx)(n.code,{children:"/login"})," and ",(0,s.jsx)(n.code,{children:"/sign"}),", ",(0,s.jsx)(n.code,{children:"__auth/layout.tsx"})," component will be used as the layout component of ",(0,s.jsx)(n.code,{children:"login/page.tsx"})," and ",(0,s.jsx)(n.code,{children:"signup/page.tsx"}),", but ",(0,s.jsx)(n.code,{children:"__auth"})," will not be used as the route path fragment."]}),"\n",(0,s.jsx)(n.p,{children:"This feature is useful when you need to do separate layouts for certain types of routes, or when you want to categorize routes."}),"\n",(0,s.jsxs)(n.h3,{id:"no-layout",children:["No Layout",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#no-layout",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"In some cases, the project needs more sophisticated routes, but these routes do not have independent UI layouts. If you create a route like a normal file directory, the directory level will be deeper."}),"\n",(0,s.jsxs)(n.p,{children:["Therefore Modern.js supports splitting routing fragments by ",(0,s.jsx)(n.code,{children:"."})," instead of file directory. For example, when you need ",(0,s.jsx)(n.code,{children:"/user/profile/2022/edit"}),", you can directly create the following file:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{children:"└── routes\n    ├── user.profile.[id].edit\n    │      └── page.tsx\n    ├── layout.tsx\n    └── page.tsx\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"When accessing a route, you will get the following UI layout:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<RootLayout>\n  <UserProfileEdit /> // routes/user.profile.[id].edit/page.tsx\n</RootLayout>\n"})})]})}),"\n",(0,s.jsxs)(n.h3,{id:"(wip)loading",children:["(WIP)Loading",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#(wip)loading",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In each layer directory under ",(0,s.jsx)(n.code,{children:"routes/"}),", developers can create ",(0,s.jsx)(n.code,{children:"loading.tsx"})," files and export a ",(0,s.jsx)(n.code,{children:"<Loading>"})," component by default."]}),"\n",(0,s.jsxs)(n.p,{children:["When the component exists in the routing directory, all routing switches under this level of subrouting will use the ",(0,s.jsx)(n.code,{children:"<Loading>"})," component as the Fallback UI when JS Chunk is loaded. When the ",(0,s.jsx)(n.code,{children:"layout.tsx"})," file is not defined in this directory, the ",(0,s.jsx)(n.code,{children:"<Loading>"})," component will not take effect. For example, the following file directory:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── blog\n    │   ├── [id]\n    │   │   └── page.tsx\n    │   └── page.tsx\n    ├── layout.tsx\n    ├── loading.tsx\n    └── page.tsx\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["When a route jumps from ",(0,s.jsx)(n.code,{children:"/"})," to ",(0,s.jsx)(n.code,{children:"/blog"}),", if the JS Chunk of the ",(0,s.jsx)(n.code,{children:"<Blog>"})," component is not loaded, the component UI exported in ",(0,s.jsx)(n.code,{children:"loading.tsx"})," will be displayed first. But when jumping from ",(0,s.jsx)(n.code,{children:"/blog"})," to ",(0,s.jsx)(n.code,{children:"/blog/20220101"}),", it will not be displayed."]}),"\n",(0,s.jsxs)(n.h3,{id:"redirect",children:["Redirect",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#redirect",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can redirect routes by creating a ",(0,s.jsx)(n.a,{href:"/guides/basic-features/data-fetch",children:(0,s.jsx)(n.code,{children:"data loader"})})," file, Suppose you have the file ",(0,s.jsx)(n.code,{children:"routes/user/page.tsx"})," and you want to redirect the route corresponding to this file, you can create the file ",(0,s.jsx)(n.code,{children:"routes/user/page.loader.ts"}),":"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"routes/user/page.loader.ts"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="routes/user/page.loader.ts"',children:"import { redirect } from '@modern-js/runtime/router';\n\nexport default () => {\n  const user = await getUser();\n  if (!user) {\n    return redirect('/login');\n  }\n  return null;\n};\n"})})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"errorboundary",children:["ErrorBoundary",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#errorboundary",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In each layer directory under ",(0,s.jsx)(n.code,{children:"routes/"}),", the developer can also define a ",(0,s.jsx)(n.code,{children:"error.tsx"})," file, and export a ",(0,s.jsx)(n.code,{children:"<ErrorBoundary>"})," component by default."]}),"\n",(0,s.jsxs)(n.p,{children:["When the component exists in a routing directory, the component render error is caught by the ",(0,s.jsx)(n.code,{children:"ErrorBoundary"})," component. The ",(0,s.jsx)(n.code,{children:"<ErrorBoundary>"})," component does not take effect when the directory does not have a ",(0,s.jsx)(n.code,{children:"layout.tsx"})," file defined."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<ErrorBoundary>"})," can return the UI view when the error occurred. When the ",(0,s.jsx)(n.code,{children:"<ErrorBoundary>"})," component is not declared at the current level, the error will bubble up to the higher component until it is caught or throws an error. At the same time, when a component fails, it will only affect the routed component and sub-component that caught the error. The state and view of other components are not affected and can continue to interact."]}),"\n","\n",(0,s.jsxs)(n.p,{children:["Within the ",(0,s.jsx)(n.code,{children:"<ErrorBoundary>"})," component, you can use ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/router/router#useparams",children:"useRouteError"})," to get the specific information of the error:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useRouteError } from '@modern-js/runtime/router';\nexport const ErrorBoundary = () => {\n  const error = useRouteError();\n  return (\n    <div>\n      <h1>{error.status}</h1>\n      <h2>{error.message}</h2>\n    </div>\n  );\n};\n"})})]})}),"\n",(0,s.jsxs)(n.h3,{id:"hooks-before-rendering",children:["Hooks before rendering",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hooks-before-rendering",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In some scenarios where you need to do some operations before the application renders, you can define ",(0,s.jsx)(n.code,{children:"init"})," hooks in ",(0,s.jsx)(n.code,{children:"routes/layout.tsx"}),". ",(0,s.jsx)(n.code,{children:"init"})," will be executed on both the client and server side, the basic usage example is as follows:"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"src/routes/layout.tsx"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/routes/layout.tsx"',children:"import type { RuntimeContext } from '@modern-js/runtime';\n\nexport const init = (context: RuntimeContext) => {\n  // do something\n};\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"init"})," hook allows you to mount some global data and access the ",(0,s.jsx)(n.code,{children:"runtimeContext"})," variable from elsewhere in the application:"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"This feature is useful when the application requires pre-page data, custom data injection or framework migration (e.g. Next.js)"}),"\n"]})]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"src/routes/layout.tsx"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/routes/layout.tsx"',children:"import { RuntimeContext } from '@modern-js/runtime';\n\nexport const init = (context: RuntimeContext) => {\n  return {\n    message: 'Hello World',\n  };\n};\n"})})]})]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"src/routes/page.tsx"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/page.tsx"',children:"import { useRuntimeContext } from '@modern-js/runtime';\n\nexport default () => {\n  const { context } = useRuntimeContext();\n  const { message } = context.getInitData();\n\n  return <div>{message}</div>;\n};\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["When working with SSR, the browser side can get the data returned by ",(0,s.jsx)(n.code,{children:"init"})," during SSR, and the developer can decide whether to retrieve the data on the browser side to overwrite the SSR data, for example:"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"src/routes/layout.tsx"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/layout.tsx"',children:"import { RuntimeContext } from '@modern-js/runtime';\n\nexport const init = (context: RuntimeContext) => {\n  if (process.env.MODERN_TARGET === 'node') {\n    return {\n      message: 'Hello World By Server',\n    };\n  } else {\n    const { context } = runtimeContext;\n    const data = context.getInitData();\n    // If do not get the expected data\n    if (!data.message) {\n      return {\n        message: 'Hello World By Client',\n      };\n    }\n  }\n};\n"})})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"runtime-configuration",children:["Runtime Configuration",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtime-configuration",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In each root ",(0,s.jsx)(n.code,{children:"Layout"})," component (",(0,s.jsx)(n.code,{children:"routes/layout.ts"}),"), the application runtime configuration can be dynamically defined:"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"src/routes/layout.tsx"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/routes/layout.tsx"',children:"import type { AppConfig } from '@modern-js/runtime';\n\nexport const config = (): AppConfig => {\n  return {\n    router: {\n      supportHtml5History: false,\n    },\n  };\n};\n"})})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"prefetch",children:["Prefetch",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prefetch",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When using convention-based routing, Modern.js will automatically split chunks according to the route, and when the user accesses a specific route, the corresponding resources will be loaded automatically, which can effectively reduce the first screen loading time. However, this also brings a problem, when the user accesses a route, if the asset corresponding to that route is not yet loaded, a white screen will appear."}),"\n",(0,s.jsxs)(n.p,{children:["In this case you can show a custom ",(0,s.jsx)(n.code,{children:"loading"})," component by defining a ",(0,s.jsx)(n.code,{children:"loading"})," component before the static resource is loaded."]}),"\n",(0,s.jsxs)(n.p,{children:["To further improve the user experience and reduce time of loading, Modern.js supports defining the ",(0,s.jsx)(n.code,{children:"prefetch"})," property on the Link component to load static resources and data in advance, with three optional values for the ",(0,s.jsx)(n.code,{children:"prefetch"})," property:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{children:'<Link prefetch="intent" to="page">\n'})})]})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This feature is currently only supported in Webpack projects, not in Rspack projects."}),"\n",(0,s.jsx)(n.li,{children:"Prefetching of data will only prefetch the data returned from the data loader of the SSR project."}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"none"}),", the default value, will not do prefetch, no additional behavior."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"intent"}),", the value we recommend for most scenarios, will automatically start loading the corresponding resources and the data defined in the data loader when you mouse over the Link, and will automatically unload it when the mouse is moved away. In our tests, even a direct click can reduce the loading time by about 200ms."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"render"}),", when the Link component renders, it will load the corresponding resources and the data defined in the data loader."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"self-controlled-routing",children:["Self-controlled routing",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#self-controlled-routing",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(n.code,{children:"src/App.tsx"})," as the agreed entry, Modern.js will not do additional operations with multiple routes, developers can use the React Router 6 API for development by themselves, for example:"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"src/App.tsx"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/App.tsx"',children:"import { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';\n\nexport default () => {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route index element={<div>index</div>} />\n        <Route path=\"about\" element={<div>about</div>} />\n      </Routes>\n    </BrowserRouter>\n  );\n};\n"})})]})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"Modern.js has a series of resource loading and rendering optimizations to the default convention-based routing, and provides out-of-the-box SSR capabilities, when using self-directed routing, need to be packaged by the developer, and it is recommended that developers use convention-based routing."})})]}),"\n",(0,s.jsxs)(n.p,{children:["use self-controller routing, if the developer turns off the ",(0,s.jsx)(n.a,{href:"/configure/app/runtime/router",children:(0,s.jsx)(n.code,{children:"runtime.router"})})," configuration and uses ",(0,s.jsx)(n.code,{children:"react-router-dom"})," directly, then you need to wrap the ",(0,s.jsx)(n.code,{children:"Provider"})," according to the React Router documentation."]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"src/App.tsx"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="src/App.tsx"',children:"\n## Other\n\nBy default, Modern.js turn on the built-in routing scheme, React Router.\n\n```js\nexport default defineConfig({\n  runtime: {\n    router: true,\n  },\n});\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js exposes the React Router API from the ",(0,s.jsx)(n.code,{children:"@modern-js/runtime/router"})," namespace for developers to use, ensuring that developers and Modern.js use the same code. In addition, in this case, the React Router code will be packaged into JS products. If the project already has its own routing scheme, or does not need to use client routing, this feature can be turned off."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  runtime: {\n    router: false,\n  },\n});\n"})})]})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);