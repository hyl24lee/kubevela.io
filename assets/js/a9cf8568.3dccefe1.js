(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4822],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},64905:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o={title:"Monitoring Application"},l={unversionedId:"developers/extensions/set-metrics",id:"developers/extensions/set-metrics",isDocsHomePage:!1,title:"Monitoring Application",description:"If your application has exposed metrics, you can easily tell the platform how to collect the metrics data from your app with metrics capability.",source:"@site/docs/developers/extensions/set-metrics.md",sourceDirName:"developers/extensions",slug:"/developers/extensions/set-metrics",permalink:"/docs/next/developers/extensions/set-metrics",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/developers/extensions/set-metrics.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1620154848,formattedLastUpdatedAt:"5/4/2021",frontMatter:{title:"Monitoring Application"}},p=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Setting metrics policy",id:"setting-metrics-policy",children:[]}],s={toc:p};function c(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If your application has exposed metrics, you can easily tell the platform how to collect the metrics data from your app with ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics")," capability."),(0,i.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("p",null,"Make sure metrics trait controller is installed in your cluster"),(0,i.kt)("p",null,"Install metrics trait controller with helm"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add helm chart repo for metrics trait"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add oam.catalog  http://oam.dev/catalog/\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the chart repo"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo update\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install metrics trait controller"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system metricstrait oam.catalog/metricstrait\n")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: metrics is one of the extension capabilities ",(0,i.kt)("a",{parentName:"p",href:"../cap-center"},"installed from cap center"),",\nplease install it if you can't find it in ",(0,i.kt)("inlineCode",{parentName:"p"},"vela traits"),".")),(0,i.kt)("h2",{id:"setting-metrics-policy"},"Setting metrics policy"),(0,i.kt)("p",null,"Let's run ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/christianhxc/prometheus-tutorial"},(0,i.kt)("inlineCode",{parentName:"a"},"christianhxc/gorandom:1.0"))," as an example app.\nThe app will emit random latencies as metrics."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Prepare Appfile:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ cat <<EOF > vela.yaml\n    name: metricapp\n    services:\n      metricapp:\n        type: webservice\n        image: christianhxc/gorandom:1.0\n        port: 8080\n\n        metrics:\n          enabled: true\n          format: prometheus\n          path: /metrics\n          port: 0\n          scheme: http\n  EOF\n")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The full specification of ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics")," could show up by ",(0,i.kt)("inlineCode",{parentName:"p"},"$ vela show metrics"),".")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Deploy the application:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check status:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ vela status metricapp\n  About:\n\n    Name:       metricapp\n    Namespace:  default\n    Created at: 2020-11-11 17:00:59.436347573 -0800 PST\n    Updated at: 2020-11-11 17:01:06.511064661 -0800 PST\n\n  Services:\n\n    - Name: metricapp\n      Type: webservice\n      HEALTHY Ready: 1/1\n      Traits:\n        - \u2705 metrics: Monitoring port: 8080, path: /metrics, format: prometheus, schema: http.\n      Last Deployment:\n        Created at: 2020-11-11 17:00:59 -0800 PST\n        Updated at: 2020-11-11T17:01:06-08:00\n")))),(0,i.kt)("p",null,"The metrics trait will automatically discover port and label to monitor if no parameters specified.\nIf more than one ports found, it will choose the first one by default."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(Optional) Verify that the metrics are collected on Prometheus")),(0,i.kt)("details",null,(0,i.kt)("p",null,"Expose the port of Prometheus dashboard:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --namespace monitoring port-forward `kubectl -n monitoring get pods -l prometheus=oam -o name` 9090\n")),(0,i.kt)("p",null,"Then access the Prometheus dashboard via http://localhost:9090/targets"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Prometheus Dashboard",src:r(5655).Z}))))}c.isMDXComponent=!0},5655:function(e,t,r){"use strict";t.Z=r.p+"assets/images/metrics-ce1236dabe05eef5e4b57867b48b3c33.jpg"}}]);