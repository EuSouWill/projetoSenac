!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.r(t);var a=wp.element,i=(a.createElement,a.useState),c=a.useEffect,o=(a.Fragment,a.render,wp.data),l=(o.dispatch,o.select,function(e){var t=" "+document.cookie,n=" "+e+"=",r=null,a=0,i=0;return t.length>0&&-1!=(a=t.indexOf(n))&&(a+=n.length,-1==(i=t.indexOf(";",a))&&(i=t.length),r=unescape(t.substring(a,i))),r}),u=function(e){var t=r(i(e.time),2),n=t[0],a=(t[1],r(i(""),2)),o=a[0],l=a[1],u=function(){var t=0,r=0,a=Math.floor((n-(new Date).getTime())/1e3);a>60&&(t=(t=Math.floor(a/60))<10?"0"+t.toString():t.toString()),r=(r=Math.floor(a%60).toString().padStart(2,"0"))<10?"0"+r.toString():r.toString(),a<=0?(l(window.vibebp_cart.translations.timeout),e.removeItem()):l(t+":"+r)};return c((function(){var e=setInterval(u,1e3);return function(){clearInterval(e)}}),[]),wp.element.createElement("span",{className:"clock"},o)};function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=wp.element,f=(m.createElement,m.useState),d=m.useEffect,v=m.Fragment,w=(m.useRef,wp.data),b=(w.dispatch,w.select,function(e){var t=p(f(!1),2),n=t[0],r=t[1],a=p(f(!1),2),i=a[0],c=a[1],o=p(f([]),2),m=o[0],w=o[1],b=p(f({}),2),y=(b[0],b[1]);d((function(){setTimeout((function(){r(!0)}),200);return function(){r(!1)}}),[]),d((function(){return _(),document.addEventListener("vibebp_cart_updated",_),function(){document.removeEventListener("vibebp_cart_updated",_)}}),[]);var _=function(){c(!0),fetch("".concat(window.vibebp_cart.api.get,"?client_id=").concat(window.vibebp.settings.client_id,"&force"),{method:"get"}).then((function(e){return e.json()})).then((function(e){y(e);var t=[];e.hasOwnProperty("items")&&e.items.length&&e.items.map((function(e){-1==t.findIndex((function(t){return t.key==e.id}))&&t.push({key:e.id,title:e.name,quantity:e.quantity,price:{currency_prefix:e.totals.currency_prefix,currency_suffix:e.totals.currency_suffix,amount:e.totals.line_subtotal}})}));var n=l("appointment_products");n&&(n=JSON.parse(n)),Array.isArray(n)&&n.length&&n.map((function(e){var n,r="";e.price.currency_html.indexOf(e.price.amount)?n=e.price.currency_html.replace(e.price.amount,""):r=e.price.currency_html.replace(e.price.amount,""),t.push({key:e.id,id:e.id,title:e.title+"["+e.appointment_id+"]",expiry:e.expiry,image:e.image,price:{currency_prefix:n,currency_suffix:r,amount:e.price.amount}})})),localforage.setItem("cart_item_count",t.length),document.dispatchEvent(new Event("vibebp_update_cart")),w(t),c(!1)}))},h=function(e){console.log("remove item "+e),fetch("".concat(window.vibebp_cart.api.remove_item,"?client_id=").concat(window.vibebp.settings.client_id,"&force"),{method:"pos",body:JSON.stringify({key:e})}).then((function(e){return e.json()})).then((function(e){console.log(e)}));var t,n,r,a,i,c,o=l("appointment_products");if(o&&(o=JSON.parse(o)).findIndex((function(t){return t.id==e}))>-1){o.splice(o.findIndex((function(t){return t.id==e})),1);var u="/";u="undefined"==typeof VIBEAPPOINTMENTS?window.vibebp_cart.settings.cookiepath:VIBEAPPOINTMENTS.settings.cookiepath,t="appointment_products",n=JSON.stringify(o),r=new Date((new Date).setMinutes((new Date).getMinutes()+15)).toUTCString(),a=u,i=window.location.hostname,document.cookie=t+"="+escape(n)+(r?"; expires="+r:"")+(a?"; path="+a:"")+(i?"; domain="+i:window.location.hostname)+(c?"; secure":"")}},g=function(e,t){fetch("".concat(window.vibebp_cart.api.update_item,"?client_id=").concat(window.vibebp.settings.client_id,"&force"),{method:"post",body:JSON.stringify({key:e,quantity:t})}).then((function(e){return e.json()})).then((function(e){}))};return wp.element.createElement("div",{className:"vibebp_body_wrapper"},wp.element.createElement("span",{className:"vibebp_close",onClick:e.close}),wp.element.createElement("div",{className:n?"vibebp_cart_wrapper active":"vibebp_cart_wrapper"},wp.element.createElement("div",{className:"vibebp_cart"},wp.element.createElement("strong",null,window.vibebp_cart.translations.cart,wp.element.createElement("span",{className:"vicon vicon-close",onClick:e.close})),wp.element.createElement("div",{className:"vibebp_cart_body"},i?"...":m.length?m.map((function(e,t){return wp.element.createElement("div",{className:"cart_item_wrapper",key:t},wp.element.createElement("div",{className:"cart_item"},e.image?wp.element.createElement("img",{src:e.image,className:"image"}):wp.element.createElement("svg",{className:"image",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},wp.element.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),wp.element.createElement("path",{d:"M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 110-4 2 2 0 010 4z"})),wp.element.createElement("span",{className:"cart_item_title"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:e.title}}),e.hasOwnProperty("desc")?wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:e.desc}}):"",e.hasOwnProperty("expiry")?wp.element.createElement(u,{time:new Date(e.expiry).getTime(),removeItem:function(){return h(e.key)}}):""),e.hasOwnProperty("quantity")?wp.element.createElement("span",{className:"quantity"},e.quantity>0?wp.element.createElement("span",{className:"vicon vicon-minus",onClick:function(n){var r=s(m);r[t].quantity--,r[t].quantity<=0?(r.splice(t,1),h(e.key)):g(e.key,r[t].quantity),w(r)}}):wp.element.createElement("span",null),wp.element.createElement("span",null,e.quantity),wp.element.createElement("span",{className:"vicon vicon-plus",onClick:function(){var n=s(m);n[t].quantity++,w(n),g(e.key,n[t].quantity)}})):"",wp.element.createElement("span",{className:"vicon vicon-trash",onClick:function(){var n=s(m);n.splice(t,1),w(n),h(e.key)}})))})):wp.element.createElement("span",{className:"vbp_error"},window.vibebp_cart.translations.cart_no_items)),wp.element.createElement("div",{className:"vibebp_cart_footer"},m.length?wp.element.createElement(v,null,window.vibebp_cart.settings.hasOwnProperty("continue_shopping_link")&&window.vibebp_cart.settings.continue_shopping_link?wp.element.createElement("a",{href:window.vibebp_cart.settings.continue_shopping_link,className:"button is-success"},window.vibebp_cart.translations.continue_shopping):wp.element.createElement("a",{onClick:e.close,className:"button is-success"},window.vibebp_cart.translations.continue_shopping),wp.element.createElement("a",{href:window.vibebp_cart.settings.cart+"?"+Math.round(1e4*Math.random()),className:"button is-primary"},window.vibebp_cart.translations.view_cart)):wp.element.createElement("a",{className:"button",onClick:e.close},wp.element.createElement("span",{className:"vicon vicon-close"})," ",window.vibebp_cart.translations.close)))))});function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var _=wp.element,h=(_.createElement,_.useState),g=_.useEffect,E=(_.Fragment,_.useRef,wp.data),S=(E.dispatch,E.select,function(e){var t=y(h(!1),2),n=t[0],r=t[1],a=y(h(0),2),i=a[0],c=a[1],o=function(){r(!0)},l=function(){localforage.getItem("cart_item_count").then((function(e){c(e)}))};return g((function(){return l(),document.addEventListener("vibebp_update_cart",l),document.addEventListener("vibebp_show_cart",o),function(){document.removeEventListener("vibebp_show_cart",o),document.removeEventListener("vibebp_update_cart",l)}}),[]),wp.element.createElement("span",{className:"vibebp_cart"},wp.element.createElement("svg",{onClick:function(){return r(!0)},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},wp.element.createElement("path",{fill:"currentColor",d:"M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 01.958 1.287l-2.4 8a1 1 0 01-.958.713H6v2h11v2H5a1 1 0 01-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm12 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"})),i?wp.element.createElement("span",null,i):"",n?ReactDOM.createPortal(wp.element.createElement(b,{close:function(e){r(!1)}}),document.body):"")}),N=(n(0),wp.element),O=(N.createElement,N.useState,N.useEffect,N.Fragment,N.render),x=wp.data;x.dispatch,x.select;document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".vibebp-cart")&&O(wp.element.createElement(S,null),document.querySelector(".vibebp-cart"))}))}]);