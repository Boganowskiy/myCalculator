import * as check from './checkValueType';
import operators from './operators';

const buildRPN = (tokens) => {
  const operatorsStack = [];
  const polishNotationArray = tokens.reduce((rpn, token) => {
    if (check.isNumber(token)) {
      return [...rpn, token];
    }
    if (check.isOperator(token)) {
      if (check.isOpenBracket(token)) {
        operatorsStack.push(token);
        return rpn;
      }
      if (check.isClosingBracket(token)) {
        for (let i = operatorsStack.length - 1; i >= 0; i -= 1) {
          if (operatorsStack[i] === '(') {
            operatorsStack.pop();
            return rpn;
          }
          rpn.push(operatorsStack.pop());
        }
        return rpn;
      }
      const headOfStack = operatorsStack[operatorsStack.length - 1];
      if (!headOfStack) {
        operatorsStack.push(token);
        return rpn;
      }
      if (check.isCurrentPriorityLess(token, headOfStack)
        || ((operators[headOfStack].associativity === 'left' && check.isEqualPriorities(token, headOfStack)))
      ) {
        operatorsStack.pop();
        operatorsStack.push(token);
        return [...rpn, headOfStack];
      }
      operatorsStack.push(token);
      return rpn;
    }
    return rpn;
  }, []);
  const resultRpn = [...polishNotationArray, ...operatorsStack.reverse()];
  return resultRpn;
};

export default buildRPN;
