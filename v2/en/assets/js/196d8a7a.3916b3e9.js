"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3854,8393],{44993:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var o=n(18249),a=(n(52983),n(44993)),r=n(55930);const i={sidebar_position:3,title:"useStaticModel"},s=void 0,p={unversionedId:"apis/app/runtime/model/use-static-model",id:"apis/app/runtime/model/use-static-model",title:"useStaticModel",description:"If want to consume a Model in the form of React Hook in the component\uff0cand can get the current latest state at any time\uff0cbut you don't want the Model state to be updated, which will cause the component to be re-rendered, we can use useStaticModel\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/apis/app/runtime/model/use-static-model.md",sourceDirName:"apis/app/runtime/model",slug:"/apis/app/runtime/model/use-static-model",permalink:"/v2/en/docs/apis/app/runtime/model/use-static-model",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"useStaticModel"},sidebar:"apisAppSidebar",previous:{title:"useModel",permalink:"/v2/en/docs/apis/app/runtime/model/use-model"},next:{title:"useLocalModel",permalink:"/v2/en/docs/apis/app/runtime/model/use-local-model"}},c={},l=[{value:"Example",id:"example",level:2}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.default,{mdxType:"ReduckTip"}),(0,a.kt)("p",null,"If want to consume a Model in the form of React Hook in the component\uff0cand can get the current latest state at any time\uff0cbut you don't want the Model state to be updated, which will cause the component to be re-rendered, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"useStaticModel"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useStaticModel")," API is same as ",(0,a.kt)("inlineCode",{parentName:"p"},"useModel"),"\u3002For detail, see ",(0,a.kt)("a",{parentName:"p",href:"/v2/en/docs/apis/app/runtime/model/use-model"},(0,a.kt)("inlineCode",{parentName:"a"},"useModel")),"\u3002"),(0,a.kt)("p",null,"To ensure that the latest state is always available, be careful not to deconstruct the returned ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  // \u274c Do not deconstruct state\uff0cbut can deconstruct actions\u3002\n  const [{ username }, { logout }] = useStaticModel(userModel);\n\n  // \u2705 True Usage\u3002\n  const [state, { logout }] = useStaticModel(userModel);\n\n  useEffect(() => {\n    state.username;\n  }, []);\n}\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"The following ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," component consumes the ",(0,a.kt)("inlineCode",{parentName:"p"},"userModel")," state, but does not use it directly in JSX. It can be found that changes in the ",(0,a.kt)("inlineCode",{parentName:"p"},"userModel")," state do not necessarily cause the component to re-render. This situation can be optimized using ",(0,a.kt)("inlineCode",{parentName:"p"},"useStaticModel"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const [state] = useStaticModel(userModel);\n\n  useEffect(() => {\n    // \u7edf\u8ba1 UV \u6570\u636e\n    send('pageview', { user: state.user });\n  }, [state]);\n\n  return <div>Hello</div>;\n}\n")),(0,a.kt)("admonition",{title:"More",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/model/use-model"},"Use Model"),".")))}d.isMDXComponent=!0},55930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(18249),a=(n(52983),n(44993));const r={},i=void 0,s={unversionedId:"components/reduck-tip",id:"components/reduck-tip",title:"reduck-tip",description:"By default, the export package name for all APIs in this section is: @modern-js/runtime/model.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/components/reduck-tip.md",sourceDirName:"components",slug:"/components/reduck-tip",permalink:"/v2/en/docs/components/reduck-tip",draft:!1,tags:[],version:"current",frontMatter:{}},p={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"information",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"By default, the export package name for all APIs in this section is: ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/model"),"."),(0,a.kt)("p",{parentName:"admonition"},"If Reduck is integrated separately from Modern.js, the export package name is: ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js-reduck/react"),".")))}u.isMDXComponent=!0}}]);