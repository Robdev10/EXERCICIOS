import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-usuarifilho',
  templateUrl: './usuarifilho.component.html',
  styleUrls: ['./usuarifilho.component.scss'],
  providers: [MyserviceService],
})
export class UsuarifilhoComponent {
  message: string;

  constructor(private myserviceService: MyserviceService) {
    this.message = this.myserviceService.getMessage();
  }

  showmessage() {
    alert(this.message);
  }
}
