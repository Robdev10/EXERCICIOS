import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  username = 'samuel';

  userData = {
    email: 'robsondev10@gmail.com',
    role: 'Supervisor',
  };
  title = 'testeangular';
}
