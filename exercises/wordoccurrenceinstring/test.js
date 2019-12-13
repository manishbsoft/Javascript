const wordCount = require('./index');

test('wordCount function is defined', () => {
  expect(typeof wordCount).toEqual('function');
});

test('find and count duplicate words in a string', () => {
  const str = 'I live in pune and I love Pune';
  const count = wordCount(str);
  expect(count).toEqual({ i: 2, live: 1, in: 1, pune: 2, and: 1, love: 1 });
});
