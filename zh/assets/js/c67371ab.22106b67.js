(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[1617],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<l;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61995:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return o},toc:function(){return i},default:function(){return p}});var n=r(22122),a=r(19756),l=(r(67294),r(3905)),c={title:"\u7cfb\u7edf\u67b6\u6784"},o={unversionedId:"core-concepts/architecture",id:"core-concepts/architecture",isDocsHomePage:!1,title:"\u7cfb\u7edf\u67b6\u6784",description:"KubeVela \u5728\u9ed8\u8ba4\u5b89\u88c5\u6a21\u5f0f\u4e0b\uff0c\u662f\u4e00\u4e2a\u53ea\u5305\u542b\u201c\u63a7\u5236\u5e73\u9762\u201d\u7684\u67b6\u6784\uff0c\u901a\u8fc7\u63d2\u4ef6\u673a\u5236\u4e0e\u5404\u79cd\u8fd0\u884c\u65f6\u7cfb\u7edf\u8fdb\u884c\u7d27\u5bc6\u914d\u5408\u3002\u5176\u4e2d KubeVela \u6838\u5fc3\u63a7\u5236\u5668\u5de5\u4f5c\u5728\u4e00\u4e2a\u5355\u72ec\u7684\u63a7\u5236\u9762 Kubernetes \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core-concepts/architecture.md",sourceDirName:"core-concepts",slug:"/core-concepts/architecture",permalink:"/zh/docs/next/core-concepts/architecture",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/core-concepts/architecture.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1631533277,formattedLastUpdatedAt:"2021/9/13",frontMatter:{title:"\u7cfb\u7edf\u67b6\u6784"},sidebar:"docs",previous:{title:"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528",permalink:"/zh/docs/next/quick-start"},next:{title:"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212",permalink:"/zh/docs/next/core-concepts/application"}},i=[{value:"API \u5c42",id:"api-\u5c42",children:[]},{value:"\u63a7\u5236\u5e73\u9762\u5c42",id:"\u63a7\u5236\u5e73\u9762\u5c42",children:[]},{value:"\u6267\u884c\u5c42",id:"\u6267\u884c\u5c42",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],u={toc:i};function p(e){var t=e.components,c=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"KubeVela \u5728\u9ed8\u8ba4\u5b89\u88c5\u6a21\u5f0f\u4e0b\uff0c\u662f\u4e00\u4e2a\u53ea\u5305\u542b\u201c\u63a7\u5236\u5e73\u9762\u201d\u7684\u67b6\u6784\uff0c\u901a\u8fc7\u63d2\u4ef6\u673a\u5236\u4e0e\u5404\u79cd\u8fd0\u884c\u65f6\u7cfb\u7edf\u8fdb\u884c\u7d27\u5bc6\u914d\u5408\u3002\u5176\u4e2d KubeVela \u6838\u5fc3\u63a7\u5236\u5668\u5de5\u4f5c\u5728\u4e00\u4e2a\u5355\u72ec\u7684\u63a7\u5236\u9762 Kubernetes \u96c6\u7fa4\u3002\n\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u81ea\u4e0a\u800c\u4e0b\u770b\uff0c\u7528\u6237\u53ea\u4e0e KubeVela \u6240\u5728\u7684\u63a7\u5236\u9762 Kubernetes \u96c6\u7fa4\u53d1\u751f\u4ea4\u4e92\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"kubevela-arch",src:r(30966).Z})),(0,l.kt)("h2",{id:"api-\u5c42"},"API \u5c42"),(0,l.kt)("p",null,"KubeVela API \u662f\u58f0\u660e\u5f0f\u7684\uff0c\u5e76\u4ee5\u5e94\u7528\u7a0b\u5e8f\u4e3a\u4e2d\u5fc3\uff0c\u7528\u4e8e\u6784\u5efa\u5e94\u7528\u4ea4\u4ed8\u5e73\u53f0\u548c\u89e3\u51b3\u65b9\u6848\u3002\u540c\u65f6\uff0c\u7531\u4e8e\u5b83\u57fa\u4e8e\u539f\u751f\u7684 Kubernetes CRD \u6784\u5efa\uff0c\u6240\u4ee5\u4f7f\u7528\u8d77\u6765\u975e\u5e38\u65b9\u4fbf\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5927\u591a\u6570\u4e0d\u7528\u5173\u5fc3\u5e95\u5c42\u7ec6\u8282\u7684\u7528\u6237\u6765\u8bf4\uff0c\u4f60\u53ea\u9700\u8981\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b KubeVela \u6240\u63d0\u4f9b\u7684\u5f00\u7bb1\u5373\u7528\u7684\u7ec4\u4ef6\u3001\u8fd0\u7ef4\u7279\u5f81\u3001\u5e94\u7528\u7b56\u7565\u548c\u5de5\u4f5c\u6d41"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 YAML \u6587\u4ef6\u6765\u63cf\u8ff0\u4e00\u4e2a\u5e94\u7528\u90e8\u7f72\u8ba1\u5212"))),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5c11\u6570\u7ba1\u7406\u5458\u6765\u8bf4\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u65b0\u7684\u7ec4\u4ef6\u3001\u8fd0\u7ef4\u7279\u5f81\u3001\u5e94\u7528\u7b56\u7565\u548c\u81ea\u5b9a\u4e49\u5de5\u4f5c\u6d41\uff0c\u63d0\u4f9b\u7ed9\u4f60\u7684\u7528\u6237"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u5e38\u9700\u8981\u4f7f\u7528 YAML \u6587\u4ef6\u548c CUE \u8bed\u8a00\u6765\u5b8c\u6210\u4e0a\u8ff0\u64cd\u4f5c")))),(0,l.kt)("h2",{id:"\u63a7\u5236\u5e73\u9762\u5c42"},"\u63a7\u5236\u5e73\u9762\u5c42"),(0,l.kt)("p",null,"\u63a7\u5236\u5e73\u9762\u5c42\u662f KubeVela \u7684\u7cfb\u7edf\u6838\u5fc3\u3002\u5b83\u65e2\u80fd\u5e2e\u4f60\u6309\u9700\u7ec4\u88c5\u5185\u7f6e\u80fd\u529b\uff0c\u6216\u8005\u901a\u8fc7\u6ce8\u518c\u5404\u79cd\u80fd\u529b\u63d2\u4ef6\u6ee1\u8db3\u4ea4\u4ed8\u5e94\u7528\u7684\u9700\u8981\uff0c\u540c\u65f6\u5728\u4ea4\u4ed8\u540e\u5168\u81ea\u52a8\u5904\u7406 API \u8bf7\u6c42\u5e76\u7ba1\u7406\u5168\u5c40\u72b6\u6001\u3002"),(0,l.kt)("p",null,"\u4e3b\u8981\u5305\u542b\u5982\u4e0b\u4e09\u4e2a\u90e8\u5206:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6838\u5fc3\u63a7\u5236\u5668")," \u4e3a\u6574\u4e2a\u7cfb\u7edf\u63d0\u4f9b\u6838\u5fc3\u63a7\u5236\u903b\u8f91\uff0c\u5b8c\u6210\u8bf8\u5982\u7f16\u6392\u5e94\u7528\u548c\u5de5\u4f5c\u6d41\u3001\u4fee\u8ba2\u7248\u672c\u5feb\u7167\u3001\u5783\u573e\u56de\u6536\u7b49\u7b49\u57fa\u7840\u903b\u8f91"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u65b0\u589e\u5185\u7f6e\u80fd\u529b")," \u7531 X-Definitions \u521b\u5efa\uff0c\u6ce8\u518c\u5e94\u7528\u4ea4\u4ed8\u6240\u9700\u8981\u7684\u5185\u7f6e\u80fd\u529b\u3002\u57fa\u4e8e\u8fd9\u4e2a\u7075\u6d3b\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u81ea\u7531\u5730\u53bb\u96c6\u6210\u5f00\u6e90\u751f\u6001\u7684\u80fd\u529b\uff0c\u6309\u9700\u81ea\u5b9a\u4e49"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u63d2\u4ef6\u80fd\u529b\u4e2d\u5fc3")," Addon \u8ba9\u4f60\u53ef\u4ee5\u8c03\u7528\u751f\u6001\u4e0b\u5e38\u89c1\u7684\u80fd\u529b\uff0c\u751a\u81f3\u76f4\u63a5\u7701\u53bb\u4e86\u5f00\u53d1\u7684\u65f6\u95f4\u548c\u6210\u672c")),(0,l.kt)("h2",{id:"\u6267\u884c\u5c42"},"\u6267\u884c\u5c42"),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u6267\u884c\u5c42\u662f\u5e94\u7528\u7a0b\u5e8f\u5b9e\u9645\u4f1a\u8fd0\u884c\u7684\u5730\u65b9\u3002KubeVela \u5141\u8bb8\u4f60\u5728\u7edf\u4e00\u7684\u5de5\u4f5c\u6d41\u4e2d\uff0c\u90e8\u7f72\u548c\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u5230 Kubernetes \u96c6\u7fa4\uff0c\u4f8b\u5982\u672c\u5730\u3001\u6258\u7ba1\u4e91\u670d\u52a1\u3001IoT/\u8fb9\u7f18\u8bbe\u5907\u7aef\u7b49\u7b49\u3002"),(0,l.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b66\u4e60\u5982\u4f55\u7528 KubeVela \u6765\u8fdb\u884c\u5e94\u7528\u4ea4\u4ed8, \u8bf7\u67e5\u770b",(0,l.kt)("a",{parentName:"li",href:"./application"},"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9605\u8bfb\u7ba1\u7406\u5458\u624b\u518c\u5b66\u4e60 ",(0,l.kt)("a",{parentName:"li",href:"../platform-engineers/oam/oam-model"},"\u5f00\u653e\u5e94\u7528\u6a21\u578b"),"\u3002")))}p.isMDXComponent=!0},30966:function(e,t,r){"use strict";t.Z=r.p+"assets/images/system-arch-7bb5236708459396be8fc7ae9ddcb092.png"}}]);