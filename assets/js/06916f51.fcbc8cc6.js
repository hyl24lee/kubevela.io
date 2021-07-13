(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4579],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35314:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),o={title:"Advanced Features"},p={unversionedId:"platform-engineers/cue/advanced",id:"version-v1.1/platform-engineers/cue/advanced",isDocsHomePage:!1,title:"Advanced Features",description:"As a Data Configuration Language, CUE allows you to do some advanced templating magic in definition objects.",source:"@site/versioned_docs/version-v1.1/platform-engineers/cue/advanced.md",sourceDirName:"platform-engineers/cue",slug:"/platform-engineers/cue/advanced",permalink:"/docs/v1.1/platform-engineers/cue/advanced",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/cue/advanced.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1623737988,formattedLastUpdatedAt:"6/15/2021",frontMatter:{title:"Advanced Features"},sidebar:"version-v1.1/docs",previous:{title:"Status Write Back",permalink:"/docs/v1.1/platform-engineers/cue/status"},next:{title:"Debug, Test and Dry-run",permalink:"/docs/v1.1/platform-engineers/debug-test-cue"}},s=[{value:"Render Multiple Resources With a Loop",id:"render-multiple-resources-with-a-loop",children:[]},{value:"Execute HTTP Request in Trait Definition",id:"execute-http-request-in-trait-definition",children:[]},{value:"Data Passing",id:"data-passing",children:[]}],l={toc:s};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As a Data Configuration Language, CUE allows you to do some advanced templating magic in definition objects."),(0,i.kt)("h2",{id:"render-multiple-resources-with-a-loop"},"Render Multiple Resources With a Loop"),(0,i.kt)("p",null,"You can define the for-loop inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"outputs"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that in this case the type of ",(0,i.kt)("inlineCode",{parentName:"p"},"parameter")," field used in the for-loop must be a map. ")),(0,i.kt)("p",null,"Below is an example that will render multiple Kubernetes Services in one trait:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: expose\nspec:\n  schematic:\n    cue:\n      template: |\n        parameter: {\n          http: [string]: int\n        }\n\n        outputs: {\n          for k, v in parameter.http {\n            "\\(k)": {\n              apiVersion: "v1"\n              kind:       "Service"\n              spec: {\n                selector:\n                  app: context.name\n                ports: [{\n                  port:       v\n                  targetPort: v\n                }]\n              }\n            }\n          }\n        }\n')),(0,i.kt)("p",null,"The usage of this trait could be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        ...\n      traits:\n        - type: expose\n          properties:\n            http:\n              myservice1: 8080\n              myservice2: 8081\n")),(0,i.kt)("h2",{id:"execute-http-request-in-trait-definition"},"Execute HTTP Request in Trait Definition"),(0,i.kt)("p",null,"The trait definition can send a HTTP request and capture the response to help you rendering the resource with keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"processing"),"."),(0,i.kt)("p",null,"You can define HTTP request ",(0,i.kt)("inlineCode",{parentName:"p"},"method"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"body"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"trailer")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"processing.http")," section, and the returned data will be stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"processing.output"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please ensure the target HTTP server returns a ",(0,i.kt)("strong",{parentName:"p"},"JSON data"),".  ",(0,i.kt)("inlineCode",{parentName:"p"},"output"),".")),(0,i.kt)("p",null,"Then you can reference the returned data from ",(0,i.kt)("inlineCode",{parentName:"p"},"processing.output")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"patch")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"output/outputs"),"."),(0,i.kt)("p",null,"Below is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: auth-service\nspec:\n  schematic:\n    cue:\n      template: |\n        parameter: {\n          serviceURL: string\n        }\n\n        processing: {\n          output: {\n            token?: string\n          }\n          // The target server will return a JSON data with `token` as key.\n          http: {\n            method: *"GET" | string\n            url:    parameter.serviceURL\n            request: {\n              body?: bytes\n              header: {}\n              trailer: {}\n            }\n          }\n        }\n\n        patch: {\n          data: token: processing.output.token\n        }\n')),(0,i.kt)("p",null,"In above example, this trait definition will send request to get the ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," data, and then patch the data to given component instance."),(0,i.kt)("h2",{id:"data-passing"},"Data Passing"),(0,i.kt)("p",null,"A trait definition can read the generated API resources (rendered from ",(0,i.kt)("inlineCode",{parentName:"p"},"output")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"outputs"),") of given component definition."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"}," KubeVela will ensure the component definitions are always rendered before traits definitions.")),(0,i.kt)("p",null,"Specifically, the ",(0,i.kt)("inlineCode",{parentName:"p"},"context.output")," contains the rendered workload API resource (whose GVK is indicated by ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.workload"),"in component definition), and use ",(0,i.kt)("inlineCode",{parentName:"p"},"context.outputs.<xx>")," to contain all the other rendered API resources."),(0,i.kt)("p",null,"Below is an example for data passing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: worker\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    cue:\n      template: |\n        output: {\n          apiVersion: "apps/v1"\n          kind:       "Deployment"\n          spec: {\n            selector: matchLabels: {\n              "app.oam.dev/component": context.name\n            }\n\n            template: {\n              metadata: labels: {\n                "app.oam.dev/component": context.name\n              }\n              spec: {\n                containers: [{\n                  name:  context.name\n                  image: parameter.image\n                  ports: [{containerPort: parameter.port}]\n                  envFrom: [{\n                    configMapRef: name: context.name + "game-config"\n                  }]\n                  if parameter["cmd"] != _|_ {\n                    command: parameter.cmd\n                  }\n                }]\n              }\n            }\n          }\n        }\n\n        outputs: gameconfig: {\n          apiVersion: "v1"\n          kind:       "ConfigMap"\n          metadata: {\n            name: context.name + "game-config"\n          }\n          data: {\n            enemies: parameter.enemies\n            lives:   parameter.lives\n          }\n        }\n\n        parameter: {\n          // +usage=Which image would you like to use for your service\n          // +short=i\n          image: string\n          // +usage=Commands to run in the container\n          cmd?: [...string]\n          lives:   string\n          enemies: string\n          port:    int\n        }\n\n\n---\napiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: ingress\nspec:\n  schematic:\n    cue:\n      template: |\n        parameter: {\n          domain:     string\n          path:       string\n          exposePort: int\n        }\n        // trait template can have multiple outputs in one trait\n        outputs: service: {\n          apiVersion: "v1"\n          kind:       "Service"\n          spec: {\n            selector:\n              app: context.name\n            ports: [{\n              port:       parameter.exposePort\n              targetPort: context.output.spec.template.spec.containers[0].ports[0].containerPort\n            }]\n          }\n        }\n        outputs: ingress: {\n          apiVersion: "networking.k8s.io/v1beta1"\n          kind:       "Ingress"\n          metadata:\n              name: context.name\n          labels: config: context.outputs.gameconfig.data.enemies\n          spec: {\n            rules: [{\n              host: parameter.domain\n              http: {\n                paths: [{\n                  path: parameter.path\n                  backend: {\n                    serviceName: context.name\n                    servicePort: parameter.exposePort\n                  }\n                }]\n              }\n            }]\n          }\n        }\n')),(0,i.kt)("p",null,"In detail, during rendering ",(0,i.kt)("inlineCode",{parentName:"p"},"worker")," ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentDefinition"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the rendered Kubernetes Deployment resource will be stored in the ",(0,i.kt)("inlineCode",{parentName:"li"},"context.output"),","),(0,i.kt)("li",{parentName:"ol"},"all other rendered resources will be stored in ",(0,i.kt)("inlineCode",{parentName:"li"},"context.outputs.<xx>"),", with ",(0,i.kt)("inlineCode",{parentName:"li"},"<xx>")," is the unique name in every ",(0,i.kt)("inlineCode",{parentName:"li"},"template.outputs"),".")),(0,i.kt)("p",null,"Thus, in ",(0,i.kt)("inlineCode",{parentName:"p"},"TraitDefinition"),", it can read the rendered API resources (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"context.outputs.gameconfig.data.enemies"),") from the ",(0,i.kt)("inlineCode",{parentName:"p"},"context"),"."))}c.isMDXComponent=!0}}]);