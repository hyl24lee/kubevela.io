(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3864],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),p=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||l[m]||c;return r?t.createElement(f,a(a({ref:n},s),{},{components:r})):t.createElement(f,a({ref:n},s))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<c;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83332:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return a},metadata:function(){return u},toc:function(){return i},default:function(){return s}});var t=r(22122),o=r(19756),c=(r(67294),r(3905)),a={title:"Worker"},u={unversionedId:"end-user/components/cue/worker",id:"end-user/components/cue/worker",isDocsHomePage:!1,title:"Worker",description:"\u5b9a\u4e49",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/components/cue/worker.md",sourceDirName:"end-user/components/cue",slug:"/end-user/components/cue/worker",permalink:"/zh/docs/next/end-user/components/cue/worker",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/components/cue/worker.md",version:"current",lastUpdatedBy:"\u5929\u5143",lastUpdatedAt:1628141992,formattedLastUpdatedAt:"2021/8/5",frontMatter:{title:"Worker"}},i=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u5c5e\u6027\u8bf4\u660e",id:"\u5c5e\u6027\u8bf4\u660e",children:[]}],p={toc:i};function s(e){var n=e.components,r=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,c.kt)("p",null,"\u63cf\u8ff0\u5728\u540e\u7aef\u8fd0\u884c\u7684\u957f\u671f\u8fd0\u884c\u3001\u53ef\u6269\u5c55\u3001\u5bb9\u5668\u5316\u7684\u670d\u52a1\u3002 \u4ed6\u4eec\u6ca1\u6709\u7f51\u7edc\u7aef\u70b9\u6765\u63a5\u6536\u5916\u90e8\u7f51\u7edc\u6d41\u91cf\u3002"),(0,c.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: app-worker\nspec:\n  components:\n    - name: myworker\n      type: worker\n      properties:\n        image: "busybox"\n        cmd:\n          - sleep\n          - "1000"\n')),(0,c.kt)("h2",{id:"\u5c5e\u6027\u8bf4\u660e"},"\u5c5e\u6027\u8bf4\u660e"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-console"},"# Properties\n+-------+----------------------------------------------------+----------+----------+---------+\n| NAME  |                    DESCRIPTION                     |   TYPE   | REQUIRED | DEFAULT |\n+-------+----------------------------------------------------+----------+----------+---------+\n| cmd   | Commands to run in the container                   | []string | false    |         |\n| image | Which image would you like to use for your service | string   | true     |         |\n+-------+----------------------------------------------------+----------+----------+---------+\n")))}s.isMDXComponent=!0}}]);