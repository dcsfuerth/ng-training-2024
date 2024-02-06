import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'})
export class BookListComponent {

  filterValue: string = '';

  coverIsVisible = true;

  breite = 50;

  books = [
    {
      title: 'Angular 16',
      isbn: '123456',
      price: 9.99,
      coverUrl: "https://m.media-amazon.com/images/I/71rUdxFkaCL._AC_UY218_.jpg"
    },
    {
      title: 'Angular 17 is great',
      isbn: '123457',
      price: 17.99,
      coverUrl: "https://m.media-amazon.com/images/I/51zVmluMLCL._AC_UY218_.jpg"
      }
  ];

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }
    
}
