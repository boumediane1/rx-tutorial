import { interval, map, mergeAll, take } from 'rxjs';

const numbers = interval(1000).pipe(take(3));

const letters = interval(500).pipe(
  take(3),
  map((i) => String.fromCharCode(i + 97)),
);

const project = (number: number) => letters.pipe(map((letter) => [number, letter]));

numbers.pipe(map(project), mergeAll()).subscribe(console.log);

// Expected output:
// [ 0, 'a' ]
// [ 0, 'b' ]
// [ 1, 'a' ]
// [ 0, 'c' ]
// [ 1, 'b' ]
// [ 2, 'a' ]
// [ 1, 'c' ]
// [ 2, 'b' ]
// [ 2, 'c' ]
