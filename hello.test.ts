it('works', () => {
  let a = 3;
  let b = 3;
  let c = a + b;
  expect(c).toBe(6);
  a++;
  c = a + b;
  expect(c).toBe(7);
});

// adding a value to a did not cause c to change
// the only c would change is if I explicitly update it
// I had to imperatively change the state of the program to keep it in sync
// hence, there's no reactivity
