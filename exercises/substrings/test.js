const substrings = require('./index');

test('Substrings function exists', () => {
  expect(substrings).toBeDefined();
});

test('Substrings returns all possible substrings with their frequency in the specified format', () => {
  expect(substrings('abc')).toEqual("1:a,1:ab,1:abc,1:b,1:bc,1:c");
});

test('Substrings handles repeated characters', () => {
  expect(substrings('aab')).toEqual("2:a,1:aa,1:aab,1:ab,1:b");
});

test('Substrings ignores capitalization, spaces, and special characters', () => {
  expect(substrings('Banana boat')).toEqual("4:a,2:an,2:ana,2:b,2:n,2:na,1:ab,1:abo,1:aboa,1:aboat,1:anab,1:anabo,1:anaboa,1:anaboat,1:anan,1:anana,1:ananab,1:ananabo,1:ananaboa,1:ananaboat,1:at,1:ba,1:ban,1:bana,1:banan,1:banana,1:bananab,1:bananabo,1:bananaboa,1:bananaboat,1:bo,1:boa,1:boat,1:nab,1:nabo,1:naboa,1:naboat,1:nan,1:nana,1:nanab,1:nanabo,1:nanaboa,1:nanaboat,1:o,1:oa,1:oat,1:t");
});