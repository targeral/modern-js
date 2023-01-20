"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[63582],{

/***/ 31939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ disable_html_folder_content),
  "default": () => (/* binding */ disable_html_folder),
  "frontmatter": () => (/* binding */ disable_html_folder_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ disable_html_folder_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/builder/builder-doc/docs/en/config/html/disableHtmlFolder.md
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = [{
  "id": "example",
  "text": "Example",
  "depth": 4
}];
const content = "\"- Type: `boolean`\\n- Default: `false`\\n\\nRemove the folder of the HTML files. When this option is enabled, the generated HTML file path will change from `[name]/index.html` to `[name].html`.\\n\\n#### Example\\n\\nBy default, the structure of HTML files in the `dist` directory is:\\n\\n```bash\\n/dist\\n└── html\\n    └── main\\n        └── index.html\\n```\\n\\nEnable the `html.disableHtmlFolder` config:\\n\\n```js\\nexport default {\\n  html: {\\n    disableHtmlFolder: true,\\n  },\\n};\\n```\\n\\nAfter recompiling, the directory structure of the HTML files in dist is:\\n\\n```bash\\n/dist\\n└── html\\n    └── main.html\\n```\\n\\n> If you want to set the path of the HTML files, use the `output.distPath.html` config.\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    ul: "ul",
    li: "li",
    code: "code",
    p: "p",
    h4: "h4",
    a: "a",
    div: "div",
    button: "button",
    pre: "pre",
    span: "span",
    blockquote: "blockquote"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Remove the folder of the HTML files. When this option is enabled, the generated HTML file path will change from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[name]/index.html"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[name].html"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "example",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#example",
        children: "#"
      }), "Example"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, the structure of HTML files in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dist"
      }), " directory is:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-bash",
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
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: "/dist"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: "└── html"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: "    └── main"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: "        └── index.html"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enable the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "html.disableHtmlFolder"
      }), " config:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-js",
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
                  color: "#88C0D0"
                },
                children: "html"
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
                  color: "#88C0D0"
                },
                children: "disableHtmlFolder"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After recompiling, the directory structure of the HTML files in dist is:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-bash",
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
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: "/dist"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: "└── html"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: "    └── main.html"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you want to set the path of the HTML files, use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "output.distPath.html"
        }), " config."]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const disableHtmlFolder = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/en/configure/app/html/disable-html-folder.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const disable_html_folder_frontmatter = {
  "title": "html.disableHtmlFolder",
  "sidebar_label": "disableHtmlFolder"
};

const disable_html_folder_toc = [];
const title = `disableHtmlFolder`;
const disable_html_folder_content = "\"---\\ntitle: html.disableHtmlFolder\\nsidebar_label: disableHtmlFolder\\n---\\n# disableHtmlFolder\\n\\n:::info BUILDER\\nThis configuration is Modern.js Builder configuration, more detail can see [html.disableHtmlFolder](https://modernjs.dev/builder/en/api/config-html.html#html-disablehtmlfolder)。\\n:::\\n\\nimport Main from '@modern-js/builder-doc/docs/en/config/html/disableHtmlFolder.md'\\n\\n<Main />\\n\"";
function disable_html_folder_createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    p: "p"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h1, {
      id: "disablehtmlfolder",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#disablehtmlfolder",
        children: "#"
      }), "disableHtmlFolder"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "BUILDER"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\nThis configuration is Modern.js Builder configuration, more detail can see ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://modernjs.dev/builder/en/api/config-html.html#html-disablehtmlfolder-3",
            target: "_blank",
            rel: "nofollow",
            children: "html.disableHtmlFolder"
          }), "。"]
        })
      })]
    }), "\n", "\n", (0,jsx_runtime.jsx)(disableHtmlFolder, {})]
  });
}
function disable_html_folder_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(disable_html_folder_createMdxContent, props)
  })) : disable_html_folder_createMdxContent(props);
}
/* harmony default export */ const disable_html_folder = (disable_html_folder_MDXContent);


/***/ })

}]);