import operators from './operators';
import clearingButtons from '../functions/clearingButtons';

export const isOperator = (symb) => operators.hasOwnProperty(symb);

export const isNumber = (symb) => !Number.isNaN(+symb) && typeof (+symb) === 'number';

export const isClearingBtn = (symb) => clearingButtons.hasOwnProperty(symb);

export const isOpenBracket = (symb) => symb === '(';

export const isClosingBracket = (symb) => symb === ')';

export const isCurrentPriorityLess = (current, headStack) => (
  (operators[current].priority < operators[headStack].priority)
);

export const isEqualPriorities = (current, headStack) => (
  operators[current].priority === operators[headStack].priority
);
