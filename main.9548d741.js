parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".header__button"),t=document.querySelector(".header"),o=document.querySelector(".about-us"),c=document.querySelector(".footer"),l=document.querySelector(".nav"),r=document.querySelectorAll(".nav__link"),n=document.querySelector(".header__burger-menu"),s=document.getElementById("home"),i=document.querySelectorAll(".product__order-button");e.addEventListener("click",function(){o.scrollIntoView({behavior:"smooth"})}),n.addEventListener("click",function(){l.classList.toggle("nav__active"),s.classList.toggle("block-scroll"),n.classList.toggle("header__burger-menu--active"),window.innerHeight<410&&t.classList.toggle("block-scroll")}),r.forEach(function(e){e.addEventListener("click",function(){n.offsetWidth>0&&(s.classList.toggle("block-scroll"),l.classList.toggle("nav__active"),n.classList.toggle("header__burger-menu--active")),window.innerHeight<410&&t.classList.toggle("block-scroll")})}),i.forEach(function(e){e.addEventListener("click",function(){c.scrollIntoView({behavior:"smooth"})})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.9548d741.js.map