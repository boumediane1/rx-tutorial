import { filter, interval, map } from 'rxjs';

interval(500)
  .pipe(
    filter((value) => value % 2 === 0),
    map((value) => value * 2),
  )
  .subscribe(console.log);
