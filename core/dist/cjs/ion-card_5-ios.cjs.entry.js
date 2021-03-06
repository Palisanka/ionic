'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-5137b566.js');
require('./chunk-d8847c1c.js');
const __chunk_5 = require('./chunk-153bf688.js');

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
class Card {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * If `true`, a button tag will be rendered and the card will be tappable.
         */
        this.button = false;
        /**
         * The type of the button. Only used when an `onclick` or `button` property is present.
         */
        this.type = 'button';
        /**
         * If `true`, the user cannot interact with the card.
         */
        this.disabled = false;
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
    }
    isClickable() {
        return (this.href !== undefined || this.button);
    }
    hostData() {
        const mode = __chunk_1.getIonMode(this);
        return {
            class: Object.assign({ [mode]: true }, __chunk_5.createColorClasses(this.color), { 'card-disabled': this.disabled, 'ion-activatable': this.isClickable() })
        };
    }
    __stencil_render() {
        const clickable = this.isClickable();
        if (!clickable) {
            return [
                __chunk_1.h("slot", null)
            ];
        }
        const mode = __chunk_1.getIonMode(this);
        const { href, routerDirection } = this;
        const TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div';
        const attrs = (TagType === 'button')
            ? { type: this.type }
            : {
                download: this.download,
                href: this.href,
                rel: this.rel,
                target: this.target
            };
        return (__chunk_1.h(TagType, Object.assign({}, attrs, { class: "card-native", disabled: this.disabled, onClick: (ev) => __chunk_5.openURL(href, ev, routerDirection) }), __chunk_1.h("slot", null), clickable && mode === 'md' && __chunk_1.h("ion-ripple-effect", null)));
    }
    render() { return __chunk_1.h(__chunk_1.Host, this.hostData(), this.__stencil_render()); }
    static get style() { return ".sc-ion-card-ios-h{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden}.ion-color.sc-ion-card-ios-h{background:var(--ion-color-base)}.ion-color.sc-ion-card-ios-h, .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-header , .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-subtitle , .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-title {color:var(--ion-color-contrast)}.sc-ion-card-ios-s  img {display:block;width:100%}.sc-ion-card-ios-s  ion-list {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.card-disabled.sc-ion-card-ios-h{cursor:default;opacity:.3;pointer-events:none}.card-native.sc-ion-card-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background)}.card-native.sc-ion-card-ios::-moz-focus-inner{border:0}a.sc-ion-card-ios, button.sc-ion-card-ios{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect.sc-ion-card-ios{color:var(--ripple-color)}.sc-ion-card-ios-h{--background:var(--ion-item-background,transparent);--color:var(--ion-color-step-600,#666);margin-left:16px;margin-right:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:-webkit-transform .5s cubic-bezier(.12,.72,.29,1);transition:-webkit-transform .5s cubic-bezier(.12,.72,.29,1);transition:transform .5s cubic-bezier(.12,.72,.29,1);transition:transform .5s cubic-bezier(.12,.72,.29,1),-webkit-transform .5s cubic-bezier(.12,.72,.29,1);font-size:14px;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.12);box-shadow:0 4px 16px rgba(0,0,0,.12)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-card-ios-h{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}.activated.sc-ion-card-ios-h{-webkit-transform:scale3d(.97,.97,1);transform:scale3d(.97,.97,1)}"; }
}

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
class CardContent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    hostData() {
        const mode = __chunk_1.getIonMode(this);
        return {
            class: {
                [mode]: true,
                // Used internally for styling
                [`card-content-${mode}`]: true
            }
        };
    }
    render() { return __chunk_1.h(__chunk_1.Host, this.hostData()); }
    static get style() { return "ion-card-content{display:block;position:relative}.card-content-ios{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;font-size:16px;line-height:1.4}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.card-content-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}.card-content-ios h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:400}.card-content-ios h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:400}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:400}.card-content-ios p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px}"; }
}

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
class CardHeader {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * If `true`, the card header will be translucent.
         */
        this.translucent = false;
    }
    hostData() {
        const mode = __chunk_1.getIonMode(this);
        return {
            class: Object.assign({}, __chunk_5.createColorClasses(this.color), { 'card-header-translucent': this.translucent, [mode]: true })
        };
    }
    __stencil_render() {
        return __chunk_1.h("slot", null);
    }
    render() { return __chunk_1.h(__chunk_1.Host, this.hostData(), this.__stencil_render()); }
    static get style() { return ":host{display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) ::slotted(ion-card-subtitle),:host(.ion-color) ::slotted(ion-card-title){color:currentColor}:host{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(30px);backdrop-filter:saturate(180%) blur(30px)}"; }
}

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
class CardSubtitle {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    hostData() {
        const mode = __chunk_1.getIonMode(this);
        return {
            class: Object.assign({}, __chunk_5.createColorClasses(this.color), { [mode]: true }),
            'role': 'heading',
            'aria-level': '3'
        };
    }
    __stencil_render() {
        return __chunk_1.h("slot", null);
    }
    render() { return __chunk_1.h(__chunk_1.Host, this.hostData(), this.__stencil_render()); }
    static get style() { return ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600,#666);margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase}"; }
}

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
class CardTitle {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    hostData() {
        const mode = __chunk_1.getIonMode(this);
        return {
            class: Object.assign({}, __chunk_5.createColorClasses(this.color), { [mode]: true }),
            'role': 'heading',
            'aria-level': '2'
        };
    }
    __stencil_render() {
        return __chunk_1.h("slot", null);
    }
    render() { return __chunk_1.h(__chunk_1.Host, this.hostData(), this.__stencil_render()); }
    static get style() { return ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color,#000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:28px;font-weight:700;line-height:1.2}"; }
}

exports.ion_card = Card;
exports.ion_card_content = CardContent;
exports.ion_card_header = CardHeader;
exports.ion_card_subtitle = CardSubtitle;
exports.ion_card_title = CardTitle;
