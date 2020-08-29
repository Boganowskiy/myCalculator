import calcFromRPN from '../src/functions/calcFromRPN';

const rpn1 = [1, 2, '+', 4, '*', 3, '+'];
const rpn2 = [0, 4, '-'];
const rpn3 = [12, 3, '+', 4, '*', 15, 9, '-', 2, '/', '-'];
const rpn4 = [12];
const rpn5 = [];
const rpn6 = [1, 'un-'];
const rpn7 = [21, 'un-', 4, 2, '*', 6, '-', '+'];
test('calcFromRPN', () => {
  expect(calcFromRPN(rpn1)).toEqual(15);
  expect(calcFromRPN(rpn2)).toEqual(-4);
  expect(calcFromRPN(rpn3)).toEqual(57);
  expect(calcFromRPN(rpn4)).toEqual(12);
  expect(calcFromRPN(rpn6)).toEqual(-1);
  expect(calcFromRPN(rpn7)).toEqual(-19);
});

test('negative calcFromRPN', () => {
  expect(() => calcFromRPN([...rpn2, '+'])).toThrow('invalid expression');
  expect(() => calcFromRPN(rpn5)).toThrow('Please, enter expression');
});
