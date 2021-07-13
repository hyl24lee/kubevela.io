(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6873],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||p;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<p;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78656:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return i},default:function(){return c}});var a=n(22122),r=n(19756),p=(n(67294),n(3905)),o={title:"Placement"},l={unversionedId:"end-user/scopes/appdeploy",id:"version-v1.1/end-user/scopes/appdeploy",isDocsHomePage:!1,title:"Placement",description:"Introduction",source:"@site/versioned_docs/version-v1.1/end-user/scopes/appdeploy.md",sourceDirName:"end-user/scopes",slug:"/end-user/scopes/appdeploy",permalink:"/zh/docs/v1.1/end-user/scopes/appdeploy",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/scopes/appdeploy.md",version:"v1.1",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1624242441,formattedLastUpdatedAt:"2021/6/21",frontMatter:{title:"Placement"},sidebar:"version-v1.1/docs",previous:{title:"Want More?",permalink:"/zh/docs/v1.1/end-user/traits/more"},next:{title:"Rollout Plan",permalink:"/zh/docs/v1.1/end-user/scopes/rollout-plan"}},i=[{value:"Introduction",id:"introduction",children:[{value:"AppDeployment",id:"appdeployment",children:[]},{value:"Cluster",id:"cluster",children:[]}]},{value:"Quickstart",id:"quickstart",children:[]}],s={toc:i};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"introduction"},"Introduction"),(0,p.kt)("p",null,"In this section, we will introduce how to use KubeVela to place application across multiple clusters with traffic management enabled. For traffic management, KubeVela currently allows you to split the traffic onto both the old and new revisions during rolling update and verify the new version while preserving service availability."),(0,p.kt)("h3",{id:"appdeployment"},"AppDeployment"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"AppDeployment")," API in KubeVela is provided to satisfy such requirements. Here's an overview of the API:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: AppDeployment\nmetadata:\n  name: sample-appdeploy\nspec:\n  traffic:\n    hosts:\n      - example.com\n\n    http:\n      - match:\n          # match any requests to 'example.com/example-app'\n          - uri:\n              prefix: \"/example-app\"\n\n        # split traffic 50/50 on v1/v2 versions of the app\n        weightedTargets:\n          - revisionName: example-app-v1\n            componentName: testsvc\n            port: 80\n            weight: 50\n          - revisionName: example-app-v2\n            componentName: testsvc\n            port: 80\n            weight: 50\n\n  appRevisions:\n    - # Name of the AppRevision.\n      # Each modification to Application would generate a new AppRevision.\n      revisionName: example-app-v1\n\n      # Cluster specific workload placement config\n      placement:\n        - clusterSelector:\n            # You can select Clusters by name or labels.\n            # If multiple clusters is selected, one will be picked via a unique hashing algorithm.\n            labels:\n              tier: production\n            name: prod-cluster-1\n\n          distribution:\n            replicas: 5\n\n        - # If no clusterSelector is given, it will use the host cluster in which this CR exists\n          distribution:\n            replicas: 5\n\n    - revisionName: example-app-v2\n      placement:\n        - clusterSelector:\n            labels:\n              tier: production\n            name: prod-cluster-1\n          distribution:\n            replicas: 5\n        - distribution:\n            replicas: 5\n")),(0,p.kt)("h3",{id:"cluster"},"Cluster"),(0,p.kt)("p",null,"The clusters selected in the ",(0,p.kt)("inlineCode",{parentName:"p"},"placement")," part from above is defined in Cluster CRD. Here's what it looks like:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Cluster\nmetadata:\n  name: prod-cluster-1\n  labels:\n    tier: production\nspec:\n  kubeconfigSecretRef:\n    name: kubeconfig-cluster-1 # the secret name\n")),(0,p.kt)("p",null,"The secret must contain the kubeconfig credentials in ",(0,p.kt)("inlineCode",{parentName:"p"},"config")," field:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: kubeconfig-cluster-1\ndata:\n  config: ... # kubeconfig data\n")),(0,p.kt)("h2",{id:"quickstart"},"Quickstart"),(0,p.kt)("p",null,"Here's a step-by-step tutorial for you to try out. All of the yaml files are from ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/appdeployment"},(0,p.kt)("inlineCode",{parentName:"a"},"docs/examples/appdeployment/")),".\nYou must run all commands in that directory."),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Create an Application"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: example-app\n  annotations:\n    app.oam.dev/revision-only: "true"\nspec:\n  components:\n    - name: testsvc\n      type: webservice\n      properties:\n        addRevisionLabel: true\n        image: crccheck/hello-world\n        port: 8000\nEOF\n')),(0,p.kt)("p",{parentName:"li"},"This will create ",(0,p.kt)("inlineCode",{parentName:"p"},"example-app-v1")," AppRevision. Check it:"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get applicationrevisions.core.oam.dev\n")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-console"},"NAME             AGE\nexample-app-v1   116s\n")),(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"Note: with ",(0,p.kt)("inlineCode",{parentName:"p"},'app.oam.dev/revision-only: "true"')," annotation, above ",(0,p.kt)("inlineCode",{parentName:"p"},"Application")," resource won't create any pod instances and leave the real deployment process to ",(0,p.kt)("inlineCode",{parentName:"p"},"AppDeployment"),"."))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Then use the above AppRevision to create an AppDeployment."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f appdeployment-1.yaml\n")),(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"Note: in order to AppDeployment to work, your workload object must have a ",(0,p.kt)("inlineCode",{parentName:"p"},"spec.replicas")," field for scaling."))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Now you can check that there will 1 deployment and 2 pod instances deployed"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deploy\n")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-console"},"NAME         READY   UP-TO-DATE   AVAILABLE   AGE\ntestsvc-v1   2/2     2            0           27s\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Update Application properties:"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: example-app\n  annotations:\n    app.oam.dev/revision-only: "true"\nspec:\n  components:\n    - name: testsvc\n      type: webservice\n      properties:\n        addRevisionLabel: true\n        image: nginx\n        port: 80\nEOF\n')),(0,p.kt)("p",{parentName:"li"},"This will create a new ",(0,p.kt)("inlineCode",{parentName:"p"},"example-app-v2")," AppRevision. Check it:"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get applicationrevisions.core.oam.dev\n")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-console"},"NAME\nexample-app-v1\nexample-app-v2\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Then use the two AppRevisions to update the AppDeployment:"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f appdeployment-2.yaml\n")),(0,p.kt)("p",{parentName:"li"},"(Optional) If you have Istio installed, you can apply the AppDeployment with traffic split:"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"# set up gateway if not yet\nkubectl apply -f gateway.yaml\n\nkubectl apply -f appdeployment-2-traffic.yaml\n")),(0,p.kt)("p",{parentName:"li"},"Note that for traffic split to work, your must set the following pod labels in workload cue templates (see ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/hack/vela-templates/cue/webservice.cue"},"webservice.cue"),"):"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'"app.oam.dev/component": context.name\n"app.oam.dev/appRevision": context.appRevision\n'))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Now you can check that there will 1 deployment and 1 pod per revision."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deploy\n")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-console"},"NAME         READY   UP-TO-DATE   AVAILABLE   AGE\ntestsvc-v1   1/1     1            1           2m14s\ntestsvc-v2   1/1     1            1           8s\n")),(0,p.kt)("p",{parentName:"li"},"(Optional) To verify traffic split:"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"# run this in another terminal\nkubectl -n istio-system port-forward service/istio-ingressgateway 8080:80\n")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-console"},'Forwarding from 127.0.0.1:8080 -> 8080\nForwarding from [::1]:8080 -> 8080\n\n# The command should return pages of either docker whale or nginx in 50/50\n$ curl -H "Host: example-app.example.com" http://localhost:8080/\n'))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Cleanup:"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete appdeployments.core.oam.dev --all\nkubectl delete applications.core.oam.dev --all\n")))))}c.isMDXComponent=!0}}]);