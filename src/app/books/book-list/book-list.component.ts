import { Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Book } from '../book.interface';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'})
export class BookListComponent implements OnInit, OnChanges {

  filterValue: string = '';

  coverIsVisible = true;

  breite = 50;

  books: Book[] = [
    {
      title: 'Angular 16',
      isbn: '123456',
      price: 9.99,
      coverUrl: "https://m.media-amazon.com/images/I/71rUdxFkaCL._AC_UY218_.jpg",
      rating: 4.5
    },
    {
      title: 'Angular 17 is great',
      isbn: '123457',
      price: 17.99,
      coverUrl: "https://m.media-amazon.com/images/I/51zVmluMLCL._AC_UY218_.jpg",
      rating: 4.7
      }
  ];

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }
    
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {  
  }
  upRating($event: string) {
    console.log('upRating', $event);

    const book = this.books.find(book => book.isbn === $event);
    if (book) {
      book.rating = Math.min(5, parseFloat((book.rating + 0.1).toFixed(2)));
    }
  }
    
}
