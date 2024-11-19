import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ButtonProgressBarComponent } from './button-progress-bar/button-progress-bar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [ProgressBarComponent, ButtonProgressBarComponent],
  exports: [ProgressBarComponent, ButtonProgressBarComponent],
  imports: [CommonModule, FormsModule],
})
export class ControlModule {}
