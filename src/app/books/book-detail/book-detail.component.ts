import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { Book } from '../book.interface';

@Component({
  selector: 'book-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {

  public isbn: string = '';
  public book: Book | null = null;

  constructor(private route: ActivatedRoute, private bookDataService: BookDataService) {
  }

  ngOnInit() {
    this.isbn = this.route.snapshot.paramMap.get('isbn') || '';

    const sort = this.route.snapshot.queryParamMap.get('sort');
    console.log({sort})

    if (this.isbn) {
      this.bookDataService.getBook(this.isbn).subscribe(
        book => {
          this.book = book;
        }
      )
    }
  }


}
