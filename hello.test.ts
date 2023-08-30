import { Observable } from 'rxjs';

const producer = new Observable((consumer) => {
  let i = 0;
  const interval = setInterval(() => consumer.next(i++), 1000);
  return () => clearInterval(interval);
});

const subscription = producer.subscribe((value) => console.log(value));

setTimeout(() => subscription.unsubscribe(), 5000);

// observable -> producer
// observer -> consumer

// Expected output:
// 0
// 1
// 2
// 3
