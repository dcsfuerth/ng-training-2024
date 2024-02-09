import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signalState, patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

export const CounterStore = signalStore(
  withState({ count: 0 }),
  withComputed(({ count }) => ({
    doubleCount: computed(() => count() * 2),
  })),
  withMethods(({ count, ...store }) => ({
    increment() {
      patchState(store, { count: count() + 1 });
    },
    decrement() {
      patchState(store, { count: count() - 1 });
    },
  }))
);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  readonly store = inject(CounterStore);
  ngOnInit() {
    
    this.store.increment();
    console.log(this.store.count());
    console.log(this.store.doubleCount());
  }


  
}
