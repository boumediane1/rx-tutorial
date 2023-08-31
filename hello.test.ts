import { filter, interval, map } from 'rxjs';

const fn1 = filter((value: number) => value % 2 === 0);

const fn2 = map((value: number) => value * 2);

fn2(fn1(interval(500))).subscribe(console.log);
