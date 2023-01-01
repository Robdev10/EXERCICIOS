import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent {
  animals: Animal[] = [];

  /*animal: Animal = {
    name: 'teste',
    type: 'alguma coisa',
    age: 8,
  };*/

  animaldetails = '';

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  showage(animal: Animal) {
    this.animaldetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }

  removeanimal(animal: Animal) {
    console.log('removendo animal....');
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
