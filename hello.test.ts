import { delay, filter, interval, map } from 'rxjs';

const customOperator = () => () =>
  interval(500).pipe(
    filter((value) => value % 2 === 0),
    map((value) => value * 2),
    delay(3000),
  );

interval(500).pipe(customOperator()).subscribe(console.log);
