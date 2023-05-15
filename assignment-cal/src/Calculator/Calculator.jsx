import React, { useState } from "react";
import "./calculator.css";
const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('');
  };
  return (
    <div className="calculator-first-container-head">
      <div className="calculator-display-result">{display}</div>
      <div className="calculator-main-container">
      <button onClick={clear}>C</button>
      <button onClick={() => handleClick('+/-')}>+/-</button>
      <button onClick={() => handleClick('%')}>%</button>
      <button onClick={() => handleClick('/')} >÷</button>
      <button onClick={() => handleClick('7')} >7</button>
      <button onClick={() => handleClick('8')}>8</button>
      <button onClick={() => handleClick('9')}>9</button>
      <button onClick={() => handleClick('*')} >×</button>
      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button onClick={() => handleClick('-')} >-</button>
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={() => handleClick('+')} name="+">+</button>
      <button style={{width:"150PX",height:"70px",marginLeft:"10px", borderRadius:"80px",textAlign:""}} onClick={() => handleClick('0')}>0</button>
      <button style={{marginLeft:"100px"}} onClick={() => handleClick('.')}>.</button>
      <button style={{marginLeft:"95px"}} onClick={calculate}>=</button>
      </div>
      <div className="calculator-inner"></div>
    </div>
  );
};

export default Calculator;
