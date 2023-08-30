import { Subject } from 'rxjs';

const s = new Subject<number>();

let i = 0;
setInterval(() => {
  s.next(i++);
}, 1000);

setInterval(() => {
  s.next(i++);
}, 500);

// side effect: you now have a piece of code that mutates the shared more or less global variable
