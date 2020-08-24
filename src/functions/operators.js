export default {
  '+': {
    priority: 13,
    operation: (a, b) => a + b,
    associativity: 'left',
  },
  '-': {
    priority: 13,
    operation: (a, b) => a - b,
    associativity: 'left',
  },
  '*': {
    priority: 14,
    operation: (a, b) => a * b,
    associativity: 'left',
  },
  '/': {
    priority: 14,
    operation: (a, b) => a / b,
    associativity: 'left',
  },
  '(' : {
    priority: 0,
    operation: () => null,
    associativity: 'not',
  },
  ')' : {
    priority: 0,
    operation: () => null,
    associativity: 'not',
  }
};
