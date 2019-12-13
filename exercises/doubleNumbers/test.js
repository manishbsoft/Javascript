const double = require('./index');

test('double function is defined', () => {
  expect(typeof double).toEqual('function');
});

test('double the numbers of array', () => {
  const arr =  [1, 2, 3];
  expect(count).toEqual([2,4,6]);
});
