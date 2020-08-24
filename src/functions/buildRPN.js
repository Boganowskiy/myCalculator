import { isNumber, isOperator } from './checkValueType';
import operators from './operators';

const buildRPN = (tokens) => {
  const operatorsStack = [];
  const polishNotationArray = tokens.reduce((rpn, token) => {
    if (isNumber(token)) {
      return [...rpn, token];
    } else if (isOperator(token)) {
      if (token === '(') {
        operatorsStack.push(token);
        return rpn;
      }
      if (token === ')') {
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
      if ((operators[token].priority < operators[headOfStack].priority) ||
        ((operators[headOfStack].associativity === 'left' && operators[token].priority === operators[headOfStack].priority))
      ) {
        operatorsStack.pop();
        operatorsStack.push(token);
        return [...rpn, headOfStack];
      } else {
        operatorsStack.push(token);
        return rpn;
      }
    }
    return rpn;
  }, []);
  return [...polishNotationArray, ...operatorsStack.reverse()];
};

export default buildRPN;
