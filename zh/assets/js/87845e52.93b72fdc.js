(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[2638],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return s}});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),u=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=u(e.components);return l.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},k=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=u(t),s=a,m=k["".concat(o,".").concat(s)]||k[s]||d[s]||r;return t?l.createElement(m,p(p({ref:n},c),{},{components:t})):l.createElement(m,p({ref:n},c))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=k;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<r;u++)p[u]=t[u];return l.createElement.apply(null,p)}return l.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9408:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return o},default:function(){return c}});var l=t(22122),a=t(19756),r=(t(67294),t(3905)),p={title:"\u9644\u5f55\uff1aCUE \u64cd\u4f5c\u7b26"},i={unversionedId:"platform-engineers/workflow/cue-actions",id:"version-v1.1/platform-engineers/workflow/cue-actions",isDocsHomePage:!1,title:"\u9644\u5f55\uff1aCUE \u64cd\u4f5c\u7b26",description:"\u8fd9\u4e2a\u6587\u6863\u4ecb\u7ecd step \u5b9a\u4e49\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u7684 CUE \u64cd\u4f5c\u7c7b\u578b\u3002\u8fd9\u4e9b\u64cd\u4f5c\u5747\u7531 vela/op \u5305\u63d0\u4f9b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/platform-engineers/workflow/cue-actions.md",sourceDirName:"platform-engineers/workflow",slug:"/platform-engineers/workflow/cue-actions",permalink:"/zh/docs/platform-engineers/workflow/cue-actions",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/workflow/cue-actions.md",version:"v1.1",lastUpdatedBy:"Hongchao Deng",lastUpdatedAt:1632300282,formattedLastUpdatedAt:"2021/9/22",frontMatter:{title:"\u9644\u5f55\uff1aCUE \u64cd\u4f5c\u7b26"},sidebar:"version-v1.1/docs",previous:{title:"\u9644\u5f55\uff1a\u5185\u7f6e\u5de5\u4f5c\u6d41\u6b65\u9aa4",permalink:"/zh/docs/platform-engineers/workflow/built-in-workflow-defs"},next:{title:"\u542f\u52a8\u53c2\u6570\u8bf4\u660e",permalink:"/zh/docs/platform-engineers/system-operation/bootstrap-parameters"}},o=[{value:"Apply",id:"apply",children:[{value:"\u64cd\u4f5c\u53c2\u6570",id:"\u64cd\u4f5c\u53c2\u6570",children:[]},{value:"\u7528\u6cd5\u793a\u4f8b",id:"\u7528\u6cd5\u793a\u4f8b",children:[]}]},{value:"ConditionalWait",id:"conditionalwait",children:[{value:"\u64cd\u4f5c\u53c2\u6570",id:"\u64cd\u4f5c\u53c2\u6570-1",children:[]},{value:"\u7528\u6cd5\u793a\u4f8b",id:"\u7528\u6cd5\u793a\u4f8b-1",children:[]}]},{value:"Load",id:"load",children:[{value:"\u64cd\u4f5c\u53c2\u6570",id:"\u64cd\u4f5c\u53c2\u6570-2",children:[]},{value:"\u7528\u6cd5\u793a\u4f8b",id:"\u7528\u6cd5\u793a\u4f8b-2",children:[]}]},{value:"Read",id:"read",children:[{value:"\u64cd\u4f5c\u53c2\u6570",id:"\u64cd\u4f5c\u53c2\u6570-3",children:[]},{value:"\u7528\u6cd5\u793a\u4f8b",id:"\u7528\u6cd5\u793a\u4f8b-3",children:[]}]},{value:"ApplyApplication",id:"applyapplication",children:[{value:"\u64cd\u4f5c\u53c2\u6570",id:"\u64cd\u4f5c\u53c2\u6570-4",children:[]},{value:"\u7528\u6cd5\u793a\u4f8b",id:"\u7528\u6cd5\u793a\u4f8b-4",children:[]}]},{value:"ApplyComponent",id:"applycomponent",children:[{value:"\u64cd\u4f5c\u53c2\u6570",id:"\u64cd\u4f5c\u53c2\u6570-5",children:[]},{value:"\u7528\u6cd5\u793a\u4f8b",id:"\u7528\u6cd5\u793a\u4f8b-5",children:[]}]},{value:"ApplyRemaining",id:"applyremaining",children:[{value:"\u64cd\u4f5c\u53c2\u6570",id:"\u64cd\u4f5c\u53c2\u6570-6",children:[]},{value:"\u7528\u6cd5\u793a\u4f8b",id:"\u7528\u6cd5\u793a\u4f8b-6",children:[]}]},{value:"Slack",id:"slack",children:[{value:"\u64cd\u4f5c\u53c2\u6570",id:"\u64cd\u4f5c\u53c2\u6570-7",children:[]},{value:"\u7528\u6cd5\u793a\u4f8b",id:"\u7528\u6cd5\u793a\u4f8b-7",children:[]}]},{value:"DingTalk",id:"dingtalk",children:[{value:"\u64cd\u4f5c\u53c2\u6570",id:"\u64cd\u4f5c\u53c2\u6570-8",children:[]},{value:"\u7528\u6cd5\u793a\u4f8b",id:"\u7528\u6cd5\u793a\u4f8b-8",children:[]}]},{value:"Steps",id:"steps",children:[{value:"\u64cd\u4f5c\u53c2\u6570",id:"\u64cd\u4f5c\u53c2\u6570-9",children:[]},{value:"\u7528\u6cd5\u793a\u4f8b",id:"\u7528\u6cd5\u793a\u4f8b-9",children:[]}]}],u={toc:o};function c(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fd9\u4e2a\u6587\u6863\u4ecb\u7ecd step \u5b9a\u4e49\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u7684 CUE \u64cd\u4f5c\u7c7b\u578b\u3002\u8fd9\u4e9b\u64cd\u4f5c\u5747\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"vela/op")," \u5305\u63d0\u4f9b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u9605\u8bfb ",(0,r.kt)("a",{parentName:"p",href:"../cue/basic"},"CUE \u57fa\u7840\u6587\u6863")," \u6765\u5b66\u4e60 CUE \u57fa\u7840\u8bed\u6cd5\u3002")),(0,r.kt)("h2",{id:"apply"},"Apply"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u521b\u5efa\u6216\u8005\u66f4\u65b0\u8d44\u6e90\u3002"),(0,r.kt)("h3",{id:"\u64cd\u4f5c\u53c2\u6570"},"\u64cd\u4f5c\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"value: \u5c06\u88ab apply \u7684\u8d44\u6e90\u7684\u5b9a\u4e49\u3002\u64cd\u4f5c\u6210\u529f\u6267\u884c\u540e\uff0c\u4f1a\u7528\u96c6\u7fa4\u4e2d\u8d44\u6e90\u7684\u72b6\u6001\u91cd\u65b0\u6e32\u67d3 ",(0,r.kt)("inlineCode",{parentName:"li"},"value"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"patch: \u5bf9 ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," \u7684\u5185\u5bb9\u6253\u8865\u4e01\uff0c\u652f\u6301\u7b56\u7565\u6027\u5408\u5e76\uff0c\u6bd4\u5982\u53ef\u4ee5\u901a\u8fc7\u6ce8\u91ca ",(0,r.kt)("inlineCode",{parentName:"li"},"// +patchKey")," \u5b9e\u73b0\u6570\u7ec4\u7684\u6309\u4e3b\u952e\u5408\u5e76\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#Apply: {\n  value: {...}\n  patch: {\n    // patchKey=$key\n    ...\n  }\n}\n")),(0,r.kt)("h3",{id:"\u7528\u6cd5\u793a\u4f8b"},"\u7528\u6cd5\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import "vela/op"\nstepName: op.#Apply & {\n  value: {\n    kind: "Deployment"\n    apiVersion: "apps/v1"\n    metadata: name: "test-app"\n    spec: { \n      replicas: 2\n      ...\n    }\n  }\n  patch: {\n   spec: template: spec: {\n      // patchKey=name\n      containers: [{name: "sidecar"}]\n   }\n  }\n}\n')),(0,r.kt)("h2",{id:"conditionalwait"},"ConditionalWait"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u4f1a\u8ba9 workflow step \u5904\u4e8e\u7b49\u5f85\u72b6\u6001\uff0c\u76f4\u5230\u6761\u4ef6\u88ab\u6ee1\u8db3\u3002"),(0,r.kt)("h3",{id:"\u64cd\u4f5c\u53c2\u6570-1"},"\u64cd\u4f5c\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"continue: \u5f53\u8be5\u5b57\u6bb5\u4e3a true \u65f6\uff0cworkflow step \u624d\u4f1a\u6062\u590d\u7ee7\u7eed\u6267\u884c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#ConditionalWait: {\n  continue: bool\n}\n")),(0,r.kt)("h3",{id:"\u7528\u6cd5\u793a\u4f8b-1"},"\u7528\u6cd5\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import "vela/op"\n\napply: op.#Apply\n\nwait: op.#ConditionalWait & {\n  continue: apply.value.status.phase=="running"\n}\n')),(0,r.kt)("h2",{id:"load"},"Load"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u83b7\u53d6 Application \u4e2d\u6240\u6709\u7ec4\u4ef6\u5bf9\u5e94\u7684\u8d44\u6e90\u6570\u636e\u3002"),(0,r.kt)("h3",{id:"\u64cd\u4f5c\u53c2\u6570-2"},"\u64cd\u4f5c\u53c2\u6570"),(0,r.kt)("p",null,"\u65e0\u9700\u6307\u5b9a\u53c2\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#Load: {}\n")),(0,r.kt)("h3",{id:"\u7528\u6cd5\u793a\u4f8b-2"},"\u7528\u6cd5\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import "vela/op"\n\n// \u8be5\u64cd\u4f5c\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 `load.value.[componentName]` \u6765\u83b7\u53d6\u5230\u5bf9\u5e94\u7ec4\u4ef6\u7684\u8d44\u6e90\u6570\u636e\nload: op.#Load & {}\n')),(0,r.kt)("h2",{id:"read"},"Read"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u8bfb\u53d6 Kubernetes \u96c6\u7fa4\u4e2d\u7684\u8d44\u6e90\u3002"),(0,r.kt)("h3",{id:"\u64cd\u4f5c\u53c2\u6570-3"},"\u64cd\u4f5c\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"value: \u9700\u8981\u7528\u6237\u63cf\u8ff0\u8bfb\u53d6\u8d44\u6e90\u7684\u5143\u6570\u636e\uff0c\u6bd4\u5982 kind\u3001name \u7b49\uff0c\u64cd\u4f5c\u5b8c\u6210\u540e\uff0c\u96c6\u7fa4\u4e2d\u8d44\u6e90\u7684\u6570\u636e\u4f1a\u88ab\u586b\u5145\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," \u4e0a\u3002"),(0,r.kt)("li",{parentName:"ul"},"err: \u5982\u679c\u8bfb\u53d6\u64cd\u4f5c\u53d1\u751f\u9519\u8bef\uff0c\u8fd9\u91cc\u4f1a\u4ee5\u5b57\u7b26\u4e32\u7684\u65b9\u5f0f\u6307\u793a\u9519\u8bef\u4fe1\u606f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#Read: {\n  value: {}\n  err?: string\n}\n")),(0,r.kt)("h3",{id:"\u7528\u6cd5\u793a\u4f8b-3"},"\u7528\u6cd5\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// \u64cd\u4f5c\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 configmap.value.data \u4f7f\u7528 configmap \u91cc\u9762\u7684\u6570\u636e\nconfigmap: op.#Read & {\n   value: {\n      kind: "ConfigMap"\n      apiVersion: "v1"\n      metadata: {\n        name: "configmap-name"\n        namespace: "configmap-ns"\n      }\n   }\n}\n')),(0,r.kt)("h2",{id:"applyapplication"},"ApplyApplication"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u521b\u5efa\u6216\u8005\u66f4\u65b0\u5e94\u7528\u5bf9\u5e94\u7684\u6240\u6709\u8d44\u6e90\u3002"),(0,r.kt)("h3",{id:"\u64cd\u4f5c\u53c2\u6570-4"},"\u64cd\u4f5c\u53c2\u6570"),(0,r.kt)("p",null,"\u65e0\u9700\u6307\u5b9a\u53c2\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#ApplyApplication: {}\n")),(0,r.kt)("h3",{id:"\u7528\u6cd5\u793a\u4f8b-4"},"\u7528\u6cd5\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apply: op.#ApplyApplication & {}\n")),(0,r.kt)("h2",{id:"applycomponent"},"ApplyComponent"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u521b\u5efa\u6216\u8005\u66f4\u65b0\u7ec4\u4ef6\u5bf9\u5e94\u7684\u6240\u6709\u8d44\u6e90\u3002\u6ce8\u610f\uff0c\u5728\u4f7f\u7528\u8be5\u64cd\u4f5c\u524d\u9700\u8981\u5148\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Load")," \u52a0\u8f7d\u8d44\u6e90\u3002"),(0,r.kt)("h3",{id:"\u64cd\u4f5c\u53c2\u6570-5"},"\u64cd\u4f5c\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"value: \u6307\u5b9a\u9700\u8981 apply \u7684\u8d44\u6e90\u5b9a\u4e49\u3002"),(0,r.kt)("li",{parentName:"ul"},"patch: \u6307\u5b9a\u9700\u8981 patch \u7684\u8d44\u6e90\u5b9a\u4e49")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#ApplyComponent: {\n  value: {...}\n  patch: {...}\n}\n")),(0,r.kt)("h3",{id:"\u7528\u6cd5\u793a\u4f8b-5"},"\u7528\u6cd5\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"load: op.#Load & {}\n\napply: op.#ApplyComponent & {\n  value: load.value[parameter.component]\n}\n")),(0,r.kt)("h2",{id:"applyremaining"},"ApplyRemaining"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u521b\u5efa\u6216\u8005\u66f4\u65b0 Application \u4e2d\u6240\u6709\u7ec4\u4ef6\u5bf9\u5e94\u7684\u8d44\u6e90,\u5e76\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"exceptions")," \u6307\u660e\u54ea\u4e9b\u7ec4\u4ef6\u6216\u8005\u7ec4\u4ef6\u4e2d\u7684\u67d0\u4e9b\u8d44\u6e90\u8df3\u8fc7\u521b\u5efa\u548c\u66f4\u65b0\u3002"),(0,r.kt)("h3",{id:"\u64cd\u4f5c\u53c2\u6570-6"},"\u64cd\u4f5c\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"exceptions: \u6307\u660e\u8be5\u64cd\u4f5c\u9700\u8981\u6392\u9664\u6389\u7684\u7ec4\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"skipApplyWorkload: \u662f\u5426\u8df3\u8fc7\u8be5\u7ec4\u4ef6 workload \u8d44\u6e90\u7684\u540c\u6b65\u3002"),(0,r.kt)("li",{parentName:"ul"},"skipAllTraits: \u662f\u5426\u8df3\u8fc7\u8be5\u7ec4\u4ef6\u6240\u6709\u8f85\u52a9\u8d44\u6e90\u7684\u540c\u6b65\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#ApplyRemaining: {\n exceptions?: [componentName=string]: {\n    // skipApplyWorkload \u8868\u660e\u662f\u5426\u9700\u8981\u8df3\u8fc7\u7ec4\u4ef6\u7684\u90e8\u7f72\n    skipApplyWorkload: *true | bool\n    \n    // skipAllTraits \u8868\u660e\u662f\u5426\u9700\u8981\u8df3\u8fc7\u6240\u6709\u8fd0\u7ef4\u7279\u5f81\u7684\u90e8\u7f72\n    skipAllTraits: *true| bool\n  }\n}  \n")),(0,r.kt)("h3",{id:"\u7528\u6cd5\u793a\u4f8b-6"},"\u7528\u6cd5\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apply: op.#ApplyRemaining & {\n  exceptions: {"applied-component-name": {}}\n}\n')),(0,r.kt)("h2",{id:"slack"},"Slack"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u5411 Slack \u53d1\u9001\u6d88\u606f\u901a\u77e5\u3002"),(0,r.kt)("h3",{id:"\u64cd\u4f5c\u53c2\u6570-7"},"\u64cd\u4f5c\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"url: Slack \u7684 Webhook \u5730\u5740\u3002"),(0,r.kt)("li",{parentName:"ul"},"message: \u9700\u8981\u53d1\u9001\u7684 Slack \u6d88\u606f\uff0c\u9700\u8981\u7b26\u5408 ",(0,r.kt)("a",{parentName:"li",href:"https://api.slack.com/reference/messaging/payload"},"Slack \u4fe1\u606f\u89c4\u8303")," \u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#Slack: {\n  url: string\n  message: {...}\n}\n")),(0,r.kt)("h3",{id:"\u7528\u6cd5\u793a\u4f8b-7"},"\u7528\u6cd5\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apply: op.#Slack & {\n  url: webhook url\n  message:\n    text: Hello KubeVela\n}\n")),(0,r.kt)("h2",{id:"dingtalk"},"DingTalk"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u5411\u9489\u9489\u53d1\u9001\u6d88\u606f\u901a\u77e5\u3002"),(0,r.kt)("h3",{id:"\u64cd\u4f5c\u53c2\u6570-8"},"\u64cd\u4f5c\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"url: \u9489\u9489\u7684 Webhook \u5730\u5740\u3002"),(0,r.kt)("li",{parentName:"ul"},"message: \u9700\u8981\u53d1\u9001\u7684\u9489\u9489\u6d88\u606f\uff0c\u9700\u8981\u7b26\u5408 ",(0,r.kt)("a",{parentName:"li",href:"https://developers.dingtalk.com/document/robots/custom-robot-access/title-72m-8ag-pqw"},"\u9489\u9489\u4fe1\u606f\u89c4\u8303")," \u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#DingTalk: {\n  url: string\n  message: {...}\n}\n")),(0,r.kt)("h3",{id:"\u7528\u6cd5\u793a\u4f8b-8"},"\u7528\u6cd5\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apply: op.#DingTalk & {\n  url: webhook url\n  message:\n    msgtype: text\n    text:\n      context: Hello KubeVela\n}\n")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u7528\u6765\u5c01\u88c5\u4e00\u7ec4\u64cd\u4f5c\u3002"),(0,r.kt)("h3",{id:"\u64cd\u4f5c\u53c2\u6570-9"},"\u64cd\u4f5c\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"steps \u91cc\u9762\u9700\u8981\u901a\u8fc7 tag \u7684\u65b9\u5f0f\u6307\u5b9a\u6267\u884c\u987a\u5e8f\uff0c\u6570\u5b57\u8d8a\u5c0f\u6267\u884c\u8d8a\u9760\u524d\u3002")),(0,r.kt)("h3",{id:"\u7528\u6cd5\u793a\u4f8b-9"},"\u7528\u6cd5\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'app: op.#Steps & {\n  load: op.#Load & {\n    component: "component-name"\n  } @step(1)\n  apply: op.#Apply & {\n    value: load.value.workload\n  } @step(2)\n} \n')))}c.isMDXComponent=!0}}]);