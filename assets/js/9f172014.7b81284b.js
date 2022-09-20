"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[39250],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},16530:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"Applying Templates",weight:50,aliases:["/rancher/v2.x/en/admin-settings/rke-templates/applying-templates/"]},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates",id:"version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates",title:"Applying Templates",description:"You can create a cluster from an RKE template that you created, or from a template that has been shared with you.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates.md",tags:[],version:"2.5",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Applying Templates",weight:50,aliases:["/rancher/v2.x/en/admin-settings/rke-templates/applying-templates/"]},sidebar:"tutorialSidebar",previous:{title:"Overriding Template Settings",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings"},next:{title:"RKE Templates and Infrastructure",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure"}},p={},c=[{value:"Creating a Cluster from an RKE Template",id:"creating-a-cluster-from-an-rke-template",level:3},{value:"Updating a Cluster Created with an RKE Template",id:"updating-a-cluster-created-with-an-rke-template",level:3},{value:"Converting an Existing Cluster to Use an RKE Template",id:"converting-an-existing-cluster-to-use-an-rke-template",level:3}],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can create a cluster from an RKE template that you created, or from a template that has been ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates"},"shared with you.")),(0,o.kt)("p",null,"RKE templates can be applied to new clusters."),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"#converting-an-existing-cluster-to-use-an-rke-template"},"save the configuration of an existing cluster as an RKE template.")," Then the cluster's settings can only be changed if the template is updated."),(0,o.kt)("p",null,"You can't change a cluster to use a different RKE template. You can only update the cluster to a new revision of the same template."),(0,o.kt)("h3",{id:"creating-a-cluster-from-an-rke-template"},"Creating a Cluster from an RKE Template"),(0,o.kt)("p",null,"To add a cluster ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"hosted by an infrastructure provider")," using an RKE template, use these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Global")," view, go to the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," tab."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Cluster")," and choose the infrastructure provider."),(0,o.kt)("li",{parentName:"ol"},"Provide the cluster name and node template details as usual."),(0,o.kt)("li",{parentName:"ol"},"To use an RKE template, under the ",(0,o.kt)("strong",{parentName:"li"},"Cluster Options"),", check the box for ",(0,o.kt)("strong",{parentName:"li"},"Use an existing RKE template and revision.")),(0,o.kt)("li",{parentName:"ol"},"Choose an existing template and revision from the dropdown menu."),(0,o.kt)("li",{parentName:"ol"},"Optional: You can edit any settings that the RKE template owner marked as ",(0,o.kt)("strong",{parentName:"li"},"Allow User Override")," when the template was created. If there are settings that you want to change, but don't have the option to, you will need to contact the template owner to get a new revision of the template. Then you will need to edit the cluster to upgrade it to the new revision."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save")," to launch the cluster.")),(0,o.kt)("h3",{id:"updating-a-cluster-created-with-an-rke-template"},"Updating a Cluster Created with an RKE Template"),(0,o.kt)("p",null,"When the template owner creates a template, each setting has a switch in the Rancher UI that indicates if users can override the setting."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the setting allows a user override, you can update these settings in the cluster by ",(0,o.kt)("a",{parentName:"li",href:"/v2.5/pages-for-subheaders/cluster-configuration"},"editing the cluster.")),(0,o.kt)("li",{parentName:"ul"},"If the switch is turned off, you cannot change these settings unless the cluster owner creates a template revision that lets you override them. If there are settings that you want to change, but don't have the option to, you will need to contact the template owner to get a new revision of the template.")),(0,o.kt)("p",null,"If a cluster was created from an RKE template, you can edit the cluster to update the cluster to a new revision of the template."),(0,o.kt)("p",null,"An existing cluster's settings can be ",(0,o.kt)("a",{parentName:"p",href:"#converting-an-existing-cluster-to-use-an-rke-template"},"saved as an RKE template.")," In that situation, you can also edit the cluster to update the cluster to a new revision of the template."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," You can't change the cluster to use a different RKE template. You can only update the cluster to a new revision of the same template.")),(0,o.kt)("h3",{id:"converting-an-existing-cluster-to-use-an-rke-template"},"Converting an Existing Cluster to Use an RKE Template"),(0,o.kt)("p",null,"This section describes how to create an RKE template from an existing cluster."),(0,o.kt)("p",null,"RKE templates cannot be applied to existing clusters, except if you save an existing cluster's settings as an RKE template. This exports the cluster's settings as a new RKE template, and also binds the cluster to that template. The result is that the cluster can only be changed if the ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#updating-a-template"},"template is updated,")," and the cluster is upgraded to ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#upgrading-a-cluster-to-use-a-new-template-revision"},"use a newer version of the template.")),(0,o.kt)("p",null,"To convert an existing cluster to use an RKE template,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Global")," view in Rancher, click the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," tab."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster that will be converted to use an RKE template. Click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee")," > ",(0,o.kt)("strong",{parentName:"li"},"Save as RKE Template.")),(0,o.kt)("li",{parentName:"ol"},"Enter a name for the template in the form that appears, and click ",(0,o.kt)("strong",{parentName:"li"},"Create."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Results:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A new RKE template is created."),(0,o.kt)("li",{parentName:"ul"},"The cluster is converted to use the new template."),(0,o.kt)("li",{parentName:"ul"},"New clusters can be ",(0,o.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates#creating-a-cluster-from-an-rke-template"},"created from the new template."))))}d.isMDXComponent=!0}}]);