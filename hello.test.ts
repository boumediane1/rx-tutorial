import { Subject, combineLatest } from 'rxjs';

it('works', () => {
  const a = new Subject();
  const b = new Subject();
  const c = combineLatest([a, b]);

  // consumer
  c.subscribe(console.log);

  // producer
  a.next('hello world');
  b.next('goodbye world');
});

// Expected output: [ 'hello world', 'goodbye world' ]
// The combineLatest operator merges the latest values from two source streams
// into a third stream, emitting combined values whenever either source stream emits.
