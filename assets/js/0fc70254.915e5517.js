"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[41903],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||i;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19235:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={title:"Contributing to Rancher",weight:700},l=void 0,p={unversionedId:"contribute-to-rancher",id:"contribute-to-rancher",title:"Contributing to Rancher",description:"This section explains the repositories used for Rancher, how to build the repositories, and what information to include when you file an issue.",source:"@site/docs/contribute-to-rancher.md",sourceDirName:".",slug:"/contribute-to-rancher",permalink:"/contribute-to-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/contribute-to-rancher.md",tags:[],version:"current",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Contributing to Rancher",weight:700},sidebar:"tutorialSidebar",previous:{title:"Rotation of Expired Webhook Certificates",permalink:"/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation"}},c={},h=[{value:"Repositories",id:"repositories",level:2},{value:"Building",id:"building",level:2},{value:"Bugs, Issues or Questions",id:"bugs-issues-or-questions",level:2},{value:"Checklist for Filing Issues",id:"checklist-for-filing-issues",level:3},{value:"Docs",id:"docs",level:2}],u={toc:h};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section explains the repositories used for Rancher, how to build the repositories, and what information to include when you file an issue."),(0,i.kt)("p",null,"For more detailed information on how to contribute to the development of Rancher projects, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/wiki"},"Rancher Developer Wiki"),". The wiki has resources on many topics, including the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How to set up the Rancher development environment and run tests"),(0,i.kt)("li",{parentName:"ul"},"The typical flow of an issue through the development lifecycle"),(0,i.kt)("li",{parentName:"ul"},"Coding guidelines and development best practices"),(0,i.kt)("li",{parentName:"ul"},"Debugging and troubleshooting"),(0,i.kt)("li",{parentName:"ul"},"Developing the Rancher API")),(0,i.kt)("p",null,"On the Rancher Users Slack, the channel for developers is ",(0,i.kt)("strong",{parentName:"p"},"#developer"),"."),(0,i.kt)("h2",{id:"repositories"},"Repositories"),(0,i.kt)("p",null,"All of repositories are located within our main GitHub organization. There are many repositories used for Rancher, but we'll provide descriptions of some of the main ones used in Rancher."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Repository"),(0,i.kt)("th",{parentName:"tr",align:null},"URL"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rancher"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher"},"https://github.com/rancher/rancher")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the main source code for Rancher 2.x.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Types"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/types"},"https://github.com/rancher/types")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the repository that has all the API types for Rancher 2.x.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"API Framework"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/norman"},"https://github.com/rancher/norman")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is an API framework for building Rancher style APIs backed by Kubernetes Custom Resources.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User Interface"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/dashboard/"},"https://github.com/rancher/dashboard/")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the source of the Dashboard UI.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"(Rancher) Docker Machine"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/machine"},"https://github.com/rancher/machine")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the source of the Docker Machine binary used when using Node Drivers. This is a fork of the ",(0,i.kt)("inlineCode",{parentName:"td"},"docker/machine")," repository.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"machine-package"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/machine-package"},"https://github.com/rancher/machine-package")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is used to build the Rancher Docker Machine binary.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kontainer-engine"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/kontainer-engine"},"https://github.com/rancher/kontainer-engine")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the source of kontainer-engine, the tool to provision hosted Kubernetes clusters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RKE repository"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rke"},"https://github.com/rancher/rke")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the source of Rancher Kubernetes Engine, the tool to provision Kubernetes clusters on any machine.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CLI"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/cli"},"https://github.com/rancher/cli")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the source code for the Rancher CLI used in Rancher 2.x.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"(Rancher) Helm repository"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/helm"},"https://github.com/rancher/helm")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the source of the packaged Helm binary. This is a fork of the ",(0,i.kt)("inlineCode",{parentName:"td"},"helm/helm")," repository.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Telemetry repository"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/telemetry"},"https://github.com/rancher/telemetry")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the source for the Telemetry binary.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"loglevel repository"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/loglevel"},"https://github.com/rancher/loglevel")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the source of the loglevel binary, used to dynamically change log levels.")))),(0,i.kt)("p",null,"To see all libraries/projects used in Rancher, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/blob/master/go.mod"},(0,i.kt)("inlineCode",{parentName:"a"},"go.mod")," file")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," repository."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Rancher diagram",src:a(33197).Z,width:"1172",height:"1117"}),(0,i.kt)("br",null)),(0,i.kt)("sup",null,"Rancher components used for provisioning/managing Kubernetes clusters."),(0,i.kt)("h2",{id:"building"},"Building"),(0,i.kt)("p",null,"Every repository should have a Makefile and can be built using the ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," command. The ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," targets are based on the scripts in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/scripts")," directory in the repository, and each target will use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/dapper"},"Dapper")," to run the target in an isolated environment. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile.dapper")," will be used for this process, and includes all the necessary build tooling needed."),(0,i.kt)("p",null,"The default target is ",(0,i.kt)("inlineCode",{parentName:"p"},"ci"),", and will run ",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/validate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/build"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/test")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/package"),". The resulting binaries of the build will be in ",(0,i.kt)("inlineCode",{parentName:"p"},"./build/bin")," and are usually also packaged in a Docker image."),(0,i.kt)("h2",{id:"bugs-issues-or-questions"},"Bugs, Issues or Questions"),(0,i.kt)("p",null,"If you find any bugs or are having any trouble, please search the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues"},"reported issue")," as someone may have experienced the same issue or we are actively working on a solution."),(0,i.kt)("p",null,"If you can't find anything related to your issue, contact us by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/new"},"filing an issue"),". Though we have many repositories related to Rancher, we want the bugs filed in the Rancher repository so we won't miss them! If you want to ask a question or ask fellow users about an use case, we suggest creating a post on the ",(0,i.kt)("a",{parentName:"p",href:"https://forums.rancher.com"},"Rancher Forums"),"."),(0,i.kt)("h3",{id:"checklist-for-filing-issues"},"Checklist for Filing Issues"),(0,i.kt)("p",null,"Please follow this checklist when filing an issue which will helps us investigate and fix the issue. More info means more data we can use to determine what is causing the issue or what might be related to the issue."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For large amounts of data, please use ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/"},"GitHub Gist")," or similar and link the created resource in the issue."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please remove any sensitive data as it will be publicly viewable."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resources:")," Provide as much as detail as possible on the used resources. As the source of the issue can be many things, including as much of detail as possible helps to determine the root cause. See some examples below:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hosts:")," What specifications does the host have, like CPU/memory/disk, what cloud does it happen on, what Amazon Machine Image are you using, what DigitalOcean droplet are you using, what image are you provisioning that we can rebuild or use when we try to reproduce"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Operating System:")," What operating system are you using? Providing specifics helps here like the output of ",(0,i.kt)("inlineCode",{parentName:"li"},"cat /etc/os-release")," for exact OS release and ",(0,i.kt)("inlineCode",{parentName:"li"},"uname -r")," for exact kernel used"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Docker:")," What Docker version are you using, how did you install it? Most of the details of Docker can be found by supplying output of ",(0,i.kt)("inlineCode",{parentName:"li"},"docker version")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"docker info")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Environment:")," Are you in a proxy environment, are you using recognized CA/self signed certificates, are you using an external loadbalancer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rancher:")," What version of Rancher are you using, this can be found on the bottom left of the UI or be retrieved from the image tag you are running on the host"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Clusters:")," What kind of cluster did you create, how did you create it, what did you specify when you were creating it"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Steps to reproduce the issue:")," Provide as much detail on how you got into the reported situation. This helps the person to reproduce the situation you are in."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Provide manual steps or automation scripts used to get from a newly created setup to the situation you reported."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Logs:")," Provide data/logs from the used resources."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rancher"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Docker install"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"docker logs \\\n--timestamps \\\n$(docker ps | grep -E \"rancher/rancher:|rancher/rancher \" | awk '{ print $1 }')\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kubernetes install using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure you configured the correct kubeconfig (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"export KUBECONFIG=$PWD/kube_config_cluster.yml")," if Rancher is installed on a Kubernetes cluster) or are using the embedded kubectl via the UI."))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"kubectl -n cattle-system \\\nlogs \\\n-l app=rancher \\\n--timestamps=true\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Docker install using ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," on each of the nodes in the RKE cluster"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"docker logs \\\n--timestamps \\\n$(docker ps | grep -E \"rancher/rancher@|rancher_rancher\" | awk '{ print $1 }')\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kubernetes Install with RKE Add-On"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure you configured the correct kubeconfig (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"export KUBECONFIG=$PWD/kube_config_cluster.yml")," if the Rancher server is installed on a Kubernetes cluster) or are using the embedded kubectl via the UI."))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"kubectl -n cattle-system \\\nlogs \\\n--timestamps=true \\\n-f $(kubectl --kubeconfig $KUBECONFIG get pods -n cattle-system -o json | jq -r '.items[] | select(.spec.containers[].name=\"cattle-server\") | .metadata.name')\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"System logging (these might not all exist, depending on operating system)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/var/log/messages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/var/log/syslog")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/var/log/kern.log")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Docker daemon logging (these might not all exist, depending on operating system)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/var/log/docker.log")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Metrics:")," If you are experiencing performance issues, please provide as much of data (files or screenshots) of metrics which can help determining what is going on. If you have an issue related to a machine, it helps to supply output of ",(0,i.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"free -m"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"df")," which shows processes/memory/disk usage."))),(0,i.kt)("h2",{id:"docs"},"Docs"),(0,i.kt)("p",null,"If you have any updates to our documentation, please make any pull request to our docs repo."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/docs"},"Rancher 2.x Docs repository"),": This repo is where all the docs for Rancher 2.x are located. They are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," folder in the repo.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher.github.io"},"Rancher 1.x Docs repository"),": This repo is where all the docs for Rancher 1.x are located. They are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher")," folder in the repo."))))}m.isMDXComponent=!0},33197:function(e,t,a){t.Z=a.p+"assets/images/ranchercomponentsdiagram-2.6-3ddd4fe509fb4257ab397c51400855f3.svg"}}]);