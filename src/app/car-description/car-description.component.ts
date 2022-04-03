/* file car-description.component.ts */
import { Component } from '@angular/core';

@Component({
  selector: 'app-car-description',
  template: `
    <h1 [textContent]="car.model"></h1>
    <img [src]="car.img" />
    <br>
    <button [disabled]="!car.available">Compra</button>
  `
})
export class CarDescriptionComponent {
  car = {
    model: 'Alfa Romeo Giulia',
    img: 'assets/images/alfa-giulia.jpg',
    available: false
  };
  constructor() {
    setTimeout(() => {
      this.car.model = 'Nuova ' + this.car.model;
      this.car.img = 'assets/images/nuova-alfa-giulia.jpg';
      this.car.available = true;
    }, 3000);
  }
}
