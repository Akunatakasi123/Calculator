import React, { useState } from "react";
import "./calculator.css";
import MathUtils from "./MathUtilis"

function Calculator() {
  const [inputValue, setInputValue] = useState(''); // it Initializes inputValue state with an empty string.
  const [result, setResult] = useState(''); //  Initializes result state with an empty string.

  const handleInput = (e) => {       // Handles button clicks, appending the clicked value to inputValue.
    setInputValue(inputValue + e.target.value); 
  };

  const handleClearAll = () => {    // Clears both inputValue and result states.
    setInputValue('');
    setResult('');

  };

  const handleClearOne = () => {      // Clears both inputValue and result states.
    setInputValue(inputValue.slice(0, -1));
  };


  const handleCalculate = () => {    // Calls MathUtils.equals with inputValue and updates result state.
    try {
      const calculationResult = MathUtils.equals(inputValue);
      setResult(calculationResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{inputValue} = {result}</div>
      <div className="button-grid">
        <button value="7" onClick={handleInput}>7</button>
        <button value="8" onClick={handleInput}>8</button>
        <button value="9" onClick={handleInput}>9</button>
        <button value="/" onClick={handleInput}>/</button>
        <button value="4" onClick={handleInput}>4</button>
        <button value="5" onClick={handleInput}>5</button>
        <button value="6" onClick={handleInput}>6</button>
        <button value="*" onClick={handleInput}>*</button>
        <button value="1" onClick={handleInput}>1</button>
        <button value="2" onClick={handleInput}>2</button>
        <button value="3" onClick={handleInput}>3</button>
        <button value="-" onClick={handleInput}>-</button>
        <button value="0" onClick={handleInput}>0</button>
        <button value="." onClick={handleInput}>.</button>
        <button value="%" onClick={handleInput}>%</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClearOne}>C</button>
        <button value="+" onClick={handleInput}>+</button>
        <button onClick={handleClearAll}>CE</button>
      </div>
    </div>
  );
}

export default Calculator;