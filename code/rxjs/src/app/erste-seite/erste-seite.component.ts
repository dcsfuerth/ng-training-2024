import { Component } from '@angular/core';
import { Observer, Subject, Subscription, interval, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-erste-seite',
  standalone: true,
  imports: [],
  templateUrl: './erste-seite.component.html',
  styleUrl: './erste-seite.component.css'
})
export class ErsteSeiteComponent {

  mySubscriptions: Subscription[] = [];

  destroy$ = new Subject();

  ngOnInit() {
    const myObs1$ = interval(1000);
    const myObs2$ = myObs1$.pipe(takeUntil(this.destroy$));
    myObs2$.subscribe(x => console.log(x));
  }

  ngOnDestroy() {
    this.destroy$.next('bumm');}
}
