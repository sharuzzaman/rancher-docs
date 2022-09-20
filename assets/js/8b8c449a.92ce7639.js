"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[51529],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53319:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"2. Configuring Rancher for Microsoft AD FS",weight:1205},s=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs",title:"2. Configuring Rancher for Microsoft AD FS",description:"Available as of v2.0.7",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"2. Configuring Rancher for Microsoft AD FS",weight:1205},sidebar:"tutorialSidebar",previous:{title:"1. Configuring Microsoft AD FS for Rancher",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"},next:{title:"Configuring Shibboleth (SAML)",permalink:"/v2.0-v2.4/pages-for-subheaders/configure-shibboleth-saml"}},c={},m=[],p={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v2.0.7")),(0,o.kt)("p",null,"After you complete ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"},"Configuring Microsoft AD FS for Rancher"),", enter your AD FS information into Rancher to allow AD FS users to authenticate with Rancher."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important Notes For Configuring Your AD FS Server:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"The SAML 2.0 WebSSO Protocol Service URL is: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<RANCHER_SERVER>/v1-saml/adfs/saml/acs")),(0,o.kt)("li",{parentName:"ul"},"The Relying Party Trust identifier URL is: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<RANCHER_SERVER>/v1-saml/adfs/saml/metadata")),(0,o.kt)("li",{parentName:"ul"},"You must export the ",(0,o.kt)("inlineCode",{parentName:"li"},"federationmetadata.xml")," file from your AD FS server. This can be found at: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<AD_SERVER>/federationmetadata/2007-06/federationmetadata.xml")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,o.kt)("strong",{parentName:"p"},"Security > Authentication")," from the main menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Microsoft Active Directory Federation Services"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete the ",(0,o.kt)("strong",{parentName:"p"},"Configure AD FS Account")," form. Microsoft AD FS lets you specify an existing Active Directory (AD) server. The ",(0,o.kt)("a",{parentName:"p",href:"#configuration"},"configuration section below")," describe how you can map AD attributes to fields within Rancher."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After you complete the ",(0,o.kt)("strong",{parentName:"p"},"Configure AD FS Account")," form, click ",(0,o.kt)("strong",{parentName:"p"},"Authenticate with AD FS"),", which is at the bottom of the page."),(0,o.kt)("p",{parentName:"li"},"Rancher redirects you to the AD FS login page. Enter credentials that authenticate with Microsoft AD FS to validate your Rancher AD FS configuration."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," You may have to disable your popup blocker to see the AD FS login page.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with MS FS. Your users can now sign into Rancher using their MS FS logins."),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Display Name Field"),(0,o.kt)("td",{parentName:"tr",align:null},"The AD attribute that contains the display name of users. ",(0,o.kt)("br",null),(0,o.kt)("br",null),"Example: ",(0,o.kt)("inlineCode",{parentName:"td"},"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"User Name Field"),(0,o.kt)("td",{parentName:"tr",align:null},"The AD attribute that contains the user name/given name. ",(0,o.kt)("br",null),(0,o.kt)("br",null),"Example: ",(0,o.kt)("inlineCode",{parentName:"td"},"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UID Field"),(0,o.kt)("td",{parentName:"tr",align:null},"An AD attribute that is unique to every user. ",(0,o.kt)("br",null),(0,o.kt)("br",null),"Example: ",(0,o.kt)("inlineCode",{parentName:"td"},"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Groups Field"),(0,o.kt)("td",{parentName:"tr",align:null},"Make entries for managing group memberships. ",(0,o.kt)("br",null),(0,o.kt)("br",null),"Example: ",(0,o.kt)("inlineCode",{parentName:"td"},"http://schemas.xmlsoap.org/claims/Group"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Rancher API Host"),(0,o.kt)("td",{parentName:"tr",align:null},"The URL for your Rancher Server.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Private Key / Certificate"),(0,o.kt)("td",{parentName:"tr",align:null},"This is a key-certificate pair to create a secure shell between Rancher and your AD FS. Ensure you set the Common Name (CN) to your Rancher Server URL.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"td",href:"#cert-command"},"Certificate creation command"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Metadata XML"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"federationmetadata.xml")," file exported from your AD FS server. ",(0,o.kt)("br",null),(0,o.kt)("br",null),"You can find this file at ",(0,o.kt)("inlineCode",{parentName:"td"},"https://<AD_SERVER>/federationmetadata/2007-06/federationmetadata.xml"),".")))),(0,o.kt)("a",{id:"cert-command"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tip:")," You can generate a certificate using an openssl command. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"\n')))}d.isMDXComponent=!0}}]);