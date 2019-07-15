import{r as t,c as e,d as s,h as i,H as n,e as o}from"./p-9e4813c3.js";import"./p-1074393c.js";import{c as a,b as l,a as h,s as r}from"./p-8754b5fd.js";import{h as c}from"./p-ba834eff.js";import{f as d,r as p}from"./p-c90aaa66.js";class u{constructor(s){t(this,s),this.childOpts=[],this.inputId=`ion-sel-${f++}`,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=t=>{this.setFocus(),this.open(t)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionChange=e(this,"ionChange",7),this.ionCancel=e(this,"ionCancel",7),this.ionFocus=e(this,"ionFocus",7),this.ionBlur=e(this,"ionBlur",7),this.ionStyle=e(this,"ionStyle",7)}disabledChanged(){this.emitStyle()}valueChanged(){this.didInit&&(this.updateOptions(),this.ionChange.emit({value:this.value}),this.emitStyle())}async selectOptionChanged(){await this.loadOptions(),this.didInit&&(this.updateOptions(),this.updateOverlayOptions(),this.emitStyle(),void 0!==this.value&&this.el.forceUpdate())}async componentDidLoad(){if(await this.loadOptions(),void 0===this.value)if(this.multiple){const t=this.childOpts.filter(t=>t.selected);this.value=t.map(t=>t.value)}else{const t=this.childOpts.find(t=>t.selected);t&&(this.value=t.value)}this.updateOptions(),this.emitStyle(),this.el.forceUpdate(),this.didInit=!0}async open(t){if(this.disabled||this.isExpanded)return;const e=this.overlay=await this.createOverlay(t);return this.isExpanded=!0,e.onDidDismiss().then(()=>{this.overlay=void 0,this.isExpanded=!1,this.setFocus()}),await e.present(),e}createOverlay(t){let e=this.interface;return"action-sheet"!==e&&"popover"!==e||!this.multiple||(console.warn(`Select interface cannot be "${e}" with a multi-value select. Using the "alert" interface instead.`),e="alert"),"popover"!==e||t||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),e="alert"),"popover"===e?this.openPopover(t):"action-sheet"===e?this.openActionSheet():this.openAlert()}updateOverlayOptions(){if(!this.overlay)return;const t=this.overlay;switch(this.interface){case"action-sheet":t.buttons=this.createActionSheetButtons(this.childOpts);break;case"popover":const e=t.querySelector("ion-select-popover");e&&(e.options=this.createPopoverOptions(this.childOpts));break;default:t.inputs=this.createAlertInputs(this.childOpts,this.multiple?"checkbox":"radio")}}createActionSheetButtons(t){const e=t.map(t=>({role:t.selected?"selected":"",text:t.textContent,handler:()=>{this.value=t.value}}));return e.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),e}createAlertInputs(t,e){return t.map(t=>({type:e,label:t.textContent,value:t.value,checked:t.selected,disabled:t.disabled}))}createPopoverOptions(t){return t.map(t=>({text:t.textContent,value:t.value,checked:t.selected,disabled:t.disabled,handler:()=>{this.value=t.value,this.close()}}))}async openPopover(t){const e=this.interfaceOptions,i=s(this),n=Object.assign({mode:i},e,{component:"ion-select-popover",cssClass:["select-popover",e.cssClass],event:t,componentProps:{header:e.header,subHeader:e.subHeader,message:e.message,value:this.value,options:this.createPopoverOptions(this.childOpts)}});return a.create(n)}async openActionSheet(){const t=s(this),e=this.interfaceOptions,i=Object.assign({mode:t},e,{buttons:this.createActionSheetButtons(this.childOpts),cssClass:["select-action-sheet",e.cssClass]});return l.create(i)}async openAlert(){const t=this.getLabel(),e=t?t.textContent:null,i=this.interfaceOptions,n=this.multiple?"checkbox":"radio",o=s(this),a=Object.assign({mode:o},i,{header:i.header?i.header:e,inputs:this.createAlertInputs(this.childOpts,n),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:t=>{this.value=t}}],cssClass:["select-alert",i.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return h.create(a)}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}async loadOptions(){this.childOpts=await Promise.all(Array.from(this.el.querySelectorAll("ion-select-option")).map(t=>t.componentOnReady()))}updateOptions(){let t=!0;for(const e of this.childOpts){const s=t&&m(this.value,e.value,this.compareWith);e.selected=s,s&&!this.multiple&&(t=!1)}}getLabel(){return d(this.el)}hasValue(){return""!==this.getText()}getText(){const t=this.selectedText;return null!=t&&""!==t?t:O(this.childOpts,this.value,this.compareWith)}setFocus(){this.buttonEl&&this.buttonEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}render(){const{placeholder:t,name:e,disabled:o,isExpanded:a,value:l,el:h}=this,r=s(this),u=this.inputId+"-lbl",m=d(h);m&&(m.id=u);let b=!1,O=this.getText();""===O&&null!=t&&(O=t,b=!0),p(!0,h,e,v(l),o);const y={"select-text":!0,"select-placeholder":b};return i(n,{onClick:this.onClick,role:"combobox","aria-haspopup":"dialog","aria-disabled":o?"true":null,"aria-expanded":`${a}`,"aria-labelledby":u,class:{[r]:!0,"in-item":c("ion-item",h),"select-disabled":o}},i("div",{class:y},O),i("div",{class:"select-icon",role:"presentation"},i("div",{class:"select-icon-inner"})),i("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:o,ref:t=>this.buttonEl=t}))}get el(){return o(this)}static get watchers(){return{disabled:["disabledChanged"],value:["valueChanged"]}}static get style(){return":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}.select-icon{width:19px;height:19px}"}}const v=t=>{if(null!=t)return Array.isArray(t)?t.join(","):t.toString()},m=(t,e,s)=>void 0!==t&&(Array.isArray(t)?t.some(t=>b(t,e,s)):b(t,e,s)),b=(t,e,s)=>"function"==typeof s?s(t,e):"string"==typeof s?t[s]===e[s]:t===e,O=(t,e,s)=>void 0===e?"":Array.isArray(e)?e.map(e=>y(t,e,s)).filter(t=>null!==t).join(", "):y(t,e,s)||"",y=(t,e,s)=>{const i=t.find(t=>b(t.value,e,s));return i?i.textContent:null};let f=0;class g{constructor(s){t(this,s),this.inputId=`ion-selopt-${x++}`,this.disabled=!1,this.selected=!1,this.ionSelectOptionDidLoad=e(this,"ionSelectOptionDidLoad",7),this.ionSelectOptionDidUnload=e(this,"ionSelectOptionDidUnload",7)}componentWillLoad(){void 0===this.value&&(this.value=this.el.textContent||"")}componentDidLoad(){this.ionSelectOptionDidLoad.emit()}componentDidUnload(){this.ionSelectOptionDidUnload.emit()}hostData(){const t=s(this);return{role:"option",id:this.inputId,class:{[t]:!0}}}get el(){return o(this)}render(){return i(n,this.hostData())}static get style(){return":host{display:none}"}}let x=0;class C{constructor(e){t(this,e),this.options=[]}onSelect(t){const e=this.options.find(e=>e.value===t.target.value);e&&r(e.handler)}hostData(){return{class:{[s(this)]:!0}}}__stencil_render(){return i("ion-list",null,void 0!==this.header&&i("ion-list-header",null,this.header),(void 0!==this.subHeader||void 0!==this.message)&&i("ion-item",null,i("ion-label",{"text-wrap":!0},void 0!==this.subHeader&&i("h3",null,this.subHeader),void 0!==this.message&&i("p",null,this.message))),i("ion-radio-group",null,this.options.map(t=>i("ion-item",null,i("ion-label",null,t.text),i("ion-radio",{checked:t.checked,value:t.value,disabled:t.disabled})))))}render(){return i(n,this.hostData(),this.__stencil_render())}static get style(){return".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-label.sc-ion-select-popover, .sc-ion-select-popover-h ion-list-header.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"}}export{u as ion_select,g as ion_select_option,C as ion_select_popover};