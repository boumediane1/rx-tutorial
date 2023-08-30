import { Subject } from 'rxjs';

const s = new Subject<number>();
s.subscribe((value) => console.log(value, process.hrtime()));

console.log('nexting 1...');
s.next(1);
console.log('nexting 2...');
s.next(2);
console.log('nexting 3...');
s.next(3);

// Expected output:
// nexting 1...
// 1 [ 38423, 597598882 ]
// nexting 2...
// 2 [ 38423, 599097102 ]
// nexting 3...
// 3 [ 38423, 599250068 ]

// When calling 'next', the subscription callback is immediately executed,
// logging the emitted value along with the high-resolution time from
// the Node.js 'process.hrtime()' function.
