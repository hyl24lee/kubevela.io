(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[7043],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),f=r,v=m["".concat(p,".").concat(f)]||m[f]||s[f]||l;return a?n.createElement(v,i(i({ref:t},u),{},{components:a})):n.createElement(v,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},59884:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),i={title:"vela"},o={unversionedId:"cli/vela",id:"cli/vela",isDocsHomePage:!1,title:"vela",description:"`",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/vela.md",sourceDirName:"cli",slug:"/cli/vela",permalink:"/zh/docs/next/cli/vela",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/cli/vela.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1629427642,formattedLastUpdatedAt:"2021/8/20",frontMatter:{title:"vela"}},p=[{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],c={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vela [flags]\n")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  -e, --env string   specify environment name for application\n  -h, --help         help for vela\n")),(0,l.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_addon"},"vela addon"),"\t - List and get addon in KubeVela"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_cap"},"vela cap"),"\t - Manage capability centers and installing/uninstalling capabilities"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_completion"},"vela completion"),"\t - Output shell completion code for the specified shell (bash or zsh)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_components"},"vela components"),"\t - List components"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_config"},"vela config"),"\t - Manage configurations"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_def"},"vela def"),"\t - Manage Definitions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_delete"},"vela delete"),"\t - Delete an application"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_env"},"vela env"),"\t - Manage environments"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_exec"},"vela exec"),"\t - Execute command in a container"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_export"},"vela export"),"\t - Export deploy manifests from appfile"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_help"},"vela help"),"\t - Help about any command"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_init"},"vela init"),"\t - Create scaffold for an application"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_logs"},"vela logs"),"\t - Tail logs for application"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_ls"},"vela ls"),"\t - List applications"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_port-forward"},"vela port-forward"),"\t - Forward local ports to services in an application"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_show"},"vela show"),"\t - Show the reference doc for a workload type or trait"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_status"},"vela status"),"\t - Show status of an application"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_system"},"vela system"),"\t - System management utilities"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_template"},"vela template"),"\t - Manage templates"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_traits"},"vela traits"),"\t - List traits"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_up"},"vela up"),"\t - Apply an appfile"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_version"},"vela version"),"\t - Prints out build version information"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_workflow"},"vela workflow"),"\t - Operate application workflow in KubeVela"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_workloads"},"vela workloads"),"\t - List workloads")),(0,l.kt)("h6",{id:"auto-generated-by-spf13cobra-on-19-aug-2021"},"Auto generated by spf13/cobra on 19-Aug-2021"))}u.isMDXComponent=!0}}]);