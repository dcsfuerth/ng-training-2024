import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookFilterPipe } from './books/book-filter.pipe';
import { BookListComponent } from './books/book-list/book-list.component';
import { WelcomeComponent } from './books/welcome/welcome.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFilterPipe,
    BookDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    provideClientHydration(), provideHttpClient(withFetch()),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
