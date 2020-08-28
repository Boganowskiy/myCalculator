import tokenize from './tokenize';
import buildRPN from './buildRPN';
import calcFromRPN from './calcFromRPN';

export default (string) => {
  try {
    const tokenized = tokenize(string);
    const polishNotationArray = buildRPN(tokenized);
    const result = calcFromRPN(polishNotationArray);
    return result;
  } catch (e) {
    return (e.message);
  }
};
