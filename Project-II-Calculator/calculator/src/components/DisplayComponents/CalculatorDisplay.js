import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return (
      <div className='displayContainer'>
        <div className={props.buttonStyle}> {props.text} </div>
      </div>
  );
}

export default CalculatorDisplay;