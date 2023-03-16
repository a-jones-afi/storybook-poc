import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonComponent {
    /**
     * Is this the principal call to action on the page?
     */
    primary: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * Button contents
     *
     * @required
     */
    label: string;
    /**
     * Optional click handler
     */
    click: EventEmitter<string>;
    onClick(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "lib-afi-button", never, { "primary": "primary"; "backgroundColor": "backgroundColor"; "label": "label"; }, { "click": "click"; }, never, never, true, never>;
}
//# sourceMappingURL=button.component.d.ts.map