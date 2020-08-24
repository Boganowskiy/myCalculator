import calcFromRPN from '../src/functions/calcFromRPN';

const rpn1 = [1, 2, '+', 4, '*', 3, '+'];
const rpn2 = [0, 4, '-'];
const rpn3 = [12, 3, '+', 4, '*', 15, 9, '-', 2, '/', '-'];
const rpn4 = [12];
const rpn5 = [];
test('calcFromRPN', () => {
  expect(calcFromRPN(rpn1)).toEqual(15);
  expect(calcFromRPN(rpn2)).toEqual(-4);
  expect(calcFromRPN(rpn3)).toEqual(57);
  expect(calcFromRPN(rpn4)).toEqual(12);
  expect(calcFromRPN(rpn5)).toEqual('invalid expression');
});
