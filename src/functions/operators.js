export default {
  '+': {
    priority: 13,
    operation: (a, b) => Number((a + b).toFixed(15)),
    associativity: 'left',
    type: 'binary',
  },
  '-': {
    priority: 13,
    operation: (a, b) => Number((a - b).toFixed(15)),
    associativity: 'left',
    type: 'binary',
  },
  '*': {
    priority: 14,
    operation: (a, b) => Number((a * b).toFixed(15)),
    associativity: 'left',
    type: 'binary',
  },
  '/': {
    priority: 14,
    operation: (a, b) => Number((a / b).toFixed(15)),
    associativity: 'left',
    type: 'binary',
  },
  '(': {
    priority: 0,
    operation: () => null,
    associativity: 'not',
    type: 'group',
  },
  ')': {
    priority: 0,
    operation: () => null,
    associativity: 'not',
    type: 'group',
  },
  'un-': {
    priority: 0,
    operation: (_a, b) => 0 - b,
    associativity: 'right',
    type: 'unary',
  },
};
