(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3432],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},30418:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return l}});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),a={title:"Terraform \u7ec4\u4ef6"},c={unversionedId:"platform-engineers/components/component-terraform",id:"version-v1.1/platform-engineers/components/component-terraform",isDocsHomePage:!1,title:"Terraform \u7ec4\u4ef6",description:"\u5bf9\u4e91\u8d44\u6e90\u7684\u96c6\u6210\u9700\u6c42\u5f80\u5f80\u662f\u6700\u9891\u7e41\u51fa\u73b0\uff0c\u6bd4\u5982\u4f60\u53ef\u80fd\u5e0c\u671b\u6570\u636e\u5e93\u3001\u4e2d\u95f4\u4ef6\u7b49\u670d\u52a1\u4f7f\u7528\u963f\u91cc\u4e91\u3001AWS \u7b49\u4e91\u5382\u5546\u7684\uff0c\u4ee5\u83b7\u5f97\u751f\u4ea7\u7ea7\u522b\u7684\u53ef\u7528\u6027\u5e76\u514d\u53bb\u8fd0\u7ef4\u7684\u9ebb\u70e6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/platform-engineers/components/component-terraform.md",sourceDirName:"platform-engineers/components",slug:"/platform-engineers/components/component-terraform",permalink:"/zh/docs/platform-engineers/components/component-terraform",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/components/component-terraform.md",version:"v1.1",lastUpdatedBy:"Lei Zhang (Harry)",lastUpdatedAt:1632276365,formattedLastUpdatedAt:"2021/9/22",frontMatter:{title:"Terraform \u7ec4\u4ef6"},sidebar:"version-v1.1/docs",previous:{title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5165\u95e8",permalink:"/zh/docs/platform-engineers/components/custom-component"},next:{title:"\u81ea\u5b9a\u4e49\u8fd0\u7ef4\u7279\u5f81",permalink:"/zh/docs/platform-engineers/traits/customize-trait"}},p=[{value:"\u4e3a\u4e91\u8d44\u6e90\u5f00\u53d1 ComponentDefinition",id:"\u4e3a\u4e91\u8d44\u6e90\u5f00\u53d1-componentdefinition",children:[{value:"\u963f\u91cc\u4e91",id:"\u963f\u91cc\u4e91",children:[]}]}],s={toc:p};function l(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5bf9\u4e91\u8d44\u6e90\u7684\u96c6\u6210\u9700\u6c42\u5f80\u5f80\u662f\u6700\u9891\u7e41\u51fa\u73b0\uff0c\u6bd4\u5982\u4f60\u53ef\u80fd\u5e0c\u671b\u6570\u636e\u5e93\u3001\u4e2d\u95f4\u4ef6\u7b49\u670d\u52a1\u4f7f\u7528\u963f\u91cc\u4e91\u3001AWS \u7b49\u4e91\u5382\u5546\u7684\uff0c\u4ee5\u83b7\u5f97\u751f\u4ea7\u7ea7\u522b\u7684\u53ef\u7528\u6027\u5e76\u514d\u53bb\u8fd0\u7ef4\u7684\u9ebb\u70e6\u3002\nTerraform \u662f\u76ee\u524d\u4e1a\u5185\u652f\u6301\u4e91\u8d44\u6e90\u6700\u5e7f\u6cdb\u4e5f\u6700\u53d7\u6b22\u8fce\u7684\u7ec4\u4ef6\uff0cKubeVela \u5bf9 Terraform \u8fdb\u884c\u4e86\u989d\u5916\u7684\u652f\u6301\uff0c\u4f7f\u5f97\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Kubernetes CRD \u7684\u65b9\u5f0f\u914d\u5408\nTerraform \u4f7f\u7528\u4efb\u610f\u7684\u4e91\u8d44\u6e90\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4f7f\u6700\u7ec8\u7528\u6237\u80fd\u591f",(0,i.kt)("a",{parentName:"p",href:"../../end-user/components/cloud-services/provider-and-consume-cloud-services"},"\u90e8\u7f72\u548c\u6d88\u8d39\u4e91\u8d44\u6e90"),"\uff0c\u5f53\u7528\u6237\u7684\u8981\u6c42\u8d85\u51fa\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"../../end-user/components/cloud-services/provider-and-consume-cloud-services"},"\u5185\u7f6e\u4e91\u8d44\u6e90\u7684\u80fd\u529b"),"\uff0c\n\u7ba1\u7406\u5458\u9700\u8981\u8981\u4e3a\u4e91\u8d44\u6e90\u51c6\u5907 ComponentDefinitions\u3002"),(0,i.kt)("h2",{id:"\u4e3a\u4e91\u8d44\u6e90\u5f00\u53d1-componentdefinition"},"\u4e3a\u4e91\u8d44\u6e90\u5f00\u53d1 ComponentDefinition"),(0,i.kt)("h3",{id:"\u963f\u91cc\u4e91"},"\u963f\u91cc\u4e91"),(0,i.kt)("p",null,"\u4ee5 ",(0,i.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/120192.html"},"\u5f39\u6027 IP"),"\u4e3a\u4f8b\u3002"),(0,i.kt)("h4",{id:"\u4e3a\u4e91\u8d44\u6e90\u5f00\u53d1\u4e00\u4e2a-componentdefinition"},"\u4e3a\u4e91\u8d44\u6e90\u5f00\u53d1\u4e00\u4e2a ComponentDefinition"),(0,i.kt)("p",null,"\u8fd9\u662f Terraform ComponentsDefinition \u7684\u811a\u624b\u67b6\u3002\u4f60\u53ea\u9700\u8981\u4fee\u6539\u4e09\u4e2a\u5b57\u6bb5\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.name"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.annotations.definition.oam.dev/description"),"\n\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.schematic.terraform.configuration"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1alpha2\nkind: ComponentDefinition\nmetadata:\n  name: # 1. ComponentDefinition name, like `alibaba-oss`\n  namespace: {{.Values.systemDefinitionNamespace}}\n  annotations:\n    definition.oam.dev/description: # 2. description, like `Terraform configuration for Alibaba Cloud OSS object`\n  labels:\n    type: terraform\nspec:\n  workload:\n    definition:\n      apiVersion: terraform.core.oam.dev/v1beta1\n      kind: Configuration\n  schematic:\n    terraform:\n      configuration: |\n        # 3. The developed Terraform HCL\n")),(0,i.kt)("p",null,"\u8fd9\u91cc\u963f\u91cc\u4e91 EIP \u7684\u5b8c\u6574\u7684 ComponentDefinition\uff0c\u6211\u4eec\u70ed\u70c8\u6b22\u8fce\u4f60\u5c06\u6269\u5c55\u7684\u4e91\u8d44\u6e90\u7684 ComponentDefinition \u8d21\u732e\u5230 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/charts/vela-core/templates/definitions"},"oam-dev/kubevela"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: ComponentDefinition\nmetadata:\n  name: alibaba-eip\n  namespace: {{.Values.systemDefinitionNamespace}}\n  annotations:\n    definition.oam.dev/description: Terraform configuration for Alibaba Cloud Elastic IP\n  labels:\n    type: terraform\nspec:\n  workload:\n    definition:\n      apiVersion: terraform.core.oam.dev/v1beta1\n      kind: Configuration\n  schematic:\n    terraform:\n      configuration: |\n        module "eip" {\n          source = "github.com/zzxwill/terraform-alicloud-eip"\n          name = var.name\n          bandwidth = var.bandwidth\n        }\n\n        variable "name" {\n          description = "Name to be used on all resources as prefix. Default to \'TF-Module-EIP\'."\n          default = "TF-Module-EIP"\n          type = string\n        }\n\n        variable "bandwidth" {\n          description = "Maximum bandwidth to the elastic public network, measured in Mbps (Mega bit per second)."\n          type = number\n          default = 5\n        }\n\n        output "EIP_ADDRESS" {\n          description = "The elastic ip address."\n          value       = module.eip.this_eip_address.0\n        }\n\n')),(0,i.kt)("h4",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"vela show")," \u547d\u4ee4\u5feb\u901f\u9a8c\u8bc1 ComponentDefinition\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela show alibaba-eip\n# Properties\n+----------------------------+------------------------------------------------------------------------------------------+-----------------------------------------------------------+----------+---------+\n|            NAME            |                                       DESCRIPTION                                        |                           TYPE                            | REQUIRED | DEFAULT |\n+----------------------------+------------------------------------------------------------------------------------------+-----------------------------------------------------------+----------+---------+\n| name                       | Name to be used on all resources as prefix. Default to 'TF-Module-EIP'.                  | string                                                    | true     |         |\n| bandwidth                  | Maximum bandwidth to the elastic public network, measured in Mbps (Mega bit per second). | number                                                    | true     |         |\n| writeConnectionSecretToRef | The secret which the cloud resource connection will be written to                        | [writeConnectionSecretToRef](#writeConnectionSecretToRef) | false    |         |\n+----------------------------+------------------------------------------------------------------------------------------+-----------------------------------------------------------+----------+---------+\n\n\n## writeConnectionSecretToRef\n+-----------+-----------------------------------------------------------------------------+--------+----------+---------+\n|   NAME    |                                 DESCRIPTION                                 |  TYPE  | REQUIRED | DEFAULT |\n+-----------+-----------------------------------------------------------------------------+--------+----------+---------+\n| name      | The secret name which the cloud resource connection will be written to      | string | true     |         |\n| namespace | The secret namespace which the cloud resource connection will be written to | string | false    |         |\n+-----------+-----------------------------------------------------------------------------+--------+----------+---------+\n")),(0,i.kt)("p",null,"\u5982\u679c\u8868\u683c\u80fd\u6b63\u5e38\u51fa\u6765\uff0cComponentDefinition \u5e94\u8be5\u5c31\u53ef\u4ee5\u5de5\u4f5c\u4e86\u3002\u66f4\u8fdb\u4e00\u6b65\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6587\u6863",(0,i.kt)("a",{parentName:"p",href:"../../end-user/components/cloud-services/provider-and-consume-cloud-services"},"\u90e8\u7f72\u4e91\u8d44\u6e90"),"\u521b\u5efa\u4e00\u4e2a\u5b9e\u9645\u7684 EIP \u6765\u9a8c\u8bc1\u3002"))}l.isMDXComponent=!0}}]);