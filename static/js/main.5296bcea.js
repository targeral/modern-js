(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["main"],{42456:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{initPageData:function(){return _},App:function(){return P}});var r=n("61078"),u=n("15169"),o=n("43932"),i=n("73706"),a=n("9880"),c=n.ir(n("73695")),s=n("66811"),l=n("78585"),f=n("6171"),d=n.ir(n("78955")),h=n("14705"),p=n("72725"),m=n("54967");function _(e){return v.apply(this,arguments)}function v(){return(v=r._(function(e){var t,r,a,l,f,d;return i._(this,function(i){switch(i.label){case 0:if(t=n("95558").routes,!(r=(0,s.matchRoutes)(t,e)))return[3,2];return[4,r[0].route.preload()];case 1:return l=i.sent(),f=(0,m.cleanUrl)(r[0].route.filePath),d=c.default.pages.find(function(t){var n=function(e){return e.replace(/\/$/,"")};return(0,h.isEqualPath)(n(t.routePath),n(e))}),[2,{siteData:c.default,page:o._(u._({pagePath:f},d),{pageType:(null==l?void 0:null===(a=l.frontmatter)||void 0===a?void 0:a.pageType)||(null==l?void 0:l.pageType)||"doc",title:null==l?void 0:l.title,frontmatter:(null==l?void 0:l.frontmatter)||{},toc:(0,m.isProduction)()?null==d?void 0:d.toc:l.toc})}];case 2:return[2,{siteData:c.default,page:{pagePath:"",pageType:"404",routePath:"/404",lang:c.default.lang||"",frontmatter:{},title:"404",toc:[],_filepath:"",_relativePath:""}}];case 3:return[2]}})})).apply(this,arguments)}function P(e){var t=e.helmetContext,n=(0,f.useContext)(p.DataContext).setData,u=(0,s.useLocation)().pathname;return(0,f.useLayoutEffect)(function(){function e(){return(e=r._(function(){return i._(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,_((0,h.normalizeRoutePath)(u))];case 1:return n(e.sent()),[3,3];case 2:return console.log(e.sent()),[3,3];case 3:return[2]}})})).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[u,n]),(0,a.jsx)(l.HelmetProvider,{context:t,children:(0,a.jsx)(d.default.Layout,{})})}},13342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Content",{enumerable:!0,get:function(){return c}});var r=n("9880"),u=n("6171"),o=n("66811"),i=n("14705"),a=n("95558").routes,c=function(e){var t=e.fallback,n=void 0===t?(0,r.jsx)(r.Fragment,{}):t,c=(0,o.useLocation)().pathname,s=(0,o.matchRoutes)(a,(0,i.normalizeRoutePath)(c));if(!s)return(0,r.jsx)("div",{});var l=s[0].route.element;return(0,r.jsx)(u.Suspense,{fallback:n,children:l})}},44433:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NoSSR",{enumerable:!0,get:function(){return i}});var r=n("28003"),u=n("9880"),o=n("6171");function i(e){var t=e.children,n=r._((0,o.useState)(!1),2),i=n[0],a=n[1];return((0,o.useEffect)(function(){a(!0)},[]),i)?(0,u.jsx)(u.Fragment,{children:t}):null}},11555:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"renderInBrowser",{enumerable:!0,get:function(){return p}});var r=n("61078"),u=n("28003"),o=n("73706"),i=n("9880"),a=n.ir(n("78955")),c=n("6171"),s=n("66811"),l=n("42456"),f=n("72725"),d=n("14705"),h=n("54967");function p(){return m.apply(this,arguments)}function m(){return(m=r._(function(){var e,t,a,p,m;return o._(this,function(_){switch(_.label){case 0:var v;return e=document.getElementById("root"),v=r._(function(){var e;return o._(this,function(t){switch(t.label){case 0:return[4,(0,l.initPageData)((0,d.normalizeRoutePath)(window.location.pathname))];case 1:return e=t.sent(),[2,function(){var t=u._((0,c.useState)(e),2),n=t[0],r=t[1],o=u._((0,c.useState)("light"),2),a=o[0],d=o[1];return(0,i.jsx)(f.ThemeContext.Provider,{value:{theme:a,setTheme:d},children:(0,i.jsx)(f.DataContext.Provider,{value:{data:n,setData:r},children:(0,i.jsx)(s.BrowserRouter,{children:(0,i.jsx)(l.App,{})})})})}]}})}),[4,function(){return v.apply(this,arguments)}()];case 1:return t=_.sent(),p=(a=n("32361")).createRoot,m=a.hydrateRoot,(0,h.isProduction)()?m(e,(0,i.jsx)(t,{})):p(e).render((0,i.jsx)(t,{})),[2]}})})).apply(this,arguments)}p().then(function(){a.default.setup()})},44110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.es(n("23447"),t)},72725:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DataContext:function(){return u},ThemeContext:function(){return o},usePageData:function(){return i},useLang:function(){return a}});var r=n("6171"),u=(0,r.createContext)({}),o=(0,r.createContext)({});function i(){return(0,r.useContext)(u).data}function a(){return(0,r.useContext)(u).data.page.lang||""}},23447:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{normalizeHref:function(){return r.normalizeHref},withBase:function(){return r.withBase},removeBase:function(){return r.removeBase},normalizeSlash:function(){return r.normalizeSlash},isProduction:function(){return r.isProduction},normalizeRoutePath:function(){return r.normalizeRoutePath},isEqualPath:function(){return r.isEqualPath},useLocation:function(){return u.useLocation},Helmet:function(){return o.Helmet},NoSSR:function(){return i.NoSSR}}),n.es(n("72725"),t),n.es(n("13342"),t);var r=n("14705"),u=n("66811"),o=n("78585"),i=n("44433")},14705:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{normalizeRoutePath:function(){return o},withBase:function(){return i},removeBase:function(){return a},isEqualPath:function(){return c},normalizeSlash:function(){return u.normalizeSlash},isProduction:function(){return u.isProduction},normalizeHref:function(){return u.normalizeHref}});var r=n.ir(n("73695")),u=n("54967");function o(e){return decodeURIComponent(e).replace(/\.html$/,"").replace(/\/index$/,"/")}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";return(0,u.withBase)(e,r.default.base)}function a(e){return(0,u.removeBase)(e,r.default.base)}function c(e,t){return i((0,u.normalizeHref)(e))===i((0,u.normalizeHref)(t))}},54967:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{QUERY_REGEXP:function(){return u},HASH_REGEXP:function(){return o},isProduction:function(){return i},cleanUrl:function(){return a},addLeadingSlash:function(){return c},removeTrailingSlash:function(){return s},normalizeSlash:function(){return l},isExternalUrl:function(){return f},parseUrl:function(){return d},normalizeHref:function(){return h},withBase:function(){return p},removeBase:function(){return m}});var r=n("28003"),u=RegExp("\\?.*$","s"),o=RegExp("#.*$","s"),i=function(){return!0},a=function(e){return e.replace(o,"").replace(u,"")};function c(e){return"/"===e.charAt(0)||e.startsWith("https")?e:"/".concat(e)}function s(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function l(e){return s(c(e))}function f(e){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("mailto:")||e.startsWith("tel:")}var d=function(e){var t=r._(e.split("#"),2),n=t[0],u=t[1];return{url:n,hash:void 0===u?"":u}};function h(e){if(!e)return"/";if(f(e))return e;var t=d(e),n=t.url,r=t.hash;return e.startsWith("mailto:")||e.startsWith("tel:")?e:(!n.endsWith(".html")&&(n.endsWith("/")?n+="index.html":n+=".html"),c(r?"".concat(n,"#").concat(r):n))}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=c(e),r=l(t);return n.startsWith(r)?n:"".concat(r).concat(n)}function m(e,t){return c(e).replace(l(t),"")}},12416:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.es(n("44110"),t)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,["defaultVendors~docs_en_configure_app_runtime_intro_mdx~docs_en_guides_advanced-features_bff_f~907de2","default~docs_en_apis_app_runtime_core_use-module-apps_mdx~docs_en_apis_app_runtime_model_Prov~ea6ea5","lib-lodash","lib-polyfill","lib-react","lib-router"],function(){return t("97539"),t("11555")}),e.O()}]);