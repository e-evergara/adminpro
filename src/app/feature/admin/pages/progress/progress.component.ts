import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  public percentage: number = 0;

  changedValue(valueChanged: number) {
    this.percentage = valueChanged;
  }
}
