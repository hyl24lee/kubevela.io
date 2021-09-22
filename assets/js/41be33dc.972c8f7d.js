(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4500],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28108:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),o={title:"Generating UI Forms"},s={unversionedId:"platform-engineers/openapi-v3-json-schema",id:"version-v1.0/platform-engineers/openapi-v3-json-schema",isDocsHomePage:!1,title:"Generating UI Forms",description:"For any capabilities installed via Definition Objects,",source:"@site/versioned_docs/version-v1.0/platform-engineers/openapi-v3-json-schema.md",sourceDirName:"platform-engineers",slug:"/platform-engineers/openapi-v3-json-schema",permalink:"/docs/v1.0/platform-engineers/openapi-v3-json-schema",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/openapi-v3-json-schema.md",version:"v1.0",lastUpdatedBy:"yangsoon",lastUpdatedAt:1625208237,formattedLastUpdatedAt:"7/2/2021",frontMatter:{title:"Generating UI Forms"},sidebar:"version-v1.0/docs",previous:{title:"Definition Objects",permalink:"/docs/v1.0/platform-engineers/definition-and-templates"},next:{title:"How-to",permalink:"/docs/v1.0/platform-engineers/cue/component"}},l=[{value:"List Schema",id:"list-schema",children:[]},{value:"Render Form",id:"render-form",children:[{value:"Helm Based Components",id:"helm-based-components",children:[]}]}],p={toc:l};function c(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For any capabilities installed via ",(0,r.kt)("a",{parentName:"p",href:"./definition-and-templates"},"Definition Objects"),",\nKubeVela will automatically generate OpenAPI v3 JSON schema based on its parameter list, and store it in a ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigMap")," in the same ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace")," with the definition object. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The default KubeVela system ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"vela-system"),", the built-in capabilities and schemas are laid there.")),(0,r.kt)("h2",{id:"list-schema"},"List Schema"),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigMap")," will have a common label ",(0,r.kt)("inlineCode",{parentName:"p"},"definition.oam.dev=schema"),", so you can find easily by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get configmap -n vela-system -l definition.oam.dev=schema\nNAME                DATA   AGE\nschema-ingress      1      19s\nschema-scaler       1      19s\nschema-task         1      19s\nschema-webservice   1      19s\nschema-worker       1      20s\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigMap")," name is in the format of ",(0,r.kt)("inlineCode",{parentName:"p"},"schema-<your-definition-name>"),",\nand the data key is ",(0,r.kt)("inlineCode",{parentName:"p"},"openapi-v3-json-schema"),"."),(0,r.kt)("p",null,"For example, we can use the following command to get the JSON schema of ",(0,r.kt)("inlineCode",{parentName:"p"},"webservice"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get configmap schema-webservice -n vela-system -o yaml\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: schema-webservice\n  namespace: vela-system\ndata:\n  openapi-v3-json-schema: \'{"properties":{"cmd":{"description":"Commands to run in\n    the container","items":{"type":"string"},"title":"cmd","type":"array"},"cpu":{"description":"Number\n    of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core)","title":"cpu","type":"string"},"env":{"description":"Define\n    arguments by using environment variables","items":{"properties":{"name":{"description":"Environment\n    variable name","title":"name","type":"string"},"value":{"description":"The value\n    of the environment variable","title":"value","type":"string"},"valueFrom":{"description":"Specifies\n    a source the value of this var should come from","properties":{"secretKeyRef":{"description":"Selects\n    a key of a secret in the pod\'\'s namespace","properties":{"key":{"description":"The\n    key of the secret to select from. Must be a valid secret key","title":"key","type":"string"},"name":{"description":"The\n    name of the secret in the pod\'\'s namespace to select from","title":"name","type":"string"}},"required":["name","key"],"title":"secretKeyRef","type":"object"}},"required":["secretKeyRef"],"title":"valueFrom","type":"object"}},"required":["name"],"type":"object"},"title":"env","type":"array"},"image":{"description":"Which\n    image would you like to use for your service","title":"image","type":"string"},"port":{"default":80,"description":"Which\n    port do you want customer traffic sent to","title":"port","type":"integer"}},"required":["image","port"],"type":"object"}\'\n')),(0,r.kt)("p",null,"Specifically, this schema is generated based on ",(0,r.kt)("inlineCode",{parentName:"p"},"parameter")," section in capability definition:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For CUE based definition: the ",(0,r.kt)("inlineCode",{parentName:"li"},"parameter")," is a keyword in CUE template."),(0,r.kt)("li",{parentName:"ul"},"For Helm based definition: the ",(0,r.kt)("inlineCode",{parentName:"li"},"parameter")," is generated from ",(0,r.kt)("inlineCode",{parentName:"li"},"values.yaml")," in Helm chart.")),(0,r.kt)("h2",{id:"render-form"},"Render Form"),(0,r.kt)("p",null,"You can render above schema into a form by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/form-render"},"form-render")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form"},"React JSON Schema form")," and integrate with your dashboard easily."),(0,r.kt)("p",null,"Below is a form rendered with ",(0,r.kt)("inlineCode",{parentName:"p"},"form-render"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3391).Z})),(0,r.kt)("h3",{id:"helm-based-components"},"Helm Based Components"),(0,r.kt)("p",null,"If a Helm based component definition is installed in KubeVela, it will also generate OpenAPI v3 JSON schema based on the ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/charts/#schema-files"},(0,r.kt)("inlineCode",{parentName:"a"},"values.schema.json"))," in the Helm chart, and store it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigMap")," following convention above. If ",(0,r.kt)("inlineCode",{parentName:"p"},"values.schema.json")," is not provided by the chart author, KubeVela will automatically generate OpenAPI v3 JSON schema based on its ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file automatically. "),(0,r.kt)("h1",{id:"whats-next"},"What's Next"),(0,r.kt)("p",null,"It's by design that KubeVela supports multiple ways to define the schematic. Hence, we will explain ",(0,r.kt)("inlineCode",{parentName:"p"},".schematic")," field in detail with following guides."))}c.isMDXComponent=!0},3391:function(e,t,n){"use strict";t.Z=n.p+"assets/images/json-schema-render-example-531b0a75ce10cf51ce46d9c48c6cdb58.jpg"}}]);