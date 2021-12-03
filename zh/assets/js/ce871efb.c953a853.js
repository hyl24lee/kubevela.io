(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[19935],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?t.createElement(b,s(s({ref:n},p),{},{components:r})):t.createElement(b,s({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65802:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var t=r(22122),a=r(19756),o=(r(67294),r(3905)),s={title:"Cloud Services"},i={unversionedId:"end-user/components/cloud-services",id:"version-v1.0/end-user/components/cloud-services",isDocsHomePage:!1,title:"Cloud Services",description:"KubeVela allows you to declare cloud services your application needs in consistent API. Currently, we support both Terraform and Crossplane.",source:"@site/versioned_docs/version-v1.0/end-user/components/cloud-services.md",sourceDirName:"end-user/components",slug:"/end-user/components/cloud-services",permalink:"/zh/docs/v1.0/end-user/components/cloud-services",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cloud-services.md",version:"v1.0",lastUpdatedBy:"yangsoon",lastUpdatedAt:1625208237,formattedLastUpdatedAt:"2021/7/2",frontMatter:{title:"Cloud Services"},sidebar:"version-v1.0/docs",previous:{title:"Worker",permalink:"/zh/docs/v1.0/end-user/components/worker"},next:{title:"Want More?",permalink:"/zh/docs/v1.0/end-user/components/more"}},c=[{value:"Terraform",id:"terraform",children:[{value:"Alibaba Cloud RDS and OSS",id:"alibaba-cloud-rds-and-oss",children:[]}]},{value:"Crossplane",id:"crossplane",children:[{value:"Alibaba Cloud RDS and OSS",id:"alibaba-cloud-rds-and-oss-1",children:[]}]},{value:"Verify",id:"verify",children:[]}],l={toc:c};function p(e){var n=e.components,s=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},l,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"KubeVela allows you to declare cloud services your application needs in consistent API. Currently, we support both Terraform and Crossplane."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please check ",(0,o.kt)("a",{parentName:"p",href:"../../platform-engineers/cloud-services"},"the platform team guide for cloud services")," if you are interested in how these capabilities are maintained in KubeVela.")),(0,o.kt)("p",null,"The cloud services will be consumed by the application via ",(0,o.kt)("a",{parentName:"p",href:"../traits/service-binding"},"Service Binding Trait"),"."),(0,o.kt)("h2",{id:"terraform"},"Terraform"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f This section assumes ",(0,o.kt)("a",{parentName:"p",href:"../../platform-engineers/terraform"},"Terraform related capabilities")," have been installed in your platform.")),(0,o.kt)("p",null,"Check the parameters of cloud resource components and trait."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show alibaba-rds\n# Properties\n+----------------------------+-------------------------------------------------------------------------+-----------------------------------------------------------+----------+---------+\n|            NAME            |                               DESCRIPTION                               |                           TYPE                            | REQUIRED | DEFAULT |\n+----------------------------+-------------------------------------------------------------------------+-----------------------------------------------------------+----------+---------+\n| bucket                     | OSS bucket name                                                         | string                                                    | true     |         |\n| acl                        | OSS bucket ACL, supported 'private', 'public-read', 'public-read-write' | string                                                    | true     |         |\n| writeConnectionSecretToRef | The secret which the cloud resource connection will be written to       | [writeConnectionSecretToRef](#writeConnectionSecretToRef) | false    |         |\n+----------------------------+-------------------------------------------------------------------------+-----------------------------------------------------------+----------+---------+\n\n\n## writeConnectionSecretToRef\n+-----------+-----------------------------------------------------------------------------+--------+----------+---------+\n|   NAME    |                                 DESCRIPTION                                 |  TYPE  | REQUIRED | DEFAULT |\n+-----------+-----------------------------------------------------------------------------+--------+----------+---------+\n| name      | The secret name which the cloud resource connection will be written to      | string | true     |         |\n| namespace | The secret namespace which the cloud resource connection will be written to | string | false    |         |\n+-----------+-----------------------------------------------------------------------------+--------+----------+---------+\n\n\n$ kubectl vela show service-binding\n# Properties\n+-------------+------------------------------------------------+------------------+----------+---------+\n|    NAME     |                  DESCRIPTION                   |       TYPE       | REQUIRED | DEFAULT |\n+-------------+------------------------------------------------+------------------+----------+---------+\n| envMappings | The mapping of environment variables to secret | map[string]{...} | true     |         |\n+-------------+------------------------------------------------+------------------+----------+---------+\n")),(0,o.kt)("h3",{id:"alibaba-cloud-rds-and-oss"},"Alibaba Cloud RDS and OSS"),(0,o.kt)("p",null,"A sample ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/terraform/cloud-resource-provision-and-consume/application.yaml"},"application")," is as below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        ports: 80\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              # environments refer to db-conn secret\n              DB_PASSWORD:\n                secret: db-conn                                   # 1) If the env name is the same as the secret key, secret key can be omitted.\n              endpoint:\n                secret: db-conn\n                key: DB_HOST                                      # 2) If the env name is different from secret key, secret key has to be set.\n              username:\n                secret: db-conn\n                key: DB_USER\n              # environments refer to oss-conn secret\n              BUCKET_NAME:\n                secret: oss-conn\n\n    - name: sample-db\n      type: alibaba-rds\n      properties:\n        instance_name: sample-db\n        account_name: oamtest\n        password: U34rfwefwefffaked\n        writeConnectionSecretToRef:\n          name: db-conn\n\n    - name: sample-oss\n      type: alibaba-oss\n      properties:\n        bucket: vela-website\n        acl: private\n        writeConnectionSecretToRef:\n          name: oss-conn\n\n\n")),(0,o.kt)("h2",{id:"crossplane"},"Crossplane"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f This section assumes ",(0,o.kt)("a",{parentName:"p",href:"../../platform-engineers/crossplane"},"Crossplane related capabilities")," have been installed in your platform.")),(0,o.kt)("h3",{id:"alibaba-cloud-rds-and-oss-1"},"Alibaba Cloud RDS and OSS"),(0,o.kt)("p",null,"Check the parameters of cloud service component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show alibaba-rds\n\n# Properties\n+---------------+------------------------------------------------+--------+----------+--------------------+\n|     NAME      |                  DESCRIPTION                   |  TYPE  | REQUIRED |      DEFAULT       |\n+---------------+------------------------------------------------+--------+----------+--------------------+\n| engine        | RDS engine                                     | string | true     | mysql              |\n| engineVersion | The version of RDS engine                      | string | true     |                8.0 |\n| instanceClass | The instance class for the RDS                 | string | true     | rds.mysql.c1.large |\n| username      | RDS username                                   | string | true     |                    |\n| secretName    | Secret name which RDS connection will write to | string | true     |                    |\n+---------------+------------------------------------------------+--------+----------+--------------------+\n")),(0,o.kt)("p",null,"A sample application is as below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        ports: 80\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              # environments refer to db-conn secret\n              DB_PASSWORD:\n                secret: db-conn\n                key: password                                     # 1) If the env name is different from secret key, secret key has to be set.\n              endpoint:\n                secret: db-conn                                   # 2) If the env name is the same as the secret key, secret key can be omitted.\n              username:\n                secret: db-conn\n              # environments refer to oss-conn secret\n              BUCKET_NAME:\n                secret: oss-conn\n                key: Bucket\n\n    - name: sample-db\n      type: alibaba-rds\n      properties:\n        name: sample-db\n        engine: mysql\n        engineVersion: "8.0"\n        instanceClass: rds.mysql.c1.large\n        username: oamtest\n        secretName: db-conn\n\n    - name: sample-oss\n      type: alibaba-oss\n      properties:\n        name: velaweb\n        secretName: oss-conn\n')),(0,o.kt)("h2",{id:"verify"},"Verify"),(0,o.kt)("p",null,"Deploy and verify the application (by either provider is OK)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get application\nNAME     AGE\nwebapp   46m\n\n$ kubectl port-forward deployment/express-server 80:80\nForwarding from 127.0.0.1:80 -> 80\nForwarding from [::1]:80 -> 80\nHandling connection for 80\nHandling connection for 80\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(80478).Z})))}p.isMDXComponent=!0},80478:function(e,n,r){"use strict";n.Z=r.p+"assets/images/crossplane-visit-application-b6aa490a07025d258b6d0ad00cd9a055.jpg"}}]);