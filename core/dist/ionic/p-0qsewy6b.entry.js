import{r as i,c as t,d as e,h as s,H as o,e as a}from"./p-9e4813c3.js";import"./p-1074393c.js";import{c as d,h as n}from"./p-ba834eff.js";import{f as h}from"./p-c90aaa66.js";class l{constructor(e){i(this,e),this.inputId=`ion-rb-${c++}`,this.name=this.inputId,this.disabled=!1,this.checked=!1,this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.onClick=()=>{this.checked?this.ionDeselect.emit():this.checked=!0},this.ionRadioDidLoad=t(this,"ionRadioDidLoad",7),this.ionRadioDidUnload=t(this,"ionRadioDidUnload",7),this.ionStyle=t(this,"ionStyle",7),this.ionSelect=t(this,"ionSelect",7),this.ionDeselect=t(this,"ionDeselect",7),this.ionFocus=t(this,"ionFocus",7),this.ionBlur=t(this,"ionBlur",7)}colorChanged(){this.emitStyle()}checkedChanged(i){i&&this.ionSelect.emit({checked:!0,value:this.value}),this.emitStyle()}disabledChanged(){this.emitStyle()}componentWillLoad(){void 0===this.value&&(this.value=this.inputId),this.emitStyle()}componentDidLoad(){this.ionRadioDidLoad.emit()}componentDidUnload(){this.ionRadioDidUnload.emit()}emitStyle(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})}render(){const{inputId:i,disabled:t,checked:a,color:l,el:c}=this,r=e(this),u=i+"-lbl",m=h(c);return m&&(m.id=u),s(o,{onClick:this.onClick,role:"radio","aria-disabled":t?"true":null,"aria-checked":`${a}`,"aria-labelledby":u,class:Object.assign({},d(l),{[r]:!0,"in-item":n("ion-item",c),interactive:!0,"radio-checked":a,"radio-disabled":t})},s("div",{class:"radio-icon"},s("div",{class:"radio-inner"})),s("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:t}))}get el(){return a(this)}static get watchers(){return{color:["colorChanged"],checked:["checkedChanged"],disabled:["disabledChanged"]}}static get style(){return":host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:layout size style}.radio-icon,button{width:100%;height:100%}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-checked:var(--ion-color-primary,#3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:.3}:host(.ion-focused) .radio-icon:after{border-radius:50%;left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host-context([dir=rtl]).ion-focused .radio-icon:after,:host-context([dir=rtl]):host(.ion-focused) .radio-icon:after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:8px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}"}}let c=0;class r{constructor(e){i(this,e),this.inputId=`ion-rg-${u++}`,this.labelId=`${this.inputId}-lbl`,this.radios=[],this.allowEmptySelection=!1,this.name=this.inputId,this.ionChange=t(this,"ionChange",7)}valueChanged(i){this.updateRadios(),this.ionChange.emit({value:i})}onRadioDidLoad(i){const t=i.target;t.name=this.name,this.radios.push(t),null==this.value&&t.checked?this.value=t.value:this.updateRadios()}onRadioDidUnload(i){const t=this.radios.indexOf(i.target);t>-1&&this.radios.splice(t,1)}onRadioSelect(i){const t=i.target;t&&(this.value=t.value)}onRadioDeselect(i){if(this.allowEmptySelection){const t=i.target;t&&(t.checked=!1,this.value=void 0)}}componentDidLoad(){let i=this.el.querySelector("ion-list-header");if(i||(i=this.el.querySelector("ion-item-divider")),i){const t=i.querySelector("ion-label");t&&(this.labelId=t.id=this.name+"-lbl")}this.updateRadios()}updateRadios(){const i=this.value;let t=!1;for(const e of this.radios)t||e.value!==i?e.checked=!1:(t=!0,e.checked=!0)}hostData(){const i=e(this);return{role:"radiogroup","aria-labelledby":this.labelId,class:{[i]:!0}}}get el(){return a(this)}static get watchers(){return{value:["valueChanged"]}}render(){return s(o,this.hostData())}}let u=0;export{l as ion_radio,r as ion_radio_group};