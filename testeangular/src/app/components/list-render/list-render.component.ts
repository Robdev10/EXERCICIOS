import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'turca', type: 'dog', age: 4 },
    { name: 'tom', type: 'cat', age: 10 },
    { name: 'bob', type: 'dog', age: 5 },
    { name: 'frida', type: 'house', age: 1 },
  ];

  animal: Animal = {
    name: 'teste',
    type: 'alguma coisa',
    age: 8,
  };

  animaldetails = '';

  constructor() {}

  showage(animal: Animal) {
    this.animaldetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }
}
