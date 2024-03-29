import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './books/welcome/welcome.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { CalculatorComponent } from './shared/calculator/calculator.component';
import { BookDataService } from './books/book-data.service';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { bookGuard } from './books/book.guard';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'books', component: BookListComponent},
  { path: 'calc', component: CalculatorComponent},
  { path: 'details/:isbn', component: BookDetailComponent, canActivate: [bookGuard] },
  { path: '**', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
