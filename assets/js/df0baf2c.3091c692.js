(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[2549],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87471:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),l={title:"Designing Workflow Steps"},i={unversionedId:"platform-engineers/workflow/workflow",id:"platform-engineers/workflow/workflow",isDocsHomePage:!1,title:"Designing Workflow Steps",description:"Overview",source:"@site/docs/platform-engineers/workflow/workflow.md",sourceDirName:"platform-engineers/workflow",slug:"/platform-engineers/workflow/workflow",permalink:"/docs/next/platform-engineers/workflow/workflow",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/workflow/workflow.md",version:"current",lastUpdatedBy:"Lei Zhang (Harry)",lastUpdatedAt:1632276365,formattedLastUpdatedAt:"9/22/2021",frontMatter:{title:"Designing Workflow Steps"},sidebar:"docs",previous:{title:"Advanced Features",permalink:"/docs/next/platform-engineers/traits/advanced"},next:{title:"Built-in Steps",permalink:"/docs/next/platform-engineers/workflow/built-in-workflow-defs"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Using workflow",id:"using-workflow",children:[{value:"Workflow Steps",id:"workflow-steps",children:[]},{value:"Apply the Application",id:"apply-the-application",children:[]}]}],s={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Workflow")," allows you to customize steps in ",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),", glue together additional delivery processes and specify arbitrary delivery environments. In short, ",(0,o.kt)("inlineCode",{parentName:"p"},"Workflow")," provides customized control flow and flexibility based on the original delivery model of Kubernetes(Apply). For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"Workflow")," can be used to implement complex operations such as pause, manual approval, waiting status, data flow, multi-environment gray release, A/B testing, etc."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Workflow"),' is a further exploration and best practice based on OAM model in KubeVela, it obeys the modular concept and reusable characteristics of OAM. Each workflow module is a "super glue" that can combine your arbitrary tools and processes. In modern complex cloud native application delivery environment, you can completely describe all delivery processes through a declarative configuration, ensuring the stability and convenience of the delivery process.'),(0,o.kt)("h2",{id:"using-workflow"},"Using workflow"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Workflow")," consists of steps, you can either use KubeVela's ","[built-in workflow steps]",", or write their own ",(0,o.kt)("inlineCode",{parentName:"p"},"WorkflowStepDefinition")," to complete the operation."),(0,o.kt)("p",null,"We can use ",(0,o.kt)("inlineCode",{parentName:"p"},"vela def")," to define workflow steps by writing ",(0,o.kt)("inlineCode",{parentName:"p"},"Cue templates"),". Let's write an ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," that apply a Tomcat using Helm chart and automatically send message to Slack when the Tomcat is running."),(0,o.kt)("h3",{id:"workflow-steps"},"Workflow Steps"),(0,o.kt)("p",null,"KubeVela provides several CUE actions for writing workflow steps. These actions are provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"vela/op")," package. In order to achieve the above scenario, we need to use the following three CUE actions:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Action"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"./cue-actions#apply"},"ApplyApplication")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Apply all the resources in Application."),(0,o.kt)("td",{parentName:"tr",align:"left"},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"./cue-actions#read"},"Read")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Read resources in Kubernetes cluster."),(0,o.kt)("td",{parentName:"tr",align:"left"},"value: the resource metadata to be get. And after successful execution, ",(0,o.kt)("inlineCode",{parentName:"td"},"value")," will be updated with resource definition in cluster.",(0,o.kt)("br",null)," err: if an error occurs, the ",(0,o.kt)("inlineCode",{parentName:"td"},"err")," will contain the error message.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"./cue-actions#conditionalwait"},"ConditionalWait")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The workflow step will be blocked until the condition is met."),(0,o.kt)("td",{parentName:"tr",align:"left"},"continue: The workflow step will be blocked until the value becomes ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),".")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For all the workflow actions, please refer to ",(0,o.kt)("a",{parentName:"p",href:"./cue-actions"},"Cue Actions"))),(0,o.kt)("p",null,"After this, we need two ",(0,o.kt)("inlineCode",{parentName:"p"},"WorkflowStepDefinitions")," to complete the Application\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Apply Tomcat and wait till it's status become running. We need to write a custom workflow step for it."),(0,o.kt)("li",{parentName:"ol"},"Send Slack notifications, we can use the built-in ","[webhook-notification]"," step for it.")),(0,o.kt)("h4",{id:"step-apply-tomcat"},"Step: Apply Tomcat"),(0,o.kt)("p",null,"First, use ",(0,o.kt)("inlineCode",{parentName:"p"},"vela def init")," to generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"WorkflowStepDefinition")," template\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'vela def init my-helm -t workflow-step --desc "Apply helm charts and wait till it\'s running." -o my-helm.cue\n')),(0,o.kt)("p",null,"The result is as follows\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ cat my-helm.cue\n\n"my-helm": {\n    annotations: {}\n    attributes: {}\n    description: "Apply helm charts and wait till it\'s running."\n    labels: {}\n    type: "workflow-step"\n}\n\ntemplate: {\n}\n')),(0,o.kt)("p",null,"Import ",(0,o.kt)("inlineCode",{parentName:"p"},"vela/op")," and complete the Cue code in ",(0,o.kt)("inlineCode",{parentName:"p"},"template"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import (\n  "vela/op"\n)\n\n"my-helm": {\n    annotations: {}\n    attributes: {}\n    description: "Apply helm charts and wait till it\'s running."\n    labels: {}\n    type: "workflow-step"\n}\n\ntemplate: {\n  // Apply all the resources in Application\n  apply: op.#ApplyApplication & {}\n\n  resource: op.#Read & {\n     value: {\n       kind: "Deployment"\n       apiVersion: "apps/v1"\n       metadata: {\n         name: "tomcat"\n         // we can use context to get any metadata in Application\n         namespace: context.namespace\n       }\n     }\n  }\n\n  workload: resource.value\n  // wait till it\'s ready\n  wait: op.#ConditionalWait & {\n    continue: workload.status.readyReplicas == workload.status.replicas && workload.status.observedGeneration == workload.metadata.generation\n  }\n}\n')),(0,o.kt)("p",null,"Apply it to the cluster\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela def apply my-helm.cue\n\nWorkflowStepDefinition my-helm in namespace vela-system updated.\n")),(0,o.kt)("h4",{id:"step-send-slack-notifications"},"Step: Send Slack notifications"),(0,o.kt)("p",null,"Use the built-in step, ","[webhook-notification]","."),(0,o.kt)("h3",{id:"apply-the-application"},"Apply the Application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-workflow\n  namespace: default\nspec:\n  components:\n  - name: tomcat\n    type: helm\n    properties:\n      repoType: helm\n      url: https://charts.bitnami.com/bitnami\n      chart: tomcat\n      version: "9.2.20"\n  workflow:\n    steps:\n      - name: tomcat\n        # specify the step type\n        type: my-helm\n        outputs:\n          - name: msg\n            # get value from the deployment status in my-helm\n            valueFrom: resource.value.status.conditions[0].message\n      - name: send-message\n        type: webhook-notification\n        inputs:\n          - from: msg\n            # use the output value in the previous step and pass it into the properties slack.message.text\n            parameterKey: slack.message.text \n        properties:\n          slack:\n            # the address of your slack webhook, please refer to: https://api.slack.com/messaging/webhooks\n            url: <your slack url>\n')),(0,o.kt)("p",null,"Apply the Application to the cluster and you can see that all resources have been successfully applied and Slack has received the messages of the Deployment status."))}c.isMDXComponent=!0}}]);