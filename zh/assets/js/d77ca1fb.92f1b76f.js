"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[50796],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58048:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"\u5728 Amazon EC2 \u4e2d\u914d\u7f6e\u8282\u70b9",weight:3},s=void 0,u={unversionedId:"how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2",id:"how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2",title:"\u5728 Amazon EC2 \u4e2d\u914d\u7f6e\u8282\u70b9",description:"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u4e00\u79cd\u4e3a Rancher Mangement Server \u521b\u5efa Linux \u8282\u70b9\u7684\u65b9\u6cd5\u3002\u8fd9\u4e9b\u8282\u70b9\u5c06\u6ee1\u8db3\u64cd\u4f5c\u7cfb\u7edf\u3001Docker\u3001\u786c\u4ef6\u548c\u7f51\u7edc\u7684\u8981\u6c42\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2.md",sourceDirName:"how-to-guides/new-user-guides/infrastructure-setup",slug:"/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2",permalink:"/zh/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2.md",tags:[],version:"current",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u5728 Amazon EC2 \u4e2d\u914d\u7f6e\u8282\u70b9",weight:3},sidebar:"tutorialSidebar",previous:{title:"\u4e3a\u9ad8\u53ef\u7528 RKE2 Kubernetes \u96c6\u7fa4\u8bbe\u7f6e\u57fa\u7840\u8bbe\u65bd",permalink:"/zh/how-to-guides/new-user-guides/infrastructure-setup/ha-rke2-kubernetes-cluster"},next:{title:"\u5728 Amazon RDS \u4e2d\u521b\u5efa MySQL \u6570\u636e\u5e93",permalink:"/zh/how-to-guides/new-user-guides/infrastructure-setup/mysql-database-in-amazon-rds"}},p={},c=[{value:"1. \u51c6\u5907\u5de5\u4f5c\uff08\u53ef\u9009\uff09",id:"1-\u51c6\u5907\u5de5\u4f5c\u53ef\u9009",level:3},{value:"2. \u914d\u7f6e\u5b9e\u4f8b",id:"2-\u914d\u7f6e\u5b9e\u4f8b",level:3},{value:"3. \u4e3a RKE Kubernetes \u96c6\u7fa4\u8282\u70b9\u5b89\u88c5 Docker \u5e76\u521b\u5efa\u7528\u6237",id:"3-\u4e3a-rke-kubernetes-\u96c6\u7fa4\u8282\u70b9\u5b89\u88c5-docker-\u5e76\u521b\u5efa\u7528\u6237",level:3},{value:"RKE Kubernetes \u96c6\u7fa4\u8282\u70b9\u7684\u540e\u7eed\u6b65\u9aa4",id:"rke-kubernetes-\u96c6\u7fa4\u8282\u70b9\u7684\u540e\u7eed\u6b65\u9aa4",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u4e00\u79cd\u4e3a Rancher Mangement Server \u521b\u5efa Linux \u8282\u70b9\u7684\u65b9\u6cd5\u3002\u8fd9\u4e9b\u8282\u70b9\u5c06\u6ee1\u8db3",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/installation-requirements"},"\u64cd\u4f5c\u7cfb\u7edf\u3001Docker\u3001\u786c\u4ef6\u548c\u7f51\u7edc\u7684\u8981\u6c42"),"\u3002"),(0,o.kt)("p",null,"\u5982\u679c Rancher Server \u5b89\u88c5\u5728 RKE Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u4f60\u9700\u8981\u914d\u7f6e\u4e09\u4e2a\u5b9e\u4f8b\u3002"),(0,o.kt)("p",null,"\u5982\u679c Rancher Server \u5b89\u88c5\u5728 K3s Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u4f60\u53ea\u9700\u8981\u914d\u7f6e\u4e24\u4e2a\u5b9e\u4f8b\u3002"),(0,o.kt)("p",null,"\u5982\u679c Rancher Server \u5b89\u88c5\u5728\u5355\u4e2a Docker \u5bb9\u5668\u4e2d\uff0c\u4f60\u53ea\u9700\u8981\u914d\u7f6e\u4e00\u4e2a\u5b9e\u4f8b\u3002"),(0,o.kt)("h3",{id:"1-\u51c6\u5907\u5de5\u4f5c\u53ef\u9009"},"1. \u51c6\u5907\u5de5\u4f5c\uff08\u53ef\u9009\uff09"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa IAM \u89d2\u8272"),"\uff1a\u8981\u5141\u8bb8 Rancher \u64cd\u4f5c AWS \u8d44\u6e90\uff0c\u4f8b\u5982\u521b\u5efa\u65b0\u5b58\u50a8\u6216\u65b0\u8282\u70b9\uff0c\u4f60\u9700\u8981\u5c06 Amazon \u914d\u7f6e\u4e3a\u4e91\u63d0\u4f9b\u5546\u3002\u8981\u5728 EC2 \u4e0a\u8bbe\u7f6e\u4e91\u63d0\u4f9b\u5546\uff0c\u4f60\u9700\u8981\u8fdb\u884c\u51e0\u4e2a\u64cd\u4f5c\uff0c\u5176\u4e2d\u5305\u62ec\u4e3a Rancher Server \u8282\u70b9\u8bbe\u7f6e IAM \u89d2\u8272\u3002\u6709\u5173\u8bbe\u7f6e\u4e91\u63d0\u4f9b\u5546\u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/set-up-cloud-providers"},"\u672c\u9875"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa\u5b89\u5168\u7ec4"),"\uff1a\u6211\u4eec\u5efa\u8bae\u4e3a Rancher \u8282\u70b9\u8bbe\u7f6e\u4e00\u4e2a\u7b26\u5408 ",(0,o.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/installation-requirements#%E7%AB%AF%E5%8F%A3%E8%A6%81%E6%B1%82"},"Rancher \u8282\u70b9\u7aef\u53e3\u8981\u6c42"),"\u7684\u5b89\u5168\u7ec4\u3002")),(0,o.kt)("h3",{id:"2-\u914d\u7f6e\u5b9e\u4f8b"},"2. \u914d\u7f6e\u5b9e\u4f8b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u767b\u5f55\u5230 ",(0,o.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/ec2/"},"Amazon AWS EC2 \u63a7\u5236\u53f0"),"\u3002\u7531\u4e8e Rancher Management Server \u7684\u6240\u6709\u57fa\u7840\u8bbe\u65bd\u90fd\u9700\u8981\u4f4d\u4e8e\u540c\u4e00\u533a\u57df\uff0c\u56e0\u6b64\uff0c\u8bf7\u52a1\u5fc5\u8bb0\u4e0b\u521b\u5efa EC2 \u5b9e\u4f8b\uff08Linux \u8282\u70b9\uff09\u7684",(0,o.kt)("strong",{parentName:"li"},"\u533a\u57df"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u9762\u677f\u4e2d\uff0c\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5b9e\u4f8b"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u542f\u52a8\u793a\u4f8b"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 1\uff1a\u9009\u62e9 Amazon Machine Image (AMI)")," \u4e2d\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"ami-0d1cd67c26f5fca19 (64-bit x86)")," \u6765\u4f7f\u7528 Ubuntu 18.04 \u4f5c\u4e3a Linux \u64cd\u4f5c\u7cfb\u7edf\u3002\u53bb\u5230 Ubuntu AMI \u5e76\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u9009\u62e9"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 2\uff1a\u9009\u62e9\u5b9e\u4f8b\u7c7b\u578b"),"\u4e2d\uff0c\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"li"},"t2.medium"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u4e0b\u4e00\u6b65\uff1a\u914d\u7f6e\u5b9e\u4f8b\u8be6\u7ec6\u4fe1\u606f"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u5b9e\u4f8b\u6570\u91cf"),"\u5b57\u6bb5\u4e2d\uff0c\u8f93\u5165\u5b9e\u4f8b\u6570\u91cf\u3002\u521b\u5efa\u9ad8\u53ef\u7528 K3s \u96c6\u7fa4\u4ec5\u9700\u8981\u4e24\u4e2a\u5b9e\u4f8b\uff0c\u800c\u9ad8\u53ef\u7528 RKE \u96c6\u7fa4\u5219\u9700\u8981\u4e09\u4e2a\u5b9e\u4f8b\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u5982\u679c\u4f60\u4e3a Rancher \u521b\u5efa\u4e86\u4e00\u4e2a IAM \u89d2\u8272\u6765\u64cd\u4f5c AWS \u8d44\u6e90\uff0c\u8bf7\u5728 ",(0,o.kt)("strong",{parentName:"li"},"IAM \u89d2\u8272"),"\u5b57\u6bb5\u4e2d\u9009\u62e9\u65b0 IAM \u89d2\u8272\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5206\u522b\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u4e0b\u4e00\u6b65\uff1a\u6dfb\u52a0\u5b58\u50a8"),"\uff0c",(0,o.kt)("strong",{parentName:"li"},"\u4e0b\u4e00\u6b65\uff1a\u6dfb\u52a0\u6807\u7b7e"),"\u548c",(0,o.kt)("strong",{parentName:"li"},"\u4e0b\u4e00\u6b65\uff1a\u914d\u7f6e\u5b89\u5168\u7ec4"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 6\uff1a\u914d\u7f6e\u5b89\u5168\u7ec4"),"\u4e2d\uff0c\u9009\u62e9\u4e00\u4e2a\u7b26\u5408 Rancher \u8282\u70b9",(0,o.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/installation-requirements#%E7%AB%AF%E5%8F%A3%E8%A6%81%E6%B1%82"},"\u7aef\u53e3\u8981\u6c42"),"\u7684\u5b89\u5168\u7ec4\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u67e5\u770b\u5e76\u542f\u52a8"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u542f\u52a8"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4e00\u4e2a\u65b0\u7684\u6216\u73b0\u6709\u7684\u5bc6\u94a5\u5bf9\uff0c\u7528\u4e8e\u4e4b\u540e\u8fde\u63a5\u5230\u4f60\u7684\u5b9e\u4f8b\u3002\u5982\u679c\u4f7f\u7528\u73b0\u6709\u5bc6\u94a5\u5bf9\uff0c\u8bf7\u786e\u4fdd\u4f60\u6709\u8bbf\u95ee\u79c1\u94a5\u7684\u6743\u9650\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u542f\u52a8\u5b9e\u4f8b"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u5df2\u521b\u5efa\u6ee1\u8db3\u64cd\u4f5c\u7cfb\u7edf\u3001\u786c\u4ef6\u548c\u7f51\u7edc\u8981\u6c42\u7684 Rancher \u8282\u70b9\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u8282\u70b9\u7528\u4e8e RKE Kubernetes \u96c6\u7fa4\uff0c\u8bf7\u5728\u4e0b\u4e00\u6b65\u64cd\u4f5c\u4e2d\u4e3a\u6bcf\u4e2a\u8282\u70b9\u5b89\u88c5 Docker \u3002\u5982\u679c\u8282\u70b9\u7528\u4e8e K3s Kubernetes \u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u5f00\u59cb\u5728\u8282\u70b9\u4e0a\u5b89\u88c5 K3s \u4e86\u3002"))),(0,o.kt)("h3",{id:"3-\u4e3a-rke-kubernetes-\u96c6\u7fa4\u8282\u70b9\u5b89\u88c5-docker-\u5e76\u521b\u5efa\u7528\u6237"},"3. \u4e3a RKE Kubernetes \u96c6\u7fa4\u8282\u70b9\u5b89\u88c5 Docker \u5e76\u521b\u5efa\u7528\u6237"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728 ",(0,o.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/ec2/"},"AWS EC2 \u63a7\u5236\u53f0"),"\u4e2d\uff0c\u70b9\u51fb\u5de6\u4fa7\u9762\u677f\u4e2d\u7684",(0,o.kt)("strong",{parentName:"li"},"\u5b9e\u4f8b"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u4f60\u60f3\u8981\u5b89\u88c5 Docker \u7684\u5b9e\u4f8b\u3002\u9009\u62e9\u5b9e\u4f8b\uff0c\u5e76\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u64cd\u4f5c > \u8fde\u63a5"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6309\u7167\u5c4f\u5e55\u4e0a\u7684\u8bf4\u660e\u8fde\u63a5\u5230\u5b9e\u4f8b\u3002\u590d\u5236\u5b9e\u4f8b\u7684\u516c\u5171 DNS\u3002SSH \u8fdb\u5165\u5b9e\u4f8b\u7684\u793a\u4f8b\u547d\u4ee4\u5982\u4e0b\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo ssh -i [path-to-private-key] ubuntu@[public-DNS-of-instance]\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5b9e\u4f8b\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4f7f\u7528 Rancher \u7684\u5176\u4e2d\u4e00\u4e2a\u5b89\u88c5\u811a\u672c\u6765\u5b89\u88c5 Docker\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl https://releases.rancher.com/install-docker/18.09.sh | sh\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8fde\u63a5\u5230\u5b9e\u4f8b\u540e\uff0c\u5728\u5b9e\u4f8b\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u521b\u5efa\u7528\u6237\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo usermod -aG docker ubuntu\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u91cd\u590d\u4e0a\u8ff0\u6b65\u9aa4\uff0c\u4ee5\u786e\u4fdd Docker \u5b89\u88c5\u5230\u6bcf\u4e2a\u7528\u4e8e\u8fd0\u884c Rancher Management Server \u7684\u8282\u70b9\u4e0a\u3002")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8981\u4e86\u89e3\u6211\u4eec\u662f\u5426\u63d0\u4f9b\u6307\u5b9a\u7684 Docker \u7248\u672c\u7684\u5b89\u88c5\u811a\u672c\uff0c\u8bf7\u8bbf\u95ee\u6b64 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/install-docker"},"GitHub \u4ed3\u5e93"),"\uff0c\u8be5\u4ed3\u5e93\u5305\u542b Rancher \u7684\u6240\u6709 Docker \u5b89\u88c5\u811a\u672c\u3002"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u5df2\u914d\u7f6e\u6ee1\u8db3\u64cd\u4f5c\u7cfb\u7edf\u3001Docker\u3001\u786c\u4ef6\u548c\u7f51\u7edc\u8981\u6c42\u7684 Rancher Server \u8282\u70b9\u3002"),(0,o.kt)("h3",{id:"rke-kubernetes-\u96c6\u7fa4\u8282\u70b9\u7684\u540e\u7eed\u6b65\u9aa4"},"RKE Kubernetes \u96c6\u7fa4\u8282\u70b9\u7684\u540e\u7eed\u6b65\u9aa4"),(0,o.kt)("p",null,"\u5982\u9700\u5728\u65b0\u8282\u70b9\u4e0a\u5b89\u88c5 RKE \u96c6\u7fa4\uff0c\u8bf7\u8bb0\u4f4f\u6bcf\u4e2a\u8282\u70b9\u7684 ",(0,o.kt)("strong",{parentName:"p"},"IPv4 \u516c\u5171 IP")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"\u79c1\u6709 IP"),"\u3002\u521b\u5efa\u8282\u70b9\u540e\uff0c\u6b64\u4fe1\u606f\u53ef\u4ee5\u5728\u6bcf\u4e2a\u8282\u70b9\u7684",(0,o.kt)("strong",{parentName:"p"},"\u63cf\u8ff0"),"\u9009\u9879\u5361\u4e2d\u627e\u5230\u3002\u516c\u5171\u548c\u79c1\u6709 IP \u5c06\u7528\u4e8e\u8bbe\u7f6e RKE \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," \u4e2d\u6bcf\u4e2a\u8282\u70b9\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"internal_address"),"\u3002"),(0,o.kt)("p",null,"RKE \u8fd8\u9700\u8981\u8bbf\u95ee\u79c1\u94a5\u624d\u80fd\u8fde\u63a5\u5230\u6bcf\u4e2a\u8282\u70b9\u3002\u56e0\u6b64\uff0c\u8bf7\u8bb0\u4f4f\u8fde\u63a5\u5230\u8282\u70b9\u7684\u79c1\u94a5\u7684\u8def\u5f84\uff0c\u8be5\u8def\u5f84\u4e5f\u53ef\u7528\u4e8e\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," \u4e2d\u6bcf\u4e2a\u8282\u70b9\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh_key_path"),"\u3002"))}d.isMDXComponent=!0}}]);