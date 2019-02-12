import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <div>
      <button onClick={props.onClick} className={props.buttonStyle}> {props.text} </button>
    </div>
  );
}

export default ActionButton;