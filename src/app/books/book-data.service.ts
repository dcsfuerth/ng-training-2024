import { Injectable } from '@angular/core';
import { Book } from './book.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  deleteBook(isbn: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/books/${isbn}`);
  }

  getBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:3000/books/${isbn}`);
  }
}
