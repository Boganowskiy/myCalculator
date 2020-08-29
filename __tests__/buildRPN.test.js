import buildRPN from '../src/functions/buildRPN';

test('build', () => {
  expect(buildRPN([1, '+', 1])).toEqual([1, 1, '+']);
  expect(buildRPN([3, '+', 4, '*', 2, '/', '(', 1, '-', 5, ')'])).toEqual([3, 4, 2, '*', 1, 5, '-', '/', '+']);
  expect(buildRPN(['(', 21, '+', 2, ')', '*', 4, '+', 3])).toEqual([21, 2, '+', 4, '*', 3, '+']);
  expect(buildRPN(['(', 10, '-', 15, ')', '*', 3])).toEqual([10, 15, '-', 3, '*']);
  expect(buildRPN(['un-', 1])).toEqual([1, 'un-']);
});

test('negative build', () => {
  expect(buildRPN([12, '+', '(', ')'])).toThrow('invalid expression, must be some elements beetwen brackets');
});
