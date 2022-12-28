import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent {
  name: string = 'robson';
  idade: number = 39;
  job = 'programador';

  constructor() {}

  nomecompleto() {
    this.name = 'Robson Roberto do Carmo';
  }
}
