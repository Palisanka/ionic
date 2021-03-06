import { r as registerInstance, d as getIonMode, h, H as Host } from './chunk-843a84da.js';
import './chunk-1074393c.js';
import { c as createColorClasses } from './chunk-ba834eff.js';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
class Text {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    hostData() {
        const mode = getIonMode(this);
        return {
            class: Object.assign({}, createColorClasses(this.color), { [mode]: true })
        };
    }
    __stencil_render() {
        return h("slot", null);
    }
    render() { return h(Host, this.hostData(), this.__stencil_render()); }
    static get style() { return ":host(.ion-color){color:var(--ion-color-base)}"; }
}

export { Text as ion_text };
