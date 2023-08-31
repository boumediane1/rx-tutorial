import { from, mergeAll } from 'rxjs';

const a = from([from([1, 2]), from([2, 3]), from([3, 4])]).pipe(mergeAll());

// this is the same thing as having nested subscribe blocks
a.subscribe(console.log);
