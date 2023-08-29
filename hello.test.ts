import { combineLatest, Subject } from 'rxjs';

it('works', () => {
  const a = new Subject<number>();
  const b = new Subject<number>();

  const c = combineLatest([a, b]);

  // consumer
  c.subscribe(([a, b]) => console.log(a + b));

  // producer
  a.next(3);
  b.next(3);
  b.next(4);
});

// Expected output:
// hello world
// goodbye world

// when the value 4 is emitted into stream b, it triggers an update in c
// because c combines the latest values from both streams a and b.
// The subscriber receives the previous value of a (which is 3, the latest on a)
// and the latest value on b (which is 4) and then computes and logs the result.
