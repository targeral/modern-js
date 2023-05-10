(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_model_computed-state_mdx"],{92117:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return o},title:function(){return a},toc:function(){return c},default:function(){return l}});var s=t("9880"),d=t("23169"),o={sidebar_position:4,title:"衍生状态"},a="衍生状态",c=[{text:"只依赖自身的 State",depth:2,id:"只依赖自身的-state"},{text:"依赖其他 Model 的 State",depth:2,id:"依赖其他-model-的-state"},{text:"函数类型的衍生状态",depth:2,id:"函数类型的衍生状态"}];function i(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",div:"div",button:"button",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"衍生状态",children:["衍生状态",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#衍生状态",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["一些场景中，组件需要对 Model 中的 State 进行进一步计算，才能在组件中使用，这部分逻辑可以直接写在组件内部，也可以通过 Model 的衍生状态实现。\n衍生状态定义在 Model 中的 ",(0,s.jsx)(n.code,{children:"computed"})," 字段下。根据依赖的 Model 的不同、返回类型的不同，衍生状态的定义方法可以分为以下 3 种。"]}),"\n",(0,s.jsxs)(n.h2,{id:"只依赖自身的-state",children:["只依赖自身的 State",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#只依赖自身的-state",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"衍生状态只依赖当前 Model 的 State，State 会作为第一个参数，传入衍生状态的定义函数中。"}),"\n",(0,s.jsxs)(n.p,{children:["例如， todo 应用的 State 有 ",(0,s.jsx)(n.code,{children:"items"})," 和 ",(0,s.jsx)(n.code,{children:"filter"}),"，",(0,s.jsx)(n.code,{children:"filter"})," 用于过滤当前页面显示的 todo 项，所以我们定义了一个 ",(0,s.jsx)(n.code,{children:"visibleTodos"})," 的衍生状态可以直接在组件中使用。示例代码如下："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"/**\n *  假设 todo item 结构如下：\n{\n    id: string;          // id\n    text: string;        // todo 事项\n    completed: boolean;  // 完成状态：0 代表未完成，1 代表完成\n}\n**/\n\nconst todoModel = model('todo').define({\n  state: {\n    items: [],\n    filter: 'ALL', // ALL: 显示全部；COMPLETED：显示完成的事项；ACTIVE：显示未完成的事项\n  },\n  computed: {\n    visibleTodos: state => {\n      switch (state.filter) {\n        case 'ALL':\n          return state.items;\n        case 'COMPLETED':\n          return todos.filter(t => t.completed);\n        case 'ACTIVE':\n          return todos.filter(t => !t.completed);\n        default:\n          return [];\n      }\n    },\n  },\n});\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["衍生状态最终会和 Model 的 State 进行合并，因此，可以通过 Model 的 State 对象访问到衍生状态，例如，",(0,s.jsx)(n.code,{children:"visibleTodos"})," 在组件内的使用方式如下："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"function Todo() {\n  const [state, actions] = useModel(todoModel);\n\n  return (\n    <div>\n      <div>\n        {state.visibleTodos.map(item => (\n          <div key={item.id}>{item.text}</div>\n        ))}\n      </div>\n    </div>\n  );\n}\n"})})]})}),"\n",(0,s.jsxs)(n.h2,{id:"依赖其他-model-的-state",children:["依赖其他 Model 的 State",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#依赖其他-model-的-state",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"除了依赖当前 Model 的 State，衍生状态还依赖其他 Model 的 State，这时候衍生状态的定义格式为："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"[stateKey]: [...depModels, (selfState, ...depModels) => computedState]\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["下面的示例，演示了 ",(0,s.jsx)(n.code,{children:"barModel"})," 的衍生状态 ",(0,s.jsx)(n.code,{children:"combinedValue"})," 是如何依赖 ",(0,s.jsx)(n.code,{children:"fooModel"})," 的 State 的。"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    value: 'foo',\n  },\n});\n\nconst barModel = model('bar').define({\n  state: {\n    value: 'foo',\n  },\n  computed: {\n    combinedValue: [\n      fooModel,\n      (state, fooState) => state.value + fooState.value,\n    ],\n  },\n});\n"})})]})}),"\n",(0,s.jsxs)(n.h2,{id:"函数类型的衍生状态",children:["函数类型的衍生状态",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数类型的衍生状态",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"衍生状态还可以返回一个函数。这时候衍生状态的定义格式为："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"[stateKey]: (state) => (...args) => computedState    // 只依赖自身的 state\n[stateKey]: [...depModels, (selfState, ...depModels) => (...args) => computedState]  // 依赖其他 Model 的 state\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["假设，todo 应用的 state 不存储 ",(0,s.jsx)(n.code,{children:"filter"})," 状态，而是直接在组件中使用，那么 ",(0,s.jsx)(n.code,{children:"visibleTodos"})," 可以是一个函数类型的值，这个函数在组件中使用的时候，接收 ",(0,s.jsx)(n.code,{children:"filter"})," 参数。如下所示："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"const todoModel = model('todo').define({\n  state: {\n    items: [],\n  },\n  computed: {\n    visibleTodos: state => filter => {\n      switch (filter) {\n        case 'ALL':\n          return state.items;\n        case 'COMPLETED':\n          return todos.filter(t => t.completed);\n        case 'ACTIVE':\n          return todos.filter(t => !t.completed);\n        default:\n          return [];\n      }\n    },\n  },\n});\n\nfunction Todo(props) {\n  // filter 状态通过 props 传入\n  const { filter } = props;\n  const [state, actions] = useModel(todoModel);\n\n  // 计算得到最终要显示的 todos\n  const todos = state.visibleTodos(filter);\n\n  return (\n    <div>\n      <div>\n        {todos.map(item => (\n          <div key={item.id}>{item.text}</div>\n        ))}\n      </div>\n    </div>\n  );\n}\n"})})]})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"更多参考"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/guides/topic-detail/model/computed-state",children:"使用 Model"})}),"\n"]})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);