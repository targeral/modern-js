(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_usage_mdx"],{39428:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var o in n)Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}(n,{frontmatter:function(){return s},title:function(){return r},toc:function(){return d},default:function(){return t}});var i=o("9880"),c=o("23169"),s={sidebar_position:0},r="Configuring Modern.js",d=[{text:"Configure in the configuration file",depth:2,id:"configure-in-the-configuration-file"},{text:"modern.config.ts (recommended)",depth:3,id:"modernconfigts-(recommended)"},{text:"modern.config.js",depth:3,id:"modernconfigjs"},{text:"Export Configuration Function",depth:3,id:"export-configuration-function"},{text:"Export Async Function",depth:3,id:"export-async-function"},{text:"Specify the Configuration File",depth:3,id:"specify-the-configuration-file"},{text:"Configure in package.json (not recommended)",depth:2,id:"configure-in-packagejson-(not-recommended)"},{text:"Note",depth:3,id:"note"},{text:"Debug configuration locally",depth:2,id:"debug-configuration-locally"},{text:"Example",depth:3,id:"example"},{text:"Note",depth:3,id:"note-1"},{text:"Merge Multiple Configurations",depth:2,id:"merge-multiple-configurations"},{text:"Example",depth:3,id:"example-1"},{text:"Configuration Type",depth:2,id:"configuration-type"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",code:"code",div:"div",h2:"h2",h3:"h3",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"configuring-modernjs",children:["Configuring Modern.js",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuring-modernjs",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"There are two configurations in the Modern.js, a compile configuration and a server runtime configuration."}),"\n",(0,i.jsx)(n.p,{children:"The compile configuration can be configured in two places:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"modern.config.(ts|js|mjs)"})," file in the root path"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"package.json"})," file"]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsx)(n.p,{children:"Configurations in both package.json and modern.config.ts file are not supported for the same configuration. Configuration in modern.config.ts is recommended."})})]}),"\n",(0,i.jsxs)(n.p,{children:["Server runtime configuration can be configured in the ",(0,i.jsx)(n.code,{children:"modern.server-runtime.config.(ts|js|mjs)"})," file in the root path."]}),"\n",(0,i.jsxs)(n.h2,{id:"configure-in-the-configuration-file",children:["Configure in the configuration file",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configure-in-the-configuration-file",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js configuration files are defined in the root path of the project, and supports ",(0,i.jsx)(n.code,{children:".ts"}),", ",(0,i.jsx)(n.code,{children:".js"})," and ",(0,i.jsx)(n.code,{children:".mjs"})," formats:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"modern.config.ts"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"modern.config.js"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"modern.config.mjs"})}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"modernconfigts-(recommended)",children:["modern.config.ts (recommended)",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernconfigts-(recommended)",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["We recommend using configuration files in ",(0,i.jsx)(n.code,{children:".ts"})," format, which provides friendly TypeScript type hints to help you avoid configuration errors."]}),"\n",(0,i.jsxs)(n.p,{children:["Import the ",(0,i.jsx)(n.code,{children:"defineConfig"})," tool function from ",(0,i.jsx)(n.code,{children:"@modern-js/app-tools"}),", which will help you with configuration type derivation and type completion:"]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n});\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["When using Rspack as the bundler, due to some differences in configuration types between webpack and Rspack, you need to specify ",(0,i.jsx)(n.code,{children:"<'rspack'>"})," generic type for ",(0,i.jsx)(n.code,{children:"defineConfig"}),":"]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-diff",meta:"title=modern.config.ts",children:"- export default defineConfig({\n+ export default defineConfig<'rspack'>({\n   //...\n});\n"})})})]}),"\n",(0,i.jsxs)(n.h3,{id:"modernconfigjs",children:["modern.config.js",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernconfigjs",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"If you are developing a non-TypeScript project, you can use the configuration file in .js format:"}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.js"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="modern.config.js"',children:"export default {\n  source: {\n    alias: opts => {\n      opts['@common'] = './src/common';\n    },\n  },\n};\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["You can also dynamically set it with ",(0,i.jsx)(n.code,{children:"process.env.NODE _ENV"}),":"]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.js"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="modern.config.js"',children:"export default {\n  server: {\n    ssr: process.env.NODE_ENV === 'development',\n  },\n};\n"})})})]}),"\n",(0,i.jsxs)(n.h3,{id:"export-configuration-function",children:["Export Configuration Function",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#export-configuration-function",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Modern.js supports exporting a function in the configuration file, and you can dynamically compute the configuration in the function and return it to Modern.js."}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.js"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="modern.config.js"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig(({ env, command }) => ({\n  source: {\n    alias: {\n      '@foo': env === 'development' ? './src/foo.dev.ts' : './src/foo.prod.ts',\n    },\n  },\n}));\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"This function takes the following parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"env"}),": same as the value of ",(0,i.jsx)(n.code,{children:"process.env.NODE_ENV"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When running ",(0,i.jsx)(n.code,{children:"modern dev"})," or ",(0,i.jsx)(n.code,{children:"modern start"}),", the value of ",(0,i.jsx)(n.code,{children:"env"})," is ",(0,i.jsx)(n.code,{children:"development"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["When running ",(0,i.jsx)(n.code,{children:"modern build"})," or ",(0,i.jsx)(n.code,{children:"modern serve"}),", the value of ",(0,i.jsx)(n.code,{children:"env"})," is ",(0,i.jsx)(n.code,{children:"production"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["When running ",(0,i.jsx)(n.code,{children:"modern test"}),", the value of ",(0,i.jsx)(n.code,{children:"env"})," is ",(0,i.jsx)(n.code,{children:"test"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"command"}),": corresponds to the currently running command, such as ",(0,i.jsx)(n.code,{children:"dev"}),", ",(0,i.jsx)(n.code,{children:"start"}),", ",(0,i.jsx)(n.code,{children:"build"}),", ",(0,i.jsx)(n.code,{children:"serve"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"export-async-function",children:["Export Async Function",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#export-async-function",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Modern.js also supports exporting an asynchronous function in the configuration file, you can perform some asynchronous operations in the function:"}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.js"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="modern.config.js"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig(async ({ env, command }) => {\n  const result = await someAsyncFunction();\n\n  return {\n    html: {\n      title: result,\n    },\n  };\n});\n"})})})]}),"\n",(0,i.jsxs)(n.h3,{id:"specify-the-configuration-file",children:["Specify the Configuration File",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#specify-the-configuration-file",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can specify the name of the configuration file using the ",(0,i.jsx)(n.code,{children:"--config"})," option."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you need to use the ",(0,i.jsx)(n.code,{children:"modern.prod.config.js"})," file when running build, you can add the following scripts to ",(0,i.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"package.json"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "scripts": {\n    "dev": "modern dev",\n    "build": "modern build --config modern.prod.config.js"\n  }\n}\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["You can also abbreviate the ",(0,i.jsx)(n.code,{children:"--config"})," option to ",(0,i.jsx)(n.code,{children:"-c"}),":"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ modern build -c modern.prod.config.js\n"})})})}),"\n",(0,i.jsxs)(n.h2,{id:"configure-in-packagejson-(not-recommended)",children:["Configure in package.json (not recommended)",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configure-in-packagejson-(not-recommended)",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["In addition to configuration files, configuration options can also be set the ",(0,i.jsx)(n.code,{children:"modernConfig"})," field in the ",(0,i.jsx)(n.code,{children:"package.json"}),", such as:"]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"package.json"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "modernConfig": {\n    "source": {\n      "alias": {\n        "@common": "./src/common"\n      }\n    }\n  }\n}\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Due to the limitation of the JSON file format, only simple types such as numbers, strings, boolean values, arrays, etc. can be defined in ",(0,i.jsx)(n.code,{children:"package.json"}),". When we need to set the value of the function type, it is recommended to set it in the Modern.js configuration file."]}),"\n",(0,i.jsxs)(n.h3,{id:"note",children:["Note",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#note",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["It is not recommended to use both ",(0,i.jsx)(n.code,{children:"package.json"})," and ",(0,i.jsx)(n.code,{children:"modern.config.t[j]s"})," for configuration. If both are used and a configuration conflict occurs, Modern.js will prompt error on the command line."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@modern-js/runtime"})," exports the ",(0,i.jsx)(n.a,{href:"/apis/app/runtime/app/define-config",children:"defineConfig"})," API of the same name, please pay attention to the distinction."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"debug-configuration-locally",children:["Debug configuration locally",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#debug-configuration-locally",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["To facilitate local debugging configuration locally, Modern.js supports creating ",(0,i.jsx)(n.code,{children:"modern.config.local.(ts|js|mjs)"})," files in the root directory of the project to override ",(0,i.jsx)(n.code,{children:"modern.config.(ts|js|mjs)"})," configurations."]}),"\n",(0,i.jsxs)(n.h3,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["For example, the port number is configured as ",(0,i.jsx)(n.code,{children:"3000"})," in ",(0,i.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  server: {\n    port: 3000,\n  },\n});\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["If you need to change the port number to ",(0,i.jsx)(n.code,{children:"3001"})," to debugging locally, but you don't want to change the ",(0,i.jsx)(n.code,{children:"modern.config.ts"})," file of the current project, you can create a ",(0,i.jsx)(n.code,{children:"modern.config.local.ts"})," file and add the following configuration:"]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.local.ts"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.local.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  server: {\n    port: 3001,\n  },\n});\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["The configuration in the ",(0,i.jsx)(n.code,{children:"modern.config.local.ts"})," file will be deep merged with the configuration in ",(0,i.jsx)(n.code,{children:"modern.config.ts"})," and override the configurations in ",(0,i.jsx)(n.code,{children:"modern.config.ts"}),", so ",(0,i.jsx)(n.code,{children:"server.port"})," will be is overridden by ",(0,i.jsx)(n.code,{children:"3001"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"note-1",children:["Note",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#note-1",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When using ",(0,i.jsx)(n.code,{children:"modern.config.local.ts"}),", please note the following:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"modern.config.local.ts"})," file is only loaded when running ",(0,i.jsx)(n.code,{children:"modern dev"})," or ",(0,i.jsx)(n.code,{children:"modern start"})," commands, and will not be loaded when running ",(0,i.jsx)(n.code,{children:"modern build"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"modern.config.local.ts"})," file overrides not only over ",(0,i.jsx)(n.code,{children:"modern.config.ts"}),", but also the ",(0,i.jsx)(n.code,{children:"modernConfig"})," field in ",(0,i.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["As ",(0,i.jsx)(n.code,{children:"modern.config.local.ts"})," is only used for local debugging, it is not recommended to commit it to the repository, please ensure that the project's ",(0,i.jsx)(n.code,{children:".gitignore"})," file contains ",(0,i.jsx)(n.code,{children:"modern.config.local.ts"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:".gitingore"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-bash",meta:'title=".gitingore"',children:"modern.config.local.ts\nmodern.config.local.js\nmodern.config.local.mjs\n"})})})]}),"\n",(0,i.jsxs)(n.h2,{id:"merge-multiple-configurations",children:["Merge Multiple Configurations",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#merge-multiple-configurations",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["In some cases, you may need to merge multiple configurations into one configuration. You can use the ",(0,i.jsx)(n.code,{children:"mergeConfig"})," util to merge multiple configurations."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"mergeConfig"})," function accepts an array as a parameter, and each item in the array is a configuration object. ",(0,i.jsx)(n.code,{children:"mergeConfig"})," will deeply merge each configuration object in the array, automatically merge multiple functions into an array, and returns a merged configuration object."]}),"\n",(0,i.jsxs)(n.h3,{id:"example-1",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example-1",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { mergeConfig } from '@modern-js/app-tools';\n\nconst config1 = {\n   dev: {\n     port: 3000,\n   },\n   tools: {\n     postcss: () => console. log('config1');\n   },\n};\nconst config2 = {\n   dev: {\n     port: 3001,\n   },\n   tools: {\n     postcss: () => console. log('config2');\n   },\n};\n\nconst mergedConfig = mergeConfig([config1, config2]);\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"In the above example, the merged configuration object is:"}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"const mergedConfig = {\n  dev: {\n    port: 3001,\n  },\n  tools: {\n    postcss: [() => console.log('config1'), () => console.log('config2')],\n  },\n};\n"})})})}),"\n",(0,i.jsxs)(n.h2,{id:"configuration-type",children:["Configuration Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js exports ",(0,i.jsx)(n.code,{children:"AppUserConfig"})," type, which corresponds to the type of Modern.js configuration object:"]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import type { AppUserConfig } from '@modern-js/app-tools';\n\nconst config: AppUserConfig = {\n  tools: {\n    webpack: {},\n  },\n};\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["When using Rspack as the bundler, due to some differences in configuration types between webpack and Rspack, you need to specify ",(0,i.jsx)(n.code,{children:"<'rspack'>"})," generic type for ",(0,i.jsx)(n.code,{children:"defineConfig"}),":"]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import type { AppUserConfig } from '@modern-js/app-tools';\n\nconst config: AppUserConfig<'rspack'> = {\n  tools: {\n    rspack: {},\n  },\n};\n"})})})]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);