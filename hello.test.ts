import { exhaustAll, interval, map, take } from 'rxjs';

const numbers = interval(1000).pipe(take(3));

const letters = interval(500).pipe(
  take(3),
  map((i) => String.fromCharCode(i + 97)),
);

const project = (number: number) => letters.pipe(map((letter) => [number, letter]));

// exhaustAll goes like hold on, I have not yet exhausted the 1st inner observable
// and it lets it finish, the 2nd inner observable begins
// before the 1st one completed, so we never looked at the 2nd one
numbers.pipe(map(project), exhaustAll()).subscribe(console.log);

// Expected output:
// [ 0, 'a' ]
// [ 0, 'b' ]
// [ 0, 'c' ]
// [ 2, 'a' ]
// [ 2, 'b' ]
// [ 2, 'c' ]
