(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_dev-server_mdx"],{39724:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var r=s("12151"),d=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",h4:"h4",div:"div",button:"button",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The config of DevServer can be modified through ",(0,r.jsx)(n.code,{children:"tools.devServer"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"options",children:["Options",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#options",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"after",children:["after",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#after",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Array"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Provides the ability to execute custom middleware after all other middleware internally within the server."}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      after: [\n        async (req, res, next) => {\n          console.log('after dev middleware');\n          next();\n        },\n      ],\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"webpack-dev-server"})," uses Express as the server-side framework. Modern.js does not use any framework, and the ",(0,r.jsx)(n.code,{children:"req"})," and ",(0,r.jsx)(n.code,{children:"res"})," in the above middleware are all native Node objects. Therefore, the Express middleware used in ",(0,r.jsx)(n.code,{children:"webpack-dev-server"})," may not be directly usable in Modern.js."]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to migrate the Express middleware used in ",(0,r.jsx)(n.code,{children:"webpack-dev-server"}),", you can use the following method to pass the Express app as middleware:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"import expressMiddleware from 'my-express-middleware';\nimport express from 'express';\n\n// init Express app\nconst app = express();\napp.use(expressMiddleware);\n\nexport default {\n  tools: {\n    devServer: {\n      after: [app],\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"before",children:["before",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#before",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Array"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Provides the ability to execute custom middleware prior to all other middleware internally within the server."}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      before: [\n        async (req, res, next) => {\n          console.log('before dev middleware');\n          next();\n        },\n      ],\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"client",children:["client",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#client",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"{\n    /** Specify a protocol to use */\n    protocol?: string;\n    /** The path which the middleware is serving the event stream on */\n    path?: string;\n    /** Specify a port number to listen for requests on */\n    port?: string;\n    /** Specify a host to use */\n    host?: string;\n}\n"})})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n    path: '/webpack-hmr',\n    port: '8080',\n    host: networkAddress || 'localhost',\n}\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"The config of hmr client."}),"\n",(0,r.jsxs)(n.h4,{id:"devmiddleware",children:["devMiddleware",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devmiddleware",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  writeToDisk: boolean | ((filename: string) => boolean);\n}\n"})})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  writeToDisk: (file: string) => !file.includes('.hot-update.'),\n}\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["The config of devMiddleware. Current options is the subset of ",(0,r.jsx)(n.a,{href:"https://github.com/webpack/webpack-dev-middleware",target:"_blank",rel:"noopener noreferrer",children:"webpack-dev-middleware"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"headers",children:["headers",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#headers",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Record<string, string>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Adds headers to all responses."}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      headers: {\n        'X-Custom-Foo': 'bar',\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"historyapifallback",children:["historyApiFallback",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#historyapifallback",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean | ConnectHistoryApiFallbackOptions"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The index.html page will likely have to be served in place of any 404 responses. Enable ",(0,r.jsx)(n.code,{children:"devServer.historyApiFallback"})," by setting it to ",(0,r.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      historyApiFallback: true,\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["For more options and information, see the ",(0,r.jsx)(n.a,{href:"https://github.com/bripkens/connect-history-api-fallback",target:"_blank",rel:"noopener noreferrer",children:"connect-history-api-fallback"})," documentation."]}),"\n",(0,r.jsxs)(n.h4,{id:"hot",children:["hot",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hot",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Enable ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/concepts/hot-module-replacement/",target:"_blank",rel:"noopener noreferrer",children:"Hot Module Replacement"})," feature."]}),"\n",(0,r.jsxs)(n.h4,{id:"https",children:["https",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#https",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean | { key: string; cert: string }"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["By default, DevServer will be served over HTTP. It can optionally be served over HTTPS by setting ",(0,r.jsx)(n.code,{children:"devServer.https"})," to ",(0,r.jsx)(n.code,{children:"true"}),", and will disable the HTTP server."]}),"\n",(0,r.jsx)(n.p,{children:"You can also manually pass in the certificate and corresponding private key required by the HTTPS server:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    devServer: {\n      https: {\n        key: fs.readFileSync('certificates/private.pem'),\n        cert: fs.readFileSync('certificates/public.pem'),\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"livereload",children:["liveReload",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#livereload",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["By default, the DevServer will reload/refresh the page when file changes are detected (",(0,r.jsx)(n.code,{children:"devServer.hot"})," option must be disabled in order for liveReload to take effect). Disable ",(0,r.jsx)(n.code,{children:"devServer.liveReload"})," by setting it to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"setupmiddlewares",children:["setupMiddlewares",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setupmiddlewares",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"Array<\n  (\n    middlewares: {\n      unshift: (...handlers: RequestHandler[]) => void;\n      push: (...handlers: RequestHandler[]) => void;\n    },\n    server: {\n      sockWrite: (\n        type: string,\n        data?: string | boolean | Record<string, any>,\n      ) => void;\n    },\n  ) => void\n>;\n"})})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Provides the ability to execute a custom function and apply custom middlewares."}),"\n",(0,r.jsxs)(n.p,{children:["The order among several different types of middleware is: ",(0,r.jsx)(n.code,{children:"devServer.before"})," => ",(0,r.jsx)(n.code,{children:"unshift"})," => internal middlewares => ",(0,r.jsx)(n.code,{children:"push"})," => ",(0,r.jsx)(n.code,{children:"devServer.after"}),"."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      setupMiddlewares: [\n        (middlewares, server) => {\n          middlewares.unshift((req, res, next) => {\n            next();\n          });\n\n          middlewares.push((req, res, next) => {\n            next();\n          });\n        },\n      ],\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"It is possible to use some server api to meet special scenario requirements:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'sockWrite. Allow send some message to hmr client, and then the hmr client will take different actions depending on the message type. If you send a "content changed" message, the page will reload.'}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      setupMiddlewares: [\n        (middlewares, server) => {\n          // add custom watch & trigger page reload when change\n          watcher.on('change', changed => {\n            server.sockWrite('content-changed');\n          });\n        },\n      ],\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"proxy",children:["proxy",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#proxy",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Record<string, string> | Record<string, ProxyDetail>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Proxying some URLs."}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      proxy: {\n        '/api': 'http://localhost:3000',\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["A request to /api/users will now proxy the request to ",(0,r.jsx)(n.a,{href:"http://localhost:3000/api/users",target:"_blank",rel:"noopener noreferrer",children:"http://localhost:3000/api/users"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"If you don't want /api to be passed along, we need to rewrite the path:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      proxy: {\n        '/api': {\n          target: 'http://localhost:3000',\n          pathRewrite: { '^/api': '' },\n        },\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["The DevServer Proxy makes use of the ",(0,r.jsx)(n.a,{href:"https://github.com/chimurai/http-proxy-middleware/tree/2.x",target:"_blank",rel:"noopener noreferrer",children:"http-proxy-middleware"})," package. Check out its documentation for more advanced usages."]}),"\n",(0,r.jsx)(n.p,{children:"The full type definition of DevServer Proxy is:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { Options as HttpProxyOptions } from 'http-proxy-middleware';\n\ntype ProxyDetail = HttpProxyOptions & {\n  bypass?: (\n    req: IncomingMessage,\n    res: ServerResponse,\n    proxyOptions: ProxyOptions,\n  ) => string | undefined | null | false;\n  context?: string | string[];\n};\n\ntype ProxyOptions =\n  | Record<string, string>\n  | Record<string, ProxyDetail>\n  | ProxyDetail[]\n  | ProxyDetail;\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"In addition to the http-proxy-middleware option, we also support the bypass and context configuration:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["bypass: bypass the proxy based on the return value of a function.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Return ",(0,r.jsx)(n.code,{children:"null"})," or ",(0,r.jsx)(n.code,{children:"undefined"})," to continue processing the request with proxy."]}),"\n",(0,r.jsxs)(n.li,{children:["Return ",(0,r.jsx)(n.code,{children:"false"})," to produce a 404 error for the request."]}),"\n",(0,r.jsx)(n.li,{children:"Return a path to serve from, instead of continuing to proxy the request."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"context: If you want to proxy multiple, specific paths to the same target, you can use an array of one or more objects with a context property."}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"// custom bypass\nexport default {\n  tools: {\n    devServer: {\n      proxy: {\n        '/api': {\n          target: 'http://localhost:3000',\n          bypass: function (req, res, proxyOptions) {\n            if (req.headers.accept.indexOf('html') !== -1) {\n              console.log('Skipping proxy for browser request.');\n              return '/index.html';\n            }\n          },\n        },\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"// proxy multiple\nexport default {\n  tools: {\n    devServer: {\n      proxy: [\n        {\n          context: ['/auth', '/api'],\n          target: 'http://localhost:3000',\n        },\n      ],\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"watch",children:["watch",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#watch",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Whether to watch files change in directories such as ",(0,r.jsx)(n.code,{children:"mock/"}),", ",(0,r.jsx)(n.code,{children:"server/"}),", ",(0,r.jsx)(n.code,{children:"api/"}),"."]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},18542:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return c},default:function(){return t}});var r=s("12151"),d=s("23169"),l=s.ir(s("39724")),a={sidebar_label:"devServer"},i="tools.devServer",c=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div"},(0,d.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"tools.devserver",children:["tools.devServer",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tools.devserver",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolsdevserver",target:"_blank",rel:"noopener noreferrer",children:"tools.devServer"}),".\n"]})]}),"\n","\n",(0,r.jsx)(l.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);