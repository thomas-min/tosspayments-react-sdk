"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[149],{876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,y=m["".concat(s,".").concat(p)]||m[p]||l[p]||a;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>W,contentTitle:()=>S,default:()=>K,frontMatter:()=>R,metadata:()=>F,toc:()=>A});var r,o=n(7896),a=n(2784),i=n(876);function c(e){return window[e]}var s="https://js.tosspayments.com/v1/payment-widget";function u(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).src,o=void 0===n?s:n;return"undefined"==typeof window?Promise.resolve({}):function(e,t){var n=document.querySelector('[src="'.concat(e,'"]'));if(null!=n&&void 0!==r)return r;if(null!=n&&void 0!==c(t))return Promise.resolve(c(t));var o=document.createElement("script");return o.src=e,r=new Promise((function(n,r){document.head.appendChild(o),window.addEventListener("TossPayments:initialize:".concat(t),(function(){void 0!==c(t)?n(c(t)):r(new Error("[TossPayments SDK] Failed to load script: [".concat(e,"]")))}))}))}(o,"PaymentWidget").then((function(n){return n(e,t)}))}var d=function(){return d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},d.apply(this,arguments)};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}var l=(0,a.createContext)(void 0),p=function(){var e=(0,a.useContext)(l);if(!e)throw"usePaymentWidget must be used inside PaymentWidgetProvider";return e},y=function(e){var t=e.id,n=void 0===t?"payment-agreement":t,r=e.onAgreementChange,o=m(e,["id","onAgreementChange"]),i=p().paymentWidget;return(0,a.useEffect)((function(){var e=null==i?void 0:i.renderAgreement("#"+n);r&&e&&e.on("change",r)}),[n,i,r]),a.createElement("section",d({id:n},o))},f=function(e){var t=e.id,n=void 0===t?"payment-methods":t,r=e.amount,o=m(e,["id","amount"]),i=p(),c=i.paymentWidget,s=i.paymentMethodsRef;return(0,a.useEffect)((function(){var e=null==c?void 0:c.renderPaymentMethods("#"+n,r);e&&(s.current=e)}),[r,n,s,c]),a.createElement("section",d({id:n},o))},g=function(e){var t=e.children,n=e.clientKey,r=e.customerKey,o=(0,a.useState)(void 0),i=o[0],c=o[1],s=(0,a.useRef)(void 0);return(0,a.useEffect)((function(){u(n,r).then((function(e){c(e)}))}),[n,r]),a.createElement(l.Provider,{value:{paymentWidget:i,paymentMethodsRef:s}},t)},v=function(e){var t=e.paymentRequestParameters,n=e.onClick,r=e.onSuccess,o=e.onFail,i=m(e,["paymentRequestParameters","onClick","onSuccess","onFail"]),c=p().paymentWidget,s=(0,a.useCallback)((function(e){n&&n(e),null==c||c.requestPayment(t).then(r).catch(o)}),[n,o,r,t,c]);return a.createElement("button",d({},i,{onClick:s}))},h=n(2322);const b=15e3,P="test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq",w="5eLhuP7cVYPuKdEB9LuVt",k={orderId:"toty3r7YrBNBD3RgjHUInAmlXsFiTE",orderName:"\ud1a0\uc2a4 \ud2f0\uc154\uce20 \uc678 2\uac74",customerEmail:"customer123@gmail.com",customerName:"\uae40\ud1a0\uc2a4"},O=e=>console.log(e),j=e=>console.log(e),E=e=>console.log(e);function x(){const{paymentMethodsRef:e}=p();return(0,h.jsxs)("div",{style:{marginBottom:"0.5rem"},children:[(0,h.jsx)("input",{type:"checkbox",id:"is-coupon-enabled",onChange:t=>{t.target.checked?e.current?.updateAmount(b-5e3,"\ucfe0\ud3f0"):e.current?.updateAmount(b,"")}}),(0,h.jsx)("label",{htmlFor:"is-coupon-enabled",children:"5000\uc6d0 \ud560\uc778\ud558\uae30"})]})}const C=function(){return(0,h.jsx)("div",{style:{display:"flex",justifyContent:"center",alignContent:"center",border:"1px solid  lightgray",backgroundColor:"#f6f8fa",borderColor:"#f6f8fa",borderRadius:"0.25rem"},children:(0,h.jsx)("main",{style:{width:"30rem",backgroundColor:"white",borderRadius:"0.5rem",padding:"1rem",margin:"1rem"},children:(0,h.jsxs)(g,{clientKey:P,customerKey:w,children:[(0,h.jsx)(f,{amount:b}),(0,h.jsx)(y,{onAgreementChange:O}),(0,h.jsxs)("div",{style:{padding:"1rem"},children:[(0,h.jsx)(x,{}),(0,h.jsx)(v,{onSuccess:j,onFail:E,paymentRequestParameters:k,style:{color:"white",background:"#0064FF",border:"#0064FF",borderRadius:"0.25rem",padding:"0.5rem",width:"100%",fontSize:"1rem",fontWeight:"bold"},children:"\uacb0\uc81c\ud558\uae30"})]})]})})})},R={sidebar_position:1},S="Overview",F={unversionedId:"payment-widget/overview",id:"payment-widget/overview",title:"Overview",description:"\uacb0\uc81c\uc704\uc82f",source:"@site/docs/payment-widget/overview.mdx",sourceDirName:"payment-widget",slug:"/payment-widget/overview",permalink:"/tosspayments-react-sdk/payment-widget/overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/payment-widget/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\uacb0\uc81c\uc704\uc82f",permalink:"/tosspayments-react-sdk/category/\uacb0\uc81c\uc704\uc82f"},next:{title:"PaymentProvider",permalink:"/tosspayments-react-sdk/payment-widget/PaymentProvider"}},W={},A=[{value:"\uacb0\uc81c\uc704\uc82f",id:"\uacb0\uc81c\uc704\uc82f",level:2},{value:"\ud14c\uc2a4\ud2b8 \uacb0\uc81c",id:"\ud14c\uc2a4\ud2b8-\uacb0\uc81c",level:3},{value:"\uc608\uc81c \ucf54\ub4dc",id:"\uc608\uc81c-\ucf54\ub4dc",level:3}],q={toc:A},D="wrapper";function K(e){let{components:t,...n}=e;return(0,i.kt)(D,(0,o.Z)({},q,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("h2",{id:"\uacb0\uc81c\uc704\uc82f"},"\uacb0\uc81c\uc704\uc82f"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.tosspayments.com/reference/widget-sdk#%EA%B2%B0%EC%A0%9C%EC%9C%84%EC%A0%AF-javascript-sdk"},"tosspayments \uacf5\uc2dd \ubb38\uc11c")),(0,i.kt)("h3",{id:"\ud14c\uc2a4\ud2b8-\uacb0\uc81c"},"\ud14c\uc2a4\ud2b8 \uacb0\uc81c"),(0,i.kt)(C,{mdxType:"PaymentWidgetExample"}),(0,i.kt)("h3",{id:"\uc608\uc81c-\ucf54\ub4dc"},"\uc608\uc81c \ucf54\ub4dc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  PaymentAgreementSection,\n  PaymentMethodsSection,\n  PaymentRequestButton,\n  PaymentWidgetProvider,\n  usePaymentWidget,\n} from "@thomas-min/tosspayments-react";\n\nconst amount = 15000;\nconst clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";\nconst customerKey = "5eLhuP7cVYPuKdEB9LuVt";\nconst paymentRequestParameters = {\n  orderId: "toty3r7YrBNBD3RgjHUInAmlXsFiTE",\n  orderName: "\ud1a0\uc2a4 \ud2f0\uc154\uce20 \uc678 2\uac74",\n  customerEmail: "customer123@gmail.com",\n  customerName: "\uae40\ud1a0\uc2a4",\n};\n\nconst onAgreementChange = (e) => console.log(e);\nconst onSuccess = (e) => console.log(e);\nconst onFail = (e) => console.log(e);\n\nfunction PaymentWidgetExample() {\n  return (\n    <main style={{ width: "25rem" }}>\n      <PaymentWidgetProvider clientKey={clientKey} customerKey={customerKey}>\n        <PaymentMethodsSection amount={amount} />\n        <PaymentAgreementSection onAgreementChange={onAgreementChange} />\n        <div div style={{ padding: "0" }}>\n          <EnableDiscount />\n          <PaymentRequestButton\n            onSuccess={onSuccess}\n            onFail={onFail}\n            paymentRequestParameters={paymentRequestParameters}\n            style={{\n              color: "white",\n              background: "#0064FF",\n              border: "#0064FF",\n              borderRadius: "0.25rem",\n              padding: "0.5rem",\n              width: "100%",\n              fontSize: "1rem",\n              fontWeight: "bold",\n            }}\n          >\n            \uacb0\uc81c\ud558\uae30\n          </PaymentRequestButton>\n        </div>\n      </PaymentWidgetProvider>\n    </main>\n  );\n}\n\nfunction EnableDiscount() {\n  const { paymentMethodsRef } = usePaymentWidget();\n\n  const handleChange = (e) => {\n    if (e.target.checked) {\n      paymentMethodsRef.current?.updateAmount(amount - 5000, "\ucfe0\ud3f0");\n    } else {\n      paymentMethodsRef.current?.updateAmount(amount, "");\n    }\n  };\n\n  return (\n    <div style={{ marginBottom: "0.5rem" }}>\n      <input type="checkbox" id="is-coupon-enabled" onChange={handleChange} />\n      <label htmlFor="is-coupon-enabled">5000\uc6d0 \ud560\uc778\ud558\uae30</label>\n    </div>\n  );\n}\n\nexport default PaymentWidgetExample;\n')))}K.isMDXComponent=!0}}]);