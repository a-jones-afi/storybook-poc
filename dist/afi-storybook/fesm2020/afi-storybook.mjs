import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

const _c0 = function (a0) { return { "background-color": a0 }; };
class ButtonComponent {
    constructor() {
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
    onClick() {
        this.click.emit('test');
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["lib-afi-button"]], inputs: { backgroundColor: "backgroundColor", label: "label" }, outputs: { click: "click" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 4, consts: [["type", "button", 3, "ngStyle", "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function ButtonComponent_Template_button_click_0_listener() { return ctx.onClick(); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, ctx.backgroundColor));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.label, "\n");
    } }, dependencies: [CommonModule, i1.NgStyle], styles: ["button[_ngcontent-%COMP%]{all:unset;padding:1rem;border:solid 1px pink;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#86c49c;border-color:#000}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{ selector: 'lib-afi-button', standalone: true, imports: [CommonModule], template: "<button\n  type=\"button\"\n  [ngStyle]=\"{ 'background-color': backgroundColor }\"\n  (click)=\"onClick()\"\n>\n  {{ label }}\n</button>\n", styles: ["button{all:unset;padding:1rem;border:solid 1px pink;cursor:pointer}button:hover{background-color:#86c49c;border-color:#000}\n"] }]
    }], null, { backgroundColor: [{
            type: Input
        }], label: [{
            type: Input
        }], click: [{
            type: Output
        }] }); })();

class ButtonModule {
}
ButtonModule.ɵfac = function ButtonModule_Factory(t) { return new (t || ButtonModule)(); };
ButtonModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ButtonModule });
ButtonModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [ButtonComponent] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
                imports: [ButtonComponent],
                exports: [ButtonComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ButtonModule, { imports: [ButtonComponent], exports: [ButtonComponent] }); })();

/*
 * Public API Surface of angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule };
//# sourceMappingURL=afi-storybook.mjs.map
