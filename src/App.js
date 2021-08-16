
import { useState } from 'react'
import Button from './Button'
import Resetbutton from './Resetbutton'
import Headline from './Headline'
import Result from './Result'
import './App.css';

function App() {
  const [result, setResult] = useState('');

  function handleClick(event) {
    setResult(result.concat(event.target.name));
  }

  return (
    <div className="container">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keys">
        <button onClick={handleClick}>C</button>
        <button onClick={handleClick}>Clear</button>
        <button name="/" onClick={handleClick}>&divide;</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="*" onClick={handleClick}>&times;</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="-" onClick={handleClick}>&ndash;</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="+" onClick={handleClick}>+</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button onClick={handleClick}>=</button>


      </div>
    </div >


    /* { <Headline>Calculator</Headline>
    <Result>{counter}</Result>
    <Button onButtonClick={() => calculate(Math.floor(Math.random() * (-10)))}>-random</Button>
    <Button onButtonClick={() => calculate(-10)}>-10</Button>
    <Button onButtonClick={() => calculate(-1)}>-1</Button>
    <Button onButtonClick={() => calculate(1)}>+1</Button>
    <Button onButtonClick={() => calculate(10)}>+10</Button>
    <Button onButtonClick={() => calculate(Math.floor(Math.random() * 10))}>+ random</Button>
    <Resetbutton clickToReset={() => reset()}>Reset</Resetbutton>
 
);
} */
  )
}
export default App;
