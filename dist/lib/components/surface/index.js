import e from"react";function r(e,r){void 0===r&&(r={});var a=r.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css","top"===a&&t.firstChild?t.insertBefore(d,t.firstChild):t.appendChild(d),d.styleSheet?d.styleSheet.cssText=e:d.appendChild(document.createTextNode(e))}}var a="Card-module_CardWrapper__JmcJs";r(".Card-module_CardWrapper__JmcJs{display:flex;flex-direction:column}");var t=function(r){var t=r.children;return e.createElement("div",{className:a},t)},d="CardHeader-module_CardHeaderWrapper__vDhvO";r(".CardHeader-module_CardHeaderWrapper__vDhvO{background-color:var(--qcuicq-color-primary);border-radius:20px 20px 0 0;padding:20px 20px 45px}");var n=function(r){var a=r.children;return e.createElement("div",{className:d},a)},o="CardContent-module_CardContentWrapper__QZHEh";r(".CardContent-module_CardContentWrapper__QZHEh{background-color:#fff;border-radius:20px 20px 0 0;margin-top:-30px;padding:20px}");var c=function(r){var a=r.children;return e.createElement("div",{className:o},a)},i="CardFooter-module_CardFooterWrapper__QiqiP";r(".CardFooter-module_CardFooterWrapper__QiqiP{background-color:var(--qcuicq-color-light);border-radius:0 0 20px 20px;padding:20px}");var l=function(r){var a=r.children;return e.createElement("div",{className:i},a)},p={};r("");var m=function(r){r.component;var a=r.height,t=r.image,d=r.alt;return e.createElement("div",{className:p.CardImageWrapper},e.createElement("img",{src:t,height:null!=a?a:"",alt:null!=d?d:""}))};export{t as Card,c as CardContent,l as CardFooter,n as CardHeader,m as CardImage};
