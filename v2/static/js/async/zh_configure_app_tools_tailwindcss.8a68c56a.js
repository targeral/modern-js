"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[6656],{

/***/ 13303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "frontmatter": () => (/* binding */ frontmatter),
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "toc": () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97458);
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = {
  "title": "tools.tailwindcss",
  "sidebar_label": "tailwindcss"
};
const toc = [];
const title = `tailwindcss`;
const content = "\"---\\ntitle: tools.tailwindcss\\n\\nsidebar_label: tailwindcss\\n---\\n# tailwindcss\\n\\n- 类型： `Object | Function`\\n- 默认值：见下方配置详情。\\n\\n<details>\\n  <summary>TailwindCSS 配置详情</summary>\\n\\n```js\\nconst tailwind = {\\n  content: [\\n    './config/html/**/*.html',\\n    './config/html/**/*.ejs',\\n    './config/html/**/*.hbs',\\n    './src/**/*.js',\\n    './src/**/*.jsx',\\n    './src/**/*.ts',\\n    './src/**/*.tsx',\\n    './storybook/**/*',\\n  ],\\n  theme: source.designSystem, // 使用source.designSystem配置作为Tailwind CSS Theme配置\\n};\\n```\\n\\n:::tip 提示\\n更多关于：<a href=\\\"https://tailwindcss.com/docs/configuration\\\" target=\\\"_blank\\\">TailwindCSS 配置</a>。\\n\\n:::\\n\\n</details>\\n\\n对应 [TailwindCSS](https://tailwindcss.com/docs/configuration) 的配置，值为 `Object` 类型时，与默认配置通过 `Object.assign` 合并。\\n\\n值为 `Function` 类型时，函数返回的对象与默认配置通过 `Object.assign` 合并。\\n\\n不允许出现 `theme` 属性，否则会构建失败。 Modern.js 使用 [`source.designSystem`](/configure/app/source/design-system) 作为 `Tailwind CSS Theme` 配置。\\n\\n其他的使用方式和 Tailwind CSS 一致: [快速传送门](https://tailwindcss.com/docs/configuration)。\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    ul: "ul",
    li: "li",
    code: "code",
    div: "div",
    button: "button",
    pre: "pre",
    span: "span",
    p: "p"
  }, props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h1, {
      id: "tailwindcss",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#tailwindcss",
        children: "#"
      }), "tailwindcss"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["类型： ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Object | Function"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "默认值：见下方配置详情。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("summary", {
        children: "TailwindCSS 配置详情"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
        className: "language-js",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
          className: ""
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
          className: "modern-code-content",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.button, {
            className: "copy"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            className: "shiki",
            style: {
              backgroundColor: "#2e3440ff"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                className: "line",
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#81A1C1"
                  },
                  children: "const"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: " "
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9"
                  },
                  children: "tailwind"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: " "
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#81A1C1"
                  },
                  children: "="
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: " "
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "{"
                })]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                className: "line",
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: "  "
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#88C0D0"
                  },
                  children: "content"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: ":"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: " ["
                })]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                className: "line",
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: "    "
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "'"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#A3BE8C"
                  },
                  children: "./config/html/**/*.html"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "'"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: ","
                })]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                className: "line",
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: "    "
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "'"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#A3BE8C"
                  },
                  children: "./config/html/**/*.ejs"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "'"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: ","
                })]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                className: "line",
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: "    "
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "'"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#A3BE8C"
                  },
                  children: "./config/html/**/*.hbs"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "'"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: ","
                })]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                className: "line",
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: "    "
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "'"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#A3BE8C"
                  },
                  children: "./src/**/*.js"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "'"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: ","
                })]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                className: "line",
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: "    "
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "'"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#A3BE8C"
                  },
                  children: "./src/**/*.jsx"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "'"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: ","
                })]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                className: "line",
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: "    "
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "'"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#A3BE8C"
                  },
                  children: "./src/**/*.ts"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "'"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: ","
                })]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                className: "line",
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: "    "
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "'"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#A3BE8C"
                  },
                  children: "./src/**/*.tsx"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "'"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: ","
                })]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                className: "line",
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: "    "
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "'"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#A3BE8C"
                  },
                  children: "./storybook/**/*"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "'"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: ","
                })]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                className: "line",
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: "  ]"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: ","
                })]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                className: "line",
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: "  "
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#88C0D0"
                  },
                  children: "theme"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: ":"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: " "
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9"
                  },
                  children: "source"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "."
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9"
                  },
                  children: "designSystem"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: ","
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: " "
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#616E88"
                  },
                  children: "// 使用source.designSystem配置作为Tailwind CSS Theme配置"
                })]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                className: "line",
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#ECEFF4"
                  },
                  children: "}"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                  style: {
                    color: "#81A1C1"
                  },
                  children: ";"
                })]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                className: "line"
              })]
            })
          })]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [":::tip 提示\n更多关于：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          href: "https://tailwindcss.com/docs/configuration",
          target: "_blank",
          children: "TailwindCSS 配置"
        }), "。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: ":::"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["对应 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://tailwindcss.com/docs/configuration",
        target: "_blank",
        rel: "nofollow",
        children: "TailwindCSS"
      }), " 的配置，值为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Object"
      }), " 类型时，与默认配置通过 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Object.assign"
      }), " 合并。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["值为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Function"
      }), " 类型时，函数返回的对象与默认配置通过 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Object.assign"
      }), " 合并。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["不允许出现 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "theme"
      }), " 属性，否则会构建失败。 Modern.js 使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/v2/configure/app/source/design-system.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "source.designSystem"
        })
      }), " 作为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Tailwind CSS Theme"
      }), " 配置。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["其他的使用方式和 Tailwind CSS 一致: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://tailwindcss.com/docs/configuration",
        target: "_blank",
        rel: "nofollow",
        children: "快速传送门"
      }), "。"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ })

}]);