(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8650],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(h,l(l({ref:t},s),{},{components:r})):n.createElement(h,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93745:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),l={title:"Progressive Rollout RoadMap"},i={unversionedId:"end-user/scopes/roadmap",id:"version-v1.0/end-user/scopes/roadmap",isDocsHomePage:!1,title:"Progressive Rollout RoadMap",description:"Here are some working items on the roadmap",source:"@site/versioned_docs/version-v1.0/end-user/scopes/roadmap.md",sourceDirName:"end-user/scopes",slug:"/end-user/scopes/roadmap",permalink:"/docs/end-user/scopes/roadmap",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/scopes/roadmap.md",version:"v1.0",lastUpdatedBy:"yangsoon",lastUpdatedAt:1625206152,formattedLastUpdatedAt:"7/2/2021",frontMatter:{title:"Progressive Rollout RoadMap"}},p=[{value:"Embed rollout in an application",id:"embed-rollout-in-an-application",children:[]},{value:"Add support to trait upgrade",id:"add-support-to-trait-upgrade",children:[]},{value:"Add metrics based rolling checking",id:"add-metrics-based-rolling-checking",children:[]},{value:"Add traffic shifting support",id:"add-traffic-shifting-support",children:[]},{value:"Support upgrading more than one component",id:"support-upgrading-more-than-one-component",children:[]},{value:"Support Helm Rollout strategy",id:"support-helm-rollout-strategy",children:[]},{value:"Add more restrictions on what part of the rollout plan can be changed during rolling",id:"add-more-restrictions-on-what-part-of-the-rollout-plan-can-be-changed-during-rolling",children:[]}],u={toc:p};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here are some working items on the roadmap"),(0,a.kt)("h2",{id:"embed-rollout-in-an-application"},"Embed rollout in an application"),(0,a.kt)("p",null,"We will support embedded rollout settings in an application. In this way, any changes to the\napplication will naturally roll out in a controlled manner instead of a sudden replace."),(0,a.kt)("h2",{id:"add-support-to-trait-upgrade"},"Add support to trait upgrade"),(0,a.kt)("p",null,"There are three trait related workitems that complement each other"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"we need to make sure that traits that work on the previous application still work on the new\napplication"),(0,a.kt)("li",{parentName:"ul"},"traits themselves also need a controlled way to upgrade instead of replacing the old in one shot"),(0,a.kt)("li",{parentName:"ul"},"rollout controller should suppress conflicting traits (like HPA/Scalar) during the rollout process")),(0,a.kt)("h2",{id:"add-metrics-based-rolling-checking"},"Add metrics based rolling checking"),(0,a.kt)("p",null,"We will integrate with prometheus and use the metrics generated by the application to control the\nflow of the rollout. This part will be very similar to flagger."),(0,a.kt)("h2",{id:"add-traffic-shifting-support"},"Add traffic shifting support"),(0,a.kt)("p",null,"We will add traffic shifting based upgrading strategy like canary, A/B testing. We plan to support\nIstio in our first version. This part will be very similar to flagger."),(0,a.kt)("h2",{id:"support-upgrading-more-than-one-component"},"Support upgrading more than one component"),(0,a.kt)("p",null,"Currently, we can only upgrade one component at a time. We will support upgrading more components in\none application at once."),(0,a.kt)("h2",{id:"support-helm-rollout-strategy"},"Support Helm Rollout strategy"),(0,a.kt)("p",null,"Currently, we only support upgrading k8s resources. We will support helm based workload in the\nfuture."),(0,a.kt)("h2",{id:"add-more-restrictions-on-what-part-of-the-rollout-plan-can-be-changed-during-rolling"},"Add more restrictions on what part of the rollout plan can be changed during rolling"),(0,a.kt)("p",null,"Here are some examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the BatchPartition field cannot decrease beyond the current batch"),(0,a.kt)("li",{parentName:"ul"},"the RolloutBatches field can only change the part after the current batch"),(0,a.kt)("li",{parentName:"ul"},"the ComponentList field cannot be changed after rolling starts"),(0,a.kt)("li",{parentName:"ul"},"the RolloutStrategy/TargetSize/NumBatches cannot be changed")))}s.isMDXComponent=!0}}]);