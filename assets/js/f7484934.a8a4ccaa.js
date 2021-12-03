(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[36807],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22423:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),l={title:"GitOps with KubeVela"},o={unversionedId:"case-studies/gitops",id:"case-studies/gitops",isDocsHomePage:!1,title:"GitOps with KubeVela",description:"This section will introduce how to use KubeVela in GitOps environment and why.",source:"@site/docs/case-studies/gitops.md",sourceDirName:"case-studies",slug:"/case-studies/gitops",permalink:"/docs/next/case-studies/gitops",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/case-studies/gitops.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1634004074,formattedLastUpdatedAt:"10/12/2021",frontMatter:{title:"GitOps with KubeVela"},sidebar:"docs",previous:{title:"Jenkins CI/CD",permalink:"/docs/next/case-studies/jenkins-cicd"},next:{title:"Initialize environment",permalink:"/docs/next/case-studies/initialize-env"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"For platform administrators/SREs",id:"for-platform-administratorssres",children:[]},{value:"Setup Config Repository",id:"setup-config-repository",children:[]},{value:"Modify the config for GitOps trigger",id:"modify-the-config-for-gitops-trigger",children:[]},{value:"For developers",id:"for-developers",children:[{value:"Setup App Code Repository",id:"setup-app-code-repository",children:[]}]},{value:"Create Git Secret for KubeVela committing to Config Repo",id:"create-git-secret-for-kubevela-committing-to-config-repo",children:[]},{value:"Setup Config Repository",id:"setup-config-repository-1",children:[]},{value:"Modify the code",id:"modify-the-code",children:[]},{value:"Summary",id:"summary",children:[]}],p={toc:s};function c(e){var t=e.components,l=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section will introduce how to use KubeVela in GitOps environment and why."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"GitOps is a continuous delivery method that allows developers to automatically deploy applications by changing code and declarative configurations in a Git repository, with Git-centric operations such as PR and commit. For detailed benefits of GitOps, please check ",(0,r.kt)("a",{parentName:"p",href:"https://www.weave.works/blog/what-is-gitops-really"},"this article"),"."),(0,r.kt)("p",null,"KubeVela as an declarative application delivery control plane can be naturally used in GitOps approach, and this will provide below extra bonus to end users alongside with GitOps benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"application delivery workflow (CD pipeline)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"i.e. KubeVela supports pipeline style application delivery process in GitOps, instead of simply declaring final status;"))),(0,r.kt)("li",{parentName:"ul"},"handling deployment dependencies and designing typologies (DAG);"),(0,r.kt)("li",{parentName:"ul"},"unified higher level abstraction atop various GitOps tools' primitives;"),(0,r.kt)("li",{parentName:"ul"},"declare, provision and consume cloud resources in unified application definition;"),(0,r.kt)("li",{parentName:"ul"},"various out-of-box deployment strategies (Canary, Blue-Green ...);"),(0,r.kt)("li",{parentName:"ul"},"various out-of-box hybrid/multi-cloud deployment policies (placement rule, cluster selectors etc.);"),(0,r.kt)("li",{parentName:"ul"},"Kustomize-style patch for multi-env deployment without the need to learn Kustomize at all;"),(0,r.kt)("li",{parentName:"ul"},"... and much more.")),(0,r.kt)("p",null,"In this section, we will introduce steps of using KubeVela directly in GitOps approach."),(0,r.kt)("p",null,"This article will separate into two perspectives:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For platform administrators/SREs, they can update the config in Git repo. It will trigger automated re-deployment.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For developers, they can update the app source code and then push it to Git. It will trigger building latest image and re-deployment."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: you can also use it with existing tools such as ArgoCD with similar steps, detailed guides will be added in following releases.")),(0,r.kt)("h2",{id:"for-platform-administratorssres"},"For platform administrators/SREs"),(0,r.kt)("p",null,"Platform administrators/SREs prepares the Git repo for operational config. Every config config change will be traceable by that. KubeVela will watch the repo and apply changes to the clusters."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:n(91076).Z})),(0,r.kt)("h2",{id:"setup-config-repository"},"Setup Config Repository"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The configuration files are from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/samples/tree/master/9.GitOps_Demo/for-SREs"},"Example Repo"),".")),(0,r.kt)("p",null,"In this example, we will deploy an application and a database, the application uses the database to store data."),(0,r.kt)("p",null,"The structure of the config repository looks below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"clusters/")," contains the GitOps config. It will command KubeVela to watch the specified repo and apply latest changes."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"apps/")," contains the Application yaml for deploying the user-facing app."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"infrastructure/")," contains infrastructure tools, i.e. MySQL database.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u251c\u2500\u2500 apps\n\u2502\xa0\xa0 \u2514\u2500\u2500 my-app.yaml\n\u251c\u2500\u2500 clusters\n\u2502\xa0\xa0 \u251c\u2500\u2500 apps.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 infra.yaml\n\u2514\u2500\u2500 infrastructure\n    \u2514\u2500\u2500 mysql.yaml\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"KubeVela recommends using the directory structure above to manage your GitOps repository. ",(0,r.kt)("inlineCode",{parentName:"p"},"clusters/")," holds the associated KubeVela GitOps configuration that need to be applied to cluster manually, ",(0,r.kt)("inlineCode",{parentName:"p"},"apps/")," holds your application and ",(0,r.kt)("inlineCode",{parentName:"p"},"infrastructure/")," holds your base configuration. By separating applications from basic configurations, you can manage your deployment environment more reasonably and isolate application changes.")),(0,r.kt)("h4",{id:"directory-clusters"},"Directory ",(0,r.kt)("inlineCode",{parentName:"h4"},"clusters/")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"clusters/")," is the initialize configuration directory for KubeVela GitOps."),(0,r.kt)("p",null,"Below is how the ",(0,r.kt)("inlineCode",{parentName:"p"},"clusters/infra.yaml")," looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: infra\nspec:\n  components:\n  - name: database-config\n    type: kustomize\n    properties:\n      repoType: git\n      # replace it with your repo url\n      url: https://github.com/FogDong/KubeVela-GitOps-Infra-Demo\n      # replace it with your git secret if it's a private repo\n      # secretRef: git-secret\n      # the pull interval time, set to 10m since the infrastructure is steady\n      pullInterval: 10m\n      git:\n        # the branch name\n        branch: main\n      # the path to sync\n      path: ./infrastructure\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"apps.yaml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"infra.yaml")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"clusters/")," are similar. Their difference is to watch different directories. In ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.yaml"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"properties.path")," will be ",(0,r.kt)("inlineCode",{parentName:"p"},"./apps"),"."),(0,r.kt)("p",null,"Apply the files in ",(0,r.kt)("inlineCode",{parentName:"p"},"clusters/")," manually. They will sync the files in ",(0,r.kt)("inlineCode",{parentName:"p"},"infrastructure/")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"apps/")," dir of the Git repo."),(0,r.kt)("h4",{id:"directory-apps"},"Directory ",(0,r.kt)("inlineCode",{parentName:"h4"},"apps/")),(0,r.kt)("p",null,"The file in ",(0,r.kt)("inlineCode",{parentName:"p"},"apps/")," is a simple application with database information and Ingress. The app serves HTTP service and connects to a MySQL database. In the '/' path, it will display the version in the code; in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/db")," path, it will list the data in database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: my-app\n  namespace: default\nspec:\n  components:\n    - name: my-server\n      type: webservice\n      properties:\n        image: <your image address> # {"$imagepolicy": "default:apps"}\n        port: 8088\n        env:\n          - name: DB_HOST\n            value: mysql-cluster-mysql.default.svc.cluster.local:3306\n          - name: DB_PASSWORD\n            valueFrom:\n              secretKeyRef:\n                name: mysql-secret\n                key: ROOT_PASSWORD\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              /: 8088\n')),(0,r.kt)("h4",{id:"directory-infrastructure"},"Directory ",(0,r.kt)("inlineCode",{parentName:"h4"},"infrastructure/")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"infrastructure/")," contains the config of some infrastructures like database. In the following, we will use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitpoke/mysql-operator"},"MySQL operator")," to deploy a MySQL cluster."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Notice that there must be a secret in your cluster with MySQL password specified in key ",(0,r.kt)("inlineCode",{parentName:"p"},"ROOT_PASSWORD"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: mysql\n  namespace: default\nspec:\n  components:\n    - name: mysql-controller\n      type: helm\n      properties:\n        repoType: helm\n        url: https://presslabs.github.io/charts\n        chart: mysql-operator\n        version: "0.4.0"\n    - name: mysql-cluster\n      type: raw\n      dependsOn:\n        - mysql-controller\n      properties:\n        apiVersion: mysql.presslabs.org/v1alpha1\n        kind: MysqlCluster\n        metadata:\n          name: mysql-cluster\n        spec:\n          replicas: 1\n          # replace it with your secret\n          secretName: mysql-secret\n')),(0,r.kt)("h4",{id:"apply-the-files-in-clusters"},"Apply the files in ",(0,r.kt)("inlineCode",{parentName:"h4"},"clusters/")),(0,r.kt)("p",null,"After storing bellow files in the Git config repo, we need to apply the GitOps config files in ",(0,r.kt)("inlineCode",{parentName:"p"},"clusters/")," manually."),(0,r.kt)("p",null,"First, apply the ",(0,r.kt)("inlineCode",{parentName:"p"},"clusters/infra.yaml")," to cluster, we can see that the MySQL in ",(0,r.kt)("inlineCode",{parentName:"p"},"infrastructure/")," is automatically deployed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f clusters/infra.yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\n\nAPP     COMPONENT           TYPE        TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME\ninfra   database-config     kustomize           running healthy         2021-09-26 20:48:09 +0800 CST\nmysql   mysql-controller    helm                running healthy         2021-09-26 20:48:11 +0800 CST\n\u2514\u2500      mysql-cluster       raw                 running healthy         2021-09-26 20:48:11 +0800 CST\n")),(0,r.kt)("p",null,"Apply the ",(0,r.kt)("inlineCode",{parentName:"p"},"clusters/apps.yaml")," to cluster, we can see that the application in ",(0,r.kt)("inlineCode",{parentName:"p"},"apps/")," is automatically deployed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f clusters/apps.yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"APP     COMPONENT           TYPE        TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME\napps    apps                kustomize           running healthy         2021-09-27 16:55:53 +0800 CST\ninfra   database-config     kustomize           running healthy         2021-09-26 20:48:09 +0800 CST\nmy-app  my-server           webservice  ingress running healthy         2021-09-27 16:55:55 +0800 CST\nmysql   mysql-controller    helm                running healthy         2021-09-26 20:48:11 +0800 CST\n\u2514\u2500      mysql-cluster       raw                 running healthy         2021-09-26 20:48:11 +0800 CST\n")),(0,r.kt)("p",null,"By deploying the KubeVela GitOps config files, we now automatically apply the application and database in cluster."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"curl")," the Ingress of the app, we can see that the current version is ",(0,r.kt)("inlineCode",{parentName:"p"},"0.1.5")," and the application is connected to the database successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get ingress\nNAME        CLASS    HOSTS                 ADDRESS         PORTS   AGE\nmy-server   <none>   testsvc.example.com   <ingress-ip>    80      162m\n\n$ curl -H "Host:testsvc.example.com" http://<ingress-ip>\nVersion: 0.1.5\n\n$ curl -H "Host:testsvc.example.com" http://<ingress-ip>/db\nUser: KubeVela\nDescription: It\'s a test user\n')),(0,r.kt)("h2",{id:"modify-the-config-for-gitops-trigger"},"Modify the config for GitOps trigger"),(0,r.kt)("p",null,"After the first deployment, we can modify the files in config repo to update the applications in the cluster."),(0,r.kt)("p",null,"Modify the domain of the application's Ingress:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n      traits:\n        - type: ingress\n          properties:\n            domain: kubevela.example.com\n            http:\n              /: 8089\n")),(0,r.kt)("p",null,"Check the Ingress in cluster after a while:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"NAME        CLASS    HOSTS                 ADDRESS         PORTS   AGE\nmy-server   <none>   kubevela.example.com  <ingress-ip>    80      162m\n")),(0,r.kt)("p",null,"The host of the Ingress has been updated successfully!"),(0,r.kt)("p",null,"In this way, we can edit the files in the Git repo to update the cluster."),(0,r.kt)("h2",{id:"for-developers"},"For developers"),(0,r.kt)("p",null,"Developers writes the application source code and push it to a Git repo (aka app repo). Once app repo updates, the CI will build the image and push it to the image registry. KubeVela watches the image registry, and updates the image in config repo. Finally, it will apply the config to the cluster."),(0,r.kt)("p",null,"User can update the configuration in the cluster automatically when the code is updated."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:n(85325).Z})),(0,r.kt)("h3",{id:"setup-app-code-repository"},"Setup App Code Repository"),(0,r.kt)("p",null,"Setup a Git repository with source code and Dockerfile."),(0,r.kt)("p",null,"The app serves HTTP service and connects to a MySQL database. In the '/' path, it will display the version in the code; in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/db")," path, it will list the data in database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {\n        _, _ = fmt.Fprintf(w, "Version: %s\\n", VERSION)\n    })\n    http.HandleFunc("/db", func(w http.ResponseWriter, r *http.Request) {\n        rows, err := db.Query("select * from userinfo;")\n        if err != nil {\n            _, _ = fmt.Fprintf(w, "Error: %v\\n", err)\n        }\n        for rows.Next() {\n            var username string\n            var desc string\n            err = rows.Scan(&username, &desc)\n            if err != nil {\n                _, _ = fmt.Fprintf(w, "Scan Error: %v\\n", err)\n            }\n            _, _ = fmt.Fprintf(w, "User: %s \\nDescription: %s\\n\\n", username, desc)\n        }\n    })\n\n    if err := http.ListenAndServe(":8088", nil); err != nil {\n        panic(err.Error())\n    }\n')),(0,r.kt)("p",null,"In this tutorial, we will setup a CI pipeline using GitHub Actions to build the image and push it to a registry. The code and configuration files are from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/samples/tree/master/9.GitOps_Demo/for-developers/app-code"},"Example Repo"),"."),(0,r.kt)("h2",{id:"create-git-secret-for-kubevela-committing-to-config-repo"},"Create Git Secret for KubeVela committing to Config Repo"),(0,r.kt)("p",null,"After the new image is pushed to the image registry, KubeVela will be notified and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," file in the Git repository and cluster. Therefore, we need a secret with Git information for KubeVela to commit to the Git repository. Fill the following yaml files with your password and apply it to the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: my-secret\ntype: kubernetes.io/basic-auth\nstringData:\n  username: <your username>\n  password: <your password>\n")),(0,r.kt)("h2",{id:"setup-config-repository-1"},"Setup Config Repository"),(0,r.kt)("p",null,"The configuration repository is almost the same as the previous configuration, you only need to add the image registry config to the file. For more details, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/samples/tree/master/9.GitOps_Demo/for-developers/kubevela-config"},"Example Repository"),"."),(0,r.kt)("p",null,"Add the config of image registry in ",(0,r.kt)("inlineCode",{parentName:"p"},"clusters/apps.yaml"),", it listens for image updates in the image registry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  imageRepository:\n    image: <your image>\n    # if it's a private image registry, use `kubectl create secret docker-registry` to create the secret\n    # secretRef: imagesecret\n    filterTags:\n      # filter the image tag\n      pattern: '^master-[a-f0-9]+-(?P<ts>[0-9]+)'\n      extract: '$ts'\n    # use the policy to sort the latest image tag and update\n    policy:\n      numerical:\n        order: asc\n    # add more commit message\n    commitMessage: \"Image: {{range .Updated.Images}}{{println .}}{{end}}\"\n")),(0,r.kt)("p",null,"Modify the image field in ",(0,r.kt)("inlineCode",{parentName:"p"},"apps/my-app.yaml")," and add annotation ",(0,r.kt)("inlineCode",{parentName:"p"},'# {"$imagepolicy": "default:apps"}'),".\nNotice that KubeVela will only be able to modify the image field if the annotation is added after the field. ",(0,r.kt)("inlineCode",{parentName:"p"},"default:apps")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace:name")," of the GitOps config file above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  components:\n    - name: my-server\n      type: webservice\n      properties:\n        image: ghcr.io/fogdong/test-fog:master-cba5605f-1632714412 # {"$imagepolicy": "default:apps"}\n')),(0,r.kt)("p",null,"After update the files in ",(0,r.kt)("inlineCode",{parentName:"p"},"clusters/")," to cluster, we can then update the application by modifying the code."),(0,r.kt)("h2",{id:"modify-the-code"},"Modify the code"),(0,r.kt)("p",null,"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"Version")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.1.6")," and modify the data in database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'const VERSION = "0.1.6"\n\n...\n\nfunc InsertInitData(db *sql.DB) {\n    stmt, err := db.Prepare(insertInitData)\n    if err != nil {\n        panic(err)\n    }\n    defer stmt.Close()\n\n    _, err = stmt.Exec("KubeVela2", "It\'s another test user")\n    if err != nil {\n        panic(err)\n    }\n}\n')),(0,r.kt)("p",null,"Commit the change to the Git Repository, we can see that our CI pipelines has built the image and push it to the image registry."),(0,r.kt)("p",null,"KubeVela will listen to the image registry and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"apps/my-app.yaml")," in Git Repository with the latest image tag."),(0,r.kt)("p",null,"We can see that there is a commit form ",(0,r.kt)("inlineCode",{parentName:"p"},"kubevelabot"),", the commit message is always with a prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"Update image automatically.")," You can use format like ",(0,r.kt)("inlineCode",{parentName:"p"},"{{range .Updated.Images}}{{println .}}{{end}}")," to specify the image name in the ",(0,r.kt)("inlineCode",{parentName:"p"},"commitMessage")," field."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:n(31857).Z})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that if you want to put the code and config in the same repository, you need to filter out the commit from KubeVela in CI configuration like below to avoid the repeat build of pipeline."),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"jobs:\n publish:\n   if: \"!contains(github.event.head_commit.message, 'Update image automatically')\"\n"))),(0,r.kt)("p",null,"Re-check the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," in cluster, we can see that the image of the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-app")," has been updated after a while."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"KubeVela polls the latest information from the code and image repo periodically (at an interval that can be customized):"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"When the ",(0,r.kt)("inlineCode",{parentName:"li"},"Application")," file in the Git repository is updated, KubeVela will update the ",(0,r.kt)("inlineCode",{parentName:"li"},"Application")," in the cluster based on the latest configuration."),(0,r.kt)("li",{parentName:"ul"},"When a new tag is added to the image registry, KubeVela will filter out the latest tag based on your policy and update it to Git repository. When the files in the repository are updated, KubeVela repeats the first step and updates the files in the cluster, thus achieving automatic deployment."))),(0,r.kt)("p",null,"We can ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingress")," to see the current version and data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get ingress\nNAME        CLASS    HOSTS                 ADDRESS         PORTS   AGE\nmy-server   <none>   kubevela.example.com  <ingress-ip>    80      162m\n\n$ curl -H "Host:kubevela.example.com" http://<ingress-ip>\nVersion: 0.1.6\n\n$ curl -H "Host:kubevela.example.com" http://<ingress-ip>/db\nUser: KubeVela\nDescription: It\'s a test user\n\nUser: KubeVela2\nDescription: It\'s another test user\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Version")," has been updated successfully! Now we're done with everything from changing the code to automatically applying to the cluster."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"For platform admins/SREs, they update the config repo to operate the application and infrastructure. KubeVela will synchronize the config to the cluster, simplifying the deployment process."),(0,r.kt)("p",null,"For end users/developers, they write the source code, push it to Git, and then re-deployment will happen. It will make CI to build the image. KubeVela will then update the image field and apply the deployment config."),(0,r.kt)("p",null,"By integrating with GitOps, KubeVela helps users speed up deployment and simplify continuous deployment."))}c.isMDXComponent=!0},85325:function(e,t,n){"use strict";t.Z=n.p+"assets/images/dev-flow-e2153e9687ba8904dddea46db8aa7a85.jpg"},31857:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gitops-commit-31c4a9477065754e172f97792bb14f91.png"},91076:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ops-flow-8bec0d06df6baf12234cfe6c18bff438.jpg"}}]);