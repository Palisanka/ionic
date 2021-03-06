import { HostListener, Directive, ElementRef, Injectable, Inject, defineInjectable, inject, Optional, Component, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, InjectionToken, ApplicationRef, Injector, EventEmitter, ViewContainerRef, ComponentFactoryResolver, Attribute, SkipSelf, Output, ViewChild, ContentChild, TemplateRef, IterableDiffers, APP_INITIALIZER, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { __awaiter } from 'tslib';
import { DOCUMENT, Location, LocationStrategy, CommonModule } from '@angular/common';
import { NavigationStart, UrlSerializer, Router, PRIMARY_OUTLET, ActivatedRoute, ChildrenOutletContexts, RouterLink } from '@angular/router';
import { isPlatform, getPlatforms, LIFECYCLE_WILL_ENTER, LIFECYCLE_DID_ENTER, LIFECYCLE_WILL_LEAVE, LIFECYCLE_DID_LEAVE, LIFECYCLE_WILL_UNLOAD, actionSheetController, alertController, loadingController, pickerController, modalController, popoverController, toastController } from '@ionic/core';
import { Subject, fromEvent, BehaviorSubject } from 'rxjs';
import { filter, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { applyPolyfills, defineCustomElements } from '@ionic/core/loader';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValueAccessor {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.onChange = (/**
         * @return {?}
         */
        () => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
        setIonicClasses(this.el);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    handleChangeEvent(value) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
        }
        setIonicClasses(this.el);
    }
    /**
     * @return {?}
     */
    _handleBlurEvent() {
        this.onTouched();
        setIonicClasses(this.el);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.el.nativeElement.disabled = isDisabled;
    }
}
ValueAccessor.propDecorators = {
    _handleBlurEvent: [{ type: HostListener, args: ['ionBlur',] }]
};
/**
 * @param {?} element
 * @return {?}
 */
function setIonicClasses(element) {
    /** @type {?} */
    const input = (/** @type {?} */ (element.nativeElement));
    /** @type {?} */
    const classes = getClasses(input);
    setClasses(input, classes);
    /** @type {?} */
    const item = input.closest('ion-item');
    if (item) {
        setClasses(item, classes);
    }
}
/**
 * @param {?} element
 * @return {?}
 */
function getClasses(element) {
    /** @type {?} */
    const classList = element.classList;
    /** @type {?} */
    const classes = [];
    for (let i = 0; i < classList.length; i++) {
        /** @type {?} */
        const item = classList.item(i);
        if (item !== null && startsWith(item, 'ng-')) {
            classes.push(`ion-${item.substr(3)}`);
        }
    }
    return classes;
}
/**
 * @param {?} element
 * @param {?} classes
 * @return {?}
 */
function setClasses(element, classes) {
    /** @type {?} */
    const classList = element.classList;
    classList.remove('ion-valid', 'ion-invalid', 'ion-touched', 'ion-untouched', 'ion-dirty', 'ion-pristine');
    classList.add(...classes);
}
/**
 * @param {?} input
 * @param {?} search
 * @return {?}
 */
function startsWith(input, search) {
    return input.substr(0, search.length) === search;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BooleanValueAccessor extends ValueAccessor {
    /**
     * @param {?} el
     */
    constructor(el) {
        super(el);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.el.nativeElement.checked = this.lastValue = value == null ? false : value;
        setIonicClasses(this.el);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _handleIonChange(value) {
        this.handleChangeEvent(value);
    }
}
BooleanValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'ion-checkbox,ion-toggle',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: BooleanValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
BooleanValueAccessor.ctorParameters = () => [
    { type: ElementRef }
];
BooleanValueAccessor.propDecorators = {
    _handleIonChange: [{ type: HostListener, args: ['ionChange', ['$event.target.checked'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumericValueAccessor extends ValueAccessor {
    /**
     * @param {?} el
     */
    constructor(el) {
        super(el);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _handleIonChange(value) {
        this.handleChangeEvent(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        super.registerOnChange((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            fn(value === '' ? null : parseFloat(value));
        }));
    }
}
NumericValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'ion-input[type=number]',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: NumericValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
NumericValueAccessor.ctorParameters = () => [
    { type: ElementRef }
];
NumericValueAccessor.propDecorators = {
    _handleIonChange: [{ type: HostListener, args: ['ionChange', ['$event.target.value'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RadioValueAccessor extends ValueAccessor {
    /**
     * @param {?} el
     */
    constructor(el) {
        super(el);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _handleIonSelect(value) {
        this.handleChangeEvent(value);
    }
}
RadioValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'ion-radio',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: RadioValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
RadioValueAccessor.ctorParameters = () => [
    { type: ElementRef }
];
RadioValueAccessor.propDecorators = {
    _handleIonSelect: [{ type: HostListener, args: ['ionSelect', ['$event.target.checked'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectValueAccessor extends ValueAccessor {
    /**
     * @param {?} el
     */
    constructor(el) {
        super(el);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _handleChangeEvent(value) {
        this.handleChangeEvent(value);
    }
}
SelectValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: SelectValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
SelectValueAccessor.ctorParameters = () => [
    { type: ElementRef }
];
SelectValueAccessor.propDecorators = {
    _handleChangeEvent: [{ type: HostListener, args: ['ionChange', ['$event.target.value'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextValueAccessor extends ValueAccessor {
    /**
     * @param {?} el
     */
    constructor(el) {
        super(el);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _handleInputEvent(value) {
        this.handleChangeEvent(value);
    }
}
TextValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'ion-input:not([type=number]),ion-textarea,ion-searchbar',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: TextValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
TextValueAccessor.ctorParameters = () => [
    { type: ElementRef }
];
TextValueAccessor.propDecorators = {
    _handleInputEvent: [{ type: HostListener, args: ['ionChange', ['$event.target.value'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Platform {
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
        /**
         * @hidden
         */
        this.backButton = (/** @type {?} */ (new Subject()));
        /**
         * The pause event emits when the native platform puts the application
         * into the background, typically when the user switches to a different
         * application. This event would emit when a Cordova app is put into
         * the background, however, it would not fire on a standard web browser.
         */
        this.pause = new Subject();
        /**
         * The resume event emits when the native platform pulls the application
         * out from the background. This event would emit when a Cordova app comes
         * out from the background, however, it would not fire on a standard web browser.
         */
        this.resume = new Subject();
        /**
         * The resize event emits when the browser window has changed dimensions. This
         * could be from a browser window being physically resized, or from a device
         * changing orientation.
         */
        this.resize = new Subject();
        this.win = doc.defaultView;
        this.backButton.subscribeWithPriority = (/**
         * @param {?} priority
         * @param {?} callback
         * @return {?}
         */
        function (priority, callback) {
            return this.subscribe((/**
             * @param {?} ev
             * @return {?}
             */
            ev => {
                ev.register(priority, callback);
            }));
        });
        proxyEvent(this.pause, doc, 'pause');
        proxyEvent(this.resume, doc, 'resume');
        proxyEvent(this.backButton, doc, 'ionBackButton');
        proxyEvent(this.resize, this.win, 'resize');
        /** @type {?} */
        let readyResolve;
        this._readyPromise = new Promise((/**
         * @param {?} res
         * @return {?}
         */
        res => { readyResolve = res; }));
        if (this.win && this.win['cordova']) {
            doc.addEventListener('deviceready', (/**
             * @return {?}
             */
            () => {
                readyResolve('cordova');
            }), { once: true });
        }
        else {
            (/** @type {?} */ (readyResolve))('dom');
        }
    }
    /**
     * \@description
     * Depending on the platform the user is on, `is(platformName)` will
     * return `true` or `false`. Note that the same app can return `true`
     * for more than one platform name. For example, an app running from
     * an iPad would return `true` for the platform names: `mobile`,
     * `ios`, `ipad`, and `tablet`. Additionally, if the app was running
     * from Cordova then `cordova` would be true, and if it was running
     * from a web browser on the iPad then `mobileweb` would be `true`.
     *
     * ```
     * import { Platform } from 'ionic-angular';
     *
     * \@Component({...})
     * export MyPage {
     *   constructor(public platform: Platform) {
     *     if (this.platform.is('ios')) {
     *       // This will only print when on iOS
     *       console.log('I am an iOS device!');
     *     }
     *   }
     * }
     * ```
     *
     * | Platform Name   | Description                        |
     * |-----------------|------------------------------------|
     * | android         | on a device running Android.       |
     * | cordova         | on a device running Cordova.       |
     * | ios             | on a device running iOS.           |
     * | ipad            | on an iPad device.                 |
     * | iphone          | on an iPhone device.               |
     * | phablet         | on a phablet device.               |
     * | tablet          | on a tablet device.                |
     * | electron        | in Electron on a desktop device.   |
     * | pwa             | as a PWA app.                      |
     * | mobile          | on a mobile device.                |
     * | mobileweb       | on a mobile device in a browser.   |
     * | desktop         | on a desktop device.               |
     * | hybrid          | is a cordova or capacitor app.     |
     *
     * @param {?} platformName
     * @return {?} returns true/false based on platform.
     */
    is(platformName) {
        return isPlatform(this.win, platformName);
    }
    /**
     * \@description
     * Depending on what device you are on, `platforms` can return multiple values.
     * Each possible value is a hierarchy of platforms. For example, on an iPhone,
     * it would return `mobile`, `ios`, and `iphone`.
     *
     * ```
     * import { Platform } from 'ionic-angular';
     *
     * \@Component({...})
     * export MyPage {
     *   constructor(public platform: Platform) {
     *     // This will print an array of the current platforms
     *     console.log(this.platform.platforms());
     *   }
     * }
     * ```
     * @return {?} the array of platforms
     */
    platforms() {
        return getPlatforms(this.win);
    }
    /**
     * Returns a promise when the platform is ready and native functionality
     * can be called. If the app is running from within a web browser, then
     * the promise will resolve when the DOM is ready. When the app is running
     * from an application engine such as Cordova, then the promise will
     * resolve when Cordova triggers the `deviceready` event.
     *
     * The resolved value is the `readySource`, which states which platform
     * ready was used. For example, when Cordova is ready, the resolved ready
     * source is `cordova`. The default ready source value will be `dom`. The
     * `readySource` is useful if different logic should run depending on the
     * platform the app is running from. For example, only Cordova can execute
     * the status bar plugin, so the web should not run status bar plugin logic.
     *
     * ```
     * import { Component } from '\@angular/core';
     * import { Platform } from 'ionic-angular';
     *
     * \@Component({...})
     * export MyApp {
     *   constructor(public platform: Platform) {
     *     this.platform.ready().then((readySource) => {
     *       console.log('Platform ready from', readySource);
     *       // Platform now ready, execute any required native code
     *     });
     *   }
     * }
     * ```
     * @return {?}
     */
    ready() {
        return this._readyPromise;
    }
    /**
     * Returns if this app is using right-to-left language direction or not.
     * We recommend the app's `index.html` file already has the correct `dir`
     * attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`.
     * [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)
     * @return {?}
     */
    get isRTL() {
        return this.doc.dir === 'rtl';
    }
    /**
     * Get the query string parameter
     * @param {?} key
     * @return {?}
     */
    getQueryParam(key) {
        return readQueryParam(this.win.location.href, key);
    }
    /**
     * Returns `true` if the app is in landscape mode.
     * @return {?}
     */
    isLandscape() {
        return !this.isPortrait();
    }
    /**
     * Returns `true` if the app is in portait mode.
     * @return {?}
     */
    isPortrait() {
        return this.win.matchMedia && this.win.matchMedia('(orientation: portrait)').matches;
    }
    /**
     * @param {?} expression
     * @return {?}
     */
    testUserAgent(expression) {
        /** @type {?} */
        const nav = this.win.navigator;
        return !!(nav && nav.userAgent && nav.userAgent.indexOf(expression) >= 0);
    }
    /**
     * Get the current url.
     * @return {?}
     */
    url() {
        return this.win.location.href;
    }
    /**
     * Gets the width of the platform's viewport using `window.innerWidth`.
     * @return {?}
     */
    width() {
        return this.win.innerWidth;
    }
    /**
     * Gets the height of the platform's viewport using `window.innerHeight`.
     * @return {?}
     */
    height() {
        return this.win.innerHeight;
    }
}
Platform.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */
Platform.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ Platform.ngInjectableDef = defineInjectable({ factory: function Platform_Factory() { return new Platform(inject(DOCUMENT)); }, token: Platform, providedIn: "root" });
/** @type {?} */
const readQueryParam = (/**
 * @param {?} url
 * @param {?} key
 * @return {?}
 */
(url, key) => {
    key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    /** @type {?} */
    const regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
    /** @type {?} */
    const results = regex.exec(url);
    return results ? decodeURIComponent(results[1].replace(/\+/g, ' ')) : null;
});
/** @type {?} */
const proxyEvent = (/**
 * @template T
 * @param {?} emitter
 * @param {?} el
 * @param {?} eventName
 * @return {?}
 */
(emitter, el, eventName) => {
    if (((/** @type {?} */ (el)))) {
        el.addEventListener(eventName, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            // ?? cordova might emit "null" events
            emitter.next(ev != null ? (/** @type {?} */ (((/** @type {?} */ (ev))).detail)) : undefined);
        }));
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavController {
    /**
     * @param {?} platform
     * @param {?} location
     * @param {?} serializer
     * @param {?=} router
     */
    constructor(platform, location, serializer, router) {
        this.location = location;
        this.serializer = serializer;
        this.router = router;
        this.direction = DEFAULT_DIRECTION;
        this.animated = DEFAULT_ANIMATED;
        this.guessDirection = 'forward';
        this.lastNavId = -1;
        // Subscribe to router events to detect direction
        if (router) {
            router.events.subscribe((/**
             * @param {?} ev
             * @return {?}
             */
            ev => {
                if (ev instanceof NavigationStart) {
                    /** @type {?} */
                    const id = (ev.restoredState) ? ev.restoredState.navigationId : ev.id;
                    this.guessDirection = id < this.lastNavId ? 'back' : 'forward';
                    this.guessAnimation = !ev.restoredState ? this.guessDirection : undefined;
                    this.lastNavId = this.guessDirection === 'forward' ? ev.id : id;
                }
            }));
        }
        // Subscribe to backButton events
        platform.backButton.subscribeWithPriority(0, (/**
         * @return {?}
         */
        () => this.pop()));
    }
    /**
     * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
     * it's equivalent to call `this.router.navigateByUrl()`, but it's explicit about the **direction** of the transition.
     *
     * Going **forward** means that a new page it's going to be pushed to the stack of the outlet (ion-router-outlet),
     * and that it will show a "forward" animation by default.
     *
     * Navigating forward can also be trigger in a declarative manner by using the `[routerDirection]` directive:
     *
     * ```html
     * <a routerLink="/path/to/page" routerDirection="forward">Link</a>
     * ```
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    navigateForward(url, options = {}) {
        this.setDirection('forward', options.animated, options.animationDirection);
        return this.navigate(url, options);
    }
    /**
     * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
     * it's equivalent to call:
     *
     * ```ts
     * this.navController.setDirection('back');
     * this.router.navigateByUrl(path);
     * ```
     *
     * Going **back** means that all the pages in the stack until the navigated page is found will be pop,
     * and that it will show a "back" animation by default.
     *
     * Navigating back can also be trigger in a declarative manner by using the `[routerDirection]` directive:
     *
     * ```html
     * <a routerLink="/path/to/page" routerDirection="back">Link</a>
     * ```
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    navigateBack(url, options = {}) {
        this.setDirection('back', options.animated, options.animationDirection);
        return this.navigate(url, options);
    }
    /**
     * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
     * it's equivalent to call:
     *
     * ```ts
     * this.navController.setDirection('root');
     * this.router.navigateByUrl(path);
     * ```
     *
     * Going **root** means that all existing pages in the stack will be removed,
     * and the navigated page will become the single page in the stack.
     *
     * Navigating root can also be trigger in a declarative manner by using the `[routerDirection]` directive:
     *
     * ```html
     * <a routerLink="/path/to/page" routerDirection="root">Link</a>
     * ```
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    navigateRoot(url, options = {}) {
        this.setDirection('root', options.animated, options.animationDirection);
        return this.navigate(url, options);
    }
    /**
     * Same as [Location](https://angular.io/api/common/Location)'s back() method.
     * It will use the standard `window.history.back()` under the hood, but featuring a `back` animation.
     * @param {?=} options
     * @return {?}
     */
    back(options = { animated: true, animationDirection: 'back' }) {
        this.setDirection('back', options.animated, options.animationDirection);
        return this.location.back();
    }
    /**
     * This methods goes back in the context of ionic's stack navigation.
     *
     * It recursivelly finds the top active `ion-router-outlet` and calls `pop()`.
     * This is the recommended way to go back when you are using `ion-router-outlet`.
     * @return {?}
     */
    pop() {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let outlet = this.topOutlet;
            while (outlet) {
                if (yield outlet.pop()) {
                    break;
                }
                else {
                    outlet = outlet.parentOutlet;
                }
            }
        });
    }
    /**
     * This methods specifies the direction of the next navigation performed by the angular router.
     *
     * `setDirection()` does not trigger any transition, it just sets a set of flags to be consumed by `ion-router-outlet`.
     *
     * It's recommended to use `navigateForward()`, `navigateBack()` and `navigateBack()` instead of `setDirection()`.
     * @param {?} direction
     * @param {?=} animated
     * @param {?=} animationDirection
     * @return {?}
     */
    setDirection(direction, animated, animationDirection) {
        this.direction = direction;
        this.animated = getAnimation(direction, animated, animationDirection);
    }
    /**
     * \@internal
     * @param {?} outlet
     * @return {?}
     */
    setTopOutlet(outlet) {
        this.topOutlet = outlet;
    }
    /**
     * \@internal
     * @return {?}
     */
    consumeTransition() {
        /** @type {?} */
        let direction = 'root';
        /** @type {?} */
        let animation;
        if (this.direction === 'auto') {
            direction = this.guessDirection;
            animation = this.guessAnimation;
        }
        else {
            animation = this.animated;
            direction = this.direction;
        }
        this.direction = DEFAULT_DIRECTION;
        this.animated = DEFAULT_ANIMATED;
        return {
            direction,
            animation
        };
    }
    /**
     * @private
     * @param {?} url
     * @param {?} options
     * @return {?}
     */
    navigate(url, options) {
        if (Array.isArray(url)) {
            return (/** @type {?} */ (this.router)).navigate(url, options);
        }
        else {
            /**
             * navigateByUrl ignores any properties that
             * would change the url, so things like queryParams
             * would be ignored unless we create a url tree
             * More Info: https://github.com/angular/angular/issues/18798
             * @type {?}
             */
            const urlTree = this.serializer.parse(url.toString());
            if (options.queryParams !== undefined) {
                urlTree.queryParams = Object.assign({}, options.queryParams);
            }
            if (options.fragment !== undefined) {
                urlTree.fragment = options.fragment;
            }
            /**
             * `navigateByUrl` will still apply `NavigationExtras` properties
             * that do not modify the url, such as `replaceUrl` which is why
             * `options` is passed in here.
             */
            return (/** @type {?} */ (this.router)).navigateByUrl(urlTree, options);
        }
    }
}
NavController.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */
NavController.ctorParameters = () => [
    { type: Platform },
    { type: Location },
    { type: UrlSerializer },
    { type: Router, decorators: [{ type: Optional }] }
];
/** @nocollapse */ NavController.ngInjectableDef = defineInjectable({ factory: function NavController_Factory() { return new NavController(inject(Platform), inject(Location), inject(UrlSerializer), inject(Router, 8)); }, token: NavController, providedIn: "root" });
/**
 * @param {?} direction
 * @param {?} animated
 * @param {?} animationDirection
 * @return {?}
 */
function getAnimation(direction, animated, animationDirection) {
    if (animated === false) {
        return undefined;
    }
    if (animationDirection !== undefined) {
        return animationDirection;
    }
    if (direction === 'forward' || direction === 'back') {
        return direction;
    }
    else if (direction === 'root' && animated === true) {
        return 'forward';
    }
    return undefined;
}
/** @type {?} */
const DEFAULT_DIRECTION = 'auto';
/** @type {?} */
const DEFAULT_ANIMATED = undefined;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} Cmp
 * @param {?} inputs
 * @return {?}
 */
function proxyInputs(Cmp, inputs) {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    item => {
        Object.defineProperty(Prototype, item, {
            /**
             * @return {?}
             */
            get() { return this.el[item]; },
            /**
             * @param {?} val
             * @return {?}
             */
            set(val) {
                this.z.runOutsideAngular((/**
                 * @return {?}
                 */
                () => this.el[item] = val));
            },
        });
    }));
}
/**
 * @param {?} Cmp
 * @param {?} methods
 * @return {?}
 */
function proxyMethods(Cmp, methods) {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    methodName => {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const args = arguments;
            return this.z.runOutsideAngular((/**
             * @return {?}
             */
            () => this.el[methodName].apply(this.el, args)));
        });
    }));
}
/**
 * @param {?} instance
 * @param {?} el
 * @param {?} events
 * @return {?}
 */
function proxyOutputs(instance, el, events) {
    events.forEach((/**
     * @param {?} eventName
     * @return {?}
     */
    eventName => instance[eventName] = fromEvent(el, eventName)));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonApp {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonApp.decorators = [
    { type: Component, args: [{ selector: 'ion-app', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonApp.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
class IonAvatar {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonAvatar.decorators = [
    { type: Component, args: [{ selector: 'ion-avatar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonAvatar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
class IonBackButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonBackButton.decorators = [
    { type: Component, args: [{ selector: 'ion-back-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'defaultHref', 'disabled', 'icon', 'mode', 'text', 'type'] },] },
];
/** @nocollapse */
IonBackButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonBackButton, ['color', 'defaultHref', 'disabled', 'icon', 'mode', 'text', 'type']);
class IonBackdrop {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionBackdropTap']);
    }
}
IonBackdrop.decorators = [
    { type: Component, args: [{ selector: 'ion-backdrop', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['stopPropagation', 'tappable', 'visible'] },] },
];
/** @nocollapse */
IonBackdrop.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonBackdrop, ['stopPropagation', 'tappable', 'visible']);
class IonBadge {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonBadge.decorators = [
    { type: Component, args: [{ selector: 'ion-badge', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
];
/** @nocollapse */
IonBadge.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonBadge, ['color', 'mode']);
class IonButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
    }
}
IonButton.decorators = [
    { type: Component, args: [{ selector: 'ion-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'mode', 'rel', 'routerDirection', 'shape', 'size', 'strong', 'target', 'type'] },] },
];
/** @nocollapse */
IonButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonButton, ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'mode', 'rel', 'routerDirection', 'shape', 'size', 'strong', 'target', 'type']);
class IonButtons {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonButtons.decorators = [
    { type: Component, args: [{ selector: 'ion-buttons', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonButtons.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
class IonCard {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonCard.decorators = [
    { type: Component, args: [{ selector: 'ion-card', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['button', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerDirection', 'target', 'type'] },] },
];
/** @nocollapse */
IonCard.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonCard, ['button', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerDirection', 'target', 'type']);
class IonCardContent {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonCardContent.decorators = [
    { type: Component, args: [{ selector: 'ion-card-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['mode'] },] },
];
/** @nocollapse */
IonCardContent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonCardContent, ['mode']);
class IonCardHeader {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonCardHeader.decorators = [
    { type: Component, args: [{ selector: 'ion-card-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'translucent'] },] },
];
/** @nocollapse */
IonCardHeader.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonCardHeader, ['color', 'mode', 'translucent']);
class IonCardSubtitle {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonCardSubtitle.decorators = [
    { type: Component, args: [{ selector: 'ion-card-subtitle', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
];
/** @nocollapse */
IonCardSubtitle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonCardSubtitle, ['color', 'mode']);
class IonCardTitle {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonCardTitle.decorators = [
    { type: Component, args: [{ selector: 'ion-card-title', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
];
/** @nocollapse */
IonCardTitle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonCardTitle, ['color', 'mode']);
class IonCheckbox {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
    }
}
IonCheckbox.decorators = [
    { type: Component, args: [{ selector: 'ion-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'color', 'disabled', 'indeterminate', 'mode', 'name', 'value'] },] },
];
/** @nocollapse */
IonCheckbox.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonCheckbox, ['checked', 'color', 'disabled', 'indeterminate', 'mode', 'name', 'value']);
class IonChip {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonChip.decorators = [
    { type: Component, args: [{ selector: 'ion-chip', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'outline'] },] },
];
/** @nocollapse */
IonChip.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonChip, ['color', 'mode', 'outline']);
class IonCol {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonCol.decorators = [
    { type: Component, args: [{ selector: 'ion-col', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs'] },] },
];
/** @nocollapse */
IonCol.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonCol, ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']);
class IonContent {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionScrollStart', 'ionScroll', 'ionScrollEnd']);
    }
}
IonContent.decorators = [
    { type: Component, args: [{ selector: 'ion-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY'] },] },
];
/** @nocollapse */
IonContent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyMethods(IonContent, ['getScrollElement', 'scrollToTop', 'scrollToBottom', 'scrollByPoint', 'scrollToPoint']);
proxyInputs(IonContent, ['color', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY']);
class IonDatetime {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionCancel', 'ionChange', 'ionFocus', 'ionBlur']);
    }
}
IonDatetime.decorators = [
    { type: Component, args: [{ selector: 'ion-datetime', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['cancelText', 'dayNames', 'dayShortNames', 'dayValues', 'disabled', 'displayFormat', 'doneText', 'hourValues', 'max', 'min', 'minuteValues', 'mode', 'monthNames', 'monthShortNames', 'monthValues', 'name', 'pickerFormat', 'pickerOptions', 'placeholder', 'readonly', 'value', 'yearValues'] },] },
];
/** @nocollapse */
IonDatetime.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyMethods(IonDatetime, ['open']);
proxyInputs(IonDatetime, ['cancelText', 'dayNames', 'dayShortNames', 'dayValues', 'disabled', 'displayFormat', 'doneText', 'hourValues', 'max', 'min', 'minuteValues', 'mode', 'monthNames', 'monthShortNames', 'monthValues', 'name', 'pickerFormat', 'pickerOptions', 'placeholder', 'readonly', 'value', 'yearValues']);
class IonFab {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonFab.decorators = [
    { type: Component, args: [{ selector: 'ion-fab', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['activated', 'edge', 'horizontal', 'vertical'] },] },
];
/** @nocollapse */
IonFab.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyMethods(IonFab, ['close']);
proxyInputs(IonFab, ['activated', 'edge', 'horizontal', 'vertical']);
class IonFabButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
    }
}
IonFabButton.decorators = [
    { type: Component, args: [{ selector: 'ion-fab-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['activated', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerDirection', 'show', 'size', 'target', 'translucent', 'type'] },] },
];
/** @nocollapse */
IonFabButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonFabButton, ['activated', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerDirection', 'show', 'size', 'target', 'translucent', 'type']);
class IonFabList {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonFabList.decorators = [
    { type: Component, args: [{ selector: 'ion-fab-list', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['activated', 'side'] },] },
];
/** @nocollapse */
IonFabList.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonFabList, ['activated', 'side']);
class IonFooter {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonFooter.decorators = [
    { type: Component, args: [{ selector: 'ion-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['mode', 'translucent'] },] },
];
/** @nocollapse */
IonFooter.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonFooter, ['mode', 'translucent']);
class IonGrid {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonGrid.decorators = [
    { type: Component, args: [{ selector: 'ion-grid', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['fixed'] },] },
];
/** @nocollapse */
IonGrid.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonGrid, ['fixed']);
class IonHeader {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonHeader.decorators = [
    { type: Component, args: [{ selector: 'ion-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['mode', 'translucent'] },] },
];
/** @nocollapse */
IonHeader.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonHeader, ['mode', 'translucent']);
class IonIcon {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonIcon.decorators = [
    { type: Component, args: [{ selector: 'ion-icon', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['ariaLabel', 'color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'size', 'src'] },] },
];
/** @nocollapse */
IonIcon.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonIcon, ['ariaLabel', 'color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'size', 'src']);
class IonImg {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionImgWillLoad', 'ionImgDidLoad', 'ionError']);
    }
}
IonImg.decorators = [
    { type: Component, args: [{ selector: 'ion-img', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alt', 'src'] },] },
];
/** @nocollapse */
IonImg.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonImg, ['alt', 'src']);
class IonInfiniteScroll {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionInfinite']);
    }
}
IonInfiniteScroll.decorators = [
    { type: Component, args: [{ selector: 'ion-infinite-scroll', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'position', 'threshold'] },] },
];
/** @nocollapse */
IonInfiniteScroll.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyMethods(IonInfiniteScroll, ['complete']);
proxyInputs(IonInfiniteScroll, ['disabled', 'position', 'threshold']);
class IonInfiniteScrollContent {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonInfiniteScrollContent.decorators = [
    { type: Component, args: [{ selector: 'ion-infinite-scroll-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['loadingSpinner', 'loadingText'] },] },
];
/** @nocollapse */
IonInfiniteScrollContent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonInfiniteScrollContent, ['loadingSpinner', 'loadingText']);
class IonInput {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionBlur', 'ionFocus']);
    }
}
IonInput.decorators = [
    { type: Component, args: [{ selector: 'ion-input', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'color', 'debounce', 'disabled', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'mode', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value'] },] },
];
/** @nocollapse */
IonInput.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyMethods(IonInput, ['setFocus', 'getInputElement']);
proxyInputs(IonInput, ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'color', 'debounce', 'disabled', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'mode', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value']);
class IonItem {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonItem.decorators = [
    { type: Component, args: [{ selector: 'ion-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['button', 'color', 'detail', 'detailIcon', 'disabled', 'download', 'href', 'lines', 'mode', 'rel', 'routerDirection', 'target', 'type'] },] },
];
/** @nocollapse */
IonItem.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonItem, ['button', 'color', 'detail', 'detailIcon', 'disabled', 'download', 'href', 'lines', 'mode', 'rel', 'routerDirection', 'target', 'type']);
class IonItemDivider {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonItemDivider.decorators = [
    { type: Component, args: [{ selector: 'ion-item-divider', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'sticky'] },] },
];
/** @nocollapse */
IonItemDivider.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonItemDivider, ['color', 'mode', 'sticky']);
class IonItemGroup {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonItemGroup.decorators = [
    { type: Component, args: [{ selector: 'ion-item-group', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonItemGroup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
class IonItemOption {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonItemOption.decorators = [
    { type: Component, args: [{ selector: 'ion-item-option', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'disabled', 'download', 'expandable', 'href', 'mode', 'rel', 'target', 'type'] },] },
];
/** @nocollapse */
IonItemOption.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonItemOption, ['color', 'disabled', 'download', 'expandable', 'href', 'mode', 'rel', 'target', 'type']);
class IonItemOptions {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionSwipe']);
    }
}
IonItemOptions.decorators = [
    { type: Component, args: [{ selector: 'ion-item-options', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['side'] },] },
];
/** @nocollapse */
IonItemOptions.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonItemOptions, ['side']);
class IonItemSliding {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionDrag']);
    }
}
IonItemSliding.decorators = [
    { type: Component, args: [{ selector: 'ion-item-sliding', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled'] },] },
];
/** @nocollapse */
IonItemSliding.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyMethods(IonItemSliding, ['getOpenAmount', 'getSlidingRatio', 'open', 'close', 'closeOpened']);
proxyInputs(IonItemSliding, ['disabled']);
class IonLabel {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonLabel.decorators = [
    { type: Component, args: [{ selector: 'ion-label', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'position'] },] },
];
/** @nocollapse */
IonLabel.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonLabel, ['color', 'mode', 'position']);
class IonList {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonList.decorators = [
    { type: Component, args: [{ selector: 'ion-list', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inset', 'lines', 'mode'] },] },
];
/** @nocollapse */
IonList.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyMethods(IonList, ['closeSlidingItems']);
proxyInputs(IonList, ['inset', 'lines', 'mode']);
class IonListHeader {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonListHeader.decorators = [
    { type: Component, args: [{ selector: 'ion-list-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
];
/** @nocollapse */
IonListHeader.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonListHeader, ['color', 'mode']);
class IonMenu {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionWillOpen', 'ionWillClose', 'ionDidOpen', 'ionDidClose']);
    }
}
IonMenu.decorators = [
    { type: Component, args: [{ selector: 'ion-menu', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['contentId', 'disabled', 'maxEdgeStart', 'menuId', 'side', 'swipeGesture', 'type'] },] },
];
/** @nocollapse */
IonMenu.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyMethods(IonMenu, ['isOpen', 'isActive', 'open', 'close', 'toggle', 'setOpen']);
proxyInputs(IonMenu, ['contentId', 'disabled', 'maxEdgeStart', 'menuId', 'side', 'swipeGesture', 'type']);
class IonMenuButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonMenuButton.decorators = [
    { type: Component, args: [{ selector: 'ion-menu-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['autoHide', 'color', 'disabled', 'menu', 'type'] },] },
];
/** @nocollapse */
IonMenuButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonMenuButton, ['autoHide', 'color', 'disabled', 'menu', 'type']);
class IonMenuToggle {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonMenuToggle.decorators = [
    { type: Component, args: [{ selector: 'ion-menu-toggle', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['autoHide', 'menu'] },] },
];
/** @nocollapse */
IonMenuToggle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonMenuToggle, ['autoHide', 'menu']);
class IonNav {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionNavWillChange', 'ionNavDidChange']);
    }
}
IonNav.decorators = [
    { type: Component, args: [{ selector: 'ion-nav', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['animated', 'animation', 'root', 'rootParams', 'swipeGesture'] },] },
];
/** @nocollapse */
IonNav.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyMethods(IonNav, ['push', 'insert', 'insertPages', 'pop', 'popTo', 'popToRoot', 'removeIndex', 'setRoot', 'setPages', 'getActive', 'getByIndex', 'canGoBack', 'getPrevious']);
proxyInputs(IonNav, ['animated', 'animation', 'root', 'rootParams', 'swipeGesture']);
class IonNavPop {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonNavPop.decorators = [
    { type: Component, args: [{ selector: 'ion-nav-pop', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonNavPop.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
class IonNavPush {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonNavPush.decorators = [
    { type: Component, args: [{ selector: 'ion-nav-push', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['component', 'componentProps'] },] },
];
/** @nocollapse */
IonNavPush.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonNavPush, ['component', 'componentProps']);
class IonNavSetRoot {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonNavSetRoot.decorators = [
    { type: Component, args: [{ selector: 'ion-nav-set-root', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['component', 'componentProps'] },] },
];
/** @nocollapse */
IonNavSetRoot.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonNavSetRoot, ['component', 'componentProps']);
class IonNote {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonNote.decorators = [
    { type: Component, args: [{ selector: 'ion-note', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
];
/** @nocollapse */
IonNote.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonNote, ['color', 'mode']);
class IonProgressBar {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonProgressBar.decorators = [
    { type: Component, args: [{ selector: 'ion-progress-bar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['buffer', 'color', 'mode', 'reversed', 'type', 'value'] },] },
];
/** @nocollapse */
IonProgressBar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonProgressBar, ['buffer', 'color', 'mode', 'reversed', 'type', 'value']);
class IonRadio {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionSelect', 'ionFocus', 'ionBlur']);
    }
}
IonRadio.decorators = [
    { type: Component, args: [{ selector: 'ion-radio', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'color', 'disabled', 'mode', 'name', 'value'] },] },
];
/** @nocollapse */
IonRadio.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonRadio, ['checked', 'color', 'disabled', 'mode', 'name', 'value']);
class IonRadioGroup {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange']);
    }
}
IonRadioGroup.decorators = [
    { type: Component, args: [{ selector: 'ion-radio-group', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['allowEmptySelection', 'name', 'value'] },] },
];
/** @nocollapse */
IonRadioGroup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonRadioGroup, ['allowEmptySelection', 'name', 'value']);
class IonRange {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
    }
}
IonRange.decorators = [
    { type: Component, args: [{ selector: 'ion-range', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'debounce', 'disabled', 'dualKnobs', 'max', 'min', 'mode', 'name', 'pin', 'snaps', 'step', 'ticks', 'value'] },] },
];
/** @nocollapse */
IonRange.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonRange, ['color', 'debounce', 'disabled', 'dualKnobs', 'max', 'min', 'mode', 'name', 'pin', 'snaps', 'step', 'ticks', 'value']);
class IonRefresher {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionRefresh', 'ionPull', 'ionStart']);
    }
}
IonRefresher.decorators = [
    { type: Component, args: [{ selector: 'ion-refresher', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['closeDuration', 'disabled', 'pullFactor', 'pullMax', 'pullMin', 'snapbackDuration'] },] },
];
/** @nocollapse */
IonRefresher.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyMethods(IonRefresher, ['complete', 'cancel', 'getProgress']);
proxyInputs(IonRefresher, ['closeDuration', 'disabled', 'pullFactor', 'pullMax', 'pullMin', 'snapbackDuration']);
class IonRefresherContent {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonRefresherContent.decorators = [
    { type: Component, args: [{ selector: 'ion-refresher-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText'] },] },
];
/** @nocollapse */
IonRefresherContent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonRefresherContent, ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText']);
class IonReorder {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonReorder.decorators = [
    { type: Component, args: [{ selector: 'ion-reorder', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonReorder.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
class IonReorderGroup {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionItemReorder']);
    }
}
IonReorderGroup.decorators = [
    { type: Component, args: [{ selector: 'ion-reorder-group', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled'] },] },
];
/** @nocollapse */
IonReorderGroup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyMethods(IonReorderGroup, ['complete']);
proxyInputs(IonReorderGroup, ['disabled']);
class IonRippleEffect {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonRippleEffect.decorators = [
    { type: Component, args: [{ selector: 'ion-ripple-effect', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['type'] },] },
];
/** @nocollapse */
IonRippleEffect.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyMethods(IonRippleEffect, ['addRipple']);
proxyInputs(IonRippleEffect, ['type']);
class IonRow {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonRow.decorators = [
    { type: Component, args: [{ selector: 'ion-row', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonRow.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
class IonSearchbar {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionCancel', 'ionClear', 'ionBlur', 'ionFocus']);
    }
}
IonSearchbar.decorators = [
    { type: Component, args: [{ selector: 'ion-searchbar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['animated', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'disabled', 'mode', 'placeholder', 'searchIcon', 'showCancelButton', 'spellcheck', 'type', 'value'] },] },
];
/** @nocollapse */
IonSearchbar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyMethods(IonSearchbar, ['setFocus', 'getInputElement']);
proxyInputs(IonSearchbar, ['animated', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'disabled', 'mode', 'placeholder', 'searchIcon', 'showCancelButton', 'spellcheck', 'type', 'value']);
class IonSegment {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionStyle']);
    }
}
IonSegment.decorators = [
    { type: Component, args: [{ selector: 'ion-segment', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'disabled', 'mode', 'scrollable', 'value'] },] },
];
/** @nocollapse */
IonSegment.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonSegment, ['color', 'disabled', 'mode', 'scrollable', 'value']);
class IonSegmentButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionSelect']);
    }
}
IonSegmentButton.decorators = [
    { type: Component, args: [{ selector: 'ion-segment-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'disabled', 'layout', 'mode', 'type', 'value'] },] },
];
/** @nocollapse */
IonSegmentButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonSegmentButton, ['checked', 'disabled', 'layout', 'mode', 'type', 'value']);
class IonSelect {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionCancel', 'ionFocus', 'ionBlur']);
    }
}
IonSelect.decorators = [
    { type: Component, args: [{ selector: 'ion-select', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['cancelText', 'compareWith', 'disabled', 'interface', 'interfaceOptions', 'mode', 'multiple', 'name', 'okText', 'placeholder', 'selectedText', 'value'] },] },
];
/** @nocollapse */
IonSelect.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyMethods(IonSelect, ['open']);
proxyInputs(IonSelect, ['cancelText', 'compareWith', 'disabled', 'interface', 'interfaceOptions', 'mode', 'multiple', 'name', 'okText', 'placeholder', 'selectedText', 'value']);
class IonSelectOption {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonSelectOption.decorators = [
    { type: Component, args: [{ selector: 'ion-select-option', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'selected', 'value'] },] },
];
/** @nocollapse */
IonSelectOption.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonSelectOption, ['disabled', 'selected', 'value']);
class IonSkeletonText {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonSkeletonText.decorators = [
    { type: Component, args: [{ selector: 'ion-skeleton-text', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['animated', 'width'] },] },
];
/** @nocollapse */
IonSkeletonText.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonSkeletonText, ['animated', 'width']);
class IonSlide {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonSlide.decorators = [
    { type: Component, args: [{ selector: 'ion-slide', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonSlide.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
class IonSlides {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionSlidesDidLoad', 'ionSlideTap', 'ionSlideDoubleTap', 'ionSlideWillChange', 'ionSlideDidChange', 'ionSlideNextStart', 'ionSlidePrevStart', 'ionSlideNextEnd', 'ionSlidePrevEnd', 'ionSlideTransitionStart', 'ionSlideTransitionEnd', 'ionSlideDrag', 'ionSlideReachStart', 'ionSlideReachEnd', 'ionSlideTouchStart', 'ionSlideTouchEnd']);
    }
}
IonSlides.decorators = [
    { type: Component, args: [{ selector: 'ion-slides', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['mode', 'options', 'pager', 'scrollbar'] },] },
];
/** @nocollapse */
IonSlides.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyMethods(IonSlides, ['update', 'updateAutoHeight', 'slideTo', 'slideNext', 'slidePrev', 'getActiveIndex', 'getPreviousIndex', 'length', 'isEnd', 'isBeginning', 'startAutoplay', 'stopAutoplay', 'lockSwipeToNext', 'lockSwipeToPrev', 'lockSwipes']);
proxyInputs(IonSlides, ['mode', 'options', 'pager', 'scrollbar']);
class IonSpinner {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonSpinner.decorators = [
    { type: Component, args: [{ selector: 'ion-spinner', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'duration', 'name', 'paused'] },] },
];
/** @nocollapse */
IonSpinner.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonSpinner, ['color', 'duration', 'name', 'paused']);
class IonSplitPane {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionSplitPaneVisible']);
    }
}
IonSplitPane.decorators = [
    { type: Component, args: [{ selector: 'ion-split-pane', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['contentId', 'disabled', 'when'] },] },
];
/** @nocollapse */
IonSplitPane.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonSplitPane, ['contentId', 'disabled', 'when']);
class IonTabBar {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonTabBar.decorators = [
    { type: Component, args: [{ selector: 'ion-tab-bar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'selectedTab', 'translucent'] },] },
];
/** @nocollapse */
IonTabBar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonTabBar, ['color', 'mode', 'selectedTab', 'translucent']);
class IonTabButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonTabButton.decorators = [
    { type: Component, args: [{ selector: 'ion-tab-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'download', 'href', 'layout', 'mode', 'rel', 'selected', 'tab', 'target'] },] },
];
/** @nocollapse */
IonTabButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonTabButton, ['disabled', 'download', 'href', 'layout', 'mode', 'rel', 'selected', 'tab', 'target']);
class IonText {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonText.decorators = [
    { type: Component, args: [{ selector: 'ion-text', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
];
/** @nocollapse */
IonText.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonText, ['color', 'mode']);
class IonTextarea {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionInput', 'ionBlur', 'ionFocus']);
    }
}
IonTextarea.decorators = [
    { type: Component, args: [{ selector: 'ion-textarea', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['autoGrow', 'autocapitalize', 'autofocus', 'clearOnEdit', 'color', 'cols', 'debounce', 'disabled', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'readonly', 'required', 'rows', 'spellcheck', 'value', 'wrap'] },] },
];
/** @nocollapse */
IonTextarea.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyMethods(IonTextarea, ['setFocus', 'getInputElement']);
proxyInputs(IonTextarea, ['autoGrow', 'autocapitalize', 'autofocus', 'clearOnEdit', 'color', 'cols', 'debounce', 'disabled', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'readonly', 'required', 'rows', 'spellcheck', 'value', 'wrap']);
class IonThumbnail {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonThumbnail.decorators = [
    { type: Component, args: [{ selector: 'ion-thumbnail', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonThumbnail.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
class IonTitle {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonTitle.decorators = [
    { type: Component, args: [{ selector: 'ion-title', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color'] },] },
];
/** @nocollapse */
IonTitle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonTitle, ['color']);
class IonToggle {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
    }
}
IonToggle.decorators = [
    { type: Component, args: [{ selector: 'ion-toggle', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'color', 'disabled', 'mode', 'name', 'value'] },] },
];
/** @nocollapse */
IonToggle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonToggle, ['checked', 'color', 'disabled', 'mode', 'name', 'value']);
class IonToolbar {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
IonToolbar.decorators = [
    { type: Component, args: [{ selector: 'ion-toolbar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
];
/** @nocollapse */
IonToolbar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
proxyInputs(IonToolbar, ['color', 'mode']);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Config {
    /**
     * @param {?} key
     * @param {?=} fallback
     * @return {?}
     */
    get(key, fallback) {
        /** @type {?} */
        const c = getConfig();
        if (c) {
            return c.get(key, fallback);
        }
        return null;
    }
    /**
     * @param {?} key
     * @param {?=} fallback
     * @return {?}
     */
    getBoolean(key, fallback) {
        /** @type {?} */
        const c = getConfig();
        if (c) {
            return c.getBoolean(key, fallback);
        }
        return false;
    }
    /**
     * @param {?} key
     * @param {?=} fallback
     * @return {?}
     */
    getNumber(key, fallback) {
        /** @type {?} */
        const c = getConfig();
        if (c) {
            return c.getNumber(key, fallback);
        }
        return 0;
    }
    /**
     * @param {?} key
     * @param {?=} value
     * @return {?}
     */
    set(key, value) {
        /** @type {?} */
        const c = getConfig();
        if (c) {
            c.set(key, value);
        }
    }
}
Config.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ Config.ngInjectableDef = defineInjectable({ factory: function Config_Factory() { return new Config(); }, token: Config, providedIn: "root" });
/** @type {?} */
const ConfigToken = new InjectionToken('USERCONFIG');
/**
 * @return {?}
 */
function getConfig() {
    if (typeof ((/** @type {?} */ (window))) !== 'undefined') {
        /** @type {?} */
        const Ionic = ((/** @type {?} */ (window))).Ionic;
        if (Ionic && Ionic.config) {
            return Ionic.config;
        }
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description
 * NavParams are an object that exists on a page and can contain data for that particular view.
 * Similar to how data was pass to a view in V1 with `$stateParams`, NavParams offer a much more flexible
 * option with a simple `get` method.
 *
 * \@usage
 * ```ts
 * import { NavParams } from '\@ionic/angular';
 *
 * export class MyClass{
 *
 *  constructor(navParams: NavParams){
 *    // userParams is an object we have in our nav-parameters
 *    navParams.get('userParams');
 *  }
 *
 * }
 * ```
 */
class NavParams {
    /**
     * @param {?=} data
     */
    constructor(data = {}) {
        this.data = data;
    }
    /**
     * Get the value of a nav-parameter for the current view
     *
     * ```ts
     * import { NavParams } from 'ionic-angular';
     *
     * export class MyClass{
     *  constructor(public navParams: NavParams){
     *    // userParams is an object we have in our nav-parameters
     *    this.navParams.get('userParams');
     *  }
     * }
     * ```
     *
     * @param {?} param Which param you want to look up
     * @return {?}
     */
    get(param) {
        return this.data[param];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularDelegate {
    /**
     * @param {?} zone
     * @param {?} appRef
     */
    constructor(zone, appRef) {
        this.zone = zone;
        this.appRef = appRef;
    }
    /**
     * @param {?} resolver
     * @param {?} injector
     * @param {?=} location
     * @return {?}
     */
    create(resolver, injector, location) {
        return new AngularFrameworkDelegate(resolver, injector, location, this.appRef, this.zone);
    }
}
AngularDelegate.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AngularDelegate.ctorParameters = () => [
    { type: NgZone },
    { type: ApplicationRef }
];
class AngularFrameworkDelegate {
    /**
     * @param {?} resolver
     * @param {?} injector
     * @param {?} location
     * @param {?} appRef
     * @param {?} zone
     */
    constructor(resolver, injector, location, appRef, zone) {
        this.resolver = resolver;
        this.injector = injector;
        this.location = location;
        this.appRef = appRef;
        this.zone = zone;
        this.elRefMap = new WeakMap();
        this.elEventsMap = new WeakMap();
    }
    /**
     * @param {?} container
     * @param {?} component
     * @param {?=} params
     * @param {?=} cssClasses
     * @return {?}
     */
    attachViewToDom(container, component, params, cssClasses) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this.zone.run((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const el = attachView(this.resolver, this.injector, this.location, this.appRef, this.elRefMap, this.elEventsMap, container, component, params, cssClasses);
                resolve(el);
            }));
        }));
    }
    /**
     * @param {?} _container
     * @param {?} component
     * @return {?}
     */
    removeViewFromDom(_container, component) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this.zone.run((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const componentRef = this.elRefMap.get(component);
                if (componentRef) {
                    componentRef.destroy();
                    this.elRefMap.delete(component);
                    /** @type {?} */
                    const unbindEvents = this.elEventsMap.get(component);
                    if (unbindEvents) {
                        unbindEvents();
                        this.elEventsMap.delete(component);
                    }
                }
                resolve();
            }));
        }));
    }
}
/**
 * @param {?} resolver
 * @param {?} injector
 * @param {?} location
 * @param {?} appRef
 * @param {?} elRefMap
 * @param {?} elEventsMap
 * @param {?} container
 * @param {?} component
 * @param {?} params
 * @param {?} cssClasses
 * @return {?}
 */
function attachView(resolver, injector, location, appRef, elRefMap, elEventsMap, container, component, params, cssClasses) {
    /** @type {?} */
    const factory = resolver.resolveComponentFactory(component);
    /** @type {?} */
    const childInjector = Injector.create({
        providers: getProviders(params),
        parent: injector
    });
    /** @type {?} */
    const componentRef = (location)
        ? location.createComponent(factory, location.length, childInjector)
        : factory.create(childInjector);
    /** @type {?} */
    const instance = componentRef.instance;
    /** @type {?} */
    const hostElement = componentRef.location.nativeElement;
    if (params) {
        Object.assign(instance, params);
    }
    if (cssClasses) {
        for (const clazz of cssClasses) {
            hostElement.classList.add(clazz);
        }
    }
    /** @type {?} */
    const unbindEvents = bindLifecycleEvents(instance, hostElement);
    container.appendChild(hostElement);
    if (!location) {
        appRef.attachView(componentRef.hostView);
    }
    componentRef.changeDetectorRef.reattach();
    elRefMap.set(hostElement, componentRef);
    elEventsMap.set(hostElement, unbindEvents);
    return hostElement;
}
/** @type {?} */
const LIFECYCLES = [
    LIFECYCLE_WILL_ENTER,
    LIFECYCLE_DID_ENTER,
    LIFECYCLE_WILL_LEAVE,
    LIFECYCLE_DID_LEAVE,
    LIFECYCLE_WILL_UNLOAD
];
/**
 * @param {?} instance
 * @param {?} element
 * @return {?}
 */
function bindLifecycleEvents(instance, element) {
    /** @type {?} */
    const unregisters = LIFECYCLES
        .filter((/**
     * @param {?} eventName
     * @return {?}
     */
    eventName => typeof instance[eventName] === 'function'))
        .map((/**
     * @param {?} eventName
     * @return {?}
     */
    eventName => {
        /** @type {?} */
        const handler = (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => instance[eventName](ev.detail));
        element.addEventListener(eventName, handler);
        return (/**
         * @return {?}
         */
        () => element.removeEventListener(eventName, handler));
    }));
    return (/**
     * @return {?}
     */
    () => unregisters.forEach((/**
     * @param {?} fn
     * @return {?}
     */
    fn => fn())));
}
/** @type {?} */
const NavParamsToken = new InjectionToken('NavParamsToken');
/**
 * @param {?} params
 * @return {?}
 */
function getProviders(params) {
    return [
        {
            provide: NavParamsToken, useValue: params
        },
        {
            provide: NavParams, useFactory: provideNavParamsInjectable, deps: [NavParamsToken]
        }
    ];
}
/**
 * @param {?} params
 * @return {?}
 */
function provideNavParamsInjectable(params) {
    return new NavParams(params);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} views
 * @param {?} view
 * @param {?} direction
 * @return {?}
 */
function insertView(views, view, direction) {
    if (direction === 'root') {
        return setRoot(views, view);
    }
    else if (direction === 'forward') {
        return setForward(views, view);
    }
    else {
        return setBack(views, view);
    }
}
/**
 * @param {?} views
 * @param {?} view
 * @return {?}
 */
function setRoot(views, view) {
    views = views.filter((/**
     * @param {?} v
     * @return {?}
     */
    v => v.stackId !== view.stackId));
    views.push(view);
    return views;
}
/**
 * @param {?} views
 * @param {?} view
 * @return {?}
 */
function setForward(views, view) {
    /** @type {?} */
    const index = views.indexOf(view);
    if (index >= 0) {
        views = views.filter((/**
         * @param {?} v
         * @return {?}
         */
        v => v.stackId !== view.stackId || v.id <= view.id));
    }
    else {
        views.push(view);
    }
    return views;
}
/**
 * @param {?} views
 * @param {?} view
 * @return {?}
 */
function setBack(views, view) {
    /** @type {?} */
    const index = views.indexOf(view);
    if (index >= 0) {
        return views.filter((/**
         * @param {?} v
         * @return {?}
         */
        v => v.stackId !== view.stackId || v.id <= view.id));
    }
    else {
        return setRoot(views, view);
    }
}
/**
 * @param {?} router
 * @param {?} activatedRoute
 * @return {?}
 */
function getUrl(router, activatedRoute) {
    /** @type {?} */
    const urlTree = router.createUrlTree(['.'], { relativeTo: activatedRoute });
    return router.serializeUrl(urlTree);
}
/**
 * @param {?} enteringView
 * @param {?} leavingView
 * @return {?}
 */
function isTabSwitch(enteringView, leavingView) {
    if (!leavingView) {
        return true;
    }
    return enteringView.stackId !== leavingView.stackId;
}
/**
 * @param {?} prefixUrl
 * @param {?} url
 * @return {?}
 */
function computeStackId(prefixUrl, url) {
    if (!prefixUrl) {
        return undefined;
    }
    /** @type {?} */
    const segments = toSegments(url);
    for (let i = 0; i < segments.length; i++) {
        if (i >= prefixUrl.length) {
            return segments[i];
        }
        if (segments[i] !== prefixUrl[i]) {
            return undefined;
        }
    }
    return undefined;
}
/**
 * @param {?} path
 * @return {?}
 */
function toSegments(path) {
    return path
        .split('/')
        .map((/**
     * @param {?} s
     * @return {?}
     */
    s => s.trim()))
        .filter((/**
     * @param {?} s
     * @return {?}
     */
    s => s !== ''));
}
/**
 * @param {?} view
 * @return {?}
 */
function destroyView(view) {
    if (view) {
        // TODO lifecycle event
        view.ref.destroy();
        view.unlistenEvents();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StackController {
    /**
     * @param {?} tabsPrefix
     * @param {?} containerEl
     * @param {?} router
     * @param {?} navCtrl
     * @param {?} zone
     * @param {?} location
     */
    constructor(tabsPrefix, containerEl, router, navCtrl, zone, location) {
        this.containerEl = containerEl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.location = location;
        this.views = [];
        this.skipTransition = false;
        this.nextId = 0;
        this.tabsPrefix = tabsPrefix !== undefined ? toSegments(tabsPrefix) : undefined;
    }
    /**
     * @param {?} ref
     * @param {?} activatedRoute
     * @return {?}
     */
    createView(ref, activatedRoute) {
        /** @type {?} */
        const url = getUrl(this.router, activatedRoute);
        /** @type {?} */
        const element = (/** @type {?} */ ((ref && ref.location && ref.location.nativeElement)));
        /** @type {?} */
        const unlistenEvents = bindLifecycleEvents(ref.instance, element);
        return {
            id: this.nextId++,
            stackId: computeStackId(this.tabsPrefix, url),
            unlistenEvents,
            element,
            ref,
            url,
        };
    }
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    getExistingView(activatedRoute) {
        /** @type {?} */
        const activatedUrlKey = getUrl(this.router, activatedRoute);
        return this.views.find((/**
         * @param {?} vw
         * @return {?}
         */
        vw => vw.url === activatedUrlKey));
    }
    /**
     * @param {?} enteringView
     * @return {?}
     */
    setActive(enteringView) {
        let { direction, animation } = this.navCtrl.consumeTransition();
        /** @type {?} */
        const leavingView = this.activeView;
        /** @type {?} */
        const tabSwitch = isTabSwitch(enteringView, leavingView);
        if (tabSwitch) {
            direction = 'back';
            animation = undefined;
        }
        /** @type {?} */
        const viewsSnapshot = this.views.slice();
        /** @type {?} */
        let currentNavigation;
        /** @type {?} */
        const router = ((/** @type {?} */ (this.router)));
        // Angular >= 7.2.0
        if (router.getCurrentNavigation) {
            currentNavigation = router.getCurrentNavigation();
            // Angular < 7.2.0
        }
        else if (router.navigations &&
            router.navigations.value) {
            currentNavigation = router.navigations.value;
        }
        /**
         * If the navigation action
         * sets `replaceUrl: true`
         * then we need to make sure
         * we remove the last item
         * from our views stack
         */
        if (currentNavigation &&
            currentNavigation.extras &&
            currentNavigation.extras.replaceUrl) {
            if (this.views.length > 0) {
                this.views.splice(-1, 1);
            }
        }
        /** @type {?} */
        const views = this.insertView(enteringView, direction);
        return this.wait((/**
         * @return {?}
         */
        () => {
            return this.transition(enteringView, leavingView, animation, this.canGoBack(1), false)
                .then((/**
             * @return {?}
             */
            () => cleanupAsync(enteringView, views, viewsSnapshot, this.location)))
                .then((/**
             * @return {?}
             */
            () => ({
                enteringView,
                direction,
                animation,
                tabSwitch
            })));
        }));
    }
    /**
     * @param {?} deep
     * @param {?=} stackId
     * @return {?}
     */
    canGoBack(deep, stackId = this.getActiveStackId()) {
        return this.getStack(stackId).length > deep;
    }
    /**
     * @param {?} deep
     * @param {?=} stackId
     * @return {?}
     */
    pop(deep, stackId = this.getActiveStackId()) {
        return this.zone.run((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const views = this.getStack(stackId);
            if (views.length <= deep) {
                return Promise.resolve(false);
            }
            /** @type {?} */
            const view = views[views.length - deep - 1];
            /** @type {?} */
            let url = view.url;
            /** @type {?} */
            const viewSavedData = view.savedData;
            if (viewSavedData) {
                /** @type {?} */
                const primaryOutlet = viewSavedData.get('primary');
                if (primaryOutlet &&
                    primaryOutlet.route &&
                    primaryOutlet.route._routerState &&
                    primaryOutlet.route._routerState.snapshot &&
                    primaryOutlet.route._routerState.snapshot.url) {
                    url = primaryOutlet.route._routerState.snapshot.url;
                }
            }
            return this.navCtrl.navigateBack(url, view.savedExtras).then((/**
             * @return {?}
             */
            () => true));
        }));
    }
    /**
     * @return {?}
     */
    startBackTransition() {
        /** @type {?} */
        const leavingView = this.activeView;
        if (leavingView) {
            /** @type {?} */
            const views = this.getStack(leavingView.stackId);
            /** @type {?} */
            const enteringView = views[views.length - 2];
            return this.wait((/**
             * @return {?}
             */
            () => {
                return this.transition(enteringView, // entering view
                leavingView, // leaving view
                'back', true, true);
            }));
        }
        return Promise.resolve();
    }
    /**
     * @param {?} shouldComplete
     * @return {?}
     */
    endBackTransition(shouldComplete) {
        if (shouldComplete) {
            this.skipTransition = true;
            this.pop(1);
        }
    }
    /**
     * @param {?=} stackId
     * @return {?}
     */
    getLastUrl(stackId) {
        /** @type {?} */
        const views = this.getStack(stackId);
        return views.length > 0 ? views[views.length - 1] : undefined;
    }
    /**
     * @return {?}
     */
    getActiveStackId() {
        return this.activeView ? this.activeView.stackId : undefined;
    }
    /**
     * @return {?}
     */
    destroy() {
        this.containerEl = (/** @type {?} */ (undefined));
        this.views.forEach(destroyView);
        this.activeView = undefined;
        this.views = [];
    }
    /**
     * @private
     * @param {?} stackId
     * @return {?}
     */
    getStack(stackId) {
        return this.views.filter((/**
         * @param {?} v
         * @return {?}
         */
        v => v.stackId === stackId));
    }
    /**
     * @private
     * @param {?} enteringView
     * @param {?} direction
     * @return {?}
     */
    insertView(enteringView, direction) {
        this.activeView = enteringView;
        this.views = insertView(this.views, enteringView, direction);
        return this.views.slice();
    }
    /**
     * @private
     * @param {?} enteringView
     * @param {?} leavingView
     * @param {?} direction
     * @param {?} showGoBack
     * @param {?} progressAnimation
     * @return {?}
     */
    transition(enteringView, leavingView, direction, showGoBack, progressAnimation) {
        if (this.skipTransition) {
            this.skipTransition = false;
            return Promise.resolve(false);
        }
        if (enteringView) {
            enteringView.ref.changeDetectorRef.reattach();
        }
        // TODO: disconnect leaving page from change detection to
        // reduce jank during the page transition
        // if (leavingView) {
        //   leavingView.ref.changeDetectorRef.detach();
        // }
        /** @type {?} */
        const enteringEl = enteringView ? enteringView.element : undefined;
        /** @type {?} */
        const leavingEl = leavingView ? leavingView.element : undefined;
        /** @type {?} */
        const containerEl = this.containerEl;
        if (enteringEl && enteringEl !== leavingEl) {
            enteringEl.classList.add('ion-page', 'ion-page-invisible');
            if (enteringEl.parentElement !== containerEl) {
                containerEl.appendChild(enteringEl);
            }
            return this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => containerEl.commit(enteringEl, leavingEl, {
                deepWait: true,
                duration: direction === undefined ? 0 : undefined,
                direction,
                showGoBack,
                progressAnimation
            })));
        }
        return Promise.resolve(false);
    }
    /**
     * @private
     * @template T
     * @param {?} task
     * @return {?}
     */
    wait(task) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.runningTask !== undefined) {
                yield this.runningTask;
                this.runningTask = undefined;
            }
            /** @type {?} */
            const promise = this.runningTask = task();
            return promise;
        });
    }
}
/**
 * @param {?} activeRoute
 * @param {?} views
 * @param {?} viewsSnapshot
 * @param {?} location
 * @return {?}
 */
function cleanupAsync(activeRoute, views, viewsSnapshot, location) {
    return new Promise((/**
     * @param {?} resolve
     * @return {?}
     */
    resolve => {
        requestAnimationFrame((/**
         * @return {?}
         */
        () => {
            cleanup(activeRoute, views, viewsSnapshot, location);
            resolve();
        }));
    }));
}
/**
 * @param {?} activeRoute
 * @param {?} views
 * @param {?} viewsSnapshot
 * @param {?} location
 * @return {?}
 */
function cleanup(activeRoute, views, viewsSnapshot, location) {
    viewsSnapshot
        .filter((/**
     * @param {?} view
     * @return {?}
     */
    view => !views.includes(view)))
        .forEach(destroyView);
    views.forEach((/**
     * @param {?} view
     * @return {?}
     */
    view => {
        /**
         * In the event that a user navigated multiple
         * times in rapid succession, we want to make sure
         * we don't pre-emptively detach a view while
         * it is in mid-transition.
         *
         * In this instance we also do not care about query
         * params or fragments as it will be the same view regardless
         * @type {?}
         */
        const locationWithoutParams = location.path().split('?')[0];
        /** @type {?} */
        const locationWithoutFragment = locationWithoutParams.split('#')[0];
        if (view !== activeRoute && view.url !== locationWithoutFragment) {
            /** @type {?} */
            const element = view.element;
            element.setAttribute('aria-hidden', 'true');
            element.classList.add('ion-page-hidden');
            view.ref.changeDetectorRef.detach();
        }
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonRouterOutlet {
    /**
     * @param {?} parentContexts
     * @param {?} location
     * @param {?} resolver
     * @param {?} name
     * @param {?} tabs
     * @param {?} config
     * @param {?} navCtrl
     * @param {?} commonLocation
     * @param {?} elementRef
     * @param {?} router
     * @param {?} zone
     * @param {?} activatedRoute
     * @param {?=} parentOutlet
     */
    constructor(parentContexts, location, resolver, name, tabs, config, navCtrl, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
        this.parentContexts = parentContexts;
        this.location = location;
        this.resolver = resolver;
        this.config = config;
        this.navCtrl = navCtrl;
        this.parentOutlet = parentOutlet;
        this.activated = null;
        this.activatedView = null;
        this._activatedRoute = null;
        // Maintain map of activated route proxies for each component instance
        this.proxyMap = new WeakMap();
        // Keep the latest activated route in a subject for the proxy routes to switch map to
        this.currentActivatedRoute$ = new BehaviorSubject(null);
        this.stackEvents = new EventEmitter();
        this.activateEvents = new EventEmitter();
        this.deactivateEvents = new EventEmitter();
        this.nativeEl = elementRef.nativeElement;
        this.name = name || PRIMARY_OUTLET;
        this.tabsPrefix = tabs === 'true' ? getUrl(router, activatedRoute) : undefined;
        this.stackCtrl = new StackController(this.tabsPrefix, this.nativeEl, router, navCtrl, zone, commonLocation);
        parentContexts.onChildOutletCreated(this.name, (/** @type {?} */ (this)));
    }
    /**
     * @param {?} animated
     * @return {?}
     */
    set animated(animated) {
        this.nativeEl.animated = animated;
    }
    /**
     * @param {?} swipe
     * @return {?}
     */
    set swipeGesture(swipe) {
        this._swipeGesture = swipe;
        this.nativeEl.swipeHandler = swipe ? {
            canStart: (/**
             * @return {?}
             */
            () => this.stackCtrl.canGoBack(1)),
            onStart: (/**
             * @return {?}
             */
            () => this.stackCtrl.startBackTransition()),
            onEnd: (/**
             * @param {?} shouldContinue
             * @return {?}
             */
            shouldContinue => this.stackCtrl.endBackTransition(shouldContinue))
        } : undefined;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stackCtrl.destroy();
    }
    /**
     * @return {?}
     */
    getContext() {
        return this.parentContexts.getContext(this.name);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.activated) {
            // If the outlet was not instantiated at the time the route got activated we need to populate
            // the outlet when it is initialized (ie inside a NgIf)
            /** @type {?} */
            const context = this.getContext();
            if (context && context.route) {
                this.activateWith(context.route, context.resolver || null);
            }
        }
        if (((/** @type {?} */ (this.nativeEl))).componentOnReady) {
            this.nativeEl.componentOnReady().then((/**
             * @return {?}
             */
            () => {
                if (this._swipeGesture === undefined) {
                    this.swipeGesture = this.config.getBoolean('swipeBackEnabled', ((/** @type {?} */ (this.nativeEl))).mode === 'ios');
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    get isActivated() {
        return !!this.activated;
    }
    /**
     * @return {?}
     */
    get component() {
        if (!this.activated) {
            throw new Error('Outlet is not activated');
        }
        return this.activated.instance;
    }
    /**
     * @return {?}
     */
    get activatedRoute() {
        if (!this.activated) {
            throw new Error('Outlet is not activated');
        }
        return (/** @type {?} */ (this._activatedRoute));
    }
    /**
     * @return {?}
     */
    get activatedRouteData() {
        if (this._activatedRoute) {
            return this._activatedRoute.snapshot.data;
        }
        return {};
    }
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     * @return {?}
     */
    detach() {
        throw new Error('incompatible reuse strategy');
    }
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     * @param {?} _ref
     * @param {?} _activatedRoute
     * @return {?}
     */
    attach(_ref, _activatedRoute) {
        throw new Error('incompatible reuse strategy');
    }
    /**
     * @return {?}
     */
    deactivate() {
        if (this.activated) {
            if (this.activatedView) {
                this.activatedView.savedData = new Map((/** @type {?} */ (this.getContext())).children['contexts']);
                /**
                 * Ensure we are saving the NavigationExtras
                 * data otherwise it will be lost
                 */
                this.activatedView.savedExtras = {};
                /** @type {?} */
                const context = (/** @type {?} */ (this.getContext()));
                if (context.route) {
                    /** @type {?} */
                    const contextSnapshot = context.route.snapshot;
                    this.activatedView.savedExtras.queryParams = contextSnapshot.queryParams;
                    this.activatedView.savedExtras.fragment = contextSnapshot.fragment;
                }
            }
            /** @type {?} */
            const c = this.component;
            this.activatedView = null;
            this.activated = null;
            this._activatedRoute = null;
            this.deactivateEvents.emit(c);
        }
    }
    /**
     * @param {?} activatedRoute
     * @param {?} resolver
     * @return {?}
     */
    activateWith(activatedRoute, resolver) {
        if (this.isActivated) {
            throw new Error('Cannot activate an already activated outlet');
        }
        this._activatedRoute = activatedRoute;
        /** @type {?} */
        let cmpRef;
        /** @type {?} */
        let enteringView = this.stackCtrl.getExistingView(activatedRoute);
        if (enteringView) {
            cmpRef = this.activated = enteringView.ref;
            /** @type {?} */
            const saved = enteringView.savedData;
            if (saved) {
                // self-restore
                /** @type {?} */
                const context = (/** @type {?} */ (this.getContext()));
                context.children['contexts'] = saved;
            }
            // Updated activated route proxy for this component
            this.updateActivatedRouteProxy(cmpRef.instance, activatedRoute);
        }
        else {
            /** @type {?} */
            const snapshot = ((/** @type {?} */ (activatedRoute)))._futureSnapshot;
            /** @type {?} */
            const component = (/** @type {?} */ ((/** @type {?} */ (snapshot.routeConfig)).component));
            resolver = resolver || this.resolver;
            /** @type {?} */
            const factory = resolver.resolveComponentFactory(component);
            /** @type {?} */
            const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
            // We create an activated route proxy object that will maintain future updates for this component
            // over its lifecycle in the stack.
            /** @type {?} */
            const component$ = new BehaviorSubject(null);
            /** @type {?} */
            const activatedRouteProxy = this.createActivatedRouteProxy(component$, activatedRoute);
            /** @type {?} */
            const injector = new OutletInjector(activatedRouteProxy, childContexts, this.location.injector);
            cmpRef = this.activated = this.location.createComponent(factory, this.location.length, injector);
            // Once the component is created we can push it to our local subject supplied to the proxy
            component$.next(cmpRef.instance);
            // Calling `markForCheck` to make sure we will run the change detection when the
            // `RouterOutlet` is inside a `ChangeDetectionStrategy.OnPush` component.
            enteringView = this.stackCtrl.createView(this.activated, activatedRoute);
            enteringView.ref.changeDetectorRef.detectChanges();
            // Store references to the proxy by component
            this.proxyMap.set(cmpRef.instance, activatedRouteProxy);
            this.currentActivatedRoute$.next({ component: cmpRef.instance, activatedRoute });
        }
        this.activatedView = enteringView;
        this.stackCtrl.setActive(enteringView).then((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.navCtrl.setTopOutlet(this);
            this.activateEvents.emit(cmpRef.instance);
            this.stackEvents.emit(data);
        }));
    }
    /**
     * Returns `true` if there are pages in the stack to go back.
     * @param {?=} deep
     * @param {?=} stackId
     * @return {?}
     */
    canGoBack(deep = 1, stackId) {
        return this.stackCtrl.canGoBack(deep, stackId);
    }
    /**
     * Resolves to `true` if it the outlet was able to sucessfully pop the last N pages.
     * @param {?=} deep
     * @param {?=} stackId
     * @return {?}
     */
    pop(deep = 1, stackId) {
        return this.stackCtrl.pop(deep, stackId);
    }
    /**
     * Returns the URL of the active page of each stack.
     * @param {?=} stackId
     * @return {?}
     */
    getLastUrl(stackId) {
        /** @type {?} */
        const active = this.stackCtrl.getLastUrl(stackId);
        return active ? active.url : undefined;
    }
    /**
     * Returns the active stack ID. In the context of ion-tabs, it means the active tab.
     * @return {?}
     */
    getActiveStackId() {
        return this.stackCtrl.getActiveStackId();
    }
    /**
     * Since the activated route can change over the life time of a component in an ion router outlet, we create
     * a proxy so that we can update the values over time as a user navigates back to components already in the stack.
     * @private
     * @param {?} component$
     * @param {?} activatedRoute
     * @return {?}
     */
    createActivatedRouteProxy(component$, activatedRoute) {
        /** @type {?} */
        const proxy = new ActivatedRoute();
        proxy._futureSnapshot = ((/** @type {?} */ (activatedRoute)))._futureSnapshot;
        proxy._routerState = ((/** @type {?} */ (activatedRoute)))._routerState;
        proxy.snapshot = activatedRoute.snapshot;
        proxy.outlet = activatedRoute.outlet;
        proxy.component = activatedRoute.component;
        // Setup wrappers for the observables so consumers don't have to worry about switching to new observables as the state updates
        ((/** @type {?} */ (proxy)))._paramMap = this.proxyObservable(component$, 'paramMap');
        ((/** @type {?} */ (proxy)))._queryParamMap = this.proxyObservable(component$, 'queryParamMap');
        proxy.url = this.proxyObservable(component$, 'url');
        proxy.params = this.proxyObservable(component$, 'params');
        proxy.queryParams = this.proxyObservable(component$, 'queryParams');
        proxy.fragment = this.proxyObservable(component$, 'fragment');
        proxy.data = this.proxyObservable(component$, 'data');
        return (/** @type {?} */ (proxy));
    }
    /**
     * Create a wrapped observable that will switch to the latest activated route matched by the given component
     * @private
     * @param {?} component$
     * @param {?} path
     * @return {?}
     */
    proxyObservable(component$, path) {
        return component$.pipe(
        // First wait until the component instance is pushed
        filter((/**
         * @param {?} component
         * @return {?}
         */
        component => !!component)), switchMap((/**
         * @param {?} component
         * @return {?}
         */
        component => this.currentActivatedRoute$.pipe(filter((/**
         * @param {?} current
         * @return {?}
         */
        current => current !== null && current.component === component)), switchMap((/**
         * @param {?} current
         * @return {?}
         */
        current => current && ((/** @type {?} */ (current.activatedRoute)))[path])), distinctUntilChanged()))));
    }
    /**
     * Updates the activated route proxy for the given component to the new incoming router state
     * @private
     * @param {?} component
     * @param {?} activatedRoute
     * @return {?}
     */
    updateActivatedRouteProxy(component, activatedRoute) {
        /** @type {?} */
        const proxy = this.proxyMap.get(component);
        if (!proxy) {
            throw new Error(`Could not find activated route proxy for view`);
        }
        ((/** @type {?} */ (proxy)))._futureSnapshot = ((/** @type {?} */ (activatedRoute)))._futureSnapshot;
        ((/** @type {?} */ (proxy)))._routerState = ((/** @type {?} */ (activatedRoute)))._routerState;
        proxy.snapshot = activatedRoute.snapshot;
        proxy.outlet = activatedRoute.outlet;
        proxy.component = activatedRoute.component;
        this.currentActivatedRoute$.next({ component, activatedRoute });
    }
}
IonRouterOutlet.decorators = [
    { type: Directive, args: [{
                selector: 'ion-router-outlet',
                exportAs: 'outlet',
                inputs: ['animated', 'swipeGesture']
            },] },
];
/** @nocollapse */
IonRouterOutlet.ctorParameters = () => [
    { type: ChildrenOutletContexts },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: String, decorators: [{ type: Attribute, args: ['name',] }] },
    { type: String, decorators: [{ type: Optional }, { type: Attribute, args: ['tabs',] }] },
    { type: Config },
    { type: NavController },
    { type: Location },
    { type: ElementRef },
    { type: Router },
    { type: NgZone },
    { type: ActivatedRoute },
    { type: IonRouterOutlet, decorators: [{ type: SkipSelf }, { type: Optional }] }
];
IonRouterOutlet.propDecorators = {
    stackEvents: [{ type: Output }],
    activateEvents: [{ type: Output, args: ['activate',] }],
    deactivateEvents: [{ type: Output, args: ['deactivate',] }]
};
class OutletInjector {
    /**
     * @param {?} route
     * @param {?} childContexts
     * @param {?} parent
     */
    constructor(route, childContexts, parent) {
        this.route = route;
        this.childContexts = childContexts;
        this.parent = parent;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    get(token, notFoundValue) {
        if (token === ActivatedRoute) {
            return this.route;
        }
        if (token === ChildrenOutletContexts) {
            return this.childContexts;
        }
        // tslint:disable-next-line
        return this.parent.get(token, notFoundValue);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonTabs {
    /**
     * @param {?} navCtrl
     */
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.ionTabsWillChange = new EventEmitter();
        this.ionTabsDidChange = new EventEmitter();
    }
    /**
     * \@internal
     * @param {?} detail
     * @return {?}
     */
    onPageSelected(detail) {
        /** @type {?} */
        const stackId = detail.enteringView.stackId;
        if (detail.tabSwitch && stackId !== undefined) {
            if (this.tabBar) {
                this.tabBar.selectedTab = stackId;
            }
            this.ionTabsWillChange.emit({ tab: stackId });
            this.ionTabsDidChange.emit({ tab: stackId });
        }
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    select(tab) {
        /** @type {?} */
        const alreadySelected = this.outlet.getActiveStackId() === tab;
        /** @type {?} */
        const href = `${this.outlet.tabsPrefix}/${tab}`;
        /** @type {?} */
        const url = alreadySelected
            ? href
            : this.outlet.getLastUrl(tab) || href;
        return this.navCtrl.navigateRoot(url, {
            animated: true,
            animationDirection: 'back'
        });
    }
    /**
     * @return {?}
     */
    getSelected() {
        return this.outlet.getActiveStackId();
    }
}
IonTabs.decorators = [
    { type: Component, args: [{
                selector: 'ion-tabs',
                template: `
    <ng-content select="[slot=top]"></ng-content>
    <div class="tabs-inner">
      <ion-router-outlet #outlet tabs="true" (stackEvents)="onPageSelected($event)"></ion-router-outlet>
    </div>
    <ng-content></ng-content>`,
                styles: [`
    :host {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      flex-direction: column;

      width: 100%;
      height: 100%;

      contain: layout size style;
      z-index: $z-index-page-container;
    }
    .tabs-inner {
      position: relative;

      flex: 1;

      contain: layout size style;
    }`
                ]
            },] },
];
/** @nocollapse */
IonTabs.ctorParameters = () => [
    { type: NavController }
];
IonTabs.propDecorators = {
    outlet: [{ type: ViewChild, args: ['outlet', { read: IonRouterOutlet },] }],
    tabBar: [{ type: ContentChild, args: [IonTabBar,] }],
    ionTabsWillChange: [{ type: Output }],
    ionTabsDidChange: [{ type: Output }],
    select: [{ type: HostListener, args: ['ionTabButtonClick', ['$event.detail.tab'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonBackButtonDelegate {
    /**
     * @param {?} routerOutlet
     * @param {?} navCtrl
     */
    constructor(routerOutlet, navCtrl) {
        this.routerOutlet = routerOutlet;
        this.navCtrl = navCtrl;
    }
    /**
     * \@internal
     * @param {?} ev
     * @return {?}
     */
    onClick(ev) {
        if (this.routerOutlet && this.routerOutlet.canGoBack()) {
            this.routerOutlet.pop();
            ev.preventDefault();
        }
        else if (this.defaultHref != null) {
            this.navCtrl.navigateBack(this.defaultHref);
            ev.preventDefault();
        }
    }
}
IonBackButtonDelegate.decorators = [
    { type: Directive, args: [{
                selector: 'ion-back-button',
                inputs: ['defaultHref']
            },] },
];
/** @nocollapse */
IonBackButtonDelegate.ctorParameters = () => [
    { type: IonRouterOutlet, decorators: [{ type: Optional }] },
    { type: NavController }
];
IonBackButtonDelegate.propDecorators = {
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavDelegate {
    /**
     * @param {?} ref
     * @param {?} resolver
     * @param {?} injector
     * @param {?} angularDelegate
     * @param {?} location
     */
    constructor(ref, resolver, injector, angularDelegate, location) {
        ref.nativeElement.delegate = angularDelegate.create(resolver, injector, location);
    }
}
NavDelegate.decorators = [
    { type: Directive, args: [{
                selector: 'ion-nav',
            },] },
];
/** @nocollapse */
NavDelegate.ctorParameters = () => [
    { type: ElementRef },
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: AngularDelegate },
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RouterLinkDelegate {
    /**
     * @param {?} locationStrategy
     * @param {?} navCtrl
     * @param {?} elementRef
     * @param {?} router
     * @param {?=} routerLink
     */
    constructor(locationStrategy, navCtrl, elementRef, router, routerLink) {
        this.locationStrategy = locationStrategy;
        this.navCtrl = navCtrl;
        this.elementRef = elementRef;
        this.router = router;
        this.routerLink = routerLink;
        this.routerDirection = 'forward';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateTargetUrlAndHref();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateTargetUrlAndHref();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateTargetUrlAndHref() {
        if (this.routerLink) {
            /** @type {?} */
            const href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
            this.elementRef.nativeElement.href = href;
        }
    }
    /**
     * \@internal
     * @param {?} ev
     * @return {?}
     */
    onClick(ev) {
        this.navCtrl.setDirection(this.routerDirection);
        ev.preventDefault();
    }
}
RouterLinkDelegate.decorators = [
    { type: Directive, args: [{
                selector: '[routerLink]',
                inputs: ['routerDirection']
            },] },
];
/** @nocollapse */
RouterLinkDelegate.ctorParameters = () => [
    { type: LocationStrategy },
    { type: NavController },
    { type: ElementRef },
    { type: Router },
    { type: RouterLink, decorators: [{ type: Optional }] }
];
RouterLinkDelegate.propDecorators = {
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @hidden
 */
class VirtualFooter {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
VirtualFooter.decorators = [
    { type: Directive, args: [{ selector: '[virtualFooter]' },] },
];
/** @nocollapse */
VirtualFooter.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @hidden
 */
class VirtualHeader {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
VirtualHeader.decorators = [
    { type: Directive, args: [{ selector: '[virtualHeader]' },] },
];
/** @nocollapse */
VirtualHeader.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @hidden
 */
class VirtualItem {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     */
    constructor(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
}
VirtualItem.decorators = [
    { type: Directive, args: [{ selector: '[virtualItem]' },] },
];
/** @nocollapse */
VirtualItem.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonVirtualScroll {
    /**
     * @param {?} z
     * @param {?} iterableDiffers
     * @param {?} elementRef
     */
    constructor(z, iterableDiffers, elementRef) {
        this.z = z;
        this.iterableDiffers = iterableDiffers;
        this.refMap = new WeakMap();
        this.el = (/** @type {?} */ (elementRef.nativeElement));
        this.el.nodeRender = this.nodeRender.bind(this);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.trackBy && 'items' in changes) {
            // React on virtualScroll changes only once all inputs have been initialized
            /** @type {?} */
            const value = changes['items'].currentValue;
            if (this.differ === undefined && value != null) {
                try {
                    this.differ = this.iterableDiffers.find(value).create(this.trackBy);
                }
                catch (e) {
                    throw new Error(`Cannot find a differ supporting object '${value}'. VirtualScroll only supports binding to Iterables such as Arrays.`);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        // and if there actually are changes
        /** @type {?} */
        const changes = this.differ !== undefined && this.items ? this.differ.diff(this.items) : null;
        if (changes === null) {
            return;
        }
        // TODO: optimize
        this.checkRange(0);
    }
    /**
     * @private
     * @param {?} el
     * @param {?} cell
     * @param {?} index
     * @return {?}
     */
    nodeRender(el, cell, index) {
        return this.z.run((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let node;
            if (!el) {
                node = this.itmTmp.viewContainer.createEmbeddedView(this.getComponent(cell.type), { $implicit: cell.value, index }, index);
                el = getElement(node);
                this.refMap.set(el, node);
            }
            else {
                node = (/** @type {?} */ (this.refMap.get(el)));
                /** @type {?} */
                const ctx = node.context;
                ctx.$implicit = cell.value;
                ctx.index = cell.index;
            }
            // run sync change detections
            node.detectChanges();
            return el;
        }));
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    getComponent(type) {
        switch (type) {
            case 'item': return this.itmTmp.templateRef;
            case 'header': return this.hdrTmp.templateRef;
            case 'footer': return this.ftrTmp.templateRef;
        }
        throw new Error('template for virtual item was not provided');
    }
}
IonVirtualScroll.decorators = [
    { type: Component, args: [{
                selector: 'ion-virtual-scroll',
                template: '<ng-content></ng-content>',
                changeDetection: ChangeDetectionStrategy.OnPush,
                inputs: [
                    'approxItemHeight',
                    'approxHeaderHeight',
                    'approxFooterHeight',
                    'headerFn',
                    'footerFn',
                    'items',
                    'itemHeight',
                    'trackBy'
                ]
            },] },
];
/** @nocollapse */
IonVirtualScroll.ctorParameters = () => [
    { type: NgZone },
    { type: IterableDiffers },
    { type: ElementRef }
];
IonVirtualScroll.propDecorators = {
    itmTmp: [{ type: ContentChild, args: [VirtualItem,] }],
    hdrTmp: [{ type: ContentChild, args: [VirtualHeader,] }],
    ftrTmp: [{ type: ContentChild, args: [VirtualFooter,] }]
};
/**
 * @param {?} view
 * @return {?}
 */
function getElement(view) {
    /** @type {?} */
    const rootNodes = view.rootNodes;
    for (let i = 0; i < rootNodes.length; i++) {
        if (rootNodes[i].nodeType === 1) {
            return rootNodes[i];
        }
    }
    throw new Error('virtual element was not created');
}
proxyInputs(IonVirtualScroll, [
    'approxItemHeight',
    'approxHeaderHeight',
    'approxFooterHeight',
    'headerFn',
    'footerFn',
    'items',
    'itemHeight'
]);
proxyMethods(IonVirtualScroll, [
    'checkEnd',
    'checkRange',
    'positionForItem'
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template Opts, Overlay
 */
class OverlayBaseController {
    /**
     * @param {?} ctrl
     */
    constructor(ctrl) {
        this.ctrl = ctrl;
    }
    /**
     * Creates a new overlay
     * @param {?=} opts
     * @return {?}
     */
    create(opts) {
        // TODO: next major release opts is not optional
        return this.ctrl.create((/** @type {?} */ ((opts || {}))));
    }
    /**
     * When `id` is not provided, it dismisses the top overlay.
     * @param {?=} data
     * @param {?=} role
     * @param {?=} id
     * @return {?}
     */
    dismiss(data, role, id) {
        return this.ctrl.dismiss(data, role, id);
    }
    /**
     * Returns the top overlay.
     * @return {?}
     */
    getTop() {
        return this.ctrl.getTop();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActionSheetController extends OverlayBaseController {
    constructor() {
        super(actionSheetController);
    }
}
ActionSheetController.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */
ActionSheetController.ctorParameters = () => [];
/** @nocollapse */ ActionSheetController.ngInjectableDef = defineInjectable({ factory: function ActionSheetController_Factory() { return new ActionSheetController(); }, token: ActionSheetController, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertController extends OverlayBaseController {
    constructor() {
        super(alertController);
    }
}
AlertController.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */
AlertController.ctorParameters = () => [];
/** @nocollapse */ AlertController.ngInjectableDef = defineInjectable({ factory: function AlertController_Factory() { return new AlertController(); }, token: AlertController, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Events {
    constructor() {
        this.c = new Map();
    }
    /**
     * Subscribe to an event topic. Events that get posted to that topic will trigger the provided handler.
     *
     * @param {?} topic the topic to subscribe to
     * @param {...?} handlers
     * @return {?}
     */
    subscribe(topic, ...handlers) {
        /** @type {?} */
        let topics = this.c.get(topic);
        if (!topics) {
            this.c.set(topic, topics = []);
        }
        topics.push(...handlers);
    }
    /**
     * Unsubscribe from the given topic. Your handler will no longer receive events published to this topic.
     *
     * @param {?} topic the topic to unsubscribe from
     * @param {?=} handler the event handler
     *
     * @return {?} true if a handler was removed
     */
    unsubscribe(topic, handler) {
        if (!handler) {
            return this.c.delete(topic);
        }
        /** @type {?} */
        const topics = this.c.get(topic);
        if (!topics) {
            return false;
        }
        // We need to find and remove a specific handler
        /** @type {?} */
        const index = topics.indexOf(handler);
        if (index < 0) {
            // Wasn't found, wasn't removed
            return false;
        }
        topics.splice(index, 1);
        if (topics.length === 0) {
            this.c.delete(topic);
        }
        return true;
    }
    /**
     * Publish an event to the given topic.
     *
     * @param {?} topic the topic to publish to
     * @param {...?} args
     * @return {?}
     */
    publish(topic, ...args) {
        /** @type {?} */
        const topics = this.c.get(topic);
        if (!topics) {
            return null;
        }
        return topics.map((/**
         * @param {?} handler
         * @return {?}
         */
        handler => {
            try {
                return handler(...args);
            }
            catch (e) {
                console.error(e);
                return null;
            }
        }));
    }
}
Events.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */ Events.ngInjectableDef = defineInjectable({ factory: function Events_Factory() { return new Events(); }, token: Events, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingController extends OverlayBaseController {
    constructor() {
        super(loadingController);
    }
}
LoadingController.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */
LoadingController.ctorParameters = () => [];
/** @nocollapse */ LoadingController.ngInjectableDef = defineInjectable({ factory: function LoadingController_Factory() { return new LoadingController(); }, token: LoadingController, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} ctrlName
 * @param {?} doc
 * @param {?} methodName
 * @param {...?} args
 * @return {?}
 */
function proxyMethod(ctrlName, doc, methodName, ...args) {
    /** @type {?} */
    const controller = ensureElementInBody(ctrlName, doc);
    return controller.componentOnReady()
        .then((/**
     * @return {?}
     */
    () => ((/** @type {?} */ (controller)))[methodName].apply(controller, args)));
}
/**
 * @param {?} elementName
 * @param {?} doc
 * @return {?}
 */
function ensureElementInBody(elementName, doc) {
    /** @type {?} */
    let element = doc.querySelector(elementName);
    if (!element) {
        element = doc.createElement(elementName);
        doc.body.appendChild(element);
    }
    return (/** @type {?} */ (element));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CTRL = 'ion-menu-controller';
class MenuController {
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
    }
    /**
     * Programmatically open the Menu.
     * @param {?=} menuId
     * @return {?} returns a promise when the menu is fully opened
     */
    open(menuId) {
        return proxyMethod(CTRL, this.doc, 'open', menuId);
    }
    /**
     * Programmatically close the Menu. If no `menuId` is given as the first
     * argument then it'll close any menu which is open. If a `menuId`
     * is given then it'll close that exact menu.
     * @param {?=} menuId
     * @return {?} returns a promise when the menu is fully closed
     */
    close(menuId) {
        return proxyMethod(CTRL, this.doc, 'close', menuId);
    }
    /**
     * Toggle the menu. If it's closed, it will open, and if opened, it
     * will close.
     * @param {?=} menuId
     * @return {?} returns a promise when the menu has been toggled
     */
    toggle(menuId) {
        return proxyMethod(CTRL, this.doc, 'toggle', menuId);
    }
    /**
     * Used to enable or disable a menu. For example, there could be multiple
     * left menus, but only one of them should be able to be opened at the same
     * time. If there are multiple menus on the same side, then enabling one menu
     * will also automatically disable all the others that are on the same side.
     * @param {?} shouldEnable
     * @param {?=} menuId
     * @return {?} Returns the instance of the menu, which is useful for chaining.
     */
    enable(shouldEnable, menuId) {
        return proxyMethod(CTRL, this.doc, 'enable', shouldEnable, menuId);
    }
    /**
     * Used to enable or disable the ability to swipe open the menu.
     * @param {?} shouldEnable  True if it should be swipe-able, false if not.
     * @param {?=} menuId
     * @return {?} Returns the instance of the menu, which is useful for chaining.
     */
    swipeEnable(shouldEnable, menuId) {
        return proxyMethod(CTRL, this.doc, 'swipeEnable', shouldEnable, menuId);
    }
    /**
     * @param {?=} menuId
     * @return {?} Returns true if the specified menu is currently open, otherwise false.
     * If the menuId is not specified, it returns true if ANY menu is currenly open.
     */
    isOpen(menuId) {
        return proxyMethod(CTRL, this.doc, 'isOpen', menuId);
    }
    /**
     * @param {?=} menuId
     * @return {?} Returns true if the menu is currently enabled, otherwise false.
     */
    isEnabled(menuId) {
        return proxyMethod(CTRL, this.doc, 'isEnabled', menuId);
    }
    /**
     * Used to get a menu instance. If a `menuId` is not provided then it'll
     * return the first menu found. If a `menuId` is `left` or `right`, then
     * it'll return the enabled menu on that side. Otherwise, if a `menuId` is
     * provided, then it'll try to find the menu using the menu's `id`
     * property. If a menu is not found then it'll return `null`.
     * @param {?=} menuId
     * @return {?} Returns the instance of the menu if found, otherwise `null`.
     */
    get(menuId) {
        return proxyMethod(CTRL, this.doc, 'get', menuId);
    }
    /**
     * @return {?} Returns the instance of the menu already opened, otherwise `null`.
     */
    getOpen() {
        return proxyMethod(CTRL, this.doc, 'getOpen');
    }
    /**
     * @return {?} Returns an array of all menu instances.
     */
    getMenus() {
        return proxyMethod(CTRL, this.doc, 'getMenus');
    }
}
MenuController.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */
MenuController.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ MenuController.ngInjectableDef = defineInjectable({ factory: function MenuController_Factory() { return new MenuController(inject(DOCUMENT)); }, token: MenuController, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PickerController extends OverlayBaseController {
    constructor() {
        super(pickerController);
    }
}
PickerController.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */
PickerController.ctorParameters = () => [];
/** @nocollapse */ PickerController.ngInjectableDef = defineInjectable({ factory: function PickerController_Factory() { return new PickerController(); }, token: PickerController, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalController extends OverlayBaseController {
    /**
     * @param {?} angularDelegate
     * @param {?} resolver
     * @param {?} injector
     */
    constructor(angularDelegate, resolver, injector) {
        super(modalController);
        this.angularDelegate = angularDelegate;
        this.resolver = resolver;
        this.injector = injector;
    }
    /**
     * @param {?} opts
     * @return {?}
     */
    create(opts) {
        return super.create(Object.assign({}, opts, { delegate: this.angularDelegate.create(this.resolver, this.injector) }));
    }
}
ModalController.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ModalController.ctorParameters = () => [
    { type: AngularDelegate },
    { type: ComponentFactoryResolver },
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PopoverController extends OverlayBaseController {
    /**
     * @param {?} angularDelegate
     * @param {?} resolver
     * @param {?} injector
     */
    constructor(angularDelegate, resolver, injector) {
        super(popoverController);
        this.angularDelegate = angularDelegate;
        this.resolver = resolver;
        this.injector = injector;
    }
    /**
     * @param {?} opts
     * @return {?}
     */
    create(opts) {
        return super.create(Object.assign({}, opts, { delegate: this.angularDelegate.create(this.resolver, this.injector) }));
    }
}
PopoverController.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PopoverController.ctorParameters = () => [
    { type: AngularDelegate },
    { type: ComponentFactoryResolver },
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastController extends OverlayBaseController {
    constructor() {
        super(toastController);
    }
}
ToastController.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */
ToastController.ctorParameters = () => [];
/** @nocollapse */ ToastController.ngInjectableDef = defineInjectable({ factory: function ToastController_Factory() { return new ToastController(); }, token: ToastController, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DomController {
    /**
     * Schedules a task to run during the READ phase of the next frame.
     * This task should only read the DOM, but never modify it.
     * @param {?} cb
     * @return {?}
     */
    read(cb) {
        getQueue().read(cb);
    }
    /**
     * Schedules a task to run during the WRITE phase of the next frame.
     * This task should write the DOM, but never READ it.
     * @param {?} cb
     * @return {?}
     */
    write(cb) {
        getQueue().write(cb);
    }
}
DomController.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */ DomController.ngInjectableDef = defineInjectable({ factory: function DomController_Factory() { return new DomController(); }, token: DomController, providedIn: "root" });
/**
 * @return {?}
 */
function getQueue() {
    /** @type {?} */
    const win = typeof ((/** @type {?} */ (window))) !== 'undefined' ? window : (/** @type {?} */ (null));
    if (win != null) {
        /** @type {?} */
        const Ionic = win.Ionic;
        if (Ionic && Ionic.queue) {
            return Ionic.queue;
        }
        return {
            read: (/**
             * @param {?} cb
             * @return {?}
             */
            (cb) => win.requestAnimationFrame(cb)),
            write: (/**
             * @param {?} cb
             * @return {?}
             */
            (cb) => win.requestAnimationFrame(cb))
        };
    }
    return {
        read: (/**
         * @param {?} cb
         * @return {?}
         */
        (cb) => cb()),
        write: (/**
         * @param {?} cb
         * @return {?}
         */
        (cb) => cb())
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonicRouteStrategy {
    /**
     * @param {?} _route
     * @return {?}
     */
    shouldDetach(_route) {
        return false;
    }
    /**
     * @param {?} _route
     * @return {?}
     */
    shouldAttach(_route) {
        return false;
    }
    /**
     * @param {?} _route
     * @param {?} _detachedTree
     * @return {?}
     */
    store(_route, _detachedTree) {
        return;
    }
    /**
     * @param {?} _route
     * @return {?}
     */
    retrieve(_route) {
        return null;
    }
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    shouldReuseRoute(future, curr) {
        if (future.routeConfig !== curr.routeConfig) {
            return false;
        }
        if (future.component !== curr.component) {
            return false;
        }
        // checking router params
        /** @type {?} */
        const futureParams = future.params;
        /** @type {?} */
        const currentParams = curr.params;
        /** @type {?} */
        const keysA = Object.keys(futureParams);
        /** @type {?} */
        const keysB = Object.keys(currentParams);
        if (keysA.length !== keysB.length) {
            return false;
        }
        // Test for A's keys different from B.
        for (const key of keysA) {
            if (currentParams[key] !== futureParams[key]) {
                return false;
            }
        }
        return true;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @param {?} doc
 * @param {?} zone
 * @return {?}
 */
function appInitialize(config, doc, zone) {
    return (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const win = (/** @type {?} */ (doc.defaultView));
        if (win) {
            /** @type {?} */
            const Ionic = win.Ionic = win.Ionic || {};
            Ionic.config = Object.assign({}, config, { _zoneGate: (/**
                 * @param {?} h
                 * @return {?}
                 */
                (h) => zone.run(h)) });
            /** @type {?} */
            const aelFn = '__zone_symbol__addEventListener' in ((/** @type {?} */ (document.body)))
                ? '__zone_symbol__addEventListener'
                : 'addEventListener';
            return applyPolyfills().then((/**
             * @return {?}
             */
            () => {
                return defineCustomElements(win, {
                    exclude: ['ion-tabs', 'ion-tab'],
                    syncQueue: true,
                    jmp: (/**
                     * @param {?} h
                     * @return {?}
                     */
                    (h) => zone.runOutsideAngular(h)),
                    raf: (/**
                     * @param {?} h
                     * @return {?}
                     */
                    h => {
                        return zone.runOutsideAngular((/**
                         * @return {?}
                         */
                        () => {
                            return (win.__zone_symbol__requestAnimationFrame) ? win.__zone_symbol__requestAnimationFrame(h) : requestAnimationFrame(h);
                        }));
                    }),
                    /**
                     * @param {?} elm
                     * @param {?} eventName
                     * @param {?} cb
                     * @param {?} opts
                     * @return {?}
                     */
                    ael(elm, eventName, cb, opts) {
                        ((/** @type {?} */ (elm)))[aelFn](eventName, cb, opts);
                    },
                    /**
                     * @param {?} elm
                     * @param {?} eventName
                     * @param {?} cb
                     * @param {?} opts
                     * @return {?}
                     */
                    rel(elm, eventName, cb, opts) {
                        elm.removeEventListener(eventName, cb, opts);
                    }
                });
            }));
        }
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DECLARATIONS = [
    // proxies
    IonApp,
    IonAvatar,
    IonBackButton,
    IonBackdrop,
    IonBadge,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCheckbox,
    IonChip,
    IonCol,
    IonContent,
    IonDatetime,
    IonFab,
    IonFabButton,
    IonFabList,
    IonFooter,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonInput,
    IonItem,
    IonItemDivider,
    IonItemGroup,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuButton,
    IonMenuToggle,
    IonNav,
    IonNavPop,
    IonNavPush,
    IonNavSetRoot,
    IonNote,
    IonProgressBar,
    IonRadio,
    IonRadioGroup,
    IonRange,
    IonRefresher,
    IonRefresherContent,
    IonReorder,
    IonReorderGroup,
    IonRippleEffect,
    IonRow,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonSelect,
    IonSelectOption,
    IonSkeletonText,
    IonSlide,
    IonSlides,
    IonSpinner,
    IonSplitPane,
    IonTabBar,
    IonTabButton,
    IonText,
    IonTextarea,
    IonThumbnail,
    IonToggle,
    IonToolbar,
    IonTitle,
    IonTabs,
    // ngModel accessors
    BooleanValueAccessor,
    NumericValueAccessor,
    RadioValueAccessor,
    SelectValueAccessor,
    TextValueAccessor,
    // navigation
    IonRouterOutlet,
    IonBackButtonDelegate,
    NavDelegate,
    RouterLinkDelegate,
    // virtual scroll
    VirtualFooter,
    VirtualHeader,
    VirtualItem,
    IonVirtualScroll
];
class IonicModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: IonicModule,
            providers: [
                {
                    provide: ConfigToken,
                    useValue: config
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: appInitialize,
                    multi: true,
                    deps: [
                        ConfigToken,
                        DOCUMENT,
                        NgZone
                    ]
                }
            ]
        };
    }
}
IonicModule.decorators = [
    { type: NgModule, args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                providers: [AngularDelegate, ModalController, PopoverController],
                imports: [CommonModule]
            },] },
];

export { ActionSheetController, AlertController, AngularDelegate, BooleanValueAccessor, Config, DomController, Events, IonApp, IonAvatar, IonBackButton, IonBackButtonDelegate, IonBackdrop, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonMenuToggle, IonNav, IonNavPop, IonNavPush, IonNavSetRoot, IonNote, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRouterOutlet, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSkeletonText, IonSlide, IonSlides, IonSpinner, IonSplitPane, IonTabBar, IonTabButton, IonTabs, IonText, IonTextarea, IonThumbnail, IonTitle, IonToggle, IonToolbar, IonVirtualScroll, IonicModule, IonicRouteStrategy, LoadingController, MenuController, ModalController, NavController, NavDelegate, NavParams, NumericValueAccessor, PickerController, Platform, PopoverController, RadioValueAccessor, RouterLinkDelegate, SelectValueAccessor, TextValueAccessor, ToastController, VirtualFooter, VirtualHeader, VirtualItem, ConfigToken as ɵa, ValueAccessor as ɵb, OverlayBaseController as ɵd, appInitialize as ɵe };
