(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["main"],{96260:function(t,e,n){t.exports="https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/text-bg.png"},23501:function(t,e,n){t.exports="https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/homepage-bg-0209.png"},45369:function(t,e,n){t.exports="https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/homepage-mobile-bg-0209.png"},42456:function(t,e,n){"use strict";n.r(e),n.d(e,{initPageData:function(){return v},App:function(){return g}});var r=n("61078"),o=n("15169"),u=n("43932"),a=n("73706"),i=n("9880"),c=n("33017"),s=n("66811"),l=n("78585"),f=n("6171"),h=n("78955"),d=n("14705"),p=n("72725"),m=n("54967");function v(t){return _.apply(this,arguments)}function _(){return(_=(0,r._)(function(t){var e,r,i,l,f,h,p,v,_,g,b,x,P,j,y;return(0,a._)(this,function(a){switch(a.label){case 0:if(e=n("10693").routes,!(r=(0,s.matchRoutes)(e,t)))return[3,2];return[4,r[0].route.preload()];case 1:return h=a.sent(),p=(0,m.cleanUrl)(r[0].route.filePath),v=c.default.pages.find(function(e){var n=function(t){return t.replace(/\/$/,"")};return(0,d.isEqualPath)(n(e.routePath),n(t))}),_=encodeURIComponent(p),x=void 0===(b=(g=(null===(i=globalThis.__RSPRESS_PAGE_META)||void 0===i?void 0:i[_])||{}).toc)?[]:b,j=void 0===(P=g.title)?"":P,y=(y=g.frontmatter)||h.frontmatter||{},[2,{siteData:c.default,page:(0,u._)((0,o._)({pagePath:p},v),{pageType:(null===(l=y)||void 0===l?void 0:l.pageType)||"doc",title:j,frontmatter:y,toc:(0,m.isProduction)()?null===(f=v)||void 0===f?void 0:f.toc:x})}];case 2:return[2,{siteData:c.default,page:{pagePath:"",pageType:"404",routePath:"/404",lang:c.default.lang||"",frontmatter:{},title:"404",toc:[],_filepath:"",_relativePath:""}}];case 3:return[2]}})})).apply(this,arguments)}function g(t){var e=t.helmetContext,n=(0,f.useContext)(p.DataContext).setData,o=(0,s.useLocation)().pathname;return(0,f.useLayoutEffect)(function(){function t(){return(t=(0,r._)(function(){return(0,a._)(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,v((0,d.normalizeRoutePath)(o))];case 1:return n(t.sent()),[3,3];case 2:return console.log(t.sent()),[3,3];case 3:return[2]}})})).apply(this,arguments)}!function(){t.apply(this,arguments)}()},[o,n]),(0,i.jsx)(l.HelmetProvider,{context:e,children:(0,i.jsx)(h.default.Layout,{})})}},13342:function(t,e,n){"use strict";n.r(e),n.d(e,{Content:function(){return c}});var r=n("9880"),o=n("6171"),u=n("66811"),a=n("14705"),i=n("10693").routes,c=function(t){var e=t.fallback,n=void 0===e?(0,r.jsx)(r.Fragment,{}):e,c=(0,u.useLocation)().pathname,s=(0,u.matchRoutes)(i,(0,a.normalizeRoutePath)(c));if(!s)return(0,r.jsx)("div",{});var l=s[0].route.element;return(0,r.jsx)(o.Suspense,{fallback:n,children:l})}},44433:function(t,e,n){"use strict";n.r(e),n.d(e,{NoSSR:function(){return a}});var r=n("28003"),o=n("9880"),u=n("6171");function a(t){var e=t.children,n=(0,r._)((0,u.useState)(!1),2),a=n[0],i=n[1];return((0,u.useEffect)(function(){i(!0)},[]),a)?(0,o.jsx)(o.Fragment,{children:e}):null}},11555:function(t,e,n){"use strict";n.r(e),n.d(e,{renderInBrowser:function(){return p}});var r=n("61078"),o=n("28003"),u=n("73706"),a=n("9880"),i=n("78955"),c=n("6171"),s=n("66811"),l=n("42456"),f=n("72725"),h=n("14705"),d=n("54967");function p(){return m.apply(this,arguments)}function m(){return(m=(0,r._)(function(){var t,e,i,p,m;return(0,u._)(this,function(v){switch(v.label){case 0:var _;return t=document.getElementById("root"),_=(0,r._)(function(){var t;return(0,u._)(this,function(e){switch(e.label){case 0:return[4,(0,l.initPageData)((0,h.normalizeRoutePath)(window.location.pathname))];case 1:return t=e.sent(),[2,function(){var e=(0,o._)((0,c.useState)(t),2),n=e[0],r=e[1],u=(0,o._)((0,c.useState)("light"),2),i=u[0],h=u[1];return(0,a.jsx)(f.ThemeContext.Provider,{value:{theme:i,setTheme:h},children:(0,a.jsx)(f.DataContext.Provider,{value:{data:n,setData:r},children:(0,a.jsx)(s.BrowserRouter,{children:(0,a.jsx)(l.App,{})})})})}]}})}),[4,function(){return _.apply(this,arguments)}()];case 1:return e=v.sent(),p=(i=n("32361")).createRoot,m=i.hydrateRoot,(0,d.isProduction)()?m(t,(0,a.jsx)(e,{})):p(t).render((0,a.jsx)(e,{})),[2]}})})).apply(this,arguments)}p().then(function(){i.default.setup()})},44110:function(t,e,n){"use strict";n.r(e);var r=n("23447");n.es(r,e)},72725:function(t,e,n){"use strict";n.r(e),n.d(e,{DataContext:function(){return o},ThemeContext:function(){return u},usePageData:function(){return a},useLang:function(){return i}});var r=n("6171"),o=(0,r.createContext)({}),u=(0,r.createContext)({});function a(){return(0,r.useContext)(o).data}function i(){return(0,r.useContext)(o).data.page.lang||""}},23447:function(t,e,n){"use strict";n.r(e),n.d(e,{normalizeHref:function(){return u.normalizeHref},withBase:function(){return u.withBase},removeBase:function(){return u.removeBase},normalizeSlash:function(){return u.normalizeSlash},isProduction:function(){return u.isProduction},normalizeRoutePath:function(){return u.normalizeRoutePath},isEqualPath:function(){return u.isEqualPath}}),n.d(e,{useLocation:function(){return a.useLocation}}),n.d(e,{Helmet:function(){return i.Helmet}}),n.d(e,{NoSSR:function(){return c.NoSSR}});var r=n("72725");n.es(r,e);var o=n("13342");n.es(o,e);var u=n("14705"),a=n("66811"),i=n("78585"),c=n("44433")},14705:function(t,e,n){"use strict";n.r(e),n.d(e,{normalizeSlash:function(){return o.normalizeSlash}}),n.d(e,{isProduction:function(){return o.isProduction}}),n.d(e,{normalizeHref:function(){return o.normalizeHref}}),n.d(e,{normalizeRoutePath:function(){return u},withBase:function(){return a},removeBase:function(){return i},isEqualPath:function(){return c}});var r=n("33017"),o=n("54967");function u(t){return decodeURIComponent(t).replace(/\.html$/,"").replace(/\/index$/,"/")}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";return(0,o.withBase)(t,r.default.base)}function i(t){return(0,o.removeBase)(t,r.default.base)}function c(t,e){return a((0,o.normalizeHref)(t))===a((0,o.normalizeHref)(e))}},54967:function(t,e,n){"use strict";n.r(e),n.d(e,{isProduction:function(){return a},cleanUrl:function(){return i},normalizeSlash:function(){return s},normalizeHref:function(){return f},withBase:function(){return h},removeBase:function(){return d}});var r=n("28003"),o=RegExp("\\?.*$","s"),u=RegExp("#.*$","s"),a=function(){return!0},i=function(t){return t.replace(u,"").replace(o,"")};function c(t){return"/"===t.charAt(0)||t.startsWith("https")?t:"/".concat(t)}function s(t){var e;return"/"===(e=c(t)).charAt(e.length-1)?e.slice(0,-1):e}var l=function(t){var e=(0,r._)(t.split("#"),2),n=e[0],o=e[1];return{url:n,hash:void 0===o?"":o}};function f(t){if(!t)return"/";if((e=t).startsWith("http://")||e.startsWith("https://")||e.startsWith("mailto:")||e.startsWith("tel:"))return t;var e,n=l(t),r=n.url,o=n.hash;return t.startsWith("mailto:")||t.startsWith("tel:")?t:(!r.endsWith(".html")&&(r.endsWith("/")?r+="index.html":r+=".html"),c(o?"".concat(r,"#").concat(o):r))}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=c(t),r=s(e);return n.startsWith(r)?n:"".concat(r).concat(n)}function d(t,e){return c(t).replace(s(e),"")}},12416:function(t,e,n){"use strict";n.r(e);var r=n("44110");n.es(r,e)}},function(t){var e=function(e){return t(t.s=e)};t.O(0,["lib-lodash","lib-polyfill","lib-react","lib-router","vendors~node_modules_pnpm_body-scroll-lock_4_0_0-beta_0_node_modules_body-scroll-lock_lib_bod~fe2f86","~cli_doc-core_dist_theme_bundle_js~builder-doc_docs_en_shared_rspack_md~builder-doc_docs_en_s~d055e1"],function(){return e("55041"),e("11555")}),t.O()}]);