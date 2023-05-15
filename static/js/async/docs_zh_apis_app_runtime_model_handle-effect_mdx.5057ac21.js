(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_model_handle-effect_mdx"],{88729:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return i},toc:function(){return a},default:function(){return o}});var c=s("9880"),d=s("23169"),r=s.ir(s("2790")),l={sidebar_position:7,title:"handleEffect"},i="handleEffect",a=[{text:"函数签名",depth:2,id:"函数签名"},{text:"参数",depth:3,id:"参数"},{text:"返回值",depth:3,id:"返回值"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",h2:"h2",h3:"h3",ul:"ul",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"handleeffect",children:["handleEffect",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#handleeffect",children:"#"})]}),"\n","\n",(0,c.jsx)(r.default,{}),"\n",(0,c.jsx)(n.p,{children:"一个异步函数类型的 Effect，通常有三种需要处理的状态: 请求中、请求成功、请求处理失败。这些状态处理的方式，就是编写对应的 Action 函数(pending、fulfilled、rejected)。"}),"\n",(0,c.jsxs)(n.p,{children:["借助 ",(0,c.jsx)(n.code,{children:"handleEffect"})," API，我们可以生成默认的 Action 函数来处理异步请求各个阶段的不同结果。",(0,c.jsx)(n.code,{children:"handleEffect"})," 生成的 Action 返回的 State 的结构如下："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"interface State {\n  result: any; // 存储 fulfilled 状态的返回结果\n  pending: boolean; // 请求是否结束\n  error: string; // 请求失败的结果\n}\n"})})})}),"\n",(0,c.jsxs)(n.h2,{id:"函数签名",children:["函数签名",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"interface EffectActions {\n  pending: Action;\n  fulfilled: Action;\n  rejected: Action;\n}\n\ninterface Config {\n  ns?: string;\n  result?: string | false;\n  error?: string | false;\n  pending?: string | false;\n  combineMode?: 'merge' | 'replace';\n  omitResultNamespace?: boolean;\n}\n\nfunction handleEffect(config: Config): EffectActions;\n"})})})}),"\n",(0,c.jsxs)(n.h3,{id:"参数",children:["参数",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["ns：默认返回的 State 结构扁平地挂载到 Model 的 State 上，通过设置该参数可以将返回的 State 挂载到 ",(0,c.jsx)(n.code,{children:"ns"})," 值命名的字段下。例如，",(0,c.jsx)(n.code,{children:"ns"})," 设置为 ",(0,c.jsx)(n.code,{children:"data"}),"，返回的 State 结构为："]}),"\n"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"interface State {\n  data: {\n    pending: boolean;\n    result: any;\n    error: string;\n  };\n}\n"})})})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["result：默认值为 ",(0,c.jsx)(n.code,{children:'"result"'}),"。该参数对应存储异步请求 fulfilled 状态结果的字段名称。例如，设置 ",(0,c.jsx)(n.code,{children:"result"})," 为 ",(0,c.jsx)(n.code,{children:'"items"'}),"，返回的 State 结构为："]}),"\n"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"interface State {\n  items: any; // 默认的 result -> items\n  pending: boolean;\n  error: string;\n}\n"})})})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"result"})," 为 ",(0,c.jsx)(n.code,{children:"false"}),"，返回的 State 结构中不存在 ",(0,c.jsx)(n.code,{children:"result"}),"："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"interface State {\n  pending: boolean;\n  error: string;\n}\n"})})})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["pending：默认值为 ",(0,c.jsx)(n.code,{children:'"pending"'}),"。改变返回 State 中的 ",(0,c.jsx)(n.code,{children:"pending"})," 字段名。用法同上。"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["error： 默认值为 ",(0,c.jsx)(n.code,{children:'"error"'}),"。改变返回 State 中的 ",(0,c.jsx)(n.code,{children:"error"})," 字段名。用法同上。"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["combineMode：默认值为 ",(0,c.jsx)(n.code,{children:'"merge"'}),"。获取 fulfilled 状态的返回数据后，对 ",(0,c.jsx)(n.code,{children:"result"})," 的处理方式：merge（合并）和 replace（替换）。这里能自动处理的数据类型也仅限为简单的对象或者数组类型。"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["merge：前一次的数据与当前的数据合并。数据为数组类型，内部操作类似于 ",(0,c.jsx)(n.code,{children:"[].concat(lastData, currentData)"}),"；数据为对象类型，内部操作类似于 ",(0,c.jsx)(n.code,{children:"{...lastData, ...curData}"}),"。"]}),"\n",(0,c.jsx)(n.li,{children:"replace：当前的数据直接替换之前的数据。"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["omitResultNamespace：默认值为 ",(0,c.jsx)(n.code,{children:'"false"'}),"。当异步请求的结果为对象类型，希望把该结果直接挂载到 Model 的 State 上，而不是挂载到 ",(0,c.jsx)(n.code,{children:'"result"'})," 上，可以设置为 true。例如："]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"// 一个异步请求得到的数据为一个对象：{user: 'xx', email: 'xx'}，\n// 配置 handleEffect({ omitResultNamespace: true })\n// 则得到的 State 结构如下：\n{\n  user: 'xx',\n  email: 'xx',\n  pending: false,\n  error: null,\n}\n"})})})}),"\n",(0,c.jsxs)(n.h3,{id:"返回值",children:["返回值",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"分别处理 pending、fulfilled、rejected 三种状态的 Action 组成的对象。"}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"更多参考"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/guides/topic-detail/model/manage-effects",children:"副作用管理"})}),"\n"]})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(t,e)})):t(e)}}}]);