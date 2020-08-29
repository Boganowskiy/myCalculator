import operators from './operators';
import { isOperator, isNumber } from './checkValueType';

const calcFromRPN = (rpn) => {
  if (rpn.length <= 1) {
    if (isNumber(rpn[0])) {
      return rpn[0];
    }
    throw new Error('Please, enter expression');
  }
  const res = rpn.reduce((operandsStack, item) => {
    if (isOperator(item)) {
      const b = operandsStack.pop();
      const a = (operators[item].type === 'binary') ? operandsStack.pop() : null;
      const result = operators[item].operation(a, b);
      if (Number.isNaN(result) || result === null) {
        throw new Error('invalid expression');
      }
      operandsStack.push(result);
    } else {
      operandsStack.push(item);
    }
    return operandsStack;
  }, []);
  return res[0];
};

export default calcFromRPN;
