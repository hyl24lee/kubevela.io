(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6154],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75826:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),o={title:"\u57fa\u4e8e Istio \u7684\u6e10\u8fdb\u5f0f\u53d1\u5e03"},i={unversionedId:"case-studies/canary-blue-green",id:"case-studies/canary-blue-green",isDocsHomePage:!1,title:"\u57fa\u4e8e Istio \u7684\u6e10\u8fdb\u5f0f\u53d1\u5e03",description:"\u7b80\u4ecb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/case-studies/canary-blue-green.md",sourceDirName:"case-studies",slug:"/case-studies/canary-blue-green",permalink:"/zh/docs/next/case-studies/canary-blue-green",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/case-studies/canary-blue-green.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1633759950,formattedLastUpdatedAt:"2021/10/9",frontMatter:{title:"\u57fa\u4e8e Istio \u7684\u6e10\u8fdb\u5f0f\u53d1\u5e03"},sidebar:"docs",previous:{title:"\u521d\u59cb\u5316\u73af\u5883",permalink:"/zh/docs/next/case-studies/initialize-env"},next:{title:"\u591a\u96c6\u7fa4\u5e94\u7528\u4ea4\u4ed8",permalink:"/zh/docs/next/case-studies/multi-cluster"}},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",children:[]},{value:"\u521d\u6b21\u90e8\u7f72",id:"\u521d\u6b21\u90e8\u7f72",children:[]},{value:"\u91d1\u4e1d\u96c0\u53d1\u5e03",id:"\u91d1\u4e1d\u96c0\u53d1\u5e03",children:[{value:"\u7ee7\u7eed\u5b8c\u6210\u5168\u91cf\u53d1\u5e03",id:"\u7ee7\u7eed\u5b8c\u6210\u5168\u91cf\u53d1\u5e03",children:[]},{value:"\u7ec8\u6b62\u53d1\u5e03\u5de5\u4f5c\u6d41\u5e76\u56de\u6eda",id:"\u7ec8\u6b62\u53d1\u5e03\u5de5\u4f5c\u6d41\u5e76\u56de\u6eda",children:[]}]}],p={toc:s};function u(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"KubeVela \u540e\u7684\u5e94\u7528\u4ea4\u4ed8\u6a21\u578b\uff08OAM\uff09\u662f\u4e00\u4e2a\u4ece\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u4e0a\u90fd\u9ad8\u5ea6\u53ef\u6269\u5c55\u7684\u6a21\u578b\u3002\u56e0\u6b64\uff0cKubeVela \u4e0d\u9700\u8981\u4efb\u4f55\u201c\u810f\u4e71\u5dee\u201d\u7684\u80f6\u6c34\u4ee3\u7801\u6216\u8005\u811a\u672c\u5c31\u53ef\u4ee5\u540c\u4efb\u4f55\u4e91\u539f\u751f\u6280\u672f\u548c\u5de5\u5177\uff08\u6bd4\u5982 Service Mesh\uff09\u5b9e\u73b0\u96c6\u6210\uff0c\u8ba9\u793e\u533a\u751f\u6001\u4e2d\u5404\u79cd\u5148\u8fdb\u6280\u672f\u7acb\u523b\u4e3a\u4f60\u7684\u5e94\u7528\u4ea4\u4ed8\u52a9\u4e0a\u201c\u4e00\u81c2\u4e4b\u529b\u201d\u3002"),(0,l.kt)("p",null,"\u672c\u6587\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 KubeVela \u7ed3\u5408 ",(0,l.kt)("a",{parentName:"p",href:"https://istio.io/latest/"},"Istio")," \u8fdb\u884c\u590d\u6742\u7684\u91d1\u4e1d\u96c0\u53d1\u5e03\u6d41\u7a0b\u3002\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0cKubeVela \u4f1a\u5e2e\u52a9\u4f60\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06 Istio \u7684\u80fd\u529b\u8fdb\u884c\u5c01\u88c5\u548c\u62bd\u8c61\u540e\u518d\u4ea4\u4ed8\u7ed9\u7528\u6237\u4f7f\u7528\uff0c\u4f7f\u5f97\u7528\u6237\u65e0\u9700\u6210\u4e3a Istio \u4e13\u5bb6\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2a\u91d1\u4e1d\u96c0\u53d1\u5e03\u7684\u573a\u666f\uff08KubeVela \u4f1a\u4e3a\u4f60\u63d0\u4f9b\u4e00\u4e2a\u5c01\u88c5\u597d\u7684 Rollout \u8fd0\u7ef4\u7279\u5f81\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u58f0\u660e\u5f0f\u5de5\u4f5c\u6d41\u6765\u8bbe\u8ba1\u91d1\u4e1d\u96c0\u53d1\u5e03\u7684\u6b65\u9aa4\uff0c\u4ee5\u53ca\u6267\u884c\u53d1\u5e03/\u56de\u6eda\uff0c\u800c\u65e0\u9700\u901a\u8fc7\u201c\u810f\u4e71\u5dee\u201d\u7684\u811a\u672c\u6216\u8005\u4eba\u5de5\u7684\u65b9\u5f0f\u7ba1\u7406\u8fd9\u4e2a\u8fc7\u7a0b\u3002")),(0,l.kt)("p",null,"\u672c\u6848\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u7ecf\u5178\u7684\u5fae\u670d\u52a1\u5e94\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/examples/bookinfo/?ie=utf-8&hl=en&docs-search=Canary"},"bookinfo")," \u6765\u5c55\u793a\u4e0a\u8ff0\u91d1\u4e1d\u96c0\u53d1\u5e03\u8fc7\u7a0b\u3002"),(0,l.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684\u96c6\u7fa4\u5c1a\u672a\u5b89\u88c5 Istio\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5f00\u542f Istio \u96c6\u7fa4\u63d2\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable istio\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684\u96c6\u7fa4\u5df2\u7ecf\u5df2\u7ecf\u5b89\u88c5 Istio\uff0c\u4f60\u53ea\u9700 apply ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/vela-templates/addons/istio/definitions"},"\u8be5\u76ee\u5f55")," \u4e0b\u7684\u56db\u4e2a YAML \u6587\u4ef6\u6765\u8fbe\u5230\u548c\u4e0a\u9762\u5f00\u542f\u96c6\u7fa4\u63d2\u4ef6\u4e00\u6837\u7684\u6548\u679c"),(0,l.kt)("p",null,"\u56e0\u4e3a\u540e\u9762\u7684\u4f8b\u5b50\u8fd0\u884c\u5728 default namespace\uff0c\u9700\u8981\u4e3a default namespace \u6253\u4e0a Istio \u81ea\u52a8\u6ce8\u5165 sidecar \u7684\u6807\u7b7e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl label namespace default istio-injection=enabled\n")),(0,l.kt)("h2",{id:"\u521d\u6b21\u90e8\u7f72"},"\u521d\u6b21\u90e8\u7f72"),(0,l.kt)("p",null,"\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u90e8\u7f72 bookinfo \u5e94\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/canary-rollout-use-case/first-deploy.yaml\n")),(0,l.kt)("p",null,"\u8be5\u5e94\u7528\u7684\u7ec4\u4ef6\u67b6\u6784\u548c\u8bbf\u95ee\u5173\u7cfb\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"book-info-struct",src:n(99064).Z})),(0,l.kt)("p",null,"\u8be5\u5e94\u7528\u5305\u542b\u56db\u4e2a\u7ec4\u4ef6\uff0c\u5176\u4e2d\u7ec4\u4ef6 pruductpage, details, ratings \u5747\u914d\u7f6e\u4e86\u4e00\u4e2a\u66b4\u9732\u7aef\u53e3 (expose) \u8fd0\u7ef4\u7279\u5f81\u7528\u6765\u5728\u96c6\u7fa4\u5185\u66b4\u9732\u670d\u52a1\u3002\n\u7ec4\u4ef6 reviews \u914d\u7f6e\u4e86\u4e00\u4e2a\u91d1\u4e1d\u96c0\u6d41\u91cf\u53d1\u5e03 (canary-traffic) \u7684\u8fd0\u7ef4\u7279\u5f81\u3002"),(0,l.kt)("p",null,"productpage \u7ec4\u4ef6\u8fd8\u914d\u7f6e\u4e86\u4e00\u4e2a \u7f51\u5173\u5165\u53e3 (istio-gateway) \u7684\u8fd0\u7ef4\u7279\u5f81\uff0c\u4ece\u800c\u8ba9\u8be5\u7ec4\u4ef6\u63a5\u6536\u8fdb\u5165\u96c6\u7fa4\u7684\u6d41\u91cf\u3002\u8fd9\u4e2a\u8fd0\u7ef4\u7279\u5f81\u901a\u8fc7\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"gateway:ingressgateway")," \u6765\u4f7f\u7528 Istio \u7684\u9ed8\u8ba4\u7f51\u5173\u5b9e\u73b0\uff0c\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},'hosts: "*"')," \u6765\u6307\u5b9a\u643a\u5e26\u4efb\u610f host \u4fe1\u606f\u7684\u8bf7\u6c42\u5747\u53ef\u8fdb\u5165\u7f51\u5173\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'...\n    - name: productpage\n      type: webservice\n      properties:\n          image: docker.io/istio/examples-bookinfo-productpage-v1:1.16.2\n          port: 9080\n\n      traits:\n          - type: expose\n            properties:\n              port:\n                - 9080\n\n          - type: istio-gateway\n            properties:\n              hosts:\n                - "*"\n              gateway: ingressgateway\n              match:\n                - exact: /productpage\n                - prefix: /static\n                - exact: /login\n                - prefix: /api/v1/products\n              port: 9080\n...\n')),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u5c06\u7f51\u5173\u7684\u7aef\u53e3\u6620\u5c04\u5230\u672c\u5730\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward service/istio-ingressgateway -n istio-system 19082:80\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,l.kt)("a",{parentName:"p",href:"http://127.0.0.1:19082/productpage"},"http://127.0.0.1:19082/productpage")," \u5c06\u4f1a\u770b\u5230\u4e0b\u9762\u7684\u9875\u9762\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pic-v2",src:n(45499).Z})),(0,l.kt)("h2",{id:"\u91d1\u4e1d\u96c0\u53d1\u5e03"},"\u91d1\u4e1d\u96c0\u53d1\u5e03"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"reviews")," \u7ec4\u4ef6\u4e3a\u4f8b\uff0c\u6a21\u62df\u4e00\u6b21\u91d1\u4e1d\u96c0\u53d1\u5e03\u7684\u5b8c\u6574\u8fc7\u7a0b\uff0c\u53ca\u5148\u5347\u7ea7\u4e00\u90e8\u5206\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u540c\u65f6\u8c03\u6574\u6d41\u91cf\uff0c\u4ee5\u6b64\u8fbe\u5230\u6e10\u8fdb\u5f0f\u7070\u5ea6\u53d1\u5e03\u7684\u76ee\u7684\u3002"),(0,l.kt)("p",null,"\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u6765\u66f4\u65b0\u5e94\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/canary-rollout-use-case/rollout-v2.yaml\n")),(0,l.kt)("p",null,"\u8fd9\u6b21\u64cd\u4f5c\u66f4\u65b0\u4e86 reviews \u7ec4\u4ef6\u7684\u955c\u50cf\uff0c\u4ece\u4e4b\u524d\u7684 v2 \u5347\u7ea7\u5230\u4e86 v3\u3002\u540c\u65f6 reviews \u7ec4\u4ef6\u7684\u7070\u5ea6\u53d1\u5e03 (Rollout) \u8fd0\u7ef4\u7279\u5f81\u6307\u5b9a\u4e86\uff0c\u5347\u7ea7\u7684\u76ee\u6807\u5b9e\u4f8b\u4e2a\u6570\u4e3a 2 \u4e2a\uff0c\u5206\u4e24\u4e2a\u6279\u6b21\u5347\u7ea7\uff0c\u6bcf\u6279\u5347\u7ea7 1 \u4e2a\u5b9e\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"...\n    - name: reviews\n      type: webservice\n      properties:\n        image: docker.io/istio/examples-bookinfo-reviews-v3:1.16.2\n        port: 9080\n        volumes:\n          - name: wlp-output\n            type: emptyDir\n            mountPath: /opt/ibm/wlp/output\n          - name: tmp\n            type: emptyDir\n            mountPath: /tmp\n\n\n      traits:\n        - type: expose\n          properties:\n            port:\n              - 9080\n\n        - type: rollout\n          properties:\n            targetSize: 2\n            rolloutBatches:\n              - replicas: 1\n              - replicas: 1\n              \n        - type: canary-traffic\n          properties:\n            port: 9080\n...\n")),(0,l.kt)("p",null,"\u8fd9\u6b21\u66f4\u65b0\u8fd8\u4e3a\u5e94\u7528\u65b0\u589e\u4e86\u4e00\u4e2a\u5347\u7ea7\u7684\u6267\u884c\u5de5\u4f5c\u6d41\uff0c\u8be5\u5de5\u4f5c\u6d41\u5305\u542b\u4e09\u4e2a\u6b65\u9aa4\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b65\u901a\u8fc7\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"batchPartition")," \u7b49\u4e8e 0 \u8bbe\u7f6e\u53ea\u5347\u7ea7\u7b2c\u4e00\u6279\u6b21\u7684\u5b9e\u4f8b\u3002\u5e76\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"traffic.weightedTargets")," \u5c06 10% \u7684\u6d41\u91cf\u5207\u6362\u5230\u65b0\u7248\u672c\u7684\u5b9e\u4f8b\u4e0a\u9762\u3002"),(0,l.kt)("p",null,"\u5b8c\u6210\u7b2c\u4e00\u6b65\u4e4b\u540e\uff0c\u6267\u884c\u7b2c\u4e8c\u6b65\u5de5\u4f5c\u6d41\u4f1a\u8fdb\u5165\u6682\u505c\u72b6\u6001\uff0c\u7b49\u5f85\u7528\u6237\u6821\u9a8c\u670d\u52a1\u72b6\u6001\u3002"),(0,l.kt)("p",null,"\u5de5\u4f5c\u6d41\u7684\u7b2c\u4e09\u6b65\u662f\u5b8c\u6210\u5269\u4e0b\u5b9e\u4f8b\u7684\u5347\u7ea7\uff0c\u5e76\u5c06\u5168\u90e8\u6d41\u91cf\u5207\u6362\u81f4\u65b0\u7684\u7ec4\u4ef6\u7248\u672c\u4e0a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"...\n  workflow:\n    steps:\n      - name: rollout-1st-batch\n        type: canary-rollout\n        properties:\n          # just upgrade first batch of component\n          batchPartition: 0\n          traffic:\n            weightedTargets:\n              - revision: reviews-v1\n                weight: 90 # 90% shift to new version\n              - revision: reviews-v2\n                weight: 10 # 10% shift to new version\n\n      # give user time to verify part of traffic shifting to newRevision\n      - name: manual-approval\n        type: suspend\n\n      - name: rollout-rest\n        type: canary-rollout\n        properties:\n          # upgrade all batches of component\n          batchPartition: 1\n          traffic:\n            weightedTargets:\n              - revision: reviews-v2\n                weight: 100 # 100% shift to new version\n...\n")),(0,l.kt)("p",null,"\u66f4\u65b0\u5b8c\u6210\u4e4b\u540e\uff0c\u518d\u5728\u6d4f\u89c8\u5668\u591a\u6b21\u8bbf\u95ee\u4e4b\u524d\u7684\u7f51\u5740\u3002\u53d1\u73b0\u6709\u5927\u698210%\u7684\u6982\u7387\u4f1a\u770b\u5230\u4e0b\u9762\u8fd9\u4e2a\u65b0\u7684\u9875\u9762\uff0c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pic-v3",src:n(43964).Z})),(0,l.kt)("p",null,"\u53ef\u89c1\u65b0\u7248\u672c\u7684\u9875\u9762\u7531\u4e4b\u524d\u7684\u9ed1\u8272\u4e94\u89d2\u661f\u53d8\u6210\u4e86\u7ea2\u8272\u4e94\u89d2\u661f"),(0,l.kt)("h3",{id:"\u7ee7\u7eed\u5b8c\u6210\u5168\u91cf\u53d1\u5e03"},"\u7ee7\u7eed\u5b8c\u6210\u5168\u91cf\u53d1\u5e03"),(0,l.kt)("p",null,"\u5982\u679c\u5728\u4eba\u5de5\u6821\u9a8c\u65f6\uff0c\u53d1\u73b0\u670d\u52a1\u7b26\u5408\u9884\u671f\uff0c\u9700\u8981\u7ee7\u7eed\u6267\u884c\u5de5\u4f5c\u6d41\uff0c\u5b8c\u6210\u5168\u91cf\u53d1\u5e03\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u5b8c\u6210\u8fd9\u4e00\u64cd\u4f5c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela workflow resume book-info\n")),(0,l.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e0a\u7ee7\u7eed\u591a\u6b21\u8bbf\u95ee\u7f51\u9875\uff0c\u4f1a\u53d1\u73b0\u4e94\u89d2\u661f\u5c06\u4e00\u76f4\u662f\u7ea2\u8272\u7684\u3002"),(0,l.kt)("h3",{id:"\u7ec8\u6b62\u53d1\u5e03\u5de5\u4f5c\u6d41\u5e76\u56de\u6eda"},"\u7ec8\u6b62\u53d1\u5e03\u5de5\u4f5c\u6d41\u5e76\u56de\u6eda"),(0,l.kt)("p",null,"\u5982\u679c\u5728\u4eba\u5de5\u6821\u9a8c\u65f6\uff0c\u53d1\u73b0\u670d\u52a1\u4e0d\u7b26\u5408\u9884\u671f\uff0c\u9700\u8981\u7ec8\u6b62\u9884\u5148\u5b9a\u4e49\u597d\u7684\u53d1\u5e03\u5de5\u4f5c\u6d41\uff0c\u5e76\u5c06\u6d41\u91cf\u548c\u5b9e\u4f8b\u5207\u6362\u56de\u4e4b\u524d\u7684\u7248\u672c\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u5b8c\u6210\u8fd9\u4e00\u64cd\u4f5c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f  https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/canary-rollout-use-case/rollback.yaml\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u64cd\u4f5c\u5c06\u4f1a\u66f4\u65b0 Workflow \u5b9a\u4e49\u53bb\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"canary-rollback")," step\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  ...\n  workflow:\n    steps:\n      - name: rollback\n        type: canary-rollback\n")),(0,l.kt)("p",null,"\u6b64\u6b21\u64cd\u4f5c\u7684\u539f\u7406\u662f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u66f4\u65b0 Rollout \u5bf9\u8c61\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"targetRevisionName")," \u6210\u65e7\u7684\u7248\u672c\uff0c\u8fd9\u6837\u4f1a\u81ea\u52a8\u56de\u6eda\u6240\u6709\u5df2\u53d1\u5e03\u7684\u65b0\u7248\u672c\u7684\u5b9e\u4f8b\u56de\u5230\u65e7\u7248\u672c\uff0c\u5e76\u4e14\u4fdd\u6301\u8fd8\u6ca1\u5347\u7ea7\u7684\u65e7\u7248\u672c\u5b9e\u4f8b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u65b0 VirtualService \u5bf9\u8c61\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"route")," \u5b57\u6bb5\uff0c\u5c06\u6240\u6709\u6d41\u91cf\u5bfc\u5411\u65e7\u7684\u7248\u672c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u65b0 DestinationRule \u5bf9\u8c61\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"subset")," \u5b57\u6bb5\uff0c\u53ea\u5bb9\u7eb3\u65e7\u7684\u7248\u672c\u3002")),(0,l.kt)("p",null,"\u770b\u5230\u4e86\u5417\uff1f\u8fd9\u4e48\u591a\u64cd\u4f5c\uff0c\u4f46\u662f\u66b4\u9732\u7ed9\u7528\u6237\u7684\u53ea\u6709\u4e00\u4e2a\u7b80\u5355\u7684 step \u5b9a\u4e49\uff0c\u5168\u90e8\u590d\u6742\u7684\u64cd\u4f5c\u90fd\u5e76\u62bd\u8c61\u5316\u5728\u80cc\u540e\u81ea\u52a8\u8fd0\u884c\uff01"),(0,l.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e0a\u7ee7\u7eed\u8bbf\u95ee\u7f51\u5740\uff0c\u4f1a\u53d1\u73b0\u4e94\u89d2\u661f\u53c8\u53d8\u56de\u5230\u4e86\u9ed1\u8272\u3002"))}u.isMDXComponent=!0},99064:function(e,t,n){"use strict";t.Z=n.p+"assets/images/book-info-struct-a1463972b514f44c4539de316d9ea604.jpg"},45499:function(e,t,n){"use strict";t.Z=n.p+"assets/images/canary-pic-v2-ea721a9f475526add19e937768a6d833.jpg"},43964:function(e,t,n){"use strict";t.Z=n.p+"assets/images/canary-pic-v3-b7d54ecd0fe426cc3f34d9f7059120aa.jpg"}}]);