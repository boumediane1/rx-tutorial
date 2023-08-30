import { interval } from 'rxjs';

const s = interval(1000);
s.subscribe((value) => console.log(value, process.hrtime()));

// Expected output:
// nexting 1...
// 1 [ 38423, 597598882 ]
// nexting 2...
// 2 [ 38423, 599097102 ]
// nexting 3...
// 3 [ 38423, 599250068 ]

// This is how you do it declaratively instead of imperatively
