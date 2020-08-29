import operators from './operators';
import { isOperator, isNumber } from './checkValueType';

const calcFromRPN = (rpn) => {
  if (rpn.length <= 1) {
    if (isNumber(rpn[0])) {
      return rpn[0];
    }
    return 'invalid expression';
  }
  const res = rpn.reduce((operandsStack, item) => {
    if (isOperator(item)) {
      const b = operandsStack.pop();
      const a = operandsStack.pop();
      const result = operators[item].operation(a, b);
      operandsStack.push(result);
    } else {
      operandsStack.push(item);
    }
    return operandsStack;
  }, []);
  return res[0];
};

export default calcFromRPN;
