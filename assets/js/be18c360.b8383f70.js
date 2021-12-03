(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[28476],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60256:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),l={title:"Service Binding"},o={unversionedId:"end-user/traits/service-binding",id:"end-user/traits/service-binding",isDocsHomePage:!1,title:"Service Binding",description:"Service binding trait will bind data from Kubernetes Secret to the application container's ENV.",source:"@site/docs/end-user/traits/service-binding.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/service-binding",permalink:"/docs/next/end-user/traits/service-binding",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/traits/service-binding.md",version:"current",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1631236794,formattedLastUpdatedAt:"9/10/2021",frontMatter:{title:"Service Binding"},sidebar:"docs",previous:{title:"Labels and Annotations",permalink:"/docs/next/end-user/traits/annotations-and-labels"},next:{title:"Attaching Sidecar",permalink:"/docs/next/end-user/traits/sidecar"}},p=[{value:"Specification",id:"specification",children:[{value:"Properties",id:"properties",children:[]}]},{value:"How to use",id:"how-to-use",children:[]}],s={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Service binding trait will bind data from Kubernetes ",(0,i.kt)("inlineCode",{parentName:"p"},"Secret")," to the application container's ENV."),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"envMappings"),(0,i.kt)("td",{parentName:"tr",align:null},"The mapping of environment variables to secret"),(0,i.kt)("td",{parentName:"tr",align:null},"map","[string]","#KeySecret"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h4",{id:"keysecret"},"KeySecret"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"key"),(0,i.kt)("td",{parentName:"tr",align:null},"if key is empty, we will use envMappings key instead"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"secret"),(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes secret name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Prepare a Kubernetes Secret")),(0,i.kt)("p",null,"The secret can be manually created, or generated by other component or external system."),(0,i.kt)("p",null,"For example, we have a secret ",(0,i.kt)("inlineCode",{parentName:"p"},"db-conn-example")," whose data is as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"endpoint: https://xxx.com\npassword: 123\nusername: myname\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Bind the Secret into your component by ",(0,i.kt)("inlineCode",{parentName:"li"},"service-binding")," trait")),(0,i.kt)("p",null,"For example, we have a webservice component who needs to consume a database. The database connection string should be set\nto Pod environments: ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DB_PASSWORD"),"."),(0,i.kt)("p",null,"We can set the properties for envMappings as below. For each environment, ",(0,i.kt)("inlineCode",{parentName:"p"},"secret")," represents the secret name, and ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"\nrepresents the key of the secret."),(0,i.kt)("p",null,"Here is the complete properties for the trait."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"traits:\n- type: service-binding\n  properties:\n    envMappings:\n      DB_PASSWORD:\n        secret: db-conn-example\n        key: password            \n      endpoint:\n        secret: db-conn-example\n        key: endpoint\n      username:\n        secret: db-conn-example\n        key: username\n")),(0,i.kt)("p",null,"In particular, if the environment name, like ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint"),", is same to the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," of the secret, we can omit the ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),".\nSo we can simplify the properties as below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"traits:\n- type: service-binding\n  properties:\n    envMappings:\n      DB_PASSWORD:\n        secret: db-conn-example\n        key: password            \n      endpoint:\n        secret: db-conn-example\n      username:\n        secret: db-conn-example\n")),(0,i.kt)("p",null,"We can finally prepare an Application for the business component ",(0,i.kt)("inlineCode",{parentName:"p"},"binding-test-comp")," to consume the secret, which is a\nrepresentative of a database cloud resource."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: binding-test-comp\n      type: webservice\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        ports: 80\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              # environments refer to db-conn secret\n              DB_PASSWORD:\n                secret: db-conn-example\n                key: password            \n              endpoint:\n                secret: db-conn-example\n              username:\n                secret: db-conn-example\n")),(0,i.kt)("p",null,"Deploy this YAML and the Secret ",(0,i.kt)("inlineCode",{parentName:"p"},"db-conn-example")," will be binding into environment of workload."))}c.isMDXComponent=!0}}]);