(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3178],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38660:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return i},default:function(){return u}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={title:"Setting Rollout Strategy"},s={unversionedId:"developers/extensions/set-rollout",id:"version-v1.1/developers/extensions/set-rollout",isDocsHomePage:!1,title:"Setting Rollout Strategy",description:"Note: rollout is one of the extension capabilities installed from cap center,",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/developers/extensions/set-rollout.md",sourceDirName:"developers/extensions",slug:"/developers/extensions/set-rollout",permalink:"/zh/docs/developers/extensions/set-rollout",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/developers/extensions/set-rollout.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"2021/9/15",frontMatter:{title:"Setting Rollout Strategy"}},i=[],p={toc:i};function u(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: rollout is one of the extension capabilities ",(0,l.kt)("a",{parentName:"p",href:"../cap-center"},"installed from cap center"),",\nplease install it if you can't find it in ",(0,l.kt)("inlineCode",{parentName:"p"},"vela traits"),".")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"rollout")," section is used to configure Canary strategy to release your app."),(0,l.kt)("p",null,"Add rollout config under ",(0,l.kt)("inlineCode",{parentName:"p"},"express-server")," along with a ",(0,l.kt)("inlineCode",{parentName:"p"},"route"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\nservices:\n  express-server:\n    type: webservice\n    image: oamdev/testapp:rolling01\n    port: 80\n\n    rollout:\n      replicas: 5\n      stepWeight: 20\n      interval: "30s"\n    \n    route:\n      domain: "example.com"\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The full specification of ",(0,l.kt)("inlineCode",{parentName:"p"},"rollout")," could show up by ",(0,l.kt)("inlineCode",{parentName:"p"},"$ vela show rollout"),".")),(0,l.kt)("p",null,"Apply this ",(0,l.kt)("inlineCode",{parentName:"p"},"appfile.yaml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n")),(0,l.kt)("p",null,"You could check the status by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela status testapp\nAbout:\n\n  Name:         testapp\n  Namespace:    myenv\n  Created at:   2020-11-09 17:34:38.064006 +0800 CST\n  Updated at:   2020-11-10 17:05:53.903168 +0800 CST\n\nServices:\n\n  - Name: testapp\n    Type: webservice\n    HEALTHY Ready: 5/5\n    Traits:\n      - \u2705 rollout: interval=5s\n        replicas=5\n        stepWeight=20\n      - \u2705 route:    Visiting URL: http://example.com    IP: <your-ingress-IP-address>\n\n    Last Deployment:\n      Created at: 2020-11-09 17:34:38 +0800 CST\n      Updated at: 2020-11-10T17:05:53+08:00\n")),(0,l.kt)("p",null,"Visiting this app by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -H "Host:example.com" http://<your-ingress-IP-address>/\nHello World -- Rolling 01\n')),(0,l.kt)("p",null,"In day 2, assuming we have make some changes on our app and build the new image and name it by ",(0,l.kt)("inlineCode",{parentName:"p"},"oamdev/testapp:v2"),"."),(0,l.kt)("p",null,"Let's update the appfile by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\nservices:\n  express-server:\n    type: webservice\n-   image: oamdev/testapp:rolling01\n+   image: oamdev/testapp:rolling02\n    port: 80\n    rollout:\n      replicas: 5\n      stepWeight: 20\n      interval: "30s"\n    route:\n      domain: example.com\n')),(0,l.kt)("p",null,"Apply this ",(0,l.kt)("inlineCode",{parentName:"p"},"appfile.yaml")," again:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n")),(0,l.kt)("p",null,"You could run ",(0,l.kt)("inlineCode",{parentName:"p"},"vela status")," several times to see the instance rolling:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ vela status testapp\nAbout:\n\n  Name:         testapp\n  Namespace:    myenv\n  Created at:   2020-11-12 19:02:40.353693 +0800 CST\n  Updated at:   2020-11-12 19:02:40.353693 +0800 CST\n\nServices:\n\n  - Name: express-server\n    Type: webservice\n    HEALTHY express-server-v2:Ready: 1/1 express-server-v1:Ready: 4/4\n    Traits:\n      - \u2705 rollout: interval=30s\n        replicas=5\n        stepWeight=20\n      - \u2705 route:     Visiting by using 'vela port-forward testapp --route'\n\n    Last Deployment:\n      Created at: 2020-11-12 17:20:46 +0800 CST\n      Updated at: 2020-11-12T19:02:40+08:00\n")),(0,l.kt)("p",null,"You could then try to ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," your app multiple times and and see how the app being rollout following Canary strategy:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -H "Host:example.com" http://<your-ingress-ip-address>/\nHello World -- This is rolling 02                                        \n$ curl -H "Host:example.com" http://<your-ingress-ip-address>/\nHello World -- Rolling 01                                                                \n$ curl -H "Host:example.com" http://<your-ingress-ip-address>/\nHello World -- Rolling 01                                                    \n$ curl -H "Host:example.com" http://<your-ingress-ip-address>/\nHello World -- This is rolling 02                                         \n$ curl -H "Host:example.com" http://<your-ingress-ip-address>/\nHello World -- Rolling 01                                                  \n$ curl -H "Host:example.com" http://<your-ingress-ip-address>/\nHello World -- This is rolling 02\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How ",(0,l.kt)("inlineCode",{parentName:"strong"},"Rollout")," works?")),(0,l.kt)("details",null,(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Rollout")," trait implements progressive release process to rollout your app following ",(0,l.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/CanaryRelease.html"},"Canary strategy"),"."),(0,l.kt)("p",null,"In detail, ",(0,l.kt)("inlineCode",{parentName:"p"},"Rollout")," controller will create a canary of your app , and then gradually shift traffic to the canary while measuring key performance indicators like HTTP requests success rate at the same time. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alt",src:n(80432).Z})),(0,l.kt)("p",null,"In this sample, for every ",(0,l.kt)("inlineCode",{parentName:"p"},"10s"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"5%")," traffic will be shifted to canary from the primary, until the traffic on canary reached ",(0,l.kt)("inlineCode",{parentName:"p"},"50%"),". At the mean time, the instance number of canary will automatically scale to ",(0,l.kt)("inlineCode",{parentName:"p"},"replicas: 2")," per configured in Appfile."),(0,l.kt)("p",null,"Based on analysis result of the KPIs during this traffic shifting, a canary will be promoted or aborted if analysis is failed. If promoting, the primary will be upgraded from v1 to v2, and traffic will be fully shifted back to the primary instances. So as result, canary instances will be deleted after the promotion finished."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alt",src:n(15641).Z})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: KubeVela's ",(0,l.kt)("inlineCode",{parentName:"p"},"Rollout")," trait is implemented with ",(0,l.kt)("a",{parentName:"p",href:"https://flagger.app/"},"Weaveworks Flagger")," operator."))))}u.isMDXComponent=!0},15641:function(e,t,n){"use strict";t.Z=n.p+"assets/images/promotion-51cd9353154b379c5e307d8c120d96e5.png"},80432:function(e,t,n){"use strict";t.Z=n.p+"assets/images/traffic-shifting-analysis-a610a9b1912003bf49363fe9861df4bc.png"}}]);