import { Component } from '@angular/core';

@Component({
  selector: 'app-zweite-seite',
  standalone: true,
  imports: [],
  templateUrl: './zweite-seite.component.html',
  styleUrl: './zweite-seite.component.css'
})
export class ZweiteSeiteComponent {
  constructor() { 
    console.log('ZweiteSeiteComponent.constructor()');
  }
}
