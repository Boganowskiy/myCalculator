import tokenize from '../src/functions/tokenize';

test('tokenization', () => {
  expect(tokenize('')).toEqual([]);
  expect(tokenize('11')).toEqual([11]);
  expect(tokenize('0+')).toEqual([0, '+']);
  expect(tokenize('1+2*3+(25/5)')).toEqual([1, '+', 2, '*', 3, '+', '(', 25, '/', 5, ')']);
  expect(tokenize('1.21+24.5')).toEqual([1.21, '+', 24.5]);
  expect(tokenize('-1')).toEqual(['un-', 1]);
  expect(tokenize('-1-45')).toEqual(['un-', 1, '-', 45]);
  expect(tokenize('12+(-4-5)')).toEqual([12, '+', '(', 'un-', 4, '-', 5, ')']);
});

test('negative tokenization', () => {
  expect(() => tokenize('12(15')).toThrow('invalid expression');
  expect(() => tokenize('12345)')).toThrow('invalid expression');
});
