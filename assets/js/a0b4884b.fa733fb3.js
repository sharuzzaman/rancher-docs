"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[5118],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},86159:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),o=["components"],i={title:"Projects and Kubernetes Namespaces with Rancher",description:"Rancher Projects ease the administrative burden of your cluster and support multi-tenancy. Learn to create projects and divide projects into Kubernetes namespaces",weight:2032},c=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces",id:"how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces",title:"Projects and Kubernetes Namespaces with Rancher",description:"Rancher Projects ease the administrative burden of your cluster and support multi-tenancy. Learn to create projects and divide projects into Kubernetes namespaces",source:"@site/docs/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces.md",tags:[],version:"current",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Projects and Kubernetes Namespaces with Rancher",description:"Rancher Projects ease the administrative burden of your cluster and support multi-tenancy. Learn to create projects and divide projects into Kubernetes namespaces",weight:2032},sidebar:"tutorialSidebar",previous:{title:"vSphere Storage",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage"},next:{title:"Cloning Clusters",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration"}},p={},u=[{value:"About Namespaces",id:"about-namespaces",level:2},{value:"Role-based access control issues with namespaces and kubectl",id:"role-based-access-control-issues-with-namespaces-and-kubectl",level:3},{value:"About Projects",id:"about-projects",level:2},{value:"The Cluster&#39;s Default Project",id:"the-clusters-default-project",level:3},{value:"The System Project",id:"the-system-project",level:3},{value:"Project Authorization",id:"project-authorization",level:2},{value:"Pod Security Policies",id:"pod-security-policies",level:2},{value:"Creating Projects",id:"creating-projects",level:2},{value:"1. Name a New Project",id:"1-name-a-new-project",level:3},{value:"2. Optional: Select a Pod Security Policy",id:"2-optional-select-a-pod-security-policy",level:3},{value:"3. Recommended: Add Project Members",id:"3-recommended-add-project-members",level:3},{value:"4. Optional: Add Resource Quotas",id:"4-optional-add-resource-quotas",level:3}],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'A namespace is a Kubernetes concept that allows a virtual cluster within a cluster, which is useful for dividing the cluster into separate "virtual clusters" that each have their own access control and resource quotas.'),(0,s.kt)("p",null,"A project is a group of namespaces, and it is a concept introduced by Rancher. Projects allow you to manage multiple namespaces as a group and perform Kubernetes operations in them. You can use projects to support multi-tenancy, so that a team can access a project within a cluster without having access to other projects in the same cluster."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"As of Rancher v2.6, projects are de-emphasized on the UI because it is no longer required to create any Kubernetes resources within a project scope. However, resources such as ",(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets#creating-secrets-in-projects"},"Secrets")," can still be created in a project scope if the legacy feature flag is enabled."))),(0,s.kt)("p",null,"This section describes how projects and namespaces work with Rancher."),(0,s.kt)("h2",{id:"about-namespaces"},"About Namespaces"),(0,s.kt)("p",null,"A namespace is a concept introduced by Kubernetes. According to the ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"official Kubernetes documentation on namespaces,")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Kubernetes supports multiple virtual clusters backed by the same physical cluster. These virtual clusters are called namespaces. ","[...]"," Namespaces are intended for use in environments with many users spread across multiple teams, or projects. For clusters with a few to tens of users, you should not need to create or think about namespaces at all."))),(0,s.kt)("p",null,"Namespaces provide the following functionality:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Providing a scope for names:")," Names of resources need to be unique within a namespace, but not across namespaces. Namespaces can not be nested inside one another and each Kubernetes resource can only be in one namespace."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Resource quotas:")," Namespaces provide a way to divide cluster resources between multiple users.")),(0,s.kt)("p",null,"You can assign resources at the project level so that each namespace in the project can use them. You can also bypass this inheritance by assigning resources explicitly to a namespace."),(0,s.kt)("p",null,"You can assign the following resources directly to namespaces:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/pages-for-subheaders/workloads-and-pods"},"Workloads")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/pages-for-subheaders/load-balancer-and-ingress-controller"},"Load Balancers/Ingress")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services"},"Service Discovery Records")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/pages-for-subheaders/create-kubernetes-persistent-storage"},"Persistent Volume Claims")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"},"Certificates")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"},"ConfigMaps")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries"},"Registries")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},"Secrets"))),(0,s.kt)("p",null,"To manage permissions in a vanilla Kubernetes cluster, cluster admins configure role-based access policies for each namespace. With Rancher, user permissions are assigned on the project level instead, and permissions are automatically inherited by any namespace owned by the particular project."),(0,s.kt)("p",null,"For more information on creating and moving namespaces, see ",(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces"},"Namespaces"),"."),(0,s.kt)("h3",{id:"role-based-access-control-issues-with-namespaces-and-kubectl"},"Role-based access control issues with namespaces and kubectl"),(0,s.kt)("p",null,"Because projects are a concept introduced by Rancher, kubectl does not have the capability to restrict the creation of namespaces to a project the creator has access to."),(0,s.kt)("p",null,"This means that when standard users with project-scoped permissions create a namespaces with ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl"),", it may be unusable because ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," doesn't require the new namespace to be scoped within a certain project."),(0,s.kt)("p",null,"If your permissions are restricted to the project level, it is better to ",(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces"},"create a namespace through Rancher")," to ensure that you will have permission to access the namespace."),(0,s.kt)("p",null,"If a standard user is a project owner, the user will be able to create namespaces within that project. The Rancher UI will prevent that user from creating namespaces outside the scope of the projects they have access to. "),(0,s.kt)("h2",{id:"about-projects"},"About Projects"),(0,s.kt)("p",null,"In terms of hierarchy:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Clusters contain projects"),(0,s.kt)("li",{parentName:"ul"},"Projects contain namespaces")),(0,s.kt)("p",null,"You can use projects to support multi-tenancy, so that a team can access a project within a cluster without having access to other projects in the same cluster."),(0,s.kt)("p",null,"In the base version of Kubernetes, features like role-based access rights or cluster resources are assigned to individual namespaces. A project allows you to save time by giving an individual or a team access to multiple namespaces simultaneously."),(0,s.kt)("p",null,"You can use projects to perform actions such as:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Assign users to a group of namespaces (i.e., ",(0,s.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"project membership"),")."),(0,s.kt)("li",{parentName:"ul"},"Assign users specific roles in a project. A role can be owner, member, read-only, or ",(0,s.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"},"custom"),"."),(0,s.kt)("li",{parentName:"ul"},"Assign resources to the project."),(0,s.kt)("li",{parentName:"ul"},"Assign Pod Security Policies.")),(0,s.kt)("p",null,"When you create a cluster, two projects are automatically created within it:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#the-cluster-s-default-project"},"Default Project")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#the-system-project"},"System Project"))),(0,s.kt)("h3",{id:"the-clusters-default-project"},"The Cluster's Default Project"),(0,s.kt)("p",null,"When you provision a cluster with Rancher, it automatically creates a ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," project for the cluster. This is a project you can use to get started with your cluster, but you can always delete it and replace it with projects that have more descriptive names."),(0,s.kt)("p",null,"If you don't have a need for more than the default namespace, you also do not need more than the ",(0,s.kt)("strong",{parentName:"p"},"Default")," project in Rancher."),(0,s.kt)("p",null,"If you require another level of organization beyond the ",(0,s.kt)("strong",{parentName:"p"},"Default")," project, you can create more projects in Rancher to isolate namespaces, applications and resources."),(0,s.kt)("h3",{id:"the-system-project"},"The System Project"),(0,s.kt)("p",null,"When troubleshooting, you can view the ",(0,s.kt)("inlineCode",{parentName:"p"},"system")," project to check if important namespaces in the Kubernetes system are working properly. This easily accessible project saves you from troubleshooting individual system namespace containers."),(0,s.kt)("p",null,"To open it, open the cluster view and click ",(0,s.kt)("strong",{parentName:"p"},"Cluster > Projects/Namespaces"),". This view shows all of the namespaces in the ",(0,s.kt)("inlineCode",{parentName:"p"},"system")," project."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"system")," project:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Is automatically created when you provision a cluster."),(0,s.kt)("li",{parentName:"ul"},"Lists all namespaces that exist in ",(0,s.kt)("inlineCode",{parentName:"li"},"v3/settings/system-namespaces"),", if they exist."),(0,s.kt)("li",{parentName:"ul"},"Allows you to add more namespaces or move its namespaces to other projects."),(0,s.kt)("li",{parentName:"ul"},"Cannot be deleted because it's required for cluster operations.")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"In RKE clusters where the project network isolation option is enabled, the ",(0,s.kt)("inlineCode",{parentName:"p"},"system")," project overrides the project network isolation option so that it can communicate with other projects, collect logs, and check health."))),(0,s.kt)("h2",{id:"project-authorization"},"Project Authorization"),(0,s.kt)("p",null,"Standard users are only authorized for project access in two situations:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"An administrator, cluster owner or cluster member explicitly adds the standard user to the project's ",(0,s.kt)("strong",{parentName:"li"},"Members")," tab."),(0,s.kt)("li",{parentName:"ul"},"Standard users can access projects that they create themselves.")),(0,s.kt)("h2",{id:"pod-security-policies"},"Pod Security Policies"),(0,s.kt)("p",null,"Rancher extends Kubernetes to allow the application of ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/"},"Pod Security Policies")," at the project level in addition to the cluster level. However, as a best practice, we recommend applying Pod Security Policies at the cluster level."),(0,s.kt)("h2",{id:"creating-projects"},"Creating Projects"),(0,s.kt)("p",null,"This section describes how to create a new project with a name and with optional pod security policy, members, and resource quotas."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#1-name-a-new-project"},"Name a new project.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#2-optional-select-a-pod-security-policy"},"Optional: Select a pod security policy.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#3-recommended-add-project-members"},"Recommended: Add project members.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#4-optional-add-resource-quotas"},"Optional: Add resource quotas."))),(0,s.kt)("h3",{id:"1-name-a-new-project"},"1. Name a New Project"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,s.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,s.kt)("li",{parentName:"ol"},"On the ",(0,s.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster you want to project in and click ",(0,s.kt)("strong",{parentName:"li"},"Explore"),"."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Cluster > Projects/Namespaces"),"."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Create Project"),"."),(0,s.kt)("li",{parentName:"ol"},"Enter a ",(0,s.kt)("strong",{parentName:"li"},"Project Name"),".")),(0,s.kt)("h3",{id:"2-optional-select-a-pod-security-policy"},"2. Optional: Select a Pod Security Policy"),(0,s.kt)("p",null,"This option is only available if you've already created a Pod Security Policy. For instruction, see ",(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"Creating Pod Security Policies"),"."),(0,s.kt)("p",null,"Assigning a PSP to a project will:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Override the cluster's default PSP."),(0,s.kt)("li",{parentName:"ul"},"Apply the PSP to the project."),(0,s.kt)("li",{parentName:"ul"},"Apply the PSP to any namespaces you add to the project later.")),(0,s.kt)("h3",{id:"3-recommended-add-project-members"},"3. Recommended: Add Project Members"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("strong",{parentName:"p"},"Members")," section to provide other users with project access and roles."),(0,s.kt)("p",null,"By default, your user is added as the project ",(0,s.kt)("inlineCode",{parentName:"p"},"Owner"),"."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes on Permissions:")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Users assigned the ",(0,s.kt)("inlineCode",{parentName:"p"},"Owner")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"Member")," role for a project automatically inherit the ",(0,s.kt)("inlineCode",{parentName:"p"},"namespace creation")," role. However, this role is a ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole"},"Kubernetes ClusterRole"),", meaning its scope extends to all projects in the cluster. Therefore, users explicitly assigned the ",(0,s.kt)("inlineCode",{parentName:"p"},"Owner")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"Member")," role for a project can create namespaces in other projects they're assigned to, even with only the ",(0,s.kt)("inlineCode",{parentName:"p"},"Read Only")," role assigned.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"By default, the Rancher role of ",(0,s.kt)("inlineCode",{parentName:"p"},"project-member")," inherits from the ",(0,s.kt)("inlineCode",{parentName:"p"},"Kubernetes-edit")," role, and the ",(0,s.kt)("inlineCode",{parentName:"p"},"project-owner")," role inherits from the ",(0,s.kt)("inlineCode",{parentName:"p"},"Kubernetes-admin")," role. As such, both ",(0,s.kt)("inlineCode",{parentName:"p"},"project-member")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"project-owner")," roles will allow for namespace management, including the ability to create and delete namespaces.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Choose ",(0,s.kt)("inlineCode",{parentName:"p"},"Custom")," to create a custom role on the fly: ",(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#custom-project-roles"},"Custom Project Roles"),"."))))),(0,s.kt)("p",null,"To add members:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Members")," tab, click ",(0,s.kt)("strong",{parentName:"li"},"Add"),"."),(0,s.kt)("li",{parentName:"ol"},"From the ",(0,s.kt)("strong",{parentName:"li"},"Select Member")," field, search for a user or group that you want to assign project access. Note: You can only search for groups if external authentication is enabled."),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Project Permissions")," section, choose a role. For more information, refer to the ",(0,s.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"documentation on project roles."))),(0,s.kt)("h3",{id:"4-optional-add-resource-quotas"},"4. Optional: Add Resource Quotas"),(0,s.kt)("p",null,"Resource quotas limit the resources that a project (and its namespaces) can consume. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"Resource Quotas"),"."),(0,s.kt)("p",null,"To add a resource quota,"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Resource Quotas")," tab, click ",(0,s.kt)("strong",{parentName:"li"},"Add Resource"),"."),(0,s.kt)("li",{parentName:"ol"},"Select a ",(0,s.kt)("strong",{parentName:"li"},"Resource Type"),". For more information, see ",(0,s.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"Resource Quotas."),"."),(0,s.kt)("li",{parentName:"ol"},"Enter values for the ",(0,s.kt)("strong",{parentName:"li"},"Project Limit")," and the ",(0,s.kt)("strong",{parentName:"li"},"Namespace Default Limit"),"."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Optional:")," Specify ",(0,s.kt)("strong",{parentName:"li"},"Container Default Resource Limit"),", which will be applied to every container started in the project. The parameter is recommended if you have CPU or Memory limits set by the Resource Quota. It can be overridden on per an individual namespace or a container level. For more information, see ",(0,s.kt)("a",{parentName:"li",href:"/pages-for-subheaders/manage-project-resource-quotas"},"Container Default Resource Limit")),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Create"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," Your project is created. You can view it from the cluster's ",(0,s.kt)("strong",{parentName:"p"},"Projects/Namespaces")," view."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Project Limit"),(0,s.kt)("td",{parentName:"tr",align:null},"The overall resource limit for the project.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Namespace Default Limit"),(0,s.kt)("td",{parentName:"tr",align:null},"The default resource limit available for each namespace. This limit is propagated to each namespace in the project when created. The combined limit of all project namespaces shouldn't exceed the project limit.")))))}m.isMDXComponent=!0}}]);