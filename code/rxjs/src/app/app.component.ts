import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { ReplaySubject, Subject, map, of, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router) {

  }

  title = 'ngrx';

  obs3$ = timer(0, 500);

  obs1$ = of(42, 43, 44);
  ngOnInit() {
    // this.obs3$.subscribe(
    //   // val => console.log('obs3$:', val)
    //   console.log
    // );

    const obs4$ = this.obs3$.pipe(
      map(val => val * 3),
    );

    // const obs5$ = obs4$.pipe(
    //   filter(val => val % 2 === 0),
    // );
    // obs5$.subscribe(console.log);

    // this.obs1$.subscribe({
    //   next: val => console.log('obs1$:', val),
    //   error: err => console.log('obs1$:', err),
    //   complete: () => console.log('obs1$:', 'complete')
    // }
    // );


    const mySubject1$ = new ReplaySubject(); // Cache-Größe
    mySubject1$.next('Jemand zuhause?');
    mySubject1$.next('Jemand zuhause?');
    mySubject1$.next('Jemand zuhause?');
    mySubject1$.next('Jemand zuhause?');
    mySubject1$.next('Jemand zuhause?');
    mySubject1$.next('Jemand zuhause?');
    mySubject1$.next('Jemand zuhause?');
    mySubject1$.next('Jemand zuhause?');
    mySubject1$.next('Jemand zuhause?');
    mySubject1$.next('Jemand zuhause?');
    mySubject1$.next('Jemand zuhause?');
    mySubject1$.next('Jemand zuhause?');
    mySubject1$.next('Jemand zuhause?');
    mySubject1$.next('Jemand zuhause?');
    mySubject1$.next('Jemand zuhause?');
    mySubject1$.next('Jemand zuhause?111');
    mySubject1$.subscribe(e => console.log(e));

    const mySubject$ = new Subject();
    mySubject$.next('Jemand zuhause?');
    mySubject$.subscribe(e => console.log(e));
    mySubject$.subscribe(e => console.log(e));
    mySubject$.next('Hallo');
    mySubject$.next('Welt :-) ');


  }

  geheZu1() {
    this.router.navigate(['/1']);
  }
  geheZu2() {
    this.router.navigate(['/2']);
  }
}
