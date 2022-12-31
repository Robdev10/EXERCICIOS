import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usuaripai',
  templateUrl: './usuaripai.component.html',
  styleUrls: ['./usuaripai.component.scss'],
})
export class UsuaripaiComponent {
  @Input() message: string = '';

  constructor() {}
}
