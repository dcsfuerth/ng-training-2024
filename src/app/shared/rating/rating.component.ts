import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnChanges  {

  @Input()
  public id : string = '';

  @Input()
  public rating : number = 0;

  @Output()
  notifyUp: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
  }
  rateUp() {
    this.notifyUp.emit(this.id);
  }
  
  rateDown() {
  }
        
}
