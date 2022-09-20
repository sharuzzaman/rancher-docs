"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[12495],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=p(t),d=o,m=g["".concat(u,".").concat(d)]||g[d]||c[d]||s;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=g;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},94911:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=t(87462),o=t(63366),s=(t(67294),t(3905)),a=["components"],i={title:"Provisioning Storage Examples",weight:3053,aliases:["/rancher/v2.5/en/tasks/clusters/adding-storage/provisioning-storage/","/rancher/v2.5/en/k8s-in-rancher/volumes-and-storage/examples/","/rancher/v2.x/en/cluster-admin/volumes-and-storage/examples/"]},u=void 0,p={unversionedId:"pages-for-subheaders/provisioning-storage-examples",id:"version-2.5/pages-for-subheaders/provisioning-storage-examples",title:"Provisioning Storage Examples",description:"Rancher supports persistent storage with a variety of volume plugins. However, before you use any of these plugins to bind persistent storage to your workloads, you have to configure the storage itself, whether its a cloud-based solution from a service-provider or an on-prem solution that you manage yourself.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/provisioning-storage-examples.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/provisioning-storage-examples",permalink:"/zh/v2.5/pages-for-subheaders/provisioning-storage-examples",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/provisioning-storage-examples.md",tags:[],version:"2.5",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Provisioning Storage Examples",weight:3053,aliases:["/rancher/v2.5/en/tasks/clusters/adding-storage/provisioning-storage/","/rancher/v2.5/en/k8s-in-rancher/volumes-and-storage/examples/","/rancher/v2.x/en/cluster-admin/volumes-and-storage/examples/"]},sidebar:"tutorialSidebar",previous:{title:"iSCSI Volumes",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes"},next:{title:"Creating Persistent Storage in Amazon's EBS",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/persistent-storage-in-amazon-ebs"}},l={},c=[],g={toc:c};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Rancher supports persistent storage with a variety of volume plugins. However, before you use any of these plugins to bind persistent storage to your workloads, you have to configure the storage itself, whether its a cloud-based solution from a service-provider or an on-prem solution that you manage yourself."),(0,s.kt)("p",null,"For your convenience, Rancher offers documentation on how to configure some of the popular storage methods:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/nfs-storage"},"NFS")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage"},"vSphere")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/persistent-storage-in-amazon-ebs"},"EBS"))))}d.isMDXComponent=!0}}]);