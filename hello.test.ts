import { Subject, merge } from 'rxjs';

it('works', () => {
  const a = new Subject();
  const b = new Subject();
  const c = merge(a, b);

  // consumer
  c.subscribe(console.log);

  // producer
  a.next('hello world');
  b.next('goodbye world');
});

// Expected output:
// hello world
// goodbye world

// The merge operator combines events individually from multiple source streams,
// allowing values from both sources to be interleaved in a single output stream.
