"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5920],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,d=c["".concat(i,".").concat(k)]||c[k]||m[k]||o;return n?a.createElement(d,p(p({ref:t},u),{},{components:n})):a.createElement(d,p({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(18249),r=(n(52983),n(44993));const o={title:"router",sidebar_position:1},p=void 0,l={unversionedId:"apis/app/runtime/router/router",id:"apis/app/runtime/router/router",title:"router",description:"\u57fa\u4e8e react-router \u7684\u8def\u7531\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/runtime/router/router.md",sourceDirName:"apis/app/runtime/router",slug:"/apis/app/runtime/router/",permalink:"/v2/docs/apis/app/runtime/router/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"router",sidebar_position:1},sidebar:"apisAppSidebar",previous:{title:"defineConfig",permalink:"/v2/docs/apis/app/runtime/app/define-config"},next:{title:"model",permalink:"/v2/docs/apis/app/runtime/model/model_"}},i={},s=[{value:"hooks",id:"hooks",level:2},{value:"useHistory",id:"usehistory",level:3},{value:"useLocation",id:"uselocation",level:3},{value:"useParams",id:"useparams",level:3},{value:"useRouteMatch",id:"useroutematch",level:3},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",level:2},{value:"Link",id:"link",level:3},{value:"LinkProps",id:"linkprops",level:4},{value:"NavLink",id:"navlink",level:3},{value:"NavLinkProps",id:"navlinkprops",level:4},{value:"Prompt",id:"prompt",level:3},{value:"PromptProps",id:"promptprops",level:4},{value:"Route",id:"route",level:3},{value:"component",id:"component",level:4},{value:"render",id:"render",level:4},{value:"children",id:"children",level:4},{value:"path",id:"path",level:4},{value:"exact",id:"exact",level:4},{value:"strict",id:"strict",level:4},{value:"sensitive",id:"sensitive",level:4},{value:"location",id:"location",level:4},{value:"\u66f4\u591a\u5e95\u5c42 API",id:"\u66f4\u591a\u5e95\u5c42-api",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/web/guides/start"},"react-router")," \u7684\u8def\u7531\u89e3\u51b3\u65b9\u6848\u3002")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u8be5 API \u524d\uff0c\u8bf7\u786e\u8ba4\u6ca1\u6709\u7981\u7528 ",(0,r.kt)("a",{parentName:"p",href:"#"},"router \u63d2\u4ef6"),"\u3002")),(0,r.kt)("h2",{id:"hooks"},"hooks"),(0,r.kt)("h3",{id:"usehistory"},"useHistory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function useHistory<HistoryLocationState = H.LocationState>(): H.History<HistoryLocationState>;\n")),(0,r.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"history")," \u5b9e\u4f8b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useHistory } from "@modern-js/runtime/router";\n\nexport function HomeButton() {\n  let history = useHistory();\n\n  function handleClick() {\n    history.push("/home");\n  }\n\n  return (\n    <button type="button" onClick={handleClick}>\n      Go home\n    </button>\n  );\n}\n')),(0,r.kt)("h3",{id:"uselocation"},"useLocation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function useLocation<S = H.LocationState>(): H.Location<S>;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useLocation")," \u8fd4\u56de\u5f53\u524d url \u5bf9\u5e94\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/web/api/location"},"location")," \u5bf9\u8c61\u3002\u6bcf\u5f53\u8def\u7531\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u62ff\u5230\u4e00\u4e2a\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," \u5bf9\u8c61\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import React from "react";\nimport { bootstrap, createApp } from \'@modern-js/runtime\';\nimport { router } from \'@modern-js/runtime/plugins\';\nimport {\n  BrowserRouter as Router,\n  Switch,\n  useLocation\n} from "@modern-js/runtime/router";\n\nfunction usePageViews() {\n  let location = useLocation();\n  React.useEffect(() => {\n    ga.send(["pageview", location.pathname]);\n  }, [location]);\n}\n\nfunction App() {\n  usePageViews();\n  return <Switch>...</Switch>;\n}\n')),(0,r.kt)("h3",{id:"useparams"},"useParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function useParams<\n  Params extends {\n    [K in keyof Params]?: string\n  } = {}\n>(): Params;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useParams")," \u8fd4\u56de\u4e00\u4e2a key/value \u7684\u952e\u503c\u5bf9\u8868\u793a\u8def\u7531\u4e2d\u7684\u53c2\u6570\u4fe1\u606f\u3002\u5b83\u7b49\u540c\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"<Route >")," \u7ec4\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"match.params")," \u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport {\n  Switch,\n  Route,\n  useParams\n} from "@modern-js/runtime/router";\n\nfunction BlogPost() {\n  const { slug } = useParams();\n  return <div>Now showing post {slug}</div>;\n}\n\nfunction App() {\n  return <Switch>\n    <Route exact path="/">\n      <div>home</div>\n    </Route>\n    <Route path="/blog/:slug">\n      <BlogPost />\n    </Route>\n  </Switch>\n}\n')),(0,r.kt)("h3",{id:"useroutematch"},"useRouteMatch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function useRouteMatch<\n  Params extends { [K in keyof Params]?: string } = {}\n>(): match<Params>;\n\nfunction useRouteMatch<\n  Params extends { [K in keyof Params]?: string } = {}\n>(\n  path: string | string[] | RouteProps,\n): match<Params> | null;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useRouteMatch")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"<Route />")," \u4e00\u6837\u662f\u5bf9\u8def\u7531\u8fdb\u884c\u5339\u914d\uff0c\u4f46\u65e0\u987b\u53bb\u6e32\u67d3 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Route />")," \u7ec4\u4ef6\uff0c\u4fbf\u80fd\u83b7\u53d6\u5230\u5f53\u524d\u5339\u914d\u7ed3\u679c\u3002"),(0,r.kt)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,r.kt)("h3",{id:"link"},"Link"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Link<S = H.LocationState>\n  extends React.ForwardRefExoticComponent<\n    React.PropsWithoutRef<LinkProps<S>> & React.RefAttributes<HTMLAnchorElement>\n> {}\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," \u7ec4\u4ef6\u8fdb\u884c\u8def\u7531\u8df3\u8f6c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'<Link to="/about">About</Link>\n')),(0,r.kt)("h4",{id:"linkprops"},"LinkProps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"to")),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"string | object | function")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'<Link to="/courses?sort=name" />\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Link\n  to={{\n    pathname: "/courses",\n    search: "?sort=name",\n    hash: "#the-hash",\n    state: { fromDashboard: true }\n  }}\n/>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Link to={location => ({ ...location, pathname: "/courses" })} />\n\n<Link to={location => `${location.pathname}?sort=name`} />\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"replace")),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u5728\u8df3\u8f6c\u7684\u65f6\u5019\u66ff\u6362\u6389 history \u6808\u4e2d\u7684\u6808\u9876\u8def\u7531\uff0c\u800c\u4e0d\u662f\u6dfb\u52a0\u4e00\u4e2a\u65b0\u8def\u7531\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"component")),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Component")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u81ea\u5b9a\u4e49\u4f60\u81ea\u5df1\u7684\u8def\u7531\u8df3\u8f6c\u7684\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"component")," \u6765\u5b9e\u73b0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},' simply do so by passing it through the component prop.const FancyLink = React.forwardRef((props, ref) => (\n  <a ref={ref} {...props}>\ud83d\udc85 {props.children}</a>\n))\n\n<Link to="/" component={FancyLink} />\n')),(0,r.kt)("h3",{id:"navlink"},"NavLink"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface NavLink<S = H.LocationState>\n  extends React.ForwardRefExoticComponent<\n    React.PropsWithoutRef<NavLinkProps<S>> & React.RefAttributes<HTMLAnchorElement>\n> {}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NavLink")," \u662f\u4e00\u79cd\u7279\u6b8a\u7684 ",(0,r.kt)("a",{parentName:"p",href:"#link"},"Link")," \u7ec4\u4ef6\uff0c\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"NavLink")," \u5bf9\u5e94\u8def\u7531\u5339\u914d\u5230\u5f53\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", \u4f1a\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"NavLink")," \u6240\u6e32\u67d3\u7684\u5143\u7d20\u6dfb\u52a0\u4e00\u4e9b\u989d\u5916\u7684\u6837\u5f0f\u3002"),(0,r.kt)("h4",{id:"navlinkprops"},"NavLinkProps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"activeClassName")),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u8def\u7531\u5339\u914d\u65f6\u989d\u5916 class\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<NavLink to="/faq" activeClassName="selected">\n  FAQs\n</NavLink>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"activeStyle")),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u8def\u7531\u5339\u914d\u65f6\u989d\u5916\u7684\u6837\u5f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<NavLink\n  to="/faq"\n  activeStyle={{\n    fontWeight: "bold",\n    color: "red"\n  }}\n>\n  FAQs\n</NavLink>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"exact")),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"strict")),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"isActive")),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"function")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u81ea\u5b9a\u4e49\u5f53\u524d Link \u662f\u5426\u6fc0\u6d3b\u7684\u903b\u8f91\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"isActive"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<NavLink\n  to="/events/123"\n  isActive={(match, location) => {\n    if (!match) {\n      return false;\n    }\n\n    // only consider an event active if its event id is an odd number\n    const eventID = parseInt(match.params.eventID);\n    return !isNaN(eventID) && eventID % 2 === 1;\n  }}\n>\n  Event 123\n</NavLink>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"location")),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NavLink")," \u9ed8\u8ba4\u4f1a\u548c\u5f53\u524d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"history.location")," \u8fdb\u884c\u5339\u914d\uff0c\u5224\u65ad\u662f\u5426\u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001\u3002\u5982\u679c\u4f60\u60f3\u6307\u5b9a\u8981\u5339\u914d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," \u5bf9\u8c61\uff0c\u53ef\u4ee5\u4f7f\u7528\u8be5\u53c2\u6570\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"area-current")),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.1/#aria-current"},"aria-current")),(0,r.kt)("h3",{id:"prompt"},"Prompt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface PromptProps {\n    message: string | ((location: H.Location, action: H.Action) => string | boolean);\n    when?: boolean;\n}\n\nclass Prompt extends React.Component<PromptProps, any> {}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Prompt")," \u7ec4\u4ef6\u53ef\u7528\u4e8e\u5728\u9875\u9762\u8df3\u8f6c\u524d\uff0c\u8fdb\u884c\u4e8c\u6b21\u786e\u8ba4\u662f\u5426\u8df3\u8f6c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Prompt\n  when={formIsHalfFilledOut}\n  message="Are you sure you want to leave?"\n/>\n')),(0,r.kt)("h4",{id:"promptprops"},"PromptProps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"message")),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"string")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"function")),(0,r.kt)("p",null,"\u5728\u9875\u9762\u8df3\u8f6c\u524d\u7684\u4e8c\u6b21\u786e\u8ba4\u63d0\u793a\u4fe1\u606f\uff0c\u652f\u6301\u4f20\u5165\u51fd\u6570\u5f62\u5f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Prompt\n  message={(location, action) => {\n    if (action === \'POP\') {\n      console.log("Backing up...")\n    }\n\n    return location.pathname.startsWith("/app")\n      ? true\n      : `Are you sure you want to go to ${location.pathname}?`\n  }}\n/>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"when")),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"when")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u624d\u4f1a\u5728\u9875\u9762\u8df3\u8f6c\u524d\u5c55\u793a\u4e8c\u6b21\u786e\u8ba4\u63d0\u793a\u3002"),(0,r.kt)("h3",{id:"route"},"Route"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface RouteProps<\n  Path extends string = string,\n  Params extends { [K: string]: string | undefined } = ExtractRouteParams<Path, string>\n> {\n  location?: H.Location;\n  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;\n  render?: (props: RouteComponentProps<Params>) => React.ReactNode;\n  children?: ((props: RouteChildrenProps<Params>) => React.ReactNode) | React.ReactNode;\n  path?: Path | Path[];\n  exact?: boolean;\n  sensitive?: boolean;\n  strict?: boolean;\n}\n\nclass Route<T extends {} = {}, Path extends string = string> extends React.Component<\n  RouteProps<Path> & OmitNative<T, keyof RouteProps>,\n  any\n> {}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Route")," \u7ec4\u4ef6\u7528\u4e8e\u5b9a\u4e49\u8def\u7531\u3002"),(0,r.kt)("h4",{id:"component"},"component"),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"React.ComponentType")),(0,r.kt)("p",null,"\u5f53\u8def\u7531\u5339\u914d\u6210\u529f\uff0c\u4f1a\u6e32\u67d3\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"component")," \u7684\u7ec4\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { Route } from "@modern-js/runtime/router";\n\n// All route props (match, location and history) are available to User\nfunction User(props) {\n  return <h1>Hello {props.match.params.username}!</h1>;\n}\n\nfunction App() {\n  return <Route path="/user/:username" component={User} />;\n}\n')),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c component \u662f\u4e00\u4e2a inline function\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Route path=\"/user/:username\" component={() => 'hello'} />"),"\uff0c\u56e0\u4e3a\u6bcf\u6b21 rerender \u7684\u65f6\u5019\uff0ccomponent \u90fd\u4f1a\u662f\u4e00\u4e2a\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\uff0c\u6240\u4ee5 component \u7ec4\u4ef6\u4f1a\u5148 unmount\uff0c\u518d mount\u3002\u6211\u4eec\u9700\u8981\u907f\u514d\u8fd9\u79cd\u5199\u6cd5\uff0c\u6216\u8005\u4f7f\u7528 render \u4ee3\u66ff component\u3002")),(0,r.kt)("h4",{id:"render"},"render"),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"(props: RouteComponentProps<Params>) => React.ReactNode")),(0,r.kt)("p",null,"\u5141\u8bb8\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"inline function")," \u8fdb\u884c\u6e32\u67d3\uff0c\u540c\u65f6\u4e0d\u4f1a\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"component")," remounting \u7684\u95ee\u9898\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { Route } from "@modern-js/runtime/router";\n\nfunction App() {\n  <Route path="/home" render={() => <div>Home</div>} />\n}\n')),(0,r.kt)("admonition",{title:"\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"component \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e render\u3002")),(0,r.kt)("h4",{id:"children"},"children"),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"((props: RouteChildrenProps<Params>) => React.ReactNode) | React.ReactNode")),(0,r.kt)("p",null,"\u5982\u679c\u5728\u8def\u7531\u5339\u914d\u6216\u4e0d\u5339\u914d\u7684\u60c5\u51b5\u4e0b\uff0c\u90fd\u9700\u8981\u6e32\u67d3\u4e00\u4e9b\u5185\u5bb9\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," \u53c2\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'function ListItemLink({ to, ...rest }) {\n  return (\n    <Route\n      path={to}\n      children={({ match }) => (\n        <li className={match ? "active" : ""}>\n          <Link to={to} {...rest} />\n        </li>\n      )}\n    />\n  );\n}\n\nfunction App() {\n  return <ul>\n    <ListItemLink to="/somewhere" />\n    <ListItemLink to="/somewhere-else" />\n  </ul>;\n}\n')),(0,r.kt)("h4",{id:"path"},"path"),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"string | string[]")),(0,r.kt)("p",null,"\u7b26\u5408 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pillarjs/path-to-regexp/tree/v1.7.0"},"path-to-regexp@^1.7.0")," \u5339\u914d\u89c4\u5219\u7684 url \u5b57\u7b26\u4e32\u6216\u6570\u7ec4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Route path="/users/:id">\n  <User />\n</Route>\n\n<Route path={["/users/:id", "/profile/:id"]}>\n  <User />\n</Route>\n')),(0,r.kt)("h4",{id:"exact"},"exact"),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",null,"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"exact")," \u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u4f1a\u8fdb\u884c\u51c6\u786e\u5339\u914d\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"path"),(0,r.kt)("th",{parentName:"tr",align:null},"location.pathname"),(0,r.kt)("th",{parentName:"tr",align:null},"exact"),(0,r.kt)("th",{parentName:"tr",align:null},"matches?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/one"),(0,r.kt)("td",{parentName:"tr",align:null},"/one/two"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/one"),(0,r.kt)("td",{parentName:"tr",align:null},"/one/two"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")))),(0,r.kt)("h4",{id:"strict"},"strict"),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",null,"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"strict")," \u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u4f1a\u8fdb\u884c\u4e25\u683c\u5339\u914d\u3002\u82e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," \u4ee5 '/' \u7ed3\u5c3e\uff0c\u90a3\u4e48 ",(0,r.kt)("inlineCode",{parentName:"p"},"location.pathname")," \u4e5f\u9700\u8981\u4ee5 '/' \u7ed3\u5c3e\uff0c\u624d\u80fd\u5339\u914d\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"path"),(0,r.kt)("th",{parentName:"tr",align:null},"location.pathname"),(0,r.kt)("th",{parentName:"tr",align:null},"matches?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/one/"),(0,r.kt)("td",{parentName:"tr",align:null},"/one"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/one/"),(0,r.kt)("td",{parentName:"tr",align:null},"/one/"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/one/"),(0,r.kt)("td",{parentName:"tr",align:null},"/one/two"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")))),(0,r.kt)("h4",{id:"sensitive"},"sensitive"),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",null,"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"sensitive")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5219 path \u5927\u5c0f\u5199\u4e0d\u654f\u611f\u3002"),(0,r.kt)("h4",{id:"location"},"location"),(0,r.kt)("p",null,"\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("h2",{id:"\u66f4\u591a\u5e95\u5c42-api"},"\u66f4\u591a\u5e95\u5c42 API"),(0,r.kt)("p",null,"\u82e5\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u7684\u5e95\u5c42 API \u4fe1\u606f\uff0c\u53ef\u81f3 ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/web/guides/start"},"react-router \u5b98\u7f51")," \u67e5\u770b\u3002"))}m.isMDXComponent=!0}}]);