import operators from './operators';

export const isOperator = (symb) => operators.hasOwnProperty(symb);

export const isNumber = (symb) => !Number.isNaN(+symb) && typeof (+symb) === 'number';
