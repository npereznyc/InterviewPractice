const substrings = require('./index');

test('Substrings function exists', () => {
  expect(substrings).toBeDefined();
});

test('Substrings returns all possible substrings with their frequency', () => {
  expect(substrings('abc')).toEqual({ 'a': 1, 'b': 1, 'c': 1, 'ab': 1, 'bc': 1, 'abc': 1 });
});

test('Substrings handles repeated characters', () => {
  expect(substrings('aab')).toEqual({ 'a': 2, 'b': 1, 'aa': 1, 'ab': 1, 'aab': 1 });
});