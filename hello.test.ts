import { Subject } from 'rxjs';

// whether we subscribe or not, the code is still running
// and the program will not exit right away
// The code does the same thing regardless of the number of subscribers
const s = new Subject<number>();

console.log('nexting 1...');
s.next(1);

setTimeout(() => {
  console.log('nexting 1...');
  s.next(2);
}, 1000);

setTimeout(() => {
  console.log('nexting 2...');
  s.next(3);
}, 2000);
