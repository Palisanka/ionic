'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-5137b566.js');
require('./chunk-d8847c1c.js');

class Img {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.onLoad = () => {
            this.ionImgDidLoad.emit();
        };
        this.onError = () => {
            this.ionError.emit();
        };
        this.ionImgWillLoad = __chunk_1.createEvent(this, "ionImgWillLoad", 7);
        this.ionImgDidLoad = __chunk_1.createEvent(this, "ionImgDidLoad", 7);
        this.ionError = __chunk_1.createEvent(this, "ionError", 7);
    }
    srcChanged() {
        this.addIO();
    }
    componentDidLoad() {
        this.addIO();
    }
    addIO() {
        if (this.src === undefined) {
            return;
        }
        if ('IntersectionObserver' in window) {
            this.removeIO();
            this.io = new IntersectionObserver(data => {
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {
                    this.load();
                    this.removeIO();
                }
            });
            this.io.observe(this.el);
        }
        else {
            // fall back to setTimeout for Safari and IE
            setTimeout(() => this.load(), 200);
        }
    }
    load() {
        this.loadError = this.onError;
        this.loadSrc = this.src;
        this.ionImgWillLoad.emit();
    }
    removeIO() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    hostData() {
        const mode = __chunk_1.getIonMode(this);
        return {
            class: {
                [mode]: true,
            }
        };
    }
    __stencil_render() {
        return (__chunk_1.h("img", { src: this.loadSrc, alt: this.alt, decoding: "async", onLoad: this.onLoad, onError: this.loadError }));
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "src": ["srcChanged"]
    }; }
    render() { return __chunk_1.h(__chunk_1.Host, this.hostData(), this.__stencil_render()); }
    static get style() { return ":host{-o-object-fit:contain;object-fit:contain}:host,img{display:block}img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"; }
}

exports.ion_img = Img;
