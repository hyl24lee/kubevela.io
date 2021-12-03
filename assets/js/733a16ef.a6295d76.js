(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[15434],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17834:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={title:"Overview"},i={unversionedId:"quick-start-appfile",id:"quick-start-appfile",isDocsHomePage:!1,title:"Overview",description:"To achieve best user experience for your platform, we recommend platform builders to create simple and user friendly UI for end users instead of exposing full platform level details to them. Some common practices include building GUI console, adopting DSL, or creating a user friendly command line tool.",source:"@site/docs/quick-start-appfile.md",sourceDirName:".",slug:"/quick-start-appfile",permalink:"/docs/next/quick-start-appfile",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/quick-start-appfile.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1627555412,formattedLastUpdatedAt:"7/29/2021",frontMatter:{title:"Overview"}},p=[{value:"Step 1: Install",id:"step-1-install",children:[]},{value:"Step 2: Deploy Your First Application",id:"step-2-deploy-your-first-application",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],s={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To achieve best user experience for your platform, we recommend platform builders to create simple and user friendly UI for end users instead of exposing full platform level details to them. Some common practices include building GUI console, adopting DSL, or creating a user friendly command line tool."),(0,l.kt)("p",null,"As an proof-of-concept of building developer experience with KubeVela, we developed a client-side tool named ",(0,l.kt)("inlineCode",{parentName:"p"},"Appfile")," as well. This tool enables developers to deploy any application with a single file and a single command: ",(0,l.kt)("inlineCode",{parentName:"p"},"vela up"),"."),(0,l.kt)("p",null,"Now let's walk through its experience."),(0,l.kt)("h2",{id:"step-1-install"},"Step 1: Install"),(0,l.kt)("p",null,"Make sure you have finished and verified the installation following quick-install."),(0,l.kt)("h2",{id:"step-2-deploy-your-first-application"},"Step 2: Deploy Your First Application"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vela up -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela.yaml\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"Parsing vela.yaml ...\nLoading templates ...\n\nRendering configs for service (testsvc)...\nWriting deploy config to (.vela/deploy.yaml)\n\nApplying deploy configs ...\nChecking if app has been deployed...\nApp has not been deployed, creating a new deployment...\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward first-vela-app\n             SSH: vela exec first-vela-app\n         Logging: vela logs first-vela-app\n      App status: vela status first-vela-app\n  Service status: vela status first-vela-app --svc testsvc\n")),(0,l.kt)("p",null,"Check the status until we see ",(0,l.kt)("inlineCode",{parentName:"p"},"Routes")," are ready:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vela status first-vela-app\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"About:\n\n  Name:       first-vela-app\n  Namespace:  default\n  Created at: ...\n  Updated at: ...\n\nServices:\n\n  - Name: testsvc\n    Type: webservice\n    HEALTHY Ready: 1/1\n    Last Deployment:\n      Created at: ...\n      Updated at: ...\n    Traits:\n      - \u2705 ingress: Visiting URL: testsvc.example.com, IP: <your IP address>\n")),(0,l.kt)("p",null,"**In kind cluster setup, you can visit the service via localhost. In other setups, replace localhost with ingress address accordingly."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -H "Host:testsvc.example.com" http://localhost/\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Voila!")," You are all set to go."),(0,l.kt)("h2",{id:"whats-next"},"What's Next"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Learn details about ",(0,l.kt)("a",{parentName:"li",href:"./developers/learn-appfile"},(0,l.kt)("inlineCode",{parentName:"a"},"Appfile"))," and know how it works.")))}c.isMDXComponent=!0}}]);