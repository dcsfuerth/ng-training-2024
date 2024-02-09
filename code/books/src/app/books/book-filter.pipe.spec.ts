import { BookFilterPipe } from './book-filter.pipe';

const book = {title: 'angular ', isbn:'', price:0, coverUrl: '', rating:5};

describe('BookFilterPipe', () => {

  let pipe: BookFilterPipe;

  beforeEach(() => {
    pipe = new BookFilterPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('work on an empty book list', () => {
    const result = pipe.transform([], 'test');
    expect(result).toEqual([]);
  });

  it('works with a single book with non-matching title', () => {
    const result = pipe.transform([book], 'PHP');
    expect(result).toEqual([]);
  });

  it('work with a single matching book', () => {
    const result = pipe.transform([book], 'angular');
    expect(result).toEqual([book]);
  });

  it('ignore upper/lowercase', () => {
    const result = pipe.transform([book], 'AnGuLaR');
    expect(result).toEqual([book]);
  });
  
});    