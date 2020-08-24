import operators from './operators';
import clearingButtons from '../functions/clearingButtons';

export const isOperator = (symb) => operators.hasOwnProperty(symb);

export const isNumber = (symb) => !Number.isNaN(+symb) && typeof (+symb) === 'number';

export const isClearingBtn = (symb) => clearingButtons.hasOwnProperty(symb);
