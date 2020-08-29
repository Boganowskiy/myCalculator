import {
  isNumber, isOperator, isOpenBracket, isClosingBracket,
} from './checkValueType';

export default (inputString) => {
  let currentNumber = '';
  const result = [];
  let bracketsBalance = 0;
  for (let i = 0; i <= inputString.length; i += 1) {
    const item = inputString[i];
    if (isNumber(item) || item === '.') {
      currentNumber += item;
    } else if (isOperator(item)) {
      if (currentNumber !== '') {
        result.push(Number(currentNumber));
        currentNumber = '';
      }
      if (item !== '-') {
        if (isOpenBracket(item)) bracketsBalance += 1;
        if (isClosingBracket(item)) bracketsBalance -= 1;
        result.push(item);
      } else if (item === '-') {
        const prevItem = inputString[i - 1];
        if (!prevItem || (isOperator(prevItem) && prevItem !== ')')) {
          result.push('un-');
        } else {
          result.push(item);
        }
      }
    }
    if (i === inputString.length && currentNumber !== '') {
      result.push(Number(currentNumber));
    }
  }
  if (bracketsBalance !== 0) {
    throw new Error('invalid expression');
  }
  return result;
};
