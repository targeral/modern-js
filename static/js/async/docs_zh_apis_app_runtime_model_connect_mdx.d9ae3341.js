(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_model_connect_mdx"],{50528:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return d},toc:function(){return i},default:function(){return l}});var c=s("9880"),t=s("23169"),o=s.ir(s("2790")),r={sidebar_position:5,title:"connect"},d="connect",i=[{text:"类型",depth:2,id:"类型"},{text:"参数",depth:2,id:"参数"},{text:"返回值",depth:2,id:"返回值"},{text:"示例",depth:2,id:"示例"},{text:"简单用法",depth:3,id:"简单用法"},{text:"筛选 State 和 Actions",depth:3,id:"筛选-state-和-actions"},{text:"转发组件的 ref",depth:3,id:"转发组件的-ref"}];function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",strong:"strong",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",h3:"h3"},(0,t.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"connect",children:["connect",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#connect",children:"#"})]}),"\n","\n",(0,c.jsx)(o.default,{}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"提示"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:["Reduck 原始类型较为复杂，以下涉及类型定义的地方，展示的是简化后的类型信息。原始类型见 ",(0,c.jsx)(n.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/packages/react/src/connect.ts",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)(n.strong,{children:"connect"})}),"。"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"connect"})," 功能上同 ",(0,c.jsx)(n.code,{children:"useModel"})," 一致，是对应的 HOC 风格的 API。建议优先使用 Hook 风格的 ",(0,c.jsx)(n.code,{children:"useModel"}),"。"]}),"\n",(0,c.jsxs)(n.h2,{id:"类型",children:["类型",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#类型",children:"#"})]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"type SelectStateToProps = (\n  ...modelStates: State[],\n  ownProps?: any,\n) => PlainObject;\ntype SelectActionsToProps = (\n  ...modelActions: Actions[],\n  ownProps?: any,\n) => PlainObject;\n\nfunction connect(models: Model, options?: ConnectOptions);\nfunction connect(\n  models: [...Model[], SelectStateToProps?, SelectActionsToProps?],\n  options?: ConnectOptions,\n);\n"})})})}),"\n",(0,c.jsxs)(n.h2,{id:"参数",children:["参数",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"models"}),"：传入的 1 个或多个 Model，当 ",(0,c.jsx)(n.code,{children:"models"})," 为数组类型参数时，最后两项元素可以是用于筛选 State 的函数（ ",(0,c.jsx)(n.code,{children:"SelectStateToProps"})," 类型）和用于筛选 Actions 的函数（ ",(0,c.jsx)(n.code,{children:"SelectActionsToProps"})," 类型）。"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"SelectStateToProps"}),"： ",(0,c.jsx)(n.code,{children:"modelStates"})," 是传入的 Model 对象的 State 组成的数组，",(0,c.jsx)(n.code,{children:"ownProps"})," 是当前组件接收外部传递的 ",(0,c.jsx)(n.code,{children:"props"}),"，",(0,c.jsx)(n.code,{children:"SelectStateToProps"})," 返回的数据会传递到组件的 ",(0,c.jsx)(n.code,{children:"props"})," 上。当 ",(0,c.jsx)(n.code,{children:"models"})," 中没有传入 ",(0,c.jsx)(n.code,{children:"SelectStateToProps"})," 参数时，所有 Model 的 State 进行合并后传递到组件的 ",(0,c.jsx)(n.code,{children:"props"})," 上。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"SelectActionsToProps"}),"： ",(0,c.jsx)(n.code,{children:"modelActions"})," 是传入的 Model 对象的 Actions 组成的数组，",(0,c.jsx)(n.code,{children:"ownProps"})," 是当前组件接收外部传递的 ",(0,c.jsx)(n.code,{children:"props"}),"，",(0,c.jsx)(n.code,{children:"SelectActionsToProps"})," 返回的数据也会传递到组件的 ",(0,c.jsx)(n.code,{children:"props"})," 上。当 ",(0,c.jsx)(n.code,{children:"models"})," 中没有传入 ",(0,c.jsx)(n.code,{children:"SelectActionsToProps"})," 参数时，所有 Model 的 Actions 进行合并后传递到组件的 ",(0,c.jsx)(n.code,{children:"props"})," 上。"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"options"}),"：可选参数，用于辅助配置。目前支持设置 ",(0,c.jsx)(n.code,{children:"forwardRef"}),"，用于控制是否转发组件的 ",(0,c.jsx)(n.code,{children:"ref"}),"，默认值为 ",(0,c.jsx)(n.code,{children:"false"}),"，表示不转发 ",(0,c.jsx)(n.code,{children:"ref"}),"。设置为 ",(0,c.jsx)(n.code,{children:"{forwardRef: true}"}),"，表示转发 ",(0,c.jsx)(n.code,{children:"ref"}),"。"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.h2,{id:"返回值",children:["返回值",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["返回一个高阶组件：接收一个传入的组件，返回一个在 ",(0,c.jsx)(n.code,{children:"props"})," 上注入了额外 State 和 Actions 的组件。"]}),"\n",(0,c.jsxs)(n.h2,{id:"示例",children:["示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsxs)(n.h3,{id:"简单用法",children:["简单用法",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#简单用法",children:"#"})]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"const modelA = model('modelA').define({\n  state: {\n    a: 1,\n  },\n  actions: {\n    incA(state) {\n      return {\n        ...state,\n        a: state.a + 1,\n      };\n    },\n  },\n});\n\nconst modelB = model('modelB').define({\n  state: {\n    b: 10,\n  },\n  actions: {\n    incB(state) {\n      return {\n        ...state,\n        b: state.b + 1,\n      };\n    },\n  },\n});\n\nfunction Test(props) {\n  props.incA(); // 调用 modelA 的 action\n  props.incB(); // 调用 modelB 的 action\n\n  props.a; // 获取 modelA 的 state: a\n  props.b; // 获取 modelB 的 state: b\n}\n\nexport default connect([modelA, modelB])(Test);\n"})})})}),"\n",(0,c.jsxs)(n.h3,{id:"筛选-state-和-actions",children:["筛选 State 和 Actions",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#筛选-state-和-actions",children:"#"})]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"function Test(props) {\n  props.incAll();\n  props.c;\n}\n\nconst stateSelector = (stateA, stateB) => ({\n  ...stateA,\n  ...stateB,\n  c: stateA.a + stateA.b,\n});\nconst actionsSelector = (actionsA, actionsB) => ({\n  ...actionsA,\n  ...actionsB,\n  incAll: () => {\n    actionsA.incA();\n    actionsB.incB();\n  },\n});\n\nexport default connect([modelA, modelB, stateSelector, actionsSelector])(Test);\n"})})})}),"\n",(0,c.jsxs)(n.h3,{id:"转发组件的-ref",children:["转发组件的 ref",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#转发组件的-ref",children:"#"})]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"import { useRef, forwardRef } from 'react';\n\nfunction Test(props, ref) {\n  const { a, b } = props;\n\n  return (\n    <div ref={ref}>\n      <span>{a}</span>\n      <span>{b}</span>\n    </div>\n  );\n}\n\nconst TestWrapper = connect([modelA, modelB], { forwardRef: true })(\n  forwardRef(Test),\n);\n\nfunction App() {\n  const testRef = useRef();\n\n  return <TestWrapper ref={testRef} />;\n}\n"})})})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}}}]);