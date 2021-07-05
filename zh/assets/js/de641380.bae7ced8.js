(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3494],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28928:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={title:"Rollout"},o={unversionedId:"end-user/scopes/canary",id:"end-user/scopes/canary",isDocsHomePage:!1,title:"Rollout",description:"Description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/scopes/canary.md",sourceDirName:"end-user/scopes",slug:"/end-user/scopes/canary",permalink:"/zh/docs/next/end-user/scopes/canary",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/scopes/canary.md",version:"current",lastUpdatedBy:"\u5929\u5143",lastUpdatedAt:1625472226,formattedLastUpdatedAt:"2021/7/5",frontMatter:{title:"Rollout"}},c=[{value:"Description",id:"description",children:[]},{value:"Specification",id:"specification",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Conflicts With",id:"conflicts-with",children:[{value:"<code>Autoscale</code>",id:"autoscale",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Configures Canary deployment strategy for your application."),(0,l.kt)("h2",{id:"specification"},"Specification"),(0,l.kt)("p",null,"List of all configuration options for a ",(0,l.kt)("inlineCode",{parentName:"p"},"Rollout")," trait."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'servcies:\n  express-server:\n    ...\n\n    rollout:\n      replicas: 2\n      stepWeight: 50\n      interval: "10s"\n')),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},"Schedule interval time"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"30s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stepWeight"),(0,l.kt)("td",{parentName:"tr",align:null},"Weight percent of every step in rolling update"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"50")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replicas"),(0,l.kt)("td",{parentName:"tr",align:null},"Total replicas of the workload"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"2")))),(0,l.kt)("h2",{id:"conflicts-with"},"Conflicts With"),(0,l.kt)("h3",{id:"autoscale"},(0,l.kt)("inlineCode",{parentName:"h3"},"Autoscale")),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"Rollout")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Autoscle")," traits are attached to the same service, they two will fight over the number of instances during rollout. Thus, it's by design that ",(0,l.kt)("inlineCode",{parentName:"p"},"Rollout")," will take over replicas control (specified by ",(0,l.kt)("inlineCode",{parentName:"p"},".replicas")," field) during rollout."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: in up coming releases, KubeVela will introduce a separate section in Appfile to define release phase configurations such as ",(0,l.kt)("inlineCode",{parentName:"p"},"Rollout"),".")))}u.isMDXComponent=!0}}]);