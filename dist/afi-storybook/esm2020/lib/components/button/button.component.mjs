import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0) { return { "background-color": a0 }; };
export class ButtonComponent {
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
    } }, dependencies: [CommonModule, i1.NgStyle], styles: ["button[_ngcontent-%COMP%]{all:unset;padding:1rem;border:solid 1px pink;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:pink;border-color:#000}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{ selector: 'lib-afi-button', standalone: true, imports: [CommonModule], template: "<button\n  type=\"button\"\n  [ngStyle]=\"{ 'background-color': backgroundColor }\"\n  (click)=\"onClick()\"\n>\n  {{ label }}\n</button>\n", styles: ["button{all:unset;padding:1rem;border:solid 1px pink;cursor:pointer}button:hover{background-color:pink;border-color:#000}\n"] }]
    }], null, { backgroundColor: [{
            type: Input
        }], label: [{
            type: Input
        }], click: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FmaS1zdG9yeWJvb2svc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWZpLXN0b3J5Ym9vay9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQVMvQyxNQUFNLE9BQU8sZUFBZTtJQVA1QjtRQWNFOzs7O1dBSUc7UUFFSCxVQUFLLEdBQUcsUUFBUSxDQUFDO1FBRWpCOztXQUVHO1FBRUgsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7S0FLcEM7SUFIQyxPQUFPO1FBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OEVBdkJVLGVBQWU7a0VBQWYsZUFBZTtRQ1Y1QixpQ0FJQztRQURDLDRGQUFTLGFBQVMsSUFBQztRQUVuQixZQUNGO1FBQUEsaUJBQVM7O1FBSlAseUVBQW1EO1FBR25ELGVBQ0Y7UUFERSwyQ0FDRjt3QkRBWSxZQUFZO3VGQUlYLGVBQWU7Y0FQM0IsU0FBUzsyQkFDRSxnQkFBZ0IsY0FDZCxJQUFJLFdBQ1AsQ0FBQyxZQUFZLENBQUM7Z0JBU3ZCLGVBQWU7a0JBRGQsS0FBSztZQVNOLEtBQUs7a0JBREosS0FBSztZQU9OLEtBQUs7a0JBREosTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWZpLWJ1dHRvbicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBXaGF0IGJhY2tncm91bmQgY29sb3IgdG8gdXNlXG4gICAqL1xuICBASW5wdXQoKVxuICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb250ZW50c1xuICAgKlxuICAgKiBAcmVxdWlyZWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGxhYmVsID0gJ0J1dHRvbic7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIGNsaWNrIGhhbmRsZXJcbiAgICovXG4gIEBPdXRwdXQoKVxuICBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5jbGljay5lbWl0KCd0ZXN0Jyk7XG4gIH1cbn1cbiIsIjxidXR0b25cbiAgdHlwZT1cImJ1dHRvblwiXG4gIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtY29sb3InOiBiYWNrZ3JvdW5kQ29sb3IgfVwiXG4gIChjbGljayk9XCJvbkNsaWNrKClcIlxuPlxuICB7eyBsYWJlbCB9fVxuPC9idXR0b24+XG4iXX0=