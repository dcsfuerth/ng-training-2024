import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  x: string = '';
  y: string = '';
  result: number = 0;

  add() {
    this.result = +this.x + +this.y;
  }
  substract() {
    this.result = +this.x - +this.y;
  }
  clear() {
    this.x = ''
    this.y = '';
    this.result = 0;
  }

}
