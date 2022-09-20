"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[50783],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=m(n),g=a,s=d["".concat(p,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(s,l(l({ref:e},u),{},{components:n})):r.createElement(s,l({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43917:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Helm Chart \u9009\u9879",weight:8},p=void 0,m={unversionedId:"reference-guides/monitoring-v2-configuration/helm-chart-options",id:"reference-guides/monitoring-v2-configuration/helm-chart-options",title:"Helm Chart \u9009\u9879",description:"\u914d\u7f6e\u8d44\u6e90\u9650\u5236\u548c\u8bf7\u6c42",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/monitoring-v2-configuration/helm-chart-options.md",sourceDirName:"reference-guides/monitoring-v2-configuration",slug:"/reference-guides/monitoring-v2-configuration/helm-chart-options",permalink:"/zh/reference-guides/monitoring-v2-configuration/helm-chart-options",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/monitoring-v2-configuration/helm-chart-options.md",tags:[],version:"current",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Helm Chart \u9009\u9879",weight:8},sidebar:"tutorialSidebar",previous:{title:"ServiceMonitor \u548c PodMonitor \u914d\u7f6e",permalink:"/zh/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors"},next:{title:"\u793a\u4f8b",permalink:"/zh/reference-guides/monitoring-v2-configuration/examples"}},u={},c=[{value:"\u914d\u7f6e\u8d44\u6e90\u9650\u5236\u548c\u8bf7\u6c42",id:"\u914d\u7f6e\u8d44\u6e90\u9650\u5236\u548c\u8bf7\u6c42",level:2},{value:"Notifiers \u7684\u53ef\u4fe1 CA",id:"notifiers-\u7684\u53ef\u4fe1-ca",level:2},{value:"\u5176\u5b83\u6293\u53d6\u914d\u7f6e",id:"\u5176\u5b83\u6293\u53d6\u914d\u7f6e",level:2},{value:"\u914d\u7f6e\u6253\u5305\u5728 Monitoring V2 \u4e2d\u7684\u5e94\u7528",id:"\u914d\u7f6e\u6253\u5305\u5728-monitoring-v2-\u4e2d\u7684\u5e94\u7528",level:2},{value:"\u589e\u52a0 Alertmanager \u7684\u526f\u672c",id:"\u589e\u52a0-alertmanager-\u7684\u526f\u672c",level:3},{value:"\u4e3a\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f\u914d\u7f6e\u547d\u540d\u7a7a\u95f4",id:"\u4e3a\u6301\u4e45\u5316-grafana-\u4eea\u8868\u677f\u914d\u7f6e\u547d\u540d\u7a7a\u95f4",level:3}],d={toc:c};function g(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u914d\u7f6e\u8d44\u6e90\u9650\u5236\u548c\u8bf7\u6c42"},"\u914d\u7f6e\u8d44\u6e90\u9650\u5236\u548c\u8bf7\u6c42"),(0,i.kt)("p",null,"\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," \u65f6\u53ef\u4ee5\u914d\u7f6e\u8d44\u6e90\u8bf7\u6c42\u548c\u9650\u5236\u3002"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u503c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," Helm Chart \u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/blob/main/charts/rancher-monitoring/values.yaml"},"values.yaml")," \u4e2d\u3002"),(0,i.kt)("p",null,"\u4e0b\u8868\u4e2d\u7684\u9ed8\u8ba4\u503c\u662f\u6240\u9700\u7684\u6700\u4f4e\u8d44\u6e90\u9650\u5236\u548c\u8bf7\u6c42\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u8d44\u6e90\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58\u9650\u5236"),(0,i.kt)("th",{parentName:"tr",align:null},"CPU \u9650\u5236"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58\u8bf7\u6c42"),(0,i.kt)("th",{parentName:"tr",align:null},"CPU \u8bf7\u6c42"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"alertmanager"),(0,i.kt)("td",{parentName:"tr",align:null},"500Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"1000m"),(0,i.kt)("td",{parentName:"tr",align:null},"100Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"100m")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"grafana"),(0,i.kt)("td",{parentName:"tr",align:null},"200Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"200m"),(0,i.kt)("td",{parentName:"tr",align:null},"100Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"100m")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kube-state-metrics subchart"),(0,i.kt)("td",{parentName:"tr",align:null},"200Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"100m"),(0,i.kt)("td",{parentName:"tr",align:null},"130Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"100m")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"prometheus-node-exporter subchart"),(0,i.kt)("td",{parentName:"tr",align:null},"50Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"200m"),(0,i.kt)("td",{parentName:"tr",align:null},"30Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"100m")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"prometheusOperator"),(0,i.kt)("td",{parentName:"tr",align:null},"500Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"200m"),(0,i.kt)("td",{parentName:"tr",align:null},"100Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"100m")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"prometheus"),(0,i.kt)("td",{parentName:"tr",align:null},"2500Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"1000m"),(0,i.kt)("td",{parentName:"tr",align:null},"1750Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"750m")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"\u603b\u8ba1")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"3950Mi")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"2700m")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"2210Mi")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"1250m"))))),(0,i.kt)("p",null,"\u5efa\u8bae\u81f3\u5c11\u914d 50Gi \u5b58\u50a8\u3002"),(0,i.kt)("h2",{id:"notifiers-\u7684\u53ef\u4fe1-ca"},"Notifiers \u7684\u53ef\u4fe1 CA"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u5c06\u53d7\u4fe1\u4efb\u7684 CA \u6dfb\u52a0\u5230 Notifiers\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5c06\u4f60\u4fe1\u4efb\u7684 CA \u5bc6\u6587\u6dfb\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u6216\u5347\u7ea7 ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-monitoring")," Helm Chart\u3002\u5728 Chart \u9009\u9879\u4e2d\uff0c\u5f15\u7528",(0,i.kt)("strong",{parentName:"li"},"\u544a\u8b66 > \u8865\u5145\u5bc6\u6587"),"\u4e2d\u7684\u5bc6\u94a5\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u9ed8\u8ba4\u7684 Alertmanager \u81ea\u5b9a\u4e49\u8d44\u6e90\u5c06\u6709\u6743\u8bbf\u95ee\u4f60\u4fe1\u4efb\u7684 CA\u3002"),(0,i.kt)("h2",{id:"\u5176\u5b83\u6293\u53d6\u914d\u7f6e"},"\u5176\u5b83\u6293\u53d6\u914d\u7f6e"),(0,i.kt)("p",null,"\u5982\u679c\u65e0\u6cd5\u901a\u8fc7 ServiceMonitor \u6216 PodMonitor \u6307\u5b9a\u4f60\u60f3\u8981\u7684\u6293\u53d6\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u5728\u90e8\u7f72\u6216\u5347\u7ea7 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," \u65f6\u63d0\u4f9b ",(0,i.kt)("inlineCode",{parentName:"p"},"additionalScrapeConfigSecret"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config"},"scrape_config")," \u6307\u5b9a\u4e00\u7ec4\u76ee\u6807\u4ee5\u53ca\u6293\u53d6\u8fd9\u4e9b\u76ee\u6807\u7684\u53c2\u6570\u3002\u5728\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a\u6293\u53d6\u914d\u7f6e\u6307\u5b9a\u4e00\u4e2a job\u3002"),(0,i.kt)("p",null,"Istio \u5c31\u662f\u4e00\u4e2a\u53ef\u80fd\u7528\u5230\u8fd9\u4e2a\u914d\u7f6e\u7684\u4f8b\u5b50\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"},"\u672c\u8282"),"\u3002"),(0,i.kt)("h2",{id:"\u914d\u7f6e\u6253\u5305\u5728-monitoring-v2-\u4e2d\u7684\u5e94\u7528"},"\u914d\u7f6e\u6253\u5305\u5728 Monitoring V2 \u4e2d\u7684\u5e94\u7528"),(0,i.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 Monitoring V2 \u6765\u90e8\u7f72 kube-state-metrics \u548c node-exporter\u3002node-exporter \u90e8\u7f72\u4e3a DaemonSet\u3002\u5bf9\u4e8e Monitoring V2 helm Chart\uff0cvalues.yaml \u4e2d\u7684\u6240\u6709\u4e1c\u897f\u90fd\u90e8\u7f72\u4e3a\u5b50 Chart\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u8fd8\u90e8\u7f72\u4e86\u4e0d\u7531 prometheus \u7ba1\u7406\u7684 Grafana\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u67e5\u770b Helm Chart \u5728 kube-state-metrics \u4e2d\u7684\u529f\u80fd\uff0c\u5219\u8fd8\u6709\u5f88\u591a\u53ef\u4ee5\u8bbe\u7f6e\u7684\u503c\u6ca1\u6709\u5728\u9876\u5c42 Chart \u4e2d\u663e\u793a\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\uff0c\u4f60\u53ef\u4ee5\u5728\u9876\u5c42 Chart \u4e2d\u6dfb\u52a0\u8986\u76d6\u5b50 Chart \u7684\u503c\u3002"),(0,i.kt)("h3",{id:"\u589e\u52a0-alertmanager-\u7684\u526f\u672c"},"\u589e\u52a0 Alertmanager \u7684\u526f\u672c"),(0,i.kt)("p",null,"\u4f5c\u4e3a Chart \u90e8\u7f72\u9009\u9879\u7684\u4e00\u90e8\u5206\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u589e\u52a0\u90e8\u7f72\u5230\u96c6\u7fa4\u4e0a\u7684 Alertmanager \u526f\u672c\u7684\u6570\u91cf\u3002\u8fd9\u4e9b\u526f\u672c\u4f7f\u7528\u76f8\u540c\u7684\u5e95\u5c42 Alertmanager Config Secret \u8fdb\u884c\u7ba1\u7406\u3002\u6709\u5173 Alertmanager Config Secret \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager#%E5%A4%9A%E4%B8%AA-alertmanager-%E5%89%AF%E6%9C%AC"},"\u672c\u8282"),"\u3002"),(0,i.kt)("h3",{id:"\u4e3a\u6301\u4e45\u5316-grafana-\u4eea\u8868\u677f\u914d\u7f6e\u547d\u540d\u7a7a\u95f4"},"\u4e3a\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f\u914d\u7f6e\u547d\u540d\u7a7a\u95f4"),(0,i.kt)("p",null,"\u8981\u8ba9 Grafana \u76d1\u63a7\u6240\u6709\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ConfigMap\uff0c\u8bf7\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," Helm chart \u4e2d\u6307\u5b9a\u4ee5\u4e0b\u503c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"grafana.sidecar.dashboards.searchNamespace=ALL\n")),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cMonitoring Chart \u7528\u4e8e\u6dfb\u52a0 Grafana \u4eea\u8868\u677f\u7684 RBAC \u89d2\u8272\u4ec5\u80fd\u8ba9\u7528\u6237\u5c06\u4eea\u8868\u677f\u6dfb\u52a0\u5230\u5b9a\u4e49\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"grafana.dashboards.namespace")," \u4e2d\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-dashboards"),"\u3002"))}g.isMDXComponent=!0}}]);