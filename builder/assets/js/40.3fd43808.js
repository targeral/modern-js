(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{263:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"import-static-assets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-static-assets"}},[t._v("#")]),t._v(" Import Static Assets")]),t._v(" "),s("p",[t._v("Builder supports import static assets, including images, fonts, and medias.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("What is Static Assets")]),t._v(" "),s("p",[t._v("Static assets are files that are part of a web application and do not change, even when the application is being used. Examples of static assets include images, fonts, medias, stylesheets, and JavaScript files. These assets are typically stored on a web server or CDN, and delivered to the user's web browser when the Web application is accessed. Because they do not change, static assets can be cached by the browser, which helps to improve the performance of the Web application.")])]),t._v(" "),s("h2",{attrs:{id:"assets-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assets-format"}},[t._v("#")]),t._v(" Assets Format")]),t._v(" "),s("p",[t._v("The following are the formats supported by Builder by default:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Image")]),t._v(": png, jpg, jpeg, gif, svg, bmp, webp, ico, apng, avif, tiff.")]),t._v(" "),s("li",[s("strong",[t._v("Fonts")]),t._v(": woff, woff2, eot, ttf, otf, ttc.")]),t._v(" "),s("li",[s("strong",[t._v("Media")]),t._v(": mp4, webm, ogg, mp3, wav, flac, aac, mov.")])]),t._v(" "),s("p",[t._v("If you need to import static resources in other formats, please provide feedback through "),s("a",{attrs:{href:"https://github.com/modern-js-dev/modern.js/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Issues"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("SVG images")]),t._v(" "),s("p",[t._v("SVG image is a special case. Builder support convert SVG to React components, so SVG is processed separately. For details, see "),s("RouterLink",{attrs:{to:"/guide/basic/svg-assets.html"}},[t._v("Import SVG Assets")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"import-assets-in-js-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-assets-in-js-file"}},[t._v("#")]),t._v(" Import Assets in JS file")]),t._v(" "),s("p",[t._v("In JS files, you can directly import static assets in relative paths:")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Import the logo.png image in the static directory")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./static/logo.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("logo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Import with "),s("RouterLink",{attrs:{to:"/guide/advanced/alias.html"}},[t._v("alias")]),t._v(" are also supported:")],1),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/static/logo.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("logo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"import-assets-in-css-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-assets-in-css-file"}},[t._v("#")]),t._v(" Import Assets in CSS file")]),t._v(" "),s("p",[t._v("In CSS files, you can reference static assets in relative paths:")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".logo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string url"}},[t._v("'../static/logo.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Import with "),s("RouterLink",{attrs:{to:"/guide/advanced/alias.html"}},[t._v("alias")]),t._v(" are also supported:")],1),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".logo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string url"}},[t._v("'@/static/logo.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"import-results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-results"}},[t._v("#")]),t._v(" Import Results")]),t._v(" "),s("p",[t._v("The result of importing static assets depends on the file size:")]),t._v(" "),s("ul",[s("li",[t._v("When the file size is greater than 10KB, a URL will be returned, and the file will be output to the dist directory.")]),t._v(" "),s("li",[t._v("When the file size is less than 10KB, it will be automatically inlined to Base64 format.")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" largeImage "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./static/largeImage.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" smallImage "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./static/smallImage.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("largeImage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "/static/largeImage.6c12aba3.png"')]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("smallImage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "data:image/png;base64,iVBORw0KGgo..."')]),t._v("\n")])])]),s("p",[t._v("For a more detailed introduction to asset inlining, please refer to the "),s("RouterLink",{attrs:{to:"/guide/advanced/inline-assets.html"}},[t._v("Static Asset Inlining")]),t._v(" chapter.")],1),t._v(" "),s("h2",{attrs:{id:"output-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-files"}},[t._v("#")]),t._v(" Output Files")]),t._v(" "),s("p",[t._v("When static assets are imported, they will be output to the dist directory. You can:")]),t._v(" "),s("ul",[s("li",[t._v("Modify the output filename through "),s("RouterLink",{attrs:{to:"/en/api/config-output.html#output-filename"}},[t._v("output.filename")]),t._v(".")],1),t._v(" "),s("li",[t._v("Modify the output path through "),s("RouterLink",{attrs:{to:"/en/api/config-output.html#output-distpath"}},[t._v("output.distPath")]),t._v(".")],1)]),t._v(" "),s("p",[t._v("Please read "),s("RouterLink",{attrs:{to:"/guide/basic/output-files.html"}},[t._v("Output Files")]),t._v(" for details.")],1),t._v(" "),s("h2",{attrs:{id:"url-prefix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url-prefix"}},[t._v("#")]),t._v(" URL Prefix")]),t._v(" "),s("p",[t._v("The URL returned after importing a asset will automatically include the path prefix:")]),t._v(" "),s("ul",[s("li",[t._v("In development, using "),s("RouterLink",{attrs:{to:"/en/api/config-dev.html#dev-assetprefix"}},[t._v("dev.assetPrefix")]),t._v(" to set the path prefix.")],1),t._v(" "),s("li",[t._v("In production, using "),s("RouterLink",{attrs:{to:"/en/api/config-output.html#output-assetprefix"}},[t._v("output.assetPrefix")]),t._v(" to set the path prefix.")],1)]),t._v(" "),s("p",[t._v("For example, you can set "),s("code",[t._v("output.assetPrefix")]),t._v(" to "),s("code",[t._v("https://modern.com")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./static/logo.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "https://modern.com/static/logo.6c12aba3.png"')]),t._v("\n")])])]),s("h2",{attrs:{id:"image-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image-format"}},[t._v("#")]),t._v(" Image Format")]),t._v(" "),s("p",[t._v("When using image assets, you can choose a appropriate image format according to the pros and cons in the table below.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Format")]),t._v(" "),s("th",[t._v("Pros")]),t._v(" "),s("th",[t._v("Cons")]),t._v(" "),s("th",[t._v("Scenarios")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("PNG")]),t._v(" "),s("td",[t._v("Lossless compression, no loss of picture details, no distortion, support for translucency")]),t._v(" "),s("td",[t._v("Not suitable for pictures with complex color tables")]),t._v(" "),s("td",[t._v("Suitable for pictures with few colors and well-defined borders, suitable for logos, icons, transparent images and other scenes")])]),t._v(" "),s("tr",[s("td",[t._v("JPG")]),t._v(" "),s("td",[t._v("Rich colors")]),t._v(" "),s("td",[t._v("Lossy compression, which will cause image distortion, does not support transparency")]),t._v(" "),s("td",[t._v("Suitable for pictures with a large number of colors, gradients, and overly complex pictures, suitable for portrait photos, landscapes and other scenes")])]),t._v(" "),s("tr",[s("td",[t._v("WebP")]),t._v(" "),s("td",[t._v("Supports both lossy and lossless compression, supports transparency, and is much smaller than PNG and JPG")]),t._v(" "),s("td",[t._v("iOS compatibility is not good")]),t._v(" "),s("td",[t._v("Pixel images of almost any scene, and the hosting environment that supports WebP, should prefer WebP image format")])]),t._v(" "),s("tr",[s("td",[t._v("SVG")]),t._v(" "),s("td",[t._v("Lossless format, no distortion, supports transparency")]),t._v(" "),s("td",[t._v("Not suitable for complex graphics")]),t._v(" "),s("td",[t._v("Suitable for vector graphics, suitable for icons")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);