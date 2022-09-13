"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[36218],{54852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(n),u=o,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},33234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(86215),o=(n(49231),n(54852));const r={sidebar_position:8,title:"\u6027\u80fd\u4f18\u5316"},l=void 0,i={unversionedId:"guides/features/model/performance",id:"guides/features/model/performance",title:"\u6027\u80fd\u4f18\u5316",description:"Reduck \u5185\u90e8\u5df2\u7ecf\u505a\u4e86\u5927\u91cf\u6027\u80fd\u4f18\u5316\u5de5\u4f5c\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u8003\u8651\u6027\u80fd\u95ee\u9898\u3002\u4e0d\u8fc7\u5f53\u5bf9\u6027\u80fd\u6bd4\u8f83\u654f\u611f\u3001\u6216\u8005\u9047\u5230\u4e86\u6027\u80fd\u95ee\u9898\uff0c\u53ef\u4ee5\u8003\u8651\u4ece\u4ee5\u4e0b 3 \u4e2a\u65b9\u9762\uff0c\u8fdb\u884c\u66f4\u6709\u9488\u5bf9\u6027\u7684\u6027\u80fd\u4f18\u5316\u3002",source:"@site/docs/guides/features/model/performance.md",sourceDirName:"guides/features/model",slug:"/guides/features/model/performance",permalink:"/docs/guides/features/model/performance",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"\u6027\u80fd\u4f18\u5316"},sidebar:"guidesSidebar",previous:{title:"Model \u901a\u4fe1",permalink:"/docs/guides/features/model/model-communicate"},next:{title:"\u6d4b\u8bd5 Model",permalink:"/docs/guides/features/model/test-model"}},p={},d=[{value:"Model \u62c6\u5206",id:"model-\u62c6\u5206",level:2},{value:"\u72b6\u6001\u7b5b\u9009",id:"\u72b6\u6001\u7b5b\u9009",level:2},{value:"\u884d\u751f\u72b6\u6001\u7f13\u5b58",id:"\u884d\u751f\u72b6\u6001\u7f13\u5b58",level:2}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Reduck \u5185\u90e8\u5df2\u7ecf\u505a\u4e86\u5927\u91cf\u6027\u80fd\u4f18\u5316\u5de5\u4f5c\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u8003\u8651\u6027\u80fd\u95ee\u9898\u3002\u4e0d\u8fc7\u5f53\u5bf9\u6027\u80fd\u6bd4\u8f83\u654f\u611f\u3001\u6216\u8005\u9047\u5230\u4e86\u6027\u80fd\u95ee\u9898\uff0c\u53ef\u4ee5\u8003\u8651\u4ece\u4ee5\u4e0b 3 \u4e2a\u65b9\u9762\uff0c\u8fdb\u884c\u66f4\u6709\u9488\u5bf9\u6027\u7684\u6027\u80fd\u4f18\u5316\u3002"),(0,o.kt)("h2",{id:"model-\u62c6\u5206"},"Model \u62c6\u5206"),(0,o.kt)("p",null,"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"useModel")," \u8fd4\u56de Model \u5bf9\u8c61\u7684\u5b8c\u6574 State \u65f6\uff0cState \u4efb\u610f\u90e8\u5206\u7684\u53d8\u5316\u90fd\u4f1a\u5bfc\u81f4\u8c03\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"useModel")," \u7684\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const fooModel = model('foo').define({\n  state: {\n    a: '',\n    b: '',\n  },\n  actions: {\n    setA(state, payload) {\n      state.a = payload;\n    },\n    setB(state, payload) {\n      state.b = payload;\n    },\n  },\n});\n\nfunction ComponentA() {\n  const [state] = useModel(fooModel);\n\n  return <div>{state.a}</div>;\n}\n")),(0,o.kt)("p",null,"\u7ec4\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentA")," \u867d\u7136\u53ea\u9700\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," \u72b6\u6001\uff0c\u4f46\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," \u72b6\u6001\u53d1\u9001\u53d8\u5316\u65f6\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentA")," \u4ecd\u7136\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002\u8fd9\u79cd\u60c5\u51b5\uff0c\u6211\u4eec\u53ef\u4ee5\u8003\u8651\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"fooModel")," \u62c6\u5206\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"a"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"b")," \u5206\u522b\u7531\u4e0d\u540c\u7684 Model \u8d1f\u8d23\u7ba1\u7406\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const fooModel = model('foo').define({\n  state: {\n    a: '',\n  },\n  actions: {\n    setA(state, payload) {\n      state.a = payload;\n    },\n  },\n});\n\nconst barModel = model('bar').define({\n  state: {\n    b: '',\n  },\n  actions: {\n    setB(state, payload) {\n      state.b = payload;\n    },\n  },\n});\n\n")),(0,o.kt)("h2",{id:"\u72b6\u6001\u7b5b\u9009"},"\u72b6\u6001\u7b5b\u9009"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useModel")," \u652f\u6301\u4f20\u5165 selector \u51fd\u6570\uff0c\u5bf9\u8fd4\u56de\u7ed9\u7ec4\u4ef6\u7684 State \u548c Actions \u505a\u7b5b\u9009\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 selector \u51fd\u6570\uff0c\u786e\u4fdd\u8fd4\u56de\u7ed9\u7ec4\u4ef6\u7684 State \u662f\u7ec4\u4ef6\u76f4\u63a5\u9700\u8981\u4f7f\u7528\u7684\uff0c\u4ece\u800c\u4fdd\u8bc1\u7ec4\u4ef6\u4e0d\u4f1a\u56e0\u4e3a\u5176\u4ed6\u65e0\u5173\u72b6\u6001\u7684\u53d8\u5316\u800c\u91cd\u65b0\u6e32\u67d3\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u4e0a\u9762\u540c\u6837\u7684\u4f8b\u5b50\uff0c\u6211\u4eec\u91c7\u7528 selector \u51fd\u6570\u8fdb\u884c\u6027\u80fd\u4f18\u5316\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const fooModel = model('foo').define({\n  state: {\n    a: '',\n    b: '',\n  },\n  actions: {\n    setA(state, payload) {\n      state.a = payload;\n    },\n    setB(state, payload) {\n      state.b = payload;\n    },\n  },\n});\n\nfunction ComponentA() {\n  // \u901a\u8fc7\u4f20\u5165 selector \u51fd\u6570\uff0c\u53ea\u8fd4\u56de a \u72b6\u6001\u7ed9\u7ec4\u4ef6\n  const [stateA] = useModel(fooModel, state => state.a);\n\n  return <div>{stateA}</div>;\n}\n")),(0,o.kt)("h2",{id:"\u884d\u751f\u72b6\u6001\u7f13\u5b58"},"\u884d\u751f\u72b6\u6001\u7f13\u5b58"),(0,o.kt)("p",null,"\u5f53 Model \u5b58\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"computed")," \u65f6\uff0c\u6bcf\u6b21\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"useModel")," \u90fd\u4f1a\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"computed")," \u51fd\u6570\u3002"),(0,o.kt)("p",null,"\u8003\u8651\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const barModel = model('bar').define({\n  state: {\n    value: 'bar',\n  },\n  computed: {\n    combineA: [\n      fooModel, // fooModel \u5b9a\u4e49\u540c\u4e0a\n      (state, fooState) => {\n        return state + fooState.a;\n      },\n    ],\n  },\n  actions: {\n    setValue(state, payload) {\n      state.value = payload;\n    },\n  },\n});\n\nfunction ComponentB() {\n  const [state, actions] = useModel(fooModel);\n  const [{ combineA }] = useModel(barModel);\n  // \u7701\u7565\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"barModel")," \u7684\u884d\u751f\u72b6\u6001 ",(0,o.kt)("inlineCode",{parentName:"p"},"combineA")," \u4f9d\u8d56 ",(0,o.kt)("inlineCode",{parentName:"p"},"barModel")," \u81ea\u8eab\u72b6\u6001 \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"fooModel")," \u7684\u72b6\u6001 ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),"\uff0c\u4f46\u662f\u5373\u4f7f\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"fooModel")," \u7684\u72b6\u6001 ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," \u53d1\u751f\u4e86\u53d8\u5316\uff0c\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u65f6\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"combineA")," \uff08\u66f4\u51c6\u786e\u7684\u8bf4\u6cd5\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"combineA")," \u7684\u6700\u540e\u4e00\u4e2a\u51fd\u6570\u7c7b\u578b\u7684\u5143\u7d20 \uff09\u4f9d\u7136\u4f1a\u88ab\u8c03\u7528\u6267\u884c\u3002"),(0,o.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"computed")," \u51fd\u6570\u4e2d\u7684\u903b\u8f91\u90fd\u662f\u975e\u5e38\u8f7b\u91cf\u7684\uff0c\u4f46\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"computed")," \u51fd\u6570\u903b\u8f91\u6bd4\u8f83\u590d\u6742\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u8003\u8651\u5bf9\u8ba1\u7b97\u903b\u8f91\u505a\u7f13\u5b58\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/reselect"},"reselect")," \u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"barModel")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"combineA")," \u505a\u7f13\u5b58\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import 'createSelector' from 'reselect';\n\n// \u521b\u5efa\u7f13\u5b58\u51fd\u6570\nconst selectCombineA = createSelector(\n  (state) => state.bar.value,\n  (state) => state.foo.a,\n  (barState, fooState) => {\n    return barState + fooState;\n  }\n);\n\nconst barModel = model(\"bar\").define({\n  state: {\n    value: \"bar\",\n  },\n  computed: {\n    combineA: [\n      fooModel,\n      (state, fooState) => {\n        return selectCombineA({\n          foo: fooState,\n          bar: state,\n        });\n      },\n    ],\n  },\n  actions: {\n    setValue(state, payload) {\n      state.value = payload;\n    },\n  },\n});\n")),(0,o.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u7f13\u5b58\u51fd\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"createSelector"),"\uff0c\u4ec5\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"barModel")," \u7684\u72b6\u6001\u53d1\u751f\u6539\u53d8\u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"fooModel")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," \u72b6\u6001\u53d1\u751f\u6539\u53d8\u65f6\uff0c\u624d\u4f1a\u91cd\u65b0\u8ba1\u7b97 ",(0,o.kt)("inlineCode",{parentName:"p"},"combineA")," \u7684\u503c\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u672c\u8282\u5b8c\u6574\u7684",(0,o.kt)("a",{parentName:"li",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/series/tutorials/runtime-api/model/performance-optimization"},"\u793a\u4f8b\u4ee3\u7801"))))))}m.isMDXComponent=!0}}]);