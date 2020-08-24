import tokenize from '../src/functions/tokenize';

test('tokenization', () => {
  expect(tokenize('')).toEqual([]);
  expect(tokenize('11')).toEqual([11]);
  expect(tokenize('0+')).toEqual([0, '+']);
  expect(tokenize('1+2*3+(25/5)')).toEqual([1, '+', 2, '*', 3, '+', '(', 25, '/', 5, ')']);
  expect(tokenize('1.21+24.5')).toEqual([1.21, '+', 24.5]);
})
