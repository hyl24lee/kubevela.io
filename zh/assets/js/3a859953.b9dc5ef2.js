(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[86753],{3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return c},kt:function(){return v}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),s=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),v=r,u=d["".concat(l,".").concat(v)]||d[v]||m[v]||p;return a?t.createElement(u,o(o({ref:n},c),{},{components:a})):t.createElement(u,o({ref:n},c))}));function v(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<p;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},38894:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var t=a(22122),r=a(19756),p=(a(67294),a(3905)),o={title:"\u56de\u6eda\u5e94\u7528\u7248\u672c"},i={unversionedId:"deliver-app/version-control",id:"deliver-app/version-control",isDocsHomePage:!1,title:"\u56de\u6eda\u5e94\u7528\u7248\u672c",description:"\u7ec4\u4ef6\u7248\u672c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/deliver-app/version-control.md",sourceDirName:"deliver-app",slug:"/deliver-app/version-control",permalink:"/zh/docs/next/deliver-app/version-control",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/deliver-app/version-control.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1640087002,formattedLastUpdatedAt:"2021/12/21",frontMatter:{title:"\u56de\u6eda\u5e94\u7528\u7248\u672c"}},l=[{value:"\u7ec4\u4ef6\u7248\u672c",id:"\u7ec4\u4ef6\u7248\u672c",children:[]},{value:"\u5728\u5e94\u7528\u4e2d\u6307\u5b9a\u7ec4\u4ef6\u7c7b\u578b\u548c\u8fd0\u7ef4\u529f\u80fd\u7684\u7248\u672c",id:"\u5728\u5e94\u7528\u4e2d\u6307\u5b9a\u7ec4\u4ef6\u7c7b\u578b\u548c\u8fd0\u7ef4\u529f\u80fd\u7684\u7248\u672c",children:[]},{value:"\u5e94\u7528\u7248\u672c",id:"\u5e94\u7528\u7248\u672c",children:[]},{value:"\u5e94\u7528\u7248\u672c\u5bf9\u6bd4",id:"\u5e94\u7528\u7248\u672c\u5bf9\u6bd4",children:[]}],s={toc:l};function c(e){var n=e.components,a=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u7ec4\u4ef6\u7248\u672c"},"\u7ec4\u4ef6\u7248\u672c"),(0,p.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b57\u6bb5 ",(0,p.kt)("inlineCode",{parentName:"p"},"spec.components[*].externalRevision")," \u5728 Application \u4e2d\u6307\u5b9a\u5373\u5c06\u751f\u6210\u7684\u7ec4\u4ef6\u5b9e\u4f8b\u7248\u672c\u540d\u79f0\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      externalRevision: express-server-v1\n      properties:\n        image: stefanprodan/podinfo:4.0.3\n")),(0,p.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u4e3b\u52a8\u6307\u5b9a\u7248\u672c\u540d\u79f0\uff0c\u4f1a\u6839\u636e\u89c4\u5219 ",(0,p.kt)("inlineCode",{parentName:"p"},"<component-name>-<revision-number>")," \u81ea\u52a8\u751f\u6210\u3002"),(0,p.kt)("p",null,"\u5e94\u7528\u521b\u5efa\u4ee5\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u770b\u5230\u7cfb\u7edf\u4e2d\u751f\u6210\u4e86 ControllerRevision \u5bf9\u8c61\u6765\u8bb0\u5f55\u7ec4\u4ef6\u7248\u672c\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u7ec4\u4ef6\u5b9e\u4f8b\u7684\u7248\u672c\u8bb0\u5f55")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get controllerrevision -l controller.oam.dev/component=express-server\nNAME                CONTROLLER                       REVISION   AGE\nexpress-server-v1   application.core.oam.dev/myapp   1          2m40s\nexpress-server-v2   application.core.oam.dev/myapp   2          2m12s\n")),(0,p.kt)("h2",{id:"\u5728\u5e94\u7528\u4e2d\u6307\u5b9a\u7ec4\u4ef6\u7c7b\u578b\u548c\u8fd0\u7ef4\u529f\u80fd\u7684\u7248\u672c"},"\u5728\u5e94\u7528\u4e2d\u6307\u5b9a\u7ec4\u4ef6\u7c7b\u578b\u548c\u8fd0\u7ef4\u529f\u80fd\u7684\u7248\u672c"),(0,p.kt)("p",null,"\u5f53\u7cfb\u7edf\u4e2d\u7684\u7ec4\u4ef6\u7c7b\u578b\u548c\u8fd0\u7ef4\u529f\u80fd\u53d8\u5316\u65f6\uff0c\u4e5f\u4f1a\u4ea7\u751f\u5bf9\u5e94\u7684\u7248\u672c\u53f7\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u67e5\u770b\u7ec4\u4ef6\u7c7b\u578b\u7684\u7248\u672c\u53d8\u5316")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'$  kubectl get definitionrevision -l="componentdefinition.oam.dev/name=webservice" -n vela-system\nNAME            REVISION   HASH               TYPE\nwebservice-v1   1          3f6886d9832021ba   Component\nwebservice-v2   2          b3b9978e7164d973   Component\n')),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u67e5\u770b\u8fd0\u7ef4\u80fd\u529b\u7684\u7248\u672c\u53d8\u5316")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get definitionrevision -l="trait.oam.dev/name=rollout" -n vela-system\nNAME         REVISION   HASH               TYPE\nrollout-v1   1          e441f026c1884b14   Trait\n')),(0,p.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u5e94\u7528\u4e2d\u6307\u5b9a\u4f7f\u7528\u7684\u7ec4\u4ef6\u7c7b\u578b\u3001\u8fd0\u7ef4\u80fd\u529b\u7684\u7248\u672c\uff0c\u52a0\u4e0a\u540e\u7f00 ",(0,p.kt)("inlineCode",{parentName:"p"},"@version")," \u5373\u53ef\u3002\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u91cc\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a ",(0,p.kt)("inlineCode",{parentName:"p"},"webservice@v1")," \u8868\u793a\u4e00\u76f4\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"webservice"),"\u8fd9\u4e2a\u7ec4\u4ef6\u7684 v1 \u7248\u672c\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\nspec:\n  components:\n  - name: server\n    type: webservice@v1\n    properties:\n      image: stefanprodan/podinfo:4.0.3\n")),(0,p.kt)("p",null,"\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u7cfb\u7edf\u7ba1\u7406\u5458\u5bf9\u7ec4\u4ef6\u7c7b\u578b\u548c\u8fd0\u7ef4\u529f\u80fd\u7684\u53d8\u66f4\u5c31\u4e0d\u4f1a\u5f71\u54cd\u5230\u4f60\u7684\u5e94\u7528\uff0c\u5426\u5219\u6bcf\u6b21\u5e94\u7528\u7684\u66f4\u65b0\u90fd\u4f1a\u4f7f\u7528\u6700\u65b0\u7684\u7ec4\u4ef6\u7c7b\u578b\u548c\u8fd0\u7ef4\u529f\u80fd\u3002"),(0,p.kt)("h2",{id:"\u5e94\u7528\u7248\u672c"},"\u5e94\u7528\u7248\u672c"),(0,p.kt)("p",null,"\u9664\u4e86\u5de5\u4f5c\u6d41\u5b57\u6bb5\uff0c\u5e94\u7528\u4e2d\u7684\u6bcf\u4e2a\u5b57\u6bb5\u66f4\u65b0\u90fd\u4f1a\u751f\u6210\u4e00\u4e2a\u5bf9\u5e94\u7684\u7248\u672c\u5feb\u7167\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u67e5\u770b\u7248\u672c\u5feb\u7167")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get apprev -l app.oam.dev/name=myapp\nNAME       AGE\nmyapp-v1   54m\nmyapp-v2   53m\nmyapp-v3   18s\n")),(0,p.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u7248\u672c\u5feb\u7167\u4e2d\u83b7\u5f97\u5e94\u7528\u6240\u5173\u8054\u7684\u6240\u6709\u4fe1\u606f\uff0c\u5305\u62ec\u5e94\u7528\u7684\u5b57\u6bb5\u4ee5\u53ca\u5bf9\u5e94\u7684\u7ec4\u4ef6\u7c7b\u578b\u3001\u8fd0\u7ef4\u80fd\u529b\u7b49\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: ApplicationRevision\nmetadata:\n  labels:\n    app.oam.dev/app-revision-hash: a74b4a514ba2fc08\n    app.oam.dev/name: myapp\n  name: myapp-v3\n  namespace: default\n  ...\nspec:\n  application:\n    apiVersion: core.oam.dev/v1beta1\n    kind: Application\n    metadata:\n      name: myapp\n      namespace: default\n      ...\n    spec:\n      components:\n      - name: express-server\n        properties:\n          image: stefanprodan/podinfo:5.0.3\n        type: webservice@v1\n     ...\n  componentDefinitions:\n    webservice:\n      apiVersion: core.oam.dev/v1beta1\n      kind: ComponentDefinition\n      metadata:\n        name: webservice\n        namespace: vela-system\n        ...\n      spec:\n        schematic:\n          cue:\n            ...\n  traitDefinitions:\n    ...\n")),(0,p.kt)("h2",{id:"\u5e94\u7528\u7248\u672c\u5bf9\u6bd4"},"\u5e94\u7528\u7248\u672c\u5bf9\u6bd4"),(0,p.kt)("p",null,"\u90e8\u7f72\u524d\u7248\u672c\u5bf9\u6bd4\uff08Live-diff\uff09\u529f\u80fd\u53ef\u4ee5\u8ba9\u4f60\u4e0d\u7528\u771f\u7684\u5bf9\u8fd0\u884c\u65f6\u96c6\u7fa4\u8fdb\u884c\u64cd\u4f5c\uff0c\u5728\u672c\u5730\u9884\u89c8\u5373\u5c06\u90e8\u7f72\u7684\u7248\u672c\u548c\u7ebf\u4e0a\u7248\u672c\u7684\u5dee\u5f02\u6027\uff0c\u5e76\u8fdb\u884c\u786e\u8ba4\u3002"),(0,p.kt)("p",null,"\u9884\u89c8\u6240\u63d0\u4f9b\u7684\u4fe1\u606f\uff0c\u4f1a\u5305\u62ec\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7684\u65b0\u589e\u3001\u4fee\u6539\u548c\u79fb\u9664\u7b49\u4fe1\u606f\uff0c\u540c\u65f6\u4e5f\u5305\u62ec\u5176\u4e2d\u7684\u7ec4\u4ef6\u548c\u8fd0\u7ef4\u7279\u5f81\u7684\u76f8\u5173\u4fe1\u606f\u3002"),(0,p.kt)("p",null,"\u5047\u8bbe\u4f60\u7684\u65b0\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u5982\u4e0b\uff0c\u5305\u542b\u955c\u50cf\u7684\u53d8\u5316\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"# new-app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\nspec:\n  components:\n    - name: express-server\n      type: webservice@v1\n      properties:\n        image: crccheck/hello-world # \u53d8\u66f4\u955c\u50cf\n")),(0,p.kt)("p",null,"\u7136\u540e\u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"\u7248\u672c\u5bf9\u6bd4")," \u529f\u80fd\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"vela live-diff -f new-app.yaml -r vela-app-v1\n")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"li"},"-r")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"li"},"--revision")," \u53c2\u6570\uff0c\u6307\u5b9a\u8981\u6bd4\u8f83\u7684\u7248\u672c\u540d\u79f0\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"li"},"-c")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"li"},"--context")," \u6307\u5b9a\u5bf9\u6bd4\u5dee\u5f02\u7684\u4e0a\u4e0b\u6587\u884c\u6570\u3002")),(0,p.kt)("p",null,"\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"vela live-diff -h")," \u67e5\u770b\u66f4\u591a\u53c2\u6570\u7528\u6cd5\u3002"),(0,p.kt)("details",null,(0,p.kt)("summary",null," \u70b9\u51fb\u67e5\u770b\u5bf9\u6bd4\u7ed3\u679c "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'---\n# Application (myapp) has been modified(*)\n---\n  apiVersion: core.oam.dev/v1beta1\n  kind: Application\n  metadata:\n-   annotations:\n-     kubectl.kubernetes.io/last-applied-configuration: |\n-       {"apiVersion":"core.oam.dev/v1beta1","kind":"Application","metadata":{"annotations":{},"name":"myapp","namespace":"default"},"spec":{"components":[{"externalRevision":"express-server-v1","name":"express-server","properties":{"image":"stefanprodan/podinfo:4.0.3"},"type":"webservice"}]}}\n    creationTimestamp: null\n-   finalizers:\n-   - app.oam.dev/resource-tracker-finalizer\n    name: myapp\n    namespace: default\n  spec:\n    components:\n-   - externalRevision: express-server-v1\n-     name: express-server\n+   - name: express-server\n      properties:\n-       image: stefanprodan/podinfo:4.0.3\n-     type: webservice\n+       image: crccheck/hello-world\n+     type: webservice@v1\n  status:\n    rollout:\n      batchRollingState: ""\n      currentBatch: 0\n      lastTargetAppRevision: ""\n      rollingState: ""\n      upgradedReadyReplicas: 0\n      upgradedReplicas: 0\n\n---\n## Component (express-server) has been modified(*)\n---\n  apiVersion: apps/v1\n  kind: Deployment\n  metadata:\n-   annotations:\n-     kubectl.kubernetes.io/last-applied-configuration: |\n-       {"apiVersion":"core.oam.dev/v1beta1","kind":"Application","metadata":{"annotations":{},"name":"myapp","namespace":"default"},"spec":{"components":[{"externalRevision":"express-server-v1","name":"express-server","properties":{"image":"stefanprodan/podinfo:4.0.3"},"type":"webservice"}]}}\n+   annotations: {}\n    labels:\n      app.oam.dev/appRevision: ""\n      app.oam.dev/component: express-server\n      app.oam.dev/name: myapp\n      app.oam.dev/resourceType: WORKLOAD\n-     workload.oam.dev/type: webservice\n+     workload.oam.dev/type: webservice-v1\n    name: express-server\n    namespace: default\n  spec:\n    selector:\n      matchLabels:\n        app.oam.dev/component: express-server\n    template:\n      metadata:\n        labels:\n          app.oam.dev/component: express-server\n          app.oam.dev/revision: KUBEVELA_COMPONENT_REVISION_PLACEHOLDER\n      spec:\n        containers:\n-       - image: stefanprodan/podinfo:4.0.3\n+       - image: crccheck/hello-world\n          name: express-server\n          ports:\n          - containerPort: 80\n'))),(0,p.kt)("p",null,"\u672a\u6765\uff0c\u6211\u4eec\u4e5f\u8ba1\u5212\u5c06\u5e94\u7528\u7248\u672c\u5feb\u7167\u96c6\u6210\u5230 CLI/Dashboard \u7b49\u5de5\u5177\u4e2d\uff0c\u4ee5\u6b64\u5b9e\u73b0\u5feb\u7167\u6062\u590d\u7b49\u66f4\u591a\u529f\u80fd\u3002"))}c.isMDXComponent=!0}}]);