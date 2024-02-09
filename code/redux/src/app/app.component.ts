import { Component } from '@angular/core';
import { Store, createAction, createReducer, on } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { increment,decrement,reset } from './counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'redux';
  count$: Observable<number> = of(0);;

  constructor(public store: Store<{ count: number }>) {
    this.count$ = store.select('count'); // Selektor
  }


  ngOnInit() {
  }

  doIncrement() {
    this.store.dispatch(increment());
  }

  doDecrement() {
    this.store.dispatch(decrement());
  }
  doReset() {
    this.store.dispatch(reset());
  }

}
