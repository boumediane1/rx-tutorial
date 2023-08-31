import { interval, map, take } from 'rxjs';

const numbers = interval(5000).pipe(take(3));

numbers
  .pipe(
    map(() =>
      interval(5000).pipe(
        take(3),
        map(() => 'inner'),
      ),
    ),
  )
  .subscribe((observable) => {
    console.log('outer');
    observable.subscribe(console.log);
  });
