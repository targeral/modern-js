(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_model_test-model_mdx"],{18536:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{frontmatter:function(){return r},title:function(){return c},toc:function(){return d},default:function(){return a}});var s=n("9880"),o=n("23169"),r={sidebar_position:9,title:"Test Model"},c="Test Model",d=[];function i(e){var t=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"test-model",children:["Test Model",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#test-model",children:"#"})]}),"\n",(0,s.jsxs)(t.p,{children:["Testing is crucial for the stability of code. Here's an example using the ",(0,s.jsx)(t.code,{children:"countModel"})," from ",(0,s.jsx)(t.a,{href:"/guides/topic-detail/model/quick-start",children:"Quick Start"})," to demonstrate how to perform unit testing on a Model in Modern.js."]}),"\n",(0,s.jsxs)(t.p,{children:["To use the testing feature, you need to first enable it. In the project root directory, execute ",(0,s.jsx)(t.code,{children:"pnpm run new"})," and make the following selection:"]}),"\n",(0,s.jsx)(t.div,{className:"language-",children:(0,s.jsx)(t.div,{className:"modern-code-content",children:(0,s.jsx)(t.pre,{className:"code",children:(0,s.jsx)(t.code,{className:"language-bash",children:'? Please select the operation you want to perform: Enable optional features\n? Enable optional features Enable "Unit Testing / Integration Testing" feature\n'})})})}),"\n",(0,s.jsx)(t.p,{children:"This will enable testing feature support."}),"\n",(0,s.jsxs)(t.p,{children:["Create a new file called ",(0,s.jsx)(t.code,{children:"count.test.ts"})," with the following code:"]}),"\n",(0,s.jsx)(t.div,{className:"language-",children:(0,s.jsx)(t.div,{className:"modern-code-content",children:(0,s.jsx)(t.pre,{className:"code",children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { createStore } from '@modern-js/runtime/testing';\nimport countModel from './count';\n\ndescribe('test model', () => {\n  it('count value should plus one after add', () => {\n    const store = createStore();\n    const [state, { add }] = store.use(countModel);\n\n    expect(state).toEqual({ value: 1 });\n\n    add();\n\n    expect(store.use(countModel)[0]).toEqual({ value: 2 });\n  });\n});\n"})})})}),"\n",(0,s.jsxs)(t.div,{className:"modern-directive info",children:[(0,s.jsx)(t.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(t.div,{className:"modern-directive-content",children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/apis/app/runtime/model/create-store",children:(0,s.jsx)(t.code,{children:"createStore"})})," used here is imported from ",(0,s.jsx)(t.code,{children:"@modern-js/runtime/testing"}),", which internally uses the configuration of ",(0,s.jsx)(t.a,{href:"/configure/app/runtime/state",children:(0,s.jsx)(t.code,{children:"runtime.state"})})," to create a ",(0,s.jsx)(t.code,{children:"store"}),"."]}),"\n"]})]}),"\n",(0,s.jsxs)(t.p,{children:["In the test case, we create a new ",(0,s.jsx)(t.code,{children:"store"})," to mount ",(0,s.jsx)(t.code,{children:"countModel"}),", use ",(0,s.jsx)(t.code,{children:"store.use"})," to get the State and Actions of ",(0,s.jsx)(t.code,{children:"countModel"}),". Then, we call the ",(0,s.jsx)(t.code,{children:"add"})," Action to update the state and assert the updated state value."]}),"\n",(0,s.jsxs)(t.p,{children:["Execute the ",(0,s.jsx)(t.code,{children:"pnpm run test"})," command to trigger the execution of the test case."]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);