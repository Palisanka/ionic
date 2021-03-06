import { r as registerInstance, d as getIonMode, h, H as Host } from './chunk-843a84da.js';
import { b as config } from './chunk-1074393c.js';
import { c as createColorClasses } from './chunk-ba834eff.js';
var spinners = {
    'lines': {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            var transform = "rotate(" + (30 * index + (index < 6 ? 180 : -180)) + "deg)";
            var animationDelay = (dur * index / total) - dur + "ms";
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            var transform = "rotate(" + (30 * index + (index < 6 ? 180 : -180)) + "deg)";
            var animationDelay = (dur * index / total) - dur + "ms";
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function (dur, index, total) {
            var animationDelay = (dur * index / total) - dur + "ms";
            var angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': 9 * Math.sin(angle) + "px",
                    'left': 9 * Math.cos(angle) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: function (dur, index, total) {
            var step = index / total;
            var animationDelay = (dur * step) - dur + "ms";
            var angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': 9 * Math.sin(angle) + "px",
                    'left': 9 * Math.cos(angle) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: function () {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: function (_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': 9 - (9 * index) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
var SPINNERS = spinners;
var Spinner = /** @class */ (function () {
    function Spinner(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, the spinner's animation will be paused.
         */
        this.paused = false;
    }
    Spinner.prototype.getName = function () {
        var name = this.name || config.get('spinner');
        var mode = getIonMode(this);
        if (name) {
            return name;
        }
        return (mode === 'ios') ? 'lines' : 'crescent';
    };
    Spinner.prototype.hostData = function () {
        var _a;
        var mode = getIonMode(this);
        return {
            class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a[mode] = true, _a["spinner-" + this.getName()] = true, _a['spinner-paused'] = !!this.paused || config.getBoolean('_testing'), _a))
        };
    };
    Spinner.prototype.__stencil_render = function () {
        var name = this.getName();
        var spinner = SPINNERS[name] || SPINNERS['lines'];
        var duration = (typeof this.duration === 'number' && this.duration > 10 ? this.duration : spinner.dur);
        var svgs = [];
        if (spinner.circles !== undefined) {
            for (var i = 0; i < spinner.circles; i++) {
                svgs.push(buildCircle(spinner, duration, i, spinner.circles));
            }
        }
        else if (spinner.lines !== undefined) {
            for (var i = 0; i < spinner.lines; i++) {
                svgs.push(buildLine(spinner, duration, i, spinner.lines));
            }
        }
        return svgs;
    };
    Spinner.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
    Object.defineProperty(Spinner, "style", {
        get: function () { return ":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg,[dir=rtl] svg{left:unset;right:unset;right:0;-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-paused) svg{-webkit-animation-play-state:paused;animation-play-state:paused}\@-webkit-keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}\@keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}"; },
        enumerable: true,
        configurable: true
    });
    return Spinner;
}());
var buildCircle = function (spinner, duration, index, total) {
    var data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = duration + "ms";
    return (h("svg", { viewBox: "0 0 64 64", style: data.style }, h("circle", { transform: "translate(32,32)", r: data.r })));
};
var buildLine = function (spinner, duration, index, total) {
    var data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = duration + "ms";
    return (h("svg", { viewBox: "0 0 64 64", style: data.style }, h("line", { transform: "translate(32,32)", y1: data.y1, y2: data.y2 })));
};
export { Spinner as ion_spinner };
