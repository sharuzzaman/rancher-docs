"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[18617],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68171:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],s={title:"2. Install Kubernetes",weight:200},i=void 0,c={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes",id:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes",title:"2. Install Kubernetes",description:"Once the infrastructure is ready, you can continue with setting up an RKE cluster to install Rancher in.",source:"@site/docs/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy",slug:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes.md",tags:[],version:"current",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"2. Install Kubernetes",weight:200},sidebar:"tutorialSidebar",previous:{title:"1. Set up Infrastructure",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/set-up-infrastructure"},next:{title:"3. Install Rancher",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher"}},u={},p=[{value:"Air-gapped proxy",id:"air-gapped-proxy",level:4},{value:"Creating the RKE Cluster",id:"creating-the-rke-cluster",level:3},{value:"Save Your Files",id:"save-your-files",level:3},{value:"Issues or errors?",id:"issues-or-errors",level:3},{value:"Next: Install Rancher",id:"next-install-rancher",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once the infrastructure is ready, you can continue with setting up an RKE cluster to install Rancher in."),(0,o.kt)("p",null,"First, you have to install Docker and setup the HTTP proxy on all three Linux nodes. For this perform the following steps on all three nodes."),(0,o.kt)("p",null,"For convenience, export the IP address and port of your proxy into an environment variable and set up the HTTP_PROXY variables for your current shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'export proxy_host="10.0.0.5:8888"\nexport HTTP_PROXY=http://${proxy_host}\nexport HTTPS_PROXY=http://${proxy_host}\nexport NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16\n')),(0,o.kt)("p",null,"Next configure apt to use this proxy when installing packages. If you are not using Ubuntu, you have to adapt this step accordingly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'cat <<\'EOF\' | sudo tee /etc/apt/apt.conf.d/proxy.conf > /dev/null\nAcquire::http::Proxy "http://${proxy_host}/";\nAcquire::https::Proxy "http://${proxy_host}/";\nEOF\n')),(0,o.kt)("p",null,"Now you can install Docker:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -sL https://releases.rancher.com/install-docker/19.03.sh | sh\n")),(0,o.kt)("p",null,"Then ensure that your current user is able to access the Docker daemon without sudo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo usermod -aG docker YOUR_USERNAME\n")),(0,o.kt)("p",null,"And configure the Docker daemon to use the proxy to pull images:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sudo mkdir -p /etc/systemd/system/docker.service.d\ncat <<\'EOF\' | sudo tee /etc/systemd/system/docker.service.d/http-proxy.conf > /dev/null\n[Service]\nEnvironment="HTTP_PROXY=http://${proxy_host}"\nEnvironment="HTTPS_PROXY=http://${proxy_host}"\nEnvironment="NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16"\nEOF\n')),(0,o.kt)("p",null,"To apply the configuration, restart the Docker daemon:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl daemon-reload\nsudo systemctl restart docker\n")),(0,o.kt)("h4",{id:"air-gapped-proxy"},"Air-gapped proxy"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"New in v2.6.4")),(0,o.kt)("p",null,"You can now provision node driver clusters from an air-gapped cluster configured to use a proxy for outbound connections."),(0,o.kt)("p",null,"In addition to setting the default rules for a proxy server, you will need to add additional rules, shown below, to provision node driver clusters from a proxied Rancher environment."),(0,o.kt)("p",null,"You will configure your filepath according to your setup, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/apt/apt.conf.d/proxy.conf"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"acl SSL_ports port 22\nacl SSL_ports port 2376\n\nacl Safe_ports port 22      # ssh\nacl Safe_ports port 2376    # docker port\n")),(0,o.kt)("h3",{id:"creating-the-rke-cluster"},"Creating the RKE Cluster"),(0,o.kt)("p",null,"You need several command line tools on the host where you have SSH access to the Linux nodes to create and interact with the cluster:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#download-the-rke-binary"},"RKE CLI binary"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo curl -fsSL -o /usr/local/bin/rke https://github.com/rancher/rke/releases/download/v1.1.4/rke_linux-amd64\nsudo chmod +x /usr/local/bin/rke\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"\nchmod +x ./kubectl\nsudo mv ./kubectl /usr/local/bin/kubectl\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3\nchmod +x get_helm.sh\nsudo ./get_helm.sh\n")),(0,o.kt)("p",null,"Next, create a YAML file that describes the RKE cluster. Ensure that the IP addresses of the nodes and the SSH username are correct. For more information on the cluster YAML, have a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/example-yamls/"},"RKE documentation"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"nodes:\n  - address: 10.0.1.200\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n  - address: 10.0.1.201\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n  - address: 10.0.1.202\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n\nservices:\n  etcd:\n    backup_config:\n      interval_hours: 12\n      retention: 6\n")),(0,o.kt)("p",null,"After that, you can create the Kubernetes cluster by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rke up --config rancher-cluster.yaml\n")),(0,o.kt)("p",null,"RKE creates a state file called ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.rkestate"),", this is needed if you want to perform updates, modify your cluster configuration or restore it from a backup. It also creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"kube_config_cluster.yaml")," file, that you can use to connect to the remote Kubernetes cluster locally with tools like kubectl or Helm. Make sure to save all of these files in a secure location, for example by putting them into a version control system."),(0,o.kt)("p",null,"To have a look at your cluster run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export KUBECONFIG=kube_config_cluster.yaml\nkubectl cluster-info\nkubectl get pods --all-namespaces\n")),(0,o.kt)("p",null,"You can also verify that your external load balancer works, and the DNS entry is set up correctly. If you send a request to either, you should receive HTTP 404 response from the ingress controller:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ curl 10.0.1.100\ndefault backend - 404\n$ curl rancher.example.com\ndefault backend - 404\n")),(0,o.kt)("h3",{id:"save-your-files"},"Save Your Files"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The files mentioned below are needed to maintain, troubleshoot and upgrade your cluster."))),(0,o.kt)("p",null,"Save a copy of the following files in a secure location:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rancher-cluster.yml"),": The RKE cluster configuration file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kube_config_cluster.yml"),": The ",(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/kubeconfig/"},"Kubeconfig file")," for the cluster, this file contains credentials for full access to the cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rancher-cluster.rkestate"),": The ",(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#kubernetes-cluster-state"},"Kubernetes Cluster State file"),", this file contains the current state of the cluster including the RKE configuration and the certificates.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'The "rancher-cluster" parts of the two latter file names are dependent on how you name the RKE cluster configuration file.'))),(0,o.kt)("h3",{id:"issues-or-errors"},"Issues or errors?"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"Troubleshooting")," page."),(0,o.kt)("h3",{id:"next-install-rancher"},(0,o.kt)("a",{parentName:"h3",href:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher"},"Next: Install Rancher")))}h.isMDXComponent=!0}}]);