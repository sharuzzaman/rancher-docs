"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[69356],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56066:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"\u6a21\u677f\u521b\u5efa\u8005\u6743\u9650",weight:10},s=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions",title:"\u6a21\u677f\u521b\u5efa\u8005\u6743\u9650",description:"\u7ba1\u7406\u5458\u6709\u521b\u5efa RKE \u6a21\u677f\u7684\u6743\u9650\uff0c\u53ea\u6709\u7ba1\u7406\u5458\u53ef\u4ee5\u5c06\u8be5\u6743\u9650\u6388\u4e88\u5176\u4ed6\u7528\u6237\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions.md",tags:[],version:"current",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u6a21\u677f\u521b\u5efa\u8005\u6743\u9650",weight:10},sidebar:"tutorialSidebar",previous:{title:"RKE \u6a21\u677f",permalink:"/zh/pages-for-subheaders/about-rke1-templates"},next:{title:"\u8bbf\u95ee\u548c\u5171\u4eab",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates"}},p={},c=[{value:"\u5141\u8bb8\u7528\u6237\u521b\u5efa\u6a21\u677f",id:"\u5141\u8bb8\u7528\u6237\u521b\u5efa\u6a21\u677f",level:3},{value:"\u9ed8\u8ba4\u5141\u8bb8\u65b0\u7528\u6237\u521b\u5efa\u6a21\u677f",id:"\u9ed8\u8ba4\u5141\u8bb8\u65b0\u7528\u6237\u521b\u5efa\u6a21\u677f",level:3},{value:"\u53d6\u6d88\u521b\u5efa\u6a21\u677f\u7684\u6743\u9650",id:"\u53d6\u6d88\u521b\u5efa\u6a21\u677f\u7684\u6743\u9650",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7ba1\u7406\u5458\u6709\u521b\u5efa RKE \u6a21\u677f\u7684\u6743\u9650\uff0c\u53ea\u6709\u7ba1\u7406\u5458\u53ef\u4ee5\u5c06\u8be5\u6743\u9650\u6388\u4e88\u5176\u4ed6\u7528\u6237\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u7ba1\u7406\u5458\u6743\u9650\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"\u5168\u5c40\u6743\u9650\u6587\u6863"),"\u3002"),(0,o.kt)("h1",{id:"\u6388\u4e88\u7528\u6237\u521b\u5efa\u6a21\u677f\u7684\u6743\u9650"},"\u6388\u4e88\u7528\u6237\u521b\u5efa\u6a21\u677f\u7684\u6743\u9650"),(0,o.kt)("p",null,"\u53ea\u6709\u5177\u6709",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa RKE \u6a21\u677f"),"\u5168\u5c40\u6743\u9650\u7684\u7528\u6237\u624d\u80fd\u521b\u5efa\u6a21\u677f\u3002"),(0,o.kt)("p",null,"\u7ba1\u7406\u5458\u62e5\u6709\u521b\u5efa\u6a21\u677f\u7684\u5168\u5c40\u6743\u9650\uff0c\u53ea\u6709\u7ba1\u7406\u5458\u624d\u80fd\u5c06\u8be5\u6743\u9650\u6388\u4e88\u5176\u4ed6\u7528\u6237\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u5141\u8bb8\u7528\u6237\u4fee\u6539\u73b0\u6709\u6a21\u677f\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates"},"\u5171\u4eab\u6a21\u677f"),"\u3002"),(0,o.kt)("p",null,"\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u6388\u4e88\u7528\u6237\u521b\u5efa RKE \u6a21\u677f\u7684\u6743\u9650\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u7f16\u8f91",(0,o.kt)("a",{parentName:"li",href:"#%E5%85%81%E8%AE%B8%E7%94%A8%E6%88%B7%E5%88%9B%E5%BB%BA%E6%A8%A1%E6%9D%BF"},"\u5355\u4e2a\u7528\u6237"),"\u7684\u6743\u9650"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u66f4\u6539",(0,o.kt)("a",{parentName:"li",href:"#%E9%BB%98%E8%AE%A4%E5%85%81%E8%AE%B8%E6%96%B0%E7%94%A8%E6%88%B7%E5%88%9B%E5%BB%BA%E6%A8%A1%E6%9D%BF"},"\u65b0\u7528\u6237\u7684\u9ed8\u8ba4\u6743\u9650"))),(0,o.kt)("h3",{id:"\u5141\u8bb8\u7528\u6237\u521b\u5efa\u6a21\u677f"},"\u5141\u8bb8\u7528\u6237\u521b\u5efa\u6a21\u677f"),(0,o.kt)("p",null,"\u7ba1\u7406\u5458\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u5c06",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa RKE \u6a21\u677f"),"\u89d2\u8272\u5355\u72ec\u6388\u4e88\u7ed9\u4efb\u4f55\u73b0\u6709\u7528\u6237\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u7528\u6237"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u8981\u7f16\u8f91\u7684\u7528\u6237\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u5185\u7f6e\u89d2\u8272"),"\u4e2d\uff0c\u9009\u4e2d",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa RKE \u96c6\u7fa4\u6a21\u677f"),"\u89d2\u8272\u4ee5\u53ca\u7528\u6237\u5e94\u5177\u6709\u7684\u5176\u4ed6\u89d2\u8272\u3002\u4f60\u53ef\u80fd\u8fd8\u9700\u8981\u9009\u4e2d",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa RKE \u6a21\u677f\u4fee\u8ba2\u7248"),"\u590d\u9009\u6846\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u7528\u6237\u62e5\u6709\u521b\u5efa RKE \u6a21\u677f\u7684\u6743\u9650\u3002"),(0,o.kt)("h3",{id:"\u9ed8\u8ba4\u5141\u8bb8\u65b0\u7528\u6237\u521b\u5efa\u6a21\u677f"},"\u9ed8\u8ba4\u5141\u8bb8\u65b0\u7528\u6237\u521b\u5efa\u6a21\u677f"),(0,o.kt)("p",null,"\u7ba1\u7406\u5458\u4e5f\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u4e3a\u6240\u6709\u65b0\u7528\u6237\u6388\u4e88\u521b\u5efa RKE \u6a21\u677f\u7684\u9ed8\u8ba4\u6743\u9650\u3002\u8fd9\u4e0d\u4f1a\u5f71\u54cd\u73b0\u6709\u7528\u6237\u7684\u6743\u9650\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u89d2\u8272"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa RKE \u96c6\u7fa4\u6a21\u677f"),"\u89d2\u8272\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9",(0,o.kt)("strong",{parentName:"li"},"\u662f\uff1a\u65b0\u7528\u6237\u7684\u9ed8\u8ba4\u89d2\u8272"),"\u9009\u9879\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u5e0c\u671b\u65b0\u7528\u6237\u80fd\u591f\u521b\u5efa RKE \u6a21\u677f\u4fee\u8ba2\uff0c\u8bf7\u5c06\u8be5\u89d2\u8272\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u503c\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5728\u6b64 Rancher \u5b89\u88c5\u4e2d\u521b\u5efa\u7684\u4efb\u4f55\u65b0\u7528\u6237\u90fd\u53ef\u4ee5\u521b\u5efa RKE \u6a21\u677f\u3002\u73b0\u6709\u7528\u6237\u5c06\u4e0d\u4f1a\u83b7\u5f97\u6b64\u6743\u9650\u3002"),(0,o.kt)("h3",{id:"\u53d6\u6d88\u521b\u5efa\u6a21\u677f\u7684\u6743\u9650"},"\u53d6\u6d88\u521b\u5efa\u6a21\u677f\u7684\u6743\u9650"),(0,o.kt)("p",null,"\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u5220\u9664\u7528\u6237\u521b\u5efa\u6a21\u677f\u7684\u6743\u9650\u3002\u8bf7\u6ce8\u610f\uff0c\u65e0\u8bba\u662f\u5426\u9009\u62e9\u4e86\u7ec6\u7c92\u5ea6\u6743\u9650\uff0c\u7ba1\u7406\u5458\u90fd\u53ef\u4ee5\u5b8c\u5168\u63a7\u5236\u6240\u6709\u8d44\u6e90\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u7528\u6237"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u8981\u7f16\u8f91\u6743\u9650\u7684\u7528\u6237\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u5185\u7f6e\u89d2\u8272"),"\u4e2d\uff0c\u53d6\u6d88\u9009\u4e2d",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa RKE \u6a21\u677f"),"\u548c",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa RKE \u6a21\u677f\u4fee\u8ba2\u7248"),"\u590d\u9009\u6846\uff08\u5982\u679c\u9002\u7528\uff09\u3002\u5728\u6b64\u5904\uff0c\u4f60\u53ef\u4ee5\u5c06\u7528\u6237\u6539\u56de\u666e\u901a\u7528\u6237\uff0c\u6216\u6388\u4e88\u7528\u6237\u4e00\u7ec4\u4e0d\u540c\u7684\u6743\u9650\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u7528\u6237\u65e0\u6cd5\u521b\u5efa RKE \u6a21\u677f\u3002"))}d.isMDXComponent=!0}}]);