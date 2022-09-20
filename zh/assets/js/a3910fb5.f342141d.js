"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[42316],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=o,m=d["".concat(u,".").concat(p)]||d[p]||f[p]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59108:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={title:"Configuring Microsoft Active Directory Federation Service (SAML)",weight:1205},u=void 0,c={unversionedId:"pages-for-subheaders/configure-microsoft-ad-federation-service-saml",id:"version-2.0-2.4/pages-for-subheaders/configure-microsoft-ad-federation-service-saml",title:"Configuring Microsoft Active Directory Federation Service (SAML)",description:"Available as of v2.0.7",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/configure-microsoft-ad-federation-service-saml.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/configure-microsoft-ad-federation-service-saml",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/configure-microsoft-ad-federation-service-saml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/configure-microsoft-ad-federation-service-saml.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Configuring Microsoft Active Directory Federation Service (SAML)",weight:1205},sidebar:"tutorialSidebar",previous:{title:"Configuring Okta (SAML)",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml"},next:{title:"1. Configuring Microsoft AD FS for Rancher",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"}},l={},f=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup Outline",id:"setup-outline",level:2},{value:"Next: Configuring Microsoft AD FS for Rancher",id:"next-configuring-microsoft-ad-fs-for-rancher",level:3}],d={toc:f};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.0.7")),(0,i.kt)("p",null,"If your organization uses Microsoft Active Directory Federation Services (AD FS) for user authentication, you can configure Rancher to allow your users to log in using their AD FS credentials."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"You must have Rancher installed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Obtain your Rancher Server URL. During AD FS configuration, substitute this URL for the ",(0,i.kt)("inlineCode",{parentName:"li"},"<RANCHER_SERVER>")," placeholder."),(0,i.kt)("li",{parentName:"ul"},"You must have a global administrator account on your Rancher installation.")),(0,i.kt)("p",null,"You must have a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services"},"Microsoft AD FS Server")," configured."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Obtain your AD FS Server IP/DNS name. During AD FS configuration, substitute this IP/DNS name for the ",(0,i.kt)("inlineCode",{parentName:"li"},"<AD_SERVER>")," placeholder."),(0,i.kt)("li",{parentName:"ul"},"You must have access to add ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/create-a-relying-party-trust"},"Relying Party Trusts")," on your AD FS Server.")),(0,i.kt)("h2",{id:"setup-outline"},"Setup Outline"),(0,i.kt)("p",null,"Setting up Microsoft AD FS with Rancher Server requires configuring AD FS on your Active Directory server, and configuring Rancher to utilize your AD FS server. The following pages serve as guides for setting up Microsoft AD FS authentication on your Rancher installation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"},"1. Configuring Microsoft AD FS for Rancher")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs"},"2. Configuring Rancher for Microsoft AD FS"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"SAML Provider Caveats:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"SAML Protocol does not support search or lookup for users or groups. Therefore, there is no validation on users or groups when adding them to Rancher."),(0,i.kt)("li",{parentName:"ul"},"When adding users, the exact user IDs (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"UID Field"),") must be entered correctly. As you type the user ID, there will be no search for other  user IDs that may match."),(0,i.kt)("li",{parentName:"ul"},"When adding groups, you must select the group from the drop-down that is next to the text box. Rancher assumes that any input from the text box is a user."),(0,i.kt)("li",{parentName:"ul"},"The group drop-down shows only the groups that you are a member of. You will not be able to add groups that you are not a member of.")))),(0,i.kt)("h3",{id:"next-configuring-microsoft-ad-fs-for-rancher"},(0,i.kt)("a",{parentName:"h3",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"},"Next: Configuring Microsoft AD FS for Rancher")))}p.isMDXComponent=!0}}]);