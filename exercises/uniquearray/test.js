const unique = require('./index');

test('unique function is defined', () => {
  expect(typeof unique).toEqual('function');
});

test('remove duplicate values from an array', () => {
  const array = [1,1,2,3,4,4];
  const unq = unique(array);
  expect(unq).toEqual([1,2,3,4]);
});
