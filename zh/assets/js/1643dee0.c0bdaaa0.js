(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[9172],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(t),m=a,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return t?n.createElement(d,l(l({ref:r},p),{},{components:t})):n.createElement(d,l({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85032:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var n=t(22122),a=t(19756),o=(t(67294),t(3905)),l={title:"\u6982\u8ff0"},i={unversionedId:"platform-engineers/cloud-services",id:"platform-engineers/cloud-services",isDocsHomePage:!1,title:"\u6982\u8ff0",description:"\u4e91\u670d\u52a1\u662f\u5e94\u7528\u7a0b\u5e8f\u7684\u91cd\u8981\u7ec4\u4ef6\uff0cKubeVela \u5141\u8bb8\u60a8\u4ee5\u4e00\u81f4\u7684\u4f53\u9a8c\u914d\u7f6e\u548c\u4f7f\u7528\u5b83\u4eec\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/platform-engineers/cloud-services.md",sourceDirName:"platform-engineers",slug:"/platform-engineers/cloud-services",permalink:"/zh/docs/next/platform-engineers/cloud-services",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/cloud-services.md",version:"current",lastUpdatedBy:"\u5929\u5143",lastUpdatedAt:1625472226,formattedLastUpdatedAt:"2021/7/5",frontMatter:{title:"\u6982\u8ff0"},sidebar:"docs",previous:{title:"\u6dfb\u52a0 Traits",permalink:"/zh/docs/next/platform-engineers/kube/trait"},next:{title:"Terraform",permalink:"/zh/docs/next/platform-engineers/terraform"}},c=[{value:"KubeVela \u5982\u4f55\u7ba1\u7406\u4e91\u670d\u52a1\uff1f",id:"kubevela-\u5982\u4f55\u7ba1\u7406\u4e91\u670d\u52a1\uff1f",children:[]},{value:"KubeVela \u662f\u5426\u4e0e\u4e91\u5bf9\u8bdd\uff1f",id:"kubevela-\u662f\u5426\u4e0e\u4e91\u5bf9\u8bdd\uff1f",children:[]},{value:"\u4e00\u4e2a\u4e91\u670d\u52a1\u5b9e\u4f8b\u53ef\u4ee5\u88ab\u591a\u4e2a\u5e94\u7528\u7a0b\u5e8f\u5171\u4eab\u5417\uff1f",id:"\u4e00\u4e2a\u4e91\u670d\u52a1\u5b9e\u4f8b\u53ef\u4ee5\u88ab\u591a\u4e2a\u5e94\u7528\u7a0b\u5e8f\u5171\u4eab\u5417\uff1f",children:[]}],u={toc:c};function p(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e91\u670d\u52a1\u662f\u5e94\u7528\u7a0b\u5e8f\u7684\u91cd\u8981\u7ec4\u4ef6\uff0cKubeVela \u5141\u8bb8\u60a8\u4ee5\u4e00\u81f4\u7684\u4f53\u9a8c\u914d\u7f6e\u548c\u4f7f\u7528\u5b83\u4eec\u3002"),(0,o.kt)("h2",{id:"kubevela-\u5982\u4f55\u7ba1\u7406\u4e91\u670d\u52a1\uff1f"},"KubeVela \u5982\u4f55\u7ba1\u7406\u4e91\u670d\u52a1\uff1f"),(0,o.kt)("p",null,"\u5728 KubeVela \u4e2d\uff0c\u6240\u9700\u7684\u4e91\u670d\u52a1\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u88ab\u58f0\u660e\u4e3a",(0,o.kt)("em",{parentName:"p"},"components"),"\uff0c\u5e76\u901a\u8fc7",(0,o.kt)("em",{parentName:"p"},"Service Binding Trait"),"\u88ab\u5176\u4ed6\u7ec4\u4ef6\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"kubevela-\u662f\u5426\u4e0e\u4e91\u5bf9\u8bdd\uff1f"},"KubeVela \u662f\u5426\u4e0e\u4e91\u5bf9\u8bdd\uff1f"),(0,o.kt)("p",null,"KubeVela \u4f9d\u9760 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/terraform-controller"},"Terraform Controller")," \u6216 ",(0,o.kt)("a",{parentName:"p",href:"http://crossplane.io/"},"Crossplane")," \u4f5c\u4e3a\u63d0\u4f9b\u8005\u4e0e\u4e91\u5bf9\u8bdd\u3002\u8bf7\u67e5\u770b\u4ee5\u4e0b\u6587\u6863\u4ee5\u4e86\u89e3\u8be6\u7ec6\u6b65\u9aa4\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./terraform"},"Terraform")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./crossplane"},"Crossplane"))),(0,o.kt)("h2",{id:"\u4e00\u4e2a\u4e91\u670d\u52a1\u5b9e\u4f8b\u53ef\u4ee5\u88ab\u591a\u4e2a\u5e94\u7528\u7a0b\u5e8f\u5171\u4eab\u5417\uff1f"},"\u4e00\u4e2a\u4e91\u670d\u52a1\u5b9e\u4f8b\u53ef\u4ee5\u88ab\u591a\u4e2a\u5e94\u7528\u7a0b\u5e8f\u5171\u4eab\u5417\uff1f"),(0,o.kt)("p",null,"\u662f\u7684\u3002\u867d\u7136\u6211\u4eec\u76ee\u524d\u5c06\u6b64\u63a8\u8fdf\u5230\u63d0\u4f9b\u8005\uff0c\u56e0\u6b64\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e91\u670d\u52a1\u5b9e\u4f8b\u4e0d\u662f\u6bcf\u4e2a\u201c\u5e94\u7528\u7a0b\u5e8f\u201d\u5171\u4eab\u548c\u4e13\u7528\u7684\u3002\u73b0\u5728\u7684\u89e3\u51b3\u65b9\u6cd5\u662f\u60a8\u53ef\u4ee5\u4f7f\u7528\u5355\u72ec\u7684\u201c\u5e94\u7528\u7a0b\u5e8f\u201d\u4ec5\u58f0\u660e\u4e91\u670d\u52a1\uff0c\u7136\u540e\u5176\u4ed6\u201c\u5e94\u7528\u7a0b\u5e8f\u201d\u53ef\u4ee5\u901a\u8fc7\u5171\u4eab\u65b9\u6cd5\u4e2d\u7684 service binding trait \u6765\u4f7f\u7528\u5b83\u3002"),(0,o.kt)("p",null,"\u5c06\u6765\uff0c\u6211\u4eec\u6b63\u5728\u8003\u8651\u5c06\u6b64\u90e8\u5206\u4f5c\u4e3a KubeVela \u7684\u6807\u51c6\u529f\u80fd\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u58f0\u660e\u662f\u5426\u5e94\u5171\u4eab\u7ed9\u5b9a\u7684\u4e91\u670d\u52a1\u7ec4\u4ef6\u3002"))}p.isMDXComponent=!0}}]);