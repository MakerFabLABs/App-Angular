import { Component } from '@angular/core';

@Component({
  selector: 'app-convertitore',
  template: `

  <div class="container-1">
    <h1>Convertitore Euro/Dollaro</h1>
    <label for="amount"> Euro da Convertire</label>
    <div class="container-2">
      <input
        id="amount"
        size="10"
        [ngModel]='eur'
        (ngModelChange)="update($event)">
      <span style="margin-left: 10px;">
        {{ eur | currency:'EUR' }} = {{ usd | currency:'USD' }}
      </span>
    </div>
    <button (click)="update(eur + 10)">Aggiungi 10 EUR</button>
   </div>
  `,
  styles:[
    `
    .container-1 {
      margin:10px;
      padding:20px;
      border:2px solid black;
      width:600px;
      background-color:#F0F0F0;
    }

    `
  ]

})
export class Convertitore {
  eur = 0;
  usd = 0;
  conversionRate = 1.1498;
  update(value) {
    this.eur = +value || 0;
    this.usd = this.eur * this.conversionRate;
  }
}
