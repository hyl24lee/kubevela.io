(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4753],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return f},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},f=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,v=p["".concat(c,".").concat(d)]||p[d]||l[d]||i;return t?n.createElement(v,u(u({ref:r},f),{},{components:t})):n.createElement(v,u({ref:r},f))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,u=new Array(i);u[0]=p;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var s=2;s<i;s++)u[s]=t[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},13919:function(e,r,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}t.d(r,{b:function(){return n},Z:function(){return o}})},44996:function(e,r,t){"use strict";t.d(r,{C:function(){return i},Z:function(){return u}});var n=t(52263),o=t(13919);function i(){var e=(0,n.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,i=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var i=void 0===n?{}:n,u=i.forcePrependBaseUrl,a=void 0!==u&&u,c=i.absolute,s=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(a)return r+t;var f=t.startsWith(r)?t:r+t.replace(/^\//,"");return s?e+f:f}(i,t,e,r)}}}function u(e,r){return void 0===r&&(r={}),(0,i().withBaseUrl)(e,r)}},29890:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var n=t(22122),o=t(19756),i=(t(67294),t(3905)),u=t(44996),a={title:"Restful API"},c={unversionedId:"developers/references/restful-api/rest",id:"version-v1.1/developers/references/restful-api/rest",isDocsHomePage:!1,title:"Restful API",description:"<a",source:"@site/versioned_docs/version-v1.1/developers/references/restful-api/rest.mdx",sourceDirName:"developers/references/restful-api",slug:"/developers/references/restful-api/rest",permalink:"/docs/developers/references/restful-api/rest",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/references/restful-api/rest.mdx",version:"v1.1",lastUpdatedBy:"\u5929\u5143",lastUpdatedAt:1625472226,formattedLastUpdatedAt:"7/5/2021",frontMatter:{title:"Restful API"}},s=[],f={toc:s};function l(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("a",{target:"_blank",href:(0,u.Z)("/restful-api")},"KubeVela Restful API"))}l.isMDXComponent=!0}}]);