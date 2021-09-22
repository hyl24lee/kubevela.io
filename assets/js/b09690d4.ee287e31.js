(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[2656],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(t),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return t?r.createElement(d,p(p({ref:n},c),{},{components:t})):r.createElement(d,p({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=t[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},96378:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),p={title:"Apply Components and Traits"},l={unversionedId:"end-user/workflow/apply-component",id:"version-v1.1/end-user/workflow/apply-component",isDocsHomePage:!1,title:"Apply Components and Traits",description:"In this guide, you will learn how to apply components and traits in Workflow.",source:"@site/versioned_docs/version-v1.1/end-user/workflow/apply-component.md",sourceDirName:"end-user/workflow",slug:"/end-user/workflow/apply-component",permalink:"/docs/end-user/workflow/apply-component",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/workflow/apply-component.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Apply Components and Traits"}},s=[{value:"How to use",id:"how-to-use",children:[]},{value:"Expected outcome",id:"expected-outcome",children:[]}],i={toc:s};function c(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this guide, you will learn how to apply components and traits in ",(0,a.kt)("inlineCode",{parentName:"p"},"Workflow"),"."),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"Apply the following ",(0,a.kt)("inlineCode",{parentName:"p"},"Application"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-workflow\n  namespace: default\nspec:\n  components:\n  - name: express-server\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n    traits:\n    - type: ingress\n      properties:\n        domain: testsvc.example.com\n        http:\n          /: 8000\n  - name: nginx-server\n    type: webservice\n    properties:\n      image: nginx:1.21\n      port: 80\n  workflow:\n    steps:\n      - name: express-server\n        # specify the workflow step type\n        type: apply-component\n        properties:\n          # specify the component name\n          component: express-server\n      - name: manual-approval\n        # suspend is a built-in task of workflow used to suspend the workflow\n        type: suspend\n      - name: nginx-server\n        type: apply-component\n        properties:\n          component: nginx-server\n")),(0,a.kt)("p",null,"If we want to suspend the workflow for manual approval before applying some certain components, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"suspend")," step to pause the workflow."),(0,a.kt)("p",null,"In this case, the workflow will be suspended after applying the first component. The second component will wait to be applied util the ",(0,a.kt)("inlineCode",{parentName:"p"},"resume")," command is called."),(0,a.kt)("p",null,"Check the status after applying the ",(0,a.kt)("inlineCode",{parentName:"p"},"Application"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get app first-vela-workflow\n\nNAME                  COMPONENT        TYPE         PHASE                HEALTHY   STATUS   AGE\nfirst-vela-workflow   express-server   webservice   workflowSuspending                      2s\n")),(0,a.kt)("p",null,"We can use ",(0,a.kt)("inlineCode",{parentName:"p"},"vela workflow resume")," to resume the workflow."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more information of ",(0,a.kt)("inlineCode",{parentName:"p"},"vela workflow"),"\uff0cplease ref ",(0,a.kt)("a",{parentName:"p",href:"../../cli/vela_workflow"},"vela cli"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela workflow resume first-vela-workflow\n\nSuccessfully resume workflow: first-vela-workflow\n")),(0,a.kt)("p",null,"Check the status, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," is now ",(0,a.kt)("inlineCode",{parentName:"p"},"runningWorkflow"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get app first-vela-workflow\n\nNAME                  COMPONENT        TYPE         PHASE     HEALTHY   STATUS   AGE\nfirst-vela-workflow   express-server   webservice   running   true               10s\n")),(0,a.kt)("h2",{id:"expected-outcome"},"Expected outcome"),(0,a.kt)("p",null,"Check the ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," status:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get application first-vela-workflow -o yaml\n")),(0,a.kt)("p",null,"All the step status in workflow is succeeded:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  status:\n    workflow:\n      ...\n      stepIndex: 3\n      steps:\n      - name: express-server\n        phase: succeeded\n        resourceRef: {}\n        type: apply-component\n      - name: manual-approval\n        phase: succeeded\n        resourceRef: {}\n        type: suspend\n      - name: nginx-server\n        phase: succeeded\n        resourceRef: {}\n        type: apply-component\n      suspend: false\n      terminated: true\n")),(0,a.kt)("p",null,"Check the component status in cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment\n\nNAME             READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server   1/1     1            1           3m28s\nnginx-server     1/1     1            1           3s\n\n$ kubectl get ingress\n\nNAME             CLASS    HOSTS                 ADDRESS   PORTS   AGE\nexpress-server   <none>   testsvc.example.com             80      4m7s\n")),(0,a.kt)("p",null,"We can see that all the components and traits have been applied to the cluster."))}c.isMDXComponent=!0}}]);