!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);const{createElement:n,render:a,useState:o,useEffect:s,useContext:i,Fragment:l,RawHTML:u}=wp.element;var c=e=>{const[t,r]=o([]),[a,i]=o(()=>{let t=e.maxstars?e.maxstars-1:4,r=[];for(;t>=0;)r.unshift(t),t--;return r});s(()=>{let t=e.rating?e.rating-1:-1,n=[];for(;t>=0;)n.unshift(t),t--;r(n)},[e.rating]);return t&&t.length>=0?n("div",{className:"wplms-course-star-rating"},a.map((a,o)=>{let s=0;return t.includes(o)&&(s=1),n("span",{className:"vicon vicon-star "+(s?"golden":""),onClick:t=>{(t=>{let n=[];for(;t>=0;)n.unshift(t),t--;r(n),e.update(n,"ratingchanged")})(o)}})})):""};const{createElement:d,render:p,useState:m,useEffect:f,Fragment:w,useRef:v}=wp.element,{select:_,dispatch:g}=wp.data;var h=e=>{const[t,r]=m({}),[n,a]=m(!0),[o,s]=m(!1);f(()=>{fetch(`${window.wplms_course_data.api_url}/user/getreview/${e.course}?force`,{method:"post",body:JSON.stringify({token:_("vibebp").getToken(),course_id:e.course})}).then(e=>{if(e&&"200"==e.status)return e.json();s(!1)}).then(e=>{e&&(e.comment_ID&&r(e),s(!0),a(!1))})},[e]);return d(w,null,o?n?d("div",{class:"lds-ellipsis"},d("div",null),d("div",null),d("div",null),d("div",null)):d(w,null,d("div",{className:"reviewform form"},d("h3",{className:"heading"},window.wplms_course_data.translations.post_review),d("div",{className:"field form-group"},d("label",null,window.wplms_course_data.translations.review_title),d("div",null,d("input",{type:"text",onChange:e=>{let n={...t};n.title=e.target.value,r(n)},value:t.title,placeholder:window.wplms_course_data.translations.review_title}))),d("div",{className:"field form-group"},d("label",null,window.wplms_course_data.translations.review_rating),d(c,{update:(e,n)=>{if("ratingchanged"==n){let n=0;e&&(n=e.length);let a={...t};a.rating=n,r(a)}},rating:t.rating})),d("div",{className:"field form-group"},d("textarea",{onChange:e=>{let n={...t};n.review=e.target.value,r(n)},value:t.review,placeholder:window.wplms_course_data.translations.your_review})),d("a",{className:"button is-primary",onClick:()=>{t&&t.hasOwnProperty("title")&&t.hasOwnProperty("review")&&t.hasOwnProperty("rating")&&t.title.length>3&&t.review.length>3&&t.rating>=1?(a(!0),t.comment_post_ID=e.course,t.course_id=e.course,t.token=_("vibebp").getToken(),fetch(window.wplms_course_data.api_url+"/updatecourse/addreview?post",{method:"post",body:JSON.stringify(t)}).then(e=>e.json()).then(e=>{e?e.status?a(!1):e.message&&(alert(e.message),a(!1)):(alert(window.wplms_course_data.translations.error_review_form),a(!1))})):(alert(window.wplms_course_data.translations.please_check_review_form),a(!1))}},window.wplms_course_data.translations.submit_review," ",d("span",{className:"vicon vicon-arrow-right"})))):"")};r(0);const{createElement:b,render:y,useState:O,useEffect:N,Fragment:S}=wp.element,{select:x,dispatch:j}=wp.data,E=()=>{document.querySelectorAll(".course_review_home_form").forEach(e=>{y(b(h,{course:e.getAttribute("data-course"),def:e.innerHTML}),e)}),document.removeEventListener("userLoaded",E,!1)};document.addEventListener("userLoaded",E,!1)}]);