import { isNumber, isOperator } from './checkValueType';

export default (inputString) => {
  let currentNumber = '';
  const result = [];
  for (let i = 0; i <= inputString.length; i += 1) {
    const item = inputString[i];
    if (isNumber(item) || item === '.') {
      currentNumber += item;
    } else if (isOperator(item)) {
      if (currentNumber !== '') {
        result.push(Number(currentNumber));
        currentNumber = '';
      }
      result.push(item);
    }
    if (i === inputString.length && currentNumber !== '') {
      result.push(Number(currentNumber));
    }
  }
  return result;
}
