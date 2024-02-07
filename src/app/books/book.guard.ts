import { CanActivateFn } from '@angular/router';

export const bookGuard: CanActivateFn = (route, state) => {
  const isbn = route.paramMap.get('isbn');
  const result = isbn === '123456';
  if (!result) {
    alert('das geht Dich nichts an');
  }
  return result;
};
