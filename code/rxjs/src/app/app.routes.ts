import { Routes } from '@angular/router';
import { ErsteSeiteComponent } from './erste-seite/erste-seite.component';
import { ZweiteSeiteComponent } from './zweite-seite/zweite-seite.component';

export const routes: Routes = [
    { path: '1', component: ErsteSeiteComponent },
    { path: '2', component: ZweiteSeiteComponent },
];
