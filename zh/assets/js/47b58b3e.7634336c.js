(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4316],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35439:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),l={title:"Want More?"},i={unversionedId:"end-user/components/more",id:"version-v1.1/end-user/components/more",isDocsHomePage:!1,title:"Want More?",description:"Components in KubeVela are designed to be brought by users.",source:"@site/versioned_docs/version-v1.1/end-user/components/more.md",sourceDirName:"end-user/components",slug:"/end-user/components/more",permalink:"/zh/docs/v1.1/end-user/components/more",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/components/more.md",version:"v1.1",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1624242441,formattedLastUpdatedAt:"2021/6/21",frontMatter:{title:"Want More?"},sidebar:"version-v1.1/docs",previous:{title:"Cloud Services",permalink:"/zh/docs/v1.1/end-user/components/cloud-services"},next:{title:"Ingress",permalink:"/zh/docs/v1.1/end-user/traits/ingress"}},s=[{value:"1. Get from capability center",id:"1-get-from-capability-center",children:[{value:"1. list",id:"1-list",children:[]},{value:"2. install",id:"2-install",children:[]},{value:"3.verify",id:"3verify",children:[]}]},{value:"2. Designed by yourself",id:"2-designed-by-yourself",children:[]}],c={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Components in KubeVela are designed to be brought by users."),(0,a.kt)("h2",{id:"1-get-from-capability-center"},"1. Get from capability center"),(0,a.kt)("p",null,"KubeVela allows you to explore capabilities maintained by platform team.\nThere are two commands in kubectl vela plugin: ",(0,a.kt)("inlineCode",{parentName:"p"},"comp")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"trait"),"."),(0,a.kt)("p",null,"In case you haven't installed kubectl vela plugin: see ",(0,a.kt)("a",{parentName:"p",href:"../../developers/references/kubectl-plugin#install-kubectl-vela-plugin"},"this"),"."),(0,a.kt)("h3",{id:"1-list"},"1. list"),(0,a.kt)("p",null,"For example, let's try to list all available components in a registry:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela comp --discover\nShowing components from registry: https://registry.kubevela.net\nNAME                REGITSRY    DEFINITION                  \ncloneset            default     clonesets.apps.kruise.io\nkruise-statefulset  default     statefulsets.apps.kruise.io\nopenfaas            default     functions.openfaas.com\n")),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"--discover")," flag means show all components not in your cluster."),(0,a.kt)("h3",{id:"2-install"},"2. install"),(0,a.kt)("p",null,"Then you can install a component like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela comp get cloneset\nInstalling component capability cloneset\nSuccessfully install trait: cloneset                                                                                                 \n")),(0,a.kt)("h3",{id:"3verify"},"3.verify"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get componentdefinition  -n vela-system\nNAME         WORKLOAD-KIND   DESCRIPTION\ncloneset     CloneSet        Describes long-running, scalable, containerized services that have a stable network endpoint to receive external network traffic from customers. It was implemented by OpenKruise Cloneset.\n...(other componentDefinition)\n\n")),(0,a.kt)("p",null,"By default, the two commands will retrieve capabilities from ",(0,a.kt)("a",{parentName:"p",href:"https://registry.kubevela.net"},"repo")," maintained by KubeVela."),(0,a.kt)("h2",{id:"2-designed-by-yourself"},"2. Designed by yourself"),(0,a.kt)("p",null,"Check below documentations about how to bring your own components to the system in various approaches."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../platform-engineers/helm/component"},"Helm")," - Helm chart is a natural form of component, note that you need to have a valid Helm repository (e.g. GitHub repo or a Helm hub) to host the chart in this case."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../platform-engineers/cue/component"},"CUE")," - CUE is powerful approach to encapsulate a component and it doesn't require any repository."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../platform-engineers/kube/component"},"Simple Template")," - Not a Helm or CUE expert? A simple template approach is also provided to define any Kubernetes API resource as a component. Note that only key-value style parameters are supported in this case."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../platform-engineers/cloud-services"},"Cloud Services")," - KubeVela allows you to declare cloud services as part of the application and provision them in consistent API.")))}p.isMDXComponent=!0}}]);