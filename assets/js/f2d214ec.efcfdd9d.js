"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[50558],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18653:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],l={title:"Launching Kubernetes on New Nodes in an Infrastructure Provider",weight:2205},s=void 0,d={unversionedId:"pages-for-subheaders/use-new-nodes-in-an-infra-provider",id:"pages-for-subheaders/use-new-nodes-in-an-infra-provider",title:"Launching Kubernetes on New Nodes in an Infrastructure Provider",description:"When you create an RKE or RKE2 cluster using a node template in Rancher, each resulting node pool is shown in a new Machine Pools tab. You can see the machine pools by doing the following:",source:"@site/docs/pages-for-subheaders/use-new-nodes-in-an-infra-provider.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider",permalink:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/use-new-nodes-in-an-infra-provider.md",tags:[],version:"current",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Launching Kubernetes on New Nodes in an Infrastructure Provider",weight:2205},sidebar:"tutorialSidebar",previous:{title:"Launching Kubernetes with Rancher",permalink:"/pages-for-subheaders/launch-kubernetes-with-rancher"},next:{title:"Creating an Amazon EC2 Cluster",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster"}},c={},p=[{value:"RKE Clusters",id:"rke-clusters",level:2},{value:"Node Templates",id:"node-templates",level:3},{value:"Node Labels",id:"node-labels",level:4},{value:"Node Taints",id:"node-taints",level:4},{value:"Administrator Control of Node Templates",id:"administrator-control-of-node-templates",level:4},{value:"Node Pools",id:"node-pools",level:3},{value:"Node Pool Taints",id:"node-pool-taints",level:4},{value:"About Node Auto-replace",id:"about-node-auto-replace",level:4},{value:"Enabling Node Auto-replace",id:"enabling-node-auto-replace",level:4},{value:"Disabling Node Auto-replace",id:"disabling-node-auto-replace",level:4},{value:"Cloud Credentials",id:"cloud-credentials",level:3},{value:"Node Drivers",id:"node-drivers",level:3},{value:"RKE2 Clusters",id:"rke2-clusters",level:2},{value:"Node Roles",id:"node-roles",level:3}],u={toc:p};function h(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you create an RKE or RKE2 cluster using a node template in Rancher, each resulting node pool is shown in a new ",(0,r.kt)("strong",{parentName:"p"},"Machine Pools")," tab. You can see the machine pools by doing the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click  ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Click the name of the RKE or RKE2 cluster.")),(0,r.kt)("h2",{id:"rke-clusters"},"RKE Clusters"),(0,r.kt)("p",null,"Using Rancher, you can create pools of nodes based on a ",(0,r.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node template"),". This node template defines the parameters you want to use to launch nodes in your infrastructure providers or cloud providers."),(0,r.kt)("p",null,"One benefit of installing Kubernetes on node pools hosted by an infrastructure provider is that if a node loses connectivity with the cluster, Rancher can automatically create another node to join the cluster to ensure that the count of the node pool is as expected."),(0,r.kt)("p",null,"The available cloud providers to create a node template are decided based on active ",(0,r.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-drivers"},"node drivers"),"."),(0,r.kt)("h3",{id:"node-templates"},"Node Templates"),(0,r.kt)("p",null,"A node template is the saved configuration for the parameters to use when provisioning nodes in a specific cloud provider. These nodes can be launched from the UI. Rancher uses ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/"},"Docker Machine")," to provision these nodes. The available cloud providers to create node templates are based on the active node drivers in Rancher."),(0,r.kt)("p",null,"After you create a node template in Rancher, it's saved so that you can use this template again to create node pools. Node templates are bound to your login. After you add a template, you can remove them from your user profile."),(0,r.kt)("h4",{id:"node-labels"},"Node Labels"),(0,r.kt)("p",null,"You can add ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels")," on each node template, so that any nodes created from the node template will automatically have these labels on them."),(0,r.kt)("p",null,"Invalid labels can prevent upgrades or can prevent Rancher from starting. For details on label syntax requirements, see the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set"},"Kubernetes documentation.")),(0,r.kt)("h4",{id:"node-taints"},"Node Taints"),(0,r.kt)("p",null,"You can add ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"taints")," on each node template, so that any nodes created from the node template will automatically have these taints on them."),(0,r.kt)("p",null,"Since taints can be added at a node template and node pool, if there is no conflict with the same key and effect of the taints, all taints will be added to the nodes. If there are taints with the same key and different effect, the taints from the node pool will override the taints from the node template."),(0,r.kt)("h4",{id:"administrator-control-of-node-templates"},"Administrator Control of Node Templates"),(0,r.kt)("p",null,"Administrators can control all node templates. Admins can now maintain all the node templates within Rancher. When a node template owner is no longer using Rancher, the node templates created by them can be managed by administrators so the cluster can continue to be updated and maintained."),(0,r.kt)("p",null,"To access all node templates, an administrator will need to do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"RKE1 Configuration > Node Templates"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," All node templates are listed. The templates can be edited or cloned by clicking the ",(0,r.kt)("strong",{parentName:"p"},"\u22ee"),"."),(0,r.kt)("h3",{id:"node-pools"},"Node Pools"),(0,r.kt)("p",null,"Using Rancher, you can create pools of nodes based on a ",(0,r.kt)("a",{parentName:"p",href:"#node-templates"},"node template"),". "),(0,r.kt)("p",null,"A node template defines the configuration of a node, like what operating system to use, number of CPUs, and amount of memory."),(0,r.kt)("p",null,"The benefit of using a node pool is that if a node is destroyed or deleted, you can increase the number of live nodes to compensate for the node that was lost. The node pool helps you ensure that the count of the node pool is as expected."),(0,r.kt)("p",null,"Each node pool must have one or more nodes roles assigned. "),(0,r.kt)("p",null,"Each node role (i.e. etcd, controlplane, and worker) should be assigned to a distinct node pool. Although it is possible to assign multiple node roles to a node pool, this should not be done for production clusters."),(0,r.kt)("p",null,"The recommended setup is to have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a node pool with the etcd node role and a count of three"),(0,r.kt)("li",{parentName:"ul"},"a node pool with the controlplane node role and a count of at least two"),(0,r.kt)("li",{parentName:"ul"},"a node pool with the worker node role and a count of at least two")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RKE1 downstream cluster nodes in an air-gapped environment:")),(0,r.kt)("p",null,"By default, Rancher tries to run the Docker Install script when provisioning RKE1 downstream cluster nodes, such as in vSphere. However, the Rancher Docker installation script would fail in air-gapped environments. To work around this issue, you may choose to skip installing Docker when creating a Node Template where Docker is pre-installed onto a VM image. You can accomplish this by selecting ",(0,r.kt)("strong",{parentName:"p"},"None")," in the dropdown list for ",(0,r.kt)("inlineCode",{parentName:"p"},"Docker Install URL")," under ",(0,r.kt)("strong",{parentName:"p"},"Engine Options")," in the Rancher UI."),(0,r.kt)("figcaption",null,"**Engine Options Dropdown:**"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Engine Options Dropdown",src:n(71481).Z,width:"1749",height:"377"})),(0,r.kt)("h4",{id:"node-pool-taints"},"Node Pool Taints"),(0,r.kt)("p",null,"If you haven't defined ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"taints")," on your node template, you can add taints for each node pool. The benefit of adding taints at a node pool is beneficial over adding it at a node template is that you can swap out the node templates without worrying if the taint is on the node template."),(0,r.kt)("p",null,"For each taint, they will automatically be added to any created node in the node pool. Therefore, if you add taints to a node pool that have existing nodes, the taints won't apply to existing nodes in the node pool, but any new node added into the node pool will get the taint."),(0,r.kt)("p",null,"When there are taints on the node pool and node template, if there is no conflict with the same key and effect of the taints, all taints will be added to the nodes. If there are taints with the same key and different effect, the taints from the node pool will override the taints from the node template."),(0,r.kt)("h4",{id:"about-node-auto-replace"},"About Node Auto-replace"),(0,r.kt)("p",null,"If a node is in a node pool, Rancher can automatically replace unreachable nodes. Rancher will use the existing node template for the given node pool to recreate the node if it becomes inactive for a specified number of minutes."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Self-healing node pools are designed to help you replace worker nodes for ",(0,r.kt)("b",null,"stateless")," applications. It is not recommended to enable node auto-replace on a node pool of master nodes or nodes with persistent volumes attached, because VMs are treated ephemerally. When a node in a node pool loses connectivity with the cluster, its persistent volumes are destroyed, resulting in data loss for stateful applications."))),(0,r.kt)("p",null,"Node auto-replace works on top of the Kubernetes node controller. The node controller periodically checks the status of all the nodes (configurable via the ",(0,r.kt)("inlineCode",{parentName:"p"},"--node-monitor-period")," flag of the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-controller"),"). When a node is unreachable, the node controller will taint that node. When this occurs, Rancher will begin its deletion countdown. You can configure the amount of time Rancher waits to delete the node. If the taint is not removed before the deletion countdown ends, Rancher will proceed to delete the node object. Rancher will then provision a node in accordance with the set quantity of the node pool."),(0,r.kt)("h4",{id:"enabling-node-auto-replace"},"Enabling Node Auto-replace"),(0,r.kt)("p",null,"When you create the node pool, you can specify the amount of time in minutes that Rancher will wait to replace an unresponsive node."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the form for creating or editing a cluster, go to the ",(0,r.kt)("strong",{parentName:"li"},"Node Pools")," section."),(0,r.kt)("li",{parentName:"ol"},"Go to the node pool where you want to enable node auto-replace. In the ",(0,r.kt)("strong",{parentName:"li"},"Recreate Unreachable After")," field, enter the number of minutes that Rancher should wait for a node to respond before replacing the node."),(0,r.kt)("li",{parentName:"ol"},"Fill out the rest of the form for creating or editing the cluster.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," Node auto-replace is enabled for the node pool."),(0,r.kt)("h4",{id:"disabling-node-auto-replace"},"Disabling Node Auto-replace"),(0,r.kt)("p",null,"You can disable node auto-replace from the Rancher UI with the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to disable node auto-replace and click ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Node Pools")," section, go to the node pool where you want to enable node auto-replace. In the ",(0,r.kt)("strong",{parentName:"li"},"Recreate Unreachable After")," field, enter 0."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," Node auto-replace is disabled for the node pool."),(0,r.kt)("h3",{id:"cloud-credentials"},"Cloud Credentials"),(0,r.kt)("p",null,"Node templates can use cloud credentials to store credentials for launching nodes in your cloud provider, which has some benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Credentials are stored as a Kubernetes secret, which is not only more secure, but it also allows you to edit a node template without having to enter your credentials every time.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After the cloud credential is created, it can be re-used to create additional node templates.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Multiple node templates can share the same cloud credential to create node pools. If your key is compromised or expired, the cloud credential can be updated in a single place, which allows all node templates that are using it to be updated at once."))),(0,r.kt)("p",null,"After cloud credentials are created, the user can start ",(0,r.kt)("a",{parentName:"p",href:"/reference-guides/user-settings/manage-cloud-credentials"},"managing the cloud credentials that they created"),"."),(0,r.kt)("h3",{id:"node-drivers"},"Node Drivers"),(0,r.kt)("p",null,"If you don't find the node driver that you want to use, you can see if it is available in Rancher's built-in ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers#activating-deactivating-node-drivers"},"node drivers and activate it"),", or you can ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers#adding-custom-node-drivers"},"add your own custom node driver"),"."),(0,r.kt)("h2",{id:"rke2-clusters"},"RKE2 Clusters"),(0,r.kt)("p",null,"Rancher v2.6 introduces provisioning for ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rke2.io/"},"RKE2")," clusters directly from the Rancher UI. RKE2, also known as RKE Government, is a fully conformant Kubernetes distribution that focuses on security and compliance within the U.S. Federal Government sector."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For RKE2 cluster templates, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates#rke2-cluster-template"},"this page")," for additional information. "))),(0,r.kt)("h3",{id:"node-roles"},"Node Roles"),(0,r.kt)("p",null,"The RKE2 CLI exposes two roles, ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"agent"),", which represent the Kubernetes node-roles ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"controlplane")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"worker")," respectively. With RKE2 integration in Rancher v2.6, RKE2 node pools can represent more fine-grained role assignments such that ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"controlplane")," roles can be represented."),(0,r.kt)("p",null,"The same functionality of using ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"controlplane")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"worker")," nodes is possible in the RKE2 CLI by using flags and node tainting to control where workloads and the Kubernetes master were scheduled. The reason those roles were not implemented as first-class roles in the RKE2 CLI is that RKE2 is conceptualized as a set of raw building blocks that are best leveraged through an orchestration system such as Rancher."),(0,r.kt)("p",null,"The implementation of the three node roles in Rancher means that Rancher managed RKE2 clusters are able to easily leverage all of the same architectural best practices that are recommended for RKE clusters."),(0,r.kt)("p",null,"In our ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture"},"recommended cluster architecture"),", we outline how many nodes of each role clusters should have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"At least three nodes with the role etcd to survive losing one node"),(0,r.kt)("li",{parentName:"ul"},"At least two nodes with the role controlplane for master component high availability"),(0,r.kt)("li",{parentName:"ul"},"At least two nodes with the role worker for workload rescheduling upon node failure")))}h.isMDXComponent=!0},71481:function(e,t,n){t.Z=n.p+"assets/images/node-template-engine-options-rke1-137fd6915c30677c3da342091f91de9f.png"}}]);