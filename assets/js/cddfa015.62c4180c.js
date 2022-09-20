"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[87606],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},14539:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={title:"HTTP Proxy Configuration",weight:251,aliases:["/rancher/v2.5/en/installation/proxy-configuration/","/rancher/v2.5/en/installation/single-node/proxy","/rancher/v2.x/en/installation/other-installation-methods/single-node-docker/proxy/"]},s=void 0,c={unversionedId:"reference-guides/single-node-rancher-in-docker/http-proxy-configuration",id:"version-2.5/reference-guides/single-node-rancher-in-docker/http-proxy-configuration",title:"HTTP Proxy Configuration",description:"If you operate Rancher behind a proxy and you want to access services through the proxy (such as retrieving catalogs), you must provide Rancher information about your proxy. As Rancher is written in Go, it uses the common proxy environment variables as shown below.",source:"@site/versioned_docs/version-2.5/reference-guides/single-node-rancher-in-docker/http-proxy-configuration.md",sourceDirName:"reference-guides/single-node-rancher-in-docker",slug:"/reference-guides/single-node-rancher-in-docker/http-proxy-configuration",permalink:"/v2.5/reference-guides/single-node-rancher-in-docker/http-proxy-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/single-node-rancher-in-docker/http-proxy-configuration.md",tags:[],version:"2.5",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"HTTP Proxy Configuration",weight:251,aliases:["/rancher/v2.5/en/installation/proxy-configuration/","/rancher/v2.5/en/installation/single-node/proxy","/rancher/v2.x/en/installation/other-installation-methods/single-node-docker/proxy/"]},sidebar:"tutorialSidebar",previous:{title:"Single Node Rancher in Docker",permalink:"/v2.5/pages-for-subheaders/single-node-rancher-in-docker"},next:{title:"Advanced Options for Docker Installs",permalink:"/v2.5/reference-guides/single-node-rancher-in-docker/advanced-options"}},p={},u=[{value:"Docker Installation",id:"docker-installation",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you operate Rancher behind a proxy and you want to access services through the proxy (such as retrieving catalogs), you must provide Rancher information about your proxy. As Rancher is written in Go, it uses the common proxy environment variables as shown below."),(0,o.kt)("p",null,"Make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," contains the network addresses, network address ranges and domains that should be excluded from using the proxy."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Environment variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HTTP_PROXY"),(0,o.kt)("td",{parentName:"tr",align:null},"Proxy address to use when initiating HTTP connection(s)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HTTPS_PROXY"),(0,o.kt)("td",{parentName:"tr",align:null},"Proxy address to use when initiating HTTPS connection(s)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NO_PROXY"),(0,o.kt)("td",{parentName:"tr",align:null},"Network address(es), network address range(s) and domains to exclude from using the proxy when initiating connection(s)")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note")," NO_PROXY must be in uppercase to use network range (CIDR) notation.")),(0,o.kt)("h2",{id:"docker-installation"},"Docker Installation"),(0,o.kt)("p",null,"Passing environment variables to the Rancher container can be done using ",(0,o.kt)("inlineCode",{parentName:"p"},"-e KEY=VALUE")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--env KEY=VALUE"),". Required values for ",(0,o.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," in a ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"Docker Installation")," are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"localhost")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"127.0.0.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0.0.0.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"10.0.0.0/8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cattle-system.svc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".svc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".cluster.local"))),(0,o.kt)("p",null,"The example below is based on a proxy server accessible at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://192.168.0.1:3128"),", and excluding usage the proxy when accessing network range ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.10.0/24")," and every hostname under the domain ",(0,o.kt)("inlineCode",{parentName:"p"},"example.com"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -e HTTP_PROXY="http://192.168.10.1:3128" \\\n  -e HTTPS_PROXY="http://192.168.10.1:3128" \\\n  -e NO_PROXY="localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,cattle-system.svc,192.168.10.0/24,.svc,.cluster.local,example.com" \\\n  --privileged \\\n  rancher/rancher:latest\n')),(0,o.kt)("p",null,"As of Rancher v2.5, privileged access is ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/rancher-on-a-single-node-with-docker#privileged-access-for-rancher-v2-5"},"required.")))}m.isMDXComponent=!0}}]);