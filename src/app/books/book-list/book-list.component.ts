import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Book } from '../book.interface';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'})
export class BookListComponent implements OnInit, OnChanges, OnDestroy {

  filterValue: string = '';

  coverIsVisible = true;

  breite = 50;

  books: Book[] = [];

  constructor(private bookDataService: BookDataService) {
    
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');  
  }

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }
    
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void { 
    console.log('ngOnInit');
    this.bookDataService.getBooks().subscribe(
          books => this.books = books);
  }
  upRating($event: string) {
    console.log('upRating', $event);

    const book = this.books.find(book => book.isbn === $event);
    if (book) {
      book.rating = Math.min(5, parseFloat((book.rating + 0.1).toFixed(2)));
    }
  }

  deleteBook(isbn: string) {
    this.bookDataService.deleteBook(isbn).subscribe((data) => {
      this.ngOnInit();
      alert('Book deleted')});

    alert('');
      
      
      
  }
  
    

}
