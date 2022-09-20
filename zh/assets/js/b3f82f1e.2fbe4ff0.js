"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[65503],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(a),h=r,k=s["".concat(d,".").concat(h)]||s[h]||m[h]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},66113:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={title:"Docker \u5b89\u88c5\u547d\u4ee4",weight:1},d=void 0,p={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands",id:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands",title:"Docker \u5b89\u88c5\u547d\u4ee4",description:"Docker \u5b89\u88c5\u9002\u7528\u4e8e\u60f3\u8981\u6d4b\u8bd5 Rancher \u7684\u7528\u6237\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install",slug:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands.md",tags:[],version:"current",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Docker \u5b89\u88c5\u547d\u4ee4",weight:1},sidebar:"tutorialSidebar",previous:{title:"4. \u5b89\u88c5 Rancher",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},next:{title:"\u4f7f\u7528 Docker \u5c06 Rancher \u5b89\u88c5\u5230\u5355\u4e2a\u8282\u70b9\u4e2d",permalink:"/zh/pages-for-subheaders/rancher-on-a-single-node-with-docker"}},c={},m=[{value:"\u9009\u9879 A\uff1a\u4f7f\u7528 Rancher \u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66",id:"\u9009\u9879-a\u4f7f\u7528-rancher-\u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66",level:3},{value:"\u9009\u9879 B\uff1a\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u8bc1\u4e66 - \u81ea\u7b7e\u540d",id:"\u9009\u9879-b\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u8bc1\u4e66---\u81ea\u7b7e\u540d",level:3},{value:"\u9009\u9879 C\uff1a\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u8bc1\u4e66 - \u53ef\u4fe1 CA \u7b7e\u540d\u7684\u8bc1\u4e66",id:"\u9009\u9879-c\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u8bc1\u4e66---\u53ef\u4fe1-ca-\u7b7e\u540d\u7684\u8bc1\u4e66",level:3}],s={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Docker \u5b89\u88c5\u9002\u7528\u4e8e\u60f3\u8981\u6d4b\u8bd5 Rancher \u7684\u7528\u6237\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"docker run"),"\u547d\u4ee4\uff0c\u628a Rancher Server \u7ec4\u4ef6\u5b89\u88c5\u5230\u5355\u4e2a\u8282\u70b9\u4e0a\uff0c\u800c\u4e0d\u9700\u8981\u8fd0\u884c Kubernetes \u96c6\u7fa4\u3002\u7531\u4e8e\u53ea\u6709\u4e00\u4e2a\u8282\u70b9\u548c\u4e00\u4e2a Docker \u5bb9\u5668\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u8be5\u8282\u70b9\u53d1\u751f\u6545\u969c\uff0c\u7531\u4e8e\u5176\u4ed6\u8282\u70b9\u4e0a\u6ca1\u6709\u53ef\u7528\u7684 etcd \u6570\u636e\u526f\u672c\uff0c\u4f60\u5c06\u4e22\u5931 Rancher Server \u7684\u6240\u6709\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5907\u4efd\u5e94\u7528\uff0c\u6309\u7167",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"\u8fd9\u4e9b\u6b65\u9aa4"),"\uff0c\u5c06 Rancher Server \u4ece Docker \u5b89\u88c5\u8fc1\u79fb\u5230 Kubernetes \u5b89\u88c5\u3002"),(0,l.kt)("p",null,"\u51fa\u4e8e\u5b89\u5168\u8003\u8651\uff0c\u4f7f\u7528 Rancher \u65f6\u8bf7\u4f7f\u7528 SSL\uff08Secure Sockets Layer\uff09\u3002SSL \u4fdd\u62a4\u6240\u6709 Rancher \u7f51\u7edc\u901a\u4fe1\uff08\u5982\u767b\u5f55\u548c\u4e0e\u96c6\u7fa4\u4ea4\u4e92\uff09\u7684\u5b89\u5168\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CATTLE_SYSTEM_DEFAULT_REGISTRY")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06 Rancher Server \u914d\u7f6e\u6210\u5728\u914d\u7f6e\u96c6\u7fa4\u65f6\uff0c\u59cb\u7ec8\u4ece\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u62c9\u53d6\u955c\u50cf\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CATTLE_SYSTEM_CATALOG")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bundled")),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e Rancher Server \u4f7f\u7528\u6253\u5305\u7684 Helm System Chart \u526f\u672c\u3002",(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/system-charts"},"system charts")," \u4ed3\u5e93\u5305\u542b\u6240\u6709 Monitoring\uff0cLogging\uff0c\u544a\u8b66\u548c\u5168\u5c40 DNS \u7b49\u529f\u80fd\u6240\u9700\u7684\u5e94\u7528\u5546\u5e97\u9879\u76ee\u3002\u8fd9\u4e9b ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/system-charts"},"Helm Chart")," \u4f4d\u4e8e GitHub \u4e2d\u3002\u4f46\u662f\u7531\u4e8e\u4f60\u5904\u5728\u79bb\u7ebf\u73af\u5883\uff0c\u56e0\u6b64\u4f7f\u7528 Rancher \u5185\u7f6e\u7684 Chart \u4f1a\u6bd4\u8bbe\u7f6e Git mirror \u5bb9\u6613\u5f97\u591a\u3002")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4f60\u662f\u5426\u9700\u8981\uff1a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u81ea\u5b9a\u4e49 CA \u6839\u8bc1\u4e66\u4ee5\u8bbf\u95ee\u670d\u52a1\u3002\u53c2\u89c1",(0,l.kt)("a",{parentName:"li",href:"/zh/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates"},"\u81ea\u5b9a\u4e49 CA \u6839\u8bc1\u4e66"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8bb0\u5f55\u6240\u6709 Rancher API \u7684\u4e8b\u52a1\u3002\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"li",href:"/zh/reference-guides/single-node-rancher-in-docker/advanced-options#api-%E5%AE%A1%E8%AE%A1%E6%97%A5%E5%BF%97"},"API \u5ba1\u8ba1"),"\u3002")))),(0,l.kt)("p",null,"\u9009\u62e9\u4ee5\u4e0b\u7684\u9009\u9879\u4e4b\u4e00\uff1a"),(0,l.kt)("h3",{id:"\u9009\u9879-a\u4f7f\u7528-rancher-\u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66"},"\u9009\u9879 A\uff1a\u4f7f\u7528 Rancher \u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66"),(0,l.kt)("details",{id:"option-a"},(0,l.kt)("summary",null,"\u5355\u51fb\u5c55\u5f00"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5728\u4e0d\u8003\u8651\u8eab\u4efd\u9a8c\u8bc1\u7684\u5f00\u53d1\u6216\u6d4b\u8bd5\u73af\u5883\u4e2d\u5b89\u88c5 Rancher\uff0c\u53ef\u4ee5\u4f7f\u7528 Rancher \u751f\u6210\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66\u5b89\u88c5 Rancher\u3002\u8fd9\u79cd\u5b89\u88c5\u65b9\u5f0f\u907f\u514d\u4e86\u81ea\u5df1\u751f\u6210\u8bc1\u4e66\u7684\u9ebb\u70e6\u3002"),(0,l.kt)("p",null,"\u767b\u5f55\u5230\u4f60\u7684 Linux \u4e3b\u673a\uff0c\u7136\u540e\u8fd0\u884c\u4e0b\u9762\u7684\u5b89\u88c5\u547d\u4ee4\u3002\u8f93\u5165\u547d\u4ee4\u65f6\uff0c\u53c2\u8003\u4e0b\u8868\u6765\u66ff\u6362\u6bcf\u4e2a\u5360\u4f4d\u7b26\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5360\u4f4d\u7b26"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684 URL \u548c\u7aef\u53e3\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<RANCHER_VERSION_TAG>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f60\u60f3\u8981\u5b89\u88c5\u7684 ",(0,l.kt)("a",{parentName:"td",href:"/zh/reference-guides/installation-references/helm-chart-options"},"Rancher \u7248\u672c"),"\u7684\u7248\u672c\u6807\u7b7e\u3002")))),(0,l.kt)("p",null,"\u7279\u6743\u8bbf\u95ee\u662f",(0,l.kt)("a",{parentName:"p",href:"#rancher-%E7%89%B9%E6%9D%83%E8%AE%BF%E9%97%AE"},"\u5fc5\u987b"),"\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n    -p 80:80 -p 443:443 \\\n    -e CATTLE_SYSTEM_DEFAULT_REGISTRY=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # \u8bbe\u7f6e\u5728 Rancher \u4e2d\u4f7f\u7528\u7684\u9ed8\u8ba4\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\n    -e CATTLE_SYSTEM_CATALOG=bundled \\ # \u4f7f\u7528\u6253\u5305\u7684 Rancher System Chart\n    --privileged \\\n    <REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher:<RANCHER_VERSION_TAG>\n"))),(0,l.kt)("h3",{id:"\u9009\u9879-b\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u8bc1\u4e66---\u81ea\u7b7e\u540d"},"\u9009\u9879 B\uff1a\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u8bc1\u4e66 - \u81ea\u7b7e\u540d"),(0,l.kt)("details",{id:"option-b"},(0,l.kt)("summary",null,"\u5355\u51fb\u5c55\u5f00"),(0,l.kt)("p",null,"\u5728\u4f60\u56e2\u961f\u8bbf\u95ee Rancher Server \u7684\u5f00\u53d1\u6216\u6d4b\u8bd5\u73af\u5883\u4e2d\uff0c\u521b\u5efa\u4e00\u4e2a\u7528\u4e8e\u4f60\u7684\u5b89\u88c5\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66\uff0c\u4ee5\u4fbf\u56e2\u961f\u9a8c\u8bc1\u4ed6\u4eec\u5bf9\u5b9e\u4f8b\u7684\u8fde\u63a5\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4ece\u80fd\u8fde\u63a5\u5230\u4e92\u8054\u7f51\u7684\u8ba1\u7b97\u673a\u4e0a\uff0c\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://www.openssl.org/"},"OpenSSL")," \u6216\u5176\u4ed6\u65b9\u6cd5\u521b\u5efa\u81ea\u7b7e\u540d\u8bc1\u4e66\u3002"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u8bc1\u4e66\u6587\u4ef6\u7684\u683c\u5f0f\u5fc5\u987b\u662f PEM\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u4f60\u7684\u8bc1\u4e66\u6587\u4ef6\u4e2d\uff0c\u5305\u62ec\u94fe\u4e2d\u7684\u6240\u6709\u4e2d\u95f4\u8bc1\u4e66\u3002\u4f60\u9700\u8981\u5bf9\u4f60\u7684\u8bc1\u4e66\u8fdb\u884c\u6392\u5e8f\uff0c\u628a\u4f60\u7684\u8bc1\u4e66\u653e\u5728\u6700\u524d\u9762\uff0c\u540e\u9762\u8ddf\u7740\u4e2d\u95f4\u8bc1\u4e66\u3002\u5982\u9700\u67e5\u770b\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"li",href:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting"},"\u8bc1\u4e66\u6545\u969c\u6392\u9664"),"\u3002")))),(0,l.kt)("p",null,"\u521b\u5efa\u8bc1\u4e66\u540e\uff0c\u767b\u5f55 Linux \u4e3b\u673a\uff0c\u7136\u540e\u8fd0\u884c\u4ee5\u4e0b\u5b89\u88c5\u547d\u4ee4\u3002\u8f93\u5165\u547d\u4ee4\u65f6\uff0c\u53c2\u8003\u4e0b\u8868\u6765\u66ff\u6362\u6bcf\u4e2a\u5360\u4f4d\u7b26\u3002\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"-v")," \u6807\u5fd7\u5e76\u63d0\u4f9b\u8bc1\u4e66\u7684\u8def\u5f84\uff0c\u4ee5\u5c06\u8bc1\u4e66\u6302\u8f7d\u5230\u5bb9\u5668\u4e2d\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5360\u4f4d\u7b26"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<CERT_DIRECTORY>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u8bc1\u4e66\u6587\u4ef6\u7684\u76ee\u5f55\u7684\u8def\u5f84\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<FULL_CHAIN.pem>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b8c\u6574\u8bc1\u4e66\u94fe\u7684\u8def\u5f84\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<PRIVATE_KEY.pem>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bc1\u4e66\u79c1\u94a5\u7684\u8def\u5f84\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<CA_CERTS.pem>")),(0,l.kt)("td",{parentName:"tr",align:null},"CA \u8bc1\u4e66\u7684\u8def\u5f84\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684 URL \u548c\u7aef\u53e3\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<RANCHER_VERSION_TAG>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f60\u60f3\u8981\u5b89\u88c5\u7684 ",(0,l.kt)("a",{parentName:"td",href:"/zh/reference-guides/installation-references/helm-chart-options"},"Rancher \u7248\u672c"),"\u7684\u7248\u672c\u6807\u7b7e\u3002")))),(0,l.kt)("p",null,"\u7279\u6743\u8bbf\u95ee\u662f",(0,l.kt)("a",{parentName:"p",href:"#rancher-%E7%89%B9%E6%9D%83%E8%AE%BF%E9%97%AE"},"\u5fc5\u987b"),"\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n    -p 80:80 -p 443:443 \\\n    -v /<CERT_DIRECTORY>/<FULL_CHAIN.pem>:/etc/rancher/ssl/cert.pem \\\n    -v /<CERT_DIRECTORY>/<PRIVATE_KEY.pem>:/etc/rancher/ssl/key.pem \\\n    -v /<CERT_DIRECTORY>/<CA_CERTS.pem>:/etc/rancher/ssl/cacerts.pem \\\n    -e CATTLE_SYSTEM_DEFAULT_REGISTRY=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # \u8bbe\u7f6e\u5728 Rancher \u4e2d\u4f7f\u7528\u7684\u9ed8\u8ba4\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\n    -e CATTLE_SYSTEM_CATALOG=bundled \\ # \u4f7f\u7528\u6253\u5305\u7684 Rancher System Chart\n    --privileged \\\n    <REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher:<RANCHER_VERSION_TAG>\n"))),(0,l.kt)("h3",{id:"\u9009\u9879-c\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u8bc1\u4e66---\u53ef\u4fe1-ca-\u7b7e\u540d\u7684\u8bc1\u4e66"},"\u9009\u9879 C\uff1a\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u8bc1\u4e66 - \u53ef\u4fe1 CA \u7b7e\u540d\u7684\u8bc1\u4e66"),(0,l.kt)("details",{id:"option-c"},(0,l.kt)("summary",null,"\u5355\u51fb\u5c55\u5f00"),(0,l.kt)("p",null,"\u5728\u516c\u5f00\u66b4\u9732\u5e94\u7528\u7684\u5f00\u53d1\u6216\u6d4b\u8bd5\u73af\u5883\u4e2d\uff0c\u8bf7\u4f7f\u7528\u7531\u53ef\u4fe1 CA \u7b7e\u540d\u7684\u8bc1\u4e66\uff0c\u4ee5\u907f\u514d\u7528\u6237\u6536\u5230\u8bc1\u4e66\u5b89\u5168\u8b66\u544a\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8bc1\u4e66\u6587\u4ef6\u7684\u683c\u5f0f\u5fc5\u987b\u662f PEM\u3002"))),(0,l.kt)("p",null,"\u83b7\u53d6\u8bc1\u4e66\u540e\uff0c\u767b\u5f55 Linux \u4e3b\u673a\uff0c\u7136\u540e\u8fd0\u884c\u4ee5\u4e0b\u5b89\u88c5\u547d\u4ee4\u3002\u8f93\u5165\u547d\u4ee4\u65f6\uff0c\u53c2\u8003\u4e0b\u8868\u6765\u66ff\u6362\u6bcf\u4e2a\u5360\u4f4d\u7b26\u3002\u56e0\u4e3a\u4f60\u7684\u8bc1\u4e66\u662f\u7531\u53ef\u4fe1\u7684 CA \u7b7e\u540d\u7684\uff0c\u56e0\u6b64\u4f60\u4e0d\u9700\u8981\u5b89\u88c5\u989d\u5916\u7684 CA \u8bc1\u4e66\u6587\u4ef6\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5360\u4f4d\u7b26"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<CERT_DIRECTORY>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u8bc1\u4e66\u6587\u4ef6\u7684\u76ee\u5f55\u7684\u8def\u5f84\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<FULL_CHAIN.pem>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b8c\u6574\u8bc1\u4e66\u94fe\u7684\u8def\u5f84\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<PRIVATE_KEY.pem>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bc1\u4e66\u79c1\u94a5\u7684\u8def\u5f84\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684 URL \u548c\u7aef\u53e3\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<RANCHER_VERSION_TAG>")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f60\u60f3\u8981\u5b89\u88c5\u7684 ",(0,l.kt)("a",{parentName:"td",href:"/zh/reference-guides/installation-references/helm-chart-options"},"Rancher \u7248\u672c"),"\u7684\u7248\u672c\u6807\u7b7e\u3002")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-cacerts")," \u4f5c\u4e3a\u5bb9\u5668\u7684\u53c2\u6570\uff0c\u4ee5\u7981\u7528 Rancher \u751f\u6210\u7684\u9ed8\u8ba4 CA \u8bc1\u4e66\u3002"))),(0,l.kt)("p",null,"\u7279\u6743\u8bbf\u95ee\u662f",(0,l.kt)("a",{parentName:"p",href:"#rancher-%E7%89%B9%E6%9D%83%E8%AE%BF%E9%97%AE"},"\u5fc5\u987b"),"\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n    -p 80:80 -p 443:443 \\\n    --no-cacerts \\\n    -v /<CERT_DIRECTORY>/<FULL_CHAIN.pem>:/etc/rancher/ssl/cert.pem \\\n    -v /<CERT_DIRECTORY>/<PRIVATE_KEY.pem>:/etc/rancher/ssl/key.pem \\\n    -e CATTLE_SYSTEM_DEFAULT_REGISTRY=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # \u8bbe\u7f6e\u5728 Rancher \u4e2d\u4f7f\u7528\u7684\u9ed8\u8ba4\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\n    -e CATTLE_SYSTEM_CATALOG=bundled \\ # \u4f7f\u7528\u6253\u5305\u7684 Rancher System Chart\n    --privileged\n    <REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher:<RANCHER_VERSION_TAG>\n"))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u4e0d\u60f3\u53d1\u9001\u9065\u6d4b\u6570\u636e\uff0c\u5728\u9996\u6b21\u767b\u5f55\u65f6\u9000\u51fa",(0,l.kt)("a",{parentName:"p",href:"/zh/faq/telemetry"},"\u9065\u6d4b"),"\u3002"))))}h.isMDXComponent=!0}}]);