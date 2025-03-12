import React, { useState, useMemo } from 'react';
import './App.css';

function calculateResult(num1, num2, operation) {
  console.log('Calculating result...');
  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      return num1 / num2;
    default:
      return 0;
  }
}

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('add');
  const [showResult, setShowResult] = useState(false);

  const result = useMemo(() => {
    return calculateResult(num1, num2, operation);
  }, [num1, num2, operation]);

  const handleReset = () => {
    setNum1(0);
    setNum2(0);
    setOperation('add');
    setShowResult(false);
  };

  console.log('Rendering component...');

  return (
    <>
      <div className="card">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          placeholder="Enter first number"
        />
        <br />
        <button onClick={() => setOperation('add')}>+</button>
        <button onClick={() => setOperation('subtract')}>-</button>
        <button onClick={() => setOperation('multiply')}>*</button>
        <button onClick={() => setOperation('divide')}>/</button>
        <br />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          placeholder="Enter second number"
        />
        <br />
        <button onClick={() => setShowResult(true)}>Calculate</button>
        {showResult && <p>Result is {result}</p>}
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;