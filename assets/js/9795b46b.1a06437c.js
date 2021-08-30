(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[63555],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25898:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i={title:"Application"},l={unversionedId:"core-concepts/application",id:"core-concepts/application",isDocsHomePage:!1,title:"Application",description:"KubeVela takes Application as the basis of modeling, uses Components and Traits to complete a set of application deployment plans. After you are familiar with these core concepts, you can develop in accordance with the user manual and administrator manual according to your needs.",source:"@site/docs/core-concepts/application.md",sourceDirName:"core-concepts",slug:"/core-concepts/application",permalink:"/docs/next/core-concepts/application",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/core-concepts/application.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1629506510,formattedLastUpdatedAt:"8/21/2021",frontMatter:{title:"Application"},sidebar:"docs",previous:{title:"Architecture",permalink:"/docs/next/core-concepts/architecture"},next:{title:"Component Delivery",permalink:"/docs/next/end-user/component-delivery"}},c=[{value:"Application",id:"application",children:[]},{value:"Workflow",id:"workflow",children:[]}],p={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"KubeVela takes Application as the basis of modeling, uses Components and Traits to complete a set of application deployment plans. After you are familiar with these core concepts, you can develop in accordance with the user manual and administrator manual according to your needs."),(0,a.kt)("h2",{id:"application"},"Application"),(0,a.kt)("p",null,"In modeling, the YAML file is the bearer of the application deployment plan. A typical YAML example is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# sample.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend              # This is the component I want to deploy\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: cpuscaler         # Automatically scale the component by CPU usage after deployed\n          properties:\n            min: 1\n            max: 10\n            cpuPercent: 60\n        - type: sidecar           # Inject a fluentd sidecar before applying the component to runtime cluster\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n')),(0,a.kt)("p",null,"The fields here correspond to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"apiVersion: The OAM API version used."),(0,a.kt)("li",{parentName:"ul"},"kind: of CRD Resourse Type. The one we use most often is Pod."),(0,a.kt)("li",{parentName:"ul"},"metadata: business-related information. For example, this time I want to create a website."),(0,a.kt)("li",{parentName:"ul"},"Spec: Describe what we need to deliver and tell Kubernetes what to make. Here we put the components of KubeVela."),(0,a.kt)("li",{parentName:"ul"},"components: KubeVela's component system."),(0,a.kt)("li",{parentName:"ul"},"Traits: KubeVela's operation and maintenance feature system.")),(0,a.kt)("h2",{id:"workflow"},"Workflow"),(0,a.kt)("p",null,"In KubeVela, Workflow allows user to glue various operation and maintenance tasks into one process, and achieve automated and rapid delivery of cloud-native applications to any hybrid environment. From the design point of view, the Workflow is to customize the control logic: not only simply apply all resources, but also to provide some process-oriented flexibility. For example, the use of Workflow can help us implement complex operations such as pause, manual verification, waiting state, data flow transmission, multi-environment grayscale, and A/B testing."),(0,a.kt)("p",null,'The Workflow is based on modular design. Each Workflow module is defined by a Definition CRD and provided to users for operation through K8s API. As a "super glue", the Workflow module can combine any of your tools and processes through the CUE language. This allows you to create your own modules through a powerful declarative language and cloud-native APIs.'))}s.isMDXComponent=!0}}]);