"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[9644],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(67294),a=r(86010),o="tabItem_Ymn6";function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(87462),a=r(67294),o=r(86010),i=r(72389),l=r(67392),s=r(7094),u=r(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,r,i=e.lazy,p=e.block,h=e.defaultValue,m=e.values,g=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:f[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),T=w.tabGroupChoices,N=w.setTabGroupChoices,P=(0,a.useState)(y),R=P[0],I=P[1],x=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var q=T[g];null!=q&&q!==R&&b.some((function(e){return e.value===q}))&&I(q)}var D=function(e){var t=e.currentTarget,r=x.indexOf(t),n=b[r].value;n!==R&&(O(t),I(n),null!=g&&N(g,String(n)))},C=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=x.indexOf(e.currentTarget)+1;r=null!=(n=x[a])?n:x[0];break;case"ArrowLeft":var o,i=x.indexOf(e.currentTarget)-1;r=null!=(o=x[i])?o:x[x.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},b.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:D,onClick:D},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":R===t})}),null!=r?r:t)}))),i?(0,a.cloneElement)(f.filter((function(e){return e.props.value===R}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function h(e){var t=(0,i.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},52828:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return h}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(65488),l=r(85162),s=["components"],u={title:"1. Prepare your Node(s)",weight:100,aliases:["/rancher/v2.0-v2.4/en/installation/air-gap-high-availability/provision-hosts","/rancher/v2.0-v2.4/en/installation/air-gap-single-node/provision-host","/rancher/v2.0-v2.4/en/installation/options/air-gap-helm2/prepare-nodes","/rancher/v2.x/en/installation/resources/advanced/air-gap-helm2/prepare-nodes/"]},c=void 0,d={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/prepare-nodes",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/prepare-nodes",title:"1. Prepare your Node(s)",description:"This section is about how to prepare your node(s) to install Rancher for your air gapped environment. An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy. There are tabs for either a high availability (recommended) or a Docker installation.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/prepare-nodes.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/prepare-nodes",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/prepare-nodes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/prepare-nodes.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"1. Prepare your Node(s)",weight:100,aliases:["/rancher/v2.0-v2.4/en/installation/air-gap-high-availability/provision-hosts","/rancher/v2.0-v2.4/en/installation/air-gap-single-node/provision-host","/rancher/v2.0-v2.4/en/installation/options/air-gap-helm2/prepare-nodes","/rancher/v2.x/en/installation/resources/advanced/air-gap-helm2/prepare-nodes/"]},sidebar:"tutorialSidebar",previous:{title:"Installing Rancher in an Air Gapped Environment with Helm 2",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/air-gap-helm2"},next:{title:"2. Collect and Publish Images to your Private Registry",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/populate-private-registry"}},p={},h=[{value:"OS, Docker, Hardware, and Networking",id:"os-docker-hardware-and-networking",level:3},{value:"Private Registry",id:"private-registry",level:3},{value:"CLI Tools",id:"cli-tools",level:3},{value:"OS, Docker, Hardware, and Networking",id:"os-docker-hardware-and-networking-1",level:3},{value:"Private Registry",id:"private-registry-1",level:3},{value:"Recommended Architecture",id:"recommended-architecture",level:3},{value:"A. Provision three air gapped Linux hosts according to our requirements",id:"a-provision-three-air-gapped-linux-hosts-according-to-our-requirements",level:3},{value:"B. Set up your Load Balancer",id:"b-set-up-your-load-balancer",level:3},{value:"A. Provision a single, air gapped Linux host according to our Requirements",id:"a-provision-a-single-air-gapped-linux-host-according-to-our-requirements",level:3},{value:"Next: Collect and Publish Images to your Private Registry",id:"next-collect-and-publish-images-to-your-private-registry",level:3}],m={toc:h};function g(e){var t=e.components,u=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section is about how to prepare your node(s) to install Rancher for your air gapped environment. An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy. There are ",(0,o.kt)("em",{parentName:"p"},"tabs")," for either a high availability (recommended) or a Docker installation."),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Kubernetes Install (Recommended)",mdxType:"TabItem"},(0,o.kt)("h3",{id:"os-docker-hardware-and-networking"},"OS, Docker, Hardware, and Networking"),(0,o.kt)("p",null,"Make sure that your node(s) fulfill the general ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"installation requirements.")),(0,o.kt)("h3",{id:"private-registry"},"Private Registry"),(0,o.kt)("p",null,"Rancher supports air gap installs using a private registry. You must have your own private registry or other means of distributing Docker images to your machines."),(0,o.kt)("p",null,"If you need help with creating a private registry, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"Docker documentation"),"."),(0,o.kt)("h3",{id:"cli-tools"},"CLI Tools"),(0,o.kt)("p",null,"The following CLI tools are required for the Kubernetes Install. Make sure these tools are installed on your workstation and available in your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl")," - Kubernetes command-line tool."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/"},"rke")," - Rancher Kubernetes Engine, cli for building Kubernetes clusters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.helm.sh/using_helm/#installing-helm"},"helm")," - Package management for Kubernetes. Refer to the ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"},"Helm version requirements")," to choose a version of Helm to install Rancher."))),(0,o.kt)(l.Z,{value:"Docker Install",mdxType:"TabItem"},(0,o.kt)("h3",{id:"os-docker-hardware-and-networking-1"},"OS, Docker, Hardware, and Networking"),(0,o.kt)("p",null,"Make sure that your node(s) fulfill the general ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"installation requirements.")),(0,o.kt)("h3",{id:"private-registry-1"},"Private Registry"),(0,o.kt)("p",null,"Rancher supports air gap installs using a private registry. You must have your own private registry or other means of distributing Docker images to your machines."),(0,o.kt)("p",null,"If you need help with creating a private registry, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"Docker documentation"),"."))),(0,o.kt)("h1",{id:"set-up-infrastructure"},"Set up Infrastructure"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Kubernetes Install (Recommended)",mdxType:"TabItem"},(0,o.kt)("p",null,"Rancher recommends installing Rancher on a Kubernetes cluster. A highly available Kubernetes install is comprised of three nodes running the Rancher server components on a Kubernetes cluster. The persistence layer (etcd) is also replicated on these three nodes, providing redundancy and data duplication in case one of the nodes fails."),(0,o.kt)("h3",{id:"recommended-architecture"},"Recommended Architecture"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DNS for Rancher should resolve to a layer 4 load balancer"),(0,o.kt)("li",{parentName:"ul"},"The Load Balancer should forward port TCP/80 and TCP/443 to all 3 nodes in the Kubernetes cluster."),(0,o.kt)("li",{parentName:"ul"},"The Ingress controller will redirect HTTP to HTTPS and terminate SSL/TLS on port TCP/443."),(0,o.kt)("li",{parentName:"ul"},"The Ingress controller will forward traffic to port TCP/80 on the pod in the Rancher deployment.")),(0,o.kt)("figcaption",null,"Rancher installed on a Kubernetes cluster with layer 4 load balancer, depicting SSL termination at ingress controllers"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rancher HA",src:r(86089).Z,width:"1236",height:"525"})),(0,o.kt)("h3",{id:"a-provision-three-air-gapped-linux-hosts-according-to-our-requirements"},"A. Provision three air gapped Linux hosts according to our requirements"),(0,o.kt)("p",null,"These hosts will be disconnected from the internet, but require being able to connect with your private registry."),(0,o.kt)("p",null,"View hardware and software requirements for each of your cluster nodes in ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"Requirements"),"."),(0,o.kt)("h3",{id:"b-set-up-your-load-balancer"},"B. Set up your Load Balancer"),(0,o.kt)("p",null,"When setting up the Kubernetes cluster that will run the Rancher server components, an Ingress controller pod will be deployed on each of your nodes. The Ingress controller pods are bound to ports TCP/80 and TCP/443 on the host network and are the entry point for HTTPS traffic to the Rancher server."),(0,o.kt)("p",null,"You will need to configure a load balancer as a basic Layer 4 TCP forwarder to direct traffic to these ingress controller pods. The exact configuration will vary depending on your environment."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important:"),"\nOnly use this load balancer (i.e, the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster Ingress) to load balance the Rancher server. Sharing this Ingress with other applications may result in websocket errors to Rancher following Ingress configuration reloads for other apps.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Load Balancer Configuration Samples:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For an example showing how to set up an NGINX load balancer, refer to ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"},"this page.")),(0,o.kt)("li",{parentName:"ul"},"For an example showing how to set up an Amazon NLB load balancer, refer to ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"},"this page.")))),(0,o.kt)(l.Z,{value:"Docker Install",mdxType:"TabItem"},(0,o.kt)("p",null,"The Docker installation is for Rancher users that are wanting to test out Rancher. Instead of running on a Kubernetes cluster, you install the Rancher server component on a single node using a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command. Since there is only one node and a single Docker container, if the node goes down, there is no copy of the etcd data available on other nodes and you will lose all the data of your Rancher server."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important:")," If you install Rancher following the Docker installation guide, there is no upgrade path to transition your Docker installation to a Kubernetes Installation.")),(0,o.kt)("p",null,"Instead of running the Docker installation, you have the option to follow the Kubernetes Install guide, but only use one node to install Rancher. Afterwards, you can scale up the etcd nodes in your Kubernetes cluster to make it a Kubernetes Installation."),(0,o.kt)("h3",{id:"a-provision-a-single-air-gapped-linux-host-according-to-our-requirements"},"A. Provision a single, air gapped Linux host according to our Requirements"),(0,o.kt)("p",null,"These hosts will be disconnected from the internet, but require being able to connect with your private registry."),(0,o.kt)("p",null,"View hardware and software requirements for each of your cluster nodes in ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"Requirements"),"."))),(0,o.kt)("h3",{id:"next-collect-and-publish-images-to-your-private-registry"},(0,o.kt)("a",{parentName:"h3",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"Next: Collect and Publish Images to your Private Registry")))}g.isMDXComponent=!0},86089:function(e,t,r){t.Z=r.p+"assets/images/rancher2ha-109862fddef6042942f103cfc94d892b.svg"}}]);