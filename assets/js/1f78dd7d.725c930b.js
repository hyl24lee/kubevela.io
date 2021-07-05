(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[987],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(f,o(o({ref:n},l),{},{components:t})):a.createElement(f,o({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53061:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),o={title:"How-to"},s={unversionedId:"platform-engineers/cue/trait",id:"version-v1.0/platform-engineers/cue/trait",isDocsHomePage:!1,title:"How-to",description:"In this section we will introduce how to define a trait.",source:"@site/versioned_docs/version-v1.0/platform-engineers/cue/trait.md",sourceDirName:"platform-engineers/cue",slug:"/platform-engineers/cue/trait",permalink:"/docs/v1.0/platform-engineers/cue/trait",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/cue/trait.md",version:"v1.0",lastUpdatedBy:"\u5929\u5143",lastUpdatedAt:1625472226,formattedLastUpdatedAt:"7/5/2021",frontMatter:{title:"How-to"},sidebar:"version-v1.0/docs",previous:{title:"Crossplane",permalink:"/docs/v1.0/platform-engineers/crossplane"},next:{title:"Patch Traits",permalink:"/docs/v1.0/platform-engineers/cue/patch-trait"}},p=[{value:"Simple Trait",id:"simple-trait",children:[]},{value:"Using CUE as Trait Schematic",id:"using-cue-as-trait-schematic",children:[]}],c={toc:p};function l(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section we will introduce how to define a trait."),(0,i.kt)("h2",{id:"simple-trait"},"Simple Trait"),(0,i.kt)("p",null,"A trait in KubeVela can be defined by simply reference a existing Kubernetes API resource."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: ingress\nspec:\n  definitionRef:\n    name: ingresses.networking.k8s.io\n")),(0,i.kt)("p",null,"Let's attach this trait to a component instance in ",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        cmd:\n          - node\n          - server.js\n        image: oamdev/testapp:v1\n        port: 8080\n      traits:\n        - type: ingress\n          properties:\n            rules:\n            - http:\n                paths:\n                - path: /testpath\n                  pathType: Prefix\n                  backend:\n                    service:\n                      name: test\n                      port:\n                        number: 80\n")),(0,i.kt)("p",null,"Note that in this case, all fields in the referenced resource's ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," will be exposed to end user and no metadata (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"annotations")," etc) are allowed to be set trait properties. Hence this approach is normally used when you want to bring your own CRD and controller as a trait, and it dose not rely on ",(0,i.kt)("inlineCode",{parentName:"p"},"annotations")," etc as tuning knobs."),(0,i.kt)("h2",{id:"using-cue-as-trait-schematic"},"Using CUE as Trait Schematic"),(0,i.kt)("p",null,"The recommended approach is defining a CUE based schematic for trait as well. In this case, it comes with abstraction and you have full flexibility to templating any resources and fields as you want. Note that KubeVela requires all traits MUST be defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"outputs")," section (not ",(0,i.kt)("inlineCode",{parentName:"p"},"output"),") in CUE template with format as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cue"},"outputs: <unique-name>: \n  <full template data>\n")),(0,i.kt)("p",null,"Below is an example for ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress")," trait."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: ingress\nspec:\n  podDisruptive: false\n  schematic:\n    cue:\n      template: |\n        parameter: {\n            domain: string\n            http: [string]: int\n        }\n\n        // trait template can have multiple outputs in one trait\n        outputs: service: {\n            apiVersion: "v1"\n            kind:       "Service"\n            spec: {\n                selector:\n                    app: context.name\n                ports: [\n                    for k, v in parameter.http {\n                        port:       v\n                        targetPort: v\n                    },\n                ]\n            }\n        }\n\n        outputs: ingress: {\n            apiVersion: "networking.k8s.io/v1beta1"\n            kind:       "Ingress"\n            metadata:\n                name: context.name\n            spec: {\n                rules: [{\n                    host: parameter.domain\n                    http: {\n                        paths: [\n                            for k, v in parameter.http {\n                                path: k\n                                backend: {\n                                    serviceName: context.name\n                                    servicePort: v\n                                }\n                            },\n                        ]\n                    }\n                }]\n            }\n        }\n')),(0,i.kt)("p",null,"Let's attach this trait to a component instance in ",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        cmd:\n          - node\n          - server.js\n        image: oamdev/testapp:v1\n        port: 8080\n      traits:\n        - type: ingress\n          properties:\n            domain: test.my.domain\n            http:\n              "/api": 8080\n')),(0,i.kt)("p",null,"CUE based trait definitions can also enable many other advanced scenarios such as patching and data passing. They will be explained in detail in the following documentations."))}l.isMDXComponent=!0}}]);