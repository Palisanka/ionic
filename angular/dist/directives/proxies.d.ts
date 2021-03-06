import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { Components } from '@ionic/core';
export declare interface IonApp extends Components.IonApp {
}
export declare class IonApp {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonAvatar extends Components.IonAvatar {
}
export declare class IonAvatar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonBackButton extends Components.IonBackButton {
}
export declare class IonBackButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonBackdrop extends Components.IonBackdrop {
}
export declare class IonBackdrop {
    protected z: NgZone;
    ionBackdropTap: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonBadge extends Components.IonBadge {
}
export declare class IonBadge {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonButton extends Components.IonButton {
}
export declare class IonButton {
    protected z: NgZone;
    ionFocus: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonButtons extends Components.IonButtons {
}
export declare class IonButtons {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonCard extends Components.IonCard {
}
export declare class IonCard {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonCardContent extends Components.IonCardContent {
}
export declare class IonCardContent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonCardHeader extends Components.IonCardHeader {
}
export declare class IonCardHeader {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonCardSubtitle extends Components.IonCardSubtitle {
}
export declare class IonCardSubtitle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonCardTitle extends Components.IonCardTitle {
}
export declare class IonCardTitle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonCheckbox extends Components.IonCheckbox {
}
export declare class IonCheckbox {
    protected z: NgZone;
    ionChange: EventEmitter<CustomEvent>;
    ionFocus: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonChip extends Components.IonChip {
}
export declare class IonChip {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonCol extends Components.IonCol {
}
export declare class IonCol {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonContent extends Components.IonContent {
}
export declare class IonContent {
    protected z: NgZone;
    ionScrollStart: EventEmitter<CustomEvent>;
    ionScroll: EventEmitter<CustomEvent>;
    ionScrollEnd: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonDatetime extends Components.IonDatetime {
}
export declare class IonDatetime {
    protected z: NgZone;
    ionCancel: EventEmitter<CustomEvent>;
    ionChange: EventEmitter<CustomEvent>;
    ionFocus: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonFab extends Components.IonFab {
}
export declare class IonFab {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonFabButton extends Components.IonFabButton {
}
export declare class IonFabButton {
    protected z: NgZone;
    ionFocus: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonFabList extends Components.IonFabList {
}
export declare class IonFabList {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonFooter extends Components.IonFooter {
}
export declare class IonFooter {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonGrid extends Components.IonGrid {
}
export declare class IonGrid {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonHeader extends Components.IonHeader {
}
export declare class IonHeader {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonIcon extends Components.IonIcon {
}
export declare class IonIcon {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonImg extends Components.IonImg {
}
export declare class IonImg {
    protected z: NgZone;
    ionImgWillLoad: EventEmitter<CustomEvent>;
    ionImgDidLoad: EventEmitter<CustomEvent>;
    ionError: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonInfiniteScroll extends Components.IonInfiniteScroll {
}
export declare class IonInfiniteScroll {
    protected z: NgZone;
    ionInfinite: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonInfiniteScrollContent extends Components.IonInfiniteScrollContent {
}
export declare class IonInfiniteScrollContent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonInput extends Components.IonInput {
}
export declare class IonInput {
    protected z: NgZone;
    ionInput: EventEmitter<CustomEvent>;
    ionChange: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    ionFocus: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonItem extends Components.IonItem {
}
export declare class IonItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonItemDivider extends Components.IonItemDivider {
}
export declare class IonItemDivider {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonItemGroup extends Components.IonItemGroup {
}
export declare class IonItemGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonItemOption extends Components.IonItemOption {
}
export declare class IonItemOption {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonItemOptions extends Components.IonItemOptions {
}
export declare class IonItemOptions {
    protected z: NgZone;
    ionSwipe: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonItemSliding extends Components.IonItemSliding {
}
export declare class IonItemSliding {
    protected z: NgZone;
    ionDrag: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonLabel extends Components.IonLabel {
}
export declare class IonLabel {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonList extends Components.IonList {
}
export declare class IonList {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonListHeader extends Components.IonListHeader {
}
export declare class IonListHeader {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonMenu extends Components.IonMenu {
}
export declare class IonMenu {
    protected z: NgZone;
    ionWillOpen: EventEmitter<CustomEvent>;
    ionWillClose: EventEmitter<CustomEvent>;
    ionDidOpen: EventEmitter<CustomEvent>;
    ionDidClose: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonMenuButton extends Components.IonMenuButton {
}
export declare class IonMenuButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonMenuToggle extends Components.IonMenuToggle {
}
export declare class IonMenuToggle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonNav extends Components.IonNav {
}
export declare class IonNav {
    protected z: NgZone;
    ionNavWillChange: EventEmitter<CustomEvent>;
    ionNavDidChange: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonNavPop extends Components.IonNavPop {
}
export declare class IonNavPop {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonNavPush extends Components.IonNavPush {
}
export declare class IonNavPush {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonNavSetRoot extends Components.IonNavSetRoot {
}
export declare class IonNavSetRoot {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonNote extends Components.IonNote {
}
export declare class IonNote {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonProgressBar extends Components.IonProgressBar {
}
export declare class IonProgressBar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonRadio extends Components.IonRadio {
}
export declare class IonRadio {
    protected z: NgZone;
    ionSelect: EventEmitter<CustomEvent>;
    ionFocus: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonRadioGroup extends Components.IonRadioGroup {
}
export declare class IonRadioGroup {
    protected z: NgZone;
    ionChange: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonRange extends Components.IonRange {
}
export declare class IonRange {
    protected z: NgZone;
    ionChange: EventEmitter<CustomEvent>;
    ionFocus: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonRefresher extends Components.IonRefresher {
}
export declare class IonRefresher {
    protected z: NgZone;
    ionRefresh: EventEmitter<CustomEvent>;
    ionPull: EventEmitter<CustomEvent>;
    ionStart: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonRefresherContent extends Components.IonRefresherContent {
}
export declare class IonRefresherContent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonReorder extends Components.IonReorder {
}
export declare class IonReorder {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonReorderGroup extends Components.IonReorderGroup {
}
export declare class IonReorderGroup {
    protected z: NgZone;
    ionItemReorder: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonRippleEffect extends Components.IonRippleEffect {
}
export declare class IonRippleEffect {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonRow extends Components.IonRow {
}
export declare class IonRow {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonSearchbar extends Components.IonSearchbar {
}
export declare class IonSearchbar {
    protected z: NgZone;
    ionInput: EventEmitter<CustomEvent>;
    ionChange: EventEmitter<CustomEvent>;
    ionCancel: EventEmitter<CustomEvent>;
    ionClear: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    ionFocus: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonSegment extends Components.IonSegment {
}
export declare class IonSegment {
    protected z: NgZone;
    ionChange: EventEmitter<CustomEvent>;
    ionStyle: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonSegmentButton extends Components.IonSegmentButton {
}
export declare class IonSegmentButton {
    protected z: NgZone;
    ionSelect: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonSelect extends Components.IonSelect {
}
export declare class IonSelect {
    protected z: NgZone;
    ionChange: EventEmitter<CustomEvent>;
    ionCancel: EventEmitter<CustomEvent>;
    ionFocus: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonSelectOption extends Components.IonSelectOption {
}
export declare class IonSelectOption {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonSkeletonText extends Components.IonSkeletonText {
}
export declare class IonSkeletonText {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonSlide extends Components.IonSlide {
}
export declare class IonSlide {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonSlides extends Components.IonSlides {
}
export declare class IonSlides {
    protected z: NgZone;
    ionSlidesDidLoad: EventEmitter<CustomEvent>;
    ionSlideTap: EventEmitter<CustomEvent>;
    ionSlideDoubleTap: EventEmitter<CustomEvent>;
    ionSlideWillChange: EventEmitter<CustomEvent>;
    ionSlideDidChange: EventEmitter<CustomEvent>;
    ionSlideNextStart: EventEmitter<CustomEvent>;
    ionSlidePrevStart: EventEmitter<CustomEvent>;
    ionSlideNextEnd: EventEmitter<CustomEvent>;
    ionSlidePrevEnd: EventEmitter<CustomEvent>;
    ionSlideTransitionStart: EventEmitter<CustomEvent>;
    ionSlideTransitionEnd: EventEmitter<CustomEvent>;
    ionSlideDrag: EventEmitter<CustomEvent>;
    ionSlideReachStart: EventEmitter<CustomEvent>;
    ionSlideReachEnd: EventEmitter<CustomEvent>;
    ionSlideTouchStart: EventEmitter<CustomEvent>;
    ionSlideTouchEnd: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonSpinner extends Components.IonSpinner {
}
export declare class IonSpinner {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonSplitPane extends Components.IonSplitPane {
}
export declare class IonSplitPane {
    protected z: NgZone;
    ionSplitPaneVisible: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonTabBar extends Components.IonTabBar {
}
export declare class IonTabBar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonTabButton extends Components.IonTabButton {
}
export declare class IonTabButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonText extends Components.IonText {
}
export declare class IonText {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonTextarea extends Components.IonTextarea {
}
export declare class IonTextarea {
    protected z: NgZone;
    ionChange: EventEmitter<CustomEvent>;
    ionInput: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    ionFocus: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonThumbnail extends Components.IonThumbnail {
}
export declare class IonThumbnail {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonTitle extends Components.IonTitle {
}
export declare class IonTitle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonToggle extends Components.IonToggle {
}
export declare class IonToggle {
    protected z: NgZone;
    ionChange: EventEmitter<CustomEvent>;
    ionFocus: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface IonToolbar extends Components.IonToolbar {
}
export declare class IonToolbar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
