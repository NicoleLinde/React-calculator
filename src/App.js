
import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [previousValue, setPreviousvalue] = useState(0);
  const [nextValue, setNextValue] = useState('');
  const [operator, setOperator] = useState(null);

  useEffect(() => { }, [operator, nextValue, previousValue]);

  const operatorSigns = ['+', '-', '*', '/', '=']

  function handleClick(event) {
    console.log(event);
    if (Number.isInteger(parseInt(event.target.name))) {
      handleNumber(parseInt(event.target.name, 10))
      console.log('Name:' + event.target.name)
    }
    else if (operatorSigns.includes(event.target.name)) {
      if (operator === null) {
        setOperator(event.target.name);
        setPreviousvalue(nextValue);
        setNextValue('');
      }
      if (operator) {
        setOperator(event.target.name);
      }
      if (previousValue && operator && nextValue) {
        performOperation();
      }
    } else if (event.target.name === 'C') {
      backspace();
    } else if (event.target.name === 'Clear') {
      clear();
    }
  }

  function handleNumber(number) {
    setNextValue(nextValue === '0' ? String(number) : nextValue + number);
  }

  function performOperation() {
    let temp;
    if (operator === '+') {
      temp = previousValue + nextValue
    } else if (operator === '-') {
      temp = previousValue - nextValue
    } else if (operator === '*') {
      temp = previousValue * nextValue
    } else if (operator === '/') {
      temp = previousValue / nextValue
    }
    console.log(typeof (previousValue));
    console.log(typeof (nextValue));
    setOperator(null);
    setNextValue(temp);
    setPreviousvalue(null);
  }

  function clear() {
    console.log('Clear')
    setNextValue('0');
    setPreviousvalue(0);
  }

  function backspace() {
    setNextValue(nextValue.slice(0, nextValue.length - 1));
  }

  return (
    <div className="container">
      <form>
        <input type="text" value={nextValue} />
      </form>
      <div className="keys">
        <button name='Clear' className="highlight" onClick={handleClick} id="clear">Clear</button>
        <button name='C' className="highlight" onClick={handleClick} id="backspace">C</button>
        <button className="highlight" name="/" onClick={handleClick}>&divide;</button>
        <button name='7' onClick={handleClick}>7</button>
        <button name='8' onClick={handleClick}>8</button>
        <button name='9' onClick={handleClick}>9</button>
        <button className="highlight" name="*" onClick={handleClick}>&times;</button>
        <button name='4' onClick={handleClick}>4</button>
        <button name='5' onClick={handleClick}>5</button>
        <button name='6' onClick={handleClick}>6</button>
        <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
        <button name='1' onClick={handleClick}>1</button>
        <button name='2' onClick={handleClick}>2</button>
        <button name='3' onClick={handleClick}>3</button>
        <button className="highlight" name="+" onClick={handleClick}>+</button>
        <button name='0' onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button name="=" className="highlight" onClick={handleClick} id="result">=</button>


      </div>
    </div >

  )
}
export default App;
