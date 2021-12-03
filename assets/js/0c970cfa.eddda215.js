(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[62362],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return g}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=o,f=u["".concat(c,".").concat(g)]||u[g]||d[g]||r;return t?a.createElement(f,i(i({ref:n},s),{},{components:t})):a.createElement(f,i({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},37815:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var a=t(22122),o=t(19756),r=(t(67294),t(3905)),i={title:"Configuring data/env in Application"},l={unversionedId:"developers/config-app",id:"version-v1.0/developers/config-app",isDocsHomePage:!1,title:"Configuring data/env in Application",description:"vela provides a config command to manage config data.",source:"@site/versioned_docs/version-v1.0/developers/config-app.md",sourceDirName:"developers",slug:"/developers/config-app",permalink:"/docs/v1.0/developers/config-app",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/developers/config-app.md",version:"v1.0",lastUpdatedBy:"yangsoon",lastUpdatedAt:1625208237,formattedLastUpdatedAt:"7/2/2021",frontMatter:{title:"Configuring data/env in Application"},sidebar:"version-v1.0/docs",previous:{title:"Managing Capabilities",permalink:"/docs/v1.0/developers/cap-center"},next:{title:"vela components",permalink:"/docs/v1.0/cli/vela_components"}},c=[{value:"<code>vela config set</code>",id:"vela-config-set",children:[]},{value:"<code>vela config get</code>",id:"vela-config-get",children:[]},{value:"<code>vela config del</code>",id:"vela-config-del",children:[]},{value:"<code>vela config ls</code>",id:"vela-config-ls",children:[]},{value:"Configure env in application",id:"configure-env-in-application",children:[]}],p={toc:c};function s(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"vela")," provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," command to manage config data."),(0,r.kt)("h2",{id:"vela-config-set"},(0,r.kt)("inlineCode",{parentName:"h2"},"vela config set")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela config set test a=b c=d\nreading existing config data and merging with user input\nconfig data saved successfully \u2705\n")),(0,r.kt)("h2",{id:"vela-config-get"},(0,r.kt)("inlineCode",{parentName:"h2"},"vela config get")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela config get test\nData:\n  a: b\n  c: d\n")),(0,r.kt)("h2",{id:"vela-config-del"},(0,r.kt)("inlineCode",{parentName:"h2"},"vela config del")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela config del test\nconfig (test) deleted successfully\n")),(0,r.kt)("h2",{id:"vela-config-ls"},(0,r.kt)("inlineCode",{parentName:"h2"},"vela config ls")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela config set test a=b\n$ vela config set test2 c=d\n$ vela config ls\nNAME\ntest\ntest2\n")),(0,r.kt)("h2",{id:"configure-env-in-application"},"Configure env in application"),(0,r.kt)("p",null,"The config data can be set as the env in applications."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela config set demo DEMO_HELLO=helloworld\n")),(0,r.kt)("p",null,"Save the following to ",(0,r.kt)("inlineCode",{parentName:"p"},"vela.yaml")," in current directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: testapp\nservices:\n  env-config-demo:\n    image: heroku/nodejs-hello-world\n    config: demo\n")),(0,r.kt)("p",null,"Then run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela up\nParsing vela.yaml ...\nLoading templates ...\n\nRendering configs for service (env-config-demo)...\nWriting deploy config to (.vela/deploy.yaml)\n\nApplying deploy configs ...\nChecking if app has been deployed...\nApp has not been deployed, creating a new deployment...\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward testapp\n             SSH: vela exec testapp\n         Logging: vela logs testapp\n      App status: vela status testapp\n  Service status: vela status testapp --svc env-config-demo\n")),(0,r.kt)("p",null,"Check env var:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ vela exec testapp -- printenv | grep DEMO_HELLO\nDEMO_HELLO=helloworld\n")))}s.isMDXComponent=!0}}]);