"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[81824],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=n.createContext({}),o=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=o(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,c=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=o(t),d=c,y=f["".concat(s,".").concat(d)]||f[d]||l[d]||i;return t?n.createElement(y,u(u({ref:r},p),{},{components:t})):n.createElement(y,u({ref:r},p))}));function d(e,r){var t=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var i=t.length,u=new Array(i);u[0]=f;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:c,u[1]=a;for(var o=2;o<i;o++)u[o]=t[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},56927:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return l}});var n=t(87462),c=t(63366),i=(t(67294),t(3905)),u=["components"],a={title:"Kubernetes \u5b89\u5168\u6700\u4f73\u5b9e\u8df5",weight:5},s=void 0,o={unversionedId:"reference-guides/rancher-security/kubernetes-security-best-practices",id:"reference-guides/rancher-security/kubernetes-security-best-practices",title:"Kubernetes \u5b89\u5168\u6700\u4f73\u5b9e\u8df5",description:"\u9650\u5236\u4e91\u5143\u6570\u636e API \u8bbf\u95ee",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/rancher-security/kubernetes-security-best-practices.md",sourceDirName:"reference-guides/rancher-security",slug:"/reference-guides/rancher-security/kubernetes-security-best-practices",permalink:"/zh/reference-guides/rancher-security/kubernetes-security-best-practices",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/rancher-security/kubernetes-security-best-practices.md",tags:[],version:"current",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Kubernetes \u5b89\u5168\u6700\u4f73\u5b9e\u8df5",weight:5},sidebar:"tutorialSidebar",previous:{title:"\u5173\u4e8e rke2-selinux",permalink:"/zh/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux"},next:{title:"\u5b89\u5168\u516c\u544a\u548c CVE",permalink:"/zh/reference-guides/rancher-security/security-advisories-and-cves"}},p={},l=[{value:"\u9650\u5236\u4e91\u5143\u6570\u636e API \u8bbf\u95ee",id:"\u9650\u5236\u4e91\u5143\u6570\u636e-api-\u8bbf\u95ee",level:3}],f={toc:l};function d(e){var r=e.components,t=(0,c.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u9650\u5236\u4e91\u5143\u6570\u636e-api-\u8bbf\u95ee"},"\u9650\u5236\u4e91\u5143\u6570\u636e API \u8bbf\u95ee"),(0,i.kt)("p",null,"AWS\u3001Azure\u3001DigitalOcean \u6216 GCP \u7b49\u4e91\u63d0\u4f9b\u5546\u901a\u5e38\u4f1a\u5728\u672c\u5730\u5411\u5b9e\u4f8b\u516c\u5f00\u5143\u6570\u636e\u670d\u52a1\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6b64\u7aef\u70b9\u53ef\u88ab\u8fd0\u884c\u5728\u4e91\u5b9e\u4f8b\u4e0a\u7684 pod \u8bbf\u95ee\uff0c\u5305\u62ec\u5728\u6258\u7ba1\u7684 Kubernetes\uff08\u5982 EKS\u3001AKS\u3001DigitalOcean Kubernetes \u6216 GKE\uff09\u4e2d\u7684 pod\uff0c\u5e76\u4e14\u53ef\u4ee5\u5305\u542b\u8be5\u8282\u70b9\u7684\u4e91\u51ed\u8bc1\u3001\u914d\u7f6e\u6570\u636e\uff08\u5982 kubelet \u51ed\u8bc1\uff09\u4ee5\u53ca\u5176\u4ed6\u654f\u611f\u6570\u636e\u3002\u4e3a\u4e86\u964d\u4f4e\u5728\u4e91\u5e73\u53f0\u4e0a\u8fd0\u884c\u7684\u8fd9\u79cd\u98ce\u9669\uff0c\u8bf7\u9075\u5faa ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/#restricting-cloud-metadata-api-access"},"Kubernetes \u5b89\u5168\u5efa\u8bae"),"\uff0c\u5373\u9650\u5236\u6388\u4e88\u5b9e\u4f8b\u51ed\u8bc1\u7684\u6743\u9650\uff0c\u4f7f\u7528\u7f51\u7edc\u7b56\u7565\u9650\u5236 pod \u5bf9\u5143\u6570\u636e API \u7684\u8bbf\u95ee\uff0c\u5e76\u907f\u514d\u4f7f\u7528\u914d\u7f6e\u6570\u636e\u6765\u4f20\u9012\u5bc6\u6587\u3002"),(0,i.kt)("p",null,"\u5efa\u8bae\u4f60\u53c2\u9605\u4f60\u4f7f\u7528\u7684\u4e91\u63d0\u4f9b\u5546\u7684\u5b89\u5168\u6700\u4f73\u5b9e\u8df5\uff0c\u83b7\u53d6\u9650\u5236\u5bf9\u4e91\u5b9e\u4f8b\u5143\u6570\u636e API \u8bbf\u95ee\u7684\u5efa\u8bae\u548c\u8be6\u60c5\u3002"),(0,i.kt)("p",null,"\u8981\u83b7\u53d6\u66f4\u591a\u53c2\u8003\u8d44\u6599\uff0c\u8bf7\u53c2\u9605 MITRE ATT&CK \u77e5\u8bc6\u5e93 - ",(0,i.kt)("a",{parentName:"p",href:"https://attack.mitre.org/techniques/T1552/005/"},"\u4e0d\u5b89\u5168\u51ed\u8bc1\uff1a\u4e91\u5b9e\u4f8b\u5143\u6570\u636e API"),"\u3002"))}d.isMDXComponent=!0}}]);