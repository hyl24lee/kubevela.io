(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[55623],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(k,p(p({ref:n},c),{},{components:t})):a.createElement(k,p({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21978:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return l},default:function(){return c}});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),p={title:"\u8865\u4e01\u578b\u7279\u5f81"},o={unversionedId:"platform-engineers/traits/patch-trait",id:"version-v1.1/platform-engineers/traits/patch-trait",isDocsHomePage:!1,title:"\u8865\u4e01\u578b\u7279\u5f81",description:"\u5728\u81ea\u5b9a\u4e49\u8fd0\u7ef4\u7279\u5f81\u4e2d\uff0c\u4f7f\u7528\u8865\u4e01\u578b\u7279\u5f81\u662f\u4e00\u79cd\u6bd4\u8f83\u5e38\u7528\u7684\u5f62\u5f0f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/platform-engineers/traits/patch-trait.md",sourceDirName:"platform-engineers/traits",slug:"/platform-engineers/traits/patch-trait",permalink:"/zh/docs/platform-engineers/traits/patch-trait",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/traits/patch-trait.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"2021/9/15",frontMatter:{title:"\u8865\u4e01\u578b\u7279\u5f81"},sidebar:"version-v1.1/docs",previous:{title:"\u81ea\u5b9a\u4e49\u8fd0\u7ef4\u7279\u5f81",permalink:"/zh/docs/platform-engineers/traits/customize-trait"},next:{title:"\u72b6\u6001\u56de\u5199",permalink:"/zh/docs/platform-engineers/traits/status"}},l=[{value:"\u5f85\u89e3\u51b3\u7684\u77ed\u677f",id:"\u5f85\u89e3\u51b3\u7684\u77ed\u677f",children:[]},{value:"\u7b56\u7565\u8865\u4e01",id:"\u7b56\u7565\u8865\u4e01",children:[]},{value:"\u66f4\u591a\u8865\u4e01\u578b\u7279\u5f81\u7684\u4f7f\u7528\u573a\u666f",id:"\u66f4\u591a\u8865\u4e01\u578b\u7279\u5f81\u7684\u4f7f\u7528\u573a\u666f",children:[{value:"\u589e\u52a0\u6807\u7b7e",id:"\u589e\u52a0\u6807\u7b7e",children:[]},{value:"\u589e\u52a0\u6ce8\u89e3",id:"\u589e\u52a0\u6ce8\u89e3",children:[]},{value:"\u589e\u52a0 Pod \u73af\u5883\u53d8\u91cf",id:"\u589e\u52a0-pod-\u73af\u5883\u53d8\u91cf",children:[]},{value:"\u57fa\u4e8e\u5916\u90e8\u9274\u6743\u670d\u52a1\u6ce8\u5165 <code>ServiceAccount</code>",id:"\u57fa\u4e8e\u5916\u90e8\u9274\u6743\u670d\u52a1\u6ce8\u5165-serviceaccount",children:[]},{value:"\u589e\u52a0 <code>InitContainer</code>",id:"\u589e\u52a0-initcontainer",children:[]}]}],s={toc:l};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u81ea\u5b9a\u4e49\u8fd0\u7ef4\u7279\u5f81\u4e2d\uff0c\u4f7f\u7528\u8865\u4e01\u578b\u7279\u5f81\u662f\u4e00\u79cd\u6bd4\u8f83\u5e38\u7528\u7684\u5f62\u5f0f\u3002"),(0,i.kt)("p",null,"\u5b83\u8ba9\u6211\u4eec\u53ef\u4ee5\u4fee\u6539\u3001\u8865\u4e01\u67d0\u4e9b\u5c5e\u6027\u7ed9\u7ec4\u4ef6\u5bf9\u8c61\uff08\u4e00\u822c\u662f\u5de5\u4f5c\u8d1f\u8f7d\uff09\u6765\u5b8c\u6210\u7279\u5b9a\u64cd\u4f5c\uff0c\u6bd4\u5982\u66f4\u65b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"sidecar")," \u548c\u8282\u70b9\u4eb2\u548c\u6027\uff08node affinity\uff09\u7684\u89c4\u5219\uff08\u5e76\u4e14\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u4e00\u5b9a\u662f\u5728\u8d44\u6e90\u5f80\u96c6\u7fa4\u90e8\u7f72\u524d\u5c31\u5df2\u7ecf\u751f\u6548\uff09\u3002"),(0,i.kt)("p",null,"\u5f53\u6211\u4eec\u7684\u7ec4\u4ef6\u662f\u4ece\u7b2c\u4e09\u65b9\u63d0\u4f9b\u5e76\u81ea\u5b9a\u4e49\u800c\u6765\u7684\u65f6\u5019\uff0c\u7531\u4e8e\u5b83\u4eec\u7684\u6a21\u7248\u5f80\u5f80\u662f\u56fa\u5b9a\u4e0d\u53ef\u53d8\u7684\uff0c\u6240\u4ee5\u80fd\u4f7f\u7528\u8865\u4e01\u578b\u7279\u5f81\u5c31\u663e\u5f97\u5c24\u4e3a\u6709\u7528\u4e86\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5c3d\u7ba1\u8fd0\u7ef4\u7279\u5f81\u662f\u7531 CUE \u6765\u5b9a\u4e49\uff0c\u5b83\u80fd\u6253\u8865\u4e01\u7684\u7ec4\u4ef6\u7c7b\u578b\u5e76\u4e0d\u9650\uff0c\u4e0d\u7ba1\u662f\u6765\u81ea CUE\u3001Helm \u8fd8\u662f\u5176\u4f59\u652f\u6301\u7684\u6a21\u7248\u683c\u5f0f")),(0,i.kt)("p",null,"\u4e0b\u9762\uff0c\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u8282\u70b9\u4eb2\u548c\u6027\uff08node affinity\uff09\u7684\u4f8b\u5b50\uff0c\u8bb2\u89e3\u5982\u4f55\u4f7f\u7528\u8865\u4e01\u578b\u7279\u5f81\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "affinity specify node affinity and toleration"\n  name: node-affinity\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {\n            spec: template: spec: {\n                if parameter.affinity != _|_ {\n                    affinity: nodeAffinity: requiredDuringSchedulingIgnoredDuringExecution: nodeSelectorTerms: [{\n                        matchExpressions: [\n                            for k, v in parameter.affinity {\n                                key:      k\n                                operator: "In"\n                                values:   v\n                            },\n                        ]}]\n                }\n                if parameter.tolerations != _|_ {\n                    tolerations: [\n                        for k, v in parameter.tolerations {\n                            effect:   "NoSchedule"\n                            key:      k\n                            operator: "Equal"\n                            value:    v\n                        }]\n                }\n            }\n        }\n\n        parameter: {\n            affinity?: [string]: [...string]\n            tolerations?: [string]: string\n        }\n')),(0,i.kt)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0c\u6211\u4eec\u4e0a\u9762\u7684\u8fd9\u4e2a\u8865\u4e01\u578b\u7279\u5f81\uff0c\u5047\u5b9a\u4e86\u4f7f\u7528\u5b83\u7684\u7ec4\u4ef6\u5bf9\u8c61\u5c06\u4f1a\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.template.spec.affinity")," \u8fd9\u4e2a\u5b57\u6bb5\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"appliesToWorkloads")," \u6765\u6307\u660e\uff0c\u8ba9\u5f53\u524d\u8fd0\u7ef4\u7279\u5f81\u88ab\u5e94\u7528\u5230\u62e5\u6709\u8fd9\u4e2a\u5b57\u6bb5\u7684\u5bf9\u5e94\u5de5\u4f5c\u8d1f\u8f7d\u5b9e\u4f8b\u4e0a\u3002"),(0,i.kt)("p",null,"\u53e6\u4e00\u4e2a\u91cd\u8981\u7684\u5b57\u6bb5\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"podDisruptive"),"\uff0c\u8fd9\u4e2a\u8865\u4e01\u578b\u7279\u5f81\u5c06\u4fee\u6539 Pod \u6a21\u677f\u5b57\u6bb5\uff0c\u56e0\u6b64\u5bf9\u8be5\u8fd0\u7ef4\u7279\u5f81\u7684\u4efb\u4f55\u5b57\u6bb5\u8fdb\u884c\u66f4\u6539\uff0c\u90fd\u4f1a\u5bfc\u81f4 Pod \u91cd\u542f\u3002\u6211\u4eec\u5e94\u8be5\u589e\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"podDisruptive")," \u5e76\u4e14\u8bbe\u7f6e\u5b83\u7684\u503c\u4e3a true\uff0c\u4ee5\u6b64\u544a\u8bc9\u7528\u6237\u8fd9\u4e2a\u8fd0\u7ef4\u7279\u5f81\u751f\u6548\u540e\u5c06\u5bfc\u81f4 Pod \u91cd\u65b0\u542f\u52a8\u3002"),(0,i.kt)("p",null,"\u73b0\u5728\u7528\u6237\u53ea\u9700\u8981\uff0c\u58f0\u660e\u4ed6\u4eec\u5e0c\u671b\u589e\u52a0\u4e00\u4e2a\u8282\u70b9\u4eb2\u548c\u6027\u7684\u89c4\u5219\u5230\u7ec4\u4ef6\u5b9e\u4f8b\u5f53\u4e2d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: oamdev/testapp:v1\n      traits:\n        - type: "node-affinity"\n          properties:\n            affinity:\n              server-owner: ["owner1","owner2"]\n              resource-pool: ["pool1","pool2","pool3"]\n            tolerations:\n              resource-pool: "broken-pool1"\n              server-owner: "old-owner"\n')),(0,i.kt)("h3",{id:"\u5f85\u89e3\u51b3\u7684\u77ed\u677f"},"\u5f85\u89e3\u51b3\u7684\u77ed\u677f"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u6765\u8bf4\uff0c\u8865\u4e01\u578b\u7279\u5f81\u662f\u901a\u8fc7 CUE \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"merge")," \u64cd\u4f5c\u6765\u5b9e\u73b0\u7684\u3002\u5b83\u6709\u4ee5\u4e0b\u9650\u5236\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u5904\u7406\u6709\u51b2\u7a81\u7684\u5b57\u6bb5\u540d",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6bd4\u65b9\u8bf4\uff0c\u5728\u4e00\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\u4e2d\u5df2\u7ecf\u8bbe\u7f6e\u8fc7\u8fd9\u6837\u7684\u503c ",(0,i.kt)("inlineCode",{parentName:"li"},"replicas=5"),"\uff0c\u90a3\u4e00\u65e6\u6709\u8fd0\u7ef4\u7279\u5f81\u5b9e\u4f8b\uff0c\u5c1d\u8bd5\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"li"},"replicas")," \u5b57\u6bb5\u7684\u503c\u6253\u8865\u4e01\u5c31\u4f1a\u5931\u8d25\u3002\u6240\u4ee5\u6211\u4eec\u5efa\u8bae\u4f60\u63d0\u524d\u89c4\u5212\u597d\uff0c\u4e0d\u8981\u5728\u7ec4\u4ef6\u548c\u8fd0\u7ef4\u7279\u5f81\u4e4b\u95f4\u4f7f\u7528\u91cd\u590d\u7684\u5b57\u6bb5\u540d\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u5217\u8868\u88ab\u8865\u4e01\u65f6\uff0c\u4f1a\u6309\u7d22\u5f15\u987a\u5e8f\u8fdb\u884c\u5408\u5e76\u3002\u5982\u679c\u6570\u7ec4\u91cc\u51fa\u73b0\u4e86\u91cd\u590d\u7684\u503c\uff0c\u5c06\u5bfc\u81f4\u95ee\u9898\u3002\u4e3a\u4e86\u89c4\u907f\u8fd9\u4e2a\u98ce\u9669\uff0c\u8bf7\u67e5\u8be2\u540e\u9762\u7684\u89e3\u51b3\u65b9\u6848\u3002")),(0,i.kt)("h3",{id:"\u7b56\u7565\u8865\u4e01"},"\u7b56\u7565\u8865\u4e01"),(0,i.kt)("p",null,"\u7b56\u7565\u8865\u4e01\uff0c\u901a\u8fc7\u589e\u52a0\u6ce8\u89e3\uff08annotation\uff09\u800c\u751f\u6548\uff0c\u5e76\u652f\u6301\u5982\u4e0b\u4e24\u79cd\u6a21\u5f0f\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff0c\u8fd9\u91cc\u5f00\u59cb\u5e76\u4e0d\u662f CUE \u5b98\u65b9\u63d0\u4f9b\u7684\u529f\u80fd, \u800c\u662f KubeVela \u6269\u5c55\u5f00\u53d1\u800c\u6765")),(0,i.kt)("h4",{id:"1-\u4f7f\u7528-patchkeykey_name-\u6ce8\u89e3"},"1. \u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"h4"},"+patchKey=<key_name>")," \u6ce8\u89e3"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u6ce8\u89e3\uff0c\u662f\u7ed9\u6570\u7ec4\u5217\u8868\u6253\u8865\u4e01\u7528\u7684\u3002\u5b83\u7684\u6267\u884c\u65b9\u5f0f\u4e5f\u4e0d\u9075\u5faa CUE \u5b98\u65b9\u7684\u65b9\u5f0f\uff0c\u800c\u662f\u5c06\u6bcf\u4e00\u4e2a\u6570\u7ec4\u5217\u8868\u89c6\u4f5c\u5bf9\u8c61\uff0c\u5e76\u6267\u884c\u5982\u4e0b\u7684\u7b56\u7565\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u53d1\u73b0\u91cd\u590d\u7684\u952e\u540d\uff0c\u8865\u4e01\u6570\u636e\u4f1a\u76f4\u63a5\u66ff\u6362\u6389\u5b83\u7684\u503c"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u91cd\u590d\u952e\u540d\uff0c\u8865\u4e01\u5219\u4f1a\u81ea\u52a8\u9644\u52a0\u8fd9\u4e9b\u6570\u636e")),(0,i.kt)("p",null,"\u4e0b\u9762\u6765\u770b\u770b\uff0c\u4e00\u4e2a\u4f7f\u7528 'patchKey' \u7684\u7b56\u7565\u8865\u4e01\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "add sidecar to the app"\n  name: sidecar\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {\n            // +patchKey=name\n            spec: template: spec: containers: [parameter]\n        }\n        parameter: {\n            name:  string\n            image: string\n            command?: [...string]\n        }\n')),(0,i.kt)("p",null,"\u5728\u4e0a\u8ff0\u7684\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u8981 ",(0,i.kt)("inlineCode",{parentName:"p"},"patchKey")," \u7684\u5b57\u6bb5 ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"\uff0c\u662f\u6765\u81ea\u5bb9\u5668\u7684\u53c2\u6570\u952e\u540d\u3002\u5982\u679c\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u5e76\u6ca1\u6709\u540c\u540d\u7684\u5bb9\u5668\uff0c\u90a3\u4e48\u4e00\u4e2a sidecar \u5bb9\u5668\u5c31\u4f1a\u88ab\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.template.spec.containers")," \u6570\u7ec4\u5217\u8868\u4e2d\u3002\u5982\u679c\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u6709\u91cd\u540d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"sidecar")," \u8fd0\u7ef4\u7279\u5f81\uff0c\u5219\u4f1a\u6267\u884c merge \u64cd\u4f5c\u800c\u4e0d\u662f\u9644\u52a0\u3002"),(0,i.kt)("p",null,"\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"patch")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"outputs")," \u540c\u65f6\u5b58\u5728\u4e8e\u4e00\u4e2a\u8fd0\u7ef4\u7279\u5f81\u5b9a\u4e49\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"patch")," \u4f1a\u7387\u5148\u88ab\u6267\u884c\u7136\u540e\u518d\u6e32\u67d3 ",(0,i.kt)("inlineCode",{parentName:"p"},"outputs"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "expose the app"\n  name: expose\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {spec: template: metadata: labels: app: context.name}\n        outputs: service: {\n            apiVersion: "v1"\n            kind:       "Service"\n            metadata: name: context.name\n            spec: {\n                selector: app: context.name\n                ports: [\n                    for k, v in parameter.http {\n                        port:       v\n                        targetPort: v\n                    },\n                ]\n            }\n        }\n        parameter: {\n            http: [string]: int\n        }\n')),(0,i.kt)("p",null,"\u5728\u4e0a\u9762\u8fd9\u4e2a\u8fd0\u7ef4\u7279\u5f81\u5b9a\u4e49\u4e2d\uff0c\u6211\u4eec\u5c06\u4f1a\u628a\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," \u6dfb\u52a0\u5230\u7ed9\u5b9a\u7684\u7ec4\u4ef6\u5b9e\u4f8b\u4e0a\u3002\u540c\u65f6\u4f1a\u5148\u53bb\u7ed9\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\u6253\u4e0a\u8865\u4e01\u6570\u636e\uff0c\u7136\u540e\u57fa\u4e8e\u6a21\u7248\u91cc\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"outputs")," \u6e32\u67d3\u4f59\u4e0b\u7684\u8d44\u6e90\u3002"),(0,i.kt)("h4",{id:"2-\u4f7f\u7528-patchstrategyretainkeys-\u6ce8\u89e3"},"2. \u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"h4"},"+patchStrategy=retainkeys")," \u6ce8\u89e3"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u6ce8\u89e3\u7684\u7b56\u7565\uff0c\u4e0e Kubernetes \u5b98\u65b9\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/manage-kubernetes-objects/update-api-object-kubectl-patch/#use-strategic-merge-patch-to-update-a-deployment-using-the-retainkeys-strategy"},"retainkeys")," \u7b56\u7565\u7c7b\u4f3c\u3002"),(0,i.kt)("p",null,"\u5728\u4e00\u4e9b\u573a\u666f\u4e0b\uff0c\u6574\u4e2a\u5bf9\u8c61\u9700\u8981\u88ab\u4e00\u8d77\u66ff\u6362\u6389\uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"retainkeys")," \u5c31\u662f\u6700\u9002\u5408\u7684\u529e\u6cd5\u3002"),(0,i.kt)("p",null,"\u5047\u5b9a\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," \u5bf9\u8c61\u662f\u8fd9\u6837\u7f16\u5199\u7684\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: retainkeys-demo\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  strategy:\n    type: rollingUpdate\n    rollingUpdate:\n      maxSurge: 30%\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: retainkeys-demo-ctr\n        image: nginx\n")),(0,i.kt)("p",null,"\u73b0\u5728\u5982\u679c\u6211\u4eec\u60f3\u66ff\u6362\u6389 ",(0,i.kt)("inlineCode",{parentName:"p"},"rollingUpdate")," \u7b56\u7565\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u5199\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  name: recreate\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  extension:\n    template: |-\n      patch: {\n         spec: {\n              // +patchStrategy=retainKeys\n              strategy: type: "Recreate"\n           }\n      }        \n')),(0,i.kt)("p",null,"\u8fd9\u4e2a YAML \u8d44\u6e90\u5c06\u53d8\u66f4\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: retainkeys-demo\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: retainkeys-demo-ctr\n        image: nginx\n")),(0,i.kt)("h2",{id:"\u66f4\u591a\u8865\u4e01\u578b\u7279\u5f81\u7684\u4f7f\u7528\u573a\u666f"},"\u66f4\u591a\u8865\u4e01\u578b\u7279\u5f81\u7684\u4f7f\u7528\u573a\u666f"),(0,i.kt)("p",null,"\u8865\u4e01\u578b\u7279\u5f81\uff0c\u9488\u5bf9\u7ec4\u4ef6\u5c42\u9762\u505a\u4e9b\u6574\u4f53\u64cd\u4f5c\u65f6\uff0c\u975e\u5e38\u6709\u7528\u3002\u6211\u4eec\u770b\u770b\u8fd8\u53ef\u4ee5\u6ee1\u8db3\u54ea\u4e9b\u9700\u6c42\uff1a"),(0,i.kt)("h3",{id:"\u589e\u52a0\u6807\u7b7e"},"\u589e\u52a0\u6807\u7b7e"),(0,i.kt)("p",null,"\u6bd4\u5982\u8bf4\uff0c\u6211\u4eec\u8981\u7ed9\u7ec4\u4ef6\u5b9e\u4f8b\u6253\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"virtualgroup")," \u7684\u901a\u7528\u6807\u7b7e\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "Add virtual group labels"\n  name: virtualgroup\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {\n            spec: template: {\n                metadata: labels: {\n                    if parameter.scope == "namespace" {\n                        "app.namespace.virtual.group": parameter.group\n                    }\n                    if parameter.scope == "cluster" {\n                        "app.cluster.virtual.group": parameter.group\n                    }\n                }\n            }\n        }\n        parameter: {\n            group: *"default" | string\n            scope:  *"namespace" | string\n        }\n')),(0,i.kt)("p",null,"\u7136\u540e\u8fd9\u6837\u7528\u5c31\u53ef\u4ee5\u4e86:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nspec:\n  ...\n      traits:\n      - type: virtualgroup\n        properties:\n          group: "my-group1"\n          scope: "cluster"\n')),(0,i.kt)("h3",{id:"\u589e\u52a0\u6ce8\u89e3"},"\u589e\u52a0\u6ce8\u89e3"),(0,i.kt)("p",null,"\u4e0e\u901a\u7528\u6807\u7b7e\u7c7b\u4f3c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u7ed9\u7ec4\u4ef6\u5b9e\u4f8b\u6253\u8865\u4e01\uff0c\u589e\u52a0\u4e00\u4e9b\u6ce8\u89e3\u3002\u6ce8\u89e3\u7684\u683c\u5f0f\uff0c\u5fc5\u987b\u662f JSON\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "Specify auto scale by annotation"\n  name: kautoscale\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  podDisruptive: false\n  schematic:\n    cue:\n      template: |\n        import "encoding/json"\n\n        patch: {\n            metadata: annotations: {\n                "my.custom.autoscale.annotation": json.Marshal({\n                    "minReplicas": parameter.min\n                    "maxReplicas": parameter.max\n                })\n            }\n        }\n        parameter: {\n            min: *1 | int\n            max: *3 | int\n        }\n')),(0,i.kt)("h3",{id:"\u589e\u52a0-pod-\u73af\u5883\u53d8\u91cf"},"\u589e\u52a0 Pod \u73af\u5883\u53d8\u91cf"),(0,i.kt)("p",null,"\u7ed9 Pod \u53bb\u6ce8\u5165\u73af\u5883\u53d8\u91cf\u4e5f\u662f\u975e\u5e38\u5e38\u89c1\u7684\u64cd\u4f5c\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u4f7f\u7528\u65b9\u5f0f\u4f9d\u8d56\u7b56\u7565\u8865\u4e01\u800c\u751f\u6548, \u6240\u4ee5\u8bb0\u5f97\u52a0\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"+patchKey=name"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "add env into your pods"\n  name: env\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {\n            spec: template: spec: {\n                // +patchKey=name\n                containers: [{\n                    name: context.name\n                    // +patchKey=name\n                    env: [\n                        for k, v in parameter.env {\n                            name:  k\n                            value: v\n                        },\n                    ]\n                }]\n            }\n        }\n\n        parameter: {\n            env: [string]: string\n        }\n')),(0,i.kt)("h3",{id:"\u57fa\u4e8e\u5916\u90e8\u9274\u6743\u670d\u52a1\u6ce8\u5165-serviceaccount"},"\u57fa\u4e8e\u5916\u90e8\u9274\u6743\u670d\u52a1\u6ce8\u5165 ",(0,i.kt)("inlineCode",{parentName:"h3"},"ServiceAccount")),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u573a\u666f\u4e0b\uff0cservice-account \u662f\u4ece\u4e00\u4e2a\u9274\u6743\u670d\u52a1\u4e2d\u52a8\u6001\u83b7\u53d6\u3001\u518d\u901a\u8fc7\u6253\u8865\u4e01\u7ed9\u5230\u5e94\u7528\u7684\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u8fd9\u91cc\u5c55\u793a\u7684\u662f\uff0c\u5c06 UID token \u653e\u8fdb ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP header")," \u7684\u4f8b\u5b50\u3002\u4f60\u4e5f\u53ef\u4ee5\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP body")," \u6765\u5b8c\u6210\u9700\u6c42\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "dynamically specify service account"\n  name: service-account\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        processing: {\n            output: {\n                credentials?: string\n            }\n            http: {\n                method: *"GET" | string\n                url:    parameter.serviceURL\n                request: {\n                    header: {\n                        "authorization.token": parameter.uidtoken\n                    }\n                }\n            }\n        }\n        patch: {\n            spec: template: spec: serviceAccountName: processing.output.credentials\n        }\n\n        parameter: {\n            uidtoken:   string\n            serviceURL: string\n        }\n')),(0,i.kt)("h3",{id:"\u589e\u52a0-initcontainer"},"\u589e\u52a0 ",(0,i.kt)("inlineCode",{parentName:"h3"},"InitContainer")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-initialization/#create-a-pod-that-has-an-init-container"},(0,i.kt)("inlineCode",{parentName:"a"},"InitContainer"))," \u5e38\u7528\u4e8e\u9884\u5b9a\u4e49\u955c\u50cf\u5185\u7684\u64cd\u4f5c\uff0c\u5e76\u4e14\u5728\u627f\u8f7d\u5e94\u7528\u7684\u5bb9\u5668\u8fd0\u884c\u524d\u5c31\u8dd1\u8d77\u6765\u3002"),(0,i.kt)("p",null,"\u770b\u770b\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "add an init container and use shared volume with pod"\n  name: init-container\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {\n            spec: template: spec: {\n                // +patchKey=name\n                containers: [{\n                    name: context.name\n                    // +patchKey=name\n                    volumeMounts: [{\n                        name:      parameter.mountName\n                        mountPath: parameter.appMountPath\n                    }]\n                }]\n                initContainers: [{\n                    name:  parameter.name\n                    image: parameter.image\n                    if parameter.command != _|_ {\n                        command: parameter.command\n                    }\n\n                    // +patchKey=name\n                    volumeMounts: [{\n                        name:      parameter.mountName\n                        mountPath: parameter.initMountPath\n                    }]\n                }]\n                // +patchKey=name\n                volumes: [{\n                    name: parameter.mountName\n                    emptyDir: {}\n                }]\n            }\n        }\n\n        parameter: {\n            name:  string\n            image: string\n            command?: [...string]\n            mountName:     *"workdir" | string\n            appMountPath:  string\n            initMountPath: string\n        }\n')),(0,i.kt)("p",null,"\u7528\u6cd5\u50cf\u8fd9\u6837:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: oamdev/testapp:v1\n      traits:\n        - type: "init-container"\n          properties:\n            name:  "install-container"\n            image: "busybox"\n            command:\n            - wget\n            - "-O"\n            - "/work-dir/index.html"\n            - http://info.cern.ch\n            mountName: "workdir"\n            appMountPath:  "/usr/share/nginx/html"\n            initMountPath: "/work-dir"\n')))}c.isMDXComponent=!0}}]);