(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_transform-import_mdx"],{31345:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var s=r("9880"),c=r("23169");function l(e){var n=Object.assign({p:"p",a:"a",code:"code",ul:"ul",li:"li",strong:"strong",div:"div",pre:"pre",h3:"h3",h4:"h4"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["用于按需引入组件库的代码和样式，能力等价于 ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["与 ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"})," 的区别在于，",(0,s.jsx)(n.code,{children:"source.transformImport"})," 不与 Babel 耦合。Builder 会自动识别当前使用的编译工具是 Babel、SWC 还是 Rspack，并添加相应的按需引入配置。"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"type Config = false | Array<{\n  libraryName: string;\n  libraryDirectory?: string;\n  style?: string | boolean;\n  styleLibraryDirectory?: string;\n  camelToDashComponentName?: boolean;\n  transformToDefaultImport?: boolean;\n  customName?: ((member: string) => string | undefined) | string;\n  customStyleName?: ((member: string) => string | undefined) | string;\n}>;\n"})})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["当项目中安装了 ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/antd",target:"_blank",rel:"noopener noreferrer",children:"antd 组件库"})," <= 4.x 版本时，Builder 会自动添加对应的按需引入配置，默认配置如下："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"{\n  libraryName: 'antd',\n  libraryDirectory: target === 'node' ? 'lib' : 'es',\n  style: true,\n}\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["你可以手动设置 ",(0,s.jsx)(n.code,{children:"transformImport: false"})," 来关掉 transformImport 的默认行为。"]}),"\n",(0,s.jsxs)(n.p,{children:["比如，当你使用了 ",(0,s.jsx)(n.code,{children:"externals"})," 来避免打包 antd 时，由于 ",(0,s.jsx)(n.code,{children:"transformImport"})," 默认会转换 antd 的引用路径，导致匹配的路径发生了变化，因此 externals 无法生效。此时你可以设置 ",(0,s.jsx)(n.code,{children:"transformImport: false"})," 来避免该问题。"]}),"\n",(0,s.jsxs)(n.h3,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"当使用上述 antd 默认配置："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"{\n  libraryName: 'antd',\n  libraryDirectory: 'es',\n  style: true,\n}\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"源代码如下："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"import { Button } from 'antd';\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"会被转换成："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"import Button from 'antd/es/button';\nimport 'antd/es/button/style';\n"})})})}),"\n",(0,s.jsxs)(n.h3,{id:"配置",children:["配置",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"libraryname",children:["libraryName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#libraryname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"用于指定需要按需加载的模块名称。当 Builder 遍历代码时，如果遇到了对应模块的 import 语句，则会对其进行转换。"}),"\n",(0,s.jsxs)(n.h4,{id:"librarydirectory",children:["libraryDirectory",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#librarydirectory",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"'lib'"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["用于拼接转换后的路径，拼接规则为 ",(0,s.jsx)(n.code,{children:"${libraryName}/${libraryDirectory}/${member}"}),"，其中 member 为引入成员。"]}),"\n",(0,s.jsx)(n.p,{children:"示例："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"转换结果:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\n"})})})}),"\n",(0,s.jsxs)(n.h4,{id:"style",children:["style",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#style",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["确定是否需要引入相关样式，若为 ",(0,s.jsx)(n.code,{children:"true"}),"，则会引入路径 ",(0,s.jsx)(n.code,{children:"${libraryName}/${libraryDirectory}/${member}/style"}),"。\n若为 ",(0,s.jsx)(n.code,{children:"false"})," 或 ",(0,s.jsx)(n.code,{children:"undefined"})," 则不会引入样式。"]}),"\n",(0,s.jsxs)(n.p,{children:["当配置为 ",(0,s.jsx)(n.code,{children:"true"})," 时："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"转换结果:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\nimport 'foo/lib/button/style';\n"})})})}),"\n",(0,s.jsxs)(n.h4,{id:"stylelibrarydirectory",children:["styleLibraryDirectory",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#stylelibrarydirectory",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["该配置用于拼接引入样式时的引入路径，若该配置被指定，则 ",(0,s.jsx)(n.code,{children:"style"})," 配置项会被忽略。拼接引入路径为 ",(0,s.jsx)(n.code,{children:"${libraryName}/${styleLibraryDirectory}/${member}"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["当配置为 ",(0,s.jsx)(n.code,{children:"styles"})," 时："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"转换结果:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\nimport 'foo/styles/button';\n"})})})}),"\n",(0,s.jsxs)(n.h4,{id:"cameltodashcomponentname",children:["camelToDashComponentName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cameltodashcomponentname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"是否需要将 camelCase 的引入转换成 kebab-case。"}),"\n",(0,s.jsx)(n.p,{children:"示例："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { ButtonGroup } from 'foo';\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"转换结果："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"// 设置成 true：\nimport ButtonGroup from 'foo/button-group';\n// 设置成 false：\nimport ButtonGroup from 'foo/ButtonGroup';\n"})})})}),"\n",(0,s.jsxs)(n.h4,{id:"transformtodefaultimport",children:["transformToDefaultImport",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#transformtodefaultimport",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"是否将导入语句转换成默认导入。"}),"\n",(0,s.jsx)(n.p,{children:"示例："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"转换结果："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"// 设置成 true：\nimport Button from 'foo/button';\n// 设置成 false：\nimport { Button } from 'foo/button';\n"})})})}),"\n",(0,s.jsxs)(n.h4,{id:"customname",children:["customName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"((member: string) => string | undefined) | string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"注意"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"函数类型的配置只能在 Webpack 构建中使用。"}),"\n",(0,s.jsx)(n.li,{children:"模版类型的配置只能在 Rspack 构建或者使用了 SWC 的 Webpack 构建中使用。"}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["自定义转换后的导入路径，输入是引入的成员，例如配置成 ",(0,s.jsx)(n.code,{children:" (member) => `my-lib/${member}` "}),"，会将 ",(0,s.jsx)(n.code,{children:"import { foo } from 'bar'"})," 转换成 ",(0,s.jsx)(n.code,{children:"import foo from 'my-lib/foo'"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["在使用 Rspack 构建时，不能使用函数配置，但可以使用 ",(0,s.jsx)(n.a,{href:"https://handlebarsjs.com/",target:"_blank",rel:"noopener noreferrer",children:"handlebars"})," 模版字符串，对于上面的函数配置，在使用模版字符串时可以用以下模版代替 ",(0,s.jsx)(n.code,{children:"my-lib/{{ member }}"}),"，也可以使用一些内置帮助方法，例如 ",(0,s.jsx)(n.code,{children:"my-lib/{{ kebabCase member }}"})," 来转换成 kebab-case 格式，除了 kebabCase 以外还有 camelCase，snakeCase，upperCase，lowerCase 可以使用。"]}),"\n",(0,s.jsxs)(n.h4,{id:"customstylename",children:["customStyleName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customstylename",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"((member: string) => string | undefined) | string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"注意"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"函数类型的配置只能在 Webpack 构建中使用。"}),"\n",(0,s.jsx)(n.li,{children:"模版类型的配置只能在 Rspack 构建或者使用了 SWC 的 Webpack 构建中使用。"}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["自定义转换后的样式导入路径，输入是引入的成员，例如配置成 ",(0,s.jsx)(n.code,{children:" (member) => `my-lib/${member}` "}),"，会将 ",(0,s.jsx)(n.code,{children:"import { foo } from 'bar'"})," 转换成 ",(0,s.jsx)(n.code,{children:"import foo from 'my-lib/foo'"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["在使用 Rspack 构建时，不能使用函数配置，但可以使用 ",(0,s.jsx)(n.a,{href:"https://handlebarsjs.com/",target:"_blank",rel:"noopener noreferrer",children:"handlebars"})," 模版字符串，对于上面的函数配置，在使用模版字符串时可以用以下模版代替 ",(0,s.jsx)(n.code,{children:"my-lib/{{ member }}"}),"，也可以使用一些内置帮助方法，例如 ",(0,s.jsx)(n.code,{children:"my-lib/{{ kebabCase member }}"})," 来转换成 kebab-case 格式，除了 kebabCase 以外还有 camelCase，snakeCase，upperCase，lowerCase 可以使用。"]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},23830:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return d},toc:function(){return a},default:function(){return t}});var s=r("9880"),c=r("23169"),l=r.ir(r("31345")),i={sidebar_label:"transformImport"},d="source.transformImport",a=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourcetransformimport",children:["source.transformImport",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcetransformimport",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourcetransformimport",target:"_blank",rel:"noopener noreferrer",children:"source.transformImport"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(l.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);