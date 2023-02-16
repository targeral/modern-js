"use strict";(self.webpackChunk_modern_js_main_doc_website=self.webpackChunk_modern_js_main_doc_website||[]).push([[57689],{14178:function(e,n,i){i.r(n),i.d(n,{frontmatter:function(){return s},title:function(){return c},toc:function(){return t}});var r=i(97458);const s={sidebar_position:2},t=[{id:"project-creation",text:"Project creation",depth:2},{id:"new-command",text:"New Command",depth:2},{id:"actiontype",text:"actionType",depth:3},{id:"element",text:"element",depth:3},{id:"name",text:"name",depth:4},{id:"function",text:"function",depth:3},{id:"bff-parameters",text:"BFF parameters",depth:4}],c="Web App";function a(e){const n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",h3:"h3",ul:"ul",li:"li",div:"div",h4:"h4",h5:"h5"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"web-app",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#web-app",children:"#"}),"Web App"]}),"\n",(0,r.jsxs)(n.h2,{id:"project-creation",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#project-creation",children:"#"}),"Project creation"]}),"\n",(0,r.jsxs)(n.p,{children:["When creating a project, the configuration used by ",(0,r.jsx)(n.code,{children:"@modern-js/create"})," when using the ",(0,r.jsx)(n.code,{children:"--config"})," parameter, and the configuration used when modifying and adding input in the generator plugin."]}),"\n",(0,r.jsxs)(n.p,{children:["The application project creation parameters are ",(0,r.jsx)(n.a,{href:"/en/guides/topic-detail/generator/config/common.html",children:"Generator Configuration"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"new-command",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#new-command",children:"#"}),"New Command"]}),"\n",(0,r.jsxs)(n.p,{children:["The new command configuration in the application project can be used through the ",(0,r.jsx)(n.code,{children:"--config"})," parameter configuration when executing the new command, or when creating elements and enabling functions in the generator plugin."]}),"\n",(0,r.jsxs)(n.h3,{id:"actiontype",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#actiontype",children:"#"}),"actionType"]}),"\n",(0,r.jsx)(n.p,{children:"The action type (actionType) of the New command , the type supports two types:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"element: reate engineering elements"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"function: enable function"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.p,{className:"modern-directive-title",children:"INFO"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsx)(n.p,{children:"\nThis parameter is not required when using the enable function and creating elements in the generator plugin, it is automatically added in the generator plugin."})})]}),"\n",(0,r.jsxs)(n.h3,{id:"element",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#element",children:"#"}),"element"]}),"\n",(0,r.jsx)(n.p,{children:"Element name (element), supports two options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create an application entry(entry)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create customized server dir(server)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The entry also need to be used in conjunction with the specific configuration, which is described as follows:"}),"\n",(0,r.jsxs)(n.h4,{id:"name",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#name",children:"#"}),"name"]}),"\n",(0,r.jsxs)(n.p,{children:["Entry name (name), character ",(0,r.jsx)(n.code,{children:"string"})," type."]}),"\n",(0,r.jsxs)(n.h3,{id:"function",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function",children:"#"}),"function"]}),"\n",(0,r.jsx)(n.p,{children:"Optional function name (function), supports the following options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Tailwind CSS(tailwindcss)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"BFF(bff)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"SSG(ssg)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Micro Frontend(micro_frontend)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Unit Test / Integration Test(test)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Storybook(mwa_storybook)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"UA-based Polyfill Feature'(polyfill)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Global Proxy(proxy)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"bff"})," also need to be used in conjunction with configuration, as described below:"]}),"\n",(0,r.jsxs)(n.h4,{id:"bff-parameters",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bff-parameters",children:"#"}),"BFF parameters"]}),"\n",(0,r.jsxs)(n.h5,{id:"bfftype",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bfftype",children:"#"}),"bffType"]}),"\n",(0,r.jsx)(n.p,{children:"BFF type (bffType), supports two options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Function mode(function)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Framework mode(framework)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h5,{id:"framework",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#framework",children:"#"}),"framework"]}),"\n",(0,r.jsx)(n.p,{children:"BFF runtime framework (framework)\uff0csupports two options\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Express(express)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Koa(koa)"}),"\n"]}),"\n"]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);