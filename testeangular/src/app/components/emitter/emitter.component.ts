import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss'],
})
export class EmitterComponent {
  constructor() {}

  mynumber: number = 0;

  onchangenumber() {
    this.mynumber = Math.floor(Math.random() * 10);
  }
}
