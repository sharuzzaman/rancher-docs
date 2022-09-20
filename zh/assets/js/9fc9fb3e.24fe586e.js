"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[75299],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||u;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,o=new Array(u);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<u;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},64392:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(87462),a=r(63366),u=(r(67294),r(3905)),o=["components"],s={title:"Host Gateway (L2bridge) \u7684\u7f51\u7edc\u8981\u6c42",weight:1e3},i=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway",title:"Host Gateway (L2bridge) \u7684\u7f51\u7edc\u8981\u6c42",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e\u4f7f\u7528 Host Gateway (L2bridge) \u6a21\u5f0f\u7684\u81ea\u5b9a\u4e49 Windows \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway.md",tags:[],version:"current",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Host Gateway (L2bridge) \u7684\u7f51\u7edc\u8981\u6c42",weight:1e3},sidebar:"tutorialSidebar",previous:{title:"Windows \u548c Linux \u96c6\u7fa4\u7684\u529f\u80fd\u5947\u5076\u4e00\u81f4\u6027",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/windows-linux-cluster-feature-parity"},next:{title:"\u5c06 Windows \u5de5\u4f5c\u8d1f\u8f7d\u4ece RKE2 \u8fc1\u79fb\u5230 RKE2",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/workload-migration-guidance"}},c={},d=[{value:"\u7981\u7528\u79c1\u6709 IP \u5730\u5740\u68c0\u67e5",id:"\u7981\u7528\u79c1\u6709-ip-\u5730\u5740\u68c0\u67e5",level:3},{value:"\u4e91\u6258\u7ba1\u865a\u62df\u673a\u7684\u8def\u7531\u914d\u7f6e",id:"\u4e91\u6258\u7ba1\u865a\u62df\u673a\u7684\u8def\u7531\u914d\u7f6e",level:3}],p={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,u.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e\u4f7f\u7528 ",(0,u.kt)("em",{parentName:"p"},"Host Gateway (L2bridge)")," \u6a21\u5f0f\u7684\u81ea\u5b9a\u4e49 Windows \u96c6\u7fa4\u3002"),(0,u.kt)("h3",{id:"\u7981\u7528\u79c1\u6709-ip-\u5730\u5740\u68c0\u67e5"},"\u7981\u7528\u79c1\u6709 IP \u5730\u5740\u68c0\u67e5"),(0,u.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 ",(0,u.kt)("em",{parentName:"p"},"Host Gateway (L2bridge)")," \u6a21\u5f0f\uff0c\u5e76\u5c06\u8282\u70b9\u6258\u7ba1\u5728\u4e0b\u9762\u5217\u51fa\u7684\u4e91\u670d\u52a1\u4e0a\uff0c\u5219\u5fc5\u987b\u5728\u542f\u52a8\u65f6\u7981\u7528 Linux \u6216 Windows \u4e3b\u673a\u7684\u79c1\u6709 IP \u5730\u5740\u68c0\u67e5\u3002\u8981\u4e3a\u6bcf\u4e2a\u8282\u70b9\u7981\u7528\u6b64\u68c0\u67e5\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u5404\u4e2a\u4e91\u670d\u52a1\u5bf9\u5e94\u7684\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"\u670d\u52a1"),(0,u.kt)("th",{parentName:"tr",align:null},"\u7981\u7528\u79c1\u6709 IP \u5730\u5740\u68c0\u67e5\u7684\u8bf4\u660e"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"Amazon EC2"),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html#EIP_Disable_SrcDestCheck"},"\u7981\u7528\u6e90/\u76ee\u6807\u68c0\u67e5"))),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"Google GCE"),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("a",{parentName:"td",href:"https://cloud.google.com/vpc/docs/using-routes#canipforward"},"\u4e3a\u5b9e\u4f8b\u542f\u7528 IP \u8f6c\u53d1"),"\uff08\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cVM \u65e0\u6cd5\u8f6c\u53d1\u7531\u53e6\u4e00\u4e2a VM \u53d1\u8d77\u7684\u6570\u636e\u5305\uff09")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"Azure VM"),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface#enable-or-disable-ip-forwarding"},"\u542f\u7528\u6216\u7981\u7528 IP \u8f6c\u53d1"))))),(0,u.kt)("h3",{id:"\u4e91\u6258\u7ba1\u865a\u62df\u673a\u7684\u8def\u7531\u914d\u7f6e"},"\u4e91\u6258\u7ba1\u865a\u62df\u673a\u7684\u8def\u7531\u914d\u7f6e"),(0,u.kt)("p",null,"\u5982\u679c\u662f\u4f7f\u7528 Flannel \u7684 ",(0,u.kt)("a",{parentName:"p",href:"https://github.com/coreos/flannel/blob/master/Documentation/backends.md#host-gw"},(0,u.kt)("strong",{parentName:"a"},"Host Gateway (L2bridge)"))," \u540e\u7aef\uff0c\u540c\u4e00\u8282\u70b9\u4e0a\u7684\u6240\u6709\u5bb9\u5668\u90fd\u5c5e\u4e8e\u79c1\u6709\u5b50\u7f51\uff0c\u6d41\u91cf\u901a\u8fc7\u4e3b\u673a\u7f51\u7edc\u4ece\u4e00\u4e2a\u8282\u70b9\u4e0a\u7684\u5b50\u7f51\u8def\u7531\u5230\u5728\u53e6\u4e00\u4e2a\u8282\u70b9\u4e0a\u7684\u5b50\u7f51\u3002"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u5728 AWS\u3001\u865a\u62df\u5316\u96c6\u7fa4\u6216\u88f8\u673a\u670d\u52a1\u5668\u4e0a\u914d\u7f6e worker \u8282\u70b9\u65f6\uff0c\u8bf7\u786e\u4fdd\u5b83\u4eec\u5c5e\u4e8e\u540c\u4e00\u4e2a\u7b2c 2 \u5c42\u5b50\u7f51\u3002\u5982\u679c\u8282\u70b9\u4e0d\u5c5e\u4e8e\u540c\u4e00\u4e2a\u7b2c 2 \u5c42\u5b50\u7f51\uff0c",(0,u.kt)("inlineCode",{parentName:"p"},"host-gw")," \u7f51\u7edc\u5c06\u4e0d\u8d77\u4f5c\u7528\u3002")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u5728 GCE \u6216 Azure \u4e0a\u914d\u7f6e worker \u8282\u70b9\u65f6\uff0c\u8282\u70b9\u4e0d\u5728\u540c\u4e00\u4e2a\u7b2c 2 \u5c42\u5b50\u7f51\u4e0a\u3002GCE \u548c Azure \u4e0a\u7684\u8282\u70b9\u5c5e\u4e8e\u53ef\u8def\u7531\u7684\u7b2c 3 \u5c42\u7f51\u7edc\u3002\u6309\u7167\u4ee5\u4e0b\u8bf4\u660e\u914d\u7f6e GCE \u548c Azure\uff0c\u4ee5\u4fbf\u4e91\u7f51\u7edc\u77e5\u9053\u5982\u4f55\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u4f20\u9001\u4e3b\u673a\u5b50\u7f51\u3002"))),(0,u.kt)("p",null,"\u8981\u5728 GCE \u6216 Azure \u4e0a\u914d\u7f6e\u4e3b\u673a\u5b50\u7f51\u8def\u7531\uff0c\u9996\u5148\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4ee5\u627e\u51fa\u6bcf\u4e2a worker \u8282\u70b9\u4e0a\u7684\u4e3b\u673a\u5b50\u7f51\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes -o custom-columns=nodeName:.metadata.name,nodeIP:status.addresses[0].address,routeDestination:.spec.podCIDR\n")),(0,u.kt)("p",null,"\u7136\u540e\u6309\u7167\u5404\u4e2a\u4e91\u63d0\u4f9b\u5546\u7684\u8bf4\u660e\uff0c\u4e3a\u6bcf\u4e2a\u8282\u70b9\u914d\u7f6e\u8def\u7531\u89c4\u5219\uff1a"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"\u670d\u52a1"),(0,u.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"Google GCE"),(0,u.kt)("td",{parentName:"tr",align:null},"\u4e3a\u6bcf\u4e2a\u8282\u70b9\u6dfb\u52a0\u9759\u6001\u8def\u7531\uff1a",(0,u.kt)("a",{parentName:"td",href:"https://cloud.google.com/vpc/docs/using-routes#addingroute"},"\u6dfb\u52a0\u9759\u6001\u8def\u7531"),"\u3002")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"Azure VM"),(0,u.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u4e00\u4e2a\u8def\u7531\u8868\uff1a",(0,u.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview#user-defined"},"\u81ea\u5b9a\u4e49\u8def\u7531\uff1a\u7528\u6237\u5b9a\u4e49"),"\u3002")))))}m.isMDXComponent=!0}}]);