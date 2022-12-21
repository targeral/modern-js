import{jsx as n,jsxs as o,Fragment as i}from"react/jsx-runtime";const a=void 0,c=[{id:"storybook",text:"Storybook",depth:2},{id:"tailwind-css-support",text:"Tailwind CSS support",depth:2},{id:"modernjs-runtime-api",text:"Modern.js Runtime API",depth:2}],h="Using the Microgenerator";function r(t){const e=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",code:"code",strong:"strong",h2:"h2"},t.components);return o(i,{children:[o(e.h1,{id:"using-the-microgenerator",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-the-microgenerator",children:"#"}),"Using the Microgenerator"]}),`
`,n(e.p,{children:"The Module Engineering solution provides the Microgenerator tool, which allows for the current project to."}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"add new directories and files"}),`
`,o(e.li,{children:["Modify the contents of the ",n(e.code,{children:"package.json"})," file"]}),`
`,n(e.li,{children:"Execute commands"}),`
`]}),`
`,o(e.p,{children:["Thus with these capabilities, ",n(e.strong,{children:"Microgenerator can enable additional feature functionality for the project"}),"."]}),`
`,o(e.p,{children:["The microgenerator can be started via ",n(e.a,{href:"/zh/guide/command-preview",children:n(e.code,{children:"modern new"})}),". The current Microgenerator features supported by the Module Engineering program are:"]}),`
`,o(e.h2,{id:"storybook",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook",children:"#"}),"Storybook"]}),`
`,o(e.p,{children:["The ",n(e.strong,{children:"Storybook feature"})," can be enabled when we want to debug a component or a common module. When this feature is enabled, ",o(e.strong,{children:["the ",n(e.code,{children:"stories"})," directory and related files are created in the project directory, and a new ",n(e.code,{children:'"@modern-js/plugin-storybook"'})," dependency is added to package.json"]}),"."]}),`
`,n(e.p,{children:"For more information on how to start Storybook and how to use it, check out the following link."}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"/en/guide/command-preview#modern-dev",children:n(e.code,{children:"modern dev"})})}),`
`,n(e.li,{children:n(e.a,{href:"/xxx",children:"using Storybook"})}),`
`]}),`
`,o(e.h2,{id:"tailwind-css-support",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#tailwind-css-support",children:"#"}),"Tailwind CSS support"]}),`
`,o(e.p,{children:["This can be enabled when we want to add ",n(e.a,{href:"https://v2.tailwindcss.com/",target:"_blank",rel:"nofollow",children:"Tailwind CSS"})," support to our project. Tailwind CSS is a CSS library that provides out-of-the-box styling."]}),`
`,n(e.p,{children:"For more information on how to use Tailwind CSS in your module projects, check out."}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"/xxx",children:"Using Tailwind CSS"})}),`
`]}),`
`,o(e.h2,{id:"modernjs-runtime-api",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-runtime-api",children:"#"}),"Modern.js Runtime API"]}),`
`,o(e.p,{children:[o(e.strong,{children:["Modern.js provides ",n(e.a,{href:"/xxx",children:"Runtime API"})," capabilities that can only be used in the Modern.js application project environment"]}),". If you need to develop a component for use in a Modern.js application environment, then you can turn on this feature and the microgenerator will add the ",n(e.code,{children:'"@modern-js/runtime"'})," dependency."]}),`
`,n(e.p,{children:"Also, the Storybook debugging tool will determine if the project needs to use the Runtime API by checking the project's dependencies and providing the same Runtime API runtime environment as the Modern.js application project."})]})}function s(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(r,t)})):r(t)}const l="2022/12/20 04:38:46",u=`# Using the Microgenerator

The Module Engineering solution provides the Microgenerator tool, which allows for the current project to.

* add new directories and files
* Modify the contents of the \`package.json\` file
* Execute commands

Thus with these capabilities, **Microgenerator can enable additional feature functionality for the project**.

The microgenerator can be started via [\`modern new\`](/zh/guide/command-preview). The current Microgenerator features supported by the Module Engineering program are:

## Storybook

The **Storybook feature** can be enabled when we want to debug a component or a common module. When this feature is enabled, **the \`stories\` directory and related files are created in the project directory, and a new \`"@modern-js/plugin-storybook"\` dependency is added to package.json**.

For more information on how to start Storybook and how to use it, check out the following link.

* [\`modern dev\`](/en/guide/command-preview#modern-dev)
* [using Storybook](xxx)

## Tailwind CSS support

This can be enabled when we want to add [Tailwind CSS](https://v2.tailwindcss.com/) support to our project. Tailwind CSS is a CSS library that provides out-of-the-box styling.

For more information on how to use Tailwind CSS in your module projects, check out.

* [Using Tailwind CSS](xxx)


## Modern.js Runtime API

**Modern.js provides [Runtime API](xxx) capabilities that can only be used in the Modern.js application project environment**. If you need to develop a component for use in a Modern.js application environment, then you can turn on this feature and the microgenerator will add the \`"@modern-js/runtime"\` dependency.

Also, the Storybook debugging tool will determine if the project needs to use the Runtime API by checking the project's dependencies and providing the same Runtime API runtime environment as the Modern.js application project.
`;export{u as content,s as default,a as frontmatter,l as lastUpdatedTime,h as title,c as toc};
