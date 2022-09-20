"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98566],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return g}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),l=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(t),g=n,f=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return t?a.createElement(f,o(o({ref:r},c),{},{components:t})):a.createElement(f,o({ref:r},c))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59573:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var a=t(87462),n=t(63366),i=(t(67294),t(3905)),o=["components"],u={title:"Deploying Rancher Server",weight:100},s=void 0,l={unversionedId:"pages-for-subheaders/deploy-rancher-manager",id:"pages-for-subheaders/deploy-rancher-manager",title:"Deploying Rancher Server",description:"Use one of the following guides to deploy and provision Rancher and a Kubernetes cluster in the provider of your choice.",source:"@site/docs/pages-for-subheaders/deploy-rancher-manager.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/deploy-rancher-manager",permalink:"/pages-for-subheaders/deploy-rancher-manager",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/deploy-rancher-manager.md",tags:[],version:"current",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Deploying Rancher Server",weight:100},sidebar:"tutorialSidebar",previous:{title:"Rancher Deployment Quick Start Guides",permalink:"/pages-for-subheaders/quick-start-guides"},next:{title:"Rancher AWS Quick Start Guide",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/aws"}},c={},p=[],d={toc:p};function g(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use one of the following guides to deploy and provision Rancher and a Kubernetes cluster in the provider of your choice."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/quick-start-guides/deploy-rancher-manager/aws"},"AWS")," (uses Terraform)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/quick-start-guides/deploy-rancher-manager/aws-marketplace"},"AWS Marketplace")," (uses Amazon EKS)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/quick-start-guides/deploy-rancher-manager/azure"},"Azure")," (uses Terraform)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean"},"DigitalOcean")," (uses Terraform)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/quick-start-guides/deploy-rancher-manager/gcp"},"GCP")," (uses Terraform)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/quick-start-guides/deploy-rancher-manager/hetzner-cloud"},"Hetzner Cloud")," (uses Terraform)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/quick-start-guides/deploy-rancher-manager/vagrant"},"Vagrant")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal"},"Equinix Metal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/quick-start-guides/deploy-rancher-manager/outscale-qs"},"Outscale")," (uses Terraform)")),(0,i.kt)("p",null,"If you prefer, the following guide will take you through the same process in individual steps. Use this if you want to run Rancher in a different provider, on prem, or if you would just like to see how easy it is."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli"},"Manual Install"))))}g.isMDXComponent=!0}}]);