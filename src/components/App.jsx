import React from 'react';
import Keyboard from './Keyboard';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      calculatorState: 'result',
    }
  }

  render() {
    const { displayValue } = this.state;
    return (
      <div className='board'>
        <input type='text' name='display' id='display' readOnly value={displayValue} />
        <Keyboard />
      </div>
    );
  }
}
