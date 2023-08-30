import { Subject } from 'rxjs';

const s = new Subject<number>();

s.subscribe((value) => console.log('subscription 1: ', value, process.hrtime()));

setTimeout(() => {
  s.subscribe((value) => console.log('subscription 2: ', value, process.hrtime()));
}, 500);

console.log('nexting 1...');
s.next(1);

setTimeout(() => {
  console.log('nexting 2...');
  s.next(2);
}, 1000);

setTimeout(() => {
  console.log('nexting 3...');
  s.next(3);
}, 2000);

// Expected output:
// nexting 1...
// subscription 1:  1 [ 55140, 17471324 ]
// nexting 2...
// subscription 1:  2 [ 55141, 19358819 ]
// subscription 2:  2 [ 55141, 19742184 ]
// nexting 3...
// subscription 1:  3 [ 55142, 18830861 ]
// subscription 2:  3 [ 55142, 19213779 ]

// Subscription 2 was not created until 500 milliseconds
// but the value 1 was nexted immediately
