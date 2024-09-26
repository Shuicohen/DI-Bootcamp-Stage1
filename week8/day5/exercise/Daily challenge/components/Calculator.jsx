import React, { useState } from 'react';
import '../App.css';

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const handleCalculation = () => {
    let res;
    switch (operation) {
      case 'add':
        res = parseFloat(num1) + parseFloat(num2);
        break;
      case 'subtract':
        res = parseFloat(num1) - parseFloat(num2);
        break;
      case 'multiply':
        res = parseFloat(num1) * parseFloat(num2);
        break;
      case 'divide':
        res = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>
      <div className="input-section">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
      </div>
      <div className="select-section">
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="add">Addition</option>
          <option value="subtract">Subtraction</option>
          <option value="multiply">Multiplication</option>
          <option value="divide">Division</option>
        </select>
      </div>
      <button onClick={handleCalculation} className="calculate-btn">Calculate</button>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
}

export default Calculator;
