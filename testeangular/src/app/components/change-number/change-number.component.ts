import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss'],
})
export class ChangeNumberComponent {
  @Output() changenumber = new EventEmitter();

  constructor() {}

  handleclick() {
    this.changenumber.emit();
  }
}
