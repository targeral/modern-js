(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_api_api-runtime_mdx~docs_zh_guide_i18n_mdx"],{9961:function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return d}});var o=s("12151"),c=s("23169");function t(n){var e=Object.assign({p:"p",code:"code",div:"div",button:"button",pre:"pre"},(0,c.useMDXComponents)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["框架提供了 ",(0,o.jsx)(e.code,{children:"useI18n"})," 这个 hook 来获取国际化文本，使用方式如下："]}),"\n",(0,o.jsx)(e.div,{className:"language-",children:(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"code",children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import { useI18n } from '@modern-js/doc-tools/runtime';\n\nconst MyComponent = () => {\n  const { t } = useI18n();\n\n  return <div>{t('getting-started')}</div>;\n};\n"})})]})}),"\n",(0,o.jsxs)(e.p,{children:["为了获得更好的类型提示，你可以在 tsconfig.json 中配置 ",(0,o.jsx)(e.code,{children:"paths"}),":"]}),"\n",(0,o.jsx)(e.div,{className:"language-",children:(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"code",children:(0,o.jsx)(e.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "paths": {\n      "i18n": ["./i18n.json"]\n    }\n  }\n}\n'})})]})}),"\n",(0,o.jsx)(e.p,{children:"然后在组件中这样使用:"}),"\n",(0,o.jsx)(e.div,{className:"language-",children:(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"code",children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import { useI18n } from '@modern-js/doc-tools/runtime';\n\nconst MyComponent = () => {\n  const { t } = useI18n<keyof typeof import('i18n')>();\n\n  return <div>{t('getting-started')}</div>;\n};\n"})})]})}),"\n",(0,o.jsxs)(e.p,{children:["这样你就可以获得 ",(0,o.jsx)(e.code,{children:"i18n.json"})," 中定义的所有文本 key 的类型提示了。"]})]})}var d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,c.useMDXComponents)(),n.components).wrapper;return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(t,n)})):t(n)}}}]);