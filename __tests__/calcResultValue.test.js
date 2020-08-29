import calcResultValue from '../src/functions/calcResultValue';

const expr1 = '0';
const expr2 = '-5';
const expr3 = '1+1';
const expr4 = '(2+3)*4';
const expr5 = '18-12/4';
const expr6 = '(-100)*5/4';
const expr7 = '12+(15/3-8)+24';

test('resultCalc', () => {
  expect(calcResultValue(expr1)).toEqual(0);
  expect(calcResultValue(expr2)).toEqual(-5);
  expect(calcResultValue(expr3)).toEqual(2);
  expect(calcResultValue(expr4)).toEqual(20);
  expect(calcResultValue(expr5)).toEqual(15);
  expect(calcResultValue(expr6)).toEqual(-125);
  expect(calcResultValue(expr7)).toEqual(33);
});
