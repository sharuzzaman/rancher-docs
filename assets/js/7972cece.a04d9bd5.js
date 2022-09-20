"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[50675],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,g=p["".concat(u,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96415:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Rancher Agents",weight:2400},u=void 0,s={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents",title:"Rancher Agents",description:"There are two different agent resources deployed on Rancher managed clusters:",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Rancher Agents",weight:2400},sidebar:"tutorialSidebar",previous:{title:"Setting up the vSphere Cloud Provider",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/vsphere"},next:{title:"Importing Existing Clusters",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters"}},c={},d=[{value:"cattle-cluster-agent",id:"cattle-cluster-agent",level:3},{value:"cattle-node-agent",id:"cattle-node-agent",level:3},{value:"Scheduling rules",id:"scheduling-rules",level:3}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are two different agent resources deployed on Rancher managed clusters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cattle-cluster-agent"},"cattle-cluster-agent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cattle-node-agent"},"cattle-node-agent"))),(0,o.kt)("p",null,"For a conceptual overview of how the Rancher server provisions clusters and communicates with them, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/rancher-manager-architecture"},"architecture")),(0,o.kt)("h3",{id:"cattle-cluster-agent"},"cattle-cluster-agent"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," is used to connect to the Kubernetes API of ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Launched Kubernetes")," clusters. The ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," is deployed using a Deployment resource."),(0,o.kt)("h3",{id:"cattle-node-agent"},"cattle-node-agent"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-node-agent")," is used to interact with nodes in a ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Launched Kubernetes")," cluster when performing cluster operations. Examples of cluster operations are upgrading Kubernetes version and creating/restoring etcd snapshots. The ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-node-agent")," is deployed using a DaemonSet resource to make sure it runs on every node. The ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-node-agent")," is used as fallback option to connect to the Kubernetes API of ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Launched Kubernetes")," clusters when ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," is unavailable."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," In Rancher v2.2.4 and lower, the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-node-agent")," pods did not tolerate all taints, causing Kubernetes upgrades to fail on these nodes. The fix for this has been included in Rancher v2.2.5 and higher.")),(0,o.kt)("h3",{id:"scheduling-rules"},"Scheduling rules"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Applies to v2.3.0 up to v2.5.3")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"nodeAffinity nodeSelectorTerms"),(0,o.kt)("th",{parentName:"tr",align:null},"nodeSelector"),(0,o.kt)("th",{parentName:"tr",align:null},"Tolerations"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cattle-cluster-agent")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows")),(0,o.kt)("td",{parentName:"tr",align:null},"none"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"operator:Exists"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cattle-node-agent")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows")),(0,o.kt)("td",{parentName:"tr",align:null},"none"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"operator:Exists"))))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," Deployment has preferred scheduling rules using ",(0,o.kt)("inlineCode",{parentName:"p"},"preferredDuringSchedulingIgnoredDuringExecution"),", favoring to be scheduled on nodes with the ",(0,o.kt)("inlineCode",{parentName:"p"},"controlplane")," node. See ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/"},"Kubernetes: Assigning Pods to Nodes")," to find more information about scheduling rules."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"preferredDuringSchedulingIgnoredDuringExecution")," configuration is shown in the table below:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Weight"),(0,o.kt)("th",{parentName:"tr",align:null},"Expression"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"100"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'node-role.kubernetes.io/controlplane:In:"true"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'node-role.kubernetes.io/etcd:In:"true"'))))))}h.isMDXComponent=!0}}]);