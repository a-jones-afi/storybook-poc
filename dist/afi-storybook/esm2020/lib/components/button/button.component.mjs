import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0) { return { primary: a0 }; };
const _c1 = function (a0) { return { secondary: a0 }; };
const _c2 = function (a0) { return { "background-color": a0 }; };
export class ButtonComponent {
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
ButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["lib-afi-button"]], inputs: { primary: "primary", backgroundColor: "backgroundColor", label: "label" }, outputs: { click: "click" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 9, consts: [["type", "button", 3, "ngClass", "ngStyle", "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function ButtonComponent_Template_button_click_0_listener($event) { return ctx.onClick($event); });
        i0.ɵɵtext(1, " Click Me!\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx.primary))("ngClass", i0.ɵɵpureFunction1(5, _c1, !ctx.primary))("ngStyle", i0.ɵɵpureFunction1(7, _c2, ctx.backgroundColor));
    } }, dependencies: [CommonModule, i1.NgClass, i1.NgStyle], styles: ["button[_ngcontent-%COMP%]{all:unset;padding:1rem;border:solid 1px pink;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:pink;border-color:#000}button.secondary[_ngcontent-%COMP%]{background-color:#00008b;color:#fff;border-color:#000}button.secondary[_ngcontent-%COMP%]:hover{background-color:transparent;color:#000}button.pink[_ngcontent-%COMP%]{background:#ff00a2;box-shadow:0 4px 10px #3737374d,0 6px 35px #c83796b3}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonComponent, [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FmaS1zdG9yeWJvb2svc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWZpLXN0b3J5Ym9vay9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0FBUy9DLE1BQU0sT0FBTyxlQUFlO0lBUDVCO1FBUUU7O1dBRUc7UUFFSCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBUWhCOzs7O1dBSUc7UUFFSCxVQUFLLEdBQUcsUUFBUSxDQUFDO1FBRWpCOztXQUVHO1FBRUgsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7S0FLcEM7SUFIQyxPQUFPLENBQUMsS0FBVTtRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDOzs4RUE3QlUsZUFBZTtrRUFBZixlQUFlO1FDVjVCLGlDQU1DO1FBREMsa0dBQVMsbUJBQWUsSUFBQztRQUV6Qiw0QkFDRjtRQUFBLGlCQUFTOztRQU5QLGlFQUFnQyxxREFBQSw0REFBQTt3QkRJdEIsWUFBWTt1RkFJWCxlQUFlO2NBUDNCLFNBQVM7MkJBQ0UsZ0JBQWdCLGNBQ2QsSUFBSSxXQUNQLENBQUMsWUFBWSxDQUFDO2dCQVN2QixPQUFPO2tCQUROLEtBQUs7WUFPTixlQUFlO2tCQURkLEtBQUs7WUFTTixLQUFLO2tCQURKLEtBQUs7WUFPTixLQUFLO2tCQURKLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFmaS1idXR0b24nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xuICAvKipcbiAgICogSXMgdGhpcyB0aGUgcHJpbmNpcGFsIGNhbGwgdG8gYWN0aW9uIG9uIHRoZSBwYWdlP1xuICAgKi9cbiAgQElucHV0KClcbiAgcHJpbWFyeSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBXaGF0IGJhY2tncm91bmQgY29sb3IgdG8gdXNlXG4gICAqL1xuICBASW5wdXQoKVxuICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjb250ZW50c1xuICAgKlxuICAgKiBAcmVxdWlyZWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGxhYmVsID0gJ0J1dHRvbic7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIGNsaWNrIGhhbmRsZXJcbiAgICovXG4gIEBPdXRwdXQoKVxuICBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIG9uQ2xpY2soZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuY2xpY2suZW1pdCgndGVzdCcpO1xuICB9XG59XG4iLCI8YnV0dG9uXG4gIHR5cGU9XCJidXR0b25cIlxuICBbbmdDbGFzc109XCJ7IHByaW1hcnk6IHByaW1hcnkgfVwiXG4gIFtuZ0NsYXNzXT1cInsgc2Vjb25kYXJ5OiAhcHJpbWFyeSB9XCJcbiAgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZC1jb2xvcic6IGJhY2tncm91bmRDb2xvciB9XCJcbiAgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4+XG4gIENsaWNrIE1lIVxuPC9idXR0b24+XG4iXX0=