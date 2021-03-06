import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { MenuChangeEventDetail, MenuControllerI, MenuI, Side } from '../../interface';
export declare class Menu implements ComponentInterface, MenuI {
    private animation?;
    private lastOnEnd;
    private gesture?;
    private blocker;
    private mode;
    isAnimating: boolean;
    width: number;
    _isOpen: boolean;
    backdropEl?: HTMLElement;
    menuInnerEl?: HTMLElement;
    contentEl?: HTMLElement;
    menuCtrl?: MenuControllerI;
    el: HTMLIonMenuElement;
    isPaneVisible: boolean;
    isEndSide: boolean;
    lazyMenuCtrl: HTMLIonMenuControllerElement;
    /**
     * The content's id the menu should use.
     */
    contentId?: string;
    /**
     * An id for the menu.
     */
    menuId?: string;
    /**
     * The display type of the menu.
     * Available options: `"overlay"`, `"reveal"`, `"push"`.
     */
    type?: string;
    typeChanged(type: string, oldType: string | undefined): void;
    /**
     * If `true`, the menu is disabled.
     */
    disabled: boolean;
    protected disabledChanged(): void;
    /**
     * Which side of the view the menu should be placed.
     */
    side: Side;
    protected sideChanged(): void;
    /**
     * If `true`, swiping the menu is enabled.
     */
    swipeGesture: boolean;
    protected swipeGestureChanged(): void;
    /**
     * The edge threshold for dragging the menu open.
     * If a drag/swipe happens over this value, the menu is not triggered.
     */
    maxEdgeStart: number;
    /**
     * Emitted when the menu is about to be opened.
     */
    ionWillOpen: EventEmitter<void>;
    /**
     * Emitted when the menu is about to be closed.
     */
    ionWillClose: EventEmitter<void>;
    /**
     * Emitted when the menu is open.
     */
    ionDidOpen: EventEmitter<void>;
    /**
     * Emitted when the menu is closed.
     */
    ionDidClose: EventEmitter<void>;
    /**
     * Emitted when the menu state is changed.
     * @internal
     */
    protected ionMenuChange: EventEmitter<MenuChangeEventDetail>;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    componentDidUnload(): void;
    onSplitPaneChanged(ev: CustomEvent): void;
    onBackdropClick(ev: any): void;
    /**
     * Returns `true` is the menu is open.
     */
    isOpen(): Promise<boolean>;
    /**
     * Returns `true` is the menu is active.
     *
     * A menu is active when it can be opened or closed, meaning it's enabled
     * and it's not part of a `ion-split-pane`.
     */
    isActive(): Promise<boolean>;
    /**
     * Opens the menu. If the menu is already open or it can't be opened,
     * it returns `false`.
     */
    open(animated?: boolean): Promise<boolean>;
    /**
     * Closes the menu. If the menu is already closed or it can't be closed,
     * it returns `false`.
     */
    close(animated?: boolean): Promise<boolean>;
    /**
     * Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.
     * If the operation can't be completed successfully, it returns `false`.
     */
    toggle(animated?: boolean): Promise<boolean>;
    /**
     * Opens or closes the button.
     * If the operation can't be completed successfully, it returns `false`.
     */
    setOpen(shouldOpen: boolean, animated?: boolean): Promise<boolean>;
    _setOpen(shouldOpen: boolean, animated?: boolean): Promise<boolean>;
    private loadAnimation;
    private startAnimation;
    private _isActive;
    private canSwipe;
    private canStart;
    private onWillStart;
    private onStart;
    private onMove;
    private onEnd;
    private beforeAnimation;
    private afterAnimation;
    private updateState;
    private forceClosing;
    hostData(): {
        role: string;
        class: {
            [x: string]: boolean;
            'menu-enabled': boolean;
            'menu-side-end': boolean;
            'menu-side-start': boolean;
            'menu-pane-visible': boolean;
        };
    };
    render(): any[];
}
