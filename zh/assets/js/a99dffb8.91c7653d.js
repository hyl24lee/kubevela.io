(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[12223],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(k,s(s({ref:t},l),{},{components:n})):r.createElement(k,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49751:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return i},default:function(){return l}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),s={title:"\u72b6\u6001\u56de\u5199"},p={unversionedId:"platform-engineers/cue/status",id:"version-v1.0/platform-engineers/cue/status",isDocsHomePage:!1,title:"\u72b6\u6001\u56de\u5199",description:"\u672c\u6587\u6863\u5c06\u8bf4\u660e\u5982\u4f55\u901a\u8fc7\u5728\u5b9a\u4e49\u5bf9\u8c61\u4e2d\u4f7f\u7528 CUE \u6a21\u677f\u6765\u5b9e\u73b0\u72b6\u6001\u56de\u5199\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/platform-engineers/cue/status.md",sourceDirName:"platform-engineers/cue",slug:"/platform-engineers/cue/status",permalink:"/zh/docs/v1.0/platform-engineers/cue/status",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/cue/status.md",version:"v1.0",lastUpdatedBy:"FogDong",lastUpdatedAt:1627992881,formattedLastUpdatedAt:"2021/8/3",frontMatter:{title:"\u72b6\u6001\u56de\u5199"},sidebar:"version-v1.0/docs",previous:{title:"Patch Traits",permalink:"/zh/docs/v1.0/platform-engineers/cue/patch-trait"},next:{title:"\u9ad8\u7ea7\u529f\u80fd",permalink:"/zh/docs/v1.0/platform-engineers/cue/advanced"}},i=[{value:"\u5065\u5eb7\u68c0\u67e5",id:"\u5065\u5eb7\u68c0\u67e5",children:[]},{value:"\u81ea\u5b9a\u4e49\u72b6\u6001",id:"\u81ea\u5b9a\u4e49\u72b6\u6001",children:[]}],u={toc:i};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u6863\u5c06\u8bf4\u660e\u5982\u4f55\u901a\u8fc7\u5728\u5b9a\u4e49\u5bf9\u8c61\u4e2d\u4f7f\u7528 CUE \u6a21\u677f\u6765\u5b9e\u73b0\u72b6\u6001\u56de\u5199\u3002 "),(0,o.kt)("h2",{id:"\u5065\u5eb7\u68c0\u67e5"},"\u5065\u5eb7\u68c0\u67e5"),(0,o.kt)("p",null,"\u5728 Workload \u548c Trait \u4e2d\u5065\u5eb7\u68c0\u67e5\u5b57\u6bb5\u90fd\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.status.healthPolicy"),"\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u5b9a\u4e49\u8be5\u5b57\u6bb5\uff0c\u5065\u5eb7\u68c0\u67e5\u7ed3\u679c\u9ed8\u8ba4\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,o.kt)("p",null,"CUE \u4e2d\u5173\u952e\u5b57\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"isHealth"),"\uff0cCUE \u8868\u8fbe\u5f0f\u7ed3\u679c\u5fc5\u987b\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"bool")," \u7c7b\u578b\u3002\nKubeVela \u8fd0\u884c\u65f6\u5c06\u5b9a\u671f\u8bc4\u4f30 CUE \u8868\u8fbe\u5f0f\u76f4\u5230\u72b6\u6001\u4e3a\u5065\u5eb7\u3002\u63a7\u5236\u5668\u6bcf\u6b21\u90fd\u4f1a\u83b7\u53d6\u6240\u6709 Kubernetes \u8d44\u6e90\uff0c\u540c\u65f6\u5c06\u7ed3\u679c\u586b\u5145\u5230 context \u5b57\u6bb5\u4e2d\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5 context \u5b57\u6bb5\u5c06\u5305\u542b\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cue"},"context:{\n  name: <component name>\n  appName: <app name>\n  output: <K8s workload resource>\n  outputs: {\n    <resource1>: <K8s trait resource1>\n    <resource2>: <K8s trait resource2>\n  }\n}\n")),(0,o.kt)("p",null,"Trait \u5e76\u4e0d\u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"p"},"context.output")," \u5b57\u6bb5\uff0c\u5176\u4ed6\u5b57\u6bb5\u90fd\u662f\u76f8\u540c\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u5065\u5eb7\u68c0\u67e5\u7684\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nspec:\n  status:\n    healthPolicy: |\n      isHealth: (context.output.status.readyReplicas > 0) && (context.output.status.readyReplicas == context.output.status.replicas)\n   ...\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nspec:\n  status:\n    healthPolicy: |\n      isHealth: len(context.outputs.service.spec.clusterIP) > 0\n   ...\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Component \u5065\u5eb7\u68c0\u67e5\u793a\u4f8b\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/docs/examples/app-with-status/template.yaml"},"\u8fd9\u7bc7\u6587\u7ae0")," \u3002")),(0,o.kt)("p",null,"\u8be5\u5065\u5eb7\u68c0\u67e5\u7ed3\u679c\u5c06\u88ab\u8bb0\u5f55\u5728\u7ec4\u4ef6\u5bf9\u5e94\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," \u8d44\u6e90\u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nspec:\n  components:\n  - name: myweb\n    type: worker    \n    properties:\n      cmd:\n      - sleep\n      - "1000"\n      enemies: alien\n      image: busybox\n      lives: "3"\n    traits:\n    - type: ingress\n      properties:\n        domain: www.example.com\n        http:\n          /: 80\nstatus:\n  ...\n  services:\n  - healthy: true\n    message: "type: busybox,\\t enemies:alien"\n    name: myweb\n    traits:\n    - healthy: true\n      message: \'Visiting URL: www.example.com, IP: 47.111.233.220\'\n      type: ingress\n  status: running\n')),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u72b6\u6001"},"\u81ea\u5b9a\u4e49\u72b6\u6001"),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u72b6\u6001\u914d\u7f6e\u9879\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.status.customStatus"),"\uff0cWorkload \u548c Trait \u4e2d\u90fd\u662f\u8be5\u5b57\u6bb5\u3002"),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u72b6\u6001 CUE \u4e2d\u5173\u952e\u8bcd\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"message"),"\uff0cCUE \u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u5fc5\u987b\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," \u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u72b6\u6001\u7684\u5185\u90e8\u673a\u5236\u7c7b\u4f3c\u4e0a\u9762\u4ecb\u7ecd\u7684\u5065\u5eb7\u68c0\u67e5\u3002Application CRD \u63a7\u5236\u5668\u5c06\u8bc4\u4f30 CUE \u8868\u8fbe\u5f0f\u76f4\u5230\u68c0\u67e5\u6210\u529f\u3002"),(0,o.kt)("p",null,"context \u5b57\u6bb5\u5c06\u5305\u542b\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cue"},"context:{\n  name: <component name>\n  appName: <app name>\n  output: <K8s workload resource>\n  outputs: {\n    <resource1>: <K8s trait resource1>\n    <resource2>: <K8s trait resource2>\n  }\n}\n")),(0,o.kt)("p",null,"Trait \u5e76\u4e0d\u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"p"},"context.output")," \u5b57\u6bb5\uff0c\u5176\u4ed6\u5b57\u6bb5\u90fd\u662f\u76f8\u540c\u3002"),(0,o.kt)("p",null,"Component \u5065\u5eb7\u68c0\u67e5\u793a\u4f8b\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/docs/examples/app-with-status/template.yaml"},"\u8fd9\u7bc7\u6587\u7ae0")," \u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nspec:\n  status:\n    customStatus: |-\n      message: "type: " + context.output.spec.template.spec.containers[0].image + ",\\t enemies:" + context.outputs.gameconfig.data.enemies\n   ...\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nspec:\n  status:\n    customStatus: |-\n      message: "type: "+ context.outputs.service.spec.type +",\\t clusterIP:"+ context.outputs.service.spec.clusterIP+",\\t ports:"+ "\\(context.outputs.service.spec.ports[0].port)"+",\\t domain"+context.outputs.ingress.spec.rules[0].host\n   ...\n')))}l.isMDXComponent=!0}}]);