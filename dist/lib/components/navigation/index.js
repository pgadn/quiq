import e,{useState as t,useEffect as r,useContext as n}from"react";function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var l="Stepper-module_StepperWrapper__C4Prs",p="Stepper-module_StepIndicatorText__-gaHC";i(".Stepper-module_StepperWrapper__C4Prs{align-items:center;display:flex;flex-direction:column;justify-content:space-between;min-height:300px}.Stepper-module_StepIndicatorText__-gaHC{color:var(--qcuicq-color-textLight);font-size:.7rem;margin-top:15px;text-align:center}");var u=React.createContext({step:1}),c=function(n){var a=n.children,i=n.steps,c=n.move,s=n.getStep,m=o(t(null!=c?c:1),2),f=m[0],d=m[1];return r((function(){if("number"!=typeof c)throw new Error("Unhandled value for `move`");i&&c<=i.length&&d(c)}),[i,c]),r((function(){s((function(){return f}))}),[f]),!i||i&&i.length<=0?null:e.createElement(u.Provider,{value:{step:f}},e.createElement("div",{className:l},a,e.createElement("span",{className:p},f," of ",i.length," ",e.createElement("br",null),i[f-1].label)))},s="Step-module_StepWrapper__qjMSm",m="Step-module_ActiveStep__SZDLu";i(".Step-module_StepWrapper__qjMSm{margin-right:calc(100% + 1000px);max-height:0;opacity:0;overflow-x:hidden;position:absolute;width:100%}.Step-module_ActiveStep__SZDLu,.Step-module_StepWrapper__qjMSm{transition:overflow-x 1s ease-out,margin-right .8s ease-out,opacity 1s ease-out}.Step-module_ActiveStep__SZDLu{margin-right:0;max-height:100%;opacity:1;overflow-x:visible;position:relative}");var f,d,h=(f=function(e){
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var i=r.apply(null,o);i&&e.push(i)}}else if("object"===a)if(o.toString===Object.prototype.toString)for(var l in o)t.call(o,l)&&o[l]&&e.push(l);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()},f(d={exports:{}},d.exports),d.exports);h.classNames;var v=function(t){var r=t.children,o=t.stepNum,a=n(u);return e.createElement("div",{className:h(s,a&&a.step===o?m:"")},r)},S="StepContent-module_StepContentWrapper__sveNh";i(".StepContent-module_StepContentWrapper__sveNh{display:flex;flex-direction:column;width:100%}");var _=function(t){var r=t.children;return e.createElement("div",{className:S},r)},y="StepLabel-module_StepLabelWrapper__ZxEy7";i(".StepLabel-module_StepLabelWrapper__ZxEy7{align-items:center;display:flex;justify-content:center}");var g=function(t){var r=t.children;return e.createElement("div",{className:y},r)};export{v as Step,_ as StepContent,g as StepLabel,c as Stepper,u as StepperContext};
