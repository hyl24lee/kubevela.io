(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3165],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return a?r.createElement(b,l(l({ref:t},c),{},{components:a})):r.createElement(b,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},44353:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),l={title:"Observability"},o={unversionedId:"platform-engineers/system-operation/observability",id:"platform-engineers/system-operation/observability",isDocsHomePage:!1,title:"Observability",description:"The Observability addon provides system-level monitoring for KubeVela core and business-level monitoring for applications",source:"@site/docs/platform-engineers/system-operation/observability.md",sourceDirName:"platform-engineers/system-operation",slug:"/platform-engineers/system-operation/observability",permalink:"/docs/next/platform-engineers/system-operation/observability",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/system-operation/observability.md",version:"current",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1631620601,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"Observability"},sidebar:"docs",previous:{title:"Managing Clusters",permalink:"/docs/next/platform-engineers/system-operation/managing-clusters"},next:{title:"Performance Fine-tuning",permalink:"/docs/next/platform-engineers/system-operation/performance-finetuning"}},s=[{value:"Introduction to Observable Capabilities",id:"introduction-to-observable-capabilities",children:[{value:"Built-in metric category I: KubeVela Core system-level observability",id:"built-in-metric-category-i-kubevela-core-system-level-observability",children:[]},{value:"Built-in metrics category II: KubeVela Core log monitoring",id:"built-in-metrics-category-ii-kubevela-core-log-monitoring",children:[]}]},{value:"Installing the addon",id:"installing-the-addon",children:[{value:"Self-built/regular Kubernetes clusters",id:"self-builtregular-kubernetes-clusters",children:[]},{value:"Kubernetes clusters provided by cloud providers",id:"kubernetes-clusters-provided-by-cloud-providers",children:[]}]},{value:"View monitoring data",id:"view-monitoring-data",children:[{value:"Get an account for the monitoring dashboard",id:"get-an-account-for-the-monitoring-dashboard",children:[]},{value:"Get the monitoring url",id:"get-the-monitoring-url",children:[]},{value:"View monitoring data for various categories",id:"view-monitoring-data-for-various-categories",children:[]}]}],u={toc:s};function c(e){var t=e.components,l=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Observability addon provides system-level monitoring for KubeVela core and business-level monitoring for applications\nbased on metrics, logging, and tracing data."),(0,i.kt)("p",null,"The following describes observability capabilities in detail, and how to enable the observability addon and view various\nmonitoring data."),(0,i.kt)("h2",{id:"introduction-to-observable-capabilities"},"Introduction to Observable Capabilities"),(0,i.kt)("p",null,"KubeVela observable capabilities are demonstrated through ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," and provide system-level and\napplication-level data monitoring."),(0,i.kt)("h3",{id:"built-in-metric-category-i-kubevela-core-system-level-observability"},"Built-in metric category I: KubeVela Core system-level observability"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"KubeVela Core resource usage monitoring")),(0,i.kt)("p",null,"1) CPU, memory, and other usage and utilization data"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(74651).Z})),(0,i.kt)("p",null,"2) Graphical representation of CPU and memory usage and utilization over time (e.g. last three hours), and network bandwidth per second"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(18943).Z})),(0,i.kt)("h3",{id:"built-in-metrics-category-ii-kubevela-core-log-monitoring"},"Built-in metrics category II: KubeVela Core log monitoring"),(0,i.kt)("p",null,"1) Log statistics"),(0,i.kt)("p",null,"The observable page displays the total number of KubeVela Core logs, as well as the number of ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," occurrences, frequency,\noverview of all logs that occur, and details by default."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(33265).Z})),(0,i.kt)("p",null,"It also shows the total number and frequency, of ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," log occurrences over time."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(11783).Z})),(0,i.kt)("p",null,"2) Logging filter"),(0,i.kt)("p",null,"You can also filter the logs by filling keywords at the top."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(66762).Z})),(0,i.kt)("h2",{id:"installing-the-addon"},"Installing the addon"),(0,i.kt)("p",null,"The observability plugin is installed with the ",(0,i.kt)("inlineCode",{parentName:"p"},"vela addon")," command. Because this plugin relies on Prometheus,\nand Prometheus relies on StorageClass, the StorageClass varies to various Kubernetes distribution, so there are some\ndifferences in the installation command across Kubernetes distributions."),(0,i.kt)("h3",{id:"self-builtregular-kubernetes-clusters"},"Self-built/regular Kubernetes clusters"),(0,i.kt)("p",null,"Execute the following command to install the observability plugin. The steps are the same for similar clusters, like KinD."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela addon enable observability alertmanager-pvc-enabled=false server-pvc-enabled=false grafana-domain=example.com\n")),(0,i.kt)("h3",{id:"kubernetes-clusters-provided-by-cloud-providers"},"Kubernetes clusters provided by cloud providers"),(0,i.kt)("h4",{id:"alibaba-cloud-ack"},"Alibaba Cloud ACK"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela addon enable observability alertmanager-pvc-class=alicloud-disk-available alertmanager-pvc-size=20Gi server-pvc-class=alicloud- disk-available server-pvc-size=20Gi grafana-domain=grafana.c276f4dac730c47b8b8988905e3c68fcf.cn-hongkong.alicontainer.\ncom\n")),(0,i.kt)("p",null,"The meaning of each parameter is as follows."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"alertmanager-pvc-class")),(0,i.kt)("p",null,"The type of pvc required by\nthe Prometheus alert manager, which is the StorageClass. On Alibaba Cloud, pick one from the StorageClass list."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get storageclass\nNAME PROVISIONER RECLAIMPOLICY VOLUMEBINDINGMODE ALLOWVOLUMEEXPANSION AGE\nalicloud-disk-available alicloud/disk Delete Immediate true 6d\nalicloud-disk-efficiency alicloud/disk Delete Immediate true true 6d\nalicloud-disk-essd alicloud/disk Delete Immediate true 6d\nalicloud-disk-ssd alicloud/disk Delete Immediate true 6d\n")),(0,i.kt)("p",null,"We set the value as ",(0,i.kt)("inlineCode",{parentName:"p"},"alicloud-disk-available"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"alertmanager-pvc-size")),(0,i.kt)("p",null,"The size of the pvc needed by the Prometheus alert manager, on Alibaba Cloud, the minimum PV is 20GB, here it takes the value 20Gi."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"server-pvc-class")),(0,i.kt)("p",null,"The type of pvc required by Prometheus server, same as ",(0,i.kt)("inlineCode",{parentName:"p"},"alertmanager-pvc-class"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"server-pvc-size ")),(0,i.kt)("p",null,"The size of the pvc required by the Prometheus server, same as ",(0,i.kt)("inlineCode",{parentName:"p"},"alertmanager-pvc-size"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"grafana-domain")),(0,i.kt)("p",null,"The domain name of Grafana, you can use either your custom domain name, or the cluster-level wildcard domain provided by ACK,\n",(0,i.kt)("inlineCode",{parentName:"p"},"*.c276f4dac730c47b8b8988905e3c68fcf.cn-hongkong.alicontainer.com"),". You can set the value as ",(0,i.kt)("inlineCode",{parentName:"p"},"grafana.c276f4dac730c47b8b8988905e3c68fcf.cn-hongkong.alicontainer.com"),"."),(0,i.kt)("h4",{id:"kubernetes-clusters-offered-by-other-cloud-providers"},"Kubernetes clusters offered by other cloud providers"),(0,i.kt)("p",null,"Please change the following parameters according to the name and size specifications of the PVCs provided by different\ncloud provider's Kubernetes clusters, and the domain rules."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"alertmanager-pvc-class"),(0,i.kt)("li",{parentName:"ul"},"alertmanager-pvc-size"),(0,i.kt)("li",{parentName:"ul"},"server-pvc-class"),(0,i.kt)("li",{parentName:"ul"},"server-pvc-size"),(0,i.kt)("li",{parentName:"ul"},"grafana-domain")),(0,i.kt)("h2",{id:"view-monitoring-data"},"View monitoring data"),(0,i.kt)("h3",{id:"get-an-account-for-the-monitoring-dashboard"},"Get an account for the monitoring dashboard"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get secret grafana -o jsonpath="{.data.admin-password}" -n observability | base64 --decode ; echo\n<password printed here>\n')),(0,i.kt)("p",null,"Using username ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," and the password above to login to the monitoring dashboard below."),(0,i.kt)("h3",{id:"get-the-monitoring-url"},"Get the monitoring url"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Self-built/regular clusters")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get svc grafana -n vela-system\nNAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE\ngrafana ClusterIP 192.168.42.243 <none> 80/TCP 177m\n\n$ sudo k port-forward service/grafana -n vela-system 80:80\nPassword:\nForwarding from 127.0.0.1:80 -> 3000\nForwarding from [::1]:80 -> \n3000\n")),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"http://127.0.0.1/dashboards"},"http://127.0.0.1/dashboards")," and click on the corresponding Dashboard to view the\nvarious monitoring data introduced earlier."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(73795).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kubernetes clusters provided by cloud providers")),(0,i.kt)("p",null,"Access the Grafana domain set up above directly to view the various monitoring data described earlier."),(0,i.kt)("h3",{id:"view-monitoring-data-for-various-categories"},"View monitoring data for various categories"),(0,i.kt)("p",null,"On the Grafana home page, click on the console as shown to access the monitoring data for the appropriate category."),(0,i.kt)("p",null,"The KubeVela Core System Monitoring Dashboard is the KubeVela Core system-level monitoring console.\nThe KubeVela Core Logging Dashboard is the KubeVela Core logging monitoring console."),(0,i.kt)("p",null," ",(0,i.kt)("img",{src:a(75016).Z})))}c.isMDXComponent=!0},75016:function(e,t,a){"use strict";t.Z=a.p+"assets/images/observability-dashboards-274b5bf0aeb0383f5142cf0d43171124.png"},73795:function(e,t,a){"use strict";t.Z=a.p+"assets/images/observability-system-level-dashboards-945c46b6cb18dbd5c4b3d67c369d7a19.png"},66762:function(e,t,a){"use strict";t.Z=a.p+"assets/images/observability-system-level-logging-search-675e0bb3eeaf63f0d14be9a64863a909.png"},33265:function(e,t,a){"use strict";t.Z=a.p+"assets/images/observability-system-level-logging-statistics-a36aa27532061592f0fdfaae39cd6d9f.png"},11783:function(e,t,a){"use strict";t.Z=a.p+"assets/images/observability-system-level-logging-statistics2-a4d5ceb36a30c5409aa5d2050a76a620.png"},18943:function(e,t,a){"use strict";t.Z=a.p+"assets/images/observability-system-level-summary-of-source-usages-chart-7033ee5c9c44ade108ae57c39a7d25a7.png"},74651:function(e,t,a){"use strict";t.Z=a.p+"assets/images/observability-system-level-summary-of-source-usages-640e27f1c37be7ef41761020889d65e2.png"}}]);