(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8667],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(67294),r=a(80944),l=a(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var i=37,p=39;var u=function(e){var t=e.lazy,a=e.block,u=e.defaultValue,c=e.values,d=e.groupId,m=e.className,k=(0,r.Z)(),h=k.tabGroupChoices,b=k.setTabGroupChoices,f=(0,n.useState)(u),v=f[0],g=f[1],y=n.Children.toArray(e.children),N=[];if(null!=d){var w=h[d];null!=w&&w!==v&&c.some((function(e){return e.value===w}))&&g(w)}var C=function(e){var t=e.currentTarget,a=N.indexOf(t),n=c[a].value;g(n),null!=d&&(b(d,n),setTimeout((function(){var e,a,n,r,l,o,i,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,o=window,i=o.innerHeight,p=o.innerWidth,a>=0&&l<=p&&r<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},A=function(e){var t,a;switch(e.keyCode){case p:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case i:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},c.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:A,onFocus:C,onClick:C},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),r=a(79443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},95738:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),o=a(41395),s=a(58215),i={title:"Installation"},p={unversionedId:"install",id:"install",isDocsHomePage:!1,title:"Installation",description:"For upgrading existing KubeVela, please read the upgrade guide.",source:"@site/docs/install.mdx",sourceDirName:".",slug:"/install",permalink:"/docs/next/install",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/install.mdx",version:"current",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1635745144,formattedLastUpdatedAt:"11/1/2021",frontMatter:{title:"Installation"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/"},next:{title:"Deploy First Application",permalink:"/docs/next/quick-start"}},u=[{value:"1. Choose Control Plane Cluster",id:"1-choose-control-plane-cluster",children:[]},{value:"2. Install KubeVela",id:"2-install-kubevela",children:[]},{value:"3. Optional Get KubeVela CLI",id:"3-optional-get-kubevela-cli",children:[]},{value:"4. Optional Enable Addons",id:"4-optional-enable-addons",children:[]},{value:"5. Verify",id:"5-verify",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],c={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For upgrading existing KubeVela, please read the ",(0,l.kt)("a",{parentName:"p",href:"./platform-engineers/advanced-install/#upgrade"},"upgrade guide"),".")),(0,l.kt)("h2",{id:"1-choose-control-plane-cluster"},"1. Choose Control Plane Cluster"),(0,l.kt)("p",null,"Requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes cluster >= v1.18.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kubectl")," installed and configured")),(0,l.kt)("p",null,"KubeVela relies on Kubernetes as control plane. The control plane could be any managed Kubernetes offering or your own cluster. "),(0,l.kt)("p",null,"For local deployment and test, you could use ",(0,l.kt)("inlineCode",{parentName:"p"},"kind")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"minikube"),". For production usage, you could use Kubernetes services provided by cloud providers."),(0,l.kt)(o.Z,{className:"unique-tabs",defaultValue:"kind",values:[{label:"Kind",value:"kind"},{label:"RKE",value:"rke"},{label:"Minikube",value:"minikube"},{label:"Cloud Provider",value:"cloudprovider"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"minikube",mdxType:"TabItem"},(0,l.kt)("p",null,"Follow the minikube ",(0,l.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"installation guide"),"."),(0,l.kt)("p",null,"Then spins up a minikube cluster"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube start\n")),(0,l.kt)("details",null," ",(0,l.kt)("summary",null," Install ingress to enable service route "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube addons enable ingress\n")))),(0,l.kt)(s.Z,{value:"rke",mdxType:"TabItem"},(0,l.kt)("b",null,"\uff081\uff09Install docker:"),(0,l.kt)("p",null,"  The rke depend on docker, Follow the docker ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"installation guide"),"."),(0,l.kt)("b",null,"\uff082\uff09Install rke:"),(0,l.kt)("p",null,"  Download rke binary from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke/releases"},"rke release page"),"."),(0,l.kt)("p",null,"  If you have limited Internet access:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"wget https://static.kubevela.net/binary/rke/rke_linux-amd64 -O /usr/bin/rke\nchmod +x /usr/bin/rke\n")),(0,l.kt)("b",null,"\uff083\uff09Install kubernetes cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"  mkdir ~/rkeinit && cd ~/rkeinit\n  # Wizard-style configuration\n  rke config\n  # Kubernetes Cluster Installation\n  rke up\n  # Install kubectl Command\n  mkdir ~/.kube\n  cp kube_config_cluster.yml ~/.kube/config\n  docker cp kubelet:/usr/local/bin/kubectl /usr/local/bin/kubectl\n"))),(0,l.kt)(s.Z,{value:"kind",mdxType:"TabItem"},(0,l.kt)("p",null,"Follow ",(0,l.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"this guide")," to install kind."),(0,l.kt)("p",null,"Then spins up a kind cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'cat <<EOF | kind create cluster --image=kindest/node:v1.18.15 --config=-\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  kubeadmConfigPatches:\n  - |\n    kind: InitConfiguration\n    nodeRegistration:\n      kubeletExtraArgs:\n        node-labels: "ingress-ready=true"\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  - containerPort: 443\n    hostPort: 443\n    protocol: TCP\nEOF\n')),(0,l.kt)("details",null," ",(0,l.kt)("summary",null," Install ingress to enable service route "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml\n")))),(0,l.kt)(s.Z,{value:"cloudprovider",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Alibaba Cloud ",(0,l.kt)("a",{parentName:"li",href:"https://www.aliyun.com/product/kubernetes"},"ACK Service")),(0,l.kt)("li",{parentName:"ul"},"AWS ",(0,l.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cn/eks"},"EKS Service")),(0,l.kt)("li",{parentName:"ul"},"Azure ",(0,l.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/kubernetes-service"},"AKS Service")),(0,l.kt)("li",{parentName:"ul"},"Google ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine"},"GKE Service"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Please ensure ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"ingress-nginx")," is installed and enabled.")))),(0,l.kt)("h2",{id:"2-install-kubevela"},"2. Install KubeVela"),(0,l.kt)("p",null,"Before install, you have to make sure the helm is available. Follow ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"this guide")," to install helm."),(0,l.kt)("p",null,"If you have limited Internet access"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"wget https://static.kubevela.net/binary/helm/helm-v3.7.0-linux-amd64 -O /usr/bin/helm\nchmod +x /usr/bin/helm\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Add and update helm chart repo for KubeVela"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add kubevela https://charts.kubevela.net/core\nhelm repo update\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install KubeVela"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core --set multicluster.enabled=true --wait\n")),(0,l.kt)("p",{parentName:"li"},"You can refer to ",(0,l.kt)("a",{parentName:"p",href:"./platform-engineers/advanced-install"},"advanced installation guide")," for more custom ways.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Verify chart installed successfully"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm test kubevela -n vela-system\n")),(0,l.kt)("details",null," ",(0,l.kt)("summary",null," Click to see the expected output of helm test "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Pod kubevela-application-test pending\nPod kubevela-application-test pending\nPod kubevela-application-test running\nPod kubevela-application-test succeeded\nNAME: kubevela\nLAST DEPLOYED: Tue Apr 13 18:42:20 2021\nNAMESPACE: vela-system\nSTATUS: deployed\nREVISION: 1\nTEST SUITE:     kubevela-application-test\nLast Started:   Fri Apr 16 20:49:10 2021\nLast Completed: Fri Apr 16 20:50:04 2021\nPhase:          Succeeded\nTEST SUITE:     first-vela-app\nLast Started:   Fri Apr 16 20:49:10 2021\nLast Completed: Fri Apr 16 20:49:10 2021\nPhase:          Succeeded\nNOTES:\nWelcome to use the KubeVela! Enjoy your shipping application journey!\n"))))),(0,l.kt)("h2",{id:"3-optional-get-kubevela-cli"},"3. ","[Optional]"," Get KubeVela CLI"),(0,l.kt)("p",null,"KubeVela CLI gives you a simplified workflow to manage applications with optimized output. It is not mandatory though."),(0,l.kt)("p",null,"KubeVela CLI could be ",(0,l.kt)("a",{parentName:"p",href:"./platform-engineers/advanced-install#install-kubectl-vela-plugin"},"installed as kubectl plugin"),", or install as standalone binary."),(0,l.kt)(o.Z,{className:"unique-tabs",defaultValue:"script",values:[{label:"Script",value:"script"},{label:"Homebrew",value:"homebrew"},{label:"Download directly from releases",value:"download"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"script",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," macOS/Linux ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install.sh | bash\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Windows")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'powershell -Command "iwr -useb https://kubevela.io/script/install.ps1 | iex"\n'))),(0,l.kt)(s.Z,{value:"homebrew",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"macOS/Linux")),(0,l.kt)("p",null,"Update your brew firstly."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew update\n")),(0,l.kt)("p",null,"Then install kubevela client."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew install kubevela\n"))),(0,l.kt)(s.Z,{value:"download",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download the latest ",(0,l.kt)("inlineCode",{parentName:"li"},"vela")," binary from the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/releases"},"releases page"),"."),(0,l.kt)("li",{parentName:"ul"},"Unpack the ",(0,l.kt)("inlineCode",{parentName:"li"},"vela")," binary and add it to ",(0,l.kt)("inlineCode",{parentName:"li"},"$PATH")," to get started.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo mv ./vela /usr/local/bin/vela\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Known Issue(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/issues/625"},"https://github.com/oam-dev/kubevela/issues/625"),"):\nIf you're using mac, it will report that \u201cvela\u201d cannot be opened because the developer cannot be verified."),(0,l.kt)("p",{parentName:"blockquote"},"The new version of MacOS is stricter about running software you've downloaded that isn't signed with an Apple developer key. And we haven't supported that for KubeVela yet.",(0,l.kt)("br",{parentName:"p"}),"\n","You can open your 'System Preference' -> 'Security & Privacy' -> General, click the 'Allow Anyway' to temporarily fix it.")))),(0,l.kt)("h2",{id:"4-optional-enable-addons"},"4. ","[Optional]"," Enable Addons"),(0,l.kt)("p",null,"KubeVela support a dozen of ",(0,l.kt)("a",{parentName:"p",href:"./platform-engineers/advanced-install#Addons"},"out-of-box addons"),",\nplease at least enable following addons to make sure KubeVela functioning well:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Helm and Kustomize Components addons"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable fluxcd\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Terraform addon"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable terraform\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Terraform Provider addon for Alibaba Cloud"),(0,l.kt)("p",{parentName:"li"},"Enable Terraform Alibaba Cloud Provider as below to ",(0,l.kt)("a",{parentName:"p",href:"./end-user/components/cloud-services/provider-and-consume-cloud-services"},"provision and/or consume cloud resources"),"."),(0,l.kt)("p",{parentName:"li"},"Here is how to get ",(0,l.kt)("a",{parentName:"p",href:"https://help.aliyun.com/knowledge_detail/38738.html"},"access key"),". Set the value for ",(0,l.kt)("inlineCode",{parentName:"p"},"ALICLOUD_REGION")," by picking one ",(0,l.kt)("inlineCode",{parentName:"p"},"RegionId")," from ",(0,l.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/72379.htm"},"Alibaba Cloud region list"),".\nYou can also set the value for parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"ALICLOUD_SECURITY_TOKEN"),", which is optional, per ",(0,l.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/28756.htm"},"this doc"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable terraform/provider-alibaba ALICLOUD_ACCESS_KEY=<xxx> ALICLOUD_SECRET_KEY=<yyy> ALICLOUD_REGION=<region>\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Terraform Provider addon for Azure"),(0,l.kt)("p",{parentName:"li"},"Enable Terraform Azure Provider as below to ",(0,l.kt)("a",{parentName:"p",href:"./end-user/components/cloud-services/provider-and-consume-cloud-services"},"provision and/or consume cloud resources"),"."),(0,l.kt)("p",{parentName:"li"},"Set these parameters below per ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/developer/terraform/authenticate-to-azure?tabs=bash"},"Authenticate Terraform to Azure"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable terraform/provider-azure ARM_CLIENT_ID=<aaa> ARM_CLIENT_SECRET=<bbb> ARM_SUBSCRIPTION_ID=<ccc> ARM_TENANT_ID=<ddd>\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Terraform Provider addon for AWS"),(0,l.kt)("p",{parentName:"li"},"Enable Terraform AWS Provider as below to ",(0,l.kt)("a",{parentName:"p",href:"./end-user/components/cloud-services/provider-and-consume-cloud-services"},"provision and/or consume cloud resources"),"."),(0,l.kt)("p",{parentName:"li"},"Set these parameters below per ",(0,l.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs#environment-variables"},"Authenticate Terraform to AWS"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable terraform/provider-aws AWS_ACCESS_KEY_ID=<aaa> AWS_SECRET_ACCESS_KEY=<bbb> AWS_DEFAULT_REGION=<region>\n")))),(0,l.kt)("h2",{id:"5-verify"},"5. Verify"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can also using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get comp -A")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get trait -A")," instead if you haven't installed CLI.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Get built-in component types by ",(0,l.kt)("inlineCode",{parentName:"p"},"vela")," CLI:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela components\n")),(0,l.kt)("details",null," ",(0,l.kt)("summary",null," Outputs "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-console"},"NAME            NAMESPACE   WORKLOAD                                DESCRIPTION\nalibaba-ack     vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud ACK cluster\nalibaba-oss     vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud OSS object\nalibaba-rds     vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud RDS object\nhelm            vela-system autodetects.core.oam.dev                helm release is a group of K8s resources from either git\n                                                                repository or helm repo\nkustomize       vela-system autodetects.core.oam.dev                kustomize can fetching, building, updating and applying\n                                                                Kustomize manifests from git repo.\nraw             vela-system autodetects.core.oam.dev                raw allow users to specify raw K8s object in properties\ntask            vela-system jobs.batch                              Describes jobs that run code or a script to completion.\nwebservice      vela-system deployments.apps                        Describes long-running, scalable, containerized services\n                                                                that have a stable network endpoint to receive external\n                                                                network traffic from customers.\nworker          vela-system deployments.apps                        Describes long-running, scalable, containerized services\n                                                                that running at backend. They do NOT have network endpoint\n                                                                to receive external network traffic.\n")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Get built-in traits by ",(0,l.kt)("inlineCode",{parentName:"p"},"vela")," CLI:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela traits\n")),(0,l.kt)("details",null," ",(0,l.kt)("summary",null," Outputs "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-console"},"NAME                        NAMESPACE   APPLIES-TO          CONFLICTS-WITH  POD-DISRUPTIVE  DESCRIPTION\nannotations                 vela-system *                                   true            Add annotations on K8s pod for your workload which follows\n                                                                                        the pod spec in path 'spec.template'.\nconfigmap                   vela-system *                                   true            Create/Attach configmaps on K8s pod for your workload which\n                                                                                        follows the pod spec in path 'spec.template'.\ncpuscaler                   vela-system deployments.apps                    false           Automatically scale the component based on CPU usage.\nenv                         vela-system *                                   false           add env on K8s pod for your workload which follows the pod\n                                                                                        spec in path 'spec.template.'\nexpose                      vela-system                                     false           Expose port to enable web traffic for your component.\nhostalias                   vela-system *                                   false           Add host aliases on K8s pod for your workload which follows\n                                                                                        the pod spec in path 'spec.template'.\ningress                     vela-system                                     false           Enable public web traffic for the component.\ningress-1-20                vela-system                                     false           Enable public web traffic for the component, the ingress API\n                                                                                        matches K8s v1.20+.\ninit-container              vela-system deployments.apps                    true            add an init container and use shared volume with pod\nkustomize-json-patch        vela-system                                     false           A list of JSON6902 patch to selected target\nkustomize-patch             vela-system                                     false           A list of StrategicMerge or JSON6902 patch to selected\n                                                                                        target\nkustomize-strategy-merge    vela-system                                     false           A list of strategic merge to kustomize config\nlabels                      vela-system *                                   true            Add labels on K8s pod for your workload which follows the\n                                                                                        pod spec in path 'spec.template'.\nlifecycle                   vela-system *                                   true            Add lifecycle hooks for the first container of K8s pod for\n                                                                                        your workload which follows the pod spec in path\n                                                                                        'spec.template'.\nnode-affinity               vela-system *                                   true            affinity specify node affinity and toleration on K8s pod for\n                                                                                        your workload which follows the pod spec in path\n                                                                                        'spec.template'.\npvc                         vela-system deployments.apps                    true            Create a Persistent Volume Claim and mount the PVC as volume\n                                                                                        to the  first container in the pod\nresource                    vela-system *                                   true            Add resource requests and limits on K8s pod for your\n                                                                                        workload which follows the pod spec in path 'spec.template.'\nrollout                     vela-system                                     false           rollout the component\nscaler                      vela-system *                                   false           Manually scale K8s pod for your workload which follows the\n                                                                                        pod spec in path 'spec.template'.\nservice-binding             vela-system webservice,worker                   false           Binding secrets of cloud resources to component env\nsidecar                     vela-system *                                   true            Inject a sidecar container to K8s pod for your workload\n                                                                                        which follows the pod spec in path 'spec.template'.\nvolumes                     vela-system deployments.apps                    true            Add volumes on K8s pod for your workload which follows the\n                                                                                        pod spec in path 'spec.template'.\n"))))),(0,l.kt)("p",null,"These capabilities are built-in so they are ready to use if showed up. KubeVela is designed to be programmable and fully self-service, so the assumption is more capabilities will be added later per your own needs. "),(0,l.kt)("h2",{id:"whats-next"},"What's Next"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Start to ",(0,l.kt)("a",{parentName:"li",href:"./quick-start"},"deploy our first application"),"."),(0,l.kt)("li",{parentName:"ul"},"See the ",(0,l.kt)("a",{parentName:"li",href:"./platform-engineers/advanced-install"},"advanced installation guide")," to learn more about installation details.")))}d.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);