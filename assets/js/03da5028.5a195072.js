(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[7016],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=o(a),d=l,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86403:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=a(22122),l=a(19756),r=(a(67294),a(3905)),i={title:"Managing Capabilities"},c={unversionedId:"developers/cap-center",id:"version-v1.1/developers/cap-center",isDocsHomePage:!1,title:"Managing Capabilities",description:"In KubeVela, developers can install more capabilities (i.e. new component types and traits) from any GitHub repo that contains OAM definition files. We call these GitHub repos as Capability Centers.",source:"@site/versioned_docs/version-v1.1/developers/cap-center.md",sourceDirName:"developers",slug:"/developers/cap-center",permalink:"/docs/developers/cap-center",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/developers/cap-center.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Managing Capabilities"}},s=[{value:"Add a capability center",id:"add-a-capability-center",children:[]},{value:"List capability centers",id:"list-capability-centers",children:[]},{value:"Optional Remove a capability center",id:"optional-remove-a-capability-center",children:[]},{value:"List all available capabilities in capability center",id:"list-all-available-capabilities-in-capability-center",children:[]},{value:"Install a capability from capability center",id:"install-a-capability-from-capability-center",children:[]},{value:"Use the newly installed capability",id:"use-the-newly-installed-capability",children:[]},{value:"Uninstall a capability",id:"uninstall-a-capability",children:[]}],o={toc:s};function p(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In KubeVela, developers can install more capabilities (i.e. new component types and traits) from any GitHub repo that contains OAM definition files. We call these GitHub repos as ",(0,r.kt)("em",{parentName:"p"},"Capability Centers"),". "),(0,r.kt)("p",null,"KubeVela is able to discover OAM definition files in this repo automatically and sync them to your own KubeVela platform."),(0,r.kt)("h2",{id:"add-a-capability-center"},"Add a capability center"),(0,r.kt)("p",null,"Add and sync a capability center in KubeVela:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela cap center config my-center https://github.com/oam-dev/catalog/tree/master/registry\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"successfully sync 1/1 from my-center remote center\nSuccessfully configured capability center my-center and sync from remote\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela cap center sync my-center\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"successfully sync 1/1 from my-center remote center\nsync finished\n")),(0,r.kt)("p",null,"Now, this capability center ",(0,r.kt)("inlineCode",{parentName:"p"},"my-center")," is ready to use."),(0,r.kt)("h2",{id:"list-capability-centers"},"List capability centers"),(0,r.kt)("p",null,"You are allowed to add more capability centers and list them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela cap center ls\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"NAME        ADDRESS\nmy-center   https://github.com/oam-dev/catalog/tree/master/registry\n")),(0,r.kt)("h2",{id:"optional-remove-a-capability-center"},"[Optional]"," Remove a capability center"),(0,r.kt)("p",null,"Or, remove one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela cap center remove my-center\n")),(0,r.kt)("h2",{id:"list-all-available-capabilities-in-capability-center"},"List all available capabilities in capability center"),(0,r.kt)("p",null,"Or, list all available capabilities in certain center."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela cap ls my-center\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"NAME                CENTER      TYPE                DEFINITION                      STATUS      APPLIES-TO\nclonesetservice     my-center   componentDefinition clonesets.apps.kruise.io        uninstalled []\n")),(0,r.kt)("h2",{id:"install-a-capability-from-capability-center"},"Install a capability from capability center"),(0,r.kt)("p",null,"Now let's try to install the new component named ",(0,r.kt)("inlineCode",{parentName:"p"},"clonesetservice")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"my-center")," to your own KubeVela platform."),(0,r.kt)("p",null,"You need to install OpenKruise first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm install kruise https://github.com/openkruise/kruise/releases/download/v0.7.0/kruise-chart.tgz\n")),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"clonesetservice")," component from ",(0,r.kt)("inlineCode",{parentName:"p"},"my-center"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela cap install my-center/clonesetservice\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Installing component capability clonesetservice\nSuccessfully installed capability clonesetservice from my-center\n")),(0,r.kt)("h2",{id:"use-the-newly-installed-capability"},"Use the newly installed capability"),(0,r.kt)("p",null,"Let's check the ",(0,r.kt)("inlineCode",{parentName:"p"},"clonesetservice")," appears in your platform firstly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela components\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"NAME            NAMESPACE   WORKLOAD                    DESCRIPTION\nclonesetservice vela-system clonesets.apps.kruise.io    Describes long-running, scalable, containerized services\n                                                        that have a stable network endpoint to receive external\n                                                        network traffic from customers. If workload type is skipped\n                                                        for any service defined in Appfile, it will be defaulted to\n                                                        `webservice` type.\n")),(0,r.kt)("p",null,"Great! Now let's deploy an app via Appfile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF > vela.yaml\nname: testapp\nservices:\n  testsvc:\n    type: clonesetservice\n    image: crccheck/hello-world\n    port: 8000\nEOF\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela up\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Parsing vela appfile ...\nLoad Template ...\n\nRendering configs for service (testsvc)...\nWriting deploy config to (.vela/deploy.yaml)\n\nApplying application ...\nChecking if app has been deployed...\nApp has not been deployed, creating a new deployment...\nUpdating:  core.oam.dev/v1alpha2, Kind=HealthScope in default\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward testapp\n             SSH: vela exec testapp\n         Logging: vela logs testapp\n      App status: vela status testapp\n  Service status: vela status testapp --svc testsvc\n")),(0,r.kt)("p",null,"then you can Get a cloneset in your environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get clonesets.apps.kruise.io\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"NAME      DESIRED   UPDATED   UPDATED_READY   READY   TOTAL   AGE\ntestsvc   1         1         1               1       1       46s\n")),(0,r.kt)("h2",{id:"uninstall-a-capability"},"Uninstall a capability"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: make sure no apps are using the capability before uninstalling.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela cap uninstall my-center/clonesetservice\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Successfully uninstalled capability clonesetservice\n")))}p.isMDXComponent=!0}}]);