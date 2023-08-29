import { from } from 'rxjs';

const a = from([from([1, 2]), from([2, 3]), from([3, 4])]);

// antipattern in RxjS
// you want to avoid nesting subscribe blocks
// because RxJS comes with built-in flattening operators
a.subscribe((observable) => observable.subscribe(console.log));
