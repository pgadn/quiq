import*as r from"react";import e from"react";var o={ProgressWrapper:"Progress-module_ProgressWrapper__pN-zc",rotate:"Progress-module_rotate__z42Q3",orbit:"Progress-module_orbit__Jo1wp",defaultSVG:"Progress-module_defaultSVG__XqoMK",Progress_Variant__primary:"Progress-module_Progress_Variant__primary__kAD4-",Progress_Variant__secondary:"Progress-module_Progress_Variant__secondary__l5KCQ",Progress_Variant__tertiary:"Progress-module_Progress_Variant__tertiary__x1B3o",Progress_Size__sm:"Progress-module_Progress_Size__sm__J9boV",Progress_Size__md:"Progress-module_Progress_Size__md__MA-P9",Progress_Size__lg:"Progress-module_Progress_Size__lg__NFyqM"};!function(r,e){void 0===e&&(e={});var o=e.insertAt;if(r&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css","top"===o&&s.firstChild?s.insertBefore(t,s.firstChild):s.appendChild(t),t.styleSheet?t.styleSheet.cssText=r:t.appendChild(document.createTextNode(r))}}(".Progress-module_ProgressWrapper__pN-zc{display:inline-block}.Progress-module_ProgressWrapper__pN-zc .Progress-module_rotate__z42Q3{stroke:#294197;-webkit-animation-duration:1.3s;-moz-animation-duration:1.3s;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-webkit-animation-name:Progress-module_orbit__Jo1wp;-moz-animation-name:Progress-module_orbit__Jo1wp;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}@-webkit-keyframes Progress-module_orbit__Jo1wp{0%{-webkit-transform:rotate(0deg);-webkit-transform-origin:50% 50%}to{-webkit-transform:rotate(1turn);-webkit-transform-origin:50% 50%}}@-moz-keyframes Progress-module_orbit__Jo1wp{0%{-moz-transform:rotate(0deg);-moz-transform-origin:50% 50%}to{-moz-transform:rotate(1turn);-moz-transform-origin:50% 50%}}.Progress-module_ProgressWrapper__pN-zc .Progress-module_defaultSVG__XqoMK{height:2.1em;width:2.1em}.Progress-module_ProgressWrapper__pN-zc .Progress-module_Progress_Variant__primary__kAD4-{stroke:var(--qcuicq-color-primary)}.Progress-module_ProgressWrapper__pN-zc .Progress-module_Progress_Variant__secondary__l5KCQ{stroke:var(--qcuicq-color-secondary)}.Progress-module_ProgressWrapper__pN-zc .Progress-module_Progress_Variant__tertiary__x1B3o{stroke:var(--qcuicq-color-tertiary)}.Progress-module_ProgressWrapper__pN-zc .Progress-module_Progress_Size__sm__J9boV{height:var(--qcuicq-progress-size-sm-height);width:var(--qcuicq-progress-size-sm-width)}.Progress-module_ProgressWrapper__pN-zc .Progress-module_Progress_Size__md__MA-P9{height:var(--qcuicq-progress-size-md-height);width:var(--qcuicq-progress-size-md-width)}.Progress-module_ProgressWrapper__pN-zc .Progress-module_Progress_Size__lg__NFyqM{height:var(--qcuicq-progress-size-lg-height);width:var(--qcuicq-progress-size-lg-width)}");var s=function(e){e.color;var o=e.className,s=e.classNameSVG;return r.createElement("svg",{className:s,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",style:{marginRight:"-2px",display:"block",backgroundRepeatY:"initial",backgroundRepeatX:"initial"}},r.createElement("circle",{cx:"50",cy:"50",fill:"none","stroke-width":"10",r:"31","stroke-dasharray":"164.93361431346415 56.97787143782138",transform:"matrix(1,0,0,1,0,0)",style:{transform:"matrix(1, 0, 0, 1, 0, 0)"},className:o}))};var t,a,i=(t=function(r){
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var e={}.hasOwnProperty;function o(){for(var r=[],s=0;s<arguments.length;s++){var t=arguments[s];if(t){var a=typeof t;if("string"===a||"number"===a)r.push(t);else if(Array.isArray(t)){if(t.length){var i=o.apply(null,t);i&&r.push(i)}}else if("object"===a)if(t.toString===Object.prototype.toString)for(var _ in t)e.call(t,_)&&t[_]&&r.push(_);else r.push(t.toString())}}return r.join(" ")}r.exports?(o.default=o,r.exports=o):window.classNames=o}()},t(a={exports:{}},a.exports),a.exports);i.classNames;var _=function(r){var t=r.color,a=r.size;return e.createElement("div",{className:o.ProgressWrapper},e.createElement(s,{className:i(o.rotate,t&&o["Progress_Variant__".concat(t)]),classNameSVG:i(o.defaultSVG,a&&o["Progress_Size__".concat(a)])}))};export{_ as default};
