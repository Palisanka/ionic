import{r as i,d as s,c as e,h as o,H as t,e as n}from"./p-9e4813c3.js";import{b as a}from"./p-1074393c.js";import{B as r,d,e as l,f as c}from"./p-8754b5fd.js";import{g as m}from"./p-ba834eff.js";import{s as p}from"./p-cae2ca23.js";const h=(i,s)=>{const e=new i,o=new i;o.addElement(s.querySelector("ion-backdrop"));const t=new i;return t.addElement(s.querySelector(".loading-wrapper")),o.fromTo("opacity",.01,.3),t.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(e.addElement(s).easing("ease-in-out").duration(200).add(o).add(t))},u=(i,s)=>{const e=new i,o=new i;o.addElement(s.querySelector("ion-backdrop"));const t=new i;return t.addElement(s.querySelector(".loading-wrapper")),o.fromTo("opacity",.3,0),t.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(e.addElement(s).easing("ease-in-out").duration(200).add(o).add(t))},g=(i,s)=>{const e=new i,o=new i;o.addElement(s.querySelector("ion-backdrop"));const t=new i;return t.addElement(s.querySelector(".loading-wrapper")),o.fromTo("opacity",.01,.32),t.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(e.addElement(s).easing("ease-in-out").duration(200).add(o).add(t))},T=(i,s)=>{const e=new i,o=new i;o.addElement(s.querySelector("ion-backdrop"));const t=new i;return t.addElement(s.querySelector(".loading-wrapper")),o.fromTo("opacity",.32,0),t.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(e.addElement(s).easing("ease-in-out").duration(200).add(o).add(t))};class f{constructor(o){i(this,o),this.presented=!1,this.mode=s(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,r)},this.didPresent=e(this,"ionLoadingDidPresent",7),this.willPresent=e(this,"ionLoadingWillPresent",7),this.willDismiss=e(this,"ionLoadingWillDismiss",7),this.didDismiss=e(this,"ionLoadingDidDismiss",7)}componentWillLoad(){if(void 0===this.spinner){const i=s(this);this.spinner=a.get("loadingSpinner",a.get("spinner","ios"===i?"lines":"crescent"))}}async present(){await d(this,"loadingEnter",h,g,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration+10))}dismiss(i,s){return this.durationTimeout&&clearTimeout(this.durationTimeout),l(this,i,s,"loadingLeave",u,T)}onDidDismiss(){return c(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return c(this.el,"ionLoadingWillDismiss")}render(){const{message:i,spinner:e}=this,n=s(this);return o(t,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:`${4e4+this.overlayIndex}`},class:Object.assign({},m(this.cssClass),{[n]:!0,"loading-translucent":this.translucent})},o("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),o("div",{class:"loading-wrapper",role:"dialog"},e&&o("div",{class:"loading-spinner"},o("ion-spinner",{name:e})),i&&o("div",{class:"loading-content",innerHTML:p(i)})))}get el(){return n(this)}static get style(){return".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md, .spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary,#3880ff);color:var(--ion-color-step-850,#262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}}export{f as ion_loading};