import { concatAll, interval, map, take } from 'rxjs';

const numbers = interval(1000).pipe(take(3));

const letters = interval(500).pipe(
  take(3),
  map((i) => String.fromCharCode(i + 97)),
);

const project = (number: number) => letters.pipe(map((letter) => [number, letter]));

// runs outer observables in order
// subscribes to next when previous completes
numbers.pipe(map(project), concatAll()).subscribe(console.log);

// Expected output:
// [ 0, 'a' ]
// [ 0, 'b' ]
// [ 0, 'c' ]
// [ 1, 'a' ]
// [ 1, 'b' ]
// [ 1, 'c' ]
// [ 2, 'a' ]
// [ 2, 'b' ]
// [ 2, 'c' ]
