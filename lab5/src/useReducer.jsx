import { useReducer, useState, useEffect } from 'react';
import './App.css'
// Định nghĩa các hành động
const ACTIONS = {
  ADD: 'add',
  SUBTRACT: 'subtract',
  MULTIPLY: 'multiply',
  DIVIDE: 'divide',
  RESET: 'reset'
};

// Định nghĩa reducer
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return { result: action.payload.num1 + action.payload.num2 };
    case ACTIONS.SUBTRACT:
      return { result: action.payload.num1 - action.payload.num2 };
    case ACTIONS.MULTIPLY:
      return { result: action.payload.num1 * action.payload.num2 };
    case ACTIONS.DIVIDE:
      return { result: action.payload.num1 / action.payload.num2 };
    case ACTIONS.RESET:
      return { result: 0 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { result: 0 });
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    if (state.result === 0) {
      setNum1(0);
      setNum2(0);
    }
  }, [state.result]);

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
        <button onClick={() => dispatch({ type: ACTIONS.ADD, payload: { num1, num2 } })}>
          +
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.SUBTRACT, payload: { num1, num2 } })}>
          -
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.MULTIPLY, payload: { num1, num2 } })}>
          *
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.DIVIDE, payload: { num1, num2 } })}>
          /
        </button>
        <br />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          placeholder="Enter second number"
        />
        <br />
        <p>
          Result is {state.result}
        </p>

        <button onClick={() => dispatch({ type: ACTIONS.RESET })}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;