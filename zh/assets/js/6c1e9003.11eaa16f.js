(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3327],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(k,p(p({ref:t},c),{},{components:n})):r.createElement(k,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var u=2;u<o;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89602:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return i},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),p={title:"\u6dfb\u52a0 Traits"},l={unversionedId:"platform-engineers/kube/trait",id:"version-v1.0/platform-engineers/kube/trait",isDocsHomePage:!1,title:"\u6dfb\u52a0 Traits",description:"\u901a\u8fc7 Component\uff0cKubeVela \u4e2d\u7684\u6240\u6709 traits \u90fd\u53ef\u4ee5\u517c\u5bb9\u539f\u751f\u7684 K8s \u5bf9\u8c61\u6a21\u677f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/platform-engineers/kube/trait.md",sourceDirName:"platform-engineers/kube",slug:"/platform-engineers/kube/trait",permalink:"/zh/docs/platform-engineers/kube/trait",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/kube/trait.md",version:"v1.0",lastUpdatedBy:"guoxudong",lastUpdatedAt:1622708793,formattedLastUpdatedAt:"2021/6/3",frontMatter:{title:"\u6dfb\u52a0 Traits"},sidebar:"version-v1.0/docs",previous:{title:"How-to",permalink:"/zh/docs/platform-engineers/kube/component"},next:{title:"Crossplane",permalink:"/zh/docs/platform-engineers/cloud-services"}},i=[{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",children:[]},{value:"\u66f4\u65b0\u5e94\u7528",id:"\u66f4\u65b0\u5e94\u7528",children:[]}],u={toc:i};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u901a\u8fc7 Component\uff0cKubeVela \u4e2d\u7684\u6240\u6709 traits \u90fd\u53ef\u4ee5\u517c\u5bb9\u539f\u751f\u7684 K8s \u5bf9\u8c61\u6a21\u677f\u3002"),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4f1a\u6dfb\u52a0\u4e24\u4e2a traits \u5230 component \u4e2d\u3002\u5206\u522b\u662f\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/charts/vela-core/templates/defwithtemplate/manualscale.yaml"},"scaler")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/docs/examples/kube-module/virtual-group-td.yaml"},"virtualgroup")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: mycomp\n      type: kube-worker\n      properties: \n        image: nginx:1.14.0\n      traits:\n        - type: scaler\n          properties:\n            replicas: 2\n        - type: virtualgroup\n          properties:\n            group: "my-group1"\n            type: "cluster"\n')),(0,o.kt)("h2",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,o.kt)("p",null,"\u90e8\u7f72\u5e94\u7528\uff0c\u9a8c\u8bc1 traits \u6b63\u5e38\u8fd0\u884c"),(0,o.kt)("p",null,"\u68c0\u67e5 ",(0,o.kt)("inlineCode",{parentName:"p"},"scaler")," trait\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get manualscalertrait\nNAME                            AGE\ndemo-podinfo-scaler-3x1sfcd34   2m\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment mycomp -o json | jq .spec.replicas\n2\n")),(0,o.kt)("p",null,"\u68c0\u67e5 ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualgroup")," trait\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get deployment mycomp -o json | jq .spec.template.metadata.labels\n{\n  "app.cluster.virtual.group": "my-group1",\n  "app.kubernetes.io/name": "myapp"\n}\n')),(0,o.kt)("h2",{id:"\u66f4\u65b0\u5e94\u7528"},"\u66f4\u65b0\u5e94\u7528"),(0,o.kt)("p",null,"\u5728\u5e94\u7528\u90e8\u7f72\u5b8c\u540e\uff08\u540c\u65f6 workloads/trait \u6210\u529f\u5730\u521b\u5efa\uff09\uff0c\u4f60\u53ef\u4ee5\u6267\u884c\u66f4\u65b0\u5e94\u7528\u7684\u64cd\u4f5c\uff0c\u5e76\u4e14\u66f4\u65b0\u7684\u5185\u5bb9\u4f1a\u88ab\u5e94\u7528\u5230 workload \u4e0a\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u6765\u6f14\u793a\u4fee\u6539\u4e0a\u9762\u90e8\u7f72\u7684\u5e94\u7528\u7684\u51e0\u4e2a\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: mycomp\n      type: kube-worker\n      properties: \n        image: nginx:1.14.1 # 1.14.0 => 1.14.1\n      traits:\n        - type: scaler\n          properties:\n            replicas: 4 # 2 => 4\n        - type: virtualgroup\n          properties:\n            group: "my-group2" # my-group1 => my-group2\n            type: "cluster"\n')),(0,o.kt)("p",null,"\u5e94\u7528\u4e0a\u9762\u7684\u914d\u7f6e\uff0c\u51e0\u79d2\u540e\u68c0\u67e5\u914d\u7f6e\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u66f4\u65b0\u914d\u7f6e\u540e\uff0cworkload \u5b9e\u4f8b\u7684\u540d\u79f0\u4f1a\u88ab\u4fee\u6539\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"mycomp-v2"))),(0,o.kt)("p",null,"\u68c0\u67e5\u65b0\u7684\u5c5e\u6027\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment mycomp -o json | jq '.spec.template.spec.containers[0].image'\n\"nginx:1.14.1\"\n")),(0,o.kt)("p",null,"\u68c0\u67e5 ",(0,o.kt)("inlineCode",{parentName:"p"},"scaler")," trait\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment mycomp -o json | jq .spec.replicas\n4\n")),(0,o.kt)("p",null,"\u68c0\u67e5 ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualgroup")," trait"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get deployment mycomp -o json | jq .spec.template.metadata.labels\n{\n  "app.cluster.virtual.group": "my-group2",\n  "app.kubernetes.io/name": "myapp"\n}\n')))}c.isMDXComponent=!0}}]);