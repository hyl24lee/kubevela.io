(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[49475],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return c}});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),o=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},s=function(e){var t=o(e.components);return l.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},b=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=o(a),c=r,m=b["".concat(p,".").concat(c)]||b[c]||k[c]||n;return a?l.createElement(m,u(u({ref:t},s),{},{components:a})):l.createElement(m,u({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,u=new Array(n);u[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var o=2;o<n;o++)u[o]=a[o];return l.createElement.apply(null,u)}return l.createElement.apply(null,a)}b.displayName="MDXCreateElement"},42919:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var l=a(22122),r=a(19756),n=(a(67294),a(3905)),u={title:"KubeVela 1.1 \u53d1\u5e03\uff0c\u5f00\u542f\u6df7\u5408\u73af\u5883\u5e94\u7528\u6301\u7eed\u4ea4\u4ed8\u65b0\u91cc\u7a0b\u7891",author:"KubeVela Maintainers",author_title:"KubeVela Team",author_url:"https://github.com/oam-dev/kubevela",author_image_url:"https://kubevela.io/img/logo.svg",tags:["DevOps"],description:"",hide_table_of_contents:!1},i={permalink:"/zh/blog/2021/10/08/blog-1.1",editUrl:"https://github.com/oam-dev/kubevela.io/tree/main/blog/2021-10-08-blog-1.1.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021-10-08-blog-1.1.md",title:"KubeVela 1.1 \u53d1\u5e03\uff0c\u5f00\u542f\u6df7\u5408\u73af\u5883\u5e94\u7528\u6301\u7eed\u4ea4\u4ed8\u65b0\u91cc\u7a0b\u7891",description:"",date:"2021-10-08T00:00:00.000Z",formattedDate:"2021\u5e7410\u67088\u65e5",tags:[{label:"DevOps",permalink:"/zh/blog/tags/dev-ops"}],readingTime:1.885,truncated:!1,prevItem:{title:"\u57fa\u4e8e KubeVela \u7684 GitOps \u4ea4\u4ed8",permalink:"/zh/blog/2021/10/10/kubevela-gitops"},nextItem:{title:"\u4f7f\u7528 Jenkins + KubeVela \u5b8c\u6210\u5e94\u7528\u7684\u6301\u7eed\u4ea4\u4ed8",permalink:"/zh/blog/2021/09/02/kubevela-jenkins-cicd"}},p=[{value:"KubeVela 1.1 \u4ecb\u7ecd",id:"kubevela-11-\u4ecb\u7ecd",children:[{value:"\u591a\u73af\u5883\u3001\u591a\u96c6\u7fa4\u5e94\u7528\u4ea4\u4ed8",id:"\u591a\u73af\u5883\u3001\u591a\u96c6\u7fa4\u5e94\u7528\u4ea4\u4ed8",children:[]},{value:"\u5b9a\u4e49\u4ea4\u4ed8\u5de5\u4f5c\u6d41\uff08Workflow\uff09",id:"\u5b9a\u4e49\u4ea4\u4ed8\u5de5\u4f5c\u6d41\uff08workflow\uff09",children:[]},{value:"\u901a\u8fc7 Service Mesh \u6765\u5b9e\u73b0\u7070\u5ea6\u53d1\u5e03\u7b49\u9ad8\u7ea7\u8fd0\u7ef4\u52a8\u4f5c",id:"\u901a\u8fc7-service-mesh-\u6765\u5b9e\u73b0\u7070\u5ea6\u53d1\u5e03\u7b49\u9ad8\u7ea7\u8fd0\u7ef4\u52a8\u4f5c",children:[]},{value:"\u4ee5\u5e94\u7528\u4e3a\u4e2d\u5fc3\u7684\u4e91\u8d44\u6e90\u4ea4\u4ed8",id:"\u4ee5\u5e94\u7528\u4e3a\u4e2d\u5fc3\u7684\u4e91\u8d44\u6e90\u4ea4\u4ed8",children:[]},{value:"\u66f4\u5bb9\u6613\u843d\u5730\u7684 GitOps \u6301\u7eed\u4ea4\u4ed8\u5b9e\u8df5",id:"\u66f4\u5bb9\u6613\u843d\u5730\u7684-gitops-\u6301\u7eed\u4ea4\u4ed8\u5b9e\u8df5",children:[]}]},{value:"KubeVela \u793e\u533a\u4e0e\u751f\u6001",id:"kubevela-\u793e\u533a\u4e0e\u751f\u6001",children:[]},{value:"\u540e\u7eed\u7248\u672c\u89c4\u5212",id:"\u540e\u7eed\u7248\u672c\u89c4\u5212",children:[]},{value:"\u53c2\u8003\u4fe1\u606f",id:"\u53c2\u8003\u4fe1\u606f",children:[]}],o={toc:p};function s(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,l.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728\u4e91\u539f\u751f\u7406\u5ff5\u8fc5\u901f\u666e\u53ca\u7684\u4eca\u5929\uff0c\u6df7\u5408\u73af\u5883\u90e8\u7f72\uff08\u6df7\u5408\u4e91/\u591a\u4e91/\u5206\u5e03\u5f0f\u4e91/\u8fb9\u7f18\uff09\u5df2\u7ecf\u6210\u4e3a\u4e86\u5927\u591a\u6570\u4f01\u4e1a\u5e94\u7528\u3001SaaS \u670d\u52a1\u3001\u5e94\u7528\u6301\u7eed\u4ea4\u4ed8\u5e73\u53f0\u7684\u5fc5\u7136\u9009\u62e9\uff0c\u800c\u4e91\u539f\u751f\u6280\u672f\u7684\u53d1\u5c55\u8d8b\u52bf\u4e5f\u6b63\u5728\u671d\u7740\u201c\u4e00\u81f4\u7684\u3001\u8de8\u4e91\u3001\u8de8\u73af\u5883\u7684\u7684\u5e94\u7528\u4ea4\u4ed8\u201d\u4e0d\u65ad\u8fc8\u8fdb\u3002\u7136\u800c\uff0c\u65e0\u8bba\u662f Kubernetes \u672c\u8eab\u8fd8\u662f\u73b0\u6709\u7684\u5404\u7c7b\u5e94\u7528\u4ea4\u4ed8\u7cfb\u7edf\uff0c\u90fd\u6ca1\u6709\u5728\u73b0\u4eca\u6df7\u5408\u3001\u5206\u5e03\u5f0f\u7684\u90e8\u7f72\u73af\u5883\u4e4b\u4e0a\u5f15\u5165\u4e00\u81f4\u7684\u4e0a\u5c42\u62bd\u8c61\u6765\u4e3a\u5e94\u7528\u4ea4\u4ed8\u8fdb\u884c\u5efa\u6a21\u3002\u8fd9\u79cd\u7f3a\u4e4f\u7edf\u4e00\u4e0a\u5c42\u62bd\u8c61\u7684\u5e94\u7528\u4ea4\u4ed8\u8fc7\u7a0b\uff0c\u5f80\u5f80\u540c\u5e95\u5c42\u57fa\u7840\u8bbe\u65bd\u7d27\u5bc6\u8026\u5408\uff0c\u5bfc\u81f4\u7528\u6237\u5fc3\u667a\u8d1f\u62c5\u5f88\u91cd\u5e76\u4e14\u4e25\u91cd\u4f9d\u8d56\u4e8e\u7528\u6237\u4e2a\u4eba\u7684\u7ecf\u9a8c\u548c\u80fd\u529b\u3002\u8fd9\u4e0d\u4ec5\u4f1a\u5927\u5e45\u5f71\u54cd\u7528\u6237\u4f53\u9a8c\u3001\u964d\u4f4e\u751f\u4ea7\u6548\u7387\uff0c\u751a\u81f3\u8fd8\u4f1a\u5bfc\u81f4\u9519\u8bef\u548c\u6545\u969c\u7684\u53d1\u751f\u3002"),(0,n.kt)("p",null,"\u800c\u73b0\u5728\uff0c\u8fd9\u4e2a\u95ee\u9898\u7ec8\u4e8e\u6709\u4e86\u4e00\u4e2a\u5f00\u6e90\u3001\u6807\u51c6\uff0c\u53c8\u4e0d\u5931\u7075\u6d3b\u5ea6\u7684\u89e3\u6cd5\u3002\u5b83\u5c31\u662f\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.kubevela.net/images/logo.png",alt:"kubevela-logo.png"})," "),(0,n.kt)("p",null,"KubeVela \u4f5c\u4e3a\u4e00\u4e2a\u5f00\u7bb1\u5373\u7528\u3001\u9762\u5411\u73b0\u4ee3\u5fae\u670d\u52a1\u67b6\u6784\u7684\u5e94\u7528\u4ea4\u4ed8\u4e0e\u7ba1\u7406\u5e73\u53f0\uff0c\u4eca\u5929\u6b63\u5f0f\u53d1\u5e03\u4e86 1.1 \u7248\u672c\uff0c\u4ee5\u66f4\u52a0\u7528\u6237\u53cb\u597d\u548c\u5b8c\u5584\u7684\u529f\u80fd\u96c6\uff0c\u5f00\u542f\u4e86\u201d\u8ba9\u6df7\u5408\u73af\u5883\u5e94\u7528\u4ea4\u4ed8\u66f4\u52a0\u7b80\u5355\u9ad8\u6548\u201c\u7684\u91cd\u8981\u91cc\u7a0b\u7891\u3002"),(0,n.kt)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0c1.1 \u7248\u672c\u7684 KubeVela \u4e0e\u73b0\u6709\u5404\u7c7b\u5e94\u7528\u4ea4\u4ed8\u7cfb\u7edf\u76f8\u6bd4\uff0c\u6709\u7740\u663e\u8457\u7684\u4e0d\u540c\u548c\u4f18\u52bf\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5b8c\u5168\u4ee5\u5e94\u7528\u4e3a\u4e2d\u5fc3"),"  \u4e0e\u5404\u7c7b\u201c\u642d\u79ef\u6728\u201d\u5f0f\u7684 PaaS \u7cfb\u7edf\u6216\u8005\u5e94\u7528\u5e73\u53f0\u4e0d\u540c\uff0cKubeVela \u9879\u76ee\u672c\u8eab\u662f\u6784\u5efa\u4e8e\u4e00\u5957\u5b8c\u5584\u7684\u5e94\u7528\u4ea4\u4ed8\u6a21\u578b\u4e0e\u7406\u8bba\u57fa\u7840\u4e4b\u4e0a\u7684\uff0c\u8fd9\u5c31\u662f\u201c\u5f00\u653e\u5e94\u7528\u6a21\u578b\uff08OAM\uff09\u201d\u6280\u672f\u3002OAM \u6a21\u578b\u80fd\u591f\u901a\u8fc7\u58f0\u660e\u5f0f\u7684\u5b9a\u4e49\u6765\u6355\u83b7\u9762\u5411\u6df7\u5408\u73af\u5883\u7684\u5fae\u670d\u52a1\u5e94\u7528\u4ea4\u4ed8\u7684\u6574\u4e2a\u8fc7\u7a0b\uff0c\u751a\u81f3\u5305\u62ec\u4e91\u670d\u52a1\u7684\u62c9\u8d77\u4e0e\u7ed1\u5b9a\u3001\u53ef\u89c2\u6d4b\u6027\u3001\u591a\u96c6\u7fa4\u5206\u53d1\u7b56\u7565\u3001\u6d41\u91cf\u8c03\u914d\u548c\u6eda\u52a8\u66f4\u65b0\u7b49\u5404\u79cd\u8fd0\u7ef4\u884c\u4e3a\u548c\u7279\u5f81\u3002\u901a\u8fc7\u8fd9\u6837\u4e00\u4e2a\u7edf\u4e00\u7684\u3001\u57fa\u7840\u8bbe\u65bd\u65e0\u5173\u7684\u4e0a\u5c42\u6a21\u578b\uff0cKubeVela \u5929\u7136\u5c31\u80fd\u591f\u505a\u5230\u8ba9\u7528\u6237\u65e0\u9700\u5173\u5fc3\u4efb\u4f55\u57fa\u7840\u8bbe\u65bd\u7ec6\u8282\u3001\u53ea\u4e13\u6ce8\u4e8e\u4e1a\u52a1\u4ef7\u503c\u548c\u4ea4\u4ed8\u8fc7\u7a0b\uff0c\u771f\u6b63\u5b9e\u73b0\u4e86\u5b8c\u5168 Serverless \u5316\u7684\u5e94\u7528\u7ba1\u7406\u4e0e\u4ea4\u4ed8\u4f53\u9a8c\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u53ef\u7f16\u7a0b\u5f0f\u4ea4\u4ed8\u5de5\u4f5c\u6d41")," - \u5728 Kubernetes \u9762\u5411\u7ec8\u6001\u7684\u57fa\u7840\u4e0a\uff0cKubeVela \u8fd8\u901a\u8fc7\u201c\u4ea4\u4ed8\u6d41\u6c34\u7ebf\uff08Workflow\uff09\u201c\u6765\u652f\u6301\u9762\u5411\u8fc7\u7a0b\u7684\u5e94\u7528\u4ea4\u4ed8\u6d41\u7a0b\uff0c\u540c\u65f6\u901a\u8fc7 Kubernetes \u7ec8\u6001\u80fd\u529b\u6765\u4fdd\u8bc1\u8be5\u6d41\u6c34\u7ebf\u6267\u884c\u7684\u6b63\u786e\u6027\u4e0e\u5e42\u7b49\u6027\u3002\u5728\u5185\u6838\u4e2d\uff0cKubeVela \u6d41\u6c34\u7ebf\u662f\u901a\u8fc7 CUE \u6765\u5b9e\u73b0\u7684\u3002CUE \u662f\u4e00\u79cd\u8bde\u751f\u81ea Google Borg \u7cfb\u7edf\u7684\u6570\u636e\u914d\u7f6e\u8bed\u8a00\uff08\u5373\uff1aborgcfg\uff09\uff0c\u5b83\u53ef\u4ee5\u5c06\u5e94\u7528\u4ea4\u4ed8\u8fc7\u7a0b\u7684\u6240\u6709\u6b65\u9aa4\u3001\u6240\u9700\u8d44\u6e90\u3001\u5173\u8054\u7684\u8fd0\u7ef4\u52a8\u4f5c\u4ee5\u53ef\u7f16\u7a0b\u7684\u65b9\u5f0f\u5b9a\u4e49\u6210\u4e00\u4e2a DAG\uff08\u6709\u5411\u65e0\u73af\u56fe\uff09\uff0c\u5e76\u4ee5\u6b64\u4f5c\u4e3a\u7528\u6237\u6700\u7ec8\u7684\u4ea4\u4ed8\u8ba1\u5212\u3002\u8fd9\u4f7f\u5f97 KubeVela \u7684\u4ea4\u4ed8\u6d41\u6c34\u7ebf\u4e0d\u4ec5\u4f7f\u7528\u7b80\u5355\u3001\u6269\u5c55\u6027\u6781\u5f3a\uff0c\u4e5f\u66f4\u7b26\u5408\u73b0\u4ee3 GitOps \u5e94\u7528\u4ea4\u4ed8\u7684\u8d8b\u52bf\u4e0e\u8981\u6c42\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u57fa\u7840\u8bbe\u65bd\u65e0\u5173")," - \u5728 1.1 \u7248\u672c\u4e2d\uff0cKubeVela \u5b8c\u6210\u4e86 100% \u7684\u201c\u63a7\u5236\u5e73\u9762\u5316\u201d\u3002\u8fd9\u610f\u5473\u7740\u5b83\u672c\u8eab\u6210\u4e3a\u4e86\u4e00\u4e2a\u8fd0\u884c\u5728\u7ba1\u63a7\u96c6\u7fa4\u4e2d\u7684\u3001\u5b8c\u5168\u4e0e\u5e94\u7528\u8fd0\u884c\u57fa\u7840\u8bbe\u65bd\u65e0\u5173\u7684\u4ea4\u4ed8\u63a7\u5236\u5e73\u9762\u3002\u8fd9\u79cd\u201c\u4f7f\u7528 Kubernetes \u4f5c\u4e3a\u7ba1\u63a7\u5e73\u9762\u3001\u9762\u5411\u4efb\u4f55\u57fa\u7840\u8bbe\u65bd\u8fdb\u884c\u5e94\u7528\u4ea4\u4ed8\u4e0e\u7ba1\u7406\u201d\u7684\u65b0\u67b6\u6784\uff0c\u4f7f\u5f97 KubeVela \u53ef\u4ee5\u6309\u7167\u7528\u6237\u5b9a\u4e49\u7684\u5de5\u4f5c\u6d41\u4e0e\u4ea4\u4ed8\u7b56\u7565\uff0c\u9762\u5411\u4efb\u4f55\u73af\u5883\u4ea4\u4ed8\u548c\u7ba1\u7406\u4efb\u610f\u7c7b\u578b\u7684\u5e94\u7528\u7ec4\u4ef6\uff0c\u5305\u62ec\uff1a\u5bb9\u5668\u3001\u4e91\u51fd\u6570\u3001\u6570\u636e\u5e93\u3001\u4e91\u670d\u52a1\u3001\u865a\u62df\u673a\u5b9e\u4f8b\u7b49\u7b49\u3002"))),(0,n.kt)("h2",{id:"kubevela-11-\u4ecb\u7ecd"},"KubeVela 1.1 \u4ecb\u7ecd"),(0,n.kt)("p",null,"\u81ea Kubevela 1.0 \u7248\u672c\u53d1\u5e03\u4ee5\u6765\uff0cKubeVela \u793e\u533a\u53d1\u5c55\u975e\u5e38\u8fc5\u901f\uff0c\u622a\u6b62\u76ee\u524d\u5df2\u7ecf\u6709\u8d85\u8fc7 100+ \u540d\u5f00\u53d1\u8005\u53c2\u4e0e\u8d21\u732e\uff0c\u800c\u4e14\u5c31\u5728\u4e0a\u4e2a\u6708\uff0cKubeVela \u548c OAM \u9879\u76ee\u4e5f\u5df2\u7ecf\u6574\u4f53\u6350\u8d60\u7ed9\u4e86 CNCF \u57fa\u91d1\u4f1a\u8fdb\u884c\u6258\u7ba1\u3002\u5728 1.1 \u7248\u672c\u4e2d\uff0cKubeVela \u66f4\u52a0\u805a\u7126\u9762\u5411\u6df7\u5408\u73af\u5883\u7684\u5e94\u7528\u4ea4\u4ed8\u6d41\u7a0b\uff0c\u5e26\u6765\u4e86\u591a\u96c6\u7fa4\u4ea4\u4ed8\u3001\u4ea4\u4ed8\u6d41\u7a0b\u5b9a\u4e49\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u516c\u6709\u4e91\u8d44\u6e90\u63a5\u5165\u7b49\u591a\u4e2a\u5f00\u7bb1\u5373\u7528\u7684\u80fd\u529b\u548c\u66f4\u52a0\u53cb\u597d\u7684\u7528\u6237\u4f53\u9a8c\u3002\u8fd9\u5176\u4e2d\uff0c\u6709\u4e24\u4e2a\u6838\u5fc3\u80fd\u529b\u503c\u5f97\u7279\u522b\u5173\u6ce8\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5929\u7136\u652f\u6301\u591a\u73af\u5883\u3001\u591a\u96c6\u7fa4\u5e94\u7528\u4ea4\u4ed8"),"\uff1aKubevela \u5c06\u5e95\u5c42\u73af\u5883\u7684\u57fa\u7840\u8bbe\u65bd\u8fdb\u884c\u4e86\u9762\u5411\u5e94\u7528\u7684\u6807\u51c6\u5316\u62bd\u8c61\uff0c\u6db5\u76d6\u4e86\u4ea4\u4ed8\u5236\u54c1\u3001\u7b97\u529b\uff08\u57fa\u7840\u8ba1\u7b97\u3001AI\u8ba1\u7b97\u3001\u4e91\u8fb9\u534f\u540c\u8ba1\u7b97\uff09\u3001\u8fd0\u7ef4\u7279\u5f81\uff08\u76d1\u63a7\u3001\u6d41\u91cf\u6cbb\u7406\u3001\u65e5\u5fd7\u6536\u96c6\u7b49\uff09\u7b49\u591a\u4e2a\u7ef4\u5ea6\u3002\u7528\u6237\u80fd\u591f\u975e\u5e38\u65b9\u4fbf\u7684\u5c06\u5e94\u7528\u63cf\u8ff0\u8ddf\u4e0d\u540c\u7684\u5f85\u4ea4\u4ed8\u73af\u5883\uff08\u96c6\u7fa4\uff09\u8fdb\u884c\u5339\u914d\u3001\u5b9a\u4e49\u4e0d\u540c\u73af\u5883\u4e0b\u7684\u914d\u7f6e Patch\uff0c\u4ece\u800c\u628a\u5e94\u7528\u5dee\u5f02\u5316\u5730\u4ea4\u4ed8\u5230\u4e0d\u540c\u73af\u5883\u6216\u8005\u96c6\u7fa4\u5f53\u4e2d\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5929\u7136\u652f\u6301\u58f0\u660e\u5f0f\u4ea4\u4ed8\u5de5\u4f5c\u6d41"),"\uff1a\u4f17\u6240\u5468\u77e5\uff0cKubernetes \u7684\u8d44\u6e90\u6a21\u578b\u662f\u4ee5\u7ec8\u6001\u6765\u7ef4\u62a4\u7684\uff0c\u4f46\u662f\u5b9e\u9645\u7684\u5e94\u7528\u4ea4\u4ed8\u573a\u666f\uff0c\u5374\u5f80\u5f80\u662f\u4e00\u4e2a\u9762\u5411\u8fc7\u7a0b\u7684\u7cfb\u5217\u64cd\u4f5c\uff08\u6bd4\u5982\uff1a\u58f0\u660e\u7ec4\u4ef6 A - \u90e8\u7f72\u7ec4\u4ef6 A \u5230\u6d4b\u8bd5\u96c6\u7fa4 - \u5207 50% \u6d41\u91cf\u5230\u7ec4\u4ef6 A - \u8fd0\u884c\u6d4b\u8bd5 - \u53d1\u5e03\u5230\u751f\u6210\u96c6\u7fa4\u7b49\u7b49\uff09\u3002\u6240\u4ee5\u5728\u793e\u533a\u4e2d\uff0c\u7528\u6237\u5e0c\u671b\u7b80\u5355\u3001\u900f\u660e\u7684\u63a7\u5236\u5e94\u7528\u4ea4\u4ed8\u6d41\u7a0b\u7684\u8bc9\u6c42\u975e\u5e38\u5f3a\u70c8\uff0c\u4f46\u5f80\u5f80\u53c8\u4e0d\u5e0c\u671b\u56e0\u6b64\u5f15\u5165\u4e00\u5957\u5168\u65b0\u7684\u3001\u5b8c\u6574\u7684 CI/CD \u7cfb\u7edf\u3002\u4e3a\u6b64\uff0cKubeVela 1.1 \u5728\u5e94\u7528\u6a21\u578b\u4e2d\u589e\u52a0\u4e86 Workflow \u8bed\u4e49\u6765\u7cbe\u7ec6\u5316\u7684\u63cf\u8ff0\u6574\u4e2a\u5e94\u7528\u4ea4\u4ed8\u5de5\u4f5c\u6d41\uff0c\u5e76\u4e14\u5185\u7f6e\u5c31\u63d0\u4f9b\u201d\u4eba\u5de5\u5ba1\u6279\u201c\u3001\u201d\u56de\u6eda\u201c\u3001\u201d\u6570\u636e\u4f20\u9012\u201c\u3001\u201cSlack/\u9489\u9489\u901a\u77e5\u201d\u7b49\u591a\u4e2a\u5de5\u4f5c\u6d41\u6b65\u9aa4\uff08Step\uff09\u3002\u66f4\u91cd\u8981\u7684\u662f\uff0c\u8fd9\u79cd\u5b9e\u73b0\u5728\u5e94\u7528\u6a21\u578b\u5c42\u7684\u58f0\u660e\u5f0f Workflow  \u5929\u7136\u5177\u5907\u88ab\u96c6\u6210\u80fd\u529b\uff0c\u53ef\u4ee5\u975e\u5e38\u81ea\u7136\u7684\u540c\u73b0\u6709 CI/CD \u7cfb\u7edf\u6216\u8005 GitOps \u5de5\u5177\u901a\u8fc7\u6269\u5c55\u7684\u65b9\u5f0f\u505a\u96c6\u6210\uff0c\u800c\u4e0d\u9700\u8981\u7528\u6237\u5728\u53d6\u820d\u95f4\u75db\u82e6\u3002"))),(0,n.kt)("p",null,"\u6b63\u662f\u901a\u8fc7\u4e0a\u8ff0\u8bbe\u8ba1\uff0cKubeVela \u53ef\u4ee5\u5e2e\u52a9\u4f60\u4ece\u201c\u9759\u6001\u914d\u7f6e\u3001\u6a21\u677f\u3001\u80f6\u6c34\u4ee3\u7801\u201d\u7684\u521d\u7ea7\u9636\u6bb5\uff0c\u76f4\u63a5\u5347\u7ea7\u81f3\u201c\u81ea\u52a8\u5316\u3001\u58f0\u660e\u5f0f\u3001\u7edf\u4e00\u6a21\u578b\u3001\u5929\u7136\u9762\u5411\u591a\u73af\u5883\u201d\u7684\u4e0b\u4e00\u4ee3\u4ee5\u5de5\u4f5c\u6d41\u4e3a\u6838\u5fc3\u7684\u4ea4\u4ed8\u4f53\u9a8c\u5f53\u4e2d\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.kubevela.net/images/cloud-deploy.jpg",alt:"undefined"})," "),(0,n.kt)("p",null,"\u57fa\u4e8e\u4e0a\u8ff0\u80fd\u529b\uff0c\u7528\u6237\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7 KubeVela \u975e\u5e38\u8f7b\u677e\u7684\u5904\u7406\u4ee5\u4e0b\u573a\u666f\uff1a"),(0,n.kt)("h3",{id:"\u591a\u73af\u5883\u3001\u591a\u96c6\u7fa4\u5e94\u7528\u4ea4\u4ed8"},"\u591a\u73af\u5883\u3001\u591a\u96c6\u7fa4\u5e94\u7528\u4ea4\u4ed8"),(0,n.kt)("p",null,"\u9762\u5411 Kubernetes \u7684\u591a\u73af\u5883\u3001\u591a\u96c6\u7fa4\u4ea4\u4ed8\u5df2\u662f\u4e00\u4e2a\u6807\u51c6\u6027\u9700\u6c42\u3002\u60a8\u6216\u8bb8\u662f\u9700\u8981\u73af\u5883\u9694\u79bb\uff0c\u5f00\u53d1\u3001\u9884\u53d1\u548c\u751f\u4ea7\u4e09\u5957\u96c6\u7fa4\uff1b\u6216\u8bb8\u662f\u9700\u8981\u4ea4\u4ed8\u4e0d\u540c\u7684\u5ba2\u6237\uff0c\u6bcf\u4e2a\u5ba2\u6237\u72ec\u7acb\u4e00\u5957\u96c6\u7fa4\uff1b\u6216\u8bb8\u662f\u9700\u8981\u4ea4\u4ed8\u5230\u4e0d\u540c\u533a\u57df\uff0c\u5728\u5317\u4eac\u3001\u5e7f\u5dde\u591a\u5957\u96c6\u7fa4\uff1b\u53c8\u6216\u8bb8\u60a8\u4e1a\u52a1\u89c4\u6a21\u5927\uff0c\u5355\u4e2a Kubernetes \u96c6\u7fa4\u65e0\u6cd5\u6ee1\u8db3\u60a8\u7684\u8d44\u6e90\u9700\u6c42\u3002\u4ece 1.1 \u7248\u672c\u5f00\u59cb\uff0cKubeVela \u4e0d\u4ec5\u5b9e\u73b0\u4e86\u591a\u96c6\u7fa4\u7684\u5e94\u7528\u4ea4\u4ed8\uff0c\u5e76\u4e14\u65e2\u53ef\u4ee5\u72ec\u7acb\u5de5\u4f5c\u76f4\u63a5\u7eb3\u7ba1\u591a\u4e2a\u96c6\u7fa4\uff0c\u4e5f\u53ef\u4ee5\u96c6\u6210 OCM\u3001Karmada \u7b49\u5404\u7c7b\u591a\u96c6\u7fa4\u7ba1\u7406\u5de5\u5177\u6765\u8fdb\u884c\u66f4\u590d\u6742\u7684\u4ea4\u4ed8\u52a8\u4f5c\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.kubevela.net/images/deploy_cloud.gif",alt:null}),"\n",(0,n.kt)("em",{parentName:"p"},"\u591a\u96c6\u7fa4\u5e94\u7528\u53d1\u5e03Demo(\u7ed3\u5408Workflow)")),(0,n.kt)("p",null,"\u5728\u4e0a\u8ff0\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c31\u5c06\u4e00\u4e2a\u5e94\u7528\u5dee\u5f02\u5316\u7684\u4ea4\u4ed8\u4e86\u5230\u4e0d\u540c\u7684\u96c6\u7fa4\u73af\u5883\u4e2d\u3002\u8fd9\u79cd\u201c\u4ea4\u4ed8\u5dee\u5f02\u201d\u5728 KubeVela \u4e2d\u5c5e\u4e8e\u4ea4\u4ed8\u7b56\u7565\uff08Policy\uff09\u7684\u4e00\u79cd\uff0c\u5b83\u53ef\u4ee5\u662f\u73af\u5883\u914d\u7f6e\u5dee\u5f02\u3001\u7ec4\u4ef6\u6570\u91cf\u5dee\u5f02\u7b49\u7b49\u3002\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0cKubeVela \u652f\u6301 Kustomize \u98ce\u683c\u7684 Patch \u6765\u5b9a\u4e49\u8fd9\u79cd\u5dee\u5f02\uff0c\u4f46\u53c8\u4e0d\u9700\u8981\u7528\u6237\u5b66\u4e60\u4efb\u4f55 Kustomize \u76f8\u5173\u7684\u77e5\u8bc6\u3002\u5728\u591a\u96c6\u7fa4\u4ea4\u4ed8\u7b56\u7565\u7684\u57fa\u7840\u4e0a\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49 Workflow \u6765\u63a7\u5236\u4ea4\u4ed8\u5230\u4e0d\u540c\u96c6\u7fa4\u7684\u987a\u5e8f\u3001\u6761\u4ef6\u7b49\u5de5\u4f5c\u6d41\u6b65\u9aa4\u3002"),(0,n.kt)("p",null,"\u8fdb\u4e00\u6b65\u5c1d\u8bd5\u591a\u96c6\u7fa4\u5e94\u7528\u4ea4\u4ed8\uff0c\u8bf7\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"https://kubevela.io/docs/case-studies/multi-cluster"},"\u6700\u4f73\u5b9e\u8df5\u6587\u6863")),(0,n.kt)("p",null,"\u540e\u7eed\u7248\u672c\u4e2d\uff0cKubeVela \u5728\u591a\u96c6\u7fa4\u4ea4\u4ed8\u65b9\u9762\u4f1a\u63d0\u4f9b\u5168\u5c40\u6d41\u91cf\u5206\u53d1\u3001\u591a\u96c6\u7fa4\u81ea\u52a8\u8c03\u5ea6\u7b56\u7565\u3001\u591a\u96c6\u7fa4\u7070\u5ea6\u53d1\u5e03\u7b49\u66f4\u591a\u9ad8\u7ea7\u7279\u6027\u7279\u6027\u3002"),(0,n.kt)("h3",{id:"\u5b9a\u4e49\u4ea4\u4ed8\u5de5\u4f5c\u6d41\uff08workflow\uff09"},"\u5b9a\u4e49\u4ea4\u4ed8\u5de5\u4f5c\u6d41\uff08Workflow\uff09"),(0,n.kt)("p",null,"Workflow \u7684\u80cc\u666f\u524d\u9762\u5df2\u7ecf\u63d0\u5230\u8fc7\uff0c\u800c\u5b83\u7684\u5177\u4f53\u4f7f\u7528\u573a\u666f\u5219\u5f88\u591a\uff0c\u6bd4\u5982\uff1a\u5728\u591a\u73af\u5883\u5e94\u7528\u4ea4\u4ed8\u573a\u666f\u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u5b9a\u4e49\u4e0d\u540c\u7684\u73af\u5883\u4ea4\u4ed8\u7684\u987a\u5e8f\u548c\u524d\u7f6e\u6761\u4ef6\uff1b\u518d\u4f8b\u5982\u6700\u7b80\u5355\u7684\u9700\u6c42\uff0c\u90e8\u7f72\u5b8c\u6210\u540e\u9700\u8981\u901a\u77e5\u5f00\u53d1\u8005\uff1b\u518d\u4f8b\u5982\u6211\u4eec\u9700\u8981\u63a7\u5236\u7070\u5ea6\u53d1\u5e03\u7684\u8fdb\u7a0b\uff0c\u6d41\u91cf\u5207\u6362\u7684\u6bd4\u4f8b\uff0c\u518d\u4f8b\u5982\u6211\u4eec\u9700\u8981\u5e94\u7528\u90e8\u7f72\u5b8c\u6210\u540e\u6267\u884cE2E\u6d4b\u8bd5\u7b49\u3002KubeVela \u7684\u5de5\u4f5c\u6d41\u662f\u9762\u5411\u6301\u7eed\u4ea4\u4ed8\uff08CD\uff09\u8fc7\u7a0b\u7684\uff0c\u540c\u65f6\u4e5f\u662f\u58f0\u660e\u5f0f\u7684\uff0c\u6240\u4ee5\u5b83\u65e2\u53ef\u4ee5\u4f5c\u4e3a CD \u7cfb\u7edf\u76f4\u63a5\u540c CI \u7cfb\u7edf\uff08\u6bd4\u5982 Jenkins \u7b49\uff09\u5bf9\u63a5\uff0c\u4e5f\u53ef\u4ee5\u5d4c\u5165\u5230\u73b0\u6709 CI/CD \u4f53\u7cfb\u4e2d\u4f5c\u4e3a\u589e\u5f3a\u548c\u8865\u5145\uff0c\u843d\u5730\u65b9\u5f0f\u975e\u5e38\u7075\u6d3b\u3002"),(0,n.kt)("p",null,"\u5728\u6a21\u578b\u4e0a\uff0cWorkflow \u662f\u7531\u4e00\u7cfb\u5217 Step \u7ec4\u6210\u7684\uff0c\u800c\u5728\u5b9e\u73b0\u4e0a\uff0c\u6bcf\u4e00\u4e2a Step \u5219\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u80fd\u529b\u6a21\u5757\uff0c\u7531\u5176\u5177\u4f53\u7684\u7c7b\u578b\u548c\u53c2\u6570\u6765\u51b3\u5b9a\u5176\u5177\u4f53\u6b65\u9aa4\u7684\u80fd\u529b\u3002\u57281.1 \u7248\u672c\u4e2d\uff0cKubeVela \u5185\u7f6e\u7684 Step \u5df2\u7ecf\u6bd4\u8f83\u4e30\u5bcc\uff0c\u6b22\u8fce\u5927\u5bb6\u8bd5\u7528\u3001\u53cd\u9988\u3002\u5e76\u4e14\uff0cStep \u975e\u5e38\u5bb9\u6613\u6269\u5c55\uff0c\u4e5f\u80fd\u591f\u8ba9\u5927\u5bb6\u53bb\u5bf9\u63a5\u5df2\u6709\u7684\u5e73\u53f0\u80fd\u529b\uff0c\u505a\u5230\u65e0\u7f1d\u8fc1\u79fb\u3002"),(0,n.kt)("h3",{id:"\u901a\u8fc7-service-mesh-\u6765\u5b9e\u73b0\u7070\u5ea6\u53d1\u5e03\u7b49\u9ad8\u7ea7\u8fd0\u7ef4\u52a8\u4f5c"},"\u901a\u8fc7 Service Mesh \u6765\u5b9e\u73b0\u7070\u5ea6\u53d1\u5e03\u7b49\u9ad8\u7ea7\u8fd0\u7ef4\u52a8\u4f5c"),(0,n.kt)("p",null,"\u901a\u8fc7\u7edf\u4e00\u7684\u5e94\u7528\u6a21\u578b\u96c6\u6210\u5404\u79cd\u4e0d\u540c\u7684\u5e95\u5c42\u80fd\u529b\uff0c\u4f9d\u7136\u662f KubeVela \u6700\u5927\u7684\u4eae\u70b9\u4e4b\u4e00\u3002\u5177\u4f53\u6765\u8bf4\uff0cKubeVela \u901a\u8fc7 OAM \u6a21\u578b\u53ef\u4ee5\u4f7f\u5f97\u7528\u6237\u4e0d\u9700\u8981\u4efb\u4f55\u201c\u810f\u4e71\u5dee\u201d\u7684\u80f6\u6c34\u4ee3\u7801\u6216\u8005\u811a\u672c\u5c31\u53ef\u4ee5\u540c\u4efb\u4f55\u4e91\u539f\u751f\u6280\u672f\u6216\u5de5\u5177\uff08\u6bd4\u5982 Service Mesh\uff09\u5b9e\u73b0\u96c6\u6210\uff0c\u4ece\u800c\u4e3a\u4ea4\u4ed8\u8fc7\u7a0b\u5e26\u6765\u66f4\u591a\u7684\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u7ef4\u80fd\u529b\u3002\u5728 1.1 \u7248\u672c\u4e2d\uff0cKubeVela \u5df2\u7ecf\u5185\u7f6e\u4e86\u4e0e Istio \u96c6\u6210\u7684\u6848\u4f8b\u3002\u7cfb\u7edf\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7 KubeVela \u7684\u63d2\u4ef6\u7ba1\u7406\u673a\u5236\u4fbf\u6377\u7684\u542f\u7528 Istio \u63d2\u4ef6 \u3002KubeVela \u5219\u8d1f\u8d23\u5c06 Istio \u7684\u80fd\u529b\u8fdb\u884c\u5c01\u88c5\u548c\u62bd\u8c61\u540e\u4ea4\u4ed8\u7ed9\u7528\u6237\u4f7f\u7528\uff0c\u4f7f\u5f97\u7528\u6237\u65e0\u9700\u6210\u4e3a Istio \u4e13\u5bb6\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2a\u91d1\u4e1d\u96c0\u53d1\u5e03\u7684\u573a\u666f\uff08KubeVela \u4f1a\u4e3a\u7528\u6237\u63d0\u4f9b\u4e00\u4e2a\u5c01\u88c5\u597d\u7684 Rollout \u8fd0\u7ef4\u7279\u5f81\uff09\u3002\u8fd9\u79cd\u4f53\u9a8c\u5f00\u53d1\u8005\u6765\u8bf4\u662f\u76f8\u5f53\u53cb\u597d\u7684\uff0c\u4ed6\u65e2\u65e0\u9700\u82b1\u8d39\u5927\u91cf\u7684\u65f6\u95f4\u53bb\u5b66\u4e60\u548c\u638c\u63e1Istio\u7684\u4f7f\u7528\u548c\u914d\u7f6e\uff0c\u4e5f\u65e0\u9700\u5173\u6ce8 Istio \u4f53\u7cfb\u548c\u5404\u79cd\u4e91\u4e0a\u6258\u7ba1\u7248 Service Mesh \u7684\u5dee\u5f02\uff0c\u5f7b\u5e95\u89e3\u8026\u5382\u5546\u9501\u5b9a\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.kubevela.net/images/rollout.gif",alt:null}),"\n",(0,n.kt)("em",{parentName:"p"},"\u5e94\u7528\u6e10\u8fdb\u5f0f\u53d1\u5e03Demo(\u7ed3\u5408Workflow)")),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/workflow/canary-rollout"},"Rollout Demo"),"\u5b9e\u73b0\u56fe\u793a\u6548\u679c\uff0c\u6216\u53c2\u8003\u6700\u4f73\u5b9e\u8df5 ",(0,n.kt)("a",{parentName:"p",href:"https://kubevela.io/docs/case-studies/canary-blue-green/"},"\u57fa\u4e8e Istio \u7684\u6e10\u8fdb\u5f0f\u53d1\u5e03"),"\uff0c\u4f53\u9a8c\u5b8c\u6574\u7684\u5fae\u670d\u52a1\u6e10\u8fdb\u5f0f\u53d1\u5e03\u548c\u56de\u6eda\u3002"),(0,n.kt)("h3",{id:"\u4ee5\u5e94\u7528\u4e3a\u4e2d\u5fc3\u7684\u4e91\u8d44\u6e90\u4ea4\u4ed8"},"\u4ee5\u5e94\u7528\u4e3a\u4e2d\u5fc3\u7684\u4e91\u8d44\u6e90\u4ea4\u4ed8"),(0,n.kt)("p",null,"\u4e91\u5382\u5546\u8d44\u6e90\u5df2\u7ecf\u6210\u4e3a\u5927\u591a\u6570\u5e94\u7528\u5f00\u53d1\u8005\u751f\u4ea7\u4e1a\u52a1\u4f1a\u91c7\u7528\u7684\u8ba1\u7b97\u8d44\u6e90\uff0c\u5b83\u5305\u62ec\u4e86\u57fa\u7840\u8bbe\u65bd\u3001SaaS\u670d\u52a1\u3001\u4e2d\u95f4\u4ef6\u670d\u52a1\u3001\u6258\u7ba1\u670d\u52a1\u7b49\u3002\u5bf9\u6b64\uff0cKubeVela \u7684\u8bbe\u8ba1\u662f\u4ece\u201c\u4ee5\u5e94\u7528\u4e3a\u4e2d\u5fc3\u201d\u7684\u89c6\u89d2\u51fa\u53d1\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u4ee5\u5b8c\u5168 Serverless \u7684\u65b9\u5f0f\u66f4\u597d\u3001\u66f4\u65b9\u4fbf\u7684\u7ba1\u7406\u4e91\u8d44\u6e90\uff0c\u800c\u4e0d\u662f\u75b2\u4e8e\u5e94\u4ed8\u5404\u79cd\u4e0d\u540c\u7684\u4e91\u4ea7\u54c1\u548c\u63a7\u5236\u53f0\u3002\u5728\u5b9e\u73b0\u4e0a\uff0cKubeVela \u5185\u7f6e\u96c6\u6210\u4e86 Terraform \u6765\u4f5c\u4e3a\u4e91\u8d44\u6e90\u7684\u7f16\u6392\u5de5\u5177\uff0c\u5e76\u4e14\u80fd\u591f\u4ee5\u7edf\u4e00\u7684\u5e94\u7528\u6a21\u578b\u652f\u6301\u5404\u4e2a\u4e91\u5382\u5546\u4e0a\u767e\u79cd\u4e0d\u540c\u7c7b\u578b\u4e91\u670d\u52a1\u7684\u90e8\u7f72\u3001\u7ed1\u5b9a\u548c\u7ba1\u7406\u3002"),(0,n.kt)("p",null,"\u5728\u4f7f\u7528\u4e0a\uff0c\u6211\u4eec\u76ee\u524d\u5c06\u4e91\u8d44\u6e90\u5206\u4e3a\u4ee5\u4e0b\u4e09\u7c7b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u7ec4\u4ef6\uff1a\u6bd4\u5982\u6570\u636e\u5e93\u3001\u4e2d\u95f4\u4ef6\u3001SaaS\u670d\u52a1\u7b49\u3002\u6bd4\u5982 KubeVela \u4e2d\u7684 Alibaba-RDS\u670d\u52a1\u5c31\u5c5e\u4e8e\u8fd9\u79cd\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u8fd0\u7ef4\u7279\u5f81\uff1a\u6bd4\u5982\u65e5\u5fd7\u5206\u6790\u3001\u76d1\u63a7\u53ef\u89c6\u5316\u3001\u76d1\u63a7\u62a5\u8b66\u7b49\u670d\u52a1\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u5e94\u7528\u8fd0\u884c\u57fa\u7840\u8bbe\u65bd\uff1a\u6bd4\u5982 Kubernetes \u6258\u7ba1\u96c6\u7fa4\u3001SLB \u8d1f\u8f7d\u5747\u8861\u3001NAS\u6587\u4ef6\u5b58\u50a8\u670d\u52a1\u7b49\u3002")),(0,n.kt)("p",null,"\u5728\u540e\u7eed\u7684\u7248\u672c\uff0cKubeVela \u4f1a\u8fdb\u4e00\u6b65\u589e\u52a0\u66f4\u52a0\u4e30\u5bcc\u7684\u4e91\u670d\u52a1\u4f7f\u7528\u573a\u666f\uff0c\u5bf9\u5404\u4e2a\u4e91\u5382\u5546\u5206\u6563\u7684\u8d44\u6e90\u548c\u8ba1\u7b97\u80fd\u529b\u8fdb\u884c\u6709\u6548\u6574\u5408\uff0c\u964d\u4f4e\u5f00\u53d1\u8005\u7684\u4f7f\u7528\u95e8\u69db\u548c\u670d\u52a1\u89e6\u8fbe\u8def\u5f84\uff0c\u5b9e\u73b0\u8d44\u6e90\u7684\u590d\u7528\u548c\u6709\u6548\u3001\u5b89\u5168\u7684\u56de\u6536\u673a\u5236\uff0c\u964d\u4f4e\u7528\u6237\u8d39\u7528\u3002KubeVela \u7684 Terraform \u4e91\u670d\u52a1\u7ba1\u7406\u662f\u76ee\u524d\u793e\u533a\u4e2d\u975e\u5e38\u706b\u70ed\u7684\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u6709\u5927\u91cf\u6765\u81ea\u5317\u7f8e\u3001\u6b27\u6d32\u7684\u8d21\u732e\u8005\u53c2\u4e0e\u5176\u4e2d\uff0c\u975e\u5e38\u6b22\u8fce\u5927\u5bb6\u8bd5\u7528\u3001\u8d21\u732e\u548c\u63d0\u51fa\u9700\u6c42\u3002"),(0,n.kt)("h3",{id:"\u66f4\u5bb9\u6613\u843d\u5730\u7684-gitops-\u6301\u7eed\u4ea4\u4ed8\u5b9e\u8df5"},"\u66f4\u5bb9\u6613\u843d\u5730\u7684 GitOps \u6301\u7eed\u4ea4\u4ed8\u5b9e\u8df5"),(0,n.kt)("p",null,"KubeVela \u4f5c\u4e3a\u4e00\u4e2a\u58f0\u660e\u5f0f\u7684\u5e94\u7528\u4ea4\u4ed8\u63a7\u5236\u5e73\u9762\uff0c\u5929\u7136\u5c31\u53ef\u4ee5\u4ee5 GitOps \u7684\u65b9\u5f0f\u8fdb\u884c\u4f7f\u7528\uff08\u53ef\u5355\u72ec\u4f7f\u7528\uff0c\u4e5f\u53ef\u914d\u5408 ArgoCD \u7b49\u5de5\u5177\uff09\uff0c\u5e76\u4e14\u80fd\u591f\u4e3a GitOps \u573a\u666f\u63d0\u4f9b\u66f4\u591a\u7aef\u5230\u7aef\u7684\u80fd\u529b\u548c\u589e\u5f3a\u3001\u5e2e\u52a9 GitOps \u7406\u5ff5\u4ee5\u66f4\u52a0\u4eb2\u6c11\u548c\u89e3\u51b3\u5b9e\u9645\u95ee\u9898\u7684\u65b9\u5f0f\u5728\u4f01\u4e1a\u4e2d\u843d\u5730\u3002\u8fd9\u4e9b\u80fd\u529b\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u5e94\u7528\u4ea4\u4ed8\u5de5\u4f5c\u6d41\uff08CD \u6d41\u6c34\u7ebf\uff09",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5373\uff1aKubeVela \u652f\u6301\u5728 GitOps \u6a21\u5f0f\u4e2d\u63cf\u8ff0\u8fc7\u7a0b\u5f0f\u7684\u5e94\u7528\u4ea4\u4ed8\u6d41\u7a0b\uff0c\u800c\u4e0d\u53ea\u662f\u7b80\u5355\u7684\u58f0\u660e\u7ec8\u6001\uff1b"))),(0,n.kt)("li",{parentName:"ul"},"\u5904\u7406\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u7684\u5404\u79cd\u4f9d\u8d56\u5173\u7cfb\u548c\u62d3\u6251\u7ed3\u6784\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u73b0\u6709\u5404\u79cd GitOps \u5de5\u5177\u7684\u8bed\u4e49\u4e4b\u4e0a\u63d0\u4f9b\u7edf\u4e00\u7684\u4e0a\u5c42\u62bd\u8c61\uff0c\u7b80\u5316\u5e94\u7528\u4ea4\u4ed8\u4e0e\u7ba1\u7406\u8fc7\u7a0b\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u8fdb\u884c\u4e91\u670d\u52a1\u7684\u58f0\u660e\u3001\u90e8\u7f72\u548c\u670d\u52a1\u7ed1\u5b9a\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u4ea4\u4ed8\u7b56\u7565\uff08\u91d1\u4e1d\u96c0\u3001\u84dd\u7eff\u53d1\u5e03\u7b49\uff09\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u6df7\u5408\u73af\u5883/\u591a\u96c6\u7fa4\u90e8\u7f72\u7b56\u7565\uff08\u653e\u7f6e\u89c4\u5219\u3001\u96c6\u7fa4\u8fc7\u6ee4\u89c4\u5219\u3001\u8de8\u73af\u5883 Promotion \u7b49\uff09\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u591a\u73af\u5883\u4ea4\u4ed8\u4e2d\u63d0\u4f9b Kustomize \u98ce\u683c\u7684 Patch \u6765\u63cf\u8ff0\u90e8\u7f72\u5dee\u5f02\uff0c\u800c\u7528\u6237\u65e0\u9700\u5b66\u4e60\u4efb\u4f55 Kustomize \u672c\u8eab\u7684\u7ec6\u8282\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u2026\u2026 \u7b49\u7b49\u3002")),(0,n.kt)("p",null,"\u4f7f\u7528 KubeVela \u8df5\u884c GitOps \u7406\u5ff5\uff0c\u8bf7\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"https://kubevela.io/docs/case-studies/gitops/"},"GitOps \u6700\u4f73\u5b9e\u8df5"),"\u3002"),(0,n.kt)("h2",{id:"kubevela-\u793e\u533a\u4e0e\u751f\u6001"},"KubeVela \u793e\u533a\u4e0e\u751f\u6001"),(0,n.kt)("p",null,"KubeVela \u662f\u4e00\u4e2a\u4ece\u7b2c\u4e00\u5929\u5c31\u8bde\u751f\u5728\u4e91\u539f\u751f\u793e\u533a\u7684\u5f00\u6e90\u9879\u76ee\u3002\u622a\u6b62\u76ee\u524d\uff0cKubeVela \u73b0\u5df2\u88ab Salesforce\u3001\u5b57\u8282\u8df3\u52a8\u3001\u817e\u8baf\u3001\u7f51\u6613\u6e38\u620f\u7b49 35+ \u5bb6\u4e0d\u540c\u884c\u4e1a\u7684\u9886\u5148\u4f01\u4e1a\u5e94\u7528\u5728\u5b9e\u9645\u751f\u4ea7\u73af\u5883\uff0c\u5e2e\u52a9\u4ed6\u4eec\u5728\u4e0d\u540c\u573a\u666f\u4e0b\u5b9e\u73b0\u66f4\u9ad8\u6548\u7684\u4e91\u539f\u751f\u5e94\u7528\u7684\u4ea4\u4ed8\u548c\u7ba1\u7406\u3002\u800c KubeVela \u5728\u793e\u533a\u7528\u6237\u4e2d\u7684\u5927\u89c4\u6a21\u5b9e\u8df5\uff0c\u4e5f\u6b63\u5728\u4fc3\u8fdb OAM \u6210\u4e3a\u6df7\u5408\u4e91/\u591a\u4e91/\u5206\u5e03\u5f0f\u4e91\u9886\u57df\u5e94\u7528\u4ea4\u4ed8\u7684\u4e8b\u5b9e\u6807\u51c6\uff0c\u5e76\u5728\u5fae\u8f6f\u3001Oracle Cloud \u7b49\u591a\u5bb6\u56fd\u9645\u5382\u5546\u4e2d\u88ab\u91c7\u7528\u3002\u8fd1\u65e5\uff0c\u4ee5 OAM \u6a21\u578b\u4e3a\u6838\u5fc3\u7684\u300a\u4e91\u8ba1\u7b97\u5f00\u653e\u5e94\u7528\u67b6\u6784\u300b\u6807\u51c6\u6587\u4ef6\u4e5f\u5df2\u7ecf\u7531\u963f\u91cc\u4e91\u8ba1\u7b97\u6709\u9650\u516c\u53f8\u3001\u4e2d\u56fd\u4fe1\u606f\u901a\u4fe1\u7814\u7a76\u9662\u7b49 10 \u4f59\u5bb6\u5355\u4f4d\u8054\u5408\u53d1\u8d77\u5e76\u5728\u201c\u4e91\u539f\u751f\u4ea7\u4e1a\u5927\u4f1a\u201d\u73b0\u573a\u53d1\u5e03\u3002"),(0,n.kt)("p",null,"\u5728\u672a\u6765\uff0c\u5728\u4e91\u539f\u751f\u793e\u533a\u548c CNCF \u5e94\u7528\u4ea4\u4ed8\u9886\u57df\u5de5\u4f5c\u7ec4\uff08TAG App Delivery\uff09\u7684\u5171\u540c\u63a8\u52a8\u4e0b\uff0cKubeVela \u5c06\u7ee7\u7eed\u5728\u4ea4\u4ed8\u5b9a\u4e49\u6807\u51c6\u5316\u3001\u8fd0\u7ef4\u80fd\u529b\u591a\u6837\u5316\u3001\u7ba1\u7406\u4f53\u7cfb\u751f\u6001\u5316\u4e09\u4e2a\u65b9\u9762\u53d1\u5c55\uff0c\u771f\u6b63\u5b9e\u73b0\u8ba9\u6df7\u5408\u73af\u5883\u4e0b\u7684\u5e94\u7528\u4ea4\u4ed8\u5c31\u50cf\u6211\u4eec\u4eca\u5929\u4f7f\u7528 App Store \u4e00\u6837\u7b80\u5355\u3002 \u6211\u4eec\u770b\u5230\u5f00\u6e90\u793e\u533a\u6b63\u5728\u56f4\u7ed5 KubeVela \u7684\u4ea4\u4ed8\u6a21\u578b\u63d0\u51fa\u66f4\u591a\u6807\u51c6\u5316\u7ec4\u4ef6\u3001\u8fd0\u7ef4\u7279\u5f81\u3001\u63d2\u4ef6\u3001\u4ea4\u4ed8 Step \u7b49\u80fd\u529b\uff0c\u4e5f\u975e\u5e38\u6b22\u8fce\u65b0\u8001\u793e\u533a\u7528\u6237\u524d\u5f80\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/issues/1662"},"https://github.com/oam-dev/kubevela/issues/1662")," \u8fdb\u884c\u767b\u8bb0\u3001\u8ba9\u793e\u533a\u542c\u5230\u6bcf\u4e00\u4f4d\u53c2\u4e0e\u8005\u7684\u58f0\u97f3\u3002"),(0,n.kt)("h2",{id:"\u540e\u7eed\u7248\u672c\u89c4\u5212"},"\u540e\u7eed\u7248\u672c\u89c4\u5212"),(0,n.kt)("p",null,"\u6253\u9020\u5929\u7136\u9762\u5411\u6df7\u5408\u73af\u5883\u7684\u4f01\u4e1a\u5e94\u7528\u64cd\u4f5c\u7cfb\u7edf\u3001\u8ba9\u5f00\u53d1\u8005\u4eab\u53d7\u4ea4\u4ed8\u5e94\u7528\u7684\u8fc7\u7a0b\uff0c\u8fd9\u662f Kubevela \u9879\u76ee\u7684\u76ee\u6807\u548c\u613f\u666f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1.0 \u7248\u672c\uff0cKubeVela \u5b9e\u73b0\u4e86\u57fa\u7840\u7684\u5e94\u7528\u4ea4\u4ed8\u6838\u5fc3\u6a21\u578b\uff0c\u89e3\u51b3\u4e86\u201d\u4ea4\u4ed8\u4e00\u5207\u201c\u7684\u5173\u952e\u80fd\u529b\u95ee\u9898\uff0c\u6253\u9020\u4e86\u53ef\u7f16\u7a0b\u7684\u5e94\u7528\u4ea4\u4ed8\u548c\u7ba1\u7406\u5f15\u64ce\u3002"),(0,n.kt)("li",{parentName:"ul"},"1.1 \u7248\u672c\uff0cKubeVela \u8fdb\u4e00\u6b65\u5b8c\u5584\u4e86\u9762\u5411\u591a\u73af\u5883\u5e94\u7528\u4ea4\u4ed8\u7684\u80fd\u529b\u96c6\u548c\u5de5\u4f5c\u6d41\uff0c\u5e76\u4e14\u8ba9\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u8fdb\u884c\u5b8c\u6574\u4f53\u9a8c\uff0c\u5e76\u4e14\u4e0a\u7ebf\u4e86\u5b8c\u6574\u7684\u4e2d\u6587\u6587\u6863\u3002")),(0,n.kt)("p",null,"\u800c\u5728\u63a5\u4e0b\u6765\u7684 1.2 \u7248\u672c\uff0cKubeVela \u5c06\u5e26\u6765\u4ee5\u5e94\u7528\u4e3a\u4e2d\u5fc3\u7684\u63a7\u5236\u9762\u677fUI\uff0c\u5b9e\u73b0\u4fbf\u6377\u7684\u4f01\u4e1a\u5e94\u7528\u7ec4\u88c5\u3001\u5206\u53d1\u3001\u4ea4\u4ed8\u6d41\u7a0b\uff0c\u63d0\u4f9b\u7ed9\u5f00\u53d1\u8005\u66f4\u7b80\u5355\u7684\u5e94\u7528\u4ea4\u4ed8\u4f53\u9a8c\uff0c\u540c\u65f6\u8986\u76d6\u8fb9\u7f18\u5e94\u7528\u4ea4\u4ed8\u7b49\u66f4\u591a\u7684\u4f7f\u7528\u573a\u666f\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://intranetproxy.alipay.com/skylark/lark/0/2021/png/162010/1633667433567-6e740efc-a94f-4cdc-bfda-5703a0b704ab.png",alt:"what-is"})," "),(0,n.kt)("p",null,"\u66f4\u591a\u9879\u76ee Roadmap \u4fe1\u606f\uff0c\u8be6\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"https://kubevela.io/docs/roadmap/README"},"Kubevela RoadMap")),(0,n.kt)("h2",{id:"\u53c2\u8003\u4fe1\u606f"},"\u53c2\u8003\u4fe1\u606f"),(0,n.kt)("p",null,"\u7acb\u5373\u5b89\u88c5\u4f7f\u7528\uff0c\u8bf7\u53c2\u8003\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://kubevela.io/docs/install"},"\u5b89\u88c5\u6307\u5357")),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u6750\u6599\u4e86\u89e3\u66f4\u591a\u5173\u4e8e KubeVela \u4ee5\u53ca OAM \u9879\u76ee\u7684\u7ec6\u8282\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9879\u76ee\u4ee3\u7801\u5e93\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela"},"https://github.com/oam-dev/kubevela")," \u6b22\u8fce Star/Watch/Fork\uff01"),(0,n.kt)("li",{parentName:"ul"},"\u9879\u76ee\u5b98\u65b9\u4e3b\u9875\u4e0e\u6587\u6863\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://kubevela.io"},"https://kubevela.io")," \uff0c\u4ece1.1\u7248\u672c\u5f00\u59cb\uff0c\u5df2\u63d0\u4f9b\u4e2d\u6587\u3001\u82f1\u6587\u6587\u6863\uff0c\u66f4\u591a\u8bed\u8a00\u6587\u6863\u6b22\u8fce\u5f00\u53d1\u8005\u8fdb\u884c\u7ffb\u8bd1\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9879\u76ee\u9489\u9489\u7fa4\uff1a23310022\uff1bSlack\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://cloud-native.slack.com/archives/C01BLQ3HTJA"},"CNCF #kubevela Channel")),(0,n.kt)("li",{parentName:"ul"},"\u52a0\u5165\u5fae\u4fe1\u7fa4\uff1a\u8bf7\u5148\u6dfb\u52a0\u4ee5\u4e0b maintainer \u5fae\u4fe1\u53f7\uff0c\u8868\u660e\u8fdb\u5165KubeVela\u7528\u6237\u7fa4\uff1a",(0,n.kt)("img",{src:"https://static.kubevela.net/images/barnett-wechat.jpg",width:"200"}))))}s.isMDXComponent=!0}}]);