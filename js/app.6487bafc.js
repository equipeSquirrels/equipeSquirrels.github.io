(function(e){function t(t){for(var a,r,s=t[0],i=t[1],l=t[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function s(e){return i.p+"js/"+({Mentionslegales:"Mentionslegales",home:"home"}[e]||e)+"."+{Mentionslegales:"06200758","chunk-576f263a":"78b38406","chunk-6b0c8982":"a28ca2ce","chunk-2f3b4843":"c14e44c4","chunk-7a9625c5":"76063b72","chunk-dffaab8c":"ef4a7f9e",home:"0458634a"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={Mentionslegales:1,"chunk-2f3b4843":1,"chunk-7a9625c5":1,"chunk-dffaab8c":1,home:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({Mentionslegales:"Mentionslegales",home:"home"}[e]||e)+"."+{Mentionslegales:"ad70bdb0","chunk-576f263a":"31d6cfe0","chunk-6b0c8982":"31d6cfe0","chunk-2f3b4843":"09771fee","chunk-7a9625c5":"15957800","chunk-dffaab8c":"6d7d7559",home:"d0e1187a"}[e]+".css",o=i.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var l=c[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===a||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0418":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},[a("b-navbar",{staticClass:"container navbar",attrs:{toggleable:"lg",variant:"#E1366A","bg-primary":""}},[a("b-navbar-brand",{attrs:{to:"/"}},[a("img",{attrs:{alt:"Logo",src:n("9ce5"),width:"auto"}})]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-md-auto",attrs:{id:"navmenu"}},[a("b-nav-item",{attrs:{to:"/#Home","exact-active-class":" active",variant:""}},[e._v("Accueil")]),a("b-nav-item",{attrs:{href:"https://resonance-blog.systeme.io/home","exact-active-class":" active"}},[e._v("Blog")]),a("b-nav-item",{attrs:{to:"/#About","exact-active-class":" active"}},[e._v("Qui sommes-nous ?")]),a("b-nav-item",{attrs:{to:"/#Newsletter","exact-active-class":" active"}},[e._v("Newsletter")]),a("b-nav-item",{attrs:{to:"#","exact-active-class":"active"}},[a("b-button",{staticClass:"btnContact",attrs:{variant:"outline-light"},on:{click:function(t){e.modalShow=!e.modalShow}}},[e._v("Nous contacter")])],1)],1)],1)],1),a("b-modal",{staticClass:"modal bg-dark",attrs:{"ok-variant":"transparent","ok-title":"","ok-disabled":"","cancel-disabled":"","cancel-variant":"transparent","cancel-title":""},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[a("form",{staticClass:"contact-form text-center",on:{submit:function(t){return t.preventDefault(),e.sendEmail(t)}}},[a("h1",[e._v("Nous contacter")]),a("div",{attrs:{id:"divider"}},[a("hr",{staticClass:"solid"})]),a("label",[e._v("Name")]),a("input",{attrs:{type:"text",name:"from_name"}}),a("label",[e._v("Email")]),a("input",{attrs:{type:"email",name:"from_email"}}),a("input",{staticClass:"btn",attrs:{type:"submit",value:"Envoyer"}})])])],1)},r=[],o=n("0f91"),c=n.n(o),s={name:"Header",data:function(){return{modalShow:!1}},methods:{sendEmail:function(e){c.a.sendForm("service_6s1lz1d","template_4hsf5ml",e.target,"user_hL82gPuLVc6rUHST4FkvM").then((function(e){alert("SUCCESS!",e.status,e.text)}),(function(e){alert("FAILED...",e)}))}}},i=s,l=(n("c70c"),n("2877")),u=Object(l["a"])(i,a,r,!1,null,"3d67a4db",null);t["a"]=u.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},o=[],c=n("0418"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("cookie-law",{attrs:{theme:"dark-lime"}}),e._m(0)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container text-center"},[n("div",{staticClass:" text-center"},[n("h5",[e._v("Informations")]),n("div",{staticClass:"menub"},[n("a",{attrs:{href:"#"}},[e._v("Mentions légales")]),n("a",{attrs:{href:"#"}},[e._v("Politique de cookies")]),n("a",{attrs:{href:"#"}},[e._v("Confidentialité")])])]),n("div",{staticClass:"icon text-center block_2"},[n("p",[e._v("Tous droits réservés©")])])])}],l=n("d2d0"),u=n.n(l),f={name:"Footer",components:{CookieLaw:u.a}},d=f,m=(n("760c"),n("2877")),h=Object(m["a"])(d,s,i,!1,null,null,null),p=h.exports,v={name:"App",components:{Header:c["a"],Footer:p}},b=v,g=(n("034f"),Object(m["a"])(b,r,o,!1,null,null,null)),k=g.exports,_=(n("d3b7"),n("8c4f"));a["default"].use(_["a"]);var y=[{path:"/",name:"Home",components:{default:function(){return n.e("home").then(n.bind(null,"4a12"))}}},{path:"/Newsletter",name:"Newsletter",components:{default:function(){return n.e("chunk-576f263a").then(n.bind(null,"fbef"))}}},{path:"/Login",name:"Login",components:{default:function(){return Promise.all([n.e("chunk-6b0c8982"),n.e("chunk-2f3b4843")]).then(n.bind(null,"dd1d"))}}},{path:"/Signup",name:"Signup",components:{default:function(){return Promise.all([n.e("chunk-6b0c8982"),n.e("chunk-7a9625c5")]).then(n.bind(null,"fd5b"))}}},{path:"/Quiz",name:"Quiz",components:{default:function(){return n.e("chunk-dffaab8c").then(n.bind(null,"c3c9"))}}},{path:"/Legale",name:"Mentionslegales",components:{default:function(){return n.e("Mentionslegales").then(n.bind(null,"45b7"))}}}],w=new _["a"]({mode:"history",base:"/",routes:y}),C=w,x=n("5f5b");a["default"].config.productionTip=!1,a["default"].use(x["a"]),new a["default"]({router:C,render:function(e){return e(k)}}).$mount("#app")},"760c":function(e,t,n){"use strict";n("c3f5")},"85ec":function(e,t,n){},"9ce5":function(e,t,n){e.exports=n.p+"img/LogoRESONANCEAllongéBlanc.3cf20b4d.png"},b2b8:function(e,t,n){},c3f5:function(e,t,n){},c70c:function(e,t,n){"use strict";n("b2b8")}});
//# sourceMappingURL=app.6487bafc.js.map