import { __extends, __awaiter, __generator, __assign } from 'tslib';
import { HostListener, Directive, ElementRef, Injectable, Inject, defineInjectable, inject, Optional, Component, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, InjectionToken, ApplicationRef, Injector, ViewContainerRef, ComponentFactoryResolver, Attribute, SkipSelf, Output, EventEmitter, ViewChild, ContentChild, TemplateRef, IterableDiffers, APP_INITIALIZER, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DOCUMENT, Location, LocationStrategy, CommonModule } from '@angular/common';
import { UrlSerializer, Router, NavigationStart, ActivatedRoute, ChildrenOutletContexts, PRIMARY_OUTLET, RouterLink } from '@angular/router';
import { isPlatform, getPlatforms, LIFECYCLE_WILL_ENTER, LIFECYCLE_DID_ENTER, LIFECYCLE_WILL_LEAVE, LIFECYCLE_DID_LEAVE, LIFECYCLE_WILL_UNLOAD, actionSheetController, alertController, loadingController, pickerController, modalController, popoverController, toastController } from '@ionic/core';
import { Subject, fromEvent, BehaviorSubject } from 'rxjs';
import { filter, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { applyPolyfills, defineCustomElements } from '@ionic/core/loader';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValueAccessor = /** @class */ (function () {
    function ValueAccessor(el) {
        this.el = el;
        this.onChange = (/**
         * @return {?}
         */
        function () { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
        setIonicClasses(this.el);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValueAccessor.prototype.handleChangeEvent = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
        }
        setIonicClasses(this.el);
    };
    /**
     * @return {?}
     */
    ValueAccessor.prototype._handleBlurEvent = /**
     * @return {?}
     */
    function () {
        this.onTouched();
        setIonicClasses(this.el);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ValueAccessor.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.el.nativeElement.disabled = isDisabled;
    };
    ValueAccessor.propDecorators = {
        _handleBlurEvent: [{ type: HostListener, args: ['ionBlur',] }]
    };
    return ValueAccessor;
}());
/**
 * @param {?} element
 * @return {?}
 */
function setIonicClasses(element) {
    /** @type {?} */
    var input = (/** @type {?} */ (element.nativeElement));
    /** @type {?} */
    var classes = getClasses(input);
    setClasses(input, classes);
    /** @type {?} */
    var item = input.closest('ion-item');
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
    var classList = element.classList;
    /** @type {?} */
    var classes = [];
    for (var i = 0; i < classList.length; i++) {
        /** @type {?} */
        var item = classList.item(i);
        if (item !== null && startsWith(item, 'ng-')) {
            classes.push("ion-" + item.substr(3));
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
    var classList = element.classList;
    classList.remove('ion-valid', 'ion-invalid', 'ion-touched', 'ion-untouched', 'ion-dirty', 'ion-pristine');
    classList.add.apply(classList, classes);
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
var BooleanValueAccessor = /** @class */ (function (_super) {
    __extends(BooleanValueAccessor, _super);
    function BooleanValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    BooleanValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.el.nativeElement.checked = this.lastValue = value == null ? false : value;
        setIonicClasses(this.el);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BooleanValueAccessor.prototype._handleIonChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.handleChangeEvent(value);
    };
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
    BooleanValueAccessor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    BooleanValueAccessor.propDecorators = {
        _handleIonChange: [{ type: HostListener, args: ['ionChange', ['$event.target.checked'],] }]
    };
    return BooleanValueAccessor;
}(ValueAccessor));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NumericValueAccessor = /** @class */ (function (_super) {
    __extends(NumericValueAccessor, _super);
    function NumericValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NumericValueAccessor.prototype._handleIonChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.handleChangeEvent(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumericValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        _super.prototype.registerOnChange.call(this, (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            fn(value === '' ? null : parseFloat(value));
        }));
    };
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
    NumericValueAccessor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NumericValueAccessor.propDecorators = {
        _handleIonChange: [{ type: HostListener, args: ['ionChange', ['$event.target.value'],] }]
    };
    return NumericValueAccessor;
}(ValueAccessor));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RadioValueAccessor = /** @class */ (function (_super) {
    __extends(RadioValueAccessor, _super);
    function RadioValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    RadioValueAccessor.prototype._handleIonSelect = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.handleChangeEvent(value);
    };
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
    RadioValueAccessor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    RadioValueAccessor.propDecorators = {
        _handleIonSelect: [{ type: HostListener, args: ['ionSelect', ['$event.target.checked'],] }]
    };
    return RadioValueAccessor;
}(ValueAccessor));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectValueAccessor = /** @class */ (function (_super) {
    __extends(SelectValueAccessor, _super);
    function SelectValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SelectValueAccessor.prototype._handleChangeEvent = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.handleChangeEvent(value);
    };
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
    SelectValueAccessor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SelectValueAccessor.propDecorators = {
        _handleChangeEvent: [{ type: HostListener, args: ['ionChange', ['$event.target.value'],] }]
    };
    return SelectValueAccessor;
}(ValueAccessor));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextValueAccessor = /** @class */ (function (_super) {
    __extends(TextValueAccessor, _super);
    function TextValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TextValueAccessor.prototype._handleInputEvent = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.handleChangeEvent(value);
    };
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
    TextValueAccessor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    TextValueAccessor.propDecorators = {
        _handleInputEvent: [{ type: HostListener, args: ['ionChange', ['$event.target.value'],] }]
    };
    return TextValueAccessor;
}(ValueAccessor));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Platform = /** @class */ (function () {
    function Platform(doc) {
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
            function (ev) {
                ev.register(priority, callback);
            }));
        });
        proxyEvent(this.pause, doc, 'pause');
        proxyEvent(this.resume, doc, 'resume');
        proxyEvent(this.backButton, doc, 'ionBackButton');
        proxyEvent(this.resize, this.win, 'resize');
        /** @type {?} */
        var readyResolve;
        this._readyPromise = new Promise((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { readyResolve = res; }));
        if (this.win && this.win['cordova']) {
            doc.addEventListener('deviceready', (/**
             * @return {?}
             */
            function () {
                readyResolve('cordova');
            }), { once: true });
        }
        else {
            (/** @type {?} */ (readyResolve))('dom');
        }
    }
    /**
     * @returns returns true/false based on platform.
     * @description
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
     * @Component({...})
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
     */
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
    Platform.prototype.is = /**
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
    function (platformName) {
        return isPlatform(this.win, platformName);
    };
    /**
     * @returns the array of platforms
     * @description
     * Depending on what device you are on, `platforms` can return multiple values.
     * Each possible value is a hierarchy of platforms. For example, on an iPhone,
     * it would return `mobile`, `ios`, and `iphone`.
     *
     * ```
     * import { Platform } from 'ionic-angular';
     *
     * @Component({...})
     * export MyPage {
     *   constructor(public platform: Platform) {
     *     // This will print an array of the current platforms
     *     console.log(this.platform.platforms());
     *   }
     * }
     * ```
     */
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
    Platform.prototype.platforms = /**
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
    function () {
        return getPlatforms(this.win);
    };
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
     * import { Component } from '@angular/core';
     * import { Platform } from 'ionic-angular';
     *
     * @Component({...})
     * export MyApp {
     *   constructor(public platform: Platform) {
     *     this.platform.ready().then((readySource) => {
     *       console.log('Platform ready from', readySource);
     *       // Platform now ready, execute any required native code
     *     });
     *   }
     * }
     * ```
     */
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
    Platform.prototype.ready = /**
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
    function () {
        return this._readyPromise;
    };
    Object.defineProperty(Platform.prototype, "isRTL", {
        /**
         * Returns if this app is using right-to-left language direction or not.
         * We recommend the app's `index.html` file already has the correct `dir`
         * attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`.
         * [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)
         */
        get: /**
         * Returns if this app is using right-to-left language direction or not.
         * We recommend the app's `index.html` file already has the correct `dir`
         * attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`.
         * [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)
         * @return {?}
         */
        function () {
            return this.doc.dir === 'rtl';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get the query string parameter
     */
    /**
     * Get the query string parameter
     * @param {?} key
     * @return {?}
     */
    Platform.prototype.getQueryParam = /**
     * Get the query string parameter
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return readQueryParam(this.win.location.href, key);
    };
    /**
     * Returns `true` if the app is in landscape mode.
     */
    /**
     * Returns `true` if the app is in landscape mode.
     * @return {?}
     */
    Platform.prototype.isLandscape = /**
     * Returns `true` if the app is in landscape mode.
     * @return {?}
     */
    function () {
        return !this.isPortrait();
    };
    /**
     * Returns `true` if the app is in portait mode.
     */
    /**
     * Returns `true` if the app is in portait mode.
     * @return {?}
     */
    Platform.prototype.isPortrait = /**
     * Returns `true` if the app is in portait mode.
     * @return {?}
     */
    function () {
        return this.win.matchMedia && this.win.matchMedia('(orientation: portrait)').matches;
    };
    /**
     * @param {?} expression
     * @return {?}
     */
    Platform.prototype.testUserAgent = /**
     * @param {?} expression
     * @return {?}
     */
    function (expression) {
        /** @type {?} */
        var nav = this.win.navigator;
        return !!(nav && nav.userAgent && nav.userAgent.indexOf(expression) >= 0);
    };
    /**
     * Get the current url.
     */
    /**
     * Get the current url.
     * @return {?}
     */
    Platform.prototype.url = /**
     * Get the current url.
     * @return {?}
     */
    function () {
        return this.win.location.href;
    };
    /**
     * Gets the width of the platform's viewport using `window.innerWidth`.
     */
    /**
     * Gets the width of the platform's viewport using `window.innerWidth`.
     * @return {?}
     */
    Platform.prototype.width = /**
     * Gets the width of the platform's viewport using `window.innerWidth`.
     * @return {?}
     */
    function () {
        return this.win.innerWidth;
    };
    /**
     * Gets the height of the platform's viewport using `window.innerHeight`.
     */
    /**
     * Gets the height of the platform's viewport using `window.innerHeight`.
     * @return {?}
     */
    Platform.prototype.height = /**
     * Gets the height of the platform's viewport using `window.innerHeight`.
     * @return {?}
     */
    function () {
        return this.win.innerHeight;
    };
    Platform.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] },
    ];
    /** @nocollapse */
    Platform.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ Platform.ngInjectableDef = defineInjectable({ factory: function Platform_Factory() { return new Platform(inject(DOCUMENT)); }, token: Platform, providedIn: "root" });
    return Platform;
}());
/** @type {?} */
var readQueryParam = (/**
 * @param {?} url
 * @param {?} key
 * @return {?}
 */
function (url, key) {
    key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    /** @type {?} */
    var regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
    /** @type {?} */
    var results = regex.exec(url);
    return results ? decodeURIComponent(results[1].replace(/\+/g, ' ')) : null;
});
/** @type {?} */
var proxyEvent = (/**
 * @template T
 * @param {?} emitter
 * @param {?} el
 * @param {?} eventName
 * @return {?}
 */
function (emitter, el, eventName) {
    if (((/** @type {?} */ (el)))) {
        el.addEventListener(eventName, (/**
         * @param {?} ev
         * @return {?}
         */
        function (ev) {
            // ?? cordova might emit "null" events
            emitter.next(ev != null ? (/** @type {?} */ (((/** @type {?} */ (ev))).detail)) : undefined);
        }));
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavController = /** @class */ (function () {
    function NavController(platform, location, serializer, router) {
        var _this = this;
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
            function (ev) {
                if (ev instanceof NavigationStart) {
                    /** @type {?} */
                    var id = (ev.restoredState) ? ev.restoredState.navigationId : ev.id;
                    _this.guessDirection = id < _this.lastNavId ? 'back' : 'forward';
                    _this.guessAnimation = !ev.restoredState ? _this.guessDirection : undefined;
                    _this.lastNavId = _this.guessDirection === 'forward' ? ev.id : id;
                }
            }));
        }
        // Subscribe to backButton events
        platform.backButton.subscribeWithPriority(0, (/**
         * @return {?}
         */
        function () { return _this.pop(); }));
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
     */
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
    NavController.prototype.navigateForward = /**
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
    function (url, options) {
        if (options === void 0) { options = {}; }
        this.setDirection('forward', options.animated, options.animationDirection);
        return this.navigate(url, options);
    };
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
     */
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
    NavController.prototype.navigateBack = /**
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
    function (url, options) {
        if (options === void 0) { options = {}; }
        this.setDirection('back', options.animated, options.animationDirection);
        return this.navigate(url, options);
    };
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
     */
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
    NavController.prototype.navigateRoot = /**
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
    function (url, options) {
        if (options === void 0) { options = {}; }
        this.setDirection('root', options.animated, options.animationDirection);
        return this.navigate(url, options);
    };
    /**
     * Same as [Location](https://angular.io/api/common/Location)'s back() method.
     * It will use the standard `window.history.back()` under the hood, but featuring a `back` animation.
     */
    /**
     * Same as [Location](https://angular.io/api/common/Location)'s back() method.
     * It will use the standard `window.history.back()` under the hood, but featuring a `back` animation.
     * @param {?=} options
     * @return {?}
     */
    NavController.prototype.back = /**
     * Same as [Location](https://angular.io/api/common/Location)'s back() method.
     * It will use the standard `window.history.back()` under the hood, but featuring a `back` animation.
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = { animated: true, animationDirection: 'back' }; }
        this.setDirection('back', options.animated, options.animationDirection);
        return this.location.back();
    };
    /**
     * This methods goes back in the context of ionic's stack navigation.
     *
     * It recursivelly finds the top active `ion-router-outlet` and calls `pop()`.
     * This is the recommended way to go back when you are using `ion-router-outlet`.
     */
    /**
     * This methods goes back in the context of ionic's stack navigation.
     *
     * It recursivelly finds the top active `ion-router-outlet` and calls `pop()`.
     * This is the recommended way to go back when you are using `ion-router-outlet`.
     * @return {?}
     */
    NavController.prototype.pop = /**
     * This methods goes back in the context of ionic's stack navigation.
     *
     * It recursivelly finds the top active `ion-router-outlet` and calls `pop()`.
     * This is the recommended way to go back when you are using `ion-router-outlet`.
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var outlet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        outlet = this.topOutlet;
                        _a.label = 1;
                    case 1:
                        if (!outlet) return [3 /*break*/, 3];
                        return [4 /*yield*/, outlet.pop()];
                    case 2:
                        if (_a.sent()) {
                            return [3 /*break*/, 3];
                        }
                        else {
                            outlet = outlet.parentOutlet;
                        }
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This methods specifies the direction of the next navigation performed by the angular router.
     *
     * `setDirection()` does not trigger any transition, it just sets a set of flags to be consumed by `ion-router-outlet`.
     *
     * It's recommended to use `navigateForward()`, `navigateBack()` and `navigateBack()` instead of `setDirection()`.
     */
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
    NavController.prototype.setDirection = /**
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
    function (direction, animated, animationDirection) {
        this.direction = direction;
        this.animated = getAnimation(direction, animated, animationDirection);
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} outlet
     * @return {?}
     */
    NavController.prototype.setTopOutlet = /**
     * \@internal
     * @param {?} outlet
     * @return {?}
     */
    function (outlet) {
        this.topOutlet = outlet;
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @return {?}
     */
    NavController.prototype.consumeTransition = /**
     * \@internal
     * @return {?}
     */
    function () {
        /** @type {?} */
        var direction = 'root';
        /** @type {?} */
        var animation;
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
            direction: direction,
            animation: animation
        };
    };
    /**
     * @private
     * @param {?} url
     * @param {?} options
     * @return {?}
     */
    NavController.prototype.navigate = /**
     * @private
     * @param {?} url
     * @param {?} options
     * @return {?}
     */
    function (url, options) {
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
            var urlTree = this.serializer.parse(url.toString());
            if (options.queryParams !== undefined) {
                urlTree.queryParams = __assign({}, options.queryParams);
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
    };
    NavController.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] },
    ];
    /** @nocollapse */
    NavController.ctorParameters = function () { return [
        { type: Platform },
        { type: Location },
        { type: UrlSerializer },
        { type: Router, decorators: [{ type: Optional }] }
    ]; };
    /** @nocollapse */ NavController.ngInjectableDef = defineInjectable({ factory: function NavController_Factory() { return new NavController(inject(Platform), inject(Location), inject(UrlSerializer), inject(Router, 8)); }, token: NavController, providedIn: "root" });
    return NavController;
}());
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
var DEFAULT_DIRECTION = 'auto';
/** @type {?} */
var DEFAULT_ANIMATED = undefined;

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
    var Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        Object.defineProperty(Prototype, item, {
            get: /**
             * @return {?}
             */
            function () { return this.el[item]; },
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                var _this = this;
                this.z.runOutsideAngular((/**
                 * @return {?}
                 */
                function () { return _this.el[item] = val; }));
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
    var Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    function (methodName) {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var args = arguments;
            return this.z.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.el[methodName].apply(_this.el, args); }));
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
    function (eventName) { return instance[eventName] = fromEvent(el, eventName); }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonApp = /** @class */ (function () {
    function IonApp(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonApp.decorators = [
        { type: Component, args: [{ selector: 'ion-app', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
    ];
    /** @nocollapse */
    IonApp.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonApp;
}());
var IonAvatar = /** @class */ (function () {
    function IonAvatar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonAvatar.decorators = [
        { type: Component, args: [{ selector: 'ion-avatar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
    ];
    /** @nocollapse */
    IonAvatar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonAvatar;
}());
var IonBackButton = /** @class */ (function () {
    function IonBackButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonBackButton.decorators = [
        { type: Component, args: [{ selector: 'ion-back-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'defaultHref', 'disabled', 'icon', 'mode', 'text', 'type'] },] },
    ];
    /** @nocollapse */
    IonBackButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonBackButton;
}());
proxyInputs(IonBackButton, ['color', 'defaultHref', 'disabled', 'icon', 'mode', 'text', 'type']);
var IonBackdrop = /** @class */ (function () {
    function IonBackdrop(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionBackdropTap']);
    }
    IonBackdrop.decorators = [
        { type: Component, args: [{ selector: 'ion-backdrop', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['stopPropagation', 'tappable', 'visible'] },] },
    ];
    /** @nocollapse */
    IonBackdrop.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonBackdrop;
}());
proxyInputs(IonBackdrop, ['stopPropagation', 'tappable', 'visible']);
var IonBadge = /** @class */ (function () {
    function IonBadge(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonBadge.decorators = [
        { type: Component, args: [{ selector: 'ion-badge', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
    ];
    /** @nocollapse */
    IonBadge.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonBadge;
}());
proxyInputs(IonBadge, ['color', 'mode']);
var IonButton = /** @class */ (function () {
    function IonButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
    }
    IonButton.decorators = [
        { type: Component, args: [{ selector: 'ion-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'mode', 'rel', 'routerDirection', 'shape', 'size', 'strong', 'target', 'type'] },] },
    ];
    /** @nocollapse */
    IonButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonButton;
}());
proxyInputs(IonButton, ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'mode', 'rel', 'routerDirection', 'shape', 'size', 'strong', 'target', 'type']);
var IonButtons = /** @class */ (function () {
    function IonButtons(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonButtons.decorators = [
        { type: Component, args: [{ selector: 'ion-buttons', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
    ];
    /** @nocollapse */
    IonButtons.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonButtons;
}());
var IonCard = /** @class */ (function () {
    function IonCard(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCard.decorators = [
        { type: Component, args: [{ selector: 'ion-card', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['button', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerDirection', 'target', 'type'] },] },
    ];
    /** @nocollapse */
    IonCard.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonCard;
}());
proxyInputs(IonCard, ['button', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerDirection', 'target', 'type']);
var IonCardContent = /** @class */ (function () {
    function IonCardContent(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCardContent.decorators = [
        { type: Component, args: [{ selector: 'ion-card-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['mode'] },] },
    ];
    /** @nocollapse */
    IonCardContent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonCardContent;
}());
proxyInputs(IonCardContent, ['mode']);
var IonCardHeader = /** @class */ (function () {
    function IonCardHeader(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCardHeader.decorators = [
        { type: Component, args: [{ selector: 'ion-card-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'translucent'] },] },
    ];
    /** @nocollapse */
    IonCardHeader.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonCardHeader;
}());
proxyInputs(IonCardHeader, ['color', 'mode', 'translucent']);
var IonCardSubtitle = /** @class */ (function () {
    function IonCardSubtitle(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCardSubtitle.decorators = [
        { type: Component, args: [{ selector: 'ion-card-subtitle', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
    ];
    /** @nocollapse */
    IonCardSubtitle.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonCardSubtitle;
}());
proxyInputs(IonCardSubtitle, ['color', 'mode']);
var IonCardTitle = /** @class */ (function () {
    function IonCardTitle(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCardTitle.decorators = [
        { type: Component, args: [{ selector: 'ion-card-title', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
    ];
    /** @nocollapse */
    IonCardTitle.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonCardTitle;
}());
proxyInputs(IonCardTitle, ['color', 'mode']);
var IonCheckbox = /** @class */ (function () {
    function IonCheckbox(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
    }
    IonCheckbox.decorators = [
        { type: Component, args: [{ selector: 'ion-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'color', 'disabled', 'indeterminate', 'mode', 'name', 'value'] },] },
    ];
    /** @nocollapse */
    IonCheckbox.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonCheckbox;
}());
proxyInputs(IonCheckbox, ['checked', 'color', 'disabled', 'indeterminate', 'mode', 'name', 'value']);
var IonChip = /** @class */ (function () {
    function IonChip(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonChip.decorators = [
        { type: Component, args: [{ selector: 'ion-chip', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'outline'] },] },
    ];
    /** @nocollapse */
    IonChip.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonChip;
}());
proxyInputs(IonChip, ['color', 'mode', 'outline']);
var IonCol = /** @class */ (function () {
    function IonCol(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCol.decorators = [
        { type: Component, args: [{ selector: 'ion-col', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs'] },] },
    ];
    /** @nocollapse */
    IonCol.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonCol;
}());
proxyInputs(IonCol, ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']);
var IonContent = /** @class */ (function () {
    function IonContent(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionScrollStart', 'ionScroll', 'ionScrollEnd']);
    }
    IonContent.decorators = [
        { type: Component, args: [{ selector: 'ion-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY'] },] },
    ];
    /** @nocollapse */
    IonContent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonContent;
}());
proxyMethods(IonContent, ['getScrollElement', 'scrollToTop', 'scrollToBottom', 'scrollByPoint', 'scrollToPoint']);
proxyInputs(IonContent, ['color', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY']);
var IonDatetime = /** @class */ (function () {
    function IonDatetime(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionCancel', 'ionChange', 'ionFocus', 'ionBlur']);
    }
    IonDatetime.decorators = [
        { type: Component, args: [{ selector: 'ion-datetime', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['cancelText', 'dayNames', 'dayShortNames', 'dayValues', 'disabled', 'displayFormat', 'doneText', 'hourValues', 'max', 'min', 'minuteValues', 'mode', 'monthNames', 'monthShortNames', 'monthValues', 'name', 'pickerFormat', 'pickerOptions', 'placeholder', 'readonly', 'value', 'yearValues'] },] },
    ];
    /** @nocollapse */
    IonDatetime.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonDatetime;
}());
proxyMethods(IonDatetime, ['open']);
proxyInputs(IonDatetime, ['cancelText', 'dayNames', 'dayShortNames', 'dayValues', 'disabled', 'displayFormat', 'doneText', 'hourValues', 'max', 'min', 'minuteValues', 'mode', 'monthNames', 'monthShortNames', 'monthValues', 'name', 'pickerFormat', 'pickerOptions', 'placeholder', 'readonly', 'value', 'yearValues']);
var IonFab = /** @class */ (function () {
    function IonFab(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonFab.decorators = [
        { type: Component, args: [{ selector: 'ion-fab', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['activated', 'edge', 'horizontal', 'vertical'] },] },
    ];
    /** @nocollapse */
    IonFab.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonFab;
}());
proxyMethods(IonFab, ['close']);
proxyInputs(IonFab, ['activated', 'edge', 'horizontal', 'vertical']);
var IonFabButton = /** @class */ (function () {
    function IonFabButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
    }
    IonFabButton.decorators = [
        { type: Component, args: [{ selector: 'ion-fab-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['activated', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerDirection', 'show', 'size', 'target', 'translucent', 'type'] },] },
    ];
    /** @nocollapse */
    IonFabButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonFabButton;
}());
proxyInputs(IonFabButton, ['activated', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerDirection', 'show', 'size', 'target', 'translucent', 'type']);
var IonFabList = /** @class */ (function () {
    function IonFabList(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonFabList.decorators = [
        { type: Component, args: [{ selector: 'ion-fab-list', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['activated', 'side'] },] },
    ];
    /** @nocollapse */
    IonFabList.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonFabList;
}());
proxyInputs(IonFabList, ['activated', 'side']);
var IonFooter = /** @class */ (function () {
    function IonFooter(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonFooter.decorators = [
        { type: Component, args: [{ selector: 'ion-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['mode', 'translucent'] },] },
    ];
    /** @nocollapse */
    IonFooter.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonFooter;
}());
proxyInputs(IonFooter, ['mode', 'translucent']);
var IonGrid = /** @class */ (function () {
    function IonGrid(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonGrid.decorators = [
        { type: Component, args: [{ selector: 'ion-grid', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['fixed'] },] },
    ];
    /** @nocollapse */
    IonGrid.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonGrid;
}());
proxyInputs(IonGrid, ['fixed']);
var IonHeader = /** @class */ (function () {
    function IonHeader(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonHeader.decorators = [
        { type: Component, args: [{ selector: 'ion-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['mode', 'translucent'] },] },
    ];
    /** @nocollapse */
    IonHeader.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonHeader;
}());
proxyInputs(IonHeader, ['mode', 'translucent']);
var IonIcon = /** @class */ (function () {
    function IonIcon(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonIcon.decorators = [
        { type: Component, args: [{ selector: 'ion-icon', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['ariaLabel', 'color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'size', 'src'] },] },
    ];
    /** @nocollapse */
    IonIcon.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonIcon;
}());
proxyInputs(IonIcon, ['ariaLabel', 'color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'size', 'src']);
var IonImg = /** @class */ (function () {
    function IonImg(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionImgWillLoad', 'ionImgDidLoad', 'ionError']);
    }
    IonImg.decorators = [
        { type: Component, args: [{ selector: 'ion-img', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alt', 'src'] },] },
    ];
    /** @nocollapse */
    IonImg.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonImg;
}());
proxyInputs(IonImg, ['alt', 'src']);
var IonInfiniteScroll = /** @class */ (function () {
    function IonInfiniteScroll(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionInfinite']);
    }
    IonInfiniteScroll.decorators = [
        { type: Component, args: [{ selector: 'ion-infinite-scroll', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'position', 'threshold'] },] },
    ];
    /** @nocollapse */
    IonInfiniteScroll.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonInfiniteScroll;
}());
proxyMethods(IonInfiniteScroll, ['complete']);
proxyInputs(IonInfiniteScroll, ['disabled', 'position', 'threshold']);
var IonInfiniteScrollContent = /** @class */ (function () {
    function IonInfiniteScrollContent(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonInfiniteScrollContent.decorators = [
        { type: Component, args: [{ selector: 'ion-infinite-scroll-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['loadingSpinner', 'loadingText'] },] },
    ];
    /** @nocollapse */
    IonInfiniteScrollContent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonInfiniteScrollContent;
}());
proxyInputs(IonInfiniteScrollContent, ['loadingSpinner', 'loadingText']);
var IonInput = /** @class */ (function () {
    function IonInput(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionBlur', 'ionFocus']);
    }
    IonInput.decorators = [
        { type: Component, args: [{ selector: 'ion-input', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'color', 'debounce', 'disabled', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'mode', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value'] },] },
    ];
    /** @nocollapse */
    IonInput.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonInput;
}());
proxyMethods(IonInput, ['setFocus', 'getInputElement']);
proxyInputs(IonInput, ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'color', 'debounce', 'disabled', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'mode', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value']);
var IonItem = /** @class */ (function () {
    function IonItem(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonItem.decorators = [
        { type: Component, args: [{ selector: 'ion-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['button', 'color', 'detail', 'detailIcon', 'disabled', 'download', 'href', 'lines', 'mode', 'rel', 'routerDirection', 'target', 'type'] },] },
    ];
    /** @nocollapse */
    IonItem.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonItem;
}());
proxyInputs(IonItem, ['button', 'color', 'detail', 'detailIcon', 'disabled', 'download', 'href', 'lines', 'mode', 'rel', 'routerDirection', 'target', 'type']);
var IonItemDivider = /** @class */ (function () {
    function IonItemDivider(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonItemDivider.decorators = [
        { type: Component, args: [{ selector: 'ion-item-divider', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'sticky'] },] },
    ];
    /** @nocollapse */
    IonItemDivider.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonItemDivider;
}());
proxyInputs(IonItemDivider, ['color', 'mode', 'sticky']);
var IonItemGroup = /** @class */ (function () {
    function IonItemGroup(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonItemGroup.decorators = [
        { type: Component, args: [{ selector: 'ion-item-group', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
    ];
    /** @nocollapse */
    IonItemGroup.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonItemGroup;
}());
var IonItemOption = /** @class */ (function () {
    function IonItemOption(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonItemOption.decorators = [
        { type: Component, args: [{ selector: 'ion-item-option', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'disabled', 'download', 'expandable', 'href', 'mode', 'rel', 'target', 'type'] },] },
    ];
    /** @nocollapse */
    IonItemOption.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonItemOption;
}());
proxyInputs(IonItemOption, ['color', 'disabled', 'download', 'expandable', 'href', 'mode', 'rel', 'target', 'type']);
var IonItemOptions = /** @class */ (function () {
    function IonItemOptions(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionSwipe']);
    }
    IonItemOptions.decorators = [
        { type: Component, args: [{ selector: 'ion-item-options', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['side'] },] },
    ];
    /** @nocollapse */
    IonItemOptions.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonItemOptions;
}());
proxyInputs(IonItemOptions, ['side']);
var IonItemSliding = /** @class */ (function () {
    function IonItemSliding(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionDrag']);
    }
    IonItemSliding.decorators = [
        { type: Component, args: [{ selector: 'ion-item-sliding', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled'] },] },
    ];
    /** @nocollapse */
    IonItemSliding.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonItemSliding;
}());
proxyMethods(IonItemSliding, ['getOpenAmount', 'getSlidingRatio', 'open', 'close', 'closeOpened']);
proxyInputs(IonItemSliding, ['disabled']);
var IonLabel = /** @class */ (function () {
    function IonLabel(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonLabel.decorators = [
        { type: Component, args: [{ selector: 'ion-label', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'position'] },] },
    ];
    /** @nocollapse */
    IonLabel.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonLabel;
}());
proxyInputs(IonLabel, ['color', 'mode', 'position']);
var IonList = /** @class */ (function () {
    function IonList(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonList.decorators = [
        { type: Component, args: [{ selector: 'ion-list', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inset', 'lines', 'mode'] },] },
    ];
    /** @nocollapse */
    IonList.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonList;
}());
proxyMethods(IonList, ['closeSlidingItems']);
proxyInputs(IonList, ['inset', 'lines', 'mode']);
var IonListHeader = /** @class */ (function () {
    function IonListHeader(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonListHeader.decorators = [
        { type: Component, args: [{ selector: 'ion-list-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
    ];
    /** @nocollapse */
    IonListHeader.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonListHeader;
}());
proxyInputs(IonListHeader, ['color', 'mode']);
var IonMenu = /** @class */ (function () {
    function IonMenu(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionWillOpen', 'ionWillClose', 'ionDidOpen', 'ionDidClose']);
    }
    IonMenu.decorators = [
        { type: Component, args: [{ selector: 'ion-menu', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['contentId', 'disabled', 'maxEdgeStart', 'menuId', 'side', 'swipeGesture', 'type'] },] },
    ];
    /** @nocollapse */
    IonMenu.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonMenu;
}());
proxyMethods(IonMenu, ['isOpen', 'isActive', 'open', 'close', 'toggle', 'setOpen']);
proxyInputs(IonMenu, ['contentId', 'disabled', 'maxEdgeStart', 'menuId', 'side', 'swipeGesture', 'type']);
var IonMenuButton = /** @class */ (function () {
    function IonMenuButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonMenuButton.decorators = [
        { type: Component, args: [{ selector: 'ion-menu-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['autoHide', 'color', 'disabled', 'menu', 'type'] },] },
    ];
    /** @nocollapse */
    IonMenuButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonMenuButton;
}());
proxyInputs(IonMenuButton, ['autoHide', 'color', 'disabled', 'menu', 'type']);
var IonMenuToggle = /** @class */ (function () {
    function IonMenuToggle(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonMenuToggle.decorators = [
        { type: Component, args: [{ selector: 'ion-menu-toggle', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['autoHide', 'menu'] },] },
    ];
    /** @nocollapse */
    IonMenuToggle.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonMenuToggle;
}());
proxyInputs(IonMenuToggle, ['autoHide', 'menu']);
var IonNav = /** @class */ (function () {
    function IonNav(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionNavWillChange', 'ionNavDidChange']);
    }
    IonNav.decorators = [
        { type: Component, args: [{ selector: 'ion-nav', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['animated', 'animation', 'root', 'rootParams', 'swipeGesture'] },] },
    ];
    /** @nocollapse */
    IonNav.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonNav;
}());
proxyMethods(IonNav, ['push', 'insert', 'insertPages', 'pop', 'popTo', 'popToRoot', 'removeIndex', 'setRoot', 'setPages', 'getActive', 'getByIndex', 'canGoBack', 'getPrevious']);
proxyInputs(IonNav, ['animated', 'animation', 'root', 'rootParams', 'swipeGesture']);
var IonNavPop = /** @class */ (function () {
    function IonNavPop(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonNavPop.decorators = [
        { type: Component, args: [{ selector: 'ion-nav-pop', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
    ];
    /** @nocollapse */
    IonNavPop.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonNavPop;
}());
var IonNavPush = /** @class */ (function () {
    function IonNavPush(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonNavPush.decorators = [
        { type: Component, args: [{ selector: 'ion-nav-push', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['component', 'componentProps'] },] },
    ];
    /** @nocollapse */
    IonNavPush.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonNavPush;
}());
proxyInputs(IonNavPush, ['component', 'componentProps']);
var IonNavSetRoot = /** @class */ (function () {
    function IonNavSetRoot(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonNavSetRoot.decorators = [
        { type: Component, args: [{ selector: 'ion-nav-set-root', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['component', 'componentProps'] },] },
    ];
    /** @nocollapse */
    IonNavSetRoot.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonNavSetRoot;
}());
proxyInputs(IonNavSetRoot, ['component', 'componentProps']);
var IonNote = /** @class */ (function () {
    function IonNote(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonNote.decorators = [
        { type: Component, args: [{ selector: 'ion-note', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
    ];
    /** @nocollapse */
    IonNote.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonNote;
}());
proxyInputs(IonNote, ['color', 'mode']);
var IonProgressBar = /** @class */ (function () {
    function IonProgressBar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonProgressBar.decorators = [
        { type: Component, args: [{ selector: 'ion-progress-bar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['buffer', 'color', 'mode', 'reversed', 'type', 'value'] },] },
    ];
    /** @nocollapse */
    IonProgressBar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonProgressBar;
}());
proxyInputs(IonProgressBar, ['buffer', 'color', 'mode', 'reversed', 'type', 'value']);
var IonRadio = /** @class */ (function () {
    function IonRadio(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionSelect', 'ionFocus', 'ionBlur']);
    }
    IonRadio.decorators = [
        { type: Component, args: [{ selector: 'ion-radio', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'color', 'disabled', 'mode', 'name', 'value'] },] },
    ];
    /** @nocollapse */
    IonRadio.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonRadio;
}());
proxyInputs(IonRadio, ['checked', 'color', 'disabled', 'mode', 'name', 'value']);
var IonRadioGroup = /** @class */ (function () {
    function IonRadioGroup(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange']);
    }
    IonRadioGroup.decorators = [
        { type: Component, args: [{ selector: 'ion-radio-group', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['allowEmptySelection', 'name', 'value'] },] },
    ];
    /** @nocollapse */
    IonRadioGroup.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonRadioGroup;
}());
proxyInputs(IonRadioGroup, ['allowEmptySelection', 'name', 'value']);
var IonRange = /** @class */ (function () {
    function IonRange(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
    }
    IonRange.decorators = [
        { type: Component, args: [{ selector: 'ion-range', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'debounce', 'disabled', 'dualKnobs', 'max', 'min', 'mode', 'name', 'pin', 'snaps', 'step', 'ticks', 'value'] },] },
    ];
    /** @nocollapse */
    IonRange.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonRange;
}());
proxyInputs(IonRange, ['color', 'debounce', 'disabled', 'dualKnobs', 'max', 'min', 'mode', 'name', 'pin', 'snaps', 'step', 'ticks', 'value']);
var IonRefresher = /** @class */ (function () {
    function IonRefresher(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionRefresh', 'ionPull', 'ionStart']);
    }
    IonRefresher.decorators = [
        { type: Component, args: [{ selector: 'ion-refresher', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['closeDuration', 'disabled', 'pullFactor', 'pullMax', 'pullMin', 'snapbackDuration'] },] },
    ];
    /** @nocollapse */
    IonRefresher.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonRefresher;
}());
proxyMethods(IonRefresher, ['complete', 'cancel', 'getProgress']);
proxyInputs(IonRefresher, ['closeDuration', 'disabled', 'pullFactor', 'pullMax', 'pullMin', 'snapbackDuration']);
var IonRefresherContent = /** @class */ (function () {
    function IonRefresherContent(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonRefresherContent.decorators = [
        { type: Component, args: [{ selector: 'ion-refresher-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText'] },] },
    ];
    /** @nocollapse */
    IonRefresherContent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonRefresherContent;
}());
proxyInputs(IonRefresherContent, ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText']);
var IonReorder = /** @class */ (function () {
    function IonReorder(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonReorder.decorators = [
        { type: Component, args: [{ selector: 'ion-reorder', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
    ];
    /** @nocollapse */
    IonReorder.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonReorder;
}());
var IonReorderGroup = /** @class */ (function () {
    function IonReorderGroup(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionItemReorder']);
    }
    IonReorderGroup.decorators = [
        { type: Component, args: [{ selector: 'ion-reorder-group', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled'] },] },
    ];
    /** @nocollapse */
    IonReorderGroup.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonReorderGroup;
}());
proxyMethods(IonReorderGroup, ['complete']);
proxyInputs(IonReorderGroup, ['disabled']);
var IonRippleEffect = /** @class */ (function () {
    function IonRippleEffect(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonRippleEffect.decorators = [
        { type: Component, args: [{ selector: 'ion-ripple-effect', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['type'] },] },
    ];
    /** @nocollapse */
    IonRippleEffect.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonRippleEffect;
}());
proxyMethods(IonRippleEffect, ['addRipple']);
proxyInputs(IonRippleEffect, ['type']);
var IonRow = /** @class */ (function () {
    function IonRow(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonRow.decorators = [
        { type: Component, args: [{ selector: 'ion-row', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
    ];
    /** @nocollapse */
    IonRow.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonRow;
}());
var IonSearchbar = /** @class */ (function () {
    function IonSearchbar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionCancel', 'ionClear', 'ionBlur', 'ionFocus']);
    }
    IonSearchbar.decorators = [
        { type: Component, args: [{ selector: 'ion-searchbar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['animated', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'disabled', 'mode', 'placeholder', 'searchIcon', 'showCancelButton', 'spellcheck', 'type', 'value'] },] },
    ];
    /** @nocollapse */
    IonSearchbar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonSearchbar;
}());
proxyMethods(IonSearchbar, ['setFocus', 'getInputElement']);
proxyInputs(IonSearchbar, ['animated', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'disabled', 'mode', 'placeholder', 'searchIcon', 'showCancelButton', 'spellcheck', 'type', 'value']);
var IonSegment = /** @class */ (function () {
    function IonSegment(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionStyle']);
    }
    IonSegment.decorators = [
        { type: Component, args: [{ selector: 'ion-segment', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'disabled', 'mode', 'scrollable', 'value'] },] },
    ];
    /** @nocollapse */
    IonSegment.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonSegment;
}());
proxyInputs(IonSegment, ['color', 'disabled', 'mode', 'scrollable', 'value']);
var IonSegmentButton = /** @class */ (function () {
    function IonSegmentButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionSelect']);
    }
    IonSegmentButton.decorators = [
        { type: Component, args: [{ selector: 'ion-segment-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'disabled', 'layout', 'mode', 'type', 'value'] },] },
    ];
    /** @nocollapse */
    IonSegmentButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonSegmentButton;
}());
proxyInputs(IonSegmentButton, ['checked', 'disabled', 'layout', 'mode', 'type', 'value']);
var IonSelect = /** @class */ (function () {
    function IonSelect(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionCancel', 'ionFocus', 'ionBlur']);
    }
    IonSelect.decorators = [
        { type: Component, args: [{ selector: 'ion-select', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['cancelText', 'compareWith', 'disabled', 'interface', 'interfaceOptions', 'mode', 'multiple', 'name', 'okText', 'placeholder', 'selectedText', 'value'] },] },
    ];
    /** @nocollapse */
    IonSelect.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonSelect;
}());
proxyMethods(IonSelect, ['open']);
proxyInputs(IonSelect, ['cancelText', 'compareWith', 'disabled', 'interface', 'interfaceOptions', 'mode', 'multiple', 'name', 'okText', 'placeholder', 'selectedText', 'value']);
var IonSelectOption = /** @class */ (function () {
    function IonSelectOption(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonSelectOption.decorators = [
        { type: Component, args: [{ selector: 'ion-select-option', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'selected', 'value'] },] },
    ];
    /** @nocollapse */
    IonSelectOption.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonSelectOption;
}());
proxyInputs(IonSelectOption, ['disabled', 'selected', 'value']);
var IonSkeletonText = /** @class */ (function () {
    function IonSkeletonText(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonSkeletonText.decorators = [
        { type: Component, args: [{ selector: 'ion-skeleton-text', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['animated', 'width'] },] },
    ];
    /** @nocollapse */
    IonSkeletonText.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonSkeletonText;
}());
proxyInputs(IonSkeletonText, ['animated', 'width']);
var IonSlide = /** @class */ (function () {
    function IonSlide(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonSlide.decorators = [
        { type: Component, args: [{ selector: 'ion-slide', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
    ];
    /** @nocollapse */
    IonSlide.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonSlide;
}());
var IonSlides = /** @class */ (function () {
    function IonSlides(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionSlidesDidLoad', 'ionSlideTap', 'ionSlideDoubleTap', 'ionSlideWillChange', 'ionSlideDidChange', 'ionSlideNextStart', 'ionSlidePrevStart', 'ionSlideNextEnd', 'ionSlidePrevEnd', 'ionSlideTransitionStart', 'ionSlideTransitionEnd', 'ionSlideDrag', 'ionSlideReachStart', 'ionSlideReachEnd', 'ionSlideTouchStart', 'ionSlideTouchEnd']);
    }
    IonSlides.decorators = [
        { type: Component, args: [{ selector: 'ion-slides', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['mode', 'options', 'pager', 'scrollbar'] },] },
    ];
    /** @nocollapse */
    IonSlides.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonSlides;
}());
proxyMethods(IonSlides, ['update', 'updateAutoHeight', 'slideTo', 'slideNext', 'slidePrev', 'getActiveIndex', 'getPreviousIndex', 'length', 'isEnd', 'isBeginning', 'startAutoplay', 'stopAutoplay', 'lockSwipeToNext', 'lockSwipeToPrev', 'lockSwipes']);
proxyInputs(IonSlides, ['mode', 'options', 'pager', 'scrollbar']);
var IonSpinner = /** @class */ (function () {
    function IonSpinner(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonSpinner.decorators = [
        { type: Component, args: [{ selector: 'ion-spinner', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'duration', 'name', 'paused'] },] },
    ];
    /** @nocollapse */
    IonSpinner.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonSpinner;
}());
proxyInputs(IonSpinner, ['color', 'duration', 'name', 'paused']);
var IonSplitPane = /** @class */ (function () {
    function IonSplitPane(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionSplitPaneVisible']);
    }
    IonSplitPane.decorators = [
        { type: Component, args: [{ selector: 'ion-split-pane', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['contentId', 'disabled', 'when'] },] },
    ];
    /** @nocollapse */
    IonSplitPane.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonSplitPane;
}());
proxyInputs(IonSplitPane, ['contentId', 'disabled', 'when']);
var IonTabBar = /** @class */ (function () {
    function IonTabBar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonTabBar.decorators = [
        { type: Component, args: [{ selector: 'ion-tab-bar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'selectedTab', 'translucent'] },] },
    ];
    /** @nocollapse */
    IonTabBar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonTabBar;
}());
proxyInputs(IonTabBar, ['color', 'mode', 'selectedTab', 'translucent']);
var IonTabButton = /** @class */ (function () {
    function IonTabButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonTabButton.decorators = [
        { type: Component, args: [{ selector: 'ion-tab-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'download', 'href', 'layout', 'mode', 'rel', 'selected', 'tab', 'target'] },] },
    ];
    /** @nocollapse */
    IonTabButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonTabButton;
}());
proxyInputs(IonTabButton, ['disabled', 'download', 'href', 'layout', 'mode', 'rel', 'selected', 'tab', 'target']);
var IonText = /** @class */ (function () {
    function IonText(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonText.decorators = [
        { type: Component, args: [{ selector: 'ion-text', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
    ];
    /** @nocollapse */
    IonText.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonText;
}());
proxyInputs(IonText, ['color', 'mode']);
var IonTextarea = /** @class */ (function () {
    function IonTextarea(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionInput', 'ionBlur', 'ionFocus']);
    }
    IonTextarea.decorators = [
        { type: Component, args: [{ selector: 'ion-textarea', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['autoGrow', 'autocapitalize', 'autofocus', 'clearOnEdit', 'color', 'cols', 'debounce', 'disabled', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'readonly', 'required', 'rows', 'spellcheck', 'value', 'wrap'] },] },
    ];
    /** @nocollapse */
    IonTextarea.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonTextarea;
}());
proxyMethods(IonTextarea, ['setFocus', 'getInputElement']);
proxyInputs(IonTextarea, ['autoGrow', 'autocapitalize', 'autofocus', 'clearOnEdit', 'color', 'cols', 'debounce', 'disabled', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'readonly', 'required', 'rows', 'spellcheck', 'value', 'wrap']);
var IonThumbnail = /** @class */ (function () {
    function IonThumbnail(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonThumbnail.decorators = [
        { type: Component, args: [{ selector: 'ion-thumbnail', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' },] },
    ];
    /** @nocollapse */
    IonThumbnail.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonThumbnail;
}());
var IonTitle = /** @class */ (function () {
    function IonTitle(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonTitle.decorators = [
        { type: Component, args: [{ selector: 'ion-title', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color'] },] },
    ];
    /** @nocollapse */
    IonTitle.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonTitle;
}());
proxyInputs(IonTitle, ['color']);
var IonToggle = /** @class */ (function () {
    function IonToggle(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
    }
    IonToggle.decorators = [
        { type: Component, args: [{ selector: 'ion-toggle', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'color', 'disabled', 'mode', 'name', 'value'] },] },
    ];
    /** @nocollapse */
    IonToggle.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonToggle;
}());
proxyInputs(IonToggle, ['checked', 'color', 'disabled', 'mode', 'name', 'value']);
var IonToolbar = /** @class */ (function () {
    function IonToolbar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonToolbar.decorators = [
        { type: Component, args: [{ selector: 'ion-toolbar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
    ];
    /** @nocollapse */
    IonToolbar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    return IonToolbar;
}());
proxyInputs(IonToolbar, ['color', 'mode']);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Config = /** @class */ (function () {
    function Config() {
    }
    /**
     * @param {?} key
     * @param {?=} fallback
     * @return {?}
     */
    Config.prototype.get = /**
     * @param {?} key
     * @param {?=} fallback
     * @return {?}
     */
    function (key, fallback) {
        /** @type {?} */
        var c = getConfig();
        if (c) {
            return c.get(key, fallback);
        }
        return null;
    };
    /**
     * @param {?} key
     * @param {?=} fallback
     * @return {?}
     */
    Config.prototype.getBoolean = /**
     * @param {?} key
     * @param {?=} fallback
     * @return {?}
     */
    function (key, fallback) {
        /** @type {?} */
        var c = getConfig();
        if (c) {
            return c.getBoolean(key, fallback);
        }
        return false;
    };
    /**
     * @param {?} key
     * @param {?=} fallback
     * @return {?}
     */
    Config.prototype.getNumber = /**
     * @param {?} key
     * @param {?=} fallback
     * @return {?}
     */
    function (key, fallback) {
        /** @type {?} */
        var c = getConfig();
        if (c) {
            return c.getNumber(key, fallback);
        }
        return 0;
    };
    /**
     * @param {?} key
     * @param {?=} value
     * @return {?}
     */
    Config.prototype.set = /**
     * @param {?} key
     * @param {?=} value
     * @return {?}
     */
    function (key, value) {
        /** @type {?} */
        var c = getConfig();
        if (c) {
            c.set(key, value);
        }
    };
    Config.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */ Config.ngInjectableDef = defineInjectable({ factory: function Config_Factory() { return new Config(); }, token: Config, providedIn: "root" });
    return Config;
}());
/** @type {?} */
var ConfigToken = new InjectionToken('USERCONFIG');
/**
 * @return {?}
 */
function getConfig() {
    if (typeof ((/** @type {?} */ (window))) !== 'undefined') {
        /** @type {?} */
        var Ionic = ((/** @type {?} */ (window))).Ionic;
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
var  /**
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
NavParams = /** @class */ (function () {
    function NavParams(data) {
        if (data === void 0) { data = {}; }
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
     * @param param Which param you want to look up
     */
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
    NavParams.prototype.get = /**
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
    function (param) {
        return this.data[param];
    };
    return NavParams;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularDelegate = /** @class */ (function () {
    function AngularDelegate(zone, appRef) {
        this.zone = zone;
        this.appRef = appRef;
    }
    /**
     * @param {?} resolver
     * @param {?} injector
     * @param {?=} location
     * @return {?}
     */
    AngularDelegate.prototype.create = /**
     * @param {?} resolver
     * @param {?} injector
     * @param {?=} location
     * @return {?}
     */
    function (resolver, injector, location) {
        return new AngularFrameworkDelegate(resolver, injector, location, this.appRef, this.zone);
    };
    AngularDelegate.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AngularDelegate.ctorParameters = function () { return [
        { type: NgZone },
        { type: ApplicationRef }
    ]; };
    return AngularDelegate;
}());
var AngularFrameworkDelegate = /** @class */ (function () {
    function AngularFrameworkDelegate(resolver, injector, location, appRef, zone) {
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
    AngularFrameworkDelegate.prototype.attachViewToDom = /**
     * @param {?} container
     * @param {?} component
     * @param {?=} params
     * @param {?=} cssClasses
     * @return {?}
     */
    function (container, component, params, cssClasses) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this.zone.run((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var el = attachView(_this.resolver, _this.injector, _this.location, _this.appRef, _this.elRefMap, _this.elEventsMap, container, component, params, cssClasses);
                resolve(el);
            }));
        }));
    };
    /**
     * @param {?} _container
     * @param {?} component
     * @return {?}
     */
    AngularFrameworkDelegate.prototype.removeViewFromDom = /**
     * @param {?} _container
     * @param {?} component
     * @return {?}
     */
    function (_container, component) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this.zone.run((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var componentRef = _this.elRefMap.get(component);
                if (componentRef) {
                    componentRef.destroy();
                    _this.elRefMap.delete(component);
                    /** @type {?} */
                    var unbindEvents = _this.elEventsMap.get(component);
                    if (unbindEvents) {
                        unbindEvents();
                        _this.elEventsMap.delete(component);
                    }
                }
                resolve();
            }));
        }));
    };
    return AngularFrameworkDelegate;
}());
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
    var factory = resolver.resolveComponentFactory(component);
    /** @type {?} */
    var childInjector = Injector.create({
        providers: getProviders(params),
        parent: injector
    });
    /** @type {?} */
    var componentRef = (location)
        ? location.createComponent(factory, location.length, childInjector)
        : factory.create(childInjector);
    /** @type {?} */
    var instance = componentRef.instance;
    /** @type {?} */
    var hostElement = componentRef.location.nativeElement;
    if (params) {
        Object.assign(instance, params);
    }
    if (cssClasses) {
        for (var _i = 0, cssClasses_1 = cssClasses; _i < cssClasses_1.length; _i++) {
            var clazz = cssClasses_1[_i];
            hostElement.classList.add(clazz);
        }
    }
    /** @type {?} */
    var unbindEvents = bindLifecycleEvents(instance, hostElement);
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
var LIFECYCLES = [
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
    var unregisters = LIFECYCLES
        .filter((/**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) { return typeof instance[eventName] === 'function'; }))
        .map((/**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) {
        /** @type {?} */
        var handler = (/**
         * @param {?} ev
         * @return {?}
         */
        function (ev) { return instance[eventName](ev.detail); });
        element.addEventListener(eventName, handler);
        return (/**
         * @return {?}
         */
        function () { return element.removeEventListener(eventName, handler); });
    }));
    return (/**
     * @return {?}
     */
    function () { return unregisters.forEach((/**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { return fn(); })); });
}
/** @type {?} */
var NavParamsToken = new InjectionToken('NavParamsToken');
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
    function (v) { return v.stackId !== view.stackId; }));
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
    var index = views.indexOf(view);
    if (index >= 0) {
        views = views.filter((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.stackId !== view.stackId || v.id <= view.id; }));
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
    var index = views.indexOf(view);
    if (index >= 0) {
        return views.filter((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.stackId !== view.stackId || v.id <= view.id; }));
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
    var urlTree = router.createUrlTree(['.'], { relativeTo: activatedRoute });
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
    var segments = toSegments(url);
    for (var i = 0; i < segments.length; i++) {
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
    function (s) { return s.trim(); }))
        .filter((/**
     * @param {?} s
     * @return {?}
     */
    function (s) { return s !== ''; }));
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
var StackController = /** @class */ (function () {
    function StackController(tabsPrefix, containerEl, router, navCtrl, zone, location) {
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
    StackController.prototype.createView = /**
     * @param {?} ref
     * @param {?} activatedRoute
     * @return {?}
     */
    function (ref, activatedRoute) {
        /** @type {?} */
        var url = getUrl(this.router, activatedRoute);
        /** @type {?} */
        var element = (/** @type {?} */ ((ref && ref.location && ref.location.nativeElement)));
        /** @type {?} */
        var unlistenEvents = bindLifecycleEvents(ref.instance, element);
        return {
            id: this.nextId++,
            stackId: computeStackId(this.tabsPrefix, url),
            unlistenEvents: unlistenEvents,
            element: element,
            ref: ref,
            url: url,
        };
    };
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    StackController.prototype.getExistingView = /**
     * @param {?} activatedRoute
     * @return {?}
     */
    function (activatedRoute) {
        /** @type {?} */
        var activatedUrlKey = getUrl(this.router, activatedRoute);
        return this.views.find((/**
         * @param {?} vw
         * @return {?}
         */
        function (vw) { return vw.url === activatedUrlKey; }));
    };
    /**
     * @param {?} enteringView
     * @return {?}
     */
    StackController.prototype.setActive = /**
     * @param {?} enteringView
     * @return {?}
     */
    function (enteringView) {
        var _this = this;
        var _a = this.navCtrl.consumeTransition(), direction = _a.direction, animation = _a.animation;
        /** @type {?} */
        var leavingView = this.activeView;
        /** @type {?} */
        var tabSwitch = isTabSwitch(enteringView, leavingView);
        if (tabSwitch) {
            direction = 'back';
            animation = undefined;
        }
        /** @type {?} */
        var viewsSnapshot = this.views.slice();
        /** @type {?} */
        var currentNavigation;
        /** @type {?} */
        var router = ((/** @type {?} */ (this.router)));
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
        var views = this.insertView(enteringView, direction);
        return this.wait((/**
         * @return {?}
         */
        function () {
            return _this.transition(enteringView, leavingView, animation, _this.canGoBack(1), false)
                .then((/**
             * @return {?}
             */
            function () { return cleanupAsync(enteringView, views, viewsSnapshot, _this.location); }))
                .then((/**
             * @return {?}
             */
            function () { return ({
                enteringView: enteringView,
                direction: direction,
                animation: animation,
                tabSwitch: tabSwitch
            }); }));
        }));
    };
    /**
     * @param {?} deep
     * @param {?=} stackId
     * @return {?}
     */
    StackController.prototype.canGoBack = /**
     * @param {?} deep
     * @param {?=} stackId
     * @return {?}
     */
    function (deep, stackId) {
        if (stackId === void 0) { stackId = this.getActiveStackId(); }
        return this.getStack(stackId).length > deep;
    };
    /**
     * @param {?} deep
     * @param {?=} stackId
     * @return {?}
     */
    StackController.prototype.pop = /**
     * @param {?} deep
     * @param {?=} stackId
     * @return {?}
     */
    function (deep, stackId) {
        var _this = this;
        if (stackId === void 0) { stackId = this.getActiveStackId(); }
        return this.zone.run((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var views = _this.getStack(stackId);
            if (views.length <= deep) {
                return Promise.resolve(false);
            }
            /** @type {?} */
            var view = views[views.length - deep - 1];
            /** @type {?} */
            var url = view.url;
            /** @type {?} */
            var viewSavedData = view.savedData;
            if (viewSavedData) {
                /** @type {?} */
                var primaryOutlet = viewSavedData.get('primary');
                if (primaryOutlet &&
                    primaryOutlet.route &&
                    primaryOutlet.route._routerState &&
                    primaryOutlet.route._routerState.snapshot &&
                    primaryOutlet.route._routerState.snapshot.url) {
                    url = primaryOutlet.route._routerState.snapshot.url;
                }
            }
            return _this.navCtrl.navigateBack(url, view.savedExtras).then((/**
             * @return {?}
             */
            function () { return true; }));
        }));
    };
    /**
     * @return {?}
     */
    StackController.prototype.startBackTransition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var leavingView = this.activeView;
        if (leavingView) {
            /** @type {?} */
            var views = this.getStack(leavingView.stackId);
            /** @type {?} */
            var enteringView_1 = views[views.length - 2];
            return this.wait((/**
             * @return {?}
             */
            function () {
                return _this.transition(enteringView_1, // entering view
                leavingView, // leaving view
                'back', true, true);
            }));
        }
        return Promise.resolve();
    };
    /**
     * @param {?} shouldComplete
     * @return {?}
     */
    StackController.prototype.endBackTransition = /**
     * @param {?} shouldComplete
     * @return {?}
     */
    function (shouldComplete) {
        if (shouldComplete) {
            this.skipTransition = true;
            this.pop(1);
        }
    };
    /**
     * @param {?=} stackId
     * @return {?}
     */
    StackController.prototype.getLastUrl = /**
     * @param {?=} stackId
     * @return {?}
     */
    function (stackId) {
        /** @type {?} */
        var views = this.getStack(stackId);
        return views.length > 0 ? views[views.length - 1] : undefined;
    };
    /**
     * @return {?}
     */
    StackController.prototype.getActiveStackId = /**
     * @return {?}
     */
    function () {
        return this.activeView ? this.activeView.stackId : undefined;
    };
    /**
     * @return {?}
     */
    StackController.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.containerEl = (/** @type {?} */ (undefined));
        this.views.forEach(destroyView);
        this.activeView = undefined;
        this.views = [];
    };
    /**
     * @private
     * @param {?} stackId
     * @return {?}
     */
    StackController.prototype.getStack = /**
     * @private
     * @param {?} stackId
     * @return {?}
     */
    function (stackId) {
        return this.views.filter((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.stackId === stackId; }));
    };
    /**
     * @private
     * @param {?} enteringView
     * @param {?} direction
     * @return {?}
     */
    StackController.prototype.insertView = /**
     * @private
     * @param {?} enteringView
     * @param {?} direction
     * @return {?}
     */
    function (enteringView, direction) {
        this.activeView = enteringView;
        this.views = insertView(this.views, enteringView, direction);
        return this.views.slice();
    };
    /**
     * @private
     * @param {?} enteringView
     * @param {?} leavingView
     * @param {?} direction
     * @param {?} showGoBack
     * @param {?} progressAnimation
     * @return {?}
     */
    StackController.prototype.transition = /**
     * @private
     * @param {?} enteringView
     * @param {?} leavingView
     * @param {?} direction
     * @param {?} showGoBack
     * @param {?} progressAnimation
     * @return {?}
     */
    function (enteringView, leavingView, direction, showGoBack, progressAnimation) {
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
        var enteringEl = enteringView ? enteringView.element : undefined;
        /** @type {?} */
        var leavingEl = leavingView ? leavingView.element : undefined;
        /** @type {?} */
        var containerEl = this.containerEl;
        if (enteringEl && enteringEl !== leavingEl) {
            enteringEl.classList.add('ion-page', 'ion-page-invisible');
            if (enteringEl.parentElement !== containerEl) {
                containerEl.appendChild(enteringEl);
            }
            return this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return containerEl.commit(enteringEl, leavingEl, {
                deepWait: true,
                duration: direction === undefined ? 0 : undefined,
                direction: direction,
                showGoBack: showGoBack,
                progressAnimation: progressAnimation
            }); }));
        }
        return Promise.resolve(false);
    };
    /**
     * @private
     * @template T
     * @param {?} task
     * @return {?}
     */
    StackController.prototype.wait = /**
     * @private
     * @template T
     * @param {?} task
     * @return {?}
     */
    function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var promise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.runningTask !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.runningTask];
                    case 1:
                        _a.sent();
                        this.runningTask = undefined;
                        _a.label = 2;
                    case 2:
                        promise = this.runningTask = task();
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    return StackController;
}());
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
    function (resolve) {
        requestAnimationFrame((/**
         * @return {?}
         */
        function () {
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
    function (view) { return !views.includes(view); }))
        .forEach(destroyView);
    views.forEach((/**
     * @param {?} view
     * @return {?}
     */
    function (view) {
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
        var locationWithoutParams = location.path().split('?')[0];
        /** @type {?} */
        var locationWithoutFragment = locationWithoutParams.split('#')[0];
        if (view !== activeRoute && view.url !== locationWithoutFragment) {
            /** @type {?} */
            var element = view.element;
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
var IonRouterOutlet = /** @class */ (function () {
    function IonRouterOutlet(parentContexts, location, resolver, name, tabs, config, navCtrl, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
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
    Object.defineProperty(IonRouterOutlet.prototype, "animated", {
        set: /**
         * @param {?} animated
         * @return {?}
         */
        function (animated) {
            this.nativeEl.animated = animated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonRouterOutlet.prototype, "swipeGesture", {
        set: /**
         * @param {?} swipe
         * @return {?}
         */
        function (swipe) {
            var _this = this;
            this._swipeGesture = swipe;
            this.nativeEl.swipeHandler = swipe ? {
                canStart: (/**
                 * @return {?}
                 */
                function () { return _this.stackCtrl.canGoBack(1); }),
                onStart: (/**
                 * @return {?}
                 */
                function () { return _this.stackCtrl.startBackTransition(); }),
                onEnd: (/**
                 * @param {?} shouldContinue
                 * @return {?}
                 */
                function (shouldContinue) { return _this.stackCtrl.endBackTransition(shouldContinue); })
            } : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IonRouterOutlet.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stackCtrl.destroy();
    };
    /**
     * @return {?}
     */
    IonRouterOutlet.prototype.getContext = /**
     * @return {?}
     */
    function () {
        return this.parentContexts.getContext(this.name);
    };
    /**
     * @return {?}
     */
    IonRouterOutlet.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.activated) {
            // If the outlet was not instantiated at the time the route got activated we need to populate
            // the outlet when it is initialized (ie inside a NgIf)
            /** @type {?} */
            var context = this.getContext();
            if (context && context.route) {
                this.activateWith(context.route, context.resolver || null);
            }
        }
        if (((/** @type {?} */ (this.nativeEl))).componentOnReady) {
            this.nativeEl.componentOnReady().then((/**
             * @return {?}
             */
            function () {
                if (_this._swipeGesture === undefined) {
                    _this.swipeGesture = _this.config.getBoolean('swipeBackEnabled', ((/** @type {?} */ (_this.nativeEl))).mode === 'ios');
                }
            }));
        }
    };
    Object.defineProperty(IonRouterOutlet.prototype, "isActivated", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.activated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonRouterOutlet.prototype, "component", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.activated) {
                throw new Error('Outlet is not activated');
            }
            return this.activated.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonRouterOutlet.prototype, "activatedRoute", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.activated) {
                throw new Error('Outlet is not activated');
            }
            return (/** @type {?} */ (this._activatedRoute));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonRouterOutlet.prototype, "activatedRouteData", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._activatedRoute) {
                return this._activatedRoute.snapshot.data;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     */
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     * @return {?}
     */
    IonRouterOutlet.prototype.detach = /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     * @return {?}
     */
    function () {
        throw new Error('incompatible reuse strategy');
    };
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     */
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     * @param {?} _ref
     * @param {?} _activatedRoute
     * @return {?}
     */
    IonRouterOutlet.prototype.attach = /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     * @param {?} _ref
     * @param {?} _activatedRoute
     * @return {?}
     */
    function (_ref, _activatedRoute) {
        throw new Error('incompatible reuse strategy');
    };
    /**
     * @return {?}
     */
    IonRouterOutlet.prototype.deactivate = /**
     * @return {?}
     */
    function () {
        if (this.activated) {
            if (this.activatedView) {
                this.activatedView.savedData = new Map((/** @type {?} */ (this.getContext())).children['contexts']);
                /**
                 * Ensure we are saving the NavigationExtras
                 * data otherwise it will be lost
                 */
                this.activatedView.savedExtras = {};
                /** @type {?} */
                var context = (/** @type {?} */ (this.getContext()));
                if (context.route) {
                    /** @type {?} */
                    var contextSnapshot = context.route.snapshot;
                    this.activatedView.savedExtras.queryParams = contextSnapshot.queryParams;
                    this.activatedView.savedExtras.fragment = contextSnapshot.fragment;
                }
            }
            /** @type {?} */
            var c = this.component;
            this.activatedView = null;
            this.activated = null;
            this._activatedRoute = null;
            this.deactivateEvents.emit(c);
        }
    };
    /**
     * @param {?} activatedRoute
     * @param {?} resolver
     * @return {?}
     */
    IonRouterOutlet.prototype.activateWith = /**
     * @param {?} activatedRoute
     * @param {?} resolver
     * @return {?}
     */
    function (activatedRoute, resolver) {
        var _this = this;
        if (this.isActivated) {
            throw new Error('Cannot activate an already activated outlet');
        }
        this._activatedRoute = activatedRoute;
        /** @type {?} */
        var cmpRef;
        /** @type {?} */
        var enteringView = this.stackCtrl.getExistingView(activatedRoute);
        if (enteringView) {
            cmpRef = this.activated = enteringView.ref;
            /** @type {?} */
            var saved = enteringView.savedData;
            if (saved) {
                // self-restore
                /** @type {?} */
                var context = (/** @type {?} */ (this.getContext()));
                context.children['contexts'] = saved;
            }
            // Updated activated route proxy for this component
            this.updateActivatedRouteProxy(cmpRef.instance, activatedRoute);
        }
        else {
            /** @type {?} */
            var snapshot = ((/** @type {?} */ (activatedRoute)))._futureSnapshot;
            /** @type {?} */
            var component = (/** @type {?} */ ((/** @type {?} */ (snapshot.routeConfig)).component));
            resolver = resolver || this.resolver;
            /** @type {?} */
            var factory = resolver.resolveComponentFactory(component);
            /** @type {?} */
            var childContexts = this.parentContexts.getOrCreateContext(this.name).children;
            // We create an activated route proxy object that will maintain future updates for this component
            // over its lifecycle in the stack.
            /** @type {?} */
            var component$ = new BehaviorSubject(null);
            /** @type {?} */
            var activatedRouteProxy = this.createActivatedRouteProxy(component$, activatedRoute);
            /** @type {?} */
            var injector = new OutletInjector(activatedRouteProxy, childContexts, this.location.injector);
            cmpRef = this.activated = this.location.createComponent(factory, this.location.length, injector);
            // Once the component is created we can push it to our local subject supplied to the proxy
            component$.next(cmpRef.instance);
            // Calling `markForCheck` to make sure we will run the change detection when the
            // `RouterOutlet` is inside a `ChangeDetectionStrategy.OnPush` component.
            enteringView = this.stackCtrl.createView(this.activated, activatedRoute);
            enteringView.ref.changeDetectorRef.detectChanges();
            // Store references to the proxy by component
            this.proxyMap.set(cmpRef.instance, activatedRouteProxy);
            this.currentActivatedRoute$.next({ component: cmpRef.instance, activatedRoute: activatedRoute });
        }
        this.activatedView = enteringView;
        this.stackCtrl.setActive(enteringView).then((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.navCtrl.setTopOutlet(_this);
            _this.activateEvents.emit(cmpRef.instance);
            _this.stackEvents.emit(data);
        }));
    };
    /**
     * Returns `true` if there are pages in the stack to go back.
     */
    /**
     * Returns `true` if there are pages in the stack to go back.
     * @param {?=} deep
     * @param {?=} stackId
     * @return {?}
     */
    IonRouterOutlet.prototype.canGoBack = /**
     * Returns `true` if there are pages in the stack to go back.
     * @param {?=} deep
     * @param {?=} stackId
     * @return {?}
     */
    function (deep, stackId) {
        if (deep === void 0) { deep = 1; }
        return this.stackCtrl.canGoBack(deep, stackId);
    };
    /**
     * Resolves to `true` if it the outlet was able to sucessfully pop the last N pages.
     */
    /**
     * Resolves to `true` if it the outlet was able to sucessfully pop the last N pages.
     * @param {?=} deep
     * @param {?=} stackId
     * @return {?}
     */
    IonRouterOutlet.prototype.pop = /**
     * Resolves to `true` if it the outlet was able to sucessfully pop the last N pages.
     * @param {?=} deep
     * @param {?=} stackId
     * @return {?}
     */
    function (deep, stackId) {
        if (deep === void 0) { deep = 1; }
        return this.stackCtrl.pop(deep, stackId);
    };
    /**
     * Returns the URL of the active page of each stack.
     */
    /**
     * Returns the URL of the active page of each stack.
     * @param {?=} stackId
     * @return {?}
     */
    IonRouterOutlet.prototype.getLastUrl = /**
     * Returns the URL of the active page of each stack.
     * @param {?=} stackId
     * @return {?}
     */
    function (stackId) {
        /** @type {?} */
        var active = this.stackCtrl.getLastUrl(stackId);
        return active ? active.url : undefined;
    };
    /**
     * Returns the active stack ID. In the context of ion-tabs, it means the active tab.
     */
    /**
     * Returns the active stack ID. In the context of ion-tabs, it means the active tab.
     * @return {?}
     */
    IonRouterOutlet.prototype.getActiveStackId = /**
     * Returns the active stack ID. In the context of ion-tabs, it means the active tab.
     * @return {?}
     */
    function () {
        return this.stackCtrl.getActiveStackId();
    };
    /**
     * Since the activated route can change over the life time of a component in an ion router outlet, we create
     * a proxy so that we can update the values over time as a user navigates back to components already in the stack.
     */
    /**
     * Since the activated route can change over the life time of a component in an ion router outlet, we create
     * a proxy so that we can update the values over time as a user navigates back to components already in the stack.
     * @private
     * @param {?} component$
     * @param {?} activatedRoute
     * @return {?}
     */
    IonRouterOutlet.prototype.createActivatedRouteProxy = /**
     * Since the activated route can change over the life time of a component in an ion router outlet, we create
     * a proxy so that we can update the values over time as a user navigates back to components already in the stack.
     * @private
     * @param {?} component$
     * @param {?} activatedRoute
     * @return {?}
     */
    function (component$, activatedRoute) {
        /** @type {?} */
        var proxy = new ActivatedRoute();
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
    };
    /**
     * Create a wrapped observable that will switch to the latest activated route matched by the given component
     */
    /**
     * Create a wrapped observable that will switch to the latest activated route matched by the given component
     * @private
     * @param {?} component$
     * @param {?} path
     * @return {?}
     */
    IonRouterOutlet.prototype.proxyObservable = /**
     * Create a wrapped observable that will switch to the latest activated route matched by the given component
     * @private
     * @param {?} component$
     * @param {?} path
     * @return {?}
     */
    function (component$, path) {
        var _this = this;
        return component$.pipe(
        // First wait until the component instance is pushed
        filter((/**
         * @param {?} component
         * @return {?}
         */
        function (component) { return !!component; })), switchMap((/**
         * @param {?} component
         * @return {?}
         */
        function (component) {
            return _this.currentActivatedRoute$.pipe(filter((/**
             * @param {?} current
             * @return {?}
             */
            function (current) { return current !== null && current.component === component; })), switchMap((/**
             * @param {?} current
             * @return {?}
             */
            function (current) { return current && ((/** @type {?} */ (current.activatedRoute)))[path]; })), distinctUntilChanged());
        })));
    };
    /**
     * Updates the activated route proxy for the given component to the new incoming router state
     */
    /**
     * Updates the activated route proxy for the given component to the new incoming router state
     * @private
     * @param {?} component
     * @param {?} activatedRoute
     * @return {?}
     */
    IonRouterOutlet.prototype.updateActivatedRouteProxy = /**
     * Updates the activated route proxy for the given component to the new incoming router state
     * @private
     * @param {?} component
     * @param {?} activatedRoute
     * @return {?}
     */
    function (component, activatedRoute) {
        /** @type {?} */
        var proxy = this.proxyMap.get(component);
        if (!proxy) {
            throw new Error("Could not find activated route proxy for view");
        }
        ((/** @type {?} */ (proxy)))._futureSnapshot = ((/** @type {?} */ (activatedRoute)))._futureSnapshot;
        ((/** @type {?} */ (proxy)))._routerState = ((/** @type {?} */ (activatedRoute)))._routerState;
        proxy.snapshot = activatedRoute.snapshot;
        proxy.outlet = activatedRoute.outlet;
        proxy.component = activatedRoute.component;
        this.currentActivatedRoute$.next({ component: component, activatedRoute: activatedRoute });
    };
    IonRouterOutlet.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-router-outlet',
                    exportAs: 'outlet',
                    inputs: ['animated', 'swipeGesture']
                },] },
    ];
    /** @nocollapse */
    IonRouterOutlet.ctorParameters = function () { return [
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
    ]; };
    IonRouterOutlet.propDecorators = {
        stackEvents: [{ type: Output }],
        activateEvents: [{ type: Output, args: ['activate',] }],
        deactivateEvents: [{ type: Output, args: ['deactivate',] }]
    };
    return IonRouterOutlet;
}());
var OutletInjector = /** @class */ (function () {
    function OutletInjector(route, childContexts, parent) {
        this.route = route;
        this.childContexts = childContexts;
        this.parent = parent;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    OutletInjector.prototype.get = /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    function (token, notFoundValue) {
        if (token === ActivatedRoute) {
            return this.route;
        }
        if (token === ChildrenOutletContexts) {
            return this.childContexts;
        }
        // tslint:disable-next-line
        return this.parent.get(token, notFoundValue);
    };
    return OutletInjector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonTabs = /** @class */ (function () {
    function IonTabs(navCtrl) {
        this.navCtrl = navCtrl;
        this.ionTabsWillChange = new EventEmitter();
        this.ionTabsDidChange = new EventEmitter();
    }
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} detail
     * @return {?}
     */
    IonTabs.prototype.onPageSelected = /**
     * \@internal
     * @param {?} detail
     * @return {?}
     */
    function (detail) {
        /** @type {?} */
        var stackId = detail.enteringView.stackId;
        if (detail.tabSwitch && stackId !== undefined) {
            if (this.tabBar) {
                this.tabBar.selectedTab = stackId;
            }
            this.ionTabsWillChange.emit({ tab: stackId });
            this.ionTabsDidChange.emit({ tab: stackId });
        }
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    IonTabs.prototype.select = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        /** @type {?} */
        var alreadySelected = this.outlet.getActiveStackId() === tab;
        /** @type {?} */
        var href = this.outlet.tabsPrefix + "/" + tab;
        /** @type {?} */
        var url = alreadySelected
            ? href
            : this.outlet.getLastUrl(tab) || href;
        return this.navCtrl.navigateRoot(url, {
            animated: true,
            animationDirection: 'back'
        });
    };
    /**
     * @return {?}
     */
    IonTabs.prototype.getSelected = /**
     * @return {?}
     */
    function () {
        return this.outlet.getActiveStackId();
    };
    IonTabs.decorators = [
        { type: Component, args: [{
                    selector: 'ion-tabs',
                    template: "\n    <ng-content select=\"[slot=top]\"></ng-content>\n    <div class=\"tabs-inner\">\n      <ion-router-outlet #outlet tabs=\"true\" (stackEvents)=\"onPageSelected($event)\"></ion-router-outlet>\n    </div>\n    <ng-content></ng-content>",
                    styles: ["\n    :host {\n      display: flex;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n\n      flex-direction: column;\n\n      width: 100%;\n      height: 100%;\n\n      contain: layout size style;\n      z-index: $z-index-page-container;\n    }\n    .tabs-inner {\n      position: relative;\n\n      flex: 1;\n\n      contain: layout size style;\n    }"
                    ]
                },] },
    ];
    /** @nocollapse */
    IonTabs.ctorParameters = function () { return [
        { type: NavController }
    ]; };
    IonTabs.propDecorators = {
        outlet: [{ type: ViewChild, args: ['outlet', { read: IonRouterOutlet },] }],
        tabBar: [{ type: ContentChild, args: [IonTabBar,] }],
        ionTabsWillChange: [{ type: Output }],
        ionTabsDidChange: [{ type: Output }],
        select: [{ type: HostListener, args: ['ionTabButtonClick', ['$event.detail.tab'],] }]
    };
    return IonTabs;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonBackButtonDelegate = /** @class */ (function () {
    function IonBackButtonDelegate(routerOutlet, navCtrl) {
        this.routerOutlet = routerOutlet;
        this.navCtrl = navCtrl;
    }
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} ev
     * @return {?}
     */
    IonBackButtonDelegate.prototype.onClick = /**
     * \@internal
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (this.routerOutlet && this.routerOutlet.canGoBack()) {
            this.routerOutlet.pop();
            ev.preventDefault();
        }
        else if (this.defaultHref != null) {
            this.navCtrl.navigateBack(this.defaultHref);
            ev.preventDefault();
        }
    };
    IonBackButtonDelegate.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-back-button',
                    inputs: ['defaultHref']
                },] },
    ];
    /** @nocollapse */
    IonBackButtonDelegate.ctorParameters = function () { return [
        { type: IonRouterOutlet, decorators: [{ type: Optional }] },
        { type: NavController }
    ]; };
    IonBackButtonDelegate.propDecorators = {
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return IonBackButtonDelegate;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavDelegate = /** @class */ (function () {
    function NavDelegate(ref, resolver, injector, angularDelegate, location) {
        ref.nativeElement.delegate = angularDelegate.create(resolver, injector, location);
    }
    NavDelegate.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-nav',
                },] },
    ];
    /** @nocollapse */
    NavDelegate.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ComponentFactoryResolver },
        { type: Injector },
        { type: AngularDelegate },
        { type: ViewContainerRef }
    ]; };
    return NavDelegate;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RouterLinkDelegate = /** @class */ (function () {
    function RouterLinkDelegate(locationStrategy, navCtrl, elementRef, router, routerLink) {
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
    RouterLinkDelegate.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateTargetUrlAndHref();
    };
    /**
     * @return {?}
     */
    RouterLinkDelegate.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateTargetUrlAndHref();
    };
    /**
     * @return {?}
     */
    RouterLinkDelegate.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * @private
     * @return {?}
     */
    RouterLinkDelegate.prototype.updateTargetUrlAndHref = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.routerLink) {
            /** @type {?} */
            var href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
            this.elementRef.nativeElement.href = href;
        }
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} ev
     * @return {?}
     */
    RouterLinkDelegate.prototype.onClick = /**
     * \@internal
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        this.navCtrl.setDirection(this.routerDirection);
        ev.preventDefault();
    };
    RouterLinkDelegate.decorators = [
        { type: Directive, args: [{
                    selector: '[routerLink]',
                    inputs: ['routerDirection']
                },] },
    ];
    /** @nocollapse */
    RouterLinkDelegate.ctorParameters = function () { return [
        { type: LocationStrategy },
        { type: NavController },
        { type: ElementRef },
        { type: Router },
        { type: RouterLink, decorators: [{ type: Optional }] }
    ]; };
    RouterLinkDelegate.propDecorators = {
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return RouterLinkDelegate;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @hidden
 */
var VirtualFooter = /** @class */ (function () {
    function VirtualFooter(templateRef) {
        this.templateRef = templateRef;
    }
    VirtualFooter.decorators = [
        { type: Directive, args: [{ selector: '[virtualFooter]' },] },
    ];
    /** @nocollapse */
    VirtualFooter.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return VirtualFooter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @hidden
 */
var VirtualHeader = /** @class */ (function () {
    function VirtualHeader(templateRef) {
        this.templateRef = templateRef;
    }
    VirtualHeader.decorators = [
        { type: Directive, args: [{ selector: '[virtualHeader]' },] },
    ];
    /** @nocollapse */
    VirtualHeader.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return VirtualHeader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @hidden
 */
var VirtualItem = /** @class */ (function () {
    function VirtualItem(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    VirtualItem.decorators = [
        { type: Directive, args: [{ selector: '[virtualItem]' },] },
    ];
    /** @nocollapse */
    VirtualItem.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return VirtualItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonVirtualScroll = /** @class */ (function () {
    function IonVirtualScroll(z, iterableDiffers, elementRef) {
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
    IonVirtualScroll.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.trackBy && 'items' in changes) {
            // React on virtualScroll changes only once all inputs have been initialized
            /** @type {?} */
            var value = changes['items'].currentValue;
            if (this.differ === undefined && value != null) {
                try {
                    this.differ = this.iterableDiffers.find(value).create(this.trackBy);
                }
                catch (e) {
                    throw new Error("Cannot find a differ supporting object '" + value + "'. VirtualScroll only supports binding to Iterables such as Arrays.");
                }
            }
        }
    };
    /**
     * @return {?}
     */
    IonVirtualScroll.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        // and if there actually are changes
        /** @type {?} */
        var changes = this.differ !== undefined && this.items ? this.differ.diff(this.items) : null;
        if (changes === null) {
            return;
        }
        // TODO: optimize
        this.checkRange(0);
    };
    /**
     * @private
     * @param {?} el
     * @param {?} cell
     * @param {?} index
     * @return {?}
     */
    IonVirtualScroll.prototype.nodeRender = /**
     * @private
     * @param {?} el
     * @param {?} cell
     * @param {?} index
     * @return {?}
     */
    function (el, cell, index) {
        var _this = this;
        return this.z.run((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var node;
            if (!el) {
                node = _this.itmTmp.viewContainer.createEmbeddedView(_this.getComponent(cell.type), { $implicit: cell.value, index: index }, index);
                el = getElement(node);
                _this.refMap.set(el, node);
            }
            else {
                node = (/** @type {?} */ (_this.refMap.get(el)));
                /** @type {?} */
                var ctx = node.context;
                ctx.$implicit = cell.value;
                ctx.index = cell.index;
            }
            // run sync change detections
            node.detectChanges();
            return el;
        }));
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    IonVirtualScroll.prototype.getComponent = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        switch (type) {
            case 'item': return this.itmTmp.templateRef;
            case 'header': return this.hdrTmp.templateRef;
            case 'footer': return this.ftrTmp.templateRef;
        }
        throw new Error('template for virtual item was not provided');
    };
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
    IonVirtualScroll.ctorParameters = function () { return [
        { type: NgZone },
        { type: IterableDiffers },
        { type: ElementRef }
    ]; };
    IonVirtualScroll.propDecorators = {
        itmTmp: [{ type: ContentChild, args: [VirtualItem,] }],
        hdrTmp: [{ type: ContentChild, args: [VirtualHeader,] }],
        ftrTmp: [{ type: ContentChild, args: [VirtualFooter,] }]
    };
    return IonVirtualScroll;
}());
/**
 * @param {?} view
 * @return {?}
 */
function getElement(view) {
    /** @type {?} */
    var rootNodes = view.rootNodes;
    for (var i = 0; i < rootNodes.length; i++) {
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
var  /**
 * @template Opts, Overlay
 */
OverlayBaseController = /** @class */ (function () {
    function OverlayBaseController(ctrl) {
        this.ctrl = ctrl;
    }
    /**
     * Creates a new overlay
     */
    /**
     * Creates a new overlay
     * @param {?=} opts
     * @return {?}
     */
    OverlayBaseController.prototype.create = /**
     * Creates a new overlay
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        // TODO: next major release opts is not optional
        return this.ctrl.create((/** @type {?} */ ((opts || {}))));
    };
    /**
     * When `id` is not provided, it dismisses the top overlay.
     */
    /**
     * When `id` is not provided, it dismisses the top overlay.
     * @param {?=} data
     * @param {?=} role
     * @param {?=} id
     * @return {?}
     */
    OverlayBaseController.prototype.dismiss = /**
     * When `id` is not provided, it dismisses the top overlay.
     * @param {?=} data
     * @param {?=} role
     * @param {?=} id
     * @return {?}
     */
    function (data, role, id) {
        return this.ctrl.dismiss(data, role, id);
    };
    /**
     * Returns the top overlay.
     */
    /**
     * Returns the top overlay.
     * @return {?}
     */
    OverlayBaseController.prototype.getTop = /**
     * Returns the top overlay.
     * @return {?}
     */
    function () {
        return this.ctrl.getTop();
    };
    return OverlayBaseController;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ActionSheetController = /** @class */ (function (_super) {
    __extends(ActionSheetController, _super);
    function ActionSheetController() {
        return _super.call(this, actionSheetController) || this;
    }
    ActionSheetController.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] },
    ];
    /** @nocollapse */
    ActionSheetController.ctorParameters = function () { return []; };
    /** @nocollapse */ ActionSheetController.ngInjectableDef = defineInjectable({ factory: function ActionSheetController_Factory() { return new ActionSheetController(); }, token: ActionSheetController, providedIn: "root" });
    return ActionSheetController;
}(OverlayBaseController));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertController = /** @class */ (function (_super) {
    __extends(AlertController, _super);
    function AlertController() {
        return _super.call(this, alertController) || this;
    }
    AlertController.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] },
    ];
    /** @nocollapse */
    AlertController.ctorParameters = function () { return []; };
    /** @nocollapse */ AlertController.ngInjectableDef = defineInjectable({ factory: function AlertController_Factory() { return new AlertController(); }, token: AlertController, providedIn: "root" });
    return AlertController;
}(OverlayBaseController));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Events = /** @class */ (function () {
    function Events() {
        this.c = new Map();
    }
    /**
     * Subscribe to an event topic. Events that get posted to that topic will trigger the provided handler.
     *
     * @param topic the topic to subscribe to
     * @param handler the event handler
     */
    /**
     * Subscribe to an event topic. Events that get posted to that topic will trigger the provided handler.
     *
     * @param {?} topic the topic to subscribe to
     * @param {...?} handlers
     * @return {?}
     */
    Events.prototype.subscribe = /**
     * Subscribe to an event topic. Events that get posted to that topic will trigger the provided handler.
     *
     * @param {?} topic the topic to subscribe to
     * @param {...?} handlers
     * @return {?}
     */
    function (topic) {
        var handlers = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            handlers[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var topics = this.c.get(topic);
        if (!topics) {
            this.c.set(topic, topics = []);
        }
        topics.push.apply(topics, handlers);
    };
    /**
     * Unsubscribe from the given topic. Your handler will no longer receive events published to this topic.
     *
     * @param topic the topic to unsubscribe from
     * @param handler the event handler
     *
     * @return true if a handler was removed
     */
    /**
     * Unsubscribe from the given topic. Your handler will no longer receive events published to this topic.
     *
     * @param {?} topic the topic to unsubscribe from
     * @param {?=} handler the event handler
     *
     * @return {?} true if a handler was removed
     */
    Events.prototype.unsubscribe = /**
     * Unsubscribe from the given topic. Your handler will no longer receive events published to this topic.
     *
     * @param {?} topic the topic to unsubscribe from
     * @param {?=} handler the event handler
     *
     * @return {?} true if a handler was removed
     */
    function (topic, handler) {
        if (!handler) {
            return this.c.delete(topic);
        }
        /** @type {?} */
        var topics = this.c.get(topic);
        if (!topics) {
            return false;
        }
        // We need to find and remove a specific handler
        /** @type {?} */
        var index = topics.indexOf(handler);
        if (index < 0) {
            // Wasn't found, wasn't removed
            return false;
        }
        topics.splice(index, 1);
        if (topics.length === 0) {
            this.c.delete(topic);
        }
        return true;
    };
    /**
     * Publish an event to the given topic.
     *
     * @param topic the topic to publish to
     * @param eventData the data to send as the event
     */
    /**
     * Publish an event to the given topic.
     *
     * @param {?} topic the topic to publish to
     * @param {...?} args
     * @return {?}
     */
    Events.prototype.publish = /**
     * Publish an event to the given topic.
     *
     * @param {?} topic the topic to publish to
     * @param {...?} args
     * @return {?}
     */
    function (topic) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var topics = this.c.get(topic);
        if (!topics) {
            return null;
        }
        return topics.map((/**
         * @param {?} handler
         * @return {?}
         */
        function (handler) {
            try {
                return handler.apply(void 0, args);
            }
            catch (e) {
                console.error(e);
                return null;
            }
        }));
    };
    Events.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] },
    ];
    /** @nocollapse */ Events.ngInjectableDef = defineInjectable({ factory: function Events_Factory() { return new Events(); }, token: Events, providedIn: "root" });
    return Events;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingController = /** @class */ (function (_super) {
    __extends(LoadingController, _super);
    function LoadingController() {
        return _super.call(this, loadingController) || this;
    }
    LoadingController.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] },
    ];
    /** @nocollapse */
    LoadingController.ctorParameters = function () { return []; };
    /** @nocollapse */ LoadingController.ngInjectableDef = defineInjectable({ factory: function LoadingController_Factory() { return new LoadingController(); }, token: LoadingController, providedIn: "root" });
    return LoadingController;
}(OverlayBaseController));

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
function proxyMethod(ctrlName, doc, methodName) {
    var args = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    /** @type {?} */
    var controller = ensureElementInBody(ctrlName, doc);
    return controller.componentOnReady()
        .then((/**
     * @return {?}
     */
    function () { return ((/** @type {?} */ (controller)))[methodName].apply(controller, args); }));
}
/**
 * @param {?} elementName
 * @param {?} doc
 * @return {?}
 */
function ensureElementInBody(elementName, doc) {
    /** @type {?} */
    var element = doc.querySelector(elementName);
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
var CTRL = 'ion-menu-controller';
var MenuController = /** @class */ (function () {
    function MenuController(doc) {
        this.doc = doc;
    }
    /**
     * Programmatically open the Menu.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return returns a promise when the menu is fully opened
     */
    /**
     * Programmatically open the Menu.
     * @param {?=} menuId
     * @return {?} returns a promise when the menu is fully opened
     */
    MenuController.prototype.open = /**
     * Programmatically open the Menu.
     * @param {?=} menuId
     * @return {?} returns a promise when the menu is fully opened
     */
    function (menuId) {
        return proxyMethod(CTRL, this.doc, 'open', menuId);
    };
    /**
     * Programmatically close the Menu. If no `menuId` is given as the first
     * argument then it'll close any menu which is open. If a `menuId`
     * is given then it'll close that exact menu.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return returns a promise when the menu is fully closed
     */
    /**
     * Programmatically close the Menu. If no `menuId` is given as the first
     * argument then it'll close any menu which is open. If a `menuId`
     * is given then it'll close that exact menu.
     * @param {?=} menuId
     * @return {?} returns a promise when the menu is fully closed
     */
    MenuController.prototype.close = /**
     * Programmatically close the Menu. If no `menuId` is given as the first
     * argument then it'll close any menu which is open. If a `menuId`
     * is given then it'll close that exact menu.
     * @param {?=} menuId
     * @return {?} returns a promise when the menu is fully closed
     */
    function (menuId) {
        return proxyMethod(CTRL, this.doc, 'close', menuId);
    };
    /**
     * Toggle the menu. If it's closed, it will open, and if opened, it
     * will close.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return returns a promise when the menu has been toggled
     */
    /**
     * Toggle the menu. If it's closed, it will open, and if opened, it
     * will close.
     * @param {?=} menuId
     * @return {?} returns a promise when the menu has been toggled
     */
    MenuController.prototype.toggle = /**
     * Toggle the menu. If it's closed, it will open, and if opened, it
     * will close.
     * @param {?=} menuId
     * @return {?} returns a promise when the menu has been toggled
     */
    function (menuId) {
        return proxyMethod(CTRL, this.doc, 'toggle', menuId);
    };
    /**
     * Used to enable or disable a menu. For example, there could be multiple
     * left menus, but only one of them should be able to be opened at the same
     * time. If there are multiple menus on the same side, then enabling one menu
     * will also automatically disable all the others that are on the same side.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return Returns the instance of the menu, which is useful for chaining.
     */
    /**
     * Used to enable or disable a menu. For example, there could be multiple
     * left menus, but only one of them should be able to be opened at the same
     * time. If there are multiple menus on the same side, then enabling one menu
     * will also automatically disable all the others that are on the same side.
     * @param {?} shouldEnable
     * @param {?=} menuId
     * @return {?} Returns the instance of the menu, which is useful for chaining.
     */
    MenuController.prototype.enable = /**
     * Used to enable or disable a menu. For example, there could be multiple
     * left menus, but only one of them should be able to be opened at the same
     * time. If there are multiple menus on the same side, then enabling one menu
     * will also automatically disable all the others that are on the same side.
     * @param {?} shouldEnable
     * @param {?=} menuId
     * @return {?} Returns the instance of the menu, which is useful for chaining.
     */
    function (shouldEnable, menuId) {
        return proxyMethod(CTRL, this.doc, 'enable', shouldEnable, menuId);
    };
    /**
     * Used to enable or disable the ability to swipe open the menu.
     * @param shouldEnable  True if it should be swipe-able, false if not.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return Returns the instance of the menu, which is useful for chaining.
     */
    /**
     * Used to enable or disable the ability to swipe open the menu.
     * @param {?} shouldEnable  True if it should be swipe-able, false if not.
     * @param {?=} menuId
     * @return {?} Returns the instance of the menu, which is useful for chaining.
     */
    MenuController.prototype.swipeEnable = /**
     * Used to enable or disable the ability to swipe open the menu.
     * @param {?} shouldEnable  True if it should be swipe-able, false if not.
     * @param {?=} menuId
     * @return {?} Returns the instance of the menu, which is useful for chaining.
     */
    function (shouldEnable, menuId) {
        return proxyMethod(CTRL, this.doc, 'swipeEnable', shouldEnable, menuId);
    };
    /**
     * @param [menuId] Optionally get the menu by its id, or side.
     * @return Returns true if the specified menu is currently open, otherwise false.
     * If the menuId is not specified, it returns true if ANY menu is currenly open.
     */
    /**
     * @param {?=} menuId
     * @return {?} Returns true if the specified menu is currently open, otherwise false.
     * If the menuId is not specified, it returns true if ANY menu is currenly open.
     */
    MenuController.prototype.isOpen = /**
     * @param {?=} menuId
     * @return {?} Returns true if the specified menu is currently open, otherwise false.
     * If the menuId is not specified, it returns true if ANY menu is currenly open.
     */
    function (menuId) {
        return proxyMethod(CTRL, this.doc, 'isOpen', menuId);
    };
    /**
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return Returns true if the menu is currently enabled, otherwise false.
     */
    /**
     * @param {?=} menuId
     * @return {?} Returns true if the menu is currently enabled, otherwise false.
     */
    MenuController.prototype.isEnabled = /**
     * @param {?=} menuId
     * @return {?} Returns true if the menu is currently enabled, otherwise false.
     */
    function (menuId) {
        return proxyMethod(CTRL, this.doc, 'isEnabled', menuId);
    };
    /**
     * Used to get a menu instance. If a `menuId` is not provided then it'll
     * return the first menu found. If a `menuId` is `left` or `right`, then
     * it'll return the enabled menu on that side. Otherwise, if a `menuId` is
     * provided, then it'll try to find the menu using the menu's `id`
     * property. If a menu is not found then it'll return `null`.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return Returns the instance of the menu if found, otherwise `null`.
     */
    /**
     * Used to get a menu instance. If a `menuId` is not provided then it'll
     * return the first menu found. If a `menuId` is `left` or `right`, then
     * it'll return the enabled menu on that side. Otherwise, if a `menuId` is
     * provided, then it'll try to find the menu using the menu's `id`
     * property. If a menu is not found then it'll return `null`.
     * @param {?=} menuId
     * @return {?} Returns the instance of the menu if found, otherwise `null`.
     */
    MenuController.prototype.get = /**
     * Used to get a menu instance. If a `menuId` is not provided then it'll
     * return the first menu found. If a `menuId` is `left` or `right`, then
     * it'll return the enabled menu on that side. Otherwise, if a `menuId` is
     * provided, then it'll try to find the menu using the menu's `id`
     * property. If a menu is not found then it'll return `null`.
     * @param {?=} menuId
     * @return {?} Returns the instance of the menu if found, otherwise `null`.
     */
    function (menuId) {
        return proxyMethod(CTRL, this.doc, 'get', menuId);
    };
    /**
     * @return Returns the instance of the menu already opened, otherwise `null`.
     */
    /**
     * @return {?} Returns the instance of the menu already opened, otherwise `null`.
     */
    MenuController.prototype.getOpen = /**
     * @return {?} Returns the instance of the menu already opened, otherwise `null`.
     */
    function () {
        return proxyMethod(CTRL, this.doc, 'getOpen');
    };
    /**
     * @return Returns an array of all menu instances.
     */
    /**
     * @return {?} Returns an array of all menu instances.
     */
    MenuController.prototype.getMenus = /**
     * @return {?} Returns an array of all menu instances.
     */
    function () {
        return proxyMethod(CTRL, this.doc, 'getMenus');
    };
    MenuController.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] },
    ];
    /** @nocollapse */
    MenuController.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ MenuController.ngInjectableDef = defineInjectable({ factory: function MenuController_Factory() { return new MenuController(inject(DOCUMENT)); }, token: MenuController, providedIn: "root" });
    return MenuController;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PickerController = /** @class */ (function (_super) {
    __extends(PickerController, _super);
    function PickerController() {
        return _super.call(this, pickerController) || this;
    }
    PickerController.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] },
    ];
    /** @nocollapse */
    PickerController.ctorParameters = function () { return []; };
    /** @nocollapse */ PickerController.ngInjectableDef = defineInjectable({ factory: function PickerController_Factory() { return new PickerController(); }, token: PickerController, providedIn: "root" });
    return PickerController;
}(OverlayBaseController));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalController = /** @class */ (function (_super) {
    __extends(ModalController, _super);
    function ModalController(angularDelegate, resolver, injector) {
        var _this = _super.call(this, modalController) || this;
        _this.angularDelegate = angularDelegate;
        _this.resolver = resolver;
        _this.injector = injector;
        return _this;
    }
    /**
     * @param {?} opts
     * @return {?}
     */
    ModalController.prototype.create = /**
     * @param {?} opts
     * @return {?}
     */
    function (opts) {
        return _super.prototype.create.call(this, __assign({}, opts, { delegate: this.angularDelegate.create(this.resolver, this.injector) }));
    };
    ModalController.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ModalController.ctorParameters = function () { return [
        { type: AngularDelegate },
        { type: ComponentFactoryResolver },
        { type: Injector }
    ]; };
    return ModalController;
}(OverlayBaseController));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PopoverController = /** @class */ (function (_super) {
    __extends(PopoverController, _super);
    function PopoverController(angularDelegate, resolver, injector) {
        var _this = _super.call(this, popoverController) || this;
        _this.angularDelegate = angularDelegate;
        _this.resolver = resolver;
        _this.injector = injector;
        return _this;
    }
    /**
     * @param {?} opts
     * @return {?}
     */
    PopoverController.prototype.create = /**
     * @param {?} opts
     * @return {?}
     */
    function (opts) {
        return _super.prototype.create.call(this, __assign({}, opts, { delegate: this.angularDelegate.create(this.resolver, this.injector) }));
    };
    PopoverController.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PopoverController.ctorParameters = function () { return [
        { type: AngularDelegate },
        { type: ComponentFactoryResolver },
        { type: Injector }
    ]; };
    return PopoverController;
}(OverlayBaseController));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastController = /** @class */ (function (_super) {
    __extends(ToastController, _super);
    function ToastController() {
        return _super.call(this, toastController) || this;
    }
    ToastController.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] },
    ];
    /** @nocollapse */
    ToastController.ctorParameters = function () { return []; };
    /** @nocollapse */ ToastController.ngInjectableDef = defineInjectable({ factory: function ToastController_Factory() { return new ToastController(); }, token: ToastController, providedIn: "root" });
    return ToastController;
}(OverlayBaseController));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DomController = /** @class */ (function () {
    function DomController() {
    }
    /**
     * Schedules a task to run during the READ phase of the next frame.
     * This task should only read the DOM, but never modify it.
     */
    /**
     * Schedules a task to run during the READ phase of the next frame.
     * This task should only read the DOM, but never modify it.
     * @param {?} cb
     * @return {?}
     */
    DomController.prototype.read = /**
     * Schedules a task to run during the READ phase of the next frame.
     * This task should only read the DOM, but never modify it.
     * @param {?} cb
     * @return {?}
     */
    function (cb) {
        getQueue().read(cb);
    };
    /**
     * Schedules a task to run during the WRITE phase of the next frame.
     * This task should write the DOM, but never READ it.
     */
    /**
     * Schedules a task to run during the WRITE phase of the next frame.
     * This task should write the DOM, but never READ it.
     * @param {?} cb
     * @return {?}
     */
    DomController.prototype.write = /**
     * Schedules a task to run during the WRITE phase of the next frame.
     * This task should write the DOM, but never READ it.
     * @param {?} cb
     * @return {?}
     */
    function (cb) {
        getQueue().write(cb);
    };
    DomController.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] },
    ];
    /** @nocollapse */ DomController.ngInjectableDef = defineInjectable({ factory: function DomController_Factory() { return new DomController(); }, token: DomController, providedIn: "root" });
    return DomController;
}());
/**
 * @return {?}
 */
function getQueue() {
    /** @type {?} */
    var win = typeof ((/** @type {?} */ (window))) !== 'undefined' ? window : (/** @type {?} */ (null));
    if (win != null) {
        /** @type {?} */
        var Ionic = win.Ionic;
        if (Ionic && Ionic.queue) {
            return Ionic.queue;
        }
        return {
            read: (/**
             * @param {?} cb
             * @return {?}
             */
            function (cb) { return win.requestAnimationFrame(cb); }),
            write: (/**
             * @param {?} cb
             * @return {?}
             */
            function (cb) { return win.requestAnimationFrame(cb); })
        };
    }
    return {
        read: (/**
         * @param {?} cb
         * @return {?}
         */
        function (cb) { return cb(); }),
        write: (/**
         * @param {?} cb
         * @return {?}
         */
        function (cb) { return cb(); })
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonicRouteStrategy = /** @class */ (function () {
    function IonicRouteStrategy() {
    }
    /**
     * @param {?} _route
     * @return {?}
     */
    IonicRouteStrategy.prototype.shouldDetach = /**
     * @param {?} _route
     * @return {?}
     */
    function (_route) {
        return false;
    };
    /**
     * @param {?} _route
     * @return {?}
     */
    IonicRouteStrategy.prototype.shouldAttach = /**
     * @param {?} _route
     * @return {?}
     */
    function (_route) {
        return false;
    };
    /**
     * @param {?} _route
     * @param {?} _detachedTree
     * @return {?}
     */
    IonicRouteStrategy.prototype.store = /**
     * @param {?} _route
     * @param {?} _detachedTree
     * @return {?}
     */
    function (_route, _detachedTree) {
        return;
    };
    /**
     * @param {?} _route
     * @return {?}
     */
    IonicRouteStrategy.prototype.retrieve = /**
     * @param {?} _route
     * @return {?}
     */
    function (_route) {
        return null;
    };
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    IonicRouteStrategy.prototype.shouldReuseRoute = /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    function (future, curr) {
        if (future.routeConfig !== curr.routeConfig) {
            return false;
        }
        if (future.component !== curr.component) {
            return false;
        }
        // checking router params
        /** @type {?} */
        var futureParams = future.params;
        /** @type {?} */
        var currentParams = curr.params;
        /** @type {?} */
        var keysA = Object.keys(futureParams);
        /** @type {?} */
        var keysB = Object.keys(currentParams);
        if (keysA.length !== keysB.length) {
            return false;
        }
        // Test for A's keys different from B.
        for (var _i = 0, keysA_1 = keysA; _i < keysA_1.length; _i++) {
            var key = keysA_1[_i];
            if (currentParams[key] !== futureParams[key]) {
                return false;
            }
        }
        return true;
    };
    return IonicRouteStrategy;
}());

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
    function () {
        /** @type {?} */
        var win = (/** @type {?} */ (doc.defaultView));
        if (win) {
            /** @type {?} */
            var Ionic = win.Ionic = win.Ionic || {};
            Ionic.config = __assign({}, config, { _zoneGate: (/**
                 * @param {?} h
                 * @return {?}
                 */
                function (h) { return zone.run(h); }) });
            /** @type {?} */
            var aelFn_1 = '__zone_symbol__addEventListener' in ((/** @type {?} */ (document.body)))
                ? '__zone_symbol__addEventListener'
                : 'addEventListener';
            return applyPolyfills().then((/**
             * @return {?}
             */
            function () {
                return defineCustomElements(win, {
                    exclude: ['ion-tabs', 'ion-tab'],
                    syncQueue: true,
                    jmp: (/**
                     * @param {?} h
                     * @return {?}
                     */
                    function (h) { return zone.runOutsideAngular(h); }),
                    raf: (/**
                     * @param {?} h
                     * @return {?}
                     */
                    function (h) {
                        return zone.runOutsideAngular((/**
                         * @return {?}
                         */
                        function () {
                            return (win.__zone_symbol__requestAnimationFrame) ? win.__zone_symbol__requestAnimationFrame(h) : requestAnimationFrame(h);
                        }));
                    }),
                    ael: /**
                     * @param {?} elm
                     * @param {?} eventName
                     * @param {?} cb
                     * @param {?} opts
                     * @return {?}
                     */
                    function (elm, eventName, cb, opts) {
                        ((/** @type {?} */ (elm)))[aelFn_1](eventName, cb, opts);
                    },
                    rel: /**
                     * @param {?} elm
                     * @param {?} eventName
                     * @param {?} cb
                     * @param {?} opts
                     * @return {?}
                     */
                    function (elm, eventName, cb, opts) {
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
var DECLARATIONS = [
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
var IonicModule = /** @class */ (function () {
    function IonicModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    IonicModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
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
    };
    IonicModule.decorators = [
        { type: NgModule, args: [{
                    declarations: DECLARATIONS,
                    exports: DECLARATIONS,
                    providers: [AngularDelegate, ModalController, PopoverController],
                    imports: [CommonModule]
                },] },
    ];
    return IonicModule;
}());

export { ActionSheetController, AlertController, AngularDelegate, BooleanValueAccessor, Config, DomController, Events, IonApp, IonAvatar, IonBackButton, IonBackButtonDelegate, IonBackdrop, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonMenuToggle, IonNav, IonNavPop, IonNavPush, IonNavSetRoot, IonNote, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRouterOutlet, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSkeletonText, IonSlide, IonSlides, IonSpinner, IonSplitPane, IonTabBar, IonTabButton, IonTabs, IonText, IonTextarea, IonThumbnail, IonTitle, IonToggle, IonToolbar, IonVirtualScroll, IonicModule, IonicRouteStrategy, LoadingController, MenuController, ModalController, NavController, NavDelegate, NavParams, NumericValueAccessor, PickerController, Platform, PopoverController, RadioValueAccessor, RouterLinkDelegate, SelectValueAccessor, TextValueAccessor, ToastController, VirtualFooter, VirtualHeader, VirtualItem, ConfigToken as ɵa, ValueAccessor as ɵb, OverlayBaseController as ɵd, appInitialize as ɵe };
