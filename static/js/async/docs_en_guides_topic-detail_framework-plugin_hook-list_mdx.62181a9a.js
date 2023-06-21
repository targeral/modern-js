(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_framework-plugin_hook-list_mdx"],{9947:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var i,t=r("15169"),s=r("43932"),o=r("9880"),l=r("23169");function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",ul:"ul",li:"li",pre:"pre",div:"div"},(0,l.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"hook-list",children:["Hook List",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hook-list",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Modern.js exposes three types of plugins: CLI, Runtime, and Server."}),"\n",(0,o.jsxs)(n.h2,{id:"cli",children:["CLI",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cli",children:"#"})]}),"\n",(0,o.jsxs)(n.h3,{id:"beforeconfig",children:[(0,o.jsx)(n.code,{children:"beforeConfig"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforeconfig",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Functionality: Running tasks before the config process"}),"\n",(0,o.jsx)(n.li,{children:"Execution phase: Before the config process"}),"\n",(0,o.jsx)(n.li,{children:"Hook model: AsyncWorkflow"}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWorkflow<void, void>"})]}),"\n",(0,o.jsx)(n.li,{children:"Example usage:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      beforeConfig: () => {\n        // do something\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"config",children:[(0,o.jsx)(n.code,{children:"config"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Functionality: Collect configuration"}),"\n",(0,o.jsxs)(n.li,{children:["Execution phase: After parsing the configuration in ",(0,o.jsx)(n.code,{children:"modern.config.ts"})]}),"\n",(0,o.jsx)(n.li,{children:"Hook model: ParallelWorkflow"}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"ParallelWorkflow<void, unknown>"})]}),"\n",(0,o.jsx)(n.li,{children:"Example usage:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      config: () => {\n        return {\n          /** some config */\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"The collected configuration information will be collected and processed uniformly."}),"\n",(0,o.jsxs)(n.h3,{id:"validateschema",children:[(0,o.jsx)(n.code,{children:"validateSchema"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#validateschema",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Functionality: Collect the JSON schema used to validate user configurations in various plugins."}),"\n",(0,o.jsxs)(n.li,{children:["Execution phase: After the ",(0,o.jsx)(n.code,{children:"config"})," Hook has run."]}),"\n",(0,o.jsx)(n.li,{children:"Hook model: ParallelWorkflow"}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"ParallelWorkflow<void, unknown>"})]}),"\n",(0,o.jsx)(n.li,{children:"Example usage:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      validateSchema: () => {\n        return {\n          // target is field\n          target: 'foo',\n          schema: {\n            type: 'string',\n          },\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The returned JSON Schema here is used to validate the configuration information in ",(0,o.jsx)(n.code,{children:"modern.config.js"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"For example, the following JSON Schema is returned:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "target": "foo",\n  "schema": {\n    "type": "string"\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can configure it in ",(0,o.jsx)(n.code,{children:"modern.config.ts"})," like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  foo: 'test',\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"If it is another type, validation will fail and an error will be reported. For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  foo: {},\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"then throw error:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'$ modern dev\n  1 | {\n> 2 |   "foo": {},\n    |   ^^^^^  Property foo is not expected to be here\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"prepare",children:[(0,o.jsx)(n.code,{children:"prepare"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prepare",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Functionality: Preparatory process for running the main process."}),"\n",(0,o.jsx)(n.li,{children:"Execution phase: After configuration validation."}),"\n",(0,o.jsx)(n.li,{children:"Hook model: AsyncWorkflow"}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWorkflow<void, void>"})]}),"\n",(0,o.jsx)(n.li,{children:"Example usage:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      prepare: () => {\n        // do something\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"afterprepare",children:[(0,o.jsx)(n.code,{children:"afterPrepare"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterprepare",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"function: Running tasks after the prepare process"}),"\n",(0,o.jsx)(n.li,{children:"Execution Phase: After the prepare process"}),"\n",(0,o.jsx)(n.li,{children:"Hook model: AsyncWorkflow"}),"\n",(0,o.jsxs)(n.li,{children:["type: ",(0,o.jsx)(n.code,{children:"AsyncWorkflow<void, void>"})]}),"\n",(0,o.jsx)(n.li,{children:"Usage:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      afterPrepare: () => {\n        // do something\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"commands",children:[(0,o.jsx)(n.code,{children:"commands"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#commands",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Functionality: Add new commands for the command."}),"\n",(0,o.jsxs)(n.li,{children:["Execution phase: After the ",(0,o.jsx)(n.code,{children:"prepare"})," Hook has run."]}),"\n",(0,o.jsx)(n.li,{children:"Hook model: AsyncWorkflow"}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWorkflow<{ program: Command; }, void>"})]}),"\n",(0,o.jsx)(n.li,{children:"Example usage:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      commands: ({ program }) => {\n        program.command('foo').action(async () => {\n          // do something\n          console.log('foo');\n        });\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Move the plugin to ",(0,o.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import myPlugin from './config/plugin/myPlugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["run ",(0,o.jsx)(n.code,{children:"modern foo"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ modern foo\nfoo\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"beforeexit",children:[(0,o.jsx)(n.code,{children:"beforeExit"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforeexit",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Functionality: Reset some file states before exiting the process."}),"\n",(0,o.jsx)(n.li,{children:"Execution phase: Before the process exits."}),"\n",(0,o.jsx)(n.li,{children:"Hook model: Workflow"}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"Workflow<void, void>"})]}),"\n",(0,o.jsx)(n.li,{children:"Example usage:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      beforeExit: () => {\n        // do something\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive tip",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["Since the callback function when exiting the process in Node.js is synchronous, the type of ",(0,o.jsx)(n.code,{children:"beforeExit"})," Hook is ",(0,o.jsx)(n.code,{children:"Workflow"})," and cannot perform asynchronous operations.\n"]})})]}),"\n",(0,o.jsxs)(n.h3,{id:"beforedev",children:[(0,o.jsx)(n.code,{children:"beforeDev"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforedev",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Functionality: Tasks before running the main dev process."}),"\n",(0,o.jsxs)(n.li,{children:["Execution phase: Before the project starts when the ",(0,o.jsx)(n.code,{children:"dev"})," command is run."]}),"\n",(0,o.jsx)(n.li,{children:"Hook model: AsyncWorkflow"}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWorkflow<void, unknown>"})]}),"\n",(0,o.jsx)(n.li,{children:"Example usage:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      beforeDev: () => {\n        // do something\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"afterdev",children:[(0,o.jsx)(n.code,{children:"afterDev"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterdev",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Function: Tasks to be executed after the main process of ",(0,o.jsx)(n.code,{children:"dev"})," command"]}),"\n",(0,o.jsxs)(n.li,{children:["Execution Stage: It is executed after each compilation is completed when running the ",(0,o.jsx)(n.code,{children:"dev"})," command"]}),"\n",(0,o.jsx)(n.li,{children:"Hook Model: AsyncWorkflow"}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWorkflow<{ isFirstCompile: boolean }, unknown>"})]}),"\n",(0,o.jsx)(n.li,{children:"Usage Example:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      afterDev: () => {\n        // do something\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"afterDev"})," will be executed after each compilation is completed, you can use the ",(0,o.jsx)(n.code,{children:"isFirstCompile"})," param to determine whether it is the first compilation:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      afterDev: ({ isFirstCompile }) => {\n        if (isFirstCompile) {\n          // do something\n        }\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"beforecreatecompiler",children:[(0,o.jsx)(n.code,{children:"beforeCreateCompiler"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforecreatecompiler",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Function: Provides access to the Webpack configuration used to create the Webpack Compiler within middleware functions."}),"\n",(0,o.jsx)(n.li,{children:"Execution Stage: Executed before creating the Webpack Compiler."}),"\n",(0,o.jsx)(n.li,{children:"Hook Model: AsyncWorkflow."}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWorkflow<{ webpackConfigs: Configuration[];}, unknown>"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Usage Example:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      beforeCreateCompiler: ({ webpackConfigs }) => {\n        // do something\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"aftercreatecompiler",children:[(0,o.jsx)(n.code,{children:"afterCreateCompiler"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#aftercreatecompiler",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Function: Provides access to the created Webpack Compiler within middleware functions."}),"\n",(0,o.jsx)(n.li,{children:"Execution Stage: Executed after creating the Webpack Compiler."}),"\n",(0,o.jsx)(n.li,{children:"Hook Model: AsyncWorkflow."}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWorkflow<{ compiler: Compiler | MultiCompiler | undefined; }, unknown>"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Usage Example:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      afterCreateCompiler: ({ compiler }) => {\n        // do something\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"beforeprintinstructions",children:[(0,o.jsx)(n.code,{children:"beforePrintInstructions"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforeprintinstructions",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Function: Provides access to the log information that will be printed within middleware functions and allows modification of the log information."}),"\n",(0,o.jsx)(n.li,{children:"Execution Stage: Executed before printing the log information."}),"\n",(0,o.jsx)(n.li,{children:"Hook Model: AsyncWaterfall."}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWaterfall<{ instructions: string }>"})]}),"\n",(0,o.jsx)(n.li,{children:"Usage Example:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      beforePrintInstructions: ({ instructions }) => {\n        // do something\n        return {\n          instructions: [...instructions, 'some new message'],\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"beforebuild",children:[(0,o.jsx)(n.code,{children:"beforeBuild"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforebuild",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Function: Tasks to be executed before the main process of the ",(0,o.jsx)(n.code,{children:"build"})," command, provides access to the Webpack configuration used for building."]}),"\n",(0,o.jsxs)(n.li,{children:["Execution Stage: Executed before starting the project build when running the ",(0,o.jsx)(n.code,{children:"build"})," command."]}),"\n",(0,o.jsx)(n.li,{children:"Hook Model: AsyncWorkflow."}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWorkflow<{ webpackConfigs: Configuration[]; }>"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Usage Example:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      beforeBuild: () => {\n        // do something\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"afterbuild",children:[(0,o.jsx)(n.code,{children:"afterBuild"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterbuild",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Function: Tasks to be executed after the main process of the ",(0,o.jsx)(n.code,{children:"build"})," command."]}),"\n",(0,o.jsxs)(n.li,{children:["Execution Stage: Executed after the project build is completed when running the ",(0,o.jsx)(n.code,{children:"build"})," command."]}),"\n",(0,o.jsx)(n.li,{children:"Hook Model: AsyncWorkflow."}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWorkflow<void, unknown>"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Usage Example:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      afterBuild: () => {\n        // do something\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"modifyentryimports",children:[(0,o.jsx)(n.code,{children:"modifyEntryImports"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyentryimports",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Function: Used for modifying or adding ",(0,o.jsx)(n.code,{children:"import"})," statements in the generated entry files."]}),"\n",(0,o.jsxs)(n.li,{children:["Execution Stage: Executed before generating the entry files, triggered during the ",(0,o.jsx)(n.a,{href:"#prepare",children:(0,o.jsx)(n.code,{children:"prepare"})})," stage."]}),"\n",(0,o.jsx)(n.li,{children:"Hook Model: AsyncWaterfall."}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWaterfall<{ imports: ImportStatement[]; entrypoint: Entrypoint; }>"})]}),"\n",(0,o.jsx)(n.li,{children:"Usage Example:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      modifyEntryImports({ entrypoint, imports }) {\n        // add `import React from 'React'`\n        imports.push({\n          value: 'react',\n          specifiers: [\n            {\n              imported: 'unmountComponentAtNode',\n            },\n          ],\n        });\n\n        return { entrypoint, imports };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"modifyentryexport",children:[(0,o.jsx)(n.code,{children:"modifyEntryExport"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyentryexport",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Function: used to modify the ",(0,o.jsx)(n.code,{children:"export"})," statement in the generated entry file"]}),"\n",(0,o.jsxs)(n.li,{children:["Execution Stage: Before the entry file is generated, the ",(0,o.jsx)(n.a,{href:"#prepare",children:(0,o.jsx)(n.code,{children:"prepare"})})," phase triggers"]}),"\n",(0,o.jsx)(n.li,{children:"Hook Model: AsyncWaterfall"}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; exportStatement: string; }>"})]}),"\n",(0,o.jsx)(n.li,{children:"Example of use:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      modifyEntryExport({ entrypoint, exportStatement }) {\n        return {\n          entrypoint,\n          exportStatement: [`export const foo = 'test'`, exportStatement].join(\n            '\\n',\n          ),\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"modifyentryruntimeplugins",children:[(0,o.jsx)(n.code,{children:"modifyEntryRuntimePlugins"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyentryruntimeplugins",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Function: Used for adding or modifying ",(0,o.jsx)(n.a,{href:"#Runtime",children:"Runtime plugins"})," in the generated entry files."]}),"\n",(0,o.jsxs)(n.li,{children:["Execution Stage: Executed before generating the entry files, triggered during the ",(0,o.jsx)(n.a,{href:"#prepare",children:(0,o.jsx)(n.code,{children:"prepare"})})," stage."]}),"\n",(0,o.jsx)(n.li,{children:"Hook Model: AsyncWaterfall."}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; plugins: RuntimePlugin[]; }>"})]}),"\n",(0,o.jsx)(n.li,{children:"Usage Example:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      modifyEntryRuntimePlugins({ entrypoint, plugins }) {\n        const name = 'customPlugin';\n        const options = {\n          /** serializable content */\n        };\n\n        return {\n          plugins: [\n            ...plugins,\n            {\n              name,\n              options: JSON.stringify(options),\n            },\n          ],\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"modifyentryrenderfunction",children:[(0,o.jsx)(n.code,{children:"modifyEntryRenderFunction"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyentryrenderfunction",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Function: Used for modifying the ",(0,o.jsx)(n.code,{children:"render"})," function in the generated entry files."]}),"\n",(0,o.jsxs)(n.li,{children:["Execution Stage: Executed before generating the entry files, triggered during the ",(0,o.jsx)(n.a,{href:"#prepare",children:(0,o.jsx)(n.code,{children:"prepare"})})," stage."]}),"\n",(0,o.jsx)(n.li,{children:"Hook Model: AsyncWaterfall."}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; code: string; }>"})]}),"\n",(0,o.jsx)(n.li,{children:"Usage Example:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      modifyEntryRenderFunction({ entrypoint, code }) {\n        const customRender = `/** render function body */`;\n        return {\n          entrypoint,\n          code: customRender,\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"modifyfilesystemroutes",children:[(0,o.jsx)(n.code,{children:"modifyFileSystemRoutes"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyfilesystemroutes",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Function: Used for modifying the content of the generated front-end page routing files, which must be serializable."}),"\n",(0,o.jsxs)(n.li,{children:["Execution Stage: Executed before generating the front-end routing files, triggered during the ",(0,o.jsx)(n.a,{href:"#prepare",children:(0,o.jsx)(n.code,{children:"prepare"})})," stage."]}),"\n",(0,o.jsx)(n.li,{children:"Hook Model: AsyncWaterfall."}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; routes: Route[]; }>"})]}),"\n",(0,o.jsx)(n.li,{children:"Usage Example:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      modifyFileSystemRoutes({ entrypoint, routes }) {\n        return {\n          entrypoint,\n          routes: [\n            ...routes,\n            {\n              path: '/custom_page',\n              component: require.resolve('./Component'),\n              exact: true,\n            },\n          ],\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"This adds a new page route for the front-end."}),"\n",(0,o.jsxs)(n.h3,{id:"modifyserverroutes",children:[(0,o.jsx)(n.code,{children:"modifyServerRoutes"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyserverroutes",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Function: Used for modifying the content of the generated server routes."}),"\n",(0,o.jsxs)(n.li,{children:["Execution Stage: Executed before generating the server routing files, triggered during the ",(0,o.jsx)(n.a,{href:"#prepare",children:(0,o.jsx)(n.code,{children:"prepare"})})," stage."]}),"\n",(0,o.jsx)(n.li,{children:"Hook Model: AsyncWaterfall."}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWaterfall<{ routes: ServerRoute[]; }>"})]}),"\n",(0,o.jsx)(n.li,{children:"Usage Example:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      modifyServerRoutes({ routes }) {\n        return {\n          routes: [\n            ...routes,\n            {\n              urlPath: '/api/foo',\n              isApi: true,\n              entryPath: '',\n              isSPA: false,\n              isSSR: false,\n            },\n          ],\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"modifyasyncentry",children:[(0,o.jsx)(n.code,{children:"modifyAsyncEntry"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyasyncentry",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Function: Used for modifying the asynchronous module that wraps the entry file, see ",(0,o.jsx)(n.a,{href:"/configure/app/source/enable-async-entry",children:"source.enableAsyncEntry"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Execution Stage: Executed before generating the entry files, triggered during the ",(0,o.jsx)(n.a,{href:"#prepare",children:(0,o.jsx)(n.code,{children:"prepare"})})," stage."]}),"\n",(0,o.jsx)(n.li,{children:"Hook Model: AsyncWaterfall."}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; code: string; }>"})]}),"\n",(0,o.jsx)(n.li,{children:"Usage Example:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      modifyAsyncEntry({ entrypoint, code }) {\n        const customCode = `console.log('hello');`;\n        return {\n          entrypoint,\n          code: `${customCode}${code}`,\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"htmlpartials",children:[(0,o.jsx)(n.code,{children:"htmlPartials"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlpartials",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Function: Used for customizing the generated HTML page template."}),"\n",(0,o.jsxs)(n.li,{children:["Execution Stage: Triggered during the ",(0,o.jsx)(n.a,{href:"#prepare",children:(0,o.jsx)(n.code,{children:"prepare"})})," stage."]}),"\n",(0,o.jsx)(n.li,{children:"Hook Model: AsyncWaterfall."}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; partials: HtmlPartials; }>"})]}),"\n",(0,o.jsx)(n.li,{children:"Usage Example:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      async htmlPartials({ entrypoint, partials }) {\n        partials.head.push('<script>console.log(\"test\")</script>');\n        return {\n          entrypoint,\n          partials,\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"This adds a new Script tag to the HTML template."}),"\n","\n",(0,o.jsxs)(n.h2,{id:"runtime",children:["Runtime",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtime",children:"#"})]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive note",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsx)(n.p,{children:"The Runtime plugin is currently not fully opened, and the API is not guaranteed to be stable. Use with caution."})})]}),"\n",(0,o.jsx)(n.p,{children:"The Runtime plugin is mainly used for developers to modify the component that need to be rendered."}),"\n",(0,o.jsxs)(n.h3,{id:"init",children:[(0,o.jsx)(n.code,{children:"init"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#init",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Function: Executes ",(0,o.jsx)(n.code,{children:"App.init"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Execution Stage: Rendering (SSR/CSR)."}),"\n",(0,o.jsx)(n.li,{children:"Hook Model: AsyncPipeline."}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"AsyncPipeline<{ context: RuntimeContext; }, unknown>"})]}),"\n",(0,o.jsx)(n.li,{children:"Usage Example:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import type { Plugin } from '@modern-js/runtime';\n\nexport default (): Plugin => ({\n  setup(api) {\n    return {\n      init({ context }, next) {\n        // do something\n        return next({ context });\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"hoc",children:[(0,o.jsx)(n.code,{children:"hoc"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hoc",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Function: Modifies the components that need to be rendered."}),"\n",(0,o.jsx)(n.li,{children:"Execution Stage: Rendering (SSR/CSR)."}),"\n",(0,o.jsx)(n.li,{children:"Hook Model: Pipeline."}),"\n",(0,o.jsxs)(n.li,{children:["Type: ",(0,o.jsx)(n.code,{children:"Pipeline<{ App: React.ComponentType<any>; }, React.ComponentType<any>>"})]}),"\n",(0,o.jsx)(n.li,{children:"Usage Example:"}),"\n"]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive note",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsx)(n.p,{children:"When using the hoc hook, you need to copy the static properties of the original App component to the new component and pass through the props."})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { createContext } from 'react';\nimport type { Plugin } from '@modern-js/runtime';\nimport hoistNonReactStatics from 'hoist-non-react-statics';\n\nexport default (): Plugin => ({\n  setup(api) {\n    const FooContext = createContext('');\n    return {\n      hoc({ App }, next) {\n        const AppWrapper = (props: any) => {\n          return (\n            <FooContext.Provider store={'test'}>\n              <App {...props} />\n            </FooContext.Provider>\n          );\n        };\n        return next({\n          App: hoistNonReactStatics(AppWrapper, App),\n        });\n      },\n    };\n  },\n});\n"})}),"\n"]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern-js/modern-js/packages/document/main-doc/docs/en/guides/topic-detail/framework-plugin/hook-list.mdx"]={toc:[{text:"CLI",id:"cli",depth:2},{text:"beforeConfig",id:"beforeconfig",depth:3},{text:"config",id:"config",depth:3},{text:"validateSchema",id:"validateschema",depth:3},{text:"prepare",id:"prepare",depth:3},{text:"afterPrepare",id:"afterprepare",depth:3},{text:"commands",id:"commands",depth:3},{text:"beforeExit",id:"beforeexit",depth:3},{text:"beforeDev",id:"beforedev",depth:3},{text:"afterDev",id:"afterdev",depth:3},{text:"beforeCreateCompiler",id:"beforecreatecompiler",depth:3},{text:"afterCreateCompiler",id:"aftercreatecompiler",depth:3},{text:"beforePrintInstructions",id:"beforeprintinstructions",depth:3},{text:"beforeBuild",id:"beforebuild",depth:3},{text:"afterBuild",id:"afterbuild",depth:3},{text:"modifyEntryImports",id:"modifyentryimports",depth:3},{text:"modifyEntryExport",id:"modifyentryexport",depth:3},{text:"modifyEntryRuntimePlugins",id:"modifyentryruntimeplugins",depth:3},{text:"modifyEntryRenderFunction",id:"modifyentryrenderfunction",depth:3},{text:"modifyFileSystemRoutes",id:"modifyfilesystemroutes",depth:3},{text:"modifyServerRoutes",id:"modifyserverroutes",depth:3},{text:"modifyAsyncEntry",id:"modifyasyncentry",depth:3},{text:"htmlPartials",id:"htmlpartials",depth:3},{text:"Runtime",id:"runtime",depth:2},{text:"init",id:"init",depth:3},{text:"hoc",id:"hoc",depth:3}],title:"Hook List",frontmatter:{title:"Hook List",sidebar_position:8}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,s._(t._({},e),{children:(0,o.jsx)(d,t._({},e))})):d(e)}}}]);