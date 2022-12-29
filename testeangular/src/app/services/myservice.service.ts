import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor() {}

  getMessage(): string {
    return 'Olá essa e a mensagem teste';
  }
}
