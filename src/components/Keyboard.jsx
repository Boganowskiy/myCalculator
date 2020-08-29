import React from 'react';
import propTypes from 'prop-types';

const buttonsArr = [
  '(', ')', 'BS', '-',
  '7', '8', '9', '+',
  '4', '5', '6', '*',
  '1', '2', '3', '/',
  '0', '.', 'C', '=',
];

const Keyboard = (props) => {
  const { onClickHandle, onEqualBtnClickHandle, calcState } = props;
  return (
    <div className="keyboard">
      {buttonsArr.map((el) => {
        if (el !== '=') {
          return (
            <button
              type="button"
              className="button"
              key={el}
              value={el}
              onTouchStart={onClickHandle}
              onMouseDown={onClickHandle}
              onTouchEnd={(e) => e.preventDefault()}
            >
              {el}
            </button>
          );
        }
        return (
          <button
            type="button"
            className="button equalBtn"
            key={el}
            value={el}
            disabled={calcState === 'result'}
            onTouchStart={onEqualBtnClickHandle}
            onMouseDown={onEqualBtnClickHandle}
            onTouchEnd={(e) => e.preventDefault()}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

Keyboard.propTypes = {
  onEqualBtnClickHandle: propTypes.func.isRequired,
  onClickHandle: propTypes.func.isRequired,
  calcState: propTypes.string.isRequired,
};

export default Keyboard;
