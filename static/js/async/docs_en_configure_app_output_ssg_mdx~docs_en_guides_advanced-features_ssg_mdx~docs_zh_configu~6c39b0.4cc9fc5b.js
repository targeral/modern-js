(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_ssg_mdx~docs_en_guides_advanced-features_ssg_mdx~docs_zh_configu~6c39b0"],{69577:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return u}});var o=t("12151"),r=t("23169");function s(e){var n=Object.assign({div:"div",button:"button",pre:"pre",code:"code"},(0,r.useMDXComponents)(),e.components);return(0,o.jsxs)(n.div,{className:"language-",children:[(0,o.jsx)(n.div,{className:"modern-code-title",children:"src/App.tsx"}),(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"code",children:(0,o.jsx)(n.code,{className:"language-tsx",meta:'title="src/App.tsx"',children:"import { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';\nimport { StaticRouter } from '@modern-js/runtime/router/server';\nimport React from 'react';\nimport { useRuntimeContext } from '@modern-js/runtime';\n\nconst Router = typeof window === 'undefined' ? StaticRouter : BrowserRouter;\n\nexport default () => {\n  const { context } = useRuntimeContext();\n  const pathname = context?.request?.pathname;\n  return (\n    <Router location={pathname}>\n      <Routes>\n        <Route index element={<div>index</div>} />\n        <Route path=\"about\" element={<div>about</div>} />\n      </Routes>\n    </Router>\n  );\n};\n"})})]})]})}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(s,e)})):s(e)}}}]);