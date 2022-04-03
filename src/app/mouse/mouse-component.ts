import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse',
  template: `
    <div class="container">
      <div class="box" (mousemove)="onMouseMove($event)"></div>
      <span>X: {{ coord.x }}</span>
      <span>Y: {{ coord.y }}</span>
    </div>
  `,
  styles: [
    `
    .container{
      display: grid;
      width: 600px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      background-color:#C0C0C0;
      border: 0px solid black;
    }
    .box {
      grid-column: 1 / -1;
      width: 600px;
      height: 300px;
      border: 3px solid black;
      background-color:red;
    }
    span {
      font-size: 2em;
      grid-row: 2 / -1;
    }
    `
  ]
})
export class Mouse {
  coord = {
    x: 0,
    y: 0
  };
  onMouseMove(event) {
    this.coord.x = event.offsetX;
    this.coord.y = event.offsetY;
  }
}
