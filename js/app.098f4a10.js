(function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],u=0,f=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==s[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},s={app:0},o=[];function i(e){return c.p+"js/"+({Mentionslegales:"Mentionslegales",home:"home"}[e]||e)+"."+{Mentionslegales:"e712cdfc",home:"56719658"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={Mentionslegales:1,home:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({Mentionslegales:"Mentionslegales",home:"home"}[e]||e)+"."+{Mentionslegales:"a8921a09",home:"da1cdfcd"}[e]+".css",s=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],u=l.getAttribute("data-href");if(u===n||u===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],d.parentNode.removeChild(d),r(o)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}s[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"0418":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navbar container-fluid",attrs:{id:"nav"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"navbar_items"},[r("ul",[e._m(0),e._m(1),e._m(2),e._m(3),r("li",[r("router-link",{attrs:{to:"/Legale"}},[e._v("Mentions legales")])],1)])])])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("a",{attrs:{href:"/#about"}},[e._v("À propos")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("a",{attrs:{href:"/#services"}},[e._v("Services")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("a",{attrs:{href:"/#video"}},[e._v("Video")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("a",{attrs:{href:"/#newsletter"}},[e._v("Newsletter")])])}],s={name:"Header"},o=s,i=(r("74fe"),r("2877")),c=Object(i["a"])(o,n,a,!1,null,"f71c1414",null);t["a"]=c.exports},"12dc":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{attrs:{id:"content"}},[r("Header"),r("router-view"),r("Footer")],1)},s=[],o=r("0418"),i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"footer"},[r("div",{staticClass:"container text-center"},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fab fa-instagram"})]),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fab fa-facebook-f"})]),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fab fa-linkedin-in"})]),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fab fa-youtube"})]),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fab fa-twitter"})]),r("div",{staticClass:"row container"},[r("div",{staticClass:"col-md-3 text-center block_2"},[r("h5",[e._v("Pages")]),r("div",{staticClass:"menub"},[r("a",{attrs:{href:"#"}},[e._v("Accueil")]),r("a",{attrs:{href:"#"}},[e._v("À propos")]),r("a",{attrs:{href:"#"}},[e._v("Contact")])])]),r("div",{staticClass:"col-md-3 text-center block_2"},[r("h5",[e._v("Informations")]),r("div",{staticClass:"menub"},[r("a",{attrs:{href:"#"}},[e._v("Mentions légales")]),r("a",{attrs:{href:"#"}},[e._v("Politique de cookies")]),r("a",{attrs:{href:"#"}},[e._v("Confidentialité")])])]),r("div",{staticClass:"col-md-3 text-center"},[r("h5",[e._v("Contactez-nous")]),r("div",{staticClass:"menub block_2"},[r("p",[r("i",{staticClass:"fas fa-phone"}),e._v(" 06 12 34 56 78")]),r("p",[r("i",{staticClass:"fas fa-map-marker-alt"}),e._v(" route du goulag,"),r("br")])])]),r("div",{staticClass:"icon col-md-3 text-center block_2"},[r("iframe",{staticStyle:{border:"0"},attrs:{id:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99180.6332193097!2d125.67207167718999!3d39.02911725842702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357e02dae64f4337%3A0xd40677e21771aa95!2sPyongyang%2C%20Cor%C3%A9e%20du%20Nord!5e0!3m2!1sfr!2sfr!4v1604565786486!5m2!1sfr!2sfr",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}})])]),r("p",[e._v("Tous droits réservés©")])])])}],l={name:"Footer"},u=l,f=(r("760c"),r("2877")),d=Object(f["a"])(u,i,c,!1,null,null,null),m=d.exports,v={name:"App",components:{Header:o["a"],Footer:m}},h=v,p=(r("034f"),Object(f["a"])(h,a,s,!1,null,null,null)),b=p.exports,g=(r("d3b7"),r("8c4f"));n["a"].use(g["a"]);var _=[{path:"/",name:"Home",components:{default:function(){return r.e("home").then(r.bind(null,"4a12"))}}},{path:"/Legale",name:"Mentionslegales",components:{default:function(){return r.e("Mentionslegales").then(r.bind(null,"45b7"))}}}],y=new g["a"]({mode:"history",base:"/",routes:_}),C=y;new n["a"]({router:C,render:function(e){return e(b)}}).$mount("#app")},"74fe":function(e,t,r){"use strict";r("12dc")},"760c":function(e,t,r){"use strict";r("c3f5")},"85ec":function(e,t,r){},c3f5:function(e,t,r){}});
//# sourceMappingURL=app.098f4a10.js.map