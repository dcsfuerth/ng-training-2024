import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book.interface';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  // books | bookFilter: 'isbn,title' : '16' 

  transform(books: Book[], filterValue: string = ''): Book[] {

    if (!filterValue) {
      return books;
    }
    const searchValue = filterValue.toLowerCase();
    const result = books.filter(book => book.title.toLowerCase().includes(searchValue));
    return result
  }

}
