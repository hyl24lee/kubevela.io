(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[7646],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return d},kt:function(){return o}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),m=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),N=m(a),o=r,g=N["".concat(u,".").concat(o)]||N[o]||k[o]||l;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function o(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},62510:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),i={title:"Web \u670d\u52a1"},p={unversionedId:"end-user/components/cue/webservice",id:"version-v1.1/end-user/components/cue/webservice",isDocsHomePage:!1,title:"Web \u670d\u52a1",description:"\u670d\u52a1\u578b\u7ec4\u4ef6\u662f\u4ee5\u5bb9\u5668\u4e3a\u6838\u5fc3\u652f\u6491\u5bf9\u5916\u8bbf\u95ee\u670d\u52a1\u7684\u7ec4\u4ef6\uff0c\u5176\u529f\u80fd\u6db5\u76d6\u4e86\u4e3b\u6d41\u5fae\u670d\u52a1\u573a\u666f\u7684\u9700\u8981\uff0c\u5373\u5728\u540e\u7aef\u957f\u65f6\u95f4\u8fd0\u884c\u3001\u53ef\u6c34\u5e73\u6269\u5c55\u3001\u4e14\u5bf9\u5916\u66b4\u9732\u670d\u52a1\u7aef\u53e3\u7684\u670d\u52a1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/end-user/components/cue/webservice.md",sourceDirName:"end-user/components/cue",slug:"/end-user/components/cue/webservice",permalink:"/zh/docs/end-user/components/cue/webservice",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cue/webservice.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"2021/9/15",frontMatter:{title:"Web \u670d\u52a1"},sidebar:"version-v1.1/docs",previous:{title:"\u96c6\u6210\u4e91\u8d44\u6e90",permalink:"/zh/docs/end-user/components/cloud-services/provider-and-consume-cloud-services"},next:{title:"\u540e\u7aef\u670d\u52a1",permalink:"/zh/docs/end-user/components/cue/worker"}},u=[{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[]},{value:"\u5c5e\u6027\u8bf4\u660e",id:"\u5c5e\u6027\u8bf4\u660e",children:[{value:"readinessProbe",id:"readinessprobe",children:[]},{value:"livenessProbe",id:"livenessprobe",children:[]},{value:"volumes",id:"volumes",children:[]},{value:"valueFrom",id:"valuefrom",children:[]}]}],m={toc:u};function d(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u670d\u52a1\u578b\u7ec4\u4ef6\u662f\u4ee5\u5bb9\u5668\u4e3a\u6838\u5fc3\u652f\u6491\u5bf9\u5916\u8bbf\u95ee\u670d\u52a1\u7684\u7ec4\u4ef6\uff0c\u5176\u529f\u80fd\u6db5\u76d6\u4e86\u4e3b\u6d41\u5fae\u670d\u52a1\u573a\u666f\u7684\u9700\u8981\uff0c\u5373\u5728\u540e\u7aef\u957f\u65f6\u95f4\u8fd0\u884c\u3001\u53ef\u6c34\u5e73\u6269\u5c55\u3001\u4e14\u5bf9\u5916\u66b4\u9732\u670d\u52a1\u7aef\u53e3\u7684\u670d\u52a1\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,l.kt)("p",null,"\u4e3a\u4e86\u4fbf\u4e8e\u4f60\u5feb\u901f\u5b66\u4e60\uff0c\u8bf7\u76f4\u63a5\u590d\u5236\u4e0b\u9762\u7684 Shell \u6267\u884c\uff0c\u5e94\u7528\u4f1a\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF | kubectl apply -f -\n# YAML \u6587\u4ef6\u5f00\u59cb\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend\n      type: webservice\n      properties:\n        image: oamdev/testapp:v1\n        cmd: ["node", "server.js"]\n        port: 8080\n        cpu: "0.1"\n        env:\n          - name: FOO\n            value: bar\n# YAML \u6587\u4ef6\u7ed3\u675f\nEOF\n')),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u81ea\u884c\u5c06 YAML \u6587\u4ef6\u4fdd\u5b58\u4e3a website.yaml\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl apply -f website.yaml")," \u547d\u4ee4\u8fdb\u884c\u90e8\u7f72\u3002"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get application <\u5e94\u7528 name> -o yaml")," \u67e5\u770b\u5e94\u7528\u7684\u90e8\u7f72\u72b6\u6001\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get application website -o yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\n  ... #  \u7701\u7565\u975e\u5173\u952e\u4fe1\u606f\nspec:\n  components:\n  - name: frontend\n    properties:\n      ... #  \u7701\u7565\u975e\u5173\u952e\u4fe1\u606f\n    type: webservice\nstatus:\n  conditions:\n  - lastTransitionTime: "2021-08-28T10:26:47Z"\n    reason: Available\n    status: "True"\n    ... #  \u7701\u7565\u975e\u5173\u952e\u4fe1\u606f\n    type: HealthCheck\n  observedGeneration: 1\n  ... #  \u7701\u7565\u975e\u5173\u952e\u4fe1\u606f\n  services:\n  - healthy: true\n    name: frontend\n    workloadDefinition:\n      apiVersion: apps/v1\n      kind: Deployment\n  status: running\n')),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u770b\u5230 status-services-healthy \u7684\u5b57\u6bb5\u4e3a true\uff0c\u5e76\u4e14 status \u4e3a running \u65f6\uff0c\u5373\u8868\u793a\u6574\u4e2a\u5e94\u7528\u4ea4\u4ed8\u6210\u529f\u3002"),(0,l.kt)("p",null,"\u5982\u679c status \u663e\u793a\u4e3a rendering\uff0c\u6216\u8005 healthy \u4e3a false\uff0c\u5219\u8868\u793a\u5e94\u7528\u8981\u4e48\u90e8\u7f72\u5931\u8d25\uff0c\u8981\u4e48\u8fd8\u5728\u90e8\u7f72\u4e2d\u3002\u8bf7\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get application <\u5e94\u7528 name> -o yaml")," \u4e2d\u8fd4\u56de\u7684\u4fe1\u606f\u5bf9\u5e94\u5730\u8fdb\u884c\u5904\u7406\u3002"),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 vela \u7684 CLI \u67e5\u770b\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\nAPP     COMPONENT   TYPE        TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME                 \nwebsite frontend    webservice          running healthy         2021-08-28 18:26:47 +0800 CST\n")),(0,l.kt)("p",null,"\u6211\u4eec\u4e5f\u770b\u5230 website APP \u7684 PHASE \u4e3a running\uff0c\u540c\u65f6 STATUS \u4e3a healthy\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027\u8bf4\u660e"},"\u5c5e\u6027\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cmd"),(0,l.kt)("td",{parentName:"tr",align:null},"Commands to run in the container"),(0,l.kt)("td",{parentName:"tr",align:null},"[]string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"env"),(0,l.kt)("td",{parentName:"tr",align:null},"Define arguments by using environment variables"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#env"},"[]env")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image"),(0,l.kt)("td",{parentName:"tr",align:null},"Which image would you like to use for your service"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"Which port do you want customer traffic sent to"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"80")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"imagePullPolicy"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify image pull policy for your service"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cpu"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of CPU units for the service, like ",(0,l.kt)("inlineCode",{parentName:"td"},"0.5")," (0.5 CPU core), ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," (1 CPU core)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"memory"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the attributes of the memory resource required for the container."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"volumes"),(0,l.kt)("td",{parentName:"tr",align:null},"Declare volumes and volumeMounts"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#volumes"},"[]volumes")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"livenessProbe"),(0,l.kt)("td",{parentName:"tr",align:null},"Instructions for assessing whether the container is alive."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#livenessProbe"},"livenessProbe")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readinessProbe"),(0,l.kt)("td",{parentName:"tr",align:null},"Instructions for assessing whether the container is in a suitable state to serve traffic."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#readinessProbe"},"readinessProbe")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"imagePullSecrets"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify image pull secrets for your service"),(0,l.kt)("td",{parentName:"tr",align:null},"[]string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"readinessprobe"},"readinessProbe"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exec"),(0,l.kt)("td",{parentName:"tr",align:null},"Instructions for assessing container health by executing a command. Either this attribute or the"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#exec"},"exec")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"httpGet attribute or the tcpSocket attribute MUST be specified. This attribute is mutually exclusive"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"with both the httpGet attribute and the tcpSocket attribute."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"httpGet"),(0,l.kt)("td",{parentName:"tr",align:null},"Instructions for assessing container health by executing an HTTP GET request. Either this attribute"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#httpGet"},"httpGet")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"or the exec attribute or the tcpSocket attribute MUST be specified. This attribute is mutually"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"exclusive with both the exec attribute and the tcpSocket attribute."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tcpSocket"),(0,l.kt)("td",{parentName:"tr",align:null},"Instructions for assessing container health by probing a TCP socket. Either this attribute or the"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#tcpSocket"},"tcpSocket")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"exec attribute or the httpGet attribute MUST be specified. This attribute is mutually exclusive with"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"both the exec attribute and the httpGet attribute."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initialDelaySeconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of seconds after the container is started before the first probe is initiated."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"periodSeconds"),(0,l.kt)("td",{parentName:"tr",align:null},"How often, in seconds, to execute the probe."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeoutSeconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of seconds after which the probe times out."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"successThreshold"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum consecutive successes for the probe to be considered successful after having failed."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"failureThreshold"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of consecutive failures required to determine the container is not alive (liveness probe) or"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"not ready (readiness probe)."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"tcpsocket"},"tcpSocket"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"The TCP socket within the container that should be probed to assess container health."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"httpget"},"httpGet"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"The endpoint, relative to the port, to which the HTTP GET request should be directed."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"The TCP socket within the container to which the HTTP GET request should be directed."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"httpHeaders"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#httpHeaders"},"[]httpHeaders")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"httpheaders"},"httpHeaders"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h6",{id:"exec"},"exec"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"command"),(0,l.kt)("td",{parentName:"tr",align:null},"A command to be executed inside the container to assess its health. Each space delimited token of"),(0,l.kt)("td",{parentName:"tr",align:null},"[]string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the command is a separate array element. Commands exiting 0 are considered to be successful probes,"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"whilst all other exit codes are considered failures."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"livenessprobe"},"livenessProbe"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exec"),(0,l.kt)("td",{parentName:"tr",align:null},"Instructions for assessing container health by executing a command. Either this attribute or the"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#exec"},"exec")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"httpGet attribute or the tcpSocket attribute MUST be specified. This attribute is mutually exclusive"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"with both the httpGet attribute and the tcpSocket attribute."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"httpGet"),(0,l.kt)("td",{parentName:"tr",align:null},"Instructions for assessing container health by executing an HTTP GET request. Either this attribute"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#httpGet"},"httpGet")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"or the exec attribute or the tcpSocket attribute MUST be specified. This attribute is mutually"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"exclusive with both the exec attribute and the tcpSocket attribute."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tcpSocket"),(0,l.kt)("td",{parentName:"tr",align:null},"Instructions for assessing container health by probing a TCP socket. Either this attribute or the"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#tcpSocket"},"tcpSocket")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"exec attribute or the httpGet attribute MUST be specified. This attribute is mutually exclusive with"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"both the exec attribute and the httpGet attribute."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initialDelaySeconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of seconds after the container is started before the first probe is initiated."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"periodSeconds"),(0,l.kt)("td",{parentName:"tr",align:null},"How often, in seconds, to execute the probe."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeoutSeconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of seconds after which the probe times out."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"successThreshold"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum consecutive successes for the probe to be considered successful after having failed."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"failureThreshold"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of consecutive failures required to determine the container is not alive (liveness probe) or"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"not ready (readiness probe)."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h6",{id:"tcpsocket-1"},"tcpSocket"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"The TCP socket within the container that should be probed to assess container health."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"httpget-1"},"httpGet"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"The endpoint, relative to the port, to which the HTTP GET request should be directed."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"The TCP socket within the container to which the HTTP GET request should be directed."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"httpHeaders"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#httpHeaders"},"[]httpHeaders")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h6",{id:"httpheaders-1"},"httpHeaders"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"exec-1"},"exec"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"command"),(0,l.kt)("td",{parentName:"tr",align:null},"A command to be executed inside the container to assess its health. Each space delimited token of"),(0,l.kt)("td",{parentName:"tr",align:null},"[]string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the command is a separate array element. Commands exiting 0 are considered to be successful probes,"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"whilst all other exit codes are considered failures."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"volumes"},"volumes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mountPath"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},'Specify volume type, options: "pvc","configMap","secret","emptyDir"'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"env"},"env"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Environment variable name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"The value of the environment variable"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"valueFrom"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies a source the value of this var should come from"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#valueFrom"},"valueFrom")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"valuefrom"},"valueFrom"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secretKeyRef"),(0,l.kt)("td",{parentName:"tr",align:null},"Selects a key of a secret in the pod's namespace"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#secretKeyRef"},"secretKeyRef")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"secretkeyref"},"secretKeyRef"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the secret in the pod's namespace to select from"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"The key of the secret to select from. Must be a valid secret key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);