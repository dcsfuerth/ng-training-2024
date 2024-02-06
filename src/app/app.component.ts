import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'book-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  {
  public title: string = 'books';
}
