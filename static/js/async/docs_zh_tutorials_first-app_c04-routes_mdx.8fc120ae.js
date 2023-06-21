(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_tutorials_first-app_c04-routes_mdx"],{39208:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t,r=s("15169"),i=s("43932"),c=s("9880"),a=s("23169"),l=s("78955");function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",pre:"pre",div:"div",img:"img"},(0,a.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"添加客户端路由",children:["添加客户端路由",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加客户端路由",children:"#"})]}),"\n","\n",(0,c.jsx)(n.p,{children:"上一章节中，我们学习了如何为创建 UI 组件，并添加样式。"}),"\n",(0,c.jsxs)(n.p,{children:["这一章节中，我们将会学习如何添加",(0,c.jsx)(n.strong,{children:"客户端路由"}),"。"]}),"\n",(0,c.jsxs)(n.p,{children:["之前我们已经为联系人列表增加了 Archive 按钮，接下来我们添加一个客户端路由 ",(0,c.jsx)(n.code,{children:"/archives"}),"，访问这个路由时，只显示已存档的联系人，而原有的 ",(0,c.jsx)(n.code,{children:"/"})," 继续显示所有联系人。"]}),"\n",(0,c.jsxs)(n.p,{children:["新建 ",(0,c.jsx)(n.code,{children:"src/routes/archives/page.tsx"})," 文件："]}),"\n",(0,c.jsxs)(l.Tabs,{children:[(0,c.jsx)(l.Tab,{value:"macOS",label:"macOS",default:!0,children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"mkdir -p src/routes/archives\ntouch src/routes/archives/page.tsx\n"})})}),(0,c.jsx)(l.Tab,{value:"Windows",label:"Windows",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-powershell",children:"mkdir -p src/routes/archives\nni src/routes/archives/page.tsx\n"})})})]}),"\n",(0,c.jsx)(n.p,{children:"添加如下代码："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",meta:'title="src/archives/page.tsx"',children:"import { List } from 'antd';\nimport { Helmet } from '@modern-js/runtime/head';\nimport Item from '../../components/Item';\n\nconst getAvatar = (users: Array<{ name: string; email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,\n  }));\n\nconst getMockArchivedData = () =>\n  getAvatar([\n    { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n    { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n  ]);\nfunction Index() {\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>Archives</title>\n      </Helmet>\n      <List\n        dataSource={getMockArchivedData()}\n        renderItem={info => <Item key={info.name} info={info} />}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})}),"\n",(0,c.jsxs)(n.p,{children:["这里使用了 ",(0,c.jsx)(n.a,{href:"https://github.com/nfl/react-helmet",target:"_blank",rel:"noopener noreferrer",children:"React Helmet"})," 的 ",(0,c.jsx)(n.code,{children:"Helmet"})," 组件，在 ",(0,c.jsx)(n.code,{children:"src/routes/page.tsx"})," 中也添加 Helmet 组件："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import { Helmet } from '@modern-js/runtime/head';\n\nfunction Index() {\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      ...\n    </div>\n  );\n}\n"})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsx)(n.p,{children:"Modern.js 默认集成了 react-helmet，也可以结合 SSR 使用，满足 SEO 需求。"}),"\n"]})]}),"\n",(0,c.jsxs)(n.p,{children:["因为现在有多个页面，都需要用到前面的 Utility Class，因此我们需要把样式文件移动到 ",(0,c.jsx)(n.code,{children:"src/routes/layout.tsx"}),"："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\nimport '../styles/utils.css';\n"})}),"\n",(0,c.jsxs)(n.p,{children:["执行 ",(0,c.jsx)(n.code,{children:"pnpm run dev"}),"，访问 ",(0,c.jsx)(n.code,{children:"http://localhost:8080"}),"，可以看到完整的联系人，页面的标题是 All："]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c04-archives.png",alt:"display1"})}),"\n",(0,c.jsxs)(n.p,{children:["访问 ",(0,c.jsx)(n.code,{children:"http://localhost:8080/archives"}),"，只会看到已存档的联系人，页面的标题是 Archives："]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c04-all.png",alt:"display"})}),"\n",(0,c.jsx)(n.p,{children:"查看页面 HTML 源码，可以看到两个页面的内容是一样，是在客户端针对不同 URL 渲染不同内容。"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"接下来我们增加一个简单的导航栏，让用户能在两个列表之间切换"}),"。"]}),"\n",(0,c.jsxs)(n.p,{children:["打开 ",(0,c.jsx)(n.code,{children:"src/routes/layout.tsx"}),"，在顶部导入 Radio 组件："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import { Radio } from 'antd';\n"})}),"\n",(0,c.jsx)(n.p,{children:"然后将 UI 最顶部进行修改，增加一组单选框"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",meta:"{4-9}",children:'export default function Layout() {\n  return (\n    <div>\n      <div className="h-16 p-2 flex items-center justify-center">\n        <Radio.Group onChange={handleSetList} value={currentList}>\n          <Radio value="/">All</Radio>\n          <Radio value="/archives">Archives</Radio>\n        </Radio.Group>\n      </div>\n      <Outlet />\n    </div>\n  );\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["然后我们来实现 ",(0,c.jsx)(n.code,{children:"currentList"})," 和 ",(0,c.jsx)(n.code,{children:"handleSetList"}),"。"]}),"\n",(0,c.jsxs)(n.p,{children:["引入三个 React Hook：",(0,c.jsx)(n.code,{children:"useState"})," 和 ",(0,c.jsx)(n.code,{children:"useNavigate"})," 和 ",(0,c.jsx)(n.code,{children:"useParams"}),"，以及 Ant Design 的事件类型定义："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"import { useState } from 'react';\nimport { Radio, RadioChangeEvent } from 'antd';\nimport { Outlet, useLocation, useNavigate } from '@modern-js/runtime/router';\n"})}),"\n",(0,c.jsx)(n.p,{children:"最后在 Layout 组件里增加局部状态和相关逻辑："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",meta:"{2-9}",children:"export default function Layout() {\n  const navigate = useNavigate();\n  const location = useLocation();\n  const [currentList, setList] = useState(location.pathname || '/');\n  const handleSetList = (e: RadioChangeEvent) => {\n    const { value } = e.target;\n    setList(value);\n    navigate(value);\n  };\n  return (\n  ...\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["到这里就已经完成了页面导航栏实现，执行 ",(0,c.jsx)(n.code,{children:"pnpm run dev"})," 查看效果："]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c04-switch.png",alt:"display2"})}),"\n",(0,c.jsx)(n.p,{children:"点击导航栏中 Archives，可以看到单选框的选中状态和 URL 都会变化，页面没有刷新，只发生了 CSR。"}),"\n",(0,c.jsx)(n.p,{children:"通过 URL 访问两个页面，可以看到 HTML 内容是不同的，这是因为在 SSR 阶段页面就执行了客户端路由的逻辑，HTML 里已经包含了最终的渲染结果。"})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/zh/tutorials/first-app/c04-routes.mdx"]={toc:[],title:"添加客户端路由",frontmatter:{title:"添加客户端路由"}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,i._(r._({},e),{children:(0,c.jsx)(d,r._({},e))})):d(e)}}}]);