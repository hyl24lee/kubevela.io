(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4741],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},75797:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),l={title:"FAQ"},i={unversionedId:"developers/references/devex/faq",id:"version-v1.1/developers/references/devex/faq",isDocsHomePage:!1,title:"FAQ",description:"\u5bf9\u6bd4 X",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/developers/references/devex/faq.md",sourceDirName:"developers/references/devex",slug:"/developers/references/devex/faq",permalink:"/zh/docs/developers/references/devex/faq",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/developers/references/devex/faq.md",version:"v1.1",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1634004150,formattedLastUpdatedAt:"2021/10/12",frontMatter:{title:"FAQ"},sidebar:"version-v1.1/docs",previous:{title:"KubeVela Roadmap",permalink:"/zh/docs/roadmap/README"}},s=[{value:"\u5bf9\u6bd4 X",id:"\u5bf9\u6bd4-x",children:[{value:"KubeVela \u548c Helm \u6709\u4ec0\u4e48\u533a\u522b?",id:"kubevela-\u548c-helm-\u6709\u4ec0\u4e48\u533a\u522b",children:[]}]},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[{value:"\u76ee\u524d KubeVela \u4e2d\u4f7f\u7528\u7684 Crossplane \u4e91\u8d44\u6e90\u6570\u91cf\u652f\u6301\u6bd4\u8f83\u6709\u9650\u7684\uff0c\u662f\u5426\u6709\u8ba1\u5212\u52a0\u5feb\u5f00\u53d1\u3001\u589e\u52a0\u4e91\u8d44\u6e90\u6570\u91cf\uff1f",id:"\u76ee\u524d-kubevela-\u4e2d\u4f7f\u7528\u7684-crossplane-\u4e91\u8d44\u6e90\u6570\u91cf\u652f\u6301\u6bd4\u8f83\u6709\u9650\u7684\uff0c\u662f\u5426\u6709\u8ba1\u5212\u52a0\u5feb\u5f00\u53d1\u3001\u589e\u52a0\u4e91\u8d44\u6e90\u6570\u91cf\uff1f",children:[]},{value:"Kubevela \u672a\u6765\u5177\u4f53\u8981\u5f80\u54ea\u4e2a\u65b9\u5411\u53d1\u5c55\uff0c\u662f\u57fa\u4e8e GitOps \u7684 CD \u5de5\u5177\uff0c\u8fd8\u662f\u57fa\u4e8eWorkflow \u7684\u7c7b\u4f3c\u4e8e Tekton \u6216 Argo Worflow \u8fd9\u6837\u7684 Pipeline\uff0c\u8fd8\u662f\u91cd\u70b9\u5728 OAM \u7684\u5b9e\u73b0\u4e0a\uff1f",id:"kubevela-\u672a\u6765\u5177\u4f53\u8981\u5f80\u54ea\u4e2a\u65b9\u5411\u53d1\u5c55\uff0c\u662f\u57fa\u4e8e-gitops-\u7684-cd-\u5de5\u5177\uff0c\u8fd8\u662f\u57fa\u4e8eworkflow-\u7684\u7c7b\u4f3c\u4e8e-tekton-\u6216-argo-worflow-\u8fd9\u6837\u7684-pipeline\uff0c\u8fd8\u662f\u91cd\u70b9\u5728-oam-\u7684\u5b9e\u73b0\u4e0a\uff1f",children:[]},{value:"Error: unable to create new content in namespace cert-manager because it is being terminated",id:"error-unable-to-create-new-content-in-namespace-cert-manager-because-it-is-being-terminated",children:[]},{value:"Error: ScopeDefinition exists",id:"error-scopedefinition-exists",children:[]},{value:"You have reached your pull rate limit",id:"you-have-reached-your-pull-rate-limit",children:[]},{value:"Warning: Namespace cert-manager exists",id:"warning-namespace-cert-manager-exists",children:[]},{value:"\u5982\u4f55\u4fee\u590d\u95ee\u9898\uff1aMutatingWebhookConfiguration mutating-webhook-configuration exists?",id:"\u5982\u4f55\u4fee\u590d\u95ee\u9898\uff1amutatingwebhookconfiguration-mutating-webhook-configuration-exists",children:[]}]},{value:"\u8fd0\u7ef4",id:"\u8fd0\u7ef4",children:[{value:"Autoscale: \u5982\u4f55\u5728\u591a\u4e2a Kubernetes \u96c6\u7fa4\u4e0a\u5f00\u542f metrics server \uff1f",id:"autoscale-\u5982\u4f55\u5728\u591a\u4e2a-kubernetes-\u96c6\u7fa4\u4e0a\u5f00\u542f-metrics-server-\uff1f",children:[]}]}],c={toc:s};function u(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5bf9\u6bd4-x"},"\u5bf9\u6bd4 X"),(0,o.kt)("h3",{id:"kubevela-\u548c-helm-\u6709\u4ec0\u4e48\u533a\u522b"},"KubeVela \u548c Helm \u6709\u4ec0\u4e48\u533a\u522b?"),(0,o.kt)("p",null,"KubeVela \u662f\u4e00\u4e2a\u5e73\u53f0\u6784\u5efa\u5de5\u5177\uff0c\u7528\u4e8e\u521b\u5efa\u57fa\u4e8e Kubernete \u7684\u6613\u4f7f\u7528\u3001\u53ef\u62d3\u5c55\u7684\u5e94\u7528\u4ea4\u4ed8/\u7ba1\u7406\u7cfb\u7edf\u3002KubeVela \u5c06 Helm \u4f5c\u4e3a\u6a21\u677f\u5f15\u64ce\u548c\u5e94\u7528\u5305\u7684\u6807\u51c6\u3002\u4f46\u662f Helm \u4e0d\u662f KubeVela \u552f\u4e00\u652f\u6301\u7684\u6a21\u677f\u6a21\u5757\u3002\u53e6\u4e00\u4e2a\u540c\u6837\u6700\u4f18\u5148\u652f\u6301\u7684\u662f CUE\u3002"),(0,o.kt)("p",null,"\u540c\u65f6\uff0cKubeVale \u88ab\u8bbe\u8ba1\u4e3a Kubernetes \u7684\u4e00\u4e2a\u63a7\u5236\u5668\uff08\u5373\u5de5\u4f5c\u5728\u670d\u52a1\u7aef\uff09,\u5373\u4f7f\u662f\u5176 Helm \u90e8\u5206\uff0c\u4e5f\u4f1a\u5b89\u88c5\u4e00\u4e2a Helm Operator\u3002 "),(0,o.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,o.kt)("h3",{id:"\u76ee\u524d-kubevela-\u4e2d\u4f7f\u7528\u7684-crossplane-\u4e91\u8d44\u6e90\u6570\u91cf\u652f\u6301\u6bd4\u8f83\u6709\u9650\u7684\uff0c\u662f\u5426\u6709\u8ba1\u5212\u52a0\u5feb\u5f00\u53d1\u3001\u589e\u52a0\u4e91\u8d44\u6e90\u6570\u91cf\uff1f"},"\u76ee\u524d KubeVela \u4e2d\u4f7f\u7528\u7684 Crossplane \u4e91\u8d44\u6e90\u6570\u91cf\u652f\u6301\u6bd4\u8f83\u6709\u9650\u7684\uff0c\u662f\u5426\u6709\u8ba1\u5212\u52a0\u5feb\u5f00\u53d1\u3001\u589e\u52a0\u4e91\u8d44\u6e90\u6570\u91cf\uff1f"),(0,o.kt)("p",null,"\u76ee\u524d KubeVela \u652f\u6301 Crossplane \u548c Terraform Controller \u4e24\u79cd\u6a21\u5f0f\u63d0\u4f9b\u4e91\u8d44\u6e90\uff0cTerraform Controller \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u73b0\u6210\u7684 Terraform \u6a21\u5757\uff0c\u6240\u4ee5\u652f\u6301\u7684\u4e91\u8d44\u6e90\u5e7f\u5ea6\u548c\u6570\u91cf\u90fd\u76f8\u5bf9\u5e9e\u5927\uff0c\u5bf9\u4e8e Crossplane \u4e0d\u652f\u6301\u7684\u4e91\u8d44\u6e90\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 Terraform Controller\u3002\u76ee\u524d KubeVela \u6b63\u5728\u6dfb\u52a0\u5e38\u7528\u7684\u4e91\u8d44\u6e90\u6700\u4f73\u5b9e\u8df5\u7528\u4f8b\uff0c\u5230 1.2 \u7248\u672c\u5e38\u7528\u4e91\u8d44\u6e90\u90fd\u53ef\u4ee5\u5f00\u7bb1\u5373\u7528\u3002"),(0,o.kt)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0cCrossplane \u4e2d \u963f\u91cc\u4e91\u7684\u4e91\u8d44\u6e90\u652f\u6301\u4e5f\u662f\u7531 KubeVela \u7684\u7ef4\u62a4\u56e2\u961f\u5728\u8d1f\u8d23\u7ef4\u62a4\uff0c\u6211\u4eec\u4e5f\u975e\u5e38\u4e50\u610f\u652f\u6301\u6bd4\u8f83\u5e38\u7528\u7684\u4e91\u8d44\u6e90\uff0c\u5728 Crossplane \u9879\u76ee\u4e2d\u505a\u66f4\u7cbe\u7ec6\u5316\u7684\u652f\u6301\uff0c\u6240\u4ee5\u6bd4\u8f83\u503e\u5411\u4e8e\u4f7f\u7528 Crossplane \u7684\u7528\u6237\u53ef\u4ee5\u5728\u793e\u533a\u63d0 Issue \u8868\u8fbe\u8bc9\u6c42\uff0c\u6211\u4eec\u4f1a\u6839\u636e\u7528\u6237\u7684\u610f\u613f\u786e\u5b9a\u5f00\u53d1\u8ba1\u5212\u3002"),(0,o.kt)("h3",{id:"kubevela-\u672a\u6765\u5177\u4f53\u8981\u5f80\u54ea\u4e2a\u65b9\u5411\u53d1\u5c55\uff0c\u662f\u57fa\u4e8e-gitops-\u7684-cd-\u5de5\u5177\uff0c\u8fd8\u662f\u57fa\u4e8eworkflow-\u7684\u7c7b\u4f3c\u4e8e-tekton-\u6216-argo-worflow-\u8fd9\u6837\u7684-pipeline\uff0c\u8fd8\u662f\u91cd\u70b9\u5728-oam-\u7684\u5b9e\u73b0\u4e0a\uff1f"},"Kubevela \u672a\u6765\u5177\u4f53\u8981\u5f80\u54ea\u4e2a\u65b9\u5411\u53d1\u5c55\uff0c\u662f\u57fa\u4e8e GitOps \u7684 CD \u5de5\u5177\uff0c\u8fd8\u662f\u57fa\u4e8eWorkflow \u7684\u7c7b\u4f3c\u4e8e Tekton \u6216 Argo Worflow \u8fd9\u6837\u7684 Pipeline\uff0c\u8fd8\u662f\u91cd\u70b9\u5728 OAM \u7684\u5b9e\u73b0\u4e0a\uff1f"),(0,o.kt)("p",null,"KubeVela \u548c OAM \u662f\u4e00\u4f53\u7684\uff0cOAM \u662f KubeVela \u80cc\u540e\u7684\u6a21\u578b\uff0c\u968f\u7740 KubeVela \u7684\u6f14\u8fdb\uff0cOAM \u6a21\u578b\u4e5f\u4f1a\u968f\u4e4b\u8fed\u4ee3\u53d1\u5c55\u3002"),(0,o.kt)("p",null,"\u4ece\u6700\u5f00\u59cb\u6211\u4eec\u63d0\u51fa OAM \u6a21\u578b\uff0c\u5e0c\u671b\u80fd\u591f\u901a\u8fc7\u5173\u6ce8\u70b9\u5206\u79bb\u7684\u7406\u5ff5\uff0c\u964d\u4f4e\u4e91\u539f\u751f\u5e94\u7528\u7ba1\u7406\u7684\u590d\u6742\u5ea6\uff0c\u5230\u540e\u6765\u51fa\u73b0 KubeVela \u5f00\u7bb1\u5373\u7528\u7684\u5e94\u7528\u7ba1\u7406\u5f15\u64ce\uff0c\u518d\u5230 v1.1 \u53d1\u5e03\u4e86\u6df7\u5408\u4e91\u5e94\u7528\u4ea4\u4ed8\u529f\u80fd\u548c\u5de5\u4f5c\u6d41\u5f15\u64ce\u3002KubeVela \u548c OAM \u8981\u89e3\u51b3\u7684\u95ee\u9898\u4e00\u76f4\u90fd\u662f\u201c\u8ba9\u4e91\u539f\u751f\u7684\u5e94\u7528\u4ea4\u4ed8\u548c\u5e94\u7528\u7ba1\u7406\u66f4\u7b80\u5355\u201d\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u8ba9\u4e91\u539f\u751f\u5e94\u7528\u4ea4\u4ed8\u548c\u7ba1\u7406\u66f4\u7b80\u5355\uff0c\u6211\u4eec\u9700\u8981\u6807\u51c6\u5316\u7684\u6a21\u578b\uff0c\u4ee5\u5e94\u7528\u4e3a\u4e2d\u5fc3\u964d\u4f4e\u7528\u6237\u4f7f\u7528\u95e8\u69db\u548c\u5fc3\u667a\u8d1f\u62c5\uff0c\u540c\u65f6\u652f\u6301\u5de5\u4f5c\u6d41\u3001\u591a\u96c6\u7fa4\u7b49\u6280\u672f\uff0c\u4e5f\u662f\u4e3a\u4e86\u8ba9\u5e94\u7528\u4ea4\u4ed8\u53ef\u4ee5\u66f4\u6d41\u7545\u3001\u66f4\u9ad8\u6548\u3001\u6210\u672c\u66f4\u4f4e\u3002\u6574\u4e2a\u7406\u5ff5\u548c\u53d1\u5c55\u65b9\u5411\u90fd\u662f\u4e00\u81f4\u7684\u3002"),(0,o.kt)("p",null,"\u6574\u4f53\u6765\u8bf4\uff1aKubevela \u6b63\u5728\u5411\u4e00\u6b3e\uff1a\u539f\u751f\u9762\u5411\u6df7\u5408\u4e91\u73af\u5883\uff0c\u4ee5\u5e94\u7528\u4e3a\u4e2d\u5fc3\u7684\u53d1\u5e03\u6d41\u6c34\u7ebf\u4e00\u4f53\u5316\u5e73\u53f0\u6f14\u8fdb\u3002"),(0,o.kt)("h3",{id:"error-unable-to-create-new-content-in-namespace-cert-manager-because-it-is-being-terminated"},"Error: unable to create new content in namespace cert-manager because it is being terminated"),(0,o.kt)("p",null,"\u4f60\u53ef\u80fd\u5076\u5c14\u4f1a\u78b0\u5230\u5982\u4e0b\u95ee\u9898\u3002\u5b83\u53d1\u751f\u5728\u4e0a\u4e00\u4e2a KubeVele \u7248\u672c\u6ca1\u6709\u5220\u9664\u5b8c\u6210\u65f6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ vela install\n- Installing Vela Core Chart:\ninstall chart vela-core, version 0.1.0, desc : A Helm chart for Kube Vela core, contains 35 file\nFailed to install the chart with error: serviceaccounts "cert-manager-cainjector" is forbidden: unable to create new content in namespace cert-manager because it is being terminated\nfailed to create resource\nhelm.sh/helm/v3/pkg/kube.(*Client).Update.func1\n    /home/runner/go/pkg/mod/helm.sh/helm/v3@v3.2.4/pkg/kube/client.go:190\n...\nError: failed to create resource: serviceaccounts "cert-manager-cainjector" is forbidden: unable to create new content in namespace cert-manager because it is being terminated\n')),(0,o.kt)("p",null,"\u7a0d\u4e8b\u4f11\u606f\uff0c\u7136\u540e\u5728\u51e0\u79d2\u5185\u91cd\u8bd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ vela install\n- Installing Vela Core Chart:\nVela system along with OAM runtime already exist.\nAutomatically discover capabilities successfully \u2705 Add(0) Update(0) Delete(8)\n\nTYPE        CATEGORY    DESCRIPTION\n-task       workload    One-off task to run a piece of code or script to completion\n-webservice workload    Long-running scalable service with stable endpoint to receive external traffic\n-worker     workload    Long-running scalable backend worker without network endpoint\n-autoscale  trait       Automatically scale the app following certain triggers or metrics\n-metrics    trait       Configure metrics targets to be monitored for the app\n-rollout    trait       Configure canary deployment strategy to release the app\n-route      trait       Configure route policy to the app\n-scaler     trait       Manually scale the app\n\n- Finished successfully.\n")),(0,o.kt)("p",null,"\u624b\u52a8\u5e94\u7528\u6240\u6709 WorkloadDefinition \u548c TraitDefinition manifests \u4ee5\u6062\u590d\u6240\u6709\u529f\u80fd\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl apply -f charts/vela-core/templates/defwithtemplate\ntraitdefinition.core.oam.dev/autoscale created\ntraitdefinition.core.oam.dev/scaler created\ntraitdefinition.core.oam.dev/metrics created\ntraitdefinition.core.oam.dev/rollout created\ntraitdefinition.core.oam.dev/route created\nworkloaddefinition.core.oam.dev/task created\nworkloaddefinition.core.oam.dev/webservice created\nworkloaddefinition.core.oam.dev/worker created\n\n$ vela workloads\nAutomatically discover capabilities successfully \u2705 Add(8) Update(0) Delete(0)\n\nTYPE        CATEGORY    DESCRIPTION\n+task       workload    One-off task to run a piece of code or script to completion\n+webservice workload    Long-running scalable service with stable endpoint to receive external traffic\n+worker     workload    Long-running scalable backend worker without network endpoint\n+autoscale  trait       Automatically scale the app following certain triggers or metrics\n+metrics    trait       Configure metrics targets to be monitored for the app\n+rollout    trait       Configure canary deployment strategy to release the app\n+route      trait       Configure route policy to the app\n+scaler     trait       Manually scale the app\n\nNAME        DESCRIPTION\ntask        One-off task to run a piece of code or script to completion\nwebservice  Long-running scalable service with stable endpoint to receive external traffic\nworker      Long-running scalable backend worker without network endpoint\n")),(0,o.kt)("h3",{id:"error-scopedefinition-exists"},"Error: ScopeDefinition exists"),(0,o.kt)("p",null,"\u4f60\u53ef\u80fd\u5076\u5c14\u4f1a\u78b0\u5230\u5982\u4e0b\u95ee\u9898\u3002\u5b83\u53d1\u751f\u5728\u5b58\u5728\u4e00\u4e2a\u8001\u7684 OAM Kubernetes Runtime \u53d1\u884c\u7248\u65f6\uff0c\u6216\u8005\u4f60\u4e4b\u524d\u5df2\u7ecf\u90e8\u7f72\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"ScopeDefinition")," \u3002 "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ vela install\n  - Installing Vela Core Chart:\n  install chart vela-core, version 0.1.0, desc : A Helm chart for Kube Vela core, contains 35 file\n  Failed to install the chart with error: ScopeDefinition "healthscopes.core.oam.dev" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; annotation validation error: key "meta.helm.sh/release-name" must equal "kubevela": current value is "oam"; annotation validation error: key "meta.helm.sh/release-namespace" must equal "vela-system": current value is "oam-system"\n  rendered manifests contain a resource that already exists. Unable to continue with install\n  helm.sh/helm/v3/pkg/action.(*Install).Run\n    /home/runner/go/pkg/mod/helm.sh/helm/v3@v3.2.4/pkg/action/install.go:274\n  ...\n  Error: rendered manifests contain a resource that already exists. Unable to continue with install: ScopeDefinition "healthscopes.core.oam.dev" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; annotation validation error: key "meta.helm.sh/release-name" must equal "kubevela": current value is "oam"; annotation validation error: key "meta.helm.sh/release-namespace" must equal "vela-system": current value is "oam-system"\n')),(0,o.kt)("p",null,"\u5220\u9664 ",(0,o.kt)("inlineCode",{parentName:"p"},"ScopeDefinition"),' "healthscopes.core.oam.dev" \u7136\u540e\u91cd\u8bd5.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ kubectl delete ScopeDefinition "healthscopes.core.oam.dev"\nscopedefinition.core.oam.dev "healthscopes.core.oam.dev" deleted\n\n$ vela install\n- Installing Vela Core Chart:\ninstall chart vela-core, version 0.1.0, desc : A Helm chart for Kube Vela core, contains 35 file\nSuccessfully installed the chart, status: deployed, last deployed time = 2020-12-03 16:26:41.491426 +0800 CST m=+4.026069452\nWARN: handle workload template `containerizedworkloads.core.oam.dev` failed: no template found, you will unable to use this workload capabilityWARN: handle trait template `manualscalertraits.core.oam.dev` failed\n: no template found, you will unable to use this trait capabilityAutomatically discover capabilities successfully \u2705 Add(8) Update(0) Delete(0)\n\nTYPE        CATEGORY    DESCRIPTION\n+task       workload    One-off task to run a piece of code or script to completion\n+webservice workload    Long-running scalable service with stable endpoint to receive external traffic\n+worker     workload    Long-running scalable backend worker without network endpoint\n+autoscale  trait       Automatically scale the app following certain triggers or metrics\n+metrics    trait       Configure metrics targets to be monitored for the app\n+rollout    trait       Configure canary deployment strategy to release the app\n+route      trait       Configure route policy to the app\n+scaler     trait       Manually scale the app\n\n- Finished successfully.\n')),(0,o.kt)("h3",{id:"you-have-reached-your-pull-rate-limit"},"You have reached your pull rate limit"),(0,o.kt)("p",null,"\u5f53\u4f60\u67e5\u770b Pod kubevela-vela-core \u7684\u65e5\u5fd7\u5e76\u53d1\u73b0\u5982\u4e0b\u95ee\u9898\u65f6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl get pod -n vela-system -l app.kubernetes.io/name=vela-core\nNAME                                 READY   STATUS    RESTARTS   AGE\nkubevela-vela-core-f8b987775-wjg25   0/1     -         0          35m\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Error response from daemon: toomanyrequests: You have reached your pull rate limit. You may increase the limit by\nauthenticating and upgrading: ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/increase-rate-limit"},"https://www.docker.com/increase-rate-limit"))),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u6362\u6210 github \u7684\u955c\u50cf\u4ed3\u5e93\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker pull ghcr.io/oam-dev/kubevela/vela-core:latest\n")),(0,o.kt)("h3",{id:"warning-namespace-cert-manager-exists"},"Warning: Namespace cert-manager exists"),(0,o.kt)("p",null,"\u5982\u679c\u78b0\u5230\u4ee5\u4e0b\u95ee\u9898\uff0c\u5219\u53ef\u80fd\u5b58\u5728\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"cert-manager")," \u53d1\u884c\u7248\uff0c\u5176 namespace \u53ca RBAC \u76f8\u5173\u8d44\u6e90\u4e0e KubeVela \u5b58\u5728\u51b2\u7a81\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ vela install\n- Installing Vela Core Chart:\ninstall chart vela-core, version 0.1.0, desc : A Helm chart for Kube Vela core, contains 35 file\nFailed to install the chart with error: Namespace "cert-manager" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; label validation error: missing key "app.kubernetes.io/managed-by": must be set to "Helm"; annotation validation error: missing key "meta.helm.sh/release-name": must be set to "kubevela"; annotation validation error: missing key "meta.helm.sh/release-namespace": must be set to "vela-system"\nrendered manifests contain a resource that already exists. Unable to continue with install\nhelm.sh/helm/v3/pkg/action.(*Install).Run\n        /home/runner/go/pkg/mod/helm.sh/helm/v3@v3.2.4/pkg/action/install.go:274\n...\n        /opt/hostedtoolcache/go/1.14.12/x64/src/runtime/asm_amd64.s:1373\nError: rendered manifests contain a resource that already exists. Unable to continue with install: Namespace "cert-manager" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; label validation error: missing key "app.kubernetes.io/managed-by": must be set to "Helm"; annotation validation error: missing key "meta.helm.sh/release-name": must be set to "kubevela"; annotation validation error: missing key "meta.helm.sh/release-namespace": must be set to "vela-system"\n')),(0,o.kt)("p",null,"\u5c1d\u8bd5\u5982\u4e0b\u6b65\u9aa4\u4fee\u590d\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5220\u9664 ",(0,o.kt)("inlineCode",{parentName:"li"},"cert-manager")," \u53d1\u884c\u7248"),(0,o.kt)("li",{parentName:"ul"},"\u5220\u9664 ",(0,o.kt)("inlineCode",{parentName:"li"},"cert-manager")," namespace "),(0,o.kt)("li",{parentName:"ul"},"\u91cd\u88c5 KubeVela")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ helm delete cert-manager -n cert-manager\nrelease "cert-manager" uninstalled\n\n$ kubectl delete ns cert-manager\nnamespace "cert-manager" deleted\n\n$ vela install\n- Installing Vela Core Chart:\ninstall chart vela-core, version 0.1.0, desc : A Helm chart for Kube Vela core, contains 35 file\nSuccessfully installed the chart, status: deployed, last deployed time = 2020-12-04 10:46:46.782617 +0800 CST m=+4.248889379\nAutomatically discover capabilities successfully \u2705 (no changes)\n\nTYPE        CATEGORY    DESCRIPTION\ntask        workload    One-off task to run a piece of code or script to completion\nwebservice  workload    Long-running scalable service with stable endpoint to receive external traffic\nworker      workload    Long-running scalable backend worker without network endpoint\nautoscale   trait       Automatically scale the app following certain triggers or metrics\nmetrics     trait       Configure metrics targets to be monitored for the app\nrollout     trait       Configure canary deployment strategy to release the app\nroute       trait       Configure route policy to the app\nscaler      trait       Manually scale the app\n- Finished successfully.\n')),(0,o.kt)("h3",{id:"\u5982\u4f55\u4fee\u590d\u95ee\u9898\uff1amutatingwebhookconfiguration-mutating-webhook-configuration-exists"},"\u5982\u4f55\u4fee\u590d\u95ee\u9898\uff1aMutatingWebhookConfiguration mutating-webhook-configuration exists?"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u90e8\u7f72\u7684\u5176\u4ed6\u670d\u52a1\u4f1a\u5b89\u88c5 MutatingWebhookConfiguration mutating-webhook-configuration\uff0c\u5219\u5b89\u88c5 KubeVela \u65f6\u4f1a\u78b0\u5230\u5982\u4e0b\u95ee\u9898\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'- Installing Vela Core Chart:\ninstall chart vela-core, version v0.2.1, desc : A Helm chart for Kube Vela core, contains 36 file\nFailed to install the chart with error: MutatingWebhookConfiguration "mutating-webhook-configuration" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; label validation error: missing key "app.kubernetes.io/managed-by": must be set to "Helm"; annotation validation error: missing key "meta.helm.sh/release-name": must be set to "kubevela"; annotation validation error: missing key "meta.helm.sh/release-namespace": must be set to "vela-system"\nrendered manifests contain a resource that already exists. Unable to continue with install\nhelm.sh/helm/v3/pkg/action.(*Install).Run\n    /home/runner/go/pkg/mod/helm.sh/helm/v3@v3.2.4/pkg/action/install.go:274\ngithub.com/oam-dev/kubevela/pkg/commands.InstallOamRuntime\n    /home/runner/work/kubevela/kubevela/pkg/commands/system.go:259\ngithub.com/oam-dev/kubevela/pkg/commands.(*initCmd).run\n    /home/runner/work/kubevela/kubevela/pkg/commands/system.go:162\ngithub.com/oam-dev/kubevela/pkg/commands.NewInstallCommand.func2\n    /home/runner/work/kubevela/kubevela/pkg/commands/system.go:119\ngithub.com/spf13/cobra.(*Command).execute\n    /home/runner/go/pkg/mod/github.com/spf13/cobra@v1.1.1/command.go:850\ngithub.com/spf13/cobra.(*Command).ExecuteC\n    /home/runner/go/pkg/mod/github.com/spf13/cobra@v1.1.1/command.go:958\ngithub.com/spf13/cobra.(*Command).Execute\n    /home/runner/go/pkg/mod/github.com/spf13/cobra@v1.1.1/command.go:895\nmain.main\n    /home/runner/work/kubevela/kubevela/references/cmd/cli/main.go:16\nruntime.main\n    /opt/hostedtoolcache/go/1.14.13/x64/src/runtime/proc.go:203\nruntime.goexit\n    /opt/hostedtoolcache/go/1.14.13/x64/src/runtime/asm_amd64.s:1373\nError: rendered manifests contain a resource that already exists. Unable to continue with install: MutatingWebhookConfiguration "mutating-webhook-configuration" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; label validation error: missing key "app.kubernetes.io/managed-by": must be set to "Helm"; annotation validation error: missing key "meta.helm.sh/release-name": must be set to "kubevela"; annotation validation error: missing key "meta.helm.sh/release-namespace": must be set to "vela-system"\n')),(0,o.kt)("p",null,"\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u8bf7\u4ece ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/releases"},"KubeVela releases")," \u5c06 KubeVela Cli ",(0,o.kt)("inlineCode",{parentName:"p"},"vela")," \u7248\u672c\u5347\u7ea7\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.2.2")," \u4ee5\u4e0a\u3002"),(0,o.kt)("h2",{id:"\u8fd0\u7ef4"},"\u8fd0\u7ef4"),(0,o.kt)("h3",{id:"autoscale-\u5982\u4f55\u5728\u591a\u4e2a-kubernetes-\u96c6\u7fa4\u4e0a\u5f00\u542f-metrics-server-\uff1f"},"Autoscale: \u5982\u4f55\u5728\u591a\u4e2a Kubernetes \u96c6\u7fa4\u4e0a\u5f00\u542f metrics server \uff1f"),(0,o.kt)("p",null,"\u8fd0\u7ef4 Autoscale \u4f9d\u8d56 metrics server\uff0c\u6240\u4ee5\u5b83\u5728\u8bb8\u591a\u96c6\u7fa4\u4e2d\u90fd\u662f\u5f00\u542f\u7684\u3002\u8bf7\u901a\u8fc7\u547d\u4ee4 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl top nodes")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl top pods")," \u68c0\u67e5 metrics server \u662f\u5426\u5f00\u542f\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u8f93\u51fa\u5982\u4e0b\u76f8\u4f3c\u5185\u5bb9\uff0c\u90a3\u4e48 metrics \u5df2\u7ecf\u5f00\u542f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl top nodes\nNAME                     CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%\ncn-hongkong.10.0.1.237   288m         7%     5378Mi          78%\ncn-hongkong.10.0.1.238   351m         8%     5113Mi          74%\n\n$ kubectl top pods\nNAME                          CPU(cores)   MEMORY(bytes)\nphp-apache-65f444bf84-cjbs5   0m           1Mi\nwordpress-55c59ccdd5-lf59d    1m           66Mi\n")),(0,o.kt)("p",null,"\u6216\u8005\u9700\u8981\u5728\u4f60\u7684 kubernetes \u96c6\u7fa4\u4e2d\u624b\u52a8\u5f00\u542f metrics \u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ACK (Alibaba Cloud Container Service for Kubernetes)")),(0,o.kt)("p",null,"Metrics server \u5df2\u7ecf\u5f00\u542f\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ASK (Alibaba Cloud Serverless Kubernetes)")),(0,o.kt)("p",null,"Metrics server \u5df2\u7ecf\u5728\u5982\u4e0b ",(0,o.kt)("a",{parentName:"p",href:"https://cs.console.aliyun.com/"},"Alibaba Cloud console")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Operations/Add-ons")," \u90e8\u5206\u5f00\u542f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(99735).Z})),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u6709\u66f4\u591a\u95ee\u9898\uff0c\u8bf7\u8bbf\u95ee ",(0,o.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/176515.html"},"metrics server \u6392\u9519\u6307\u5bfc")," \u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kind")),(0,o.kt)("p",null,"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5 metrics server\uff0c\u6216\u8005\u53ef\u4ee5\u5b89\u88c5 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/metrics-server#installation"},"\u6700\u65b0\u7248\u672c"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/download/v0.3.7/components.yaml\n")),(0,o.kt)("p",null,"\u5e76\u4e14\u5728\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl edit deploy -n kube-system metrics-server")," \u52a0\u8f7d\u7684 yaml \u6587\u4ef6\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.template.spec.containers")," \u4e0b\u589e\u52a0\u5982\u4e0b\u90e8\u5206\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a\u8fd9\u91cc\u53ea\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u800c\u4e0d\u662f\u7528\u4e8e\u751f\u4ea7\u7ea7\u522b\u7684\u4f7f\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"command:\n- /metrics-server\n- --kubelet-insecure-tls\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MiniKube")),(0,o.kt)("p",null,"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u5f00\u542f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ minikube addons enable metrics-server\n")),(0,o.kt)("p",null,"\u4eab\u53d7\u5728\u4f60\u7684\u5e94\u7528\u4e2d ",(0,o.kt)("a",{parentName:"p",href:"../../extensions/set-autoscale"},"\u8bbe\u7f6e autoscale"),"\u3002"))}u.isMDXComponent=!0},99735:function(e,t,n){"use strict";t.Z=n.p+"assets/images/install-metrics-server-in-ASK-2529e58d4997fdec13b35fa6c962a1a3.jpg"}}]);