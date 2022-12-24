import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.scss'],
})
export class IfRenderComponent {
  canshow: boolean = true;
  name = 'robson';

  constructor() {}
}
