!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=33)}({1:function(e,t){e.exports=window.wp.element},33:function(e,t,r){"use strict";r.r(t);var o=r(1);wp.blocks.registerBlockType("es6/reactads",{title:"Ad Block With React Frontend",icon:"welcome-learn-more",category:"common",attributes:{skyColor:{type:"string"},grassColor:{type:"string"}},edit:function(e){return Object(o.createElement)("div",{className:"es6-block-type"},Object(o.createElement)("input",{type:"text",value:e.attributes.skyColor,onChange:function(t){e.setAttributes({skyColor:t.target.value});const r=useBlockProps({style:blockStyle});return Object(o.createElement)("div",r,"Hello World (from the editor).")},placeholder:"sky color..."}),Object(o.createElement)("input",{type:"text",value:e.attributes.grassColor,onChange:function(t){e.setAttributes({grassColor:t.target.value})},placeholder:"grass color..."}))}})}});