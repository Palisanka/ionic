import { Location } from '@angular/common';
import { ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, OutletContext, Router } from '@angular/router';
import { Config } from '../../providers/config';
import { NavController } from '../../providers/nav-controller';
export declare class IonRouterOutlet implements OnDestroy, OnInit {
    private parentContexts;
    private location;
    private resolver;
    private config;
    private navCtrl;
    readonly parentOutlet?: IonRouterOutlet | undefined;
    private activated;
    private activatedView;
    private _activatedRoute;
    private _swipeGesture?;
    private name;
    private stackCtrl;
    private nativeEl;
    private proxyMap;
    private currentActivatedRoute$;
    tabsPrefix: string | undefined;
    stackEvents: EventEmitter<any>;
    activateEvents: EventEmitter<any>;
    deactivateEvents: EventEmitter<any>;
    animated: boolean;
    swipeGesture: boolean;
    constructor(parentContexts: ChildrenOutletContexts, location: ViewContainerRef, resolver: ComponentFactoryResolver, name: string, tabs: string, config: Config, navCtrl: NavController, commonLocation: Location, elementRef: ElementRef, router: Router, zone: NgZone, activatedRoute: ActivatedRoute, parentOutlet?: IonRouterOutlet | undefined);
    ngOnDestroy(): void;
    getContext(): OutletContext | null;
    ngOnInit(): void;
    readonly isActivated: boolean;
    readonly component: object;
    readonly activatedRoute: ActivatedRoute;
    readonly activatedRouteData: any;
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     */
    detach(): ComponentRef<any>;
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     */
    attach(_ref: ComponentRef<any>, _activatedRoute: ActivatedRoute): void;
    deactivate(): void;
    activateWith(activatedRoute: ActivatedRoute, resolver: ComponentFactoryResolver | null): void;
    /**
     * Returns `true` if there are pages in the stack to go back.
     */
    canGoBack(deep?: number, stackId?: string): boolean;
    /**
     * Resolves to `true` if it the outlet was able to sucessfully pop the last N pages.
     */
    pop(deep?: number, stackId?: string): Promise<boolean>;
    /**
     * Returns the URL of the active page of each stack.
     */
    getLastUrl(stackId?: string): string | undefined;
    /**
     * Returns the active stack ID. In the context of ion-tabs, it means the active tab.
     */
    getActiveStackId(): string | undefined;
    /**
     * Since the activated route can change over the life time of a component in an ion router outlet, we create
     * a proxy so that we can update the values over time as a user navigates back to components already in the stack.
     */
    private createActivatedRouteProxy;
    /**
     * Create a wrapped observable that will switch to the latest activated route matched by the given component
     */
    private proxyObservable;
    /**
     * Updates the activated route proxy for the given component to the new incoming router state
     */
    private updateActivatedRouteProxy;
}
