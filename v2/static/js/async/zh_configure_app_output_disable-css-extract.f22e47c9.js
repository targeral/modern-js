"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[14253],{

/***/ 83952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ disable_css_extract_content),
  "default": () => (/* binding */ disable_css_extract),
  "frontmatter": () => (/* binding */ disable_css_extract_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ disable_css_extract_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/builder/builder-doc/docs/zh/config/output/disableCssExtract.md
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = [{
  "id": "示例",
  "text": "示例",
  "depth": 3
}];
const content = "\"- Type: `boolean`\\n- Default: `false`\\n\\n是否禁用 CSS 提取逻辑，并将 CSS 文件内联到 JS 文件中。\\n\\n默认情况下，Builder 会把 CSS 提取为独立的 `.css` 文件，并输出到构建产物目录。设置该选项为 `true` 后，CSS 文件会被内联到 JS 文件中，并在运行时通过 `<style>` 标签插入到页面上。\\n\\n### 示例\\n\\n```ts\\nexport default {\\n  output: {\\n    disableCssExtract: true,\\n  },\\n};\\n```\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    ul: "ul",
    li: "li",
    code: "code",
    p: "p",
    h3: "h3",
    a: "a",
    div: "div",
    button: "button",
    pre: "pre",
    span: "span"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Type: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Default: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "是否禁用 CSS 提取逻辑，并将 CSS 文件内联到 JS 文件中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["默认情况下，Builder 会把 CSS 提取为独立的 ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".css"
      }), " 文件，并输出到构建产物目录。设置该选项为 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), " 后，CSS 文件会被内联到 JS 文件中，并在运行时通过 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<style>"
      }), " 标签插入到页面上。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "示例",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#示例",
        children: "#"
      }), "示例"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-ts",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: ""
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "#2e3440ff"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#81A1C1"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#81A1C1"
                },
                children: "default"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: "{"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9"
                },
                children: "output"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: "{"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: "    "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9"
                },
                children: "disableCssExtract"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#81A1C1"
                },
                children: "true"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: "},"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: "}"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#81A1C1"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const disableCssExtract = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/configure/app/output/disable-css-extract.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const disable_css_extract_frontmatter = {
  "title": "output.disableCssExtract",
  "sidebar_label": "disableCssExtract"
};

const disable_css_extract_toc = [];
const title = `disableCssExtract`;
const disable_css_extract_content = "\"---\\ntitle: output.disableCssExtract\\nsidebar_label: disableCssExtract\\n---\\n# disableCssExtract\\n\\n:::info BUILDER\\n该配置为 Modern.js Builder 配置，详细信息可参考 [output.disableCssExtract](https://modernjs.dev/builder/api/config-output.html#output-disablecssextract)。\\n:::\\n\\nimport Main from '@modern-js/builder-doc/docs/zh/config/output/disableCssExtract.md'\\n\\n<Main />\\n\"";
function disable_css_extract_createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    p: "p"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h1, {
      id: "disablecssextract",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#disablecssextract",
        children: "#"
      }), "disableCssExtract"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "BUILDER"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\n该配置为 Modern.js Builder 配置，详细信息可参考 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://modernjs.dev/builder/api/config-output.html#output-disablecssextract-2",
            target: "_blank",
            rel: "nofollow",
            children: "output.disableCssExtract"
          }), "。"]
        })
      })]
    }), "\n", "\n", (0,jsx_runtime.jsx)(disableCssExtract, {})]
  });
}
function disable_css_extract_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(disable_css_extract_createMdxContent, props)
  })) : disable_css_extract_createMdxContent(props);
}
/* harmony default export */ const disable_css_extract = (disable_css_extract_MDXContent);


/***/ })

}]);