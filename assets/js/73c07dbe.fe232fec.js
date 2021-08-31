(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[5488],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},s=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||r;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},335:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var o=t(2122),a=t(9756),r=(t(7294),t(3905)),i={title:"Setting Up Deployment Environment"},l={unversionedId:"developers/config-enviroments",id:"developers/config-enviroments",isDocsHomePage:!1,title:"Setting Up Deployment Environment",description:"A deployment environment is where you could configure the workspace, email for contact and domain for your applications globally.",source:"@site/docs/developers/config-enviroments.md",sourceDirName:"developers",slug:"/developers/config-enviroments",permalink:"/docs/next/developers/config-enviroments",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/config-enviroments.md",version:"current",lastUpdatedBy:"FogDong",lastUpdatedAt:1627992881,formattedLastUpdatedAt:"8/3/2021",frontMatter:{title:"Setting Up Deployment Environment"},sidebar:"docs",previous:{title:"Learning Appfile",permalink:"/docs/next/developers/learn-appfile"},next:{title:"Port Forwarding",permalink:"/docs/next/developers/port-forward"}},p=[{value:"Create environment",id:"create-environment",children:[]},{value:"Check the deployment environment metadata",id:"check-the-deployment-environment-metadata",children:[]},{value:"Configure changes",id:"configure-changes",children:[]},{value:"Optional Configure Domain if you have public IP",id:"optional-configure-domain-if-you-have-public-ip",children:[{value:"Using domain in Appfile",id:"using-domain-in-appfile",children:[]}]}],c={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A deployment environment is where you could configure the workspace, email for contact and domain for your applications globally.\nA typical set of deployment environment is ",(0,r.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"staging"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"prod"),", etc."),(0,r.kt)("h2",{id:"create-environment"},"Create environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela env init demo --email my@email.com\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"environment demo created, Namespace: default, Email: my@email.com\n")),(0,r.kt)("h2",{id:"check-the-deployment-environment-metadata"},"Check the deployment environment metadata"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela env ls\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"NAME    CURRENT NAMESPACE   EMAIL                   DOMAIN\ndefault         default     \ndemo    *       default     my@email.com\n")),(0,r.kt)("p",null,"By default, the environment will use ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," namespace in K8s."),(0,r.kt)("h2",{id:"configure-changes"},"Configure changes"),(0,r.kt)("p",null,"You could change the config by executing the environment again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela env init demo --namespace demo\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"environment demo created, Namespace: demo, Email: my@email.com\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela env ls\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"NAME    CURRENT NAMESPACE   EMAIL                   DOMAIN\ndefault         default     \ndemo    *       demo        my@email.com\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note that the created apps won't be affected, only newly created apps will use the updated info.")),(0,r.kt)("h2",{id:"optional-configure-domain-if-you-have-public-ip"},"[Optional]"," Configure Domain if you have public IP"),(0,r.kt)("p",null,"If your K8s cluster is provisioned by cloud provider and has public IP for ingress.\nYou could configure your domain in the environment, then you'll be able to visit\nyour app by this domain with an mTLS supported automatically."),(0,r.kt)("p",null,"For example, you could get the public IP from ingress service.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc -A | grep LoadBalancer\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"NAME                         TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                      AGE\nnginx-ingress-lb             LoadBalancer   172.21.2.174    123.57.10.233   80:32740/TCP,443:32086/TCP   41d\n")),(0,r.kt)("p",null,"The fourth column is public IP. Configure 'A' record for your custom domain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"*.your.domain => 123.57.10.233\n")),(0,r.kt)("p",null,"You could also use ",(0,r.kt)("inlineCode",{parentName:"p"},"123.57.10.233.xip.io")," as your domain, if you don't have a custom one.\n",(0,r.kt)("inlineCode",{parentName:"p"},"xip.io")," will automatically route to the prefix IP ",(0,r.kt)("inlineCode",{parentName:"p"},"123.57.10.233"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela env init demo --domain 123.57.10.233.xip.io\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"environment demo updated, Namespace: demo, Email: my@email.com\n")),(0,r.kt)("h3",{id:"using-domain-in-appfile"},"Using domain in Appfile"),(0,r.kt)("p",null,"Since you now have domain configured globally in deployment environment, you don't need to specify the domain in route configuration anymore."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# in demo environment\nservices:\n  express-server:\n    ...\n\n    route:\n      rules:\n        - path: /testapp\n          rewriteTarget: /\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl http://123.57.10.233.xip.io/testapp\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Hello World\n")))}u.isMDXComponent=!0}}]);