(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_utility_loadable_mdx"],{55361:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var o in n)Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}(n,{frontmatter:function(){return r},title:function(){return d},toc:function(){return l},default:function(){return c}});var a=o("9880"),s=o("23169"),r={title:"loadable"},d="loadable",l=[{text:"使用姿势",depth:2,id:"使用姿势"},{text:"函数签名",depth:2,id:"函数签名"},{text:"参数",depth:3,id:"参数"},{text:"loadFn",depth:4,id:"loadfn"},{text:"options.resolveComponent",depth:4,id:"optionsresolvecomponent"},{text:"options.fallback",depth:4,id:"optionsfallback"},{text:"options.ssr",depth:4,id:"optionsssr"},{text:"返回值",depth:3,id:"返回值"},{text:"LoadableComponent",depth:4,id:"loadablecomponent"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4"},(0,s.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"loadable",children:["loadable",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loadable",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"用于创建 Loadable 的组件。"}),"\n",(0,a.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import loadable from '@modern-js/runtime/loadable';\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"函数签名",children:["函数签名",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type Options = {\n  resolveComponent?: (\n    module: Module,\n    props: Props,\n  ) => React.ComponentType<Props>,\n  fallback?: JSX.Element;\n  ssr?: boolean;\n}\n\nfunction loadable(loadFn: Function, options?: Options) => LoadableComponent\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"参数",children:["参数",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"loadfn",children:["loadFn",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loadfn",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"用于加载组件。"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import loadable from '@modern-js/runtime/loadable';\n\nconst OtherComponent = loadable(() => import('./OtherComponent'));\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"optionsresolvecomponent",children:["options.resolveComponent",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#optionsresolvecomponent",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["类型：",(0,a.jsx)(n.code,{children:"(module: Module, props: Props) => React.ComponentType<Props>"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"module"})," 为 ",(0,a.jsx)(n.code,{children:"loadFn"})," 返回的组件，",(0,a.jsx)(n.code,{children:"props"})," 是 loadable 返回的组件接受的 props 参数。默认的话，我们认为 ",(0,a.jsx)(n.code,{children:"import"})," 的文件都是默认导出 react 组件，这时候直接渲染该组件即可。但当组件是具名导出的，或者我们需要根据具体的 ",(0,a.jsx)(n.code,{children:"props"})," 动态判断需要渲染哪个组件的时候，可以使用 ",(0,a.jsx)(n.code,{children:"resolveComponent"})," 来实现。下面是一个示例："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:"title='component.js'",children:"export const Apple = () => 'Apple!';\nexport const Orange = () => 'Orange!';\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:"title='loadable.js'",children:"const LoadableApple = loadable(() => import('./components'), {\n  resolveComponent: components => components.Apple,\n});\nconst LoadableOrange = loadable(() => import('./components'), {\n  resolveComponent: components => components.Orange,\n});\nconst LoadableFruit = loadable(() => import('./components'), {\n  resolveComponent: (components, props) => components[props.fruit],\n});\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"optionsfallback",children:["options.fallback",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#optionsfallback",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"是否在 loading 阶段显示 fallback 内容。"}),"\n",(0,a.jsxs)(n.h4,{id:"optionsssr",children:["options.ssr",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#optionsssr",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["是否支持 SSR，默认值是 ",(0,a.jsx)(n.code,{children:"true"}),"。"]}),"\n",(0,a.jsxs)(n.h3,{id:"返回值",children:["返回值",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"loadablecomponent",children:["LoadableComponent",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loadablecomponent",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type LoadableComponent<Props> = React.ComponentType<\n  Props & { fallback?: JSX.Element }\n> & {\n  preload(props?: Props): void;\n  load(props?: Props): Promise<React.ComponentType<Props>>;\n};\n"})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(t,e)})):t(e)}}}]);