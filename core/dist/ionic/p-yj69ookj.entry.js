import{r as t,d as i,c as e,k as s,h as n,e as a,H as o}from"./p-9e4813c3.js";import{b as r}from"./p-1074393c.js";import{c as h}from"./p-ba834eff.js";import{i as l,b as d}from"./p-c90aaa66.js";import{GESTURE_CONTROLLER as c}from"./p-7795f517.js";class u{constructor(n){t(this,n),this.lastOnEnd=0,this.blocker=c.createBlocker({disableScroll:!0}),this.mode=i(this),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=e(this,"ionWillOpen",7),this.ionWillClose=e(this,"ionWillClose",7),this.ionDidOpen=e(this,"ionDidOpen",7),this.ionDidClose=e(this,"ionDidClose",7),this.ionMenuChange=e(this,"ionMenuChange",7),this.lazyMenuCtrl=s(this,"ion-menu-controller")}typeChanged(t,i){const e=this.contentEl;e&&(void 0!==i&&e.classList.remove(`menu-content-${i}`),e.classList.add(`menu-content-${t}`),e.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=l(this.side)}swipeGestureChanged(){this.updateState()}async componentWillLoad(){void 0===this.type&&(this.type=r.get("menuType","ios"===this.mode?"reveal":"overlay"));const t=this.menuCtrl=await this.lazyMenuCtrl.componentOnReady().then(t=>t._getInstance()),i=this.el.parentNode,e=void 0!==this.contentId?document.getElementById(this.contentId):i&&i.querySelector&&i.querySelector("[main]");e&&e.tagName?(this.contentEl=e,e.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),t._register(this),this.gesture=(await __sc_import_ionic("./p-7795f517.js")).createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:t=>this.canStart(t),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')}componentDidLoad(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}componentDidUnload(){this.blocker.destroy(),this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}onBackdropClick(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,i=!0){return this.menuCtrl._setOpen(this,t,i)}async _setOpen(t,i=!0){return!(!this._isActive()||this.isAnimating||t===this._isOpen||(this.beforeAnimation(t),await this.loadAnimation(),await this.startAnimation(t,i),this.afterAnimation(t),0))}async loadAnimation(){const t=this.menuInnerEl.offsetWidth;t===this.width&&void 0!==this.animation||(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),this.animation=await this.menuCtrl._createAnimation(this.type,this))}async startAnimation(t,i){const e=this.animation.reverse(!t);i?await e.playAsync():e.playSync()}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(t){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpenSync()&&p(window,t.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.reverse(this._isOpen).progressStart():d(!1,"isAnimating has to be true")}onMove(t){if(!this.isAnimating||!this.animation)return void d(!1,"isAnimating has to be true");const i=m(t.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(i/this.width)}onEnd(t){if(!this.isAnimating||!this.animation)return void d(!1,"isAnimating has to be true");const i=this._isOpen,e=this.isEndSide,s=m(t.deltaX,i,e),n=this.width,a=s/n,o=t.velocityX,r=n/2,h=o>=0&&(o>.2||t.deltaX>r),l=o<=0&&(o<-.2||t.deltaX<-r),c=i?e?h:l:e?l:h;let u=!i&&c;i&&!c&&(u=!0);const p=(c?1-a:a)*n;let g=0;if(p>5){const t=p/Math.abs(o);g=Math.min(t,300)}this.lastOnEnd=t.timeStamp,this.animation.onFinish(()=>this.afterAnimation(u),{clearExistingCallbacks:!0,oneTimeCallback:!0}).progressEnd(c,a,g)}beforeAnimation(t){d(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(g),this.backdropEl&&this.backdropEl.classList.add(b),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(t){d(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(y),this.ionDidOpen.emit()):(this.el.classList.remove(g),this.contentEl&&this.contentEl.classList.remove(y),this.backdropEl&&this.backdropEl.classList.remove(b),this.ionDidClose.emit())}updateState(){const t=this._isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this),d(!this.isAnimating,"can not be animating")}forceClosing(){d(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.reverse(!0).playSync(),this.afterAnimation(!1)}hostData(){const{isEndSide:t,type:i,disabled:e,isPaneVisible:s}=this;return{role:"navigation",class:{[`${this.mode}`]:!0,[`menu-type-${i}`]:!0,"menu-enabled":!e,"menu-side-end":t,"menu-side-start":!t,"menu-pane-visible":s}}}__stencil_render(){return[n("div",{class:"menu-inner",ref:t=>this.menuInnerEl=t},n("slot",null)),n("ion-backdrop",{ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1})]}get el(){return a(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}render(){return n(o,this.hostData(),this.__stencil_render())}static get style(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}\@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:80}:host(.menu-type-push) .show-backdrop{display:block}"}}const m=(t,i,e)=>Math.max(0,i!==e?-t:t),p=(t,i,e,s)=>e?i>=t.innerWidth-s:i<=s,g="show-menu",b="show-backdrop",y="menu-content-open",w=t=>{const i=t.querySelector("ion-menu-controller");return i?i.componentOnReady():Promise.resolve(void 0)},E=async t=>{const i=await w(document);i&&await i.get(t)&&i.toggle(t)},v=async t=>{const i=await w(document);if(i){const e=await i.get(t);if(e&&await e.isActive())return!0}return!1};class _{constructor(i){t(this,i),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.setVisibility=async()=>{this.visible=await v(this.menu)},this.onClick=async()=>{await E(this.menu)}}async componentDidLoad(){await this.setVisibility()}async visibilityChanged(){await this.setVisibility()}render(){const{color:t,disabled:e}=this,s=i(this),a=r.get("menuIcon","menu"),l=this.autoHide&&!this.visible,d={type:this.type};return n(o,{onClick:this.onClick,"aria-disabled":e?"true":null,"aria-hidden":l?"true":null,class:Object.assign({[s]:!0},h(t),{button:!0,"menu-button-hidden":l,"menu-button-disabled":e,"ion-activatable":!0,"ion-focusable":!0})},n("button",Object.assign({},d,{disabled:this.disabled,class:"button-native"}),n("slot",null,n("ion-icon",{icon:a,mode:s,lazy:!1})),"md"===s&&n("ion-ripple-effect",{type:"unbounded"})))}static get style(){return":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.activated){opacity:.4}\@media (any-hover:hover){:host(:hover){opacity:.6}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.1)}"}}const A=t=>Promise.resolve((new t).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300)),f=(t,i,e)=>{let s,n;const a=e.width+8;e.isEndSide?(s=a+"px",n="0px"):(s=-a+"px",n="0px");const o=(new t).addElement(e.menuInnerEl).fromTo("translateX",s,n),r=(new t).addElement(e.backdropEl).fromTo("opacity",.01,.32);return A(t).then(t=>t.add(o).add(r))},O=(t,i,e)=>{let s,n;const a=e.width;e.isEndSide?(s=-a+"px",n=a+"px"):(s=a+"px",n=-a+"px");const o=(new t).addElement(e.menuInnerEl).fromTo("translateX",n,"0px"),r=(new t).addElement(e.contentEl).fromTo("translateX","0px",s),h=(new t).addElement(e.backdropEl).fromTo("opacity",.01,.32);return A(t).then(t=>t.add(o).add(h).add(r))},S=(t,i,e)=>{const s=e.width*(e.isEndSide?-1:1)+"px",n=(new t).addElement(e.contentEl).fromTo("translateX","0px",s);return A(t).then(t=>t.add(n))};class C{constructor(i){t(this,i),this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",S),this.registerAnimation("push",O),this.registerAnimation("overlay",f)}async open(t){const i=await this.get(t);return!!i&&i.open()}async close(t){const i=await(void 0!==t?this.get(t):this.getOpen());return void 0!==i&&i.close()}async toggle(t){const i=await this.get(t);return!!i&&i.toggle()}async enable(t,i){const e=await this.get(i);return e&&(e.disabled=!t),e}async swipeGesture(t,i){const e=await this.get(i);return e&&(e.swipeGesture=t),e}async isOpen(t){if(null!=t){const i=await this.get(t);return void 0!==i&&i.isOpen()}return void 0!==await this.getOpen()}async isEnabled(t){const i=await this.get(t);return!!i&&!i.disabled}async get(t){if(await this.waitUntilReady(),"start"===t||"end"===t){return this.find(i=>i.side===t&&!i.disabled)||this.find(i=>i.side===t)}if(null!=t)return this.find(i=>i.menuId===t);return this.find(t=>!t.disabled)||(this.menus.length>0?this.menus[0].el:void 0)}async getOpen(){return await this.waitUntilReady(),this.getOpenSync()}async getMenus(){return await this.waitUntilReady(),this.getMenusSync()}async isAnimating(){return await this.waitUntilReady(),this.isAnimatingSync()}async registerAnimation(t,i){this.menuAnimations.set(t,i)}_getInstance(){return Promise.resolve(this)}_register(t){const i=this.menus;i.indexOf(t)<0&&(t.disabled||this._setActiveMenu(t),i.push(t))}_unregister(t){const i=this.menus.indexOf(t);i>-1&&this.menus.splice(i,1)}_setActiveMenu(t){const i=t.side;this.menus.filter(e=>e.side===i&&e!==t).forEach(t=>t.disabled=!0)}async _setOpen(t,i,e){if(this.isAnimatingSync())return!1;if(i){const i=await this.getOpen();i&&t.el!==i&&await i.setOpen(!1,!1)}return t._setOpen(i,e)}async _createAnimation(t,i){const e=this.menuAnimations.get(t);if(!e)throw new Error("animation not registered");const s=await __sc_import_ionic("./p-d9adb105.js").then(t=>t.create(e,null,i));return r.getBoolean("animated",!0)||s.duration(0),s}getOpenSync(){return this.find(t=>t._isOpen)}getMenusSync(){return this.menus.map(t=>t.el)}isAnimatingSync(){return this.menus.some(t=>t.isAnimating)}find(t){const i=this.menus.find(t);if(void 0!==i)return i.el}waitUntilReady(){return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(t=>t.componentOnReady()))}static get style(){return".menu-content{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{-webkit-box-shadow:8px 0 42px rgba(0,0,0,.08);box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"}}class k{constructor(i){t(this,i),this.visible=!1,this.autoHide=!0,this.setVisibility=async()=>{this.visible=await v(this.menu)},this.onClick=async()=>{await E(this.menu)}}async componentDidLoad(){await this.setVisibility()}async visibilityChanged(){await this.setVisibility()}render(){const t=i(this),e=this.autoHide&&!this.visible;return n(o,{onClick:this.onClick,"aria-hidden":e?"true":null,class:{[t]:!0,"menu-toggle-hidden":e}},n("slot",null))}static get style(){return":host(.menu-toggle-hidden){display:none}"}}export{u as ion_menu,_ as ion_menu_button,C as ion_menu_controller,k as ion_menu_toggle};