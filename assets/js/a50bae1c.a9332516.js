(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[7607],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12782:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={title:"KEDA as Autoscaling Trait"},l={unversionedId:"platform-engineers/keda",id:"version-v1.1/platform-engineers/keda",isDocsHomePage:!1,title:"KEDA as Autoscaling Trait",description:"Before continue, make sure you have learned about the concepts of Definition Objects and Defining Traits with CUE section.",source:"@site/versioned_docs/version-v1.1/platform-engineers/keda.md",sourceDirName:"platform-engineers",slug:"/platform-engineers/keda",permalink:"/docs/platform-engineers/keda",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/keda.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"KEDA as Autoscaling Trait"}},s=[{value:"Step 1: Install KEDA controller",id:"step-1-install-keda-controller",children:[]},{value:"Step 2: Create Trait Definition",id:"step-2-create-trait-definition",children:[{value:"1. Describe The Trait",id:"1-describe-the-trait",children:[]},{value:"2. Register API Resource",id:"2-register-api-resource",children:[]},{value:"3. Define <code>appliesToWorkloads</code>",id:"3-define-appliestoworkloads",children:[]},{value:"4. Define Schematic",id:"4-define-schematic",children:[]}]},{value:"Step 2: Register New Trait to KubeVela",id:"step-2-register-new-trait-to-kubevela",children:[]}],c={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Before continue, make sure you have learned about the concepts of ",(0,i.kt)("a",{parentName:"p",href:"definition-and-templates"},"Definition Objects")," and ","[Defining Traits with CUE]","((./traits/customize-trait) section.")),(0,i.kt)("p",null,"In the following tutorial, you will learn to add ",(0,i.kt)("a",{parentName:"p",href:"https://keda.sh/"},"KEDA")," as a new autoscaling trait to your KubeVela based platform."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"KEDA is a Kubernetes-based Event Driven Autoscaler. With KEDA, you can drive the scaling of any container based on resource metrics or the number of events needing to be processed.")),(0,i.kt)("h2",{id:"step-1-install-keda-controller"},"Step 1: Install KEDA controller"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://keda.sh/docs/2.2/deploy/"},"Install the KEDA controller")," into your K8s system."),(0,i.kt)("h2",{id:"step-2-create-trait-definition"},"Step 2: Create Trait Definition"),(0,i.kt)("p",null,"To register KEDA as a new capability (i.e. trait) in KubeVela, the only thing needed is to create an ",(0,i.kt)("inlineCode",{parentName:"p"},"TraitDefinition")," object for it."),(0,i.kt)("p",null,"A full example can be found in this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/blob/master/registry/keda-scaler.yaml"},"keda.yaml"),".\nSeveral highlights are list below."),(0,i.kt)("h3",{id:"1-describe-the-trait"},"1. Describe The Trait"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'...\nname: keda-scaler\nannotations:\n  definition.oam.dev/description: "keda supports multiple event to elastically scale applications, this scaler only applies to deployment as example"\n...\n')),(0,i.kt)("p",null,"We use label ",(0,i.kt)("inlineCode",{parentName:"p"},"definition.oam.dev/description")," to add one line description for this trait.\nIt will be shown in helper commands such as ",(0,i.kt)("inlineCode",{parentName:"p"},"$ vela traits"),"."),(0,i.kt)("h3",{id:"2-register-api-resource"},"2. Register API Resource"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"...\nspec:\n  definitionRef:\n    name: scaledobjects.keda.sh\n...\n")),(0,i.kt)("p",null,"This is how you claim and register KEDA ",(0,i.kt)("inlineCode",{parentName:"p"},"ScaledObject"),"'s API resource (",(0,i.kt)("inlineCode",{parentName:"p"},"scaledobjects.keda.sh"),") as a trait definition."),(0,i.kt)("h3",{id:"3-define-appliestoworkloads"},"3. Define ",(0,i.kt)("inlineCode",{parentName:"h3"},"appliesToWorkloads")),(0,i.kt)("p",null,"A trait can be attached to specified workload types or all (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},'"*"')," or omitted means your trait can work with any workload type)."),(0,i.kt)("p",null,"For the case of KEAD, we will only allow user to attach it to Kubernetes workload type. So we claim it as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'...\nspec:\n  ...\n  appliesToWorkloads:\n    - "deployments.apps" # claim KEDA based autoscaling trait can only attach to Kubernetes Deployment workload type.\n...\n')),(0,i.kt)("h3",{id:"4-define-schematic"},"4. Define Schematic"),(0,i.kt)("p",null,"In this step, we will define the schematic of KEDA based autoscaling trait, i.e. we will create abstraction for KEDA ",(0,i.kt)("inlineCode",{parentName:"p"},"ScaledObject")," with simplified primitives, so end users of this platform don't really need to know what is KEDA at all. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'...\nschematic:\n  cue:\n    template: |-\n      outputs: kedaScaler: {\n        apiVersion: "keda.sh/v1alpha1"\n        kind:       "ScaledObject"\n        metadata: {\n            name: context.name\n        }\n        spec: {\n            scaleTargetRef: {\n                name: context.name\n            }\n            triggers: [{\n                type: parameter.triggerType\n                metadata: {\n                    type:  "Utilization"\n                    value: parameter.value\n                }\n            }]\n        }\n      }\n      parameter: {\n        // +usage=Types of triggering application elastic scaling, Optional: cpu, memory\n        triggerType: string\n        // +usage=Value to trigger scaling actions, represented as a percentage of the requested value of the resource for the pods. like: "60"(60%)\n        value: string\n      }\n')),(0,i.kt)("p",null,"This is a CUE based template which only exposes ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," as trait properties for user to set."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please check the ",(0,i.kt)("a",{parentName:"p",href:"./traits/customize-trait"},"Defining Trait with CUE")," section for more details regarding to CUE templating.")),(0,i.kt)("h2",{id:"step-2-register-new-trait-to-kubevela"},"Step 2: Register New Trait to KubeVela"),(0,i.kt)("p",null,"As long as the definition file is ready, you just need to apply it to Kubernetes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/catalog/master/registry/keda-scaler.yaml\n")),(0,i.kt)("p",null,"And the new trait will immediately become available for end users to use in ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," resource."))}p.isMDXComponent=!0}}]);