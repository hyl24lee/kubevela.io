/*! For license information please see c4f5d8e4.42b7f405.js.LICENSE.txt */
(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4195],{87805:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var r=a(22122),o=a(67294),n=a(86010),l=a(35888),i=a(36742),c=a(24973),s=[{title:o.createElement(o.Fragment,null,o.createElement(c.Z,null,"Application Centric")),imgUrl:"img/application-centric.svg",description:o.createElement(o.Fragment,null,o.createElement("p",null,o.createElement(c.Z,null,"KubeVela introduces Open Application Model (OAM) as the consistent yet higher level API to capture a full deployment of microservices on top of hybrid environments. Placement strategy, traffic shifting and rolling update are declared at application level. No infrastructure level concern, simply deploy.")))},{title:o.createElement(o.Fragment,null,o.createElement(c.Z,null,"Programmable Workflow")),imgUrl:"img/extending-natively.svg",description:o.createElement(o.Fragment,null,o.createElement("p",null,o.createElement(c.Z,null,"KubeVela leverages "),o.createElement("a",{href:"https://github.com/cuelang/cue"},"CUE")," ",o.createElement(c.Z,null," to implement its model layer. This allows you to define an application deployment workflow as DAG, with all steps and application's needs glued together in programmable approach. No restrictions, natively extensible."))),reverse:!0},{title:o.createElement(o.Fragment,null,o.createElement(c.Z,null,"Runtime Agnostic")),imgUrl:"img/simple-yet-extensible-abstraction-mechanism.svg",description:o.createElement(o.Fragment,null,o.createElement("p",null,o.createElement(c.Z,null,"KubeVela works as an application delivery control plane that is fully runtime agnostic. It can deploy and operate any application components including containers, cloud functions, databases, or even EC2 instances across hybrid environments, following the workflow you defined.")))}],d=a(52263),u=a(44996);class h extends o.PureComponent{constructor(e){super(e),this.$=o.createRef(),this._=o.createRef()}render(){return o.createElement("span",{ref:this.$},o.createElement("a",{...this.props,ref:this._},this.props.children))}componentDidMount(){this.paint()}getSnapshotBeforeUpdate(){return this.reset(),null}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const e=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(a.bind(a,9984)).then((({render:t})=>{t(e.appendChild(this._.current),(function(t){try{e.parentNode.replaceChild(t,e)}catch(e){}}))}))}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}var m=h,g={hero:"hero_2alu",heroLogoWrapper:"heroLogoWrapper_3Ly3",heroLogo:"heroLogo_3Bfc",heroTitle:"heroTitle_2lCx",installTextWrapper:"installTextWrapper_X7FX",feature:"feature_3ctd",featureReverse:"featureReverse_1UiA",featureImage:"featureImage_ZtzX",featureDesc:"featureDesc_Zidf",demoImage:"demoImage_2gD1",whiteboard:"whiteboard_3hCy",whiteboardCol:"whiteboardCol_o9DZ",logoWrapper:"logoWrapper_12FO",cncfLogo:"cncfLogo_3Y7k",heroButtons:"heroButtons_3PIY"};function p(e){var t=e.imgUrl,a=e.title,r=e.description,l=e.reverse;return o.createElement("div",{className:(0,n.Z)("row",g.feature,l?g.featureReverse:"")},o.createElement("div",{className:"col col--3"},o.createElement("div",{className:"text--center"},t&&o.createElement("img",{className:g.featureImage,src:(0,u.Z)(t),alt:a}))),o.createElement("div",{className:(0,n.Z)("col col--9",g.featureDesc)},o.createElement("div",null,o.createElement("h2",null,a),o.createElement("div",null,r))))}var f=function(e){var t=e.children,a=e.href;return o.createElement("div",{className:"col col--2 margin-horiz--sm"},o.createElement(i.Z,{className:"button button--outline button--primary button--lg",to:a},t))};function v(){var e=(0,d.default)().siteConfig,t=void 0===e?{}:e;return o.createElement(l.Z,{title:t.tagline,description:t.tagline},o.createElement("header",{className:(0,n.Z)("hero",g.hero)},o.createElement("div",{className:"container text--center"},o.createElement("div",{className:g.heroLogoWrapper},o.createElement("img",{className:g.heroLogo,src:(0,u.Z)("img/logo.svg"),alt:"Kubevela Logo"})),o.createElement("h2",{className:(0,n.Z)("hero__title",g.heroTitle)},t.title),o.createElement(m,{href:"https://github.com/oam-dev/kubevela","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star facebook/metro on GitHub"},"Star"),o.createElement("p",{className:"hero__subtitle"},t.tagline),o.createElement("div",{className:(0,n.Z)(g.heroButtons,"name","margin-vert--md")},o.createElement(f,{href:(0,u.Z)("docs/install")},o.createElement(c.Z,null,"Get Started")),o.createElement(f,{href:(0,u.Z)("docs/")},o.createElement(c.Z,null,"Learn More"))))),o.createElement(b,null),o.createElement("main",{className:(0,n.Z)("hero",g.hero)},o.createElement("div",{className:"container"},o.createElement("section",{className:g.features},o.createElement("div",{className:"container"},s.map((function(e,t){return o.createElement(p,(0,r.Z)({key:t},e))})))))),o.createElement("div",{className:(0,n.Z)("hero",g.hero)},o.createElement("div",{className:"container text--center"},o.createElement("h3",{className:"hero__subtitle"},o.createElement(c.Z,null,"KubeVela is a")," ",o.createElement("a",{href:"https://cncf.io/"},"Cloud Native Computing Foundation")," ",o.createElement(c.Z,null,"sandbox project")),o.createElement("div",{className:(0,n.Z)("cncf-logo",g.cncfLogo)}))))}var b=function(){return o.createElement("div",{className:(0,n.Z)("hero",g.hero)},o.createElement("div",{className:"container"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col col--6"},o.createElement("h1",null,o.createElement(c.Z,null,"What is KubeVela?")),o.createElement("p",{className:"hero__subtitle"},o.createElement("small",null,o.createElement(c.Z,null,"KubeVela is a modern application platform that makes deploying and managing applications across today's hybrid, multi-cloud environments")," ",o.createElement("i",null," ",o.createElement(c.Z,null,"easier and faster.")," "),o.createElement("br",null),o.createElement("br",null),o.createElement(c.Z,null,"KubeVela is runtime agnostic, natively extensible, yet most importantly, "),o.createElement("i",null," application-centric "),o.createElement(c.Z,null,".")))),o.createElement("div",{className:"col"},o.createElement("img",{className:"image",src:(0,u.Z)("img/what-is-kubevela.png"),align:"right",alt:"what is kubevela"})))))}},9984:function(e,t,a){"use strict";a.r(t),a.d(t,{render:function(){return F}});var r=window.document,o=window.Math,n=window.HTMLElement,l=window.XMLHttpRequest,i=function(e){return function(t,a,r){var o=e.createElement(t);if(null!=a)for(var n in a){var l=a[n];null!=l&&(null!=o[n]?o[n]=l:o.setAttribute(n,l))}if(null!=r)for(var i=0,c=r.length;i<c;i++){var s=r[i];o.appendChild("string"==typeof s?e.createTextNode(s):s)}return o}},c=i(r),s=function(e,t){return{}.hasOwnProperty.call(e,t)},d=function(e){return(""+e).toLowerCase()},u="github.com",h=l&&"prototype"in l&&"withCredentials"in l.prototype,m=h&&n&&"attachShadow"in n.prototype&&!("prototype"in n.prototype.attachShadow),g=function(e,t,a){e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent("on"+t,a)},p=function(e,t,a){e.removeEventListener?e.removeEventListener(t,a,!1):e.detachEvent("on"+t,a)},f={light:".btn{color:#24292e;background-color:#eff3f6;border-color:#cfd3d6;border-color:rgba(27,31,35,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e9ebef;background-position:0 -0.5em;border-color:#caccd0;border-color:rgba(27,31,35,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f3f4f6, #e9ebef 90%);background-image:linear-gradient(180deg, #f3f4f6, #e9ebef 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF3F4F6', endColorstr='#FFE8EAEE')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;border-color:#cacdd0;border-color:rgba(27,31,35,.15);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#ddddde;border-color:rgba(27,31,35,.15)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",dark:".btn{color:#c9d1d9;background-color:#1a1e23;border-color:#30363d;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#292e33;background-position:0 -0.5em;border-color:#8b949e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2330363d'/%3e%3cstop offset='90%25' stop-color='%23292e33'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #30363d, #292e33 90%);background-image:linear-gradient(180deg, #30363d, #292e33 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF30363D', endColorstr='#FF282D32')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#161719;border-color:#8b949e;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15);background-image:none;filter:none}.social-count{color:#c9d1d9;background-color:#21262d;border-color:#30363d}.social-count:focus,.social-count:hover{color:#58a6ff}.octicon-heart{color:#bf4b8a}",dark_dimmed:".btn{color:#adbac7;background-color:#30363d;border-color:#444c56;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23373e47'/%3e%3cstop offset='90%25' stop-color='%2330363d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #373e47, #30363d 90%);background-image:linear-gradient(180deg, #373e47, #30363d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF373E47', endColorstr='#FF2F353C')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#3c444d;background-position:0 -0.5em;border-color:#768390;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23444c56'/%3e%3cstop offset='90%25' stop-color='%233c444d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #444c56, #3c444d 90%);background-image:linear-gradient(180deg, #444c56, #3c444d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF444C56', endColorstr='#FF3B434C')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#2e3031;border-color:#768390;box-shadow:inset 0 .15em .3em rgba(28,33,40,.15);background-image:none;filter:none}.social-count{color:#adbac7;background-color:#373e47;border-color:#444c56}.social-count:focus,.social-count:hover{color:#539bf5}.octicon-heart{color:#ae4c82}"},v=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+f[s(f,t)?t:e]+"}"},b=function(e){if(null==e)return f.light;if(s(f,e))return f[e];var t=function(e,t,a,r){null==t&&(t="&"),null==a&&(a="="),null==r&&(r=window.decodeURIComponent);for(var o={},n=e.split(t),l=0,i=n.length;l<i;l++){var c=n[l];if(""!==c){var s=c.split(a);o[r(s[0])]=null!=s[1]?r(s.slice(1).join(a)):void 0}}return o}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return f[s(f,t["no-preference"])?t["no-preference"]:"light"]+v("light",t.light)+v("dark",t.dark)},w={"comment-discussion":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path>'}}},download:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>'}}},eye:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>'}}},heart:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>'}}},"issue-opened":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>'}}},"mark-github":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'}}},package:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path>'}}},play:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path>'}}},"repo-forked":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>'}}},"repo-template":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>'}}},star:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>'}}}},E=function(e,t){e=d(e).replace(/^octicon-/,""),s(w,e)||(e="mark-github");var a=t>=24&&24 in w[e].heights?24:16,r=w[e].heights[a];return'<svg viewBox="0 0 '+r.width+" "+a+'" width="'+t*r.width/a+'" height="'+t+'" class="octicon octicon-'+e+'" aria-hidden="true">'+r.path+"</svg>"},k={},y=function(e,t){var a=k[e]||(k[e]=[]);if(!(a.push(t)>1)){var r=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete k[e];t=a.shift();)t.apply(null,arguments)}));if(h){var o=new l;g(o,"abort",r),g(o,"error",r),g(o,"load",(function(){var e;try{e=JSON.parse(this.responseText)}catch(t){return void r(t)}r(200!==this.status,e)})),o.open("GET",e),o.send()}else{var n=this||window;n._=function(e){n._=null,r(200!==e.meta.status,e.data)};var c=i(n.document)("script",{async:!0,src:e+(-1!==e.indexOf("?")?"&":"?")+"callback=_"}),s=function(){n._&&n._({meta:{}})};g(c,"load",s),g(c,"error",s),c.readyState&&function(e,t,a){var r="readystatechange",o=function(){if(t.test(e.readyState))return p(e,r,o),a.apply(this,arguments)};g(e,r,o)}(c,/de|m/,s),n.document.getElementsByTagName("head")[0].appendChild(c)}}},x=function(e,t,a){var r=i(e.ownerDocument),o=e.appendChild(r("style",{type:"text/css"})),n="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}"+b(t["data-color-scheme"]);o.styleSheet?o.styleSheet.cssText=n:o.appendChild(e.ownerDocument.createTextNode(n));var l="large"===d(t["data-size"]),c=r("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:E(t["data-icon"],l?16:14)},[" ",r("span",{},[t["data-text"]||""])]),s=e.appendChild(r("div",{className:"widget"+(l?" widget-lg":"")},[c])),h=c.hostname.replace(/\.$/,"");if(("."+h).substring(h.length-u.length)!=="."+u)return c.removeAttribute("href"),void a(s);var m=(" /"+c.pathname).split(/\/+/);if(((h===u||h==="gist."+u)&&"archive"===m[3]||h===u&&"releases"===m[3]&&("download"===m[4]||"latest"===m[4]&&"download"===m[5])||h==="codeload."+u)&&(c.target="_top"),"true"===d(t["data-show-count"])&&h===u&&"marketplace"!==m[1]&&"sponsors"!==m[1]&&"orgs"!==m[1]&&"users"!==m[1]&&"-"!==m[1]){var g,p;if(!m[2]&&m[1])p="followers",g="?tab=followers";else if(!m[3]&&m[2])p="stargazers_count",g="/stargazers";else if(m[4]||"subscription"!==m[3])if(m[4]||"fork"!==m[3]){if("issues"!==m[3])return void a(s);p="open_issues_count",g="/issues"}else p="forks_count",g="/network/members";else p="subscribers_count",g="/watchers";var f=m[2]?"/repos/"+m[1]+"/"+m[2]:"/users/"+m[1];y.call(this,"https://api.github.com"+f,(function(e,t){if(!e){var o=t[p];s.appendChild(r("a",{className:"social-count",href:t.html_url+g,rel:"noopener",target:"_blank","aria-label":o+" "+p.replace(/_count$/,"").replace("_"," ").slice(0,o<2?-1:void 0)+" on GitHub"},[(""+o).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}a(s)}))}else a(s)},C=window.devicePixelRatio||1,z=function(e){return(C>1?o.ceil(o.round(e*C)/C*2)/2:o.ceil(e))||0},_=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},F=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},a=["icon","color-scheme","text","size","show-count"],r=0,o=a.length;r<o;r++){var n="data-"+a[r];t[n]=e.getAttribute(n)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),m){var a=c("span");x(a.attachShadow({mode:"closed"}),e,(function(){t(a)}))}else{var n=c("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});_(n,[0,0]),n.style.border="none";var l=function(){var a,i=n.contentWindow;try{a=i.document.body}catch(c){return void r.body.appendChild(n.parentNode.removeChild(n))}p(n,"load",l),x.call(i,a,e,(function(a){var r=function(e){var t=e.offsetWidth,a=e.offsetHeight;if(e.getBoundingClientRect){var r=e.getBoundingClientRect();t=o.max(t,z(r.width)),a=o.max(a,z(r.height))}return[t,a]}(a);n.parentNode.removeChild(n),function(e,t,a){var r=function(){return p(e,t,r),a.apply(this,arguments)};g(e,t,r)}(n,"load",(function(){_(n,r)})),n.src="https://unpkg.com/github-buttons@2.17.0/dist/buttons.html#"+(n.name=function(e,t,a,r){null==t&&(t="&"),null==a&&(a="="),null==r&&(r=window.encodeURIComponent);var o=[];for(var n in e){var l=e[n];null!=l&&o.push(r(n)+a+r(l))}return o.join(t)}(e)),t(n)}))};g(n,"load",l),r.body.appendChild(n)}}}}]);