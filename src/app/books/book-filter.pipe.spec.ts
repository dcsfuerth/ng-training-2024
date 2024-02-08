import { BookFilterPipe } from './book-filter.pipe';

const book = {title: 'angular', isbn:'', price:0, coverUrl: '', rating:5};

describe('BookFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new BookFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('work on an empty book list', () => {
    const pipe = new BookFilterPipe();
    const result = pipe.transform([], 'test');
    expect(result).toEqual([]);
  });

  it('work with a single book', () => {
    const pipe = new BookFilterPipe();
    const result = pipe.transform([book], 'PHP');
    expect(result).toEqual([]);
  });
    
  it('work with a single matching book', () => {
    const pipe = new BookFilterPipe();
    const result = pipe.transform([book], 'angular');
    expect(result).toEqual([book]);
  });

  it('ignore upper/lowercase', () => {
    const pipe = new BookFilterPipe();
    const result = pipe.transform([book], 'AnGuLaR');
    expect(result).toEqual([book]);
  });
  
});    