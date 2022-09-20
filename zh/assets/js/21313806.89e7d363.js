"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[6309],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69910:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={title:"\u5c06 Rancher \u8fc1\u79fb\u5230\u65b0\u96c6\u7fa4",weight:3},s=void 0,l={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster",id:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster",title:"\u5c06 Rancher \u8fc1\u79fb\u5230\u65b0\u96c6\u7fa4",description:"\u5982\u679c\u4f60\u8981\u5c06 Rancher \u8fc1\u79fb\u5230\u4e00\u4e2a\u65b0\u7684 Kubernetes \u96c6\u7fa4\uff0c\u5148\u4e0d\u8981\u5728\u65b0\u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher\u3002\u8fd9\u662f\u56e0\u4e3a\u5982\u679c\u5c06 Rancher \u8fd8\u539f\u5230\u5df2\u5b89\u88c5 Rancher \u7684\u65b0\u96c6\u7fa4\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster",permalink:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster.md",tags:[],version:"current",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u5c06 Rancher \u8fc1\u79fb\u5230\u65b0\u96c6\u7fa4",weight:3},sidebar:"tutorialSidebar",previous:{title:"\u8fd8\u539f Rancher",permalink:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher"},next:{title:"\u5907\u4efd Docker \u5b89\u88c5\u7684 Rancher",permalink:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"}},p={},u=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"1. \u5b89\u88c5 rancher-backup Helm Chart",id:"1-\u5b89\u88c5-rancher-backup-helm-chart",level:3},{value:"2. \u4f7f\u7528 Restore \u81ea\u5b9a\u4e49\u8d44\u6e90\u6765\u8fd8\u539f\u5907\u4efd",id:"2-\u4f7f\u7528-restore-\u81ea\u5b9a\u4e49\u8d44\u6e90\u6765\u8fd8\u539f\u5907\u4efd",level:3},{value:"3. \u5b89\u88c5 cert-manager",id:"3-\u5b89\u88c5-cert-manager",level:3},{value:"4. \u4f7f\u7528 Helm \u5b89\u88c5 Rancher",id:"4-\u4f7f\u7528-helm-\u5b89\u88c5-rancher",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u8981\u5c06 Rancher \u8fc1\u79fb\u5230\u4e00\u4e2a\u65b0\u7684 Kubernetes \u96c6\u7fa4\uff0c\u5148\u4e0d\u8981\u5728\u65b0\u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher\u3002\u8fd9\u662f\u56e0\u4e3a\u5982\u679c\u5c06 Rancher \u8fd8\u539f\u5230\u5df2\u5b89\u88c5 Rancher \u7684\u65b0\u96c6\u7fa4\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u95ee\u9898\u3002"),(0,i.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u8bf4\u660e\u5047\u8bbe\u4f60\u5df2\u7ecf\u5b8c\u6210",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},"\u5907\u4efd\u521b\u5efa"),"\uff0c\u5e76\u4e14\u5df2\u7ecf\u5b89\u88c5\u4e86\u7528\u4e8e\u90e8\u7f72 Rancher \u7684\u65b0 Kubernetes \u96c6\u7fa4\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f60\u9700\u8981\u4f7f\u7528\u4e0e\u7b2c\u4e00\u4e2a\u96c6\u7fa4\u4e2d\u8bbe\u7f6e\u7684 Server URL \u76f8\u540c\u7684\u4e3b\u673a\u540d\u3002\u5426\u5219\uff0c\u4e0b\u6e38\u96c6\u7fa4\u4f1a\u5728 UI \u7684\u7ba1\u7406\u9875\u9762\u663e\u793a\u4e3a\u4e0d\u53ef\u7528\uff0c\u5e76\u4e14\u4f60\u4e0d\u80fd\u70b9\u51fb\u96c6\u7fa4\u5185\u6216\u96c6\u7fa4\u7684 ",(0,i.kt)("strong",{parentName:"p"},"Explore")," \u6309\u94ae\u3002"))),(0,i.kt)("p",null,"Rancher \u5fc5\u987b\u662f 2.5.0 \u6216\u66f4\u9ad8\u7248\u672c\u3002"),(0,i.kt)("p",null,"Rancher \u53ef\u4ee5\u5b89\u88c5\u5230\u4efb\u610f Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u5305\u62ec\u6258\u7ba1\u7684 Kubernetes \u96c6\u7fa4\uff08\u5982 Amazon EKS \u96c6\u7fa4\uff09\u3002\u5982\u9700\u83b7\u53d6\u5b89\u88c5 Kubernetes \u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1 Kubernetes \u53d1\u884c\u7248\u7684\u6587\u6863\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b Rancher \u7684 Kubernetes \u53d1\u884c\u7248\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/"},"RKE Kubernetes \u5b89\u88c5\u6587\u6863")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/"},"K3s Kubernetes \u5b89\u88c5\u6587\u6863"))),(0,i.kt)("h3",{id:"1-\u5b89\u88c5-rancher-backup-helm-chart"},"1. \u5b89\u88c5 rancher-backup Helm Chart"),(0,i.kt)("p",null,"\u5b89\u88c5 rancher-backup Chart \u7684 2.x.x \u7248\u672c\u3002\u4e0b\u9762\u547d\u4ee4\u5047\u8bbe\u4f60\u7684\u73af\u5883\u53ef\u4ee5\u8bbf\u95ee DockerHub\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm repo add rancher-charts https://charts.rancher.io\nhelm repo update\nhelm install rancher-backup-crd rancher-charts/rancher-backup-crd -n cattle-resources-system --create-namespace --version $CHART_VERSION\nhelm install rancher-backup rancher-charts/rancher-backup -n cattle-resources-system --version $CHART_VERSION\n")),(0,i.kt)("p",null,"\u5982\u679c\u662f",(0,i.kt)("strong",{parentName:"p"},"\u79bb\u7ebf\u73af\u5883"),"\uff0c\u5728\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-backup-crd")," Helm Chart \u65f6\uff0c\u4f7f\u7528\u4ee5\u4e0b\u9009\u9879\u4ece\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u62c9\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"backup-restore-operator")," \u955c\u50cf\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--set image.repository $REGISTRY/rancher/backup-restore-operator\n")),(0,i.kt)("h3",{id:"2-\u4f7f\u7528-restore-\u81ea\u5b9a\u4e49\u8d44\u6e90\u6765\u8fd8\u539f\u5907\u4efd"},"2. \u4f7f\u7528 Restore \u81ea\u5b9a\u4e49\u8d44\u6e90\u6765\u8fd8\u539f\u5907\u4efd"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u8981\u63d0\u793a\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Kubernetes v1.22 \u662f Rancher 2.6.3 \u7684\u5b9e\u9a8c\u529f\u80fd\uff0c\u4e0d\u652f\u6301\u4f7f\u7528 apiVersion ",(0,i.kt)("inlineCode",{parentName:"p"},"apiextensions.k8s.io/v1beta1"),"\u6765\u8fd8\u539f\u5305\u542b CRD \u6587\u4ef6\u7684\u5907\u4efd\u6587\u4ef6\u3002\u5728 v1.22 \u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-backup")," \u5e94\u7528\u7684\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"p"},"resourceSet")," \u53ea\u6536\u96c6\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"apiextensions.k8s.io/v1")," \u7684 CRD\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u4e24\u79cd\u65b9\u6cd5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528 apiVersion v1 \u6765\u66f4\u65b0\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"li"},"resourceSet"),"\uff0c\u4ece\u800c\u6536\u96c6 CRD\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"apiextensions.k8s.io/v1")," \u4f5c\u4e3a\u66ff\u4ee3\uff0c\u6765\u66f4\u65b0\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"li"},"resourceSet")," \u548c\u5ba2\u6237\u7aef\uff0c\u4ece\u800c\u5728\u5185\u90e8\u4f7f\u7528\u65b0\u7684 API\u3002")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6ce8\u610f\uff0c\u5728\u4e3a v1.22 \u7248\u672c\u5236\u4f5c\u6216\u6062\u590d\u5907\u4efd\u65f6\uff0cRancher \u7248\u672c\u548c\u672c\u5730\u96c6\u7fa4\u7684 Kubernetes \u7248\u672c\u5e94\u8be5\u662f\u4e00\u6837\u7684\u3002\u7531\u4e8e\u96c6\u7fa4\u4e2d\u652f\u6301\u7684 apiVersion \u548c\u5907\u4efd\u6587\u4ef6\u4e2d\u7684 apiVersion \u53ef\u80fd\u4e0d\u540c\uff0c\u56e0\u6b64\u5728\u8fd8\u539f\u5907\u4efd\u65f6\u8bf7\u8003\u8651 Kubernetes \u7684\u7248\u672c\u3002")))),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 S3 \u4f5c\u4e3a\u5907\u4efd\u6e90\uff0c\u5e76\u4e14\u9700\u8981\u4f7f\u7528\u4f60\u7684 S3 \u51ed\u8bc1\u8fdb\u884c\u8fd8\u539f\uff0c\u8bf7\u4f7f\u7528 S3 \u51ed\u8bc1\u5728\u96c6\u7fa4\u4e2d\u521b\u5efa\u4e00\u4e2a\u5bc6\u6587\uff08Secret\uff09\u3002\u5bc6\u6587\u6570\u636e\u5fc5\u987b\u6709\u4e24\u4e2a key\uff0c\u5206\u522b\u662f\u5305\u542b S3 \u51ed\u8bc1\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"accessKey")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"secretKey"),"\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728\u76f4\u63a5\u521b\u5efa\u5bf9\u8c61\u65f6\uff0c\u4e0b\u65b9\u793a\u4f8b\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"accessKey")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"secretKey")," \u5fc5\u987b\u5148\u8fdb\u884c base64 \u7f16\u7801\u3002\u5426\u5219\uff0c\u5728\u4f60\u5c1d\u8bd5\u5907\u4efd\u6216\u6062\u590d\u65f6\uff0c\u7c98\u8d34\u7684\u503c\u4f1a\u5bfc\u81f4\u9519\u8bef\u3002"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: s3-creds\ntype: Opaque\ndata:\n  accessKey: <Enter your base64-encoded access key>\n  secretKey: <Enter your base64-encoded secret key>\n")),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u8fd9\u4e2a\u5bc6\u6587\u3002\u5728\u4e0a\u8ff0\u4f8b\u5b50\u4e2d\uff0c\u5bc6\u6587\u521b\u5efa\u5728\u9ed8\u8ba4\u547d\u540d\u7a7a\u95f4\u4e2d\u3002"),(0,i.kt)("p",null,"\u5728 Restore \u81ea\u5b9a\u4e49\u8d44\u6e90\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"prune")," \u5fc5\u987b\u8bbe\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,i.kt)("p",null,"\u53c2\u8003\u4ee5\u4e0b\u793a\u4f8b\u521b\u5efa Restore \u81ea\u5b9a\u4e49\u8d44\u6e90\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# migrationResource.yaml\napiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-migration\nspec:\n  backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz\n  prune: false\n  encryptionConfigSecretName: encryptionconfig\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: backup-test\n      folder: ecm1\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u8981\u63d0\u793a\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u53ea\u6709\u5728\u521b\u5efa\u5907\u4efd\u65f6\u542f\u7528\u4e86\u52a0\u5bc6\u529f\u80fd\u65f6\uff0c\u624d\u5fc5\u987b\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"encryptionConfigSecretName")," \u5b57\u6bb5\u3002\u63d0\u4f9b\u5305\u542b\u52a0\u5bc6\u914d\u7f6e\u6587\u4ef6\u7684\u5bc6\u6587\u540d\u79f0\u3002\u5982\u679c\u4f60\u53ea\u6709\u52a0\u5bc6\u914d\u7f6e\u6587\u4ef6\uff0c\u4f46\u6ca1\u6709\u5728\u6b64\u96c6\u7fa4\u4e2d\u7528\u5b83\u6765\u521b\u5efa\u5bc6\u6587\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u521b\u5efa\u5bc6\u6587\u3002"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u52a0\u5bc6\u914d\u7f6e\u6587\u4ef6\u5fc5\u987b\u547d\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"encryption-provider-config.yaml"),"\uff0c\u800c\u4e14\u5fc5\u987b\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"--from-file")," \u6807\u5fd7\u6765\u521b\u5efa\u8fd9\u4e2a\u5bc6\u6587\u3002\u56e0\u6b64\uff0c\u5c06\u4f60\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"EncryptionConfiguration")," \u4fdd\u5b58\u5230\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"encryption-provider-config.yaml")," \u7684\u6587\u4ef6\u4e2d\uff0c\u5e76\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl create secret generic encryptionconfig \\\n  --from-file=./encryption-provider-config.yaml \\\n  -n cattle-resources-system\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5e94\u7528\u6e05\u5355\uff0c\u5e76\u89c2\u5bdf Restore \u8d44\u6e90\u7684\u72b6\u6001\uff1a"),(0,i.kt)("p",{parentName:"li"},"\u5e94\u7528\u8d44\u6e90\uff1a"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl apply -f migrationResource.yaml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u89c2\u5bdf Restore \u7684\u72b6\u6001\uff1a\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get restore\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u67e5\u770b\u6062\u590d\u65e5\u5fd7\uff1a\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl logs -n cattle-resources-system --tail 100 -f rancher-backup-xxx-xxx\n")),(0,i.kt)("p",null,"Restore \u8d44\u6e90\u7684\u72b6\u6001\u53d8\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"Completed")," \u540e\uff0c\u4f60\u53ef\u4ee5\u7ee7\u7eed\u5b89\u88c5 Rancher\u3002"),(0,i.kt)("h3",{id:"3-\u5b89\u88c5-cert-manager"},"3. \u5b89\u88c5 cert-manager"),(0,i.kt)("p",null,"\u6309\u7167\u5728 Kubernetes \u4e0a\u5b89\u88c5 cert-manager\u7684\u6b65\u9aa4",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#4-%E5%AE%89%E8%A3%85-cert-manager"},"\u5b89\u88c5 cert-manager"),"\u3002"),(0,i.kt)("h3",{id:"4-\u4f7f\u7528-helm-\u5b89\u88c5-rancher"},"4. \u4f7f\u7528 Helm \u5b89\u88c5 Rancher"),(0,i.kt)("p",null,"\u4f7f\u7528\u4e0e\u7b2c\u4e00\u4e2a\u96c6\u7fa4\u4e0a\u4f7f\u7528\u7684\u76f8\u540c\u7248\u672c\u7684 Helm \u6765\u5b89\u88c5 Rancher\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm install rancher rancher-latest/rancher \\\n  --namespace cattle-system \\\n  --set hostname=<same hostname as the server URL from the first Rancher server> \\\n")))}d.isMDXComponent=!0}}]);