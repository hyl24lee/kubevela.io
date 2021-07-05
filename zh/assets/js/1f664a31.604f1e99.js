(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4447],{3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return c},kt:function(){return v}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),l=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),v=r,u=d["".concat(i,".").concat(v)]||d[v]||m[v]||p;return a?t.createElement(u,o(o({ref:n},c),{},{components:a})):t.createElement(u,o({ref:n},c))}));function v(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<p;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85111:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return i},default:function(){return c}});var t=a(22122),r=a(19756),p=(a(67294),a(3905)),o={title:"Dry-Run / Live-Diff"},s={unversionedId:"end-user/debug",id:"end-user/debug",isDocsHomePage:!1,title:"Dry-Run / Live-Diff",description:"KubeVela \u652f\u6301\u4e24\u79cd\u65b9\u5f0f\u8c03\u8bd5 application\uff1adry-run \u548c live-diff\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/debug.md",sourceDirName:"end-user",slug:"/end-user/debug",permalink:"/zh/docs/next/end-user/debug",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/debug.md",version:"current",lastUpdatedBy:"\u5929\u5143",lastUpdatedAt:1625472226,formattedLastUpdatedAt:"2021/7/5",frontMatter:{title:"Dry-Run / Live-Diff"},sidebar:"docs",previous:{title:"\u805a\u5408\u5065\u5eb7\u63a2\u9488",permalink:"/zh/docs/next/end-user/scopes/health"},next:{title:"\u6982\u8ff0",permalink:"/zh/docs/next/platform-engineers/overview"}},i=[{value:"Dry-Run <code>Application</code>",id:"dry-run-application",children:[]},{value:"Live-Diff <code>Application</code>",id:"live-diff-application",children:[]}],l={toc:i};function c(e){var n=e.components,a=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,t.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"KubeVela \u652f\u6301\u4e24\u79cd\u65b9\u5f0f\u8c03\u8bd5 application\uff1adry-run \u548c live-diff\u3002"),(0,p.kt)("h2",{id:"dry-run-application"},"Dry-Run ",(0,p.kt)("inlineCode",{parentName:"h2"},"Application")),(0,p.kt)("p",null,"Dry-run \u5c06\u5e2e\u52a9\u6211\u4eec\u4e86\u89e3\u54ea\u4e9b\u8d44\u6e90\u5c06\u88ab\u5904\u7406\u5e76\u90e8\u7f72\u5230 Kubernetes \u96c6\u7fa4\u3002\u53e6\u5916\uff0c\u8be5\u547d\u4ee4\u652f\u6301\u6a21\u62df\u8fd0\u884c\u4e0eKubeVela\u7684\u63a7\u5236\u5668\u76f8\u540c\u7684\u903b\u8f91\u5e76\u5728\u672c\u5730\u8f93\u51fa\u7ed3\u679c\u3002"),(0,p.kt)("p",null,"\u6bd4\u5982\uff0c\u6211\u4eec dry-run \u4e0b\u9762 application\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'# app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n')),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl vela dry-run -f app.yaml\n---\n# Application(vela-app) -- Comopnent(express-server)\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app.oam.dev/appRevision: ""\n    app.oam.dev/component: express-server\n    app.oam.dev/name: vela-app\n    workload.oam.dev/type: webservice\nspec:\n  selector:\n    matchLabels:\n      app.oam.dev/component: express-server\n  template:\n    metadata:\n      labels:\n        app.oam.dev/component: express-server\n    spec:\n      containers:\n      - image: crccheck/hello-world\n        name: express-server\n        ports:\n        - containerPort: 8000\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app.oam.dev/appRevision: ""\n    app.oam.dev/component: express-server\n    app.oam.dev/name: vela-app\n    trait.oam.dev/resource: service\n    trait.oam.dev/type: ingress\n  name: express-server\nspec:\n  ports:\n  - port: 8000\n    targetPort: 8000\n  selector:\n    app.oam.dev/component: express-server\n\n---\napiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  labels:\n    app.oam.dev/appRevision: ""\n    app.oam.dev/component: express-server\n    app.oam.dev/name: vela-app\n    trait.oam.dev/resource: ingress\n    trait.oam.dev/type: ingress\n  name: express-server\nspec:\n  rules:\n  - host: testsvc.example.com\n    http:\n      paths:\n      - backend:\n          serviceName: express-server\n          servicePort: 8000\n        path: /\n\n---\n')),(0,p.kt)("p",null,"\u5f53\u524d\u793a\u4f8b\u4e2d\uff0capplication ",(0,p.kt)("inlineCode",{parentName:"p"},"vela-app")," \u4f9d\u8d56 KubeVela \u5185\u7f6e\u7684 component\uff08",(0,p.kt)("inlineCode",{parentName:"p"},"webservice"),"\uff09 \u548c trait\uff08",(0,p.kt)("inlineCode",{parentName:"p"},"ingress"),"\uff09\u3002\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570 ",(0,p.kt)("inlineCode",{parentName:"p"},"-d ")," \u6216\u8005 ",(0,p.kt)("inlineCode",{parentName:"p"},"--definitions")," \u6307\u5b9a\u672c\u5730 definition \u6587\u4ef6\u3002"),(0,p.kt)("p",null,"\u53c2\u6570 ",(0,p.kt)("inlineCode",{parentName:"p"},"-d ")," \u6216\u8005 ",(0,p.kt)("inlineCode",{parentName:"p"},"--definitions")," \u5141\u8bb8\u7528\u6237\u4ece\u672c\u5730\u6587\u4ef6\u5bfc\u5165\u6307\u5b9a\u7684 definitions \u4ee5\u4f9b application \u4f7f\u7528\u3002\n\u53c2\u6570 ",(0,p.kt)("inlineCode",{parentName:"p"},"dry-run")," \u4f1a\u5c06\u4f18\u5148\u4f7f\u7528\u7528\u6237\u6307\u5b9a\u7684 capabilities \u3002"),(0,p.kt)("h2",{id:"live-diff-application"},"Live-Diff ",(0,p.kt)("inlineCode",{parentName:"h2"},"Application")),(0,p.kt)("p",null,"Live-diff \u5c06\u5e2e\u52a9\u6211\u4eec\u9884\u89c8\u672c\u6b21\u5347\u7ea7 application \u4f1a\u6709\u54ea\u4e9b\u53d8\u66f4\uff0c\u540c\u65f6\u4e0d\u4f1a\u5bf9\u73b0\u6709\u96c6\u7fa4\u4ea7\u751f\u5f71\u54cd\u3002\n\u672c\u529f\u80fd\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883\u53d8\u66f4\u975e\u5e38\u6709\u7528\uff0c\u540c\u65f6\u8fd8\u80fd\u4fdd\u8bc1\u5347\u7ea7\u53ef\u63a7\u3002"),(0,p.kt)("p",null,"\u672c\u529f\u80fd\u4f1a\u5728\u7ebf\u4e0a\u6b63\u5728\u8fd0\u884c\u7684\u7248\u672c\u4e0e\u672c\u5730\u5f85\u5347\u7ea7\u7248\u672c\u4e4b\u95f4\u751f\u6210\u5dee\u5f02\u4fe1\u606f\u3002\n\u6700\u7ec8\u5dee\u5f02\u7ed3\u679c\u5c06\u5c55\u793a application \u4ee5\u53ca\u5b50\u8d44\u6e90\uff08\u6bd4\u5982 components \u4ee5\u53ca traits\uff09\u7684\u53d8\u66f4\u4fe1\u606f\uff08added/modified/removed/no_change\uff09\u3002"),(0,p.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u5728 dry-run \u73af\u8282\u5df2\u7ecf\u90e8\u7f72 application \u3002\n\u968f\u540e\uff0c\u6211\u4eec\u5217\u51fa\u4e0a\u9762 application \u7684 revisions \u4fe1\u606f\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get apprev -l app.oam.dev/name=vela-app\nNAME          AGE\nvela-app-v1   50s\n")),(0,p.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u5c06\u66f4\u65b0\u8be5 application \uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'# new-app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8080 # change port\n        cpu: 0.5 # add requests cpu units\n    - name: my-task # add a component\n      type: task\n      properties:\n        image: busybox\n        cmd: ["sleep", "1000"]\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8080 # change port\n')),(0,p.kt)("p",null,"\u6267\u884c live-diff \uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl vela live-diff -f new-app.yaml -r vela-app-v1\n")),(0,p.kt)("p",null,"\u53c2\u6570 ",(0,p.kt)("inlineCode",{parentName:"p"},"-r")," \u6216\u8005 ",(0,p.kt)("inlineCode",{parentName:"p"},"--revision")," \u7528\u4e8e\u6307\u5b9a\u6b63\u5728\u8fd0\u884c\u4e2d\u7684 ApplicationRevision \u540d\u79f0\uff0c\u8be5\u7248\u672c\u5c06\u7528\u4e8e\u4e0e\u66f4\u65b0\u7248\u672c\u8fdb\u884c\u6bd4\u8f83\u3002"),(0,p.kt)("p",null,"\u53c2\u6570 ",(0,p.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"--context")," \u7528\u4e8e\u6307\u5b9a\u663e\u793a\u53d8\u66f4\u4e0a\u4e0b\u6587\u884c\u6570\uff0c\u8d85\u51fa\u4e0a\u7ebf\u884c\u6570\u7684\u672a\u53d8\u66f4\u884c\u5c06\u88ab\u7701\u7565\u3002\u8be5\u529f\u80fd\u5bf9\u4e8e\u5982\u4e0b\u573a\u666f\u975e\u5e38\u6709\u7528\uff1a\u5dee\u5f02\u7ed3\u679c\u5305\u542b\u5f88\u591a\u672a\u66f4\u6539\u7684\u5185\u5bb9\uff0c\u800c\u6211\u4eec\u53ea\u60f3\u5173\u6ce8\u5df2\u66f4\u6539\u7684\u5185\u5bb9\u3002"),(0,p.kt)("details",null,(0,p.kt)("summary",null," diff "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'---\n# Application (vela-app) has been modified(*)\n---\n  apiVersion: core.oam.dev/v1beta1\n  kind: Application\n  metadata:\n    creationTimestamp: null\n    name: vela-app\n    namespace: default\n  spec:\n    components:\n    - name: express-server\n      properties:\n+       cpu: 0.5\n        image: crccheck/hello-world\n-       port: 8000\n+       port: 8080\n+     type: webservice\n+   - name: my-task\n+     properties:\n+       cmd:\n+       - sleep\n+       - "1000"\n+       image: busybox\n      traits:\n      - properties:\n          domain: testsvc.example.com\n          http:\n-           /: 8000\n+           /: 8080\n        type: ingress\n-     type: webservice\n+     type: task\n  status:\n    batchRollingState: ""\n    currentBatch: 0\n    rollingState: ""\n    upgradedReadyReplicas: 0\n    upgradedReplicas: 0\n\n---\n## Component (express-server) has been modified(*)\n---\n  apiVersion: core.oam.dev/v1alpha2\n  kind: Component\n  metadata:\n    creationTimestamp: null\n    labels:\n      app.oam.dev/name: vela-app\n    name: express-server\n  spec:\n    workload:\n      apiVersion: apps/v1\n      kind: Deployment\n      metadata:\n        labels:\n          app.oam.dev/appRevision: ""\n          app.oam.dev/component: express-server\n          app.oam.dev/name: vela-app\n          workload.oam.dev/type: webservice\n      spec:\n        selector:\n          matchLabels:\n            app.oam.dev/component: express-server\n        template:\n          metadata:\n            labels:\n              app.oam.dev/component: express-server\n          spec:\n            containers:\n            - image: crccheck/hello-world\n              name: express-server\n              ports:\n-             - containerPort: 8000\n+             - containerPort: 8080\n  status:\n    observedGeneration: 0\n\n---\n### Component (express-server) / Trait (ingress/service) has been removed(-)\n---\n- apiVersion: v1\n- kind: Service\n- metadata:\n-   labels:\n-     app.oam.dev/appRevision: ""\n-     app.oam.dev/component: express-server\n-     app.oam.dev/name: vela-app\n-     trait.oam.dev/resource: service\n-     trait.oam.dev/type: ingress\n-   name: express-server\n- spec:\n-   ports:\n-   - port: 8000\n-     targetPort: 8000\n-   selector:\n-     app.oam.dev/component: express-server\n\n---\n### Component (express-server) / Trait (ingress/ingress) has been removed(-)\n---\n- apiVersion: networking.k8s.io/v1beta1\n- kind: Ingress\n- metadata:\n-   labels:\n-     app.oam.dev/appRevision: ""\n-     app.oam.dev/component: express-server\n-     app.oam.dev/name: vela-app\n-     trait.oam.dev/resource: ingress\n-     trait.oam.dev/type: ingress\n-   name: express-server\n- spec:\n-   rules:\n-   - host: testsvc.example.com\n-     http:\n-       paths:\n-       - backend:\n-           serviceName: express-server\n-           servicePort: 8000\n-         path: /\n\n---\n## Component (my-task) has been added(+)\n---\n+ apiVersion: core.oam.dev/v1alpha2\n+ kind: Component\n+ metadata:\n+   creationTimestamp: null\n+   labels:\n+     app.oam.dev/name: vela-app\n+   name: my-task\n+ spec:\n+   workload:\n+     apiVersion: batch/v1\n+     kind: Job\n+     metadata:\n+       labels:\n+         app.oam.dev/appRevision: ""\n+         app.oam.dev/component: my-task\n+         app.oam.dev/name: vela-app\n+         workload.oam.dev/type: task\n+     spec:\n+       completions: 1\n+       parallelism: 1\n+       template:\n+         spec:\n+           containers:\n+           - command:\n+             - sleep\n+             - "1000"\n+             image: busybox\n+             name: my-task\n+           restartPolicy: Never\n+ status:\n+   observedGeneration: 0\n\n---\n### Component (my-task) / Trait (ingress/service) has been added(+)\n---\n+ apiVersion: v1\n+ kind: Service\n+ metadata:\n+   labels:\n+     app.oam.dev/appRevision: ""\n+     app.oam.dev/component: my-task\n+     app.oam.dev/name: vela-app\n+     trait.oam.dev/resource: service\n+     trait.oam.dev/type: ingress\n+   name: my-task\n+ spec:\n+   ports:\n+   - port: 8080\n+     targetPort: 8080\n+   selector:\n+     app.oam.dev/component: my-task\n\n---\n### Component (my-task) / Trait (ingress/ingress) has been added(+)\n---\n+ apiVersion: networking.k8s.io/v1beta1\n+ kind: Ingress\n+ metadata:\n+   labels:\n+     app.oam.dev/appRevision: ""\n+     app.oam.dev/component: my-task\n+     app.oam.dev/name: vela-app\n+     trait.oam.dev/resource: ingress\n+     trait.oam.dev/type: ingress\n+   name: my-task\n+ spec:\n+   rules:\n+   - host: testsvc.example.com\n+     http:\n+       paths:\n+       - backend:\n+           serviceName: my-task\n+           servicePort: 8080\n+         path: /\n'))))}c.isMDXComponent=!0}}]);