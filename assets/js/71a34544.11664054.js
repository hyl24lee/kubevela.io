(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8197],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),i=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=i(e.components);return r.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(t),m=n,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(v,o(o({ref:a},p),{},{components:t})):r.createElement(v,o({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=d;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9880:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=t(2122),n=t(9756),l=(t(7294),t(3905)),o={title:"Other Install Topics"},c={unversionedId:"advanced-install",id:"version-v1.0/advanced-install",isDocsHomePage:!1,title:"Other Install Topics",description:"Install KubeVela with cert-manager",source:"@site/versioned_docs/version-v1.0/advanced-install.md",sourceDirName:".",slug:"/advanced-install",permalink:"/docs/advanced-install",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/advanced-install.md",version:"v1.0",lastUpdatedBy:"yangsoon",lastUpdatedAt:1629786653,formattedLastUpdatedAt:"8/24/2021",frontMatter:{title:"Other Install Topics"},sidebar:"version-v1.0/docs",previous:{title:"KubeVela Roadmap",permalink:"/docs/roadmap"},next:{title:"FAQ",permalink:"/docs/developers/references/devex/faq"}},s=[{value:"Install KubeVela with cert-manager",id:"install-kubevela-with-cert-manager",children:[]},{value:"Install Pre-release",id:"install-pre-release",children:[]},{value:"Upgrade",id:"upgrade",children:[{value:"Step 1. Update Helm repo",id:"step-1-update-helm-repo",children:[]},{value:"Step 2. Upgrade KubeVela CRDs",id:"step-2-upgrade-kubevela-crds",children:[]},{value:"Step 3. Upgrade KubeVela Helm chart",id:"step-3-upgrade-kubevela-helm-chart",children:[]}]},{value:"Clean Up",id:"clean-up",children:[]}],i={toc:s};function p(e){var a=e.components,t=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"install-kubevela-with-cert-manager"},"Install KubeVela with cert-manager"),(0,l.kt)("p",null,"KubeVela can use cert-manager generate certs for your application if it's available. Note that you need to install cert-manager ",(0,l.kt)("strong",{parentName:"p"},"before")," the KubeVela chart."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.2.0 --create-namespace --set installCRDs=true\n")),(0,l.kt)("p",null,"Install kubevela with enabled certmanager:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system --set admissionWebhooks.certManager.enabled=true kubevela kubevela/vela-core\n")),(0,l.kt)("h2",{id:"install-pre-release"},"Install Pre-release"),(0,l.kt)("p",null,"Add flag ",(0,l.kt)("inlineCode",{parentName:"p"},"--devel")," in command ",(0,l.kt)("inlineCode",{parentName:"p"},"helm search")," to choose a pre-release\nversion in format ",(0,l.kt)("inlineCode",{parentName:"p"},"<next_version>-rc-master"),". It means a release candidate version build on ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," branch,\nsuch as ",(0,l.kt)("inlineCode",{parentName:"p"},"0.4.0-rc-master"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm search repo kubevela/vela-core -l --devel\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"    NAME                      CHART VERSION         APP VERSION           DESCRIPTION\n    kubevela/vela-core        0.4.0-rc-master         0.4.0-rc-master         A Helm chart for KubeVela core\n    kubevela/vela-core        0.3.2                   0.3.2                   A Helm chart for KubeVela core\n    kubevela/vela-core        0.3.1                 0.3.1                 A Helm chart for KubeVela core\n")),(0,l.kt)("p",null,"And try the following command to install it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core --version <next_version>-rc-master\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"NAME: kubevela\nLAST DEPLOYED: Thu Apr  1 19:41:30 2021\nNAMESPACE: vela-system\nSTATUS: deployed\nREVISION: 1\nNOTES:\nWelcome to use the KubeVela! Enjoy your shipping application journey!\n")),(0,l.kt)("h2",{id:"upgrade"},"Upgrade"),(0,l.kt)("h3",{id:"step-1-update-helm-repo"},"Step 1. Update Helm repo"),(0,l.kt)("p",null,"You can explore the newly released chart versions of KubeVela by run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo update\nhelm search repo kubevela/vela-core -l\n")),(0,l.kt)("h3",{id:"step-2-upgrade-kubevela-crds"},"Step 2. Upgrade KubeVela CRDs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_componentdefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_workloaddefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_traitdefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_applications.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_approllouts.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_applicationrevisions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_scopedefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_appdeployments.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_applicationcontexts.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_definitionrevisions.yaml\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: If you see errors like ",(0,l.kt)("inlineCode",{parentName:"p"},'* is invalid: spec.scope: Invalid value: "Namespaced": filed is immutable'),". Please delete the CRD which reports error and re-apply the kubevela crds.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"}," kubectl delete crd \\\n  scopedefinitions.core.oam.dev \\\n  traitdefinitions.core.oam.dev \\\n  workloaddefinitions.core.oam.dev\n")),(0,l.kt)("h3",{id:"step-3-upgrade-kubevela-helm-chart"},"Step 3. Upgrade KubeVela Helm chart"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade --install --create-namespace --namespace vela-system  kubevela kubevela/vela-core --version <the_new_version>\n")),(0,l.kt)("h2",{id:"clean-up"},"Clean Up"),(0,l.kt)("p",null,"Run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm uninstall -n vela-system kubevela\nrm -r ~/.vela\n")),(0,l.kt)("p",null,"This will uninstall KubeVela server component and its dependency components.\nThis also cleans up local CLI cache."),(0,l.kt)("p",null,"Then clean up CRDs (CRDs are not removed via helm by default):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0}," kubectl delete crd \\\n  appdeployments.core.oam.dev \\\n  applicationconfigurations.core.oam.dev \\\n  applicationcontexts.core.oam.dev \\\n  applicationrevisions.core.oam.dev \\\n  applications.core.oam.dev \\\n  approllouts.core.oam.dev \\\n  componentdefinitions.core.oam.dev \\\n  components.core.oam.dev \\\n  containerizedworkloads.core.oam.dev \\\n  healthscopes.core.oam.dev \\\n  manualscalertraits.core.oam.dev \\\n  podspecworkloads.standard.oam.dev \\\n  scopedefinitions.core.oam.dev \\\n  traitdefinitions.core.oam.dev \\\n  workloaddefinitions.core.oam.dev \\\n  definitionrevisions.core.oam.dev\n")))}p.isMDXComponent=!0}}]);