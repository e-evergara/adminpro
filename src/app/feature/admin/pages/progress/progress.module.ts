import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import { ControlModule } from '../../shared/controls/control.module';

@NgModule({
  declarations: [ProgressComponent],
  imports: [CommonModule, ControlModule],
})
export class ProgressModule {}
