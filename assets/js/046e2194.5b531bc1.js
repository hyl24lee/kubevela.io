(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8667],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=l,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(67294),l=a(80944),r=a(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var i=37,p=39;var u=function(e){var t=e.lazy,a=e.block,u=e.defaultValue,c=e.values,d=e.groupId,m=e.className,k=(0,l.Z)(),f=k.tabGroupChoices,b=k.setTabGroupChoices,h=(0,n.useState)(u),v=h[0],g=h[1],y=n.Children.toArray(e.children),N=[];if(null!=d){var w=f[d];null!=w&&w!==v&&c.some((function(e){return e.value===w}))&&g(w)}var C=function(e){var t=e.currentTarget,a=N.indexOf(t),n=c[a].value;g(n),null!=d&&(b(d,n),setTimeout((function(){var e,a,n,l,r,o,i,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,l=e.bottom,r=e.right,o=window,i=o.innerHeight,p=o.innerWidth,a>=0&&r<=p&&l<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,a;switch(e.keyCode){case p:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case i:var l=N.indexOf(e.target)-1;a=N[l]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},m)},c.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:C,onClick:C},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),l=a(79443);t.Z=function(){var e=(0,n.useContext)(l.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},95738:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(22122),l=a(19756),r=(a(67294),a(3905)),o=a(41395),s=a(58215),i={title:"Installation"},p={unversionedId:"install",id:"install",isDocsHomePage:!1,title:"Installation",description:"For upgrading existing KubeVela, please read the upgrade guide.",source:"@site/docs/install.mdx",sourceDirName:".",slug:"/install",permalink:"/docs/next/install",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/install.mdx",version:"current",lastUpdatedBy:"Hongchao Deng",lastUpdatedAt:1632295062,formattedLastUpdatedAt:"9/22/2021",frontMatter:{title:"Installation"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/"},next:{title:"Deploy First Application",permalink:"/docs/next/quick-start"}},u=[{value:"1. Choose Control Plane Cluster",id:"1-choose-control-plane-cluster",children:[]},{value:"2. Install KubeVela",id:"2-install-kubevela",children:[]},{value:"3. Optional Get KubeVela CLI",id:"3-optional-get-kubevela-cli",children:[]},{value:"4. Optional Enable Addons",id:"4-optional-enable-addons",children:[]},{value:"5. Verify",id:"5-verify",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],c={toc:u};function d(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For upgrading existing KubeVela, please read the ",(0,r.kt)("a",{parentName:"p",href:"./platform-engineers/advanced-install/#upgrade"},"upgrade guide"),".")),(0,r.kt)("h2",{id:"1-choose-control-plane-cluster"},"1. Choose Control Plane Cluster"),(0,r.kt)("p",null,"Requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes cluster >= v1.18.0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," installed and configured")),(0,r.kt)("p",null,"KubeVela relies on Kubernetes as control plane. The control plane could be any managed Kubernetes offering or your own cluster. "),(0,r.kt)("p",null,"For local deployment and test, you could use ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"minikube"),". For production usage, you could use Kubernetes services provided by cloud providers."),(0,r.kt)(o.Z,{className:"unique-tabs",defaultValue:"kind",values:[{label:"Kind",value:"kind"},{label:"Minikube",value:"minikube"},{label:"Cloud Provider",value:"cloudprovider"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"minikube",mdxType:"TabItem"},(0,r.kt)("p",null,"Follow the minikube ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"installation guide"),"."),(0,r.kt)("p",null,"Then spins up a minikube cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube start\n")),(0,r.kt)("details",null," ",(0,r.kt)("summary",null," Install ingress to enable service route "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube addons enable ingress\n")))),(0,r.kt)(s.Z,{value:"kind",mdxType:"TabItem"},(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"this guide")," to install kind."),(0,r.kt)("p",null,"Then spins up a kind cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'cat <<EOF | kind create cluster --image=kindest/node:v1.18.15 --config=-\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  kubeadmConfigPatches:\n  - |\n    kind: InitConfiguration\n    nodeRegistration:\n      kubeletExtraArgs:\n        node-labels: "ingress-ready=true"\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  - containerPort: 443\n    hostPort: 443\n    protocol: TCP\nEOF\n')),(0,r.kt)("details",null," ",(0,r.kt)("summary",null," Install ingress to enable service route "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml\n")))),(0,r.kt)(s.Z,{value:"cloudprovider",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alibaba Cloud ",(0,r.kt)("a",{parentName:"li",href:"https://www.aliyun.com/product/kubernetes"},"ACK Service")),(0,r.kt)("li",{parentName:"ul"},"AWS ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cn/eks"},"EKS Service")),(0,r.kt)("li",{parentName:"ul"},"Azure ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/kubernetes-service"},"AKS Service")),(0,r.kt)("li",{parentName:"ul"},"Google ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine"},"GKE Service"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please ensure ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"ingress-nginx")," is installed and enabled.")))),(0,r.kt)("h2",{id:"2-install-kubevela"},"2. Install KubeVela"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add and update helm chart repo for KubeVela"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add kubevela https://charts.kubevela.net/core\nhelm repo update\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install KubeVela"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core --set multicluster.enabled=true --wait\n")),(0,r.kt)("p",{parentName:"li"},"You can refer to ",(0,r.kt)("a",{parentName:"p",href:"./platform-engineers/advanced-install"},"advanced installation guide")," for more custom ways.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify chart installed successfully"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm test kubevela -n vela-system\n")),(0,r.kt)("details",null," ",(0,r.kt)("summary",null," Click to see the expected output of helm test "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Pod kubevela-application-test pending\nPod kubevela-application-test pending\nPod kubevela-application-test running\nPod kubevela-application-test succeeded\nNAME: kubevela\nLAST DEPLOYED: Tue Apr 13 18:42:20 2021\nNAMESPACE: vela-system\nSTATUS: deployed\nREVISION: 1\nTEST SUITE:     kubevela-application-test\nLast Started:   Fri Apr 16 20:49:10 2021\nLast Completed: Fri Apr 16 20:50:04 2021\nPhase:          Succeeded\nTEST SUITE:     first-vela-app\nLast Started:   Fri Apr 16 20:49:10 2021\nLast Completed: Fri Apr 16 20:49:10 2021\nPhase:          Succeeded\nNOTES:\nWelcome to use the KubeVela! Enjoy your shipping application journey!\n"))))),(0,r.kt)("h2",{id:"3-optional-get-kubevela-cli"},"3. ","[Optional]"," Get KubeVela CLI"),(0,r.kt)("p",null,"KubeVela CLI gives you a simplified workflow to manage applications with optimized output. It is not mandatory though."),(0,r.kt)("p",null,"KubeVela CLI could be ",(0,r.kt)("a",{parentName:"p",href:"./platform-engineers/advanced-install#install-kubectl-vela-plugin"},"installed as kubectl plugin"),", or install as standalone binary."),(0,r.kt)(o.Z,{className:"unique-tabs",defaultValue:"script",values:[{label:"Script",value:"script"},{label:"Homebrew",value:"homebrew"},{label:"Download directly from releases",value:"download"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"script",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," macOS/Linux ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install.sh | bash\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Windows")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'powershell -Command "iwr -useb https://kubevela.io/script/install.ps1 | iex"\n'))),(0,r.kt)(s.Z,{value:"homebrew",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"macOS/Linux")),(0,r.kt)("p",null,"Update your brew firstly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew update\n")),(0,r.kt)("p",null,"Then install kubevela client."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew install kubevela\n"))),(0,r.kt)(s.Z,{value:"download",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download the latest ",(0,r.kt)("inlineCode",{parentName:"li"},"vela")," binary from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/releases"},"releases page"),"."),(0,r.kt)("li",{parentName:"ul"},"Unpack the ",(0,r.kt)("inlineCode",{parentName:"li"},"vela")," binary and add it to ",(0,r.kt)("inlineCode",{parentName:"li"},"$PATH")," to get started.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo mv ./vela /usr/local/bin/vela\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Known Issue(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/issues/625"},"https://github.com/oam-dev/kubevela/issues/625"),"):\nIf you're using mac, it will report that \u201cvela\u201d cannot be opened because the developer cannot be verified."),(0,r.kt)("p",{parentName:"blockquote"},"The new version of MacOS is stricter about running software you've downloaded that isn't signed with an Apple developer key. And we haven't supported that for KubeVela yet.",(0,r.kt)("br",{parentName:"p"}),"\n","You can open your 'System Preference' -> 'Security & Privacy' -> General, click the 'Allow Anyway' to temporarily fix it.")))),(0,r.kt)("h2",{id:"4-optional-enable-addons"},"4. ","[Optional]"," Enable Addons"),(0,r.kt)("p",null,"KubeVela support a dozen of ",(0,r.kt)("a",{parentName:"p",href:"./platform-engineers/advanced-install#Addons"},"out-of-box addons"),",\nplease at least enable following addons to make sure KubeVela functioning well:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Helm and Kustomize Components addons"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable fluxcd\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Terraform addon"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable terraform\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Terraform Provider addon"),(0,r.kt)("p",{parentName:"li"},"Enable Terraform Alibaba Cloud Provider as below. Here is how to get ",(0,r.kt)("a",{parentName:"p",href:"https://help.aliyun.com/knowledge_detail/38738.html"},"access key"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable terraform/provider-alibaba ALICLOUD_ACCESS_KEY=xxx ALICLOUD_SECRET_KEY=yyy ALICLOUD_SECURITY_TOKEN=zzz\n")))),(0,r.kt)("h2",{id:"5-verify"},"5. Verify"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get comp -A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get trait -A")," instead if you haven't installed CLI.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get built-in component types by ",(0,r.kt)("inlineCode",{parentName:"p"},"vela")," CLI:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela components\n")),(0,r.kt)("details",null," ",(0,r.kt)("summary",null," Outputs "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"NAME            NAMESPACE   WORKLOAD                                DESCRIPTION\nalibaba-ack     vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud ACK cluster\nalibaba-oss     vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud OSS object\nalibaba-rds     vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud RDS object\nhelm            vela-system autodetects.core.oam.dev                helm release is a group of K8s resources from either git\n                                                                repository or helm repo\nkustomize       vela-system autodetects.core.oam.dev                kustomize can fetching, building, updating and applying\n                                                                Kustomize manifests from git repo.\nraw             vela-system autodetects.core.oam.dev                raw allow users to specify raw K8s object in properties\ntask            vela-system jobs.batch                              Describes jobs that run code or a script to completion.\nwebservice      vela-system deployments.apps                        Describes long-running, scalable, containerized services\n                                                                that have a stable network endpoint to receive external\n                                                                network traffic from customers.\nworker          vela-system deployments.apps                        Describes long-running, scalable, containerized services\n                                                                that running at backend. They do NOT have network endpoint\n                                                                to receive external network traffic.\n")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get built-in traits by ",(0,r.kt)("inlineCode",{parentName:"p"},"vela")," CLI:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela traits\n")),(0,r.kt)("details",null," ",(0,r.kt)("summary",null," Outputs "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"NAME                        NAMESPACE   APPLIES-TO          CONFLICTS-WITH  POD-DISRUPTIVE  DESCRIPTION\nannotations                 vela-system *                                   true            Add annotations on K8s pod for your workload which follows\n                                                                                        the pod spec in path 'spec.template'.\nconfigmap                   vela-system *                                   true            Create/Attach configmaps on K8s pod for your workload which\n                                                                                        follows the pod spec in path 'spec.template'.\ncpuscaler                   vela-system deployments.apps                    false           Automatically scale the component based on CPU usage.\nenv                         vela-system *                                   false           add env on K8s pod for your workload which follows the pod\n                                                                                        spec in path 'spec.template.'\nexpose                      vela-system                                     false           Expose port to enable web traffic for your component.\nhostalias                   vela-system *                                   false           Add host aliases on K8s pod for your workload which follows\n                                                                                        the pod spec in path 'spec.template'.\ningress                     vela-system                                     false           Enable public web traffic for the component.\ningress-1-20                vela-system                                     false           Enable public web traffic for the component, the ingress API\n                                                                                        matches K8s v1.20+.\ninit-container              vela-system deployments.apps                    true            add an init container and use shared volume with pod\nkustomize-json-patch        vela-system                                     false           A list of JSON6902 patch to selected target\nkustomize-patch             vela-system                                     false           A list of StrategicMerge or JSON6902 patch to selected\n                                                                                        target\nkustomize-strategy-merge    vela-system                                     false           A list of strategic merge to kustomize config\nlabels                      vela-system *                                   true            Add labels on K8s pod for your workload which follows the\n                                                                                        pod spec in path 'spec.template'.\nlifecycle                   vela-system *                                   true            Add lifecycle hooks for the first container of K8s pod for\n                                                                                        your workload which follows the pod spec in path\n                                                                                        'spec.template'.\nnode-affinity               vela-system *                                   true            affinity specify node affinity and toleration on K8s pod for\n                                                                                        your workload which follows the pod spec in path\n                                                                                        'spec.template'.\npvc                         vela-system deployments.apps                    true            Create a Persistent Volume Claim and mount the PVC as volume\n                                                                                        to the  first container in the pod\nresource                    vela-system *                                   true            Add resource requests and limits on K8s pod for your\n                                                                                        workload which follows the pod spec in path 'spec.template.'\nrollout                     vela-system                                     false           rollout the component\nscaler                      vela-system *                                   false           Manually scale K8s pod for your workload which follows the\n                                                                                        pod spec in path 'spec.template'.\nservice-binding             vela-system webservice,worker                   false           Binding secrets of cloud resources to component env\nsidecar                     vela-system *                                   true            Inject a sidecar container to K8s pod for your workload\n                                                                                        which follows the pod spec in path 'spec.template'.\nvolumes                     vela-system deployments.apps                    true            Add volumes on K8s pod for your workload which follows the\n                                                                                        pod spec in path 'spec.template'.\n"))))),(0,r.kt)("p",null,"These capabilities are built-in so they are ready to use if showed up. KubeVela is designed to be programmable and fully self-service, so the assumption is more capabilities will be added later per your own needs. "),(0,r.kt)("h2",{id:"whats-next"},"What's Next"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start to ",(0,r.kt)("a",{parentName:"li",href:"./quick-start"},"deploy our first application"),"."),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"./platform-engineers/advanced-install"},"advanced installation guide")," to learn more about installation details.")))}d.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}a.d(t,{Z:function(){return l}})}}]);