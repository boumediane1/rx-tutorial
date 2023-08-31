import { Observable } from 'rxjs';

const stream: Observable<number> = new Observable((consumer) => {
  consumer.next(1);
  consumer.next(2);
  consumer.next(3);
  // you can't next values after error or complete
  // you can't error and complete
});

stream.subscribe(console.log);
