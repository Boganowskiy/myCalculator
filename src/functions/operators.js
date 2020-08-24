export default {
  '+': {
    priority: 1,
    operation: (a, b) => a + b,
  },
  '-': {
    priority: 1,
    operation: (a, b) => a - b,
  },
  '*': {
    priority: 2,
    operation: (a, b) => a * b,
  },
  '/': {
    priority: 2,
    operation: (a, b) => a / b,
  },
};
