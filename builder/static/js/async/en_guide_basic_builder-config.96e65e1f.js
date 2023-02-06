"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[1167],{58850:function(e,n,i){i.r(n),i.d(n,{content:function(){return t},frontmatter:function(){return o},title:function(){return l},toc:function(){return s}});var r=i(39980);const o=void 0,s=[{id:"config-categories",text:"Config Categories",depth:2},{id:"default-values",text:"Default Values",depth:2},{id:"use-config",text:"Use Config",depth:2},{id:"in-the-upper-framework",text:"In the Upper Framework",depth:3},{id:"using-the-node-api",text:"Using the Node API",depth:3},{id:"relationship-with-framework-config",text:"Relationship with Framework Config",depth:2},{id:"debug-the-config",text:"Debug the config",depth:2}],l="Builder Config",t="\"# Builder Config\\n\\nBuilder provides a wealth of configs to help users customize the build behavior.\\n\\n## Config Categories\\n\\nBuilder Configs are divided into the following categories:\\n\\n- [Dev Config](/api/config-dev.html): Config related to local development.\\n- [Html Config](/api/config-html.html): Config related to HTML.\\n- [Tools Config](/api/config-tools.html): Config related to the low-level tools.\\n- [Source Config](/api/config-source.html): Config related to source code parsing and compilation.\\n- [Output Config](/api/config-output.html): Config related to output.\\n- [Security Config](/api/config-security.html): Config related to security.\\n- [Performance Config](/api/config-performance.html): Config related to performance.\\n\\nYou can find detailed descriptions of all configs on the [API Reference](/en/api/) page.\\n\\n## Default Values\\n\\nThe Builder presets a default value for each config, and the default value is suitable for most scenarios. At the same time, the upper-level framework will also override some of the default values based on the requirements of the vertical scene.\\n\\nIn most cases, you don't need to define any Builder config, just use it right out of the box.\\n\\n## Use Config\\n\\n### In the Upper Framework\\n\\nWhen you use a Builder-based upper-level framework, you can define the Builder config directly through the framework's config file, and the upper-level framework will pass the config to the Builder.\\n\\nFor example, in the {MODERN_JS} framework, you can define the Builder's [source.alias](/en/api/config-source.html#sourcealias) config in [modern.config.ts](https://modernjs.dev/docs/apis/app/config/usage) file.\\n\\n```ts\\n// modern.config.ts\\nexport default {\\n  source: {\\n    alias: {\\n      '@common': './src/common',\\n    },\\n  },\\n};\\n```\\n\\nCommonly used framework config files include:\\n\\n| Framework | Config File        |\\n| --------- | ------------------ |\\n| Modern.js | `modern.config.ts` |\\n| EdenX     | `edenx.config.ts`  |\\n| PIA       | `pia.config.ts`    |\\n\\n### Using the Node API\\n\\nWhen you call the Builder through the Node API, you can pass in the Builder config through the Provider's `builderConfig` option:\\n\\n```ts\\nimport { builderWebpackProvider } from '@modern-js/builder-webpack-provider';\\n\\nconst provider = builderWebpackProvider({\\n  builderConfig: {\\n    // some configs\\n  },\\n});\\n```\\n\\nPlease refer to [API - createBuilder](/en/api/builder-core.html#createbuilder) for details.\\n\\n## Relationship with Framework Config\\n\\nGenerally speaking, the Builder config is a subset of the framework config.\\n\\n**Builder config only deals with build-related behaviors**, while framework config covers a wider range, including runtime, server, deployment, etc., so framework config is extended from Builder config.\\n\\n## Debug the config\\n\\nYou can enable Builder's debug mode by adding the `DEBUG=builder` environment variable when executing a build.\\n\\n```bash\\nDEBUG=builder pnpm dev\\n```\\n\\nIn debug mode, Builder will write the Builder config to the dist directory, which is convenient for developers to view and debug.\\n\\n```\\nInspect config succeed, open the following files to view the content:\\n\\n   - Builder Config: /Project/demo/dist/builder.config.js\\n   - Webpack Config (web): /Project/demo/dist/webpack.config.web.js\\n```\\n\\nOpen the generated `/dist/builder.config.js` file to see the complete content of the Builder config.\\n\\nFor a complete introduction to debug mode, see the [Debug Mode](/guide/debug/debug-mode.html) chapter.\\n\"";function c(e){const n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",div:"div",button:"button",pre:"pre",code:"code",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"builder-config",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-config",children:"#"}),"Builder Config"]}),"\n",(0,r.jsx)(n.p,{children:"Builder provides a wealth of configs to help users customize the build behavior."}),"\n",(0,r.jsxs)(n.h2,{id:"config-categories",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config-categories",children:"#"}),"Config Categories"]}),"\n",(0,r.jsx)(n.p,{children:"Builder Configs are divided into the following categories:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/builder/en/api/config-dev.html",children:"Dev Config"}),": Config related to local development."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/builder/en/api/config-html.html",children:"Html Config"}),": Config related to HTML."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/builder/en/api/config-tools.html",children:"Tools Config"}),": Config related to the low-level tools."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/builder/en/api/config-source.html",children:"Source Config"}),": Config related to source code parsing and compilation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/builder/en/api/config-output.html",children:"Output Config"}),": Config related to output."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/builder/en/api/config-security.html",children:"Security Config"}),": Config related to security."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/builder/en/api/config-performance.html",children:"Performance Config"}),": Config related to performance."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can find detailed descriptions of all configs on the ",(0,r.jsx)(n.a,{href:"/builder/en/api/index.html",children:"API Reference"})," page."]}),"\n",(0,r.jsxs)(n.h2,{id:"default-values",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-values",children:"#"}),"Default Values"]}),"\n",(0,r.jsx)(n.p,{children:"The Builder presets a default value for each config, and the default value is suitable for most scenarios. At the same time, the upper-level framework will also override some of the default values based on the requirements of the vertical scene."}),"\n",(0,r.jsx)(n.p,{children:"In most cases, you don't need to define any Builder config, just use it right out of the box."}),"\n",(0,r.jsxs)(n.h2,{id:"use-config",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-config",children:"#"}),"Use Config"]}),"\n",(0,r.jsxs)(n.h3,{id:"in-the-upper-framework",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#in-the-upper-framework",children:"#"}),"In the Upper Framework"]}),"\n",(0,r.jsx)(n.p,{children:"When you use a Builder-based upper-level framework, you can define the Builder config directly through the framework's config file, and the upper-level framework will pass the config to the Builder."}),"\n",(0,r.jsxs)(n.p,{children:["For example, in the ","Modern.js"," framework, you can define the Builder's ",(0,r.jsx)(n.a,{href:"/builder/en/api/config-source.html#sourcealias",children:"source.alias"})," config in ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/docs/apis/app/config/usage",target:"_blank",rel:"nofollow",children:"modern.config.ts"})," file."]}),"\n",(0,r.jsxs)(n.div,{className:"language-ts",children:[(0,r.jsx)(n.div,{className:""}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(n.code,{children:[(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// modern.config.ts"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    alias"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@common'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./src/common'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(n.p,{children:"Commonly used framework config files include:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Framework"}),(0,r.jsx)(n.th,{children:"Config File"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modern.js"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"modern.config.ts"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"EdenX"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"edenx.config.ts"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PIA"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pia.config.ts"})})]})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"using-the-node-api",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-the-node-api",children:"#"}),"Using the Node API"]}),"\n",(0,r.jsxs)(n.p,{children:["When you call the Builder through the Node API, you can pass in the Builder config through the Provider's ",(0,r.jsx)(n.code,{children:"builderConfig"})," option:"]}),"\n",(0,r.jsxs)(n.div,{className:"language-ts",children:[(0,r.jsx)(n.div,{className:""}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(n.code,{children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" { builderWebpackProvider } "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/builder-webpack-provider'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(n.span,{className:"line"}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"provider"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"builderWebpackProvider"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  builderConfig"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// some configs"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to ",(0,r.jsx)(n.a,{href:"/builder/en/api/builder-core.html#createbuilder",children:"API - createBuilder"})," for details."]}),"\n",(0,r.jsxs)(n.h2,{id:"relationship-with-framework-config",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#relationship-with-framework-config",children:"#"}),"Relationship with Framework Config"]}),"\n",(0,r.jsx)(n.p,{children:"Generally speaking, the Builder config is a subset of the framework config."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Builder config only deals with build-related behaviors"}),", while framework config covers a wider range, including runtime, server, deployment, etc., so framework config is extended from Builder config."]}),"\n",(0,r.jsxs)(n.h2,{id:"debug-the-config",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#debug-the-config",children:"#"}),"Debug the config"]}),"\n",(0,r.jsxs)(n.p,{children:["You can enable Builder's debug mode by adding the ",(0,r.jsx)(n.code,{children:"DEBUG=builder"})," environment variable when executing a build."]}),"\n",(0,r.jsxs)(n.div,{className:"language-bash",children:[(0,r.jsx)(n.div,{className:""}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(n.code,{children:[(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"DEBUG=builder pnpm dev"})}),"\n",(0,r.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(n.p,{children:"In debug mode, Builder will write the Builder config to the dist directory, which is convenient for developers to view and debug."}),"\n",(0,r.jsxs)(n.div,{className:"language-text",children:[(0,r.jsx)(n.div,{className:""}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Inspect config succeed, open the following files to view the content:\n\n   - Builder Config: /Project/demo/dist/builder.config.js\n   - Webpack Config (web): /Project/demo/dist/webpack.config.web.js\n"})})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Open the generated ",(0,r.jsx)(n.code,{children:"/dist/builder.config.js"})," file to see the complete content of the Builder config."]}),"\n",(0,r.jsxs)(n.p,{children:["For a complete introduction to debug mode, see the ",(0,r.jsx)(n.a,{href:"/builder/en/guide/debug/debug-mode.html",children:"Debug Mode"})," chapter."]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);