import { interval } from 'rxjs';

const s = interval(1000);
s.subscribe((value) => console.log('subscription 1: ', value, process.hrtime()));

setTimeout(() => {
  s.subscribe((value) => console.log('subscription 2: ', value, process.hrtime()));
}, 500);

// Expected output:
// subscription 1:  0 [ 56732, 400681117 ]
// subscription 2:  0 [ 56732, 902042465 ]
// subscription 1:  1 [ 56733, 401290826 ]
// subscription 2:  1 [ 56733, 902813118 ]
// subscription 1:  2 [ 56734, 401580510 ]
// subscription 2:  2 [ 56734, 903155090 ]
// ...

// The two subscriptions are staggered by 500 milliseconds.
// Each subscription creates its own interval stream.
// Unlike Subject, where there's a single shared stream,
// observables like 'interval' create individual streams for each subscriber.

// Observables are unicast, meaning each subscriber gets its own independent stream.
// Subjects, on the other hand, are multicast, sharing the same stream among all subscribers.
