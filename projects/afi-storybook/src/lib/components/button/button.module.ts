import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './button.component';

@NgModule({
  imports: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonModule {}
