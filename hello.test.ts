import { interval, map, switchMap, take } from 'rxjs';

const numbers = interval(1000).pipe(take(3));

const letters = interval(500).pipe(
  take(3),
  map((i) => String.fromCharCode(i + 97)),
);

const project = (number: number) => letters.pipe(map((letter) => [number, letter]));

// switchMap = switchAll + map
// concatMap = concatAll + map
// mergeMap = mergeAll + map
// exhaustMap = exhaustAll + map
numbers.pipe(switchMap(project)).subscribe(console.log);

// Expected output:
// [ 0, 'a' ]
// [ 1, 'a' ]
// [ 2, 'a' ]
// [ 2, 'b' ]
// [ 2, 'c' ]
