!function(t){var e={};function r(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p=".",r(r.s=0)}({"./src/lazyLoad.js":function(t,e){!function(t){t.vcvLozad=function(){"use strict";const e="undefined"!=typeof document&&document.documentMode,r=function(e){return t&&t[e]},a=["data-iesrc","data-alt","data-src","data-srcset","data-background-image","data-toggle-class"],o={rootMargin:"0px",threshold:0,enableAutoReload:!1,load:function(r){if("picture"===r.nodeName.toLowerCase()){let t=r.querySelector("img"),a=!1;null===t&&(t=document.createElement("img"),a=!0),e&&r.getAttribute("data-iesrc")&&(t.src=r.getAttribute("data-iesrc")),r.getAttribute("data-alt")&&(t.alt=r.getAttribute("data-alt")),a&&r.append(t)}if("video"===r.nodeName.toLowerCase()&&!r.getAttribute("data-src")&&r.children){const t=r.children;let e;for(let r=0;r<=t.length-1;r++)e=t[r].getAttribute("data-src"),e&&(t[r].src=e);r.load(),r.hasAttribute("autoplay")&&r.play()}r.getAttribute("data-poster")&&(r.poster=r.getAttribute("data-poster")),r.getAttribute("data-src")&&(r.src=r.getAttribute("data-src")),r.getAttribute("data-srcset")&&r.setAttribute("srcset",r.getAttribute("data-srcset"));let a=",";if(r.getAttribute("data-background-delimiter")&&(a=r.getAttribute("data-background-delimiter")),r.getAttribute("data-background-image"))r.style.backgroundImage="url('"+r.getAttribute("data-background-image").split(a).join("'),url('")+"')";else if(r.getAttribute("data-background-image-set")){const t=r.getAttribute("data-background-image-set").split(a);let e=t[0].substr(0,t[0].indexOf(" "))||t[0];e=-1===e.indexOf("url(")?"url("+e+")":e,1===t.length?r.style.backgroundImage=e:r.setAttribute("style",(r.getAttribute("style")||"")+"background-image: "+e+"; background-image: -webkit-image-set("+t+"); background-image: image-set("+t+")")}if(r.getAttribute("data-toggle-class")&&r.classList.toggle(r.getAttribute("data-toggle-class")),r.getAttribute("data-vce-background-image")){const t=r.closest("[data-vce-do-apply]").getAttribute("data-vce-do-apply").indexOf("el-"),e=r.closest("[data-vce-do-apply]").getAttribute("data-vce-do-apply").slice(t,t+11),a=r.getAttribute("data-vce-background-image").split(",");let o="";a.forEach((t=>{const a=r.getAttribute(`data-vce-background-image-${t}`);o+=`--${e}-${t}-backgroundImage: url(${a}); `})),r.getAttribute("style")&&(o+=r.getAttribute("style")),r.style=o}r.closest("[data-vce-assets-video-yt]")&&t.vceAssetsBackgroundVideoYoutube("[data-vce-assets-video-yt]"),r.closest("[data-vce-assets-video-vimeo]")&&t.vceAssetsBackgroundVideoVimeo("[data-vce-assets-video-vimeo]")},loaded:function(){}};function n(t){t.setAttribute("data-loaded",!0)}function i(t){t.getAttribute("data-placeholder-background")&&(t.style.background=t.getAttribute("data-placeholder-background"))}const u=function(t){return"true"===t.getAttribute("data-loaded")},c=function(t,e){return function(r,a){r.forEach((function(r){(r.intersectionRatio>0||r.isIntersecting)&&(a.unobserve(r.target),u(r.target)||(t(r.target),n(r.target),e(r.target)))}))}},d=function(t){return function(e){e.forEach((function(e){u(e.target)&&"attributes"===e.type&&a.indexOf(e.attributeName)>-1&&t(e.target)}))}},s=function(t){const e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){const t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:'.vcv-lozad, [data-vce-lozad="true"]:not([data-vcv-lozad])',e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=Object.assign({},o,e),g=l.root,b=l.rootMargin,f=l.threshold,v=l.enableAutoReload,p=l.load,m=l.loaded;let A,y;r("IntersectionObserver")&&(A=new IntersectionObserver(c(p,m),{root:g,rootMargin:b,threshold:f})),r("MutationObserver")&&v&&(y=new MutationObserver(d(p)));const h=s(t,g);for(let r=0;r<h.length;r++)i(h[r]);return{observe:function(){const e=s(t,g);for(let t=0;t<e.length;t++)u(e[t])||(A?(y&&v&&y.observe(e[t],{subtree:!0,attributes:!0,attributeFilter:a}),A.observe(e[t])):(p(e[t]),n(e[t]),m(e[t])));return!0},triggerLoad:function(t){u(t)||(p(t),n(t),m(t))},observer:A,mutationObserver:y}}}();let e=!1;t.vcv&&t.vcv.on("ready",(function(){if(!e){e=!0;t.vcvLozad().observe()}}))}(window)},0:function(t,e,r){t.exports=r("./src/lazyLoad.js")}});