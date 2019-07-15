System.register(["./p-a5fcd787.system.js","./p-45890bdd.system.js","./p-99a6c005.system.js"],function(t){"use strict";var e,r,n,s,i,a;return{setters:[function(t){e=t.r;r=t.d;n=t.h;s=t.H},function(t){i=t.b},function(t){a=t.c}],execute:function(){var o={lines:{dur:1e3,lines:12,fn:function(t,e,r){var n="rotate("+(30*e+(e<6?180:-180))+"deg)";var s=t*e/r-t+"ms";return{y1:17,y2:29,style:{transform:n,"animation-delay":s}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,e,r){var n="rotate("+(30*e+(e<6?180:-180))+"deg)";var s=t*e/r-t+"ms";return{y1:12,y2:20,style:{transform:n,"animation-delay":s}}}},bubbles:{dur:1e3,circles:9,fn:function(t,e,r){var n=t*e/r-t+"ms";var s=2*Math.PI*e/r;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:function(t,e,r){var n=e/r;var s=t*n-t+"ms";var i=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":s}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,e){var r=-(110*e)+"ms";return{r:6,style:{left:9-9*e+"px","animation-delay":r}}}}};var u=o;var c=function(){function t(t){e(this,t);this.paused=false}t.prototype.getName=function(){var t=this.name||i.get("spinner");var e=r(this);if(t){return t}return e==="ios"?"lines":"crescent"};t.prototype.hostData=function(){var t;var e=r(this);return{class:Object.assign({},a(this.color),(t={},t[e]=true,t["spinner-"+this.getName()]=true,t["spinner-paused"]=!!this.paused||i.getBoolean("_testing"),t))}};t.prototype.__stencil_render=function(){var t=this.getName();var e=u[t]||u["lines"];var r=typeof this.duration==="number"&&this.duration>10?this.duration:e.dur;var n=[];if(e.circles!==undefined){for(var s=0;s<e.circles;s++){n.push(l(e,r,s,e.circles))}}else if(e.lines!==undefined){for(var s=0;s<e.lines;s++){n.push(f(e,r,s,e.lines))}}return n};t.prototype.render=function(){return n(s,this.hostData(),this.__stencil_render())};Object.defineProperty(t,"style",{get:function(){return":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg,[dir=rtl] svg{left:unset;right:unset;right:0;-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-paused) svg{-webkit-animation-play-state:paused;animation-play-state:paused}\@-webkit-keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}\@keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}"},enumerable:true,configurable:true});return t}();t("ion_spinner",c);var l=function(t,e,r,s){var i=t.fn(e,r,s);i.style["animation-duration"]=e+"ms";return n("svg",{viewBox:"0 0 64 64",style:i.style},n("circle",{transform:"translate(32,32)",r:i.r}))};var f=function(t,e,r,s){var i=t.fn(e,r,s);i.style["animation-duration"]=e+"ms";return n("svg",{viewBox:"0 0 64 64",style:i.style},n("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))}}}});