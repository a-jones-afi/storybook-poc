import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

const _c0 = function (a0) { return { primary: a0 }; };
const _c1 = function (a0) { return { secondary: a0 }; };
const _c2 = function (a0) { return { "background-color": a0 }; };
class ButtonComponent {
    constructor() {
        /**
         * Is this the principal call to action on the page?
         */
        this.primary = false;
        /**
         * Button contents
         *
         * @required
         */
        this.label = 'Button';
        /**
         * Optional click handler
         */
        this.click = new EventEmitter();
    }
    onClick(event) {
        this.click.emit('test');
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["lib-afi-button"]], inputs: { primary: "primary", backgroundColor: "backgroundColor", label: "label" }, outputs: { click: "click" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 9, consts: [["type", "button", 3, "ngClass", "ngStyle", "click"]], template: function ButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function ButtonComponent_Template_button_click_0_listener($event) { return ctx.onClick($event); });
            i0.ɵɵtext(1, " Click Me!\n");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx.primary))("ngClass", i0.ɵɵpureFunction1(5, _c1, !ctx.primary))("ngStyle", i0.ɵɵpureFunction1(7, _c2, ctx.backgroundColor));
        }
    }, dependencies: [CommonModule, i1.NgClass, i1.NgStyle], styles: ["button[_ngcontent-%COMP%]{all:unset;padding:1rem;border:solid 1px pink;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:pink;border-color:#000}button.secondary[_ngcontent-%COMP%]{background-color:#00008b;color:#fff;border-color:#000}button.secondary[_ngcontent-%COMP%]:hover{background-color:transparent;color:#000}button.pink[_ngcontent-%COMP%]{background:#ff00a2;box-shadow:0 4px 10px #3737374d,0 6px 35px #c83796b3}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonComponent, [{
            type: Component,
            args: [{ selector: 'lib-afi-button', standalone: true, imports: [CommonModule], template: "<button\n  type=\"button\"\n  [ngClass]=\"{ primary: primary }\"\n  [ngClass]=\"{ secondary: !primary }\"\n  [ngStyle]=\"{ 'background-color': backgroundColor }\"\n  (click)=\"onClick($event)\"\n>\n  Click Me!\n</button>\n", styles: ["button{all:unset;padding:1rem;border:solid 1px pink;cursor:pointer}button:hover{background-color:pink;border-color:#000}button.secondary{background-color:#00008b;color:#fff;border-color:#000}button.secondary:hover{background-color:transparent;color:#000}button.pink{background:#ff00a2;box-shadow:0 4px 10px #3737374d,0 6px 35px #c83796b3}\n"] }]
        }], null, { primary: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], label: [{
                type: Input
            }], click: [{
                type: Output
            }] });
})();

class ButtonModule {
}
ButtonModule.ɵfac = function ButtonModule_Factory(t) { return new (t || ButtonModule)(); };
ButtonModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ButtonModule });
ButtonModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [ButtonComponent] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonModule, [{
            type: NgModule,
            args: [{
                    imports: [ButtonComponent],
                    exports: [ButtonComponent],
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ButtonModule, { imports: [ButtonComponent], exports: [ButtonComponent] }); })();

/*
 * Public API Surface of angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule };
//# sourceMappingURL=afi-storybook.mjs.map
