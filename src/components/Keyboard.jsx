import React from 'react';

const buttonsArr = [
  '(', ')', 'BC', '-',
  '7', '8', '9', '+',
  '4', '5', '6', '*',
  '1', '2', '3', '/',
  '0', '.', 'C', '=',
];

const Keyboard = (props) => {
  const { onClickHandler } = props;
  return (
    <div className="keyboard" onClick={onClickHandler}>
      {buttonsArr.map((el) => {
        return <button className="button" key={el} name={el}>{el}</button>
      })}
    </div>
  );
}

export default Keyboard;
