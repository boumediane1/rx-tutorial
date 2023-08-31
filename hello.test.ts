import { interval, map, switchAll, take } from 'rxjs';

const numbers = interval(1000).pipe(take(3));

const letters = interval(500).pipe(
  take(3),
  map((i) => String.fromCharCode(i + 97)),
);

const project = (number: number) => letters.pipe(map((letter) => [number, letter]));

// when there's a new observable, it just cancels the subscription
// to the previous one immediately
// switches over or subscribe to the latest one
numbers.pipe(map(project), switchAll()).subscribe(console.log);

// Expected output:
// [ 0, 'a' ]
// [ 1, 'a' ]
// [ 2, 'a' ]
// [ 2, 'b' ]
// [ 2, 'c' ]
