"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[11405],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,g=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return r?a.createElement(g,l(l({ref:t},u),{},{components:r})):a.createElement(g,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91304:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],i={title:"Project Alerts",weight:2526,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/alerts","/rancher/v2.0-v2.4/en/monitoring-alerting/legacy/alerts/project-alerts","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-alerts/project-alerts","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-alerts/project-alerts/"]},s=void 0,p={unversionedId:"reference-guides/rancher-project-tools/project-alerts",id:"version-2.0-2.4/reference-guides/rancher-project-tools/project-alerts",title:"Project Alerts",description:"To keep your clusters and applications healthy and driving your organizational productivity forward, you need to stay informed of events occurring in your clusters and projects, both planned and unplanned. When an event occurs, your alert is triggered, and you are sent a notification. You can then, if necessary, follow up with corrective actions.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/rancher-project-tools/project-alerts.md",sourceDirName:"reference-guides/rancher-project-tools",slug:"/reference-guides/rancher-project-tools/project-alerts",permalink:"/zh/v2.0-v2.4/reference-guides/rancher-project-tools/project-alerts",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/rancher-project-tools/project-alerts.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Project Alerts",weight:2526,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/alerts","/rancher/v2.0-v2.4/en/monitoring-alerting/legacy/alerts/project-alerts","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-alerts/project-alerts","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-alerts/project-alerts/"]},sidebar:"tutorialSidebar",previous:{title:"Tools for Logging, Monitoring, and More",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/project-tools"},next:{title:"Project Logging",permalink:"/zh/v2.0-v2.4/reference-guides/rancher-project-tools/project-logging"}},u={},c=[{value:"Alerts Scope",id:"alerts-scope",level:2},{value:"Default Project-level Alerts",id:"default-project-level-alerts",level:2},{value:"Adding Project Alerts",id:"adding-project-alerts",level:2},{value:"Managing Project Alerts",id:"managing-project-alerts",level:2},{value:"Project Alert Rule Configuration",id:"project-alert-rule-configuration",level:2},{value:"Pod Alerts",id:"pod-alerts",level:2},{value:"When a",id:"when-a",level:3},{value:"Is",id:"is",level:3},{value:"Send a",id:"send-a",level:3},{value:"Advanced Options",id:"advanced-options",level:3},{value:"Workload Alerts",id:"workload-alerts",level:2},{value:"When a",id:"when-a-1",level:3},{value:"Is",id:"is-1",level:3},{value:"Send a",id:"send-a-1",level:3},{value:"Advanced Options",id:"advanced-options-1",level:3},{value:"Workload Selector Alerts",id:"workload-selector-alerts",level:2},{value:"When a",id:"when-a-2",level:3},{value:"Is",id:"is-2",level:3},{value:"Send a",id:"send-a-2",level:3},{value:"Advanced Options",id:"advanced-options-2",level:3},{value:"Metric Expression Alerts",id:"metric-expression-alerts",level:2},{value:"When A",id:"when-a-3",level:3},{value:"Is",id:"is-3",level:3},{value:"For",id:"for",level:3},{value:"Send a",id:"send-a-3",level:3},{value:"Advanced Options",id:"advanced-options-3",level:3}],d={toc:c};function h(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To keep your clusters and applications healthy and driving your organizational productivity forward, you need to stay informed of events occurring in your clusters and projects, both planned and unplanned. When an event occurs, your alert is triggered, and you are sent a notification. You can then, if necessary, follow up with corrective actions."),(0,o.kt)("p",null,"Notifiers and alerts are built on top of the ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/alertmanager/"},"Prometheus Alertmanager"),". Leveraging these tools, Rancher can notify ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owners")," and ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"project owners")," of events they need to address."),(0,o.kt)("p",null,"Before you can receive alerts, one or more ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/notifiers"},"notifier")," must be configured at the cluster level."),(0,o.kt)("p",null,"Only ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrators"),", ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owners or members"),", or ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"project owners")," can manage project alerts."),(0,o.kt)("h2",{id:"alerts-scope"},"Alerts Scope"),(0,o.kt)("p",null,"The scope for alerts can be set at either the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/cluster-alerts"},"cluster level")," or project level."),(0,o.kt)("p",null,"At the project level, Rancher monitors specific deployments and sends alerts for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deployment availability"),(0,o.kt)("li",{parentName:"ul"},"Workloads status"),(0,o.kt)("li",{parentName:"ul"},"Pod status"),(0,o.kt)("li",{parentName:"ul"},"The Prometheus expression cross the thresholds")),(0,o.kt)("h2",{id:"default-project-level-alerts"},"Default Project-level Alerts"),(0,o.kt)("p",null,"When you enable monitoring for the project, some project-level alerts are provided. You can receive these alerts if a ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/notifiers"},"notifier")," for them is configured at the cluster level."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Alert"),(0,o.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Less than half workload available"),(0,o.kt)("td",{parentName:"tr",align:null},"A critical alert is triggered if less than half of a workload is available, based on workloads where the key is ",(0,o.kt)("inlineCode",{parentName:"td"},"app")," and the value is ",(0,o.kt)("inlineCode",{parentName:"td"},"workload"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Memory usage close to the quota"),(0,o.kt)("td",{parentName:"tr",align:null},"A warning alert is triggered if the workload's memory usage exceeds the memory resource quota that is set for the workload. You can see the memory limit in the Rancher UI if you go to the workload under the ",(0,o.kt)("strong",{parentName:"td"},"Security & Host Config")," tab.")))),(0,o.kt)("p",null,"For information on other default alerts, refer to the section on ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-alerts/default-alerts"},"cluster-level alerts.")),(0,o.kt)("h2",{id:"adding-project-alerts"},"Adding Project Alerts"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisite:")," Before you can receive project alerts, you must add a notifier.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, navigate to the project that you want to configure project alerts for. Select ",(0,o.kt)("strong",{parentName:"p"},"Tools > Alerts"),". In versions before v2.2.0, you can choose ",(0,o.kt)("strong",{parentName:"p"},"Resources > Alerts"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Add Alert Group"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Name")," for the alert that describes its purpose, you could group alert rules for the different purpose.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Based on the type of alert you want to create, fill out the form. For help, refer to the ",(0,o.kt)("a",{parentName:"p",href:"#project-alert-rule-configuration"},"configuration")," section below.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Continue adding more alert rules to the group.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finally, choose the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/notifiers"},"notifiers")," that send you alerts."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can set up multiple notifiers."),(0,o.kt)("li",{parentName:"ul"},"You can change notifier recipients on the fly."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Your alert is configured. A notification is sent when the alert is triggered."),(0,o.kt)("h2",{id:"managing-project-alerts"},"Managing Project Alerts"),(0,o.kt)("p",null,"To manage project alerts, browse to the project that alerts you want to manage. Then select ",(0,o.kt)("strong",{parentName:"p"},"Tools > Alerts"),". In versions before v2.2.0, you can choose ",(0,o.kt)("strong",{parentName:"p"},"Resources > Alerts"),". You can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deactivate/Reactive alerts"),(0,o.kt)("li",{parentName:"ul"},"Edit alert settings"),(0,o.kt)("li",{parentName:"ul"},"Delete unnecessary alerts"),(0,o.kt)("li",{parentName:"ul"},"Mute firing alerts"),(0,o.kt)("li",{parentName:"ul"},"Unmute muted alerts")),(0,o.kt)("h2",{id:"project-alert-rule-configuration"},"Project Alert Rule Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#pod-alerts"},"Pod Alerts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#workload-alerts"},"Workload Alerts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#workload-selector-alerts"},"Workload Selector Alerts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#metric-expression-alerts"},"Metric Expression Alerts"))),(0,o.kt)("h2",{id:"pod-alerts"},"Pod Alerts"),(0,o.kt)("p",null,"This alert type monitors for the status of a specific pod."),(0,o.kt)("p",null,"Each of the below sections corresponds to a part of the alert rule configuration section in the Rancher UI."),(0,o.kt)("h3",{id:"when-a"},"When a"),(0,o.kt)("p",null,"Select the ",(0,o.kt)("strong",{parentName:"p"},"Pod")," option, and then select a pod from the drop-down."),(0,o.kt)("h3",{id:"is"},"Is"),(0,o.kt)("p",null,"Select a pod status that triggers an alert:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Not Running")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Not Scheduled")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Restarted ","<","x",">"," times within the last ","<","x",">"," Minutes"))),(0,o.kt)("h3",{id:"send-a"},"Send a"),(0,o.kt)("p",null,"Select the urgency level of the alert. The options are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Critical"),": Most urgent"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Warning"),": Normal urgency"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Info"),": Least urgent")),(0,o.kt)("p",null,"Select the urgency level of the alert based on pod state. For example, select ",(0,o.kt)("strong",{parentName:"p"},"Info")," for Job pod which stop running after job finished. However, if an important pod isn't scheduled, it may affect operations, so choose ",(0,o.kt)("strong",{parentName:"p"},"Critical"),"."),(0,o.kt)("h3",{id:"advanced-options"},"Advanced Options"),(0,o.kt)("p",null,"By default, the below options will apply to all alert rules within the group."),(0,o.kt)("p",null,"You can disable these advanced options when configuring a specific rule."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Group Wait Time"),": How long to wait to buffer alerts of the same group before sending initially, default to 30 seconds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Group Interval Time"),": How long to wait before sending an alert that has been added to a group which contains already fired alerts, default to 30 seconds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Repeat Wait Time"),": How long to wait before sending an alert that has been added to a group which contains already fired alerts, default to 1 hour.")),(0,o.kt)("h2",{id:"workload-alerts"},"Workload Alerts"),(0,o.kt)("p",null,"This alert type monitors for the availability of a workload."),(0,o.kt)("p",null,"Each of the below sections corresponds to a part of the alert rule configuration section in the Rancher UI."),(0,o.kt)("h3",{id:"when-a-1"},"When a"),(0,o.kt)("p",null,"Choose the ",(0,o.kt)("strong",{parentName:"p"},"Workload")," option. Then choose a workload from the drop-down."),(0,o.kt)("h3",{id:"is-1"},"Is"),(0,o.kt)("p",null,"Choose an availability percentage using the slider. The alert is triggered when the workload's availability on your cluster nodes drops below the set percentage."),(0,o.kt)("h3",{id:"send-a-1"},"Send a"),(0,o.kt)("p",null,"Select the urgency level of the alert."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Critical"),": Most urgent"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Warning"),": Normal urgency"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Info"),": Least urgent")),(0,o.kt)("p",null,"Select the urgency level of the alert based on the percentage you choose and the importance of the workload."),(0,o.kt)("h3",{id:"advanced-options-1"},"Advanced Options"),(0,o.kt)("p",null,"By default, the below options will apply to all alert rules within the group."),(0,o.kt)("p",null,"You can disable these advanced options when configuring a specific rule."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Group Wait Time"),": How long to wait to buffer alerts of the same group before sending initially, default to 30 seconds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Group Interval Time"),": How long to wait before sending an alert that has been added to a group which contains already fired alerts, default to 30 seconds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Repeat Wait Time"),": How long to wait before sending an alert that has been added to a group which contains already fired alerts, default to 1 hour.")),(0,o.kt)("h2",{id:"workload-selector-alerts"},"Workload Selector Alerts"),(0,o.kt)("p",null,"This alert type monitors for the availability of all workloads marked with tags that you've specified."),(0,o.kt)("p",null,"Each of the below sections corresponds to a part of the alert rule configuration section in the Rancher UI."),(0,o.kt)("h3",{id:"when-a-2"},"When a"),(0,o.kt)("p",null,"Select the ",(0,o.kt)("strong",{parentName:"p"},"Workload Selector")," option, and then click ",(0,o.kt)("strong",{parentName:"p"},"Add Selector")," to enter the key value pair for a label. If one of the workloads drops below your specifications, an alert is triggered. This label should be applied to one or more of your workloads."),(0,o.kt)("h3",{id:"is-2"},"Is"),(0,o.kt)("p",null,"Choose an availability percentage using the slider. The alert is triggered when the workload's availability on your cluster nodes drops below the set percentage."),(0,o.kt)("h3",{id:"send-a-2"},"Send a"),(0,o.kt)("p",null,"Select the urgency level of the alert."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Critical"),": Most urgent"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Warning"),": Normal urgency"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Info"),": Least urgent")),(0,o.kt)("p",null,"Select the urgency level of the alert based on the percentage you choose and the importance of the workload."),(0,o.kt)("h3",{id:"advanced-options-2"},"Advanced Options"),(0,o.kt)("p",null,"By default, the below options will apply to all alert rules within the group."),(0,o.kt)("p",null,"You can disable these advanced options when configuring a specific rule."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Group Wait Time"),": How long to wait to buffer alerts of the same group before sending initially, default to 30 seconds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Group Interval Time"),": How long to wait before sending an alert that has been added to a group which contains already fired alerts, default to 30 seconds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Repeat Wait Time"),": How long to wait before sending an alert that has been added to a group which contains already fired alerts, default to 1 hour.")),(0,o.kt)("h2",{id:"metric-expression-alerts"},"Metric Expression Alerts"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v2.2.4")),(0,o.kt)("p",null,"If you enable ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/project-tools#monitoring"},"project monitoring"),", this alert type monitors for the overload from Prometheus expression querying."),(0,o.kt)("p",null,"Each of the below sections corresponds to a part of the alert rule configuration section in the Rancher UI."),(0,o.kt)("h3",{id:"when-a-3"},"When A"),(0,o.kt)("p",null,"Input or select an ",(0,o.kt)("strong",{parentName:"p"},"Expression"),". The dropdown shows the original metrics from Prometheus, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/cadvisor"},(0,o.kt)("strong",{parentName:"a"},"Container"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kube-state-metrics"},(0,o.kt)("strong",{parentName:"a"},"Kubernetes Resources"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Customize")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://docs.grafana.org/administration/metrics/"},(0,o.kt)("strong",{parentName:"a"},"Project Level Grafana"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Project Level Prometheus"))),(0,o.kt)("h3",{id:"is-3"},"Is"),(0,o.kt)("p",null,"Choose a comparison."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Equal"),": Trigger alert when expression value equal to the threshold."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Not Equal"),": Trigger alert when expression value not equal to the threshold."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Greater Than"),": Trigger alert when expression value greater than to threshold."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Less Than"),": Trigger alert when expression value equal or less than the threshold."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Greater or Equal"),": Trigger alert when expression value greater to equal to the threshold."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Less or Equal"),": Trigger alert when expression value less or equal to the threshold.")),(0,o.kt)("p",null,"If applicable, choose a comparison value or a threshold for the alert to be triggered."),(0,o.kt)("h3",{id:"for"},"For"),(0,o.kt)("p",null,"Select a duration for a trigger alert when the expression value crosses the threshold longer than the configured duration."),(0,o.kt)("h3",{id:"send-a-3"},"Send a"),(0,o.kt)("p",null,"Select the urgency level of the alert."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Critical"),": Most urgent"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Warning"),": Normal urgency"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Info"),": Least urgent")),(0,o.kt)("p",null,"Select the urgency level of the alert based on its impact on operations. For example, an alert triggered when a expression for container memory close to the limit raises above 60% deems an urgency of ",(0,o.kt)("strong",{parentName:"p"},"Info"),", but raised about 95% deems an urgency of ",(0,o.kt)("strong",{parentName:"p"},"Critical"),"."),(0,o.kt)("h3",{id:"advanced-options-3"},"Advanced Options"),(0,o.kt)("p",null,"By default, the below options will apply to all alert rules within the group. You can disable these advanced options when configuring a specific rule."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Group Wait Time"),": How long to wait to buffer alerts of the same group before sending initially, default to 30 seconds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Group Interval Time"),": How long to wait before sending an alert that has been added to a group which contains already fired alerts, default to 30 seconds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Repeat Wait Time"),": How long to wait before sending an alert that has been added to a group which contains already fired alerts, default to 1 hour.")))}h.isMDXComponent=!0}}]);