var __awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(o,s){function r(t){try{a(n.next(t))}catch(t){s(t)}}function u(t){try{a(n["throw"](t))}catch(t){s(t)}}function a(t){t.done?o(t.value):new i(function(e){e(t.value)}).then(r,u)}a((n=n.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,o,s,r;return r={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function u(t){return function(e){return a([t,e])}}function a(r){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,o&&(s=r[0]&2?o["return"]:r[0]?o["throw"]||((s=o["return"])&&s.call(o),0):o.next)&&!(s=s.call(o,r[1])).done)return s;if(o=0,s)r=[r[0]&2,s.value];switch(r[0]){case 0:case 1:s=r;break;case 4:i.label++;return{value:r[1],done:false};case 5:i.label++;o=r[1];r=[0];continue;case 7:r=i.ops.pop();i.trys.pop();continue;default:if(!(s=i.trys,s=s.length>0&&s[s.length-1])&&(r[0]===6||r[0]===2)){i=0;continue}if(r[0]===3&&(!s||r[1]>s[0]&&r[1]<s[3])){i.label=r[1];break}if(r[0]===6&&i.label<s[1]){i.label=s[1];s=r;break}if(s&&i.label<s[2]){i.label=s[2];i.ops.push(r);break}if(s[2])i.ops.pop();i.trys.pop();continue}r=e.call(t,i)}catch(t){r=[6,t];o=0}finally{n=s=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};System.register(["./p-a5fcd787.system.js","./p-45890bdd.system.js","./p-99a6c005.system.js","./p-2a88194b.system.js"],function(t){"use strict";var e,i,n,o,s,r,u,a,h,l;return{setters:[function(t){e=t.r;i=t.c;n=t.f;o=t.d;s=t.h;r=t.H;u=t.e},function(){},function(t){a=t.c},function(t){h=t.d;l=t.f}],execute:function(){var c=function(){function t(t){var n=this;e(this,t);this.inputId="ion-input-"+f++;this.didBlurAfterEdit=false;this.hasFocus=false;this.autocapitalize="none";this.autofocus=false;this.clearOnEdit=false;this.debounce=0;this.disabled=false;this.name=this.inputId;this.readonly=false;this.required=false;this.spellcheck=false;this.autoGrow=false;this.value="";this.onInput=function(t){if(n.nativeInput){n.value=n.nativeInput.value}n.emitStyle();n.ionInput.emit(t)};this.onFocus=function(){n.hasFocus=true;n.focusChange();n.ionFocus.emit()};this.onBlur=function(){n.hasFocus=false;n.focusChange();n.ionBlur.emit()};this.onKeyDown=function(){n.checkClearOnEdit()};this.ionChange=i(this,"ionChange",7);this.ionInput=i(this,"ionInput",7);this.ionStyle=i(this,"ionStyle",7);this.ionBlur=i(this,"ionBlur",7);this.ionFocus=i(this,"ionFocus",7);this.ionInputDidLoad=i(this,"ionInputDidLoad",7);this.ionInputDidUnload=i(this,"ionInputDidUnload",7)}t.prototype.debounceChanged=function(){this.ionChange=h(this.ionChange,this.debounce)};t.prototype.disabledChanged=function(){this.emitStyle()};t.prototype.valueChanged=function(){var t=this.nativeInput;var e=this.getValue();if(t&&t.value!==e){t.value=e}this.runAutoGrow();this.emitStyle();this.ionChange.emit({value:e})};t.prototype.componentWillLoad=function(){this.emitStyle()};t.prototype.componentDidLoad=function(){this.debounceChanged();this.runAutoGrow();this.ionInputDidLoad.emit()};t.prototype.runAutoGrow=function(){var t=this.nativeInput;if(t&&this.autoGrow){n(function(){t.style.height=t.scrollHeight+"px"})}};t.prototype.componentDidUnload=function(){this.ionInputDidUnload.emit()};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){if(this.nativeInput){this.nativeInput.focus()}return[2]})})};t.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)};t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:true,textarea:true,input:true,"interactive-disabled":this.disabled,"has-placeholder":this.placeholder!=null,"has-value":this.hasValue(),"has-focus":this.hasFocus})};t.prototype.checkClearOnEdit=function(){if(!this.clearOnEdit){return}if(this.didBlurAfterEdit&&this.hasValue()){this.value=""}this.didBlurAfterEdit=false};t.prototype.focusChange=function(){if(this.clearOnEdit&&!this.hasFocus&&this.hasValue()){this.didBlurAfterEdit=true}this.emitStyle()};t.prototype.hasValue=function(){return this.getValue()!==""};t.prototype.getValue=function(){return this.value||""};t.prototype.render=function(){var t;var e=this;var i=o(this);var n=this.getValue();var u=this.inputId+"-lbl";var h=l(this.el);if(h){h.id=u}return s(r,{"aria-disabled":this.disabled?"true":null,class:Object.assign({},a(this.color),(t={},t[i]=true,t))},s("textarea",{class:"native-textarea",ref:function(t){return e.nativeInput=t},autoCapitalize:this.autocapitalize,autoFocus:this.autofocus,disabled:this.disabled,maxLength:this.maxlength,minLength:this.minlength,name:this.name,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,cols:this.cols,rows:this.rows,wrap:this.wrap,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeyDown},n))};Object.defineProperty(t.prototype,"el",{get:function(){return u(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);white-space:pre-wrap;z-index:2}.ion-color.sc-ion-textarea-ios-h{background:initial;color:var(--ion-color-base)}ion-item.sc-ion-textarea-ios-h, ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-ios-h:not(.item-label), ion-item:not(.item-label) .sc-ion-textarea-ios-h{--padding-start:0}.native-textarea.sc-ion-textarea-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-textarea.sc-ion-textarea-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-ios{opacity:.4}.cloned-input.sc-ion-textarea-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios, [dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios, [dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}.sc-ion-textarea-ios-h{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-floating.sc-ion-textarea-ios-h, .item-label-floating .sc-ion-textarea-ios-h, .item-label-stacked.sc-ion-textarea-ios-h, .item-label-stacked .sc-ion-textarea-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}"},enumerable:true,configurable:true});return t}();t("ion_textarea",c);var f=0}}});