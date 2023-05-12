(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_tutorials_first-app_c04-routes_mdx"],{3834:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return r},default:function(){return l}});var s=t("9880"),a=t("23169"),i=t("78955"),c={title:"Add Client Route"},o="Add Client Route",r=[];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",div:"div",pre:"pre",img:"img"},(0,a.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"add-client-route",children:["Add Client Route",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-client-route",children:"#"})]}),"\n","\n",(0,s.jsx)(n.p,{children:"In the previous chapter, we learned how to create UI components and add styles."}),"\n",(0,s.jsxs)(n.p,{children:["In this chapter, we will learn how to add ",(0,s.jsx)(n.strong,{children:"Client Route"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Previously we have added the Archive button to the point of contact list, next we add a route ",(0,s.jsx)(n.code,{children:"/archives"}),", when accessing this route, only the point of contact of the saved file is displayed, while the original ",(0,s.jsx)(n.code,{children:"/"})," continues to display all points of contact."]}),"\n",(0,s.jsxs)(n.p,{children:["Create a new ",(0,s.jsx)(n.code,{children:"src/routes/archives/page.tsx"})," file:"]}),"\n",(0,s.jsxs)(i.Tabs,{children:[(0,s.jsx)(i.Tab,{value:"macOS",label:"macOS",default:!0,children:(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir -p src/routes/archives\ntouch src/routes/archives/page.tsx\n"})})})})}),(0,s.jsx)(i.Tab,{value:"Windows",label:"Windows",children:(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-powershell",children:"mkdir -p src/routes/archives\nni src/routes/archives/page.tsx\n"})})})})})]}),"\n",(0,s.jsx)(n.p,{children:"Add the following code:"}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"src/archives/page.tsx"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="src/archives/page.tsx"',children:"import { List } from 'antd';\nimport { Helmet } from '@modern-js/runtime/head';\nimport Item from '../../components/Item';\n\nconst getAvatar = (users: Array<{ name: string; email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,\n  }));\n\nconst getMockArchivedData = () =>\n  getAvatar([\n    { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n    { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n  ]);\nfunction Index() {\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>Archives</title>\n      </Helmet>\n      <List\n        dataSource={getMockArchivedData()}\n        renderItem={info => <Item key={info.name} info={info} />}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Helmet"})," component of ",(0,s.jsx)(n.a,{href:"https://github.com/nfl/react-helmet",target:"_blank",rel:"noopener noreferrer",children:"React Helmet"})," is used here, and the Helmet component is also added in ",(0,s.jsx)(n.code,{children:"src/routes/page.tsx"}),":"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { Helmet } from '@modern-js/runtime/head';\n\nfunction Index() {\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      ...\n    </div>\n  );\n}\n"})})})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"note"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"Modern.js integrates react-helmet by default, and can also be used in conjunction with SSR to meet SEO needs."}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["Since there are multiple pages now, all of which need to use the previous Utility Class, we need to move the style file to ",(0,s.jsx)(n.code,{children:"src/routes/layout.tsx"}),":"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\nimport '../styles/utils.css';\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["Execute ",(0,s.jsx)(n.code,{children:"pnpm run dev"}),", visit ",(0,s.jsx)(n.code,{children:"http://localhost:8080"}),", you can see the full point of contact, the title of the page is All:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c04-archives.png",alt:"display1"})}),"\n",(0,s.jsxs)(n.p,{children:["Visit ",(0,s.jsx)(n.code,{children:"http://localhost:8080/archives"})," and you will only see the point of contact of the saved file with the title Archives:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c04-all.png",alt:"display"})}),"\n",(0,s.jsx)(n.p,{children:"Looking at the HTML source code of the page, you can see that the content of the two pages is the same, and different content is rendered for different URLs."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Next we add a simple navigation bar that allows the user to toggle between the two lists"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"src/routes/layout.tsx"})," and import the Radio component at the top:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { Radio } from 'antd';\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"Then modify the top of the UI to add a set of radio group:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:"{4-9}",children:'export default function Layout() {\n  return (\n    <div>\n      <div className="h-16 p-2 flex items-center justify-center">\n        <Radio.Group onChange={handleSetList} value={currentList}>\n          <Radio value="/">All</Radio>\n          <Radio value="/archives">Archives</Radio>\n        </Radio.Group>\n      </div>\n      <Outlet />\n    </div>\n  );\n}\n'})})})}),"\n",(0,s.jsxs)(n.p,{children:["Then we come to the implementation of ",(0,s.jsx)(n.code,{children:"currentList"})," and ",(0,s.jsx)(n.code,{children:"handleSetList"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Introducing three React Hooks: ",(0,s.jsx)(n.code,{children:"useState"})," and ",(0,s.jsx)(n.code,{children:"useNavigate"})," and ",(0,s.jsx)(n.code,{children:"useParams"}),", as well as Ant Design's event type definition:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"import { useState } from 'react';\nimport { Radio, RadioChangeEvent } from 'antd';\nimport { Outlet, useLocation, useNavigate } from '@modern-js/runtime/router';\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"Finally, add local state and related logic to the Layout component:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:"{2-9}",children:"export default function Layout() {\n  const navigate = useNavigate();\n  const location = useLocation();\n  const [currentList, setList] = useState(location.pathname || '/');\n  const handleSetList = (e: RadioChangeEvent) => {\n    const { value } = e.target;\n    setList(value);\n    navigate(value);\n  };\n  return (\n  ...\n}\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["At this point, the page navigation bar implementation has been completed, and execute ",(0,s.jsx)(n.code,{children:"pnpm run dev"})," to see the effect:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c04-switch.png",alt:"display2"})}),"\n",(0,s.jsx)(n.p,{children:"Click Archives in the navigation bar, you can see that the selected state and URL of the radio box will change, the page is not refreshed, only CSR occurs."}),"\n",(0,s.jsx)(n.p,{children:"Accessing the two pages through the URL, you can see that the HTML content is different, because the page executes the logic of client routing in the SSR stage, and the HTML already contains the final render result."})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);