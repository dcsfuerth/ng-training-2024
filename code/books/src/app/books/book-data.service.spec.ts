
import { of } from 'rxjs';
import { BookDataService } from './book-data.service';

describe('BookDataService', () => {

  let bookDataService: BookDataService;
  let mockHttp: any;
  
  beforeEach(() => {
    // TestBed.configureTestingModule({});
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    bookDataService = new BookDataService(mockHttp);
  });

  it('should be created', () => {
    expect(bookDataService).toBeTruthy();
  });

  it('should load an existing book using the correct URL', () => {
    const book = { isbn: '42', name: 'Peters Angular-Kurs' };
    mockHttp.get.and.returnValue(of(book));    

    bookDataService.getBook('42');

    expect(mockHttp.get).toHaveBeenCalledWith('http://localhost:3000/books/42');
  })
});

