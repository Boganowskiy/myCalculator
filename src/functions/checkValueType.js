import operators from './operators';
import clearingButtons from './clearingButtons';

export const isOperator = (symb) => Object.prototype.hasOwnProperty.call(operators, symb);

export const isNumber = (symb) => !Number.isNaN(+symb) && typeof (+symb) === 'number';

export const isClearingBtn = (symb) => Object.prototype.hasOwnProperty.call(clearingButtons, symb);

export const isOpenBracket = (symb) => symb === '(';

export const isClosingBracket = (symb) => symb === ')';

export const isCurrentPriorityLess = (current, headStack) => (
  (operators[current].priority < operators[headStack].priority)
);

export const isEqualPriorities = (current, headStack) => (
  operators[current].priority === operators[headStack].priority
);
