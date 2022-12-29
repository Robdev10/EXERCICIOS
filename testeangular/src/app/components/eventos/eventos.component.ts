import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  providers: [MyserviceService],
})
export class EventosComponent {
  show: boolean = false;
  message: string = '';

  showmessage(): void {
    this.show = !this.show;
  }

  constructor(private myserviceService: MyserviceService) {
    this.message = this.myserviceService.getMessage();
  }

  showMessage() {
    alert(this.message);
  }
}
