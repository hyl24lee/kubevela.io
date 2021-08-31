(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[881],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6308:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),l={title:"CUE Actions"},i={unversionedId:"platform-engineers/workflow/cue-actions",id:"platform-engineers/workflow/cue-actions",isDocsHomePage:!1,title:"CUE Actions",description:"This doc will illustrate the CUE actions provided in vela/op stdlib package.",source:"@site/docs/platform-engineers/workflow/cue-actions.md",sourceDirName:"platform-engineers/workflow",slug:"/platform-engineers/workflow/cue-actions",permalink:"/docs/next/platform-engineers/workflow/cue-actions",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/workflow/cue-actions.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1629358287,formattedLastUpdatedAt:"8/19/2021",frontMatter:{title:"CUE Actions"},sidebar:"docs",previous:{title:"Data Flow",permalink:"/docs/next/platform-engineers/workflow/data-flow"},next:{title:"Bootstrap Parameters",permalink:"/docs/next/platform-engineers/system-operation/bootstrap-parameters"}},p=[{value:"Apply",id:"apply",children:[{value:"Action Parameter",id:"action-parameter",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"ConditionalWait",id:"conditionalwait",children:[{value:"Action Parameter",id:"action-parameter-1",children:[]},{value:"Usage",id:"usage-1",children:[]}]},{value:"Load",id:"load",children:[{value:"Action Parameter",id:"action-parameter-2",children:[]},{value:"Usage",id:"usage-2",children:[]}]},{value:"Read",id:"read",children:[{value:"Action Parameter",id:"action-parameter-3",children:[]},{value:"Usage",id:"usage-3",children:[]}]},{value:"ApplyComponent",id:"applycomponent",children:[{value:"Action Parameter",id:"action-parameter-4",children:[]},{value:"Usage",id:"usage-4",children:[]}]},{value:"ApplyRemaining",id:"applyremaining",children:[{value:"Action Parameter",id:"action-parameter-5",children:[]},{value:"Usage",id:"usage-5",children:[]}]},{value:"Steps",id:"steps",children:[{value:"Usage",id:"usage-6",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This doc will illustrate the CUE actions provided in ",(0,o.kt)("inlineCode",{parentName:"p"},"vela/op")," stdlib package."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To learn the syntax of CUE, read ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/platform-engineers/cue/basic"},"CUE Basic"))),(0,o.kt)("h2",{id:"apply"},"Apply"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Create or update resource in Kubernetes cluster."),(0,o.kt)("h3",{id:"action-parameter"},"Action Parameter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"value: the resource structure to be created or updated. And after successful execution, ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," will be updated with resource status."),(0,o.kt)("li",{parentName:"ul"},"patch: the content support ",(0,o.kt)("inlineCode",{parentName:"li"},"Strategic Merge Patch"),",let you can define the strategy of list merge through comments.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#Apply: {\n  value: {...}\n  patch: {\n    //patchKey=$key\n    ...\n  }\n}\n")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import "vela/op"\nstepName: op.#Apply & {\n  value: {\n    kind: "Deployment"\n    apiVersion: "apps/v1"\n    metadata: name: "test-app"\n    spec: { \n      replicas: 2\n      ...\n    }\n  }\n  patch: {\n   spec: template: spec: {\n      //patchKey=name\n      containers: [{name: "sidecar"}]\n   }\n  }\n}\n')),(0,o.kt)("h2",{id:"conditionalwait"},"ConditionalWait"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Step will be blocked until the condition is met."),(0,o.kt)("h3",{id:"action-parameter-1"},"Action Parameter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"continue: Step will be blocked until the value becomes ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#ConditionalWait: {\n  continue: bool\n}\n")),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import "vela/op"\n\napply: op.#Apply\n\nwait: op.#ConditionalWait: {\n  continue: apply.value.status.phase=="running"\n}\n')),(0,o.kt)("h2",{id:"load"},"Load"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Get component from application by component name."),(0,o.kt)("h3",{id:"action-parameter-2"},"Action Parameter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"component: the component name."),(0,o.kt)("li",{parentName:"ul"},"workload: the workload resource of the component."),(0,o.kt)("li",{parentName:"ul"},"auxiliaries: the auxiliary resources of the component.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#Load: {\n  component: string\n  value: {\n     workload: {...}\n     auxiliaries: [string]: {...}\n  }   \n}\n")),(0,o.kt)("h3",{id:"usage-2"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import "vela/op"\n\n// You can use load.workload & load.traits after this action.\nload: op.#Load & {\n  component: "component-name"\n}\n')),(0,o.kt)("h2",{id:"read"},"Read"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Get resource in Kubernetes cluster. "),(0,o.kt)("h3",{id:"action-parameter-3"},"Action Parameter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"value: the resource metadata to be get. And after successful execution, ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," will be updated with resource definition in cluster."),(0,o.kt)("li",{parentName:"ul"},"err: if an error occurs, the ",(0,o.kt)("inlineCode",{parentName:"li"},"err")," will contain the error message.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#Read: {\n  value: {}\n  err?: string\n}\n")),(0,o.kt)("h3",{id:"usage-3"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// You can use configmap.value.data after this action.\nconfigmap: op.#Read & {\n   value: {\n      kind: "ConfigMap"\n      apiVersion: "v1"\n      metadata: {\n        name: "configmap-name"\n        namespace: "configmap-ns"\n      }\n   }\n}\n')),(0,o.kt)("h2",{id:"applycomponent"},"ApplyComponent"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Create or update resources corresponding to the component in Kubernetes cluster."),(0,o.kt)("h3",{id:"action-parameter-4"},"Action Parameter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"component: the component name."),(0,o.kt)("li",{parentName:"ul"},"workload: the workload resource of the component. Value will be filled  after successful execution."),(0,o.kt)("li",{parentName:"ul"},"traits: the trait resources of the component. Value will be filled after successful execution.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#ApplyComponent: {\n   component: string\n   workload: {...}\n   traits: [string]: {...}\n}\n")),(0,o.kt)("h3",{id:"usage-4"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'apply: op.#ApplyComponent & {\n  component: "component-name"\n}\n')),(0,o.kt)("h2",{id:"applyremaining"},"ApplyRemaining"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Create or update the resources corresponding to all components in the application in the Kubernetes cluster, and specify which components do not need to apply through ",(0,o.kt)("inlineCode",{parentName:"p"},"exceptions"),", or skip some resources of the exceptional component."),(0,o.kt)("h3",{id:"action-parameter-5"},"Action Parameter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"exceptions: indicates the name of the exceptional component."),(0,o.kt)("li",{parentName:"ul"},"skipApplyWorkload:  indicates whether to skip apply the workload resource."),(0,o.kt)("li",{parentName:"ul"},"skipAllTraits: indicates to skip apply all resources of the traits.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#ApplyRemaining: {\n exceptions?: [componentName=string]: {\n      skipApplyWorkload: *true | bool\n      \n      skipAllTraits: *true| bool\n  }\n}  \n")),(0,o.kt)("h3",{id:"usage-5"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'apply: op.#ApplyRemaining & {\n  exceptions: {"applied-component-name": {}}\n}\n')),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Used to encapsulate a set of operations."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In steps, you need to specify the execution order by tag.")),(0,o.kt)("h3",{id:"usage-6"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'app: op.#Steps & {\n  load: op.#Load & {\n    component: "component-name"\n  } @step(1)\n  apply: op.#Apply & {\n    value: load.value.workload\n  } @step(2)\n} \n')))}u.isMDXComponent=!0}}]);