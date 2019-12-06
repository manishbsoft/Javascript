const duplicates = require('./index');

test('function duplicates exists', () => {
  expect(typeof duplicates).toEqual('function');
});

test('remove duplicate values in an array[1, 2, 5, 7, 2, 4, 5].', () => {
  const arr = [1, 2, 5, 7, 2, 4, 5];
  const duplicateValues = duplicates(arr);

  expect(duplicateValues).toEqual([1, 2, 4, 5, 7]);
});

test('find duplicate values in an array ["a", "b", "c", "a"].', () => {
  const arr = ["a", "b", "c", "a"];
  const duplicateValues = duplicates(arr);

  expect(duplicateValues).toEqual(["a", "b", "c"]);
});

test('find duplicate values in an array[2, "a", "b", 2, "c", "a", 4].', () => {
  const arr = [2, "a", "b", 2, "c", "a", 4];
  const duplicateValues = duplicates(arr);

  expect(duplicateValues).toEqual([2, "a", "b", "c"]);
});
