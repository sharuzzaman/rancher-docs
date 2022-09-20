"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[48878],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),k=a,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||l;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},28980:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],o={title:"\u5c06 Windows \u5de5\u4f5c\u8d1f\u8f7d\u4ece RKE2 \u8fc1\u79fb\u5230 RKE2",weight:3},s=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/workload-migration-guidance",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/workload-migration-guidance",title:"\u5c06 Windows \u5de5\u4f5c\u8d1f\u8f7d\u4ece RKE2 \u8fc1\u79fb\u5230 RKE2",description:"\u6ce8\u610f\uff1aRancher Support \u7684 SLA \u4e0d\u6db5\u76d6\u672c\u6587\u6863\u7684\u5185\u5bb9\u3002\u56e0\u6b64\uff0c\u8bf7\u8c28\u614e\u7ee7\u7eed\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/workload-migration-guidance.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/workload-migration-guidance",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/workload-migration-guidance",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/workload-migration-guidance.md",tags:[],version:"current",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u5c06 Windows \u5de5\u4f5c\u8d1f\u8f7d\u4ece RKE2 \u8fc1\u79fb\u5230 RKE2",weight:3},sidebar:"tutorialSidebar",previous:{title:"Host Gateway (L2bridge) \u7684\u7f51\u7edc\u8981\u6c42",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway"},next:{title:"\u8bbe\u7f6e Cloud Provider",permalink:"/zh/pages-for-subheaders/set-up-cloud-providers"}},p={},d=[{value:"RKE1 Windows \u8c03\u5ea6",id:"rke1-windows-\u8c03\u5ea6",level:2},{value:"RKE2 Windows \u8c03\u5ea6",id:"rke2-windows-\u8c03\u5ea6",level:2},{value:"\u793a\u4f8b\u8fc1\u79fb",id:"\u793a\u4f8b\u8fc1\u79fb",level:2},{value:"\u5c06 Windows \u5de5\u4f5c\u8d1f\u8f7d\u4ece RKE1 \u8fc1\u79fb\u5230 RKE2",id:"\u5c06-windows-\u5de5\u4f5c\u8d1f\u8f7d\u4ece-rke1-\u8fc1\u79fb\u5230-rke2",level:3},{value:"RKE1 Windows \u96c6\u7fa4\u7684 Linux-Only Deployment",id:"rke1-windows-\u96c6\u7fa4\u7684-linux-only-deployment",level:3},{value:"RKE1 Windows - \u652f\u6301\u7684 Windows Server \u7248\u672c",id:"rke1-windows---\u652f\u6301\u7684-windows-server-\u7248\u672c",level:2},{value:"\u957f\u671f\u670d\u52a1\u6e20\u9053\uff08LTSC\uff09",id:"\u957f\u671f\u670d\u52a1\u6e20\u9053ltsc",level:3},{value:"\u534a\u5e74\u9891\u9053 (SAC)",id:"\u534a\u5e74\u9891\u9053-sac",level:3},{value:"RKE2 Windows - \u652f\u6301\u7684 Windows Server \u7248\u672c",id:"rke2-windows---\u652f\u6301\u7684-windows-server-\u7248\u672c",level:2},{value:"RKE2 \u4e2d\u7684\u957f\u671f\u670d\u52a1\u901a\u9053\uff08LTSC\uff09",id:"rke2-\u4e2d\u7684\u957f\u671f\u670d\u52a1\u901a\u9053ltsc",level:3},{value:"Kubernetes \u7248\u672c\u652f\u6301",id:"kubernetes-\u7248\u672c\u652f\u6301",level:2},{value:"\u5bf9\u6bd4 Rancher 2.5 \u4e0e Rancher 2.6\uff1aWindows \u96c6\u7fa4\u7684\u652f\u6301\u77e9\u9635",id:"\u5bf9\u6bd4-rancher-25-\u4e0e-rancher-26windows-\u96c6\u7fa4\u7684\u652f\u6301\u77e9\u9635",level:3},{value:"\u5bf9\u6bd4 Rancher 2.5 \u4e0e Rancher 2.6\uff1a\u652f\u6301\u7528\u4e8e\u914d\u7f6e RKE1 \u548c RKE2 Windows \u96c6\u7fa4\u7684 Kubernetes \u7248\u672c",id:"\u5bf9\u6bd4-rancher-25-\u4e0e-rancher-26\u652f\u6301\u7528\u4e8e\u914d\u7f6e-rke1-\u548c-rke2-windows-\u96c6\u7fa4\u7684-kubernetes-\u7248\u672c",level:3},{value:"\u5c06\u5de5\u4f5c\u8d1f\u8f7d\u8fc1\u79fb\u5230 RKE2 Windows \u7684\u6307\u5357",id:"\u5c06\u5de5\u4f5c\u8d1f\u8f7d\u8fc1\u79fb\u5230-rke2-windows-\u7684\u6307\u5357",level:2},{value:"Rancher 2.5 \u7684\u5c31\u5730\u5347\u7ea7",id:"rancher-25-\u7684\u5c31\u5730\u5347\u7ea7",level:3},{value:"\u5c06 Windows \u5de5\u4f5c\u8d1f\u8f7d\u8fc1\u79fb\u5230\u65b0\u7684 Rancher \u73af\u5883",id:"\u5c06-windows-\u5de5\u4f5c\u8d1f\u8f7d\u8fc1\u79fb\u5230\u65b0\u7684-rancher-\u73af\u5883",level:3}],c={toc:d};function k(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1aRancher Support \u7684 SLA \u4e0d\u6db5\u76d6\u672c\u6587\u6863\u7684\u5185\u5bb9\u3002\u56e0\u6b64\uff0c\u8bf7\u8c28\u614e\u7ee7\u7eed\u3002"),(0,l.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u5982\u4f55\u5c06 Windows \u5de5\u4f5c\u8d1f\u8f7d\u4ece RKE1 \u8fc1\u79fb\u5230 RKE2\u3002"),(0,l.kt)("h2",{id:"rke1-windows-\u8c03\u5ea6"},"RKE1 Windows \u8c03\u5ea6"),(0,l.kt)("p",null,"RKE1 Windows \u5de5\u4f5c\u8d1f\u8f7d\u662f\u57fa\u4e8e\u6c61\u70b9\u548c\u5bb9\u5fcd\u5ea6\u8c03\u5ea6\u7684\u3002"),(0,l.kt)("p",null,"RKE1 Windows \u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a Linux \u8282\u70b9\uff08\u65e0\u8bba\u5206\u914d\u4e86\u4ec0\u4e48\u89d2\u8272\uff09\u90fd\u4f1a\u6709\u4e00\u4e2a\u9ed8\u8ba4\u6c61\u70b9\uff0c\u9664\u975e\u5de5\u4f5c\u8d1f\u8f7d\u914d\u7f6e\u4e86\u5bb9\u5fcd\u5ea6\uff0c\u5426\u5219\u8be5\u6c61\u70b9\u4f1a\u963b\u6b62\u5de5\u4f5c\u8d1f\u8f7d\u8c03\u5ea6\u5230\u8282\u70b9\u4e0a\u3002\u8fd9\u662f RKE1 Windows \u96c6\u7fa4\u7684\u4e00\u4e2a\u4e3b\u8981\u7279\u6027\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u4ec5\u8fd0\u884c Windows \u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 RKE1 Linux \u8282\u70b9 ",(0,l.kt)("inlineCode",{parentName:"li"},"NoSchedule")," \u6c61\u70b9\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: v1\nkind: Node\nspec:\n  ...\n  taints:\n  - effect: NoSchedule\n    key: cattle.io/os\n    value: linux\n")),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RKE1 Linux ",(0,l.kt)("inlineCode",{parentName:"li"},"NoSchedule")," \u5bf9\u5de5\u4f5c\u8d1f\u8f7d\u7684\u5bb9\u5fcd\u5ea6")),(0,l.kt)("p",null,"\u4ee5\u4e0b\u5bb9\u5fcd\u5ea6\u5141\u8bb8\u5c06\u6700\u7ec8\u7528\u6237\u7684\u5de5\u4f5c\u8d1f\u8f7d\u8c03\u5ea6\u5230 RKE1 Windows \u96c6\u7fa4\u4e2d\u7684\u4efb\u4f55 Linux \u8282\u70b9\u4e0a\u3002\u8fd9\u4e9b\u5bb9\u5fcd\u5ea6\u7528\u4e8e\u6838\u5fc3\u7684 Rancher \u670d\u52a1\u548c\u5de5\u4f5c\u8d1f\u8f7d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: apps/v1\nkind: Deployment\nspec:\n  ...\n  template:\n    ...\n    spec:\n      tolerations:\n      - effect: NoSchedule\n        key: cattle.io/os\n        operator: Equal\n        value: linux\n")),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6839\u636e\u6700\u4f73\u5b9e\u8df5\uff0c\u5728 Linux \u8282\u70b9\u4e0a\u8fd0\u884c\u7684\u4efb\u4f55\u6700\u7ec8\u7528\u6237\u5de5\u4f5c\u8d1f\u8f7d\u90fd\u5c06\u4ec5\u8c03\u5ea6\u5230\u5177\u6709 worker \u89d2\u8272\u7684\u8282\u70b9\u4e0a\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'apiVersion: apps/v1\nkind: Deployment\nspec:\n  ...\n  template:\n    ...\n    spec:\n      tolerations:\n      - effect: NoSchedule\n        key: cattle.io/os\n        operator: Equal\n        value: linux\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n          - preference:\n              matchExpressions:\n              - key: node-role.kubernetes.io/worker\n                operator: In\n                values:\n                - "true"\n            weight: 100\n      ...\n')),(0,l.kt)("h2",{id:"rke2-windows-\u8c03\u5ea6"},"RKE2 Windows \u8c03\u5ea6"),(0,l.kt)("p",null,"\u6839\u636e\u5bf9\u6df7\u5408\u5de5\u4f5c\u8d1f\u8f7d\u652f\u6301\u7684\u53cd\u9988\u548c\u8bf7\u6c42\uff0cRKE2 Windows \u9ed8\u8ba4\u652f\u6301 Linux \u548c Windows \u5de5\u4f5c\u8d1f\u8f7d\u3002RKE2 \u8c03\u5ea6\u9ed8\u8ba4\u4f9d\u8d56\u8282\u70b9\u9009\u62e9\u5668\u3002\u8fd9\u662f\u4e0d\u540c\u4e8e RKE1 \u7684\u4e00\u4e2a\u663e\u7740\u53d8\u5316\uff0c\u56e0\u4e3a RKE2 \u4e2d\u6ca1\u6709\u5305\u542b\u6c61\u70b9\u548c\u5bb9\u5fcd\u3002\u8282\u70b9\u9009\u62e9\u5668\u662f RKE1 Windows \u96c6\u7fa4\u7684\u5173\u952e\u90e8\u5206\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4f60\u8f7b\u677e\u8fc1\u79fb\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b\u8fc1\u79fb"},"\u793a\u4f8b\u8fc1\u79fb"),(0,l.kt)("h3",{id:"\u5c06-windows-\u5de5\u4f5c\u8d1f\u8f7d\u4ece-rke1-\u8fc1\u79fb\u5230-rke2"},"\u5c06 Windows \u5de5\u4f5c\u8d1f\u8f7d\u4ece RKE1 \u8fc1\u79fb\u5230 RKE2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fc1\u79fb\u524d\u7684 RKE1 Windows Deployment\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nspec:\n  ...\n  template:\n    ...\n    spec:\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            nodeSelectorTerms:\n            - matchExpressions:\n              - key: kubernetes.io/os\n                operator: NotIn\n                values:\n                - linux\n")),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"nodeAffinity")," \u8fc1\u79fb\u540e\u7684 RKE2 Windows Deployment\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\n...\nspec:\n  ...\n  template:\n    ...\n    spec:\n      ...\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            nodeSelectorTerms:\n              - matchExpressions:\n                  - key: kubernetes.io/os\n                    operator: In\n                    values:\n                      - windows\n")),(0,l.kt)("h3",{id:"rke1-windows-\u96c6\u7fa4\u7684-linux-only-deployment"},"RKE1 Windows \u96c6\u7fa4\u7684 Linux-Only Deployment"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u91cd\u8981\u63d0\u793a"),"\uff1a\u5728\u5229\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"nodeSelector")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"nodeAffinity")," \u65f6\uff0c\u8bf7\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u540c\u65f6\u6307\u5b9a\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"nodeSelector")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"nodeAffinity"),"\uff0c\u5219\u5fc5\u987b\u6ee1\u8db3\u8fd9\u4e24\u4e2a\u6761\u4ef6\u624d\u80fd\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"Pod")," \u8c03\u5ea6\u5230\u8282\u70b9\u4e0a\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u5b9a\u4e86\u4e0e\u5355\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"nodeSelectorTerms")," \u5173\u8054\u7684\u591a\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"matchExpressions"),"\uff0c\u5219\u53ea\u6709\u5f53\u6240\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"matchExpressions")," \u90fd\u7b26\u5408\u8981\u6c42\u65f6\u624d\u4f1a\u8c03\u5ea6 ",(0,l.kt)("inlineCode",{parentName:"li"},"Pod"),"\u3002"))),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fc1\u79fb\u524d\u7684 RKE1 Windows \u96c6\u7fa4 Linux-only Deployment\uff08\u9488\u5bf9 RKE1 Linux Worker \u8282\u70b9\uff09\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'apiVersion: apps/v1\nkind: Deployment\nspec:\n  ...\n  template:\n    ...\n    spec:\n      tolerations:\n      - effect: NoSchedule\n        key: cattle.io/os\n        operator: Equal\n        value: linux\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n          - weight: 100\n            preference:\n              matchExpressions:\n              - key: node-role.kubernetes.io/worker\n                operator: In\n                values:\n                - "true"\n\n')),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"nodeSelector")," \u8fc1\u79fb\u540e\u7684 RKE2 \u6df7\u5408\u96c6\u7fa4 Linux-only Deployment\uff08\u9488\u5bf9 RKE2 Linux Worker \u8282\u70b9\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'apiVersion: apps/v1\nkind: Deployment\nspec:\n  ...\n  template:\n    ...\n    spec:\n      nodeSelector:\n        kubernetes.io/os: "linux"\n        node-role.kubernetes.io/worker: "true"\n')),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"nodeAffinity")," \u8fc1\u79fb\u540e\u7684 RKE2 \u6df7\u5408\u96c6\u7fa4 Linux-only Deployment\uff08\u9488\u5bf9 RKE2 Linux Worker \u8282\u70b9\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nspec:\n ...\n template:\n   ...\n   spec:\n      affinity:\n       nodeAffinity:\n         requiredDuringSchedulingIgnoredDuringExecution:\n         - weight: 100\n           preference:\n             matchExpressions:\n             - key: node-role.kubernetes.io/worker\n               operator: In\n               values:\n               - "true"\n           nodeSelectorTerms:\n             - matchExpressions:\n                 - key: kubernetes.io/os\n                   operator: In\n                   values:\n                     - linux\n')),(0,l.kt)("h2",{id:"rke1-windows---\u652f\u6301\u7684-windows-server-\u7248\u672c"},"RKE1 Windows - \u652f\u6301\u7684 Windows Server \u7248\u672c"),(0,l.kt)("h3",{id:"\u957f\u671f\u670d\u52a1\u6e20\u9053ltsc"},"\u957f\u671f\u670d\u52a1\u6e20\u9053\uff08LTSC\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Windows Server 2019 LTSC ","\u2705"," \u5c06\u4e8e 2024 \u5e74 1 \u6708 9 \u65e5 \u8fbe\u5230 Mainstream EOL \u5e76\u4e8e 2029 \u5e74 1 \u6708 9 \u65e5 \u8fbe\u5230 Extended EOL")),(0,l.kt)("h3",{id:"\u534a\u5e74\u9891\u9053-sac"},"\u534a\u5e74\u9891\u9053 (SAC)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Windows Server 20H2 SAC ","\u274c"," 2022 \u5e74 8 \u6708 9 \u65e5\u5df2\u8fbe\u5230 EOL"),(0,l.kt)("li",{parentName:"ul"},"Windows Server 2004 SAC ","\u274c"," 2021 \u5e74 12 \u6708 14 \u65e5\u5df2\u8fbe\u5230 EOL"),(0,l.kt)("li",{parentName:"ul"},"Windows Server 1909 SAC ","\u274c"," 2021 \u5e74 5 \u6708 11 \u65e5\u5df2\u8fbe\u5230 EOL"),(0,l.kt)("li",{parentName:"ul"},"Windows Server 1903 SAC ","\u274c"," 2020 \u5e74 12 \u6708 8 \u65e5\u5df2\u8fbe\u5230 EOL"),(0,l.kt)("li",{parentName:"ul"},"Windows Server 1809 SAC ","\u274c"," 2020 \u5e74 11 \u6708 10 \u65e5\u5df2\u8fbe\u5230 EOL")),(0,l.kt)("h2",{id:"rke2-windows---\u652f\u6301\u7684-windows-server-\u7248\u672c"},"RKE2 Windows - \u652f\u6301\u7684 Windows Server \u7248\u672c"),(0,l.kt)("h3",{id:"rke2-\u4e2d\u7684\u957f\u671f\u670d\u52a1\u901a\u9053ltsc"},"RKE2 \u4e2d\u7684\u957f\u671f\u670d\u52a1\u901a\u9053\uff08LTSC\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Windows Server 2019 LTSC ","\u2705"," \u5c06\u4e8e 2024 \u5e74 1 \u6708 9 \u65e5 \u8fbe\u5230 Mainstream EOL \u5e76\u4e8e 2029 \u5e74 1 \u6708 9 \u65e5 \u8fbe\u5230 Extended EOL"),(0,l.kt)("li",{parentName:"ul"},"Windows Server 2022 LTSC ","\u2705"," \u5c06\u4e8e 2026 \u5e74 10 \u6708 13 \u65e5\u8fbe\u5230 Mainstream EOL\uff0c\u5e76\u4e8e 2031 \u5e74 10 \u6708 13 \u65e5\u8fbe\u5230 Extended EOL")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1aRKE2 \u4e0d\u652f\u6301 SAC\u3002")),(0,l.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b\u53c2\u8003\u8d44\u6599\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/lifecycle/products/windows-server"},"Windows Server SAC \u751f\u547d\u5468\u671f"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/lifecycle/products/windows-server-2022"},"Windows Server 2022 LTSC \u751f\u547d\u5468\u671f"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/lifecycle/products/windows-server-2019"},"Windows Server 2019 LTSC \u751f\u547d\u5468\u671f")))),(0,l.kt)("h2",{id:"kubernetes-\u7248\u672c\u652f\u6301"},"Kubernetes \u7248\u672c\u652f\u6301"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6839\u636e ",(0,l.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-6-7/"},"Rancher 2.6.7 \u652f\u6301\u77e9\u9635"),"\uff0c\u4e0b\u9762\u5217\u51fa\u7684\u6240\u6709\u7248\u672c\u5747\u652f\u6301 SLA\u3002\u672a\u5217\u51fa\u7684\u7248\u672c\u90fd\u89c6\u4e3a\u4e3a\u5df2\u8fbe\u5230 EOL \u4e14\u4e0d\u53d7 SUSE SLA \u652f\u6301\u3002")),(0,l.kt)("h3",{id:"\u5bf9\u6bd4-rancher-25-\u4e0e-rancher-26windows-\u96c6\u7fa4\u7684\u652f\u6301\u77e9\u9635"},"\u5bf9\u6bd4 Rancher 2.5 \u4e0e Rancher 2.6\uff1aWindows \u96c6\u7fa4\u7684\u652f\u6301\u77e9\u9635"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5bf9\u6bd4 RKE1 \u4e0e RKE2\uff1aWindows \u96c6\u7fa4\u652f\u6301\u7684 Kubernetes \u7248\u672c"),"\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Kubernetes \u7248\u672c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"RKE1"),(0,l.kt)("th",{parentName:"tr",align:"center"},"RKE2"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.18"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.19"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.20"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.21"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.22"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.23"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.24"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.25+"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713")))),(0,l.kt)("h3",{id:"\u5bf9\u6bd4-rancher-25-\u4e0e-rancher-26\u652f\u6301\u7528\u4e8e\u914d\u7f6e-rke1-\u548c-rke2-windows-\u96c6\u7fa4\u7684-kubernetes-\u7248\u672c"},"\u5bf9\u6bd4 Rancher 2.5 \u4e0e Rancher 2.6\uff1a\u652f\u6301\u7528\u4e8e\u914d\u7f6e RKE1 \u548c RKE2 Windows \u96c6\u7fa4\u7684 Kubernetes \u7248\u672c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Rancher \u7248\u672c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Kubernetes \u7248\u672c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"RKE1"),(0,l.kt)("th",{parentName:"tr",align:"center"},"RKE2"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"2.5 - RKE1 \u914d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1.18 1.19 1.20"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"2.6 - RKE1 \u914d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1.18 1.19 1.20 1.21 1.22"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"2.6 - RKE2 \u914d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1.22 1.23 1.24 1.25+"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2713")))),(0,l.kt)("h2",{id:"\u5c06\u5de5\u4f5c\u8d1f\u8f7d\u8fc1\u79fb\u5230-rke2-windows-\u7684\u6307\u5357"},"\u5c06\u5de5\u4f5c\u8d1f\u8f7d\u8fc1\u79fb\u5230 RKE2 Windows \u7684\u6307\u5357"),(0,l.kt)("p",null,"\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"#%E5%AF%B9%E6%AF%94-rancher-25-%E4%B8%8E-rancher-26windows-%E9%9B%86%E7%BE%A4%E7%9A%84%E6%94%AF%E6%8C%81%E7%9F%A9%E9%98%B5"},"\u5bf9\u6bd4 Rancher 2.5 \u4e0e Rancher 2.6\uff1aWindows \u96c6\u7fa4\u7684\u652f\u6301\u77e9\u9635"),"\u548c",(0,l.kt)("a",{parentName:"p",href:"#%E5%AF%B9%E6%AF%94-rancher-25-%E4%B8%8E-rancher-26%E6%94%AF%E6%8C%81%E7%94%A8%E4%BA%8E%E9%85%8D%E7%BD%AE-rke1-%E5%92%8C-rke2-windows-%E9%9B%86%E7%BE%A4%E7%9A%84-kubernetes-%E7%89%88%E6%9C%AC"},"\u5bf9\u6bd4 Rancher 2.5 \u4e0e Rancher 2.6\uff1a\u652f\u6301\u7528\u4e8e\u914d\u7f6e RKE1 \u548c RKE2 Windows \u96c6\u7fa4\u7684 Kubernetes \u7248\u672c"),"\u4e2d\u7684\u8868\u683c\uff0c\u4f60\u4f1a\u53d1\u73b0 RKE1 \u548c RKE2 \u7684 Kubernetes 1.22 \u7248\u672c\u53d1\u751f\u4e86\u91cd\u53e0\u3002\u56e0\u6b64\uff0c\u5f53\u9075\u5faa Rancher \u63a8\u8350\u7684\u65b9\u6cd5\u65f6\uff0c\u8fd9\u5c06\u662f\u8fc1\u79fb RKE1 Windows \u5de5\u4f5c\u8d1f\u8f7d\u6240\u9700\u7684\u57fa\u672c\u7248\u672c\u3002"),(0,l.kt)("h3",{id:"rancher-25-\u7684\u5c31\u5730\u5347\u7ea7"},"Rancher 2.5 \u7684\u5c31\u5730\u5347\u7ea7"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06 Rancher \u7248\u672c\u5347\u7ea7\u5230 2.6.5+\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6700\u65b0\u7684\u53ef\u7528\u8865\u4e01\u7248\u672c\u5c06 RKE1 Windows \u4e0b\u6e38\u96c6\u7fa4\u5347\u7ea7\u5230 RKE1 v1.22\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7 RKE1 Windows \u96c6\u7fa4\u6240\u5728\u7684\u5339\u914d\u8865\u4e01\u7248\u672c\uff0c\u4f7f\u7528 RKE2 v1.22 \u914d\u7f6e\u65b0\u7684 RKE2 Windows \u4e0b\u6e38\u96c6\u7fa4\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5f00\u59cb\u5c06 Windows \u5de5\u4f5c\u8d1f\u8f7d\u4ece RKE1 \u8fc1\u79fb\u5230 RKE2 \u96c6\u7fa4\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c\u9a8c\u8bc1\u6d4b\u8bd5\uff0c\u786e\u4fdd\u5728\u5c06\u5e94\u7528\u7a0b\u5e8f\u4ece RKE1 \u8fc1\u79fb\u5230 RKE2 \u65f6\u6ca1\u6709\u4e22\u5931\u6216\u66f4\u6539\u529f\u80fd\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u6d4b\u8bd5\u6210\u529f\u540e\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u5c06 RKE2 1.22.x \u96c6\u7fa4\u5347\u7ea7\u5230\u65b0\u7684\u6b21\u8981\u7248\u672c\uff0c\u4f8b\u5982 1.23 \u6216 1.24\u3002")),(0,l.kt)("h3",{id:"\u5c06-windows-\u5de5\u4f5c\u8d1f\u8f7d\u8fc1\u79fb\u5230\u65b0\u7684-rancher-\u73af\u5883"},"\u5c06 Windows \u5de5\u4f5c\u8d1f\u8f7d\u8fc1\u79fb\u5230\u65b0\u7684 Rancher \u73af\u5883"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u91cd\u8981\u63d0\u793a"),"\uff1a\u8981\u6267\u884c\u4ee5\u4e0b\u4efb\u4e00\u9009\u9879\uff0c\u4f60\u9700\u8981\u4f7f\u7528 Rancher 2.6.5 \u6216\u66f4\u9ad8\u7248\u672c\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e3a RKE1 \u548c RKE2 \u4f7f\u7528\u5339\u914d\u7684 Kubernetes \u8865\u4e01\u7248\u672c\u65f6"),"\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7 RKE1 Windows \u96c6\u7fa4\u6240\u5728\u7684\u5339\u914d\u8865\u4e01\u7248\u672c\uff0c\u4f7f\u7528 RKE2 v1.22 \u914d\u7f6e\u65b0\u7684 RKE2 Windows \u4e0b\u6e38\u96c6\u7fa4\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5f00\u59cb\u5c06 Windows \u5de5\u4f5c\u8d1f\u8f7d\u4ece RKE1 \u8fc1\u79fb\u5230 RKE2 \u96c6\u7fa4\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c\u9a8c\u8bc1\u6d4b\u8bd5\uff0c\u786e\u4fdd\u5728\u5c06\u5e94\u7528\u7a0b\u5e8f\u4ece RKE1 \u8fc1\u79fb\u5230 RKE2 \u65f6\u6ca1\u6709\u4e22\u5931\u6216\u66f4\u6539\u529f\u80fd\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u6d4b\u8bd5\u6210\u529f\u540e\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u5c06 RKE2 1.22.x \u96c6\u7fa4\u5347\u7ea7\u5230\u65b0\u7684\u6b21\u8981\u7248\u672c\uff0c\u4f8b\u5982 1.23 \u6216 1.24\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e3a RKE2 \u4f7f\u7528\u66f4\u65b0\u7684 Kubernetes \u8865\u4e01\u7248\u672c\u65f6"),"\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 RKE2 v1.23 \u6216 v1.24 \u914d\u7f6e\u65b0\u7684 RKE2 Windows \u4e0b\u6e38\u96c6\u7fa4\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5f00\u59cb\u5c06 Windows \u5de5\u4f5c\u8d1f\u8f7d\u4ece RKE1 \u8fc1\u79fb\u5230 RKE2 \u96c6\u7fa4\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c\u9a8c\u8bc1\u6d4b\u8bd5\uff0c\u786e\u4fdd\u5728\u5c06\u5e94\u7528\u7a0b\u5e8f\u4ece RKE1 \u8fc1\u79fb\u5230 RKE2 \u65f6\u6ca1\u6709\u4e22\u5931\u6216\u66f4\u6539\u529f\u80fd\u3002")))}k.isMDXComponent=!0}}]);