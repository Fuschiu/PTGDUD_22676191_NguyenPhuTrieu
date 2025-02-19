import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [operator, setOperator] = useState('');

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  function handleClick(){
    if(operator === '+'){
      setResult(parseInt(a) + parseInt(b));
    } else if(operator === '-'){
      setResult(parseInt(a) - parseInt(b));
    } else if(operator === '*'){
      setResult(parseInt(a) * parseInt(b));
    } else if(operator === '/'){
      setResult(parseInt(a) / parseInt(b));
    }
  }

  var name = 'default';
  function handleChangeA(e){
    setA(e.target.value);
  }

  function handleChangeB(e){
    setB(e.target.value);
  }
  function handleChange(e){
    setOperator(e.target.value);
  }

  return (
    <>
    <input placeholder='a' onChange={handleChangeA} type='text' />
    <br/>
    <input placeholder='b' onChange={handleChangeB} type='text' />
    <br/>
    <input value='+' onChange={handleChange} type='radio' name='operator' /><span>+ | </span>
    <input value='-' onChange={handleChange} type='radio' name='operator' /><span>- | </span>
    <input value='*' onChange={handleChange} type='radio' name='operator' /><span>* | </span>
    <input value='/' onChange={handleChange} type='radio' name='operator' /><span>/ </span>
    <br/>
    <button onClick={handleClick}>Calculate</button>
    <br/>
    <span>{result}</span>
    </>
  )
}

export default App
