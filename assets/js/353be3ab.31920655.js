"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[17870],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(t),d=n,k=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return t?a.createElement(k,i(i({ref:r},u),{},{components:t})):a.createElement(k,i({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},83297:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=t(87462),n=t(63366),o=(t(67294),t(3905)),i=["components"],s={title:"Backups and Disaster Recovery",weight:5},c=void 0,l={unversionedId:"pages-for-subheaders/backup-restore-and-disaster-recovery",id:"pages-for-subheaders/backup-restore-and-disaster-recovery",title:"Backups and Disaster Recovery",description:"In this section, you'll learn how to create backups of Rancher, how to restore Rancher from backup, and how to migrate Rancher to a new Kubernetes cluster.",source:"@site/docs/pages-for-subheaders/backup-restore-and-disaster-recovery.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/backup-restore-and-disaster-recovery",permalink:"/pages-for-subheaders/backup-restore-and-disaster-recovery",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/backup-restore-and-disaster-recovery.md",tags:[],version:"current",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Backups and Disaster Recovery",weight:5},sidebar:"tutorialSidebar",previous:{title:"Multi-cluster Apps",permalink:"/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps"},next:{title:"Backing up Rancher",permalink:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"}},u={},p=[{value:"Backup and Restore for Rancher installed with Docker",id:"backup-and-restore-for-rancher-installed-with-docker",level:2},{value:"How Backups and Restores Work",id:"how-backups-and-restores-work",level:2},{value:"Installing the rancher-backup Operator",id:"installing-the-rancher-backup-operator",level:2},{value:"Installing rancher-backup with the Rancher UI",id:"installing-rancher-backup-with-the-rancher-ui",level:3},{value:"RBAC",id:"rbac",level:3},{value:"Backing up Rancher",id:"backing-up-rancher",level:2},{value:"Restoring Rancher",id:"restoring-rancher",level:2},{value:"Migrating Rancher to a New Cluster",id:"migrating-rancher-to-a-new-cluster",level:2},{value:"Default Storage Location Configuration",id:"default-storage-location-configuration",level:2},{value:"Example values.yaml for the rancher-backup Helm Chart",id:"example-valuesyaml-for-the-rancher-backup-helm-chart",level:3}],h={toc:p};function d(e){var r=e.components,t=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, you'll learn how to create backups of Rancher, how to restore Rancher from backup, and how to migrate Rancher to a new Kubernetes cluster."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator is used to backup and restore Rancher on any Kubernetes cluster. This application is a Helm chart, and it can be deployed through the Rancher ",(0,o.kt)("strong",{parentName:"p"},"Apps & Marketplace")," page, or by using the Helm CLI. The ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," Helm chart is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/tree/release-v2.6/charts/rancher-backup"},"here.")),(0,o.kt)("p",null,"The backup-restore operator needs to be installed in the local cluster, and only backs up the Rancher app. The backup and restore operations are performed only in the local Kubernetes cluster."),(0,o.kt)("h2",{id:"backup-and-restore-for-rancher-installed-with-docker"},"Backup and Restore for Rancher installed with Docker"),(0,o.kt)("p",null,"For Rancher installed with Docker, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"this page")," to perform backups and ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"},"this page")," to perform restores."),(0,o.kt)("h2",{id:"how-backups-and-restores-work"},"How Backups and Restores Work"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator introduces three custom resources: Backups, Restores, and ResourceSets. The following cluster-scoped custom resource definitions are added to the cluster:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"backups.resources.cattle.io")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resourcesets.resources.cattle.io")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"restores.resources.cattle.io"))),(0,o.kt)("p",null,"The ResourceSet defines which Kubernetes resources need to be backed up. The ResourceSet is not available to be configured in the Rancher UI because the values required to back up Rancher are predefined. This ResourceSet should not be modified."),(0,o.kt)("p",null,"When a Backup custom resource is created, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," to get the resources in the ResourceSet (specifically, the predefined ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-resource-set"),") that the Backup custom resource refers to."),(0,o.kt)("p",null,"The operator then creates the backup file in the .tar.gz format and stores it in the location configured in the Backup resource."),(0,o.kt)("p",null,"When a Restore custom resource is created, the operator accesses the backup .tar.gz file specified by the Restore, and restores the application from that file."),(0,o.kt)("p",null,"The Backup and Restore custom resources can be created in the Rancher UI, or by using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Refer ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster#2-restore-from-backup-using-a-restore-custom-resource"},"here")," for help on restoring an existing backup file into a v1.22 cluster in Rancher v2.6.3."))),(0,o.kt)("h2",{id:"installing-the-rancher-backup-operator"},"Installing the rancher-backup Operator"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator can be installed from the Rancher UI, or with the Helm CLI. In both cases, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," Helm chart is installed on the Kubernetes cluster running the Rancher server. It is a cluster-admin only feature and available only for the ",(0,o.kt)("strong",{parentName:"p"},"local")," cluster.  (",(0,o.kt)("em",{parentName:"p"},"If you do not see ",(0,o.kt)("inlineCode",{parentName:"em"},"rancher-backup")," in the Rancher UI, you may have selected the wrong cluster."),")"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is a known issue in Fleet that occurs after performing a restoration using the backup-restore-operator: Secrets used for clientSecretName and helmSecretName are not included in Fleet gitrepos. Refer ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/fleet-gitops-at-scale#troubleshooting"},"here")," for a workaround."))),(0,o.kt)("h3",{id:"installing-rancher-backup-with-the-rancher-ui"},"Installing rancher-backup with the Rancher UI"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"local")," cluster and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, ",(0,o.kt)("strong",{parentName:"li"},"Apps & Marketplace > Charts"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Rancher Backups"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Install"),"."),(0,o.kt)("li",{parentName:"ol"},"Optional: Configure the default storage location. For help, refer to the ",(0,o.kt)("a",{parentName:"li",href:"/reference-guides/backup-restore-configuration/storage-configuration"},"configuration section.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Install"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator is installed."),(0,o.kt)("p",null,"From the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Dashboard,")," you can see the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator listed under ",(0,o.kt)("strong",{parentName:"p"},"Deployments"),"."),(0,o.kt)("p",null,"To configure the backup app in Rancher, go to the left navigation menu and click ",(0,o.kt)("strong",{parentName:"p"},"Rancher Backups"),"."),(0,o.kt)("h3",{id:"rbac"},"RBAC"),(0,o.kt)("p",null,"Only the rancher admins and the local cluster\u2019s cluster-owner can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the Chart"),(0,o.kt)("li",{parentName:"ul"},"See the navigation links for Backup and Restore CRDs"),(0,o.kt)("li",{parentName:"ul"},"Perform a backup or restore by creating a Backup CR and Restore CR respectively"),(0,o.kt)("li",{parentName:"ul"},"List backups/restores performed so far")),(0,o.kt)("h2",{id:"backing-up-rancher"},"Backing up Rancher"),(0,o.kt)("p",null,"A backup is performed by creating a Backup custom resource. For a tutorial, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},"this page.")),(0,o.kt)("h2",{id:"restoring-rancher"},"Restoring Rancher"),(0,o.kt)("p",null,"A restore is performed by creating a Restore custom resource. For a tutorial, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher"},"this page.")),(0,o.kt)("h2",{id:"migrating-rancher-to-a-new-cluster"},"Migrating Rancher to a New Cluster"),(0,o.kt)("p",null,"A migration is performed by following ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"these steps.")),(0,o.kt)("h2",{id:"default-storage-location-configuration"},"Default Storage Location Configuration"),(0,o.kt)("p",null,"Configure a storage location where all backups are saved by default. You will have the option to override this with each backup, but will be limited to using an S3-compatible or Minio object store."),(0,o.kt)("p",null,"For information on configuring these options, refer to ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/backup-restore-configuration/storage-configuration"},"this page.")),(0,o.kt)("h3",{id:"example-valuesyaml-for-the-rancher-backup-helm-chart"},"Example values.yaml for the rancher-backup Helm Chart"),(0,o.kt)("p",null,"The example ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/backup-restore-configuration/storage-configuration#example-values-yaml-for-the-rancher-backup-helm-chart"},"values.yaml file")," can be used to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator when the Helm CLI is used to install it."))}d.isMDXComponent=!0}}]);