import React from 'react';

const buttonsArr = [
  '(', ')', 'BS', '-',
  '7', '8', '9', '+',
  '4', '5', '6', '*',
  '1', '2', '3', '/',
  '0', '.', 'C', '=',
];

const Keyboard = (props) => {
  const { onClickHandle, onEqualBtnClickHandle} = props;
  return (
    <div className="keyboard" >
        {buttonsArr.map((el) => {
          if (el !== '=') {
            return <button className="button" key={el} value={el} onClick={onClickHandle}>{el}</button>
          }
          return <button className="button equalBtn" key={el} value={el} onClick={onEqualBtnClickHandle}>{el}</button>
        })}
    </div>
  );
}

export default Keyboard;
