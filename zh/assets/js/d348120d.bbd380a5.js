"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[72907],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19533:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"\u514b\u9686\u96c6\u7fa4",weight:2035},p=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration",id:"how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration",title:"\u514b\u9686\u96c6\u7fa4",description:"\u5982\u679c\u4f60\u5728 Rancher \u4e2d\u6709\u4e00\u4e2a\u96c6\u7fa4\u5e76\u60f3\u5c06\u8fd9\u4e2a\u96c6\u7fa4\u7528\u4f5c\u521b\u5efa\u96c6\u7fa4\u7684\u6a21\u677f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher CLI \u514b\u9686\u96c6\u7fa4\u7684\u914d\u7f6e\uff0c\u7f16\u8f91\u914d\u7f6e\uff0c\u7136\u540e\u4f7f\u7528\u8fd9\u4e9b\u914d\u7f6e\u6765\u5feb\u901f\u542f\u52a8\u514b\u9686\u7684\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration.md",tags:[],version:"current",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u514b\u9686\u96c6\u7fa4",weight:2035},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Rancher \u7684\u9879\u76ee\u548c Kubernetes \u547d\u540d\u7a7a\u95f4",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},next:{title:"\u8bc1\u4e66\u8f6e\u6362",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates"}},c={},u=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"1. \u5bfc\u51fa\u96c6\u7fa4\u914d\u7f6e",id:"1-\u5bfc\u51fa\u96c6\u7fa4\u914d\u7f6e",level:2},{value:"2. \u4fee\u6539\u96c6\u7fa4\u914d\u7f6e",id:"2-\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e",level:2},{value:"3. \u542f\u52a8\u514b\u9686\u7684\u96c6\u7fa4",id:"3-\u542f\u52a8\u514b\u9686\u7684\u96c6\u7fa4",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5728 Rancher \u4e2d\u6709\u4e00\u4e2a\u96c6\u7fa4\u5e76\u60f3\u5c06\u8fd9\u4e2a\u96c6\u7fa4\u7528\u4f5c\u521b\u5efa\u96c6\u7fa4\u7684\u6a21\u677f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher CLI \u514b\u9686\u96c6\u7fa4\u7684\u914d\u7f6e\uff0c\u7f16\u8f91\u914d\u7f6e\uff0c\u7136\u540e\u4f7f\u7528\u8fd9\u4e9b\u914d\u7f6e\u6765\u5feb\u901f\u542f\u52a8\u514b\u9686\u7684\u96c6\u7fa4\u3002"),(0,i.kt)("p",null,"\u4e0d\u652f\u6301\u590d\u5236\u5df2\u6ce8\u518c\u7684\u96c6\u7fa4\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u96c6\u7fa4\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u514b\u9686"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"\u7531\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u6258\u7ba1\u7684\u8282\u70b9")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/zh/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"\u6258\u7ba1\u7684 Kubernetes \u63d0\u4f9b\u5546")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/zh/pages-for-subheaders/use-existing-nodes"},"\u81ea\u5b9a\u4e49\u96c6\u7fa4")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"\u5df2\u6ce8\u518c\u96c6\u7fa4")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728\u590d\u5236\u96c6\u7fa4\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u5c06\u7f16\u8f91\u4e00\u4e2a\u5305\u542b\u6240\u6709\u96c6\u7fa4\u8bbe\u7f6e\u7684\u914d\u7f6e\u6587\u4ef6\u3002\u4f46\u662f\uff0c\u7531\u4e8e\u96c6\u7fa4\u590d\u5236 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"not"))," \u5927\u89c4\u6a21\u66f4\u6539\u914d\u7f6e\uff0c\u56e0\u6b64\u6211\u4eec\u5efa\u8bae\u4ec5\u7f16\u8f91\u672c\u6587\u4e2d\u660e\u786e\u5217\u51fa\u7684\u503c\u3002\u7f16\u8f91\u5176\u4ed6\u503c\u53ef\u80fd\u4f1a\u4f7f\u914d\u7f6e\u6587\u4ef6\u5931\u6548\uff0c\u4ece\u800c\u5bfc\u81f4\u96c6\u7fa4\u90e8\u7f72\u5931\u8d25\u3002"))),(0,i.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,i.kt)("p",null,"\u4e0b\u8f7d\u5e76\u5b89\u88c5 ",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/cli-with-rancher"},"Rancher CLI"),"\u3002\u5982\u6709\u5fc5\u8981\uff0c\u8bf7",(0,i.kt)("a",{parentName:"p",href:"/zh/reference-guides/user-settings/api-keys"},"\u521b\u5efa API \u6301\u6709\u8005\u4ee4\u724c"),"\u3002"),(0,i.kt)("h2",{id:"1-\u5bfc\u51fa\u96c6\u7fa4\u914d\u7f6e"},"1. \u5bfc\u51fa\u96c6\u7fa4\u914d\u7f6e"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u4f7f\u7528 Rancher CLI \u5bfc\u51fa\u8981\u514b\u9686\u7684\u96c6\u7fa4\u7684\u914d\u7f6e\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6253\u5f00\u7ec8\u7aef\u5e76\u8f6c\u5230 Rancher CLI \u4e8c\u8fdb\u5236\u6587\u4ef6\u6240\u5728\u7684\u4f4d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u5217\u51fa Rancher \u7ba1\u7406\u7684\u96c6\u7fa4\uff1a"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    ./rancher cluster ls\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u627e\u5230\u8981\u514b\u9686\u7684\u96c6\u7fa4\uff0c\u5e76\u5c06\u5176\u8d44\u6e90 ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"NAME")," \u590d\u5236\u5230\u526a\u8d34\u677f\u3002\u4ece\u6b64\u5904\u5f00\u59cb\uff0c\u6211\u4eec\u5c06\u8d44\u6e90 ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"NAME")," \u79f0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"<RESOURCE_ID>"),"\uff0c\u5b83\u5728\u63a5\u4e0b\u6765\u7528\u4f5c\u5360\u4f4d\u7b26\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u5bfc\u51fa\u96c6\u7fa4\u7684\u914d\u7f6e\uff1a"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    ./rancher clusters export <RESOURCE_ID>\n")),(0,i.kt)("p",null,"   ",(0,i.kt)("strong",{parentName:"p"},"\u6b65\u9aa4\u7ed3\u679c"),"\uff1a\u5df2\u5c06\u514b\u9686\u96c6\u7fa4\u7684 YAML \u6253\u5370\u5230\u7ec8\u7aef\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5c06 YAML \u7c98\u8d34\u5230\u65b0\u6587\u4ef6\u4e2d\u3002\u5c06\u6587\u4ef6\u53e6\u5b58\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster-template.yml"),"\uff08\u6216\u4efb\u4f55\u5176\u4ed6\u540d\u79f0\uff0c\u786e\u4fdd\u6269\u5c55\u540d\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},".yml")," \u5373\u53ef\uff09\u3002")),(0,i.kt)("h2",{id:"2-\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e"},"2. \u4fee\u6539\u96c6\u7fa4\u914d\u7f6e"),(0,i.kt)("p",null,"\u4f7f\u7528\u6587\u672c\u7f16\u8f91\u5668\u4e3a\u514b\u9686\u96c6\u7fa4\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-template.yml")," \u4e2d\u7684\u96c6\u7fa4\u914d\u7f6e\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u96c6\u7fa4\u914d\u7f6e\u53c2\u6570\u5fc5\u987b\u5d4c\u5957\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," \u4e0b\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#rancher-%E4%B8%AD%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84"},"Rancher 2.3.0+ \u914d\u7f6e\u6587\u4ef6\u7ed3\u6784"),"\u3002"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u6587\u672c\u7f16\u8f91\u5668\u4e2d\u6253\u5f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-template.yml"),"\uff08\u6216\u4f60\u91cd\u547d\u540d\u4e86\u7684\u914d\u7f6e\u6587\u4ef6\uff09\u3002"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4ec5\u9700\u7f16\u8f91\u4e0b\u9762\u660e\u786e\u6307\u51fa\u7684\u96c6\u7fa4\u914d\u7f6e\u9879\u3002\u6b64\u6587\u4ef6\u4e2d\u5217\u51fa\u7684\u5f88\u591a\u503c\u5747\u7528\u4e8e\u914d\u7f6e\u514b\u9686\u7684\u96c6\u7fa4\uff0c\u56e0\u6b64\u7f16\u8f91\u5b83\u4eec\u7684\u503c\u53ef\u80fd\u4f1a\u4e2d\u65ad\u914d\u7f6e\u8fc7\u7a0b\u3002"))))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5982\u4e0b\u4f8b\u6240\u793a\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"<CLUSTER_NAME>")," \u5360\u4f4d\u7b26\u5904\u5c06\u539f\u59cb\u96c6\u7fa4\u7684\u540d\u79f0\u66ff\u6362\u4e3a\u552f\u4e00\u540d\u79f0 (",(0,i.kt)("inlineCode",{parentName:"p"},"<CLUSTER_NAME>"),")\u3002\u5982\u679c\u514b\u9686\u7684\u96c6\u7fa4\u540d\u79f0\u91cd\u590d\uff0c\u5219\u96c6\u7fa4\u5c06\u65e0\u6cd5\u6210\u529f\u914d\u7f6e\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"Version: v3\nclusters:\n    <CLUSTER_NAME>: # \u8f93\u5165\u552f\u4e00\u7684\u540d\u79f0\n    dockerRootDir: /var/lib/docker\n    enableNetworkPolicy: false\n    rancherKubernetesEngineConfig:\n    addonJobTimeout: 30\n    authentication:\n        strategy: x509\n    authorization: {}\n    bastionHost: {}\n    cloudProvider: {}\n    ignoreDockerVersion: true\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u6bcf\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"nodePools"),"\uff0c\u5c06\u539f\u59cb\u8282\u70b9\u6c60\u540d\u79f0\u66ff\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"<NODEPOOL_NAME>")," \u5360\u4f4d\u7b26\u5904\u7684\u552f\u4e00\u540d\u79f0\u3002\u5982\u679c\u514b\u9686\u96c6\u7fa4\u5177\u6709\u91cd\u590d\u7684\u8282\u70b9\u6c60\u540d\u79f0\uff0c\u5219\u96c6\u7fa4\u5c06\u65e0\u6cd5\u6210\u529f\u914d\u7f6e\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"nodePools:\n    <NODEPOOL_NAME>:\n    clusterId: do\n    controlPlane: true\n    etcd: true\n    hostnamePrefix: mark-do\n    nodeTemplateId: do\n    quantity: 1\n    worker: true\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5b8c\u6210\u540e\uff0c\u4fdd\u5b58\u5e76\u5173\u95ed\u914d\u7f6e\u3002"))),(0,i.kt)("h2",{id:"3-\u542f\u52a8\u514b\u9686\u7684\u96c6\u7fa4"},"3. \u542f\u52a8\u514b\u9686\u7684\u96c6\u7fa4"),(0,i.kt)("p",null,"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-template.yml")," \u79fb\u52a8\u5230 Rancher CLI \u4e8c\u8fdb\u5236\u6587\u4ef6\u6240\u5728\u7684\u76ee\u5f55\u4e2d\u3002\u7136\u540e\u8fd0\u884c\u8fd9\u4e2a\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./rancher up --file cluster-template.yml\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5f00\u59cb\u914d\u7f6e\u4f60\u514b\u9686\u7684\u96c6\u7fa4\u3002\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"./rancher cluster ls")," \u8fdb\u884c\u786e\u8ba4\u3002"))}m.isMDXComponent=!0}}]);