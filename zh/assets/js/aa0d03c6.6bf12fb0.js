"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[34596],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(i,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52246:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],l={title:"1. Create Nodes and Load Balancer",weight:185,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/create-nodes-lb","/rancher/v2.x/en/installation/resources/advanced/helm2/create-nodes-lb/"]},i=void 0,c={unversionedId:"pages-for-subheaders/helm2-create-nodes-lb",id:"version-2.0-2.4/pages-for-subheaders/helm2-create-nodes-lb",title:"1. Create Nodes and Load Balancer",description:"Use your provider of choice to provision 3 nodes and a Load Balancer endpoint for your RKE install.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2-create-nodes-lb.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/helm2-create-nodes-lb",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/helm2-create-nodes-lb",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2-create-nodes-lb.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"1. Create Nodes and Load Balancer",weight:185,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/create-nodes-lb","/rancher/v2.x/en/installation/resources/advanced/helm2/create-nodes-lb/"]},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Installation Using Helm 2",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/helm2"},next:{title:"NGINX",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nginx"}},d={},u=[{value:"Node Requirements",id:"node-requirements",level:3},{value:"Load Balancer",id:"load-balancer",level:3},{value:"Examples",id:"examples",level:4},{value:"Next: Install Kubernetes with RKE",id:"next-install-kubernetes-with-rke",level:3}],p={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use your provider of choice to provision 3 nodes and a Load Balancer endpoint for your RKE install."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," These nodes must be in the same region/datacenter.  You may place these servers in separate availability zones.")),(0,o.kt)("h3",{id:"node-requirements"},"Node Requirements"),(0,o.kt)("p",null,"View the supported operating systems and hardware/software/networking requirements for nodes running Rancher at ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"Node Requirements"),"."),(0,o.kt)("p",null,"View the OS requirements for RKE at ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/os/"},"RKE Requirements")),(0,o.kt)("h3",{id:"load-balancer"},"Load Balancer"),(0,o.kt)("p",null,"RKE will configure an Ingress controller pod, on each of your nodes. The Ingress controller pods are bound to ports TCP/80 and TCP/443 on the host network and are the entry point for HTTPS traffic to the Rancher server."),(0,o.kt)("p",null,"Configure a load balancer as a basic Layer 4 TCP forwarder. The exact configuration will vary depending on your environment."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important:"),"\nDo not use this load balancer (i.e, the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster Ingress) to load balance applications other than Rancher following installation. Sharing this Ingress with other applications may result in websocket errors to Rancher following Ingress configuration reloads for other apps. We recommend dedicating the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster to Rancher and no other applications.")),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nginx"},"Nginx")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nlb"},"Amazon NLB"))),(0,o.kt)("h3",{id:"next-install-kubernetes-with-rke"},(0,o.kt)("a",{parentName:"h3",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm2-kubernetes-rke"},"Next: Install Kubernetes with RKE")))}h.isMDXComponent=!0}}]);