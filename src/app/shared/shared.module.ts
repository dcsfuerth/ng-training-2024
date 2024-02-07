import { NgModule } from '@angular/core';

import { CalculatorComponent } from './calculator/calculator.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    CalculatorComponent,
    RatingComponent,
  ],
  exports: [
    CalculatorComponent,
    RatingComponent,
  ],
})
export class SharedModule { }
