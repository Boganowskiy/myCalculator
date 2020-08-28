import React from 'react';
import Keyboard from './Keyboard';
import '../style/styles.css';
import { isNumber, isClearingBtn } from '../functions/checkValueType';
import clearingButtons from '../functions/clearingButtons';
import calcResultValue from '../functions/calcResultValue';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      calculatorState: 'result',
    };
  }

  onClickHandle = (e) => {
    e.preventDefault();
    const { displayValue, calculatorState } = this.state;
    const { value } = e.target;
    const newState = {
      displayValue: `${displayValue}${value}`,
    };

    if (calculatorState === 'result') {
      if (isNumber(value)) {
        newState.displayValue = value;
      }
    }
    if (isClearingBtn(value)) {
      newState.displayValue = clearingButtons[value].operation(displayValue);
    }

    this.setState({
      displayValue: newState.displayValue,
      calculatorState: 'typing',
    });
  }

  onEqualBtnClickHandle = (e) => {
    e.preventDefault();
    const { displayValue } = this.state;
    const result = calcResultValue(displayValue);
    this.setState({
      displayValue: result,
      calculatorState: 'result',
    });
  }

  render() {
    const { displayValue } = this.state;
    return (
      <div className="board">
        <input type="text" name="display" id="display" readOnly value={displayValue} />
        <Keyboard
          onClickHandle={this.onClickHandle}
          onEqualBtnClickHandle={this.onEqualBtnClickHandle}
        />
      </div>
    );
  }
}
