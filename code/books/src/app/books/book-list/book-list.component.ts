import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Book } from '../book.interface';
import { BookDataService } from '../book-data.service';
import { WarenkorbService } from '../warenkorb.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'})
export class BookListComponent implements OnInit, OnChanges, OnDestroy {

  filterValue: string = '';

  coverIsVisible = true;

  breite = 50;

  books: Book[] = [];

  constructor(
    private bookDataService: BookDataService, 
    private warenkorbService: WarenkorbService) {
  }

  getWarenkorb() {
    return this.warenkorbService.warenkorb;
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

  async ngOnInit(): Promise<void> { 
    console.log('ngOnInit');

    // const promise1 = this.bookDataService.getBooks();
    // const promise2 = this.bookDataService.getBooks();
    // const promise3 = this.bookDataService.getBooks();
    // const promise4 = this.bookDataService.getBooks();
    // const data = await Promise.all([promise1, promise2, promise3, promise4]);
    

    // this.bookDataService.getBooks().then((data) => console.log('books', data));

    this.books = await this.bookDataService.getBooks();
    console.log('books', this.books);




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
  }
  
  buyBook(book: Book) {
    const warenkorbItem = {
      isbn: book.isbn,
      name: book.title,
      preis: book.price,
      menge: 1
    };  
    this.warenkorbService.addToWarenkorb(warenkorbItem);
  }
    
    

}
