import { Component, Input } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss'],
  providers: [MyserviceService],
})
export class EmitterComponent {
  message: string;
  constructor(private myserviceService: MyserviceService) {
    this.message = this.myserviceService.getMessage();
  }

  mynumber: number = 0;

  onchangenumber() {
    this.mynumber = Math.floor(Math.random() * 10);
  }

  showMessage() {
    alert(this.message);
  }
}
