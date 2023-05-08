(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_basic_svg-assets_md"],{24690:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var t in s)Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}(s,{frontmatter:function(){return o},title:function(){return r},toc:function(){return c},default:function(){return d}});var n=t("12151"),a=t("23169"),o={},r="Import SVG Assets",c=[{text:"Import SVG in JS file",depth:2,id:"import-svg-in-js-file"},{text:"Modify the Default Export",depth:2,id:"modify-the-default-export"},{text:"Import SVG in CSS file",depth:2,id:"import-svg-in-css-file"},{text:"Assets Processing",depth:2,id:"assets-processing"},{text:"Disable SVGR Processing",depth:2,id:"disable-svgr-processing"},{text:"Add type declaration",depth:2,id:"add-type-declaration"}];function i(e){var s=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",code:"code",button:"button",pre:"pre"},(0,a.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"import-svg-assets",children:["Import SVG Assets",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#import-svg-assets",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"Builder supports import SVG assets and transform SVG into React components or URLs."}),"\n",(0,n.jsxs)(s.div,{className:"modern-directive tip",children:[(0,n.jsx)(s.div,{className:"modern-directive-title",children:"What is SVG"}),(0,n.jsx)(s.div,{className:"modern-directive-content",children:(0,n.jsx)(s.p,{children:"SVG stands for Scalable Vector Graphics. It is a type of image format that uses vector graphics to represent images. Vector graphics are different from raster graphics, which are made up of pixels. Instead, vector graphics use geometric shapes, lines, and curves to represent images. Because vector graphics are not made up of pixels, they can be scaled to any size without losing resolution or quality."})})]}),"\n",(0,n.jsxs)(s.h2,{id:"import-svg-in-js-file",children:["Import SVG in JS file",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#import-svg-in-js-file",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["When import an SVG in a JS file, if you import ",(0,n.jsx)(s.code,{children:"ReactComponent"}),", Builder will call ",(0,n.jsx)(s.a,{href:"https://react-svgr.com/",target:"_blank",rel:"noopener noreferrer",children:"SVGR"})," to convert the SVG into a React component."]}),"\n",(0,n.jsxs)(s.div,{className:"language-",children:[(0,n.jsx)(s.div,{className:"modern-code-title",children:"src/component/Logo.tsx"}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-tsx",meta:'title="src/component/Logo.tsx"',children:"import { ReactComponent as Logo } from './static/logo.svg';\n\nexport default () => <Logo />;\n"})})]})]}),"\n",(0,n.jsx)(s.p,{children:"If you use the default import, then the SVG will be treated as a normal static asset and you will get a URL:"}),"\n",(0,n.jsxs)(s.div,{className:"language-",children:[(0,n.jsx)(s.div,{className:"modern-code-title",children:"src/component/Logo.tsx"}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-tsx",meta:'title="src/component/Logo.tsx"',children:"import logoURL from './static/logo.svg';\n\nconsole.log(logoURL); // => \"/static/logo.6c12aba3.png\"\n"})})]})]}),"\n",(0,n.jsxs)(s.h2,{id:"modify-the-default-export",children:["Modify the Default Export",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-default-export",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["You can modify the default export of SVG files through the ",(0,n.jsx)(s.a,{href:"/en/api/config-output",children:"output.svgDefaultExport"})," config. For example, set the default export as a React component:"]}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    svgDefaultExport: 'component',\n  },\n};\n"})})]})}),"\n",(0,n.jsx)(s.p,{children:"Then import the SVG, you'll get a React component instead of a URL:"}),"\n",(0,n.jsxs)(s.div,{className:"language-",children:[(0,n.jsx)(s.div,{className:"modern-code-title",children:"src/component/Logo.tsx"}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-tsx",meta:'title="src/component/Logo.tsx"',children:"import Logo from './static/logo.svg';\n\nexport default () => <Logo />;\n"})})]})]}),"\n",(0,n.jsxs)(s.h2,{id:"import-svg-in-css-file",children:["Import SVG in CSS file",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#import-svg-in-css-file",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"When import an SVG in a CSS file, the SVG is treated as a normal static resource and you will get a URL:"}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-css",children:".logo {\n  background-image: url('../static/logo.svg');\n}\n"})})]})}),"\n",(0,n.jsxs)(s.h2,{id:"assets-processing",children:["Assets Processing",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assets-processing",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"When SVG is imported not as a React component but as a normal static resource, it is processed exactly the same as other static assets, and it is also affected by rules such as assets inlining and URL prefixing."}),"\n",(0,n.jsxs)(s.p,{children:["Please read the ",(0,n.jsx)(s.a,{href:"/guide/basic/static-assets",children:"Import Static Assets"})," section to understand the processing rules for static assets."]}),"\n",(0,n.jsxs)(s.h2,{id:"disable-svgr-processing",children:["Disable SVGR Processing",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-svgr-processing",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["By default, when an SVG resource is referenced in a JS file, Builder will call SVGR to convert the SVG into a React component. If you are sure that all SVG resources in your project are not being used as React components, you can turn off this conversion by setting ",(0,n.jsx)(s.a,{href:"/api/config-output",children:(0,n.jsx)(s.code,{children:"disableSvgr"})})," to true to improve build performance."]}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    disableSvgr: true,\n  },\n};\n"})})]})}),"\n",(0,n.jsxs)(s.h2,{id:"add-type-declaration",children:["Add type declaration",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#add-type-declaration",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"When you reference an SVG asset in TypeScript code, TypeScript may prompt that the module is missing a type definition:"}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{children:"TS2307: Cannot find module './logo.svg' or its corresponding type declarations.\n"})})]})}),"\n",(0,n.jsxs)(s.p,{children:["To fix this, you need to add a type declaration file for the SVG asset, please create a ",(0,n.jsx)(s.code,{children:"src/global.d.ts"})," file, and add the following type declaration:"]}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-ts",children:"declare module '*.svg' {\n  export const ReactComponent: React.FunctionComponent<\n    React.SVGProps<SVGSVGElement>\n  >;\n\n  const content: string;\n  export default content;\n}\n"})})]})}),"\n",(0,n.jsxs)(s.p,{children:["If you set ",(0,n.jsx)(s.code,{children:"svgDefaultExport"})," to ",(0,n.jsx)(s.code,{children:"'component'"}),", then change the type declaration to:"]}),"\n",(0,n.jsx)(s.div,{className:"language-",children:(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"code",children:(0,n.jsx)(s.code,{className:"language-ts",children:"declare module '*.svg' {\n  export const ReactComponent: React.FunctionComponent<\n    React.SVGProps<SVGSVGElement>\n  >;\n\n  export default ReactComponent;\n}\n"})})]})}),"\n",(0,n.jsxs)(s.p,{children:["After adding the type declaration, if the type error still exists, you can try to restart the current IDE, or adjust the directory where ",(0,n.jsx)(s.code,{children:"global.d.ts"})," is located, making sure the TypeScript can correctly identify the type definition."]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(i,e)})):i(e)}}}]);