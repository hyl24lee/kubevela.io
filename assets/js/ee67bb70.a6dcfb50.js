(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4793],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,p(p({ref:n},c),{},{components:t})):r.createElement(f,p({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var i=2;i<o;i++)p[i]=t[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1370:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),p={title:"Apply Remaining"},s={unversionedId:"end-user/workflow/apply-remaining",id:"version-v1.1/end-user/workflow/apply-remaining",isDocsHomePage:!1,title:"Apply Remaining",description:"If we want to apply one component first and then apply the rest of the components after the first one is running, KubeVela provides the apply-remaining workflow step to filter out selected resources and apply remaining.",source:"@site/versioned_docs/version-v1.1/end-user/workflow/apply-remaining.md",sourceDirName:"end-user/workflow",slug:"/end-user/workflow/apply-remaining",permalink:"/docs/end-user/workflow/apply-remaining",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/workflow/apply-remaining.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Apply Remaining"}},l=[{value:"How to use",id:"how-to-use",children:[]},{value:"Expected outcome",id:"expected-outcome",children:[]}],i={toc:l};function c(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If we want to apply one component first and then apply the rest of the components after the first one is running, KubeVela provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"apply-remaining")," workflow step to filter out selected resources and apply remaining."),(0,o.kt)("p",null,"In this guide, you will learn how to apply remaining resources via ",(0,o.kt)("inlineCode",{parentName:"p"},"apply-remaining")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"Workflow"),"."),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"Apply the following ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," with workflow step type of ",(0,o.kt)("inlineCode",{parentName:"p"},"apply-remaining"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-workflow\n  namespace: default\nspec:\n  components:\n  - name: express-server\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n    traits:\n    - type: ingress\n      properties:\n        domain: testsvc.example.com\n        http:\n          /: 8000\n  - name: express-server2\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n  - name: express-server3\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n  - name: express-server4\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n  workflow:\n    steps:\n      - name: first-server\n        type: apply-component\n        properties:\n          component: express-server\n      - name: manual-approval\n        # suspend is a built-in task of workflow used to suspend the workflow\n        type: suspend\n      - name: remaining-server\n        # specify the workflow step type\n        type: apply-remaining\n        properties:\n          # specify the component that needs to be skipped\n          exceptions:\n            # specify the configuration of the component\n            express-server:\n              # skipApplyWorkload indicates whether to skip apply the workload resource\n              skipApplyWorkload: true\n              # skipAllTraits indicates to skip apply all resources of the traits\n              skipAllTraits: true\n")),(0,o.kt)("h2",{id:"expected-outcome"},"Expected outcome"),(0,o.kt)("p",null,"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get application first-vela-workflow -o yaml\n")),(0,o.kt)("p",null,"We can see that the workflow is suspended at ",(0,o.kt)("inlineCode",{parentName:"p"},"manual-approval"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  status:\n    workflow:\n      ...\n      stepIndex: 2\n      steps:\n      - name: first-server\n        phase: succeeded\n        resourceRef: {}\n        type: apply-component\n      - name: manual-approval\n        phase: succeeded\n        resourceRef: {}\n        type: suspend\n      suspend: true\n      terminated: false\n")),(0,o.kt)("p",null,"Check the component status in cluster and resume the workflow after the component is running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment\n\nNAME             READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server   1/1     1            1           5s\n\n$ kubectl get ingress\n\nNAME             CLASS    HOSTS                 ADDRESS   PORTS   AGE\nexpress-server   <none>   testsvc.example.com             80      47s\n")),(0,o.kt)("p",null,"Resume the workflow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vela workflow resume first-vela-workflow\n")),(0,o.kt)("p",null,"Recheck the ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get application first-vela-workflow -o yaml\n")),(0,o.kt)("p",null,"All the step status in workflow is succeeded:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  status:\n    workflow:\n      ...\n      stepIndex: 3\n      steps:\n      - name: first-server\n        phase: succeeded\n        resourceRef: {}\n        type: apply-component\n      - name: manual-approval\n        phase: succeeded\n        resourceRef: {}\n        type: suspend\n      - name: remaining-server\n        phase: succeeded\n        resourceRef: {}\n        type: apply-remaining\n      suspend: false\n      terminated: true\n")),(0,o.kt)("p",null,"Recheck the component status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment\n\nNAME              READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server    1/1     1            1           110s\nexpress-server2   1/1     1            1           6s\nexpress-server3   1/1     1            1           6s\nexpress-server4   1/1     1            1           6s\n")),(0,o.kt)("p",null,"We can see that all of the components has been applied to the cluster successfully. Besides, the first component ",(0,o.kt)("inlineCode",{parentName:"p"},"express-server")," is not applied repeatedly."),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"apply-remaining"),", we can easily filter and apply resources by filling in the built-in parameters."))}c.isMDXComponent=!0}}]);