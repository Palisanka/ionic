import{r as t,d as e,h as i,H as s,e as n,c as o}from"./p-9e4813c3.js";import{b as r}from"./p-1074393c.js";import{o as l,c as a,h}from"./p-ba834eff.js";class c{constructor(e){t(this,e),this.itemStyles=new Map,this.multipleInputs=!1,this.button=!1,this.detailIcon="ios-arrow-forward",this.disabled=!1,this.routerDirection="forward",this.type="button"}itemStyle(t){t.stopPropagation();const e=t.target.tagName,i=t.detail,s={},n=this.itemStyles.get(e)||{};let o=!1;Object.keys(i).forEach(t=>{if(i[t]){const e=`item-${t}`;n[e]||(o=!0),s[e]=!0}}),o||Object.keys(s).length===Object.keys(n).length||(o=!0),o&&(this.itemStyles.set(e,s),this.el.forceUpdate())}componentDidLoad(){const t=this.el.querySelectorAll("ion-checkbox, ion-datetime, ion-select, ion-radio"),e=this.el.querySelectorAll("ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle");this.multipleInputs=t.length+e.length>1}hasCover(){return 1===this.el.querySelectorAll("ion-checkbox, ion-datetime, ion-select, ion-radio").length&&!this.multipleInputs}isClickable(){return void 0!==this.href||this.button}canActivate(){return this.isClickable()||this.hasCover()}render(){const{detail:t,detailIcon:n,download:o,lines:r,disabled:c,href:d,rel:u,target:m,routerDirection:_}=this,g={},p=e(this),b=this.isClickable(),y=this.canActivate(),E=b?void 0===d?"button":"a":"div",v="button"===E?{type:this.type}:{download:o,href:d,rel:u,target:m},L=void 0!==t?t:"ios"===p&&b;return this.itemStyles.forEach(t=>{Object.assign(g,t)}),i(s,{"aria-disabled":c?"true":null,class:Object.assign({},g,a(this.color),{item:!0,[p]:!0,[`item-lines-${r}`]:void 0!==r,"item-disabled":c,"in-list":h("ion-list",this.el),"item-multiple-inputs":this.multipleInputs,"ion-activatable":y,"ion-focusable":!0})},i(E,Object.assign({},v,{class:"item-native",disabled:c,onClick:t=>l(d,t,_)}),i("slot",{name:"start"}),i("div",{class:"item-inner"},i("div",{class:"input-wrapper"},i("slot",null)),i("slot",{name:"end"}),L&&i("ion-icon",{icon:n,lazy:!1,class:"item-detail-icon"}),i("div",{class:"item-inner-highlight"})),y&&"md"===p&&i("ion-ripple-effect",null)),i("div",{class:"item-highlight"}))}get el(){return n(this)}static get style(){return":host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--box-shadow:none;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:var(--ion-item-background-activated,currentColor);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;outline:none;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}:host(.ion-color) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) .item-inner,:host(.ion-color) .item-native{border-color:var(--ion-color-shade)}:host(.ion-focused) .item-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color.ion-focused) .item-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}\@media (any-hover:hover){:host(.ion-activatable:hover) .item-native{background:var(--background-hover);color:var(--color-hover)}:host(.ion-color.ion-activatable:hover) .item-native{background:var(--ion-color-tint);color:var(--ion-color-contrast)}}:host(.activated) .item-native{background:var(--background-activated);color:var(--color-activated)}:host(.item-disabled),:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){opacity:.3}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-native{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}a,button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label){-ms-flex:1;flex:1}:host(.item-input),:host([vertical-align-top]){-ms-flex-align:start;align-items:flex-start}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-floating) .item-native,:host(.item-label-stacked) .item-native{-ms-flex-align:start;align-items:start}:host(.item-label-floating) .input-wrapper,:host(.item-label-stacked) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;bottom:0;position:absolute;background:var(--highlight-background)}.item-highlight{height:var(--full-highlight-height)}.item-inner-highlight{height:var(--inset-highlight-height)}:host(.item-interactive.ion-touched.ion-invalid),:host(.item-interactive.item-has-focus){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-select){--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(.item-label-floating) ::slotted(ion-datetime),:host(.item-label-stacked) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host{--min-height:44px;--transition:background-color 200ms linear;--padding-start:16px;--inner-padding-end:8px;--inner-border-width:0px 0px 0.55px 0px;--background:var(--ion-item-background,var(--ion-background-color,#fff));--background-activated:var(--ion-item-background-activated,var(--ion-color-step-150,#d9d9d9));--background-focused:var(--ion-item-background-focused,var(--ion-color-step-100,#e1e1e1));--background-hover:var(--ion-item-background-hover,rgba(var(--ion-text-color-rgb,0,0,0),0.04));--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)));--color:var(--ion-item-color,var(--ion-text-color,#000));--highlight-height:0;--highlight-color-focused:var(--ion-color-primary,#3880ff);--highlight-color-valid:var(--ion-color-success,#10dc60);--highlight-color-invalid:var(--ion-color-danger,#f04141);font-size:17px}:host(.activated){--transition:none}:host(.ion-color.activated) .item-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}\@media (any-hover:hover){:host(.activated.ion-activatable:hover) .item-native{background:var(--background-activated);color:var(--color-activated)}:host(.activated.ion-color.ion-activatable:hover) .item-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}}:host(.item-interactive){--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-full){--border-width:0px 0px 0.55px 0px;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0px 0px 0.55px 0px;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0px;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0px;--show-inset-highlight:0}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:2px;margin-bottom:2px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:8px;margin-right:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:0;margin-top:7px;margin-bottom:7px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}::slotted(ion-toggle[slot=end]),::slotted(ion-toggle[slot=start]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.item-label-floating) ::slotted([slot=end]),:host(.item-label-stacked) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}::slotted(.button-small){--padding-top:0px;--padding-bottom:0px;--padding-start:.5em;--padding-end:.5em;height:24px;font-size:13px}::slotted(ion-avatar){width:36px;height:36px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}::slotted(ion-label){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:10px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.item-label-floating),:host(.item-label-stacked){--min-height:68px}:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0px}"}}class d{constructor(e){t(this,e),this.sticky=!1}hostData(){const t=e(this);return{class:Object.assign({},a(this.color),{[t]:!0,"item-divider-sticky":this.sticky,item:!0})}}__stencil_render(){return[i("slot",{name:"start"}),i("div",{class:"item-divider-inner"},i("div",{class:"item-divider-wrapper"},i("slot",null)),i("slot",{name:"end"}))]}get el(){return n(this)}render(){return i(s,this.hostData(),this.__stencil_render())}static get style(){return":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--inner-padding-top:0px;--inner-padding-end:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:30px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:100;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.item-divider-sticky){position:-webkit-sticky;position:sticky;top:0}.item-divider-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border:0;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-divider-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-divider-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden}:host{--background:var(--ion-color-step-50,#f2f2f2);--color:var(--ion-color-step-850,#262626);--padding-start:16px;--inner-padding-end:8px;border-radius:0;position:relative;font-size:17px}:host([slot=start]){margin-left:0;margin-right:16px;margin-top:2px;margin-bottom:2px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}:host([slot=end]){margin-left:8px;margin-right:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:0;margin-top:7px;margin-bottom:7px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}::slotted(ion-label){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:10px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(h1){font-size:24px}::slotted(h1),::slotted(h2){margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-weight:400}::slotted(h2){font-size:17px}::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6){margin-bottom:3px;font-weight:400}::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6),::slotted(p){margin-left:0;margin-right:0;margin-top:0;font-size:14px;line-height:normal}::slotted(p){margin-bottom:2px;color:rgba(var(--ion-text-color-rgb,0,0,0),.4);text-overflow:inherit;overflow:inherit}::slotted(h2:last-child) ::slotted(h3:last-child),::slotted(h4:last-child),::slotted(h5:last-child),::slotted(h6:last-child),::slotted(p:last-child){margin-bottom:0}"}}class u{constructor(e){t(this,e)}hostData(){const t=e(this);return{role:"group",class:{[t]:!0,[`item-group-${t}`]:!0,item:!0}}}render(){return i(s,this.hostData())}static get style(){return"ion-item-group{display:block}.item-group-ios ion-item-sliding:last-child .item,.item-group-ios ion-item:last-child{--border-width:0}"}}class m{constructor(e){t(this,e),this.noAnimate=!1,this.ionStyle=o(this,"ionStyle",7)}componentWillLoad(){this.noAnimate="floating"===this.position,this.emitStyle()}componentDidLoad(){this.noAnimate&&setTimeout(()=>{this.noAnimate=!1},1e3)}positionChanged(){this.emitStyle()}emitStyle(){const t=this.position;this.ionStyle.emit({label:!0,[`label-${t}`]:void 0!==t})}hostData(){const t=this.position,i=e(this);return{class:Object.assign({},a(this.color),{[i]:!0,[`label-${t}`]:void 0!==t,"label-no-animate":this.noAnimate})}}get el(){return n(this)}static get watchers(){return{position:["positionChanged"]}}render(){return i(s,this.hostData())}static get style(){return".item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-ios-h, [text-wrap].sc-ion-label-ios-h{white-space:normal}.item-interactive-disabled.sc-ion-label-ios-h:not(.item-multiple-inputs), .item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-ios-h{cursor:default;opacity:.3;pointer-events:none}.item-input.sc-ion-label-ios-h, .item-input .sc-ion-label-ios-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-ios-h, .item-textarea .sc-ion-label-ios-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-ion-label-ios-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-floating.sc-ion-label-ios-h, .label-stacked.sc-ion-label-ios-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-ios-h{-webkit-transition:none;transition:none}.ion-text-wrap.sc-ion-label-ios-h, [text-wrap].sc-ion-label-ios-h{font-size:14px;line-height:1.5}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:13.6px}.label-floating.sc-ion-label-ios-h{margin-bottom:0;-webkit-transform:translate3d(0,27px,0);transform:translate3d(0,27px,0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform .15s ease-in-out;transition:-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out;transition:transform .15s ease-in-out,-webkit-transform .15s ease-in-out}[dir=rtl].label-floating.sc-ion-label-ios-h, [dir=rtl] .label-floating.sc-ion-label-ios-h, [dir=rtl].sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h, [dir=rtl] .sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h{-webkit-transform-origin:right top;transform-origin:right top}.item-has-focus.label-floating.sc-ion-label-ios-h, .item-has-focus .label-floating.sc-ion-label-ios-h, .item-has-placeholder.label-floating.sc-ion-label-ios-h, .item-has-placeholder .label-floating.sc-ion-label-ios-h, .item-has-value.label-floating.sc-ion-label-ios-h, .item-has-value .label-floating.sc-ion-label-ios-h{-webkit-transform:translateZ(0) scale(.8);transform:translateZ(0) scale(.8)}.sc-ion-label-ios-s  h1 {font-size:24px}.sc-ion-label-ios-s  h1 , .sc-ion-label-ios-s  h2 {margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-weight:400}.sc-ion-label-ios-s  h2 {font-size:17px}.sc-ion-label-ios-s  h3 , .sc-ion-label-ios-s  h4 , .sc-ion-label-ios-s  h5 , .sc-ion-label-ios-s  h6 {margin-left:0;margin-right:0;margin-top:0;margin-bottom:3px;font-size:14px;font-weight:400;line-height:normal}.sc-ion-label-ios-s  p {margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s > p{color:rgba(var(--ion-text-color-rgb,0,0,0),.4)}.sc-ion-label-ios-h.ion-color.sc-ion-label-ios-s > p, .ion-color .sc-ion-label-ios-h.sc-ion-label-ios-s > p{color:inherit}.sc-ion-label-ios-s  h2:last-child , .sc-ion-label-ios-s  h3:last-child , .sc-ion-label-ios-s  h4:last-child , .sc-ion-label-ios-s  h5:last-child , .sc-ion-label-ios-s  h6:last-child , .sc-ion-label-ios-s  p:last-child {margin-bottom:0}"}}class _{constructor(e){t(this,e),this.inset=!1}async closeSlidingItems(){const t=this.el.querySelector("ion-item-sliding");return!(!t||!t.closeOpened)&&t.closeOpened()}hostData(){const t=e(this);return{class:{[t]:!0,[`list-${t}`]:!0,"list-inset":this.inset,[`list-lines-${this.lines}`]:void 0!==this.lines,[`list-${t}-lines-${this.lines}`]:void 0!==this.lines}}}get el(){return n(this)}render(){return i(s,this.hostData())}static get style(){return"ion-list{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-ios{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:32px;background:var(--ion-item-background,var(--ion-background-color,#fff))}.list-ios.list-inset{margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px;border-radius:4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.list-ios.list-inset{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}.list-ios.list-inset ion-item{--border-width:0 0 1px 0;--inner-border-width:0}.list-ios.list-inset ion-item:last-child{--border-width:0;--inner-border-width:0}.list-ios.list-inset+ion-list.list-inset{margin-top:0}.list-ios-lines-none .item{--border-width:0;--inner-border-width:0}.list-ios-lines-full .item,.list-ios .item-lines-full{--border-width:0 0 0.55px 0}.list-ios-lines-full .item{--inner-border-width:0}.list-ios-lines-inset .item,.list-ios .item-lines-inset{--inner-border-width:0 0 0.55px 0}.list-ios .item-lines-inset{--border-width:0}.list-ios .item-lines-full{--inner-border-width:0}.list-ios .item-lines-none{--border-width:0;--inner-border-width:0}"}}class g{constructor(e){t(this,e)}hostData(){const t=e(this);return{class:Object.assign({},a(this.color),{[t]:!0})}}__stencil_render(){return i("slot",null)}render(){return i(s,this.hostData(),this.__stencil_render())}static get style(){return":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:transparent;--color:var(--ion-color-step-850,#262626);padding-left:calc(var(--ion-safe-area-left, 0px) + 16px);position:relative;font-size:12px;font-weight:500;letter-spacing:1px;text-transform:uppercase}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;-webkit-padding-start:calc(var(--ion-safe-area-left, 0px) + 16px);padding-inline-start:calc(var(--ion-safe-area-left, 0px) + 16px)}}"}}class p{constructor(e){t(this,e)}hostData(){const t=e(this);return{class:Object.assign({},a(this.color),{[t]:!0})}}__stencil_render(){return i("slot",null)}render(){return i(s,this.hostData(),this.__stencil_render())}static get style(){return":host{color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-350,#a6a6a6)}"}}class b{constructor(e){t(this,e),this.animated=!1}calculateWidth(){if(void 0!==this.width)return{style:{width:this.width}}}__stencil_render(){return i("span",null," ")}hostData(){const t=this.animated&&r.getBoolean("animated",!0),i=h("ion-avatar",this.el)||h("ion-thumbnail",this.el),s=e(this);return Object.assign({class:{[s]:!0,"skeleton-text-animated":t,"in-media":i}},this.calculateWidth())}get el(){return n(this)}render(){return i(s,this.hostData(),this.__stencil_render())}static get style(){return":host{--background:rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),0.065);border-radius:var(--border-radius,inherit);display:block;width:100%;height:inherit;margin-top:4px;margin-bottom:4px;background:var(--background);line-height:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}span{display:inline-block}:host(.in-media){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;height:100%}:host(.skeleton-text-animated){position:relative;background:-webkit-gradient(linear,left top,right top,color-stop(8%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.065)),color-stop(18%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.135)),color-stop(33%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.065)));background:linear-gradient(90deg,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.065) 8%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.135) 18%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.065) 33%);background-size:800px 104px;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:shimmer;animation-name:shimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear}\@-webkit-keyframes shimmer{0%{background-position:-468px 0}to{background-position:468px 0}}\@keyframes shimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"}}export{c as ion_item,d as ion_item_divider,u as ion_item_group,m as ion_label,_ as ion_list,g as ion_list_header,p as ion_note,b as ion_skeleton_text};