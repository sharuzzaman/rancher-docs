"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[17538],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,k=p["".concat(o,".").concat(h)]||p[h]||d[h]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23770:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],s={title:"Setting up a High-availability RKE Kubernetes Cluster",shortTitle:"Set up RKE Kubernetes",weight:3,aliases:["/rancher/v2.0-v2.4/en/installation/k8s-install/kubernetes-rke"]},o=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher",title:"Setting up a High-availability RKE Kubernetes Cluster",description:"This section describes how to install a Kubernetes cluster. This cluster should be dedicated to run only the Rancher server.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-cluster-setup",slug:"/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Setting up a High-availability RKE Kubernetes Cluster",shortTitle:"Set up RKE Kubernetes",weight:3,aliases:["/rancher/v2.0-v2.4/en/installation/k8s-install/kubernetes-rke"]},sidebar:"tutorialSidebar",previous:{title:"Setting up a High-availability K3s Kubernetes Cluster for Rancher",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher"},next:{title:"Don't have infrastructure for your Kubernetes cluster? Try one of these tutorials.",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/infrastructure-setup"}},c={},d=[{value:"Required CLI Tools",id:"required-cli-tools",level:3},{value:"1. Create the cluster configuration file",id:"1-create-the-cluster-configuration-file",level:3},{value:"2. Run RKE",id:"2-run-rke",level:3},{value:"3. Test Your Cluster",id:"3-test-your-cluster",level:3},{value:"4. Check the Health of Your Cluster Pods",id:"4-check-the-health-of-your-cluster-pods",level:3},{value:"5. Save Your Files",id:"5-save-your-files",level:3},{value:"Issues or errors?",id:"issues-or-errors",level:3},{value:"Next: Install Rancher",id:"next-install-rancher",level:3}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This section describes how to install a Kubernetes cluster. This cluster should be dedicated to run only the Rancher server."),(0,l.kt)("p",null,"For Rancher before v2.4, Rancher should be installed on an RKE Kubernetes cluster. RKE is a CNCF-certified Kubernetes distribution that runs entirely within Docker containers."),(0,l.kt)("p",null,"As of Rancher v2.4, the Rancher management server can be installed on either an RKE cluster or a K3s Kubernetes cluster. K3s is also a fully certified Kubernetes distribution released by Rancher, but is newer than RKE. We recommend installing Rancher on K3s because K3s is easier to use, and more lightweight, with a binary size of less than 100 MB. Note: After Rancher is installed on an RKE cluster, there is no migration path to a K3s setup at this time."),(0,l.kt)("p",null,"The Rancher management server can only be run on Kubernetes cluster in an infrastructure provider where Kubernetes is installed using RKE or K3s. Use of Rancher on hosted Kubernetes providers, such as EKS, is not supported."),(0,l.kt)("p",null,"For systems without direct internet access, refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/air-gap-helm2"},"Air Gap: Kubernetes install.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Single-node Installation Tip:"),"\nIn a single-node Kubernetes cluster, the Rancher server does not have high availability, which is important for running Rancher in production. However, installing Rancher on a single-node cluster can be useful if you want to save resources by using a single node in the short term, while preserving a high-availability migration path."),(0,l.kt)("p",{parentName:"blockquote"},"To set up a single-node RKE cluster, configure only one node in the ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster.yml")," . The single node should have all three roles: ",(0,l.kt)("inlineCode",{parentName:"p"},"etcd"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"controlplane"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"worker"),"."),(0,l.kt)("p",{parentName:"blockquote"},"In both single-node setups, Rancher can be installed with Helm on the Kubernetes cluster in the same way that it would be installed on any other cluster.")),(0,l.kt)("h1",{id:"installing-kubernetes"},"Installing Kubernetes"),(0,l.kt)("h3",{id:"required-cli-tools"},"Required CLI Tools"),(0,l.kt)("p",null,"Install ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl,")," a Kubernetes command-line tool."),(0,l.kt)("p",null,"Also install ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/installation/"},"RKE,")," the Rancher Kubernetes Engine, a Kubernetes distribution and command-line tool."),(0,l.kt)("h3",{id:"1-create-the-cluster-configuration-file"},"1. Create the cluster configuration file"),(0,l.kt)("p",null,"In this section, you will create a Kubernetes cluster configuration file called ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),". In a later step, when you set up the cluster with an RKE command, it will use this file to install Kubernetes on your nodes."),(0,l.kt)("p",null,"Using the sample below as a guide, create the ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," file. Replace the IP addresses in the ",(0,l.kt)("inlineCode",{parentName:"p"},"nodes")," list with the IP address or DNS names of the 3 nodes you created."),(0,l.kt)("p",null,"If your node has public and internal addresses, it is recommended to set the ",(0,l.kt)("inlineCode",{parentName:"p"},"internal_address:")," so Kubernetes will use it for intra-cluster communication. Some services like AWS EC2 require setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"internal_address:")," if you want to use self-referencing security groups or firewalls."),(0,l.kt)("p",null,"RKE will need to connect to each node over SSH, and it will look for a private key in the default location of ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa"),". If your private key for a certain node is in a different location than the default, you will also need to configure the ",(0,l.kt)("inlineCode",{parentName:"p"},"ssh_key_path")," option for that node."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'nodes:\n  - address: 165.227.114.63\n    internal_address: 172.16.22.12\n    user: ubuntu\n    role: [controlplane, worker, etcd]\n  - address: 165.227.116.167\n    internal_address: 172.16.32.37\n    user: ubuntu\n    role: [controlplane, worker, etcd]\n  - address: 165.227.127.226\n    internal_address: 172.16.42.73\n    user: ubuntu\n    role: [controlplane, worker, etcd]\n\nservices:\n  etcd:\n    snapshot: true\n    creation: 6h\n    retention: 24h\n\n# Required for external TLS termination with\n# ingress-nginx v0.22+\ningress:\n  provider: nginx\n  options:\n    use-forwarded-headers: "true"\n')),(0,l.kt)("figcaption",null,"Common RKE Nodes Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The public DNS or IP address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"user")),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"A user that can run docker commands")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"role")),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"List of Kubernetes roles assigned to the node")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"internal_address")),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"The private DNS or IP address for internal cluster traffic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ssh_key_path")),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to SSH private key used to authenticate to the node (defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"~/.ssh/id_rsa"),")")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Advanced Configurations:")," RKE has many configuration options for customizing the install to suit your specific environment."),(0,l.kt)("p",{parentName:"blockquote"},"Please see the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"RKE Documentation")," for the full list of options and capabilities."),(0,l.kt)("p",{parentName:"blockquote"},"For tuning your etcd cluster for larger Rancher installations, see the ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs"},"etcd settings guide"),".")),(0,l.kt)("h3",{id:"2-run-rke"},"2. Run RKE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rke up --config ./rancher-cluster.yml\n")),(0,l.kt)("p",null,"When finished, it should end with the line: ",(0,l.kt)("inlineCode",{parentName:"p"},"Finished building Kubernetes cluster successfully"),"."),(0,l.kt)("h3",{id:"3-test-your-cluster"},"3. Test Your Cluster"),(0,l.kt)("p",null,"This section describes how to set up your workspace so that you can interact with this cluster using the ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," command-line tool."),(0,l.kt)("p",null,"Assuming you have installed ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),", you need to place the ",(0,l.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file in a location where ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," can reach it. The ",(0,l.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file contains the credentials necessary to access your cluster with ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,l.kt)("p",null,"When you ran ",(0,l.kt)("inlineCode",{parentName:"p"},"rke up"),", RKE should have created a ",(0,l.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file named ",(0,l.kt)("inlineCode",{parentName:"p"},"kube_config_rancher-cluster.yml"),". This file has the credentials for ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"helm"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," If you have used a different file name from ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),", then the kube config file will be named ",(0,l.kt)("inlineCode",{parentName:"p"},"kube_config_<FILE_NAME>.yml"),".")),(0,l.kt)("p",null,"Move this file to ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),", or if you are working with multiple Kubernetes clusters, set the ",(0,l.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," environmental variable to the path of ",(0,l.kt)("inlineCode",{parentName:"p"},"kube_config_rancher-cluster.yml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"export KUBECONFIG=$(pwd)/kube_config_rancher-cluster.yml\n")),(0,l.kt)("p",null,"Test your connectivity with ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," and see if all your nodes are in ",(0,l.kt)("inlineCode",{parentName:"p"},"Ready")," state:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl get nodes\n\nNAME                          STATUS    ROLES                      AGE       VERSION\n165.227.114.63                Ready     controlplane,etcd,worker   11m       v1.13.5\n165.227.116.167               Ready     controlplane,etcd,worker   11m       v1.13.5\n165.227.127.226               Ready     controlplane,etcd,worker   11m       v1.13.5\n")),(0,l.kt)("h3",{id:"4-check-the-health-of-your-cluster-pods"},"4. Check the Health of Your Cluster Pods"),(0,l.kt)("p",null,"Check that all the required pods and containers are healthy are ready to continue."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pods are in ",(0,l.kt)("inlineCode",{parentName:"li"},"Running")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"Completed")," state."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"READY")," column shows all the containers are running (i.e. ",(0,l.kt)("inlineCode",{parentName:"li"},"3/3"),") for pods with ",(0,l.kt)("inlineCode",{parentName:"li"},"STATUS")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Running")),(0,l.kt)("li",{parentName:"ul"},"Pods with ",(0,l.kt)("inlineCode",{parentName:"li"},"STATUS")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Completed")," are run-once Jobs. For these pods ",(0,l.kt)("inlineCode",{parentName:"li"},"READY")," should be ",(0,l.kt)("inlineCode",{parentName:"li"},"0/1"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl get pods --all-namespaces\n\nNAMESPACE       NAME                                      READY     STATUS      RESTARTS   AGE\ningress-nginx   nginx-ingress-controller-tnsn4            1/1       Running     0          30s\ningress-nginx   nginx-ingress-controller-tw2ht            1/1       Running     0          30s\ningress-nginx   nginx-ingress-controller-v874b            1/1       Running     0          30s\nkube-system     canal-jp4hz                               3/3       Running     0          30s\nkube-system     canal-z2hg8                               3/3       Running     0          30s\nkube-system     canal-z6kpw                               3/3       Running     0          30s\nkube-system     kube-dns-7588d5b5f5-sf4vh                 3/3       Running     0          30s\nkube-system     kube-dns-autoscaler-5db9bbb766-jz2k6      1/1       Running     0          30s\nkube-system     metrics-server-97bc649d5-4rl2q            1/1       Running     0          30s\nkube-system     rke-ingress-controller-deploy-job-bhzgm   0/1       Completed   0          30s\nkube-system     rke-kubedns-addon-deploy-job-gl7t4        0/1       Completed   0          30s\nkube-system     rke-metrics-addon-deploy-job-7ljkc        0/1       Completed   0          30s\nkube-system     rke-network-plugin-deploy-job-6pbgj       0/1       Completed   0          30s\n")),(0,l.kt)("p",null,"This confirms that you have successfully installed a Kubernetes cluster that the Rancher server will run on."),(0,l.kt)("h3",{id:"5-save-your-files"},"5. Save Your Files"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important"),"\nThe files mentioned below are needed to maintain, troubleshoot and upgrade your cluster.")),(0,l.kt)("p",null,"Save a copy of the following files in a secure location:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rancher-cluster.yml"),": The RKE cluster configuration file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kube_config_rancher-cluster.yml"),": The ",(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/kubeconfig/"},"Kubeconfig file")," for the cluster, this file contains credentials for full access to the cluster."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rancher-cluster.rkestate"),": The ",(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#kubernetes-cluster-state"},"Kubernetes Cluster State file"),", this file contains credentials for full access to the cluster.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"li"},"The Kubernetes Cluster State file is only created when using RKE v0.2.0 or higher."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:"),' The "rancher-cluster" parts of the two latter file names are dependent on how you name the RKE cluster configuration file.')),(0,l.kt)("h3",{id:"issues-or-errors"},"Issues or errors?"),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"Troubleshooting")," page."),(0,l.kt)("h3",{id:"next-install-rancher"},(0,l.kt)("a",{parentName:"h3",href:"/zh/v2.0-v2.4/reference-guides/installation-references/helm-chart-options"},"Next: Install Rancher")))}h.isMDXComponent=!0}}]);