function h(){return typeof window<"u"}function b(){return location.protocol+"//"+location.host}function S(){if(!h())return!1;var e=document.referrer||"",t=b();return e.substr(0,t.length)===t}function V(){var e=typeof navigator.languages<"u"?navigator.languages[0]:navigator.language;return e[0]==='"'&&(e=e.substr(1)),e.length>0&&e[e.length-1]==='"'&&(e=e.substr(0,e.length-1)),e&&e.length===5&&e[2]==="-"?e.substr(0,3)+e.substr(3).toLocaleUpperCase():e}function W(){if(!h())return{type:"locale",value:"<not-in-browser>"};var e=V()||"<none>";return{type:"locale",value:e}}function H(){var e=window.innerWidth;return e<=414?"XS":e<=800?"S":e<=1200?"M":e<=1600?"L":"XL"}function Y(){return h()?{type:"screen-type",value:H()}:{type:"screen-type",value:"<not-in-browser>"}}function $(){return h()?S()?{type:"referrer",value:"<none>"}:{type:"referrer",value:document.referrer||"<none>"}:{type:"referrer",value:"<not-in-browser>"}}function E(e,t){if(e===void 0&&(e=!1),t===void 0&&(t=!1),!h())return{type:"path",value:"<not-in-browser>"};var n=window.location.pathname,i=window.location.hash,c=window.location.search;return e&&t?n+=i:e?n+=i.substr(0,i.length-c.length):t&&(n+=c),{type:"path",value:n}}function Q(e,t){return{type:"transition",value:e+"  ->  "+t}}function T(e,t){return t===void 0&&(t=""),e<5e3?{type:"duration-interval",value:t+"< 5s"}:e<15e3?{type:"duration-interval",value:t+"< 15s"}:e<3e4?{type:"duration-interval",value:t+"< 30s"}:e<6e4?{type:"duration-interval",value:t+"< 1m"}:e<5*6e4?{type:"duration-interval",value:t+"< 5m"}:{type:"duration-interval",value:t+"> 5m"}}var x={};function z(e){window.addEventListener("unload",e)}var K=function(){function e(t,n){n===void 0&&(n=x),this.projectId=t,this.options=n,this.uniques={},this.trackPageData=null,this.trackPageChange=this.trackPageChange.bind(this),this.trackLastPageTimeSpent=this.trackLastPageTimeSpent.bind(this)}return e.prototype.track=function(t){if(this.options.disabled||!h())return Promise.resolve();if(t.unique){var n=JSON.stringify(t);if(this.uniques[n])return Promise.resolve();this.uniques[n]=!0}var i={id:t.id,projectId:this.projectId};t.remove&&(i.remove=!0),t.parameters&&(i.parameters=t.parameters),t.update&&(i.update=!0);var c=new XMLHttpRequest;c.open("post","https://getinsights.io/app/tics",!0),c.setRequestHeader("Content-Type","application/json"),c.send(JSON.stringify(i))},e.prototype.trackPages=function(t){if(!h())return{stop:function(){}};if(this.trackPageData)return this.trackPageData.result;var n=setInterval(this.trackPageChange,2e3),i=t||{},c=i.hash,v=c===void 0?!1:c,u=i.search,g=u===void 0?!1:u;return this.trackPageData={hash:v,search:g,path:E(v,g).value,isOnFirstPage:!0,time:Date.now(),result:{stop:function(){clearInterval(n)}}},this.trackSinglePage(!0,this.trackPageData.path),z(this.trackLastPageTimeSpent),this.trackPageData.result},e.prototype.getPreviousPage=function(t){var n=this.trackPageData&&this.trackPageData.path;return!t&&n?n:S()?document.referrer.replace(b(),""):document.referrer},e.prototype.trackPageChange=function(){if(this.trackPageData){var t=this.trackPageData,n=t.hash,i=t.search,c=E(n,i).value;c!==this.trackPageData.path&&this.trackSinglePage(!1,c)}},e.prototype.trackSinglePage=function(t,n){if(this.trackPageData){this.trackPageData.isOnFirstPage=t&&!S();var i=this.trackPageData,c=i.time,v=i.isOnFirstPage,u={path:n};v&&(u.uniqueViews=n,u.referrer=$(),u.locale=W(),u.screenType=Y());var g=this.getPreviousPage(t);if(g&&g!==n&&(u.transitions=Q(g,n),!v)){var A=Date.now();this.trackPageData.time=A,u.duration=T(A-c,g+" - ")}this.trackPageData.path=n,this.track({id:"page-views",parameters:u})}},e.prototype.trackLastPageTimeSpent=function(){var t=this.trackPageData&&this.trackPageData.time;if(!(!t||typeof navigator.sendBeacon!="function"||this.options.disabled||!this.trackPageData)){var n=this.trackPageData,i=n.isOnFirstPage,c=n.path,v={};v.duration=T(Date.now()-t,c+" - ");var u=document.activeElement&&document.activeElement.href||"",g=b();u?u[0]!=="/"&&u.substr(0,g.length)!==b()&&(v.transitions=Q(c,u)):v.bounces=i?"Yes":"No",navigator.sendBeacon=navigator.sendBeacon||function(A,P){var p=new XMLHttpRequest;p.open("post",A,!1),p.send(P)},navigator.sendBeacon("https://getinsights.io/app/tics",JSON.stringify({id:"page-views",projectId:this.projectId,parameters:v,update:!0}))}},e}(),y=null;function Z(e,t){return!h()||y||(y=new K(e,t)),y}function ee(e){return!y||!h()?{stop:function(){}}:y.trackPages(e)}Z("qpnwC3rCrvZ6c7xr");ee();/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/(function(e,t,n){function i(r){var a=A.className,l=o._config.classPrefix||"";if(P&&(a=a.baseVal),o._config.enableJSClass){var s=new RegExp("(^|\\s)"+l+"no-js(\\s|$)");a=a.replace(s,"$1"+l+"js$2")}o._config.enableClasses&&(a+=" "+l+r.join(" "+l),P?A.className.baseVal=a:A.className=a)}function c(r,a){return typeof r===a}function v(){var r,a,l,s,d,k,f;for(var w in p)if(p.hasOwnProperty(w)){if(r=[],a=p[w],a.name&&(r.push(a.name.toLowerCase()),a.options&&a.options.aliases&&a.options.aliases.length))for(l=0;l<a.options.aliases.length;l++)r.push(a.options.aliases[l].toLowerCase());for(s=c(a.fn,"function")?a.fn():a.fn,d=0;d<r.length;d++)k=r[d],f=k.split("."),f.length===1?o[f[0]]=s:(!o[f[0]]||o[f[0]]instanceof Boolean||(o[f[0]]=new Boolean(o[f[0]])),o[f[0]][f[1]]=s),g.push((s?"":"no-")+f.join("-"))}}function u(r,a){if(typeof r=="object")for(var l in r)C(r,l)&&u(l,r[l]);else{r=r.toLowerCase();var s=r.split("."),d=o[s[0]];if(s.length==2&&(d=d[s[1]]),typeof d<"u")return o;a=typeof a=="function"?a():a,s.length==1?o[s[0]]=a:(!o[s[0]]||o[s[0]]instanceof Boolean||(o[s[0]]=new Boolean(o[s[0]])),o[s[0]][s[1]]=a),i([(a&&a!=0?"":"no-")+s.join("-")]),o._trigger(r,a)}return o}var g=[],A=t.documentElement,P=A.nodeName.toLowerCase()==="svg",p=[],m={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(r,a){var l=this;setTimeout(function(){a(l[r])},0)},addTest:function(r,a,l){p.push({name:r,fn:a,options:l})},addAsyncTest:function(r){p.push({name:null,fn:r})}},o=function(){};o.prototype=m,o=new o;var C;(function(){var r={}.hasOwnProperty;C=c(r,"undefined")||c(r.call,"undefined")?function(a,l){return l in a&&c(a.constructor.prototype[l],"undefined")}:function(a,l){return r.call(a,l)}})(),m._l={},m.on=function(r,a){this._l[r]||(this._l[r]=[]),this._l[r].push(a),o.hasOwnProperty(r)&&setTimeout(function(){o._trigger(r,o[r])},0)},m._trigger=function(r,a){if(this._l[r]){var l=this._l[r];setTimeout(function(){var s;for(s=0;s<l.length;s++)l[s](a)},0),delete this._l[r]}},o._q.push(function(){m.addTest=u}),o.addAsyncTest(function(){function r(s,d,k){function f(D){var _=D&&D.type==="load"?w.width==1:!1,G=s==="webp";u(s,G&&_?new Boolean(_):_),k&&k(D)}var w=new Image;w.onerror=f,w.onload=f,w.src=d}var a=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],l=a.shift();r(l.name,l.uri,function(s){if(s&&s.type==="load")for(var d=0;d<a.length;d++)r(a[d].name,a[d].uri)})}),v(),i(g),delete m.addTest,delete m.addAsyncTest;for(var L=0;L<o._q.length;L++)o._q[L]();e.Modernizr=o})(window,document);function O(){for(var e=document.querySelectorAll(".revealRight"),t=0;t<e.length;t++){var n=window.innerHeight,i=e[t].getBoundingClientRect().top,c=150;i<n-c&&e[t].classList.add("active"),i>n&&e[t].classList.remove("active")}}function U(){for(var e=document.querySelectorAll(".revealLeft"),t=0;t<e.length;t++){var n=window.innerHeight,i=e[t].getBoundingClientRect().top,c=150;i<n-c&&e[t].classList.add("active"),i>n&&e[t].classList.remove("active")}}function J(){for(var e=document.querySelectorAll(".revealFade"),t=0;t<e.length;t++){var n=window.innerHeight,i=e[t].getBoundingClientRect().top,c=150;i<n-c&&e[t].classList.add("active"),i>n&&e[t].classList.remove("active")}}O();U();J();window.addEventListener("scroll",O);window.addEventListener("scroll",U);window.addEventListener("scroll",J);const M=document.querySelector("body");let B=localStorage.getItem("darkMode");const te=document.querySelector(".dark-mode-button"),j=()=>{M.classList.add("dark-mode"),localStorage.setItem("darkMode","enabled")},F=()=>{M.classList.remove("dark-mode"),localStorage.setItem("darkMode",null)},I=document.getElementById("night-toggle");B=="enabled"?(j(),I.checked=!0):(F(),I.checked=!1);te.addEventListener("click",()=>{B=localStorage.getItem("darkMode"),B!=="enabled"?j():F()});const q=document.querySelector(".header__hamburger"),N=document.querySelector(".header__nav"),ae=document.querySelectorAll(".header__nav-item");q.addEventListener("click",re);function re(){q.classList.toggle("active"),N.classList.toggle("active")}ae.forEach(e=>e.addEventListener("click",ne));function ne(){q.classList.remove("active"),N.classList.remove("active")}const X=document.querySelector("#header"),ie=document.querySelector("#arrow"),R=document.createElement("div");R.setAttribute("data-scroll-watcher","");X.before(R);const oe=new IntersectionObserver(e=>{X.classList.toggle("header-scrolled",e[0].intersectionRatio<1),ie.classList.toggle("hero-arrow__svg--hidden",e[0].intersectionRatio<1)});oe.observe(R);