"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[2096],{3905:function(t,n,e){e.d(n,{Zo:function(){return p},kt:function(){return f}});var r=e(67294);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var c=r.createContext({}),l=function(t){var n=r.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},p=function(t){var n=l(t.components);return r.createElement(c.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(t,n){var e=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=l(e),f=i,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return e?r.createElement(d,a(a({ref:n},p),{},{components:e})):r.createElement(d,a({ref:n},p))}));function f(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var o=e.length,a=new Array(o);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=t,s.mdxType="string"==typeof t?t:i,a[1]=s;for(var l=2;l<o;l++)a[l]=e[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},32924:function(t,n,e){e.r(n),e.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=e(87462),i=e(63366),o=(e(67294),e(3905)),a=["components"],s={title:"\u5728 RKE2 \u96c6\u7fa4\u4e0a\u5b89\u88c5 Istio \u7684\u5176\u4ed6\u6b65\u9aa4",weight:3},c=void 0,l={unversionedId:"explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",id:"explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",title:"\u5728 RKE2 \u96c6\u7fa4\u4e0a\u5b89\u88c5 Istio \u7684\u5176\u4ed6\u6b65\u9aa4",description:"\u901a\u8fc7\u5e94\u7528 & \u5e94\u7528\u5e02\u573a\u9875\u9762\u5b89\u88c5\u6216\u5347\u7ea7 Istio Helm Chart \u65f6\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster.md",sourceDirName:"explanations/integrations-in-rancher/istio/configuration-options",slug:"/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",permalink:"/zh/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster.md",tags:[],version:"current",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u5728 RKE2 \u96c6\u7fa4\u4e0a\u5b89\u88c5 Istio \u7684\u5176\u4ed6\u6b65\u9aa4",weight:3},sidebar:"tutorialSidebar",previous:{title:"\u9009\u62e9\u5668\u548c\u6293\u53d6\u914d\u7f6e",permalink:"/zh/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"},next:{title:"\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u7684\u5176\u4ed6\u6b65\u9aa4",permalink:"/zh/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation"}},p={},u=[],m={toc:u};function f(t){var n=t.components,e=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u901a\u8fc7",(0,o.kt)("strong",{parentName:"p"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a"),"\u9875\u9762\u5b89\u88c5\u6216\u5347\u7ea7 Istio Helm Chart \u65f6\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u8981\u5b89\u88c5 Chart\uff0c\u8bf7\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u5728\u5b89\u88c5\u524d\u81ea\u5b9a\u4e49 Helm \u9009\u9879"),"\uff0c\u7136\u540e\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u4e0b\u4e00\u6b65"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f60\u5c06\u770b\u5230\u914d\u7f6e Istio Helm Chart \u7684\u9009\u9879\u3002\u5728",(0,o.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6"),"\u9009\u9879\u5361\u4e0a\uff0c\u9009\u4e2d",(0,o.kt)("strong",{parentName:"p"},"\u542f\u7528 CNI")," \u65c1\u8fb9\u7684\u6846\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u8986\u76d6\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u6307\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"cniBinDir")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"cniConfDir"),"\u3002\u6709\u5173\u8fd9\u4e9b\u9009\u9879\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/setup/additional-setup/cni/#helm-chart-parameters"},"Istio \u6587\u6863"),"\u3002\u4e0b\u65b9\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: install.istio.io/v1alpha1\nkind: IstioOperator\nspec:\n  components:\n    cni:\n      enabled: true\n      k8s:\n        overlays:\n        - apiVersion: "apps/v1"\n          kind: "DaemonSet"\n          name: "istio-cni-node"\n          patches:\n          - path: spec.template.spec.containers.[name:install-cni].securityContext.privileged\n            value: true\n  values:\n    cni:\n      image: rancher/mirrored-istio-install-cni:1.9.3\n      excludeNamespaces:\n        - istio-system\n        - kube-system\n      logLevel: info\n      cniBinDir: /opt/cni/bin\n      cniConfDir: /etc/cni/net.d\n')))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u73b0\u5728\u4f60\u5e94\u8be5\u53ef\u4ee5\u6839\u636e\u9700\u8981\u4f7f\u7528 Istio\uff0c\u5305\u62ec Sidecar \u6ce8\u5165\u548c\u901a\u8fc7 Kiali \u8fdb\u884c\u76d1\u63a7\u3002"))}f.isMDXComponent=!0}}]);