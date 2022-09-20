"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[80471],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return v}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),v=a,g=p["".concat(l,".").concat(v)]||p[v]||d[v]||i;return t?n.createElement(g,o(o({ref:r},c),{},{components:t})):n.createElement(g,o({ref:r},c))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},57460:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={title:"Cluster Drivers",weight:1,aliases:["/rancher/v2.x/en/admin-settings/drivers/cluster-drivers/"]},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers",id:"version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers",title:"Cluster Drivers",description:"Cluster drivers are used to create clusters in a hosted Kubernetes provider, such as Google GKE. The availability of which cluster driver to display when creating clusters is defined by the cluster driver's status. Only active cluster drivers will be displayed as an option for creating clusters. By default, Rancher is packaged with several existing cloud provider cluster drivers, but you can also add custom cluster drivers to Rancher.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers.md",tags:[],version:"2.5",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Cluster Drivers",weight:1,aliases:["/rancher/v2.x/en/admin-settings/drivers/cluster-drivers/"]},sidebar:"tutorialSidebar",previous:{title:"Provisioning Drivers",permalink:"/v2.5/pages-for-subheaders/about-provisioning-drivers"},next:{title:"Node Drivers",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers"}},c={},d=[{value:"Managing Cluster Drivers",id:"managing-cluster-drivers",level:3},{value:"Activating/Deactivating Cluster Drivers",id:"activatingdeactivating-cluster-drivers",level:2},{value:"Adding Custom Cluster Drivers",id:"adding-custom-cluster-drivers",level:2},{value:"Developing your own Cluster Driver",id:"developing-your-own-cluster-driver",level:3}],p={toc:d};function v(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cluster drivers are used to create clusters in a ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"hosted Kubernetes provider"),", such as Google GKE. The availability of which cluster driver to display when creating clusters is defined by the cluster driver's status. Only ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," cluster drivers will be displayed as an option for creating clusters. By default, Rancher is packaged with several existing cloud provider cluster drivers, but you can also add custom cluster drivers to Rancher."),(0,i.kt)("p",null,"If there are specific cluster drivers that you do not want to show your users, you may deactivate those cluster drivers within Rancher and they will not appear as an option for cluster creation."),(0,i.kt)("h3",{id:"managing-cluster-drivers"},"Managing Cluster Drivers"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisites:")," To create, edit, or delete cluster drivers, you need ",(0,i.kt)("em",{parentName:"p"},"one")," of the following permissions:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Administrator Global Permissions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#custom-global-permissions"},"Custom Global Permissions")," with the ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Manage Cluster Drivers")," role assigned."))),(0,i.kt)("h2",{id:"activatingdeactivating-cluster-drivers"},"Activating/Deactivating Cluster Drivers"),(0,i.kt)("p",null,"By default, Rancher only activates drivers for the most popular cloud providers, Google GKE, Amazon EKS and Azure AKS. If you want to show or hide any node driver, you can change its status."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Global")," view, choose ",(0,i.kt)("strong",{parentName:"p"},"Tools > Drivers")," in the navigation bar.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Drivers")," page, select the ",(0,i.kt)("strong",{parentName:"p"},"Cluster Drivers")," tab.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the driver that you wish to ",(0,i.kt)("strong",{parentName:"p"},"Activate")," or ",(0,i.kt)("strong",{parentName:"p"},"Deactivate")," and select the appropriate icon."))),(0,i.kt)("h2",{id:"adding-custom-cluster-drivers"},"Adding Custom Cluster Drivers"),(0,i.kt)("p",null,"If you want to use a cluster driver that Rancher doesn't support out-of-the-box, you can add the provider's driver in order to start using them to create ",(0,i.kt)("em",{parentName:"p"},"hosted")," kubernetes clusters."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Global")," view, choose ",(0,i.kt)("strong",{parentName:"p"},"Tools > Drivers")," in the navigation bar.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Drivers")," page select the ",(0,i.kt)("strong",{parentName:"p"},"Cluster Drivers")," tab.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Add Cluster Driver"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Complete the ",(0,i.kt)("strong",{parentName:"p"},"Add Cluster Driver")," form. Then click ",(0,i.kt)("strong",{parentName:"p"},"Create"),"."))),(0,i.kt)("h3",{id:"developing-your-own-cluster-driver"},"Developing your own Cluster Driver"),(0,i.kt)("p",null,"In order to develop cluster driver to add to Rancher, please refer to our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher-plugins/kontainer-engine-driver-example"},"example"),"."))}v.isMDXComponent=!0}}]);