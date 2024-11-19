import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-progress-bar',
  templateUrl: './button-progress-bar.component.html',
  styles: [],
})
export class ButtonProgressBarComponent implements OnInit {
  @Input() placeholder: string = 'Progress';
  @Input() btnClass: string = 'btn-primary';
  @Input() max: number = 100;
  @Input() min: number = 0;
  @Input('value') progress = 0;
  @Input('token') increase = 5;
  @Output('value') changeValue: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  public minus(): void {
    if (!this.isValidValueProgres('minus')) {
      return;
    }
    this.progress -= this.increase;
    this.eventEmitChangedValue();
  }

  public add(): void {
    if (!this.isValidValueProgres('add')) {
      return;
    }
    this.progress += this.increase;
    this.eventEmitChangedValue();
  }

  private isValidValueProgres(operation: string): boolean {
    if (this.isLessAtMin() && operation == 'minus') {
      this.progress = this.min;
      return false;
    }

    if (this.isGreaterAtMax() && operation == 'add') {
      this.progress = this.max;
      return false;
    }
    return true;
  }

  private isLessAtMin(): boolean {
    return this.progress <= this.min ? true : false;
  }

  private isGreaterAtMax(): boolean {
    return this.progress >= this.max ? true : false;
  }

  private eventEmitChangedValue() {
    this.changeValue.emit(this.progress);
  }
}
